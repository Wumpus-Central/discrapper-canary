n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    a = n(619915),
    s = n(172942),
    c = n(371991),
    u = n(456269),
    d = n(921711),
    f = n(368442),
    h = n(601070),
    p = n(430824),
    g = n(496675),
    m = n(306680),
    b = n(979651),
    _ = n(968358),
    y = n(790901),
    O = n(714794),
    v = n(355363),
    j = n(259404),
    x = n(876548),
    C = n(25601),
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
            isNewChannel: M,
            muted: L,
            resolvedUnreadSetting: k,
        } = e,
        G = (0, i.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)),
        U = (0, i.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)),
        B = (0, a.ZP)(n),
        F = (0, i.e7)([g.Z], () => !g.Z.can(E.Plq.CONNECT, n)),
        V = (0, s.P)(n),
        H = (0, i.e7)([b.Z], () => b.Z.hasVideo(n.id)),
        W = (0, f.PK)(n.id) && n.isGuildStageVoice(),
        z = (0, v.ZP)({
            channel: n,
            locked: F,
            video: (H || W) && null == V,
            selected: N,
        }),
        K = (0, i.e7)([h.Z], () => h.Z.getNewThreadCount(n.guild_id, n.id)),
        Y = (0, u.n2)(n.guild_id, n.id),
        q = (0, i.e7)([p.Z], () => {
            var e, t;
            return (
                null !=
                    (t = null == (e = p.Z.getGuild(n.guild_id)) ? void 0 : e.features.has(E.GuildFeatures.COMMUNITY)) &&
                t
            );
        });
    if ((0, O.Z)(G))
        return (0, r.jsx)(C.Z, {
            mentionsCount: G,
            isMentionLowImportance: U,
        });
    if ((0, d.O)(R)) return (0, r.jsx)(d.Z, { locked: D });
    if (M)
        return (0, r.jsx)(o.IGR, {
            text: I.intl.string(I.t.y2b7CA),
            color: l.Z.unsafe_rawColors.BRAND_260.css,
            className: P.newChannel,
        });
    if (!L && k === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != K && K > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: I.intl.format(I.t.GkAbqY, { count: (0, o.NGo)(K) }),
        });
    if (!L && n.isForumLikeChannel() && null != Y && Y > 0)
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, o.NGo)(Y),
        });
    let Q = null != (t = null == w ? void 0 : w.length) ? t : 0;
    return null != T && T && z
        ? (0, r.jsx)(x.Z, {
              userCount: Q,
              video: H || W,
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
                    muted: L,
                })
              : null;
}
