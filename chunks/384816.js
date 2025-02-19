t.d(n, { Z: () => N });
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(666520),
    s = t(246016),
    c = t(189156),
    a = t(706454),
    d = t(430824),
    u = t(914010),
    f = t(785717),
    p = t(748545),
    m = t(250822),
    I = t(771362),
    b = t(280885),
    g = t(819602),
    v = t(78806),
    y = t(900927),
    j = t(678738),
    h = t(652853),
    x = t(179828),
    O = t(228168),
    _ = t(388032),
    Z = t(329462);
function N(e) {
    let { user: n, currentUser: t, displayProfile: N, subsection: P, onClose: E } = e,
        { theme: S } = (0, h.z)(),
        { trackUserProfileAction: T } = (0, f.KZ)(),
        C = null == N ? void 0 : N.guildId,
        L = (0, o.e7)([d.Z], () => (null != C ? d.Z.getGuild(C) : null)),
        w = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        A = (0, s.Y)({
            userId: n.id,
            location: 'UserProfileModalInfo'
        }),
        M = (0, o.e7)([a.default], () => a.default.locale),
        R = (0, I.Z)(n.id),
        U = (0, m.Z)(n.id),
        D = (0, p.kc)({ location: 'UserProfileModalInfo' }) ? _.NW.string(_.t['mQKv+v']) : _.NW.string(_.t.PbMNh4);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == N ? void 0 : N.bio) != null &&
                (null == N ? void 0 : N.bio) !== '' &&
                (0, r.jsx)(b.Z, {
                    userBio: N.bio,
                    setLineClamp: !1
                }),
            null != L &&
                (0, r.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guild: L,
                    scrollIntoView: P === O.Tb.ROLES
                }),
            n.isProvisional &&
                (0, r.jsx)(c.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            A.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: _.NW.string(_.t['Uv/eT0']),
                    children: (0, r.jsx)(v.Z, { applicationIds: A })
                }),
            (0, r.jsx)(j.Z, {
                heading: _.NW.string(_.t.a6XYDw),
                children: (0, r.jsx)(y.Z, {
                    userId: n.id,
                    guildId: null == N ? void 0 : N.guildId,
                    tooltipDelay: O.vB
                })
            }),
            R.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: _.NW.string(_.t['3fe7U1']),
                    scrollIntoView: P === O.Tb.CONNECTIONS,
                    children: (0, r.jsx)(g.OA, {
                        connectedAccounts: R,
                        className: Z.connections,
                        userId: n.id,
                        theme: S,
                        locale: M
                    })
                }),
            U.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: _.NW.string(_.t.PHjkRE),
                    children: U.map((e) =>
                        (0, r.jsx)(
                            g.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: M,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), E();
                                },
                                selectedGuildId: null != w ? w : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, r.jsx)(j.Z, {
                heading: D,
                scrollIntoView: P === O.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: P === O.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
