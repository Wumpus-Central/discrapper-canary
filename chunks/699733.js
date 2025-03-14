n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(704215),
    l = n(243778),
    o = n(309351),
    a = n(921944);
function s() {
    let e = (0, o.H)('ShopNameplateCoachmark'),
        [t, n] = (0, l.US)(e ? [i.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK] : []);
    return {
        shouldShowCoachmark: t === i.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
        dismissCoachmark: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.L.USER_DISMISS;
                n(e);
            },
            [n]
        )
    };
}
