t.d(n, { Z: () => I });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(246016),
    a = t(189156),
    c = t(706454),
    u = t(914010),
    d = t(246946),
    f = t(785717),
    p = t(250822),
    g = t(771362),
    v = t(280885),
    j = t(819602),
    h = t(78806),
    m = t(900927),
    b = t(678738),
    x = t(179828),
    O = t(228168),
    y = t(388032),
    Z = t(349966);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, subsection: P, onClose: E } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        S = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        N = (0, s.Y)({ userId: n.id }),
        A = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        C = (0, r.e7)([c.default], () => c.default.locale),
        w = (0, g.Z)(n.id),
        _ = (0, p.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== '' &&
                !A &&
                (0, l.jsx)(v.Z, {
                    userBio: I.bio,
                    setLineClamp: !1
                }),
            (null == I ? void 0 : I.guildId) != null &&
                (0, l.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guildId: I.guildId,
                    scrollIntoView: P === O.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t.Iyka0d),
                    headingIcon: (0, l.jsx)(i.P4T, {
                        size: 'xxs',
                        color: i.TVs.colors.HEADER_PRIMARY
                    }),
                    headingColor: 'header-secondary',
                    children: (0, l.jsx)(a.n, { userId: n.id })
                }),
            N.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t['Uv/eT0']),
                    children: (0, l.jsx)(h.Z, { applicationIds: N })
                }),
            (0, l.jsx)(b.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, l.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: O.vB
                })
            }),
            w.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t['3fe7U1']),
                    scrollIntoView: P === O.Tb.CONNECTIONS,
                    children: (0, l.jsx)(j.ZP, {
                        connectedAccounts: w,
                        className: Z.connections,
                        userId: n.id,
                        locale: C
                    })
                }),
            _.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: _.map((e) =>
                        (0, l.jsx)(
                            j.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), E();
                                },
                                selectedGuildId: null != S ? S : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(b.Z, {
                heading: y.intl.string(y.t['mQKv+v']),
                scrollIntoView: P === O.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: P === O.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
