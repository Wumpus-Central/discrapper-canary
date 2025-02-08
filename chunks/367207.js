n.d(t, { Z: () => F }), n(411104), n(47120);
var i = n(200651);
n(192379);
var l = n(392711),
    r = n(481060),
    s = n(570140),
    a = n(904245),
    o = n(317770),
    c = n(100527),
    d = n(358221),
    u = n(963249),
    _ = n(93127),
    E = n(430824),
    h = n(594174),
    p = n(431),
    I = n(626135),
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
    x = n(822070),
    D = n(520540),
    M = n(11352),
    v = n(474936),
    U = n(981631),
    k = n(354459),
    y = n(37113),
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
        let { channel: t, content: l } = e;
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, i.jsx)(e, {
                    channel: t,
                    content: l,
                    ...n
                });
        });
    }
    _getReferralIncentiveEligibility() {
        let e = h.default.getCurrentUser();
        if (O.Z.getIsFetchingReferralIncentiveEligibility() || !(0, m.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        D.g.getCurrentConfig(t, n).enabled && !P.eP.getCurrentConfig(t, n).enabled && x.$.getCurrentConfig(t, n).enabled && (0, A.bq)();
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
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: l } = null != e ? e : {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                s.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: l
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
                    let t = !(0, m.I5)(e) && p.Z.shouldFetchOffer();
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
                M.Y.trackExposure({ location: 'PremiumManager' });
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
                (0, l.debounce)((e, t, n) => {
                    var i, l;
                    let r = d.Z.getSelectedParticipant(e),
                        s = (0, f.o)(r, n),
                        { sendNitroMessage: o } = (0, S.TD)(s),
                        c = null !== (l = null === (i = E.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== l ? l : U.Eu4.NONE;
                    if (R.Z.cooldownIsActive() || !o || c >= U.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== k.fO.STREAM || (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    g.I();
                    let u = Z.intl.formatToPlainString(Z.t.AbyeZG, {
                        nickname: r.userNick,
                        resolution: (0, y.o6)(r.maxResolution.height),
                        fps: (0, C.bp)(r.maxFrameRate)
                    });
                    a.Z.sendNitroSystemMessage(e, u),
                        I.default.track(U.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: v.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? U.jXE.TEXT_IN_VOICE : U.jXE.CHANNEL_TEXT_AREA,
                            location_object: U.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let F = new j();
