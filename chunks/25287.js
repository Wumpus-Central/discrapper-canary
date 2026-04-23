n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(485845),
    r = n(311907),
    s = n(477782),
    o = n(778712),
    d = n(885574),
    c = n(803306),
    u = n(966327),
    g = n(688810),
    A = n(597929),
    h = n(263063),
    m = n(657331),
    f = n(260509),
    p = n(427157),
    E = n(734057),
    y = n(71393),
    v = n(287809),
    _ = n(985018);
function S(e) {
    let { analyticsLocations: t } = (0, g.Ay)(),
        n = e.interactionMetadata?.authorizing_integration_owners[a.b.USER_INSTALL],
        S = e.interactionMetadata?.authorizing_integration_owners[a.b.GUILD_INSTALL],
        I = e.interactionMetadata?.user.id,
        x = (0, r.bG)([v.default], () => v.default.getUser(n)),
        b = (0, r.bG)([y.A], () => y.A.getGuild(S)),
        T = E.A.getChannel(e.channel_id),
        M = T?.getGuildId(),
        C = (0, r.bG)([v.default], () => v.default.getUser(I));
    if (
        (l.useEffect(() => {
            null == x && null != n && (0, c.wz)(n);
        }, [x, n]),
        !(0, A._)(e))
    )
        return null;
    null == C && (C = new p.A(e.interactionMetadata?.user));
    let D = null;
    if (null != b) {
        let t = (0, f.Iv)(b, 18, !0);
        D = (0, i.jsx)(s.Dr, {
            disabled: !0,
            iconLeft: () => (0, i.jsx)(h.Ay, { guild: b, size: h.Ay.Sizes.MINI }),
            leadingAccessory: null != t ? { type: "image", src: t } : void 0,
            id: "integration-owner",
            label: b.name,
            subtext: _.intl.formatToPlainString(_.t.ShLXXB, { application: e.author.username }),
        });
    } else
        null != x &&
            (D = (0, i.jsx)(s.Dr, {
                action: () =>
                    (0, m.openUserProfileModal)({
                        userId: x.id,
                        guildId: M,
                        channelId: e.channel_id,
                        sourceAnalyticsLocations: t,
                    }),
                leadingAccessory: { type: "avatar", src: x.getAvatarURL(M, 18) },
                id: "integration-owner",
                label: x.username,
                iconLeft: () => (0, i.jsx)(u.A, { user: x, size: o._3.SIZE_20 }),
                subtext: _.intl.formatToPlainString(_.t.ShLXXB, { application: e.author.username }),
            }));
    return (0, i.jsxs)(s.Dr, {
        id: "view-interaction-info",
        label: _.intl.string(_.t.Rjezbz),
        leadingAccessory: { type: "icon", icon: d.m },
        children: [
            D,
            null != C
                ? (0, i.jsx)(s.Dr, {
                      action: () =>
                          (0, m.openUserProfileModal)({
                              userId: C.id,
                              guildId: M,
                              channelId: e.channel_id,
                              sourceAnalyticsLocations: t,
                          }),
                      leadingAccessory: { type: "avatar", src: C.getAvatarURL(M, 18) },
                      iconLeft: () => (0, i.jsx)(u.A, { user: C, size: o._3.SIZE_20 }),
                      id: "interaction-user",
                      label: C.username,
                      subtext: _.intl.string(_.t["04gxNg"]),
                  })
                : null,
        ],
    });
}
