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
    p = n(474936),
    h = n(262531),
    m = n(926550),
    g = n(996136),
    E = n(493017),
    b = n(254991),
    y = n(486287),
    O = n(29752),
    v = n(375500),
    I = n(546882);
function S(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)('div', {
            className: h.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(o.X6q, {
                variant: 'heading-md/bold',
                children: n
            })
        });
    let s = a.length > 1;
    return (0, r.jsxs)('div', {
        className: h.headerTextWrapper,
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
        n = t ? y : m,
        i = t ? v : E,
        a = t ? I : b;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: h.bigCloud
            }),
            (0, r.jsx)('img', {
                src: i,
                alt: '',
                className: h.mediumCloud
            }),
            (0, r.jsx)('img', {
                src: a,
                alt: '',
                className: h.smallCloud
            })
        ]
    });
}
let A = function (e) {
    let { hideCloseButton: t = !1, hideCloseOnFullScreen: n, onClose: i, upgradeToPremiumType: d, isEligibleForTrial: m = !1 } = e,
        E = (0, o.apv)((0, s.ZP)()),
        b = d === p.p9.TIER_2,
        y = (0, u.Fv)(m),
        v = b ? O : g,
        I = b ? _.Z : f.Z,
        { step: A, breadcrumbs: N, startedPaymentFlowWithPaymentSourcesRef: C, selectedSkuId: P } = (0, l.JL)();
    if (null == N || 0 === N.length) return null;
    let R = N.flatMap((e) => {
        let t = e.useBreadcrumbLabel(m),
            n = e.sectionHeaderText;
        return null != t
            ? {
                  id: e.id,
                  label: t,
                  sectionHeaderText: n
              }
            : [];
    });
    if (0 === R.length) return null;
    let w = (R = R.filter((e) => {
            let t = e.id !== c.h8.ADD_PAYMENT_STEPS,
                n = e.id === c.h8.ADD_PAYMENT_STEPS && !C.current;
            return !m || (m && (t || n));
        })).find((e) => e.id === A),
        D = null != P ? p.y7[P] : null,
        L = null;
    if (null != D) {
        var x;
        L = null == w || null == (x = w.sectionHeaderText) ? void 0 : x.call(w);
    }
    let k = null != (L = null != L ? L : null == w ? void 0 : w.label) && null != A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(h.container, b ? h.tier2Background : h.tier0Background, { [h.containerBottomPadding]: !k }),
                children: [
                    (0, r.jsx)(T, { isTier2: b }),
                    !t &&
                        (0, r.jsx)(o.olH, {
                            hideOnFullscreen: n,
                            onClick: i,
                            className: h.closeButtonPosition
                        }),
                    (0, r.jsx)('img', {
                        src: v,
                        alt: '',
                        className: y && k ? h.bigWumpus : h.wumpus
                    }),
                    (0, r.jsx)('div', {
                        className: h.textContainer,
                        children: (0, r.jsx)(I, {
                            color: E ? 'black' : 'white',
                            className: h.wordmark
                        })
                    })
                ]
            }),
            k &&
                (0, r.jsx)(S, {
                    isOneStepCheckout: y,
                    headerText: L,
                    step: A,
                    filteredBreadcrumbs: R
                })
        ]
    });
};
