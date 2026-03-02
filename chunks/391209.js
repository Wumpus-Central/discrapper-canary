r.d(t, { A: () => f });
var a = r(627968),
    s = r(64700),
    n = r(503698),
    o = r.n(n),
    i = r(397927),
    c = r(503852),
    l = r(363487),
    d = r(998418),
    u = r(193157),
    p = r(439156),
    _ = r(568065),
    m = r(985018),
    I = r(750845),
    b = r(107836);
function f(e) {
    let { guildId: t, powerup: r, onClose: n, ...f } = e,
        [k, x] = s.useState(void 0),
        T = (0, d.Ay)(t, r),
        v = T.type === _.b_.TIER_OVERRIDE_ACTIVATED,
        A = (0, l.A)(t),
        E = null == T.sourceEntitlement || !A;
    return (
        (0, c.Z)(t, r, c.q.DETAIL),
        (0, a.jsxs)(i.EOs, {
            "data-migration-pending": !0,
            className: I.yl,
            size: i.rIJ.DYNAMIC,
            ...f,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, a.jsxs)(i.$mQ, {
                    "data-migration-pending": !0,
                    className: I._F,
                    scrollbarType: "none",
                    children: [
                        (0, a.jsx)("img", { alt: "", src: b, className: I.v5 }),
                        (0, a.jsxs)("div", {
                            className: I.hQ,
                            children: [
                                (0, a.jsx)(i.Heading, { variant: "heading-xl/extrabold", children: r.title }),
                                (0, a.jsx)(u.A, { powerup: r }),
                                null != k &&
                                    (0, a.jsx)(i.Text, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: k,
                                    }),
                                (0, a.jsxs)("div", {
                                    className: o()(I.qr, { [I.r9]: E }),
                                    children: [
                                        !v &&
                                            A &&
                                            (0, a.jsx)(p.A, {
                                                guildId: t,
                                                powerup: r,
                                                onError: x,
                                                grow: !1,
                                                compact: !E,
                                            }),
                                        (0, a.jsx)(i.Button, {
                                            variant: E ? "secondary" : "primary",
                                            onClick: n,
                                            text: m.intl.string(m.t.cpT0Cq),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(i.s_y, { "data-migration-pending": !0, className: I.VN, onClick: n }),
            ],
        })
    );
}
