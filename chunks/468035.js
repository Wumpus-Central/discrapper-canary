function i(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: l, LeftOperand: r, RightOperand: a } = e;
    if (null == i) return !0;
    let o = t[i];
    if (null == o || "" === o) return !1;
    let s = l?.match(/SelectableChoice\/(\d+)/),
        u = s?.[1];
    switch (n) {
        case "Selected":
            return null != u && o.split(",").includes(u);
        case "NotSelected":
            return null != u && !o.split(",").includes(u);
        case "EqualTo":
            return o === (a ?? r);
        case "NotEqualTo":
            return o !== (a ?? r);
        case "GreaterThan":
            return Number(o) > Number(a ?? r ?? 0);
        case "LessThan":
            return Number(o) < Number(a ?? r ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(o) >= Number(a ?? r ?? 0);
        case "LessThanOrEqualTo":
            return Number(o) <= Number(a ?? r ?? 0);
        case "Contains":
            return o.includes(a ?? r ?? "");
        case "DoesNotContain":
            return !o.includes(a ?? r ?? "");
        default:
            return !0;
    }
}
function l(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function r(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
function a(e) {
    for (let t of l(e)) {
        let n = r(e.Blocks[t]);
        if (n.length > 0 && n[0].length > 0) return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
function o(e, t) {
    let { blockId: n, pageIndex: l, responses: a } = t,
        o = e.Blocks[n];
    if (null == o) return [];
    let s = r(o);
    return l >= s.length
        ? []
        : s[l].filter((t) =>
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
                                          let r = n[e],
                                              a = i(r, t);
                                          l = "Or" === (r.Conjuction ?? r.Conjunction ?? "And") ? l || a : l && a;
                                      }
                                      return l;
                                  })(l, t)
                              )
                                  return !0;
                          } else if ("Else" === l.Type) return !0;
                      }
                  return !1;
              })(e.Questions[t], a),
          );
}
function s(e, t) {
    let { blockId: n, pageIndex: i, responses: a } = t,
        o = l(e),
        s = e.Blocks[n];
    if (null == s) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
    let u = r(s),
        d = u[i];
    if (null != d && d.length > 0)
        for (let t = d.length - 1; t >= 0; t--) {
            let n = d[t];
            if (null != e.Questions[n] && null != a[n]) {
                let t = s.BlockElements.find((e) => e.QuestionID === n);
                if (null != t) {
                    let n = (function (e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let n of e.SkipLogic) {
                            let { QuestionID: e, Condition: i, Value: l, SkipToDestination: r, ChoiceLocator: a } = n,
                                o = t[e];
                            if (null == o || "" === o) continue;
                            let s = a?.match(/SelectableChoice\/(\d+)/),
                                u = s?.[1],
                                d = !1;
                            switch (i) {
                                case "Selected":
                                    d = null != u && o.split(",").includes(u);
                                    break;
                                case "NotSelected":
                                    d = null != u && !o.split(",").includes(u);
                                    break;
                                case "EqualTo":
                                    d = o === l?.toString();
                                    break;
                                case "NotEqualTo":
                                    d = o !== l?.toString();
                                    break;
                                case "GreaterThan":
                                    d = Number(o) > Number(l ?? 0);
                                    break;
                                case "LessThan":
                                    d = Number(o) < Number(l ?? 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    d = Number(o) >= Number(l ?? 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    d = Number(o) <= Number(l ?? 0);
                                    break;
                                case "Contains":
                                    d = o.includes(l?.toString() ?? "");
                                    break;
                                case "DoesNotContain":
                                    d = !o.includes(l?.toString() ?? "");
                            }
                            if (d) {
                                if ("ENDOFSURVEY" === r?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return r;
                            }
                        }
                        return null;
                    })(t, a);
                    if ("ENDOFSURVEY" === n) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                    if (null != n)
                        for (let t of o) {
                            let i = r(e.Blocks[t]);
                            for (let e = 0; e < i.length; e++)
                                if (i[e].includes(n))
                                    return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                        }
                }
            }
        }
    if (i + 1 < u.length) return { blockId: n, pageIndex: i + 1, questionIds: u[i + 1], isComplete: !1 };
    let c = o.indexOf(n);
    for (let t = c + 1; t < o.length; t++) {
        let n = o[t],
            i = r(e.Blocks[n]);
        if (i.length > 0 && i[0].length > 0) return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
    }
    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
}
n.d(t, { i: () => a, uy: () => o, vt: () => s }), n(321073);
