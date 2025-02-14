n.d(t, { Z: () => l }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var s = n(200651),
    r = n(192379),
    a = n(481060),
    o = n(763610),
    i = n(970533);
let l = function (e) {
    var t, n;
    let { assetKey: l, filters: c, initialValue: d, onFileChange: u, title: p } = e,
        [m, x] = r.useState(null),
        h = r.useRef(null);
    return (
        r.useEffect(
            () => () => {
                null != h.current && URL.revokeObjectURL(h.current);
            },
            []
        ),
        (0, s.jsxs)(a.xJW, {
            children: [
                (0, s.jsx)(a.vwX, {
                    tag: a.RB0.H5,
                    children: (0, s.jsxs)('div', {
                        className: i.headingWithTooltip,
                        children: [
                            p,
                            (0, s.jsx)(a.ua7, {
                                text: 'Supported asset formats: '.concat(c.join(', ')),
                                children: (e) =>
                                    (0, s.jsx)(a.d3s, {
                                        size: 'xs',
                                        ...e
                                    })
                            })
                        ]
                    })
                }),
                (0, s.jsx)(o.Z, {
                    filename: null !== (n = null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : d) && void 0 !== n ? n : '',
                    filters: [
                        {
                            name: p,
                            extensions: c
                        }
                    ],
                    buttonText: 'Browse',
                    placeholder: 'Select an asset',
                    onFileSelect: function (e) {
                        if ((x(null != e ? e : null), null == e)) return;
                        let t = URL.createObjectURL(e);
                        h.current = t;
                        let n = new URL(t);
                        n.searchParams.append('mimetype', e.type), n.searchParams.append('name', e.name), u(l, n.toString());
                    }
                })
            ]
        })
    );
};
