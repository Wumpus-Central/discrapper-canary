t.d(e, {
    Z: function () {
        return b;
    }
}),
    t(789020);
var i = t(200651),
    l = t(192379),
    r = t(131388),
    a = t(607070),
    o = t(745510),
    s = t(171246),
    u = t(689011),
    c = t(931905),
    d = t(563132),
    m = t(409813),
    f = t(586585),
    h = t(456251),
    p = t(614277),
    g = t(698708),
    x = t(750143),
    v = t(388032);
function b(n) {
    var e, t;
    let b,
        C,
        { showBenefits: j, handleClose: S, onSubscriptionConfirmation: N } = n,
        { updatedSubscription: T, readySlideId: P, selectedSku: _, selectedStoreListing: y, application: k } = (0, d.usePaymentContext)(),
        E = (0, r.Z)(x.i),
        { createMultipleConfettiAt: Z } = l.useContext(o.h),
        I = null !== (e = null == _ ? void 0 : _.name) && void 0 !== e ? e : '',
        A = () => {
            S(), null == N || N();
        },
        B = P === m.h8.CONFIRM,
        F = (0, s.KW)(null !== (t = null == _ ? void 0 : _.flags) && void 0 !== t ? t : 0),
        R = null != y && y.benefits.length > 0 ? v.intl.formatToPlainString(v.t['+IQQVF'], { benefitCount: y.benefits.length }) : null;
    return (
        j
            ? E
                ? (b = (0, i.jsx)(c.h, {
                      title: v.intl.format(v.t.ea6tZm, { tierName: I }),
                      subtitle: null != y && y.benefits.length > 0 ? v.intl.formatToPlainString(v.t.HNepfn, { benefits: R }) : null,
                      onConfirm: A,
                      confirmCta: v.intl.string(v.t.nlkyw8)
                  }))
                : ((b =
                      null != y && null != k
                          ? (0, i.jsx)(u.Oc, {
                                icon: y.thumbnail,
                                storeListingBenefits: y.benefits,
                                application: k,
                                title: v.intl.format(v.t['Q+qktb'], { tier: I }),
                                subtitle: v.intl.string(v.t.ECKxXV),
                                description: F ? v.intl.format(v.t.MAtQk5, { applicationName: null == k ? void 0 : k.name }) : v.intl.format(v.t.vHkMFx, { tier: I })
                            })
                          : (0, i.jsx)(h.Z, {})),
                  (C = (0, i.jsx)(f.Z, {
                      onPrimary: A,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: v.intl.string(v.t['JtWl+f'])
                  })))
            : (b = E
                  ? (0, i.jsx)(c.m, {
                        tierName: I,
                        onConfirm: A,
                        subscription: T
                    })
                  : (0, i.jsx)(u.xe, {
                        tierName: I,
                        onConfirm: A,
                        subscription: T
                    })),
        l.useEffect(() => {
            a.Z.useReducedMotion && B && Z(window.innerWidth / 2, window.innerHeight / 2);
        }, [Z, B]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(p.C3, {
                    children: [(0, i.jsx)(g.Z, {}), b]
                }),
                null != C && (0, i.jsx)(p.O3, { children: C })
            ]
        })
    );
}
