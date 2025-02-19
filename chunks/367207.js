n.d(t, { Z: () => G }), n(411104), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
    l = n(481060),
    o = n(570140),
    s = n(904245),
    a = n(317770),
    c = n(100527),
    u = n(358221),
    d = n(963249),
    _ = n(93127),
    E = n(430824),
    p = n(594174),
    h = n(431),
    f = n(626135),
    m = n(74538),
    O = n(557457),
    N = n(970645),
    g = n(30684),
    I = n(514701),
    C = n(6242),
    b = n(467721),
    T = n(757692),
    S = n(281494),
    y = n(276444),
    R = n(937579),
    A = n(522558),
    P = n(879463),
    v = n(822070),
    D = n(520540),
    L = n(11352),
    k = n(474936),
    M = n(981631),
    x = n(354459),
    j = n(37113),
    U = n(388032);
function Z(e, t, n) {
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
function w(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
class F extends a.Z {
    _initialize() {
        __OVERLAY__ ? o.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (o.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), o.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), o.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), o.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? o.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (o.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), o.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), o.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: i } = e;
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, r.jsx)(
                    e,
                    w(
                        {
                            channel: t,
                            content: i
                        },
                        n
                    )
                );
        });
    }
    _getReferralIncentiveEligibility() {
        let e = p.default.getCurrentUser();
        if (y.Z.getIsFetchingReferralIncentiveEligibility() || !(0, m.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        D.g.getCurrentConfig(t, n).enabled && !P.eP.getCurrentConfig(t, n).enabled && v.$.getCurrentConfig(t, n).enabled && (0, S.bq)();
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, d.Z)(
                V(w({}, e), {
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
        return new Promise((e, l) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = l),
                o.Z.dispatch({
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
            Z(this, '_premiumPaymentModalCloseResolve', null),
            Z(this, '_premiumPaymentModalCloseReject', null),
            Z(this, '_maybeFetchPremiumOffer', async () => {
                let e = p.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, m.I5)(e) && h.Z.shouldFetchOffer();
                    await (0, R.T)('PremiumManager', void 0, t);
                }
                o.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            Z(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = p.default.getCurrentUser();
                null != e && e.verified && !(0, m.I5)(e) && g.Z.shouldFetchCheckoutRecovery() && (await (0, N.o)());
            }),
            Z(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = A.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, _.W)();
            }),
            Z(this, '_trackCustomNotificationSoundsExposure', () => {
                L.Y.trackExposure({ location: 'PremiumManager' });
            }),
            Z(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, d.Z)(
                    V(w({}, e), {
                        analyticsLocations: [c.Z.OVERLAY],
                        onClose: (e) => {
                            o.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                        }
                    })
                );
            }),
            Z(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            Z(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = p.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            Z(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, i.debounce)((e, t, n) => {
                    var r, i;
                    let l = u.Z.getSelectedParticipant(e),
                        o = (0, T.o)(l, n),
                        { sendNitroMessage: a } = (0, C.TD)(o),
                        c = null !== (i = null === (r = E.Z.getGuild(t)) || void 0 === r ? void 0 : r.premiumTier) && void 0 !== i ? i : M.Eu4.NONE;
                    if (b.Z.cooldownIsActive() || !a || c >= M.Eu4.TIER_2 || (null == l ? void 0 : l.type) !== x.fO.STREAM || (null == l ? void 0 : l.id) === (null == n ? void 0 : n.id) || null == l.maxResolution || null == l.maxFrameRate) return;
                    I.I();
                    let d = U.NW.formatToPlainString(U.t.AbyeZG, {
                        nickname: l.userNick,
                        resolution: (0, j.o6)(l.maxResolution.height),
                        fps: (0, O.bp)(l.maxFrameRate)
                    });
                    s.Z.sendNitroSystemMessage(e, d),
                        f.default.track(M.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: k.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? M.jXE.TEXT_IN_VOICE : M.jXE.CHANNEL_TEXT_AREA,
                            location_object: M.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let G = new F();
