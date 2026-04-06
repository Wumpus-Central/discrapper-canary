n.d(e, { y: () => C });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    a = n(934551),
    c = n(990078),
    o = n(421380),
    d = n(397927),
    u = n(477947),
    b = n(81461),
    x = n(342490),
    g = n(743981),
    f = n(583970),
    m = n(985018),
    h = n(892257),
    j = n(791633);
function p(t) {
    let { badge: e, isSelected: n, onClick: l } = t,
        r = (0, o.Gx)({ isSelected: n, label: (0, u.A)(e.kind) });
    return (0, s.jsx)(S, { badge: e, selected: n, onClick: l, radioProps: r });
}
function S(t) {
    let { badge: e, locked: n = !1, preview: l = !1, selected: r = !1, onClick: o, radioProps: u } = t,
        x = i()(j.Uh, { [j.fT]: r, [h.av]: n, [h.WZ]: l }),
        p = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(b.J, { badge: e.kind, width: g.Sl.SIZE_32, height: g.Sl.SIZE_32, className: h.n2 }),
                n && !l && (0, s.jsx)("div", { className: h.py, children: (0, s.jsx)(a.LockIcon, { size: "md" }) }),
            ],
        });
    if (l) return (0, s.jsx)("div", { className: x, children: p });
    if (n && null != e.packName && "" !== e.packName) {
        let t = m.intl.formatToPlainString(f.default.ECl8SQ, { packName: e.packName });
        return (0, s.jsx)(c.m, {
            delay: 100,
            text: t,
            "aria-label": t,
            children: (0, s.jsx)(d.DUT, {
                className: x,
                onClick: () => {
                    o?.();
                },
                children: p,
            }),
        });
    }
    return (0, s.jsx)(d.DUT, { ...u, className: x, onClick: o, children: p });
}
function C(t) {
    let { badgeCollection: e, handleBoostUpsellClick: n, selectedBadge: r, onBadgeClicked: c, headingId: u } = t,
        [b, g] = l.useState(!1),
        C = l.useId(),
        k = (0, o._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: u }),
        N = !b && e.lockedBadges.length > 0;
    return (0, s.jsxs)("div", {
        className: h.zr,
        children: [
            (0, s.jsx)(d.AC4, { id: C, children: m.intl.string(m.t["5AQGuZ"]) }),
            (0, s.jsx)("div", {
                ...k,
                "aria-describedby": C,
                className: j.p3,
                children: e.unlockedBadges.map((t) =>
                    (0, s.jsx)(p, { badge: t, isSelected: t.kind === r, onClick: () => c(t.kind) }, t.kind),
                ),
            }),
            b &&
                (0, s.jsx)("ul", {
                    className: i()(j.p3, h.wA),
                    children: e.lockedBadges.map((t) =>
                        (0, s.jsx)(
                            "li",
                            { children: (0, s.jsx)(S, { locked: !0, badge: t, onClick: () => n?.() }) },
                            t.kind,
                        ),
                    ),
                }),
            N &&
                (0, s.jsxs)("div", {
                    className: h.WC,
                    children: [
                        (0, s.jsx)("div", {
                            className: j.p3,
                            children: e.lockedBadges
                                .slice(0, 5)
                                .map((t) => (0, s.jsx)(S, { locked: !0, preview: !0, badge: t }, t.kind)),
                        }),
                        (0, s.jsxs)(d.DUT, {
                            className: i()(h.ZN, h.n7),
                            onClick: () => g(!0),
                            children: [
                                (0, s.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: m.intl.string(f.default["2tkPDy"]),
                                }),
                                (0, s.jsx)(a.ChevronSmallDownIcon, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            b &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != n &&
                            (0, s.jsxs)("div", {
                                className: h.B7,
                                children: [
                                    (0, s.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: h.XY,
                                        children: m.intl.string(f.default.G3qiHu),
                                    }),
                                    (0, s.jsx)("div", {
                                        className: h.WM,
                                        children: (0, s.jsx)(x.u, { onClick: n, size: "sm" }),
                                    }),
                                ],
                            }),
                        (0, s.jsxs)(d.DUT, {
                            className: h.eO,
                            onClick: () => g(!1),
                            children: [
                                (0, s.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: m.intl.string(f.default.idxnf7),
                                }),
                                (0, s.jsx)(a.ChevronSmallUpIcon, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
