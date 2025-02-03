i.d(n, { Z: () => P });
var t = i(200651),
    l = i(192379),
    o = i(442837),
    s = i(481060),
    r = i(666520),
    a = i(372460),
    d = i(320582),
    c = i(189156),
    u = i(706454),
    m = i(430824),
    x = i(914010),
    p = i(785717),
    f = i(250822),
    I = i(771362),
    h = i(280885),
    v = i(819602),
    g = i(78806),
    Z = i(900927),
    _ = i(678738),
    j = i(652853),
    E = i(179828),
    N = i(228168),
    y = i(388032),
    T = i(64406);
function P(e) {
    let { user: n, currentUser: i, displayProfile: P, subsection: b, onClose: S } = e,
        { theme: L } = (0, j.z)(),
        { trackUserProfileAction: C } = (0, p.KZ)(),
        A = null == P ? void 0 : P.guildId,
        M = (0, o.e7)([m.Z], () => (null != A ? m.Z.getGuild(A) : null)),
        O = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        R = (0, d.ML)(n.id),
        U = l.useMemo(
            () =>
                R.map((e) => {
                    let { applicationId: n } = e;
                    return n;
                }),
            [R]
        ),
        B = (0, a.wn)({ location: 'UserProfileModalInfo' }) && U.length > 0,
        F = (0, o.e7)([u.default], () => u.default.locale),
        D = (0, I.Z)(n.id),
        w = (0, f.Z)(n.id);
    return (0, t.jsxs)(s.zJl, {
        fade: !0,
        className: T.scroller,
        children: [
            (null == P ? void 0 : P.bio) != null &&
                (null == P ? void 0 : P.bio) !== '' &&
                (0, t.jsx)(h.Z, {
                    userBio: P.bio,
                    setLineClamp: !1
                }),
            null != M &&
                (0, t.jsx)(E.Z, {
                    user: n,
                    currentUser: i,
                    guild: M,
                    scrollIntoView: b === N.Tb.ROLES
                }),
            n.isProvisional &&
                (0, t.jsx)(c.Z, {
                    look: 'profile_modal',
                    userId: n.id
                }),
            B &&
                (0, t.jsx)(_.Z, {
                    heading: y.intl.string(y.t['Uv/eT0']),
                    children: (0, t.jsx)(g.Z, { applicationIds: U })
                }),
            (0, t.jsx)(_.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, t.jsx)(Z.Z, {
                    userId: n.id,
                    guildId: null == P ? void 0 : P.guildId,
                    tooltipDelay: N.vB
                })
            }),
            D.length > 0 &&
                (0, t.jsx)(_.Z, {
                    heading: y.intl.string(y.t['3fe7U1']),
                    scrollIntoView: b === N.Tb.CONNECTIONS,
                    children: (0, t.jsx)(v.OA, {
                        connectedAccounts: D,
                        className: T.connections,
                        userId: n.id,
                        theme: L,
                        locale: F
                    })
                }),
            w.length > 0 &&
                (0, t.jsx)(_.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, t.jsx)(
                            v.tH,
                            {
                                className: T.appsConnections,
                                applicationRoleConnection: e,
                                locale: F,
                                onApplicationClicked: () => {
                                    C({ action: 'PRESS_APP_CONNECTION' }), S();
                                },
                                selectedGuildId: null != O ? O : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(_.Z, {
                heading: y.intl.string(y.t.PbMNh4),
                scrollIntoView: b === N.Tb.NOTE,
                children: (0, t.jsx)(r.Z, {
                    userId: n.id,
                    className: T.note,
                    autoFocus: b === N.Tb.NOTE,
                    onUpdate: () => C({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
