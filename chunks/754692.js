n.d(t, { _: () => T, U: () => I });
var i = n(477900),
    l = n(582128),
    r = n(858899),
    s = n(73153),
    a = n(927018),
    o = n(503698),
    d = n.n(o),
    c = n(939249),
    u = n(834730),
    A = n(64585),
    E = n(906688),
    h = n(857015);
function C(e) {
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
                className: h.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "27.3936",
                y: "0.59021",
                width: "23.4851",
                height: "23.4851",
                transform: "rotate(45 27.3936 0.59021)",
                className: h.__invalid_toastBG,
            }),
            (0, i.jsx)("rect", {
                x: "44.5903",
                y: "7",
                width: "14.4203",
                height: "14.4203",
                transform: "rotate(45 44.5903 7)",
                className: h.__invalid_toastBG,
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
function _(e) {
    let { achievement: t, unlocked: n } = e,
        { name: r, description: s, rarity: o, hideDescriptionUntilUnlock: _, onAction: g } = t,
        { color: T } = (0, a.ag)(o);
    l.useEffect(() => {
        let e = setTimeout(() => {
            A.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let I = null != g && n,
        p = I ? c.D : "div";
    return (0, i.jsxs)(p, {
        className: d()(h.kL, I && h.b),
        onClick: function () {
            I && g();
        },
        children: [
            (0, i.jsx)("div", {
                className: h.zc,
                children: (0, i.jsx)(E.A, { achievementId: t.id, size: E.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: h.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: r() }),
                    (0, i.jsx)(u.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: _ && !n ? "?????" : s(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: h.Db, children: (0, i.jsx)(C, { color: T }) }),
        ],
    });
}
var g = n(660183);
function T(e) {
    s.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function I(e, t) {
    let n = (0, a.vM)(e);
    null != n &&
        (0, r.P0)({
            text: g.intl.string(g.t.MPpEUA),
            position: "bottom",
            duration: 6e3,
            __dangerouslyRenderContent: () => (0, i.jsx)(_, { achievement: n, unlocked: t }),
        });
}
