n.d(t, { Z: () => I }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(906732),
    f = n(66595),
    p = n(535322),
    _ = n(626135),
    m = n(881100),
    h = n(981631),
    g = n(388032),
    E = n(309091);
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
    v = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, r.jsxs)(l.P3F, {
            onClick: n,
            className: E.customButton,
            children: [
                t ? g.intl.string(g.t.maZaN3) : g.intl.string(g.t["37C26f"]),
                t
                    ? (0, r.jsx)(l.u04, {
                          size: "md",
                          color: "currentColor",
                          className: E.arrow,
                      })
                    : (0, r.jsx)(l.CJ0, {
                          size: "md",
                          color: "currentColor",
                          className: E.arrow,
                      }),
            ],
        });
    },
    S = (e) => {
        let {
                title: t,
                description: n,
                className: i,
                imageSource: a,
                imageClassName: s,
                titleBadge: c,
                isNew: _ = !1,
                isEarlyAccess: m = !1,
            } = e,
            { analyticsLocations: h } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(d.Gt, {
            value: h,
            children: (0, r.jsxs)("div", {
                className: o()(E.perkCard, i),
                children: [
                    _
                        ? (0, r.jsx)(p.Z, {
                              className: E.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    m ? (0, r.jsx)(f.Z, { className: E.perkCardEarlyAccessBadge }) : null,
                    (0, r.jsx)("img", {
                        src: a,
                        alt: "",
                        className: o()(s, E.perksCardArt),
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
                                children: "function" == typeof n ? n(h) : n,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    I = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [a, u] = i.useState(!1),
            f = (0, m.N)({ styles: E }),
            p = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: g } = (0, d.ZP)(),
            b = () => {
                _.default.track(h.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                    location_stack: g,
                    was_expanded: a,
                }),
                    u(!a);
            },
            I = [
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
            className: o()(E.perksContainer, t, {
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
                    className: o()(E.perkCardContainer, { [E.perkCardContainerExpanded]: a }),
                    children: I.map((e) => null != e && (0, r.jsx)(S, y({}, e), e.title)),
                }),
                n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: o()({
                                    [E.sizeGizmo]: !a,
                                    [E.sizeGizmoExpanded]: a,
                                }),
                                children: (0, r.jsx)(v, {
                                    onClick: b,
                                    isShowingAll: a,
                                }),
                            }),
                            (0, r.jsx)("div", { className: o()(E.cover, { [E.hidden]: a }) }),
                        ],
                    }),
            ],
        });
    };
