n.d(t, { default: () => er }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    a = n(979554),
    o = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(533307),
    f = n(410030),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(728345),
    b = n(812206),
    y = n(597688),
    O = n(884697),
    j = n(583434),
    P = n(551425),
    v = n(832149),
    x = n(745510),
    S = n(313201),
    w = n(925329),
    _ = n(703656),
    Z = n(164670),
    C = n(96418),
    A = n(146779),
    T = n(763296),
    E = n(82142),
    I = n(283595),
    R = n(594174),
    k = n(509545),
    N = n(55563),
    D = n(626135),
    G = n(176354),
    L = n(669079),
    M = n(296848),
    H = n(51144),
    U = n(479446),
    F = n(715627),
    z = n(981632),
    B = n(474936),
    V = n(981631),
    K = n(215023),
    W = n(388032),
    $ = n(269142),
    Y = n(167969),
    q = n(557256);
function J(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                J(e, t, n[t]);
            });
    }
    return e;
}
let X = (e) => {
        let { openedGift: t } = e,
            { createMultipleConfettiAt: n } = i.useContext(x.h);
        return (
            i.useEffect(() => {
                t && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, t]),
            null
        );
    },
    ee = (e) => {
        let { step: t, soundId: n } = e;
        return (
            i.useEffect(() => {
                var e;
                if (t !== V.wZ8.CONFIRM) return;
                let r = T.Z.getSoundById(n);
                (0, A.playGiftSound)(n, null != (e = null == r ? void 0 : r.volume) ? e : 1);
            }, [t, n]),
            null
        );
    };
class et extends i.Component {
    componentDidMount() {
        let { application: e, sku: t, customGiftMessage: n, giftCode: r, emojiName: i } = this.props;
        null == e && null != t && g.ZP.fetchApplication(t.applicationId);
        let s = null != n || null != r.giftStyle,
            l = (0, O.mO)(r),
            a = null != i ? G.ZP.getURL(i) : void 0;
        this.setState({
            isCustomGift: s,
            isCollectiblesGift: l,
            emojiURL: a,
            opened: l,
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: e, accepting: t, giftCode: n } = this.props,
            { error: r, accepted: i, opened: s, isCustomGift: l } = this.state;
        return (0, L.TO)(e, n, {
            error: r,
            accepted: i,
            accepting: t,
            opened: s,
            isCustomGift: l,
        });
    }
    get buttonText() {
        return (0, L.L2)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: e, opened: t, accepted: n } = this.state,
            { giftCode: r, subscriptionPlan: i, collectiblesItemType: s } = this.props;
        if (e && this.step === V.wZ8.ERROR) return W.intl.formatToMarkdownString(W.t.JUvC0s, {});
        if (e && !n)
            if (!t)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: H.ZP.getName(R.default.getCurrentUser()),
                });
            else {
                let e = R.default.getUser(r.userId),
                    t = H.ZP.getName(e);
                if (null != s)
                    switch (s) {
                        case a.Z.AVATAR_DECORATION:
                            return W.intl.formatToPlainString(W.t.SKduyh, { sender: t });
                        case a.Z.PROFILE_EFFECT:
                            return W.intl.formatToPlainString(W.t["1w42T2"], { sender: t });
                        case a.Z.NAMEPLATE:
                            return W.intl.formatToPlainString(W.t.vFiQlU, { sender: t });
                        default:
                            return W.intl.formatToPlainString(W.t.U4Ko2y, { sender: t });
                    }
                return W.intl.formatToPlainString(W.t["0UR0u4"], {
                    sender: t,
                    timeInterval:
                        (null == i ? void 0 : i.interval) === B.rV.MONTH
                            ? W.intl.string(W.t.FPybU7)
                            : W.intl.string(W.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, L.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let e = R.default.getUser(this.props.giftCode.userId);
        return W.intl.formatToPlainString(W.t.DDO4Wz, { sender: H.ZP.getName(e) });
    }
    get bodyText() {
        let { sku: e, accepting: t, libraryApplication: n, subscriptionPlan: r } = this.props;
        if (null == e) return null;
        let { error: i, accepted: s, isCustomGift: l, opened: a } = this.state;
        return !a && l
            ? null
            : (0, L.iM)({
                  step: this.step,
                  sku: e,
                  libraryApplication: n,
                  error: i,
                  accepted: s,
                  accepting: t,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: r,
              });
    }
    get errorMessage() {
        let { libraryApplication: e, accepting: t } = this.props,
            { error: n, accepted: r } = this.state;
        return (0, L.e$)(e, n, r, t, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: e, onClose: t } = this.props;
        switch (this.step) {
            case V.wZ8.ERROR:
                return t;
            case V.wZ8.SUCCESS:
                if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
                return this.handleGoToLibrary;
            case V.wZ8.OPEN:
                return this.handleOpen;
            case V.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: e, customGiftMessage: t, emojiName: n, soundId: r, sku: i, analyticsLocations: s } = this.props,
            { isCustomGift: l } = this.state;
        D.default.track(V.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: s,
            has_custom_message: l,
            is_custom_message_edited: l && t !== W.intl.string(W.t.ZkOo1U),
            gift_style: e.giftStyle,
            gift_code: e.code,
            emoji_name: n,
            sound_id: r,
            product_line: null == i ? void 0 : i.productLine,
        });
    }
    render() {
        let {
                application: e,
                accepting: t,
                onClose: n,
                giftCode: i,
                headerId: s,
                transitionState: a,
                useReducedMotion: o,
                onComplete: c,
                customGiftMessage: d,
                emojiName: f,
                soundId: p,
                isThemeDark: h,
            } = this.props,
            m = R.default.getUser(i.userId),
            { isCustomGift: g, isCollectiblesGift: b, accepted: y, opened: O, emojiURL: j } = this.state,
            v = R.default.getCurrentUser(),
            x = this.step === V.wZ8.ERROR,
            S =
                (null == i ? void 0 : i.userId) != null &&
                null != v &&
                (null == v ? void 0 : v.id) != null &&
                i.userId === v.id;
        switch (this.step) {
            case V.wZ8.ERROR:
                null == c || c(i, !1);
                break;
            case V.wZ8.SUCCESS:
                null == c || c(i, !0);
        }
        return (0, r.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, r.jsxs)(u.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: $.modal,
                    "aria-labelledby": s,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != i.giftStyle &&
                            !g &&
                            !b &&
                            (0, r.jsx)(z.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: i.giftStyle,
                                className: $.seasonalGiftIcon,
                            }),
                        !g && (0, r.jsx)("div", { className: $.backSplash }),
                        !b &&
                            (0, r.jsx)(u.olH, {
                                "data-migration-pending": !0,
                                onClick: n,
                                className: $.closeButton,
                            }),
                        (0, r.jsxs)(u.hzk, {
                            "data-migration-pending": !0,
                            className: l()({
                                [$.content]: !g,
                                [$.contentCustomGift]: g,
                            }),
                            children: [
                                !b && (null == i.giftStyle || (g && y))
                                    ? (0, r.jsx)(w.Z, {
                                          size: w.A.LARGE,
                                          game: e,
                                          skuId: i.skuId,
                                      })
                                    : null,
                                x &&
                                    (0, r.jsx)("img", {
                                        alt: "",
                                        src: h ? Y : q,
                                    }),
                                (0, r.jsxs)(u.Heading, {
                                    id: s,
                                    className: l()({
                                        [$.customGiftHeader]: g && !y,
                                        [$.header]: !g || y,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: l()({ [$.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, r.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(g && !y) &&
                                    (0, r.jsx)(u.Text, {
                                        className: $.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                g &&
                                    !b &&
                                    null != i.giftStyle &&
                                    !y &&
                                    !x &&
                                    (0, r.jsx)(z.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: $.giftAnimation,
                                        giftStyle: i.giftStyle,
                                    }),
                                this.state.opened && !x && b && (0, r.jsx)(P.Z, { giftCode: i }),
                                x &&
                                    (0, r.jsx)(u.Text, {
                                        className: $.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !x &&
                                    null != d &&
                                    "" !== d &&
                                    !S &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                id: s,
                                                variant: "heading-md/semibold",
                                                children: W.intl.format(W.t.DDO4Wz, { sender: H.ZP.getName(m) }),
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                className: $.customMessage,
                                                variant: "text-md/semibold",
                                                children: d,
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    text: this.buttonText,
                                    loading: t,
                                    onClick: () => {
                                        this.trackStepAnalytics(), this.handleClick();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                null != i.giftStyle &&
                    !o &&
                    this.step !== V.wZ8.ERROR &&
                    !y &&
                    !t &&
                    O &&
                    (null == f || null == j
                        ? (0, r.jsx)(X, { openedGift: O && !y && !t })
                        : (0, r.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: j,
                          })),
                !y &&
                    !t &&
                    O &&
                    null != p &&
                    (0, r.jsx)(ee, {
                        soundId: p,
                        step: this.step,
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            J(this, "state", {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0,
            }),
            J(this, "modalRef", i.createRef()),
            J(this, "handleOpen", () => {
                this.setState({ opened: !0 });
            }),
            J(this, "handleAccept", async () => {
                let { giftCode: e, channelContext: t, onAccept: n } = this.props;
                if (null == e) throw Error("GiftCode is null at acceptance.");
                try {
                    await d.Z.redeemGiftCode({
                        code: e.code,
                        options: { channelId: t },
                    }),
                        this.setState({ accepted: !0 }),
                        null == n || n();
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            J(this, "handleGoToLibrary", () => {
                let { onClose: e, libraryApplication: t } = this.props;
                (0, _.uL)(V.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }), e();
            }),
            J(this, "getDefaultAnimationStatus", () => (this.step === V.wZ8.OPEN ? U.SR.IDLE : U.SR.ACTION)),
            J(this, "getIdleAnimationStatus", () => {
                if (this.step !== V.wZ8.OPEN) return U.SR.LOOP;
            });
    }
}
let en = o.ZP.connectStores([I.Z, N.Z, b.Z, E.Z, k.Z, p.Z, y.Z], (e) => {
        let { giftCode: t } = e,
            n = N.Z.get(t.skuId),
            r = null != n ? b.Z.getApplication(n.applicationId) : null,
            i = p.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == t ? void 0 : t.entitlementBranches) != null
                    ? (0, L.z2)(t.entitlementBranches, n, I.Z)
                    : null,
            application: r,
            subscriptionPlan: null != t.subscriptionPlanId ? (0, M.oE)(t.subscriptionPlanId) : null,
            accepting: E.Z.getIsAccepting(t.code),
            useReducedMotion: i,
        };
    })((e) => {
        let { sku: t, giftCode: n, channelContext: s, customGiftMessage: l, onClose: a } = e,
            o = null != t && (0, Z.K$)(t);
        return (i.useEffect(() => {
            if (o) {
                (0, C.L)({
                    sku: t,
                    giftCode: n,
                    channelContext: s,
                    customGiftMessage: l,
                }),
                    a();
                return;
            }
        }, [t, o, s, l, n, a]),
        o)
            ? null
            : (0, r.jsx)(et, Q({}, e));
    }),
    er = (e) => {
        var t,
            n,
            { channelContext: i, code: s, customGiftMessage: l, emojiName: a, soundId: u, onClose: d } = e,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
        let g = (0, S.Dt)(),
            b = (0, o.e7)([E.Z], () => E.Z.get(s)),
            y = (0, f.ZP)(),
            { analyticsLocations: P } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
            { product: x } = (0, j.T)(null == b ? void 0 : b.skuId, !0);
        return null == b
            ? null
            : (0, r.jsx)(
                  en,
                  ((t = Q({}, p)),
                  (n = n =
                      {
                          customGiftMessage: l,
                          channelContext: i,
                          giftCode: b,
                          headerId: g,
                          emojiName: a,
                          soundId: u,
                          analyticsLocations: P,
                          isThemeDark: (0, c.wj)(y),
                          onClose: d,
                          collectiblesItemType: (0, O.$W)(x),
                          onAccept:
                              null != x
                                  ? () => {
                                        d(),
                                            (0, v.Z)({
                                                product: x,
                                                analyticsLocations: P,
                                                purchaseType: K.o8.GIFT,
                                            });
                                    }
                                  : void 0,
                      }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                      : (function (e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r);
                            }
                            return n;
                        })(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        }),
                  t),
              );
    };
