n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(73153),
    a = n(272355),
    r = n(793574),
    o = n(532794),
    d = n(219271),
    c = n(287809),
    u = n(816733),
    h = n(927578),
    A = n(882442),
    _ = n(869968),
    m = n(694080),
    g = n(70730);
class p extends a.A {
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
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("76725").then(n.bind(n, 798612));
            return (n) => (0, i.jsx)(e, { channel: t, content: s, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = c.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (u.A.canFractionalPremiumUserUseOffer() || !(0, h.TW)(e)) && !u.A.isFetchingOffer();
            await (0, m._D)("PremiumManager", t);
        }
        s.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = c.default.getCurrentUser();
        null != e && e.verified && !(0, h.TW)(e) && _.A.shouldFetchCheckoutRecovery() && (await (0, A.c)());
    };
    _maybeFetchUserAffinities = () => {
        let { enabled: e } = g.u.getConfig({ location: "PremiumManager" });
        e && (0, d.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, o.A)({
            ...e,
            analyticsLocations: [r.A.OVERLAY],
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
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: l } = e ?? {};
        return new Promise((e, a) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = a),
                s.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: l,
                });
        });
    }
}
let f = new p();
