t(321073);
var i = t(136722),
    r = t(157559),
    o = t(727419),
    l = t(71393),
    a = t(817818),
    u = t(591552),
    s = t(961973);
t(539916);
var d = t(652215),
    c = t(792996);
async function A(n, e, t) {
    let i = l.A.getGuild(n);
    if (
        null == i ||
        !(null != i && i.features?.has(d.GuildFeatures.GUILD_ONBOARDING)) ||
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
    return !((0, s.G4)(n, r, o, (n) => n !== e && (0, s.VU)(n)).length < 0);
}
t.d(
    e,
    {},
    {
        F: async function (n, e) {
            return null == n || (await A(n, e, { removingView: !0, removingChat: !0 }));
        },
        n: async function (n, e, t) {
            let l = n.getGuildId();
            if (null == l) return !0;
            null != t && (e = i.pb(e, i.B8(t)));
            let a = n.permissionOverwrites[l],
                s = null != a ? i.pb(a.deny, i.B8(a.allow)) : i.iu(0),
                g = { removingView: i.zy(e, d.xBc.VIEW_CHANNEL) && !i.zy(s, d.xBc.VIEW_CHANNEL), removingChat: !1 };
            if (
                (n.isForumLikeChannel()
                    ? (g.removingChat =
                          i.zy(e, d.xBc.SEND_MESSAGES_IN_THREADS) && !i.zy(s, d.xBc.SEND_MESSAGES_IN_THREADS))
                    : (g.removingChat = i.zy(e, d.xBc.SEND_MESSAGES) && !i.zy(s, d.xBc.SEND_MESSAGES)),
                !g.removingChat && !g.removingView)
            )
                return !0;
            let h = u.A.isAdvancedMode(l);
            return (
                !!(await A(l, n.id, g)) ||
                (r.A.show({
                    title: c.intl.string(c.t.ut7sq0),
                    body: h
                        ? c.intl.format(c.t.r0UjOO, {
                              onClick: () => {
                                  (r.A.close(), o.A.open(l, d.BEX.ONBOARDING));
                              },
                          })
                        : c.intl.format(c.t["Zaz+un"], {
                              onClick: () => {
                                  (r.A.close(), o.A.open(l, d.BEX.ONBOARDING));
                              },
                          }),
                }),
                !1)
            );
        },
    },
);
