(n.d(t, { Z: () => N }), n(361932), n(187205));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(304789),
    s = n(481060),
    l = n(410030),
    c = n(563132),
    u = n(409813),
    d = n(614223),
    f = n(493572),
    _ = n(756896),
    p = n(589072),
    h = n(104494),
    m = n(573702),
    g = n(474936),
    E = n(348987),
    b = n(236078),
    y = n(278345),
    O = n(895601),
    v = n(381126),
    I = n(997892),
    T = n(234286);
function S(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)('div', {
            className: E.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(s.X6q, {
                variant: 'heading-md/bold',
                children: n
            })
        });
    let o = a.length > 1;
    return (0, r.jsxs)('div', {
        className: E.headerTextWrapper,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-lg/semibold',
                children: n
            }),
            o &&
                (0, r.jsx)(f.Z, {
                    activeId: i,
                    breadcrumbs: a
                })
        ]
    });
}
function A(e) {
    let { isTier2: t } = e,
        n = t ? O : b,
        i = t ? v : y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: E.bigCloud
            }),
            (0, r.jsx)('img', {
                src: i,
                alt: '',
                className: E.mediumCloud
            }),
            (0, r.jsx)('img', {
                src: i,
                alt: '',
                className: E.smallCloud
            })
        ]
    });
}
let N = function (e) {
    var t, n, i;
    let { hideCloseButton: f = !1, hideCloseOnFullScreen: b, onClose: y, upgradeToPremiumType: O, isEligibleForTrial: v = !1, showTrialBadge: N = !1, showDiscountBadge: C = !1 } = e,
        R = (0, s.apv)((0, l.ZP)()),
        P = O === g.p9.TIER_2,
        w = (0, d.Fv)(v),
        D = (0, h.Ng)(),
        L = null == D || null == (t = D.discount) ? void 0 : t.amount,
        x = P ? T : I,
        k = P ? p.Z : _.Z,
        { step: M, breadcrumbs: j, startedPaymentFlowWithPaymentSourcesRef: U } = (0, c.JL)();
    if (null == j || 0 === j.length) return null;
    let G = j.flatMap((e) => {
        let t = e.useBreadcrumbLabel(v),
            n = e.sectionHeaderText;
        return null != t
            ? {
                  id: e.id,
                  label: t,
                  sectionHeaderText: n
              }
            : [];
    });
    if (0 === G.length) return null;
    let B = (G = G.filter((e) => {
            let t = e.id !== u.h8.ADD_PAYMENT_STEPS,
                n = e.id === u.h8.ADD_PAYMENT_STEPS && !U.current;
            return !v || (v && (t || n));
        })).find((e) => e.id === M),
        V = null != (i = null == B || null == (n = B.sectionHeaderText) ? void 0 : n.call(B)) ? i : null == B ? void 0 : B.label,
        F = null != V && null != M,
        Z = w && F && M === u.h8.REVIEW;
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsxs)(o.$, {
                color: P ? 'nitro-pink' : 'nitro-green',
                className: a()(E.headerContainer, { [E.containerBottomPadding]: !F }),
                children: [
                    (0, r.jsx)(A, { isTier2: P }),
                    !f &&
                        (0, r.jsx)(s.olH, {
                            hideOnFullscreen: b,
                            onClick: y,
                            className: E.closeButtonPosition
                        }),
                    (0, r.jsx)('img', {
                        src: x,
                        alt: '',
                        className: Z ? E.bigWumpus : E.wumpus
                    }),
                    (0, r.jsx)('div', {
                        className: E.textContainer,
                        children: (0, r.jsx)(k, {
                            color: R ? 'black' : 'white',
                            className: E.wordmark
                        })
                    })
                ]
            }),
            (N || C) && (0, r.jsx)(m.Z, { discountAmount: L }),
            F &&
                (0, r.jsx)(S, {
                    isOneStepCheckout: w,
                    headerText: V,
                    step: M,
                    filteredBreadcrumbs: G
                }),
            Z &&
                (0, r.jsx)('div', {
                    className: E.bodyGradientContainer,
                    children: (0, r.jsx)('div', { className: E.bodyGradient })
                })
        ]
    });
};
