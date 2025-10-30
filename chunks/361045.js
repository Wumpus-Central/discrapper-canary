n.d(t, { n: () => c });
var a = n(951288);
n(647438);
var r = n(481060),
    l = n(688465),
    i = n(921944),
    o = n(388032),
    s = n(509353);
function c(e) {
    let { markAsDismissed: t, onCTA: c } = e;
    return (0, a.jsxs)("div", {
        className: s.popup,
        children: [
            (0, a.jsxs)("div", {
                className: s.background,
                children: [
                    (0, a.jsx)("div", { className: s.blur0 }),
                    (0, a.jsx)("div", { className: s.blur1 }),
                    (0, a.jsx)("div", { className: s.blur2 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: s.content,
                children: [
                    (0, a.jsx)(r.P3F, {
                        className: s.closeIcon,
                        onClick: () => t(i.L.USER_DISMISS),
                        children: (0, a.jsx)(r.Dio, {}),
                    }),
                    (0, a.jsx)("img", {
                        src: n(414190),
                        className: s.art,
                        alt: "",
                    }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)(r.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: s.heading,
                                children: [o.intl.string(o.t.MLt8H4), (0, a.jsx)(l.Z, { className: s.betaTag })],
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: o.intl.string(o.t["l+lSLp"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(r.Button, {
                        variant: "primary",
                        text: o.intl.string(o.t["9WdoB+"]),
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
