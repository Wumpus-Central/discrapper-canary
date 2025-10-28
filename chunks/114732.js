t.d(n, { Z: () => u });
var a = t(951288);
t(647438);
var o = t(780384),
    r = t(481060),
    i = t(410030),
    l = t(388032),
    s = t(597412),
    d = t(167969),
    c = t(557256);
let u = function (e) {
    let { onClose: n } = e,
        t = (0, i.ZP)(),
        u = (0, o.wj)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(r.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: s.header,
                children: [
                    (0, a.jsx)("img", {
                        alt: "",
                        className: s.headerImage,
                        src: u ? d : c,
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: s.title,
                        variant: "heading-xl/medium",
                        children: l.intl.string(l.t["tWYWJ+"]),
                    }),
                    (0, a.jsx)(r.olH, {
                        "data-migration-pending": !0,
                        onClick: n,
                        className: s.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsx)(r.hzk, {
                "data-migration-pending": !0,
                className: s.content,
                scrollbarType: "none",
                children: (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: l.intl.string(l.t.JNQRU4),
                }),
            }),
            (0, a.jsx)(r.mzw, {
                "data-migration-pending": !0,
                className: s.modalFooter,
                children: (0, a.jsx)(r.Button, {
                    variant: "primary",
                    text: l.intl.string(l.t.cpT0Cq),
                    onClick: n,
                }),
            }),
        ],
    });
};
