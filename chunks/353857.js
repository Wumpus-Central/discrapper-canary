n.d(t, { g: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(657707),
    o = n(28664),
    c = n(755721),
    d = n(481060),
    u = n(287004),
    g = n(510918),
    f = n(465682),
    m = n(131085),
    b = n(551199),
    p = n(388032),
    h = n(146596),
    x = n(331867);
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
function v(e, t) {
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
    let { badge: t, isSelected: n, onClick: i } = e,
        l = (0, c.jm)({
            isSelected: n,
            label: (0, u.Z)(t.kind),
        });
    return (0, r.jsx)(C, {
        badge: t,
        selected: n,
        onClick: i,
        radioProps: l,
    });
}
function C(e) {
    let { badge: t, locked: n = !1, preview: i = !1, selected: l = !1, onClick: c, radioProps: u } = e,
        f = a()(x.pickerItem, {
            [x.pickerItemSelected]: l,
            [h.lockedPickerItem]: n,
            [h.previewBadge]: i,
        }),
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.v, {
                    badge: t.kind,
                    width: m.Gg.SIZE_32,
                    height: m.Gg.SIZE_32,
                    className: h.guildBadge,
                }),
                n &&
                    !i &&
                    (0, r.jsx)("div", {
                        className: h.lockIconOverlay,
                        children: (0, r.jsx)(s.mBM, { size: "md" }),
                    }),
            ],
        });
    if (i)
        return (0, r.jsx)("div", {
            className: f,
            children: O,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = p.intl.formatToPlainString(b.default.ECl8SQ, { packName: t.packName });
        return (0, r.jsx)(o.u, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, r.jsx)(d.P3F, {
                className: f,
                onClick: () => {
                    null == c || c();
                },
                children: O,
            }),
        });
    }
    return (0, r.jsx)(
        d.P3F,
        v(j({}, u), {
            className: f,
            onClick: c,
            children: O,
        }),
    );
}
function y(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: l, onBadgeClicked: o, headingId: u } = e,
        [g, m] = i.useState(!1),
        y = i.useId(),
        N = (0, c.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: u,
        }),
        E = !g && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(d.nn4, {
                id: y,
                children: p.intl.string(p.t["5AQGuZ"]),
            }),
            (0, r.jsx)(
                "div",
                v(j({}, N), {
                    "aria-describedby": y,
                    className: x.pickerGrid,
                    children: t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            O,
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
                    className: a()(x.pickerGrid, h.lockedBadgesSection),
                    children: t.lockedBadges.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(C, {
                                    locked: !0,
                                    badge: e,
                                    onClick: () => (null == n ? void 0 : n()),
                                }),
                            },
                            e.kind,
                        ),
                    ),
                }),
            E &&
                (0, r.jsxs)("div", {
                    className: h.lockedPreviewContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: x.pickerGrid,
                            children: t.lockedBadges.slice(0, 5).map((e) =>
                                (0, r.jsx)(
                                    C,
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
                            className: a()(h.showAllBadges, h.showAllBadgesOverlay),
                            onClick: () => m(!0),
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: p.intl.string(b.default["2tkPDy"]),
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
                                className: h.badgesUpsellContainer,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: h.badgesUpsellText,
                                        children: p.intl.string(b.default.G3qiHu),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: h.badgesUpsellButton,
                                        children: (0, r.jsx)(f.v, { onClick: n }),
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(d.P3F, {
                            className: h.hideAllBadges,
                            onClick: () => m(!1),
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: p.intl.string(b.default.idxnf7),
                                }),
                                (0, r.jsx)(s.u04, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
