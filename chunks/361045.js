n.d(t, { n: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(688465),
    o = n(921944),
    s = n(388032),
    l = n(941246);
function c(e) {
    let { markAsDismissed: t, onCTA: c } = e;
    return (0, r.jsxs)("div", {
        className: l.popup,
        children: [
            (0, r.jsxs)("div", {
                className: l.background,
                children: [
                    (0, r.jsx)("div", { className: l.blur0 }),
                    (0, r.jsx)("div", { className: l.blur1 }),
                    (0, r.jsx)("div", { className: l.blur2 }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l.content,
                children: [
                    (0, r.jsx)(i.P3F, {
                        className: l.closeIcon,
                        onClick: () => t(o.L.USER_DISMISS),
                        children: (0, r.jsx)(i.Dio, {}),
                    }),
                    (0, r.jsx)("img", {
                        src: n(414190),
                        className: l.art,
                        alt: "",
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(i.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: l.heading,
                                children: [s.intl.string(s.t.MLt8Hx), (0, r.jsx)(a.Z, { className: l.betaTag })],
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: s.intl.string(s.t["l+lSLi"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(i.zxk, {
                        variant: "primary",
                        text: s.intl.string(s.t["9WdoBw"]),
                        fullWidth: !0,
                        onClick: () => {
                            t(o.L.TAKE_ACTION), c();
                        },
                    }),
                ],
            }),
        ],
    });
}
