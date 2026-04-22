t.d(i, { A: () => m });
var l = t(627968),
    n = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(462887),
    u = t(834730),
    d = t(781696),
    E = t(736653),
    o = t(573435),
    c = t(714991),
    I = t(776231),
    _ = t(486020),
    f = t(240248),
    A = t(985018),
    S = t(324313),
    T = t(937495),
    h = t(517061);
let g = [16, 16, 14, 14, 12, 10, 8],
    m = function (e) {
        let {
                guild: i,
                disabled: t,
                small: r,
                loading: m = !1,
                description: C,
                memberCount: R,
                presenceCount: N,
                className: D,
            } = e,
            L = (0, E.Ay)(),
            [p, y] = n.useState(!1);
        if (null == i || m) return (0, l.jsx)("div", { className: s()(D, S.Nr, S.En, { [S.ax]: r, [S.HI]: t }) });
        let { name: v } = i,
            G =
                null != i.discoverySplash && /^data:/.test(i.discoverySplash)
                    ? i.discoverySplash
                    : _.Ay.getGuildDiscoverySplashURL({ id: i.id, splash: i.discoverySplash, size: 240 * (0, I.mZ)() }),
            F = (0, a.M)(L) ? T : h,
            P = _.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 40 }) ?? void 0,
            O = null != i.description ? i.description : C,
            V = null != R ? R : i?.memberCount,
            M = null != N ? N : i?.presenceCount,
            x = null;
        if (null != P) x = (0, l.jsx)("img", { src: P, alt: "", className: S.my });
        else {
            let e = (0, f.oN)(i.name);
            x = (0, l.jsx)("div", {
                className: S.DE,
                children: (0, l.jsx)(u.E, {
                    className: S.q9,
                    style: { fontSize: g[e.length] ?? g[g.length - 1] },
                    variant: "text-sm/normal",
                    children: e,
                }),
            });
        }
        return (0, l.jsxs)("div", {
            className: s()(D, S.Nr, { [S.ax]: r, [S.HI]: t, [S.TS]: p }),
            children: [
                (0, l.jsxs)("div", {
                    className: S.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: S.Yi,
                            children: (0, l.jsx)("img", {
                                src: null != G ? G : F,
                                alt: "",
                                className: S.j0,
                                onLoad: () => y(!0),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: S.$f,
                            children: (0, l.jsx)(o.Ay, {
                                mask: o.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: S.SA,
                                    children: (0, l.jsx)(o.Ay, {
                                        mask: o.Ay.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != x ? x : null,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: S.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: S.DD,
                            children: [
                                (0, l.jsx)(c.A, { className: S.w$, guild: i, tooltipColor: d.ST.Colors.PRIMARY }),
                                (0, l.jsx)(u.E, {
                                    className: S.J5,
                                    variant: "text-md/normal",
                                    children: (0, l.jsx)("span", { children: v }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: S.iQ,
                            children: (0, l.jsx)(u.E, {
                                lineClamp: 3,
                                className: S.h_,
                                variant: "text-sm/normal",
                                tag: "span",
                                children: O,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: S.Fj,
                            children: [
                                null != M &&
                                    (0, l.jsxs)("div", {
                                        className: S.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: S.JX }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                children: r
                                                    ? A.intl.formatToPlainString(A.t.YMor7k, { count: M })
                                                    : A.intl.formatToPlainString(A.t["LC+S+m"], { membersOnline: M }),
                                            }),
                                        ],
                                    }),
                                null != V &&
                                    (0, l.jsxs)("div", {
                                        className: S.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: S.Li }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                children: r
                                                    ? A.intl.formatToPlainString(A.t.YMor7k, { count: V })
                                                    : A.intl.formatToPlainString(A.t.zRl6XR, { count: V }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
