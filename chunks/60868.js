(t.d(n, { F: () => g, n: () => f }), t(321073));
var i = t(136722),
    r = t(157559),
    l = t(468689),
    o = t(71393),
    a = t(817818),
    u = t(591552),
    s = t(961973),
    d = t(539916),
    c = t(652215),
    A = t(375708);
async function g(e, n) {
    return null == e || (await h(e, n, { removingView: !0, removingChat: !0 }));
}
async function h(e, n, t) {
    let i = o.A.getGuild(e);
    if (
        null == i ||
        !(null != i && i.features?.has(c.GuildFeatures.GUILD_ONBOARDING)) ||
        (u.A.shouldFetchPrompts(e) && (await (0, a.jx)(e)),
        !(function (e) {
            let n = u.A.getDefaultChannelIds(e);
            if (!u.A.isAdvancedMode(e)) return n;
            let t = u.A.getOnboardingPromptsForOnboarding(e),
                i = [];
            for (let e of t) if (e.required) for (let n of e.options) null != n.channelIds && i.push(...n.channelIds);
            return [...new Set([...n, ...i])];
        })(e).includes(n) || !(t.removingChat || t.removingView))
    )
        return !0;
    let r = u.A.getDefaultChannelIds(e),
        l = u.A.isAdvancedMode(e) ? u.A.getOnboardingPromptsForOnboarding(e) : [];
    return !((0, s.G4)(e, r, l, (e) => e !== n && (0, s.VU)(e)).length < d.Kd);
}
async function f(e, n, t) {
    let o = e.getGuildId();
    if (null == o) return !0;
    null != t && (n = i.pb(n, i.B8(t)));
    let a = e.permissionOverwrites[o],
        s = null != a ? i.pb(a.deny, i.B8(a.allow)) : i.iu(0),
        d = { removingView: i.zy(n, c.xBc.VIEW_CHANNEL) && !i.zy(s, c.xBc.VIEW_CHANNEL), removingChat: !1 };
    if (
        (e.isForumLikeChannel()
            ? (d.removingChat = i.zy(n, c.xBc.SEND_MESSAGES_IN_THREADS) && !i.zy(s, c.xBc.SEND_MESSAGES_IN_THREADS))
            : (d.removingChat = i.zy(n, c.xBc.SEND_MESSAGES) && !i.zy(s, c.xBc.SEND_MESSAGES)),
        !d.removingChat && !d.removingView)
    )
        return !0;
    let g = u.A.isAdvancedMode(o);
    return (
        !!(await h(o, e.id, d)) ||
        (r.A.show({
            title: A.intl.string(A.t.ut7sq0),
            body: g
                ? A.intl.format(A.t.r0UjOO, {
                      onClick: () => {
                          (r.A.close(), l.default.open(o, c.BEX.ONBOARDING));
                      },
                  })
                : A.intl.format(A.t["Zaz+un"], {
                      onClick: () => {
                          (r.A.close(), l.default.open(o, c.BEX.ONBOARDING));
                      },
                  }),
        }),
        !1)
    );
}
