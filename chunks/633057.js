e.d(n, { default: () => l });
var i = e(951288);
e(647438);
var s = e(481060),
    a = e(388032),
    o = e(881873),
    r = e(134519);
function l(t) {
    let { transitionState: n, onClose: e } = t;
    return (0, i.jsxs)(s.Y0X, {
        transitionState: n,
        className: o.root,
        parentComponent: "InsufficientInvitePermission",
        children: [
            (0, i.jsxs)(s.xBx, {
                separator: !1,
                className: o.noScroll,
                children: [
                    (0, i.jsx)(s.olH, {
                        className: o.closeButton,
                        onClick: e,
                    }),
                    (0, i.jsx)("div", {
                        className: o.imageContainer,
                        children: (0, i.jsx)("img", {
                            src: r,
                            className: o.image,
                            alt: "",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(s.hzk, {
                children: (0, i.jsxs)("div", {
                    className: o.content,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            className: o.title,
                            children: a.intl.string(a.t.xSV3nZ),
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: o.text,
                            children: a.intl.string(a.t.jPMGbG),
                        }),
                        (0, i.jsx)("div", {
                            className: o.buttonContainer,
                            children: (0, i.jsx)(s.Button, {
                                variant: "primary",
                                text: a.intl.string(a.t["NX+WJC"]),
                                onClick: e,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
