n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(990078),
    s = n(834730),
    o = n(51183),
    u = n(613125);
n(851883);
var c = n(124704);
function d(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: l,
            textClassName: d,
            userId: _,
            textSize: p = "xs",
            animateEmoji: h = !0,
            hideEmoji: m = !1,
            hideTooltip: A = !1,
        } = e,
        f = n?.emoji,
        g = (0, u.Z)({ customStatusActivity: n, statusOwnerId: _, location: "CustomStatusVoiceDare" }),
        E = g.statusTextOverride ?? n?.state,
        C = null != E && "" !== E,
        I = null;
    null == f || m || (I = (0, r.jsx)(o.A, { emoji: f, animate: h, className: l, hideTooltip: A || C }));
    let v = C ? (null != I ? ` ${E}` : E) : null;
    return null == n
        ? null
        : (0, r.jsx)(s.E, {
              variant: `text-${p}/medium`,
              color: "none",
              className: i()(c.ps, d),
              children:
                  ((t = null != f && !m && !C),
                  A || t
                      ? (0, r.jsxs)(r.Fragment, { children: [I, v] })
                      : null != g.presence
                        ? (0, r.jsx)(a.m, { delay: 150, children: (0, r.jsxs)("span", { children: [I, v] }) })
                        : (0, r.jsxs)("span", { children: [I, v] })),
          });
}
