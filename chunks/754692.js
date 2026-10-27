n.d(t, { _: () => _, U: () => f });
var i = n(477900),
    s = n(582128),
    r = n(858899),
    l = n(73153),
    a = n(927018),
    o = n(503698),
    c = n.n(o),
    d = n(939249),
    u = n(834730),
    h = n(64585),
    C = n(906688),
    A = n(857015);
function g(e) {
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
}
function E(e) {
    let { achievement: t, unlocked: n } = e,
        { name: r, description: l, rarity: o, hideDescriptionUntilUnlock: E, onAction: p } = t,
        { color: _ } = (0, a.ag)(o);
    s.useEffect(() => {
        let e = setTimeout(() => {
            h.A.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let f = null != p && n,
        m = f ? d.D : "div";
    return (0, i.jsxs)(m, {
        className: c()(A.kL, f && A.b),
        onClick: function () {
            f && p();
        },
        children: [
            (0, i.jsx)("div", {
                className: A.zc,
                children: (0, i.jsx)(C.A, { achievementId: t.id, size: C.A.Sizes.SIZE_40, unlocked: n }),
            }),
            (0, i.jsxs)("div", {
                className: A.__invalid_nameContainer,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: r() }),
                    (0, i.jsx)(u.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: E && !n ? "?????" : l(),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: A.Db, children: (0, i.jsx)(g, { color: _ }) }),
        ],
    });
}
var p = n(105292);
function _(e) {
    l.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function f(e, t) {
    let n = (0, a.vM)(e);
    null != n &&
        (0, r.P0)({
            text: p.intl.string(p.t.MPpEUA),
            position: "bottom",
            duration: 6e3,
            __dangerouslyRenderContent: () => (0, i.jsx)(E, { achievement: n, unlocked: t }),
        });
}
