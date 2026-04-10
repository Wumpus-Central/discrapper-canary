"use strict";
function i(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: r, LeftOperand: s, RightOperand: l } = e;
    if (null == i) return !0;
    let a = t[i];
    if (null == a || "" === a) return !1;
    let c = r?.match(/SelectableChoice\/(\d+)/),
        o = c?.[1];
    switch (n) {
        case "Selected":
            return null != o && a.split(",").includes(o);
        case "NotSelected":
            return null != o && !a.split(",").includes(o);
        case "EqualTo":
            return a === (l ?? s);
        case "NotEqualTo":
            return a !== (l ?? s);
        case "GreaterThan":
            return Number(a) > Number(l ?? s ?? 0);
        case "LessThan":
            return Number(a) < Number(l ?? s ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(a) >= Number(l ?? s ?? 0);
        case "LessThanOrEqualTo":
            return Number(a) <= Number(l ?? s ?? 0);
        case "Contains":
            return a.includes(l ?? s ?? "");
        case "DoesNotContain":
            return !a.includes(l ?? s ?? "");
        default:
            return !0;
    }
}
function r(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function s(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
function l(e) {
    for (let t of r(e)) {
        let n = s(e.Blocks[t]);
        if (n.length > 0 && n[0].length > 0) return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
function a(e, t) {
    let { blockId: n, pageIndex: r, responses: l } = t,
        a = e.Blocks[n];
    if (null == a) return [];
    let c = s(a);
    return r >= c.length
        ? []
        : c[r].filter((t) =>
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
                                          let s = n[e],
                                              l = i(s, t);
                                          r = "Or" === (s.Conjuction ?? s.Conjunction ?? "And") ? r || l : r && l;
                                      }
                                      return r;
                                  })(r, t)
                              )
                                  return !0;
                          } else if ("Else" === r.Type) return !0;
                      }
                  return !1;
              })(e.Questions[t], l),
          );
}
function c(e, t) {
    let { blockId: n, pageIndex: i, responses: l } = t,
        a = r(e),
        c = e.Blocks[n];
    if (null == c) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
    let o = s(c),
        u = o[i];
    if (null != u && u.length > 0)
        for (let t = u.length - 1; t >= 0; t--) {
            let n = u[t];
            if (null != e.Questions[n] && null != l[n]) {
                let t = c.BlockElements.find((e) => e.QuestionID === n);
                if (null != t) {
                    let n = (function (e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let n of e.SkipLogic) {
                            let { QuestionID: e, Condition: i, Value: r, SkipToDestination: s, ChoiceLocator: l } = n,
                                a = t[e];
                            if (null == a || "" === a) continue;
                            let c = l?.match(/SelectableChoice\/(\d+)/),
                                o = c?.[1],
                                u = !1;
                            switch (i) {
                                case "Selected":
                                    u = null != o && a.split(",").includes(o);
                                    break;
                                case "NotSelected":
                                    u = null != o && !a.split(",").includes(o);
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
                                if ("ENDOFSURVEY" === s?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return s;
                            }
                        }
                        return null;
                    })(t, l);
                    if ("ENDOFSURVEY" === n) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                    if (null != n)
                        for (let t of a) {
                            let i = s(e.Blocks[t]);
                            for (let e = 0; e < i.length; e++)
                                if (i[e].includes(n))
                                    return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                        }
                }
            }
        }
    if (i + 1 < o.length) return { blockId: n, pageIndex: i + 1, questionIds: o[i + 1], isComplete: !1 };
    let d = a.indexOf(n);
    for (let t = d + 1; t < a.length; t++) {
        let n = a[t],
            i = s(e.Blocks[n]);
        if (i.length > 0 && i[0].length > 0) return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
n.d(t, { i: () => l, uy: () => a, vt: () => c }), n(321073);
