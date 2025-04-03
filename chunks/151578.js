a.d(n, { default: () => h });
var i = a(200651);
a(192379);
var l = a(852229),
    c = a(481060),
    e = a(239091),
    s = a(198620),
    r = a(388032);
function h(t) {
    let { attachmentUrl: n, attachmentName: a, onSelect: h } = t;
    return (0, i.jsx)(c.v2r, {
        navId: 'attachment-link-context',
        onClose: e.Zy,
        onSelect: h,
        'aria-label': r.NW.string(r.t['5oIOLS']),
        children: (0, i.jsxs)(
            c.kSQ,
            {
                children: [
                    (0, i.jsx)(c.sNh, {
                        id: 'attachment-link-copy-link',
                        label: r.NW.string(r.t.WqhZsr),
                        action: async () => {
                            let t = await (0, s.B_)(n);
                            (0, l.J)(null != t ? t : '');
                        }
                    }),
                    (0, i.jsx)(c.sNh, {
                        id: 'attachment-link-copy-name',
                        label: r.NW.string(r.t.JrGD7O),
                        action: () => {
                            (0, l.J)(null != a ? a : '');
                        }
                    })
                ]
            },
            'attachment-link-actions'
        )
    });
}
