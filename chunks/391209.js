r.d(t, { A: () => x });
var a = r(627968),
    s = r(64700),
    n = r(503698),
    o = r.n(n),
    i = r(935462),
    l = r(534514),
    c = r(834730),
    d = r(821609),
    u = r(503852),
    _ = r(363487),
    p = r(998418),
    m = r(193157),
    f = r(439156),
    b = r(568065),
    I = r(985018),
    k = r(764872),
    v = r(107836);
function x(e) {
    let { guildId: t, powerup: r, onClose: n, ...x } = e,
        [T, A] = s.useState(void 0),
        E = (0, p.Ay)(t, r),
        N = E.type === b.b_.TIER_OVERRIDE_ACTIVATED,
        h = (0, _.A)(t),
        g = null == E.sourceEntitlement || !h;
    return (
        (0, u.Z)(t, r, u.q.DETAIL),
        (0, a.jsxs)(i.EO, {
            "data-migration-pending": !0,
            className: k.yl,
            size: i.rI.DYNAMIC,
            ...x,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, a.jsxs)(i.$m, {
                    "data-migration-pending": !0,
                    className: k._F,
                    scrollbarType: "none",
                    children: [
                        (0, a.jsx)("img", { alt: "", src: v, className: k.v5 }),
                        (0, a.jsxs)("div", {
                            className: k.hQ,
                            children: [
                                (0, a.jsx)(l.D, { variant: "heading-xl/extrabold", children: r.title }),
                                (0, a.jsx)(m.A, { powerup: r }),
                                null != T &&
                                    (0, a.jsx)(c.E, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: T,
                                    }),
                                (0, a.jsxs)("div", {
                                    className: o()(k.qr, { [k.r9]: g }),
                                    children: [
                                        !N &&
                                            h &&
                                            (0, a.jsx)(f.A, {
                                                guildId: t,
                                                powerup: r,
                                                onError: A,
                                                grow: !1,
                                                compact: !g,
                                            }),
                                        (0, a.jsx)(d.$, {
                                            variant: g ? "secondary" : "primary",
                                            onClick: n,
                                            text: I.intl.string(I.t.cpT0Cq),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(i.s_, { "data-migration-pending": !0, className: k.VN, onClick: n }),
            ],
        })
    );
}
