var l = n(477900),
    a = n(582128),
    i = n(935462),
    r = n(834730),
    s = n(975807),
    o = n(95035),
    d = n(400492),
    c = n(792996),
    p = n(604017);
let u = [
    { preBold: "That's pretty...", bold: "fly!" },
    { preBold: "On Point will make sure to", bold: " tick ", postBold: "a look at it!" },
    { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
];
function h(e) {
    let { punConfig: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [t.preBold, (0, l.jsx)("b", { children: (0, l.jsx)("i", { children: t.bold }) }), t.postBold],
    });
}
n.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: n, asanaTask: m } = e;
            a.useEffect(() => {
                (0, d.Ak)("success", 0.1);
            }, []);
            let b = a.useRef(u[Math.floor(Math.random() * u.length)]).current;
            return (0, l.jsx)(i.EO, {
                "data-migration-pending": !0,
                className: p.Nk,
                transitionState: t,
                "aria-label": c.intl.string(c.t.mCCdwi),
                parentComponent: "BugReporterSubmitModal",
                children: (0, l.jsxs)(i.$m, {
                    "data-migration-pending": !0,
                    style: { overflow: "hidden", paddingRight: "0px" },
                    className: p.jE,
                    scrollbarGutter: !1,
                    children: [
                        (0, l.jsx)(i.s_, {
                            "data-migration-pending": !0,
                            onClick: function () {
                                n?.();
                            },
                            className: p.b,
                        }),
                        (0, l.jsxs)(r.E, {
                            className: p.KP,
                            variant: "body-sm/normal",
                            children: [
                                "Thanks for submitting a ",
                                (0, l.jsx)(o.A, { onClick: () => (0, s.A)(m.permalink_url), children: "bug" }),
                                "!",
                                (0, l.jsx)("br", {}),
                                (0, l.jsx)(h, { punConfig: b }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
