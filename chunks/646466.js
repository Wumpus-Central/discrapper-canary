n.d(t, { O: () => u }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(246992),
    o = n(619899),
    s = n(18868),
    c = n(281598),
    d = n(631541);
let u = () => {
    var e, t;
    let [n, u] = a.useState(o.F.HERO_BANNER),
        { assets: m, upsertAsset: h, previewEnabled: x, setPreviewEnabled: f, deleteAsset: p } = (0, o.N)(),
        b = a.useCallback(
            (e, t) => {
                let n = c.Kj[e.name];
                null != n && (e.type.startsWith('image/') || e.type.startsWith('video/')) && h(n, e);
            },
            [h]
        ),
        _ = a.useCallback(
            async (e) => {
                (await (0, c.RF)(e)).forEach((e) => (0, c.ZK)(e, b, c.Eo)), f(!0);
            },
            [b, f]
        ),
        g = a.useCallback(
            (e) => {
                p(e);
            },
            [p]
        ),
        v = a.useMemo(
            () =>
                Object.values(o.F)
                    .filter((e) => null != m[e])
                    .map((e) => ({
                        label: e,
                        value: e
                    })),
            [m]
        );
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)(s.L, { onDrop: _ }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: 'Drop a file in this panel to upload.'
            }),
            (0, r.jsxs)('div', {
                className: d.previewToggleContainer,
                children: [
                    (0, r.jsx)(l.rsf, {
                        checked: x,
                        onChange: (e) => f(e)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: 'Enable Preview'
                    })
                ]
            }),
            v.length > 0 &&
                (0, r.jsxs)('div', {
                    className: d.assetSelectorContainer,
                    children: [
                        (0, r.jsx)(l.PhF, {
                            className: d.assetSelector,
                            options: v,
                            isSelected: (e) => e === n,
                            select: u,
                            serialize: (e) => e,
                            popoutLayerContext: i.O$
                        }),
                        (0, r.jsx)(l.zxk, {
                            className: d.removeAssetButton,
                            onClick: () => g(n),
                            children: 'Remove'
                        })
                    ]
                }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/bold',
                children: 'DEBUG ZONE - IGNORE'
            }),
            (0, r.jsx)('img', {
                src: null !== (t = null === (e = m[n]) || void 0 === e ? void 0 : e.src) && void 0 !== t ? t : '',
                alt: ''
            })
        ]
    });
};
