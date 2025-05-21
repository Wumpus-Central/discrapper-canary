n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(760907),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(302195);
let m = l.memo(
    l.forwardRef(function (e, t) {
        let { disabled: n, type: i, className: m, onClick: h } = e,
            [g, f] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], s.X),
            x = l.useCallback(() => {
                (0, c.j9)(i), null == h || h();
            }, [i, h]);
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: a()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(o.Z, {
                      className: a()(u.emojiButton, m),
                      onClick: x,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && f === i,
                      tabIndex: 0,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: -4,
                              right: -4
                          }
                      }
                  })
              });
    })
);
