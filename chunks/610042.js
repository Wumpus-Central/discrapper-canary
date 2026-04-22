n.d(e, { y: () => A });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    a = n(194261),
    c = n(847374),
    d = n(900797),
    o = n(990078),
    u = n(785007),
    b = n(939249),
    g = n(140735),
    x = n(834730),
    f = n(477947),
    h = n(81461),
    m = n(342490),
    j = n(743981),
    p = n(116112),
    C = n(985018),
    S = n(152945),
    N = n(15137);
function k(t) {
    let { badge: e, isSelected: n, onClick: l } = t,
        r = (0, u.Gx)({ isSelected: n, label: (0, f.A)(e.kind) });
    return (0, s.jsx)(v, { badge: e, selected: n, onClick: l, radioProps: r });
}
function v(t) {
    let { badge: e, locked: n = !1, preview: l = !1, selected: r = !1, onClick: c, radioProps: d } = t,
        u = i()(N.Uh, { [N.fT]: r, [S.av]: n, [S.WZ]: l }),
        g = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(h.J, { badge: e.kind, width: j.Sl.SIZE_32, height: j.Sl.SIZE_32, className: S.n2 }),
                n && !l && (0, s.jsx)("div", { className: S.py, children: (0, s.jsx)(a.X, { size: "md" }) }),
            ],
        });
    if (l) return (0, s.jsx)("div", { className: u, children: g });
    if (n && null != e.packName && "" !== e.packName) {
        let t = C.intl.formatToPlainString(p.default.ECl8SQ, { packName: e.packName });
        return (0, s.jsx)(o.m, {
            delay: 100,
            text: t,
            "aria-label": t,
            children: (0, s.jsx)(b.D, {
                className: u,
                onClick: () => {
                    c?.();
                },
                children: g,
            }),
        });
    }
    return (0, s.jsx)(b.D, { ...d, className: u, onClick: c, children: g });
}
function A(t) {
    let { badgeCollection: e, handleBoostUpsellClick: n, selectedBadge: r, onBadgeClicked: a, headingId: o } = t,
        [f, h] = l.useState(!1),
        j = l.useId(),
        A = (0, u._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: o }),
        E = !f && e.lockedBadges.length > 0;
    return (0, s.jsxs)("div", {
        className: S.zr,
        children: [
            (0, s.jsx)(g.A, { id: j, children: C.intl.string(C.t["5AQGuZ"]) }),
            (0, s.jsx)("div", {
                ...A,
                "aria-describedby": j,
                className: N.p3,
                children: e.unlockedBadges.map((t) =>
                    (0, s.jsx)(k, { badge: t, isSelected: t.kind === r, onClick: () => a(t.kind) }, t.kind),
                ),
            }),
            f &&
                (0, s.jsx)("ul", {
                    className: i()(N.p3, S.wA),
                    children: e.lockedBadges.map((t) =>
                        (0, s.jsx)(
                            "li",
                            { children: (0, s.jsx)(v, { locked: !0, badge: t, onClick: () => n?.() }) },
                            t.kind,
                        ),
                    ),
                }),
            E &&
                (0, s.jsxs)("div", {
                    className: S.WC,
                    children: [
                        (0, s.jsx)("div", {
                            className: N.p3,
                            children: e.lockedBadges
                                .slice(0, 5)
                                .map((t) => (0, s.jsx)(v, { locked: !0, preview: !0, badge: t }, t.kind)),
                        }),
                        (0, s.jsxs)(b.D, {
                            className: i()(S.ZN, S.n7),
                            onClick: () => h(!0),
                            children: [
                                (0, s.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: C.intl.string(p.default["2tkPDy"]),
                                }),
                                (0, s.jsx)(c.a, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            f &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != n &&
                            (0, s.jsxs)("div", {
                                className: S.B7,
                                children: [
                                    (0, s.jsx)(x.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: S.XY,
                                        children: C.intl.string(p.default.G3qiHu),
                                    }),
                                    (0, s.jsx)("div", {
                                        className: S.WM,
                                        children: (0, s.jsx)(m.u, { onClick: n, size: "sm" }),
                                    }),
                                ],
                            }),
                        (0, s.jsxs)(b.D, {
                            className: S.eO,
                            onClick: () => h(!1),
                            children: [
                                (0, s.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: C.intl.string(p.default.idxnf7),
                                }),
                                (0, s.jsx)(d.t, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
