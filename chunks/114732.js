n.d(t, { Z: () => u });
var a = n(951288);
n(647438);
var r = n(780384),
    o = n(481060),
    i = n(410030),
    s = n(388032),
    d = n(597412),
    l = n(167969),
    c = n(557256);
let u = function (e) {
    let { onClose: t } = e,
        n = (0, i.ZP)(),
        u = (0, r.wj)(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: d.header,
                children: [
                    (0, a.jsx)("img", {
                        alt: "",
                        className: d.headerImage,
                        src: u ? l : c,
                    }),
                    (0, a.jsx)(o.Heading, {
                        className: d.title,
                        variant: "heading-xl/medium",
                        children: s.intl.string(s.t["tWYWJ+"]),
                    }),
                    (0, a.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        onClick: t,
                        className: d.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsx)(o.hzk, {
                "data-migration-pending": !0,
                className: d.content,
                scrollbarType: "none",
                children: (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: s.intl.string(s.t.JNQRU4),
                }),
            }),
            (0, a.jsx)(o.mzw, {
                "data-migration-pending": !0,
                className: d.modalFooter,
                children: (0, a.jsx)(o.Button, {
                    variant: "primary",
                    text: s.intl.string(s.t.cpT0Cq),
                    onClick: t,
                }),
            }),
        ],
    });
};
