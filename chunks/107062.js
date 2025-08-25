n.d(t, { ZP: () => P }), n(804061), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(456100),
    l = n(620662),
    c = n(841784),
    u = n(429589),
    d = n(499254),
    f = n(827498),
    _ = n(541716),
    p = n(706454),
    h = n(823379),
    m = n(5192),
    g = n(379357),
    E = n(192918),
    b = n(561308),
    y = n(907152),
    O = n(206295),
    v = n(297781),
    I = n(591853),
    T = n(797342),
    S = n(981631),
    A = n(388032);
let C = (e, t) =>
        A.intl.formatToPlainString(A.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name,
        }),
    N = (e, t, n) => {
        let r = A.t["bES+y8"],
            i = m.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return A.intl
            .formatToMarkdownString(r, {
                gameName: a,
                userName: i,
            })
            .replaceAll("*", "");
    },
    R = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = A.t["7j/5mp"];
        return A.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: m.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: m.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    P = (e) => {
        let { channel: t, entry: n, onReaction: m, onVoiceChannelPreview: P, disableActivityProfileLinks: w } = e,
            { largeImage: D } = (0, g.rv)({
                entry: n,
                showCoverImage: !1,
            }),
            { user: x, details: L, activity: j, embeddedActivity: M } = (0, T.n)(n),
            { primaryColor: k, secondaryColor: U } = (0, O.Z)(null == D ? void 0 : D.src),
            G = (0, a.e7)([p.default], () => p.default.locale),
            { displayParticipants: B, participant1: Z, participant2: V, numOtherParticipants: F } = (0, E.Z)(n, 3),
            H = () => {
                d.__(f._b.TEXT, _.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            Y = i.useCallback(
                (e) => {
                    if ((null == D ? void 0 : D.src) == null || null == t || null == x) return;
                    let r =
                        F > 0
                            ? R({
                                  entry: n,
                                  channel: t,
                                  users: [Z, V],
                                  countOthers: F,
                              })
                            : N(n, t, x);
                    return (0, y.C4)({
                        entry: n,
                        applicationImageSrc: null == D ? void 0 : D.src,
                        avatarSrcs: B.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, b.yh)(n, G),
                        colors: [k, U],
                        channelId: e,
                    });
                },
                [null == D ? void 0 : D.src, t, B, n, G, F, Z, V, k, U, x],
            ),
            { enabled: W } = s.c.useExperiment(
                { location: "MemberListAcitivtyContentPopout" },
                { autoTrackExposure: !0 },
            );
        if (null == x) return null;
        let K = (0, r.jsx)(v.PZ, {
                location: v.Gt.POPOUT,
                entry: n,
            }),
            z = (0, r.jsx)(I.wG, {
                channel: t,
                userDescription: (0, b.kr)(n) ? A.t.vPg1JS : A.t.rPqqtr,
                title: n.extra.activity_name,
                subtitle: L,
                badges: K,
                entry: n,
                showCoverImage: !1,
                onClickTitle: w ? void 0 : H,
                onClickSubtitle: w ? void 0 : H,
                onClickThumbnail: w ? void 0 : H,
            }),
            q = (0, l.Z)(j, S.xjy.JOIN) || (0, c.Z)(j),
            X = q
                ? (0, r.jsx)(u.Z, {
                      embeddedActivity: M,
                      activity: j,
                      user: x,
                      variant: "primary",
                      size: "md",
                      icon: o.YVR,
                  })
                : null,
            Q = W ? o.iWm : o.jje,
            J = w
                ? null
                : (0, r.jsx)(o.zxk, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: H,
                      text: A.intl.string(A.t.GDWYR0),
                      icon: Q,
                  }),
            $ = [q && !w ? X : J].filter(h.lm);
        return (0, r.jsxs)(I.yR, {
            children: [
                z,
                (0, r.jsx)(I.St, {
                    children: (0, r.jsx)(I.WT, {
                        onReaction: m,
                        onVoiceChannelPreview: P,
                        user: x,
                        channel: t,
                        generateReactionImage: Y,
                        reactionImageAltText: C(n, x),
                        entry: n,
                        buttons: $,
                    }),
                }),
            ],
        });
    };
