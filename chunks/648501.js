n.d(t, { Z: () => I });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    a = n(619915),
    s = n(456269),
    c = n(921711),
    u = n(368442),
    d = n(601070),
    p = n(430824),
    h = n(496675),
    f = n(306680),
    g = n(979651),
    m = n(968358),
    b = n(790901),
    y = n(714794),
    _ = n(355363),
    v = n(687352),
    O = n(876548),
    j = n(25601),
    x = n(981631),
    C = n(490897),
    S = n(388032),
    P = n(990252);
function I(e) {
    var t;
    let { channel: n, isChannelSelected: I, isChannelCollapsed: N, voiceStates: Z, enableConnectedUserLimit: w, enableActivities: E, isSubscriptionGated: T, needSubscriptionToAccess: A, isNewChannel: D, muted: R, resolvedUnreadSetting: L } = e,
        k = (0, i.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        M = (0, i.e7)([f.ZP], () => f.ZP.getIsMentionLowImportance(n.id)),
        G = (0, a.ZP)(n),
        B = (0, i.e7)([h.Z], () => !h.Z.can(x.Plq.CONNECT, n)),
        U = (0, i.e7)([g.Z], () => g.Z.hasVideo(n.id)),
        W = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        V = (0, _.ZP)({
            channel: n,
            locked: B,
            video: U || W,
            selected: I
        }),
        F = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        H = (0, s.n2)(n.guild_id, n.id),
        z = (0, i.e7)([p.Z], () => {
            var e, t;
            return null != (t = null == (e = p.Z.getGuild(n.guild_id)) ? void 0 : e.hasFeature(x.oNc.COMMUNITY)) && t;
        });
    if ((0, y.Z)(k))
        return (0, r.jsx)(j.Z, {
            mentionsCount: k,
            isMentionLowImportance: M
        });
    if ((0, c.O)(T)) return (0, r.jsx)(c.Z, { locked: A });
    if (D)
        return (0, r.jsx)(o.IGR, {
            text: S.NW.string(S.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: P.newChannel
        });
    if (!R && L === C.i.ALL_MESSAGES && n.isForumLikeChannel() && null != F && F > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: S.NW.format(S.t.GkAbqa, { count: (0, o.NGo)(F) })
        });
    if (!R && n.isForumLikeChannel() && null != H && H > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, o.NGo)(H)
        });
    let Y = null != (t = null == Z ? void 0 : Z.length) ? t : 0;
    return null != w && w && V
        ? (0, r.jsx)(O.Z, {
              userCount: Y,
              video: U || W,
              channel: n
          })
        : N && (0, m.a)(Z) && z
          ? (0, r.jsx)(o.IGR, {
                text: S.NW.string(S.t.dI3q4u),
                color: l.Z.unsafe_rawColors.RED_400.css
            })
          : null != E && E && (0, b.u)(G)
            ? (0, r.jsx)(v.Z, {
                  embeddedApps: G,
                  muted: R
              })
            : null;
}
