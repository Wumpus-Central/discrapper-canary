i.d(e, { c: () => I });
var r = i(627968),
    s = i(64700),
    n = i(554146),
    l = i(192308),
    a = i(691540),
    o = i(857250),
    u = i(97483),
    d = i(765178),
    c = i(932001),
    p = i(620434),
    S = i(49999),
    h = i(985018);
function I(t) {
    let { userId: e, skuId: a, nuxGraphic: o, onNuxShow: u, location: d, onAddSuccess: h, onError: I } = t,
        [A, f] = (0, c.kn)([n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        E = A === n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        m = s.useCallback(() => {
            E &&
                null != o &&
                (u?.(),
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await i.e("64581").then(i.bind(i, 38884));
                    return (e) => (0, r.jsx)(t, { ...e, graphic: o });
                }),
                f(S.i.USER_DISMISS)),
                h?.();
        }, [f, o, u, E, h]);
    return {
        ...(0, p.c)({ userId: e, skuId: a, location: d, onAddSuccess: m, onError: I ?? _ }),
        isFirstTimeWishlister: E,
    };
}
function _() {
    (0, a.P0)((0, o.o)(h.intl.string(h.t.F8FvUy), u.Ck.FAILURE)), d.O.announce(h.intl.string(h.t.F8FvUy));
}
