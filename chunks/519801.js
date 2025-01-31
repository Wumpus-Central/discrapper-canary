t.d(e, { Z: () => b }), t(789020);
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
    x = t(698708),
    g = t(750143),
    v = t(388032);
function b(n) {
    var e, t;
    let b,
        C,
        { showBenefits: j, handleClose: S, onSubscriptionConfirmation: N } = n,
        { updatedSubscription: k, readySlideId: _, selectedSku: T, selectedStoreListing: E, application: Z } = (0, d.JL)(),
        P = (0, r.Z)(g.i),
        { createMultipleConfettiAt: y } = l.useContext(o.h),
        I = null !== (e = null == T ? void 0 : T.name) && void 0 !== e ? e : '',
        A = () => {
            S(), null == N || N();
        },
        L = _ === m.h8.CONFIRM,
        R = (0, s.KW)(null !== (t = null == T ? void 0 : T.flags) && void 0 !== t ? t : 0),
        w = null != E && E.benefits.length > 0 ? v.intl.formatToPlainString(v.t['+IQQVF'], { benefitCount: E.benefits.length }) : null;
    return (
        j
            ? P
                ? (b = (0, i.jsx)(c.h, {
                      title: v.intl.format(v.t.ea6tZm, { tierName: I }),
                      subtitle: null != E && E.benefits.length > 0 ? v.intl.formatToPlainString(v.t.HNepfn, { benefits: w }) : null,
                      onConfirm: A,
                      confirmCta: v.intl.string(v.t.nlkyw8)
                  }))
                : ((b =
                      null != E && null != Z
                          ? (0, i.jsx)(u.Oc, {
                                icon: E.thumbnail,
                                storeListingBenefits: E.benefits,
                                application: Z,
                                title: v.intl.format(v.t['Q+qktb'], { tier: I }),
                                subtitle: v.intl.string(v.t.ECKxXV),
                                description: R ? v.intl.format(v.t.MAtQk5, { applicationName: null == Z ? void 0 : Z.name }) : v.intl.format(v.t.vHkMFx, { tier: I })
                            })
                          : (0, i.jsx)(h.Z, {})),
                  (C = (0, i.jsx)(f.Z, {
                      onPrimary: A,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: v.intl.string(v.t['JtWl+f'])
                  })))
            : (b = P
                  ? (0, i.jsx)(c.m, {
                        tierName: I,
                        onConfirm: A,
                        subscription: k
                    })
                  : (0, i.jsx)(u.xe, {
                        tierName: I,
                        onConfirm: A,
                        subscription: k
                    })),
        l.useEffect(() => {
            a.Z.useReducedMotion && L && y(window.innerWidth / 2, window.innerHeight / 2);
        }, [y, L]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(p.C3, {
                    children: [(0, i.jsx)(x.Z, {}), b]
                }),
                null != C && (0, i.jsx)(p.O3, { children: C })
            ]
        })
    );
}
