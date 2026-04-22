s.d(i, { default: () => j });
var a = s(627968);
s(64700);
var e = s(935462),
    n = s(534514),
    r = s(834730),
    l = s(825484),
    c = s(821609),
    d = s(975807),
    o = s(915089),
    b = s(985018),
    x = s(311618);
function j(t) {
    let { href: i, onClose: j, transitionState: p } = t,
        h = (0, o.GV)();
    return (0, a.jsxs)(e.EO, {
        "data-migration-pending": !0,
        transitionState: p,
        "aria-labelledby": h,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, a.jsx)("img", { className: x.Qw, src: s(151660), alt: "" }),
            (0, a.jsx)(e.$m, {
                children: (0, a.jsxs)("div", {
                    className: x.jE,
                    children: [
                        (0, a.jsx)(n.D, {
                            id: h,
                            variant: "heading-lg/semibold",
                            className: x.DD,
                            children: b.intl.string(b.t.XtDo9Z),
                        }),
                        (0, a.jsx)(r.E, {
                            variant: "text-md/normal",
                            className: x.rf,
                            children: b.intl.string(b.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(e.jl, {
                children: (0, a.jsxs)(l.e, {
                    children: [
                        (0, a.jsx)(c.$, { variant: "primary", text: b.intl.string(b.t.j7Vi2i), onClick: j }),
                        (0, a.jsx)(c.$, {
                            text: b.intl.string(b.t["/bHu89"]),
                            variant: "secondary",
                            onClick: () => {
                                j(), (0, d.A)(i, !0);
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
