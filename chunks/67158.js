n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(782425),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(72775);
let m = a.memo(
    a.forwardRef(function (e, t) {
        let { disabled: n, type: i, className: m, onClick: h, channel: f } = e,
            [g, x, b] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.activeChannelId], s.X),
            p = a.useCallback(() => {
                (0, c.j9)(i, f.id), null == h || h();
            }, [i, h, f.id]);
        return n
            ? null
            : (0, r.jsx)("div", {
                  className: l()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(o.Z, {
                      className: l()(u.emojiButton, m),
                      onClick: p,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === i && b === f.id,
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
