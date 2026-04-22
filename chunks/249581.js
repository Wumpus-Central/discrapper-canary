n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(939249),
    o = n(834730),
    d = n(927018),
    u = n(64585),
    c = n(906688),
    A = n(60828);
let h = (e) => {
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
                className: A.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: A.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: A.__invalid_toastBG,
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
function _(e) {
    let { achievement: t, unlocked: n } = e,
        { name: a, description: _, rarity: E, hideDescriptionUntilUnlock: p, onAction: m } = t,
        { color: g } = (0, d.ag)(E);
    r.useEffect(() => {
        let e = setTimeout(() => {
            u.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let I = null != m && n,
        C = I ? s.D : "div";
    return (0, i.jsxs)(C, {
        className: l()(A.kL, I && A.b),
        onClick: () => {
            I && m();
        },
        children: [
            (0, i.jsx)("div", {
                className: A.zc,
                children: (0, i.jsx)(c.A, { achievementId: t.id, size: c.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: A.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: a() }),
                    (0, i.jsx)(o.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: p && !n ? "?????" : _(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: A.Db, children: (0, i.jsx)(h, { color: g }) }),
        ],
    });
}
