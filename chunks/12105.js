n.d(e, {
    A: () => s,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(286965);

function s(t) {
    let { heroImage: e, children: n, header: s, description: l } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            void 0 !== e &&
                (0, r.jsx)("div", {
                    className: a.c8,
                    children: e,
                }),
            (0, r.jsxs)(i.$mQ, {
                "data-migration-pending": !0,
                className: a.rf,
                children: [
                    (0, r.jsxs)("div", {
                        className: a.FS,
                        children: [
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: s,
                            }),
                            null != l &&
                                (0, r.jsx)(i.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: a.h_,
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
