n.d(t, { Z: () => Z }), n(411104), n(47120);
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
    _ = n(430824),
    f = n(594174),
    h = n(431),
    m = n(626135),
    g = n(74538),
    b = n(557457),
    E = n(970645),
    C = n(30684),
    O = n(514701),
    y = n(6242),
    v = n(467721),
    N = n(757692),
    S = n(937579),
    x = n(522558),
    I = n(11352),
    T = n(474936),
    L = n(981631),
    P = n(354459),
    j = n(37113),
    A = n(388032);
function R(e, t, n) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, d.Z)(
                k(w({}, e), {
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
            R(this, '_premiumPaymentModalCloseResolve', null),
            R(this, '_premiumPaymentModalCloseReject', null),
            R(this, '_maybeFetchPremiumOffer', async () => {
                let e = f.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, g.I5)(e) && h.Z.shouldFetchOffer();
                    await (0, S.T)('PremiumManager', t);
                }
                l.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            R(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = f.default.getCurrentUser();
                null != e && e.verified && !(0, g.I5)(e) && C.Z.shouldFetchCheckoutRecovery() && (await (0, E.o)());
            }),
            R(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = x.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, p.W)();
            }),
            R(this, '_trackCustomNotificationSoundsExposure', () => {
                I.Y.trackExposure({ location: 'PremiumManager' });
            }),
            R(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, d.Z)(
                    k(w({}, e), {
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
            R(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            R(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = f.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            R(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, i.debounce)((e, t, n) => {
                    var r, i;
                    let o = u.Z.getSelectedParticipant(e),
                        l = (0, N.o)(o, n),
                        { sendNitroMessage: a } = (0, y.TD)(l),
                        c = null != (i = null == (r = _.Z.getGuild(t)) ? void 0 : r.premiumTier) ? i : L.Eu4.NONE;
                    if (v.Z.cooldownIsActive() || !a || c >= L.Eu4.TIER_2 || (null == o ? void 0 : o.type) !== P.fO.STREAM || (null == o ? void 0 : o.id) === (null == n ? void 0 : n.id) || null == o.maxResolution || null == o.maxFrameRate) return;
                    O.I();
                    let d = A.NW.formatToPlainString(A.t.AbyeZG, {
                        nickname: o.userNick,
                        resolution: (0, j.o6)(o.maxResolution.height),
                        fps: (0, b.bp)(o.maxFrameRate)
                    });
                    s.Z.sendNitroSystemMessage(e, d),
                        m.default.track(L.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: T.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? L.jXE.TEXT_IN_VOICE : L.jXE.CHANNEL_TEXT_AREA,
                            location_object: L.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let Z = new M();
