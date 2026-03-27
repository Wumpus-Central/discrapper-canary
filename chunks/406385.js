n.d(t, { AU: () => v, Ey: () => y, QF: () => b, do: () => x, eC: () => E });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(880013),
    o = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    p = n(985018),
    h = n(155350);
let f = "-:--",
    x = 1500,
    E = {
        [u.Q6.PLAYING]: { icon: m.E$n, label: p.intl.string(p.t.ZcgDJX) },
        [u.Q6.PAUSED]: { icon: m.udU, label: p.intl.string(p.t.RscU7I) },
        [u.Q6.ENDED]: { icon: m.mqY, label: p.intl.string(p.t.hsvh0i) },
    },
    v = { [u.oA.MD]: u.n4.MD, [u.oA.LG]: u.n4.LG },
    g = { [u.n4.MD]: "md", [u.n4.LG]: "lg" };
function b(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, c.rB)(t) : f,
        a = null != n ? (0, c.rB)(n) : f;
    return (0, r.jsxs)("div", {
        className: i()(h.d$, h.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: h.Ue, children: l }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: h.zO, children: "/" }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: h.Ue, children: a }),
        ],
    });
}
let y = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: a,
            ariaLabel: c,
            active: p,
            disabled: f,
            tooltipLabel: E,
            tooltipDelayMs: v = x,
            shortcut: b,
            onClick: y,
            buttonSize: S = u.n4.MD,
            "data-testid": C,
        } = e,
        A = (e) =>
            (0, r.jsx)(m.DUT, {
                ...e,
                onClick: !0 === f ? void 0 : y,
                className: i()(h.K5, { [h.Iy]: f }),
                "aria-label": c,
                "aria-disabled": f,
                "data-testid": C,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: h.K5,
                    style: {
                        opacity: (0, s.to)(
                            [l.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${a ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [u.n4.LG]: "32px", [u.n4.MD]: "24px" }[S],
                    },
                    children: (0, r.jsx)(n, {
                        size: g[S],
                        color: !0 !== f ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                        className: i()(h.jk, { [h.x2]: p, [h.Wr]: !f }),
                    }),
                }),
            });
    return null != E && a
        ? (0, r.jsx)(d.m_, { text: E, keyboardShortcut: "" !== (b ?? "").trim() ? b : void 0, delay: v, children: A() })
        : A();
});
