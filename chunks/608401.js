"use strict";
n.d(t, { Jg: () => g, default: () => A, Ih: () => I });
var i = n(284009),
    r = n.n(i),
    s = n(192308),
    a = n(686956),
    o = n(976860),
    l = n(669953),
    _ = n(817818),
    d = n(713125);
n(938796);
var u = n(665260),
    c = n(696451),
    E = n(340837),
    h = n(652215),
    m = n(746080);
let f = {};
function g(e) {
    f[e] = null;
}
async function A(e) {
    let { guildId: t, returnChannelId: n, isPreview: i = !1 } = e;
    (0, s.closeAllModals)(), r()(null == f[t], "should not double-join guilds");
    let g = await (0, a.k)(t);
    if (g.features.has(h.GuildFeatures.COMMUNITY)) {
        var A;
        if (i) (0, _.sy)(t);
        else {
            if (!g.features.has(h.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, _.h9)(t);
        }
        d.Ay.shouldShowOnboarding(t) &&
            (await ((A = t),
            new Promise((e) => {
                (f[A] = e),
                    new Promise((e) => {
                        c.Ay.addConditionalChangeListener(() => {
                            let t = c.Ay.getSelfMember(A);
                            return (
                                !(0, u.Lt)(t?.flags ?? 0, E.D.COMPLETED_ONBOARDING) ||
                                (l.A.finishOnboarding(A), e(), !1)
                            );
                        });
                    }).then(() => {
                        f[A]?.(), (f[A] = null), l.A.finishOnboarding(A);
                    }),
                    (0, o.pX)(h.BVt.CHANNEL(A, m.VV.GUILD_ONBOARDING));
            })),
            null != n && (0, o.pX)(h.BVt.CHANNEL(t, n)));
    }
}
function I(e) {
    return null != f[e];
}
