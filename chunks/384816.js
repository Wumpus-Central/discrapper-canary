i.d(n, { Z: () => y });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(481060),
    s = i(666520),
    r = i(246016),
    a = i(189156),
    d = i(706454),
    c = i(430824),
    u = i(914010),
    m = i(785717),
    x = i(250822),
    p = i(771362),
    f = i(280885),
    I = i(819602),
    h = i(78806),
    v = i(900927),
    Z = i(678738),
    g = i(652853),
    _ = i(179828),
    j = i(228168),
    E = i(388032),
    N = i(64406);
function y(e) {
    let { user: n, currentUser: i, displayProfile: y, subsection: T, onClose: S } = e,
        { theme: b } = (0, g.z)(),
        { trackUserProfileAction: P } = (0, m.KZ)(),
        L = null == y ? void 0 : y.guildId,
        C = (0, l.e7)([c.Z], () => (null != L ? c.Z.getGuild(L) : null)),
        A = (0, l.e7)([u.Z], () => u.Z.getGuildId()),
        O = (0, r.Y)({
            userId: n.id,
            location: 'UserProfileModalInfo'
        }),
        M = (0, l.e7)([d.default], () => d.default.locale),
        R = (0, p.Z)(n.id),
        U = (0, x.Z)(n.id);
    return (0, t.jsxs)(o.zJl, {
        fade: !0,
        className: N.scroller,
        children: [
            (null == y ? void 0 : y.bio) != null &&
                (null == y ? void 0 : y.bio) !== '' &&
                (0, t.jsx)(f.Z, {
                    userBio: y.bio,
                    setLineClamp: !1
                }),
            null != C &&
                (0, t.jsx)(_.Z, {
                    user: n,
                    currentUser: i,
                    guild: C,
                    scrollIntoView: T === j.Tb.ROLES
                }),
            n.isProvisional &&
                (0, t.jsx)(a.Z, {
                    look: 'profile_modal',
                    userId: n.id
                }),
            O.length > 0 &&
                (0, t.jsx)(Z.Z, {
                    heading: E.intl.string(E.t['Uv/eT0']),
                    children: (0, t.jsx)(h.Z, { applicationIds: O })
                }),
            (0, t.jsx)(Z.Z, {
                heading: E.intl.string(E.t.a6XYDw),
                children: (0, t.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == y ? void 0 : y.guildId,
                    tooltipDelay: j.vB
                })
            }),
            R.length > 0 &&
                (0, t.jsx)(Z.Z, {
                    heading: E.intl.string(E.t['3fe7U1']),
                    scrollIntoView: T === j.Tb.CONNECTIONS,
                    children: (0, t.jsx)(I.OA, {
                        connectedAccounts: R,
                        className: N.connections,
                        userId: n.id,
                        theme: b,
                        locale: M
                    })
                }),
            U.length > 0 &&
                (0, t.jsx)(Z.Z, {
                    heading: E.intl.string(E.t.PHjkRE),
                    children: U.map((e) =>
                        (0, t.jsx)(
                            I.tH,
                            {
                                className: N.appsConnections,
                                applicationRoleConnection: e,
                                locale: M,
                                onApplicationClicked: () => {
                                    P({ action: 'PRESS_APP_CONNECTION' }), S();
                                },
                                selectedGuildId: null != A ? A : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(Z.Z, {
                heading: E.intl.string(E.t.PbMNh4),
                scrollIntoView: T === j.Tb.NOTE,
                children: (0, t.jsx)(s.Z, {
                    userId: n.id,
                    className: N.note,
                    autoFocus: T === j.Tb.NOTE,
                    onUpdate: () => P({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
