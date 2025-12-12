n.d(t, { Z: () => m }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(55160),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(72775);
let m = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: i, className: m, onClick: f, channel: h } = e,
            [g, x, b] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.activeChannelId], s.X),
            p = r.useCallback(() => {
                (0, c.j9)(i, h.id), null == f || f();
            }, [i, f, h.id]);
        return n
            ? null
            : (0, a.jsx)("div", {
                  className: l()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, a.jsx)(o.Z, {
                      className: l()(u.emojiButton, m),
                      onClick: p,
                      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === i && b === h.id,
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
