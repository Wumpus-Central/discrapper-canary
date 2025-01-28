s(411104), s(47120);
var n = s(200651);
s(192379);
var i = s(392711),
    r = s(848246),
    o = s(481060),
    l = s(570140),
    a = s(904245),
    c = s(317770),
    d = s(100527),
    u = s(358221),
    h = s(963249),
    E = s(93127),
    p = s(361291),
    _ = s(592125),
    m = s(430824),
    g = s(594174),
    C = s(431),
    N = s(626135),
    f = s(74538),
    b = s(557457),
    I = s(970645),
    R = s(30684),
    S = s(514701),
    T = s(6242),
    x = s(467721),
    y = s(757692),
    M = s(114064),
    A = s(933843),
    O = s(281494),
    P = s(276444),
    L = s(937579),
    v = s(1163),
    D = s(841174),
    U = s(522558),
    Z = s(879463),
    w = s(822070),
    k = s(520540),
    j = s(11352),
    H = s(474936),
    G = s(981631),
    V = s(354459),
    K = s(37113),
    W = s(388032);
function Y(e, t, s) {
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
class F extends c.Z {
    _initialize() {
        __OVERLAY__ ? l.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), l.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), l.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (l.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), l.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), l.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), l.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
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
        let e = g.default.getCurrentUser();
        if (P.Z.getIsFetchingReferralIncentiveEligibility() || !(0, f.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            s = { autoTrackExposure: !1 };
        if (!!k.g.getCurrentConfig(t, s).enabled && !Z.eP.getCurrentConfig(t, s).enabled) w.$.getCurrentConfig(t, s).enabled && (0, O.bq)();
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
                l.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: s,
                    followupSKUInfo: n,
                    analyticsObject: i
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = v.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== G.hes.DISCONNECTED || e.willReconnect) return;
        let s = _.Z.getChannel(e.channelId);
        if (null == s) return;
        let n = M.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (n &&
                l.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !n)
        )
            return;
        let { resolution: i, fps: o } = p.Z.getState();
        !(0, A.mc)(i, o) && (0, D.Z)(s.guild_id);
    }
    constructor(...e) {
        super(...e),
            Y(this, '_premiumPaymentModalCloseResolve', null),
            Y(this, '_premiumPaymentModalCloseReject', null),
            Y(this, '_maybeFetchPremiumOffer', async () => {
                let e = g.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, f.I5)(e) && C.Z.shouldFetchOffer();
                    await (0, L.T)('PremiumManager', void 0, t);
                }
                l.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            Y(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = g.default.getCurrentUser();
                null != e && e.verified && !(0, f.I5)(e) && R.Z.shouldFetchCheckoutRecovery() && (await (0, I.o)());
            }),
            Y(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = U.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, E.W)();
            }),
            Y(this, '_trackCustomNotificationSoundsExposure', () => {
                j.Y.trackExposure({ location: 'PremiumManager' });
            }),
            Y(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, h.Z)({
                    ...e,
                    analyticsLocations: [d.Z.OVERLAY],
                    onClose: (e) => {
                        l.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            Y(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            Y(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = g.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            Y(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, i.debounce)((e, t, s) => {
                    var n, i;
                    let r = u.Z.getSelectedParticipant(e),
                        o = (0, y.o)(r, s),
                        { sendNitroMessage: l } = (0, T.TD)(o),
                        c = null !== (i = null === (n = m.Z.getGuild(t)) || void 0 === n ? void 0 : n.premiumTier) && void 0 !== i ? i : G.Eu4.NONE;
                    if (x.Z.cooldownIsActive() || !l || c >= G.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== V.fO.STREAM || (null == r ? void 0 : r.id) === (null == s ? void 0 : s.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    S.I();
                    let d = W.intl.formatToPlainString(W.t.AbyeZG, {
                        nickname: r.userNick,
                        resolution: (0, K.o6)(r.maxResolution.height),
                        fps: (0, b.bp)(r.maxFrameRate)
                    });
                    a.Z.sendNitroSystemMessage(e, d),
                        N.default.track(G.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: H.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? G.jXE.TEXT_IN_VOICE : G.jXE.CHANNEL_TEXT_AREA,
                            location_object: G.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
t.Z = new F();
