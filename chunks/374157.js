r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(571269);
var o = r(298267);
var s = r(327432),
    l = r(436660),
    u = r(887490);
function c(e) {
    let { apply: n, deleteBackward: r, deleteForward: i, deleteFragment: a, insertText: o } = e;
    return (
        (e.apply = (r) => {
            var i;
            if ('set_selection' === r.type && (null === (i = e.composition) || void 0 === i ? void 0 : i.startedInsideInline) && u.M8.isRange(r.properties) && u.M8.isRange(r.newProperties) && u.M8.isCollapsed(r.newProperties)) {
                let n = u.bN.getParentInline(e, r.properties),
                    i = u.bN.getParentInline(e, r.newProperties);
                if (null != n && (null == i || !u.C0.equals(n[1], i[1]))) return;
            }
            n(r);
        }),
        (e.insertText = (n) => {
            if (null != e.selection && null != u.bN.getCurrentInline(e)) {
                l.Q.insertText(e, n);
                return;
            }
            o(n);
        }),
        (e.deleteBackward = (n) => {
            !d(e, n, !0) && r(n);
        }),
        (e.deleteForward = (n) => {
            !d(e, n, !1) && i(n);
        }),
        (e.deleteFragment = (n) => {
            if (null != e.selection && u.M8.isExpanded(e.selection)) {
                var r, i, o, s;
                let c = e.selection.anchor,
                    d = e.selection.focus,
                    f = u.bN.getParentInline(e, c),
                    p = u.bN.getParentInline(e, d);
                if (null != f && null != p && u.C0.equals(f[1], p[1])) {
                    a(n);
                    return;
                }
                let h = u.M8.isForward(e.selection);
                if (null != f) {
                    let [, n] = f,
                        [a, o] = u.bN.edges(e, n);
                    h && u.Jz.equals(c, a) ? (c = null !== (r = u.bN.before(e, a)) && void 0 !== r ? r : u.bN.start(e, [])) : !h && u.Jz.equals(c, o) && (c = null !== (i = u.bN.after(e, o)) && void 0 !== i ? i : u.bN.end(e, []));
                }
                if (null != p) {
                    let [, n] = p,
                        [r, i] = u.bN.edges(e, n);
                    !h && u.Jz.equals(d, r) ? (d = null !== (o = u.bN.before(e, r)) && void 0 !== o ? o : u.bN.start(e, [])) : h && u.Jz.equals(d, i) && (d = null !== (s = u.bN.after(e, i)) && void 0 !== s ? s : u.bN.end(e, []));
                }
                l.Q.delete(e, {
                    at: {
                        anchor: c,
                        focus: d
                    },
                    reverse: 'backward' === n,
                    select: !0
                });
                return;
            }
            a(n);
        }),
        (s.ML.positions = p),
        e
    );
}
function d(e, n, r) {
    let i = u.bN.getCurrentInline(e),
        a = u.bN.getCurrentBlock(e),
        o = u.M8.toPoint(e.selection);
    if (null == o || null == a || 'block' === n) return !0;
    if ('line' === n && null == i) return !1;
    let s = i;
    if (null == s) {
        let n = (r ? u.bN.before : u.bN.after)(e, o);
        null != n && null != (s = u.bN.getParentInline(e, n)) && (o = n);
    }
    if (null != s) {
        let [i, a] = s;
        if (u.bN.isEmpty(e, i) || u.bN.isVoid(e, i)) l.Q.removeInline(e, a);
        else {
            let [i, s] = u.bN.edges(e, a);
            l.Q.delete(e, {
                at: o,
                unit: n,
                reverse: r,
                select: !0,
                bounds: {
                    anchor: i,
                    focus: s
                }
            });
        }
        return !0;
    }
    let c = !1;
    if (null != a) {
        let [, n] = a,
            [i, s] = u.bN.edges(e, n);
        c = (r && u.Jz.equals(o, i)) || (!r && u.Jz.equals(o, s));
    }
    if ('word' === n && !c) {
        let i = u.bN.getCurrentText(e);
        if (null != i) {
            let [, a] = i,
                [s, c] = u.bN.edges(e, a);
            return (
                l.Q.delete(e, {
                    at: o,
                    unit: n,
                    reverse: r,
                    select: !0,
                    bounds: {
                        anchor: s,
                        focus: c
                    }
                }),
                !0
            );
        }
    }
    return (
        l.Q.delete(e, {
            at: o,
            unit: n,
            reverse: r,
            select: !0
        }),
        !0
    );
}
let f = s.ML.positions;
function* p(e) {
    var n, r, i, a, o, s, l, c;
    let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: p = e.selection, unit: h = 'offset', reverse: _ = !1, voids: m = !1 } = null != d ? d : {};
    if ('word' !== h) {
        for (let n of f(e, {
            ...d,
            voids: m || 'block' === h
        }))
            yield n;
        return;
    }
    if (null == p) return;
    let g = u.bN.range(e, p),
        [E, v] = u.M8.edges(g),
        y = u.bN.richValue(e),
        b = _ ? -1 : 1,
        I = null !== (i = null === (n = E.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : 0,
        T = null !== (a = null === (r = v.path) || void 0 === r ? void 0 : r[0]) && void 0 !== a ? a : y.length - 1,
        S = _ ? T : I,
        A = _ ? I : T,
        C = S;
    for (;;) {
        let n = y[C],
            r = null !== (l = C === I ? (null === (o = E.path) || void 0 === o ? void 0 : o[1]) : null) && void 0 !== l ? l : 0,
            i = null !== (c = C === T ? (null === (s = v.path) || void 0 === s ? void 0 : s[1]) : null) && void 0 !== c ? c : n.children.length - 1,
            a = _ ? i : r,
            p = _ ? r : i,
            h = a;
        for (;;) {
            let r, i;
            let a = n.children[h],
                o = [C, h];
            if (((r = u.C0.equals(o, E.path) || u.C0.isAncestor(o, E.path) ? (!_ && u.bN.isEnd(e, E, o) ? null : E) : u.bN.start(e, o)), (i = u.C0.equals(o, v.path) || u.C0.isAncestor(o, v.path) ? (_ && u.bN.isStart(e, v, o) ? null : v) : u.bN.end(e, o)), null != r && null != i)) {
                if (u.LC.isText(a) && 0 === a.text.length) {
                    let e = {
                        path: o,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (u.bN.isInline(e, a) && u.LC.isText(a.children[0]) && 0 === a.children[0].text.length) {
                    let e = {
                        path: u.C0.child(o, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let n = {
                        anchor: r,
                        focus: i
                    };
                    for (let r of f(e, {
                        ...d,
                        at: n
                    }))
                        yield r;
                }
            }
            if (h === p) break;
            h += b;
        }
        if (C === A) break;
        C += b;
    }
}
