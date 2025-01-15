n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var o = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(763610),
    i = n(280400);
t.Z = function (e) {
    var t, n;
    let { assetKey: l, filters: c, initialValue: d, onFileChange: u, title: p } = e,
        [m, x] = r.useState(null),
        g = r.useRef(null);
    return (
        r.useEffect(
            () => () => {
                null != g.current && URL.revokeObjectURL(g.current);
            },
            []
        ),
        (0, o.jsxs)(s.FormItem, {
            children: [
                (0, o.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H5,
                    children: (0, o.jsxs)('div', {
                        className: i.headingWithTooltip,
                        children: [
                            p,
                            (0, o.jsx)(s.Tooltip, {
                                text: 'Supported asset formats: '.concat(c.join(', ')),
                                children: (e) =>
                                    (0, o.jsx)(s.CircleInformationIcon, {
                                        size: 'xs',
                                        ...e
                                    })
                            })
                        ]
                    })
                }),
                (0, o.jsx)(a.Z, {
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
                        g.current = t;
                        let n = new URL(t);
                        n.searchParams.append('mimetype', e.type), n.searchParams.append('name', e.name), u(l, n.toString());
                    }
                })
            ]
        })
    );
};
