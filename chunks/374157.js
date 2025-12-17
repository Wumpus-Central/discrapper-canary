n.d(t, { Z: () => a }), n(388685);
var r = n(436660),
    i = n(887490);
function a(e) {
    let { apply: t, deleteBackward: n, deleteForward: a, deleteFragment: s, insertText: l } = e;
    return (
        (e.apply = (n) => {
            var r;
            if (
                "set_selection" === n.type &&
                (null == (r = e.composition) ? void 0 : r.startedInsideInline) &&
                i.M8.isRange(n.properties) &&
                i.M8.isRange(n.newProperties) &&
                i.M8.isCollapsed(n.newProperties)
            ) {
                let t = i.bN.getParentInline(e, n.properties),
                    r = i.bN.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !i.C0.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            if (null != e.selection && null != i.bN.getCurrentInline(e)) return void r.Q.insertText(e, t);
            l(t);
        }),
        (e.deleteBackward = (t) => {
            o(e, t, !0) || n(t);
        }),
        (e.deleteForward = (t) => {
            o(e, t, !1) || a(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && i.M8.isExpanded(e.selection)) {
                var n, a, o, l;
                let c = e.selection.anchor,
                    u = e.selection.focus,
                    d = i.bN.getParentInline(e, c),
                    f = i.bN.getParentInline(e, u);
                if (null != d && null != f && i.C0.equals(d[1], f[1])) return void s(t);
                let p = i.M8.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [r, o] = i.bN.edges(e, t);
                    p && i.Jz.equals(c, r)
                        ? (c = null != (n = i.bN.before(e, r)) ? n : i.bN.start(e, []))
                        : !p && i.Jz.equals(c, o) && (c = null != (a = i.bN.after(e, o)) ? a : i.bN.end(e, []));
                }
                if (null != f) {
                    let [, t] = f,
                        [n, r] = i.bN.edges(e, t);
                    !p && i.Jz.equals(u, n)
                        ? (u = null != (o = i.bN.before(e, n)) ? o : i.bN.start(e, []))
                        : p && i.Jz.equals(u, r) && (u = null != (l = i.bN.after(e, r)) ? l : i.bN.end(e, []));
                }
                return void r.Q.delete(e, {
                    at: {
                        anchor: c,
                        focus: u,
                    },
                    reverse: "backward" === t,
                    select: !0,
                });
            }
            s(t);
        }),
        e
    );
}
function o(e, t, n) {
    let a = i.bN.getCurrentInline(e);
    if ("block" === t) return !0;
    let o = i.bN.getCurrentText(e);
    if (null == o) return !0;
    let [s, l] = o,
        [c, u] = i.bN.edges(e, l),
        d = i.M8.toPoint(e.selection);
    if (null == d) return !0;
    if (null != a) {
        let [t, n] = a;
        if (i.bN.isEmpty(e, t) || i.bN.isVoid(e, t)) return r.Q.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == a) return !1;
        else {
            let [o, s] = i.bN.edges(e, a[1]);
            return (
                r.Q.delete(e, {
                    at: d,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: o,
                        focus: s,
                    },
                }),
                !0
            );
        }
    let f = i.bN.getParentBlock(e, d);
    if (null == f) return !0;
    let p = f[1],
        _ = a;
    if (i.Jz.equals(d, n ? c : u))
        for (;;) {
            let t = (n ? i.bN.before : i.bN.after)(e, d);
            if (null == t) return !0;
            if (!i.C0.isDescendant(t.path, p)) break;
            if (((d = t), null != (_ = i.bN.getParentInline(e, t)))) {
                let [t, n] = _;
                if (i.bN.isEmpty(e, t) || i.bN.isVoid(e, t)) {
                    let t = i.bN.before(e, n);
                    return null != t && r.Q.select(e, t), r.Q.removeInline(e, n), !0;
                }
            }
            let a = i.bN.node(e, t.path);
            if (null == a || !i.LC.isText(a[0])) return !0;
            if ((([s, l] = a), 0 !== s.text.length)) {
                [c, u] = i.bN.edges(e, l);
                break;
            }
        }
    return (
        r.Q.delete(e, {
            at: d,
            unit: t,
            reverse: n,
            select: !0,
        }),
        !0
    );
}
