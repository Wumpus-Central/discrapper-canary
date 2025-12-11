t.d(n, { Z: () => O });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(666520),
    a = t(246016),
    c = t(189156),
    s = t(706454),
    d = t(914010),
    u = t(246946),
    f = t(785717),
    m = t(250822),
    p = t(771362),
    x = t(280885),
    h = t(819602),
    b = t(78806),
    v = t(900927),
    j = t(678738),
    g = t(179828),
    I = t(228168),
    y = t(388032),
    Z = t(199912);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, subsection: N, onClose: T } = e,
        { trackUserProfileAction: A } = (0, f.KZ)(),
        P = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        E = (0, a.Y)({ userId: n.id }),
        _ = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        C = (0, i.e7)([s.default], () => s.default.locale),
        S = (0, p.Z)(n.id),
        w = (0, m.Z)(n.id);
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                !_ &&
                (0, l.jsx)(x.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, l.jsx)(g.Z, {
                    user: n,
                    currentUser: t,
                    guildId: O.guildId,
                    scrollIntoView: N === I.Tb.ROLES,
                }),
            n.isProvisional &&
                (0, l.jsx)(j.Z, {
                    heading: y.intl.string(y.t.Iyka0U),
                    headingIcon: (0, l.jsx)(o.Mgn, {
                        size: "xxs",
                        color: o.TVs.colors.TEXT_STRONG,
                    }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(c.n, { userId: n.id }),
                }),
            E.length > 0 &&
                (0, l.jsx)(j.Z, {
                    heading: y.intl.string(y.t["Uv/eTx"]),
                    children: (0, l.jsx)(b.Z, { applicationIds: E }),
                }),
            (0, l.jsx)(j.Z, {
                heading: y.intl.string(y.t.a6XYD9),
                children: (0, l.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: I.vB,
                }),
            }),
            S.length > 0 &&
                (0, l.jsx)(j.Z, {
                    heading: y.intl.string(y.t["3fe7U5"]),
                    scrollIntoView: N === I.Tb.CONNECTIONS,
                    children: (0, l.jsx)(h.ZP, {
                        connectedAccounts: S,
                        className: Z.connections,
                        userId: n.id,
                        locale: C,
                    }),
                }),
            w.length > 0 &&
                (0, l.jsx)(j.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, l.jsx)(
                            h.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    A({ action: "PRESS_APP_CONNECTION" }), T();
                                },
                                selectedGuildId: null != P ? P : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(j.Z, {
                heading: y.intl.string(y.t["mQKv+v"]),
                scrollIntoView: N === I.Tb.NOTE,
                children: (0, l.jsx)(r.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: N === I.Tb.NOTE,
                    onUpdate: () => A({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
