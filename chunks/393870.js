r.d(e, { default: () => _ });
var n = r(627968);
r(64700);
var l = r(106778),
    a = r(575593),
    s = r(158954),
    i = r(397927),
    o = r(793574),
    c = r(688810),
    u = r(206835),
    f = r(298072),
    d = r(993408),
    p = r(320447),
    E = r(450481),
    A = r(442759),
    C = r(306710),
    L = r(623373),
    v = r(660653),
    h = r(536572),
    m = r(524246),
    b = r(14368),
    R = r(213530),
    k = r(961883),
    x = r(758836),
    O = r(985018),
    T = r(290964);
let _ = (t) => {
    let {
            transitionState: e,
            product: r,
            onClose: _,
            analyticsLocations: I,
            overrideTitle: y,
            overrideDescription: P,
            shouldShowPromotionalExperience: g,
            purchaseType: j = x.gs.FIAT,
            overrideGraphic: w,
        } = t,
        D = (0, f.Q)(r),
        N = (0, L.rb)(r, D),
        { analyticsLocations: S } = (0, c.Ay)([...I, o.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: F } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: r, firstNameplate: n } = (0, A.f5)(t),
                l = (0, d.aw)(t);
            return {
                firstAvatarDecoration: r,
                firstProfileEffect: e,
                firstNameplate: n,
                isBundle: l,
                hasRequiredProductItems: l ? (0, v.uh)(t) : null != r || null != e || null != n,
            };
        })(N),
        M = (0, u.A)({ analyticsLocations: S }),
        V = O.intl.string(O.t.eZrmtq),
        {
            environment: B,
            modalRef: G,
            confettiCanvas: q,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: $,
        } = (0, k.mO)(N, j),
        z = (0, h.VG)(N);
    (0, k.$V)(N, S);
    let { handleUseNow: H, isApplying: K } = (0, E.p)({ product: N, onSuccess: _, onError: _ }),
        Q = (0, k.$k)({
            product: N,
            overrideTitle: y,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: g,
            productName: z,
        }),
        U = (0, k.v8)({
            product: N,
            overrideDescription: P,
            productName: z,
            shouldShowPromotionalExperience: g,
            promotionalRewardCollectedText: V,
        }),
        Y = (0, k.aG)({
            product: N,
            onClose: _,
            analyticsLocations: S,
            hasRequiredProductItems: F,
            handleUseNow: H,
            isApplying: K,
            openProfileSettings: M,
        }),
        { enabled: Z } = (0, p.P)("CollectiblesCollectedModal"),
        J = "6/4";
    switch (N.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            J = "16/9";
            break;
        case a.R.BUNDLE:
            J = Z ? "16/9" : "6/4";
            break;
        case a.R.PROFILE_EFFECT:
        default:
            J = "6/4";
    }
    let { confettiColors: X } = (0, C.A)(N.styles),
        tt = w ?? {
            type: "dynamic",
            component: i.Oz7.COLLECTIBLES_PREVIEW,
            aspectRatio: J,
            props: { product: N, forCollectedModal: !0 },
        };
    return (0, n.jsx)(c.f5, {
        value: S,
        children: (0, n.jsxs)("div", {
            ref: G,
            children: [
                (0, n.jsx)(l.Fk, { ref: W, className: T.L, environment: B }),
                (0, n.jsx)(s.ExpressiveModal, {
                    graphic: tt,
                    title: Q,
                    subtitle: U ?? void 0,
                    onClose: _,
                    transitionState: e,
                    actions: Y,
                }),
                null != $
                    ? (0, n.jsx)(R.K, { options: $ })
                    : (0, n.jsx)(m.A, {
                          confettiTarget: G.current,
                          confettiCanvas: q,
                          sprites: (0, b.rA)(N.categorySkuId),
                          colors: X?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
