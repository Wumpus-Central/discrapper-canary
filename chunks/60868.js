n.d(t, { F: () => A, n: () => N }), n(321073);
var l = n(136722),
    i = n(157559),
    r = n(997509),
    u = n(71393),
    a = n(817818),
    s = n(591552),
    d = n(961973),
    o = n(539916),
    E = n(652215),
    c = n(985018);
async function A(e, t) {
    return null == e || (await f(e, t, { removingView: !0, removingChat: !0 }));
}
async function f(e, t, n) {
    let l = u.A.getGuild(e);
    if (
        null == l ||
        !(null != l && l.features?.has(E.GuildFeatures.GUILD_ONBOARDING)) ||
        (s.A.shouldFetchPrompts(e) && (await (0, a.jx)(e)),
        !(function (e) {
            let t = s.A.getDefaultChannelIds(e);
            if (!s.A.isAdvancedMode(e)) return t;
            let n = s.A.getOnboardingPromptsForOnboarding(e),
                l = [];
            for (let e of n) if (e.required) for (let t of e.options) null != t.channelIds && l.push(...t.channelIds);
            return [...new Set([...t, ...l])];
        })(e).includes(t) || !(n.removingChat || n.removingView))
    )
        return !0;
    let i = s.A.getDefaultChannelIds(e),
        r = s.A.isAdvancedMode(e) ? s.A.getOnboardingPromptsForOnboarding(e) : [];
    return !((0, d.G4)(e, i, r, (e) => e !== t && (0, d.VU)(e)).length < o.Kd);
}
async function N(e, t, n) {
    let u = e.getGuildId();
    if (null == u) return !0;
    null != n && (t = l.pb(t, l.B8(n)));
    let a = e.permissionOverwrites[u],
        d = null != a ? l.pb(a.deny, l.B8(a.allow)) : l.iu(0),
        o = { removingView: l.zy(t, E.xBc.VIEW_CHANNEL) && !l.zy(d, E.xBc.VIEW_CHANNEL), removingChat: !1 };
    if (
        (e.isForumLikeChannel()
            ? (o.removingChat = l.zy(t, E.xBc.SEND_MESSAGES_IN_THREADS) && !l.zy(d, E.xBc.SEND_MESSAGES_IN_THREADS))
            : (o.removingChat = l.zy(t, E.xBc.SEND_MESSAGES) && !l.zy(d, E.xBc.SEND_MESSAGES)),
        !o.removingChat && !o.removingView)
    )
        return !0;
    let A = s.A.isAdvancedMode(u);
    return (
        !!(await f(u, e.id, o)) ||
        (i.A.show({
            title: c.intl.string(c.t.ut7sq0),
            body: A
                ? c.intl.format(c.t.r0UjOO, {
                      onClick: () => {
                          i.A.close(), r.A.open(u, E.BEX.ONBOARDING);
                      },
                  })
                : c.intl.format(c.t["Zaz+un"], {
                      onClick: () => {
                          i.A.close(), r.A.open(u, E.BEX.ONBOARDING);
                      },
                  }),
        }),
        !1)
    );
}
