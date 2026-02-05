function i(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: l, LeftOperand: a, RightOperand: r } = e;
    if (null == i) return !0;
    let s = t[i];
    if (null == s || "" === s) return !1;
    let o = l?.match(/SelectableChoice\/(\d+)/),
        d = o?.[1];
    switch (n) {
        case "Selected":
            return null != d && s.split(",").includes(d);
        case "NotSelected":
            return null != d && !s.split(",").includes(d);
        case "EqualTo":
            return s === (r ?? a);
        case "NotEqualTo":
            return s !== (r ?? a);
        case "GreaterThan":
            return Number(s) > Number(r ?? a ?? 0);
        case "LessThan":
            return Number(s) < Number(r ?? a ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(s) >= Number(r ?? a ?? 0);
        case "LessThanOrEqualTo":
            return Number(s) <= Number(r ?? a ?? 0);
        case "Contains":
            return s.includes(r ?? a ?? "");
        case "DoesNotContain":
            return !s.includes(r ?? a ?? "");
        default:
            return !0;
    }
}
function l(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function a(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
function r(e) {
    for (let t of l(e)) {
        let n = a(e.Blocks[t]);
        if (n.length > 0 && n[0].length > 0) return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
function s(e, t) {
    let { blockId: n, pageIndex: l, responses: r } = t,
        s = e.Blocks[n];
    if (null == s) return [];
    let o = a(s);
    return l >= o.length
        ? []
        : o[l].filter((t) =>
              (function (e, t) {
                  if (null == e.DisplayLogic) return !0;
                  let { DisplayLogic: n } = e;
                  for (let e in n)
                      if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                          let l = n[e];
                          if ("If" === l.Type || "ElseIf" === l.Type) {
                              if (
                                  (function (e, t) {
                                      let n = [];
                                      for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
                                      if (0 === n.length) return !0;
                                      let l = i(n[0], t);
                                      for (let e = 1; e < n.length; e++) {
                                          let a = n[e],
                                              r = i(a, t);
                                          l = "Or" === (a.Conjuction ?? a.Conjunction ?? "And") ? l || r : l && r;
                                      }
                                      return l;
                                  })(l, t)
                              )
                                  return !0;
                          } else if ("Else" === l.Type) return !0;
                      }
                  return !1;
              })(e.Questions[t], r),
          );
}
function o(e, t) {
    let { blockId: n, pageIndex: i, responses: r } = t,
        s = l(e),
        o = e.Blocks[n];
    if (null == o) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
    let d = a(o),
        c = d[i];
    if (null != c && c.length > 0)
        for (let t = c.length - 1; t >= 0; t--) {
            let n = c[t];
            if (null != e.Questions[n] && null != r[n]) {
                let t = o.BlockElements.find((e) => e.QuestionID === n);
                if (null != t) {
                    let n = (function (e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let n of e.SkipLogic) {
                            let { QuestionID: e, Condition: i, Value: l, SkipToDestination: a, ChoiceLocator: r } = n,
                                s = t[e];
                            if (null == s || "" === s) continue;
                            let o = r?.match(/SelectableChoice\/(\d+)/),
                                d = o?.[1],
                                c = !1;
                            switch (i) {
                                case "Selected":
                                    c = null != d && s.split(",").includes(d);
                                    break;
                                case "NotSelected":
                                    c = null != d && !s.split(",").includes(d);
                                    break;
                                case "EqualTo":
                                    c = s === l?.toString();
                                    break;
                                case "NotEqualTo":
                                    c = s !== l?.toString();
                                    break;
                                case "GreaterThan":
                                    c = Number(s) > Number(l ?? 0);
                                    break;
                                case "LessThan":
                                    c = Number(s) < Number(l ?? 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    c = Number(s) >= Number(l ?? 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    c = Number(s) <= Number(l ?? 0);
                                    break;
                                case "Contains":
                                    c = s.includes(l?.toString() ?? "");
                                    break;
                                case "DoesNotContain":
                                    c = !s.includes(l?.toString() ?? "");
                            }
                            if (c) {
                                if ("ENDOFSURVEY" === a?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return a;
                            }
                        }
                        return null;
                    })(t, r);
                    if ("ENDOFSURVEY" === n) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                    if (null != n)
                        for (let t of s) {
                            let i = a(e.Blocks[t]);
                            for (let e = 0; e < i.length; e++)
                                if (i[e].includes(n))
                                    return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                        }
                }
            }
        }
    if (i + 1 < d.length) return { blockId: n, pageIndex: i + 1, questionIds: d[i + 1], isComplete: !1 };
    let u = s.indexOf(n);
    for (let t = u + 1; t < s.length; t++) {
        let n = s[t],
            i = a(e.Blocks[n]);
        if (i.length > 0 && i[0].length > 0) return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
n.d(t, { i: () => r, uy: () => s, vt: () => o }), n(321073);
