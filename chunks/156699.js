n.d(t, {
    C: () => E,
    R: () => g,
}),
    n(539854),
    n(388685);
var r = n(149765),
    i = n(668781),
    l = n(434404),
    u = n(430824),
    a = n(745752),
    o = n(45966),
    s = n(637853),
    d = n(290511),
    c = n(981631),
    f = n(388032);
async function E(e, t) {
    return (
        null == e ||
        (await S(e, t, {
            removingView: !0,
            removingChat: !0,
        }))
    );
}
async function S(e, t, n) {
    var r;
    let i = u.Z.getGuild(e);
    if (null == i) return !0;
    let l = null != i && (null == (r = i.features) ? void 0 : r.has(c.GuildFeatures.GUILD_ONBOARDING));
    if (
        !l ||
        (l && o.Z.shouldFetchPrompts(e) && (await (0, a.eM)(e)),
        !(function (e) {
            let t = o.Z.getDefaultChannelIds(e);
            if (!o.Z.isAdvancedMode(e)) return t;
            let n = o.Z.getOnboardingPromptsForOnboarding(e),
                r = [];
            for (let e of n) if (e.required) for (let t of e.options) null != t.channelIds && r.push(...t.channelIds);
            return [...new Set([...t, ...r])];
        })(e).includes(t) || !(n.removingChat || n.removingView))
    )
        return !0;
    let f = o.Z.getDefaultChannelIds(e),
        E = o.Z.isAdvancedMode(e) ? o.Z.getOnboardingPromptsForOnboarding(e) : [];
    return !((0, s.kl)(e, f, E, (e) => e !== t && (0, s.V7)(e)).length < d.X);
}
async function g(e, t, n) {
    let u = e.getGuildId();
    if (null == u) return !0;
    null != n && (t = r.hX(t, r.U_(n)));
    let a = e.permissionOverwrites[u],
        s = null != a ? r.hX(a.deny, r.U_(a.allow)) : r.vB(0),
        d = {
            removingView: r.e$(t, c.Plq.VIEW_CHANNEL) && !r.e$(s, c.Plq.VIEW_CHANNEL),
            removingChat: !1,
        };
    if (
        (e.isForumLikeChannel()
            ? (d.removingChat = r.e$(t, c.Plq.SEND_MESSAGES_IN_THREADS) && !r.e$(s, c.Plq.SEND_MESSAGES_IN_THREADS))
            : (d.removingChat = r.e$(t, c.Plq.SEND_MESSAGES) && !r.e$(s, c.Plq.SEND_MESSAGES)),
        !d.removingChat && !d.removingView)
    )
        return !0;
    let E = o.Z.isAdvancedMode(u);
    return (
        !!(await S(u, e.id, d)) ||
        (i.Z.show({
            title: f.intl.string(f.t.ut7sq0),
            body: E
                ? f.intl.format(f.t.r0UjOO, {
                      onClick: () => {
                          i.Z.close(), l.Z.open(u, c.pNK.ONBOARDING);
                      },
                  })
                : f.intl.format(f.t["Zaz+un"], {
                      onClick: () => {
                          i.Z.close(), l.Z.open(u, c.pNK.ONBOARDING);
                      },
                  }),
        }),
        !1)
    );
}
