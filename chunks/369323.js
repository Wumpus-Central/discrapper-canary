n.d(t, { default: () => m });
var i = n(627968),
    a = n(64700),
    l = n(935462),
    s = n(834730),
    r = n(975807),
    o = n(95035),
    d = n(400492),
    c = n(375708),
    p = n(872244);
let u = [
    { preBold: "That's pretty...", bold: "fly!" },
    { preBold: "On Point will make sure to", bold: " tick ", postBold: "a look at it!" },
    { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
];
function h(e) {
    let { punConfig: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [t.preBold, (0, i.jsx)("b", { children: (0, i.jsx)("i", { children: t.bold }) }), t.postBold],
    });
}
function m(e) {
    let { transitionState: t, onClose: n, asanaTask: m } = e;
    a.useEffect(() => {
        (0, d.Ak)("success", 0.1);
    }, []);
    let g = a.useRef(u[Math.floor(Math.random() * u.length)]).current;
    return (0, i.jsx)(l.EO, {
        "data-migration-pending": !0,
        className: p.Nk,
        transitionState: t,
        "aria-label": c.intl.string(c.t.mCCdwi),
        parentComponent: "BugReporterSubmitModal",
        children: (0, i.jsxs)(l.$m, {
            "data-migration-pending": !0,
            style: { overflow: "hidden", paddingRight: "0px" },
            className: p.jE,
            paddingFix: !1,
            children: [
                (0, i.jsx)(l.s_, {
                    "data-migration-pending": !0,
                    onClick: function () {
                        n?.();
                    },
                    className: p.b,
                }),
                (0, i.jsxs)(s.E, {
                    className: p.KP,
                    variant: "text-sm/normal",
                    children: [
                        "Thanks for submitting a ",
                        (0, i.jsx)(o.A, { onClick: () => (0, r.A)(m.permalink_url), children: "bug" }),
                        "!",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)(h, { punConfig: g }),
                    ],
                }),
            ],
        }),
    });
}
