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
    f = n(499254),
    p = n(827498),
    _ = n(728345),
    m = n(541716),
    h = n(706454),
    g = n(823379),
    E = n(5192),
    b = n(379357),
    y = n(192918),
    O = n(561308),
    v = n(907152),
    S = n(206295),
    I = n(297781),
    T = n(591853),
    A = n(797342),
    C = n(981631),
    N = n(388032);
let P = (e, t) =>
        N.intl.formatToPlainString(N.t.tAwI1k, {
            username: t.username,
            activity: e.extra.activity_name,
        }),
    R = (e, t, n) => {
        let r = N.t["bES+y2"],
            i = E.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return N.intl
            .formatToMarkdownString(r, {
                gameName: a,
                userName: i,
            })
            .replaceAll("*", "");
    },
    D = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = N.t["7j/5mg"];
        return N.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    w = (e) => {
        let { channel: t, entry: n, onReaction: E, onVoiceChannelPreview: w, disableActivityProfileLinks: x } = e,
            { largeImage: L } = (0, b.rv)({
                entry: n,
                showCoverImage: !1,
            }),
            { user: j, details: M, activity: k, embeddedActivity: U } = (0, A.n)(n),
            { primaryColor: G, secondaryColor: Z } = (0, S.Z)(null == L ? void 0 : L.src),
            B = (0, a.e7)([h.default], () => h.default.locale),
            { displayParticipants: F, participant1: V, participant2: H, numOtherParticipants: Y } = (0, y.Z)(n, 3),
            W = () => {
                f._(p._b.TEXT, m.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            K = i.useCallback(
                (e) => {
                    if ((null == L ? void 0 : L.src) == null || null == t || null == j) return;
                    let r =
                        Y > 0
                            ? D({
                                  entry: n,
                                  channel: t,
                                  users: [V, H],
                                  countOthers: Y,
                              })
                            : R(n, t, j);
                    return (0, v.C4)({
                        entry: n,
                        applicationImageSrc: null == L ? void 0 : L.src,
                        avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, O.yh)(n, B),
                        colors: [G, Z],
                        channelId: e,
                    });
                },
                [null == L ? void 0 : L.src, t, F, n, B, Y, V, H, G, Z, j],
            ),
            { data: z } = (0, _.IX)(n.extra.application_id),
            q = (0, c.Z)({
                application: z,
                analyticsLocations: [d.Z.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT],
            });
        if (null == j) return null;
        let Q = (0, r.jsx)(I.PZ, {
                location: I.Gt.POPOUT,
                entry: n,
            }),
            X = (0, r.jsx)(T.wG, {
                channel: t,
                userDescription: (0, O.kr)(n) ? N.t.vPg1JT : N.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: M,
                badges: Q,
                entry: n,
                showCoverImage: !1,
                onClickTitle: x ? void 0 : W,
                onClickSubtitle: x ? void 0 : W,
                onClickThumbnail: x ? void 0 : W,
            }),
            J = (0, s.Z)(k, C.xjy.JOIN) || (0, l.Z)(k),
            $ = J
                ? (0, r.jsx)(u.Z, {
                      embeddedActivity: U,
                      activity: k,
                      user: j,
                      variant: "primary",
                      size: "md",
                      icon: o.YVR,
                  })
                : null,
            ee =
                null == q
                    ? null
                    : (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: q,
                          text: N.intl.string(N.t["jaYS/h"]),
                          icon: o.v3n,
                      }),
            et =
                null != ee || x
                    ? null
                    : (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: W,
                          text: N.intl.string(N.t.GDWYR8),
                          icon: o.jje,
                      }),
            en = [ee, J && !x ? $ : et].filter(g.lm);
        return (0, r.jsxs)(T.yR, {
            children: [
                X,
                (0, r.jsx)(T.St, {
                    children: (0, r.jsx)(T.WT, {
                        onReaction: E,
                        onVoiceChannelPreview: w,
                        user: j,
                        channel: t,
                        generateReactionImage: K,
                        reactionImageAltText: P(n, j),
                        entry: n,
                        buttons: en,
                    }),
                }),
            ],
        });
    };
