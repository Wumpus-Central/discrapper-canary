"use strict";
n.d(t, { Jg: () => m, default: () => g, Ih: () => A });
var i = n(284009),
    r = n.n(i),
    s = n(192308),
    a = n(66834),
    o = n(976860),
    l = n(669953),
    u = n(817818),
    c = n(713125);
n(938796);
var d = n(665260),
    _ = n(696451),
    f = n(340837),
    h = n(652215),
    p = n(746080);
let E = {};
function m(e) {
    E[e] = null;
}
async function g(e) {
    let { guildId: t, returnChannelId: n, isPreview: i = !1 } = e;
    (0, s.closeAllModals)(), r()(null == E[t], "should not double-join guilds");
    let m = await (0, a.k)(t);
    if (m.features.has(h.GuildFeatures.COMMUNITY)) {
        var g;
        if (i) (0, u.sy)(t);
        else {
            if (!m.features.has(h.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, u.h9)(t);
        }
        c.Ay.shouldShowOnboarding(t) &&
            (await ((g = t),
            new Promise((e) => {
                (E[g] = e),
                    new Promise((e) => {
                        _.Ay.addConditionalChangeListener(() => {
                            let t = _.Ay.getSelfMember(g);
                            return (
                                !(0, d.Lt)(t?.flags ?? 0, f.D.COMPLETED_ONBOARDING) ||
                                (l.A.finishOnboarding(g), e(), !1)
                            );
                        });
                    }).then(() => {
                        E[g]?.(), (E[g] = null), l.A.finishOnboarding(g);
                    }),
                    (0, o.pX)(h.BVt.CHANNEL(g, p.VV.GUILD_ONBOARDING));
            })),
            null != n && (0, o.pX)(h.BVt.CHANNEL(t, n)));
    }
}
function A(e) {
    return null != E[e];
}
