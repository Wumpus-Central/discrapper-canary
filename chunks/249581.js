n.d(t, { A: () => _ }), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(927018),
    c = n(64585),
    u = n(906688),
    d = n(99761);
let f = (e) => {
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
    },
    p = 50;
function _(e) {
    let { achievement: t, unlocked: n } = e,
        { name: a, description: _, rarity: h, hideDescriptionUntilUnlock: m, onAction: g } = t,
        { color: E } = (0, l.ag)(h);
    i.useEffect(() => {
        let e = setTimeout(() => {
            c.A.playAchievementUnlockSound();
        }, p);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let b = null != g && n,
        y = () => {
            b && g();
        },
        O = b ? o.DUT : "div";
    return (0, r.jsxs)(O, {
        className: s()(d.kL, b && d.b),
        onClick: y,
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
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: a(),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: m && !n ? "?????" : _(),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.Db,
                children: (0, r.jsx)(f, { color: E }),
            }),
        ],
    });
}
