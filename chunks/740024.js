n.d(a, { default: () => d });
var i = n(477900);
n(582128);
var e = n(980707),
    l = n(477782),
    c = n(442433),
    r = n(679164),
    s = n(957565),
    o = n(375708);
function d(t) {
    let { attachmentUrl: a, attachmentName: n, onSelect: d } = t;
    return (0, i.jsx)(e.W, {
        "data-menu-migrated-auto": !0,
        navId: "attachment-link-context",
        onClose: c.Z_,
        onSelect: d,
        "aria-label": o.intl.string(o.t["5oIOLX"]),
        children: (0, i.jsxs)(
            l.rX,
            {
                children: [
                    (0, i.jsx)(l.Dr, {
                        id: "attachment-link-copy-link",
                        label: o.intl.string(o.t["92CPQ+"]),
                        action: async () => {
                            let t = await r.AN(a);
                            (0, s.C)(t ?? "");
                        },
                    }),
                    (0, i.jsx)(l.Dr, {
                        id: "attachment-link-copy-name",
                        label: o.intl.string(o.t.JrGD7E),
                        action: () => {
                            (0, s.C)(n ?? "");
                        },
                    }),
                ],
            },
            "attachment-link-actions",
        ),
    });
}
