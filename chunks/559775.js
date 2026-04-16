"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(612324),
    u = n(397927),
    c = n(151271),
    d = n(545428),
    _ = n(698279),
    f = n(985018),
    p = n(266599);
function h(e, t) {
    let { disabled: n, type: s, channel: h } = e,
        [m, E, g, A] = (0, c.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], o.x),
        I = !1,
        T = i.useRef(null),
        S = (0, l.A)(t, T),
        y = m === _.kx.STICKER && A === s && g === h.id,
        v = i.useCallback(() => {
            (0, c.r$)(_.kx.STICKER, s, h.id);
        }, [s, h.id]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: a()(_.VQ, p.UD),
              ref: S,
              children: (0, r.jsx)(d.A, {
                  className: a()(p.x6, p.KE),
                  onClick: () => {
                      v();
                  },
                  isActive: y,
                  "aria-label": f.intl.string(f.t.rZpidU),
                  "aria-expanded": y,
                  "aria-haspopup": "dialog",
                  "aria-controls": E,
                  sparkle: I,
                  children: (0, r.jsx)(u.K2N, {
                      eventTargetRef: T,
                      dataBinding: { fill: "currentColor" },
                      className: u.d5l.refresh_sm,
                  }),
              }),
          });
}
let m = i.memo(i.forwardRef(h));
