n.d(t, {
    Z: function () {
        return y;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    o = n(619915),
    s = n(456269),
    c = n(921711),
    u = n(368442),
    d = n(601070),
    h = n(430824),
    p = n(496675),
    f = n(306680),
    m = n(979651),
    g = n(968358),
    v = n(790901),
    C = n(714794),
    x = n(355363),
    I = n(687352),
    _ = n(135724),
    Z = n(25601),
    b = n(981631),
    S = n(490897),
    N = n(388032),
    E = n(518360);
function y(e) {
    var t;
    let { channel: n, isChannelSelected: y, isChannelCollapsed: j, voiceStates: T, enableConnectedUserLimit: P, enableActivities: A, isSubscriptionGated: w, needSubscriptionToAccess: M, isNewChannel: L, muted: R, resolvedUnreadSetting: D } = e,
        G = (0, l.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        B = (0, l.e7)([f.ZP], () => f.ZP.getIsMentionLowImportance(n.id)),
        k = (0, o.ZP)(n),
        U = (0, l.e7)([p.Z], () => !p.Z.can(b.Plq.CONNECT, n)),
        O = (0, l.e7)([m.Z], () => m.Z.hasVideo(n.id)),
        V = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        H = (0, x.ZP)({
            channel: n,
            locked: U,
            video: O || V,
            selected: y
        }),
        F = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        W = (0, s.n2)(n.guild_id, n.id),
        z = (0, l.e7)([h.Z], () => {
            var e, t;
            return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(b.oNc.COMMUNITY)) && void 0 !== t && t;
        });
    if ((0, C.Z)(G))
        return (0, i.jsx)(Z.Z, {
            mentionsCount: G,
            isMentionLowImportance: B
        });
    if ((0, c.O)(w)) return (0, i.jsx)(c.Z, { locked: M });
    if (L)
        return (0, i.jsx)(a.TextBadge, {
            text: N.intl.string(N.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: E.newChannel
        });
    if (!R && D === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != F && F > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: N.intl.format(N.t.GkAbqa, { count: (0, a.getBadgeCountString)(F) })
        });
    if (!R && n.isForumLikeChannel() && null != W && W > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, a.getBadgeCountString)(W)
        });
    let q = null !== (t = null == T ? void 0 : T.length) && void 0 !== t ? t : 0;
    return null != P && P && H
        ? (0, i.jsx)(_.Z, {
              userCount: q,
              video: O || V,
              channel: n
          })
        : j && (0, g.a)(T) && z
          ? (0, i.jsx)(a.TextBadge, {
                text: N.intl.string(N.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css
            })
          : null != A && A && (0, v.u)(k)
            ? (0, i.jsx)(I.Z, {
                  embeddedApps: k,
                  muted: R
              })
            : null;
}
