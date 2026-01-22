a.d(t, {
    default: () => u,
});
var n = a(627968),
    i = a(64700),
    l = a(397927),
    s = a(975807),
    d = a(95035),
    r = a(400492),
    o = a(985018),
    p = a(654923);
let c = [
    {
        preBold: "That's pretty...",
        bold: "fly!",
    },
    {
        preBold: "On Point will make sure to",
        bold: " tick ",
        postBold: "a look at it!",
    },
    {
        preBold: "You're...un",
        bold: "bee ",
        postBold: "lievable!",
    },
];

function b(e) {
    let { punConfig: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t.preBold,
            (0, n.jsx)("b", {
                children: (0, n.jsx)("i", {
                    children: t.bold,
                }),
            }),
            t.postBold,
        ],
    });
}

function u(e) {
    let { transitionState: t, onClose: a, asanaTask: u } = e;
    i.useEffect(() => {
        (0, r.Ak)("success", 0.1);
    }, []);
    let h = i.useRef(c[Math.floor(Math.random() * c.length)]).current;
    return (0, n.jsx)(l.EOs, {
        "data-migration-pending": !0,
        className: p.Nk,
        transitionState: t,
        "aria-label": o.intl.string(o.t.mCCdwi),
        parentComponent: "BugReporterSubmitModal",
        children: (0, n.jsxs)(l.$mQ, {
            "data-migration-pending": !0,
            style: {
                overflow: "hidden",
                paddingRight: "0px",
            },
            className: p.jE,
            paddingFix: !1,
            children: [
                (0, n.jsx)(l.s_y, {
                    "data-migration-pending": !0,
                    onClick: () => {
                        null == a || a();
                    },
                    className: p.b,
                }),
                (0, n.jsxs)(l.Text, {
                    className: p.KP,
                    variant: "text-sm/normal",
                    children: [
                        "Thanks for submitting a ",
                        (0, n.jsx)(d.A, {
                            onClick: () => (0, s.A)(u.permalink_url),
                            children: "bug",
                        }),
                        "!",
                        (0, n.jsx)("br", {}),
                        (0, n.jsx)(b, {
                            punConfig: h,
                        }),
                    ],
                }),
            ],
        }),
    });
}
