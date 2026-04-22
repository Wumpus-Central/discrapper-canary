n.d(t, { A: () => R });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    a = n(777666),
    r = n(834730),
    o = n(685399),
    d = n(475889),
    c = n(693879),
    u = n(435470),
    h = n(84052),
    A = n(96566),
    _ = n(863005),
    m = n(71393),
    g = n(576705),
    p = n(222823),
    f = n(977997),
    E = n(669715),
    x = n(893943),
    I = n(892896),
    C = n(246084),
    b = n(436133),
    N = n(884415),
    S = n(775946),
    v = n(652215),
    T = n(790782),
    y = n(985018);
function R(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: R,
            voiceStates: j,
            enableConnectedUserLimit: L,
            enableActivities: O,
            isSubscriptionGated: G,
            needSubscriptionToAccess: D,
            isNewChannel: M,
            muted: U,
            resolvedUnreadSetting: P,
        } = e,
        w = (0, l.bG)([p.Ay], () => p.Ay.getMentionCount(t.id)),
        k = (0, l.bG)([p.Ay], () => p.Ay.getIsMentionLowImportance(t.id)),
        V = (0, o.Ay)(t),
        B = (0, l.bG)([g.A], () => !g.A.can(v.xBc.CONNECT, t)),
        H = (0, d.H)(t),
        F = (0, l.bG)([f.A], () => f.A.hasVideo(t.id)),
        W = (0, A.qT)(t.id) && t.isGuildStageVoice(),
        Y = (0, C.Ay)({ channel: t, locked: B, video: (F || W) && null == H, selected: n }),
        K = (0, l.bG)([_.A], () => _.A.getNewThreadCount(t.guild_id, t.id)),
        z = (0, u.ed)(t.guild_id, t.id),
        q = (0, l.bG)([m.A], () => m.A.getGuild(t.guild_id)?.features.has(v.GuildFeatures.COMMUNITY) ?? !1);
    if ((0, I.A)(w)) return (0, i.jsx)(S.A, { mentionsCount: w, isMentionLowImportance: k });
    if ((0, h.v)(G)) return (0, i.jsx)(h.A, { locked: D });
    if (M) return (0, i.jsx)(a.Lp, { text: y.intl.string(y.t.y2b7CA), color: s.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!U && P === T.e.ALL_MESSAGES && t.isForumLikeChannel() && null != K && K > 0)
        return (0, i.jsx)(r.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: y.intl.format(y.t.GkAbqY, { count: (0, a.Gu)(K) }),
        });
    if (!U && t.isForumLikeChannel() && null != z && z > 0)
        return (0, i.jsx)(r.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, a.Gu)(z) });
    let X = j?.length ?? 0;
    return null != L && L && Y
        ? (0, i.jsx)(N.A, { userCount: X, video: F || W, channel: t })
        : R && (0, E.t)(j) && q
          ? (0, i.jsx)(a.Lp, { text: y.intl.string(y.t.dI3q4h), color: s.A.unsafe_rawColors.RED_400.css })
          : null != H
            ? (0, i.jsx)(c.z, { textColor: "text-feedback-positive", entry: { start: H } })
            : null != O && O && (0, x.X)(V)
              ? (0, i.jsx)(b.A, { embeddedApps: V, muted: U })
              : null;
}
