n.d(t, { Jg: () => I, default: () => p, Ih: () => T });
var i = n(284009),
    r = n.n(i),
    a = n(192308),
    s = n(66834),
    l = n(976860),
    o = n(669953),
    d = n(817818),
    c = n(713125);
n(938796);
var u = n(665260),
    _ = n(696451),
    E = n(340837),
    A = n(652215),
    h = n(746080);
let f = {};
function I(e) {
    f[e] = null;
}
async function p(e) {
    let { guildId: t, returnChannelId: n, isPreview: i = !1 } = e;
    ((0, a.closeAllModals)(), r()(null == f[t], "should not double-join guilds"));
    let I = await (0, s.k)(t);
    if (I.features.has(A.GuildFeatures.COMMUNITY)) {
        var p;
        if (i) (0, d.sy)(t);
        else {
            if (!I.features.has(A.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, d.h9)(t);
        }
        c.Ay.shouldShowOnboarding(t) &&
            (await ((p = t),
            new Promise((e) => {
                ((f[p] = e),
                    new Promise((e) => {
                        _.Ay.addConditionalChangeListener(() => {
                            let t = _.Ay.getSelfMember(p);
                            return (
                                !(0, u.Lt)(t?.flags ?? 0, E.D.COMPLETED_ONBOARDING) ||
                                (o.A.finishOnboarding(p), e(), !1)
                            );
                        });
                    }).then(() => {
                        (f[p]?.(), (f[p] = null), o.A.finishOnboarding(p));
                    }),
                    (0, l.pX)(A.BVt.CHANNEL(p, h.VV.GUILD_ONBOARDING)));
            })),
            null != n && (0, l.pX)(A.BVt.CHANNEL(t, n)));
    }
}
function T(e) {
    return null != f[e];
}
