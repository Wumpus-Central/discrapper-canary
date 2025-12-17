n.d(t, { n: () => c });
var a = n(54381);
n(473749);
var r = n(481060),
    l = n(688465),
    i = n(921944),
    s = n(388032),
    o = n(506812);
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
                    (0, a.jsx)(r.P3F, {
                        className: o.closeIcon,
                        onClick: () => t(i.L.USER_DISMISS),
                        children: (0, a.jsx)(r.Dio, {}),
                    }),
                    (0, a.jsx)("img", {
                        src: n(414190),
                        className: o.art,
                        alt: "",
                    }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)(r.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: o.heading,
                                children: [s.intl.string(s.t.MLt8H4), (0, a.jsx)(l.Z, { className: o.betaTag })],
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: s.intl.string(s.t["l+lSLp"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(r.Button, {
                        variant: "primary",
                        text: s.intl.string(s.t["9WdoB+"]),
                        fullWidth: !0,
                        onClick: () => {
                            t(i.L.TAKE_ACTION), c();
                        },
                    }),
                ],
            }),
        ],
    });
}
