n.d(e, { default: () => te }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(979554),
    o = n(442837),
    u = n(780384),
    c = n(481060),
    d = n(533307),
    f = n(410030),
    p = n(607070),
    m = n(100527),
    g = n(906732),
    h = n(728345),
    y = n(812206),
    b = n(884697),
    O = n(583434),
    v = n(551425),
    P = n(832149),
    j = n(745510),
    S = n(313201),
    x = n(925329),
    w = n(703656),
    I = n(164670),
    _ = n(435883),
    Z = n(146779),
    A = n(763296),
    C = n(82142),
    T = n(283595),
    E = n(594174),
    R = n(509545),
    N = n(55563),
    k = n(626135),
    G = n(176354),
    D = n(669079),
    L = n(296848),
    M = n(51144),
    U = n(479446),
    H = n(715627),
    F = n(981632),
    B = n(474936),
    z = n(981631),
    V = n(215023),
    K = n(388032),
    W = n(269142),
    q = n(167969),
    X = n(557256);
function Y(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
let J = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: n } = r.useContext(j.h);
        return (
            r.useEffect(() => {
                e && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, e]),
            null
        );
    },
    Q = (t) => {
        let { step: e, soundId: n } = t;
        return (
            r.useEffect(() => {
                var t;
                if (e !== z.wZ8.CONFIRM) return;
                let i = A.Z.getSoundById(n);
                (0, Z.playGiftSound)(n, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e, n]),
            null
        );
    };
class $ extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == t && null != e && h.ZP.fetchApplication(e.applicationId);
        let l = null != n || null != i.giftStyle,
            s = (0, b.mO)(i),
            a = null != r ? G.ZP.getURL(r) : void 0,
            o = (0, D.HL)({ productLine: null == e ? void 0 : e.productLine });
        this.setState({
            isCustomGift: l,
            isCollectiblesGift: s,
            emojiURL: a,
            opened: s,
            isPremiumAppGift: o,
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: n } = this.props,
            { error: i, accepted: r, opened: l, isCustomGift: s, isPremiumAppGift: a } = this.state;
        return (0, D.TO)(t, n, {
            error: i,
            accepted: r,
            accepting: e,
            opened: l,
            isCustomGift: s,
            isPremiumAppGift: a,
        });
    }
    get buttonText() {
        return (0, D.L2)(this.step, this.props.giftCode, {
            isCustomGift: this.state.isCustomGift,
            isPremiumAppGift: this.state.isPremiumAppGift,
        });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: n, isPremiumAppGift: i } = this.state,
            { giftCode: r, subscriptionPlan: l, collectiblesItemType: s, sku: o, application: u } = this.props;
        if (t && this.step === z.wZ8.ERROR) return K.intl.formatToMarkdownString(K.t.JUvC0t, {});
        if (i)
            if (!e)
                return K.intl.formatToPlainString(K.t.xHzRub, {
                    recipientDisplayName: M.ZP.getName(E.default.getCurrentUser()),
                });
            else {
                var c, d;
                if (n) return K.intl.string(K.t["+BNMcH"]);
                let t = E.default.getUser(r.userId);
                return K.intl.formatToPlainString(K.t["2tBYtL"], {
                    sender: M.ZP.getName(t),
                    skuName: null != (c = null == o ? void 0 : o.name) ? c : "item",
                    applicationName: null != (d = null == u ? void 0 : u.name) ? d : "an application",
                });
            }
        if (t && !n)
            if (!e)
                return K.intl.formatToPlainString(K.t.xHzRub, {
                    recipientDisplayName: M.ZP.getName(E.default.getCurrentUser()),
                });
            else {
                let t = E.default.getUser(r.userId),
                    e = M.ZP.getName(t);
                if (null != s)
                    switch (s) {
                        case a.Z.AVATAR_DECORATION:
                            return K.intl.formatToPlainString(K.t.SKduys, { sender: e });
                        case a.Z.PROFILE_EFFECT:
                            return K.intl.formatToPlainString(K.t["1w42T0"], { sender: e });
                        case a.Z.NAMEPLATE:
                            return K.intl.formatToPlainString(K.t.vFiQlZ, { sender: e });
                        default:
                            return K.intl.formatToPlainString(K.t.U4Ko29, { sender: e });
                    }
                return K.intl.formatToPlainString(K.t["0UR0u7"], {
                    sender: e,
                    timeInterval:
                        (null == l ? void 0 : l.interval) === B.rV.MONTH
                            ? K.intl.string(K.t.FPybU1)
                            : K.intl.string(K.t.tfqrho),
                });
            }
        return null == this.props.sku ? null : (0, D.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = E.default.getUser(this.props.giftCode.userId);
        return K.intl.formatToPlainString(K.t.DDO4W1, { sender: M.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: n, subscriptionPlan: i, giftCode: r } = this.props;
        if (null == t) return null;
        let { error: l, accepted: s, isCustomGift: a, opened: o, isPremiumAppGift: u } = this.state;
        if (u) {
            let t = E.default.getUser(r.userId);
            return o
                ? s
                    ? K.intl.string(K.t.fLHIp6)
                    : null
                : K.intl.formatToPlainString(K.t.DDO4W1, { sender: M.ZP.getName(t) });
        }
        return !o && a
            ? null
            : (0, D.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: n,
                  error: l,
                  accepted: s,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: i,
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
            case z.wZ8.ERROR:
                return e;
            case z.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId || this.state.isPremiumAppGift) return e;
                return this.handleGoToLibrary;
            case z.wZ8.OPEN:
                return this.handleOpen;
            case z.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: n, soundId: i, sku: r, analyticsLocations: l } = this.props,
            { isCustomGift: s } = this.state;
        k.default.track(z.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: s,
            is_custom_message_edited: s && e !== K.intl.string(K.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: n,
            sound_id: i,
            product_line: null == r ? void 0 : r.productLine,
        });
    }
    render() {
        let {
                sku: t,
                application: e,
                accepting: n,
                onClose: r,
                giftCode: l,
                headerId: a,
                transitionState: o,
                useReducedMotion: u,
                onComplete: d,
                customGiftMessage: f,
                emojiName: p,
                soundId: m,
                isThemeDark: g,
            } = this.props,
            h = E.default.getUser(l.userId),
            {
                isCustomGift: y,
                isCollectiblesGift: b,
                accepted: O,
                opened: P,
                emojiURL: j,
                isPremiumAppGift: S,
            } = this.state,
            w = E.default.getCurrentUser(),
            Z = this.step === z.wZ8.ERROR,
            A =
                (null == l ? void 0 : l.userId) != null &&
                null != w &&
                (null == w ? void 0 : w.id) != null &&
                l.userId === w.id;
        switch (this.step) {
            case z.wZ8.ERROR:
                null == d || d(l, !1);
                break;
            case z.wZ8.SUCCESS:
                null == d || d(l, !0);
        }
        let C = (0, I.K)(t);
        return (0, i.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(c.Y0X, {
                    transitionState: o,
                    size: c.CgR.SMALL,
                    className: W.modal,
                    "aria-labelledby": a,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != l.giftStyle &&
                            !y &&
                            !b &&
                            (0, i.jsx)(F.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: l.giftStyle,
                                className: W.seasonalGiftIcon,
                            }),
                        !y && (0, i.jsx)("div", { className: W.backSplash }),
                        !b &&
                            (0, i.jsx)(c.olH, {
                                onClick: r,
                                className: W.closeButton,
                            }),
                        (0, i.jsxs)(c.hzk, {
                            className: s()({
                                [W.content]: !y,
                                [W.contentCustomGift]: y,
                            }),
                            children: [
                                (!b && !S && (null == l.giftStyle || (y && O))) || C
                                    ? (0, i.jsx)(x.Z, {
                                          size: x.A.LARGE,
                                          game: e,
                                          skuId: l.skuId,
                                      })
                                    : null,
                                Z &&
                                    (0, i.jsx)("img", {
                                        alt: "",
                                        src: g ? q : X,
                                    }),
                                (0, i.jsxs)(c.X6q, {
                                    id: a,
                                    className: s()({
                                        [W.customGiftHeader]: y && !O,
                                        [W.header]: !y || O,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: s()({ [W.customGiftHeaderText]: y }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, i.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(y && !O) &&
                                    (0, i.jsx)(c.Text, {
                                        className: W.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                y &&
                                    !b &&
                                    null != l.giftStyle &&
                                    !O &&
                                    !Z &&
                                    (0, i.jsx)(F.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: W.giftAnimation,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !Z && b && (0, i.jsx)(v.Z, { giftCode: l }),
                                Z &&
                                    (0, i.jsx)(c.Text, {
                                        className: W.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                y &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !Z &&
                                    null != f &&
                                    "" !== f &&
                                    !A &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.vwX, {
                                                children: K.intl.format(K.t.DDO4W1, { sender: M.ZP.getName(h) }),
                                            }),
                                            (0, i.jsx)(c.X6q, {
                                                id: a,
                                                className: W.customMessage,
                                                variant: "heading-sm/bold",
                                                children: f,
                                            }),
                                        ],
                                    }),
                                C &&
                                    (0, i.jsx)(_.q, {
                                        sku: t,
                                        className: s()({
                                            [W.gameItemImageGiftUnopened]: !this.state.opened,
                                            [W.gameItemImageGiftOpened]: this.state.opened,
                                        }),
                                    }),
                                (0, i.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: this.buttonText,
                                    loading: n,
                                    onClick: () => {
                                        this.trackStepAnalytics(), this.handleClick();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                null != l.giftStyle &&
                    !u &&
                    this.step !== z.wZ8.ERROR &&
                    !O &&
                    !n &&
                    P &&
                    (null == p || null == j
                        ? (0, i.jsx)(J, { openedGift: P && !O && !n })
                        : (0, i.jsx)(H.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: j,
                          })),
                !O &&
                    !n &&
                    P &&
                    null != m &&
                    (0, i.jsx)(Q, {
                        soundId: m,
                        step: this.step,
                    }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            Y(this, "state", {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0,
                isPremiumAppGift: !1,
            }),
            Y(this, "modalRef", r.createRef()),
            Y(this, "handleOpen", () => {
                this.setState({ opened: !0 });
            }),
            Y(this, "handleAccept", async () => {
                let { giftCode: t, channelContext: e, onAccept: n } = this.props;
                if (null == t) throw Error("GiftCode is null at acceptance.");
                try {
                    await d.Z.redeemGiftCode({
                        code: t.code,
                        options: { channelId: e },
                    }),
                        this.setState({ accepted: !0 }),
                        null == n || n();
                } catch (t) {
                    this.setState({ error: t });
                }
            }),
            Y(this, "handleGoToLibrary", () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, w.uL)(z.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            Y(this, "getDefaultAnimationStatus", () => (this.step === z.wZ8.OPEN ? U.SR.IDLE : U.SR.ACTION)),
            Y(this, "getIdleAnimationStatus", () => {
                if (this.step !== z.wZ8.OPEN) return U.SR.LOOP;
            });
    }
}
let tt = o.ZP.connectStores([T.Z, N.Z, y.Z, C.Z, R.Z, p.Z], (t) => {
        let { giftCode: e } = t,
            n = N.Z.get(e.skuId),
            i = null != n ? y.Z.getApplication(n.applicationId) : null,
            r = p.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == e ? void 0 : e.entitlementBranches) != null
                    ? (0, D.z2)(e.entitlementBranches, n, T.Z)
                    : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, L.oE)(e.subscriptionPlanId) : null,
            accepting: C.Z.getIsAccepting(e.code),
            useReducedMotion: r,
        };
    })($),
    te = (t) => {
        var e,
            n,
            r,
            { channelContext: l, code: s, customGiftMessage: a, emojiName: c, soundId: d, onClose: p } = t,
            h = (function (t, e) {
                if (null == t) return {};
                var n,
                    i,
                    r = (function (t, e) {
                        if (null == t) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(t);
                        for (i = 0; i < l.length; i++) (n = l[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
                }
                return r;
            })(t, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
        let y = (0, S.Dt)(),
            b = (0, o.e7)([C.Z], () => C.Z.get(s)),
            v = (0, f.ZP)(),
            { analyticsLocations: j } = (0, g.ZP)(m.Z.GIFT_CODE_MODAL),
            { product: x } = (0, O.T)(null == b ? void 0 : b.skuId);
        return null == b
            ? null
            : (0, i.jsx)(
                  tt,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                              i = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (i = i.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                  }),
                              )),
                              i.forEach(function (e) {
                                  Y(t, e, n[e]);
                              });
                      }
                      return t;
                  })({}, h)),
                  (n = n =
                      {
                          customGiftMessage: a,
                          channelContext: l,
                          giftCode: b,
                          headerId: y,
                          emojiName: c,
                          soundId: d,
                          analyticsLocations: j,
                          isThemeDark: (0, u.wj)(v),
                          onClose: p,
                          collectiblesItemType: null == x || null == (r = x.items[0]) ? void 0 : r.type,
                          onAccept:
                              null != x
                                  ? () => {
                                        p(),
                                            (0, P.Z)({
                                                product: x,
                                                analyticsLocations: j,
                                                purchaseType: V.o8.GIFT,
                                            });
                                    }
                                  : void 0,
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
                  e),
              );
    };
