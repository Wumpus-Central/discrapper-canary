i.d(s, { default: () => c });
var a = i(627968);
i(64700);
var n = i(397927),
    e = i(975807),
    r = i(915089),
    l = i(985018),
    d = i(36205);
function c(t) {
    let { href: s, onClose: c, transitionState: o } = t,
        x = (0, r.GV)();
    return (0, a.jsxs)(n.EOs, {
        "data-migration-pending": !0,
        transitionState: o,
        "aria-labelledby": x,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, a.jsx)("img", {
                className: d.Qw,
                src: i(929279),
                alt: "",
            }),
            (0, a.jsx)(n.$mQ, {
                children: (0, a.jsxs)("div", {
                    className: d.jE,
                    children: [
                        (0, a.jsx)(n.Heading, {
                            id: x,
                            variant: "heading-lg/semibold",
                            className: d.DD,
                            children: l.intl.string(l.t.XtDo9Z),
                        }),
                        (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            className: d.rf,
                            children: l.intl.string(l.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(n.jlY, {
                children: (0, a.jsxs)(n.ButtonGroup, {
                    children: [
                        (0, a.jsx)(n.Button, {
                            variant: "primary",
                            text: l.intl.string(l.t.j7Vi2i),
                            onClick: c,
                        }),
                        (0, a.jsx)(n.Button, {
                            text: l.intl.string(l.t["/bHu89"]),
                            variant: "secondary",
                            onClick: () => {
                                c(), (0, e.A)(s, !0);
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
