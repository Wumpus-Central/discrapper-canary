function r(e, t) {
    var n, r, i, a, o, s;
    let { Operator: l, QuestionID: c, ChoiceLocator: u, LeftOperand: d, RightOperand: f } = e;
    if (null == c) return !0;
    let _ = t[c];
    if (null == _ || "" === _) return !1;
    let p = null == u ? void 0 : u.match(/SelectableChoice\/(\d+)/),
        h = null == p ? void 0 : p[1];
    switch (l) {
        case "Selected":
            return null != h && _.split(",").includes(h);
        case "NotSelected":
            return null != h && !_.split(",").includes(h);
        case "EqualTo":
            return _ === (null != f ? f : d);
        case "NotEqualTo":
            return _ !== (null != f ? f : d);
        case "GreaterThan":
            return Number(_) > Number(null != (n = null != f ? f : d) ? n : 0);
        case "LessThan":
            return Number(_) < Number(null != (r = null != f ? f : d) ? r : 0);
        case "GreaterThanOrEqualTo":
            return Number(_) >= Number(null != (i = null != f ? f : d) ? i : 0);
        case "LessThanOrEqualTo":
            return Number(_) <= Number(null != (a = null != f ? f : d) ? a : 0);
        case "Contains":
            return _.includes(null != (o = null != f ? f : d) ? o : "");
        case "DoesNotContain":
            return !_.includes(null != (s = null != f ? f : d) ? s : "");
        default:
            return !0;
    }
}
function i(e, t) {
    let n = [];
    for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
    if (0 === n.length) return !0;
    let i = r(n[0], t);
    for (let e = 1; e < n.length; e++) {
        var a, o;
        let s = n[e],
            l = r(s, t);
        i = "Or" === (null != (o = null != (a = s.Conjuction) ? a : s.Conjunction) ? o : "And") ? i || l : i && l;
    }
    return i;
}
function a(e, t) {
    if (null == e.DisplayLogic) return !0;
    let { DisplayLogic: n } = e;
    for (let e in n)
        if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
            let r = n[e];
            if ("If" === r.Type || "ElseIf" === r.Type) {
                if (i(r, t)) return !0;
            } else if ("Else" === r.Type) return !0;
        }
    return !1;
}
function o(e, t) {
    if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
    for (let i of e.SkipLogic) {
        var n, r;
        let { QuestionID: e, Condition: a, Value: o, SkipToDestination: s, ChoiceLocator: l } = i,
            c = t[e];
        if (null == c || "" === c) continue;
        let u = null == l ? void 0 : l.match(/SelectableChoice\/(\d+)/),
            d = null == u ? void 0 : u[1],
            f = !1;
        switch (a) {
            case "Selected":
                f = null != d && c.split(",").includes(d);
                break;
            case "NotSelected":
                f = null != d && !c.split(",").includes(d);
                break;
            case "EqualTo":
                f = c === (null == o ? void 0 : o.toString());
                break;
            case "NotEqualTo":
                f = c !== (null == o ? void 0 : o.toString());
                break;
            case "GreaterThan":
                f = Number(c) > Number(null != o ? o : 0);
                break;
            case "LessThan":
                f = Number(c) < Number(null != o ? o : 0);
                break;
            case "GreaterThanOrEqualTo":
                f = Number(c) >= Number(null != o ? o : 0);
                break;
            case "LessThanOrEqualTo":
                f = Number(c) <= Number(null != o ? o : 0);
                break;
            case "Contains":
                f = c.includes(null != (n = null == o ? void 0 : o.toString()) ? n : "");
                break;
            case "DoesNotContain":
                f = !c.includes(null != (r = null == o ? void 0 : o.toString()) ? r : "");
        }
        if (f) {
            if ("ENDOFSURVEY" === (null == s ? void 0 : s.trim().toUpperCase())) return "ENDOFSURVEY";
            return s;
        }
    }
    return null;
}
function s(e) {
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
function c(e) {
    for (let t of s(e)) {
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
function u(e, t) {
    let { blockId: n, pageIndex: r, responses: i } = t,
        o = e.Blocks[n];
    if (null == o) return [];
    let s = l(o);
    return r >= s.length ? [] : s[r].filter((t) => a(e.Questions[t], i));
}
function d(e, t) {
    let { blockId: n, pageIndex: r, responses: i } = t,
        a = s(e),
        c = e.Blocks[n];
    if (null == c)
        return {
            blockId: null,
            pageIndex: 0,
            questionIds: [],
            isComplete: !0,
        };
    let u = l(c),
        d = u[r];
    if (null != d && d.length > 0)
        for (let t = d.length - 1; t >= 0; t--) {
            let n = d[t];
            if (null != e.Questions[n] && null != i[n]) {
                let t = c.BlockElements.find((e) => e.QuestionID === n);
                if (null != t) {
                    let n = o(t, i);
                    if ("ENDOFSURVEY" === n)
                        return {
                            blockId: null,
                            pageIndex: 0,
                            questionIds: [],
                            isComplete: !0,
                        };
                    if (null != n)
                        for (let t of a) {
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
    if (r + 1 < u.length)
        return {
            blockId: n,
            pageIndex: r + 1,
            questionIds: u[r + 1],
            isComplete: !1,
        };
    let f = a.indexOf(n);
    for (let t = f + 1; t < a.length; t++) {
        let n = a[t],
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
    B_: () => u,
    KZ: () => d,
    l6: () => c,
}),
    n(35282),
    n(539854),
    n(781311),
    n(388685);
