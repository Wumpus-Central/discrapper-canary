r.d(e, { default: () => T });
var a = r(477900);
r(582128);
var n = r(776310),
    s = r(575593),
    l = r(772707),
    i = r(116833),
    o = r(793574),
    c = r(688810),
    u = r(206835),
    p = r(298072),
    f = r(993408),
    d = r(450481),
    E = r(442759),
    A = r(953150),
    C = r(623373),
    L = r(536572),
    m = r(524246),
    R = r(14368),
    v = r(213530),
    h = r(184264),
    k = r(758836),
    I = r(375708),
    O = r(794293);
let T = (t) => {
    let {
            transitionState: e,
            product: r,
            onClose: T,
            analyticsLocations: y,
            overrideTitle: _,
            overrideDescription: g,
            shouldShowPromotionalExperience: x,
            purchaseType: D = k.gs.FIAT,
            overrideGraphic: F,
            overrideGradientColor: P,
        } = t,
        b = (0, p.Q)(r),
        j = (0, C.rb)(r, b),
        { analyticsLocations: N } = (0, c.Ay)([...y, o.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: S } = (function (t) {
            var e;
            let r,
                {
                    firstProfileEffect: a,
                    firstAvatarDecoration: n,
                    firstNameplate: s,
                    firstProfileFrame: l,
                } = (0, E.f5)(t),
                i = (0, f.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: a,
                firstNameplate: s,
                isBundle: i,
                firstProfileFrame: l,
                hasRequiredProductItems: i
                    ? (function (t) {
                          let { firstAvatarDecoration: e, firstProfileEffect: r, firstNameplate: a } = t;
                          return (null != e && null != r && null == a) || (null != e && null != r && null != a);
                      })(
                          ((e = t.items),
                          {
                              firstProfileEffect: (r = new E.Ym(e)).firstProfileEffect,
                              firstAvatarDecoration: r.firstAvatarDecoration,
                              firstNameplate: r.firstNameplate,
                          }),
                      )
                    : null != n || null != a || null != s || null != l,
            };
        })(j),
        w = (0, u.A)({ analyticsLocations: N }),
        V = I.intl.string(I.t.eZrmtq),
        {
            environment: G,
            modalRef: M,
            confettiCanvas: B,
            setConfettiCanvas: q,
            customConfettiDisplayOptions: $,
        } = (0, h.mO)(j, D),
        H = (0, L.VG)(j);
    (0, h.$V)(j, N);
    let { handleUseNow: K, isApplying: Q, canUseNow: U } = (0, d.p)({ product: j, onSuccess: T, onError: T }),
        W = (0, h.$k)({
            product: j,
            overrideTitle: _,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: x,
            productName: H,
        }),
        Y = (0, h.v8)({
            product: j,
            overrideDescription: g,
            productName: H,
            shouldShowPromotionalExperience: x,
            promotionalRewardCollectedText: V,
        }),
        Z = (0, h.aG)({
            product: j,
            onClose: T,
            analyticsLocations: N,
            hasRequiredProductItems: S,
            handleUseNow: K,
            isApplying: Q,
            canUseNow: U,
            openProfileSettings: w,
        }),
        z = "6/4";
    switch (j.type) {
        case s.R.NAMEPLATE:
        case s.R.AVATAR_DECORATION:
        case s.R.BUNDLE:
            z = "16/9";
            break;
        case s.R.PROFILE_EFFECT:
        case s.R.PROFILE_FRAME:
        default:
            z = "6/4";
    }
    let { confettiColors: J } = (0, A.A)(j.styles),
        X = F ?? {
            type: "dynamic",
            component: i.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: z,
            props: { product: j, forCollectedModal: !0 },
        };
    return (0, a.jsx)(c.f5, {
        value: N,
        children: (0, a.jsxs)("div", {
            ref: M,
            children: [
                (0, a.jsx)(n.Fk, { ref: q, className: O.L, environment: G }),
                (0, a.jsx)(l.k, {
                    graphic: X,
                    title: W,
                    subtitle: Y ?? void 0,
                    onClose: T,
                    transitionState: e,
                    actions: Z,
                    gradientColor: P ?? void 0,
                }),
                null != $
                    ? (0, a.jsx)(v.K, { options: $ })
                    : (0, a.jsx)(m.A, {
                          confettiTarget: M.current,
                          confettiCanvas: B,
                          sprites: (0, R.rA)(j.categorySkuId),
                          colors: J?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
