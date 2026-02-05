n.d(e, { default: () => b });
var i = n(627968),
    o = n(64700),
    a = n(397927),
    l = n(975807),
    s = n(95035),
    r = n(400492),
    d = n(985018),
    p = n(654923);
let c = [
    { preBold: "That's pretty...", bold: "fly!" },
    { preBold: "On Point will make sure to", bold: " tick ", postBold: "a look at it!" },
    { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
];
function u(t) {
    let { punConfig: e } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [e.preBold, (0, i.jsx)("b", { children: (0, i.jsx)("i", { children: e.bold }) }), e.postBold],
    });
}
function b(t) {
    let { transitionState: e, onClose: n, asanaTask: b } = t;
    o.useEffect(() => {
        (0, r.Ak)("success", 0.1);
    }, []);
    let m = o.useRef(c[Math.floor(Math.random() * c.length)]).current;
    return (0, i.jsx)(a.EOs, {
        "data-migration-pending": !0,
        className: p.Nk,
        transitionState: e,
        "aria-label": d.intl.string(d.t.mCCdwi),
        parentComponent: "BugReporterSubmitModal",
        children: (0, i.jsxs)(a.$mQ, {
            "data-migration-pending": !0,
            style: { overflow: "hidden", paddingRight: "0px" },
            className: p.jE,
            paddingFix: !1,
            children: [
                (0, i.jsx)(a.s_y, {
                    "data-migration-pending": !0,
                    onClick: () => {
                        n?.();
                    },
                    className: p.b,
                }),
                (0, i.jsxs)(a.Text, {
                    className: p.KP,
                    variant: "text-sm/normal",
                    children: [
                        "Thanks for submitting a ",
                        (0, i.jsx)(s.A, { onClick: () => (0, l.A)(b.permalink_url), children: "bug" }),
                        "!",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)(u, { punConfig: m }),
                    ],
                }),
            ],
        }),
    });
}
