n.d(t, { U: () => m, _: () => g });
var i = n(477900),
    r = n(582128),
    s = n(858899),
    l = n(73153),
    a = n(927018),
    o = n(503698),
    c = n.n(o),
    d = n(939249),
    u = n(834730),
    h = n(64585),
    C = n(906688),
    E = n(857015);
function A(e) {
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
}
function _(e) {
    let { achievement: t, unlocked: n } = e,
        { name: s, description: l, rarity: o, hideDescriptionUntilUnlock: _, onAction: p } = t,
        { color: g } = (0, a.ag)(o);
    r.useEffect(() => {
        let e = setTimeout(() => {
            h.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let m = null != p && n,
        T = m ? d.D : "div";
    return (0, i.jsxs)(T, {
        className: c()(E.kL, m && E.b),
        onClick: function () {
            m && p();
        },
        children: [
            (0, i.jsx)("div", {
                className: E.zc,
                children: (0, i.jsx)(C.A, { achievementId: t.id, size: C.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: E.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(u.E, { variant: "body-md/semibold", color: "text-strong", children: s() }),
                    (0, i.jsx)(u.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: _ && !n ? "?????" : l(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: E.Db, children: (0, i.jsx)(A, { color: g }) }),
        ],
    });
}
var p = n(792996);
function g(e) {
    l.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function m(e, t) {
    let n = (0, a.vM)(e);
    null != n &&
        (0, s.P0)({
            text: p.intl.string(p.t.MPpEUA),
            position: "bottom",
            duration: 6e3,
            __dangerouslyRenderContent: () => (0, i.jsx)(_, { achievement: n, unlocked: t }),
        });
}
