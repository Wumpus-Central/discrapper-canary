n.d(t, { y: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(934551),
    c = n(990078),
    o = n(421380),
    d = n(397927),
    u = n(477947),
    f = n(81461),
    g = n(342490),
    b = n(743981),
    m = n(583970),
    p = n(985018),
    x = n(690552),
    h = n(175820);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { badge: t, isSelected: n, onClick: i } = e,
        l = (0, o.Gx)({
            isSelected: n,
            label: (0, u.A)(t.kind),
        });
    return (0, r.jsx)(v, {
        badge: t,
        selected: n,
        onClick: i,
        radioProps: l,
    });
}
function v(e) {
    let { badge: t, locked: n = !1, preview: i = !1, selected: l = !1, onClick: o, radioProps: u } = e,
        g = s()(h.Uh, {
            [h.fT]: l,
            [x.av]: n,
            [x.WZ]: i,
        }),
        y = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.J, {
                    badge: t.kind,
                    width: b.Sl.SIZE_32,
                    height: b.Sl.SIZE_32,
                    className: x.n2,
                }),
                n &&
                    !i &&
                    (0, r.jsx)("div", {
                        className: x.py,
                        children: (0, r.jsx)(a.LockIcon, { size: "md" }),
                    }),
            ],
        });
    if (i)
        return (0, r.jsx)("div", {
            className: g,
            children: y,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = p.intl.formatToPlainString(m.default.ECl8SQ, { packName: t.packName });
        return (0, r.jsx)(c.m, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, r.jsx)(d.DUT, {
                className: g,
                onClick: () => {
                    null == o || o();
                },
                children: y,
            }),
        });
    }
    return (0, r.jsx)(
        d.DUT,
        O(j({}, u), {
            className: g,
            onClick: o,
            children: y,
        }),
    );
}
function A(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: l, onBadgeClicked: c, headingId: u } = e,
        [f, b] = i.useState(!1),
        A = i.useId(),
        E = (0, o._u)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: u,
        }),
        N = !f && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(d.AC4, {
                id: A,
                children: p.intl.string(p.t["5AQGuZ"]),
            }),
            (0, r.jsx)(
                "div",
                O(j({}, E), {
                    "aria-describedby": A,
                    className: h.p3,
                    children: t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            y,
                            {
                                badge: e,
                                isSelected: e.kind === l,
                                onClick: () => c(e.kind),
                            },
                            e.kind,
                        ),
                    ),
                }),
            ),
            f &&
                (0, r.jsx)("ul", {
                    className: s()(h.p3, x.wA),
                    children: t.lockedBadges.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(v, {
                                    locked: !0,
                                    badge: e,
                                    onClick: () => (null == n ? void 0 : n()),
                                }),
                            },
                            e.kind,
                        ),
                    ),
                }),
            N &&
                (0, r.jsxs)("div", {
                    className: x.WC,
                    children: [
                        (0, r.jsx)("div", {
                            className: h.p3,
                            children: t.lockedBadges.slice(0, 5).map((e) =>
                                (0, r.jsx)(
                                    v,
                                    {
                                        locked: !0,
                                        preview: !0,
                                        badge: e,
                                    },
                                    e.kind,
                                ),
                            ),
                        }),
                        (0, r.jsxs)(d.DUT, {
                            className: s()(x.ZN, x.n7),
                            onClick: () => b(!0),
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: p.intl.string(m.default["2tkPDy"]),
                                }),
                                (0, r.jsx)(a.ChevronSmallDownIcon, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            f &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: x.B7,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: x.XY,
                                        children: p.intl.string(m.default.G3qiHu),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: x.WM,
                                        children: (0, r.jsx)(g.u, { onClick: n }),
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(d.DUT, {
                            className: x.eO,
                            onClick: () => b(!1),
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: p.intl.string(m.default.idxnf7),
                                }),
                                (0, r.jsx)(a.ChevronSmallUpIcon, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
