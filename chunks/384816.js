t.d(n, { Z: () => I });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(246016),
    a = t(189156),
    c = t(706454),
    u = t(430824),
    d = t(914010),
    f = t(246946),
    p = t(785717),
    g = t(250822),
    v = t(771362),
    j = t(280885),
    h = t(819602),
    m = t(78806),
    b = t(900927),
    x = t(678738),
    O = t(179828),
    y = t(228168),
    Z = t(388032),
    P = t(349966);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, subsection: E, onClose: S } = e,
        { trackUserProfileAction: T } = (0, p.KZ)(),
        N = null == I ? void 0 : I.guildId,
        A = (0, r.e7)([u.Z], () => (null != N ? u.Z.getGuild(N) : null)),
        C = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        _ = (0, s.Y)({ userId: n.id }),
        w = (0, r.e7)([f.Z], () => f.Z.hidePersonalInformation),
        M = (0, r.e7)([c.default], () => c.default.locale),
        R = (0, v.Z)(n.id),
        U = (0, g.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: P.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== '' &&
                !w &&
                (0, l.jsx)(j.Z, {
                    userBio: I.bio,
                    setLineClamp: !1
                }),
            null != A &&
                (0, l.jsx)(O.Z, {
                    user: n,
                    currentUser: t,
                    guild: A,
                    scrollIntoView: E === y.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(x.Z, {
                    heading: Z.intl.string(Z.t.Iyka0d),
                    headingIcon: (0, l.jsx)(i.P4T, {
                        size: 'xxs',
                        color: i.TVs.colors.HEADER_PRIMARY
                    }),
                    headingColor: 'header-secondary',
                    children: (0, l.jsx)(a.n, { userId: n.id })
                }),
            _.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: Z.intl.string(Z.t['Uv/eT0']),
                    children: (0, l.jsx)(m.Z, { applicationIds: _ })
                }),
            (0, l.jsx)(x.Z, {
                heading: Z.intl.string(Z.t.a6XYDw),
                children: (0, l.jsx)(b.Z, {
                    userId: n.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: y.vB
                })
            }),
            R.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: Z.intl.string(Z.t['3fe7U1']),
                    scrollIntoView: E === y.Tb.CONNECTIONS,
                    children: (0, l.jsx)(h.ZP, {
                        connectedAccounts: R,
                        className: P.connections,
                        userId: n.id,
                        locale: M
                    })
                }),
            U.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: Z.intl.string(Z.t.PHjkRE),
                    children: U.map((e) =>
                        (0, l.jsx)(
                            h.tH,
                            {
                                className: P.appsConnections,
                                applicationRoleConnection: e,
                                locale: M,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), S();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(x.Z, {
                heading: Z.intl.string(Z.t['mQKv+v']),
                scrollIntoView: E === y.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: P.note,
                    autoFocus: E === y.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
