a.d(t, { Z: () => d });
var n = a(255367),
    r = a(73800),
    l = a(793030),
    i = a(836459),
    s = a(396704),
    o = a(861066),
    c = a(481060);
function d() {
    let e = Object.keys(i).map((e) => (0, n.jsx)(u, { riveName: e }, e));
    return (0, n.jsx)(l.Kq, {
        gap: 24,
        padding: 8,
        style: { boxSizing: 'border-box' },
        children: e
    });
}
function u(e) {
    let { riveName: t } = e,
        a = i[t].riveSrc,
        d = r.useRef(null),
        u = (0, s.o8)(a);
    return (0, n.jsxs)(
        l.Kq,
        {
            gap: 8,
            children: [
                (0, n.jsx)('label', { children: t }),
                (0, n.jsxs)(l.Kq, {
                    justify: 'space-between',
                    direction: 'horizontal',
                    align: 'center',
                    children: [
                        (0, n.jsx)('input', {
                            type: 'file',
                            accept: '.riv',
                            onChange: (e) => {
                                var t;
                                let n = null == (t = e.target.files) ? void 0 : t[0];
                                if (null == n) return;
                                let r = new FileReader();
                                ((r.onload = (e) => {
                                    var t;
                                    let n = null == (t = e.target) ? void 0 : t.result;
                                    (0, s.JG)(a, n);
                                }),
                                    r.readAsArrayBuffer(n));
                            },
                            ref: d
                        }),
                        (0, n.jsx)(o.h, {
                            'aria-label': 'Clear override for '.concat(t),
                            onClick: () => {
                                (null != d.current && (d.current.value = ''), (0, s.JG)(a, null));
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
