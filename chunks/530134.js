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
let h = i.memo(function (e) {
    let { disabled: t, type: n, className: r, onClick: h, channel: m, ref: p } = e,
        [f, g, x] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], a.x),
        E = i.useCallback(() => {
            ((0, u.ed)(n, m.id), h?.());
        }, [n, h, m.id]);
    return t
        ? null
        : (0, l.jsx)("div", {
              className: s()(c.VQ, d.UD),
              ref: p,
              children: (0, l.jsx)(o.A, {
                  className: s()(d.Z8, r),
                  onClick: E,
                  active: (f === c.kx.GIF || f === c.kx.EMOJI || f === c.kx.STICKER) && g === n && x === m.id,
                  tabIndex: 0,
                  focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
              }),
          });
});
