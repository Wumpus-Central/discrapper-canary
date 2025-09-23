n.d(t, { Z: () => v }), n(997841);
var r = n(951288),
    i = n(647438),
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
            application: k,
        } = (0, d.JL)(),
        E = (0, l.Z)(g.i),
        { createMultipleConfettiAt: _ } = i.useContext(o.h),
        w = null != (t = null == N ? void 0 : N.name) ? t : "",
        Z = () => {
            O(), null == C || C();
        },
        D = P === m.h8.CONFIRM,
        A = (0, s.KW)(null != (n = null == N ? void 0 : N.flags) ? n : 0),
        I =
            null != T && T.benefits.length > 0
                ? x.intl.formatToPlainString(x.t["+IQQVF"], { benefitCount: T.benefits.length })
                : null;
    return (
        y
            ? E
                ? (v = (0, r.jsx)(u.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: w }),
                      subtitle:
                          null != T && T.benefits.length > 0
                              ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: I })
                              : null,
                      onConfirm: Z,
                      confirmCta: x.intl.string(x.t.nlkyw8),
                  }))
                : ((v =
                      null != T && null != k
                          ? (0, r.jsx)(c.Oc, {
                                icon: T.thumbnail,
                                storeListingBenefits: T.benefits,
                                application: k,
                                title: x.intl.format(x.t["Q+qktb"], { tier: w }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: A
                                    ? x.intl.format(x.t.MAtQk5, { applicationName: null == k ? void 0 : k.name })
                                    : x.intl.format(x.t.vHkMFx, { tier: w }),
                            })
                          : (0, r.jsx)(f.Z, {})),
                  (j = (0, r.jsx)(p.Z, {
                      onPrimary: Z,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: x.intl.string(x.t["JtWl+f"]),
                  })))
            : (v = E
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
            a.Z.useReducedMotion && D && _(window.innerWidth / 2, window.innerHeight / 2);
        }, [_, D]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(b.C3, {
                    children: [(0, r.jsx)(h.Z, {}), v],
                }),
                null != j && (0, r.jsx)(b.O3, { children: j }),
            ],
        })
    );
}
