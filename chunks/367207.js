n.d(t, { Z: () => w }), n(411104), n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    l = n(481060),
    s = n(570140),
    a = n(904245),
    o = n(317770),
    c = n(100527),
    d = n(358221),
    u = n(963249),
    _ = n(93127),
    E = n(430824),
    h = n(594174),
    I = n(431),
    p = n(626135),
    m = n(74538),
    C = n(557457),
    T = n(970645),
    N = n(30684),
    g = n(514701),
    S = n(6242),
    R = n(467721),
    f = n(757692),
    A = n(281494),
    O = n(276444),
    L = n(937579),
    b = n(522558),
    P = n(879463),
    D = n(822070),
    M = n(520540),
    x = n(11352),
    y = n(474936),
    v = n(981631),
    k = n(354459),
    U = n(37113),
    Z = n(388032);
function V(e, t, n) {
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
class j extends o.Z {
    _initialize() {
        __OVERLAY__ ? s.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: r } = e;
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, i.jsx)(e, {
                    channel: t,
                    content: r,
                    ...n
                });
        });
    }
    _getReferralIncentiveEligibility() {
        let e = h.default.getCurrentUser();
        if (O.Z.getIsFetchingReferralIncentiveEligibility() || !(0, m.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        M.g.getCurrentConfig(t, n).enabled && !P.eP.getCurrentConfig(t, n).enabled && D.$.getCurrentConfig(t, n).enabled && (0, A.bq)();
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, u.Z)({
                ...e,
                onClose: (e) => {
                    e ? t() : n();
                }
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: r } = null != e ? e : {};
        return new Promise((e, l) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = l),
                s.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: r
                });
        });
    }
    constructor(...e) {
        super(...e),
            V(this, '_premiumPaymentModalCloseResolve', null),
            V(this, '_premiumPaymentModalCloseReject', null),
            V(this, '_maybeFetchPremiumOffer', async () => {
                let e = h.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, m.I5)(e) && I.Z.shouldFetchOffer();
                    await (0, L.T)('PremiumManager', void 0, t);
                }
                s.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            V(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = h.default.getCurrentUser();
                null != e && e.verified && !(0, m.I5)(e) && N.Z.shouldFetchCheckoutRecovery() && (await (0, T.o)());
            }),
            V(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = b.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, _.W)();
            }),
            V(this, '_trackCustomNotificationSoundsExposure', () => {
                x.Y.trackExposure({ location: 'PremiumManager' });
            }),
            V(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, u.Z)({
                    ...e,
                    analyticsLocations: [c.Z.OVERLAY],
                    onClose: (e) => {
                        s.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            V(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            V(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = h.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            V(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, r.debounce)((e, t, n) => {
                    var i, r;
                    let l = d.Z.getSelectedParticipant(e),
                        s = (0, f.o)(l, n),
                        { sendNitroMessage: o } = (0, S.TD)(s),
                        c = null !== (r = null === (i = E.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== r ? r : v.Eu4.NONE;
                    if (R.Z.cooldownIsActive() || !o || c >= v.Eu4.TIER_2 || (null == l ? void 0 : l.type) !== k.fO.STREAM || (null == l ? void 0 : l.id) === (null == n ? void 0 : n.id) || null == l.maxResolution || null == l.maxFrameRate) return;
                    g.I();
                    let u = Z.intl.formatToPlainString(Z.t.AbyeZG, {
                        nickname: l.userNick,
                        resolution: (0, U.o6)(l.maxResolution.height),
                        fps: (0, C.bp)(l.maxFrameRate)
                    });
                    a.Z.sendNitroSystemMessage(e, u),
                        p.default.track(v.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: y.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? v.jXE.TEXT_IN_VOICE : v.jXE.CHANNEL_TEXT_AREA,
                            location_object: v.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let w = new j();
