"use strict";
n.d(t, { y: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(934551),
    o = n(990078),
    d = n(421380),
    c = n(397927),
    u = n(477947),
    g = n(81461),
    m = n(342490),
    x = n(743981),
    h = n(583970),
    _ = n(985018),
    A = n(690552),
    p = n(175820);
function f(e) {
    let { badge: t, isSelected: n, onClick: s } = e,
        l = (0, d.Gx)({ isSelected: n, label: (0, u.A)(t.kind) });
    return (0, i.jsx)(j, { badge: t, selected: n, onClick: s, radioProps: l });
}
function j(e) {
    let { badge: t, locked: n = !1, preview: s = !1, selected: l = !1, onClick: d, radioProps: u } = e,
        m = r()(p.Uh, { [p.fT]: l, [A.av]: n, [A.WZ]: s }),
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.J, { badge: t.kind, width: x.Sl.SIZE_32, height: x.Sl.SIZE_32, className: A.n2 }),
                n && !s && (0, i.jsx)("div", { className: A.py, children: (0, i.jsx)(a.LockIcon, { size: "md" }) }),
            ],
        });
    if (s) return (0, i.jsx)("div", { className: m, children: f });
    if (n && null != t.packName && "" !== t.packName) {
        let e = _.intl.formatToPlainString(h.default.ECl8SQ, { packName: t.packName });
        return (0, i.jsx)(o.m, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, i.jsx)(c.DUT, {
                className: m,
                onClick: () => {
                    d?.();
                },
                children: f,
            }),
        });
    }
    return (0, i.jsx)(c.DUT, { ...u, className: m, onClick: d, children: f });
}
function N(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: l, onBadgeClicked: o, headingId: u } = e,
        [g, x] = s.useState(!1),
        N = s.useId(),
        E = (0, d._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: u }),
        b = !g && t.lockedBadges.length > 0;
    return (0, i.jsxs)("div", {
        className: A.zr,
        children: [
            (0, i.jsx)(c.AC4, { id: N, children: _.intl.string(_.t["5AQGuZ"]) }),
            (0, i.jsx)("div", {
                ...E,
                "aria-describedby": N,
                className: p.p3,
                children: t.unlockedBadges.map((e) =>
                    (0, i.jsx)(f, { badge: e, isSelected: e.kind === l, onClick: () => o(e.kind) }, e.kind),
                ),
            }),
            g &&
                (0, i.jsx)("ul", {
                    className: r()(p.p3, A.wA),
                    children: t.lockedBadges.map((e) =>
                        (0, i.jsx)(
                            "li",
                            { children: (0, i.jsx)(j, { locked: !0, badge: e, onClick: () => n?.() }) },
                            e.kind,
                        ),
                    ),
                }),
            b &&
                (0, i.jsxs)("div", {
                    className: A.WC,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.p3,
                            children: t.lockedBadges
                                .slice(0, 5)
                                .map((e) => (0, i.jsx)(j, { locked: !0, preview: !0, badge: e }, e.kind)),
                        }),
                        (0, i.jsxs)(c.DUT, {
                            className: r()(A.ZN, A.n7),
                            onClick: () => x(!0),
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: _.intl.string(h.default["2tkPDy"]),
                                }),
                                (0, i.jsx)(a.ChevronSmallDownIcon, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: A.B7,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: A.XY,
                                        children: _.intl.string(h.default.G3qiHu),
                                    }),
                                    (0, i.jsx)("div", { className: A.WM, children: (0, i.jsx)(m.u, { onClick: n }) }),
                                ],
                            }),
                        (0, i.jsxs)(c.DUT, {
                            className: A.eO,
                            onClick: () => x(!1),
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: _.intl.string(h.default.idxnf7),
                                }),
                                (0, i.jsx)(a.ChevronSmallUpIcon, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
