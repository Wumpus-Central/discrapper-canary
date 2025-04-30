t.d(n, { Z: () => P });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    s = t(666520),
    o = t(246016),
    a = t(189156),
    c = t(706454),
    d = t(430824),
    u = t(914010),
    f = t(246946),
    p = t(785717),
    h = t(250822),
    v = t(771362),
    g = t(280885),
    j = t(819602),
    m = t(78806),
    b = t(900927),
    x = t(678738),
    Z = t(179828),
    O = t(228168),
    y = t(388032),
    I = t(349966);
function P(e) {
    let { user: n, currentUser: t, displayProfile: P, subsection: E, onClose: N } = e,
        { trackUserProfileAction: T } = (0, p.KZ)(),
        S = null == P ? void 0 : P.guildId,
        A = (0, r.e7)([d.Z], () => (null != S ? d.Z.getGuild(S) : null)),
        C = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        _ = (0, o.Y)({ userId: n.id }),
        w = (0, r.e7)([f.Z], () => f.Z.hidePersonalInformation),
        R = (0, r.e7)([c.default], () => c.default.locale),
        M = (0, v.Z)(n.id),
        L = (0, h.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == P ? void 0 : P.bio) != null &&
                (null == P ? void 0 : P.bio) !== '' &&
                !w &&
                (0, l.jsx)(g.Z, {
                    userBio: P.bio,
                    setLineClamp: !1
                }),
            null != A &&
                (0, l.jsx)(Z.Z, {
                    user: n,
                    currentUser: t,
                    guild: A,
                    scrollIntoView: E === O.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(a.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            _.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: y.intl.string(y.t['Uv/eT0']),
                    children: (0, l.jsx)(m.Z, { applicationIds: _ })
                }),
            (0, l.jsx)(x.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, l.jsx)(b.Z, {
                    userId: n.id,
                    guildId: null == P ? void 0 : P.guildId,
                    tooltipDelay: O.vB
                })
            }),
            M.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: y.intl.string(y.t['3fe7U1']),
                    scrollIntoView: E === O.Tb.CONNECTIONS,
                    children: (0, l.jsx)(j.ZP, {
                        connectedAccounts: M,
                        className: I.connections,
                        userId: n.id,
                        locale: R
                    })
                }),
            L.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: L.map((e) =>
                        (0, l.jsx)(
                            j.tH,
                            {
                                className: I.appsConnections,
                                applicationRoleConnection: e,
                                locale: R,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), N();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(x.Z, {
                heading: y.intl.string(y.t['mQKv+v']),
                scrollIntoView: E === O.Tb.NOTE,
                children: (0, l.jsx)(s.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: E === O.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
