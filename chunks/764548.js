t.d(i, { A: () => m });
var l = t(627968),
    n = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(462887),
    u = t(834730),
    d = t(781696),
    E = t(736653),
    c = t(573435),
    o = t(714991),
    I = t(776231),
    _ = t(486020),
    f = t(240248),
    A = t(375708),
    S = t(324313),
    h = t(937495),
    T = t(517061);
let g = [16, 16, 14, 14, 12, 10, 8],
    m = function (e) {
        let {
                guild: i,
                disabled: t,
                small: r,
                loading: m = !1,
                description: C,
                memberCount: N,
                presenceCount: D,
                className: L,
            } = e,
            R = (0, E.Ay)(),
            [y, p] = n.useState(!1);
        if (null == i || m) return (0, l.jsx)("div", { className: s()(L, S.Nr, S.En, { [S.ax]: r, [S.HI]: t }) });
        let { name: G } = i,
            v =
                null != i.discoverySplash && /^data:/.test(i.discoverySplash)
                    ? i.discoverySplash
                    : _.Ay.getGuildDiscoverySplashURL({ id: i.id, splash: i.discoverySplash, size: 240 * (0, I.mZ)() }),
            P = (0, a.M)(R) ? h : T,
            O = _.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 40 }) ?? void 0,
            V = null != i.description ? i.description : C,
            x = null != N ? N : i?.memberCount,
            F = null != D ? D : i?.presenceCount,
            j = null;
        if (null != O) j = (0, l.jsx)("img", { src: O, alt: "", className: S.my });
        else {
            let e = (0, f.oN)(i.name);
            j = (0, l.jsx)("div", {
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
            className: s()(L, S.Nr, { [S.ax]: r, [S.HI]: t, [S.TS]: y }),
            children: [
                (0, l.jsxs)("div", {
                    className: S.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: S.Yi,
                            children: (0, l.jsx)("img", {
                                src: null != v ? v : P,
                                alt: "",
                                className: S.j0,
                                onLoad: () => p(!0),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: S.$f,
                            children: (0, l.jsx)(c.Ay, {
                                mask: c.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: S.SA,
                                    children: (0, l.jsx)(c.Ay, {
                                        mask: c.Ay.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != j ? j : null,
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
                                (0, l.jsx)(o.A, { className: S.w$, guild: i, tooltipColor: d.ST.Colors.PRIMARY }),
                                (0, l.jsx)(u.E, {
                                    className: S.J5,
                                    variant: "text-md/normal",
                                    children: (0, l.jsx)("span", { children: G }),
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
                                children: V,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: S.Fj,
                            children: [
                                null != F &&
                                    (0, l.jsxs)(u.E, {
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        className: S.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: S.JX }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                children: r
                                                    ? A.intl.formatToPlainString(A.t.YMor7k, { count: F })
                                                    : A.intl.formatToPlainString(A.t["LC+S+m"], { membersOnline: F }),
                                            }),
                                        ],
                                    }),
                                null != x &&
                                    (0, l.jsxs)(u.E, {
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        className: S.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: S.Li }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                children: r
                                                    ? A.intl.formatToPlainString(A.t.YMor7k, { count: x })
                                                    : A.intl.formatToPlainString(A.t.zRl6XR, { count: x }),
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
