n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(620662),
    s = n(841784),
    u = n(429589),
    c = n(499254),
    d = n(827498),
    m = n(541716),
    x = n(706454),
    h = n(823379),
    p = n(5192),
    C = n(379357),
    v = n(192918),
    g = n(561308),
    f = n(907152),
    I = n(206295),
    j = n(297781),
    Z = n(591853),
    P = n(797342),
    L = n(981631),
    N = n(388032);
let T = (e, t) =>
        N.intl.formatToPlainString(N.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    y = (e, t, n) => {
        let l = N.t['bES+y8'],
            a = p.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return N.intl
            .formatToMarkdownString(l, {
                gameName: i,
                userName: a
            })
            .replaceAll('*', '');
    },
    _ = (e) => {
        let { entry: t, channel: n, users: l, countOthers: a } = e,
            i = N.t['7j/5mp'];
        return N.intl
            .formatToMarkdownString(i, {
                gameName: t.extra.activity_name,
                user1: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[0]),
                user2: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[1]),
                countOthers: a
            })
            .replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: p, onVoiceChannelPreview: A } = e,
        { largeImage: E } = (0, C.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { user: S, details: R, activity: M, embeddedActivity: k } = (0, P.n)(n),
        { primaryColor: w, secondaryColor: O } = (0, I.Z)(null == E ? void 0 : E.src),
        b = (0, i.e7)([x.default], () => x.default.locale),
        { displayParticipants: H, participant1: V, participant2: B, numOtherParticipants: D } = (0, v.Z)(n, 3),
        U = () => {
            c.__(d._b.TEXT, m.Ie.NORMAL, { applicationId: n.extra.application_id });
        },
        G = a.useCallback(
            (e) => {
                if ((null == E ? void 0 : E.src) == null || null == t || null == S) return;
                let l =
                    D > 0
                        ? _({
                              entry: n,
                              channel: t,
                              users: [V, B],
                              countOthers: D
                          })
                        : y(n, t, S);
                return (0, f.C4)({
                    entry: n,
                    applicationImageSrc: null == E ? void 0 : E.src,
                    avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, g.yh)(n, b),
                    colors: [w, O],
                    channelId: e
                });
            },
            [null == E ? void 0 : E.src, t, H, n, b, D, V, B, w, O, S]
        );
    if (null == S) return null;
    let z = (0, l.jsx)(j.PZ, {
            location: j.Gt.POPOUT,
            entry: n
        }),
        Y = (0, l.jsx)(Z.wG, {
            channel: t,
            userDescription: (0, g.kr)(n) ? N.t.vPg1JS : N.t.rPqqtr,
            title: n.extra.activity_name,
            subtitle: R,
            badges: z,
            entry: n,
            showCoverImage: !1,
            onClickTitle: U,
            onClickSubtitle: U,
            onClickThumbnail: U
        }),
        W = (0, o.Z)(M, L.xjy.JOIN) || (0, s.Z)(M),
        q = W
            ? (0, l.jsx)(u.Z, {
                  embeddedActivity: k,
                  activity: M,
                  user: S,
                  ButtonComponent: (e) =>
                      (0, l.jsx)(Z.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        F = (0, l.jsx)(Z.Ll, {
            onClick: U,
            IconComponent: r.AppsIcon,
            children: N.intl.string(N.t.GDWYR0)
        }),
        J = [W ? q : F].filter(h.lm);
    return (0, l.jsxs)(Z.yR, {
        children: [
            Y,
            (0, l.jsx)(Z.St, {
                children: (0, l.jsx)(Z.WT, {
                    onReaction: p,
                    onVoiceChannelPreview: A,
                    user: S,
                    channel: t,
                    generateReactionImage: G,
                    reactionImageAltText: T(n, S),
                    entry: n,
                    buttons: J
                })
            })
        ]
    });
};
