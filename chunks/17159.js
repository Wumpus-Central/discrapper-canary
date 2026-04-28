n.d(t, { A: () => S });
var l = n(627968);
n(64700);
var i = n(192308),
    s = n(228366),
    r = n(272355),
    a = n(793574),
    o = n(532794),
    u = n(219271),
    d = n(287809),
    c = n(354670),
    h = n(927578),
    A = n(636537),
    m = n(323082),
    g = n(295405),
    p = n(652215);
async function f() {
    try {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await A.Bo.get({ url: p.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !g.A.hasFetchedPaymentSources && (await (0, m.$o)()),
            s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
var E = n(869968),
    I = n(694080),
    _ = n(70730);
class C extends r.A {
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
        (0, i.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("35257"), n.e("76725")]).then(n.bind(n, 798612));
            return (n) => (0, l.jsx)(e, { channel: t, content: s, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = d.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (c.A.canFractionalPremiumUserUseOffer() || !(0, h.TW)(e)) && !c.A.isFetchingOffer();
            await (0, I._D)("PremiumManager", t);
        }
        s.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = d.default.getCurrentUser();
        null != e && e.verified && !(0, h.TW)(e) && E.A.shouldFetchCheckoutRecovery() && (await f());
    };
    _maybeFetchUserAffinities = () => {
        let { enabled: e } = _.u.getConfig({ location: "PremiumManager" });
        e && (0, u.u)();
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
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: l, analyticsObject: i } = e ?? {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                s.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: l,
                    analyticsObject: i,
                });
        });
    }
}
let S = new C();
