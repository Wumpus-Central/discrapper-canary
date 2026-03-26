n.d(t, { AU: () => x, Ey: () => A, QF: () => S, do: () => h, eC: () => v });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(4208),
    o = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    p = n(985018),
    E = n(655833);
let f = "-:--",
    h = 1500,
    v = {
        [u.Q6.PLAYING]: { icon: m.E$n, label: p.intl.string(p.t.ZcgDJX) },
        [u.Q6.PAUSED]: { icon: m.udU, label: p.intl.string(p.t.RscU7I) },
        [u.Q6.ENDED]: { icon: m.mqY, label: p.intl.string(p.t.hsvh0i) },
    },
    x = { [u.oA.MD]: u.n4.MD, [u.oA.LG]: u.n4.LG },
    g = { [u.n4.MD]: "md", [u.n4.LG]: "lg" };
function S(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, c.rB)(t) : f,
        a = null != n ? (0, c.rB)(n) : f;
    return (0, r.jsxs)("div", {
        className: i()(E.d$, E.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: E.Ue, children: l }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: E.zO, children: "/" }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: E.Ue, children: a }),
        ],
    });
}
let A = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: a,
            ariaLabel: c,
            active: p,
            disabled: f,
            tooltipLabel: v,
            tooltipDelayMs: x = h,
            shortcut: S,
            onClick: A,
            buttonSize: b = u.n4.MD,
            "data-testid": _,
        } = e,
        C = (e) =>
            (0, r.jsx)(m.DUT, {
                ...e,
                onClick: !0 === f ? void 0 : A,
                className: i()(E.K5, { [E.Iy]: f }),
                "aria-label": c,
                "aria-disabled": f,
                "data-testid": _,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: E.K5,
                    style: {
                        opacity: (0, s.to)(
                            [l.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${a ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [u.n4.LG]: "32px", [u.n4.MD]: "24px" }[b],
                    },
                    children: (0, r.jsx)(n, {
                        size: g[b],
                        color: !0 !== f ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                        className: i()(E.jk, { [E.x2]: p, [E.Wr]: !f }),
                    }),
                }),
            });
    return null != v && a
        ? (0, r.jsx)(d.m_, { text: v, keyboardShortcut: "" !== (S ?? "").trim() ? S : void 0, delay: x, children: C() })
        : C();
});
