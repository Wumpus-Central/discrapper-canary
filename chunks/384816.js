t.d(n, { Z: () => y });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(481060),
    r = t(666520),
    s = t(246016),
    a = t(189156),
    c = t(706454),
    d = t(430824),
    u = t(914010),
    f = t(785717),
    m = t(250822),
    p = t(771362),
    h = t(280885),
    x = t(819602),
    I = t(78806),
    v = t(900927),
    b = t(678738),
    j = t(179828),
    _ = t(228168),
    g = t(388032),
    Z = t(349966);
function y(e) {
    let { user: n, currentUser: t, displayProfile: y, subsection: N, onClose: A } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        O = null == y ? void 0 : y.guildId,
        C = (0, o.e7)([d.Z], () => (null != O ? d.Z.getGuild(O) : null)),
        E = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        P = (0, s.Y)({ userId: n.id }),
        S = (0, o.e7)([c.default], () => c.default.locale),
        M = (0, p.Z)(n.id),
        L = (0, m.Z)(n.id);
    return (0, i.jsxs)(l.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == y ? void 0 : y.bio) != null &&
                (null == y ? void 0 : y.bio) !== '' &&
                (0, i.jsx)(h.Z, {
                    userBio: y.bio,
                    setLineClamp: !1
                }),
            null != C &&
                (0, i.jsx)(j.Z, {
                    user: n,
                    currentUser: t,
                    guild: C,
                    scrollIntoView: N === _.Tb.ROLES
                }),
            n.isProvisional &&
                (0, i.jsx)(a.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            P.length > 0 &&
                (0, i.jsx)(b.Z, {
                    heading: g.intl.string(g.t['Uv/eT0']),
                    children: (0, i.jsx)(I.Z, { applicationIds: P })
                }),
            (0, i.jsx)(b.Z, {
                heading: g.intl.string(g.t.a6XYDw),
                children: (0, i.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == y ? void 0 : y.guildId,
                    tooltipDelay: _.vB
                })
            }),
            M.length > 0 &&
                (0, i.jsx)(b.Z, {
                    heading: g.intl.string(g.t['3fe7U1']),
                    scrollIntoView: N === _.Tb.CONNECTIONS,
                    children: (0, i.jsx)(x.ZP, {
                        connectedAccounts: M,
                        className: Z.connections,
                        userId: n.id,
                        locale: S
                    })
                }),
            L.length > 0 &&
                (0, i.jsx)(b.Z, {
                    heading: g.intl.string(g.t.PHjkRE),
                    children: L.map((e) =>
                        (0, i.jsx)(
                            x.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: S,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != E ? E : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(b.Z, {
                heading: g.intl.string(g.t['mQKv+v']),
                scrollIntoView: N === _.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: N === _.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
