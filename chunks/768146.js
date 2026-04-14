"use strict";
n.d(t, { AU: () => g, Ey: () => T, QF: () => I, do: () => m, eC: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(445887),
    l = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    _ = n(397927),
    f = n(985018),
    h = n(246878);
let p = "-:--",
    m = 1500,
    E = {
        [u.Q6.PLAYING]: { icon: _.E$n, label: f.intl.string(f.t.ZcgDJX) },
        [u.Q6.PAUSED]: { icon: _.udU, label: f.intl.string(f.t.RscU7I) },
        [u.Q6.ENDED]: { icon: _.mqY, label: f.intl.string(f.t.hsvh0i) },
    },
    g = { [u.oA.MD]: u.n4.MD, [u.oA.LG]: u.n4.LG },
    A = { [u.n4.MD]: "md", [u.n4.LG]: "lg" };
function I(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, c.rB)(t) : p,
        s = null != n ? (0, c.rB)(n) : p;
    return (0, r.jsxs)("div", {
        className: a()(h.d$, h.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(_.Text, { variant: "text-xs/normal", className: h.Ue, children: i }),
            (0, r.jsx)(_.Text, { variant: "text-xs/normal", className: h.zO, children: "/" }),
            (0, r.jsx)(_.Text, { variant: "text-xs/normal", className: h.Ue, children: s }),
        ],
    });
}
let T = i.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: i,
            visible: s,
            ariaLabel: c,
            active: f,
            disabled: p,
            tooltipLabel: E,
            tooltipDelayMs: g = m,
            shortcut: I,
            onClick: T,
            buttonSize: S = u.n4.MD,
            "data-testid": y,
        } = e,
        v = (e) =>
            (0, r.jsx)(_.DUT, {
                ...e,
                onClick: !0 === p ? void 0 : T,
                className: a()(h.K5, { [h.Iy]: p }),
                "aria-label": c,
                "aria-disabled": p,
                "data-testid": y,
                innerRef: t,
                children: (0, r.jsx)(o.animated.div, {
                    className: h.K5,
                    style: {
                        opacity: (0, o.to)(
                            [i.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${s ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [u.n4.LG]: "32px", [u.n4.MD]: "24px" }[S],
                    },
                    children: (0, r.jsx)(n, {
                        size: A[S],
                        color: !0 !== p ? l.A.colors.WHITE : l.A.colors.TEXT_MUTED,
                        className: a()(h.jk, { [h.x2]: f, [h.Wr]: !p }),
                    }),
                }),
            });
    return null != E && s
        ? (0, r.jsx)(d.m_, { text: E, keyboardShortcut: "" !== (I ?? "").trim() ? I : void 0, delay: g, children: v() })
        : v();
});
