"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(541952),
    u = n(151271),
    c = n(545428),
    d = n(698279),
    _ = n(985018),
    f = n(178588);
function p(e, t) {
    let { disabled: n, type: s, channel: p } = e,
        [h, m, E, g] = (0, u.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], o.x),
        A = !1,
        I = h === d.kx.STICKER && g === s && E === p.id,
        T = i.useCallback(() => {
            (0, u.r$)(d.kx.STICKER, s, p.id);
        }, [s, p.id]),
        { Component: S, events: y, play: v } = (0, l.g)();
    return n
        ? null
        : (0, r.jsx)("div", {
              className: a()(d.VQ, f.UD),
              ref: t,
              children: (0, r.jsx)(c.A, {
                  className: a()(f.x6, f.KE),
                  ...y,
                  onClick: () => {
                      T(), v();
                  },
                  isActive: I,
                  "aria-label": _.intl.string(_.t.rZpidU),
                  "aria-expanded": I,
                  "aria-haspopup": "dialog",
                  "aria-controls": m,
                  sparkle: A,
                  children: (0, r.jsx)(S, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
}
let h = i.memo(i.forwardRef(p));
