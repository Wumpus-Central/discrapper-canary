a.d(n, { default: () => h });
var i = a(54381);
a(473749);
var l = a(481060),
    s = a(239091),
    c = a(198620),
    e = a(572004),
    r = a(388032);
function h(t) {
    let { attachmentUrl: n, attachmentName: a, onSelect: h } = t;
    return (0, i.jsx)(l.v2r, {
        navId: "attachment-link-context",
        onClose: s.Zy,
        onSelect: h,
        "aria-label": r.intl.string(r.t["5oIOLX"]),
        children: (0, i.jsxs)(
            l.kSQ,
            {
                children: [
                    (0, i.jsx)(l.sNh, {
                        id: "attachment-link-copy-link",
                        label: r.intl.string(r.t.WqhZss),
                        action: async () => {
                            let t = await (0, c.B_)(n);
                            (0, e.JG)(null != t ? t : "");
                        },
                    }),
                    (0, i.jsx)(l.sNh, {
                        id: "attachment-link-copy-name",
                        label: r.intl.string(r.t.JrGD7E),
                        action: () => {
                            (0, e.JG)(null != a ? a : "");
                        },
                    }),
                ],
            },
            "attachment-link-actions",
        ),
    });
}
