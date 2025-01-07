n.r(t),
    n.d(t, {
        default: function () {
            return B;
        }
    });
var i,
    o,
    a = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    c = n(481060),
    d = n(493773),
    l = n(100527),
    u = n(906732),
    _ = n(1585),
    f = n(821982),
    h = n(125988),
    p = n(228624),
    m = n(267097),
    v = n(109213),
    b = n(626135),
    g = n(333867),
    C = n(963249),
    I = n(981631),
    S = n(217702),
    E = n(474936),
    T = n(388032),
    A = n(521050),
    x = n(476945),
    y = n(945182);
function B(e) {
    let { analyticsLocations: t, transitionState: n, onClose: i, giftRecipient: o, analyticsObject: r } = e;
    return (
        (0, d.Z)(() => {
            b.default.track(I.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: r,
                location_stack: t
            });
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(j, {}),
                (0, a.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.DYNAMIC,
                    transitionState: n,
                    className: A.modalRoot,
                    children: [
                        (0, a.jsxs)(c.ModalHeader, {
                            className: A.header,
                            separator: !1,
                            children: [
                                (0, a.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H4,
                                    children: T.intl.string(T.t.YBGjsr)
                                }),
                                (0, a.jsx)(c.ModalCloseButton, {
                                    onClick: () => {
                                        b.default.track(I.rMx.MODAL_DISMISSED, {
                                            type: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: I.qAy.BUTTON_CTA
                                        }),
                                            i();
                                    },
                                    className: A.cursorPointer
                                })
                            ]
                        }),
                        (0, a.jsx)(c.ModalContent, {
                            className: A.modalContent,
                            children: (0, a.jsx)(O, {
                                analyticsLocations: t,
                                giftRecipient: o,
                                analyticsObject: r,
                                onClose: i
                            })
                        })
                    ]
                })
            ]
        })
    );
}
((i = o || (o = {}))[(i.NITRO = 0)] = 'NITRO'), (i[(i.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (i[(i.SHOP = 2)] = 'SHOP');
let j = () => ((0, m.Z)(), null);
function O(e) {
    let { giftRecipient: t, analyticsObject: n, onClose: i } = e,
        { showBothNitroSkusInCategorySelect: o } = v.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        r = (0, p.hv)('CategoryButtons'),
        { analyticsLocations: d } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL),
        _ = (e) => {
            e && i();
        },
        f = (e) => {
            let i = I.Qqv.NITRO_SKU_SELECTION;
            e === E.Si.TIER_2 ? (i = I.Qqv.NITRO_STANDARD) : e === E.Si.TIER_0 && (i = I.Qqv.NITRO_BASIC),
                (0, C.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: E.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: d,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...n,
                        section: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: I.qAy.GIFT_CATEGORY_OPTION,
                        objectType: i
                    },
                    onClose: _
                });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Clickable, {
                onClick: () => f(o ? E.Si.TIER_2 : void 0),
                children: (0, a.jsxs)('div', {
                    className: s()(A.categoryButton, A.nitroButton),
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: A.buttonText,
                            children: T.intl.string(T.t['lG6a5+'])
                        }),
                        (0, a.jsx)(R, { imageType: 0 })
                    ]
                })
            }),
            o &&
                (0, a.jsx)(c.Clickable, {
                    onClick: () => f(E.Si.TIER_0),
                    children: (0, a.jsxs)('div', {
                        className: s()(A.nitroBasicButton, A.categoryButton),
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: A.buttonText,
                                children: T.intl.string(T.t['t9uG/v'])
                            }),
                            (0, a.jsx)(R, { imageType: 1 })
                        ]
                    })
                }),
            (0, a.jsx)(c.Clickable, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: E.Wt.DM_CHANNEL,
                        analyticsLocations: d,
                        analyticsObject: n,
                        giftRecipient: t,
                        onClose: _,
                        variantsReturnStyle: r
                    });
                },
                children: (0, a.jsxs)('div', {
                    className: s()(A.shopButton, A.categoryButton),
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: A.buttonText,
                            children: T.intl.string(T.t.gFlB9f)
                        }),
                        (0, a.jsx)(R, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function R(e) {
    let { imageType: t } = e,
        { avatarPlaceholderSrc: n } = (0, h.Z)({ size: (0, _.y9)(c.AvatarSizes.SIZE_80) }),
        i = (0, f.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', c.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, a.jsx)('div', {
              className: A.wumpusImageContainer,
              children: (0, a.jsx)(c.Image, {
                  src: 1 === t ? x : y,
                  mediaLayoutType: S.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === t
          ? (0, a.jsx)('div', {
                className: A.shopImageContainer,
                children: (0, a.jsx)(c.Avatar, {
                    src: n,
                    avatarDecoration: i,
                    size: c.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
