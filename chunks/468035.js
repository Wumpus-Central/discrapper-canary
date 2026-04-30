function n(e, t) {
    let { Operator: l, QuestionID: n, ChoiceLocator: i, LeftOperand: r, RightOperand: s } = e;
    if (null == n) return !0;
    let a = t[n];
    if (null == a || "" === a) return !1;
    let u = i?.match(/SelectableChoice\/(\d+)/),
        o = u?.[1];
    switch (l) {
        case "Selected":
            return null != o && a.split(",").includes(o);
        case "NotSelected":
            return null != o && !a.split(",").includes(o);
        case "EqualTo":
            return a === (s ?? r);
        case "NotEqualTo":
            return a !== (s ?? r);
        case "GreaterThan":
            return Number(a) > Number(s ?? r ?? 0);
        case "LessThan":
            return Number(a) < Number(s ?? r ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(a) >= Number(s ?? r ?? 0);
        case "LessThanOrEqualTo":
            return Number(a) <= Number(s ?? r ?? 0);
        case "Contains":
            return a.includes(s ?? r ?? "");
        case "DoesNotContain":
            return !a.includes(s ?? r ?? "");
        default:
            return !0;
    }
}
function i(e) {
    let t = [];
    for (let l of e.SurveyFlow.Flow) ("Block" === l.Type || "Standard" === l.Type) && null != l.ID && t.push(l.ID);
    return t;
}
function r(e) {
    let t = [],
        l = [];
    for (let n of e.BlockElements)
        "Page Break" === n.Type
            ? l.length > 0 && (t.push(l), (l = []))
            : "Question" === n.Type && null != n.QuestionID && l.push(n.QuestionID);
    return l.length > 0 && t.push(l), t;
}
function s(e) {
    for (let t of i(e)) {
        let l = r(e.Blocks[t]);
        if (l.length > 0 && l[0].length > 0) return { blockId: t, pageIndex: 0, questionIds: l[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
function a(e, t) {
    let { blockId: l, pageIndex: i, responses: s } = t,
        a = e.Blocks[l];
    if (null == a) return [];
    let u = r(a);
    return i >= u.length
        ? []
        : u[i].filter((t) =>
              (function (e, t) {
                  if (null == e.DisplayLogic) return !0;
                  let { DisplayLogic: l } = e;
                  for (let e in l)
                      if ("Type" !== e && "inPage" !== e && "object" == typeof l[e]) {
                          let i = l[e];
                          if ("If" === i.Type || "ElseIf" === i.Type) {
                              if (
                                  (function (e, t) {
                                      let l = [];
                                      for (let t in e) "Type" !== t && "object" == typeof e[t] && l.push(e[t]);
                                      if (0 === l.length) return !0;
                                      let i = n(l[0], t);
                                      for (let e = 1; e < l.length; e++) {
                                          let r = l[e],
                                              s = n(r, t);
                                          i = "Or" === (r.Conjuction ?? r.Conjunction ?? "And") ? i || s : i && s;
                                      }
                                      return i;
                                  })(i, t)
                              )
                                  return !0;
                          } else if ("Else" === i.Type) return !0;
                      }
                  return !1;
              })(e.Questions[t], s),
          );
}
function u(e, t) {
    let { blockId: l, pageIndex: n, responses: s } = t,
        a = i(e),
        u = e.Blocks[l];
    if (null == u) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
    let o = r(u),
        c = o[n];
    if (null != c && c.length > 0)
        for (let t = c.length - 1; t >= 0; t--) {
            let l = c[t];
            if (null != e.Questions[l] && null != s[l]) {
                let t = u.BlockElements.find((e) => e.QuestionID === l);
                if (null != t) {
                    let l = (function (e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let l of e.SkipLogic) {
                            let { QuestionID: e, Condition: n, Value: i, SkipToDestination: r, ChoiceLocator: s } = l,
                                a = t[e];
                            if (null == a || "" === a) continue;
                            let u = s?.match(/SelectableChoice\/(\d+)/),
                                o = u?.[1],
                                c = !1;
                            switch (n) {
                                case "Selected":
                                    c = null != o && a.split(",").includes(o);
                                    break;
                                case "NotSelected":
                                    c = null != o && !a.split(",").includes(o);
                                    break;
                                case "EqualTo":
                                    c = a === i?.toString();
                                    break;
                                case "NotEqualTo":
                                    c = a !== i?.toString();
                                    break;
                                case "GreaterThan":
                                    c = Number(a) > Number(i ?? 0);
                                    break;
                                case "LessThan":
                                    c = Number(a) < Number(i ?? 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    c = Number(a) >= Number(i ?? 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    c = Number(a) <= Number(i ?? 0);
                                    break;
                                case "Contains":
                                    c = a.includes(i?.toString() ?? "");
                                    break;
                                case "DoesNotContain":
                                    c = !a.includes(i?.toString() ?? "");
                            }
                            if (c) {
                                if ("ENDOFSURVEY" === r?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return r;
                            }
                        }
                        return null;
                    })(t, s);
                    if ("ENDOFSURVEY" === l) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                    if (null != l)
                        for (let t of a) {
                            let n = r(e.Blocks[t]);
                            for (let e = 0; e < n.length; e++)
                                if (n[e].includes(l))
                                    return { blockId: t, pageIndex: e, questionIds: n[e], isComplete: !1 };
                        }
                }
            }
        }
    if (n + 1 < o.length) return { blockId: l, pageIndex: n + 1, questionIds: o[n + 1], isComplete: !1 };
    let d = a.indexOf(l);
    for (let t = d + 1; t < a.length; t++) {
        let l = a[t],
            n = r(e.Blocks[l]);
        if (n.length > 0 && n[0].length > 0) return { blockId: l, pageIndex: 0, questionIds: n[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
l.d(t, { i: () => s, uy: () => a, vt: () => u }), l(321073);
