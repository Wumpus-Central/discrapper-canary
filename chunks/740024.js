n.d(a, { default: () => o });
var i = n(627968);
n(64700);
var e = n(397927),
    l = n(442433),
    c = n(202803),
    s = n(957565),
    r = n(985018);
function o(t) {
    let { attachmentUrl: a, attachmentName: n, onSelect: o } = t;
    return (0, i.jsx)(e.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "attachment-link-context",
        onClose: l.Z_,
        onSelect: o,
        "aria-label": r.intl.string(r.t["5oIOLX"]),
        children: (0, i.jsxs)(
            e.rXV,
            {
                children: [
                    (0, i.jsx)(e.Drp, {
                        id: "attachment-link-copy-link",
                        label: r.intl.string(r.t.WqhZss),
                        action: async () => {
                            let t = await (0, c.AN)(a);
                            (0, s.C)(t ?? "");
                        },
                    }),
                    (0, i.jsx)(e.Drp, {
                        id: "attachment-link-copy-name",
                        label: r.intl.string(r.t.JrGD7E),
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
