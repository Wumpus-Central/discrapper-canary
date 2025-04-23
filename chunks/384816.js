t.d(n, { Z: () => P });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(246016),
    u = t(189156),
    a = t(706454),
    c = t(430824),
    d = t(914010),
    f = t(785717),
    p = t(250822),
    g = t(771362),
    b = t(280885),
    v = t(819602),
    h = t(78806),
    j = t(900927),
    m = t(678738),
    O = t(652853),
    y = t(179828),
    Z = t(228168),
    I = t(388032),
    x = t(349966);
function P(e) {
    let { user: n, currentUser: t, displayProfile: P, subsection: E, onClose: T } = e,
        { theme: N } = (0, O.z)(),
        { trackUserProfileAction: S } = (0, f.KZ)(),
        C = null == P ? void 0 : P.guildId,
        w = (0, r.e7)([c.Z], () => (null != C ? c.Z.getGuild(C) : null)),
        A = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        R = (0, s.Y)({ userId: n.id }),
        _ = (0, r.e7)([a.default], () => a.default.locale),
        M = (0, g.Z)(n.id),
        U = (0, p.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: x.scroller,
        children: [
            (null == P ? void 0 : P.bio) != null &&
                (null == P ? void 0 : P.bio) !== '' &&
                (0, l.jsx)(b.Z, {
                    userBio: P.bio,
                    setLineClamp: !1
                }),
            null != w &&
                (0, l.jsx)(y.Z, {
                    user: n,
                    currentUser: t,
                    guild: w,
                    scrollIntoView: E === Z.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(u.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            R.length > 0 &&
                (0, l.jsx)(m.Z, {
                    heading: I.intl.string(I.t['Uv/eT0']),
                    children: (0, l.jsx)(h.Z, { applicationIds: R })
                }),
            (0, l.jsx)(m.Z, {
                heading: I.intl.string(I.t.a6XYDw),
                children: (0, l.jsx)(j.Z, {
                    userId: n.id,
                    guildId: null == P ? void 0 : P.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            M.length > 0 &&
                (0, l.jsx)(m.Z, {
                    heading: I.intl.string(I.t['3fe7U1']),
                    scrollIntoView: E === Z.Tb.CONNECTIONS,
                    children: (0, l.jsx)(v.OA, {
                        connectedAccounts: M,
                        className: x.connections,
                        userId: n.id,
                        theme: N,
                        locale: _
                    })
                }),
            U.length > 0 &&
                (0, l.jsx)(m.Z, {
                    heading: I.intl.string(I.t.PHjkRE),
                    children: U.map((e) =>
                        (0, l.jsx)(
                            v.tH,
                            {
                                className: x.appsConnections,
                                applicationRoleConnection: e,
                                locale: _,
                                onApplicationClicked: () => {
                                    S({ action: 'PRESS_APP_CONNECTION' }), T();
                                },
                                selectedGuildId: null != A ? A : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(m.Z, {
                heading: I.intl.string(I.t['mQKv+v']),
                scrollIntoView: E === Z.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: x.note,
                    autoFocus: E === Z.Tb.NOTE,
                    onUpdate: () => S({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
