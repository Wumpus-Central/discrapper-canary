e.d(n, { A: () => I });
var i = e(477900),
    a = e(582128),
    r = e(503698),
    l = e.n(r),
    s = e(935462),
    d = e(534514),
    c = e(834730),
    p = e(821609),
    m = e(235986),
    _ = e(383669);
e(746672);
var g = e(632707);
(e(917364), e(925487), e(415915), e(85255), e(137507));
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
    b = e(570465),
    C = e(792996),
    T = e(497292);
function G(t) {
    let { guildTemplate: n, onClick: e, autoFocus: r, isSlideReady: l } = t,
        s = a.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(E.A, { icon: o[n.id], message: n.label, onClick: s, autoFocus: r, isSlideReady: l });
}
function I(t) {
    let { className: n, isNewUser: e, onClose: a, onChooseTemplate: r, onJoin: _, isSlideReady: g } = t,
        o = (0, b.p)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: T.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(d.D, {
                        className: T.DD,
                        variant: "heading-xl/semibold",
                        children: e ? C.intl.string(C.t["9U0b1k"]) : C.intl.string(C.t["5HZu07"]),
                    }),
                    (0, i.jsx)(c.E, {
                        className: T.VA,
                        color: "text-default",
                        variant: "body-md/normal",
                        children: C.intl.string(C.t["wti/H4"]),
                    }),
                    null != a && (0, i.jsx)(s.s_, { "data-migration-pending": !0, className: T.b, onClick: a }),
                ],
            }),
            (0, i.jsxs)(s.$m, {
                "data-migration-pending": !0,
                className: l()(T.KA, n),
                scrollbarGutter: !1,
                children: [
                    (0, i.jsx)(G, { guildTemplate: o[b.v.CREATE], onClick: r, autoFocus: !0, isSlideReady: g }),
                    (0, i.jsx)(c.E, {
                        className: T.l8,
                        color: "text-default",
                        variant: "body-xs/semibold",
                        children: C.intl.string(C.t.JGDkfg),
                    }),
                    (0, i.jsx)(G, { guildTemplate: o[b.v.GAMING], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: o[b.v.FRIENDS], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: o[b.v.STUDY], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: o[b.v.SCHOOL_CLUB], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: o[b.v.LOCAL_COMMUNITY], onClick: r }),
                    (0, i.jsx)(G, { guildTemplate: o[b.v.CREATORS], onClick: r }),
                ],
            }),
            null != _ &&
                (0, i.jsxs)(s.jl, {
                    "data-migration-pending": !0,
                    className: T.qr,
                    children: [
                        (0, i.jsx)(d.D, {
                            variant: "heading-lg/semibold",
                            className: T.K8,
                            children: C.intl.string(C.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: T.wC,
                            children: (0, i.jsx)(p.$, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: C.intl.string(C.t.riOUtB),
                                onClick: _,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
