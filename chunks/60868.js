t.d(e, { F: () => g, n: () => E }), t(321073);
var i = t(136722),
    r = t(157559),
    o = t(468689),
    l = t(71393),
    a = t(817818),
    u = t(591552),
    s = t(961973),
    d = t(539916),
    c = t(652215),
    A = t(375708);
async function g(n, e) {
    return null == n || (await h(n, e, { removingView: !0, removingChat: !0 }));
}
async function h(n, e, t) {
    let i = l.A.getGuild(n);
    if (
        null == i ||
        !(null != i && i.features?.has(c.GuildFeatures.GUILD_ONBOARDING)) ||
        (u.A.shouldFetchPrompts(n) && (await (0, a.jx)(n)),
        !(function (n) {
            let e = u.A.getDefaultChannelIds(n);
            if (!u.A.isAdvancedMode(n)) return e;
            let t = u.A.getOnboardingPromptsForOnboarding(n),
                i = [];
            for (let n of t) if (n.required) for (let e of n.options) null != e.channelIds && i.push(...e.channelIds);
            return [...new Set([...e, ...i])];
        })(n).includes(e) || !(t.removingChat || t.removingView))
    )
        return !0;
    let r = u.A.getDefaultChannelIds(n),
        o = u.A.isAdvancedMode(n) ? u.A.getOnboardingPromptsForOnboarding(n) : [];
    return !((0, s.G4)(n, r, o, (n) => n !== e && (0, s.VU)(n)).length < d.Kd);
}
async function E(n, e, t) {
    let l = n.getGuildId();
    if (null == l) return !0;
    null != t && (e = i.pb(e, i.B8(t)));
    let a = n.permissionOverwrites[l],
        s = null != a ? i.pb(a.deny, i.B8(a.allow)) : i.iu(0),
        d = { removingView: i.zy(e, c.xBc.VIEW_CHANNEL) && !i.zy(s, c.xBc.VIEW_CHANNEL), removingChat: !1 };
    if (
        (n.isForumLikeChannel()
            ? (d.removingChat = i.zy(e, c.xBc.SEND_MESSAGES_IN_THREADS) && !i.zy(s, c.xBc.SEND_MESSAGES_IN_THREADS))
            : (d.removingChat = i.zy(e, c.xBc.SEND_MESSAGES) && !i.zy(s, c.xBc.SEND_MESSAGES)),
        !d.removingChat && !d.removingView)
    )
        return !0;
    let g = u.A.isAdvancedMode(l);
    return (
        !!(await h(l, n.id, d)) ||
        (r.A.show({
            title: A.intl.string(A.t.ut7sq0),
            body: g
                ? A.intl.format(A.t.r0UjOO, {
                      onClick: () => {
                          r.A.close(), o.A.open(l, c.BEX.ONBOARDING);
                      },
                  })
                : A.intl.format(A.t["Zaz+un"], {
                      onClick: () => {
                          r.A.close(), o.A.open(l, c.BEX.ONBOARDING);
                      },
                  }),
        }),
        !1)
    );
}
