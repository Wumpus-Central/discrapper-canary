n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(232713),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(513632);
let m = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: m, onClick: h } = e,
            [g, x] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], s.X),
            f = r.useCallback(() => {
                (0, c.j9)(l), null == h || h();
            }, [l, h]);
        return n
            ? null
            : (0, i.jsx)('div', {
                  className: a()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, i.jsx)(o.Z, {
                      className: a()(u.emojiButton, m),
                      onClick: f,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === l,
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
