n.d(t, { Z: () => P });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(619915),
    s = n(172942),
    c = n(371991),
    u = n(456269),
    d = n(921711),
    f = n(368442),
    h = n(601070),
    p = n(430824),
    g = n(496675),
    b = n(306680),
    m = n(979651),
    y = n(968358),
    O = n(790901),
    v = n(714794),
    j = n(355363),
    C = n(687352),
    x = n(876548),
    E = n(25601),
    S = n(981631),
    I = n(490897),
    _ = n(388032);
function P(e) {
    var t;
    let {
            channel: n,
            isChannelSelected: P,
            isChannelCollapsed: N,
            voiceStates: Z,
            enableConnectedUserLimit: w,
            enableActivities: T,
            isSubscriptionGated: A,
            needSubscriptionToAccess: R,
            isNewChannel: D,
            muted: M,
            resolvedUnreadSetting: L,
        } = e,
        k = (0, i.e7)([b.ZP], () => b.ZP.getMentionCount(n.id)),
        G = (0, i.e7)([b.ZP], () => b.ZP.getIsMentionLowImportance(n.id)),
        U = (0, o.ZP)(n),
        B = (0, i.e7)([g.Z], () => !g.Z.can(S.Plq.CONNECT, n)),
        F = (0, s.P)(n),
        V = (0, i.e7)([m.Z], () => m.Z.hasVideo(n.id)),
        H = (0, f.PK)(n.id) && n.isGuildStageVoice(),
        W = (0, j.ZP)({
            channel: n,
            locked: B,
            video: (V || H) && null == F,
            selected: P,
        }),
        z = (0, i.e7)([h.Z], () => h.Z.getNewThreadCount(n.guild_id, n.id)),
        K = (0, u.n2)(n.guild_id, n.id),
        Y = (0, i.e7)([p.Z], () => {
            var e, t;
            return (
                null !=
                    (t = null == (e = p.Z.getGuild(n.guild_id)) ? void 0 : e.features.has(S.GuildFeatures.COMMUNITY)) &&
                t
            );
        });
    if ((0, v.Z)(k))
        return (0, r.jsx)(E.Z, {
            mentionsCount: k,
            isMentionLowImportance: G,
        });
    if ((0, d.O)(A)) return (0, r.jsx)(d.Z, { locked: R });
    if (D)
        return (0, r.jsx)(a.IGR, {
            text: _.intl.string(_.t.y2b7CA),
            color: l.Z.colors.BADGE_BACKGROUND_BRAND.css,
        });
    if (!M && L === I.i.ALL_MESSAGES && n.isForumLikeChannel() && null != z && z > 0)
        return (0, r.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: _.intl.format(_.t.GkAbqY, { count: (0, a.NGo)(z) }),
        });
    if (!M && n.isForumLikeChannel() && null != K && K > 0)
        return (0, r.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, a.NGo)(K),
        });
    let q = null != (t = null == Z ? void 0 : Z.length) ? t : 0;
    return null != w && w && W
        ? (0, r.jsx)(x.Z, {
              userCount: q,
              video: V || H,
              channel: n,
          })
        : N && (0, y.a)(Z) && Y
          ? (0, r.jsx)(a.IGR, {
                text: _.intl.string(_.t.dI3q4h),
                color: l.Z.unsafe_rawColors.RED_400.css,
            })
          : null != F
            ? (0, r.jsx)(c.x3, {
                  textColor: "text-feedback-positive",
                  entry: { start: F },
              })
            : null != T && T && (0, O.u)(U)
              ? (0, r.jsx)(C.Z, {
                    embeddedApps: U,
                    muted: M,
                })
              : null;
}
