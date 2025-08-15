n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
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
    j = n(78806),
    y = n(900927),
    O = n(678738),
    x = n(179828),
    h = n(228168),
    v = n(388032),
    _ = n(54966);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, subsection: P, onClose: E } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        Z = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        N = (0, a.Y)({ userId: t.id }),
        S = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        w = (0, i.e7)([s.default], () => s.default.locale),
        A = (0, m.Z)(t.id),
        C = (0, p.Z)(t.id);
    return (0, r.jsxs)(l.zJl, {
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
                    scrollIntoView: P === h.Tb.ROLES,
                }),
            t.isProvisional &&
                (0, r.jsx)(O.Z, {
                    heading: v.intl.string(v.t.Iyka0d),
                    headingIcon: (0, r.jsx)(l.Mgn, {
                        size: "xxs",
                        color: l.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, r.jsx)(c.n, { userId: t.id }),
                }),
            N.length > 0 &&
                (0, r.jsx)(O.Z, {
                    heading: v.intl.string(v.t["Uv/eT0"]),
                    children: (0, r.jsx)(j.Z, { applicationIds: N }),
                }),
            (0, r.jsx)(O.Z, {
                heading: v.intl.string(v.t.a6XYDw),
                children: (0, r.jsx)(y.Z, {
                    userId: t.id,
                    guildId: null == I ? void 0 : I.guildId,
                    tooltipDelay: h.vB,
                }),
            }),
            A.length > 0 &&
                (0, r.jsx)(O.Z, {
                    heading: v.intl.string(v.t["3fe7U1"]),
                    scrollIntoView: P === h.Tb.CONNECTIONS,
                    children: (0, r.jsx)(b.ZP, {
                        connectedAccounts: A,
                        className: _.connections,
                        userId: t.id,
                        locale: w,
                    }),
                }),
            C.length > 0 &&
                (0, r.jsx)(O.Z, {
                    heading: v.intl.string(v.t.PHjkRE),
                    children: C.map((e) =>
                        (0, r.jsx)(
                            b.tH,
                            {
                                className: _.appsConnections,
                                applicationRoleConnection: e,
                                locale: w,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), E();
                                },
                                selectedGuildId: null != Z ? Z : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(O.Z, {
                heading: v.intl.string(v.t["mQKv+v"]),
                scrollIntoView: P === h.Tb.NOTE,
                children: (0, r.jsx)(o.Z, {
                    userId: t.id,
                    className: _.note,
                    autoFocus: P === h.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
