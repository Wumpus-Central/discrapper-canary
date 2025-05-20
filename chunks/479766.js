r.d(t, { Z: () => u }), r(539854);
var n,
    a = r(442837),
    l = r(570140);
function i(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class o extends (n = a.ZP.Store) {
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
    get balancePillOverlay() {
        return this._balancePillOverlay;
    }
    setBalancePillOverlay(e) {
        this._balancePillOverlay = e;
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
    handleOnboardingModalOpen(e) {
        let {} = e;
        this._onboardingModalOpenedPrior = !0;
    }
    handleOnboardingModalReset(e) {
        let {} = e;
        (this._onboardingModalOpenedPrior = !1), (this._earnedOrbsCoachmarkOpen = !1), (this._earnedOrbsCoachmarkDedupeKeys = []), (this._earnedOrbsCoachmarkQuantity = 0);
    }
    handleEarnedOrbsCoachmarkOpen(e) {
        let { earnedOrbsQuantity: t, dedupeKey: r } = e;
        (void 0 !== r && this._earnedOrbsCoachmarkDedupeKeys.includes(r)) || ((this._earnedOrbsCoachmarkOpen = !0), (this._earnedOrbsCoachmarkQuantity = t), void 0 !== r && this._earnedOrbsCoachmarkDedupeKeys.push(r));
    }
    handleEarnedOrbsCoachmarkClose(e) {
        let {} = e;
        (this._earnedOrbsCoachmarkOpen = !1), (this._earnedOrbsCoachmarkQuantity = 0);
    }
    constructor() {
        super(l.Z, {
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
            VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY: (e) => {
                this.setBalancePillOverlay(e.balancePillOverlay);
            }
        }),
            i(this, '_entitlements', null),
            i(this, '_redeemingSkuId', null),
            i(this, '_isRedeemingVirtualCurrency', !1),
            i(this, '_redeemVirtualCurrencyError', null),
            i(this, '_balance', null),
            i(this, '_fetchBalanceError', null),
            i(this, '_isFetchingBalance', !1),
            i(this, '_onboardingModalOpenedPrior', !1),
            i(this, '_earnedOrbsCoachmarkOpen', !1),
            i(this, '_earnedOrbsCoachmarkDedupeKeys', []),
            i(this, '_earnedOrbsCoachmarkQuantity', 0),
            i(this, '_balancePillOverlay', !1);
    }
}
i(o, 'displayName', 'VirtualCurrencyStore');
let u = new o();
