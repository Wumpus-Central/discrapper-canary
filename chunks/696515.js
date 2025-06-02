n.d(t, { Z: () => A }), n(361932), n(187205);
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(410030),
    l = n(563132),
    c = n(409813),
    u = n(614223),
    d = n(553784),
    f = n(756896),
    _ = n(589072),
    p = n(104494),
    h = n(573702),
    m = n(474936),
    g = n(262531),
    E = n(236078),
    b = n(278345),
    y = n(895601),
    O = n(381126),
    v = n(997892),
    I = n(234286);
function S(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)('div', {
            className: g.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(o.X6q, {
                variant: 'heading-md/bold',
                children: n
            })
        });
    let s = a.length > 1;
    return (0, r.jsxs)('div', {
        className: g.headerTextWrapper,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-lg/semibold',
                children: n
            }),
            s &&
                (0, r.jsx)(d.Z, {
                    activeId: i,
                    breadcrumbs: a
                })
        ]
    });
}
function T(e) {
    let { isTier2: t } = e,
        n = t ? y : E,
        i = t ? O : b;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: g.bigCloud
            }),
            (0, r.jsx)('img', {
                src: i,
                alt: '',
                className: g.mediumCloud
            }),
            (0, r.jsx)('img', {
                src: i,
                alt: '',
                className: g.smallCloud
            })
        ]
    });
}
let A = function (e) {
    var t, n;
    let { hideCloseButton: i = !1, hideCloseOnFullScreen: d, onClose: E, upgradeToPremiumType: b, isEligibleForTrial: y = !1, showTrialBadge: O = !1, showDiscountBadge: A = !1 } = e,
        N = (0, o.apv)((0, s.ZP)()),
        C = b === m.p9.TIER_2,
        P = (0, u.Fv)(y),
        R = (0, p.Ng)(),
        w = null == R || null == (t = R.discount) ? void 0 : t.amount,
        D = C ? I : v,
        L = C ? _.Z : f.Z,
        { step: x, breadcrumbs: k, startedPaymentFlowWithPaymentSourcesRef: M, selectedSkuId: j } = (0, l.JL)();
    if (null == k || 0 === k.length) return null;
    let U = k.flatMap((e) => {
        let t = e.useBreadcrumbLabel(y),
            n = e.sectionHeaderText;
        return null != t
            ? {
                  id: e.id,
                  label: t,
                  sectionHeaderText: n
              }
            : [];
    });
    if (0 === U.length) return null;
    let G = (U = U.filter((e) => {
            let t = e.id !== c.h8.ADD_PAYMENT_STEPS,
                n = e.id === c.h8.ADD_PAYMENT_STEPS && !M.current;
            return !y || (y && (t || n));
        })).find((e) => e.id === x),
        B = null != j ? m.y7[j] : null,
        F = null;
    null != B && (F = null == G || null == (n = G.sectionHeaderText) ? void 0 : n.call(G));
    let V = null != (F = null != F ? F : null == G ? void 0 : G.label) && null != x;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(g.container, C ? g.tier2Background : g.tier0Background, { [g.containerBottomPadding]: !V }),
                children: [
                    (0, r.jsx)(T, { isTier2: C }),
                    !i &&
                        (0, r.jsx)(o.olH, {
                            hideOnFullscreen: d,
                            onClick: E,
                            className: g.closeButtonPosition
                        }),
                    (0, r.jsx)('img', {
                        src: D,
                        alt: '',
                        className: P && V ? g.bigWumpus : g.wumpus
                    }),
                    (0, r.jsx)('div', {
                        className: g.textContainer,
                        children: (0, r.jsx)(L, {
                            color: N ? 'black' : 'white',
                            className: g.wordmark
                        })
                    })
                ]
            }),
            (O || A) &&
                (0, r.jsx)(h.Z, {
                    isTier2: !!C,
                    discountAmount: w
                }),
            V &&
                (0, r.jsx)(S, {
                    isOneStepCheckout: P,
                    headerText: F,
                    step: x,
                    filteredBreadcrumbs: U
                })
        ]
    });
};
