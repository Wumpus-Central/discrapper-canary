n.d(t, { g: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(657707),
    o = n(28664),
    c = n(755721),
    u = n(481060),
    d = n(287004),
    g = n(510918),
    m = n(465682),
    p = n(131085),
    f = n(541673),
    h = n(388032),
    b = n(978098),
    x = n(764009);
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
function _(e, t) {
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
function v(e) {
    let { badge: t, isSelected: n, onClick: i } = e,
        l = (0, c.jm)({
            isSelected: n,
            label: (0, d.Z)(t.kind),
        });
    return (0, r.jsx)(O, {
        badge: t,
        selected: n,
        onClick: i,
        radioProps: l,
    });
}
function O(e) {
    let { badge: t, locked: n = !1, preview: i = !1, selected: l = !1, onClick: c, radioProps: d } = e,
        m = a()(x.pickerItem, {
            [x.pickerItemSelected]: l,
            [b.lockedPickerItem]: n,
            [b.previewBadge]: i,
        }),
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.v, {
                    badge: t.kind,
                    width: p.Gg.SIZE_32,
                    height: p.Gg.SIZE_32,
                    className: b.guildBadge,
                }),
                n &&
                    !i &&
                    (0, r.jsx)("div", {
                        className: b.lockIconOverlay,
                        children: (0, r.jsx)(s.mBM, { size: "md" }),
                    }),
            ],
        });
    if (i)
        return (0, r.jsx)("div", {
            className: m,
            children: v,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = h.intl.formatToPlainString(f.default.ECl8SQ, { packName: t.packName });
        return (0, r.jsx)(o.u, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, r.jsx)(u.P3F, {
                className: m,
                onClick: () => {
                    null == c || c();
                },
                children: v,
            }),
        });
    }
    return (0, r.jsx)(
        u.P3F,
        _(j({}, d), {
            className: m,
            onClick: c,
            children: v,
        }),
    );
}
function C(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: l, onBadgeClicked: o, headingId: d } = e,
        [g, p] = i.useState(!1),
        C = i.useId(),
        y = (0, c.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: d,
        }),
        N = !g && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(u.nn4, {
                id: C,
                children: h.intl.string(h.t["5AQGuZ"]),
            }),
            (0, r.jsx)(
                "div",
                _(j({}, y), {
                    "aria-describedby": C,
                    className: x.pickerGrid,
                    children: t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            v,
                            {
                                badge: e,
                                isSelected: e.kind === l,
                                onClick: () => o(e.kind),
                            },
                            e.kind,
                        ),
                    ),
                }),
            ),
            g &&
                (0, r.jsx)("ul", {
                    className: a()(x.pickerGrid, b.lockedBadgesSection),
                    children: t.lockedBadges.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(O, {
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
                    className: b.lockedPreviewContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: x.pickerGrid,
                            children: t.lockedBadges.slice(0, 5).map((e) =>
                                (0, r.jsx)(
                                    O,
                                    {
                                        locked: !0,
                                        preview: !0,
                                        badge: e,
                                    },
                                    e.kind,
                                ),
                            ),
                        }),
                        (0, r.jsxs)(u.P3F, {
                            className: a()(b.showAllBadges, b.showAllBadgesOverlay),
                            onClick: () => p(!0),
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: h.intl.string(f.default["2tkPDy"]),
                                }),
                                (0, r.jsx)(s.CJ0, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: b.badgesUpsellContainer,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: b.badgesUpsellText,
                                        children: h.intl.string(f.default.G3qiHu),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: b.badgesUpsellButton,
                                        children: (0, r.jsx)(m.v, { onClick: n }),
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(u.P3F, {
                            className: b.hideAllBadges,
                            onClick: () => p(!1),
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: h.intl.string(f.default.idxnf7),
                                }),
                                (0, r.jsx)(s.u04, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
