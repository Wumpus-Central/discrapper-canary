n.d(t, {
    d: () => c,
    n: () => l,
});
var r = n(219964),
    i = n(634809),
    a = n(180717),
    o = n(473749),
    s = n(780667);
function l(e) {
    let { filter: t, layoutDelegate: n } = e,
        l = (0, i.q)(e),
        c = (0, o.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        d = (0, o.useCallback)((e) => new (0, r.D)(t ? t(e) : e), [t]),
        f = (0, o.useMemo)(
            () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
            [e.suppressTextValueWarning],
        ),
        _ = (0, s.K)(e, d, f),
        p = (0, o.useMemo)(() => new (0, a.Z)(_, l, { layoutDelegate: n }), [_, l, n]);
    return (
        u(_, p),
        {
            collection: _,
            disabledKeys: c,
            selectionManager: p,
        }
    );
}
function c(e, t) {
    let n = (0, o.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        r = e.selectionManager.withCollection(n);
    return (
        u(n, r),
        {
            collection: n,
            selectionManager: r,
            disabledKeys: e.disabledKeys,
        }
    );
}
function u(e, t) {
    let n = (0, o.useRef)(null);
    (0, o.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
            var r, i, a, o, s, l, c;
            let u = n.current.getItem(t.focusedKey),
                d = [...n.current.getKeys()]
                    .map((e) => {
                        let t = n.current.getItem(e);
                        return (null == t ? void 0 : t.type) === "item" ? t : null;
                    })
                    .filter((e) => null !== e),
                f = [...e.getKeys()]
                    .map((t) => {
                        let n = e.getItem(t);
                        return (null == n ? void 0 : n.type) === "item" ? n : null;
                    })
                    .filter((e) => null !== e),
                _ =
                    (null != (r = null == d ? void 0 : d.length) ? r : 0) -
                    (null != (i = null == f ? void 0 : f.length) ? i : 0),
                p = Math.min(
                    _ > 1
                        ? Math.max((null != (a = null == u ? void 0 : u.index) ? a : 0) - _ + 1, 0)
                        : null != (o = null == u ? void 0 : u.index)
                          ? o
                          : 0,
                    (null != (s = null == f ? void 0 : f.length) ? s : 0) - 1,
                ),
                h = null,
                m = !1;
            for (; p >= 0; ) {
                if (!t.isDisabled(f[p].key)) {
                    h = f[p];
                    break;
                }
                p < f.length - 1 && !m
                    ? p++
                    : ((m = !0),
                      p > (null != (l = null == u ? void 0 : u.index) ? l : 0) &&
                          (p = null != (c = null == u ? void 0 : u.index) ? c : 0),
                      p--);
            }
            t.setFocusedKey(h ? h.key : null);
        }
        n.current = e;
    }, [e, t]);
}
