n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(462180),
    o = n(375499),
    u = n(151271),
    c = n(698279),
    d = n(495088);
let m = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, className: m, onClick: h, channel: p } = e,
            [f, g, x] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], a.x),
            A = i.useCallback(() => {
                ((0, u.ed)(s, p.id), h?.());
            }, [s, h, p.id]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: r()(c.VQ, d.UD),
                  ref: t,
                  children: (0, l.jsx)(o.A, {
                      className: r()(d.Z8, m),
                      onClick: A,
                      active: (f === c.kx.GIF || f === c.kx.EMOJI || f === c.kx.STICKER) && g === s && x === p.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
