n.d(a, { default: () => o });
var i = n(627968);
n(64700);
var e = n(397927),
    l = n(442433),
    c = n(202803),
    r = n(957565),
    s = n(985018);
function o(t) {
    let { attachmentUrl: a, attachmentName: n, onSelect: o } = t;
    return (0, i.jsx)(e.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "attachment-link-context",
        onClose: l.Z_,
        onSelect: o,
        "aria-label": s.intl.string(s.t["5oIOLX"]),
        children: (0, i.jsxs)(
            e.rXV,
            {
                children: [
                    (0, i.jsx)(e.Drp, {
                        id: "attachment-link-copy-link",
                        label: s.intl.string(s.t["92CPQ+"]),
                        action: async () => {
                            let t = await (0, c.AN)(a);
                            (0, r.C)(t ?? "");
                        },
                    }),
                    (0, i.jsx)(e.Drp, {
                        id: "attachment-link-copy-name",
                        label: s.intl.string(s.t.JrGD7E),
                        action: () => {
                            (0, r.C)(n ?? "");
                        },
                    }),
                ],
            },
            "attachment-link-actions",
        ),
    });
}
