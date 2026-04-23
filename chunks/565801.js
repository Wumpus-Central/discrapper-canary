"use strict";
n.d(t, { Z: () => u, p: () => l });
var r = n(67733),
    i = n(36310),
    s = n(74733),
    a = n(64700),
    o = n(555578);
function l(e) {
    let { filter: t, layoutDelegate: n } = e,
        l = (0, i.R)(e),
        u = (0, a.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        d = (0, a.useCallback)((e) => new (0, r.J)(t ? t(e) : e), [t]),
        _ = (0, a.useMemo)(
            () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
            [e.suppressTextValueWarning],
        ),
        f = (0, o.G)(e, d, _),
        p = (0, a.useMemo)(() => new (0, s.Y)(f, l, { layoutDelegate: n }), [f, l, n]);
    return c(f, p), { collection: f, disabledKeys: u, selectionManager: p };
}
function u(e, t) {
    let n = (0, a.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        r = e.selectionManager.withCollection(n);
    return c(n, r), { collection: n, selectionManager: r, disabledKeys: e.disabledKeys };
}
function c(e, t) {
    let n = (0, a.useRef)(null);
    (0, a.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
            var r, i, s, a, o, l, u;
            let c = n.current.getItem(t.focusedKey),
                d = [...n.current.getKeys()]
                    .map((e) => {
                        let t = n.current.getItem(e);
                        return (null == t ? void 0 : t.type) === "item" ? t : null;
                    })
                    .filter((e) => null !== e),
                _ = [...e.getKeys()]
                    .map((t) => {
                        let n = e.getItem(t);
                        return (null == n ? void 0 : n.type) === "item" ? n : null;
                    })
                    .filter((e) => null !== e),
                f =
                    (null != (r = null == d ? void 0 : d.length) ? r : 0) -
                    (null != (i = null == _ ? void 0 : _.length) ? i : 0),
                p = Math.min(
                    f > 1
                        ? Math.max((null != (s = null == c ? void 0 : c.index) ? s : 0) - f + 1, 0)
                        : null != (a = null == c ? void 0 : c.index)
                          ? a
                          : 0,
                    (null != (o = null == _ ? void 0 : _.length) ? o : 0) - 1,
                ),
                h = null,
                E = !1;
            for (; p >= 0; ) {
                if (!t.isDisabled(_[p].key)) {
                    h = _[p];
                    break;
                }
                p < _.length - 1 && !E
                    ? p++
                    : ((E = !0),
                      p > (null != (l = null == c ? void 0 : c.index) ? l : 0) &&
                          (p = null != (u = null == c ? void 0 : c.index) ? u : 0),
                      p--);
            }
            t.setFocusedKey(h ? h.key : null);
        }
        n.current = e;
    }, [e, t]);
}
