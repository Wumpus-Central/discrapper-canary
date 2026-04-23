n.d(e, { A: () => b });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(935462),
    d = n(534514),
    c = n(834730),
    o = n(821609),
    m = n(235986),
    g = n(383669);
n(746672);
var p = n(632707);
n(917364), n(925487), n(415915), n(85255), n(137507);
let C = {
    CREATE: "/assets/b30f13ee315c2568.svg",
    GAMING: g,
    FRIENDS: "/assets/d804200b134c9327.svg",
    CLUBS: p,
    SCHOOL_CLUB: "/assets/2f1587b0c86b42e2.svg",
    STUDY: "/assets/4900b53e7b34c3a5.svg",
    LOCAL_COMMUNITY: "/assets/31f3db39524533b6.svg",
    CREATORS: "/assets/d8fed3f03866afe2.svg",
};
var _ = n(878314),
    L = n(570465),
    u = n(985018),
    x = n(439311);
function E(t) {
    let { guildTemplate: e, onClick: n, autoFocus: r } = t,
        s = a.useCallback(() => {
            n(e);
        }, [e, n]);
    return (0, i.jsx)(_.A, { icon: C[e.id], message: e.label, onClick: s, autoFocus: r });
}
function b(t) {
    let { className: e, isNewUser: n, onClose: a, onChooseTemplate: r, onJoin: g } = t,
        p = (0, L.p)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: x.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(d.D, {
                        className: x.DD,
                        variant: "heading-xl/semibold",
                        children: n ? u.intl.string(u.t["9U0b1k"]) : u.intl.string(u.t["5HZu07"]),
                    }),
                    (0, i.jsx)(c.E, {
                        className: x.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t["wti/H4"]),
                    }),
                    null != a && (0, i.jsx)(l.s_, { "data-migration-pending": !0, className: x.b, onClick: a }),
                ],
            }),
            (0, i.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: s()(x.KA, e),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(E, { guildTemplate: p[L.v.CREATE], onClick: r, autoFocus: !0 }),
                    (0, i.jsx)(c.E, {
                        className: x.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: u.intl.string(u.t.JGDkfg),
                    }),
                    (0, i.jsx)(E, { guildTemplate: p[L.v.GAMING], onClick: r }),
                    (0, i.jsx)(E, { guildTemplate: p[L.v.FRIENDS], onClick: r }),
                    (0, i.jsx)(E, { guildTemplate: p[L.v.STUDY], onClick: r }),
                    (0, i.jsx)(E, { guildTemplate: p[L.v.SCHOOL_CLUB], onClick: r }),
                    (0, i.jsx)(E, { guildTemplate: p[L.v.LOCAL_COMMUNITY], onClick: r }),
                    (0, i.jsx)(E, { guildTemplate: p[L.v.CREATORS], onClick: r }),
                ],
            }),
            null != g &&
                (0, i.jsxs)(l.jl, {
                    "data-migration-pending": !0,
                    className: x.qr,
                    children: [
                        (0, i.jsx)(d.D, {
                            variant: "heading-lg/semibold",
                            className: x.K8,
                            children: u.intl.string(u.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: x.wC,
                            children: (0, i.jsx)(o.$, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: u.intl.string(u.t.riOUtB),
                                onClick: g,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
