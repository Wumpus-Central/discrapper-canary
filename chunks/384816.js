t.d(n, { Z: () => _ });
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
    p = t(250822),
    m = t(771362),
    b = t(280885),
    h = t(819602),
    g = t(78806),
    j = t(900927),
    v = t(678738),
    x = t(652853),
    y = t(179828),
    I = t(228168),
    O = t(388032),
    Z = t(349966);
function _(e) {
    let { user: n, currentUser: t, displayProfile: _, subsection: P, onClose: E } = e,
        { theme: N } = (0, x.z)(),
        { trackUserProfileAction: A } = (0, f.KZ)(),
        T = null == _ ? void 0 : _.guildId,
        C = (0, o.e7)([d.Z], () => (null != T ? d.Z.getGuild(T) : null)),
        S = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        w = (0, s.Y)({ userId: n.id }),
        M = (0, o.e7)([a.default], () => a.default.locale),
        R = (0, m.Z)(n.id),
        L = (0, p.Z)(n.id);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == _ ? void 0 : _.bio) != null &&
                (null == _ ? void 0 : _.bio) !== '' &&
                (0, r.jsx)(b.Z, {
                    userBio: _.bio,
                    setLineClamp: !1
                }),
            null != C &&
                (0, r.jsx)(y.Z, {
                    user: n,
                    currentUser: t,
                    guild: C,
                    scrollIntoView: P === I.Tb.ROLES
                }),
            n.isProvisional &&
                (0, r.jsx)(c.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            w.length > 0 &&
                (0, r.jsx)(v.Z, {
                    heading: O.intl.string(O.t['Uv/eT0']),
                    children: (0, r.jsx)(g.Z, { applicationIds: w })
                }),
            (0, r.jsx)(v.Z, {
                heading: O.intl.string(O.t.a6XYDw),
                children: (0, r.jsx)(j.Z, {
                    userId: n.id,
                    guildId: null == _ ? void 0 : _.guildId,
                    tooltipDelay: I.vB
                })
            }),
            R.length > 0 &&
                (0, r.jsx)(v.Z, {
                    heading: O.intl.string(O.t['3fe7U1']),
                    scrollIntoView: P === I.Tb.CONNECTIONS,
                    children: (0, r.jsx)(h.OA, {
                        connectedAccounts: R,
                        className: Z.connections,
                        userId: n.id,
                        theme: N,
                        locale: M
                    })
                }),
            L.length > 0 &&
                (0, r.jsx)(v.Z, {
                    heading: O.intl.string(O.t.PHjkRE),
                    children: L.map((e) =>
                        (0, r.jsx)(
                            h.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: M,
                                onApplicationClicked: () => {
                                    A({ action: 'PRESS_APP_CONNECTION' }), E();
                                },
                                selectedGuildId: null != S ? S : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, r.jsx)(v.Z, {
                heading: O.intl.string(O.t['mQKv+v']),
                scrollIntoView: P === I.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: P === I.Tb.NOTE,
                    onUpdate: () => A({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
