n.d(t, { Z: () => l });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s extends (r = i.ZP.Store) {
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
    handleBalanceStateReset() {
        (this._balance = null), (this._fetchBalanceError = null), (this._isFetchingBalance = !1);
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
        (this._entitlements = null),
            (this._redeemingSkuId = t),
            (this._redeemVirtualCurrencyError = null),
            (this._isRedeemingVirtualCurrency = !0);
    }
    handleRedeemVirtualCurrencySuccess(e) {
        let { entitlements: t } = e;
        (this._entitlements = t), (this._redeemingSkuId = null), (this._isRedeemingVirtualCurrency = !1);
    }
    handleRedeemVirtualCurrencyFail(e) {
        let { error: t } = e;
        (this._entitlements = null),
            (this._redeemVirtualCurrencyError = t),
            (this._redeemingSkuId = null),
            (this._isRedeemingVirtualCurrency = !1);
    }
    handleOnboardingModalOpen(e) {
        let {} = e;
        this._onboardingModalOpenedPrior = !0;
    }
    handleOnboardingModalReset(e) {
        let {} = e;
        this._onboardingModalOpenedPrior = !1;
    }
    constructor() {
        super(a.Z, {
            VIRTUAL_CURRENCY_REDEEM_START: (e) => this.handleRedeemVirtualCurrencyStart(e),
            VIRTUAL_CURRENCY_REDEEM_SUCCESS: (e) => this.handleRedeemVirtualCurrencySuccess(e),
            VIRTUAL_CURRENCY_REDEEM_FAIL: (e) => this.handleRedeemVirtualCurrencyFail(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH: (e) => this.handleBalanceFetch(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: (e) => this.handleBalanceFetchSuccess(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL: (e) => this.handleBalanceFetchFail(e),
            VIRTUAL_CURRENCY_BALANCE_UPDATE: (e) => this.handleBalanceUpdate(e),
            VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN: (e) => this.handleOnboardingModalOpen(e),
            VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET: (e) => this.handleOnboardingModalReset(e),
            LOGIN_SUCCESS: () => this.handleBalanceStateReset(),
            VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY: (e) => {
                this.setBalancePillOverlay(e.balancePillOverlay);
            },
        }),
            o(this, "_entitlements", null),
            o(this, "_redeemingSkuId", null),
            o(this, "_isRedeemingVirtualCurrency", !1),
            o(this, "_redeemVirtualCurrencyError", null),
            o(this, "_balance", null),
            o(this, "_fetchBalanceError", null),
            o(this, "_isFetchingBalance", !1),
            o(this, "_onboardingModalOpenedPrior", !1),
            o(this, "_balancePillOverlay", !1);
    }
}
o(s, "displayName", "VirtualCurrencyStore");
let l = new s();
