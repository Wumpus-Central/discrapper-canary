"use strict";
n.d(t, { _: () => I, U: () => T });
var i = n(627968),
    r = n(64700),
    s = n(691540),
    a = n(857250),
    o = n(97483),
    l = n(228366),
    u = n(927018),
    c = n(503698),
    d = n.n(c),
    _ = n(939249),
    f = n(834730),
    h = n(64585),
    p = n(906688),
    E = n(60828);
let m = (e) => {
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
function g(e) {
    let { achievement: t, unlocked: n } = e,
        { name: s, description: a, rarity: o, hideDescriptionUntilUnlock: l, onAction: c } = t,
        { color: g } = (0, u.ag)(o);
    r.useEffect(() => {
        let e = setTimeout(() => {
            h.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let A = null != c && n,
        I = A ? _.D : "div";
    return (0, i.jsxs)(I, {
        className: d()(E.kL, A && E.b),
        onClick: () => {
            A && c();
        },
        children: [
            (0, i.jsx)("div", {
                className: E.zc,
                children: (0, i.jsx)(p.A, { achievementId: t.id, size: p.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: E.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(f.E, { variant: "text-md/semibold", color: "text-strong", children: s() }),
                    (0, i.jsx)(f.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: l && !n ? "?????" : a(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: E.Db, children: (0, i.jsx)(m, { color: g }) }),
        ],
    });
}
var A = n(375708);
function I(e) {
    l.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function T(e, t) {
    let n = (0, u.vM)(e);
    null != n &&
        (0, s.P0)(
            (0, a.o)(A.intl.string(A.t.MPpEUA), o.Ck.CUSTOM, {
                position: o.xJ.BOTTOM,
                component: (0, i.jsx)(g, { achievement: n, unlocked: t }),
                duration: 6e3,
            }),
        );
}
