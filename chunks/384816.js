t.d(n, { Z: () => O });
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
    b = t(771362),
    m = t(280885),
    h = t(819602),
    I = t(78806),
    g = t(900927),
    y = t(678738),
    j = t(652853),
    v = t(179828),
    x = t(228168),
    _ = t(388032),
    Z = t(577069);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, subsection: N, onClose: P } = e,
        { theme: E } = (0, j.z)(),
        { trackUserProfileAction: S } = (0, f.KZ)(),
        T = null == O ? void 0 : O.guildId,
        A = (0, o.e7)([d.Z], () => (null != T ? d.Z.getGuild(T) : null)),
        C = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        L = (0, s.Y)({ userId: n.id }),
        w = (0, o.e7)([a.default], () => a.default.locale),
        R = (0, b.Z)(n.id),
        M = (0, p.Z)(n.id);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== '' &&
                (0, r.jsx)(m.Z, {
                    userBio: O.bio,
                    setLineClamp: !1
                }),
            null != A &&
                (0, r.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guild: A,
                    scrollIntoView: N === x.Tb.ROLES
                }),
            n.isProvisional &&
                (0, r.jsx)(c.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            L.length > 0 &&
                (0, r.jsx)(y.Z, {
                    heading: _.NW.string(_.t['Uv/eT0']),
                    children: (0, r.jsx)(I.Z, { applicationIds: L })
                }),
            (0, r.jsx)(y.Z, {
                heading: _.NW.string(_.t.a6XYDw),
                children: (0, r.jsx)(g.Z, {
                    userId: n.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: x.vB
                })
            }),
            R.length > 0 &&
                (0, r.jsx)(y.Z, {
                    heading: _.NW.string(_.t['3fe7U1']),
                    scrollIntoView: N === x.Tb.CONNECTIONS,
                    children: (0, r.jsx)(h.OA, {
                        connectedAccounts: R,
                        className: Z.connections,
                        userId: n.id,
                        theme: E,
                        locale: w
                    })
                }),
            M.length > 0 &&
                (0, r.jsx)(y.Z, {
                    heading: _.NW.string(_.t.PHjkRE),
                    children: M.map((e) =>
                        (0, r.jsx)(
                            h.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: w,
                                onApplicationClicked: () => {
                                    S({ action: 'PRESS_APP_CONNECTION' }), P();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, r.jsx)(y.Z, {
                heading: _.NW.string(_.t['mQKv+v']),
                scrollIntoView: N === x.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: N === x.Tb.NOTE,
                    onUpdate: () => S({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
