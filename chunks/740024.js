a.d(n, { default: () => o });
var i = a(627968);
a(64700);
var l = a(397927),
    e = a(442433),
    c = a(202803),
    s = a(957565),
    r = a(985018);
function o(t) {
    let { attachmentUrl: n, attachmentName: a, onSelect: o } = t;
    return (0, i.jsx)(l.W1t, {
        navId: "attachment-link-context",
        onClose: e.Z_,
        onSelect: o,
        "aria-label": r.intl.string(r.t["5oIOLX"]),
        children: (0, i.jsxs)(
            l.rXV,
            {
                children: [
                    (0, i.jsx)(l.Drp, {
                        id: "attachment-link-copy-link",
                        label: r.intl.string(r.t.WqhZss),
                        action: async () => {
                            let t = await (0, c.AN)(n);
                            (0, s.C)(null != t ? t : "");
                        },
                    }),
                    (0, i.jsx)(l.Drp, {
                        id: "attachment-link-copy-name",
                        label: r.intl.string(r.t.JrGD7E),
                        action: () => {
                            (0, s.C)(null != a ? a : "");
                        },
                    }),
                ],
            },
            "attachment-link-actions",
        ),
    });
}
