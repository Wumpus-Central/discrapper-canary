t.d(i, { A: () => m });
var l = t(627968),
    n = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(582754),
    u = t(397927),
    d = t(736653),
    E = t(573435),
    o = t(714991),
    c = t(776231),
    I = t(486020),
    _ = t(240248),
    f = t(985018),
    A = t(551689),
    S = t(937495),
    T = t(517061);
let h = [16, 16, 14, 14, 12, 10, 8],
    m = function (e) {
        let {
                guild: i,
                disabled: t,
                small: r,
                loading: m = !1,
                description: g,
                memberCount: C,
                presenceCount: R,
                className: N,
            } = e,
            D = (0, d.Ay)(),
            [L, y] = n.useState(!1);
        if (null == i || m) return (0, l.jsx)("div", { className: s()(N, A.Nr, A.En, { [A.ax]: r, [A.HI]: t }) });
        let { name: p } = i,
            v =
                null != i.discoverySplash && /^data:/.test(i.discoverySplash)
                    ? i.discoverySplash
                    : I.Ay.getGuildDiscoverySplashURL({ id: i.id, splash: i.discoverySplash, size: 240 * (0, c.mZ)() }),
            G = (0, a.Mw)(D) ? S : T,
            F = I.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 40 }) ?? void 0,
            P = null != i.description ? i.description : g,
            O = null != C ? C : i?.memberCount,
            V = null != R ? R : i?.presenceCount,
            x = null;
        if (null != F) x = (0, l.jsx)("img", { src: F, alt: "", className: A.my });
        else {
            let e = (0, _.oN)(i.name);
            x = (0, l.jsx)("div", {
                className: A.DE,
                children: (0, l.jsx)(u.Text, {
                    className: A.q9,
                    style: { fontSize: h[e.length] ?? h[h.length - 1] },
                    variant: "text-sm/normal",
                    children: e,
                }),
            });
        }
        return (0, l.jsxs)("div", {
            className: s()(N, A.Nr, { [A.ax]: r, [A.HI]: t, [A.TS]: L }),
            children: [
                (0, l.jsxs)("div", {
                    className: A.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: A.Yi,
                            children: (0, l.jsx)("img", {
                                src: null != v ? v : G,
                                alt: "",
                                className: A.j0,
                                onLoad: () => y(!0),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: A.$f,
                            children: (0, l.jsx)(E.Ay, {
                                mask: E.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: A.SA,
                                    children: (0, l.jsx)(E.Ay, {
                                        mask: E.Ay.Masks.SQUIRCLE,
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
                    className: A.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: A.DD,
                            children: [
                                (0, l.jsx)(o.A, { className: A.w$, guild: i, tooltipColor: u.STz.Colors.PRIMARY }),
                                (0, l.jsx)(u.Text, {
                                    className: A.J5,
                                    variant: "text-md/normal",
                                    children: (0, l.jsx)("span", { children: p }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: A.iQ,
                            children: (0, l.jsx)(u.Text, {
                                lineClamp: 3,
                                className: A.h_,
                                variant: "text-sm/normal",
                                tag: "span",
                                children: P,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: A.Fj,
                            children: [
                                null != V &&
                                    (0, l.jsxs)("div", {
                                        className: A.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: A.JX }),
                                            (0, l.jsx)(u.Text, {
                                                variant: "text-xs/normal",
                                                children: r
                                                    ? f.intl.formatToPlainString(f.t.YMor7k, { count: V })
                                                    : f.intl.formatToPlainString(f.t["LC+S+m"], { membersOnline: V }),
                                            }),
                                        ],
                                    }),
                                null != O &&
                                    (0, l.jsxs)("div", {
                                        className: A.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: A.Li }),
                                            (0, l.jsx)(u.Text, {
                                                variant: "text-xs/normal",
                                                children: r
                                                    ? f.intl.formatToPlainString(f.t.YMor7k, { count: O })
                                                    : f.intl.formatToPlainString(f.t.zRl6XR, { count: O }),
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
