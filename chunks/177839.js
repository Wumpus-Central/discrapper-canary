n.d(t, { Z: () => S }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(906732),
    f = n(66595),
    _ = n(535322),
    p = n(477734),
    h = n(626135),
    m = n(881100),
    g = n(981631),
    E = n(388032),
    b = n(504186);
function y(e, t, n) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = (e) => (e ? E.intl.string(E.t.QX14gI) : E.intl.string(E.t.RGadQU)),
    I = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, r.jsxs)(l.P3F, {
            onClick: n,
            className: b.customButton,
            children: [
                t ? E.intl.string(E.t.maZaNz) : E.intl.string(E.t["37C26e"]),
                t
                    ? (0, r.jsx)(l.u04, {
                          size: "md",
                          color: "currentColor",
                          className: b.arrow,
                      })
                    : (0, r.jsx)(l.CJ0, {
                          size: "md",
                          color: "currentColor",
                          className: b.arrow,
                      }),
            ],
        });
    },
    T = (e) => {
        let {
                title: t,
                description: n,
                className: i,
                imageSource: a,
                imageClassName: s,
                titleBadge: c,
                isNew: p = !1,
                isEarlyAccess: h = !1,
            } = e,
            { analyticsLocations: m } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(d.Gt, {
            value: m,
            children: (0, r.jsxs)("div", {
                className: o()(b.perkCard, i),
                children: [
                    p
                        ? (0, r.jsx)(_.Z, {
                              className: b.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    h ? (0, r.jsx)(f.Z, { className: b.perkCardEarlyAccessBadge }) : null,
                    (0, r.jsx)("img", {
                        src: a,
                        alt: "",
                        className: o()(s, b.perksCardArt),
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: "heading-lg/extrabold",
                                className: b.perkCardHeading,
                                children: [t, " ", c],
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: b.perkCardDescription,
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
            f = (0, m.N)({ styles: b }),
            _ = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: E } = (0, d.ZP)(),
            y = (0, p._f)(),
            S = () => {
                h.default.track(g.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                    location_stack: E,
                    was_expanded: a,
                }),
                    u(!a);
            },
            A = [
                f.emoji,
                f.streaming,
                f.upload,
                f.customAppIcons,
                f.soundboard,
                y ? f.remix : f.videoBackground,
                f.superReactions,
                f.stickersPremiumPerk,
                f.badgeAlt,
            ];
        return (0, r.jsxs)("div", {
            className: o()(b.perksContainer, t, {
                [b.partiallyHidden]: n && !a,
                [b.subscriberNitroHome]: n,
                [b.reducedMotion]: _,
            }),
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-xxl/extrabold",
                    className: b.perksTitle,
                    children: v(n),
                }),
                (0, r.jsx)("div", {
                    className: o()(b.perkCardContainer, { [b.perkCardContainerExpanded]: a }),
                    children: A.map((e) => null != e && (0, r.jsx)(T, O({}, e), e.title)),
                }),
                n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: o()({
                                    [b.sizeGizmo]: !a,
                                    [b.sizeGizmoExpanded]: a,
                                }),
                                children: (0, r.jsx)(I, {
                                    onClick: S,
                                    isShowingAll: a,
                                }),
                            }),
                            (0, r.jsx)("div", { className: o()(b.cover, { [b.hidden]: a }) }),
                        ],
                    }),
            ],
        });
    };
