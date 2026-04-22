n.d(t, { AU: () => A, Ey: () => N, QF: () => S, do: () => g, eC: () => y });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(517738),
    u = n(827734),
    o = n(876230),
    c = n(61491),
    d = n(990078),
    m = n(113494),
    f = n(782134),
    h = n(417270),
    p = n(834730),
    E = n(939249),
    v = n(985018),
    x = n(834926);
let b = "-:--",
    g = 1500,
    y = {
        [o.Q6.PLAYING]: { icon: m.E, label: v.intl.string(v.t.ZcgDJX) },
        [o.Q6.PAUSED]: { icon: f.u, label: v.intl.string(v.t.RscU7I) },
        [o.Q6.ENDED]: { icon: h.m, label: v.intl.string(v.t.hsvh0i) },
    },
    A = { [o.oA.MD]: o.n4.MD, [o.oA.LG]: o.n4.LG },
    C = { [o.n4.MD]: "md", [o.n4.LG]: "lg" };
function S(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, c.rB)(t) : b,
        a = null != n ? (0, c.rB)(n) : b;
    return (0, r.jsxs)("div", {
        className: i()(x.d$, x.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(p.E, { variant: "text-xs/normal", className: x.Ue, children: l }),
            (0, r.jsx)(p.E, { variant: "text-xs/normal", className: x.zO, children: "/" }),
            (0, r.jsx)(p.E, { variant: "text-xs/normal", className: x.Ue, children: a }),
        ],
    });
}
let N = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: a,
            ariaLabel: c,
            active: m,
            disabled: f,
            tooltipLabel: h,
            tooltipDelayMs: p = g,
            shortcut: v,
            onClick: b,
            buttonSize: y = o.n4.MD,
            "data-testid": A,
        } = e,
        S = (e) =>
            (0, r.jsx)(E.D, {
                ...e,
                onClick: !0 === f ? void 0 : b,
                className: i()(x.K5, { [x.Iy]: f }),
                "aria-label": c,
                "aria-disabled": f,
                "data-testid": A,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: x.K5,
                    style: {
                        opacity: (0, s.to)(
                            [l.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${a ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [o.n4.LG]: "32px", [o.n4.MD]: "24px" }[y],
                    },
                    children: (0, r.jsx)(n, {
                        size: C[y],
                        color: !0 !== f ? u.A.colors.WHITE : u.A.colors.TEXT_MUTED,
                        className: i()(x.jk, { [x.x2]: m, [x.Wr]: !f }),
                    }),
                }),
            });
    return null != h && a
        ? (0, r.jsx)(d.m, { text: h, keyboardShortcut: "" !== (v ?? "").trim() ? v : void 0, delay: p, children: S() })
        : S();
});
