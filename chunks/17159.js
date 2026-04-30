"use strict";
n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(228366),
    a = n(272355),
    o = n(793574),
    l = n(532794),
    u = n(219271),
    c = n(287809),
    d = n(354670),
    _ = n(927578),
    f = n(636537),
    h = n(753390),
    p = n(295405),
    E = n(652215);
async function m() {
    try {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await f.Bo.get({ url: E.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !p.A.hasFetchedPaymentSources && (await (0, h.$o)()),
            s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
var g = n(869968),
    A = n(694080),
    I = n(70730);
class T extends a.A {
    _premiumPaymentModalCloseResolve = null;
    _premiumPaymentModalCloseReject = null;
    _initialize() {
        __OVERLAY__
            ? s.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (s.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              s.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              s.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              s.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              s.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities));
    }
    _terminate() {
        __OVERLAY__
            ? s.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (s.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              s.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              s.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              s.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              s.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: s } = e;
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("35257"), n.e("76725")]).then(n.bind(n, 798612));
            return (n) => (0, i.jsx)(e, { channel: t, content: s, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = c.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (d.A.canFractionalPremiumUserUseOffer() || !(0, _.TW)(e)) && !d.A.isFetchingOffer();
            await (0, A._D)("PremiumManager", t);
        }
        s.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = c.default.getCurrentUser();
        null != e && e.verified && !(0, _.TW)(e) && g.A.shouldFetchCheckoutRecovery() && (await m());
    };
    _maybeFetchUserAffinities = () => {
        let { enabled: e } = I.u.getConfig({ location: "PremiumManager" });
        e && (0, u.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, l.A)({
            ...e,
            analyticsLocations: [o.A.OVERLAY],
            onClose: (e) => {
                s.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
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
            (0, l.A)({
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
        return new Promise((e, a) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = a),
                s.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: r,
                });
        });
    }
}
let S = new T();
