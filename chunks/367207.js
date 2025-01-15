s(411104), s(47120);
var n = s(200651);
s(192379);
var i = s(392711),
    r = s(848246),
    o = s(481060),
    a = s(570140),
    l = s(904245),
    c = s(317770),
    d = s(100527),
    u = s(358221),
    h = s(963249),
    E = s(93127),
    p = s(361291),
    m = s(592125),
    _ = s(430824),
    C = s(594174),
    g = s(431),
    N = s(626135),
    f = s(74538),
    b = s(557457),
    R = s(970645),
    I = s(30684),
    S = s(514701),
    T = s(6242),
    O = s(467721),
    x = s(757692),
    y = s(114064),
    M = s(933843),
    A = s(281494),
    L = s(276444),
    P = s(684259),
    v = s(937579),
    D = s(1163),
    U = s(841174),
    Z = s(522558),
    w = s(879463),
    k = s(822070),
    j = s(520540),
    H = s(11352),
    G = s(474936),
    V = s(981631),
    K = s(354459),
    W = s(37113),
    Y = s(388032);
function F(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class z extends c.Z {
    _initialize() {
        __OVERLAY__ ? a.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (a.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), a.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), a.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), a.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), a.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), a.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), a.Z.subscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), a.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), a.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? a.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (a.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), a.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), a.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), a.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), a.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), a.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), a.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), a.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), a.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: i } = e;
        (0, o.openModalLazy)(async () => {
            let { default: e } = await s.e('33184').then(s.bind(s, 465836));
            return (s) =>
                (0, n.jsx)(e, {
                    channel: t,
                    content: i,
                    ...s
                });
        });
    }
    _getReferralIncentiveEligibility() {
        let e = C.default.getCurrentUser();
        if (L.Z.getIsFetchingReferralIncentiveEligibility() || !(0, f.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            s = { autoTrackExposure: !1 };
        if (!!j.g.getCurrentConfig(t, s).enabled && !w.eP.getCurrentConfig(t, s).enabled) k.$.getCurrentConfig(t, s).enabled && (0, A.bq)();
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, s) => {
            (0, h.Z)({
                ...e,
                onClose: (e) => {
                    e ? t() : s();
                }
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        let { initialPlanId: t, subscriptionTier: s, followupSKUInfo: n, analyticsObject: i } = null != e ? e : {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                a.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: s,
                    followupSKUInfo: n,
                    analyticsObject: i
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = D.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== V.hes.DISCONNECTED || e.willReconnect) return;
        let s = m.Z.getChannel(e.channelId);
        if (null == s) return;
        let n = y.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (n &&
                a.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !n)
        )
            return;
        let { resolution: i, fps: o } = p.Z.getState();
        !(0, M.mc)(i, o) && (0, U.Z)(s.guild_id);
    }
    constructor(...e) {
        super(...e),
            F(this, '_premiumPaymentModalCloseResolve', null),
            F(this, '_premiumPaymentModalCloseReject', null),
            F(this, '_maybeFetchPremiumOffer', async () => {
                let e = C.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, f.I5)(e) && g.Z.shouldFetchOffer();
                    await (0, v.T)('PremiumManager', void 0, t);
                }
                a.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            F(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = C.default.getCurrentUser();
                null != e && e.verified && !(0, f.I5)(e) && I.Z.shouldFetchCheckoutRecovery() && (await (0, R.o)());
            }),
            F(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = Z.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, E.W)();
            }),
            F(this, '_trackCustomNotificationSoundsExposure', () => {
                H.Y.trackExposure({ location: 'PremiumManager' });
            }),
            F(this, '_trackSkyLoadExposure', () => {
                P.Z.trackExposure({ location: 'PremiumManager' });
            }),
            F(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, h.Z)({
                    ...e,
                    analyticsLocations: [d.Z.OVERLAY],
                    onClose: (e) => {
                        a.Z.dispatch({
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
                (0, i.debounce)((e, t, s) => {
                    var n, i;
                    let r = u.Z.getSelectedParticipant(e),
                        o = (0, x.o)(r, s),
                        { sendNitroMessage: a } = (0, T.TD)(o),
                        c = null !== (i = null === (n = _.Z.getGuild(t)) || void 0 === n ? void 0 : n.premiumTier) && void 0 !== i ? i : V.Eu4.NONE;
                    if (O.Z.cooldownIsActive() || !a || c >= V.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== K.fO.STREAM || (null == r ? void 0 : r.id) === (null == s ? void 0 : s.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    S.I();
                    let d = Y.intl.formatToPlainString(Y.t.AbyeZG, {
                        nickname: r.userNick,
                        resolution: (0, W.o6)(r.maxResolution.height),
                        fps: (0, b.bp)(r.maxFrameRate)
                    });
                    l.Z.sendNitroSystemMessage(e, d),
                        N.default.track(V.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: G.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? V.jXE.TEXT_IN_VOICE : V.jXE.CHANNEL_TEXT_AREA,
                            location_object: V.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
t.Z = new z();
