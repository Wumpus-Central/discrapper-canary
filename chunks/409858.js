n.d(e, { default: () => $ }), n(388685), n(415506);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(979554),
    a = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(533307),
    p = n(410030),
    f = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(728345),
    y = n(812206),
    b = n(884697),
    O = n(583434),
    j = n(551425),
    v = n(832149),
    P = n(745510),
    S = n(313201),
    x = n(925329),
    w = n(703656),
    Z = n(146779),
    C = n(763296),
    I = n(82142),
    T = n(283595),
    R = n(594174),
    E = n(509545),
    A = n(55563),
    k = n(626135),
    D = n(176354),
    N = n(669079),
    _ = n(296848),
    G = n(51144),
    L = n(479446),
    M = n(715627),
    F = n(981632),
    U = n(474936),
    H = n(981631),
    z = n(215023),
    V = n(388032),
    B = n(230277),
    K = n(167969),
    W = n(557256);
function q(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let X = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: n } = r.useContext(P.h);
        return (
            r.useEffect(() => {
                e && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, e]),
            null
        );
    },
    Y = (t) => {
        let { step: e, soundId: n } = t;
        return (
            r.useEffect(() => {
                var t;
                if (e !== H.wZ8.CONFIRM) return;
                let i = C.Z.getSoundById(n);
                (0, Z.playGiftSound)(n, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e, n]),
            null
        );
    };
class J extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
        let s = null != n || null != i.giftStyle,
            l = (0, b.mO)(i),
            o = null != r ? D.ZP.getURL(r) : void 0;
        this.setState({
            isCustomGift: s,
            isCollectiblesGift: l,
            emojiURL: o,
            opened: l
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: n } = this.props,
            { error: i, accepted: r, opened: s, isCustomGift: l } = this.state;
        return (0, N.TO)(t, n, i, r, e, s, l);
    }
    get buttonText() {
        return (0, N.L2)(this.step, this.props.giftCode, this.state.isCustomGift);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: n } = this.state,
            { giftCode: i, subscriptionPlan: r, collectiblesItemType: s } = this.props;
        if (t && this.step === H.wZ8.ERROR) return V.intl.formatToMarkdownString(V.t.JUvC0t, {});
        if (t && !n)
            if (!e) return V.intl.formatToPlainString(V.t.xHzRub, { recipientDisplayName: G.ZP.getName(R.default.getCurrentUser()) });
            else {
                let t = R.default.getUser(i.userId),
                    e = G.ZP.getName(t);
                return s === o.Z.AVATAR_DECORATION
                    ? V.intl.formatToPlainString(V.t.SKduys, { sender: e })
                    : s === o.Z.PROFILE_EFFECT
                      ? V.intl.formatToPlainString(V.t['1w42T0'], { sender: e })
                      : V.intl.formatToPlainString(V.t['0UR0u7'], {
                            sender: e,
                            timeInterval: (null == r ? void 0 : r.interval) === U.rV.MONTH ? V.intl.string(V.t.FPybU1) : V.intl.string(V.t.tfqrho)
                        });
            }
        return null == this.props.sku ? null : (0, N.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = R.default.getUser(this.props.giftCode.userId);
        return V.intl.formatToPlainString(V.t.DDO4W1, { sender: G.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: n, subscriptionPlan: i } = this.props;
        if (null == t) return null;
        let { error: r, accepted: s, isCustomGift: l, opened: o } = this.state;
        return !o && l
            ? null
            : (0, N.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: n,
                  error: r,
                  accepted: s,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: i
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: n, accepted: i } = this.state;
        return (0, N.e$)(t, n, i, e, this.handleGoToLibrary);
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
        let { giftCode: t, customGiftMessage: e, emojiName: n, soundId: i } = this.props,
            { isCustomGift: r } = this.state;
        k.default.track(H.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: r,
            is_custom_message_edited: r && e !== V.intl.string(V.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: n,
            sound_id: i
        });
    }
    render() {
        let { application: t, accepting: e, onClose: n, giftCode: r, headerId: s, transitionState: o, useReducedMotion: a, onComplete: c, customGiftMessage: d, emojiName: p, soundId: f, isThemeDark: h } = this.props,
            m = R.default.getUser(r.userId),
            { isCustomGift: g, isCollectiblesGift: y, accepted: b, opened: O, emojiURL: v } = this.state,
            P = R.default.getCurrentUser(),
            S = this.step === H.wZ8.ERROR,
            w = (null == r ? void 0 : r.userId) != null && null != P && (null == P ? void 0 : P.id) != null && r.userId === P.id;
        switch (this.step) {
            case H.wZ8.ERROR:
                null == c || c(r, !1);
                break;
            case H.wZ8.SUCCESS:
                null == c || c(r, !0);
        }
        return (0, i.jsxs)('div', {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(u.Y0X, {
                    transitionState: o,
                    size: u.CgR.SMALL,
                    className: B.modal,
                    'aria-labelledby': s,
                    children: [
                        null != r.giftStyle &&
                            !g &&
                            !y &&
                            (0, i.jsx)(F.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: r.giftStyle,
                                className: B.seasonalGiftIcon
                            }),
                        !g && (0, i.jsx)('div', { className: B.backSplash }),
                        !y &&
                            (0, i.jsx)(u.olH, {
                                onClick: n,
                                className: B.closeButton
                            }),
                        (0, i.jsxs)(u.hzk, {
                            className: l()({
                                [B.content]: !g,
                                [B.contentCustomGift]: g
                            }),
                            children: [
                                !y &&
                                    (null == r.giftStyle || (g && b)) &&
                                    (0, i.jsx)(x.Z, {
                                        size: x.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: r.skuId
                                    }),
                                S &&
                                    (0, i.jsx)('img', {
                                        alt: '',
                                        src: h ? K : W
                                    }),
                                (0, i.jsxs)(u.X6q, {
                                    id: s,
                                    className: l()({
                                        [B.customGiftHeader]: g && !b,
                                        [B.header]: !g || b
                                    }),
                                    variant: 'heading-sm/semibold',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: l()({ [B.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText
                                        }),
                                        (0, i.jsx)('div', { children: this.secondHeaderText })
                                    ]
                                }),
                                !(g && !b) &&
                                    (0, i.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-sm/normal',
                                        children: this.bodyText
                                    }),
                                g &&
                                    !y &&
                                    null != r.giftStyle &&
                                    !b &&
                                    (0, i.jsx)(F.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: B.giftAnimation,
                                        giftStyle: r.giftStyle
                                    }),
                                this.state.opened && !S && (0, i.jsx)(j.Z, { giftCode: r }),
                                S &&
                                    (0, i.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-md/normal',
                                        children: this.errorMessage
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !S &&
                                    null != d &&
                                    '' !== d &&
                                    !w &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.vwX, { children: V.intl.format(V.t.DDO4W1, { sender: G.ZP.getName(m) }) }),
                                            (0, i.jsx)(u.X6q, {
                                                id: s,
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
                null != r.giftStyle &&
                    !a &&
                    this.step !== H.wZ8.ERROR &&
                    !b &&
                    !e &&
                    O &&
                    (null == p || null == v
                        ? (0, i.jsx)(X, { openedGift: O && !b && !e })
                        : (0, i.jsx)(M.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: v
                          })),
                !b &&
                    !e &&
                    O &&
                    null != f &&
                    (0, i.jsx)(Y, {
                        soundId: f,
                        step: this.step
                    })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            q(this, 'state', {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0
            }),
            q(this, 'modalRef', r.createRef()),
            q(this, 'handleOpen', () => {
                this.setState({ opened: !0 });
            }),
            q(this, 'handleAccept', async () => {
                let { giftCode: t, channelContext: e, onAccept: n } = this.props;
                if (null == t) throw Error('GiftCode is null at acceptance.');
                try {
                    await d.Z.redeemGiftCode({
                        code: t.code,
                        options: { channelId: e }
                    }),
                        this.setState({ accepted: !0 }),
                        null == n || n();
                } catch (t) {
                    this.setState({ error: t });
                }
            }),
            q(this, 'handleGoToLibrary', () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, w.uL)(H.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            q(this, 'getDefaultAnimationStatus', () => (this.step === H.wZ8.OPEN ? L.SR.IDLE : L.SR.ACTION)),
            q(this, 'getIdleAnimationStatus', () => {
                if (this.step !== H.wZ8.OPEN) return L.SR.LOOP;
            });
    }
}
let Q = a.ZP.connectStores([T.Z, A.Z, y.Z, I.Z, E.Z, f.Z], (t) => {
        let { giftCode: e } = t,
            n = A.Z.get(e.skuId),
            i = null != n ? y.Z.getApplication(n.applicationId) : null,
            r = f.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication: null != n && (null == e ? void 0 : e.entitlementBranches) != null ? (0, N.z2)(e.entitlementBranches, n, T.Z) : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
            accepting: I.Z.getIsAccepting(e.code),
            useReducedMotion: r
        };
    })(J),
    $ = (t) => {
        var e,
            n,
            r,
            { channelContext: s, code: l, customGiftMessage: o, emojiName: u, soundId: d, onClose: f } = t,
            g = (function (t, e) {
                if (null == t) return {};
                var n,
                    i,
                    r = (function (t, e) {
                        if (null == t) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(t);
                        for (i = 0; i < s.length; i++) (n = s[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < s.length; i++) (n = s[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
                }
                return r;
            })(t, ['channelContext', 'code', 'customGiftMessage', 'emojiName', 'soundId', 'onClose']);
        let y = (0, S.Dt)(),
            b = (0, a.e7)([I.Z], () => I.Z.get(l)),
            j = (0, p.ZP)(),
            { analyticsLocations: P } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
            { product: x } = (0, O.T)(null == b ? void 0 : b.skuId);
        return null == b
            ? null
            : (0, i.jsx)(
                  Q,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                              i = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (i = i.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                  })
                              )),
                              i.forEach(function (e) {
                                  q(t, e, n[e]);
                              });
                      }
                      return t;
                  })({}, g)),
                  (n = n =
                      {
                          customGiftMessage: o,
                          channelContext: s,
                          giftCode: b,
                          headerId: y,
                          emojiName: u,
                          soundId: d,
                          analyticsLocations: P,
                          isThemeDark: (0, c.wj)(j),
                          onClose: f,
                          collectiblesItemType: null == x || null == (r = x.items[0]) ? void 0 : r.type,
                          onAccept:
                              null != x
                                  ? () => {
                                        f(),
                                            (0, v.Z)({
                                                product: x,
                                                analyticsLocations: P,
                                                purchaseType: z.o8.GIFT
                                            });
                                    }
                                  : void 0
                      }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : (function (t, e) {
                            var n = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                n.push.apply(n, i);
                            }
                            return n;
                        })(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        }),
                  e)
              );
    };
