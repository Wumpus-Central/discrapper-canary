n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(228366),
    r = n(272355),
    a = n(793574),
    o = n(532794),
    d = n(219271),
    c = n(287809),
    u = n(354670),
    h = n(927578),
    A = n(636537),
    _ = n(323082),
    g = n(295405),
    m = n(652215);
async function p() {
    try {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await A.Bo.get({ url: m.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !g.A.hasFetchedPaymentSources && (await (0, _.$o)()),
            s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
var f = n(869968),
    E = n(694080),
    C = n(70730);
class x extends r.A {
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
            await (0, E._D)("PremiumManager", t);
        }
        s.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = c.default.getCurrentUser();
        null != e && e.verified && !(0, h.TW)(e) && f.A.shouldFetchCheckoutRecovery() && (await p());
    };
    _maybeFetchUserAffinities = () => {
        let { enabled: e } = C.u.getConfig({ location: "PremiumManager" });
        e && (0, d.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, o.A)({
            ...e,
            analyticsLocations: [a.A.OVERLAY],
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
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
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
let I = new x();
