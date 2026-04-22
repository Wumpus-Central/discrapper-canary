n.d(e, { default: () => m });
var i = n(627968),
    o = n(64700),
    a = n(935462),
    l = n(834730),
    s = n(975807),
    r = n(95035),
    d = n(400492),
    p = n(985018),
    c = n(872244);
let u = [
    { preBold: "That's pretty...", bold: "fly!" },
    { preBold: "On Point will make sure to", bold: " tick ", postBold: "a look at it!" },
    { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
];
function b(t) {
    let { punConfig: e } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [e.preBold, (0, i.jsx)("b", { children: (0, i.jsx)("i", { children: e.bold }) }), e.postBold],
    });
}
function m(t) {
    let { transitionState: e, onClose: n, asanaTask: m } = t;
    o.useEffect(() => {
        (0, d.Ak)("success", 0.1);
    }, []);
    let h = o.useRef(u[Math.floor(Math.random() * u.length)]).current;
    return (0, i.jsx)(a.EO, {
        "data-migration-pending": !0,
        className: c.Nk,
        transitionState: e,
        "aria-label": p.intl.string(p.t.mCCdwi),
        parentComponent: "BugReporterSubmitModal",
        children: (0, i.jsxs)(a.$m, {
            "data-migration-pending": !0,
            style: { overflow: "hidden", paddingRight: "0px" },
            className: c.jE,
            paddingFix: !1,
            children: [
                (0, i.jsx)(a.s_, {
                    "data-migration-pending": !0,
                    onClick: () => {
                        n?.();
                    },
                    className: c.b,
                }),
                (0, i.jsxs)(l.E, {
                    className: c.KP,
                    variant: "text-sm/normal",
                    children: [
                        "Thanks for submitting a ",
                        (0, i.jsx)(r.A, { onClick: () => (0, s.A)(m.permalink_url), children: "bug" }),
                        "!",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)(b, { punConfig: h }),
                    ],
                }),
            ],
        }),
    });
}
