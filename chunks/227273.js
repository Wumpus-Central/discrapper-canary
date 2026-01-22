n.d(t, {
    A: () => S,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(417597),
    l = n(397927),
    c = n(775602),
    u = n(793574),
    d = n(688810),
    f = n(800172),
    p = n(953143),
    _ = n(954571),
    h = n(52167),
    m = n(652215),
    g = n(985018),
    E = n(657989);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = (e) => (e ? g.intl.string(g.t.QX14gI) : g.intl.string(g.t.RGadQR)),
    A = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, r.jsxs)(l.DUT, {
            onClick: n,
            className: E.customButton,
            children: [
                t ? g.intl.string(g.t.maZaN3) : g.intl.string(g.t["37C26f"]),
                t
                    ? (0, r.jsx)(l.tN5, {
                          size: "md",
                          color: "currentColor",
                          className: E.arrow,
                      })
                    : (0, r.jsx)(l.abt, {
                          size: "md",
                          color: "currentColor",
                          className: E.arrow,
                      }),
            ],
        });
    },
    v = (e) => {
        let {
                title: t,
                description: n,
                className: i,
                imageSource: a,
                imageClassName: o,
                titleBadge: c,
                isNew: _ = !1,
                isEarlyAccess: h = !1,
            } = e,
            { analyticsLocations: m } = (0, d.Ay)(u.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(d.f5, {
            value: m,
            children: (0, r.jsxs)("div", {
                className: s()(E.perkCard, i),
                children: [
                    _
                        ? (0, r.jsx)(p.A, {
                              className: E.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    h
                        ? (0, r.jsx)(f.A, {
                              className: E.perkCardEarlyAccessBadge,
                          })
                        : null,
                    (0, r.jsx)("img", {
                        src: a,
                        alt: "",
                        className: s()(o, E.perksCardArt),
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: "heading-lg/extrabold",
                                className: E.perkCardHeading,
                                children: [t, " ", c],
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: E.perkCardDescription,
                                children: "function" == typeof n ? n(m) : n,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    S = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [a, u] = i.useState(!1),
            f = (0, h.d)({
                styles: E,
            }),
            p = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            { analyticsLocations: g } = (0, d.Ay)(),
            b = () => {
                _.default.track(m.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                    location_stack: g,
                    was_expanded: a,
                }),
                    u(!a);
            },
            S = [
                f.emoji,
                f.streaming,
                f.upload,
                f.customAppIcons,
                f.soundboard,
                f.videoBackground,
                f.superReactions,
                f.stickersPremiumPerk,
                f.badgeAlt,
            ];
        return (0, r.jsxs)("div", {
            className: s()(E.perksContainer, t, {
                [E.partiallyHidden]: n && !a,
                [E.subscriberNitroHome]: n,
                [E.reducedMotion]: p,
            }),
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-xxl/extrabold",
                    className: E.perksTitle,
                    children: O(n),
                }),
                (0, r.jsx)("div", {
                    className: s()(E.perkCardContainer, {
                        [E.perkCardContainerExpanded]: a,
                    }),
                    children: S.map((e) => null != e && (0, r.jsx)(v, y({}, e), e.title)),
                }),
                n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: s()({
                                    [E.sizeGizmo]: !a,
                                    [E.sizeGizmoExpanded]: a,
                                }),
                                children: (0, r.jsx)(A, {
                                    onClick: b,
                                    isShowingAll: a,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: s()(E.cover, {
                                    [E.hidden]: a,
                                }),
                            }),
                        ],
                    }),
            ],
        });
    };
