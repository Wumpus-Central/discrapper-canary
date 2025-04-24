t.d(n, { Z: () => y });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(481060),
    r = t(666520),
    s = t(246016),
    c = t(189156),
    a = t(706454),
    d = t(430824),
    u = t(914010),
    f = t(785717),
    p = t(250822),
    m = t(771362),
    h = t(280885),
    I = t(819602),
    x = t(78806),
    b = t(900927),
    _ = t(678738),
    j = t(179828),
    v = t(228168),
    g = t(388032),
    Z = t(349966);
function y(e) {
    let { user: n, currentUser: t, displayProfile: y, subsection: A, onClose: T } = e,
        { trackUserProfileAction: O } = (0, f.KZ)(),
        N = null == y ? void 0 : y.guildId,
        E = (0, o.e7)([d.Z], () => (null != N ? d.Z.getGuild(N) : null)),
        C = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        P = (0, s.Y)({ userId: n.id }),
        S = (0, o.e7)([a.default], () => a.default.locale),
        M = (0, m.Z)(n.id),
        w = (0, p.Z)(n.id);
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
            null != E &&
                (0, i.jsx)(j.Z, {
                    user: n,
                    currentUser: t,
                    guild: E,
                    scrollIntoView: A === v.Tb.ROLES
                }),
            n.isProvisional &&
                (0, i.jsx)(c.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            P.length > 0 &&
                (0, i.jsx)(_.Z, {
                    heading: g.intl.string(g.t['Uv/eT0']),
                    children: (0, i.jsx)(x.Z, { applicationIds: P })
                }),
            (0, i.jsx)(_.Z, {
                heading: g.intl.string(g.t.a6XYDw),
                children: (0, i.jsx)(b.Z, {
                    userId: n.id,
                    guildId: null == y ? void 0 : y.guildId,
                    tooltipDelay: v.vB
                })
            }),
            M.length > 0 &&
                (0, i.jsx)(_.Z, {
                    heading: g.intl.string(g.t['3fe7U1']),
                    scrollIntoView: A === v.Tb.CONNECTIONS,
                    children: (0, i.jsx)(I.ZP, {
                        connectedAccounts: M,
                        className: Z.connections,
                        userId: n.id,
                        locale: S
                    })
                }),
            w.length > 0 &&
                (0, i.jsx)(_.Z, {
                    heading: g.intl.string(g.t.PHjkRE),
                    children: w.map((e) =>
                        (0, i.jsx)(
                            I.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: S,
                                onApplicationClicked: () => {
                                    O({ action: 'PRESS_APP_CONNECTION' }), T();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(_.Z, {
                heading: g.intl.string(g.t['mQKv+v']),
                scrollIntoView: A === v.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: A === v.Tb.NOTE,
                    onUpdate: () => O({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
