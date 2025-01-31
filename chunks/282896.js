r.d(t, { Z: () => f });
var i = r(200651),
    n = r(192379),
    s = r(120356),
    o = r.n(s),
    a = r(481060),
    c = r(378233),
    l = r(388032),
    d = r(654543);
let u = (e) => {
        let { stickerPack: t } = e;
        return (0, i.jsx)('div', {
            className: d.features,
            children: (0, c.X_)(t)
                ? (0, i.jsx)(a.ua7, {
                      tooltipClassName: d.featuresTooltip,
                      position: 'top',
                      text: l.intl.string(l.t.W11rMT),
                      children: (e) =>
                          (0, i.jsx)(a.o1U, {
                              size: 'xs',
                              color: 'currentColor',
                              ...e,
                              className: d.featureIcon
                          })
                  })
                : null
        });
    },
    f = n.memo((e) => {
        let { className: t, stickerPack: r, withDescription: n = !1 } = e;
        return (0, i.jsxs)('div', {
            className: o()(d.header, t),
            children: [
                (0, i.jsxs)('div', {
                    className: d.title,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: d.heading,
                            variant: 'heading-sm/semibold',
                            children: r.name
                        }),
                        (0, i.jsx)(u, { stickerPack: r })
                    ]
                }),
                n &&
                    null != r.description &&
                    (0, i.jsx)(a.Text, {
                        className: d.description,
                        variant: 'text-sm/normal',
                        children: r.description
                    }),
                (0, i.jsx)('div', {
                    className: d.count,
                    children: l.intl.format(l.t['0S3JpK'], { numStickers: r.stickers.length })
                })
            ]
        });
    });
