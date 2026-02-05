n.d(e, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(286965);
function a(t) {
    let { heroImage: e, children: n, header: a, description: l } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            void 0 !== e && (0, i.jsx)("div", { className: r.c8, children: e }),
            (0, i.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: r.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: r.FS,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: a,
                            }),
                            null != l &&
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: r.h_,
                                    children: l,
                                }),
                        ],
                    }),
                    n,
                ],
            }),
        ],
    });
}
