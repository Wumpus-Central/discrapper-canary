n.d(t, { Z: () => l }), n(953529);
var a = n(951288);
n(647438);
var s = n(481060),
    r = n(388032),
    i = n(780187);
function l(e) {
    let { email: t, onClose: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: i.header,
                children: [
                    (0, a.jsx)(s.Heading, {
                        className: i.title,
                        variant: "heading-xl/semibold",
                        children: r.intl.string(r.t["8O+nFx"]),
                    }),
                    (0, a.jsx)(s.olH, {
                        onClick: n,
                        className: i.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsx)(s.hzk, {
                className: i.content,
                children: (0, a.jsx)(s.Text, {
                    className: i.description,
                    variant: "text-md/normal",
                    children: r.intl.format(r.t.Zvx0Oz, { email: t }),
                }),
            }),
            (0, a.jsx)(s.hzk, {
                className: i.content,
                children: (0, a.jsx)(s.Text, {
                    className: i.tooltip,
                    variant: "text-sm/normal",
                    children: r.intl.string(r.t.yb7itb),
                }),
            }),
            (0, a.jsx)(s.mzw, {
                className: i.modalFooter,
                children: (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: i.__invalid_submit,
                    children: (0, a.jsx)(s.Button, {
                        variant: "primary",
                        text: r.intl.string(r.t.BddRzc),
                        onClick: n,
                    }),
                }),
            }),
        ],
    });
}
