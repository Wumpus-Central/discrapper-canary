n.d(t, { n: () => c });
var a = n(54381);
n(473749);
var l = n(481060),
    i = n(688465),
    r = n(921944),
    s = n(388032),
    o = n(941246);
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
                    (0, a.jsx)(l.P3F, {
                        className: o.closeIcon,
                        onClick: () => t(r.L.USER_DISMISS),
                        children: (0, a.jsx)(l.Dio, {}),
                    }),
                    (0, a.jsx)("img", {
                        src: n(414190),
                        className: o.art,
                        alt: "",
                    }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: o.heading,
                                children: [s.intl.string(s.t.MLt8H4), (0, a.jsx)(i.Z, { className: o.betaTag })],
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: s.intl.string(s.t["l+lSLp"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(l.Button, {
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
