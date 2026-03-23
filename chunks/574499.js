"use strict";
n.d(t, { c: () => d });
var r = n(627968),
    i = n(64700),
    s = n(554146),
    a = n(397927),
    o = n(932001),
    l = n(620434),
    u = n(49999),
    c = n(985018);
function d(e) {
    let { userId: t, skuId: c, nuxGraphic: d, location: f, onError: p } = e,
        [h, m] = (0, o.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        E = h === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        g = i.useCallback(() => {
            E &&
                null != d &&
                ((0, a.mMO)(async () => {
                    let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                    return (t) => (0, r.jsx)(e, { ...t, graphic: d });
                }),
                m(u.i.USER_DISMISS));
        }, [m, d, E]);
    return {
        ...(0, l.c)({ userId: t, skuId: c, location: f, onAddSuccess: g, onError: p ?? _ }),
        isFirstTimeWishlister: E,
    };
}
function _() {
    (0, a.showToast)((0, a.createToast)(c.intl.string(c.t.F8FvUy), a.ToastType.FAILURE)),
        a.ORC.announce(c.intl.string(c.t.F8FvUy));
}
