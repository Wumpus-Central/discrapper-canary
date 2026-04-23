n.d(t, { k: () => g });
var i = n(935649),
    s = n(847599),
    l = n(36149),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(590321),
    u = n(985018);
function c() {
    return (0, l.yM)() ? u.intl.string(u.t.sK0dmH) : u.intl.string(u.t.lKDPGA);
}
let g = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
    usePredicate: () => (0, d.f)("verify"),
    useTitle: () => u.intl.string(u.t["/52UYy"]),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: r._1.TEXT, useText: c }),
    useLabel: function () {
        return (0, l.yM)() ? u.intl.string(u.t["9KiIz6"]) : u.intl.string(u.t.DVywUB);
    },
    onClick: () => i.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.ACCOUNT_AGE_GROUP }),
});
