"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(3026),
    o = n(397927),
    l = n(140547),
    u = n(886019),
    c = n(559405),
    d = n(890330),
    _ = n(51183);
n(851883);
var f = n(123511);
let p = 14;
function h(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: h,
            voiceChannel: m,
            hangStatus: g,
            userId: E,
            textSize: A = "xs",
            animateEmoji: I = !0,
            hideEmoji: T = !1,
            hideTooltip: y = !1,
        } = e,
        S = (0, d.v)("ActivityStatus", m),
        { defaultStatusVariant: v } = (0, l.$j)({ guildId: m?.guild_id, location: "CustomStatusActivityStatus" });
    if (null == t && null == g) return null;
    let C = null != g && S,
        b = C && null != E ? (0, u.Au)(E, g, v) : null,
        N = t?.emoji,
        R = b ?? t?.state,
        O = null != R && "" !== R,
        D = null;
    C && null != E
        ? (D = (0, r.jsx)(c.A, { userId: E, size: p, className: a()(i, f.W9), hangStatusActivity: g }))
        : null == N || T || (D = (0, r.jsx)(_.A, { emoji: N, animate: I, className: i, hideTooltip: y || O }));
    let L = O && (null != D ? ` ${R}` : R),
        w = () => {
            let e = null != N && !T && !O;
            return y || e
                ? (0, r.jsxs)(r.Fragment, { children: [D, L] })
                : (0, r.jsxs)(s.A, { delay: 150, className: h, children: [D, L] });
        };
    return (0, r.jsx)(o.Text, { variant: `text-${A}/medium`, color: "none", className: a()(f.ps, n), children: w() });
}
