n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(927018),
    d = n(64585),
    c = n(906688),
    u = n(212963);
let A = (e) => {
    let { color: t } = e;
    return (0, i.jsxs)("svg", {
        width: "48",
        height: "28",
        viewBox: "0 0 55 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("rect", {
                x: "10.1968",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 10.1968 7)",
                className: u.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: u.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: u.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "10.1968",
                y: "13",
                width: "6",
                height: "6",
                transform: "rotate(45 10.1968 13)",
                fill: t,
            }),
            (0, i.jsx)("path", {
                d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
                fill: t,
            }),
            (0, i.jsx)("rect", {
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
        { name: l, description: h, rarity: _, hideDescriptionUntilUnlock: m, onAction: p } = t,
        { color: g } = (0, o.ag)(_);
    r.useEffect(() => {
        let e = setTimeout(() => {
            d.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let E = null != p && n,
        I = E ? s.DUT : "div";
    return (0, i.jsxs)(I, {
        className: a()(u.kL, E && u.b),
        onClick: () => {
            E && p();
        },
        children: [
            (0, i.jsx)("div", {
                className: u.zc,
                children: (0, i.jsx)(c.A, { achievementId: t.id, size: c.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: u.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(s.Text, { variant: "text-md/semibold", color: "text-strong", children: l() }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: m && !n ? "?????" : h(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: u.Db, children: (0, i.jsx)(A, { color: g }) }),
        ],
    });
}
