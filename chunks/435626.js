n.d(e, { default: () => I });
var a = n(951288);
n(647438);
var i = n(120356),
    o = n.n(i),
    r = n(311570),
    s = n(481060),
    c = n(493773),
    l = n(100527),
    u = n(906732),
    _ = n(1585),
    d = n(821982),
    p = n(125988),
    j = n(267097),
    y = n(109213),
    O = n(626135),
    g = n(333867),
    m = n(963249),
    h = n(981631),
    T = n(217702),
    b = n(474936),
    x = n(388032),
    E = n(969868),
    f = n(476945),
    C = n(945182);
function I(t) {
    let { analyticsLocations: e, transitionState: n, onClose: i, giftRecipient: o, analyticsObject: r } = t;
    return (
        (0, c.ZP)(() => {
            O.default.track(h.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: r,
                location_stack: e,
            });
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(S, {}),
                (0, a.jsxs)(s.Y0X, {
                    size: s.CgR.DYNAMIC,
                    transitionState: n,
                    className: E.modalRoot,
                    parentComponent: "GiftCategorySelectModal",
                    children: [
                        (0, a.jsxs)(s.xBx, {
                            className: E.header,
                            separator: !1,
                            children: [
                                (0, a.jsx)(s.vwX, {
                                    tag: s.RB0.H4,
                                    children: x.intl.string(x.t.YBGjsr),
                                }),
                                (0, a.jsx)(s.olH, {
                                    onClick: () => {
                                        O.default.track(h.rMx.MODAL_DISMISSED, {
                                            type: h.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: h.qAy.BUTTON_CTA,
                                        }),
                                            i();
                                    },
                                    className: E.cursorPointer,
                                }),
                            ],
                        }),
                        (0, a.jsx)(s.hzk, {
                            className: E.modalContent,
                            children: (0, a.jsx)(v, {
                                analyticsLocations: e,
                                giftRecipient: o,
                                analyticsObject: r,
                                onClose: i,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
let S = () => ((0, j.Z)(), null);
function v(t) {
    let { giftRecipient: e, analyticsObject: n, onClose: i } = t,
        { showBothNitroSkusInCategorySelect: c } = y.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
        ),
        { analyticsLocations: _ } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL),
        d = (t) => {
            t && i();
        },
        p = (t) => {
            var a, i;
            let o = h.Qqv.NITRO_SKU_SELECTION;
            t === b.Si.TIER_2 ? (o = h.Qqv.NITRO_STANDARD) : t === b.Si.TIER_0 && (o = h.Qqv.NITRO_BASIC),
                (0, m.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: b.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: _,
                    subscriptionTier: t,
                    analyticsObject:
                        ((a = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (e) {
                                        var a;
                                        (a = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = a);
                                    });
                            }
                            return t;
                        })({}, n)),
                        (i = i =
                            {
                                section: h.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                object: h.qAy.GIFT_CATEGORY_OPTION,
                                objectType: o,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (t) {
                                  Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(i, t));
                              }),
                        a),
                    onClose: d,
                });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.P3F, {
                onClick: () => p(c ? b.Si.TIER_2 : void 0),
                children: (0, a.jsxs)("div", {
                    className: o()(E.categoryButton, E.nitroButton),
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: E.buttonText,
                            children: x.intl.string(x.t["lG6a5+"]),
                        }),
                        (0, a.jsx)(N, { imageType: 0 }),
                    ],
                }),
            }),
            c &&
                (0, a.jsx)(s.P3F, {
                    onClick: () => p(b.Si.TIER_0),
                    children: (0, a.jsxs)("div", {
                        className: o()(E.nitroBasicButton, E.categoryButton),
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: "display-sm",
                                color: "always-white",
                                className: E.buttonText,
                                children: x.intl.string(x.t["t9uG/v"]),
                            }),
                            (0, a.jsx)(N, { imageType: 1 }),
                        ],
                    }),
                }),
            (0, a.jsx)(s.P3F, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: b.Wt.DM_CHANNEL,
                        analyticsLocations: _,
                        analyticsObject: n,
                        giftRecipient: e,
                        onClose: d,
                        variantsReturnStyle: r.v.VARIANTS_GROUP,
                    });
                },
                children: (0, a.jsxs)("div", {
                    className: o()(E.shopButton, E.categoryButton),
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: E.buttonText,
                            children: x.intl.string(x.t.gFlB9f),
                        }),
                        (0, a.jsx)(N, { imageType: 2 }),
                    ],
                }),
            }),
        ],
    });
}
function N(t) {
    let { imageType: e } = t,
        { avatarPlaceholderSrc: n } = (0, p.Z)({ size: (0, _.y9)(s.EFr.SIZE_80) }),
        i = (0, d.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", s.EFr.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, a.jsx)("div", {
              className: E.wumpusImageContainer,
              children: (0, a.jsx)(s.Eep, {
                  src: 1 === e ? f : C,
                  mediaLayoutType: T.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1,
              }),
          })
        : 2 === e
          ? (0, a.jsx)("div", {
                className: E.shopImageContainer,
                children: (0, a.jsx)(s.qEK, {
                    src: n,
                    avatarDecoration: i,
                    size: s.EFr.SIZE_80,
                    "aria-hidden": !0,
                }),
            })
          : void 0;
}
