n.d(t, { ZP: () => S }), n(627494), n(757143), n(301563);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(456100),
    s = n(620662),
    c = n(841784),
    u = n(429589),
    d = n(499254),
    m = n(827498),
    p = n(541716),
    h = n(706454),
    f = n(823379),
    g = n(5192),
    x = n(379357),
    v = n(192918),
    y = n(561308),
    j = n(907152),
    P = n(206295),
    O = n(297781),
    b = n(591853),
    C = n(797342),
    N = n(981631),
    I = n(388032);
let E = (e, t) =>
        I.NW.formatToPlainString(I.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    w = (e, t, n) => {
        let r = I.t['bES+y8'],
            a = g.ZP.getName(t.guild_id, t.id, n),
            l = e.extra.activity_name;
        return I.NW.formatToMarkdownString(r, {
            gameName: l,
            userName: a
        }).replaceAll('*', '');
    },
    Z = (e) => {
        let { entry: t, channel: n, users: r, countOthers: a } = e,
            l = I.t['7j/5mp'];
        return I.NW.formatToMarkdownString(l, {
            gameName: t.extra.activity_name,
            user1: g.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
            user2: g.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
            countOthers: a
        }).replaceAll('*', '');
    },
    S = (e) => {
        let { channel: t, entry: n, onReaction: g, onVoiceChannelPreview: S } = e,
            { largeImage: T } = (0, x.rv)({
                entry: n,
                showCoverImage: !1
            }),
            { user: A, details: _, activity: k, embeddedActivity: R } = (0, C.n)(n),
            { primaryColor: M, secondaryColor: D } = (0, P.Z)(null == T ? void 0 : T.src),
            L = (0, l.e7)([h.default], () => h.default.locale),
            { displayParticipants: W, participant1: U, participant2: z, numOtherParticipants: B } = (0, v.Z)(n, 3),
            H = () => {
                d.__(m._b.TEXT, p.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            G = a.useCallback(
                (e) => {
                    if ((null == T ? void 0 : T.src) == null || null == t || null == A) return;
                    let r =
                        B > 0
                            ? Z({
                                  entry: n,
                                  channel: t,
                                  users: [U, z],
                                  countOthers: B
                              })
                            : w(n, t, A);
                    return (0, j.C4)({
                        entry: n,
                        applicationImageSrc: null == T ? void 0 : T.src,
                        avatarSrcs: W.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, y.yh)(n, L),
                        colors: [M, D],
                        channelId: e
                    });
                },
                [null == T ? void 0 : T.src, t, W, n, L, B, U, z, M, D, A]
            ),
            { enabled: F } = o.c.useExperiment({ location: 'MemberListAcitivtyContentPopout' }, { autoTrackExposure: !0 });
        if (null == A) return null;
        let V = (0, r.jsx)(O.PZ, {
                location: O.Gt.POPOUT,
                entry: n
            }),
            Y = (0, r.jsx)(b.wG, {
                channel: t,
                userDescription: (0, y.kr)(n) ? I.t.vPg1JS : I.t.rPqqtr,
                title: n.extra.activity_name,
                subtitle: _,
                badges: V,
                entry: n,
                showCoverImage: !1,
                onClickTitle: H,
                onClickSubtitle: H,
                onClickThumbnail: H
            }),
            q = (0, s.Z)(k, N.xjy.JOIN) || (0, c.Z)(k),
            J = q
                ? (0, r.jsx)(u.Z, {
                      embeddedActivity: R,
                      activity: k,
                      user: A,
                      ButtonComponent: (e) =>
                          (0, r.jsx)(
                              b.Ll,
                              (function (e) {
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
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({ IconComponent: i.YVR }, e)
                          )
                  })
                : null,
            X = F ? i.iWm : i.jje,
            K = (0, r.jsx)(b.Ll, {
                onClick: H,
                IconComponent: X,
                children: I.NW.string(I.t.GDWYR0)
            }),
            $ = [q ? J : K].filter(f.lm);
        return (0, r.jsxs)(b.yR, {
            children: [
                Y,
                (0, r.jsx)(b.St, {
                    children: (0, r.jsx)(b.WT, {
                        onReaction: g,
                        onVoiceChannelPreview: S,
                        user: A,
                        channel: t,
                        generateReactionImage: G,
                        reactionImageAltText: E(n, A),
                        entry: n,
                        buttons: $
                    })
                })
            ]
        });
    };
