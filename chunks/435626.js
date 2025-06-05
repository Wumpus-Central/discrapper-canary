n.d(e, { default: () => v });
var a = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    r = n(481060),
    s = n(493773),
    c = n(100527),
    l = n(906732),
    u = n(1585),
    d = n(821982),
    p = n(125988),
    _ = n(228624),
    g = n(267097),
    j = n(109213),
    y = n(626135),
    O = n(333867),
    h = n(963249),
    m = n(981631),
    f = n(217702),
    x = n(474936),
    T = n(388032),
    b = n(184575),
    E = n(476945),
    C = n(945182);
function v(t) {
    let { analyticsLocations: e, transitionState: n, onClose: o, giftRecipient: i, analyticsObject: c } = t;
    return (
        (0, s.ZP)(() => {
            y.default.track(m.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: c,
                location_stack: e
            });
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(I, {}),
                (0, a.jsxs)(r.Y0X, {
                    size: r.CgR.DYNAMIC,
                    transitionState: n,
                    className: b.modalRoot,
                    parentComponent: 'GiftCategorySelectModal',
                    children: [
                        (0, a.jsxs)(r.xBx, {
                            className: b.header,
                            separator: !1,
                            children: [
                                (0, a.jsx)(r.vwX, {
                                    tag: r.RB0.H4,
                                    children: T.intl.string(T.t.YBGjsr)
                                }),
                                (0, a.jsx)(r.olH, {
                                    onClick: () => {
                                        y.default.track(m.rMx.MODAL_DISMISSED, {
                                            type: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: m.qAy.BUTTON_CTA
                                        }),
                                            o();
                                    },
                                    className: b.cursorPointer
                                })
                            ]
                        }),
                        (0, a.jsx)(r.hzk, {
                            className: b.modalContent,
                            children: (0, a.jsx)(N, {
                                analyticsLocations: e,
                                giftRecipient: i,
                                analyticsObject: c,
                                onClose: o
                            })
                        })
                    ]
                })
            ]
        })
    );
}
let I = () => ((0, g.Z)(), null);
function N(t) {
    let { giftRecipient: e, analyticsObject: n, onClose: o } = t,
        { showBothNitroSkusInCategorySelect: s } = j.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        u = (0, _.hv)('CategoryButtons'),
        { analyticsLocations: d } = (0, l.ZP)(c.Z.GIFT_CATEGORY_SELECT_MODAL),
        p = (t) => {
            t && o();
        },
        g = (t) => {
            var a, o;
            let i = m.Qqv.NITRO_SKU_SELECTION;
            t === x.Si.TIER_2 ? (i = m.Qqv.NITRO_STANDARD) : t === x.Si.TIER_0 && (i = m.Qqv.NITRO_BASIC),
                (0, h.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: x.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: d,
                    subscriptionTier: t,
                    analyticsObject:
                        ((a = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    a = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        })
                                    )),
                                    a.forEach(function (e) {
                                        var a;
                                        (a = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (t[e] = a);
                                    });
                            }
                            return t;
                        })({}, n)),
                        (o = o =
                            {
                                section: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                object: m.qAy.GIFT_CATEGORY_OPTION,
                                objectType: i
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
                    onClose: p
                });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.P3F, {
                onClick: () => g(s ? x.Si.TIER_2 : void 0),
                children: (0, a.jsxs)('div', {
                    className: i()(b.categoryButton, b.nitroButton),
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: b.buttonText,
                            children: T.intl.string(T.t['lG6a5+'])
                        }),
                        (0, a.jsx)(S, { imageType: 0 })
                    ]
                })
            }),
            s &&
                (0, a.jsx)(r.P3F, {
                    onClick: () => g(x.Si.TIER_0),
                    children: (0, a.jsxs)('div', {
                        className: i()(b.nitroBasicButton, b.categoryButton),
                        children: [
                            (0, a.jsx)(r.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: b.buttonText,
                                children: T.intl.string(T.t['t9uG/v'])
                            }),
                            (0, a.jsx)(S, { imageType: 1 })
                        ]
                    })
                }),
            (0, a.jsx)(r.P3F, {
                onClick: () => {
                    (0, O.Z)({
                        isGift: !0,
                        giftingOrigin: x.Wt.DM_CHANNEL,
                        analyticsLocations: d,
                        analyticsObject: n,
                        giftRecipient: e,
                        onClose: p,
                        variantsReturnStyle: u
                    });
                },
                children: (0, a.jsxs)('div', {
                    className: i()(b.shopButton, b.categoryButton),
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: b.buttonText,
                            children: T.intl.string(T.t.gFlB9f)
                        }),
                        (0, a.jsx)(S, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function S(t) {
    let { imageType: e } = t,
        { avatarPlaceholderSrc: n } = (0, p.Z)({ size: (0, u.y9)(r.EFr.SIZE_80) }),
        o = (0, d.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', r.EFr.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, a.jsx)('div', {
              className: b.wumpusImageContainer,
              children: (0, a.jsx)(r.Eep, {
                  src: 1 === e ? E : C,
                  mediaLayoutType: f.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === e
          ? (0, a.jsx)('div', {
                className: b.shopImageContainer,
                children: (0, a.jsx)(r.qEK, {
                    src: n,
                    avatarDecoration: o,
                    size: r.EFr.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
