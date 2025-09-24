t.d(n, { Z: () => I });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    o = t(666520),
    s = t(246016),
    a = t(189156),
    c = t(706454),
    d = t(914010),
    u = t(246946),
    m = t(785717),
    f = t(250822),
    p = t(771362),
    h = t(280885),
    j = t(819602),
    x = t(78806),
    v = t(900927),
    g = t(678738),
    b = t(179828),
    y = t(228168),
    O = t(388032),
    Z = t(54966);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, subsection: P, onClose: N } = e,
        { trackUserProfileAction: T } = (0, m.KZ)(),
        E = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, s.Y)({ userId: n.id }),
        S = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        C = (0, i.e7)([c.default], () => c.default.locale),
        w = (0, p.Z)(n.id),
        _ = (0, f.Z)(n.id);
    return (0, l.jsxs)(r.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== "" &&
                !S &&
                (0, l.jsx)(h.Z, {
                    userBio: I.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.guildId) != null &&
                (0, l.jsx)(b.Z, {
                    user: n,
                    currentUser: t,
                    guildId: I.guildId,
                    scrollIntoView: P === y.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, l.jsx)(g.Z, {
                    heading: O.intl.string(O.t.Iyka0d),
                    headingIcon: (0, l.jsx)(r.Mgn, {
                        size: "xxs",
                        color: r.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, l.jsx)(a.n, { userId: n.id }),
                }),
            A.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: O.intl.string(O.t["Uv/eT0"]),
                    children: (0, l.jsx)(x.Z, { applicationIds: A }),
                }),
            (0, l.jsx)(g.Z, {
                heading: O.intl.string(O.t.a6XYDw),
                children: (0, l.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: y.vB,
                }),
            }),
            w.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: O.intl.string(O.t["3fe7U1"]),
                    scrollIntoView: P === y.Tb.CONNECTIONS,
                    children: (0, l.jsx)(j.ZP, {
                        connectedAccounts: w,
                        className: Z.connections,
                        userId: n.id,
                        locale: C,
                    }),
                }),
            _.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: O.intl.string(O.t.PHjkRE),
                    children: _.map((e) =>
                        (0, l.jsx)(
                            j.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), N();
                                },
                                selectedGuildId: null != E ? E : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(g.Z, {
                heading: O.intl.string(O.t["mQKv+v"]),
                scrollIntoView: P === y.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: P === y.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
