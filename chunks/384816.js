n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    o = n(666520),
    a = n(246016),
    c = n(189156),
    s = n(706454),
    d = n(914010),
    u = n(246946),
    f = n(785717),
    m = n(250822),
    p = n(771362),
    g = n(280885),
    b = n(819602),
    j = n(78806),
    h = n(900927),
    x = n(678738),
    y = n(179828),
    v = n(228168),
    O = n(388032),
    _ = n(349966);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, subsection: P, onClose: Z } = e,
        { trackUserProfileAction: N } = (0, f.KZ)(),
        T = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        E = (0, a.Y)({ userId: t.id }),
        w = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        S = (0, l.e7)([s.default], () => s.default.locale),
        A = (0, p.Z)(t.id),
        C = (0, m.Z)(t.id);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: _.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== "" &&
                !w &&
                (0, r.jsx)(g.Z, {
                    userBio: I.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.guildId) != null &&
                (0, r.jsx)(y.Z, {
                    user: t,
                    currentUser: n,
                    guildId: I.guildId,
                    scrollIntoView: P === v.Tb.ROLES,
                }),
            t.isProvisional &&
                (0, r.jsx)(x.Z, {
                    heading: O.intl.string(O.t.Iyka0d),
                    headingIcon: (0, r.jsx)(i.Mgn, {
                        size: "xxs",
                        color: i.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, r.jsx)(c.n, { userId: t.id }),
                }),
            E.length > 0 &&
                (0, r.jsx)(x.Z, {
                    heading: O.intl.string(O.t["Uv/eT0"]),
                    children: (0, r.jsx)(j.Z, { applicationIds: E }),
                }),
            (0, r.jsx)(x.Z, {
                heading: O.intl.string(O.t.a6XYDw),
                children: (0, r.jsx)(h.Z, {
                    userId: t.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: v.vB,
                }),
            }),
            A.length > 0 &&
                (0, r.jsx)(x.Z, {
                    heading: O.intl.string(O.t["3fe7U1"]),
                    scrollIntoView: P === v.Tb.CONNECTIONS,
                    children: (0, r.jsx)(b.ZP, {
                        connectedAccounts: A,
                        className: _.connections,
                        userId: t.id,
                        locale: S,
                    }),
                }),
            C.length > 0 &&
                (0, r.jsx)(x.Z, {
                    heading: O.intl.string(O.t.PHjkRE),
                    children: C.map((e) =>
                        (0, r.jsx)(
                            b.tH,
                            {
                                className: _.appsConnections,
                                applicationRoleConnection: e,
                                locale: S,
                                onApplicationClicked: () => {
                                    N({ action: "PRESS_APP_CONNECTION" }), Z();
                                },
                                selectedGuildId: null != T ? T : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(x.Z, {
                heading: O.intl.string(O.t["mQKv+v"]),
                scrollIntoView: P === v.Tb.NOTE,
                children: (0, r.jsx)(o.Z, {
                    userId: t.id,
                    className: _.note,
                    autoFocus: P === v.Tb.NOTE,
                    onUpdate: () => N({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
