t.d(n, { Z: () => I });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(246016),
    a = t(189156),
    d = t(706454),
    c = t(430824),
    u = t(914010),
    f = t(785717),
    h = t(250822),
    p = t(771362),
    g = t(280885),
    j = t(819602),
    v = t(78806),
    m = t(900927),
    x = t(678738),
    Z = t(179828),
    b = t(228168),
    O = t(388032),
    y = t(349966);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, subsection: E, onClose: P } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        N = null == I ? void 0 : I.guildId,
        A = (0, r.e7)([c.Z], () => (null != N ? c.Z.getGuild(N) : null)),
        S = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        C = (0, s.Y)({ userId: n.id }),
        _ = (0, r.e7)([d.default], () => d.default.locale),
        R = (0, p.Z)(n.id),
        w = (0, h.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: y.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== '' &&
                (0, l.jsx)(g.Z, {
                    userBio: I.bio,
                    setLineClamp: !1
                }),
            null != A &&
                (0, l.jsx)(Z.Z, {
                    user: n,
                    currentUser: t,
                    guild: A,
                    scrollIntoView: E === b.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(a.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            C.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t['Uv/eT0']),
                    children: (0, l.jsx)(v.Z, { applicationIds: C })
                }),
            (0, l.jsx)(x.Z, {
                heading: O.intl.string(O.t.a6XYDw),
                children: (0, l.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: b.vB
                })
            }),
            R.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t['3fe7U1']),
                    scrollIntoView: E === b.Tb.CONNECTIONS,
                    children: (0, l.jsx)(j.ZP, {
                        connectedAccounts: R,
                        className: y.connections,
                        userId: n.id,
                        locale: _
                    })
                }),
            w.length > 0 &&
                (0, l.jsx)(x.Z, {
                    heading: O.intl.string(O.t.PHjkRE),
                    children: w.map((e) =>
                        (0, l.jsx)(
                            j.tH,
                            {
                                className: y.appsConnections,
                                applicationRoleConnection: e,
                                locale: _,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), P();
                                },
                                selectedGuildId: null != S ? S : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(x.Z, {
                heading: O.intl.string(O.t['mQKv+v']),
                scrollIntoView: E === b.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: y.note,
                    autoFocus: E === b.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
