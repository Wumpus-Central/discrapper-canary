n.d(t, { _: () => p, U: () => N });
var i = n(477900),
    l = n(582128),
    r = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(228366),
    d = n(927018),
    c = n(503698),
    u = n.n(c),
    A = n(939249),
    h = n(834730),
    E = n(64585),
    C = n(906688),
    g = n(857015);
function _(e) {
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
                className: g.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: g.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: g.__invalid_toastBG,
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
}
function T(e) {
    let { achievement: t, unlocked: n } = e,
        { name: r, description: s, rarity: a, hideDescriptionUntilUnlock: o, onAction: c } = t,
        { color: T } = (0, d.ag)(a);
    l.useEffect(() => {
        let e = setTimeout(() => {
            E.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let I = null != c && n,
        p = I ? A.D : "div";
    return (0, i.jsxs)(p, {
        className: u()(g.kL, I && g.b),
        onClick: function () {
            I && c();
        },
        children: [
            (0, i.jsx)("div", {
                className: g.zc,
                children: (0, i.jsx)(C.A, { achievementId: t.id, size: C.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: g.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: r() }),
                    (0, i.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: o && !n ? "?????" : s(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: g.Db, children: (0, i.jsx)(_, { color: T }) }),
        ],
    });
}
var I = n(375708);
function p(e) {
    o.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function N(e, t) {
    let n = (0, d.vM)(e);
    null != n &&
        (0, r.P0)(
            (0, s.o)(I.intl.string(I.t.MPpEUA), a.Ck.CUSTOM, {
                position: a.xJ.BOTTOM,
                component: (0, i.jsx)(T, { achievement: n, unlocked: t }),
                duration: 6e3,
            }),
        );
}
