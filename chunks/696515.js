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
    _ = n(756896),
    f = n(589072),
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
function T(e) {
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
function S(e) {
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
    var t, n, i;
    let { hideCloseButton: d = !1, hideCloseOnFullScreen: E, onClose: b, upgradeToPremiumType: y, isEligibleForTrial: O = !1, showTrialBadge: A = !1, showDiscountBadge: N = !1 } = e,
        C = (0, o.apv)((0, s.ZP)()),
        R = y === m.p9.TIER_2,
        P = (0, u.Fv)(O),
        w = (0, p.Ng)(),
        D = null == w || null == (t = w.discount) ? void 0 : t.amount,
        L = R ? I : v,
        x = R ? f.Z : _.Z,
        { step: M, breadcrumbs: k, startedPaymentFlowWithPaymentSourcesRef: j } = (0, l.JL)();
    if (null == k || 0 === k.length) return null;
    let U = k.flatMap((e) => {
        let t = e.useBreadcrumbLabel(O),
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
                n = e.id === c.h8.ADD_PAYMENT_STEPS && !j.current;
            return !O || (O && (t || n));
        })).find((e) => e.id === M),
        B = null != (i = null == G || null == (n = G.sectionHeaderText) ? void 0 : n.call(G)) ? i : null == G ? void 0 : G.label,
        V = null != B && null != M,
        F = P && V && M === c.h8.REVIEW;
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsxs)('div', {
                className: a()(g.headerContainer, R ? g.tier2Background : g.tier0Background, { [g.containerBottomPadding]: !V }),
                children: [
                    (0, r.jsx)(S, { isTier2: R }),
                    !d &&
                        (0, r.jsx)(o.olH, {
                            hideOnFullscreen: E,
                            onClick: b,
                            className: g.closeButtonPosition
                        }),
                    (0, r.jsx)('img', {
                        src: L,
                        alt: '',
                        className: F ? g.bigWumpus : g.wumpus
                    }),
                    (0, r.jsx)('div', {
                        className: g.textContainer,
                        children: (0, r.jsx)(x, {
                            color: C ? 'black' : 'white',
                            className: g.wordmark
                        })
                    })
                ]
            }),
            (A || N) &&
                (0, r.jsx)(h.Z, {
                    isTier2: !!R,
                    discountAmount: D
                }),
            V &&
                (0, r.jsx)(T, {
                    isOneStepCheckout: P,
                    headerText: B,
                    step: M,
                    filteredBreadcrumbs: U
                }),
            F &&
                (0, r.jsx)('div', {
                    className: g.bodyGradientContainer,
                    children: (0, r.jsx)('div', { className: g.bodyGradient })
                })
        ]
    });
};
