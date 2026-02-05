n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    a = n(397927),
    r = n(685399),
    o = n(475889),
    d = n(693879),
    c = n(435470),
    u = n(84052),
    h = n(96566),
    A = n(863005),
    g = n(71393),
    m = n(576705),
    p = n(222823),
    _ = n(977997),
    x = n(669715),
    f = n(893943),
    E = n(892896),
    C = n(246084),
    I = n(436133),
    S = n(884415),
    b = n(775946),
    N = n(652215),
    T = n(790782),
    j = n(985018);
function v(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: v,
            voiceStates: y,
            enableConnectedUserLimit: R,
            enableActivities: O,
            isSubscriptionGated: L,
            needSubscriptionToAccess: D,
            isNewChannel: M,
            muted: G,
            resolvedUnreadSetting: U,
        } = e,
        P = (0, l.bG)([p.Ay], () => p.Ay.getMentionCount(t.id)),
        k = (0, l.bG)([p.Ay], () => p.Ay.getIsMentionLowImportance(t.id)),
        w = (0, r.Ay)(t),
        V = (0, l.bG)([m.A], () => !m.A.can(N.xBc.CONNECT, t)),
        B = (0, o.H)(t),
        H = (0, l.bG)([_.A], () => _.A.hasVideo(t.id)),
        F = (0, h.qT)(t.id) && t.isGuildStageVoice(),
        Y = (0, C.Ay)({ channel: t, locked: V, video: (H || F) && null == B, selected: n }),
        W = (0, l.bG)([A.A], () => A.A.getNewThreadCount(t.guild_id, t.id)),
        K = (0, c.ed)(t.guild_id, t.id),
        z = (0, l.bG)([g.A], () => g.A.getGuild(t.guild_id)?.features.has(N.GuildFeatures.COMMUNITY) ?? !1);
    if ((0, E.A)(P)) return (0, i.jsx)(b.A, { mentionsCount: P, isMentionLowImportance: k });
    if ((0, u.v)(L)) return (0, i.jsx)(u.A, { locked: D });
    if (M) return (0, i.jsx)(a.LpS, { text: j.intl.string(j.t.y2b7CA), color: s.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!G && U === T.e.ALL_MESSAGES && t.isForumLikeChannel() && null != W && W > 0)
        return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: j.intl.format(j.t.GkAbqY, { count: (0, a.Gub)(W) }),
        });
    if (!G && t.isForumLikeChannel() && null != K && K > 0)
        return (0, i.jsx)(a.Text, { variant: "text-xs/semibold", color: "text-muted", children: (0, a.Gub)(K) });
    let X = y?.length ?? 0;
    return null != R && R && Y
        ? (0, i.jsx)(S.A, { userCount: X, video: H || F, channel: t })
        : v && (0, x.t)(y) && z
          ? (0, i.jsx)(a.LpS, { text: j.intl.string(j.t.dI3q4h), color: s.A.unsafe_rawColors.RED_400.css })
          : null != B
            ? (0, i.jsx)(d.z, { textColor: "text-feedback-positive", entry: { start: B } })
            : null != O && O && (0, f.X)(w)
              ? (0, i.jsx)(I.A, { embeddedApps: w, muted: G })
              : null;
}
