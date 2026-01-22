i.d(t, {
    default: () => C,
});
var a = i(627968),
    n = i(503698),
    s = i.n(n),
    c = i(635358),
    r = i(397927),
    l = i(964486),
    o = i(793574),
    d = i(688810),
    p = i(954921),
    b = i(920064),
    _ = i(278539),
    j = i(315949),
    O = i(547065),
    y = i(954571),
    T = i(44120),
    f = i(532794),
    g = i(652215),
    u = i(838541),
    m = i(788868),
    x = i(985018),
    E = i(649178),
    h = i(793481),
    A = i(497451);

function C(e) {
    let { analyticsLocations: t, transitionState: i, onClose: n, giftRecipient: s, analyticsObject: c } = e;
    return (
        (0, l.Ay)(() => {
            y.default.track(g.HAw.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: c,
                location_stack: t,
            });
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(v, {}),
                (0, a.jsxs)(r.EOs, {
                    "data-migration-pending": !0,
                    size: r.rIJ.DYNAMIC,
                    transitionState: i,
                    className: E.CR,
                    parentComponent: "GiftCategorySelectModal",
                    children: [
                        (0, a.jsxs)(r.rQ0, {
                            "data-migration-pending": !0,
                            className: E.wx,
                            separator: !1,
                            children: [
                                (0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: x.intl.string(x.t.YBGjso),
                                }),
                                (0, a.jsx)(r.s_y, {
                                    "data-migration-pending": !0,
                                    onClick: () => {
                                        y.default.track(g.HAw.MODAL_DISMISSED, {
                                            type: g.JJy.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: g.ZSU.BUTTON_CTA,
                                        }),
                                            n();
                                    },
                                    className: E.or,
                                }),
                            ],
                        }),
                        (0, a.jsx)(r.$mQ, {
                            "data-migration-pending": !0,
                            className: E.jE,
                            children: (0, a.jsx)(N, {
                                analyticsLocations: t,
                                giftRecipient: s,
                                analyticsObject: c,
                                onClose: n,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
let v = () => ((0, j.A)(), null);

function N(e) {
    let { giftRecipient: t, analyticsObject: i, onClose: n } = e,
        { showBothNitroSkusInCategorySelect: l } = O.P.useExperiment(
            {
                location: "gift-button",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { analyticsLocations: p } = (0, d.Ay)(o.A.GIFT_CATEGORY_SELECT_MODAL),
        b = (e) => {
            e && n();
        },
        _ = (e) => {
            var a, n;
            let s = g.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
            e === m.pe.TIER_2
                ? (s = g.AnalyticsObjectTypes.NITRO_STANDARD)
                : e === m.pe.TIER_0 && (s = g.AnalyticsObjectTypes.NITRO_BASIC),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: m.vQ.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: p,
                    subscriptionTier: e,
                    analyticsObject:
                        ((a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, i)),
                        (n = n =
                            {
                                section: g.JJy.GIFT_CATEGORY_SELECT_MODAL,
                                object: g.ZSU.GIFT_CATEGORY_OPTION,
                                objectType: s,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, a);
                                  }
                                  return i;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        a),
                    onClose: b,
                });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.DUT, {
                onClick: () => _(l ? m.pe.TIER_2 : void 0),
                children: (0, a.jsxs)("div", {
                    className: s()(E.Hv, E.pr),
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: E._d,
                            children: x.intl.string(x.t.lG6a5x),
                        }),
                        (0, a.jsx)(S, {
                            imageType: 0,
                        }),
                    ],
                }),
            }),
            l &&
                (0, a.jsx)(r.DUT, {
                    onClick: () => _(m.pe.TIER_0),
                    children: (0, a.jsxs)("div", {
                        className: s()(E.pn, E.Hv),
                        children: [
                            (0, a.jsx)(r.Text, {
                                variant: "display-sm",
                                color: "always-white",
                                className: E._d,
                                children: x.intl.string(x.t["t9uG/o"]),
                            }),
                            (0, a.jsx)(S, {
                                imageType: 1,
                            }),
                        ],
                    }),
                }),
            (0, a.jsx)(r.DUT, {
                onClick: () => {
                    (0, T.A)({
                        isGift: !0,
                        giftingOrigin: m.vQ.DM_CHANNEL,
                        analyticsLocations: p,
                        analyticsObject: i,
                        giftRecipient: t,
                        onClose: b,
                        variantsReturnStyle: c.g.VARIANTS_GROUP,
                    });
                },
                children: (0, a.jsxs)("div", {
                    className: s()(E.xG, E.Hv),
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: E._d,
                            children: x.intl.string(x.t.gFlB9b),
                        }),
                        (0, a.jsx)(S, {
                            imageType: 2,
                        }),
                    ],
                }),
            }),
        ],
    });
}

function S(e) {
    let { imageType: t } = e,
        { avatarPlaceholderSrc: i } = (0, _.A)({
            size: (0, p.Te)(r._3J.SIZE_80),
        }),
        n = (0, b.A)("a_c3cffc19e9784f7d0b005eecdf1b566e", r._3J.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, a.jsx)("div", {
              className: E.wp,
              children: (0, a.jsx)(r._V3, {
                  src: 1 === t ? h : A,
                  mediaLayoutType: u.dG.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1,
              }),
          })
        : 2 === t
          ? (0, a.jsx)("div", {
                className: E.zT,
                children: (0, a.jsx)(r.euF, {
                    src: i,
                    avatarDecoration: n,
                    size: r._3J.SIZE_80,
                    "aria-hidden": !0,
                }),
            })
          : void 0;
}
