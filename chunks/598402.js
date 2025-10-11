n.d(e, { default: () => l });
var a = n(951288);
n(647438);
var i = n(481060),
    s = n(388032),
    o = n(294267),
    r = n(134519);
function l(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, a.jsxs)(i.Y0X, {
        transitionState: e,
        className: o.root,
        parentComponent: "InsufficientInvitePermission",
        children: [
            (0, a.jsxs)(i.xBx, {
                separator: !1,
                className: o.noScroll,
                children: [
                    (0, a.jsx)(i.olH, {
                        className: o.closeButton,
                        onClick: n,
                    }),
                    (0, a.jsx)("div", {
                        className: o.imageContainer,
                        children: (0, a.jsx)("img", {
                            src: r,
                            className: o.image,
                            alt: "",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(i.hzk, {
                children: (0, a.jsxs)("div", {
                    className: o.content,
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            className: o.title,
                            children: s.intl.string(s.t.xSV3nZ),
                        }),
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: o.text,
                            children: s.intl.string(s.t.jPMGbG),
                        }),
                        (0, a.jsx)("div", {
                            className: o.buttonContainer,
                            children: (0, a.jsx)(i.Button, {
                                variant: "primary",
                                text: s.intl.string(s.t["NX+WJC"]),
                                onClick: n,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
