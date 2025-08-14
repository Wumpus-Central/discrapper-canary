n.d(e, { default: () => v });
var a = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    r = n(311570),
    s = n(481060),
    c = n(493773),
    l = n(100527),
    u = n(906732),
    d = n(1585),
    _ = n(821982),
    p = n(125988),
    j = n(267097),
    y = n(109213),
    g = n(626135),
    O = n(333867),
    m = n(963249),
    f = n(981631),
    h = n(217702),
    T = n(474936),
    x = n(388032),
    b = n(537351),
    E = n(476945),
    C = n(945182);
function v(t) {
    let { analyticsLocations: e, transitionState: n, onClose: o, giftRecipient: i, analyticsObject: r } = t;
    return (
        (0, c.ZP)(() => {
            g.default.track(f.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: r,
                location_stack: e,
            });
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(I, {}),
                (0, a.jsxs)(s.Y0X, {
                    size: s.CgR.DYNAMIC,
                    transitionState: n,
                    className: b.modalRoot,
                    parentComponent: "GiftCategorySelectModal",
                    children: [
                        (0, a.jsxs)(s.xBx, {
                            className: b.header,
                            separator: !1,
                            children: [
                                (0, a.jsx)(s.vwX, {
                                    tag: s.RB0.H4,
                                    children: x.intl.string(x.t.YBGjsr),
                                }),
                                (0, a.jsx)(s.olH, {
                                    onClick: () => {
                                        g.default.track(f.rMx.MODAL_DISMISSED, {
                                            type: f.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: f.qAy.BUTTON_CTA,
                                        }),
                                            o();
                                    },
                                    className: b.cursorPointer,
                                }),
                            ],
                        }),
                        (0, a.jsx)(s.hzk, {
                            className: b.modalContent,
                            children: (0, a.jsx)(N, {
                                analyticsLocations: e,
                                giftRecipient: i,
                                analyticsObject: r,
                                onClose: o,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
let I = () => ((0, j.Z)(), null);
function N(t) {
    let { giftRecipient: e, analyticsObject: n, onClose: o } = t,
        { showBothNitroSkusInCategorySelect: c } = y.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
        ),
        { analyticsLocations: d } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL),
        _ = (t) => {
            t && o();
        },
        p = (t) => {
            var a, o;
            let i = f.Qqv.NITRO_SKU_SELECTION;
            t === T.Si.TIER_2 ? (i = f.Qqv.NITRO_STANDARD) : t === T.Si.TIER_0 && (i = f.Qqv.NITRO_BASIC),
                (0, m.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: T.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: d,
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
                        (o = o =
                            {
                                section: f.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                object: f.qAy.GIFT_CATEGORY_OPTION,
                                objectType: i,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (t) {
                                  Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(o, t));
                              }),
                        a),
                    onClose: _,
                });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.P3F, {
                onClick: () => p(c ? T.Si.TIER_2 : void 0),
                children: (0, a.jsxs)("div", {
                    className: i()(b.categoryButton, b.nitroButton),
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: b.buttonText,
                            children: x.intl.string(x.t["lG6a5+"]),
                        }),
                        (0, a.jsx)(S, { imageType: 0 }),
                    ],
                }),
            }),
            c &&
                (0, a.jsx)(s.P3F, {
                    onClick: () => p(T.Si.TIER_0),
                    children: (0, a.jsxs)("div", {
                        className: i()(b.nitroBasicButton, b.categoryButton),
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: "display-sm",
                                color: "always-white",
                                className: b.buttonText,
                                children: x.intl.string(x.t["t9uG/v"]),
                            }),
                            (0, a.jsx)(S, { imageType: 1 }),
                        ],
                    }),
                }),
            (0, a.jsx)(s.P3F, {
                onClick: () => {
                    (0, O.Z)({
                        isGift: !0,
                        giftingOrigin: T.Wt.DM_CHANNEL,
                        analyticsLocations: d,
                        analyticsObject: n,
                        giftRecipient: e,
                        onClose: _,
                        variantsReturnStyle: r.v.VARIANTS_GROUP,
                    });
                },
                children: (0, a.jsxs)("div", {
                    className: i()(b.shopButton, b.categoryButton),
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: b.buttonText,
                            children: x.intl.string(x.t.gFlB9f),
                        }),
                        (0, a.jsx)(S, { imageType: 2 }),
                    ],
                }),
            }),
        ],
    });
}
function S(t) {
    let { imageType: e } = t,
        { avatarPlaceholderSrc: n } = (0, p.Z)({ size: (0, d.y9)(s.EFr.SIZE_80) }),
        o = (0, _.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", s.EFr.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, a.jsx)("div", {
              className: b.wumpusImageContainer,
              children: (0, a.jsx)(s.Eep, {
                  src: 1 === e ? E : C,
                  mediaLayoutType: h.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1,
              }),
          })
        : 2 === e
          ? (0, a.jsx)("div", {
                className: b.shopImageContainer,
                children: (0, a.jsx)(s.qEK, {
                    src: n,
                    avatarDecoration: o,
                    size: s.EFr.SIZE_80,
                    "aria-hidden": !0,
                }),
            })
          : void 0;
}
