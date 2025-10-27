n.d(t, { g: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(657707),
    c = n(28664),
    d = n(755721),
    o = n(481060),
    u = n(287004),
    x = n(510918),
    g = n(892803),
    f = n(465682),
    m = n(585961),
    b = n(131085),
    p = n(562915),
    h = n(388032),
    j = n(978098),
    k = n(764009);
function O(e) {
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
        s = (0, d.jm)({
            isSelected: n,
            label: (0, u.Z)(t.kind),
        });
    return (0, r.jsx)(S, {
        badge: t,
        selected: n,
        onClick: i,
        radioProps: s,
    });
}
function S(e) {
    let { badge: t, locked: n = !1, preview: i = !1, selected: s = !1, onClick: d, radioProps: u } = e,
        g = l()(k.pickerItem, {
            [k.pickerItemSelected]: s,
            [j.lockedPickerItem]: n,
            [j.previewBadge]: i,
        }),
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.v, {
                    badge: t.kind,
                    width: b.Gg.SIZE_32,
                    height: b.Gg.SIZE_32,
                    className: j.guildBadge,
                }),
                n &&
                    !i &&
                    (0, r.jsx)("div", {
                        className: j.lockIconOverlay,
                        children: (0, r.jsx)(a.mBM, { size: "md" }),
                    }),
            ],
        });
    if (i)
        return (0, r.jsx)("div", {
            className: g,
            children: f,
        });
    if (n && null != t.packName && "" !== t.packName) {
        let e = h.intl.formatToPlainString(p.default.ECl8SQ, { packName: t.packName });
        return (0, r.jsx)(c.u, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, r.jsx)(o.P3F, {
                className: g,
                onClick: () => {
                    null == d || d();
                },
                children: f,
            }),
        });
    }
    return (0, r.jsx)(
        o.P3F,
        _(O({}, u), {
            className: g,
            onClick: d,
            children: f,
        }),
    );
}
function N(e) {
    let { badgeCollection: t, handleBoostUpsellClick: n, selectedBadge: s, onBadgeClicked: c, headingId: u } = e,
        [x, b] = i.useState(!1),
        N = i.useId(),
        { enabled: y } = g.Z.useConfig({ location: "BadgeGrid" }),
        C = (0, d.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: u,
        }),
        P = !x && t.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.nn4, {
                id: N,
                children: h.intl.string(h.t["5AQGuZ"]),
            }),
            (0, r.jsx)(
                "div",
                _(O({}, C), {
                    "aria-describedby": N,
                    className: k.pickerGrid,
                    children: t.unlockedBadges.map((e) =>
                        (0, r.jsx)(
                            v,
                            {
                                badge: e,
                                isSelected: e.kind === s,
                                onClick: () => c(e.kind),
                            },
                            e.kind,
                        ),
                    ),
                }),
            ),
            x &&
                (0, r.jsx)("ul", {
                    className: l()(k.pickerGrid, j.lockedBadgesSection),
                    children: t.lockedBadges.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(S, {
                                    locked: !0,
                                    badge: e,
                                    onClick: () => (null == n ? void 0 : n()),
                                }),
                            },
                            e.kind,
                        ),
                    ),
                }),
            P &&
                (0, r.jsxs)("div", {
                    className: j.lockedPreviewContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: k.pickerGrid,
                            children: t.lockedBadges.slice(0, 5).map((e) =>
                                (0, r.jsx)(
                                    S,
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
                            className: l()(j.showAllBadges, j.showAllBadgesOverlay),
                            onClick: () => b(!0),
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: h.intl.string(p.default["2tkPDy"]),
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
                                className: j.badgesUpsellContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: j.badgesUpsellText,
                                        children: h.intl.string(p.default.G3qiHu),
                                    }),
                                    y
                                        ? (0, r.jsx)("div", {
                                              className: j.badgesUpsellButton,
                                              children: (0, r.jsx)(f.v, { onClick: n }),
                                          })
                                        : (0, r.jsx)(m.P, {
                                              className: j.badgesUpsellButton,
                                              onClick: n,
                                          }),
                                ],
                            }),
                        (0, r.jsxs)(o.P3F, {
                            className: j.hideAllBadges,
                            onClick: () => b(!1),
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-secondary",
                                    children: h.intl.string(p.default.idxnf7),
                                }),
                                (0, r.jsx)(a.u04, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
