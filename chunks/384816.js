t.d(n, { Z: () => O });
var o = t(951288);
t(647438);
var r = t(442837),
    l = t(481060),
    i = t(666520),
    c = t(246016),
    a = t(189156),
    s = t(706454),
    d = t(914010),
    u = t(246946),
    f = t(785717),
    p = t(250822),
    m = t(771362),
    x = t(280885),
    b = t(819602),
    h = t(78806),
    g = t(900927),
    j = t(678738),
    v = t(179828),
    y = t(228168),
    _ = t(388032),
    I = t(54966);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, subsection: Z, onClose: P } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        N = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, c.Y)({ userId: n.id }),
        C = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        E = (0, r.e7)([s.default], () => s.default.locale),
        S = (0, m.Z)(n.id),
        w = (0, p.Z)(n.id);
    return (0, o.jsxs)(l.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                !C &&
                (0, o.jsx)(x.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, o.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guildId: O.guildId,
                    scrollIntoView: Z === y.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, o.jsx)(j.Z, {
                    heading: _.intl.string(_.t.Iyka0d),
                    headingIcon: (0, o.jsx)(l.Mgn, {
                        size: "xxs",
                        color: l.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, o.jsx)(a.n, { userId: n.id }),
                }),
            A.length > 0 &&
                (0, o.jsx)(j.Z, {
                    heading: _.intl.string(_.t["Uv/eT0"]),
                    children: (0, o.jsx)(h.Z, { applicationIds: A }),
                }),
            (0, o.jsx)(j.Z, {
                heading: _.intl.string(_.t.a6XYDw),
                children: (0, o.jsx)(g.Z, {
                    userId: n.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: y.vB,
                }),
            }),
            S.length > 0 &&
                (0, o.jsx)(j.Z, {
                    heading: _.intl.string(_.t["3fe7U1"]),
                    scrollIntoView: Z === y.Tb.CONNECTIONS,
                    children: (0, o.jsx)(b.ZP, {
                        connectedAccounts: S,
                        className: I.connections,
                        userId: n.id,
                        locale: E,
                    }),
                }),
            w.length > 0 &&
                (0, o.jsx)(j.Z, {
                    heading: _.intl.string(_.t.PHjkRE),
                    children: w.map((e) =>
                        (0, o.jsx)(
                            b.tH,
                            {
                                className: I.appsConnections,
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
            (0, o.jsx)(j.Z, {
                heading: _.intl.string(_.t["mQKv+v"]),
                scrollIntoView: Z === y.Tb.NOTE,
                children: (0, o.jsx)(i.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: Z === y.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
