t.d(n, { Z: () => I });
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
    x = t(280885),
    b = t(819602),
    g = t(78806),
    h = t(900927),
    j = t(678738),
    v = t(179828),
    _ = t(228168),
    y = t(388032),
    O = t(54966);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, subsection: Z, onClose: P } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        N = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, c.Y)({ userId: n.id }),
        C = (0, o.e7)([u.Z], () => u.Z.hidePersonalInformation),
        E = (0, o.e7)([s.default], () => s.default.locale),
        S = (0, p.Z)(n.id),
        w = (0, m.Z)(n.id);
    return (0, r.jsxs)(l.zJl, {
        fade: !0,
        className: O.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== "" &&
                !C &&
                (0, r.jsx)(x.Z, {
                    userBio: I.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.guildId) != null &&
                (0, r.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guildId: I.guildId,
                    scrollIntoView: Z === _.Tb.ROLES,
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
            A.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t["Uv/eT0"]),
                    children: (0, r.jsx)(g.Z, { applicationIds: A }),
                }),
            (0, r.jsx)(j.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, r.jsx)(h.Z, {
                    userId: n.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: _.vB,
                }),
            }),
            S.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t["3fe7U1"]),
                    scrollIntoView: Z === _.Tb.CONNECTIONS,
                    children: (0, r.jsx)(b.ZP, {
                        connectedAccounts: S,
                        className: O.connections,
                        userId: n.id,
                        locale: E,
                    }),
                }),
            w.length > 0 &&
                (0, r.jsx)(j.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, r.jsx)(
                            b.tH,
                            {
                                className: O.appsConnections,
                                applicationRoleConnection: e,
                                locale: E,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), P();
                                },
                                selectedGuildId: null != N ? N : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(j.Z, {
                heading: y.intl.string(y.t["mQKv+v"]),
                scrollIntoView: Z === _.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: n.id,
                    className: O.note,
                    autoFocus: Z === _.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
