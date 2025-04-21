n.d(t, { Z: () => k }), n(415506), n(388685);
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
    h = n(93127),
    p = n(430824),
    f = n(594174),
    g = n(431),
    m = n(626135),
    b = n(74538),
    y = n(557457),
    _ = n(970645),
    O = n(30684),
    v = n(514701),
    C = n(6242),
    j = n(467721),
    S = n(757692),
    x = n(937579),
    E = n(522558),
    I = n(11352),
    P = n(474936),
    w = n(981631),
    N = n(354459),
    Z = n(37113),
    T = n(388032);
function A(e, t, n) {
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
function R(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
class L extends a.Z {
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
                    R(
                        {
                            channel: t,
                            content: i
                        },
                        n
                    )
                );
        });
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, d.Z)(
                D(R({}, e), {
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
            A(this, '_premiumPaymentModalCloseResolve', null),
            A(this, '_premiumPaymentModalCloseReject', null),
            A(this, '_maybeFetchPremiumOffer', async () => {
                let e = f.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, b.I5)(e) && g.Z.shouldFetchOffer();
                    await (0, x.T)('PremiumManager', t);
                }
                o.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            A(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = f.default.getCurrentUser();
                null != e && e.verified && !(0, b.I5)(e) && O.Z.shouldFetchCheckoutRecovery() && (await (0, _.o)());
            }),
            A(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = E.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, h.W)();
            }),
            A(this, '_trackCustomNotificationSoundsExposure', () => {
                I.Y.trackExposure({ location: 'PremiumManager' });
            }),
            A(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, d.Z)(
                    D(R({}, e), {
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
            A(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            A(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = f.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            A(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, i.debounce)((e, t, n) => {
                    var r, i;
                    let l = u.Z.getSelectedParticipant(e),
                        o = (0, S.o)(l, n),
                        { sendNitroMessage: a } = (0, C.TD)(o),
                        c = null != (i = null == (r = p.Z.getGuild(t)) ? void 0 : r.premiumTier) ? i : w.Eu4.NONE;
                    if (j.Z.cooldownIsActive() || !a || c >= w.Eu4.TIER_2 || (null == l ? void 0 : l.type) !== N.fO.STREAM || (null == l ? void 0 : l.id) === (null == n ? void 0 : n.id) || null == l.maxResolution || null == l.maxFrameRate) return;
                    v.I();
                    let d = T.intl.formatToPlainString(T.t.AbyeZG, {
                        nickname: l.userNick,
                        resolution: (0, Z.o6)(l.maxResolution.height),
                        fps: (0, y.bp)(l.maxFrameRate)
                    });
                    s.Z.sendNitroSystemMessage(e, d),
                        m.default.track(w.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: P.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? w.jXE.TEXT_IN_VOICE : w.jXE.CHANNEL_TEXT_AREA,
                            location_object: w.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let k = new L();
