n.d(e, { default: () => ti }), n(388685), n(415506);
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
    h = n(100527),
    m = n(906732),
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
    D = n(55563),
    N = n(626135),
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
    Y = n(269142),
    $ = n(167969),
    q = n(557256);
function J(t, e, n) {
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
function Q(t) {
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
                J(t, e, n[e]);
            });
    }
    return t;
}
let X = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: n } = r.useContext(S.h);
        return (
            r.useEffect(() => {
                e && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, e]),
            null
        );
    },
    tt = (t) => {
        let { step: e, soundId: n } = t;
        return (
            r.useEffect(() => {
                var t;
                if (e !== V.wZ8.CONFIRM) return;
                let i = T.Z.getSoundById(n);
                (0, A.playGiftSound)(n, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e, n]),
            null
        );
    };
class te extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
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
        let { libraryApplication: t, accepting: e, giftCode: n } = this.props,
            { error: i, accepted: r, opened: l, isCustomGift: s } = this.state;
        return (0, L.TO)(t, n, {
            error: i,
            accepted: r,
            accepting: e,
            opened: l,
            isCustomGift: s,
        });
    }
    get buttonText() {
        return (0, L.L2)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: n } = this.state,
            { giftCode: i, subscriptionPlan: r, collectiblesItemType: l } = this.props;
        if (t && this.step === V.wZ8.ERROR) return W.intl.formatToMarkdownString(W.t.JUvC0s, {});
        if (t && !n)
            if (!e)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: H.ZP.getName(R.default.getCurrentUser()),
                });
            else {
                let t = R.default.getUser(i.userId),
                    e = H.ZP.getName(t);
                if (null != l)
                    switch (l) {
                        case a.Z.AVATAR_DECORATION:
                            return W.intl.formatToPlainString(W.t.SKduyh, { sender: e });
                        case a.Z.PROFILE_EFFECT:
                            return W.intl.formatToPlainString(W.t["1w42T2"], { sender: e });
                        case a.Z.NAMEPLATE:
                            return W.intl.formatToPlainString(W.t.vFiQlU, { sender: e });
                        default:
                            return W.intl.formatToPlainString(W.t.U4Ko2y, { sender: e });
                    }
                return W.intl.formatToPlainString(W.t["0UR0u4"], {
                    sender: e,
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
        let t = R.default.getUser(this.props.giftCode.userId);
        return W.intl.formatToPlainString(W.t.DDO4Wz, { sender: H.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: n, subscriptionPlan: i } = this.props;
        if (null == t) return null;
        let { error: r, accepted: l, isCustomGift: s, opened: a } = this.state;
        return !a && s
            ? null
            : (0, L.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: n,
                  error: r,
                  accepted: l,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: i,
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: n, accepted: i } = this.state;
        return (0, L.e$)(t, n, i, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case V.wZ8.ERROR:
                return e;
            case V.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case V.wZ8.OPEN:
                return this.handleOpen;
            case V.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: n, soundId: i, sku: r, analyticsLocations: l } = this.props,
            { isCustomGift: s } = this.state;
        N.default.track(V.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: s,
            is_custom_message_edited: s && e !== W.intl.string(W.t.ZkOo1U),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: n,
            sound_id: i,
            product_line: null == r ? void 0 : r.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                onClose: n,
                giftCode: r,
                headerId: l,
                transitionState: a,
                useReducedMotion: o,
                onComplete: c,
                customGiftMessage: d,
                emojiName: f,
                soundId: p,
                isThemeDark: h,
            } = this.props,
            m = R.default.getUser(r.userId),
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
                                          game: t,
                                          skuId: r.skuId,
                                      })
                                    : null,
                                S &&
                                    (0, i.jsx)("img", {
                                        alt: "",
                                        src: h ? $ : q,
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
                                                children: W.intl.format(W.t.DDO4Wz, { sender: H.ZP.getName(m) }),
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
                                    loading: e,
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
                    !e &&
                    O &&
                    (null == f || null == j
                        ? (0, i.jsx)(X, { openedGift: O && !y && !e })
                        : (0, i.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: j,
                          })),
                !y &&
                    !e &&
                    O &&
                    null != p &&
                    (0, i.jsx)(tt, {
                        soundId: p,
                        step: this.step,
                    }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
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
            J(this, "handleGoToLibrary", () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, _.uL)(V.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            J(this, "getDefaultAnimationStatus", () => (this.step === V.wZ8.OPEN ? U.SR.IDLE : U.SR.ACTION)),
            J(this, "getIdleAnimationStatus", () => {
                if (this.step !== V.wZ8.OPEN) return U.SR.LOOP;
            });
    }
}
let tn = o.ZP.connectStores([I.Z, D.Z, b.Z, E.Z, k.Z, p.Z, y.Z], (t) => {
        let { giftCode: e } = t,
            n = D.Z.get(e.skuId),
            i = null != n ? b.Z.getApplication(n.applicationId) : null,
            r = p.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == e ? void 0 : e.entitlementBranches) != null
                    ? (0, L.z2)(e.entitlementBranches, n, I.Z)
                    : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, M.oE)(e.subscriptionPlanId) : null,
            accepting: E.Z.getIsAccepting(e.code),
            useReducedMotion: r,
        };
    })((t) => {
        let { sku: e, giftCode: n, channelContext: l, customGiftMessage: s, onClose: a, analyticsLocations: o } = t,
            c = null != e && (0, C.K$)(e);
        return (r.useEffect(() => {
            if (c) {
                (0, Z.L)({
                    sku: e,
                    giftCode: n,
                    channelContext: l,
                    customGiftMessage: s,
                    analyticsLocations: o,
                }),
                    a();
                return;
            }
        }, [e, c, l, s, n, a, o]),
        c)
            ? null
            : (0, i.jsx)(te, Q({}, t));
    }),
    ti = (t) => {
        var e,
            n,
            { channelContext: r, code: l, customGiftMessage: s, emojiName: a, soundId: u, onClose: d } = t,
            p = (function (t, e) {
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
        let g = (0, x.Dt)(),
            b = (0, o.e7)([E.Z], () => E.Z.get(l)),
            y = (0, f.ZP)(),
            { analyticsLocations: P } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
            { product: S } = (0, j.T)(null == b ? void 0 : b.skuId, !0);
        return null == b
            ? null
            : (0, i.jsx)(
                  tn,
                  ((e = Q({}, p)),
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
