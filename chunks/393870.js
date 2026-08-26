s.d(e, { default: () => T });
var a = s(477900);
s(582128);
var r = s(776310),
    n = s(575593),
    o = s(772707),
    i = s(116833),
    c = s(793574),
    l = s(688810),
    p = s(206835),
    d = s(298072),
    E = s(450481),
    u = s(953150),
    A = s(623373),
    C = s(536572),
    L = s(524246),
    R = s(14368),
    h = s(213530),
    k = s(184264),
    m = s(758836),
    v = s(375708),
    O = s(232666);
let T = (t) => {
    let {
            transitionState: e,
            product: s,
            remainingProducts: T,
            onClose: f,
            analyticsLocations: g,
            overrideTitle: y,
            overrideDescription: I,
            shouldShowPromotionalExperience: _,
            purchaseType: x = m.gs.FIAT,
            overrideGraphic: F,
            overrideGradientColor: b,
        } = t,
        j = (0, d.Q)(s),
        S = (0, A.rb)(s, j),
        { analyticsLocations: D } = (0, l.Ay)([...g, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        V = (0, p.A)({ analyticsLocations: D }),
        G = v.intl.string(v.t.eZrmtq),
        {
            environment: M,
            modalRef: N,
            confettiCanvas: P,
            setConfettiCanvas: w,
            customConfettiDisplayOptions: B,
        } = (0, k.mO)(S, x),
        $ = (0, C.VG)(S);
    (0, k.$V)(S, D);
    let {
            handleUseNow: q,
            isApplying: H,
            canUseNow: K,
        } = (0, E.p)({
            product: S,
            onSuccess: () => {
                (null == T || 0 === T.length) && f();
            },
            onError: f,
        }),
        Q = (0, k.$k)({
            product: S,
            overrideTitle: y,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: _,
            productName: $,
        }),
        U = (0, k.v8)({
            product: S,
            overrideDescription: I,
            productName: $,
            shouldShowPromotionalExperience: _,
            promotionalRewardCollectedText: G,
        }),
        W = (0, k.aG)({
            props: t,
            product: S,
            analyticsLocations: D,
            handleUseNow: q,
            isApplying: H,
            canUseNow: K,
            openProfileSettings: V,
        }),
        Z = "6/4";
    switch (S.type) {
        case n.R.NAMEPLATE:
        case n.R.AVATAR_DECORATION:
        case n.R.BUNDLE:
            Z = "16/9";
            break;
        case n.R.PROFILE_EFFECT:
        case n.R.PROFILE_FRAME:
        default:
            Z = "6/4";
    }
    let { confettiColors: z } = (0, u.A)(S.styles),
        J = F ?? {
            type: "dynamic",
            component: i.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: Z,
            props: { product: S, forCollectedModal: !0 },
        };
    return (0, a.jsx)(l.f5, {
        value: D,
        children: (0, a.jsxs)("div", {
            ref: N,
            children: [
                (0, a.jsx)(r.Fk, { ref: w, className: O.L, environment: M }),
                (0, a.jsx)(o.k, {
                    graphic: J,
                    title: Q,
                    subtitle: U ?? void 0,
                    onClose: f,
                    transitionState: e,
                    actions: W,
                    gradientColor: b ?? void 0,
                }),
                null != B
                    ? (0, a.jsx)(h.K, { options: B })
                    : (0, a.jsx)(L.A, {
                          confettiTarget: N.current,
                          confettiCanvas: P,
                          sprites: (0, R.rA)(S.categorySkuId),
                          colors: z?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
