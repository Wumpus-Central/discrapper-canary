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
    h = n(601070),
    f = n(430824),
    g = n(496675),
    m = n(306680),
    b = n(979651),
    _ = n(968358),
    y = n(790901),
    O = n(714794),
    v = n(355363),
    j = n(259404),
    C = n(876548),
    x = n(25601),
    E = n(981631),
    S = n(490897),
    I = n(388032),
    P = n(885525);
function N(e) {
    var t;
    let {
            channel: n,
            isChannelSelected: N,
            isChannelCollapsed: Z,
            voiceStates: w,
            enableConnectedUserLimit: T,
            enableActivities: A,
            isSubscriptionGated: R,
            needSubscriptionToAccess: D,
            isNewChannel: L,
            muted: M,
            resolvedUnreadSetting: k,
        } = e,
        G = (0, i.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)),
        U = (0, i.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)),
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
        K = (0, i.e7)([h.Z], () => h.Z.getNewThreadCount(n.guild_id, n.id)),
        Y = (0, u.n2)(n.guild_id, n.id),
        q = (0, i.e7)([f.Z], () => {
            var e, t;
            return (
                null !=
                    (t = null == (e = f.Z.getGuild(n.guild_id)) ? void 0 : e.features.has(E.GuildFeatures.COMMUNITY)) &&
                t
            );
        });
    if ((0, O.Z)(G))
        return (0, r.jsx)(x.Z, {
            mentionsCount: G,
            isMentionLowImportance: U,
        });
    if ((0, d.O)(R)) return (0, r.jsx)(d.Z, { locked: D });
    if (L)
        return (0, r.jsx)(o.IGR, {
            text: I.intl.string(I.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: P.newChannel,
        });
    if (!M && k === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != K && K > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: I.intl.format(I.t.GkAbqY, { count: (0, o.NGo)(K) }),
        });
    if (!M && n.isForumLikeChannel() && null != Y && Y > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, o.NGo)(Y),
        });
    let X = null != (t = null == w ? void 0 : w.length) ? t : 0;
    return null != T && T && W
        ? (0, r.jsx)(C.Z, {
              userCount: X,
              video: H || z,
              channel: n,
          })
        : Z && (0, _.a)(w) && q
          ? (0, r.jsx)(o.IGR, {
                text: I.intl.string(I.t.dI3q4h),
                color: l.Z.unsafe_rawColors.RED_400.css,
            })
          : null != V
            ? (0, r.jsx)(c.x3, {
                  textColor: "text-feedback-positive",
                  entry: { start: V },
              })
            : null != A && A && (0, y.u)(B)
              ? (0, r.jsx)(j.Z, {
                    embeddedApps: B,
                    muted: M,
                })
              : null;
}
