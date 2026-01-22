n.d(t, {
    Z: () => c,
    p: () => l,
});
var r = n(67733),
    i = n(36310),
    a = n(74733),
    s = n(64700),
    o = n(555578);
function l(e) {
    let { filter: t, layoutDelegate: n } = e,
        l = (0, i.R)(e),
        c = (0, s.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        d = (0, s.useCallback)((e) => new (0, r.J)(t ? t(e) : e), [t]),
        f = (0, s.useMemo)(
            () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
            [e.suppressTextValueWarning],
        ),
        p = (0, o.G)(e, d, f),
        _ = (0, s.useMemo)(() => new (0, a.Y)(p, l, { layoutDelegate: n }), [p, l, n]);
    return (
        u(p, _),
        {
            collection: p,
            disabledKeys: c,
            selectionManager: _,
        }
    );
}
function c(e, t) {
    let n = (0, s.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
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
    let n = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
            var r, i, a, s, o, l, c;
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
                p =
                    (null != (r = null == d ? void 0 : d.length) ? r : 0) -
                    (null != (i = null == f ? void 0 : f.length) ? i : 0),
                _ = Math.min(
                    p > 1
                        ? Math.max((null != (a = null == u ? void 0 : u.index) ? a : 0) - p + 1, 0)
                        : null != (s = null == u ? void 0 : u.index)
                          ? s
                          : 0,
                    (null != (o = null == f ? void 0 : f.length) ? o : 0) - 1,
                ),
                h = null,
                m = !1;
            for (; _ >= 0; ) {
                if (!t.isDisabled(f[_].key)) {
                    h = f[_];
                    break;
                }
                _ < f.length - 1 && !m
                    ? _++
                    : ((m = !0),
                      _ > (null != (l = null == u ? void 0 : u.index) ? l : 0) &&
                          (_ = null != (c = null == u ? void 0 : u.index) ? c : 0),
                      _--);
            }
            t.setFocusedKey(h ? h.key : null);
        }
        n.current = e;
    }, [e, t]);
}
