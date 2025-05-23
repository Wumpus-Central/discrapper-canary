t.d(n, { Z: () => P });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(246016),
    c = t(189156),
    u = t(706454),
    a = t(430824),
    d = t(914010),
    f = t(246946),
    p = t(785717),
    g = t(250822),
    h = t(771362),
    v = t(280885),
    j = t(819602),
    m = t(78806),
    b = t(900927),
    x = t(678738),
    Z = t(179828),
    y = t(228168),
    O = t(388032),
    I = t(349966);
function P(e) {
    let { user: n, currentUser: t, displayProfile: P, subsection: E, onClose: T } = e,
        { trackUserProfileAction: S } = (0, p.KZ)(),
        N = null == P ? void 0 : P.guildId,
        A = (0, r.e7)([a.Z], () => (null != N ? a.Z.getGuild(N) : null)),
        C = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        _ = (0, s.Y)({ userId: n.id }),
        w = (0, r.e7)([f.Z], () => f.Z.hidePersonalInformation),
        R = (0, r.e7)([u.default], () => u.default.locale),
        M = (0, h.Z)(n.id),
        U = (0, g.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == P ? void 0 : P.bio) != null &&
                (null == P ? void 0 : P.bio) !== '' &&
                !w &&
                (0, l.jsx)(v.Z, {
                    userBio: P.bio,
                    setLineClamp: !1
                }),
            null != A &&
                (0, l.jsx)(Z.Z, {
                    user: n,
                    currentUser: t,
                    guild: A,
                    scrollIntoView: E === y.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t.Iyka0d),
                    headingIcon: (0, l.jsx)(i.P4T, {
                        size: 'xxs',
                        color: i.TVs.colors.HEADER_PRIMARY
                    }),
                    headingColor: 'header-secondary',
                    children: (0, l.jsx)(c.n, { userId: n.id })
                }),
            _.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t['Uv/eT0']),
                    children: (0, l.jsx)(m.Z, { applicationIds: _ })
                }),
            (0, l.jsx)(x.Z, {
                heading: O.intl.string(O.t.a6XYDw),
                children: (0, l.jsx)(b.Z, {
                    userId: n.id,
                    guildId: null == P ? void 0 : P.guildId,
                    tooltipDelay: y.vB
                })
            }),
            M.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t['3fe7U1']),
                    scrollIntoView: E === y.Tb.CONNECTIONS,
                    children: (0, l.jsx)(j.ZP, {
                        connectedAccounts: M,
                        className: I.connections,
                        userId: n.id,
                        locale: R
                    })
                }),
            U.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t.PHjkRE),
                    children: U.map((e) =>
                        (0, l.jsx)(
                            j.tH,
                            {
                                className: I.appsConnections,
                                applicationRoleConnection: e,
                                locale: R,
                                onApplicationClicked: () => {
                                    S({ action: 'PRESS_APP_CONNECTION' }), T();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(x.Z, {
                heading: O.intl.string(O.t['mQKv+v']),
                scrollIntoView: E === y.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: E === y.Tb.NOTE,
                    onUpdate: () => S({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
