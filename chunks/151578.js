a.d(n, { default: () => h });
var i = a(200651);
a(192379);
var l = a(481060),
    c = a(239091),
    e = a(198620),
    s = a(572004),
    r = a(388032);
function h(t) {
    let { attachmentUrl: n, attachmentName: a, onSelect: h } = t;
    return (0, i.jsx)(l.v2r, {
        navId: 'attachment-link-context',
        onClose: c.Zy,
        onSelect: h,
        'aria-label': r.NW.string(r.t['5oIOLS']),
        children: (0, i.jsxs)(
            l.kSQ,
            {
                children: [
                    (0, i.jsx)(l.sNh, {
                        id: 'attachment-link-copy-link',
                        label: r.NW.string(r.t.WqhZsr),
                        action: async () => {
                            let t = await (0, e.B_)(n);
                            (0, s.JG)(null != t ? t : '');
                        }
                    }),
                    (0, i.jsx)(l.sNh, {
                        id: 'attachment-link-copy-name',
                        label: r.NW.string(r.t.JrGD7O),
                        action: () => {
                            (0, s.JG)(null != a ? a : '');
                        }
                    })
                ]
            },
            'attachment-link-actions'
        )
    });
}
