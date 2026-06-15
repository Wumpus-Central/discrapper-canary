n.d(t, { _: () => p, U: () => S });
var i = n(627968),
    l = n(64700),
    r = n(691540),
    s = n(857250),
    o = n(97483),
    a = n(228366),
    d = n(927018),
    c = n(503698),
    u = n.n(c),
    h = n(939249),
    A = n(834730),
    E = n(64585),
    g = n(906688),
    C = n(60828);
let _ = (e) => {
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
                className: C.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: C.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: C.__invalid_toastBG,
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
function I(e) {
    let { achievement: t, unlocked: n } = e,
        { name: r, description: s, rarity: o, hideDescriptionUntilUnlock: a, onAction: c } = t,
        { color: I } = (0, d.ag)(o);
    l.useEffect(() => {
        let e = setTimeout(() => {
            E.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let T = null != c && n,
        p = T ? h.D : "div";
    return (0, i.jsxs)(p, {
        className: u()(C.kL, T && C.b),
        onClick: () => {
            T && c();
        },
        children: [
            (0, i.jsx)("div", {
                className: C.zc,
                children: (0, i.jsx)(g.A, { achievementId: t.id, size: g.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: C.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: r() }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: a && !n ? "?????" : s(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: C.Db, children: (0, i.jsx)(_, { color: I }) }),
        ],
    });
}
var T = n(375708);
function p(e) {
    a.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function S(e, t) {
    let n = (0, d.vM)(e);
    null != n &&
        (0, r.P0)(
            (0, s.o)(T.intl.string(T.t.MPpEUA), o.Ck.CUSTOM, {
                position: o.xJ.BOTTOM,
                component: (0, i.jsx)(I, { achievement: n, unlocked: t }),
                duration: 6e3,
            }),
        );
}
