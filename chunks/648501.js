n.d(t, { Z: () => P });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    a = n(619915),
    s = n(456269),
    c = n(921711),
    u = n(368442),
    d = n(601070),
    p = n(430824),
    f = n(496675),
    h = n(306680),
    g = n(979651),
    m = n(968358),
    b = n(790901),
    O = n(714794),
    _ = n(355363),
    y = n(687352),
    v = n(876548),
    j = n(25601),
    C = n(981631),
    E = n(490897),
    x = n(388032),
    S = n(885525);
function P(e) {
    var t;
    let {
            channel: n,
            isChannelSelected: P,
            isChannelCollapsed: I,
            voiceStates: N,
            enableConnectedUserLimit: w,
            enableActivities: Z,
            isSubscriptionGated: T,
            needSubscriptionToAccess: A,
            isNewChannel: R,
            muted: D,
            resolvedUnreadSetting: L,
        } = e,
        M = (0, i.e7)([h.ZP], () => h.ZP.getMentionCount(n.id)),
        k = (0, i.e7)([h.ZP], () => h.ZP.getIsMentionLowImportance(n.id)),
        U = (0, a.ZP)(n),
        G = (0, i.e7)([f.Z], () => !f.Z.can(C.Plq.CONNECT, n)),
        B = (0, i.e7)([g.Z], () => g.Z.hasVideo(n.id)),
        V = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        F = (0, _.ZP)({
            channel: n,
            locked: G,
            video: B || V,
            selected: P,
        }),
        H = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        z = (0, s.n2)(n.guild_id, n.id),
        W = (0, i.e7)([p.Z], () => {
            var e, t;
            return null != (t = null == (e = p.Z.getGuild(n.guild_id)) ? void 0 : e.features.has(C.oNc.COMMUNITY)) && t;
        });
    if ((0, O.Z)(M))
        return (0, r.jsx)(j.Z, {
            mentionsCount: M,
            isMentionLowImportance: k,
        });
    if ((0, c.O)(T)) return (0, r.jsx)(c.Z, { locked: A });
    if (R)
        return (0, r.jsx)(o.IGR, {
            text: x.intl.string(x.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: S.newChannel,
        });
    if (!D && L === E.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: x.intl.format(x.t.GkAbqa, { count: (0, o.NGo)(H) }),
        });
    if (!D && n.isForumLikeChannel() && null != z && z > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, o.NGo)(z),
        });
    let K = null != (t = null == N ? void 0 : N.length) ? t : 0;
    return null != w && w && F
        ? (0, r.jsx)(v.Z, {
              userCount: K,
              video: B || V,
              channel: n,
          })
        : I && (0, m.a)(N) && W
          ? (0, r.jsx)(o.IGR, {
                text: x.intl.string(x.t.dI3q4u),
                color: l.Z.unsafe_rawColors.RED_400.css,
            })
          : null != Z && Z && (0, b.u)(U)
            ? (0, r.jsx)(y.Z, {
                  embeddedApps: U,
                  muted: D,
              })
            : null;
}
