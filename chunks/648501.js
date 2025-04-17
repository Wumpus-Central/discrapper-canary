n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
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
    _ = n(714794),
    y = n(355363),
    v = n(687352),
    O = n(876548),
    C = n(25601),
    S = n(981631),
    j = n(490897),
    E = n(388032),
    x = n(990252);
function N(e) {
    var t;
    let { channel: n, isChannelSelected: N, isChannelCollapsed: I, voiceStates: P, enableConnectedUserLimit: w, enableActivities: Z, isSubscriptionGated: T, needSubscriptionToAccess: A, isNewChannel: R, muted: D, resolvedUnreadSetting: L } = e,
        k = (0, i.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        M = (0, i.e7)([f.ZP], () => f.ZP.getIsMentionLowImportance(n.id)),
        U = (0, s.ZP)(n),
        G = (0, i.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, n)),
        B = (0, i.e7)([g.Z], () => g.Z.hasVideo(n.id)),
        W = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        V = (0, y.ZP)({
            channel: n,
            locked: G,
            video: B || W,
            selected: N
        }),
        H = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        F = (0, a.n2)(n.guild_id, n.id),
        z = (0, i.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? void 0 : e.hasFeature(S.oNc.COMMUNITY)) && t;
        });
    if ((0, _.Z)(k))
        return (0, r.jsx)(C.Z, {
            mentionsCount: k,
            isMentionLowImportance: M
        });
    if ((0, c.O)(T)) return (0, r.jsx)(c.Z, { locked: A });
    if (R)
        return (0, r.jsx)(o.IGR, {
            text: E.NW.string(E.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: x.newChannel
        });
    if (!D && L === j.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: E.NW.format(E.t.GkAbqa, { count: (0, o.NGo)(H) })
        });
    if (!D && n.isForumLikeChannel() && null != F && F > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, o.NGo)(F)
        });
    let Y = null != (t = null == P ? void 0 : P.length) ? t : 0;
    return null != w && w && V
        ? (0, r.jsx)(O.Z, {
              userCount: Y,
              video: B || W,
              channel: n
          })
        : I && (0, m.a)(P) && z
          ? (0, r.jsx)(o.IGR, {
                text: E.NW.string(E.t.dI3q4u),
                color: l.Z.unsafe_rawColors.RED_400.css
            })
          : null != Z && Z && (0, b.u)(U)
            ? (0, r.jsx)(v.Z, {
                  embeddedApps: U,
                  muted: D
              })
            : null;
}
