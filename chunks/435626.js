n.d(e, { default: () => I });
var i = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    s = n(493773),
    c = n(100527),
    l = n(906732),
    u = n(1585),
    _ = n(821982),
    d = n(125988),
    p = n(228624),
    j = n(267097),
    y = n(109213),
    O = n(626135),
    g = n(333867),
    h = n(963249),
    m = n(981631),
    T = n(217702),
    b = n(474936),
    x = n(388032),
    E = n(184575),
    f = n(476945),
    C = n(945182);
function I(t) {
    let { analyticsLocations: e, transitionState: n, onClose: o, giftRecipient: a, analyticsObject: c } = t;
    return (
        (0, s.ZP)(() => {
            O.default.track(m.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: c,
                location_stack: e
            });
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v, {}),
                (0, i.jsxs)(r.Y0X, {
                    size: r.CgR.DYNAMIC,
                    transitionState: n,
                    className: E.modalRoot,
                    children: [
                        (0, i.jsxs)(r.xBx, {
                            className: E.header,
                            separator: !1,
                            children: [
                                (0, i.jsx)(r.vwX, {
                                    tag: r.RB0.H4,
                                    children: x.intl.string(x.t.YBGjsr)
                                }),
                                (0, i.jsx)(r.olH, {
                                    onClick: () => {
                                        O.default.track(m.rMx.MODAL_DISMISSED, {
                                            type: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: m.qAy.BUTTON_CTA
                                        }),
                                            o();
                                    },
                                    className: E.cursorPointer
                                })
                            ]
                        }),
                        (0, i.jsx)(r.hzk, {
                            className: E.modalContent,
                            children: (0, i.jsx)(N, {
                                analyticsLocations: e,
                                giftRecipient: a,
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
let v = () => ((0, j.Z)(), null);
function N(t) {
    let { giftRecipient: e, analyticsObject: n, onClose: o } = t,
        { showBothNitroSkusInCategorySelect: s } = y.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        u = (0, p.hv)('CategoryButtons'),
        { analyticsLocations: _ } = (0, l.ZP)(c.Z.GIFT_CATEGORY_SELECT_MODAL),
        d = (t) => {
            t && o();
        },
        j = (t) => {
            var i, o;
            let a = m.Qqv.NITRO_SKU_SELECTION;
            t === b.Si.TIER_2 ? (a = m.Qqv.NITRO_STANDARD) : t === b.Si.TIER_0 && (a = m.Qqv.NITRO_BASIC),
                (0, h.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: b.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: _,
                    subscriptionTier: t,
                    analyticsObject:
                        ((i = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        })
                                    )),
                                    i.forEach(function (e) {
                                        var i;
                                        (i = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (t[e] = i);
                                    });
                            }
                            return t;
                        })({}, n)),
                        (o = o =
                            {
                                section: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                object: m.qAy.GIFT_CATEGORY_OPTION,
                                objectType: a
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (t) {
                                  Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(o, t));
                              }),
                        i),
                    onClose: d
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.P3F, {
                onClick: () => j(s ? b.Si.TIER_2 : void 0),
                children: (0, i.jsxs)('div', {
                    className: a()(E.categoryButton, E.nitroButton),
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: E.buttonText,
                            children: x.intl.string(x.t['lG6a5+'])
                        }),
                        (0, i.jsx)(S, { imageType: 0 })
                    ]
                })
            }),
            s &&
                (0, i.jsx)(r.P3F, {
                    onClick: () => j(b.Si.TIER_0),
                    children: (0, i.jsxs)('div', {
                        className: a()(E.nitroBasicButton, E.categoryButton),
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: E.buttonText,
                                children: x.intl.string(x.t['t9uG/v'])
                            }),
                            (0, i.jsx)(S, { imageType: 1 })
                        ]
                    })
                }),
            (0, i.jsx)(r.P3F, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: b.Wt.DM_CHANNEL,
                        analyticsLocations: _,
                        analyticsObject: n,
                        giftRecipient: e,
                        onClose: d,
                        variantsReturnStyle: u
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: a()(E.shopButton, E.categoryButton),
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: E.buttonText,
                            children: x.intl.string(x.t.gFlB9f)
                        }),
                        (0, i.jsx)(S, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function S(t) {
    let { imageType: e } = t,
        { avatarPlaceholderSrc: n } = (0, d.Z)({ size: (0, u.y9)(r.EFr.SIZE_80) }),
        o = (0, _.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', r.EFr.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, i.jsx)('div', {
              className: E.wumpusImageContainer,
              children: (0, i.jsx)(r.Eep, {
                  src: 1 === e ? f : C,
                  mediaLayoutType: T.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === e
          ? (0, i.jsx)('div', {
                className: E.shopImageContainer,
                children: (0, i.jsx)(r.qEK, {
                    src: n,
                    avatarDecoration: o,
                    size: r.EFr.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
