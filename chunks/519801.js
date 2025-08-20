n.d(t, { Z: () => v }), n(997841);
var i = n(951288),
    r = n(647438),
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
    b = n(27034),
    h = n(698708),
    g = n(750143),
    x = n(388032);
function v(e) {
    var t, n;
    let v,
        j,
        { showBenefits: y, handleClose: O, onSubscriptionConfirmation: C } = e,
        {
            updatedSubscription: S,
            readySlideId: P,
            selectedSku: N,
            selectedStoreListing: T,
            application: _,
        } = (0, d.JL)(),
        k = (0, l.Z)(g.i),
        { createMultipleConfettiAt: E } = r.useContext(o.h),
        w = null != (t = null == N ? void 0 : N.name) ? t : "",
        Z = () => {
            O(), null == C || C();
        },
        A = P === m.h8.CONFIRM,
        D = (0, s.KW)(null != (n = null == N ? void 0 : N.flags) ? n : 0),
        I =
            null != T && T.benefits.length > 0
                ? x.intl.formatToPlainString(x.t["+IQQVF"], { benefitCount: T.benefits.length })
                : null;
    return (
        y
            ? k
                ? (v = (0, i.jsx)(u.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: w }),
                      subtitle:
                          null != T && T.benefits.length > 0
                              ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: I })
                              : null,
                      onConfirm: Z,
                      confirmCta: x.intl.string(x.t.nlkyw8),
                  }))
                : ((v =
                      null != T && null != _
                          ? (0, i.jsx)(c.Oc, {
                                icon: T.thumbnail,
                                storeListingBenefits: T.benefits,
                                application: _,
                                title: x.intl.format(x.t["Q+qktb"], { tier: w }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: D
                                    ? x.intl.format(x.t.MAtQk5, { applicationName: null == _ ? void 0 : _.name })
                                    : x.intl.format(x.t.vHkMFx, { tier: w }),
                            })
                          : (0, i.jsx)(f.Z, {})),
                  (j = (0, i.jsx)(p.Z, {
                      onPrimary: Z,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: x.intl.string(x.t["JtWl+f"]),
                  })))
            : (v = k
                  ? (0, i.jsx)(u.m, {
                        tierName: w,
                        onConfirm: Z,
                        subscription: S,
                    })
                  : (0, i.jsx)(c.xe, {
                        tierName: w,
                        onConfirm: Z,
                        subscription: S,
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && A && E(window.innerWidth / 2, window.innerHeight / 2);
        }, [E, A]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(b.C3, {
                    children: [(0, i.jsx)(h.Z, {}), v],
                }),
                null != j && (0, i.jsx)(b.O3, { children: j }),
            ],
        })
    );
}
