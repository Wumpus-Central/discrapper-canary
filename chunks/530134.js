"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(375499),
    u = n(151271),
    c = n(698279),
    d = n(266599);
let _ = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, className: _, onClick: h, channel: f } = e,
            [p, E, m] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], o.x),
            g = r.useCallback(() => {
                (0, u.ed)(s, f.id), h?.();
            }, [s, h, f.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: a()(c.VQ, d.UD),
                  ref: t,
                  children: (0, i.jsx)(l.A, {
                      className: a()(d.Z8, _),
                      onClick: g,
                      active: (p === c.kx.GIF || p === c.kx.EMOJI || p === c.kx.STICKER) && E === s && m === f.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
