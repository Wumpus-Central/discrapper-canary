a.d(t, { default: () => k });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    o = a.n(n),
    c = a(397927),
    i = a(503852),
    l = a(363487),
    d = a(998418),
    u = a(193157),
    m = a(439156),
    _ = a(568065),
    b = a(985018),
    p = a(750845),
    I = a(107836);
function k(e) {
    let { guildId: t, powerup: a, onClose: n, ...k } = e,
        [f, T] = r.useState(void 0),
        N = (0, d.Ay)(t, a),
        E = N.type === _.b_.TIER_OVERRIDE_ACTIVATED,
        x = (0, l.A)(t),
        A = null == N.sourceEntitlement || !x;
    return (
        (0, i.Z)(t, a, i.q.DETAIL),
        (0, s.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            className: p.yl,
            size: c.rIJ.DYNAMIC,
            ...k,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, s.jsxs)(c.$mQ, {
                    "data-migration-pending": !0,
                    className: p._F,
                    scrollbarType: "none",
                    children: [
                        (0, s.jsx)("img", { alt: "", src: I, className: p.v5 }),
                        (0, s.jsxs)("div", {
                            className: p.hQ,
                            children: [
                                (0, s.jsx)(c.Heading, { variant: "heading-xl/extrabold", children: a.title }),
                                (0, s.jsx)(u.A, { powerup: a }),
                                null != f &&
                                    (0, s.jsx)(c.Text, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: f,
                                    }),
                                (0, s.jsxs)("div", {
                                    className: o()(p.qr, { [p.r9]: A }),
                                    children: [
                                        !E &&
                                            x &&
                                            (0, s.jsx)(m.A, {
                                                guildId: t,
                                                powerup: a,
                                                onError: T,
                                                grow: !1,
                                                compact: !A,
                                            }),
                                        (0, s.jsx)(c.Button, {
                                            variant: A ? "secondary" : "primary",
                                            onClick: n,
                                            text: b.intl.string(b.t.cpT0Cq),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)(c.s_y, { "data-migration-pending": !0, className: p.VN, onClick: n }),
            ],
        })
    );
}
