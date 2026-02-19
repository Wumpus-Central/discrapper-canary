"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(73153),
    r = n(272355),
    a = n(793574),
    o = n(532794),
    c = n(219271),
    d = n(287809),
    u = n(816733),
    h = n(927578),
    A = n(882442),
    p = n(869968),
    g = n(694080),
    m = n(70730);
class _ extends r.A {
    _premiumPaymentModalCloseResolve = null;
    _premiumPaymentModalCloseReject = null;
    _initialize() {
        __OVERLAY__
            ? l.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (l.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              l.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              l.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              l.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              l.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities));
    }
    _terminate() {
        __OVERLAY__
            ? l.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (l.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              l.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              l.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              l.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              l.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: l } = e;
        (0, s.mMO)(async () => {
            let { default: e } = await n.e("76725").then(n.bind(n, 798612));
            return (n) => (0, i.jsx)(e, { channel: t, content: l, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = d.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (u.A.canFractionalPremiumUserUseOffer() || !(0, h.TW)(e)) && !u.A.isFetchingOffer();
            await (0, g._D)("PremiumManager", t);
        }
        l.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = d.default.getCurrentUser();
        null != e && e.verified && !(0, h.TW)(e) && p.A.shouldFetchCheckoutRecovery() && (await (0, A.c)());
    };
    _maybeFetchUserAffinities = () => {
        let { enabled: e } = m.u.getConfig({ location: "PremiumManager" });
        e && (0, c.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, o.A)({
            ...e,
            analyticsLocations: [a.A.OVERLAY],
            onClose: (e) => {
                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
            },
        });
    };
    _handlePremiumPaymentModalClose = (e) => {
        let { didSucceed: t } = e;
        t && null != this._premiumPaymentModalCloseResolve
            ? this._premiumPaymentModalCloseResolve()
            : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(),
            (this._premiumPaymentModalCloseResolve = null),
            (this._premiumPaymentModalCloseReject = null);
    };
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
        return new Promise((t, n) => {
            (0, o.A)({
                ...e,
                onClose: (e) => {
                    e ? t() : n();
                },
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: s } = e ?? {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                l.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: s,
                });
        });
    }
}
let f = new _();
