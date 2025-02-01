n.d(t, { ZP: () => _ }), n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(620662),
    s = n(841784),
    c = n(429589),
    d = n(499254),
    u = n(827498),
    m = n(541716),
    x = n(706454),
    h = n(823379),
    p = n(5192),
    g = n(379357),
    v = n(192918),
    C = n(561308),
    j = n(907152),
    f = n(206295),
    I = n(297781),
    P = n(591853),
    y = n(797342),
    N = n(981631),
    Z = n(388032);
let T = (e, t) =>
        Z.intl.formatToPlainString(Z.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    E = (e, t, n) => {
        let l = Z.t['bES+y8'],
            a = p.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return Z.intl
            .formatToMarkdownString(l, {
                gameName: i,
                userName: a
            })
            .replaceAll('*', '');
    },
    A = (e) => {
        let { entry: t, channel: n, users: l, countOthers: a } = e,
            i = Z.t['7j/5mp'];
        return Z.intl
            .formatToMarkdownString(i, {
                gameName: t.extra.activity_name,
                user1: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[0]),
                user2: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[1]),
                countOthers: a
            })
            .replaceAll('*', '');
    },
    _ = (e) => {
        let { channel: t, entry: n, onReaction: p, onVoiceChannelPreview: _ } = e,
            { largeImage: S } = (0, g.rv)({
                entry: n,
                showCoverImage: !1
            }),
            { user: R, details: k, activity: w, embeddedActivity: O } = (0, y.n)(n),
            { primaryColor: b, secondaryColor: M } = (0, f.Z)(null == S ? void 0 : S.src),
            L = (0, i.e7)([x.default], () => x.default.locale),
            { displayParticipants: z, participant1: B, participant2: H, numOtherParticipants: U } = (0, v.Z)(n, 3),
            D = () => {
                d.__(u._b.TEXT, m.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            G = a.useCallback(
                (e) => {
                    if ((null == S ? void 0 : S.src) == null || null == t || null == R) return;
                    let l =
                        U > 0
                            ? A({
                                  entry: n,
                                  channel: t,
                                  users: [B, H],
                                  countOthers: U
                              })
                            : E(n, t, R);
                    return (0, j.C4)({
                        entry: n,
                        applicationImageSrc: null == S ? void 0 : S.src,
                        avatarSrcs: z.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: l,
                        timestamp: (0, C.yh)(n, L),
                        colors: [b, M],
                        channelId: e
                    });
                },
                [null == S ? void 0 : S.src, t, z, n, L, U, B, H, b, M, R]
            );
        if (null == R) return null;
        let F = (0, l.jsx)(I.PZ, {
                location: I.Gt.POPOUT,
                entry: n
            }),
            V = (0, l.jsx)(P.wG, {
                channel: t,
                userDescription: (0, C.kr)(n) ? Z.t.vPg1JS : Z.t.rPqqtr,
                title: n.extra.activity_name,
                subtitle: k,
                badges: F,
                entry: n,
                showCoverImage: !1,
                onClickTitle: D,
                onClickSubtitle: D,
                onClickThumbnail: D
            }),
            Y = (0, o.Z)(w, N.xjy.JOIN) || (0, s.Z)(w),
            q = Y
                ? (0, l.jsx)(c.Z, {
                      embeddedActivity: O,
                      activity: w,
                      user: R,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(P.Ll, {
                              IconComponent: r.YVR,
                              ...e
                          })
                  })
                : null,
            W = (0, l.jsx)(P.Ll, {
                onClick: D,
                IconComponent: r.jje,
                children: Z.intl.string(Z.t.GDWYR0)
            }),
            J = [Y ? q : W].filter(h.lm);
        return (0, l.jsxs)(P.yR, {
            children: [
                V,
                (0, l.jsx)(P.St, {
                    children: (0, l.jsx)(P.WT, {
                        onReaction: p,
                        onVoiceChannelPreview: _,
                        user: R,
                        channel: t,
                        generateReactionImage: G,
                        reactionImageAltText: T(n, R),
                        entry: n,
                        buttons: J
                    })
                })
            ]
        });
    };
