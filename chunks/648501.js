n.d(t, { Z: () => N });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    a = n(619915),
    s = n(172942),
    c = n(371991),
    u = n(456269),
    d = n(921711),
    p = n(368442),
    f = n(601070),
    h = n(430824),
    g = n(496675),
    m = n(306680),
    b = n(979651),
    _ = n(968358),
    O = n(790901),
    y = n(714794),
    v = n(355363),
    j = n(687352),
    x = n(876548),
    C = n(25601),
    E = n(981631),
    S = n(490897),
    P = n(388032),
    I = n(88448);
function N(e) {
    var t;
    let {
            channel: n,
            isChannelSelected: N,
            isChannelCollapsed: w,
            voiceStates: Z,
            enableConnectedUserLimit: T,
            enableActivities: A,
            isSubscriptionGated: R,
            needSubscriptionToAccess: D,
            isNewChannel: M,
            muted: L,
            resolvedUnreadSetting: k,
        } = e,
        U = (0, i.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)),
        G = (0, i.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)),
        B = (0, a.ZP)(n),
        F = (0, i.e7)([g.Z], () => !g.Z.can(E.Plq.CONNECT, n)),
        V = (0, s.P)(n),
        H = (0, i.e7)([b.Z], () => b.Z.hasVideo(n.id)),
        z = (0, p.PK)(n.id) && n.isGuildStageVoice(),
        W = (0, v.ZP)({
            channel: n,
            locked: F,
            video: (H || z) && null == V,
            selected: N,
        }),
        K = (0, i.e7)([f.Z], () => f.Z.getNewThreadCount(n.guild_id, n.id)),
        Y = (0, u.n2)(n.guild_id, n.id),
        q = (0, i.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? void 0 : e.features.has(E.oNc.COMMUNITY)) && t;
        });
    if ((0, y.Z)(U))
        return (0, r.jsx)(C.Z, {
            mentionsCount: U,
            isMentionLowImportance: G,
        });
    if ((0, d.O)(R)) return (0, r.jsx)(d.Z, { locked: D });
    if (M)
        return (0, r.jsx)(o.IGR, {
            text: P.intl.string(P.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: I.newChannel,
        });
    if (!L && k === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != K && K > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: P.intl.format(P.t.GkAbqa, { count: (0, o.NGo)(K) }),
        });
    if (!L && n.isForumLikeChannel() && null != Y && Y > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, o.NGo)(Y),
        });
    let X = null != (t = null == Z ? void 0 : Z.length) ? t : 0;
    return null != T && T && W
        ? (0, r.jsx)(x.Z, {
              userCount: X,
              video: H || z,
              channel: n,
          })
        : w && (0, _.a)(Z) && q
          ? (0, r.jsx)(o.IGR, {
                text: P.intl.string(P.t.dI3q4u),
                color: l.Z.unsafe_rawColors.RED_400.css,
            })
          : null != V
            ? (0, r.jsx)(c.x3, {
                  textColor: "text-feedback-positive",
                  entry: { start: V },
              })
            : null != A && A && (0, O.u)(B)
              ? (0, r.jsx)(j.Z, {
                    embeddedApps: B,
                    muted: L,
                })
              : null;
}
