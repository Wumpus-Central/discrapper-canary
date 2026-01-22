n.d(t, { A: () => m }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(942381),
    c = n(375499),
    o = n(151271),
    d = n(698279),
    u = n(111314);
let m = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: a, className: m, onClick: h, channel: f } = e,
            [g, x, b] = (0, o.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], s.x),
            p = r.useCallback(() => {
                (0, o.ed)(a, f.id), null == h || h();
            }, [a, h, f.id]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: i()(d.VQ, u.UD),
                  ref: t,
                  children: (0, l.jsx)(c.A, {
                      className: i()(u.Z8, m),
                      onClick: p,
                      active: (g === d.kx.GIF || g === d.kx.EMOJI || g === d.kx.STICKER) && x === a && b === f.id,
                      tabIndex: 0,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: -4,
                              right: -4,
                          },
                      },
                  }),
              });
    }),
);
