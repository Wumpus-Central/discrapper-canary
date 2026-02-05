"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(541952),
    u = n(151271),
    c = n(545428),
    d = n(698279),
    _ = n(985018),
    f = n(111314);
function p(e, t) {
    let { disabled: n, type: a, channel: p } = e,
        [h, m, g, E] = (0, u.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], o.x),
        A = !1,
        I = h === d.kx.STICKER && E === a && g === p.id,
        T = !1,
        y = i.useCallback(() => {
            (0, u.r$)(d.kx.STICKER, a, p.id);
        }, [a, p.id]),
        { Component: S, events: v, play: C } = (0, l.g)();
    return n
        ? null
        : (0, r.jsx)("div", {
              className: s()(d.VQ, f.UD),
              ref: t,
              children: (0, r.jsx)(c.A, {
                  className: s()(f.x6, f.KE),
                  ...v,
                  onClick: () => {
                      y(), C();
                  },
                  isActive: I,
                  "aria-label": _.intl.string(_.t.rZpidU),
                  "aria-expanded": I,
                  "aria-haspopup": "dialog",
                  "aria-controls": m,
                  sparkle: A,
                  notification: T ? c.V.UPDATE : null,
                  children: (0, r.jsx)(S, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
}
let h = i.memo(i.forwardRef(p));
