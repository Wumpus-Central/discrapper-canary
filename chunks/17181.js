r.r(n),
    r.d(n, {
        default: function () {
            return E;
        },
        discardOnboardingPromise: function () {
            return g;
        },
        isOnboardingActiveForGuild: function () {
            return y;
        },
        openAndWaitForOnboarding: function () {
            return v;
        }
    });
var i = r(512722),
    a = r.n(i),
    o = r(481060),
    s = r(749210),
    l = r(703656),
    u = r(549817),
    c = r(745752),
    d = r(819553),
    f = r(679240),
    p = r(981631),
    h = r(176505);
let _ = {};
function m(e) {
    var n;
    null === (n = _[e]) || void 0 === n || n.call(_), (_[e] = null);
}
function g(e) {
    _[e] = null;
}
async function E(e) {
    let { guildId: n, returnChannelId: r, isPreview: i = !1 } = e;
    (0, o.closeAllModals)(), a()(null == _[n], 'should not double-join guilds');
    let u = await (0, s.V)(n);
    if (u.hasFeature(p.oNc.COMMUNITY)) {
        if (i) (0, c.I1)(n);
        else {
            if (!u.hasFeature(p.oNc.GUILD_ONBOARDING)) return;
            await (0, c.rK)(n);
        }
        d.ZP.shouldShowOnboarding(n) && (await v(n), null != r && (0, l.uL)(p.Z5c.CHANNEL(n, r)));
    }
}
function v(e) {
    return new Promise((n) => {
        (_[e] = n),
            (0, f.x)(e).then(() => {
                m(e), u.Z.finishOnboarding(e);
            }),
            (0, l.uL)(p.Z5c.CHANNEL(e, h.oC.GUILD_ONBOARDING));
    });
}
function y(e) {
    return null != _[e];
}
