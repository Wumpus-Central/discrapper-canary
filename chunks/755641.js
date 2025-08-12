n.d(t, { g: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(657707),
    o = n(481060),
    c = n(510918),
    d = n(70086),
    u = n(131085),
    m = n(195196),
    g = n(388032),
    p = n(451140),
    h = n(8498);
function f(e) {
    let { badge: t, locked: n = !1, preview: i = !1, selected: l = !1, onClick: d } = e,
        f = a()(h.pickerItem, {
            [h.pickerItemSelected]: l,
            [p.lockedPickerItem]: n,
            [p.previewBadge]: i,
        }),
        b = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.v, {
                    badge: t.kind,
                    width: u.Gg.SIZE_32,
                    height: u.Gg.SIZE_32,
                    className: p.guildBadge,
                }),
                n &&
                    !i &&
                    (0, r.jsx)("div", {
                        className: p.lockIconOverlay,
                        children: (0, r.jsx)(s.mBM, { size: "md" }),
                    }),
            ],
        });
    if (i)
        return (0, r.jsx)("div", {
            className: f,
            children: b,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = g.intl.formatToPlainString(m.default.ECl8SU, { packName: t.packName });
        return (0, r.jsx)(o.ua7, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    o.P3F,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (n = n =
                        {
                            className: f,
                            onClick: () => {
                                var t;
                                null == d || d(), null == (t = e.onClick) || t.call(e);
                            },
                            children: b,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
        });
    }
    return (0, r.jsx)(o.P3F, {
        className: f,
        onClick: d,
        children: b,
    });
}
function b(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: l, onBadgeClicked: c } = e,
        [u, b] = i.useState(!1),
        x = !u && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: h.pickerGrid,
                children: [
                    t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            f,
                            {
                                badge: e,
                                selected: e.kind === l,
                                onClick: () => c(e.kind),
                            },
                            e.kind,
                        ),
                    ),
                    u &&
                        (0, r.jsx)(r.Fragment, {
                            children: t.lockedBadges.map((e) =>
                                (0, r.jsx)(
                                    f,
                                    {
                                        locked: !0,
                                        badge: e,
                                        onClick: () => (null == n ? void 0 : n()),
                                    },
                                    e.kind,
                                ),
                            ),
                        }),
                ],
            }),
            x &&
                (0, r.jsxs)("div", {
                    className: p.lockedPreviewContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: h.pickerGrid,
                            children: t.lockedBadges.slice(0, 5).map((e) =>
                                (0, r.jsx)(
                                    f,
                                    {
                                        locked: !0,
                                        preview: !0,
                                        badge: e,
                                    },
                                    e.kind,
                                ),
                            ),
                        }),
                        (0, r.jsxs)(o.P3F, {
                            className: a()(p.showAllBadges, p.showAllBadgesOverlay),
                            onClick: () => b(!0),
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: g.intl.string(m.default["2tkPDw"]),
                                }),
                                (0, r.jsx)(s.CJ0, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            u &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: p.badgesUpsellContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: p.badgesUpsellText,
                                        children: g.intl.string(m.default.G3qiHh),
                                    }),
                                    (0, r.jsx)(d.P, {
                                        className: p.badgesUpsellButton,
                                        onClick: n,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(o.P3F, {
                            className: p.hideAllBadges,
                            onClick: () => b(!1),
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: g.intl.string(m.default.idxnf3),
                                }),
                                (0, r.jsx)(s.u04, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
