n.d(t, { Z: () => v }), n(789020);
var r = n(200651),
    i = n(192379),
    l = n(131388),
    a = n(607070),
    o = n(745510),
    s = n(171246),
    c = n(689011),
    u = n(931905),
    d = n(563132),
    m = n(409813),
    f = n(586585),
    p = n(456251),
    b = n(614277),
    h = n(698708),
    g = n(750143),
    x = n(388032);
function v(e) {
    var t, n;
    let v,
        N,
        { showBenefits: j, handleClose: y, onSubscriptionConfirmation: C } = e,
        { updatedSubscription: O, readySlideId: S, selectedSku: P, selectedStoreListing: k, application: W } = (0, d.JL)(),
        _ = (0, l.Z)(g.i),
        { createMultipleConfettiAt: E } = i.useContext(o.h),
        T = null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : '',
        w = () => {
            y(), null == C || C();
        },
        Z = S === m.h8.CONFIRM,
        I = (0, s.KW)(null !== (n = null == P ? void 0 : P.flags) && void 0 !== n ? n : 0),
        A = null != k && k.benefits.length > 0 ? x.NW.formatToPlainString(x.t['+IQQVF'], { benefitCount: k.benefits.length }) : null;
    return (
        j
            ? _
                ? (v = (0, r.jsx)(u.h, {
                      title: x.NW.format(x.t.ea6tZm, { tierName: T }),
                      subtitle: null != k && k.benefits.length > 0 ? x.NW.formatToPlainString(x.t.HNepfn, { benefits: A }) : null,
                      onConfirm: w,
                      confirmCta: x.NW.string(x.t.nlkyw8)
                  }))
                : ((v =
                      null != k && null != W
                          ? (0, r.jsx)(c.Oc, {
                                icon: k.thumbnail,
                                storeListingBenefits: k.benefits,
                                application: W,
                                title: x.NW.format(x.t['Q+qktb'], { tier: T }),
                                subtitle: x.NW.string(x.t.ECKxXV),
                                description: I ? x.NW.format(x.t.MAtQk5, { applicationName: null == W ? void 0 : W.name }) : x.NW.format(x.t.vHkMFx, { tier: T })
                            })
                          : (0, r.jsx)(p.Z, {})),
                  (N = (0, r.jsx)(f.Z, {
                      onPrimary: w,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: x.NW.string(x.t['JtWl+f'])
                  })))
            : (v = _
                  ? (0, r.jsx)(u.m, {
                        tierName: T,
                        onConfirm: w,
                        subscription: O
                    })
                  : (0, r.jsx)(c.xe, {
                        tierName: T,
                        onConfirm: w,
                        subscription: O
                    })),
        i.useEffect(() => {
            a.Z.useReducedMotion && Z && E(window.innerWidth / 2, window.innerHeight / 2);
        }, [E, Z]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(b.C3, {
                    children: [(0, r.jsx)(h.Z, {}), v]
                }),
                null != N && (0, r.jsx)(b.O3, { children: N })
            ]
        })
    );
}
