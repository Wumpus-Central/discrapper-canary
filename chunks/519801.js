n.d(t, { Z: () => v }), n(997841);
var i = n(255367),
    r = n(73800),
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
        j,
        { showBenefits: y, handleClose: C, onSubscriptionConfirmation: O } = e,
        { updatedSubscription: S, readySlideId: P, selectedSku: k, selectedStoreListing: N, application: _ } = (0, d.JL)(),
        E = (0, l.Z)(g.i),
        { createMultipleConfettiAt: T } = r.useContext(o.h),
        w = null != (t = null == k ? void 0 : k.name) ? t : '',
        Z = () => {
            C(), null == O || O();
        },
        I = P === m.h8.CONFIRM,
        A = (0, s.KW)(null != (n = null == k ? void 0 : k.flags) ? n : 0),
        D = null != N && N.benefits.length > 0 ? x.intl.formatToPlainString(x.t['+IQQVF'], { benefitCount: N.benefits.length }) : null;
    return (
        y
            ? E
                ? (v = (0, i.jsx)(u.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: w }),
                      subtitle: null != N && N.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: D }) : null,
                      onConfirm: Z,
                      confirmCta: x.intl.string(x.t.nlkyw8)
                  }))
                : ((v =
                      null != N && null != _
                          ? (0, i.jsx)(c.Oc, {
                                icon: N.thumbnail,
                                storeListingBenefits: N.benefits,
                                application: _,
                                title: x.intl.format(x.t['Q+qktb'], { tier: w }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: A ? x.intl.format(x.t.MAtQk5, { applicationName: null == _ ? void 0 : _.name }) : x.intl.format(x.t.vHkMFx, { tier: w })
                            })
                          : (0, i.jsx)(p.Z, {})),
                  (j = (0, i.jsx)(f.Z, {
                      onPrimary: Z,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: x.intl.string(x.t['JtWl+f'])
                  })))
            : (v = E
                  ? (0, i.jsx)(u.m, {
                        tierName: w,
                        onConfirm: Z,
                        subscription: S
                    })
                  : (0, i.jsx)(c.xe, {
                        tierName: w,
                        onConfirm: Z,
                        subscription: S
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && I && T(window.innerWidth / 2, window.innerHeight / 2);
        }, [T, I]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(b.C3, {
                    children: [(0, i.jsx)(h.Z, {}), v]
                }),
                null != j && (0, i.jsx)(b.O3, { children: j })
            ]
        })
    );
}
