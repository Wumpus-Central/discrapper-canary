t.d(n, { Z: () => v });
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(866442),
    o = t(399606),
    d = t(481060),
    c = t(749210),
    u = t(410030),
    m = t(607070),
    I = t(603368),
    h = t(903518),
    N = t(687158),
    g = t(576635),
    x = t(484459),
    E = t(502762),
    T = t(430824),
    S = t(594174),
    _ = t(5192),
    f = t(51144),
    p = t(15378);
function v(e) {
    var n;
    let { guildId: t, welcomeMessage: s, className: v } = e,
        C = (0, o.e7)([T.Z], () => T.Z.getGuild(t)),
        j = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
        D = (0, o.e7)([S.default], () => S.default.getUser(null == s ? void 0 : s.authorIds[0])),
        O = i.useMemo(() => (null != C && null != D && (0, h.Y)(C, D) ? D : null), [C, D]),
        G = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        A = (0, N.ZP)(null !== (n = null == O ? void 0 : O.id) && void 0 !== n ? n : '0', t),
        { theme: Z, primaryColor: L } = (0, g.Z)({
            user: null != O ? O : void 0,
            displayProfile: A
        }),
        b = (0, u.ZP)(),
        R = (0, d.dQu)(d.TVs.colors.BACKGROUND_SECONDARY, Z).hex(),
        P = i.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.authorIds) && void 0 !== e ? e : [];
        }, [s]);
    i.useEffect(() => {
        c.Z.requestMembersById(t, P);
    }, [t, P]),
        i.useEffect(() => {
            null != O && (0, x.Z)(O.id, O.getAvatarURL(t, 48), { guildId: t });
        }, [O, t]);
    let U = _.ZP.useName(t, null, O),
        M = (0, f._T)(G),
        w = null != L ? (0, a.br)(L, 1) : R,
        y = (0, I.$0)(w);
    if (null == O || null == G || null == s) return null;
    let k = null != C && C.ownerId === O.id;
    return (0, l.jsx)('div', {
        className: r()(p.welcomeMessageContainer, v),
        children: (0, l.jsxs)(E.Z, {
            className: p.welcomeMessageProfileContainer,
            user: O,
            displayProfile: A,
            profileType: null,
            themeOverride: b,
            forceShowPremium: !0,
            children: [
                (0, l.jsx)('div', { className: p.avatarBackground }),
                j
                    ? (0, l.jsx)(d.qEK, {
                          src: O.getAvatarURL(t, 48),
                          size: d.EFr.SIZE_48,
                          className: p.avatar,
                          'aria-label': O.username
                      })
                    : (0, l.jsx)(d.Xo$, {
                          src: O.getAvatarURL(t, 48),
                          size: d.EFr.SIZE_48,
                          className: p.avatar,
                          'aria-label': O.username
                      }),
                (0, l.jsx)('div', {
                    className: p.avatarBorder,
                    style: { backgroundColor: w }
                }),
                (0, l.jsxs)('div', {
                    className: p.welcomeMessageContent,
                    style: { color: y.hex() },
                    children: [
                        (0, l.jsxs)('div', {
                            className: p.adminUsernameContainer,
                            children: [
                                (0, l.jsx)(d.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: U
                                }),
                                k
                                    ? (0, l.jsx)(d.CEn, {
                                          size: 'xxs',
                                          color: 'currentColor',
                                          className: p.ownerIcon
                                      })
                                    : null
                            ]
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            color: 'currentColor',
                            children: (function (e, n) {
                                let t = e.split(/\[@username\]/g);
                                return (0, l.jsx)('span', {
                                    children: t.map((e, s) =>
                                        (0, l.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    e,
                                                    s < t.length - 1
                                                        ? (0, l.jsx)(d.Text, {
                                                              tag: 'span',
                                                              variant: 'text-md/semibold',
                                                              children: '@'.concat(n)
                                                          })
                                                        : null
                                                ]
                                            },
                                            'username-'.concat(s)
                                        )
                                    )
                                });
                            })(null == s ? void 0 : s.message, null != M ? M : G.username)
                        })
                    ]
                })
            ]
        })
    });
}
