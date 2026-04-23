"use strict";
n.d(t, { c: () => h });
var r = n(627968),
    i = n(64700),
    s = n(554146),
    a = n(192308),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(765178),
    d = n(932001),
    _ = n(620434),
    f = n(49999),
    p = n(985018);
function h(e) {
    let { userId: t, skuId: o, nuxGraphic: l, onNuxShow: u, location: c, onAddSuccess: p, onError: h } = e,
        [m, g] = (0, d.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        A = m === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        I = i.useCallback(() => {
            A &&
                null != l &&
                (u?.(),
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                    return (t) => (0, r.jsx)(e, { ...t, graphic: l });
                }),
                g(f.i.USER_DISMISS)),
                p?.();
        }, [g, l, u, A, p]);
    return {
        ...(0, _.c)({ userId: t, skuId: o, location: c, onAddSuccess: I, onError: h ?? E }),
        isFirstTimeWishlister: A,
    };
}
function E() {
    (0, o.P0)((0, l.o)(p.intl.string(p.t.F8FvUy), u.Ck.FAILURE)), c.O.announce(p.intl.string(p.t.F8FvUy));
}
