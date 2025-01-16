l.d(n, {
    Z: function () {
        return _;
    }
});
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(866442),
    d = l(399606),
    o = l(481060),
    c = l(749210),
    u = l(410030),
    h = l(607070),
    m = l(603368),
    g = l(903518),
    x = l(687158),
    f = l(576635),
    C = l(484459),
    v = l(502762),
    I = l(430824),
    p = l(594174),
    Z = l(5192),
    j = l(51144),
    N = l(240249);
function _(e) {
    var n;
    let { guildId: l, welcomeMessage: t, className: _ } = e,
        b = (0, d.e7)([I.Z], () => I.Z.getGuild(l)),
        A = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        E = (0, d.e7)([p.default], () => p.default.getUser(null == t ? void 0 : t.authorIds[0])),
        S = i.useMemo(() => (null != b && null != E && (0, g.Y)(b, E) ? E : null), [b, E]),
        M = (0, d.e7)([p.default], () => p.default.getCurrentUser()),
        y = (0, x.ZP)(null !== (n = null == S ? void 0 : S.id) && void 0 !== n ? n : '0', l),
        { theme: k, primaryColor: w } = (0, f.Z)({
            user: null != S ? S : void 0,
            displayProfile: y
        }),
        P = (0, u.ZP)(),
        B = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, k).hex(),
        R = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.authorIds) && void 0 !== e ? e : [];
        }, [t]);
    i.useEffect(() => {
        c.Z.requestMembersById(l, R);
    }, [l, R]),
        i.useEffect(() => {
            null != S && (0, C.Z)(S.id, S.getAvatarURL(l, 48), { guildId: l });
        }, [S, l]);
    let T = (0, j._T)(M),
        H = null != w ? (0, s.br)(w, 1) : B,
        L = (0, m.$0)(H);
    if (null == S || null == M || null == t) return null;
    let D = null != b && b.ownerId === S.id;
    return (0, a.jsx)('div', {
        className: r()(N.welcomeMessageContainer, _),
        children: (0, a.jsxs)(v.Z, {
            className: N.welcomeMessageProfileContainer,
            user: S,
            displayProfile: y,
            profileType: null,
            themeOverride: P,
            forceShowPremium: !0,
            children: [
                (0, a.jsx)('div', { className: N.avatarBackground }),
                A
                    ? (0, a.jsx)(o.Avatar, {
                          src: S.getAvatarURL(l, 48),
                          size: o.AvatarSizes.SIZE_48,
                          className: N.avatar,
                          'aria-label': S.username
                      })
                    : (0, a.jsx)(o.AnimatedAvatar, {
                          src: S.getAvatarURL(l, 48),
                          size: o.AvatarSizes.SIZE_48,
                          className: N.avatar,
                          'aria-label': S.username
                      }),
                (0, a.jsx)('div', {
                    className: N.avatarBorder,
                    style: { backgroundColor: H }
                }),
                (0, a.jsxs)('div', {
                    className: N.welcomeMessageContent,
                    style: { color: L.hex() },
                    children: [
                        (0, a.jsxs)('div', {
                            className: N.adminUsernameContainer,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: Z.ZP.getName(l, null, S)
                                }),
                                D
                                    ? (0, a.jsx)(o.CrownIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: N.ownerIcon
                                      })
                                    : null
                            ]
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'currentColor',
                            children: (function (e, n) {
                                let l = e.split(/\[@username\]/g);
                                return (0, a.jsx)('span', {
                                    children: l.map((e, t) =>
                                        (0, a.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    e,
                                                    t < l.length - 1
                                                        ? (0, a.jsx)(o.Text, {
                                                              tag: 'span',
                                                              variant: 'text-md/semibold',
                                                              children: '@'.concat(n)
                                                          })
                                                        : null
                                                ]
                                            },
                                            'username-'.concat(t)
                                        )
                                    )
                                });
                            })(null == t ? void 0 : t.message, null != T ? T : M.username)
                        })
                    ]
                })
            ]
        })
    });
}
