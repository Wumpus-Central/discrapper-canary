n.d(t, { default: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(512722),
    a = n.n(l),
    o = n(481060),
    c = n(563132),
    d = n(409813),
    u = n(3409),
    m = n(388032),
    h = n(517978),
    g = n(652849);
function _(e) {
    let { transitionState: t, analyticsLocation: n, onClose: s, onAddPaymentSource: l, toastContent: c, initialStep: _ = d.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: x = !1 } = e,
        p = (0, u.fL)(),
        E = (0, u.vP)({
            paymentModalArgs: p,
            initialStep: _,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                s();
            },
            onComplete: (e, t) => {
                a()(null != t, 'paymentSource missing'), null == l || l(t), s();
            },
            onStepChange: () => {},
            header: (0, i.jsxs)('div', {
                className: r()(h.modalTitle, g.flex, g.justifyBetween, g.alignCenter),
                children: [
                    (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: m.intl.string(m.t.eQ2bLi)
                    }),
                    (0, i.jsx)(o.olH, { onClick: s })
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: c,
            overwriteSubscriptionPaymentSource: x
        });
    return (0, i.jsx)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        className: h.modal,
        'aria-label': m.intl.string(m.t.eQ2bLi),
        children: (0, i.jsx)('form', {
            className: h.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: E
        })
    });
}
function x(e) {
    return (0, i.jsx)(c.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(_, { ...e })
    });
}
