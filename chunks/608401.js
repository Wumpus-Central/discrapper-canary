"use strict";
n.d(t, { Jg: () => g, default: () => p, Ih: () => A });
var i = n(284009),
    r = n.n(i),
    s = n(192308),
    a = n(686956),
    o = n(976860),
    l = n(669953),
    d = n(817818),
    _ = n(713125);
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
async function p(e) {
    let { guildId: t, returnChannelId: n, isPreview: i = !1 } = e;
    (0, s.closeAllModals)(), r()(null == f[t], "should not double-join guilds");
    let g = await (0, a.k)(t);
    if (g.features.has(h.GuildFeatures.COMMUNITY)) {
        var p;
        if (i) (0, d.sy)(t);
        else {
            if (!g.features.has(h.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, d.h9)(t);
        }
        _.Ay.shouldShowOnboarding(t) &&
            (await ((p = t),
            new Promise((e) => {
                (f[p] = e),
                    new Promise((e) => {
                        c.Ay.addConditionalChangeListener(() => {
                            let t = c.Ay.getSelfMember(p);
                            return (
                                !(0, u.Lt)(t?.flags ?? 0, E.D.COMPLETED_ONBOARDING) ||
                                (l.A.finishOnboarding(p), e(), !1)
                            );
                        });
                    }).then(() => {
                        f[p]?.(), (f[p] = null), l.A.finishOnboarding(p);
                    }),
                    (0, o.pX)(h.BVt.CHANNEL(p, m.VV.GUILD_ONBOARDING));
            })),
            null != n && (0, o.pX)(h.BVt.CHANNEL(t, n)));
    }
}
function A(e) {
    return null != f[e];
}
