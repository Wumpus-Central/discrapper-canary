n.d(t, { Cp: () => E, M6: () => c, Q9: () => _, ik: () => A, sC: () => u });
var i = n(196765),
    r = n(174459),
    a = n(716761),
    s = n(713913),
    l = n(437614),
    o = n(652215);
let d = { campaignId: null, status: l.yY.PENDING, wasShown: !1 },
    c = (0, i.v)(() => d);
function u(e) {
    let { isPreview: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    c.setState({ ...d, campaignId: e, status: t ? l.yY.PREVIEW : l.yY.PENDING });
}
function _() {
    c.setState({ status: l.yY.READY });
}
function E() {
    let { campaignId: e, status: t, wasShown: n } = c.getState();
    null == e ||
        n ||
        t === l.yY.PREVIEW ||
        (c.setState({ wasShown: !0 }),
        r.default.track(o.HAw.SLAYER_STOREFRONT_GAME_EXIT_PROMO_SHOWN, {
            campaign_id: e,
            application_id: (0, s.KJ)(e).applicationId,
        }));
}
function A(e) {
    let { campaignId: t, status: n, wasShown: i } = c.getState();
    null == t ||
        (c.setState(d),
        n !== l.yY.PREVIEW &&
            (0, a.X)(
                i ? o.HAw.SLAYER_STOREFRONT_GAME_EXIT_PROMO_CLOSED : o.HAw.SLAYER_STOREFRONT_GAME_EXIT_PROMO_SKIPPED,
                (0, s.KJ)(t),
                e,
            ));
}
