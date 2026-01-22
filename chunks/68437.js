n.d(t, {
    A: () => I,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(827734),
    a = n(397927),
    s = n(685399),
    o = n(475889),
    c = n(693879),
    u = n(435470),
    d = n(84052),
    f = n(96566),
    p = n(863005),
    h = n(71393),
    b = n(576705),
    g = n(222823),
    m = n(977997),
    A = n(669715),
    y = n(893943),
    O = n(892896),
    j = n(246084),
    v = n(436133),
    x = n(884415),
    E = n(775946),
    _ = n(652215),
    C = n(790782),
    S = n(985018);

function I(e) {
    var t;
    let {
            channel: n,
            isChannelSelected: I,
            isChannelCollapsed: N,
            voiceStates: T,
            enableConnectedUserLimit: P,
            enableActivities: w,
            isSubscriptionGated: R,
            needSubscriptionToAccess: D,
            isNewChannel: M,
            muted: L,
            resolvedUnreadSetting: G,
        } = e,
        k = (0, l.bG)([g.Ay], () => g.Ay.getMentionCount(n.id)),
        U = (0, l.bG)([g.Ay], () => g.Ay.getIsMentionLowImportance(n.id)),
        V = (0, s.Ay)(n),
        F = (0, l.bG)([b.A], () => !b.A.can(_.xBc.CONNECT, n)),
        H = (0, o.H)(n),
        B = (0, l.bG)([m.A], () => m.A.hasVideo(n.id)),
        K = (0, f.qT)(n.id) && n.isGuildStageVoice(),
        W = (0, j.Ay)({
            channel: n,
            locked: F,
            video: (B || K) && null == H,
            selected: I,
        }),
        z = (0, l.bG)([p.A], () => p.A.getNewThreadCount(n.guild_id, n.id)),
        Y = (0, u.ed)(n.guild_id, n.id),
        q = (0, l.bG)([h.A], () => {
            var e, t;
            return (
                null !=
                    (e = null == (t = h.A.getGuild(n.guild_id)) ? void 0 : t.features.has(_.GuildFeatures.COMMUNITY)) &&
                e
            );
        });
    if ((0, O.A)(k))
        return (0, r.jsx)(E.A, {
            mentionsCount: k,
            isMentionLowImportance: U,
        });
    if ((0, d.v)(R))
        return (0, r.jsx)(d.A, {
            locked: D,
        });
    if (M)
        return (0, r.jsx)(a.LpS, {
            text: S.intl.string(S.t.y2b7CA),
            color: i.A.colors.BADGE_BACKGROUND_BRAND.css,
        });
    if (!L && G === C.e.ALL_MESSAGES && n.isForumLikeChannel() && null != z && z > 0)
        return (0, r.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: S.intl.format(S.t.GkAbqY, {
                count: (0, a.Gub)(z),
            }),
        });
    if (!L && n.isForumLikeChannel() && null != Y && Y > 0)
        return (0, r.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, a.Gub)(Y),
        });
    let X = null != (t = null == T ? void 0 : T.length) ? t : 0;
    return null != P && P && W
        ? (0, r.jsx)(x.A, {
              userCount: X,
              video: B || K,
              channel: n,
          })
        : N && (0, A.t)(T) && q
          ? (0, r.jsx)(a.LpS, {
                text: S.intl.string(S.t.dI3q4h),
                color: i.A.unsafe_rawColors.RED_400.css,
            })
          : null != H
            ? (0, r.jsx)(c.z, {
                  textColor: "text-feedback-positive",
                  entry: {
                      start: H,
                  },
              })
            : null != w && w && (0, y.X)(V)
              ? (0, r.jsx)(v.A, {
                    embeddedApps: V,
                    muted: L,
                })
              : null;
}
