n.d(e, { A: () => x });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(935462),
    d = n(534514),
    c = n(834730),
    o = n(821609),
    m = n(235986),
    p = n(450565),
    g = n(878314),
    C = n(570465),
    _ = n(985018),
    L = n(439311);
function u(t) {
    let { guildTemplate: e, onClick: n, autoFocus: r } = t,
        s = a.useCallback(() => {
            n(e);
        }, [e, n]);
    return (0, i.jsx)(g.A, { icon: p.a[e.id], message: e.label, onClick: s, autoFocus: r });
}
function x(t) {
    let { className: e, isNewUser: n, onClose: a, onChooseTemplate: r, onJoin: p } = t,
        g = (0, C.p)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: L.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(d.D, {
                        className: L.DD,
                        variant: "heading-xl/semibold",
                        children: n ? _.intl.string(_.t["9U0b1k"]) : _.intl.string(_.t["5HZu07"]),
                    }),
                    (0, i.jsx)(c.E, {
                        className: L.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: _.intl.string(_.t["wti/H4"]),
                    }),
                    null != a && (0, i.jsx)(l.s_, { "data-migration-pending": !0, className: L.b, onClick: a }),
                ],
            }),
            (0, i.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: s()(L.KA, e),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(u, { guildTemplate: g[C.v.CREATE], onClick: r, autoFocus: !0 }),
                    (0, i.jsx)(c.E, {
                        className: L.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: _.intl.string(_.t.JGDkfg),
                    }),
                    (0, i.jsx)(u, { guildTemplate: g[C.v.GAMING], onClick: r }),
                    (0, i.jsx)(u, { guildTemplate: g[C.v.FRIENDS], onClick: r }),
                    (0, i.jsx)(u, { guildTemplate: g[C.v.STUDY], onClick: r }),
                    (0, i.jsx)(u, { guildTemplate: g[C.v.SCHOOL_CLUB], onClick: r }),
                    (0, i.jsx)(u, { guildTemplate: g[C.v.LOCAL_COMMUNITY], onClick: r }),
                    (0, i.jsx)(u, { guildTemplate: g[C.v.CREATORS], onClick: r }),
                ],
            }),
            null != p &&
                (0, i.jsxs)(l.jl, {
                    "data-migration-pending": !0,
                    className: L.qr,
                    children: [
                        (0, i.jsx)(d.D, {
                            variant: "heading-lg/semibold",
                            className: L.K8,
                            children: _.intl.string(_.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: L.wC,
                            children: (0, i.jsx)(o.$, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: _.intl.string(_.t.riOUtB),
                                onClick: p,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
