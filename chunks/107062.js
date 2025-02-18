n.d(t, { ZP: () => _ }), n(627494), n(757143);
var a = n(200651),
    l = n(192379),
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
    N = n(907152),
    j = n(206295),
    I = n(297781),
    f = n(591853),
    P = n(797342),
    y = n(981631),
    Z = n(388032);
let T = (e, t) =>
        Z.NW.formatToPlainString(Z.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    A = (e, t, n) => {
        let a = Z.t['bES+y8'],
            l = p.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return Z.NW.formatToMarkdownString(a, {
            gameName: i,
            userName: l
        }).replaceAll('*', '');
    },
    E = (e) => {
        let { entry: t, channel: n, users: a, countOthers: l } = e,
            i = Z.t['7j/5mp'];
        return Z.NW.formatToMarkdownString(i, {
            gameName: t.extra.activity_name,
            user1: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, a[0]),
            user2: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, a[1]),
            countOthers: l
        }).replaceAll('*', '');
    },
    _ = (e) => {
        let { channel: t, entry: n, onReaction: p, onVoiceChannelPreview: _ } = e,
            { largeImage: S } = (0, g.rv)({
                entry: n,
                showCoverImage: !1
            }),
            { user: R, details: k, activity: w, embeddedActivity: O } = (0, P.n)(n),
            { primaryColor: b, secondaryColor: M } = (0, j.Z)(null == S ? void 0 : S.src),
            W = (0, i.e7)([x.default], () => x.default.locale),
            { displayParticipants: L, participant1: z, participant2: B, numOtherParticipants: H } = (0, v.Z)(n, 3),
            U = () => {
                d.__(u._b.TEXT, m.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            D = l.useCallback(
                (e) => {
                    if ((null == S ? void 0 : S.src) == null || null == t || null == R) return;
                    let a =
                        H > 0
                            ? E({
                                  entry: n,
                                  channel: t,
                                  users: [z, B],
                                  countOthers: H
                              })
                            : A(n, t, R);
                    return (0, N.C4)({
                        entry: n,
                        applicationImageSrc: null == S ? void 0 : S.src,
                        avatarSrcs: L.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: a,
                        timestamp: (0, C.yh)(n, W),
                        colors: [b, M],
                        channelId: e
                    });
                },
                [null == S ? void 0 : S.src, t, L, n, W, H, z, B, b, M, R]
            );
        if (null == R) return null;
        let G = (0, a.jsx)(I.PZ, {
                location: I.Gt.POPOUT,
                entry: n
            }),
            F = (0, a.jsx)(f.wG, {
                channel: t,
                userDescription: (0, C.kr)(n) ? Z.t.vPg1JS : Z.t.rPqqtr,
                title: n.extra.activity_name,
                subtitle: k,
                badges: G,
                entry: n,
                showCoverImage: !1,
                onClickTitle: U,
                onClickSubtitle: U,
                onClickThumbnail: U
            }),
            V = (0, o.Z)(w, y.xjy.JOIN) || (0, s.Z)(w),
            Y = V
                ? (0, a.jsx)(c.Z, {
                      embeddedActivity: O,
                      activity: w,
                      user: R,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(f.Ll, {
                              IconComponent: r.YVR,
                              ...e
                          })
                  })
                : null,
            q = (0, a.jsx)(f.Ll, {
                onClick: U,
                IconComponent: r.jje,
                children: Z.NW.string(Z.t.GDWYR0)
            }),
            J = [V ? Y : q].filter(h.lm);
        return (0, a.jsxs)(f.yR, {
            children: [
                F,
                (0, a.jsx)(f.St, {
                    children: (0, a.jsx)(f.WT, {
                        onReaction: p,
                        onVoiceChannelPreview: _,
                        user: R,
                        channel: t,
                        generateReactionImage: D,
                        reactionImageAltText: T(n, R),
                        entry: n,
                        buttons: J
                    })
                })
            ]
        });
    };
