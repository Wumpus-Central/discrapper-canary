i.d(t, { A: () => C });
var n = i(627968),
    r = i(64700),
    l = i(503698),
    a = i.n(l),
    s = i(397927),
    o = i(927018),
    c = i(64585),
    d = i(906688),
    u = i(99761);
let h = (e) => {
    let { color: t } = e;
    return (0, n.jsxs)("svg", {
        width: "48",
        height: "28",
        viewBox: "0 0 55 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, n.jsx)("rect", {
                x: "10.1968",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 10.1968 7)",
                className: u.__invalid_toastBG,
            }),
            (0, n.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: u.__invalid_toastBG,
            }),
            (0, n.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: u.__invalid_toastBG,
            }),
            (0, n.jsx)("rect", {
                x: "10.1968",
                y: "13",
                width: "6",
                height: "6",
                transform: "rotate(45 10.1968 13)",
                fill: t,
            }),
            (0, n.jsx)("path", {
                d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
                fill: t,
            }),
            (0, n.jsx)("rect", {
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
function C(e) {
    let { achievement: t, unlocked: i } = e,
        { name: l, description: C, rarity: E, hideDescriptionUntilUnlock: g, onAction: A } = t,
        { color: _ } = (0, o.ag)(E);
    r.useEffect(() => {
        let e = setTimeout(() => {
            c.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let p = null != A && i,
        m = p ? s.DUT : "div";
    return (0, n.jsxs)(m, {
        className: a()(u.kL, p && u.b),
        onClick: () => {
            p && A();
        },
        children: [
            (0, n.jsx)("div", {
                className: u.zc,
                children: (0, n.jsx)(d.A, { achievementId: t.id, size: d.A.Sizes.SIZE_40, unlocked: i }),
            }),
            (0, n.jsxs)("div", {
                className: u.__invalid_nameContainer,
                children: [
                    (0, n.jsx)(s.Text, { variant: "text-md/semibold", color: "text-strong", children: l() }),
                    (0, n.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: g && !i ? "?????" : C(),
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: u.Db, children: (0, n.jsx)(h, { color: _ }) }),
        ],
    });
}
