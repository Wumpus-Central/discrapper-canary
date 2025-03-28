i.d(e, { default: () => $ }), i(47120), i(411104);
var s = i(200651),
    n = i(192379),
    r = i(120356),
    l = i.n(r),
    a = i(979554),
    o = i(442837),
    c = i(780384),
    u = i(481060),
    d = i(533307),
    p = i(410030),
    h = i(607070),
    f = i(100527),
    g = i(906732),
    m = i(728345),
    b = i(812206),
    O = i(884697),
    y = i(583434),
    j = i(551425),
    S = i(832149),
    v = i(745510),
    P = i(313201),
    Z = i(925329),
    x = i(703656),
    w = i(146779),
    I = i(763296),
    C = i(82142),
    T = i(283595),
    R = i(594174),
    N = i(509545),
    A = i(55563),
    E = i(626135),
    k = i(176354),
    D = i(669079),
    _ = i(296848),
    G = i(51144),
    L = i(479446),
    F = i(715627),
    M = i(981632),
    U = i(474936),
    W = i(981631),
    H = i(215023),
    z = i(388032),
    B = i(29973),
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
let Y = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = n.useContext(v.h);
        return (
            n.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    K = (t) => {
        let { step: e, soundId: i } = t;
        return (
            n.useEffect(() => {
                var t;
                if (e !== W.wZ8.CONFIRM) return;
                let s = I.Z.getSoundById(i);
                (0, w.playGiftSound)(i, null !== (t = null == s ? void 0 : s.volume) && void 0 !== t ? t : 1);
            }, [e, i]),
            null
        );
    };
class J extends n.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: s, emojiName: n } = this.props;
        null == t && null != e && m.ZP.fetchApplication(e.applicationId);
        let r = null != i || null != s.giftStyle,
            l = (0, O.mO)(s),
            a = null != n ? k.ZP.getURL(n) : void 0;
        this.setState({
            isCustomGift: r,
            isCollectiblesGift: l,
            emojiURL: a,
            opened: l
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: n, opened: r, isCustomGift: l } = this.state;
        return (0, D.TO)(t, i, s, n, e, r, l);
    }
    get buttonText() {
        return (0, D.L2)(this.step, this.props.giftCode, this.state.isCustomGift);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: n, collectiblesItemType: r } = this.props;
        if (t && this.step === W.wZ8.ERROR) return z.NW.formatToMarkdownString(z.t.JUvC0t, {});
        if (t && !i) {
            if (!e) return z.NW.formatToPlainString(z.t.xHzRub, { recipientDisplayName: G.ZP.getName(R.default.getCurrentUser()) });
            {
                let t = R.default.getUser(s.userId),
                    e = G.ZP.getName(t);
                return r === a.Z.AVATAR_DECORATION
                    ? z.NW.formatToPlainString(z.t.SKduys, { sender: e })
                    : r === a.Z.PROFILE_EFFECT
                      ? z.NW.formatToPlainString(z.t['1w42T0'], { sender: e })
                      : z.NW.formatToPlainString(z.t['0UR0u7'], {
                            sender: e,
                            timeInterval: (null == n ? void 0 : n.interval) === U.rV.MONTH ? z.NW.string(z.t.FPybU1) : z.NW.string(z.t.tfqrho)
                        });
            }
        }
        return null == this.props.sku ? null : (0, D.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = R.default.getUser(this.props.giftCode.userId);
        return z.NW.formatToPlainString(z.t.DDO4W1, { sender: G.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: n, accepted: r, isCustomGift: l, opened: a } = this.state;
        return !a && l
            ? null
            : (0, D.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: n,
                  accepted: r,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: s
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: s } = this.state;
        return (0, D.e$)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case W.wZ8.ERROR:
                return e;
            case W.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case W.wZ8.OPEN:
                return this.handleOpen;
            case W.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s } = this.props,
            { isCustomGift: n } = this.state;
        E.default.track(W.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: n,
            is_custom_message_edited: n && e !== z.NW.string(z.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: s
        });
    }
    render() {
        let { application: t, accepting: e, onClose: i, giftCode: n, headerId: r, transitionState: a, useReducedMotion: o, onComplete: c, customGiftMessage: d, emojiName: p, soundId: h, isThemeDark: f } = this.props,
            g = R.default.getUser(n.userId),
            { isCustomGift: m, isCollectiblesGift: b, accepted: O, opened: y, emojiURL: S } = this.state,
            v = R.default.getCurrentUser(),
            P = this.step === W.wZ8.ERROR,
            x = (null == n ? void 0 : n.userId) != null && null != v && (null == v ? void 0 : v.id) != null && n.userId === v.id;
        switch (this.step) {
            case W.wZ8.ERROR:
                null == c || c(n, !1);
                break;
            case W.wZ8.SUCCESS:
                null == c || c(n, !0);
        }
        return (0, s.jsxs)('div', {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.Y0X, {
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: B.modal,
                    'aria-labelledby': r,
                    children: [
                        null != n.giftStyle &&
                            !m &&
                            !b &&
                            (0, s.jsx)(M.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: B.seasonalGiftIcon
                            }),
                        !m && (0, s.jsx)('div', { className: B.backSplash }),
                        !b &&
                            (0, s.jsx)(u.olH, {
                                onClick: i,
                                className: B.closeButton
                            }),
                        (0, s.jsxs)(u.hzk, {
                            className: l()({
                                [B.content]: !m,
                                [B.contentCustomGift]: m
                            }),
                            children: [
                                !b &&
                                    (null == n.giftStyle || (m && O)) &&
                                    (0, s.jsx)(Z.Z, {
                                        size: Z.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: n.skuId
                                    }),
                                P &&
                                    (0, s.jsx)('img', {
                                        alt: '',
                                        src: f ? q : V
                                    }),
                                (0, s.jsxs)(u.X6q, {
                                    id: r,
                                    className: l()({
                                        [B.customGiftHeader]: m && !O,
                                        [B.header]: !m || O
                                    }),
                                    variant: 'heading-sm/semibold',
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: l()({ [B.customGiftHeaderText]: m }),
                                            children: this.firstHeaderText
                                        }),
                                        (0, s.jsx)('div', { children: this.secondHeaderText })
                                    ]
                                }),
                                !(m && !O) &&
                                    (0, s.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-sm/normal',
                                        children: this.bodyText
                                    }),
                                m &&
                                    !b &&
                                    null != n.giftStyle &&
                                    !O &&
                                    (0, s.jsx)(M.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: B.giftAnimation,
                                        giftStyle: n.giftStyle
                                    }),
                                this.state.opened && !P && (0, s.jsx)(j.Z, { giftCode: n }),
                                P &&
                                    (0, s.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-md/normal',
                                        children: this.errorMessage
                                    }),
                                m &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !P &&
                                    null != d &&
                                    '' !== d &&
                                    !x &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(u.vwX, { children: z.NW.format(z.t.DDO4W1, { sender: G.ZP.getName(g) }) }),
                                            (0, s.jsx)(u.X6q, {
                                                id: r,
                                                className: B.customMessage,
                                                variant: 'heading-sm/bold',
                                                children: d
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
                    this.step !== W.wZ8.ERROR &&
                    !O &&
                    !e &&
                    y &&
                    (null == p || null == S
                        ? (0, s.jsx)(Y, { openedGift: y && !O && !e })
                        : (0, s.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: S
                          })),
                !O &&
                    !e &&
                    y &&
                    null != h &&
                    (0, s.jsx)(K, {
                        soundId: h,
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
                    await d.Z.redeemGiftCode({
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
                (0, x.uL)(W.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            X(this, 'getDefaultAnimationStatus', () => (this.step === W.wZ8.OPEN ? L.SR.IDLE : L.SR.ACTION)),
            X(this, 'getIdleAnimationStatus', () => {
                if (this.step !== W.wZ8.OPEN) return L.SR.LOOP;
            });
    }
}
let Q = o.ZP.connectStores([T.Z, A.Z, b.Z, C.Z, N.Z, h.Z], (t) => {
        let { giftCode: e } = t,
            i = A.Z.get(e.skuId),
            s = null != i ? b.Z.getApplication(i.applicationId) : null,
            n = h.Z.useReducedMotion;
        return {
            sku: i,
            libraryApplication: null != i && (null == e ? void 0 : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, i, T.Z) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
            accepting: C.Z.getIsAccepting(e.code),
            useReducedMotion: n
        };
    })(J),
    $ = (t) => {
        var e,
            i,
            n,
            { channelContext: r, code: l, customGiftMessage: a, emojiName: u, soundId: d, onClose: h } = t,
            m = (function (t, e) {
                if (null == t) return {};
                var i,
                    s,
                    n = (function (t, e) {
                        if (null == t) return {};
                        var i,
                            s,
                            n = {},
                            r = Object.keys(t);
                        for (s = 0; s < r.length; s++) (i = r[s]), e.indexOf(i) >= 0 || (n[i] = t[i]);
                        return n;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (s = 0; s < r.length; s++) (i = r[s]), !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
                }
                return n;
            })(t, ['channelContext', 'code', 'customGiftMessage', 'emojiName', 'soundId', 'onClose']);
        let b = (0, P.Dt)(),
            O = (0, o.e7)([C.Z], () => C.Z.get(l)),
            j = (0, p.ZP)(),
            { analyticsLocations: v } = (0, g.ZP)(f.Z.GIFT_CODE_MODAL),
            { product: Z } = (0, y.T)(null == O ? void 0 : O.skuId);
        return null == O
            ? null
            : (0, s.jsx)(
                  Q,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var i = null != arguments[e] ? arguments[e] : {},
                              s = Object.keys(i);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (s = s.concat(
                                  Object.getOwnPropertySymbols(i).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                  })
                              )),
                              s.forEach(function (e) {
                                  X(t, e, i[e]);
                              });
                      }
                      return t;
                  })({}, m)),
                  (i = i =
                      {
                          customGiftMessage: a,
                          channelContext: r,
                          giftCode: O,
                          headerId: b,
                          emojiName: u,
                          soundId: d,
                          analyticsLocations: v,
                          isThemeDark: (0, c.wj)(j),
                          onClose: h,
                          collectiblesItemType: null == Z ? void 0 : null === (n = Z.items[0]) || void 0 === n ? void 0 : n.type,
                          onAccept:
                              null != Z
                                  ? () => {
                                        h(),
                                            (0, S.Z)({
                                                product: Z,
                                                analyticsLocations: v,
                                                purchaseType: H.o8.GIFT
                                            });
                                    }
                                  : void 0
                      }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                      : (function (t, e) {
                            var i = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(t);
                                i.push.apply(i, s);
                            }
                            return i;
                        })(Object(i)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                        }),
                  e)
              );
    };
