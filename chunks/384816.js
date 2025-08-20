t.d(n, { Z: () => O });
var r = t(951288);
t(647438);
var o = t(442837),
    l = t(481060),
    i = t(666520),
    c = t(246016),
    a = t(189156),
    s = t(706454),
    d = t(914010),
    u = t(246946),
    f = t(785717),
    m = t(250822),
    p = t(771362),
    b = t(280885),
    g = t(819602),
    x = t(78806),
    h = t(900927),
    j = t(678738),
    v = t(179828),
    _ = t(228168),
    y = t(388032),
    I = t(54966);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, subsection: P, onClose: Z } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        A = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        N = (0, c.Y)({ userId: n.id }),
        C = (0, o.e7)([u.Z], () => u.Z.hidePersonalInformation),
        E = (0, o.e7)([s.default], () => s.default.locale),
        S = (0, p.Z)(n.id),
        w = (0, m.Z)(n.id);
    return (0, r.jsxs)(l.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                !C &&
                (0, r.jsx)(b.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, r.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guildId: O.guildId,
                    scrollIntoView: P === _.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t.Iyka0d),
                    headingIcon: (0, r.jsx)(l.Mgn, {
                        size: "xxs",
                        color: l.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, r.jsx)(a.n, { userId: n.id }),
                }),
            N.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t["Uv/eT0"]),
                    children: (0, r.jsx)(x.Z, { applicationIds: N }),
                }),
            (0, r.jsx)(j.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, r.jsx)(h.Z, {
                    userId: n.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: _.vB,
                }),
            }),
            S.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t["3fe7U1"]),
                    scrollIntoView: P === _.Tb.CONNECTIONS,
                    children: (0, r.jsx)(g.ZP, {
                        connectedAccounts: S,
                        className: I.connections,
                        userId: n.id,
                        locale: E,
                    }),
                }),
            w.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, r.jsx)(
                            g.tH,
                            {
                                className: I.appsConnections,
                                applicationRoleConnection: e,
                                locale: E,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), Z();
                                },
                                selectedGuildId: null != A ? A : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(j.Z, {
                heading: y.intl.string(y.t["mQKv+v"]),
                scrollIntoView: P === _.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: P === _.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
