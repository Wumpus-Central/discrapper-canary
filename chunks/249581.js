n.d(t, {
    A: () => h,
}),
    n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(927018),
    c = n(64585),
    u = n(906688),
    d = n(99761);
let p = (e) => {
    let { color: t } = e;
    return (0, r.jsxs)("svg", {
        width: "48",
        height: "28",
        viewBox: "0 0 55 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("rect", {
                x: "10.1968",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 10.1968 7)",
                className: d.__invalid_toastBG,
            }),
            (0, r.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: d.__invalid_toastBG,
            }),
            (0, r.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: d.__invalid_toastBG,
            }),
            (0, r.jsx)("rect", {
                x: "10.1968",
                y: "13",
                width: "6",
                height: "6",
                transform: "rotate(45 10.1968 13)",
                fill: t,
            }),
            (0, r.jsx)("path", {
                d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
                fill: t,
            }),
            (0, r.jsx)("rect", {
                x: "44.5903",
                y: "13",
                width: "6",
                height: "6",
                transform: "rotate(45 44.5903 13)",
                fill: t,
            }),
        ],
    });
};

function h(e) {
    let { achievement: t, unlocked: n } = e,
        { name: i, description: h, rarity: f, hideDescriptionUntilUnlock: g, onAction: m } = t,
        { color: b } = (0, o.ag)(f);
    l.useEffect(() => {
        let e = setTimeout(() => {
            c.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let A = null != m && n,
        y = A ? a.DUT : "div";
    return (0, r.jsxs)(y, {
        className: s()(d.kL, A && d.b),
        onClick: () => {
            A && m();
        },
        children: [
            (0, r.jsx)("div", {
                className: d.zc,
                children: (0, r.jsx)(u.A, {
                    achievementId: t.id,
                    size: u.A.Sizes.SIZE_40,
                    unlocked: n,
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.__invalid_nameContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: i(),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: g && !n ? "?????" : h(),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.Db,
                children: (0, r.jsx)(p, {
                    color: b,
                }),
            }),
        ],
    });
}
