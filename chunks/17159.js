"use strict";
n.d(t, { A: () => g });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(228366),
    s = n(272355),
    l = n(793574),
    o = n(532794),
    d = n(219271),
    c = n(287809),
    u = n(354670),
    _ = n(158045),
    E = n(636537),
    A = n(277984),
    h = n(295405),
    I = n(652215);
async function f() {
    try {
        a.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await E.Bo.get({ url: I.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !h.A.hasFetchedPaymentSources && (await (0, A.$o)()),
            a.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        a.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
var p = n(869968),
    T = n(945960);
class m extends s.A {
    _premiumPaymentModalCloseResolve = null;
    _premiumPaymentModalCloseReject = null;
    _initialize() {
        __OVERLAY__
            ? a.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (a.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              a.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              a.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              a.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              a.h.subscribe("POST_CONNECTION_OPEN", this._fetchUserAffinities));
    }
    _terminate() {
        __OVERLAY__
            ? a.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (a.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              a.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              a.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              a.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              a.h.unsubscribe("POST_CONNECTION_OPEN", this._fetchUserAffinities));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: a } = e;
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("235257"), n.e("276725")]).then(n.bind(n, 798612));
            return (n) => (0, i.jsx)(e, { channel: t, content: a, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = c.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (u.A.canFractionalPremiumUserUseOffer() || !(0, _.TW)(e)) && !u.A.isFetchingOffer();
            await (0, T._D)("PremiumManager", t);
        }
        a.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = c.default.getCurrentUser();
        null != e && e.verified && !(0, _.TW)(e) && p.A.shouldFetchCheckoutRecovery() && (await f());
    };
    _fetchUserAffinities = () => {
        (0, d.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, o.A)({
            ...e,
            analyticsLocations: [l.A.OVERLAY],
            onClose: (e) => {
                a.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
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
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: r } = e ?? {};
        return new Promise((e, s) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = s),
                a.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: r,
                });
        });
    }
}
let g = new m();
