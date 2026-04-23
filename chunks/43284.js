"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(834730),
    l = n(51183),
    u = n(613125);
n(851883);
var c = n(124704);
function d(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: i,
            textClassName: d,
            userId: _,
            textSize: f = "xs",
            animateEmoji: p = !0,
            hideEmoji: h = !1,
            hideTooltip: E = !1,
        } = e,
        m = n?.emoji,
        g = (0, u.Z)({ customStatusActivity: n, statusOwnerId: _, location: "CustomStatusVoiceDare" }),
        A = g.statusTextOverride ?? n?.state,
        I = null != A && "" !== A,
        T = null;
    null == m || h || (T = (0, r.jsx)(l.A, { emoji: m, animate: p, className: i, hideTooltip: E || I }));
    let S = I ? (null != T ? ` ${A}` : A) : null;
    return null == n
        ? null
        : (0, r.jsx)(o.E, {
              variant: `text-${f}/medium`,
              color: "none",
              className: s()(c.ps, d),
              children:
                  ((t = null != m && !h && !I),
                  E || t
                      ? (0, r.jsxs)(r.Fragment, { children: [T, S] })
                      : null != g.presence
                        ? (0, r.jsx)(a.m, { delay: 150, children: (0, r.jsxs)("span", { children: [T, S] }) })
                        : (0, r.jsxs)("span", { children: [T, S] })),
          });
}
