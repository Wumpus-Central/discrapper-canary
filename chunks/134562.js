n.d(t, { Z: () => o }), n(953529);
var a = n(951288);
n(647438);
var s = n(481060),
    r = n(308569),
    i = n(388032),
    l = n(780187);
function o(e) {
    let { onNext: t, onClose: n } = e;
    return (0, a.jsxs)("form", {
        onSubmit: t,
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: l.header,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/extrabold",
                        children: i.intl.string(i.t.hhR7gY),
                    }),
                    (0, a.jsx)(s.olH, {
                        onClick: n,
                        className: l.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)(s.hzk, {
                className: l.content,
                children: [
                    (0, a.jsx)(s.Text, {
                        className: l.description,
                        variant: "text-md/normal",
                        children: i.intl.format(i.t.rqWXUV, { hcArticle: r.j1 }),
                    }),
                    (0, a.jsx)(s.Text, {
                        className: l.description,
                        variant: "text-md/normal",
                        children: i.intl.string(i.t["3LW10N"]),
                    }),
                ],
            }),
            (0, a.jsx)(s.mzw, {
                className: l.modalFooter,
                children: (0, a.jsxs)(s.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, a.jsx)(s.Button, {
                            variant: "primary",
                            text: i.intl.string(i.t["ETE/oK"]),
                            onClick: n,
                        }),
                        (0, a.jsx)(s.Button, {
                            variant: "secondary",
                            text: i.intl.string(i.t.rwTBFh),
                            onClick: t,
                        }),
                    ],
                }),
            }),
        ],
    });
}
