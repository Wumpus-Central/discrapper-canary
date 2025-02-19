n.d(t, { Z: () => u }), n(47120), n(571269), n(298267), n(978209);
var r = n(327432),
    i = n(436660),
    o = n(887490);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    let { apply: t, deleteBackward: n, deleteForward: a, deleteFragment: s, insertText: l } = e;
    return (
        (e.apply = (n) => {
            var r;
            if ('set_selection' === n.type && (null === (r = e.composition) || void 0 === r ? void 0 : r.startedInsideInline) && o.M8.isRange(n.properties) && o.M8.isRange(n.newProperties) && o.M8.isCollapsed(n.newProperties)) {
                let t = o.bN.getParentInline(e, n.properties),
                    r = o.bN.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !o.C0.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            if (null != e.selection && null != o.bN.getCurrentInline(e)) {
                i.Q.insertText(e, t);
                return;
            }
            l(t);
        }),
        (e.deleteBackward = (t) => {
            d(e, t, !0) || n(t);
        }),
        (e.deleteForward = (t) => {
            d(e, t, !1) || a(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && o.M8.isExpanded(e.selection)) {
                var n, r, a, l;
                let c = e.selection.anchor,
                    u = e.selection.focus,
                    d = o.bN.getParentInline(e, c),
                    f = o.bN.getParentInline(e, u);
                if (null != d && null != f && o.C0.equals(d[1], f[1])) {
                    s(t);
                    return;
                }
                let p = o.M8.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [i, a] = o.bN.edges(e, t);
                    p && o.Jz.equals(c, i) ? (c = null !== (n = o.bN.before(e, i)) && void 0 !== n ? n : o.bN.start(e, [])) : !p && o.Jz.equals(c, a) && (c = null !== (r = o.bN.after(e, a)) && void 0 !== r ? r : o.bN.end(e, []));
                }
                if (null != f) {
                    let [, t] = f,
                        [n, r] = o.bN.edges(e, t);
                    !p && o.Jz.equals(u, n) ? (u = null !== (a = o.bN.before(e, n)) && void 0 !== a ? a : o.bN.start(e, [])) : p && o.Jz.equals(u, r) && (u = null !== (l = o.bN.after(e, r)) && void 0 !== l ? l : o.bN.end(e, []));
                }
                i.Q.delete(e, {
                    at: {
                        anchor: c,
                        focus: u
                    },
                    reverse: 'backward' === t,
                    select: !0
                });
                return;
            }
            s(t);
        }),
        (r.ML.positions = p),
        e
    );
}
function d(e, t, n) {
    let r = o.bN.getCurrentInline(e),
        a = o.bN.getCurrentBlock(e),
        s = o.M8.toPoint(e.selection);
    if (null == s || null == a || 'block' === t) return !0;
    if ('line' === t && null == r) return !1;
    let l = r;
    if (null == l) {
        let t = (n ? o.bN.before : o.bN.after)(e, s);
        null != t && null != (l = o.bN.getParentInline(e, t)) && (s = t);
    }
    if (null != l) {
        let [r, a] = l;
        if (o.bN.isEmpty(e, r) || o.bN.isVoid(e, r)) i.Q.removeInline(e, a);
        else {
            let [r, l] = o.bN.edges(e, a);
            i.Q.delete(e, {
                at: s,
                unit: t,
                reverse: n,
                select: !0,
                bounds: {
                    anchor: r,
                    focus: l
                }
            });
        }
        return !0;
    }
    let c = !1;
    if (null != a) {
        let [, t] = a,
            [r, i] = o.bN.edges(e, t);
        c = (n && o.Jz.equals(s, r)) || (!n && o.Jz.equals(s, i));
    }
    if ('word' === t && !c) {
        let r = o.bN.getCurrentText(e);
        if (null != r) {
            let [, a] = r,
                [l, c] = o.bN.edges(e, a);
            return (
                i.Q.delete(e, {
                    at: s,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: l,
                        focus: c
                    }
                }),
                !0
            );
        }
    }
    return (
        i.Q.delete(e, {
            at: s,
            unit: t,
            reverse: n,
            select: !0
        }),
        !0
    );
}
let f = r.ML.positions;
function* p(e) {
    var t, n, r, i, a, l, u, d;
    let p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: _ = e.selection, unit: h = 'offset', reverse: m = !1, voids: g = !1 } = null != p ? p : {};
    if ('word' !== h) {
        for (let t of f(e, c(s({}, p), { voids: g || 'block' === h }))) yield t;
        return;
    }
    if (null == _) return;
    let E = o.bN.range(e, _),
        [v, b] = o.M8.edges(E),
        y = o.bN.richValue(e),
        O = m ? -1 : 1,
        S = null !== (r = null === (t = v.path) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : 0,
        I = null !== (i = null === (n = b.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : y.length - 1,
        T = m ? I : S,
        N = m ? S : I,
        A = T;
    for (;;) {
        let t = y[A],
            n = null !== (u = A === S ? (null === (a = v.path) || void 0 === a ? void 0 : a[1]) : null) && void 0 !== u ? u : 0,
            r = null !== (d = A === I ? (null === (l = b.path) || void 0 === l ? void 0 : l[1]) : null) && void 0 !== d ? d : t.children.length - 1,
            i = m ? r : n,
            _ = m ? n : r,
            h = i;
        for (;;) {
            let n, r;
            let i = t.children[h],
                a = [A, h];
            if (((n = o.C0.equals(a, v.path) || o.C0.isAncestor(a, v.path) ? (!m && o.bN.isEnd(e, v, a) ? null : v) : o.bN.start(e, a)), (r = o.C0.equals(a, b.path) || o.C0.isAncestor(a, b.path) ? (m && o.bN.isStart(e, b, a) ? null : b) : o.bN.end(e, a)), null != n && null != r)) {
                if (o.LC.isText(i) && 0 === i.text.length) {
                    let e = {
                        path: a,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (o.bN.isInline(e, i) && o.LC.isText(i.children[0]) && 0 === i.children[0].text.length) {
                    let e = {
                        path: o.C0.child(a, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let t = {
                        anchor: n,
                        focus: r
                    };
                    for (let n of f(e, c(s({}, p), { at: t }))) yield n;
                }
            }
            if (h === _) break;
            h += O;
        }
        if (A === N) break;
        A += O;
    }
}
