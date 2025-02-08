n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    o = n(619915),
    s = n(456269),
    c = n(921711),
    d = n(368442),
    u = n(601070),
    h = n(430824),
    p = n(496675),
    g = n(306680),
    m = n(979651),
    f = n(968358),
    _ = n(790901),
    v = n(714794),
    C = n(355363),
    x = n(687352),
    Z = n(876548),
    I = n(25601),
    b = n(981631),
    S = n(490897),
    N = n(388032),
    E = n(518360);
function j(e) {
    var t;
    let { channel: n, isChannelSelected: j, isChannelCollapsed: y, voiceStates: P, enableConnectedUserLimit: T, enableActivities: A, isSubscriptionGated: w, needSubscriptionToAccess: R, isNewChannel: L, muted: M, resolvedUnreadSetting: D } = e,
        G = (0, l.e7)([g.ZP], () => g.ZP.getMentionCount(n.id)),
        k = (0, l.e7)([g.ZP], () => g.ZP.getIsMentionLowImportance(n.id)),
        B = (0, o.ZP)(n),
        O = (0, l.e7)([p.Z], () => !p.Z.can(b.Plq.CONNECT, n)),
        U = (0, l.e7)([m.Z], () => m.Z.hasVideo(n.id)),
        V = (0, d.PK)(n.id) && n.isGuildStageVoice(),
        F = (0, C.ZP)({
            channel: n,
            locked: O,
            video: U || V,
            selected: j
        }),
        H = (0, l.e7)([u.Z], () => u.Z.getNewThreadCount(n.guild_id, n.id)),
        z = (0, s.n2)(n.guild_id, n.id),
        W = (0, l.e7)([h.Z], () => {
            var e, t;
            return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(b.oNc.COMMUNITY)) && void 0 !== t && t;
        });
    if ((0, v.Z)(G))
        return (0, i.jsx)(I.Z, {
            mentionsCount: G,
            isMentionLowImportance: k
        });
    if ((0, c.O)(w)) return (0, i.jsx)(c.Z, { locked: R });
    if (L)
        return (0, i.jsx)(a.IGR, {
            text: N.intl.string(N.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: E.newChannel
        });
    if (!M && D === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: N.intl.format(N.t.GkAbqa, { count: (0, a.NGo)(H) })
        });
    if (!M && n.isForumLikeChannel() && null != z && z > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, a.NGo)(z)
        });
    let q = null !== (t = null == P ? void 0 : P.length) && void 0 !== t ? t : 0;
    return null != T && T && F
        ? (0, i.jsx)(Z.Z, {
              userCount: q,
              video: U || V,
              channel: n
          })
        : y && (0, f.a)(P) && W
          ? (0, i.jsx)(a.IGR, {
                text: N.intl.string(N.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css
            })
          : null != A && A && (0, _.u)(B)
            ? (0, i.jsx)(x.Z, {
                  embeddedApps: B,
                  muted: M
              })
            : null;
}
