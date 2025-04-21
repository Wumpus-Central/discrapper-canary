n.d(t, { Z: () => u }), n(388685), n(784620), n(973216), n(583741);
var r = n(327432),
    i = n(436660),
    a = n(887490);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
    let { apply: t, deleteBackward: n, deleteForward: o, deleteFragment: s, insertText: l } = e;
    return (
        (e.apply = (n) => {
            var r;
            if ('set_selection' === n.type && (null == (r = e.composition) ? void 0 : r.startedInsideInline) && a.M8.isRange(n.properties) && a.M8.isRange(n.newProperties) && a.M8.isCollapsed(n.newProperties)) {
                let t = a.bN.getParentInline(e, n.properties),
                    r = a.bN.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !a.C0.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            if (null != e.selection && null != a.bN.getCurrentInline(e)) return void i.Q.insertText(e, t);
            l(t);
        }),
        (e.deleteBackward = (t) => {
            d(e, t, !0) || n(t);
        }),
        (e.deleteForward = (t) => {
            d(e, t, !1) || o(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && a.M8.isExpanded(e.selection)) {
                var n, r, o, l;
                let c = e.selection.anchor,
                    u = e.selection.focus,
                    d = a.bN.getParentInline(e, c),
                    f = a.bN.getParentInline(e, u);
                if (null != d && null != f && a.C0.equals(d[1], f[1])) return void s(t);
                let _ = a.M8.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [i, o] = a.bN.edges(e, t);
                    _ && a.Jz.equals(c, i) ? (c = null != (n = a.bN.before(e, i)) ? n : a.bN.start(e, [])) : !_ && a.Jz.equals(c, o) && (c = null != (r = a.bN.after(e, o)) ? r : a.bN.end(e, []));
                }
                if (null != f) {
                    let [, t] = f,
                        [n, r] = a.bN.edges(e, t);
                    !_ && a.Jz.equals(u, n) ? (u = null != (o = a.bN.before(e, n)) ? o : a.bN.start(e, [])) : _ && a.Jz.equals(u, r) && (u = null != (l = a.bN.after(e, r)) ? l : a.bN.end(e, []));
                }
                return void i.Q.delete(e, {
                    at: {
                        anchor: c,
                        focus: u
                    },
                    reverse: 'backward' === t,
                    select: !0
                });
            }
            s(t);
        }),
        (r.ML.positions = _),
        e
    );
}
function d(e, t, n) {
    let r = a.bN.getCurrentInline(e),
        o = a.bN.getCurrentBlock(e),
        s = a.M8.toPoint(e.selection);
    if (null == s || null == o || 'block' === t) return !0;
    if ('line' === t && null == r) return !1;
    let l = r;
    if (null == l) {
        let t = (n ? a.bN.before : a.bN.after)(e, s);
        null != t && null != (l = a.bN.getParentInline(e, t)) && (s = t);
    }
    if (null != l) {
        let [r, o] = l;
        if (a.bN.isEmpty(e, r) || a.bN.isVoid(e, r)) i.Q.removeInline(e, o);
        else {
            let [r, l] = a.bN.edges(e, o);
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
    if (null != o) {
        let [, t] = o,
            [r, i] = a.bN.edges(e, t);
        c = (n && a.Jz.equals(s, r)) || (!n && a.Jz.equals(s, i));
    }
    if ('word' === t && !c) {
        let r = a.bN.getCurrentText(e);
        if (null != r) {
            let [, o] = r,
                [l, c] = a.bN.edges(e, o);
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
function* _(e) {
    var t, n, r, i, o, l, u, d;
    let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: p = e.selection, unit: h = 'offset', reverse: m = !1, voids: g = !1 } = null != _ ? _ : {};
    if ('word' !== h) {
        for (let t of f(e, c(s({}, _), { voids: g || 'block' === h }))) yield t;
        return;
    }
    if (null == p) return;
    let E = a.bN.range(e, p),
        [b, y] = a.M8.edges(E),
        v = a.bN.richValue(e),
        O = m ? -1 : 1,
        I = null != (r = null == (t = b.path) ? void 0 : t[0]) ? r : 0,
        S = null != (i = null == (n = y.path) ? void 0 : n[0]) ? i : v.length - 1,
        T = m ? S : I,
        A = m ? I : S,
        N = T;
    for (;;) {
        let t = v[N],
            n = null != (u = N === I ? (null == (o = b.path) ? void 0 : o[1]) : null) ? u : 0,
            r = null != (d = N === S ? (null == (l = y.path) ? void 0 : l[1]) : null) ? d : t.children.length - 1,
            i = m ? r : n,
            p = m ? n : r,
            h = i;
        for (;;) {
            let n,
                r,
                i = t.children[h],
                o = [N, h];
            if (((n = a.C0.equals(o, b.path) || a.C0.isAncestor(o, b.path) ? (!m && a.bN.isEnd(e, b, o) ? null : b) : a.bN.start(e, o)), (r = a.C0.equals(o, y.path) || a.C0.isAncestor(o, y.path) ? (m && a.bN.isStart(e, y, o) ? null : y) : a.bN.end(e, o)), null != n && null != r))
                if (a.LC.isText(i) && 0 === i.text.length) {
                    let e = {
                        path: o,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (a.bN.isInline(e, i) && a.LC.isText(i.children[0]) && 0 === i.children[0].text.length) {
                    let e = {
                        path: a.C0.child(o, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let t = {
                        anchor: n,
                        focus: r
                    };
                    for (let n of f(e, c(s({}, _), { at: t }))) yield n;
                }
            if (h === p) break;
            h += O;
        }
        if (N === A) break;
        N += O;
    }
}
