"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(397927),
    s = n(73153),
    o = n(391048),
    l = n(636099),
    u = n(769315),
    c = n(589078),
    d = n(979286),
    _ = n(287809),
    f = n(954571),
    p = n(166532),
    h = n(301518),
    m = n(165823),
    g = n(652215);
let E = "payment-modal",
    A = "gift-payment-modal",
    I = new Set([p.pn.REVIEW, p.pn.CONFIRM, p.pn.GIFT_CUSTOMIZATION]);
function T(e) {
    let t,
        {
            skuId: c,
            analyticsLocations: p,
            analyticsObject: m,
            isGift: T = !1,
            giftMessage: v,
            giftingOrigin: C,
            giftRecipient: b,
            onClose: N,
            onComplete: R,
            variantsReturnStyle: O,
        } = e,
        D = !1,
        L = (0, i.A)(),
        w = (e) => {
            t = e;
        },
        x = T ? A : E,
        P = _.default.getCurrentUser();
    if (!P?.verified)
        return void (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
            return (t) => {
                let { onClose: n, ...i } = t;
                return (0, r.jsx)(e, {
                    ...i,
                    onClose: () => {
                        n(), N?.(!1);
                    },
                });
            };
        });
    s.h.wait(() => {
        s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
    let { enabled: M } = (0, u.ik)({ location: "openCollectiblesPaymentModal" }),
        k = () => {
            (0, h.S)({ checkoutSucceeded: D }),
                D ||
                    f.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: L,
                        payment_type: g.frM[g.VVm.ONE_TIME],
                        location: m,
                        is_gift: T,
                        sku_id: c,
                        location_stack: p,
                    }),
                (0, o.ET)(),
                (0, l.z)(),
                N?.(D),
                D && (0, d.gB)({ variantsReturnStyle: O });
        },
        U = () => {
            null != t && I.has(t) && (0, a.OoC)(x);
        },
        G = {
            loadId: L,
            skuId: c,
            analyticsLocations: p,
            onStepChange: w,
            modalKey: x,
            isGift: T,
            giftMessage: v,
            giftingOrigin: C,
            giftRecipient: b,
            onClose: N,
            onCloseCallback: k,
            onCloseRequest: U,
            onComplete: () => {
                (D = !0), R?.();
            },
        };
    M ? y(G) : S(G);
}
let y = (e) => {
        let {
            loadId: t,
            skuId: n,
            analyticsLocations: r,
            onStepChange: i,
            modalKey: a,
            isGift: s = !1,
            giftMessage: o,
            giftingOrigin: l,
            giftRecipient: u,
            onClose: d,
            onCloseCallback: _,
            onCloseRequest: f,
            onComplete: p,
        } = e;
        return (0, c.Tx)().openCheckoutModal({
            loadId: t,
            skuId: n,
            analyticsLocations: r,
            giftContextProps: { isGift: s, giftMessage: o, giftingOrigin: l, giftRecipient: u },
            onClose: d,
            onComplete: p,
            flowSpecificOptions: { onStepChange: i },
            openModalOptions: { modalKey: a, onCloseCallback: _, onCloseRequest: f },
        });
    },
    S = (e) => {
        let {
            loadId: t,
            skuId: n,
            analyticsLocations: i,
            onStepChange: s,
            modalKey: o,
            isGift: l = !1,
            giftMessage: u,
            giftingOrigin: c,
            giftRecipient: d,
            onClose: _,
            onCloseCallback: f,
            onCloseRequest: p,
            onComplete: h,
        } = e;
        return (0, a.mMO)(
            async () => (e) => {
                let { onClose: a, returnRef: o, ...f } = e;
                return (0, r.jsx)(m.Ay, {
                    ...f,
                    loadId: t,
                    skuId: n,
                    isGift: l,
                    giftMessage: u,
                    giftingOrigin: c,
                    analyticsLocations: i,
                    giftRecipient: d,
                    onClose: (e) => {
                        a(), _?.(e);
                    },
                    onComplete: h,
                    returnRef: o,
                    onStepChange: s,
                });
            },
            { modalKey: o, onCloseCallback: f, onCloseRequest: p },
        );
    };
