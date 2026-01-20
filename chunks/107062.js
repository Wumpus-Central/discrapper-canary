n.d(t, { ZP: () => w }), n(804061), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(620662),
    l = n(841784),
    c = n(206074),
    u = n(429589),
    d = n(100527),
    f = n(176412),
    p = n(728345),
    _ = n(706454),
    h = n(823379),
    m = n(5192),
    g = n(379357),
    E = n(192918),
    b = n(561308),
    y = n(907152),
    O = n(206295),
    v = n(297781),
    S = n(591853),
    I = n(797342),
    T = n(981631),
    C = n(388032);
let A = (e, t) =>
        C.intl.formatToPlainString(C.t.tAwI1k, {
            username: t.username,
            activity: e.extra.activity_name,
        }),
    N = (e, t, n) => {
        let r = C.t["bES+y2"],
            i = m.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return C.intl
            .formatToMarkdownString(r, {
                gameName: a,
                userName: i,
            })
            .replaceAll("*", "");
    },
    P = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = C.t["7j/5mg"];
        return C.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: m.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: m.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    w = (e) => {
        let { channel: t, entry: n, onReaction: m, onVoiceChannelPreview: w, disableActivityProfileLinks: R } = e,
            { largeImage: D } = (0, g.rv)({
                entry: n,
                showCoverImage: !1,
            }),
            { user: x, details: L, activity: j, embeddedActivity: M } = (0, I.n)(n),
            { primaryColor: k, secondaryColor: U } = (0, O.Z)(null == D ? void 0 : D.src),
            G = (0, a.e7)([_.default], () => _.default.locale),
            { displayParticipants: Z, participant1: F, participant2: B, numOtherParticipants: V } = (0, E.Z)(n, 3),
            H = () => {
                (0, f.X)(n.extra.application_id);
            },
            Y = i.useCallback(
                (e) => {
                    if ((null == D ? void 0 : D.src) == null || null == t || null == x) return;
                    let r =
                        V > 0
                            ? P({
                                  entry: n,
                                  channel: t,
                                  users: [F, B],
                                  countOthers: V,
                              })
                            : N(n, t, x);
                    return (0, y.C4)({
                        entry: n,
                        applicationImageSrc: null == D ? void 0 : D.src,
                        avatarSrcs: Z.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, b.yh)(n, G),
                        colors: [k, U],
                        channelId: e,
                    });
                },
                [null == D ? void 0 : D.src, t, Z, n, G, V, F, B, k, U, x],
            ),
            { data: W } = (0, p.IX)(n.extra.application_id),
            K = (0, c.Z)({
                application: W,
                analyticsLocations: [d.Z.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT],
            });
        if (null == x) return null;
        let z = (0, r.jsx)(v.PZ, {
                location: v.Gt.POPOUT,
                entry: n,
            }),
            q = (0, r.jsx)(S.wG, {
                channel: t,
                userDescription: (0, b.kr)(n) ? C.t.vPg1JT : C.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: L,
                badges: z,
                entry: n,
                showCoverImage: !1,
                onClickTitle: R ? void 0 : H,
                onClickSubtitle: R ? void 0 : H,
                onClickThumbnail: R ? void 0 : H,
            }),
            Q = (0, s.Z)(j, T.xjy.JOIN) || (0, l.Z)(j),
            X = Q
                ? (0, r.jsx)(u.Z, {
                      embeddedActivity: M,
                      activity: j,
                      user: x,
                      variant: "primary",
                      size: "md",
                      icon: o.YVR,
                  })
                : null,
            J =
                null == K
                    ? null
                    : (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: K,
                          text: C.intl.string(C.t["jaYS/h"]),
                          icon: o.v3n,
                      }),
            $ =
                null != J || R
                    ? null
                    : (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: H,
                          text: C.intl.string(C.t.GDWYR8),
                          icon: o.jje,
                      }),
            ee = [J, Q && !R ? X : $].filter(h.lm);
        return (0, r.jsxs)(S.yR, {
            children: [
                q,
                (0, r.jsx)(S.St, {
                    children: (0, r.jsx)(S.WT, {
                        onReaction: m,
                        onVoiceChannelPreview: w,
                        user: x,
                        channel: t,
                        generateReactionImage: Y,
                        reactionImageAltText: A(n, x),
                        entry: n,
                        buttons: ee,
                    }),
                }),
            ],
        });
    };
