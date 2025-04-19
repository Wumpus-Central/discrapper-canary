n.d(t, { ZP: () => D }), n(804061), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
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
    v = n(206295),
    O = n(297781),
    I = n(591853),
    S = n(797342),
    T = n(981631),
    A = n(388032);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
let R = (e, t) =>
        A.intl.formatToPlainString(A.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    P = (e, t, n) => {
        let r = A.t['bES+y8'],
            i = m.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return A.intl
            .formatToMarkdownString(r, {
                gameName: a,
                userName: i
            })
            .replaceAll('*', '');
    },
    w = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = A.t['7j/5mp'];
        return A.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: m.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: m.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: i
            })
            .replaceAll('*', '');
    },
    D = (e) => {
        let { channel: t, entry: n, onReaction: m, onVoiceChannelPreview: N, disableActivityProfileLinks: D } = e,
            { largeImage: L } = (0, g.rv)({
                entry: n,
                showCoverImage: !1
            }),
            { user: x, details: M, activity: k, embeddedActivity: j } = (0, S.n)(n),
            { primaryColor: U, secondaryColor: G } = (0, v.Z)(null == L ? void 0 : L.src),
            B = (0, a.e7)([p.default], () => p.default.locale),
            { displayParticipants: F, participant1: V, participant2: Z, numOtherParticipants: H } = (0, E.Z)(n, 3),
            Y = () => {
                d.__(f._b.TEXT, _.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            W = i.useCallback(
                (e) => {
                    if ((null == L ? void 0 : L.src) == null || null == t || null == x) return;
                    let r =
                        H > 0
                            ? w({
                                  entry: n,
                                  channel: t,
                                  users: [V, Z],
                                  countOthers: H
                              })
                            : P(n, t, x);
                    return (0, y.C4)({
                        entry: n,
                        applicationImageSrc: null == L ? void 0 : L.src,
                        avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, b.yh)(n, B),
                        colors: [U, G],
                        channelId: e
                    });
                },
                [null == L ? void 0 : L.src, t, F, n, B, H, V, Z, U, G, x]
            ),
            { enabled: K } = s.c.useExperiment({ location: 'MemberListAcitivtyContentPopout' }, { autoTrackExposure: !0 });
        if (null == x) return null;
        let z = (0, r.jsx)(O.PZ, {
                location: O.Gt.POPOUT,
                entry: n
            }),
            q = (0, r.jsx)(I.wG, {
                channel: t,
                userDescription: (0, b.kr)(n) ? A.t.vPg1JS : A.t.rPqqtr,
                title: n.extra.activity_name,
                subtitle: M,
                badges: z,
                entry: n,
                showCoverImage: !1,
                onClickTitle: D ? void 0 : Y,
                onClickSubtitle: D ? void 0 : Y,
                onClickThumbnail: D ? void 0 : Y
            }),
            Q = (0, l.Z)(k, T.xjy.JOIN) || (0, c.Z)(k),
            X = Q
                ? (0, r.jsx)(u.Z, {
                      embeddedActivity: j,
                      activity: k,
                      user: x,
                      ButtonComponent: (e) => (0, r.jsx)(I.Ll, C({ IconComponent: o.YVR }, e))
                  })
                : null,
            J = K ? o.iWm : o.jje,
            $ = D
                ? null
                : (0, r.jsx)(I.Ll, {
                      onClick: Y,
                      IconComponent: J,
                      children: A.intl.string(A.t.GDWYR0)
                  }),
            ee = [Q && !D ? X : $].filter(h.lm);
        return (0, r.jsxs)(I.yR, {
            children: [
                q,
                (0, r.jsx)(I.St, {
                    children: (0, r.jsx)(I.WT, {
                        onReaction: m,
                        onVoiceChannelPreview: N,
                        user: x,
                        channel: t,
                        generateReactionImage: W,
                        reactionImageAltText: R(n, x),
                        entry: n,
                        buttons: ee
                    })
                })
            ]
        });
    };
