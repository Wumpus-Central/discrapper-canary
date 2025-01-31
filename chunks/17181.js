n.d(t, {
    EI: () => m,
    default: () => g,
    hz: () => v
});
var i = n(512722),
    r = n.n(i),
    a = n(481060),
    s = n(749210),
    o = n(703656),
    l = n(549817),
    u = n(745752),
    c = n(819553),
    d = n(679240),
    f = n(981631),
    _ = n(176505);
let p = {};
function h(e) {
    var t;
    null === (t = p[e]) || void 0 === t || t.call(p), (p[e] = null);
}
function m(e) {
    p[e] = null;
}
async function g(e) {
    let { guildId: t, returnChannelId: n, isPreview: i = !1 } = e;
    (0, a.pTH)(), r()(null == p[t], 'should not double-join guilds');
    let l = await (0, s.V)(t);
    if (l.hasFeature(f.oNc.COMMUNITY)) {
        if (i) (0, u.I1)(t);
        else {
            if (!l.hasFeature(f.oNc.GUILD_ONBOARDING)) return;
            await (0, u.rK)(t);
        }
        c.ZP.shouldShowOnboarding(t) && (await E(t), null != n && (0, o.uL)(f.Z5c.CHANNEL(t, n)));
    }
}
function E(e) {
    return new Promise((t) => {
        (p[e] = t),
            (0, d.x)(e).then(() => {
                h(e), l.Z.finishOnboarding(e);
            }),
            (0, o.uL)(f.Z5c.CHANNEL(e, _.oC.GUILD_ONBOARDING));
    });
}
function v(e) {
    return null != p[e];
}
