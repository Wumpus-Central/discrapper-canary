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
            if ('set_selection' === n.type && (null == (r = e.composition) ? void 0 : r.startedInsideInline) && o.M8.isRange(n.properties) && o.M8.isRange(n.newProperties) && o.M8.isCollapsed(n.newProperties)) {
                let t = o.bN.getParentInline(e, n.properties),
                    r = o.bN.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !o.C0.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            if (null != e.selection && null != o.bN.getCurrentInline(e)) return void i.Q.insertText(e, t);
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
                if (null != d && null != f && o.C0.equals(d[1], f[1])) return void s(t);
                let _ = o.M8.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [i, a] = o.bN.edges(e, t);
                    _ && o.Jz.equals(c, i) ? (c = null != (n = o.bN.before(e, i)) ? n : o.bN.start(e, [])) : !_ && o.Jz.equals(c, a) && (c = null != (r = o.bN.after(e, a)) ? r : o.bN.end(e, []));
                }
                if (null != f) {
                    let [, t] = f,
                        [n, r] = o.bN.edges(e, t);
                    !_ && o.Jz.equals(u, n) ? (u = null != (a = o.bN.before(e, n)) ? a : o.bN.start(e, [])) : _ && o.Jz.equals(u, r) && (u = null != (l = o.bN.after(e, r)) ? l : o.bN.end(e, []));
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
function* _(e) {
    var t, n, r, i, a, l, u, d;
    let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: p = e.selection, unit: h = 'offset', reverse: m = !1, voids: g = !1 } = null != _ ? _ : {};
    if ('word' !== h) {
        for (let t of f(e, c(s({}, _), { voids: g || 'block' === h }))) yield t;
        return;
    }
    if (null == p) return;
    let E = o.bN.range(e, p),
        [b, y] = o.M8.edges(E),
        v = o.bN.richValue(e),
        O = m ? -1 : 1,
        I = null != (r = null == (t = b.path) ? void 0 : t[0]) ? r : 0,
        S = null != (i = null == (n = y.path) ? void 0 : n[0]) ? i : v.length - 1,
        T = m ? S : I,
        N = m ? I : S,
        A = T;
    for (;;) {
        let t = v[A],
            n = null != (u = A === I ? (null == (a = b.path) ? void 0 : a[1]) : null) ? u : 0,
            r = null != (d = A === S ? (null == (l = y.path) ? void 0 : l[1]) : null) ? d : t.children.length - 1,
            i = m ? r : n,
            p = m ? n : r,
            h = i;
        for (;;) {
            let n,
                r,
                i = t.children[h],
                a = [A, h];
            if (((n = o.C0.equals(a, b.path) || o.C0.isAncestor(a, b.path) ? (!m && o.bN.isEnd(e, b, a) ? null : b) : o.bN.start(e, a)), (r = o.C0.equals(a, y.path) || o.C0.isAncestor(a, y.path) ? (m && o.bN.isStart(e, y, a) ? null : y) : o.bN.end(e, a)), null != n && null != r))
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
                    for (let n of f(e, c(s({}, _), { at: t }))) yield n;
                }
            if (h === p) break;
            h += O;
        }
        if (A === N) break;
        A += O;
    }
}
