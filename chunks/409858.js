i.d(e, { default: () => $ }), i(388685), i(415506);
var n = i(255367),
    s = i(73800),
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
    A = i(509545),
    E = i(55563),
    k = i(626135),
    N = i(176354),
    D = i(669079),
    _ = i(296848),
    G = i(51144),
    L = i(479446),
    F = i(715627),
    M = i(981632),
    U = i(474936),
    H = i(981631),
    z = i(215023),
    B = i(388032),
    q = i(230277),
    V = i(167969),
    X = i(557256);
function W(t, e, i) {
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
            { createMultipleConfettiAt: i } = s.useContext(v.h);
        return (
            s.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    K = (t) => {
        let { step: e, soundId: i } = t;
        return (
            s.useEffect(() => {
                var t;
                if (e !== H.wZ8.CONFIRM) return;
                let n = I.Z.getSoundById(i);
                (0, w.playGiftSound)(i, null != (t = null == n ? void 0 : n.volume) ? t : 1);
            }, [e, i]),
            null
        );
    };
class J extends s.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: n, emojiName: s } = this.props;
        null == t && null != e && m.ZP.fetchApplication(e.applicationId);
        let r = null != i || null != n.giftStyle,
            l = (0, O.mO)(n),
            a = null != s ? N.ZP.getURL(s) : void 0;
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
            { error: n, accepted: s, opened: r, isCustomGift: l } = this.state;
        return (0, D.TO)(t, i, n, s, e, r, l);
    }
    get buttonText() {
        return (0, D.L2)(this.step, this.props.giftCode, this.state.isCustomGift);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: s, collectiblesItemType: r } = this.props;
        if (t && this.step === H.wZ8.ERROR) return B.intl.formatToMarkdownString(B.t.JUvC0t, {});
        if (t && !i)
            if (!e) return B.intl.formatToPlainString(B.t.xHzRub, { recipientDisplayName: G.ZP.getName(R.default.getCurrentUser()) });
            else {
                let t = R.default.getUser(n.userId),
                    e = G.ZP.getName(t);
                return r === a.Z.AVATAR_DECORATION
                    ? B.intl.formatToPlainString(B.t.SKduys, { sender: e })
                    : r === a.Z.PROFILE_EFFECT
                      ? B.intl.formatToPlainString(B.t['1w42T0'], { sender: e })
                      : B.intl.formatToPlainString(B.t['0UR0u7'], {
                            sender: e,
                            timeInterval: (null == s ? void 0 : s.interval) === U.rV.MONTH ? B.intl.string(B.t.FPybU1) : B.intl.string(B.t.tfqrho)
                        });
            }
        return null == this.props.sku ? null : (0, D.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = R.default.getUser(this.props.giftCode.userId);
        return B.intl.formatToPlainString(B.t.DDO4W1, { sender: G.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n } = this.props;
        if (null == t) return null;
        let { error: s, accepted: r, isCustomGift: l, opened: a } = this.state;
        return !a && l
            ? null
            : (0, D.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: s,
                  accepted: r,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: n
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: n } = this.state;
        return (0, D.e$)(t, i, n, e, this.handleGoToLibrary);
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
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: n } = this.props,
            { isCustomGift: s } = this.state;
        k.default.track(H.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: s,
            is_custom_message_edited: s && e !== B.intl.string(B.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: n
        });
    }
    render() {
        let { application: t, accepting: e, onClose: i, giftCode: s, headerId: r, transitionState: a, useReducedMotion: o, onComplete: c, customGiftMessage: d, emojiName: p, soundId: h, isThemeDark: f } = this.props,
            g = R.default.getUser(s.userId),
            { isCustomGift: m, isCollectiblesGift: b, accepted: O, opened: y, emojiURL: S } = this.state,
            v = R.default.getCurrentUser(),
            P = this.step === H.wZ8.ERROR,
            x = (null == s ? void 0 : s.userId) != null && null != v && (null == v ? void 0 : v.id) != null && s.userId === v.id;
        switch (this.step) {
            case H.wZ8.ERROR:
                null == c || c(s, !1);
                break;
            case H.wZ8.SUCCESS:
                null == c || c(s, !0);
        }
        return (0, n.jsxs)('div', {
            ref: this.modalRef,
            children: [
                (0, n.jsxs)(u.Y0X, {
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: q.modal,
                    'aria-labelledby': r,
                    children: [
                        null != s.giftStyle &&
                            !m &&
                            !b &&
                            (0, n.jsx)(M.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: s.giftStyle,
                                className: q.seasonalGiftIcon
                            }),
                        !m && (0, n.jsx)('div', { className: q.backSplash }),
                        !b &&
                            (0, n.jsx)(u.olH, {
                                onClick: i,
                                className: q.closeButton
                            }),
                        (0, n.jsxs)(u.hzk, {
                            className: l()({
                                [q.content]: !m,
                                [q.contentCustomGift]: m
                            }),
                            children: [
                                !b &&
                                    (null == s.giftStyle || (m && O)) &&
                                    (0, n.jsx)(Z.Z, {
                                        size: Z.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: s.skuId
                                    }),
                                P &&
                                    (0, n.jsx)('img', {
                                        alt: '',
                                        src: f ? V : X
                                    }),
                                (0, n.jsxs)(u.X6q, {
                                    id: r,
                                    className: l()({
                                        [q.customGiftHeader]: m && !O,
                                        [q.header]: !m || O
                                    }),
                                    variant: 'heading-sm/semibold',
                                    children: [
                                        (0, n.jsx)('div', {
                                            className: l()({ [q.customGiftHeaderText]: m }),
                                            children: this.firstHeaderText
                                        }),
                                        (0, n.jsx)('div', { children: this.secondHeaderText })
                                    ]
                                }),
                                !(m && !O) &&
                                    (0, n.jsx)(u.Text, {
                                        className: q.body,
                                        variant: 'text-sm/normal',
                                        children: this.bodyText
                                    }),
                                m &&
                                    !b &&
                                    null != s.giftStyle &&
                                    !O &&
                                    (0, n.jsx)(M.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: q.giftAnimation,
                                        giftStyle: s.giftStyle
                                    }),
                                this.state.opened && !P && (0, n.jsx)(j.Z, { giftCode: s }),
                                P &&
                                    (0, n.jsx)(u.Text, {
                                        className: q.body,
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
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(u.vwX, { children: B.intl.format(B.t.DDO4W1, { sender: G.ZP.getName(g) }) }),
                                            (0, n.jsx)(u.X6q, {
                                                id: r,
                                                className: q.customMessage,
                                                variant: 'heading-sm/bold',
                                                children: d
                                            })
                                        ]
                                    }),
                                (0, n.jsx)(u.zxk, {
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
                null != s.giftStyle &&
                    !o &&
                    this.step !== H.wZ8.ERROR &&
                    !O &&
                    !e &&
                    y &&
                    (null == p || null == S
                        ? (0, n.jsx)(Y, { openedGift: y && !O && !e })
                        : (0, n.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: S
                          })),
                !O &&
                    !e &&
                    y &&
                    null != h &&
                    (0, n.jsx)(K, {
                        soundId: h,
                        step: this.step
                    })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            W(this, 'state', {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0
            }),
            W(this, 'modalRef', s.createRef()),
            W(this, 'handleOpen', () => {
                this.setState({ opened: !0 });
            }),
            W(this, 'handleAccept', async () => {
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
            W(this, 'handleGoToLibrary', () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, x.uL)(H.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            W(this, 'getDefaultAnimationStatus', () => (this.step === H.wZ8.OPEN ? L.SR.IDLE : L.SR.ACTION)),
            W(this, 'getIdleAnimationStatus', () => {
                if (this.step !== H.wZ8.OPEN) return L.SR.LOOP;
            });
    }
}
let Q = o.ZP.connectStores([T.Z, E.Z, b.Z, C.Z, A.Z, h.Z], (t) => {
        let { giftCode: e } = t,
            i = E.Z.get(e.skuId),
            n = null != i ? b.Z.getApplication(i.applicationId) : null,
            s = h.Z.useReducedMotion;
        return {
            sku: i,
            libraryApplication: null != i && (null == e ? void 0 : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, i, T.Z) : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
            accepting: C.Z.getIsAccepting(e.code),
            useReducedMotion: s
        };
    })(J),
    $ = (t) => {
        var e,
            i,
            s,
            { channelContext: r, code: l, customGiftMessage: a, emojiName: u, soundId: d, onClose: h } = t,
            m = (function (t, e) {
                if (null == t) return {};
                var i,
                    n,
                    s = (function (t, e) {
                        if (null == t) return {};
                        var i,
                            n,
                            s = {},
                            r = Object.keys(t);
                        for (n = 0; n < r.length; n++) (i = r[n]), e.indexOf(i) >= 0 || (s[i] = t[i]);
                        return s;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < r.length; n++) (i = r[n]), !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i]);
                }
                return s;
            })(t, ['channelContext', 'code', 'customGiftMessage', 'emojiName', 'soundId', 'onClose']);
        let b = (0, P.Dt)(),
            O = (0, o.e7)([C.Z], () => C.Z.get(l)),
            j = (0, p.ZP)(),
            { analyticsLocations: v } = (0, g.ZP)(f.Z.GIFT_CODE_MODAL),
            { product: Z } = (0, y.T)(null == O ? void 0 : O.skuId);
        return null == O
            ? null
            : (0, n.jsx)(
                  Q,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var i = null != arguments[e] ? arguments[e] : {},
                              n = Object.keys(i);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (n = n.concat(
                                  Object.getOwnPropertySymbols(i).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                  })
                              )),
                              n.forEach(function (e) {
                                  W(t, e, i[e]);
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
                          collectiblesItemType: null == Z || null == (s = Z.items[0]) ? void 0 : s.type,
                          onAccept:
                              null != Z
                                  ? () => {
                                        h(),
                                            (0, S.Z)({
                                                product: Z,
                                                analyticsLocations: v,
                                                purchaseType: z.o8.GIFT
                                            });
                                    }
                                  : void 0
                      }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                      : (function (t, e) {
                            var i = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(t);
                                i.push.apply(i, n);
                            }
                            return i;
                        })(Object(i)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                        }),
                  e)
              );
    };
