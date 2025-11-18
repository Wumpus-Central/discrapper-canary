n.d(t, { default: () => ei }), n(388685), n(415506);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(979554),
    o = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(533307),
    f = n(410030),
    p = n(607070),
    m = n(100527),
    h = n(906732),
    g = n(728345),
    b = n(812206),
    y = n(597688),
    O = n(884697),
    j = n(583434),
    P = n(551425),
    v = n(832149),
    S = n(745510),
    x = n(313201),
    w = n(925329),
    _ = n(703656),
    C = n(164670),
    Z = n(96418),
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
    Y = n(114644),
    $ = n(167969),
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                J(e, t, n[t]);
            });
    }
    return e;
}
let X = (e) => {
        let { openedGift: t } = e,
            { createMultipleConfettiAt: n } = r.useContext(S.h);
        return (
            r.useEffect(() => {
                t && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, t]),
            null
        );
    },
    ee = (e) => {
        let { step: t, soundId: n } = e;
        return (
            r.useEffect(() => {
                var e;
                if (t !== V.wZ8.CONFIRM) return;
                let i = T.Z.getSoundById(n);
                (0, A.playGiftSound)(n, null != (e = null == i ? void 0 : i.volume) ? e : 1);
            }, [t, n]),
            null
        );
    };
class et extends r.Component {
    componentDidMount() {
        let { application: e, sku: t, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == e && null != t && g.ZP.fetchApplication(t.applicationId);
        let l = null != n || null != i.giftStyle,
            s = (0, O.mO)(i),
            a = null != r ? G.ZP.getURL(r) : void 0;
        this.setState({
            isCustomGift: l,
            isCollectiblesGift: s,
            emojiURL: a,
            opened: s,
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: e, accepting: t, giftCode: n } = this.props,
            { error: i, accepted: r, opened: l, isCustomGift: s } = this.state;
        return (0, L.TO)(e, n, {
            error: i,
            accepted: r,
            accepting: t,
            opened: l,
            isCustomGift: s,
        });
    }
    get buttonText() {
        return (0, L.L2)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: e, opened: t, accepted: n } = this.state,
            { giftCode: i, subscriptionPlan: r, collectiblesItemType: l } = this.props;
        if (e && this.step === V.wZ8.ERROR) return W.intl.formatToMarkdownString(W.t.JUvC0s, {});
        if (e && !n)
            if (!t)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: H.ZP.getName(R.default.getCurrentUser()),
                });
            else {
                let e = R.default.getUser(i.userId),
                    t = H.ZP.getName(e);
                if (null != l)
                    switch (l) {
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
                        (null == r ? void 0 : r.interval) === B.rV.MONTH
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
        let { sku: e, accepting: t, libraryApplication: n, subscriptionPlan: i } = this.props;
        if (null == e) return null;
        let { error: r, accepted: l, isCustomGift: s, opened: a } = this.state;
        return !a && s
            ? null
            : (0, L.iM)({
                  step: this.step,
                  sku: e,
                  libraryApplication: n,
                  error: r,
                  accepted: l,
                  accepting: t,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: i,
              });
    }
    get errorMessage() {
        let { libraryApplication: e, accepting: t } = this.props,
            { error: n, accepted: i } = this.state;
        return (0, L.e$)(e, n, i, t, this.handleGoToLibrary);
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
        let { giftCode: e, customGiftMessage: t, emojiName: n, soundId: i, sku: r, analyticsLocations: l } = this.props,
            { isCustomGift: s } = this.state;
        D.default.track(V.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: s,
            is_custom_message_edited: s && t !== W.intl.string(W.t.ZkOo1U),
            gift_style: e.giftStyle,
            gift_code: e.code,
            emoji_name: n,
            sound_id: i,
            product_line: null == r ? void 0 : r.productLine,
        });
    }
    render() {
        let {
                application: e,
                accepting: t,
                onClose: n,
                giftCode: r,
                headerId: l,
                transitionState: a,
                useReducedMotion: o,
                onComplete: c,
                customGiftMessage: d,
                emojiName: f,
                soundId: p,
                isThemeDark: m,
            } = this.props,
            h = R.default.getUser(r.userId),
            { isCustomGift: g, isCollectiblesGift: b, accepted: y, opened: O, emojiURL: j } = this.state,
            v = R.default.getCurrentUser(),
            S = this.step === V.wZ8.ERROR,
            x =
                (null == r ? void 0 : r.userId) != null &&
                null != v &&
                (null == v ? void 0 : v.id) != null &&
                r.userId === v.id;
        switch (this.step) {
            case V.wZ8.ERROR:
                null == c || c(r, !1);
                break;
            case V.wZ8.SUCCESS:
                null == c || c(r, !0);
        }
        return (0, i.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(u.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: Y.modal,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != r.giftStyle &&
                            !g &&
                            !b &&
                            (0, i.jsx)(z.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: r.giftStyle,
                                className: Y.seasonalGiftIcon,
                            }),
                        !g && (0, i.jsx)("div", { className: Y.backSplash }),
                        !b &&
                            (0, i.jsx)(u.olH, {
                                "data-migration-pending": !0,
                                onClick: n,
                                className: Y.closeButton,
                            }),
                        (0, i.jsxs)(u.hzk, {
                            "data-migration-pending": !0,
                            className: s()({
                                [Y.content]: !g,
                                [Y.contentCustomGift]: g,
                            }),
                            children: [
                                !b && (null == r.giftStyle || (g && y))
                                    ? (0, i.jsx)(w.Z, {
                                          size: w.A.LARGE,
                                          game: e,
                                          skuId: r.skuId,
                                      })
                                    : null,
                                S &&
                                    (0, i.jsx)("img", {
                                        alt: "",
                                        src: m ? $ : q,
                                    }),
                                (0, i.jsxs)(u.Heading, {
                                    id: l,
                                    className: s()({
                                        [Y.customGiftHeader]: g && !y,
                                        [Y.header]: !g || y,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: s()({ [Y.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, i.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(g && !y) &&
                                    (0, i.jsx)(u.Text, {
                                        className: Y.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                g &&
                                    !b &&
                                    null != r.giftStyle &&
                                    !y &&
                                    !S &&
                                    (0, i.jsx)(z.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: Y.giftAnimation,
                                        giftStyle: r.giftStyle,
                                    }),
                                this.state.opened && !S && b && (0, i.jsx)(P.Z, { giftCode: r }),
                                S &&
                                    (0, i.jsx)(u.Text, {
                                        className: Y.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !S &&
                                    null != d &&
                                    "" !== d &&
                                    !x &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.Heading, {
                                                id: l,
                                                variant: "heading-md/semibold",
                                                children: W.intl.format(W.t.DDO4Wz, { sender: H.ZP.getName(h) }),
                                            }),
                                            (0, i.jsx)(u.Text, {
                                                className: Y.customMessage,
                                                variant: "text-md/semibold",
                                                children: d,
                                            }),
                                        ],
                                    }),
                                (0, i.jsx)(u.Button, {
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
                null != r.giftStyle &&
                    !o &&
                    this.step !== V.wZ8.ERROR &&
                    !y &&
                    !t &&
                    O &&
                    (null == f || null == j
                        ? (0, i.jsx)(X, { openedGift: O && !y && !t })
                        : (0, i.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: j,
                          })),
                !y &&
                    !t &&
                    O &&
                    null != p &&
                    (0, i.jsx)(ee, {
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
            J(this, "modalRef", r.createRef()),
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
            i = null != n ? b.Z.getApplication(n.applicationId) : null,
            r = p.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == t ? void 0 : t.entitlementBranches) != null
                    ? (0, L.z2)(t.entitlementBranches, n, I.Z)
                    : null,
            application: i,
            subscriptionPlan: null != t.subscriptionPlanId ? (0, M.oE)(t.subscriptionPlanId) : null,
            accepting: E.Z.getIsAccepting(t.code),
            useReducedMotion: r,
        };
    })((e) => {
        let {
                sku: t,
                giftCode: n,
                channelContext: l,
                customGiftMessage: s,
                onClose: a,
                analyticsLocations: o,
                emojiName: c,
                soundId: u,
            } = e,
            d = null != t && (0, C.K$)(t);
        return (r.useEffect(() => {
            if (d) {
                (0, Z.L)({
                    sku: t,
                    giftCode: n,
                    channelContext: l,
                    customGiftMessage: s,
                    analyticsLocations: o,
                    emojiName: c,
                    soundId: u,
                }),
                    a();
                return;
            }
        }, [t, d, l, s, n, a, o, c, u]),
        d)
            ? null
            : (0, i.jsx)(et, Q({}, e));
    }),
    ei = (e) => {
        var t,
            n,
            { channelContext: r, code: l, customGiftMessage: s, emojiName: a, soundId: u, onClose: d } = e,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
        let g = (0, x.Dt)(),
            b = (0, o.e7)([E.Z], () => E.Z.get(l)),
            y = (0, f.ZP)(),
            { analyticsLocations: P } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
            { product: S } = (0, j.T)(null == b ? void 0 : b.skuId, !0);
        return null == b
            ? null
            : (0, i.jsx)(
                  en,
                  ((t = Q({}, p)),
                  (n = n =
                      {
                          customGiftMessage: s,
                          channelContext: r,
                          giftCode: b,
                          headerId: g,
                          emojiName: a,
                          soundId: u,
                          analyticsLocations: P,
                          isThemeDark: (0, c.wj)(y),
                          onClose: d,
                          collectiblesItemType: (0, O.$W)(S),
                          onAccept:
                              null != S
                                  ? () => {
                                        d(),
                                            (0, v.Z)({
                                                product: S,
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
                                var i = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, i);
                            }
                            return n;
                        })(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        }),
                  t),
              );
    };
