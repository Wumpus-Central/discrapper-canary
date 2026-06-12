e.d(n, { A: () => b });
var i = e(627968),
    a = e(64700),
    r = e(503698),
    l = e.n(r),
    s = e(935462),
    d = e(534514),
    p = e(834730),
    c = e(821609),
    m = e(235986),
    _ = e(383669);
e(746672);
var g = e(632707);
e(917364), e(925487), e(415915), e(85255), e(137507);
let o = {
    CREATE: "/assets/b30f13ee315c2568.svg",
    GAMING: _,
    FRIENDS: "/assets/d804200b134c9327.svg",
    CLUBS: g,
    SCHOOL_CLUB: "/assets/2f1587b0c86b42e2.svg",
    STUDY: "/assets/4900b53e7b34c3a5.svg",
    LOCAL_COMMUNITY: "/assets/31f3db39524533b6.svg",
    CREATORS: "/assets/d8fed3f03866afe2.svg",
};
var E = e(878314),
    C = e(570465),
    T = e(375708),
    I = e(439311);
function G(t) {
    let { guildTemplate: n, onClick: e, autoFocus: r } = t,
        l = a.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(E.A, { icon: o[n.id], message: n.label, onClick: l, autoFocus: r });
}
function b(t) {
    let { className: n, isNewUser: e, onClose: a, onChooseTemplate: r, onJoin: _ } = t,
        g = (0, C.p)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: I.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(d.D, {
                        className: I.DD,
                        variant: "heading-xl/semibold",
                        children: e ? T.intl.string(T.t["9U0b1k"]) : T.intl.string(T.t["5HZu07"]),
                    }),
                    (0, i.jsx)(p.E, {
                        className: I.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: T.intl.string(T.t["wti/H4"]),
                    }),
                    null != a && (0, i.jsx)(s.s_, { "data-migration-pending": !0, className: I.b, onClick: a }),
                ],
            }),
            (0, i.jsxs)(s.$m, {
                "data-migration-pending": !0,
                className: l()(I.KA, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(G, { guildTemplate: g[C.v.CREATE], onClick: r, autoFocus: !0 }),
                    (0, i.jsx)(p.E, {
                        className: I.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: T.intl.string(T.t.JGDkfg),
                    }),
                    (0, i.jsx)(G, { guildTemplate: g[C.v.GAMING], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: g[C.v.FRIENDS], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: g[C.v.STUDY], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: g[C.v.SCHOOL_CLUB], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: g[C.v.LOCAL_COMMUNITY], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: g[C.v.CREATORS], onClick: r }),
                ],
            }),
            null != _ &&
                (0, i.jsxs)(s.jl, {
                    "data-migration-pending": !0,
                    className: I.qr,
                    children: [
                        (0, i.jsx)(d.D, {
                            variant: "heading-lg/semibold",
                            className: I.K8,
                            children: T.intl.string(T.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: I.wC,
                            children: (0, i.jsx)(c.$, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: T.intl.string(T.t.riOUtB),
                                onClick: _,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
