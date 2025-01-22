var r = n(200651),
    i = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(481060),
    c = n(378233),
    l = n(388032),
    d = n(654543);
let u = (e) => {
    let { stickerPack: t } = e;
    return (0, r.jsx)('div', {
        className: d.features,
        children: (0, c.X_)(t)
            ? (0, r.jsx)(a.Tooltip, {
                  tooltipClassName: d.featuresTooltip,
                  position: 'top',
                  text: l.intl.string(l.t.W11rMT),
                  children: (e) =>
                      (0, r.jsx)(a.PlayIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          ...e,
                          className: d.featureIcon
                      })
              })
            : null
    });
};
t.Z = i.memo((e) => {
    let { className: t, stickerPack: n, withDescription: i = !1 } = e;
    return (0, r.jsxs)('div', {
        className: s()(d.header, t),
        children: [
            (0, r.jsxs)('div', {
                className: d.title,
                children: [
                    (0, r.jsx)(a.Heading, {
                        className: d.heading,
                        variant: 'heading-sm/semibold',
                        children: n.name
                    }),
                    (0, r.jsx)(u, { stickerPack: n })
                ]
            }),
            i &&
                null != n.description &&
                (0, r.jsx)(a.Text, {
                    className: d.description,
                    variant: 'text-sm/normal',
                    children: n.description
                }),
            (0, r.jsx)('div', {
                className: d.count,
                children: l.intl.format(l.t['0S3JpK'], { numStickers: n.stickers.length })
            })
        ]
    });
});
