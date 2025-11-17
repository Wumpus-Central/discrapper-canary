n.d(t, { ZP: () => x }), n(804061), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(456100),
    l = n(620662),
    c = n(841784),
    u = n(206074),
    d = n(429589),
    f = n(100527),
    _ = n(499254),
    p = n(827498),
    h = n(728345),
    m = n(541716),
    g = n(706454),
    E = n(823379),
    b = n(5192),
    y = n(379357),
    O = n(192918),
    v = n(561308),
    I = n(907152),
    T = n(206295),
    S = n(297781),
    A = n(591853),
    C = n(797342),
    N = n(981631),
    R = n(388032);
let P = (e, t) =>
        R.intl.formatToPlainString(R.t.tAwI1k, {
            username: t.username,
            activity: e.extra.activity_name,
        }),
    D = (e, t, n) => {
        let r = R.t["bES+y2"],
            i = b.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return R.intl
            .formatToMarkdownString(r, {
                gameName: a,
                userName: i,
            })
            .replaceAll("*", "");
    },
    w = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = R.t["7j/5mg"];
        return R.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: b.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: b.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    x = (e) => {
        let { channel: t, entry: n, onReaction: b, onVoiceChannelPreview: x, disableActivityProfileLinks: L } = e,
            { largeImage: M } = (0, y.rv)({
                entry: n,
                showCoverImage: !1,
            }),
            { user: k, details: j, activity: U, embeddedActivity: G } = (0, C.n)(n),
            { primaryColor: B, secondaryColor: Z } = (0, T.Z)(null == M ? void 0 : M.src),
            F = (0, a.e7)([g.default], () => g.default.locale),
            { displayParticipants: V, participant1: H, participant2: Y, numOtherParticipants: W } = (0, O.Z)(n, 3),
            K = () => {
                _._(p._b.TEXT, m.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            z = i.useCallback(
                (e) => {
                    if ((null == M ? void 0 : M.src) == null || null == t || null == k) return;
                    let r =
                        W > 0
                            ? w({
                                  entry: n,
                                  channel: t,
                                  users: [H, Y],
                                  countOthers: W,
                              })
                            : D(n, t, k);
                    return (0, I.C4)({
                        entry: n,
                        applicationImageSrc: null == M ? void 0 : M.src,
                        avatarSrcs: V.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, v.yh)(n, F),
                        colors: [B, Z],
                        channelId: e,
                    });
                },
                [null == M ? void 0 : M.src, t, V, n, F, W, H, Y, B, Z, k],
            ),
            { data: q } = (0, h.IX)(n.extra.application_id),
            X = (0, u.Z)({
                application: q,
                analyticsLocations: [f.Z.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT],
            }),
            { enabled: Q } = s.c.useExperiment(
                { location: "MemberListAcitivtyContentPopout" },
                { autoTrackExposure: !0 },
            );
        if (null == k) return null;
        let J = (0, r.jsx)(S.PZ, {
                location: S.Gt.POPOUT,
                entry: n,
            }),
            $ = (0, r.jsx)(A.wG, {
                channel: t,
                userDescription: (0, v.kr)(n) ? R.t.vPg1JT : R.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: j,
                badges: J,
                entry: n,
                showCoverImage: !1,
                onClickTitle: L ? void 0 : K,
                onClickSubtitle: L ? void 0 : K,
                onClickThumbnail: L ? void 0 : K,
            }),
            ee = (0, l.Z)(U, N.xjy.JOIN) || (0, c.Z)(U),
            et = ee
                ? (0, r.jsx)(d.Z, {
                      embeddedActivity: G,
                      activity: U,
                      user: k,
                      variant: "primary",
                      size: "md",
                      icon: o.YVR,
                  })
                : null,
            en =
                null == X
                    ? null
                    : (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: X,
                          text: R.intl.string(R.t["jaYS/h"]),
                          icon: o.v3n,
                      }),
            er = Q ? o.iWm : o.jje,
            ei =
                null != en || L
                    ? null
                    : (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: K,
                          text: R.intl.string(R.t.GDWYR8),
                          icon: er,
                      }),
            ea = [en, ee && !L ? et : ei].filter(E.lm);
        return (0, r.jsxs)(A.yR, {
            children: [
                $,
                (0, r.jsx)(A.St, {
                    children: (0, r.jsx)(A.WT, {
                        onReaction: b,
                        onVoiceChannelPreview: x,
                        user: k,
                        channel: t,
                        generateReactionImage: z,
                        reactionImageAltText: P(n, k),
                        entry: n,
                        buttons: ea,
                    }),
                }),
            ],
        });
    };
