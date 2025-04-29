t.d(n, { Z: () => E });
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
    f = t(246946),
    h = t(785717),
    p = t(250822),
    g = t(771362),
    j = t(280885),
    m = t(819602),
    v = t(78806),
    x = t(900927),
    Z = t(678738),
    b = t(179828),
    O = t(228168),
    y = t(388032),
    I = t(349966);
function E(e) {
    let { user: n, currentUser: t, displayProfile: E, subsection: P, onClose: T } = e,
        { trackUserProfileAction: N } = (0, h.KZ)(),
        A = null == E ? void 0 : E.guildId,
        S = (0, r.e7)([c.Z], () => (null != A ? c.Z.getGuild(A) : null)),
        C = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        _ = (0, s.Y)({ userId: n.id }),
        R = (0, r.e7)([f.Z], () => f.Z.hidePersonalInformation),
        w = (0, r.e7)([d.default], () => d.default.locale),
        M = (0, g.Z)(n.id),
        L = (0, p.Z)(n.id);
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == E ? void 0 : E.bio) != null &&
                (null == E ? void 0 : E.bio) !== '' &&
                !R &&
                (0, l.jsx)(j.Z, {
                    userBio: E.bio,
                    setLineClamp: !1
                }),
            null != S &&
                (0, l.jsx)(b.Z, {
                    user: n,
                    currentUser: t,
                    guild: S,
                    scrollIntoView: P === O.Tb.ROLES
                }),
            n.isProvisional &&
                (0, l.jsx)(a.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            _.length > 0 &&
                (0, l.jsx)(Z.Z, {
                    heading: y.intl.string(y.t['Uv/eT0']),
                    children: (0, l.jsx)(v.Z, { applicationIds: _ })
                }),
            (0, l.jsx)(Z.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, l.jsx)(x.Z, {
                    userId: n.id,
                    guildId: null == E ? void 0 : E.guildId,
                    tooltipDelay: O.vB
                })
            }),
            M.length > 0 &&
                (0, l.jsx)(Z.Z, {
                    heading: y.intl.string(y.t['3fe7U1']),
                    scrollIntoView: P === O.Tb.CONNECTIONS,
                    children: (0, l.jsx)(m.ZP, {
                        connectedAccounts: M,
                        className: I.connections,
                        userId: n.id,
                        locale: w
                    })
                }),
            L.length > 0 &&
                (0, l.jsx)(Z.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: L.map((e) =>
                        (0, l.jsx)(
                            m.tH,
                            {
                                className: I.appsConnections,
                                applicationRoleConnection: e,
                                locale: w,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), T();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, l.jsx)(Z.Z, {
                heading: y.intl.string(y.t['mQKv+v']),
                scrollIntoView: P === O.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: P === O.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
