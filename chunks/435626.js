n.d(e, { default: () => I });
var i = n(54381),
    a = n(120356),
    o = n.n(a),
    r = n(311570),
    s = n(481060),
    c = n(493773),
    l = n(100527),
    u = n(906732),
    d = n(1585),
    p = n(821982),
    _ = n(125988),
    g = n(267097),
    y = n(109213),
    j = n(626135),
    m = n(333867),
    O = n(963249),
    T = n(981631),
    b = n(217702),
    h = n(474936),
    x = n(388032),
    E = n(969868),
    f = n(476945),
    C = n(945182);
function I(t) {
    let { analyticsLocations: e, transitionState: n, onClose: a, giftRecipient: o, analyticsObject: r } = t;
    return (
        (0, c.ZP)(() => {
            j.default.track(T.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: r,
                location_stack: e,
            });
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S, {}),
                (0, i.jsxs)(s.Y0X, {
                    "data-migration-pending": !0,
                    size: s.CgR.DYNAMIC,
                    transitionState: n,
                    className: E.modalRoot,
                    parentComponent: "GiftCategorySelectModal",
                    children: [
                        (0, i.jsxs)(s.xBx, {
                            "data-migration-pending": !0,
                            className: E.header,
                            separator: !1,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    children: x.intl.string(x.t.YBGjso),
                                }),
                                (0, i.jsx)(s.olH, {
                                    "data-migration-pending": !0,
                                    onClick: () => {
                                        j.default.track(T.rMx.MODAL_DISMISSED, {
                                            type: T.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: T.qAy.BUTTON_CTA,
                                        }),
                                            a();
                                    },
                                    className: E.cursorPointer,
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.hzk, {
                            "data-migration-pending": !0,
                            className: E.modalContent,
                            children: (0, i.jsx)(N, {
                                analyticsLocations: e,
                                giftRecipient: o,
                                analyticsObject: r,
                                onClose: a,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
let S = () => ((0, g.Z)(), null);
function N(t) {
    let { giftRecipient: e, analyticsObject: n, onClose: a } = t,
        { showBothNitroSkusInCategorySelect: c } = y.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
        ),
        { analyticsLocations: d } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL),
        p = (t) => {
            t && a();
        },
        _ = (t) => {
            var i, a;
            let o = T.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
            t === h.Si.TIER_2
                ? (o = T.AnalyticsObjectTypes.NITRO_STANDARD)
                : t === h.Si.TIER_0 && (o = T.AnalyticsObjectTypes.NITRO_BASIC),
                (0, O.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: h.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: d,
                    subscriptionTier: t,
                    analyticsObject:
                        ((i = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (e) {
                                        var i;
                                        (i = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = i);
                                    });
                            }
                            return t;
                        })({}, n)),
                        (a = a =
                            {
                                section: T.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                object: T.qAy.GIFT_CATEGORY_OPTION,
                                objectType: o,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (t) {
                                  Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(a, t));
                              }),
                        i),
                    onClose: p,
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.P3F, {
                onClick: () => _(c ? h.Si.TIER_2 : void 0),
                children: (0, i.jsxs)("div", {
                    className: o()(E.categoryButton, E.nitroButton),
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: E.buttonText,
                            children: x.intl.string(x.t.lG6a5x),
                        }),
                        (0, i.jsx)(A, { imageType: 0 }),
                    ],
                }),
            }),
            c &&
                (0, i.jsx)(s.P3F, {
                    onClick: () => _(h.Si.TIER_0),
                    children: (0, i.jsxs)("div", {
                        className: o()(E.nitroBasicButton, E.categoryButton),
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: "display-sm",
                                color: "always-white",
                                className: E.buttonText,
                                children: x.intl.string(x.t["t9uG/o"]),
                            }),
                            (0, i.jsx)(A, { imageType: 1 }),
                        ],
                    }),
                }),
            (0, i.jsx)(s.P3F, {
                onClick: () => {
                    (0, m.Z)({
                        isGift: !0,
                        giftingOrigin: h.Wt.DM_CHANNEL,
                        analyticsLocations: d,
                        analyticsObject: n,
                        giftRecipient: e,
                        onClose: p,
                        variantsReturnStyle: r.v.VARIANTS_GROUP,
                    });
                },
                children: (0, i.jsxs)("div", {
                    className: o()(E.shopButton, E.categoryButton),
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: E.buttonText,
                            children: x.intl.string(x.t.gFlB9b),
                        }),
                        (0, i.jsx)(A, { imageType: 2 }),
                    ],
                }),
            }),
        ],
    });
}
function A(t) {
    let { imageType: e } = t,
        { avatarPlaceholderSrc: n } = (0, _.Z)({ size: (0, d.y9)(s.EFr.SIZE_80) }),
        a = (0, p.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", s.EFr.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, i.jsx)("div", {
              className: E.wumpusImageContainer,
              children: (0, i.jsx)(s.Eep, {
                  src: 1 === e ? f : C,
                  mediaLayoutType: b.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1,
              }),
          })
        : 2 === e
          ? (0, i.jsx)("div", {
                className: E.shopImageContainer,
                children: (0, i.jsx)(s.qEK, {
                    src: n,
                    avatarDecoration: a,
                    size: s.EFr.SIZE_80,
                    "aria-hidden": !0,
                }),
            })
          : void 0;
}
