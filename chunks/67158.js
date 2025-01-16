n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(232713),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(553796);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: r, className: m, onClick: h } = e,
            [g, x] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], s.X),
            f = i.useCallback(() => {
                (0, c.j9)(r), null == h || h();
            }, [r, h]);
        return n
            ? null
            : (0, a.jsx)('div', {
                  className: l()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, a.jsx)(o.Z, {
                      className: l()(u.emojiButton, m),
                      onClick: f,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === r,
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
