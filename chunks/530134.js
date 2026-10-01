n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(462180),
    o = n(375499),
    u = n(151271),
    c = n(698279),
    d = n(495088);
let h = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: r, className: h, onClick: m, channel: p } = e,
            [f, g, x] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], a.x),
            S = i.useCallback(() => {
                ((0, u.ed)(r, p.id), m?.());
            }, [r, m, p.id]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: s()(c.VQ, d.UD),
                  ref: t,
                  children: (0, l.jsx)(o.A, {
                      className: s()(d.Z8, h),
                      onClick: S,
                      active: (f === c.kx.GIF || f === c.kx.EMOJI || f === c.kx.STICKER) && g === r && x === p.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
