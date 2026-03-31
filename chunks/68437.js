n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    a = n(397927),
    r = n(685399),
    o = n(475889),
    c = n(693879),
    d = n(435470),
    u = n(84052),
    h = n(96566),
    A = n(863005),
    _ = n(71393),
    m = n(576705),
    g = n(222823),
    p = n(977997),
    f = n(669715),
    x = n(893943),
    E = n(892896),
    I = n(246084),
    C = n(436133),
    N = n(884415),
    T = n(775946),
    S = n(652215),
    b = n(790782),
    y = n(985018);
function v(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: v,
            voiceStates: j,
            enableConnectedUserLimit: R,
            enableActivities: O,
            isSubscriptionGated: L,
            needSubscriptionToAccess: M,
            isNewChannel: D,
            muted: U,
            resolvedUnreadSetting: G,
        } = e,
        P = (0, l.bG)([g.Ay], () => g.Ay.getMentionCount(t.id)),
        k = (0, l.bG)([g.Ay], () => g.Ay.getIsMentionLowImportance(t.id)),
        w = (0, r.Ay)(t),
        B = (0, l.bG)([m.A], () => !m.A.can(S.xBc.CONNECT, t)),
        V = (0, o.H)(t),
        H = (0, l.bG)([p.A], () => p.A.hasVideo(t.id)),
        F = (0, h.qT)(t.id) && t.isGuildStageVoice(),
        K = (0, I.Ay)({ channel: t, locked: B, video: (H || F) && null == V, selected: n }),
        W = (0, l.bG)([A.A], () => A.A.getNewThreadCount(t.guild_id, t.id)),
        Y = (0, d.ed)(t.guild_id, t.id),
        z = (0, l.bG)([_.A], () => _.A.getGuild(t.guild_id)?.features.has(S.GuildFeatures.COMMUNITY) ?? !1);
    if ((0, E.A)(P)) return (0, i.jsx)(T.A, { mentionsCount: P, isMentionLowImportance: k });
    if ((0, u.v)(L)) return (0, i.jsx)(u.A, { locked: M });
    if (D) return (0, i.jsx)(a.LpS, { text: y.intl.string(y.t.y2b7CA), color: s.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!U && G === b.e.ALL_MESSAGES && t.isForumLikeChannel() && null != W && W > 0)
        return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: y.intl.format(y.t.GkAbqY, { count: (0, a.Gub)(W) }),
        });
    if (!U && t.isForumLikeChannel() && null != Y && Y > 0)
        return (0, i.jsx)(a.Text, { variant: "text-xs/semibold", color: "text-muted", children: (0, a.Gub)(Y) });
    let q = j?.length ?? 0;
    return null != R && R && K
        ? (0, i.jsx)(N.A, { userCount: q, video: H || F, channel: t })
        : v && (0, f.t)(j) && z
          ? (0, i.jsx)(a.LpS, { text: y.intl.string(y.t.dI3q4h), color: s.A.unsafe_rawColors.RED_400.css })
          : null != V
            ? (0, i.jsx)(c.z, { textColor: "text-feedback-positive", entry: { start: V } })
            : null != O && O && (0, x.X)(w)
              ? (0, i.jsx)(C.A, { embeddedApps: w, muted: U })
              : null;
}
