i.d(a, { default: () => O });
var e = i(200651);
i(192379);
var n = i(120356),
    o = i.n(n),
    s = i(481060),
    c = i(493773),
    r = i(100527),
    l = i(906732),
    _ = i(1585),
    u = i(821982),
    d = i(125988),
    T = i(228624),
    h = i(267097),
    x = i(109213),
    m = i(626135),
    E = i(333867),
    g = i(963249),
    C = i(981631),
    j = i(217702),
    p = i(474936),
    I = i(388032),
    y = i(521050),
    N = i(476945),
    B = i(945182);
function O(t) {
    let { analyticsLocations: a, transitionState: i, onClose: n, giftRecipient: o, analyticsObject: r } = t;
    return (
        (0, c.ZP)(() => {
            m.default.track(C.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: r,
                location_stack: a
            });
        }),
        (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(R, {}),
                (0, e.jsxs)(s.Y0X, {
                    size: s.CgR.DYNAMIC,
                    transitionState: i,
                    className: y.modalRoot,
                    children: [
                        (0, e.jsxs)(s.xBx, {
                            className: y.header,
                            separator: !1,
                            children: [
                                (0, e.jsx)(s.vwX, {
                                    tag: s.RB0.H4,
                                    children: I.intl.string(I.t.YBGjsr)
                                }),
                                (0, e.jsx)(s.olH, {
                                    onClick: () => {
                                        m.default.track(C.rMx.MODAL_DISMISSED, {
                                            type: C.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: C.qAy.BUTTON_CTA
                                        }),
                                            n();
                                    },
                                    className: y.cursorPointer
                                })
                            ]
                        }),
                        (0, e.jsx)(s.hzk, {
                            className: y.modalContent,
                            children: (0, e.jsx)(f, {
                                analyticsLocations: a,
                                giftRecipient: o,
                                analyticsObject: r,
                                onClose: n
                            })
                        })
                    ]
                })
            ]
        })
    );
}
let R = () => ((0, h.Z)(), null);
function f(t) {
    let { giftRecipient: a, analyticsObject: i, onClose: n } = t,
        { showBothNitroSkusInCategorySelect: c } = x.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        _ = (0, T.hv)('CategoryButtons'),
        { analyticsLocations: u } = (0, l.ZP)(r.Z.GIFT_CATEGORY_SELECT_MODAL),
        d = (t) => {
            t && n();
        },
        h = (t) => {
            let e = C.Qqv.NITRO_SKU_SELECTION;
            t === p.Si.TIER_2 ? (e = C.Qqv.NITRO_STANDARD) : t === p.Si.TIER_0 && (e = C.Qqv.NITRO_BASIC),
                (0, g.Z)({
                    isGift: !0,
                    giftRecipient: a,
                    giftingOrigin: p.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: u,
                    subscriptionTier: t,
                    analyticsObject: {
                        ...i,
                        section: C.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: C.qAy.GIFT_CATEGORY_OPTION,
                        objectType: e
                    },
                    onClose: d
                });
        };
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(s.P3F, {
                onClick: () => h(c ? p.Si.TIER_2 : void 0),
                children: (0, e.jsxs)('div', {
                    className: o()(y.categoryButton, y.nitroButton),
                    children: [
                        (0, e.jsx)(s.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: y.buttonText,
                            children: I.intl.string(I.t['lG6a5+'])
                        }),
                        (0, e.jsx)(S, { imageType: 0 })
                    ]
                })
            }),
            c &&
                (0, e.jsx)(s.P3F, {
                    onClick: () => h(p.Si.TIER_0),
                    children: (0, e.jsxs)('div', {
                        className: o()(y.nitroBasicButton, y.categoryButton),
                        children: [
                            (0, e.jsx)(s.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: y.buttonText,
                                children: I.intl.string(I.t['t9uG/v'])
                            }),
                            (0, e.jsx)(S, { imageType: 1 })
                        ]
                    })
                }),
            (0, e.jsx)(s.P3F, {
                onClick: () => {
                    (0, E.Z)({
                        isGift: !0,
                        giftingOrigin: p.Wt.DM_CHANNEL,
                        analyticsLocations: u,
                        analyticsObject: i,
                        giftRecipient: a,
                        onClose: d,
                        variantsReturnStyle: _
                    });
                },
                children: (0, e.jsxs)('div', {
                    className: o()(y.shopButton, y.categoryButton),
                    children: [
                        (0, e.jsx)(s.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: y.buttonText,
                            children: I.intl.string(I.t.gFlB9f)
                        }),
                        (0, e.jsx)(S, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function S(t) {
    let { imageType: a } = t,
        { avatarPlaceholderSrc: i } = (0, d.Z)({ size: (0, _.y9)(s.EFr.SIZE_80) }),
        n = (0, u.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', s.EFr.SIZE_80, !1);
    return 0 === a || 1 === a
        ? (0, e.jsx)('div', {
              className: y.wumpusImageContainer,
              children: (0, e.jsx)(s.Eep, {
                  src: 1 === a ? N : B,
                  mediaLayoutType: j.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === a
          ? (0, e.jsx)('div', {
                className: y.shopImageContainer,
                children: (0, e.jsx)(s.qEK, {
                    src: i,
                    avatarDecoration: n,
                    size: s.EFr.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
