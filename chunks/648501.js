n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    s = n(619915),
    a = n(456269),
    c = n(921711),
    u = n(368442),
    d = n(601070),
    h = n(430824),
    p = n(496675),
    f = n(306680),
    g = n(979651),
    m = n(968358),
    b = n(790901),
    y = n(714794),
    _ = n(355363),
    v = n(687352),
    O = n(876548),
    C = n(25601),
    j = n(981631),
    S = n(490897),
    E = n(388032),
    x = n(990252);
function P(e) {
    var t;
    let { channel: n, isChannelSelected: P, isChannelCollapsed: I, voiceStates: w, enableConnectedUserLimit: N, enableActivities: Z, isSubscriptionGated: T, needSubscriptionToAccess: A, isNewChannel: R, muted: D, resolvedUnreadSetting: L } = e,
        k = (0, i.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        M = (0, i.e7)([f.ZP], () => f.ZP.getIsMentionLowImportance(n.id)),
        U = (0, s.ZP)(n),
        G = (0, i.e7)([p.Z], () => !p.Z.can(j.Plq.CONNECT, n)),
        B = (0, i.e7)([g.Z], () => g.Z.hasVideo(n.id)),
        V = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        H = (0, _.ZP)({
            channel: n,
            locked: G,
            video: B || V,
            selected: P
        }),
        F = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        z = (0, a.n2)(n.guild_id, n.id),
        W = (0, i.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? void 0 : e.hasFeature(j.oNc.COMMUNITY)) && t;
        });
    if ((0, y.Z)(k))
        return (0, r.jsx)(C.Z, {
            mentionsCount: k,
            isMentionLowImportance: M
        });
    if ((0, c.O)(T)) return (0, r.jsx)(c.Z, { locked: A });
    if (R)
        return (0, r.jsx)(o.IGR, {
            text: E.intl.string(E.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: x.newChannel
        });
    if (!D && L === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != F && F > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: E.intl.format(E.t.GkAbqa, { count: (0, o.NGo)(F) })
        });
    if (!D && n.isForumLikeChannel() && null != z && z > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, o.NGo)(z)
        });
    let Y = null != (t = null == w ? void 0 : w.length) ? t : 0;
    return null != N && N && H
        ? (0, r.jsx)(O.Z, {
              userCount: Y,
              video: B || V,
              channel: n
          })
        : I && (0, m.a)(w) && W
          ? (0, r.jsx)(o.IGR, {
                text: E.intl.string(E.t.dI3q4u),
                color: l.Z.unsafe_rawColors.RED_400.css
            })
          : null != Z && Z && (0, b.u)(U)
            ? (0, r.jsx)(v.Z, {
                  embeddedApps: U,
                  muted: D
              })
            : null;
}
