n.d(t, { Z: () => P });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    s = n(666520),
    o = n(246016),
    c = n(189156),
    a = n(706454),
    d = n(430824),
    u = n(914010),
    f = n(246946),
    p = n(785717),
    h = n(250822),
    j = n(771362),
    g = n(280885),
    v = n(819602),
    m = n(78806),
    x = n(900927),
    b = n(678738),
    O = n(179828),
    Z = n(228168),
    y = n(388032),
    I = n(349966);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, subsection: E, onClose: N } = e,
        { trackUserProfileAction: T } = (0, p.KZ)(),
        S = null == P ? void 0 : P.guildId,
        A = (0, r.e7)([d.Z], () => (null != S ? d.Z.getGuild(S) : null)),
        C = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        _ = (0, o.Y)({ userId: t.id }),
        w = (0, r.e7)([f.Z], () => f.Z.hidePersonalInformation),
        R = (0, r.e7)([a.default], () => a.default.locale),
        L = (0, j.Z)(t.id),
        M = (0, h.Z)(t.id);
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
                (0, l.jsx)(O.Z, {
                    user: t,
                    currentUser: n,
                    guild: A,
                    scrollIntoView: E === Z.Tb.ROLES
                }),
            t.isProvisional &&
                (0, l.jsx)(c.WR, {
                    userId: t.id,
                    headingColor: 'header-secondary'
                }),
            _.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t['Uv/eT0']),
                    children: (0, l.jsx)(m.Z, { applicationIds: _ })
                }),
            (0, l.jsx)(b.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, l.jsx)(x.Z, {
                    userId: t.id,
                    guildId: null == P ? void 0 : P.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            L.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t['3fe7U1']),
                    scrollIntoView: E === Z.Tb.CONNECTIONS,
                    children: (0, l.jsx)(v.ZP, {
                        connectedAccounts: L,
                        className: I.connections,
                        userId: t.id,
                        locale: R
                    })
                }),
            M.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: M.map((e) =>
                        (0, l.jsx)(
                            v.tH,
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
            (0, l.jsx)(b.Z, {
                heading: y.intl.string(y.t['mQKv+v']),
                scrollIntoView: E === Z.Tb.NOTE,
                children: (0, l.jsx)(s.Z, {
                    userId: t.id,
                    className: I.note,
                    autoFocus: E === Z.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
