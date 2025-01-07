n(411104), n(47120);
var s = n(200651);
n(192379);
var i = n(392711),
    r = n(848246),
    o = n(481060),
    l = n(570140),
    a = n(904245),
    c = n(317770),
    u = n(100527),
    d = n(358221),
    h = n(963249),
    E = n(93127),
    p = n(361291),
    _ = n(592125),
    m = n(430824),
    C = n(594174),
    N = n(431),
    g = n(626135),
    f = n(74538),
    R = n(557457),
    b = n(970645),
    I = n(30684),
    T = n(514701),
    S = n(6242),
    O = n(467721),
    x = n(757692),
    A = n(114064),
    y = n(933843),
    M = n(281494),
    P = n(276444),
    L = n(684259),
    v = n(937579),
    D = n(1163),
    Z = n(841174),
    U = n(522558),
    w = n(879463),
    k = n(822070),
    j = n(520540),
    H = n(11352),
    V = n(474936),
    G = n(981631),
    K = n(354459),
    W = n(37113),
    Y = n(388032);
function F(e, t, n) {
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
class z extends c.Z {
    _initialize() {
        __OVERLAY__ ? l.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), l.Z.subscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), l.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), l.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), l.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: i } = e;
        (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, s.jsx)(e, {
                    channel: t,
                    content: i,
                    ...n
                });
        });
    }
    _getReferralIncentiveEligibility() {
        let e = C.default.getCurrentUser();
        if (P.Z.getIsFetchingReferralIncentiveEligibility() || !(0, f.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        if (!!j.g.getCurrentConfig(t, n).enabled && !w.eP.getCurrentConfig(t, n).enabled) k.$.getCurrentConfig(t, n).enabled && (0, M.bq)();
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, h.Z)({
                ...e,
                onClose: (e) => {
                    e ? t() : n();
                }
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: s, analyticsObject: i } = null != e ? e : {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                l.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: s,
                    analyticsObject: i
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = D.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== G.hes.DISCONNECTED || e.willReconnect) return;
        let n = _.Z.getChannel(e.channelId);
        if (null == n) return;
        let s = A.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (s &&
                l.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !s)
        )
            return;
        let { resolution: i, fps: o } = p.Z.getState();
        !(0, y.mc)(i, o) && (0, Z.Z)(n.guild_id);
    }
    constructor(...e) {
        super(...e),
            F(this, '_premiumPaymentModalCloseResolve', null),
            F(this, '_premiumPaymentModalCloseReject', null),
            F(this, '_maybeFetchPremiumOffer', async () => {
                let e = C.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, f.I5)(e) && N.Z.shouldFetchOffer();
                    await (0, v.T)('PremiumManager', void 0, t);
                }
                l.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            F(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = C.default.getCurrentUser();
                null != e && e.verified && !(0, f.I5)(e) && I.Z.shouldFetchCheckoutRecovery() && (await (0, b.o)());
            }),
            F(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = U.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, E.W)();
            }),
            F(this, '_trackCustomNotificationSoundsExposure', () => {
                H.Y.trackExposure({ location: 'PremiumManager' });
            }),
            F(this, '_trackSkyLoadExposure', () => {
                L.Z.trackExposure({ location: 'PremiumManager' });
            }),
            F(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, h.Z)({
                    ...e,
                    analyticsLocations: [u.Z.OVERLAY],
                    onClose: (e) => {
                        l.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            F(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            F(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = C.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            F(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, i.debounce)((e, t, n) => {
                    var s, i;
                    let r = d.Z.getSelectedParticipant(e),
                        o = (0, x.o)(r, n),
                        { sendNitroMessage: l } = (0, S.TD)(o),
                        c = null !== (i = null === (s = m.Z.getGuild(t)) || void 0 === s ? void 0 : s.premiumTier) && void 0 !== i ? i : G.Eu4.NONE;
                    if (O.Z.cooldownIsActive() || !l || c >= G.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== K.fO.STREAM || (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    T.I();
                    let u = Y.intl.formatToPlainString(Y.t.AbyeZG, {
                        nickname: r.userNick,
                        resolution: (0, W.o6)(r.maxResolution.height),
                        fps: (0, R.bp)(r.maxFrameRate)
                    });
                    a.Z.sendNitroSystemMessage(e, u),
                        g.default.track(G.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: V.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? G.jXE.TEXT_IN_VOICE : G.jXE.CHANNEL_TEXT_AREA,
                            location_object: G.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
t.Z = new z();
