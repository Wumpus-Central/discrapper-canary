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
    p = n(250822),
    m = n(771362),
    g = n(280885),
    b = n(819602),
    h = n(78806),
    j = n(900927),
    y = n(678738),
    x = n(179828),
    O = n(228168),
    v = n(388032),
    _ = n(349966);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, subsection: P, onClose: E } = e,
        { trackUserProfileAction: Z } = (0, f.KZ)(),
        N = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        T = (0, a.Y)({ userId: t.id }),
        S = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        A = (0, l.e7)([s.default], () => s.default.locale),
        w = (0, m.Z)(t.id),
        C = (0, p.Z)(t.id);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: _.scroller,
        children: [
            (null == I ? void 0 : I.bio) != null &&
                (null == I ? void 0 : I.bio) !== "" &&
                !S &&
                (0, r.jsx)(g.Z, {
                    userBio: I.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.guildId) != null &&
                (0, r.jsx)(x.Z, {
                    user: t,
                    currentUser: n,
                    guildId: I.guildId,
                    scrollIntoView: P === O.Tb.ROLES,
                }),
            t.isProvisional &&
                (0, r.jsx)(y.Z, {
                    heading: v.intl.string(v.t.Iyka0d),
                    headingIcon: (0, r.jsx)(i.Mgn, {
                        size: "xxs",
                        color: i.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, r.jsx)(c.n, { userId: t.id }),
                }),
            T.length > 0 &&
                (0, r.jsx)(y.Z, {
                    heading: v.intl.string(v.t["Uv/eT0"]),
                    children: (0, r.jsx)(h.Z, { applicationIds: T }),
                }),
            (0, r.jsx)(y.Z, {
                heading: v.intl.string(v.t.a6XYDw),
                children: (0, r.jsx)(j.Z, {
                    userId: t.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: O.vB,
                }),
            }),
            w.length > 0 &&
                (0, r.jsx)(y.Z, {
                    heading: v.intl.string(v.t["3fe7U1"]),
                    scrollIntoView: P === O.Tb.CONNECTIONS,
                    children: (0, r.jsx)(b.ZP, {
                        connectedAccounts: w,
                        className: _.connections,
                        userId: t.id,
                        locale: A,
                    }),
                }),
            C.length > 0 &&
                (0, r.jsx)(y.Z, {
                    heading: v.intl.string(v.t.PHjkRE),
                    children: C.map((e) =>
                        (0, r.jsx)(
                            b.tH,
                            {
                                className: _.appsConnections,
                                applicationRoleConnection: e,
                                locale: A,
                                onApplicationClicked: () => {
                                    Z({ action: "PRESS_APP_CONNECTION" }), E();
                                },
                                selectedGuildId: null != N ? N : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(y.Z, {
                heading: v.intl.string(v.t["mQKv+v"]),
                scrollIntoView: P === O.Tb.NOTE,
                children: (0, r.jsx)(o.Z, {
                    userId: t.id,
                    className: _.note,
                    autoFocus: P === O.Tb.NOTE,
                    onUpdate: () => Z({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
