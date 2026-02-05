e.d(t, { default: () => N });
var i = e(627968),
    s = e(503698),
    n = e.n(s),
    c = e(635358),
    o = e(397927),
    l = e(964486),
    r = e(793574),
    _ = e(688810),
    d = e(954921),
    T = e(920064),
    p = e(278539),
    x = e(315949),
    g = e(547065),
    j = e(954571),
    m = e(44120),
    E = e(532794),
    h = e(652215),
    y = e(838541),
    A = e(788868),
    u = e(985018),
    C = e(649178),
    O = e(793481),
    I = e(497451);
function N(a) {
    let { analyticsLocations: t, transitionState: e, onClose: s, giftRecipient: n, analyticsObject: c } = a;
    return (
        (0, l.Ay)(() => {
            j.default.track(h.HAw.GIFT_CATEGORY_SELECT_MODAL_OPENED, { location: c, location_stack: t });
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v, {}),
                (0, i.jsxs)(o.EOs, {
                    "data-migration-pending": !0,
                    size: o.rIJ.DYNAMIC,
                    transitionState: e,
                    className: C.CR,
                    parentComponent: "GiftCategorySelectModal",
                    children: [
                        (0, i.jsxs)(o.rQ0, {
                            "data-migration-pending": !0,
                            className: C.wx,
                            separator: !1,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: "heading-md/semibold",
                                    children: u.intl.string(u.t.YBGjso),
                                }),
                                (0, i.jsx)(o.s_y, {
                                    "data-migration-pending": !0,
                                    onClick: () => {
                                        j.default.track(h.HAw.MODAL_DISMISSED, {
                                            type: h.JJy.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: h.ZSU.BUTTON_CTA,
                                        }),
                                            s();
                                    },
                                    className: C.or,
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.$mQ, {
                            "data-migration-pending": !0,
                            className: C.jE,
                            children: (0, i.jsx)(R, {
                                analyticsLocations: t,
                                giftRecipient: n,
                                analyticsObject: c,
                                onClose: s,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
let v = () => ((0, x.A)(), null);
function R(a) {
    let { giftRecipient: t, analyticsObject: e, onClose: s } = a,
        { showBothNitroSkusInCategorySelect: l } = g.P.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
        ),
        { analyticsLocations: d } = (0, _.Ay)(r.A.GIFT_CATEGORY_SELECT_MODAL),
        T = (a) => {
            a && s();
        },
        p = (a) => {
            let i = h.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
            a === A.pe.TIER_2
                ? (i = h.AnalyticsObjectTypes.NITRO_STANDARD)
                : a === A.pe.TIER_0 && (i = h.AnalyticsObjectTypes.NITRO_BASIC),
                (0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: A.vQ.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: d,
                    subscriptionTier: a,
                    analyticsObject: {
                        ...e,
                        section: h.JJy.GIFT_CATEGORY_SELECT_MODAL,
                        object: h.ZSU.GIFT_CATEGORY_OPTION,
                        objectType: i,
                    },
                    onClose: T,
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.DUT, {
                onClick: () => p(l ? A.pe.TIER_2 : void 0),
                children: (0, i.jsxs)("div", {
                    className: n()(C.Hv, C.pr),
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: C._d,
                            children: u.intl.string(u.t.lG6a5x),
                        }),
                        (0, i.jsx)(f, { imageType: 0 }),
                    ],
                }),
            }),
            l &&
                (0, i.jsx)(o.DUT, {
                    onClick: () => p(A.pe.TIER_0),
                    children: (0, i.jsxs)("div", {
                        className: n()(C.pn, C.Hv),
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "display-sm",
                                color: "always-white",
                                className: C._d,
                                children: u.intl.string(u.t["t9uG/o"]),
                            }),
                            (0, i.jsx)(f, { imageType: 1 }),
                        ],
                    }),
                }),
            (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, m.A)({
                        isGift: !0,
                        giftingOrigin: A.vQ.DM_CHANNEL,
                        analyticsLocations: d,
                        analyticsObject: e,
                        giftRecipient: t,
                        onClose: T,
                        variantsReturnStyle: c.g.VARIANTS_GROUP,
                    });
                },
                children: (0, i.jsxs)("div", {
                    className: n()(C.xG, C.Hv),
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: "display-sm",
                            color: "always-white",
                            className: C._d,
                            children: u.intl.string(u.t.gFlB9b),
                        }),
                        (0, i.jsx)(f, { imageType: 2 }),
                    ],
                }),
            }),
        ],
    });
}
function f(a) {
    let { imageType: t } = a,
        { avatarPlaceholderSrc: e } = (0, p.A)({ size: (0, d.Te)(o._3J.SIZE_80) }),
        s = (0, T.A)("a_c3cffc19e9784f7d0b005eecdf1b566e", o._3J.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, i.jsx)("div", {
              className: C.wp,
              children: (0, i.jsx)(o._V3, {
                  src: 1 === t ? O : I,
                  mediaLayoutType: y.dG.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1,
              }),
          })
        : 2 === t
          ? (0, i.jsx)("div", {
                className: C.zT,
                children: (0, i.jsx)(o.euF, { src: e, avatarDecoration: s, size: o._3J.SIZE_80, "aria-hidden": !0 }),
            })
          : void 0;
}
