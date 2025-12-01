n.d(t, {
    EI: () => h,
    default: () => g,
    hz: () => b,
});
var r = n(512722),
    i = n.n(r),
    a = n(481060),
    o = n(749210),
    s = n(703656),
    l = n(549817),
    c = n(745752),
    u = n(819553),
    d = n(679240),
    f = n(981631),
    p = n(176505);
let _ = {};
function m(e) {
    var t;
    null == (t = _[e]) || t.call(_), (_[e] = null);
}
function h(e) {
    _[e] = null;
}
async function g(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, a.pTH)(), i()(null == _[t], "should not double-join guilds");
    let l = await (0, o.V)(t);
    if (l.features.has(f.GuildFeatures.COMMUNITY)) {
        if (r) (0, c.I1)(t);
        else {
            if (!l.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, c.rK)(t);
        }
        u.ZP.shouldShowOnboarding(t) && (await E(t), null != n && (0, s.uL)(f.Z5c.CHANNEL(t, n)));
    }
}
function E(e) {
    return new Promise((t) => {
        (_[e] = t),
            (0, d.x)(e).then(() => {
                m(e), l.Z.finishOnboarding(e);
            }),
            (0, s.uL)(f.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
    });
}
function b(e) {
    return null != _[e];
}
