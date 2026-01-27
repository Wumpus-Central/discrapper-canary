function r(e, t) {
    var n, r, i, l, a, s;
    let { Operator: o, QuestionID: c, ChoiceLocator: u, LeftOperand: d, RightOperand: p } = e;
    if (null == c) return !0;
    let m = t[c];
    if (null == m || "" === m) return !1;
    let f = null == u ? void 0 : u.match(/SelectableChoice\/(\d+)/),
        g = null == f ? void 0 : f[1];
    switch (o) {
        case "Selected":
            return null != g && m.split(",").includes(g);
        case "NotSelected":
            return null != g && !m.split(",").includes(g);
        case "EqualTo":
            return m === (null != p ? p : d);
        case "NotEqualTo":
            return m !== (null != p ? p : d);
        case "GreaterThan":
            return Number(m) > Number(null != (n = null != p ? p : d) ? n : 0);
        case "LessThan":
            return Number(m) < Number(null != (r = null != p ? p : d) ? r : 0);
        case "GreaterThanOrEqualTo":
            return Number(m) >= Number(null != (i = null != p ? p : d) ? i : 0);
        case "LessThanOrEqualTo":
            return Number(m) <= Number(null != (l = null != p ? p : d) ? l : 0);
        case "Contains":
            return m.includes(null != (a = null != p ? p : d) ? a : "");
        case "DoesNotContain":
            return !m.includes(null != (s = null != p ? p : d) ? s : "");
        default:
            return !0;
    }
}

function i(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}

function l(e) {
    let t = [],
        n = [];
    for (let r of e.BlockElements)
        "Page Break" === r.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === r.Type && null != r.QuestionID && n.push(r.QuestionID);
    return n.length > 0 && t.push(n), t;
}

function a(e) {
    for (let t of i(e)) {
        let n = l(e.Blocks[t]);
        if (n.length > 0 && n[0].length > 0)
            return {
                blockId: t,
                pageIndex: 0,
                questionIds: n[0],
                isComplete: !1,
            };
    }
    return {
        blockId: null,
        pageIndex: 0,
        questionIds: [],
        isComplete: !0,
    };
}

function s(e, t) {
    let { blockId: n, pageIndex: i, responses: a } = t,
        s = e.Blocks[n];
    if (null == s) return [];
    let o = l(s);
    return i >= o.length
        ? []
        : o[i].filter((t) =>
              (function (e, t) {
                  if (null == e.DisplayLogic) return !0;
                  let { DisplayLogic: n } = e;
                  for (let e in n)
                      if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                          let i = n[e];
                          if ("If" === i.Type || "ElseIf" === i.Type) {
                              if (
                                  (function (e, t) {
                                      let n = [];
                                      for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
                                      if (0 === n.length) return !0;
                                      let i = r(n[0], t);
                                      for (let e = 1; e < n.length; e++) {
                                          var l, a;
                                          let s = n[e],
                                              o = r(s, t);
                                          i =
                                              "Or" ===
                                              (null != (l = null != (a = s.Conjuction) ? a : s.Conjunction) ? l : "And")
                                                  ? i || o
                                                  : i && o;
                                      }
                                      return i;
                                  })(i, t)
                              )
                                  return !0;
                          } else if ("Else" === i.Type) return !0;
                      }
                  return !1;
              })(e.Questions[t], a),
          );
}

function o(e, t) {
    let { blockId: n, pageIndex: r, responses: a } = t,
        s = i(e),
        o = e.Blocks[n];
    if (null == o)
        return {
            blockId: null,
            pageIndex: 0,
            questionIds: [],
            isComplete: !0,
        };
    let c = l(o),
        u = c[r];
    if (null != u && u.length > 0)
        for (let t = u.length - 1; t >= 0; t--) {
            let n = u[t];
            if (null != e.Questions[n] && null != a[n]) {
                let t = o.BlockElements.find((e) => e.QuestionID === n);
                if (null != t) {
                    let n = (function (e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let i of e.SkipLogic) {
                            var n, r;
                            let { QuestionID: e, Condition: l, Value: a, SkipToDestination: s, ChoiceLocator: o } = i,
                                c = t[e];
                            if (null == c || "" === c) continue;
                            let u = null == o ? void 0 : o.match(/SelectableChoice\/(\d+)/),
                                d = null == u ? void 0 : u[1],
                                p = !1;
                            switch (l) {
                                case "Selected":
                                    p = null != d && c.split(",").includes(d);
                                    break;
                                case "NotSelected":
                                    p = null != d && !c.split(",").includes(d);
                                    break;
                                case "EqualTo":
                                    p = c === (null == a ? void 0 : a.toString());
                                    break;
                                case "NotEqualTo":
                                    p = c !== (null == a ? void 0 : a.toString());
                                    break;
                                case "GreaterThan":
                                    p = Number(c) > Number(null != a ? a : 0);
                                    break;
                                case "LessThan":
                                    p = Number(c) < Number(null != a ? a : 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    p = Number(c) >= Number(null != a ? a : 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    p = Number(c) <= Number(null != a ? a : 0);
                                    break;
                                case "Contains":
                                    p = c.includes(null != (n = null == a ? void 0 : a.toString()) ? n : "");
                                    break;
                                case "DoesNotContain":
                                    p = !c.includes(null != (r = null == a ? void 0 : a.toString()) ? r : "");
                            }
                            if (p) {
                                if ("ENDOFSURVEY" === (null == s ? void 0 : s.trim().toUpperCase()))
                                    return "ENDOFSURVEY";
                                return s;
                            }
                        }
                        return null;
                    })(t, a);
                    if ("ENDOFSURVEY" === n)
                        return {
                            blockId: null,
                            pageIndex: 0,
                            questionIds: [],
                            isComplete: !0,
                        };
                    if (null != n)
                        for (let t of s) {
                            let r = l(e.Blocks[t]);
                            for (let e = 0; e < r.length; e++)
                                if (r[e].includes(n))
                                    return {
                                        blockId: t,
                                        pageIndex: e,
                                        questionIds: r[e],
                                        isComplete: !1,
                                    };
                        }
                }
            }
        }
    if (r + 1 < c.length)
        return {
            blockId: n,
            pageIndex: r + 1,
            questionIds: c[r + 1],
            isComplete: !1,
        };
    let d = s.indexOf(n);
    for (let t = d + 1; t < s.length; t++) {
        let n = s[t],
            r = l(e.Blocks[n]);
        if (r.length > 0 && r[0].length > 0)
            return {
                blockId: n,
                pageIndex: 0,
                questionIds: r[0],
                isComplete: !1,
            };
    }
    return {
        blockId: null,
        pageIndex: 0,
        questionIds: [],
        isComplete: !0,
    };
}
n.d(t, {
    i: () => a,
    uy: () => s,
    vt: () => o,
}),
    n(747238),
    n(321073),
    n(733351),
    n(896048);
