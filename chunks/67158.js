n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(55160),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(564355);
let m = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: m, onClick: h, channel: g } = e,
            [f, x, p] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.activeChannelId], s.X),
            b = i.useCallback(() => {
                (0, c.j9)(l, g.id), null == h || h();
            }, [l, h, g.id]);
        return n
            ? null
            : (0, r.jsx)("div", {
                  className: a()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(o.Z, {
                      className: a()(u.emojiButton, m),
                      onClick: b,
                      active: (f === d.X1.GIF || f === d.X1.EMOJI || f === d.X1.STICKER) && x === l && p === g.id,
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
