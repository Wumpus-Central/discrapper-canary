t.d(s, { default: () => j });
var a = t(627968);
t(64700);
var n = t(935462),
    e = t(534514),
    r = t(834730),
    l = t(825484),
    d = t(821609),
    c = t(975807),
    o = t(915089),
    x = t(375708),
    h = t(311618);
function j(i) {
    let { href: s, onClose: j, transitionState: p } = i,
        m = (0, o.GV)();
    return (0, a.jsxs)(n.EO, {
        "data-migration-pending": !0,
        transitionState: p,
        "aria-labelledby": m,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, a.jsx)("img", { className: h.Qw, src: t(151660), alt: "" }),
            (0, a.jsx)(n.$m, {
                children: (0, a.jsxs)("div", {
                    className: h.jE,
                    children: [
                        (0, a.jsx)(e.D, {
                            id: m,
                            variant: "heading-lg/semibold",
                            className: h.DD,
                            children: x.intl.string(x.t.XtDo9Z),
                        }),
                        (0, a.jsx)(r.E, {
                            variant: "text-md/normal",
                            className: h.rf,
                            children: x.intl.string(x.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(n.jl, {
                children: (0, a.jsxs)(l.e, {
                    children: [
                        (0, a.jsx)(d.$, { variant: "primary", text: x.intl.string(x.t.j7Vi2i), onClick: j }),
                        (0, a.jsx)(d.$, {
                            text: x.intl.string(x.t["/bHu89"]),
                            variant: "secondary",
                            onClick: () => {
                                j(), (0, c.A)(s, !0);
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
