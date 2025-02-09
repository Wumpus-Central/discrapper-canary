i.d(e, { default: () => Q }), i(47120), i(411104);
var s = i(200651),
    n = i(192379),
    l = i(120356),
    a = i.n(l),
    r = i(979554),
    o = i(442837),
    d = i(780384),
    u = i(481060),
    c = i(533307),
    h = i(410030),
    p = i(607070),
    f = i(100527),
    m = i(906732),
    g = i(728345),
    Z = i(812206),
    S = i(884697),
    x = i(583434),
    v = i(551425),
    I = i(832149),
    C = i(745510),
    R = i(313201),
    T = i(925329),
    y = i(703656),
    A = i(146779),
    b = i(763296),
    j = i(82142),
    P = i(283595),
    E = i(594174),
    O = i(509545),
    w = i(55563),
    N = i(626135),
    k = i(176354),
    _ = i(669079),
    L = i(296848),
    G = i(51144),
    D = i(479446),
    F = i(715627),
    M = i(981632),
    U = i(474936),
    H = i(981631),
    z = i(388032),
    B = i(21809),
    q = i(167969),
    V = i(557256);
function X(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let W = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = n.useContext(C.h);
        return (
            n.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    Y = (t) => {
        let { step: e, soundId: i } = t;
        return (
            n.useEffect(() => {
                var t;
                if (e !== H.wZ8.CONFIRM) return;
                let s = b.Z.getSoundById(i);
                (0, A.playGiftSound)(i, null !== (t = null == s ? void 0 : s.volume) && void 0 !== t ? t : 1);
            }, [e, i]),
            null
        );
    };
class K extends n.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: s, emojiName: n } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
        let l = null != i || null != s.giftStyle,
            a = (0, S.mO)(s),
            r = null != n ? k.ZP.getURL(n) : void 0;
        this.setState({
            isCustomGift: l,
            isCollectiblesGift: a,
            emojiURL: r,
            opened: a
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: n, opened: l, isCustomGift: a } = this.state;
        return (0, _.TO)(t, i, s, n, e, l, a);
    }
    get buttonText() {
        return (0, _.L2)(this.step, this.props.giftCode, this.state.isCustomGift);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: n, collectiblesItemType: l } = this.props;
        if (t && this.step === H.wZ8.ERROR) return z.intl.formatToMarkdownString(z.t.JUvC0t, {});
        if (t && !i) {
            if (!e) return z.intl.formatToPlainString(z.t.xHzRub, { recipientDisplayName: G.ZP.getName(E.default.getCurrentUser()) });
            {
                let t = E.default.getUser(s.userId),
                    e = G.ZP.getName(t);
                return l === r.Z.AVATAR_DECORATION
                    ? z.intl.formatToPlainString(z.t.SKduys, { sender: e })
                    : l === r.Z.PROFILE_EFFECT
                      ? z.intl.formatToPlainString(z.t['1w42T0'], { sender: e })
                      : z.intl.formatToPlainString(z.t['0UR0u7'], {
                            sender: e,
                            timeInterval: (null == n ? void 0 : n.interval) === U.rV.MONTH ? z.intl.string(z.t.FPybU1) : z.intl.string(z.t.tfqrho)
                        });
            }
        }
        return null == this.props.sku ? null : (0, _.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = E.default.getUser(this.props.giftCode.userId);
        return z.intl.formatToPlainString(z.t.DDO4W1, { sender: G.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: n, accepted: l, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, _.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: n,
                  accepted: l,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: s
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: s } = this.state;
        return (0, _.e$)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case H.wZ8.ERROR:
                return e;
            case H.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case H.wZ8.OPEN:
                return this.handleOpen;
            case H.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s } = this.props,
            { isCustomGift: n } = this.state;
        N.default.track(H.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: n,
            is_custom_message_edited: n && e !== z.intl.string(z.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: s
        });
    }
    render() {
        let { application: t, accepting: e, onClose: i, giftCode: n, headerId: l, transitionState: r, useReducedMotion: o, onComplete: d, customGiftMessage: c, emojiName: h, soundId: p, isThemeDark: f } = this.props,
            m = E.default.getUser(n.userId),
            { isCustomGift: g, isCollectiblesGift: Z, accepted: S, opened: x, emojiURL: I } = this.state,
            C = E.default.getCurrentUser(),
            R = this.step === H.wZ8.ERROR,
            y = (null == n ? void 0 : n.userId) != null && null != C && (null == C ? void 0 : C.id) != null && n.userId === C.id;
        switch (this.step) {
            case H.wZ8.ERROR:
                null == d || d(n, !1);
                break;
            case H.wZ8.SUCCESS:
                null == d || d(n, !0);
        }
        return (0, s.jsxs)('div', {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.Y0X, {
                    transitionState: r,
                    size: u.CgR.SMALL,
                    className: B.modal,
                    'aria-labelledby': l,
                    children: [
                        null != n.giftStyle &&
                            !g &&
                            !Z &&
                            (0, s.jsx)(M.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: B.seasonalGiftIcon
                            }),
                        !g && (0, s.jsx)('div', { className: B.backSplash }),
                        !Z &&
                            (0, s.jsx)(u.olH, {
                                onClick: i,
                                className: B.closeButton
                            }),
                        (0, s.jsxs)(u.hzk, {
                            className: a()({
                                [B.content]: !g,
                                [B.contentCustomGift]: g
                            }),
                            children: [
                                !Z &&
                                    (null == n.giftStyle || (g && S)) &&
                                    (0, s.jsx)(T.Z, {
                                        size: T.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: n.skuId
                                    }),
                                R &&
                                    (0, s.jsx)('img', {
                                        alt: '',
                                        src: f ? q : V
                                    }),
                                (0, s.jsxs)(u.X6q, {
                                    id: l,
                                    className: a()({
                                        [B.customGiftHeader]: g && !S,
                                        [B.header]: !g || S
                                    }),
                                    variant: 'heading-sm/semibold',
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: a()({ [B.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText
                                        }),
                                        (0, s.jsx)('div', { children: this.secondHeaderText })
                                    ]
                                }),
                                !(g && !S) &&
                                    (0, s.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-sm/normal',
                                        children: this.bodyText
                                    }),
                                g &&
                                    !Z &&
                                    null != n.giftStyle &&
                                    !S &&
                                    (0, s.jsx)(M.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: B.giftAnimation,
                                        giftStyle: n.giftStyle
                                    }),
                                this.state.opened && !R && (0, s.jsx)(v.Z, { giftCode: n }),
                                R &&
                                    (0, s.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-md/normal',
                                        children: this.errorMessage
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !R &&
                                    null != c &&
                                    '' !== c &&
                                    !y &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(u.vwX, { children: z.intl.format(z.t.DDO4W1, { sender: G.ZP.getName(m) }) }),
                                            (0, s.jsx)(u.X6q, {
                                                id: l,
                                                className: B.customMessage,
                                                variant: 'heading-sm/bold',
                                                children: c
                                            })
                                        ]
                                    }),
                                (0, s.jsx)(u.zxk, {
                                    submitting: e,
                                    onClick: () => {
                                        this.trackStepAnalytics(), this.handleClick();
                                    },
                                    children: this.buttonText
                                })
                            ]
                        })
                    ]
                }),
                null != n.giftStyle &&
                    !o &&
                    this.step !== H.wZ8.ERROR &&
                    (0, s.jsx)(s.Fragment, {
                        children:
                            !S &&
                            !e &&
                            x &&
                            (null == h || null == I
                                ? (0, s.jsx)(W, { openedGift: x && !S && !e })
                                : (0, s.jsx)(F.Z, {
                                      confettiTarget: this.modalRef.current,
                                      emojiURL: I
                                  }))
                    }),
                !S &&
                    !e &&
                    x &&
                    null != p &&
                    (0, s.jsx)(Y, {
                        soundId: p,
                        step: this.step
                    })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            X(this, 'state', {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0
            }),
            X(this, 'modalRef', n.createRef()),
            X(this, 'handleOpen', () => {
                this.setState({ opened: !0 });
            }),
            X(this, 'handleAccept', async () => {
                let { giftCode: t, channelContext: e, onAccept: i } = this.props;
                if (null == t) throw Error('GiftCode is null at acceptance.');
                try {
                    await c.Z.redeemGiftCode({
                        code: t.code,
                        options: { channelId: e }
                    }),
                        this.setState({ accepted: !0 }),
                        null == i || i();
                } catch (t) {
                    this.setState({ error: t });
                }
            }),
            X(this, 'handleGoToLibrary', () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, y.uL)(H.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            X(this, 'getDefaultAnimationStatus', () => (this.step === H.wZ8.OPEN ? D.SR.IDLE : D.SR.ACTION)),
            X(this, 'getIdleAnimationStatus', () => {
                if (this.step !== H.wZ8.OPEN) return D.SR.LOOP;
            });
    }
}
let J = o.ZP.connectStores([P.Z, w.Z, Z.Z, j.Z, O.Z, p.Z], (t) => {
        let { giftCode: e } = t,
            i = w.Z.get(e.skuId),
            s = null != i ? Z.Z.getApplication(i.applicationId) : null,
            n = p.Z.useReducedMotion;
        return {
            sku: i,
            libraryApplication: null != i && (null == e ? void 0 : e.entitlementBranches) != null ? (0, _.z2)(e.entitlementBranches, i, P.Z) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, L.oE)(e.subscriptionPlanId) : null,
            accepting: j.Z.getIsAccepting(e.code),
            useReducedMotion: n
        };
    })(K),
    Q = (t) => {
        var e;
        let { channelContext: i, code: n, customGiftMessage: l, emojiName: a, soundId: r, onClose: u, ...c } = t,
            p = (0, R.Dt)(),
            g = (0, o.e7)([j.Z], () => j.Z.get(n)),
            Z = (0, h.ZP)(),
            { analyticsLocations: S } = (0, m.ZP)(f.Z.GIFT_CODE_MODAL),
            { product: v } = (0, x.T)(null == g ? void 0 : g.skuId);
        return null == g
            ? null
            : (0, s.jsx)(J, {
                  ...c,
                  customGiftMessage: l,
                  channelContext: i,
                  giftCode: g,
                  headerId: p,
                  emojiName: a,
                  soundId: r,
                  analyticsLocations: S,
                  isThemeDark: (0, d.wj)(Z),
                  onClose: u,
                  collectiblesItemType: null == v ? void 0 : null === (e = v.items[0]) || void 0 === e ? void 0 : e.type,
                  onAccept:
                      null != v
                          ? () => {
                                u(),
                                    (0, I.Z)({
                                        product: v,
                                        analyticsLocations: S
                                    });
                            }
                          : void 0
              });
    };
