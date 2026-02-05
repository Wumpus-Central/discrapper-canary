"use strict";
n.d(t, { A: () => m });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(942381),
    o = n(375499),
    d = n(151271),
    c = n(698279),
    u = n(111314);
let m = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, className: m, onClick: h, channel: x } = e,
            [g, f, p] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], r.x),
            _ = i.useCallback(() => {
                (0, d.ed)(s, x.id), h?.();
            }, [s, h, x.id]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: a()(c.VQ, u.UD),
                  ref: t,
                  children: (0, l.jsx)(o.A, {
                      className: a()(u.Z8, m),
                      onClick: _,
                      active: (g === c.kx.GIF || g === c.kx.EMOJI || g === c.kx.STICKER) && f === s && p === x.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
