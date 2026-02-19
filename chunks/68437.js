"use strict";
n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    r = n(397927),
    a = n(685399),
    o = n(475889),
    c = n(693879),
    d = n(435470),
    u = n(84052),
    h = n(96566),
    A = n(863005),
    p = n(71393),
    g = n(576705),
    m = n(222823),
    _ = n(977997),
    f = n(669715),
    x = n(893943),
    C = n(892896),
    E = n(246084),
    I = n(436133),
    b = n(884415),
    N = n(775946),
    S = n(652215),
    T = n(790782),
    v = n(985018);
function y(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: y,
            voiceStates: j,
            enableConnectedUserLimit: R,
            enableActivities: O,
            isSubscriptionGated: L,
            needSubscriptionToAccess: M,
            isNewChannel: D,
            muted: G,
            resolvedUnreadSetting: U,
        } = e,
        P = (0, s.bG)([m.Ay], () => m.Ay.getMentionCount(t.id)),
        w = (0, s.bG)([m.Ay], () => m.Ay.getIsMentionLowImportance(t.id)),
        k = (0, a.Ay)(t),
        V = (0, s.bG)([g.A], () => !g.A.can(S.xBc.CONNECT, t)),
        B = (0, o.H)(t),
        H = (0, s.bG)([_.A], () => _.A.hasVideo(t.id)),
        F = (0, h.qT)(t.id) && t.isGuildStageVoice(),
        K = (0, E.Ay)({ channel: t, locked: V, video: (H || F) && null == B, selected: n }),
        W = (0, s.bG)([A.A], () => A.A.getNewThreadCount(t.guild_id, t.id)),
        Y = (0, d.ed)(t.guild_id, t.id),
        z = (0, s.bG)([p.A], () => p.A.getGuild(t.guild_id)?.features.has(S.GuildFeatures.COMMUNITY) ?? !1);
    if ((0, C.A)(P)) return (0, i.jsx)(N.A, { mentionsCount: P, isMentionLowImportance: w });
    if ((0, u.v)(L)) return (0, i.jsx)(u.A, { locked: M });
    if (D) return (0, i.jsx)(r.LpS, { text: v.intl.string(v.t.y2b7CA), color: l.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!G && U === T.e.ALL_MESSAGES && t.isForumLikeChannel() && null != W && W > 0)
        return (0, i.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: v.intl.format(v.t.GkAbqY, { count: (0, r.Gub)(W) }),
        });
    if (!G && t.isForumLikeChannel() && null != Y && Y > 0)
        return (0, i.jsx)(r.Text, { variant: "text-xs/semibold", color: "text-muted", children: (0, r.Gub)(Y) });
    let X = j?.length ?? 0;
    return null != R && R && K
        ? (0, i.jsx)(b.A, { userCount: X, video: H || F, channel: t })
        : y && (0, f.t)(j) && z
          ? (0, i.jsx)(r.LpS, { text: v.intl.string(v.t.dI3q4h), color: l.A.unsafe_rawColors.RED_400.css })
          : null != B
            ? (0, i.jsx)(c.z, { textColor: "text-feedback-positive", entry: { start: B } })
            : null != O && O && (0, x.X)(k)
              ? (0, i.jsx)(I.A, { embeddedApps: k, muted: G })
              : null;
}
