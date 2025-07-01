n.d(t, { Z: () => d });
var a = n(255367),
    r = n(73800),
    l = n(793030),
    i = n(836459),
    s = n(396704),
    o = n(861066),
    c = n(481060);
function d() {
    let e = Object.keys(i).map((e) => (0, a.jsx)(u, { riveName: e }, e));
    return (0, a.jsx)(l.Kq, {
        gap: 24,
        padding: 8,
        style: { boxSizing: 'border-box' },
        children: e
    });
}
function u(e) {
    let { riveName: t } = e,
        n = i[t].riveSrc,
        d = r.useRef(null),
        u = (0, s.o8)(n);
    return (0, a.jsxs)(
        l.Kq,
        {
            gap: 8,
            children: [
                (0, a.jsx)('label', { children: t }),
                (0, a.jsxs)(l.Kq, {
                    justify: 'space-between',
                    direction: 'horizontal',
                    align: 'center',
                    children: [
                        (0, a.jsx)('input', {
                            type: 'file',
                            accept: '.riv',
                            onChange: (e) => {
                                var t;
                                let a = null == (t = e.target.files) ? void 0 : t[0];
                                if (null == a) return;
                                let r = new FileReader();
                                ((r.onload = (e) => {
                                    var t;
                                    let a = null == (t = e.target) ? void 0 : t.result;
                                    (0, s.JG)(n, a);
                                }),
                                    r.readAsArrayBuffer(a));
                            },
                            ref: d
                        }),
                        (0, a.jsx)(o.h, {
                            'aria-label': 'Clear override for '.concat(t),
                            onClick: () => {
                                (null != d.current && (d.current.value = ''), (0, s.JG)(n, null));
                            },
                            icon: c.XHJ,
                            variant: 'critical-primary',
                            size: 'sm',
                            disabled: null == u
                        })
                    ]
                })
            ]
        },
        t
    );
}
