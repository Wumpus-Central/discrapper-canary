n.d(t, { Z: () => j }), n(997841);
var r = n(54381),
    i = n(473749),
    l = n(131388),
    a = n(607070),
    o = n(745510),
    s = n(171246),
    c = n(689011),
    u = n(931905),
    d = n(563132),
    m = n(409813),
    p = n(586585),
    f = n(456251),
    b = n(614277),
    h = n(698708),
    g = n(750143),
    x = n(388032);
function j(e) {
    var t, n;
    let j,
        v,
        { showBenefits: y, handleClose: O, onSubscriptionConfirmation: C } = e,
        {
            updatedSubscription: S,
            readySlideId: P,
            selectedSku: N,
            selectedStoreListing: E,
            application: T,
        } = (0, d.JL)(),
        k = (0, l.Z)(g.i),
        { createMultipleConfettiAt: _ } = i.useContext(o.h),
        w = null != (t = null == N ? void 0 : N.name) ? t : "",
        Z = () => {
            O(), null == C || C();
        },
        A = P === m.h8.CONFIRM,
        D = (0, s.KW)(null != (n = null == N ? void 0 : N.flags) ? n : 0),
        I =
            null != E && E.benefits.length > 0
                ? x.intl.formatToPlainString(x.t["+IQQVM"], { benefitCount: E.benefits.length })
                : null;
    return (
        y
            ? k
                ? (j = (0, r.jsx)(u.h, {
                      title: x.intl.format(x.t.ea6tZr, { tierName: w }),
                      subtitle:
                          null != E && E.benefits.length > 0
                              ? x.intl.formatToPlainString(x.t.HNepft, { benefits: I })
                              : null,
                      onConfirm: Z,
                      confirmCta: x.intl.string(x.t.nlkywz),
                  }))
                : ((j =
                      null != E && null != T
                          ? (0, r.jsx)(c.Oc, {
                                icon: E.thumbnail,
                                storeListingBenefits: E.benefits,
                                application: T,
                                title: x.intl.format(x.t["Q+qktS"], { tier: w }),
                                subtitle: x.intl.string(x.t.ECKxXU),
                                description: D
                                    ? x.intl.format(x.t["MAtQk/"], { applicationName: null == T ? void 0 : T.name })
                                    : x.intl.format(x.t.vHkMF4, { tier: w }),
                            })
                          : (0, r.jsx)(f.Z, {})),
                  (v = (0, r.jsx)(p.Z, {
                      onPrimary: Z,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: x.intl.string(x.t["JtWl+a"]),
                  })))
            : (j = k
                  ? (0, r.jsx)(u.m, {
                        tierName: w,
                        onConfirm: Z,
                        subscription: S,
                    })
                  : (0, r.jsx)(c.xe, {
                        tierName: w,
                        onConfirm: Z,
                        subscription: S,
                    })),
        i.useEffect(() => {
            a.Z.useReducedMotion && A && _(window.innerWidth / 2, window.innerHeight / 2);
        }, [_, A]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(b.C3, {
                    children: [(0, r.jsx)(h.Z, {}), j],
                }),
                null != v && (0, r.jsx)(b.O3, { children: v }),
            ],
        })
    );
}
