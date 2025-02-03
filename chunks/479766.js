n.d(t, { Z: () => o });
var i,
    s = n(442837),
    r = n(570140);
function l(e, t, n) {
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
class a extends (i = s.ZP.Store) {
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
    handleEarnedOrbsCoachmarkOpen(e) {
        let { earnedOrbsQuantity: t } = e;
        (this._earnedOrbsCoachmarkOpen = !0), (this._earnedOrbsCoachmarkQuantity = t);
    }
    handleEarnedOrbsCoachmarkClose(e) {
        let {} = e;
        (this._earnedOrbsCoachmarkOpen = !1), (this._earnedOrbsCoachmarkQuantity = 0);
    }
    constructor() {
        super(r.Z, {
            VIRTUAL_CURRENCY_REDEEM_START: (e) => this.handleRedeemVirtualCurrencyStart(e),
            VIRTUAL_CURRENCY_REDEEM_SUCCESS: (e) => this.handleRedeemVirtualCurrencySuccess(e),
            VIRTUAL_CURRENCY_REDEEM_FAIL: (e) => this.handleRedeemVirtualCurrencyFail(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH: (e) => this.handleBalanceFetch(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: (e) => this.handleBalanceFetchSuccess(e),
            VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL: (e) => this.handleBalanceFetchFail(e),
            VIRTUAL_CURRENCY_BALANCE_UPDATE: (e) => this.handleBalanceUpdate(e),
            VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN: (e) => this.handleEarnedOrbsCoachmarkOpen(e),
            VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE: (e) => this.handleEarnedOrbsCoachmarkClose(e)
        }),
            l(this, '_entitlements', null),
            l(this, '_redeemingSkuId', null),
            l(this, '_isRedeemingVirtualCurrency', !1),
            l(this, '_redeemVirtualCurrencyError', null),
            l(this, '_balance', null),
            l(this, '_fetchBalanceError', null),
            l(this, '_isFetchingBalance', !1),
            l(this, '_earnedOrbsCoachmarkOpen', !1),
            l(this, '_earnedOrbsCoachmarkQuantity', 0);
    }
}
l(a, 'displayName', 'VirtualCurrencyStore');
let o = new a();
