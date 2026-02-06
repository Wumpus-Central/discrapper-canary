"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(51183),
    u = n(140547),
    c = n(886019),
    d = n(559405),
    _ = n(890330),
    f = n(613125);
n(851883);
var p = n(123511);
let h = 14;
function m(e) {
    let {
            customStatusActivity: t,
            iconClassName: n,
            textClassName: i,
            voiceChannel: m,
            hangStatus: g,
            userId: E,
            textSize: A = "xs",
            animateEmoji: I = !0,
            hideEmoji: T = !1,
            hideTooltip: S = !1,
        } = e,
        y = (0, _.v)("ActivityStatus", m),
        { defaultStatusVariant: v } = (0, u.$j)({ guildId: m?.guild_id, location: "CustomStatusVoiceDare" }),
        C = null != g && y,
        N = C && null != E ? (0, c.Au)(E, g, v) : null,
        b = t?.emoji,
        R = (0, f.Z)({ customStatusActivity: t, statusOwnerId: E, location: "CustomStatusVoiceDare" }),
        O = N ?? R.statusTextOverride ?? t?.state,
        D = null != O && "" !== O,
        L = null;
    C && null != E
        ? (L = (0, r.jsx)(d.A, { userId: E, size: h, className: a()(n, p.W9), hangStatusActivity: g }))
        : null == b || T || (L = (0, r.jsx)(l.A, { emoji: b, animate: I, className: n, hideTooltip: S || D }));
    let w = D ? (null != L ? ` ${O}` : O) : null,
        x = () => {
            let e = null != b && !T && !D;
            return S || e
                ? (0, r.jsxs)(r.Fragment, { children: [L, w] })
                : null != R.presence
                  ? (0, r.jsx)(s.m, { delay: 150, children: (0, r.jsxs)("span", { children: [L, w] }) })
                  : (0, r.jsxs)("span", { children: [L, w] });
        };
    return null == t && null == g
        ? null
        : (0, r.jsx)(o.Text, { variant: `text-${A}/medium`, color: "none", className: a()(p.ps, i), children: x() });
}
