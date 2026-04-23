"use strict";
function i(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: r, LeftOperand: l, RightOperand: s } = e;
    if (null == i) return !0;
    let a = t[i];
    if (null == a || "" === a) return !1;
    let o = r?.match(/SelectableChoice\/(\d+)/),
        c = o?.[1];
    switch (n) {
        case "Selected":
            return null != c && a.split(",").includes(c);
        case "NotSelected":
            return null != c && !a.split(",").includes(c);
        case "EqualTo":
            return a === (s ?? l);
        case "NotEqualTo":
            return a !== (s ?? l);
        case "GreaterThan":
            return Number(a) > Number(s ?? l ?? 0);
        case "LessThan":
            return Number(a) < Number(s ?? l ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(a) >= Number(s ?? l ?? 0);
        case "LessThanOrEqualTo":
            return Number(a) <= Number(s ?? l ?? 0);
        case "Contains":
            return a.includes(s ?? l ?? "");
        case "DoesNotContain":
            return !a.includes(s ?? l ?? "");
        default:
            return !0;
    }
}
function r(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function l(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
function s(e) {
    for (let t of r(e)) {
        let n = l(e.Blocks[t]);
        if (n.length > 0 && n[0].length > 0) return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
function a(e, t) {
    let { blockId: n, pageIndex: r, responses: s } = t,
        a = e.Blocks[n];
    if (null == a) return [];
    let o = l(a);
    return r >= o.length
        ? []
        : o[r].filter((t) =>
              (function (e, t) {
                  if (null == e.DisplayLogic) return !0;
                  let { DisplayLogic: n } = e;
                  for (let e in n)
                      if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                          let r = n[e];
                          if ("If" === r.Type || "ElseIf" === r.Type) {
                              if (
                                  (function (e, t) {
                                      let n = [];
                                      for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
                                      if (0 === n.length) return !0;
                                      let r = i(n[0], t);
                                      for (let e = 1; e < n.length; e++) {
                                          let l = n[e],
                                              s = i(l, t);
                                          r = "Or" === (l.Conjuction ?? l.Conjunction ?? "And") ? r || s : r && s;
                                      }
                                      return r;
                                  })(r, t)
                              )
                                  return !0;
                          } else if ("Else" === r.Type) return !0;
                      }
                  return !1;
              })(e.Questions[t], s),
          );
}
function o(e, t) {
    let { blockId: n, pageIndex: i, responses: s } = t,
        a = r(e),
        o = e.Blocks[n];
    if (null == o) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
    let c = l(o),
        u = c[i];
    if (null != u && u.length > 0)
        for (let t = u.length - 1; t >= 0; t--) {
            let n = u[t];
            if (null != e.Questions[n] && null != s[n]) {
                let t = o.BlockElements.find((e) => e.QuestionID === n);
                if (null != t) {
                    let n = (function (e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let n of e.SkipLogic) {
                            let { QuestionID: e, Condition: i, Value: r, SkipToDestination: l, ChoiceLocator: s } = n,
                                a = t[e];
                            if (null == a || "" === a) continue;
                            let o = s?.match(/SelectableChoice\/(\d+)/),
                                c = o?.[1],
                                u = !1;
                            switch (i) {
                                case "Selected":
                                    u = null != c && a.split(",").includes(c);
                                    break;
                                case "NotSelected":
                                    u = null != c && !a.split(",").includes(c);
                                    break;
                                case "EqualTo":
                                    u = a === r?.toString();
                                    break;
                                case "NotEqualTo":
                                    u = a !== r?.toString();
                                    break;
                                case "GreaterThan":
                                    u = Number(a) > Number(r ?? 0);
                                    break;
                                case "LessThan":
                                    u = Number(a) < Number(r ?? 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    u = Number(a) >= Number(r ?? 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    u = Number(a) <= Number(r ?? 0);
                                    break;
                                case "Contains":
                                    u = a.includes(r?.toString() ?? "");
                                    break;
                                case "DoesNotContain":
                                    u = !a.includes(r?.toString() ?? "");
                            }
                            if (u) {
                                if ("ENDOFSURVEY" === l?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return l;
                            }
                        }
                        return null;
                    })(t, s);
                    if ("ENDOFSURVEY" === n) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                    if (null != n)
                        for (let t of a) {
                            let i = l(e.Blocks[t]);
                            for (let e = 0; e < i.length; e++)
                                if (i[e].includes(n))
                                    return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                        }
                }
            }
        }
    if (i + 1 < c.length) return { blockId: n, pageIndex: i + 1, questionIds: c[i + 1], isComplete: !1 };
    let d = a.indexOf(n);
    for (let t = d + 1; t < a.length; t++) {
        let n = a[t],
            i = l(e.Blocks[n]);
        if (i.length > 0 && i[0].length > 0) return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
n.d(t, { i: () => s, uy: () => a, vt: () => o }), n(321073);
