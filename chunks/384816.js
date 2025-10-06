t.d(n, { Z: () => O });
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
    p = t(250822),
    f = t(771362),
    h = t(280885),
    x = t(819602),
    j = t(78806),
    v = t(900927),
    g = t(678738),
    b = t(179828),
    y = t(228168),
    I = t(388032),
    Z = t(438160);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, subsection: N, onClose: T } = e,
        { trackUserProfileAction: P } = (0, m.KZ)(),
        A = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        E = (0, s.Y)({ userId: n.id }),
        S = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        C = (0, i.e7)([c.default], () => c.default.locale),
        _ = (0, f.Z)(n.id),
        w = (0, p.Z)(n.id);
    return (0, l.jsxs)(r.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                !S &&
                (0, l.jsx)(h.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, l.jsx)(b.Z, {
                    user: n,
                    currentUser: t,
                    guildId: O.guildId,
                    scrollIntoView: N === y.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, l.jsx)(g.Z, {
                    heading: I.intl.string(I.t.Iyka0d),
                    headingIcon: (0, l.jsx)(r.Mgn, {
                        size: "xxs",
                        color: r.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, l.jsx)(a.n, { userId: n.id }),
                }),
            E.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: I.intl.string(I.t["Uv/eT0"]),
                    children: (0, l.jsx)(j.Z, { applicationIds: E }),
                }),
            (0, l.jsx)(g.Z, {
                heading: I.intl.string(I.t.a6XYDw),
                children: (0, l.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: y.vB,
                }),
            }),
            _.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: I.intl.string(I.t["3fe7U1"]),
                    scrollIntoView: N === y.Tb.CONNECTIONS,
                    children: (0, l.jsx)(x.ZP, {
                        connectedAccounts: _,
                        className: Z.connections,
                        userId: n.id,
                        locale: C,
                    }),
                }),
            w.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: I.intl.string(I.t.PHjkRE),
                    children: w.map((e) =>
                        (0, l.jsx)(
                            x.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    P({ action: "PRESS_APP_CONNECTION" }), T();
                                },
                                selectedGuildId: null != A ? A : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(g.Z, {
                heading: I.intl.string(I.t["mQKv+v"]),
                scrollIntoView: N === y.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: N === y.Tb.NOTE,
                    onUpdate: () => P({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
