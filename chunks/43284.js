"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(397927),
    l = n(51183),
    u = n(613125);
n(851883);
var c = n(496496);
function d(e) {
    let {
            customStatusActivity: t,
            iconClassName: n,
            textClassName: i,
            userId: d,
            textSize: _ = "xs",
            animateEmoji: f = !0,
            hideEmoji: p = !1,
            hideTooltip: h = !1,
        } = e,
        m = t?.emoji,
        E = (0, u.Z)({ customStatusActivity: t, statusOwnerId: d, location: "CustomStatusVoiceDare" }),
        g = E.statusTextOverride ?? t?.state,
        A = null != g && "" !== g,
        I = null;
    null == m || p || (I = (0, r.jsx)(l.A, { emoji: m, animate: f, className: n, hideTooltip: h || A }));
    let T = A ? (null != I ? ` ${g}` : g) : null,
        S = () => {
            let e = null != m && !p && !A;
            return h || e
                ? (0, r.jsxs)(r.Fragment, { children: [I, T] })
                : null != E.presence
                  ? (0, r.jsx)(a.m, { delay: 150, children: (0, r.jsxs)("span", { children: [I, T] }) })
                  : (0, r.jsxs)("span", { children: [I, T] });
        };
    return null == t
        ? null
        : (0, r.jsx)(o.Text, { variant: `text-${_}/medium`, color: "none", className: s()(c.ps, i), children: S() });
}
