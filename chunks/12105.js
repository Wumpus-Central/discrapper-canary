n.d(e, { A: () => o });
var a = n(627968);
n(64700);
var r = n(935462),
    s = n(534514),
    i = n(834730),
    l = n(230780);
function o(t) {
    let { heroImage: e, children: n, header: o, description: c } = t;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            void 0 !== e && (0, a.jsx)("div", { className: l.c8, children: e }),
            (0, a.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: l.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: l.FS,
                        children: [
                            (0, a.jsx)(s.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                            null != c &&
                                (0, a.jsx)(i.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: l.h_,
                                    children: c,
                                }),
                        ],
                    }),
                    n,
                ],
            }),
        ],
    });
}
