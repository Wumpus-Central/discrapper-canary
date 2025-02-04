n.d(t, { Z: () => Y }), n(411104), n(47120);
var i = n(200651);
n(192379);
var l = n(392711),
    r = n(848246),
    s = n(481060),
    o = n(570140),
    a = n(904245),
    c = n(317770),
    d = n(100527),
    u = n(358221),
    _ = n(963249),
    E = n(93127),
    h = n(361291),
    p = n(592125),
    I = n(430824),
    m = n(594174),
    T = n(431),
    C = n(626135),
    N = n(74538),
    g = n(557457),
    S = n(970645),
    f = n(30684),
    R = n(514701),
    A = n(6242),
    O = n(467721),
    L = n(757692),
    P = n(114064),
    x = n(933843),
    b = n(281494),
    D = n(276444),
    M = n(937579),
    v = n(1163),
    U = n(841174),
    y = n(522558),
    k = n(879463),
    Z = n(822070),
    V = n(520540),
    j = n(11352),
    w = n(474936),
    G = n(981631),
    F = n(354459),
    B = n(37113),
    H = n(388032);
function W(e, t, n) {
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
        __OVERLAY__ ? o.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (o.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), o.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), o.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), o.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), o.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? o.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (o.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), o.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), o.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), o.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: l } = e;
        (0, s.ZDy)(async () => {
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
        let e = m.default.getCurrentUser();
        if (D.Z.getIsFetchingReferralIncentiveEligibility() || !(0, N.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        V.g.getCurrentConfig(t, n).enabled && !k.eP.getCurrentConfig(t, n).enabled && Z.$.getCurrentConfig(t, n).enabled && (0, b.bq)();
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, _.Z)({
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
                o.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: l
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = v.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== G.hes.DISCONNECTED || e.willReconnect) return;
        let n = p.Z.getChannel(e.channelId);
        if (null == n) return;
        let i = P.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (i &&
                o.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !i)
        )
            return;
        let { resolution: l, fps: s } = h.Z.getState();
        (0, x.mc)(l, s) || (0, U.Z)(n.guild_id);
    }
    constructor(...e) {
        super(...e),
            W(this, '_premiumPaymentModalCloseResolve', null),
            W(this, '_premiumPaymentModalCloseReject', null),
            W(this, '_maybeFetchPremiumOffer', async () => {
                let e = m.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, N.I5)(e) && T.Z.shouldFetchOffer();
                    await (0, M.T)('PremiumManager', void 0, t);
                }
                o.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            W(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = m.default.getCurrentUser();
                null != e && e.verified && !(0, N.I5)(e) && f.Z.shouldFetchCheckoutRecovery() && (await (0, S.o)());
            }),
            W(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = y.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, E.W)();
            }),
            W(this, '_trackCustomNotificationSoundsExposure', () => {
                j.Y.trackExposure({ location: 'PremiumManager' });
            }),
            W(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, _.Z)({
                    ...e,
                    analyticsLocations: [d.Z.OVERLAY],
                    onClose: (e) => {
                        o.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            W(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            W(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = m.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            W(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, l.debounce)((e, t, n) => {
                    var i, l;
                    let r = u.Z.getSelectedParticipant(e),
                        s = (0, L.o)(r, n),
                        { sendNitroMessage: o } = (0, A.TD)(s),
                        c = null !== (l = null === (i = I.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== l ? l : G.Eu4.NONE;
                    if (O.Z.cooldownIsActive() || !o || c >= G.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== F.fO.STREAM || (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    R.I();
                    let d = H.intl.formatToPlainString(H.t.AbyeZG, {
                        nickname: r.userNick,
                        resolution: (0, B.o6)(r.maxResolution.height),
                        fps: (0, g.bp)(r.maxFrameRate)
                    });
                    a.Z.sendNitroSystemMessage(e, d),
                        C.default.track(G.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: w.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? G.jXE.TEXT_IN_VOICE : G.jXE.CHANNEL_TEXT_AREA,
                            location_object: G.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
let Y = new z();
