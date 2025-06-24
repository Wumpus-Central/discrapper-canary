n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(94171),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(302195);
let m = a.memo(
    a.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: m, onClick: h } = e,
            [g, f] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], s.X),
            x = a.useCallback(() => {
                (0, c.j9)(l), null == h || h();
            }, [l, h]);
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: i()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(o.Z, {
                      className: i()(u.emojiButton, m),
                      onClick: x,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && f === l,
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
