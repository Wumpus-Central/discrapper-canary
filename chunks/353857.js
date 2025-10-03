n.d(t, { g: () => v }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(657707),
    c = n(28664),
    d = n(755721),
    o = n(481060),
    u = n(287004),
    x = n(510918),
    g = n(585961),
    f = n(131085),
    m = n(659854),
    p = n(388032),
    b = n(978098),
    h = n(764009);
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
function O(e) {
    let { badge: t, isSelected: n, onClick: s } = e,
        i = (0, d.jm)({
            isSelected: n,
            label: (0, u.Z)(t.kind),
        });
    return (0, r.jsx)(k, {
        badge: t,
        selected: n,
        onClick: s,
        radioProps: i,
    });
}
function k(e) {
    let { badge: t, locked: n = !1, preview: s = !1, selected: i = !1, onClick: d, radioProps: u } = e,
        g = l()(h.pickerItem, {
            [h.pickerItemSelected]: i,
            [b.lockedPickerItem]: n,
            [b.previewBadge]: s,
        }),
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.v, {
                    badge: t.kind,
                    width: f.Gg.SIZE_32,
                    height: f.Gg.SIZE_32,
                    className: b.guildBadge,
                }),
                n &&
                    !s &&
                    (0, r.jsx)("div", {
                        className: b.lockIconOverlay,
                        children: (0, r.jsx)(a.mBM, { size: "md" }),
                    }),
            ],
        });
    if (s)
        return (0, r.jsx)("div", {
            className: g,
            children: O,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = p.intl.formatToPlainString(m.default.ECl8SU, { packName: t.packName });
        return (0, r.jsx)(c.u, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, r.jsx)(o.P3F, {
                className: g,
                onClick: () => {
                    null == d || d();
                },
                children: O,
            }),
        });
    }
    return (0, r.jsx)(
        o.P3F,
        _(j({}, u), {
            className: g,
            onClick: d,
            children: O,
        }),
    );
}
function v(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: i, onBadgeClicked: c, headingId: u } = e,
        [x, f] = s.useState(!1),
        v = s.useId(),
        S = (0, d.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: u,
        }),
        N = !x && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.nn4, {
                id: v,
                children: p.intl.string(p.t["5AQGub"]),
            }),
            (0, r.jsx)(
                "div",
                _(j({}, S), {
                    "aria-describedby": v,
                    className: h.pickerGrid,
                    children: t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            O,
                            {
                                badge: e,
                                isSelected: e.kind === i,
                                onClick: () => c(e.kind),
                            },
                            e.kind,
                        ),
                    ),
                }),
            ),
            x &&
                (0, r.jsx)("ul", {
                    className: l()(h.pickerGrid, b.lockedBadgesSection),
                    children: t.lockedBadges.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(k, {
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
                            className: h.pickerGrid,
                            children: t.lockedBadges.slice(0, 5).map((e) =>
                                (0, r.jsx)(
                                    k,
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
                            className: l()(b.showAllBadges, b.showAllBadgesOverlay),
                            onClick: () => f(!0),
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: p.intl.string(m.default["2tkPDw"]),
                                }),
                                (0, r.jsx)(a.CJ0, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            x &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: b.badgesUpsellContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: b.badgesUpsellText,
                                        children: p.intl.string(m.default.G3qiHh),
                                    }),
                                    (0, r.jsx)(g.P, {
                                        className: b.badgesUpsellButton,
                                        onClick: n,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(o.P3F, {
                            className: b.hideAllBadges,
                            onClick: () => f(!1),
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: p.intl.string(m.default.idxnf3),
                                }),
                                (0, r.jsx)(a.u04, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
