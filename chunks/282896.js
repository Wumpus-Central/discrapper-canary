var t = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    s = n(481060),
    a = n(378233),
    c = n(388032),
    d = n(654543);
let u = (e) => {
    let { stickerPack: r } = e;
    return (0, t.jsx)('div', {
        className: d.features,
        children: (0, a.X_)(r)
            ? (0, t.jsx)(s.Tooltip, {
                  tooltipClassName: d.featuresTooltip,
                  position: 'top',
                  text: c.intl.string(c.t.W11rMT),
                  children: (e) =>
                      (0, t.jsx)(s.PlayIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          ...e,
                          className: d.featureIcon
                      })
              })
            : null
    });
};
r.Z = l.memo((e) => {
    let { className: r, stickerPack: n, withDescription: l = !1 } = e;
    return (0, t.jsxs)('div', {
        className: i()(d.header, r),
        children: [
            (0, t.jsxs)('div', {
                className: d.title,
                children: [
                    (0, t.jsx)(s.Heading, {
                        className: d.heading,
                        variant: 'heading-sm/semibold',
                        children: n.name
                    }),
                    (0, t.jsx)(u, { stickerPack: n })
                ]
            }),
            l &&
                null != n.description &&
                (0, t.jsx)(s.Text, {
                    className: d.description,
                    variant: 'text-sm/normal',
                    children: n.description
                }),
            (0, t.jsx)('div', {
                className: d.count,
                children: c.intl.format(c.t['0S3JpK'], { numStickers: n.stickers.length })
            })
        ]
    });
});
