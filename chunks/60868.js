n.d(t, {
    F: () => f,
    n: () => g,
}),
    n(321073),
    n(896048);
var l = n(136722),
    i = n(157559),
    r = n(997509),
    u = n(71393),
    a = n(817818),
    o = n(591552),
    s = n(961973),
    d = n(539916),
    c = n(652215),
    E = n(985018);
async function f(e, t) {
    return (
        null == e ||
        (await A(e, t, {
            removingView: !0,
            removingChat: !0,
        }))
    );
}
async function A(e, t, n) {
    var l;
    let i = u.A.getGuild(e);
    if (null == i) return !0;
    let r = null != i && (null == (l = i.features) ? void 0 : l.has(c.GuildFeatures.GUILD_ONBOARDING));
    if (
        !r ||
        (r && o.A.shouldFetchPrompts(e) && (await (0, a.jx)(e)),
        !(function (e) {
            let t = o.A.getDefaultChannelIds(e);
            if (!o.A.isAdvancedMode(e)) return t;
            let n = o.A.getOnboardingPromptsForOnboarding(e),
                l = [];
            for (let e of n) if (e.required) for (let t of e.options) null != t.channelIds && l.push(...t.channelIds);
            return [...new Set([...t, ...l])];
        })(e).includes(t) || !(n.removingChat || n.removingView))
    )
        return !0;
    let E = o.A.getDefaultChannelIds(e),
        f = o.A.isAdvancedMode(e) ? o.A.getOnboardingPromptsForOnboarding(e) : [];
    return !((0, s.G4)(e, E, f, (e) => e !== t && (0, s.VU)(e)).length < d.Kd);
}
async function g(e, t, n) {
    let u = e.getGuildId();
    if (null == u) return !0;
    null != n && (t = l.pb(t, l.B8(n)));
    let a = e.permissionOverwrites[u],
        s = null != a ? l.pb(a.deny, l.B8(a.allow)) : l.iu(0),
        d = {
            removingView: l.zy(t, c.xBc.VIEW_CHANNEL) && !l.zy(s, c.xBc.VIEW_CHANNEL),
            removingChat: !1,
        };
    if (
        (e.isForumLikeChannel()
            ? (d.removingChat = l.zy(t, c.xBc.SEND_MESSAGES_IN_THREADS) && !l.zy(s, c.xBc.SEND_MESSAGES_IN_THREADS))
            : (d.removingChat = l.zy(t, c.xBc.SEND_MESSAGES) && !l.zy(s, c.xBc.SEND_MESSAGES)),
        !d.removingChat && !d.removingView)
    )
        return !0;
    let f = o.A.isAdvancedMode(u);
    return (
        !!(await A(u, e.id, d)) ||
        (i.A.show({
            title: E.intl.string(E.t.ut7sq0),
            body: f
                ? E.intl.format(E.t.r0UjOO, {
                      onClick: () => {
                          i.A.close(), r.A.open(u, c.BEX.ONBOARDING);
                      },
                  })
                : E.intl.format(E.t["Zaz+un"], {
                      onClick: () => {
                          i.A.close(), r.A.open(u, c.BEX.ONBOARDING);
                      },
                  }),
        }),
        !1)
    );
}
