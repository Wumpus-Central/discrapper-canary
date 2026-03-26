s.d(i, { default: () => d });
var a = s(627968);
s(64700);
var n = s(397927),
    e = s(975807),
    r = s(915089),
    l = s(985018),
    c = s(942002);
function d(t) {
    let { href: i, onClose: d, transitionState: o } = t,
        b = (0, r.GV)();
    return (0, a.jsxs)(n.EOs, {
        "data-migration-pending": !0,
        transitionState: o,
        "aria-labelledby": b,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, a.jsx)("img", { className: c.Qw, src: s(151660), alt: "" }),
            (0, a.jsx)(n.$mQ, {
                children: (0, a.jsxs)("div", {
                    className: c.jE,
                    children: [
                        (0, a.jsx)(n.Heading, {
                            id: b,
                            variant: "heading-lg/semibold",
                            className: c.DD,
                            children: l.intl.string(l.t.XtDo9Z),
                        }),
                        (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            className: c.rf,
                            children: l.intl.string(l.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(n.jlY, {
                children: (0, a.jsxs)(n.ButtonGroup, {
                    children: [
                        (0, a.jsx)(n.Button, { variant: "primary", text: l.intl.string(l.t.j7Vi2i), onClick: d }),
                        (0, a.jsx)(n.Button, {
                            text: l.intl.string(l.t["/bHu89"]),
                            variant: "secondary",
                            onClick: () => {
                                d(), (0, e.A)(i, !0);
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
