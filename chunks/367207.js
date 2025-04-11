n.d(t, { Z: () => D }), n(415506), n(388685);
var r = n(200651);
n(192379);
var i = n(392711),
    o = n(481060),
    l = n(570140),
    s = n(904245),
    a = n(317770),
    c = n(100527),
    u = n(358221),
    d = n(963249),
    p = n(93127),
    h = n(430824),
    _ = n(594174),
    f = n(431),
    m = n(626135),
    b = n(74538),
    g = n(557457),
    E = n(970645),
    O = n(30684),
    y = n(514701),
    C = n(6242),
    S = n(467721),
    N = n(757692),
    v = n(937579),
    T = n(522558),
    I = n(11352),
    x = n(474936),
    P = n(981631),
    A = n(354459),
    R = n(37113),
    w = n(388032);
function j(e, t, n) {
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
function k(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
class M extends a.Z {
    _initialize() {
        __OVERLAY__ ? l.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), l.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), l.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: i } = e;
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, r.jsx)(
                    e,
                    k(
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
                L(k({}, e), {
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
            j(this, '_premiumPaymentModalCloseResolve', null),
            j(this, '_premiumPaymentModalCloseReject', null),
            j(this, '_maybeFetchPremiumOffer', async () => {
                let e = _.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, b.I5)(e) && f.Z.shouldFetchOffer();
                    await (0, v.T)('PremiumManager', t);
                }
                l.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            j(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = _.default.getCurrentUser();
                null != e && e.verified && !(0, b.I5)(e) && O.Z.shouldFetchCheckoutRecovery() && (await (0, E.o)());
            }),
            j(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = T.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, p.W)();
            }),
            j(this, '_trackCustomNotificationSoundsExposure', () => {
                I.Y.trackExposure({ location: 'PremiumManager' });
            }),
            j(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, d.Z)(
                    L(k({}, e), {
                        analyticsLocations: [c.Z.OVERLAY],
                        onClose: (e) => {
                            l.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                        }
                    })
                );
            }),
            j(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            j(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = _.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            j(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, i.debounce)((e, t, n) => {
                    var r, i;
                    let o = u.Z.getSelectedParticipant(e),
                        l = (0, N.o)(o, n),
                        { sendNitroMessage: a } = (0, C.TD)(l),
                        c = null != (i = null == (r = h.Z.getGuild(t)) ? void 0 : r.premiumTier) ? i : P.Eu4.NONE;
                    if (S.Z.cooldownIsActive() || !a || c >= P.Eu4.TIER_2 || (null == o ? void 0 : o.type) !== A.fO.STREAM || (null == o ? void 0 : o.id) === (null == n ? void 0 : n.id) || null == o.maxResolution || null == o.maxFrameRate) return;
                    y.I();
                    let d = w.NW.formatToPlainString(w.t.AbyeZG, {
                        nickname: o.userNick,
                        resolution: (0, R.o6)(o.maxResolution.height),
                        fps: (0, g.bp)(o.maxFrameRate)
                    });
                    s.Z.sendNitroSystemMessage(e, d),
                        m.default.track(P.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: x.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? P.jXE.TEXT_IN_VOICE : P.jXE.CHANNEL_TEXT_AREA,
                            location_object: P.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let D = new M();
