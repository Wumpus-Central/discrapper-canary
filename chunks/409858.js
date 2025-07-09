(n.d(e, { default: () => $ }), n(388685), n(415506));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(979554),
    o = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(533307),
    p = n(410030),
    f = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(728345),
    y = n(812206),
    O = n(884697),
    b = n(583434),
    j = n(551425),
    S = n(832149),
    P = n(745510),
    v = n(313201),
    x = n(925329),
    w = n(703656),
    Z = n(146779),
    C = n(763296),
    T = n(82142),
    A = n(283595),
    I = n(594174),
    E = n(509545),
    R = n(55563),
    N = n(626135),
    k = n(176354),
    D = n(669079),
    _ = n(296848),
    L = n(51144),
    G = n(479446),
    M = n(715627),
    U = n(981632),
    F = n(474936),
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
            l = (0, O.mO)(i),
            a = null != r ? k.ZP.getURL(r) : void 0;
        (this.setState({
            isCustomGift: s,
            isCollectiblesGift: l,
            emojiURL: a,
            opened: l
        }),
            this.trackStepAnalytics());
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: n } = this.props,
            { error: i, accepted: r, opened: s, isCustomGift: l } = this.state;
        return (0, D.TO)(t, n, i, r, e, s, l);
    }
    get buttonText() {
        return (0, D.L2)(this.step, this.props.giftCode, this.state.isCustomGift);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: n } = this.state,
            { giftCode: i, subscriptionPlan: r, collectiblesItemType: s } = this.props;
        if (t && this.step === H.wZ8.ERROR) return V.intl.formatToMarkdownString(V.t.JUvC0t, {});
        if (t && !n)
            if (!e) return V.intl.formatToPlainString(V.t.xHzRub, { recipientDisplayName: L.ZP.getName(I.default.getCurrentUser()) });
            else {
                let t = I.default.getUser(i.userId),
                    e = L.ZP.getName(t);
                if (null != s)
                    switch (s) {
                        case a.Z.AVATAR_DECORATION:
                            return V.intl.formatToPlainString(V.t.SKduys, { sender: e });
                        case a.Z.PROFILE_EFFECT:
                            return V.intl.formatToPlainString(V.t['1w42T0'], { sender: e });
                        case a.Z.NAMEPLATE:
                            return V.intl.formatToPlainString(V.t.vFiQlZ, { sender: e });
                        default:
                            return V.intl.formatToPlainString(V.t.U4Ko29, { sender: e });
                    }
                return V.intl.formatToPlainString(V.t['0UR0u7'], {
                    sender: e,
                    timeInterval: (null == r ? void 0 : r.interval) === F.rV.MONTH ? V.intl.string(V.t.FPybU1) : V.intl.string(V.t.tfqrho)
                });
            }
        return null == this.props.sku ? null : (0, D.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = I.default.getUser(this.props.giftCode.userId);
        return V.intl.formatToPlainString(V.t.DDO4W1, { sender: L.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: n, subscriptionPlan: i } = this.props;
        if (null == t) return null;
        let { error: r, accepted: s, isCustomGift: l, opened: a } = this.state;
        return !a && l
            ? null
            : (0, D.iM)({
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
        return (0, D.e$)(t, n, i, e, this.handleGoToLibrary);
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
        N.default.track(H.rMx.GIFT_ACCEPT_STEP, {
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
        let { application: t, accepting: e, onClose: n, giftCode: r, headerId: s, transitionState: a, useReducedMotion: o, onComplete: c, customGiftMessage: d, emojiName: p, soundId: f, isThemeDark: h } = this.props,
            m = I.default.getUser(r.userId),
            { isCustomGift: g, isCollectiblesGift: y, accepted: O, opened: b, emojiURL: S } = this.state,
            P = I.default.getCurrentUser(),
            v = this.step === H.wZ8.ERROR,
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
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: B.modal,
                    'aria-labelledby': s,
                    parentComponent: 'GiftCodeModal',
                    children: [
                        null != r.giftStyle &&
                            !g &&
                            !y &&
                            (0, i.jsx)(U.Z, {
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
                                    (null == r.giftStyle || (g && O)) &&
                                    (0, i.jsx)(x.Z, {
                                        size: x.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: r.skuId
                                    }),
                                v &&
                                    (0, i.jsx)('img', {
                                        alt: '',
                                        src: h ? K : W
                                    }),
                                (0, i.jsxs)(u.X6q, {
                                    id: s,
                                    className: l()({
                                        [B.customGiftHeader]: g && !O,
                                        [B.header]: !g || O
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
                                !(g && !O) &&
                                    (0, i.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-sm/normal',
                                        children: this.bodyText
                                    }),
                                g &&
                                    !y &&
                                    null != r.giftStyle &&
                                    !O &&
                                    (0, i.jsx)(U.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: B.giftAnimation,
                                        giftStyle: r.giftStyle
                                    }),
                                this.state.opened && !v && y && (0, i.jsx)(j.Z, { giftCode: r }),
                                v &&
                                    (0, i.jsx)(u.Text, {
                                        className: B.body,
                                        variant: 'text-md/normal',
                                        children: this.errorMessage
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !v &&
                                    null != d &&
                                    '' !== d &&
                                    !w &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.vwX, { children: V.intl.format(V.t.DDO4W1, { sender: L.ZP.getName(m) }) }),
                                            (0, i.jsx)(u.X6q, {
                                                id: s,
                                                className: B.customMessage,
                                                variant: 'heading-sm/bold',
                                                children: d
                                            })
                                        ]
                                    }),
                                (0, i.jsx)(u.zxk, {
                                    variant: 'primary',
                                    text: this.buttonText,
                                    loading: e,
                                    onClick: () => {
                                        (this.trackStepAnalytics(), this.handleClick());
                                    }
                                })
                            ]
                        })
                    ]
                }),
                null != r.giftStyle &&
                    !o &&
                    this.step !== H.wZ8.ERROR &&
                    !O &&
                    !e &&
                    b &&
                    (null == p || null == S
                        ? (0, i.jsx)(X, { openedGift: b && !O && !e })
                        : (0, i.jsx)(M.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: S
                          })),
                !O &&
                    !e &&
                    b &&
                    null != f &&
                    (0, i.jsx)(Y, {
                        soundId: f,
                        step: this.step
                    })
            ]
        });
    }
    constructor(...t) {
        (super(...t),
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
                    (await d.Z.redeemGiftCode({
                        code: t.code,
                        options: { channelId: e }
                    }),
                        this.setState({ accepted: !0 }),
                        null == n || n());
                } catch (t) {
                    this.setState({ error: t });
                }
            }),
            q(this, 'handleGoToLibrary', () => {
                let { onClose: t, libraryApplication: e } = this.props;
                ((0, w.uL)(H.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t());
            }),
            q(this, 'getDefaultAnimationStatus', () => (this.step === H.wZ8.OPEN ? G.SR.IDLE : G.SR.ACTION)),
            q(this, 'getIdleAnimationStatus', () => {
                if (this.step !== H.wZ8.OPEN) return G.SR.LOOP;
            }));
    }
}
let Q = o.ZP.connectStores([A.Z, R.Z, y.Z, T.Z, E.Z, f.Z], (t) => {
        let { giftCode: e } = t,
            n = R.Z.get(e.skuId),
            i = null != n ? y.Z.getApplication(n.applicationId) : null,
            r = f.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication: null != n && (null == e ? void 0 : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, n, A.Z) : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
            accepting: T.Z.getIsAccepting(e.code),
            useReducedMotion: r
        };
    })(J),
    $ = (t) => {
        var e,
            n,
            r,
            { channelContext: s, code: l, customGiftMessage: a, emojiName: u, soundId: d, onClose: f } = t,
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
                        for (i = 0; i < s.length; i++) ((n = s[i]), e.indexOf(n) >= 0 || (r[n] = t[n]));
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < s.length; i++) ((n = s[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
                }
                return r;
            })(t, ['channelContext', 'code', 'customGiftMessage', 'emojiName', 'soundId', 'onClose']);
        let y = (0, v.Dt)(),
            O = (0, o.e7)([T.Z], () => T.Z.get(l)),
            j = (0, p.ZP)(),
            { analyticsLocations: P } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
            { product: x } = (0, b.T)(null == O ? void 0 : O.skuId);
        return null == O
            ? null
            : (0, i.jsx)(
                  Q,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                              i = Object.keys(n);
                          ('function' == typeof Object.getOwnPropertySymbols &&
                              (i = i.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                  })
                              )),
                              i.forEach(function (e) {
                                  q(t, e, n[e]);
                              }));
                      }
                      return t;
                  })({}, g)),
                  (n = n =
                      {
                          customGiftMessage: a,
                          channelContext: s,
                          giftCode: O,
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
                                        (f(),
                                            (0, S.Z)({
                                                product: x,
                                                analyticsLocations: P,
                                                purchaseType: z.o8.GIFT
                                            }));
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
