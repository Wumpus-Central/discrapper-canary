n.d(t, { n: () => c });
var a = n(951288);
n(647438);
var i = n(481060),
    l = n(688465),
    r = n(921944),
    s = n(388032),
    o = n(29114);
function c(e) {
    let { markAsDismissed: t, onCTA: c } = e;
    return (0, a.jsxs)("div", {
        className: o.popup,
        children: [
            (0, a.jsxs)("div", {
                className: o.background,
                children: [
                    (0, a.jsx)("div", { className: o.blur0 }),
                    (0, a.jsx)("div", { className: o.blur1 }),
                    (0, a.jsx)("div", { className: o.blur2 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: o.content,
                children: [
                    (0, a.jsx)(i.P3F, {
                        className: o.closeIcon,
                        onClick: () => t(r.L.USER_DISMISS),
                        children: (0, a.jsx)(i.Dio, {}),
                    }),
                    (0, a.jsx)("img", {
                        src: n(414190),
                        className: o.art,
                        alt: "",
                    }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)(i.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: o.heading,
                                children: [s.intl.string(s.t.MLt8H4), (0, a.jsx)(l.Z, { className: o.betaTag })],
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: s.intl.string(s.t["l+lSLp"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(i.Button, {
                        variant: "primary",
                        text: s.intl.string(s.t["9WdoB+"]),
                        fullWidth: !0,
                        onClick: () => {
                            t(r.L.TAKE_ACTION), c();
                        },
                    }),
                ],
            }),
        ],
    });
}
