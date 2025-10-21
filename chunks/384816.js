t.d(n, { Z: () => Z });
var l = t(951288);
t(647438);
var i = t(442837),
    o = t(481060),
    r = t(666520),
    s = t(246016),
    a = t(189156),
    c = t(706454),
    d = t(914010),
    u = t(246946),
    m = t(785717),
    p = t(250822),
    f = t(771362),
    x = t(280885),
    h = t(819602),
    v = t(78806),
    j = t(900927),
    g = t(678738),
    b = t(179828),
    I = t(228168),
    y = t(388032),
    _ = t(54966);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, subsection: O, onClose: N } = e,
        { trackUserProfileAction: A } = (0, m.KZ)(),
        T = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        P = (0, s.Y)({ userId: n.id }),
        E = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        C = (0, i.e7)([c.default], () => c.default.locale),
        S = (0, f.Z)(n.id),
        w = (0, p.Z)(n.id);
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: _.scroller,
        children: [
            (null == Z ? void 0 : Z.bio) != null &&
                (null == Z ? void 0 : Z.bio) !== "" &&
                !E &&
                (0, l.jsx)(x.Z, {
                    userBio: Z.bio,
                    setLineClamp: !1,
                }),
            (null == Z ? void 0 : Z.guildId) != null &&
                (0, l.jsx)(b.Z, {
                    user: n,
                    currentUser: t,
                    guildId: Z.guildId,
                    scrollIntoView: O === I.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, l.jsx)(g.Z, {
                    heading: y.intl.string(y.t.Iyka0U),
                    headingIcon: (0, l.jsx)(o.Mgn, {
                        size: "xxs",
                        color: o.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, l.jsx)(a.n, { userId: n.id }),
                }),
            P.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: y.intl.string(y.t["Uv/eTx"]),
                    children: (0, l.jsx)(v.Z, { applicationIds: P }),
                }),
            (0, l.jsx)(g.Z, {
                heading: y.intl.string(y.t.a6XYD9),
                children: (0, l.jsx)(j.Z, {
                    userId: n.id,
                    guildId: null == Z ? void 0 : Z.guildId,
                    tooltipDelay: I.vB,
                }),
            }),
            S.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: y.intl.string(y.t["3fe7U5"]),
                    scrollIntoView: O === I.Tb.CONNECTIONS,
                    children: (0, l.jsx)(h.ZP, {
                        connectedAccounts: S,
                        className: _.connections,
                        userId: n.id,
                        locale: C,
                    }),
                }),
            w.length > 0 &&
                (0, l.jsx)(g.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, l.jsx)(
                            h.tH,
                            {
                                className: _.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    A({ action: "PRESS_APP_CONNECTION" }), N();
                                },
                                selectedGuildId: null != T ? T : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(g.Z, {
                heading: y.intl.string(y.t["mQKv+v"]),
                scrollIntoView: O === I.Tb.NOTE,
                children: (0, l.jsx)(r.Z, {
                    userId: n.id,
                    className: _.note,
                    autoFocus: O === I.Tb.NOTE,
                    onUpdate: () => A({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
