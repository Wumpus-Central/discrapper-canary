"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(397927),
    s = n(73153),
    o = n(391048),
    l = n(636099),
    u = n(589078),
    c = n(979286),
    d = n(287809),
    _ = n(954571),
    f = n(166532),
    p = n(301518),
    h = n(652215);
let m = "payment-modal",
    g = "gift-payment-modal",
    E = new Set([f.pn.REVIEW, f.pn.CONFIRM, f.pn.GIFT_CUSTOMIZATION]);
function A(e) {
    let t,
        {
            skuId: u,
            analyticsLocations: f,
            analyticsObject: A,
            isGift: T = !1,
            giftMessage: y,
            giftingOrigin: S,
            giftRecipient: v,
            onClose: C,
            onComplete: b,
            variantsReturnStyle: N,
        } = e,
        R = !1,
        O = (0, i.A)(),
        D = (e) => {
            t = e;
        },
        L = T ? g : m,
        w = d.default.getCurrentUser();
    if (!w?.verified)
        return void (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
            return (t) => {
                let { onClose: n, ...i } = t;
                return (0, r.jsx)(e, {
                    ...i,
                    onClose: () => {
                        n(), C?.(!1);
                    },
                });
            };
        });
    s.h.wait(() => {
        s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
    let x = () => {
            (0, p.S)({ checkoutSucceeded: R }),
                R ||
                    _.default.track(h.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: O,
                        payment_type: h.frM[h.VVm.ONE_TIME],
                        location: A,
                        is_gift: T,
                        sku_id: u,
                        location_stack: f,
                    }),
                (0, o.ET)(),
                (0, l.z)(),
                C?.(R),
                R && (0, c.gB)({ variantsReturnStyle: N });
        },
        P = () => {
            null != t && E.has(t) && (0, a.OoC)(L);
        },
        M = {
            loadId: O,
            skuId: u,
            analyticsLocations: f,
            onStepChange: D,
            modalKey: L,
            isGift: T,
            giftMessage: y,
            giftingOrigin: S,
            giftRecipient: v,
            onClose: C,
            onCloseCallback: x,
            onCloseRequest: P,
            onComplete: () => {
                (R = !0), b?.();
            },
        };
    I(M);
}
let I = (e) => {
    let {
        loadId: t,
        skuId: n,
        analyticsLocations: r,
        onStepChange: i,
        modalKey: a,
        isGift: s = !1,
        giftMessage: o,
        giftingOrigin: l,
        giftRecipient: c,
        onClose: d,
        onCloseCallback: _,
        onCloseRequest: f,
        onComplete: p,
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: r,
        giftContextProps: { isGift: s, giftMessage: o, giftingOrigin: l, giftRecipient: c },
        onClose: d,
        onComplete: p,
        flowSpecificOptions: { onStepChange: i },
        openModalOptions: { modalKey: a, onCloseCallback: _, onCloseRequest: f },
    });
};
