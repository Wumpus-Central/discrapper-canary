n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(485845),
    r = n(311907),
    s = n(397927),
    o = n(803306),
    d = n(966327),
    c = n(688810),
    u = n(597929),
    g = n(263063),
    A = n(657331),
    p = n(260509),
    m = n(427157),
    f = n(734057),
    y = n(71393),
    h = n(287809),
    E = n(985018);
function S(e) {
    let { analyticsLocations: t } = (0, c.Ay)(),
        n = e.interactionMetadata?.authorizing_integration_owners[a.b.USER_INSTALL],
        S = e.interactionMetadata?.authorizing_integration_owners[a.b.GUILD_INSTALL],
        _ = e.interactionMetadata?.user.id,
        b = (0, r.bG)([h.default], () => h.default.getUser(n)),
        v = (0, r.bG)([y.A], () => y.A.getGuild(S)),
        I = f.A.getChannel(e.channel_id),
        T = I?.getGuildId(),
        x = (0, r.bG)([h.default], () => h.default.getUser(_));
    if (
        (l.useEffect(() => {
            null == b && null != n && (0, o.wz)(n);
        }, [b, n]),
        !(0, u._)(e))
    )
        return null;
    null == x && (x = new m.A(e.interactionMetadata?.user));
    let D = null;
    if (null != v) {
        let t = (0, p.Iv)(v, 18, !0);
        D = (0, i.jsx)(s.Drp, {
            disabled: !0,
            iconLeft: () => (0, i.jsx)(g.A, { guild: v, size: g.A.Sizes.MINI }),
            leadingAccessory: null != t ? { type: "image", src: t } : void 0,
            id: "integration-owner",
            label: v.name,
            subtext: E.intl.formatToPlainString(E.t.ShLXXB, { application: e.author.username }),
        });
    } else
        null != b &&
            (D = (0, i.jsx)(s.Drp, {
                action: () =>
                    (0, A.openUserProfileModal)({
                        userId: b.id,
                        guildId: T,
                        channelId: e.channel_id,
                        sourceAnalyticsLocations: t,
                    }),
                leadingAccessory: { type: "avatar", src: b.getAvatarURL(T, 18) },
                id: "integration-owner",
                label: b.username,
                iconLeft: () => (0, i.jsx)(d.A, { user: b, size: s._3J.SIZE_20 }),
                subtext: E.intl.formatToPlainString(E.t.ShLXXB, { application: e.author.username }),
            }));
    return (0, i.jsxs)(s.Drp, {
        id: "view-interaction-info",
        label: E.intl.string(E.t.Rjezbz),
        leadingAccessory: { type: "icon", icon: s.mir },
        children: [
            D,
            null != x
                ? (0, i.jsx)(s.Drp, {
                      action: () =>
                          (0, A.openUserProfileModal)({
                              userId: x.id,
                              guildId: T,
                              channelId: e.channel_id,
                              sourceAnalyticsLocations: t,
                          }),
                      leadingAccessory: { type: "avatar", src: x.getAvatarURL(T, 18) },
                      iconLeft: () => (0, i.jsx)(d.A, { user: x, size: s._3J.SIZE_20 }),
                      id: "interaction-user",
                      label: x.username,
                      subtext: E.intl.string(E.t["04gxNg"]),
                  })
                : null,
        ],
    });
}
