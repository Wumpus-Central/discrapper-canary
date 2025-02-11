t.d(n, { Z: () => N });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(666520),
    r = t(246016),
    a = t(189156),
    d = t(706454),
    c = t(430824),
    u = t(914010),
    I = t(785717),
    f = t(250822),
    p = t(771362),
    x = t(280885),
    m = t(819602),
    _ = t(78806),
    h = t(900927),
    Z = t(678738),
    v = t(652853),
    g = t(179828),
    j = t(228168),
    E = t(388032),
    y = t(148839);
function N(e) {
    let { user: n, currentUser: t, displayProfile: N, subsection: T, onClose: b } = e,
        { theme: P } = (0, v.z)(),
        { trackUserProfileAction: S } = (0, I.KZ)(),
        L = null == N ? void 0 : N.guildId,
        C = (0, l.e7)([c.Z], () => (null != L ? c.Z.getGuild(L) : null)),
        A = (0, l.e7)([u.Z], () => u.Z.getGuildId()),
        O = (0, r.Y)({
            userId: n.id,
            location: 'UserProfileModalInfo'
        }),
        R = (0, l.e7)([d.default], () => d.default.locale),
        M = (0, p.Z)(n.id),
        U = (0, f.Z)(n.id);
    return (0, i.jsxs)(o.zJl, {
        fade: !0,
        className: y.scroller,
        children: [
            (null == N ? void 0 : N.bio) != null &&
                (null == N ? void 0 : N.bio) !== '' &&
                (0, i.jsx)(x.Z, {
                    userBio: N.bio,
                    setLineClamp: !1
                }),
            null != C &&
                (0, i.jsx)(g.Z, {
                    user: n,
                    currentUser: t,
                    guild: C,
                    scrollIntoView: T === j.Tb.ROLES
                }),
            n.isProvisional &&
                (0, i.jsx)(a.Z, {
                    look: 'profile_modal',
                    userId: n.id
                }),
            O.length > 0 &&
                (0, i.jsx)(Z.Z, {
                    heading: E.intl.string(E.t['Uv/eT0']),
                    children: (0, i.jsx)(_.Z, { applicationIds: O })
                }),
            (0, i.jsx)(Z.Z, {
                heading: E.intl.string(E.t.a6XYDw),
                children: (0, i.jsx)(h.Z, {
                    userId: n.id,
                    guildId: null == N ? void 0 : N.guildId,
                    tooltipDelay: j.vB
                })
            }),
            M.length > 0 &&
                (0, i.jsx)(Z.Z, {
                    heading: E.intl.string(E.t['3fe7U1']),
                    scrollIntoView: T === j.Tb.CONNECTIONS,
                    children: (0, i.jsx)(m.OA, {
                        connectedAccounts: M,
                        className: y.connections,
                        userId: n.id,
                        theme: P,
                        locale: R
                    })
                }),
            U.length > 0 &&
                (0, i.jsx)(Z.Z, {
                    heading: E.intl.string(E.t.PHjkRE),
                    children: U.map((e) =>
                        (0, i.jsx)(
                            m.tH,
                            {
                                className: y.appsConnections,
                                applicationRoleConnection: e,
                                locale: R,
                                onApplicationClicked: () => {
                                    S({ action: 'PRESS_APP_CONNECTION' }), b();
                                },
                                selectedGuildId: null != A ? A : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(Z.Z, {
                heading: E.intl.string(E.t.PbMNh4),
                scrollIntoView: T === j.Tb.NOTE,
                children: (0, i.jsx)(s.Z, {
                    userId: n.id,
                    className: y.note,
                    autoFocus: T === j.Tb.NOTE,
                    onUpdate: () => S({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
