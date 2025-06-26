n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(94171),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(302195);
let m = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a, className: m, onClick: h } = e,
            [g, f] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], s.X),
            x = i.useCallback(() => {
                (0, c.j9)(a), null == h || h();
            }, [a, h]);
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: l()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(o.Z, {
                      className: l()(u.emojiButton, m),
                      onClick: x,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && f === a,
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
