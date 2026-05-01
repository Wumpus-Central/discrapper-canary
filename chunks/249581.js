n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(939249),
    o = n(834730),
    d = n(927018),
    c = n(64585),
    _ = n(906688),
    E = n(60828);
let u = (e) => {
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
                className: E.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: E.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: E.__invalid_toastBG,
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
function A(e) {
    let { achievement: t, unlocked: n } = e,
        { name: r, description: A, rarity: I, hideDescriptionUntilUnlock: T, onAction: h } = t,
        { color: S } = (0, d.ag)(I);
    a.useEffect(() => {
        let e = setTimeout(() => {
            c.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let N = null != h && n,
        f = N ? l.D : "div";
    return (0, i.jsxs)(f, {
        className: s()(E.kL, N && E.b),
        onClick: () => {
            N && h();
        },
        children: [
            (0, i.jsx)("div", {
                className: E.zc,
                children: (0, i.jsx)(_.A, { achievementId: t.id, size: _.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: E.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: r() }),
                    (0, i.jsx)(o.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: T && !n ? "?????" : A(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: E.Db, children: (0, i.jsx)(u, { color: S }) }),
        ],
    });
}
