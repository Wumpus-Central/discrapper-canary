s.d(e, { default: () => T });
var a = s(477900);
s(582128);
var r = s(776310),
    o = s(575593),
    i = s(772707),
    n = s(116833),
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
    O = s(794293);
let T = (t) => {
    let {
            transitionState: e,
            product: s,
            onClose: T,
            analyticsLocations: f,
            overrideTitle: y,
            overrideDescription: I,
            shouldShowPromotionalExperience: _,
            purchaseType: g = m.gs.FIAT,
            overrideGraphic: x,
            overrideGradientColor: F,
        } = t,
        b = (0, d.Q)(s),
        j = (0, A.rb)(s, b),
        { analyticsLocations: S } = (0, l.Ay)([...f, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        D = (0, p.A)({ analyticsLocations: S }),
        V = v.intl.string(v.t.eZrmtq),
        {
            environment: G,
            modalRef: M,
            confettiCanvas: N,
            setConfettiCanvas: P,
            customConfettiDisplayOptions: w,
        } = (0, k.mO)(j, g),
        B = (0, C.VG)(j);
    (0, k.$V)(j, S);
    let { handleUseNow: $, isApplying: q, canUseNow: H } = (0, E.p)({ product: j, onSuccess: T, onError: T }),
        K = (0, k.$k)({
            product: j,
            overrideTitle: y,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: _,
            productName: B,
        }),
        Q = (0, k.v8)({
            product: j,
            overrideDescription: I,
            productName: B,
            shouldShowPromotionalExperience: _,
            promotionalRewardCollectedText: V,
        }),
        U = (0, k.aG)({
            product: j,
            onClose: T,
            analyticsLocations: S,
            handleUseNow: $,
            isApplying: q,
            canUseNow: H,
            openProfileSettings: D,
        }),
        W = "6/4";
    switch (j.type) {
        case o.R.NAMEPLATE:
        case o.R.AVATAR_DECORATION:
        case o.R.BUNDLE:
            W = "16/9";
            break;
        case o.R.PROFILE_EFFECT:
        case o.R.PROFILE_FRAME:
        default:
            W = "6/4";
    }
    let { confettiColors: Z } = (0, u.A)(j.styles),
        z = x ?? {
            type: "dynamic",
            component: n.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: W,
            props: { product: j, forCollectedModal: !0 },
        };
    return (0, a.jsx)(l.f5, {
        value: S,
        children: (0, a.jsxs)("div", {
            ref: M,
            children: [
                (0, a.jsx)(r.Fk, { ref: P, className: O.L, environment: G }),
                (0, a.jsx)(i.k, {
                    graphic: z,
                    title: K,
                    subtitle: Q ?? void 0,
                    onClose: T,
                    transitionState: e,
                    actions: U,
                    gradientColor: F ?? void 0,
                }),
                null != w
                    ? (0, a.jsx)(h.K, { options: w })
                    : (0, a.jsx)(L.A, {
                          confettiTarget: M.current,
                          confettiCanvas: N,
                          sprites: (0, R.rA)(j.categorySkuId),
                          colors: Z?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
