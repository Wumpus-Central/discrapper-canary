n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var a = n(192308),
    r = n(228366),
    s = n(272355),
    l = n(793574),
    o = n(532794),
    d = n(219271),
    c = n(287809),
    _ = n(354670),
    E = n(927578),
    u = n(636537),
    A = n(323082),
    I = n(295405),
    T = n(652215);
async function h() {
    try {
        r.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await u.Bo.get({ url: T.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !I.A.hasFetchedPaymentSources && (await (0, A.$o)()),
            r.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        r.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
var S = n(869968),
    N = n(694080),
    f = n(70730);
class p extends s.A {
    _premiumPaymentModalCloseResolve = null;
    _premiumPaymentModalCloseReject = null;
    _initialize() {
        __OVERLAY__
            ? r.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (r.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              r.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              r.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              r.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              r.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities));
    }
    _terminate() {
        __OVERLAY__
            ? r.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (r.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              r.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              r.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              r.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              r.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: r } = e;
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("35257"), n.e("76725")]).then(n.bind(n, 798612));
            return (n) => (0, i.jsx)(e, { channel: t, content: r, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = c.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (_.A.canFractionalPremiumUserUseOffer() || !(0, E.TW)(e)) && !_.A.isFetchingOffer();
            await (0, N._D)("PremiumManager", t);
        }
        r.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = c.default.getCurrentUser();
        null != e && e.verified && !(0, E.TW)(e) && S.A.shouldFetchCheckoutRecovery() && (await h());
    };
    _maybeFetchUserAffinities = () => {
        let { enabled: e } = f.u.getConfig({ location: "PremiumManager" });
        e && (0, d.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, o.A)({
            ...e,
            analyticsLocations: [l.A.OVERLAY],
            onClose: (e) => {
                r.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
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
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: a } = e ?? {};
        return new Promise((e, s) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = s),
                r.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: a,
                });
        });
    }
}
let m = new p();
