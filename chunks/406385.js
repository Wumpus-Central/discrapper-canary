n.d(t, { AU: () => g, Ey: () => A, QF: () => C, do: () => v, eC: () => h });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(522160),
    o = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    p = n(985018),
    E = n(681636);
let f = "-:--",
    v = 1500,
    h = {
        [u.Q6.PLAYING]: { icon: m.E$n, label: p.intl.string(p.t.ZcgDJX) },
        [u.Q6.PAUSED]: { icon: m.udU, label: p.intl.string(p.t.RscU7I) },
        [u.Q6.ENDED]: { icon: m.mqY, label: p.intl.string(p.t.hsvh0i) },
    },
    g = { [u.oA.MD]: u.n4.MD, [u.oA.LG]: u.n4.LG },
    S = { [u.n4.MD]: "md", [u.n4.LG]: "lg" };
function C(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, c.rB)(t) : f,
        i = null != n ? (0, c.rB)(n) : f;
    return (0, r.jsxs)("div", {
        className: s()(E.d$, E.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: E.Ue, children: l }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: E.zO, children: "/" }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: E.Ue, children: i }),
        ],
    });
}
let A = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: i,
            ariaLabel: c,
            active: p,
            disabled: f,
            tooltipLabel: h,
            tooltipDelayMs: g = v,
            shortcut: C,
            onClick: A,
            buttonSize: x = u.n4.MD,
            "data-testid": _,
        } = e,
        b = (e) =>
            (0, r.jsx)(m.DUT, {
                ...e,
                onClick: !0 === f ? void 0 : A,
                className: s()(E.K5, { [E.Iy]: f }),
                "aria-label": c,
                "aria-disabled": f,
                "data-testid": _,
                innerRef: t,
                children: (0, r.jsx)(a.animated.div, {
                    className: E.K5,
                    style: {
                        opacity: (0, a.to)(
                            [l.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${i ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [u.n4.LG]: "32px", [u.n4.MD]: "24px" }[x],
                    },
                    children: (0, r.jsx)(n, {
                        size: S[x],
                        color: !0 !== f ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                        className: s()(E.jk, { [E.x2]: p, [E.Wr]: !f }),
                    }),
                }),
            });
    return null != h && i
        ? (0, r.jsx)(d.m_, { text: h, keyboardShortcut: "" !== (C ?? "").trim() ? C : void 0, delay: g, children: b() })
        : b();
});
