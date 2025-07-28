n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    a = n(619915),
    s = n(456269),
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
    O = n(355363),
    y = n(687352),
    C = n(876548),
    v = n(25601),
    j = n(981631),
    E = n(490897),
    S = n(388032),
    x = n(990252);
function I(e) {
    var t;
    let { channel: n, isChannelSelected: I, isChannelCollapsed: P, voiceStates: N, enableConnectedUserLimit: w, enableActivities: Z, isSubscriptionGated: T, needSubscriptionToAccess: A, isNewChannel: R, muted: D, resolvedUnreadSetting: L } = e,
        M = (0, i.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        k = (0, i.e7)([f.ZP], () => f.ZP.getIsMentionLowImportance(n.id)),
        U = (0, a.ZP)(n),
        G = (0, i.e7)([p.Z], () => !p.Z.can(j.Plq.CONNECT, n)),
        B = (0, i.e7)([g.Z], () => g.Z.hasVideo(n.id)),
        V = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        F = (0, O.ZP)({
            channel: n,
            locked: G,
            video: B || V,
            selected: I
        }),
        H = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        z = (0, s.n2)(n.guild_id, n.id),
        W = (0, i.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? void 0 : e.features.has(j.oNc.COMMUNITY)) && t;
        });
    if ((0, _.Z)(M))
        return (0, r.jsx)(v.Z, {
            mentionsCount: M,
            isMentionLowImportance: k
        });
    if ((0, c.O)(T)) return (0, r.jsx)(c.Z, { locked: A });
    if (R)
        return (0, r.jsx)(o.IGR, {
            text: S.intl.string(S.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: x.newChannel
        });
    if (!D && L === E.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: S.intl.format(S.t.GkAbqa, { count: (0, o.NGo)(H) })
        });
    if (!D && n.isForumLikeChannel() && null != z && z > 0)
        return (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, o.NGo)(z)
        });
    let K = null != (t = null == N ? void 0 : N.length) ? t : 0;
    return null != w && w && F
        ? (0, r.jsx)(C.Z, {
              userCount: K,
              video: B || V,
              channel: n
          })
        : P && (0, m.a)(N) && W
          ? (0, r.jsx)(o.IGR, {
                text: S.intl.string(S.t.dI3q4u),
                color: l.Z.unsafe_rawColors.RED_400.css
            })
          : null != Z && Z && (0, b.u)(U)
            ? (0, r.jsx)(y.Z, {
                  embeddedApps: U,
                  muted: D
              })
            : null;
}
