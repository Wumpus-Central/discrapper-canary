n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(512722),
    l = n.n(a),
    o = n(481060),
    c = n(563132),
    d = n(409813),
    u = n(3409),
    m = n(388032),
    g = n(773893),
    h = n(847854);
function p(e) {
    let { transitionState: t, analyticsLocation: n, onClose: r, onAddPaymentSource: a, toastContent: c, initialStep: p = d.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: x = !1 } = e,
        f = (0, u.fL)(),
        _ = (0, u.vP)({
            paymentModalArgs: f,
            initialStep: p,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                r();
            },
            onComplete: (e, t) => {
                l()(null != t, 'paymentSource missing'), null == a || a(t), r();
            },
            onStepChange: () => {},
            header: (0, i.jsxs)('div', {
                className: s()(g.modalTitle, h.flex, h.justifyBetween, h.alignCenter),
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H4,
                        children: m.intl.string(m.t.eQ2bLi)
                    }),
                    (0, i.jsx)(o.ModalCloseButton, { onClick: r })
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: c,
            overwriteSubscriptionPaymentSource: x
        });
    return (0, i.jsx)(o.ModalRoot, {
        transitionState: t,
        size: o.ModalSize.SMALL,
        className: g.modal,
        'aria-label': m.intl.string(m.t.eQ2bLi),
        children: (0, i.jsx)('form', {
            className: g.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: _
        })
    });
}
function x(e) {
    return (0, i.jsx)(c.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(p, { ...e })
    });
}
