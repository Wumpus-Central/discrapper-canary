"use strict";
n.d(t, { A: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(462180),
    o = n(375499),
    d = n(151271),
    c = n(698279),
    u = n(857983);
let _ = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: a, className: _, onClick: E, channel: A } = e,
            [h, I, f] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], l.x),
            p = r.useCallback(() => {
                (0, d.ed)(a, A.id), E?.();
            }, [a, E, A.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(c.VQ, u.UD),
                  ref: t,
                  children: (0, i.jsx)(o.A, {
                      className: s()(u.Z8, _),
                      onClick: p,
                      active: (h === c.kx.GIF || h === c.kx.EMOJI || h === c.kx.STICKER) && I === a && f === A.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
