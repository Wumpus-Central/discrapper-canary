t.d(n, { Z: () => _ });
var r = t(951288);
t(647438);
var l = t(442837),
    o = t(481060),
    i = t(666520),
    c = t(246016),
    s = t(189156),
    a = t(706454),
    d = t(914010),
    u = t(246946),
    f = t(785717),
    m = t(250822),
    p = t(771362),
    h = t(280885),
    x = t(819602),
    b = t(78806),
    j = t(900927),
    g = t(678738),
    v = t(179828),
    y = t(228168),
    O = t(388032),
    I = t(54966);
function _(e) {
    let { user: n, currentUser: t, displayProfile: _, subsection: Z, onClose: P } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        N = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, c.Y)({ userId: n.id }),
        E = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        C = (0, l.e7)([a.default], () => a.default.locale),
        S = (0, p.Z)(n.id),
        w = (0, m.Z)(n.id);
    return (0, r.jsxs)(o.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == _ ? void 0 : _.bio) != null &&
                (null == _ ? void 0 : _.bio) !== "" &&
                !E &&
                (0, r.jsx)(h.Z, {
                    userBio: _.bio,
                    setLineClamp: !1,
                }),
            (null == _ ? void 0 : _.guildId) != null &&
                (0, r.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guildId: _.guildId,
                    scrollIntoView: Z === y.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, r.jsx)(g.Z, {
                    heading: O.intl.string(O.t.Iyka0d),
                    headingIcon: (0, r.jsx)(o.Mgn, {
                        size: "xxs",
                        color: o.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, r.jsx)(s.n, { userId: n.id }),
                }),
            A.length > 0 &&
                (0, r.jsx)(g.Z, {
                    heading: O.intl.string(O.t["Uv/eT0"]),
                    children: (0, r.jsx)(b.Z, { applicationIds: A }),
                }),
            (0, r.jsx)(g.Z, {
                heading: O.intl.string(O.t.a6XYDw),
                children: (0, r.jsx)(j.Z, {
                    userId: n.id,
                    guildId: null == _ ? void 0 : _.guildId,
                    tooltipDelay: y.vB,
                }),
            }),
            S.length > 0 &&
                (0, r.jsx)(g.Z, {
                    heading: O.intl.string(O.t["3fe7U1"]),
                    scrollIntoView: Z === y.Tb.CONNECTIONS,
                    children: (0, r.jsx)(x.ZP, {
                        connectedAccounts: S,
                        className: I.connections,
                        userId: n.id,
                        locale: C,
                    }),
                }),
            w.length > 0 &&
                (0, r.jsx)(g.Z, {
                    heading: O.intl.string(O.t.PHjkRE),
                    children: w.map((e) =>
                        (0, r.jsx)(
                            x.tH,
                            {
                                className: I.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), P();
                                },
                                selectedGuildId: null != N ? N : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(g.Z, {
                heading: O.intl.string(O.t["mQKv+v"]),
                scrollIntoView: Z === y.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: Z === y.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
