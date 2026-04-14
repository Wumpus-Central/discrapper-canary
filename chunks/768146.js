n.d(t, { AU: () => b, Ey: () => y, QF: () => g, do: () => x, eC: () => E });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(445887),
    u = n(827734),
    o = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    f = n(985018),
    h = n(246878);
let p = "-:--",
    x = 1500,
    E = {
        [o.Q6.PLAYING]: { icon: m.E$n, label: f.intl.string(f.t.ZcgDJX) },
        [o.Q6.PAUSED]: { icon: m.udU, label: f.intl.string(f.t.RscU7I) },
        [o.Q6.ENDED]: { icon: m.mqY, label: f.intl.string(f.t.hsvh0i) },
    },
    b = { [o.oA.MD]: o.n4.MD, [o.oA.LG]: o.n4.LG },
    v = { [o.n4.MD]: "md", [o.n4.LG]: "lg" };
function g(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, c.rB)(t) : p,
        a = null != n ? (0, c.rB)(n) : p;
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
            active: f,
            disabled: p,
            tooltipLabel: E,
            tooltipDelayMs: b = x,
            shortcut: g,
            onClick: y,
            buttonSize: S = o.n4.MD,
            "data-testid": C,
        } = e,
        A = (e) =>
            (0, r.jsx)(m.DUT, {
                ...e,
                onClick: !0 === p ? void 0 : y,
                className: i()(h.K5, { [h.Iy]: p }),
                "aria-label": c,
                "aria-disabled": p,
                "data-testid": C,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: h.K5,
                    style: {
                        opacity: (0, s.to)(
                            [l.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${a ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [o.n4.LG]: "32px", [o.n4.MD]: "24px" }[S],
                    },
                    children: (0, r.jsx)(n, {
                        size: v[S],
                        color: !0 !== p ? u.A.colors.WHITE : u.A.colors.TEXT_MUTED,
                        className: i()(h.jk, { [h.x2]: f, [h.Wr]: !p }),
                    }),
                }),
            });
    return null != E && a
        ? (0, r.jsx)(d.m_, { text: E, keyboardShortcut: "" !== (g ?? "").trim() ? g : void 0, delay: b, children: A() })
        : A();
});
