n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(55160),
    o = n(318766),
    c = n(28546),
    d = n(957825),
    u = n(564355);
let m = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a, className: m, onClick: h, channel: g } = e,
            [f, x, p] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.activeChannelId], s.X),
            b = i.useCallback(() => {
                (0, c.j9)(a, g.id), null == h || h();
            }, [a, h, g.id]);
        return n
            ? null
            : (0, r.jsx)("div", {
                  className: l()(d.CT, u.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(o.Z, {
                      className: l()(u.emojiButton, m),
                      onClick: b,
                      active: (f === d.X1.GIF || f === d.X1.EMOJI || f === d.X1.STICKER) && x === a && p === g.id,
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
