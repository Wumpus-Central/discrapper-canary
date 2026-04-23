"use strict";
n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(942381),
    o = n(375499),
    d = n(151271),
    c = n(698279),
    u = n(266599);
let m = a.memo(
    a.forwardRef(function (e, t) {
        let { disabled: n, type: s, className: m, onClick: h, channel: g } = e,
            [x, f, _] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], r.x),
            p = a.useCallback(() => {
                (0, d.ed)(s, g.id), h?.();
            }, [s, h, g.id]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: i()(c.VQ, u.UD),
                  ref: t,
                  children: (0, l.jsx)(o.A, {
                      className: i()(u.Z8, m),
                      onClick: p,
                      active: (x === c.kx.GIF || x === c.kx.EMOJI || x === c.kx.STICKER) && f === s && _ === g.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
