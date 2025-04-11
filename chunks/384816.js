t.d(n, { Z: () => Z });
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
    y = t(280885),
    I = t(819602),
    g = t(78806),
    m = t(900927),
    j = t(678738),
    v = t(652853),
    h = t(179828),
    x = t(228168),
    O = t(388032),
    _ = t(349966);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, subsection: N, onClose: P } = e,
        { theme: E } = (0, v.z)(),
        { trackUserProfileAction: S } = (0, f.KZ)(),
        T = null == Z ? void 0 : Z.guildId,
        C = (0, o.e7)([d.Z], () => (null != T ? d.Z.getGuild(T) : null)),
        A = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        w = (0, s.Y)({
            userId: n.id,
            location: 'UserProfileModalInfo'
        }),
        L = (0, o.e7)([a.default], () => a.default.locale),
        R = (0, b.Z)(n.id),
        M = (0, p.Z)(n.id);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: _.scroller,
        children: [
            (null == Z ? void 0 : Z.bio) != null &&
                (null == Z ? void 0 : Z.bio) !== '' &&
                (0, r.jsx)(y.Z, {
                    userBio: Z.bio,
                    setLineClamp: !1
                }),
            null != C &&
                (0, r.jsx)(h.Z, {
                    user: n,
                    currentUser: t,
                    guild: C,
                    scrollIntoView: N === x.Tb.ROLES
                }),
            n.isProvisional &&
                (0, r.jsx)(c.WR, {
                    userId: n.id,
                    headingColor: 'header-secondary'
                }),
            w.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: O.NW.string(O.t['Uv/eT0']),
                    children: (0, r.jsx)(g.Z, { applicationIds: w })
                }),
            (0, r.jsx)(j.Z, {
                heading: O.NW.string(O.t.a6XYDw),
                children: (0, r.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == Z ? void 0 : Z.guildId,
                    tooltipDelay: x.vB
                })
            }),
            R.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: O.NW.string(O.t['3fe7U1']),
                    scrollIntoView: N === x.Tb.CONNECTIONS,
                    children: (0, r.jsx)(I.OA, {
                        connectedAccounts: R,
                        className: _.connections,
                        userId: n.id,
                        theme: E,
                        locale: L
                    })
                }),
            M.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: O.NW.string(O.t.PHjkRE),
                    children: M.map((e) =>
                        (0, r.jsx)(
                            I.tH,
                            {
                                className: _.appsConnections,
                                applicationRoleConnection: e,
                                locale: L,
                                onApplicationClicked: () => {
                                    S({ action: 'PRESS_APP_CONNECTION' }), P();
                                },
                                selectedGuildId: null != A ? A : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, r.jsx)(j.Z, {
                heading: O.NW.string(O.t['mQKv+v']),
                scrollIntoView: N === x.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: n.id,
                    className: _.note,
                    autoFocus: N === x.Tb.NOTE,
                    onUpdate: () => S({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
