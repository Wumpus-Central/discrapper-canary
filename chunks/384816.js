n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var o = n(442837),
    i = n(481060),
    l = n(666520),
    a = n(246016),
    c = n(189156),
    s = n(706454),
    d = n(914010),
    u = n(246946),
    f = n(785717),
    p = n(250822),
    m = n(771362),
    b = n(280885),
    g = n(819602),
    h = n(78806),
    x = n(900927),
    _ = n(678738),
    j = n(179828),
    v = n(228168),
    y = n(388032),
    I = n(54966);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, subsection: Z, onClose: P } = e,
        { trackUserProfileAction: T } = (0, f.KZ)(),
        C = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, a.Y)({ userId: t.id }),
        N = (0, o.e7)([u.Z], () => u.Z.hidePersonalInformation),
        E = (0, o.e7)([s.default], () => s.default.locale),
        S = (0, m.Z)(t.id),
        w = (0, p.Z)(t.id);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                !N &&
                (0, r.jsx)(b.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, r.jsx)(j.Z, {
                    user: t,
                    currentUser: n,
                    guildId: O.guildId,
                    scrollIntoView: Z === v.Tb.ROLES,
                }),
            t.isProvisional &&
                (0, r.jsx)(_.Z, {
                    heading: y.intl.string(y.t.Iyka0d),
                    headingIcon: (0, r.jsx)(i.Mgn, {
                        size: "xxs",
                        color: i.TVs.colors.HEADER_PRIMARY,
                    }),
                    headingColor: "header-secondary",
                    children: (0, r.jsx)(c.n, { userId: t.id }),
                }),
            A.length > 0 &&
                (0, r.jsx)(_.Z, {
                    heading: y.intl.string(y.t["Uv/eT0"]),
                    children: (0, r.jsx)(h.Z, { applicationIds: A }),
                }),
            (0, r.jsx)(_.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, r.jsx)(x.Z, {
                    userId: t.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: v.vB,
                }),
            }),
            S.length > 0 &&
                (0, r.jsx)(_.Z, {
                    heading: y.intl.string(y.t["3fe7U1"]),
                    scrollIntoView: Z === v.Tb.CONNECTIONS,
                    children: (0, r.jsx)(g.ZP, {
                        connectedAccounts: S,
                        className: I.connections,
                        userId: t.id,
                        locale: E,
                    }),
                }),
            w.length > 0 &&
                (0, r.jsx)(_.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, r.jsx)(
                            g.tH,
                            {
                                className: I.appsConnections,
                                applicationRoleConnection: e,
                                locale: E,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), P();
                                },
                                selectedGuildId: null != C ? C : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, r.jsx)(_.Z, {
                heading: y.intl.string(y.t["mQKv+v"]),
                scrollIntoView: Z === v.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: t.id,
                    className: I.note,
                    autoFocus: Z === v.Tb.NOTE,
                    onUpdate: () => T({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
