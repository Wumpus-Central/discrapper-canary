s.d(e, { default: () => $ }), s(47120), s(411104);
var i = s(200651),
    n = s(192379),
    r = s(120356),
    l = s.n(r),
    a = s(979554),
    o = s(442837),
    c = s(780384),
    u = s(481060),
    d = s(533307),
    p = s(410030),
    h = s(607070),
    f = s(100527),
    g = s(906732),
    m = s(728345),
    b = s(812206),
    O = s(884697),
    y = s(583434),
    j = s(551425),
    S = s(832149),
    v = s(745510),
    P = s(313201),
    Z = s(925329),
    x = s(703656),
    w = s(146779),
    I = s(763296),
    C = s(82142),
    T = s(283595),
    R = s(594174),
    N = s(509545),
    A = s(55563),
    E = s(626135),
    k = s(176354),
    D = s(669079),
    _ = s(296848),
    G = s(51144),
    L = s(479446),
    F = s(715627),
    M = s(981632),
    U = s(474936),
    W = s(981631),
    H = s(215023),
    z = s(388032),
    B = s(230277),
    q = s(167969),
    V = s(557256);
function X(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = s),
        t
    );
}
let Y = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: s } = n.useContext(v.h);
        return (
            n.useEffect(() => {
                e && s(window.innerWidth / 2, window.innerHeight / 4);
            }, [s, e]),
            null
        );
    },
    K = (t) => {
        let { step: e, soundId: s } = t;
        return (
            n.useEffect(() => {
                var t;
                if (e !== W.wZ8.CONFIRM) return;
                let i = I.Z.getSoundById(s);
                (0, w.playGiftSound)(s, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e, s]),
            null
        );
    };
class J extends n.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: s, giftCode: i, emojiName: n } = this.props;
        null == t && null != e && m.ZP.fetchApplication(e.applicationId);
        let r = null != s || null != i.giftStyle,
            l = (0, O.mO)(i),
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
        let { libraryApplication: t, accepting: e, giftCode: s } = this.props,
            { error: i, accepted: n, opened: r, isCustomGift: l } = this.state;
        return (0, D.TO)(t, s, i, n, e, r, l);
    }
    get buttonText() {
        return (0, D.L2)(this.step, this.props.giftCode, this.state.isCustomGift);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: s } = this.state,
            { giftCode: i, subscriptionPlan: n, collectiblesItemType: r } = this.props;
        if (t && this.step === W.wZ8.ERROR) return z.NW.formatToMarkdownString(z.t.JUvC0t, {});
        if (t && !s)
            if (!e) return z.NW.formatToPlainString(z.t.xHzRub, { recipientDisplayName: G.ZP.getName(R.default.getCurrentUser()) });
            else {
                let t = R.default.getUser(i.userId),
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
        return null == this.props.sku ? null : (0, D.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = R.default.getUser(this.props.giftCode.userId);
        return z.NW.formatToPlainString(z.t.DDO4W1, { sender: G.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: s, subscriptionPlan: i } = this.props;
        if (null == t) return null;
        let { error: n, accepted: r, isCustomGift: l, opened: a } = this.state;
        return !a && l
            ? null
            : (0, D.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: s,
                  error: n,
                  accepted: r,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: i
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: s, accepted: i } = this.state;
        return (0, D.e$)(t, s, i, e, this.handleGoToLibrary);
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
        let { giftCode: t, customGiftMessage: e, emojiName: s, soundId: i } = this.props,
            { isCustomGift: n } = this.state;
        E.default.track(W.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: n,
            is_custom_message_edited: n && e !== z.NW.string(z.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: s,
            sound_id: i
        });
    }
    render() {
        let { application: t, accepting: e, onClose: s, giftCode: n, headerId: r, transitionState: a, useReducedMotion: o, onComplete: c, customGiftMessage: d, emojiName: p, soundId: h, isThemeDark: f } = this.props,
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
        return (0, i.jsxs)('div', {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(u.Y0X, {
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: B.modal,
                    'aria-labelledby': r,
                    children: [
                        null != n.giftStyle &&
                            !m &&
                            !b &&
                            (0, i.jsx)(M.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: B.seasonalGiftIcon
                            }),
                        !m && (0, i.jsx)('div', { className: B.backSplash }),
                        !b &&
                            (0, i.jsx)(u.olH, {
                                onClick: s,
                                className: B.closeButton
                            }),
                        (0, i.jsxs)(u.hzk, {
                            className: l()({
                                [B.content]: !m,
                                [B.contentCustomGift]: m
                            }),
                            children: [
                                !b &&
                                    (null == n.giftStyle || (m && O)) &&
                                    (0, i.jsx)(Z.Z, {
                                        size: Z.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: n.skuId
                                    }),
                                P &&
                                    (0, i.jsx)('img', {
                                        alt: '',
                                        src: f ? q : V
                                    }),
                                (0, i.jsxs)(u.X6q, {
                                    id: r,
                                    className: l()({
                                        [B.customGiftHeader]: m && !O,
                                        [B.header]: !m || O
                                    }),
                                    variant: 'heading-sm/semibold',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: l()({ [B.customGiftHeaderText]: m }),
                                            children: this.firstHeaderText
                                        }),
                                        (0, i.jsx)('div', { children: this.secondHeaderText })
                                    ]
                                }),
                                !(m && !O) &&
                                    (0, i.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-sm/normal',
                                        children: this.bodyText
                                    }),
                                m &&
                                    !b &&
                                    null != n.giftStyle &&
                                    !O &&
                                    (0, i.jsx)(M.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: B.giftAnimation,
                                        giftStyle: n.giftStyle
                                    }),
                                this.state.opened && !P && (0, i.jsx)(j.Z, { giftCode: n }),
                                P &&
                                    (0, i.jsx)(u.Text, {
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
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.vwX, { children: z.NW.format(z.t.DDO4W1, { sender: G.ZP.getName(g) }) }),
                                            (0, i.jsx)(u.X6q, {
                                                id: r,
                                                className: B.customMessage,
                                                variant: 'heading-sm/bold',
                                                children: d
                                            })
                                        ]
                                    }),
                                (0, i.jsx)(u.zxk, {
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
                        ? (0, i.jsx)(Y, { openedGift: y && !O && !e })
                        : (0, i.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: S
                          })),
                !O &&
                    !e &&
                    y &&
                    null != h &&
                    (0, i.jsx)(K, {
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
                let { giftCode: t, channelContext: e, onAccept: s } = this.props;
                if (null == t) throw Error('GiftCode is null at acceptance.');
                try {
                    await d.Z.redeemGiftCode({
                        code: t.code,
                        options: { channelId: e }
                    }),
                        this.setState({ accepted: !0 }),
                        null == s || s();
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
            s = A.Z.get(e.skuId),
            i = null != s ? b.Z.getApplication(s.applicationId) : null,
            n = h.Z.useReducedMotion;
        return {
            sku: s,
            libraryApplication: null != s && (null == e ? void 0 : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, s, T.Z) : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
            accepting: C.Z.getIsAccepting(e.code),
            useReducedMotion: n
        };
    })(J),
    $ = (t) => {
        var e,
            s,
            n,
            { channelContext: r, code: l, customGiftMessage: a, emojiName: u, soundId: d, onClose: h } = t,
            m = (function (t, e) {
                if (null == t) return {};
                var s,
                    i,
                    n = (function (t, e) {
                        if (null == t) return {};
                        var s,
                            i,
                            n = {},
                            r = Object.keys(t);
                        for (i = 0; i < r.length; i++) (s = r[i]), e.indexOf(s) >= 0 || (n[s] = t[s]);
                        return n;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < r.length; i++) (s = r[i]), !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (n[s] = t[s]);
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
            : (0, i.jsx)(
                  Q,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var s = null != arguments[e] ? arguments[e] : {},
                              i = Object.keys(s);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (i = i.concat(
                                  Object.getOwnPropertySymbols(s).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(s, t).enumerable;
                                  })
                              )),
                              i.forEach(function (e) {
                                  X(t, e, s[e]);
                              });
                      }
                      return t;
                  })({}, m)),
                  (s = s =
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
                          collectiblesItemType: null == Z || null == (n = Z.items[0]) ? void 0 : n.type,
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
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
                      : (function (t, e) {
                            var s = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                s.push.apply(s, i);
                            }
                            return s;
                        })(Object(s)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
                        }),
                  e)
              );
    };
