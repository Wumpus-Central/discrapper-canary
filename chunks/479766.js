n.d(t, { Z: () => l }), n(653041);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s extends (r = i.ZP.Store) {
    get balanceWidgetPillIsOverlaid() {
        return this._balanceWidgetPillIsOverlaid;
    }
    get hidePillOverlayImmediately() {
        return this._hidePillOverlayImmediately;
    }
    get earnedOrbsCoachmark() {
        return {
            shouldOpen: this._earnedOrbsCoachmarkOpen,
            earnedOrbsQuantity: this._earnedOrbsCoachmarkQuantity
        };
    }
    get redeemError() {
        return this._redeemVirtualCurrencyError;
    }
    get isRedeeming() {
        return this._isRedeemingVirtualCurrency;
    }
    get redeemingSkuId() {
        return this._redeemingSkuId;
    }
    get entitlements() {
        return this._entitlements;
    }
    get balance() {
        return this._balance;
    }
    get fetchBalanceError() {
        return this._fetchBalanceError;
    }
    get isFetchingBalance() {
        return this._isFetchingBalance;
    }
    get onboardingModalOpenedPrior() {
        return this._onboardingModalOpenedPrior;
    }
    getCurrentBalance() {
        return this.balance;
    }
    handleBalanceFetch(e) {
        let {} = e;
        (this._isFetchingBalance = !0), (this._fetchBalanceError = null);
    }
    handleBalanceFetchSuccess(e) {
        let { balance: t } = e;
        (this._isFetchingBalance = !1), (this._balance = t);
    }
    handleBalanceFetchFail(e) {
        let { error: t } = e;
        (this._isFetchingBalance = !1), (this._fetchBalanceError = t);
    }
    handleBalanceUpdate(e) {
        let { balance: t } = e;
        this._balance = t;
    }
    handleRedeemVirtualCurrencyStart(e) {
        let { skuId: t } = e;
        (this._entitlements = null), (this._redeemingSkuId = t), (this._redeemVirtualCurrencyError = null), (this._isRedeemingVirtualCurrency = !0);
    }
    handleRedeemVirtualCurrencySuccess(e) {
        let { entitlements: t } = e;
        (this._entitlements = t), (this._redeemingSkuId = null), (this._isRedeemingVirtualCurrency = !1);
    }
    handleRedeemVirtualCurrencyFail(e) {
        let { error: t } = e;
        (this._entitlements = null), (this._redeemVirtualCurrencyError = t), (this._redeemingSkuId = null), (this._isRedeemingVirtualCurrency = !1);
    }
    toggleBalanceWidgetPillOverlay(e) {
        let { type: t, hideImmediately: n } = e;
        'VIRTUAL_CURRENCY_BALANCE_PILL_OVERLAY_OPEN' === t ? ((this._balanceWidgetPillIsOverlaid = !0), (this._hidePillOverlayImmediately = !1)) : ((this._balanceWidgetPillIsOverlaid = !1), n && (this._hidePillOverlayImmediately = !0));
    }
    handleOnboardingModalOpen(e) {
        let {} = e;
        this._onboardingModalOpenedPrior = !0;
    }
    handleOnboardingModalReset(e) {
        let {} = e;
        (this._balanceWidgetPillIsOverlaid = !1), (this._onboardingModalOpenedPrior = !1), (this._earnedOrbsCoachmarkOpen = !1), (this._earnedOrbsCoachmarkDedupeKeys = []), (this._earnedOrbsCoachmarkQuantity = 0);
    }
    handleEarnedOrbsCoachmarkOpen(e) {
        let { earnedOrbsQuantity: t, dedupeKey: n } = e;
        (void 0 !== n && this._earnedOrbsCoachmarkDedupeKeys.includes(n)) || ((this._earnedOrbsCoachmarkOpen = !0), (this._earnedOrbsCoachmarkQuantity = t), void 0 !== n && this._earnedOrbsCoachmarkDedupeKeys.push(n));
    }
    handleEarnedOrbsCoachmarkClose(e) {
        let {} = e;
        (this._earnedOrbsCoachmarkOpen = !1), (this._earnedOrbsCoachmarkQuantity = 0);
    }
    constructor() {
        super(o.Z, {
            VIRTUAL_CURRENCY_REDEEM_START: (e) => this.handleRedeemVirtualCurrencyStart(e),
            VIRTUAL_CURRENCY_REDEEM_SUCCESS: (e) => this.handleRedeemVirtualCurrencySuccess(e),
            VIRTUAL_CURRENCY_REDEEM_FAIL: (e) => this.handleRedeemVirtualCurrencyFail(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH: (e) => this.handleBalanceFetch(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: (e) => this.handleBalanceFetchSuccess(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL: (e) => this.handleBalanceFetchFail(e),
            VIRTUAL_CURRENCY_BALANCE_UPDATE: (e) => this.handleBalanceUpdate(e),
            VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN: (e) => this.handleOnboardingModalOpen(e),
            VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET: (e) => this.handleOnboardingModalReset(e),
            VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN: (e) => this.handleEarnedOrbsCoachmarkOpen(e),
            VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE: (e) => this.handleEarnedOrbsCoachmarkClose(e),
            VIRTUAL_CURRENCY_BALANCE_PILL_OVERLAY_OPEN: (e) => this.toggleBalanceWidgetPillOverlay(e),
            VIRTUAL_CURRENCY_BALANCE_PILL_OVERLAY_CLOSE: (e) => this.toggleBalanceWidgetPillOverlay(e)
        }),
            a(this, '_entitlements', null),
            a(this, '_redeemingSkuId', null),
            a(this, '_isRedeemingVirtualCurrency', !1),
            a(this, '_redeemVirtualCurrencyError', null),
            a(this, '_balance', null),
            a(this, '_fetchBalanceError', null),
            a(this, '_isFetchingBalance', !1),
            a(this, '_balanceWidgetPillIsOverlaid', !1),
            a(this, '_hidePillOverlayImmediately', !1),
            a(this, '_onboardingModalOpenedPrior', !1),
            a(this, '_earnedOrbsCoachmarkOpen', !1),
            a(this, '_earnedOrbsCoachmarkDedupeKeys', []),
            a(this, '_earnedOrbsCoachmarkQuantity', 0);
    }
}
a(s, 'displayName', 'VirtualCurrencyStore');
let l = new s();
