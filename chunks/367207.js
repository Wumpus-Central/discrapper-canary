n.d(t, { Z: () => C }), n(415506), n(388685);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    o = n(317770),
    s = n(100527),
    a = n(963249),
    c = n(93127),
    u = n(594174),
    d = n(431),
    h = n(74538),
    p = n(970645),
    f = n(30684),
    g = n(937579),
    m = n(522558),
    b = n(173345);
function y(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class v extends o.Z {
    _initialize() {
        __OVERLAY__ ? l.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure));
    }
    _terminate() {
        __OVERLAY__ ? l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: l } = e;
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, r.jsx)(
                    e,
                    _(
                        {
                            channel: t,
                            content: l
                        },
                        n
                    )
                );
        });
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, a.Z)(
                O(_({}, e), {
                    onClose: (e) => {
                        e ? t() : n();
                    }
                })
            );
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: r, analyticsObject: i } = null != e ? e : {};
        return new Promise((e, o) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = o),
                l.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: r,
                    analyticsObject: i
                });
        });
    }
    constructor(...e) {
        super(...e),
            y(this, '_premiumPaymentModalCloseResolve', null),
            y(this, '_premiumPaymentModalCloseReject', null),
            y(this, '_maybeFetchPremiumOffer', async () => {
                let e = u.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = (d.Z.canFractionalPremiumUserUseOffer() || !(0, h.I5)(e)) && d.Z.shouldFetchOffer();
                    await (0, g.T)('PremiumManager', t);
                }
                l.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            y(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = u.default.getCurrentUser();
                null != e && e.verified && !(0, h.I5)(e) && f.Z.shouldFetchCheckoutRecovery() && (await (0, p.o)());
            }),
            y(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = m.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, c.W)();
            }),
            y(this, '_trackCustomNotificationSoundsExposure', () => {
                b.Y.trackExposure({ location: 'PremiumManager' });
            }),
            y(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, a.Z)(
                    O(_({}, e), {
                        analyticsLocations: [s.Z.OVERLAY],
                        onClose: (e) => {
                            l.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                        }
                    })
                );
            }),
            y(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            });
    }
}
let C = new v();
