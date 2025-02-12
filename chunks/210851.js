a.d(s, { Z: () => o }), a(47120), a(315314), a(309749), a(610138), a(216116), a(78328), a(815648);
var i = a(200651),
    t = a(192379),
    n = a(481060),
    l = a(763610),
    r = a(326687);
let o = function (e) {
    var s, a;
    let { assetKey: o, filters: d, initialValue: c, onFileChange: u, title: g } = e,
        [h, v] = t.useState(null),
        m = t.useRef(null);
    return (
        t.useEffect(
            () => () => {
                null != m.current && URL.revokeObjectURL(m.current);
            },
            []
        ),
        (0, i.jsxs)(n.xJW, {
            children: [
                (0, i.jsx)(n.vwX, {
                    tag: n.RB0.H5,
                    children: (0, i.jsxs)('div', {
                        className: r.headingWithTooltip,
                        children: [
                            g,
                            (0, i.jsx)(n.ua7, {
                                text: 'Supported asset formats: '.concat(d.join(', ')),
                                children: (e) =>
                                    (0, i.jsx)(n.d3s, {
                                        size: 'xs',
                                        ...e
                                    })
                            })
                        ]
                    })
                }),
                (0, i.jsx)(l.Z, {
                    filename: null !== (a = null !== (s = null == h ? void 0 : h.name) && void 0 !== s ? s : c) && void 0 !== a ? a : '',
                    filters: [
                        {
                            name: g,
                            extensions: d
                        }
                    ],
                    buttonText: 'Browse',
                    placeholder: 'Select an asset',
                    onFileSelect: function (e) {
                        if ((v(null != e ? e : null), null == e)) return;
                        let s = URL.createObjectURL(e);
                        m.current = s;
                        let a = new URL(s);
                        a.searchParams.append('mimetype', e.type), a.searchParams.append('name', e.name), u(o, a.toString());
                    }
                })
            ]
        })
    );
};
