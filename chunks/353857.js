n.d(t, { g: () => k }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(657707),
    c = n(755721),
    d = n(481060),
    o = n(287004),
    u = n(510918),
    x = n(70086),
    g = n(131085),
    f = n(755032),
    m = n(388032),
    p = n(997589),
    b = n(565744);
function h(e) {
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
function j(e, t) {
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
function _(e) {
    let { badge: t, isSelected: n, onClick: s } = e,
        i = (0, c.jm)({
            isSelected: n,
            label: (0, o.Z)(t.kind),
        });
    return (0, r.jsx)(O, {
        badge: t,
        selected: n,
        onClick: s,
        radioProps: i,
    });
}
function O(e) {
    let { badge: t, locked: n = !1, preview: s = !1, selected: i = !1, onClick: c, radioProps: o } = e,
        x = l()(b.pickerItem, {
            [b.pickerItemSelected]: i,
            [p.lockedPickerItem]: n,
            [p.previewBadge]: s,
        }),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.v, {
                    badge: t.kind,
                    width: g.Gg.SIZE_32,
                    height: g.Gg.SIZE_32,
                    className: p.guildBadge,
                }),
                n &&
                    !s &&
                    (0, r.jsx)("div", {
                        className: p.lockIconOverlay,
                        children: (0, r.jsx)(a.mBM, { size: "md" }),
                    }),
            ],
        });
    if (s)
        return (0, r.jsx)("div", {
            className: x,
            children: _,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = m.intl.formatToPlainString(f.default.ECl8SU, { packName: t.packName });
        return (0, r.jsx)(d.ua7, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (e) =>
                (0, r.jsx)(
                    d.P3F,
                    j(h({}, e), {
                        className: x,
                        onClick: () => {
                            var t;
                            null == c || c(), null == (t = e.onClick) || t.call(e);
                        },
                        children: _,
                    }),
                ),
        });
    }
    return (0, r.jsx)(
        d.P3F,
        j(h({}, o), {
            className: x,
            onClick: c,
            children: _,
        }),
    );
}
function k(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: i, onBadgeClicked: o, headingId: u } = e,
        [g, k] = s.useState(!1),
        v = s.useId(),
        S = (0, c.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: u,
        }),
        N = !g && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(d.nn4, {
                id: v,
                children: m.intl.string(m.t["5AQGub"]),
            }),
            (0, r.jsx)(
                "div",
                j(h({}, S), {
                    "aria-describedby": v,
                    className: b.pickerGrid,
                    children: t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            _,
                            {
                                badge: e,
                                isSelected: e.kind === i,
                                onClick: () => o(e.kind),
                            },
                            e.kind,
                        ),
                    ),
                }),
            ),
            g &&
                (0, r.jsx)("ul", {
                    className: l()(b.pickerGrid, p.lockedBadgesSection),
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
                    className: p.lockedPreviewContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: b.pickerGrid,
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
                        (0, r.jsxs)(d.P3F, {
                            className: l()(p.showAllBadges, p.showAllBadgesOverlay),
                            onClick: () => k(!0),
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: m.intl.string(f.default["2tkPDw"]),
                                }),
                                (0, r.jsx)(a.CJ0, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: p.badgesUpsellContainer,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: p.badgesUpsellText,
                                        children: m.intl.string(f.default.G3qiHh),
                                    }),
                                    (0, r.jsx)(x.P, {
                                        className: p.badgesUpsellButton,
                                        onClick: n,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(d.P3F, {
                            className: p.hideAllBadges,
                            onClick: () => k(!1),
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: m.intl.string(f.default.idxnf3),
                                }),
                                (0, r.jsx)(a.u04, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
