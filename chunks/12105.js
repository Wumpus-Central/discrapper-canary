n.d(e, { A: () => o });
var a = n(627968);
n(64700);
var i = n(935462),
    r = n(534514),
    s = n(834730),
    l = n(230780);
function o(t) {
    let { heroImage: e, children: n, header: o, description: c } = t;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            void 0 !== e && (0, a.jsx)("div", { className: l.c8, children: e }),
            (0, a.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: l.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: l.FS,
                        children: [
                            (0, a.jsx)(r.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                            null != c &&
                                (0, a.jsx)(s.E, {
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
