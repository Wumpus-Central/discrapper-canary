n.d(e, { default: () => tt }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
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
    b = n(812206),
    y = n(597688),
    O = n(884697),
    j = n(583434),
    v = n(551425),
    P = n(832149),
    x = n(745510),
    S = n(313201),
    w = n(925329),
    _ = n(703656),
    Z = n(146779),
    C = n(763296),
    A = n(82142),
    T = n(283595),
    I = n(594174),
    E = n(509545),
    R = n(55563),
    N = n(626135),
    k = n(176354),
    D = n(669079),
    G = n(296848),
    L = n(51144),
    M = n(479446),
    H = n(715627),
    U = n(981632),
    F = n(474936),
    B = n(981631),
    z = n(215023),
    V = n(388032),
    K = n(269142),
    W = n(167969),
    Y = n(557256);
function $(t, e, n) {
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
let q = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: n } = r.useContext(x.h);
        return (
            r.useEffect(() => {
                e && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, e]),
            null
        );
    },
    J = (t) => {
        let { step: e, soundId: n } = t;
        return (
            r.useEffect(() => {
                var t;
                if (e !== B.wZ8.CONFIRM) return;
                let i = C.Z.getSoundById(n);
                (0, Z.playGiftSound)(n, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e, n]),
            null
        );
    };
class Q extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
        let s = null != n || null != i.giftStyle,
            l = (0, O.mO)(i),
            a = null != r ? k.ZP.getURL(r) : void 0;
        this.setState({
            isCustomGift: s,
            isCollectiblesGift: l,
            emojiURL: a,
            opened: l,
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: n } = this.props,
            { error: i, accepted: r, opened: s, isCustomGift: l } = this.state;
        return (0, D.TO)(t, n, {
            error: i,
            accepted: r,
            accepting: e,
            opened: s,
            isCustomGift: l,
        });
    }
    get buttonText() {
        return (0, D.L2)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: n } = this.state,
            { giftCode: i, subscriptionPlan: r, collectiblesItemType: s } = this.props;
        if (t && this.step === B.wZ8.ERROR) return V.intl.formatToMarkdownString(V.t.JUvC0t, {});
        if (t && !n)
            if (!e)
                return V.intl.formatToPlainString(V.t.xHzRub, {
                    recipientDisplayName: L.ZP.getName(I.default.getCurrentUser()),
                });
            else {
                let t = I.default.getUser(i.userId),
                    e = L.ZP.getName(t);
                if (null != s)
                    switch (s) {
                        case a.Z.AVATAR_DECORATION:
                            return V.intl.formatToPlainString(V.t.SKduys, { sender: e });
                        case a.Z.PROFILE_EFFECT:
                            return V.intl.formatToPlainString(V.t["1w42T0"], { sender: e });
                        case a.Z.NAMEPLATE:
                            return V.intl.formatToPlainString(V.t.vFiQlZ, { sender: e });
                        default:
                            return V.intl.formatToPlainString(V.t.U4Ko29, { sender: e });
                    }
                return V.intl.formatToPlainString(V.t["0UR0u7"], {
                    sender: e,
                    timeInterval:
                        (null == r ? void 0 : r.interval) === F.rV.MONTH
                            ? V.intl.string(V.t.FPybU1)
                            : V.intl.string(V.t.tfqrho),
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
            case B.wZ8.ERROR:
                return e;
            case B.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case B.wZ8.OPEN:
                return this.handleOpen;
            case B.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: n, soundId: i, sku: r, analyticsLocations: s } = this.props,
            { isCustomGift: l } = this.state;
        N.default.track(B.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: s,
            has_custom_message: l,
            is_custom_message_edited: l && e !== V.intl.string(V.t.ZkOo1d),
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
                headerId: s,
                transitionState: a,
                useReducedMotion: o,
                onComplete: c,
                customGiftMessage: d,
                emojiName: p,
                soundId: f,
                isThemeDark: h,
            } = this.props,
            m = I.default.getUser(r.userId),
            { isCustomGift: g, isCollectiblesGift: b, accepted: y, opened: O, emojiURL: j } = this.state,
            P = I.default.getCurrentUser(),
            x = this.step === B.wZ8.ERROR,
            S =
                (null == r ? void 0 : r.userId) != null &&
                null != P &&
                (null == P ? void 0 : P.id) != null &&
                r.userId === P.id;
        switch (this.step) {
            case B.wZ8.ERROR:
                null == c || c(r, !1);
                break;
            case B.wZ8.SUCCESS:
                null == c || c(r, !0);
        }
        return (0, i.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(u.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: a,
                    size: u.CgR.SMALL,
                    className: K.modal,
                    "aria-labelledby": s,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != r.giftStyle &&
                            !g &&
                            !b &&
                            (0, i.jsx)(U.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: r.giftStyle,
                                className: K.seasonalGiftIcon,
                            }),
                        !g && (0, i.jsx)("div", { className: K.backSplash }),
                        !b &&
                            (0, i.jsx)(u.olH, {
                                "data-migration-pending": !0,
                                onClick: n,
                                className: K.closeButton,
                            }),
                        (0, i.jsxs)(u.hzk, {
                            "data-migration-pending": !0,
                            className: l()({
                                [K.content]: !g,
                                [K.contentCustomGift]: g,
                            }),
                            children: [
                                !b && (null == r.giftStyle || (g && y))
                                    ? (0, i.jsx)(w.Z, {
                                          size: w.A.LARGE,
                                          game: t,
                                          skuId: r.skuId,
                                      })
                                    : null,
                                x &&
                                    (0, i.jsx)("img", {
                                        alt: "",
                                        src: h ? W : Y,
                                    }),
                                (0, i.jsxs)(u.Heading, {
                                    id: s,
                                    className: l()({
                                        [K.customGiftHeader]: g && !y,
                                        [K.header]: !g || y,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: l()({ [K.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, i.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(g && !y) &&
                                    (0, i.jsx)(u.Text, {
                                        className: K.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                g &&
                                    !b &&
                                    null != r.giftStyle &&
                                    !y &&
                                    !x &&
                                    (0, i.jsx)(U.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: K.giftAnimation,
                                        giftStyle: r.giftStyle,
                                    }),
                                this.state.opened && !x && b && (0, i.jsx)(v.Z, { giftCode: r }),
                                x &&
                                    (0, i.jsx)(u.Text, {
                                        className: K.body,
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
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.Heading, {
                                                id: s,
                                                variant: "heading-md/semibold",
                                                children: V.intl.format(V.t.DDO4W1, { sender: L.ZP.getName(m) }),
                                            }),
                                            (0, i.jsx)(u.Text, {
                                                className: K.customMessage,
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
                    this.step !== B.wZ8.ERROR &&
                    !y &&
                    !e &&
                    O &&
                    (null == p || null == j
                        ? (0, i.jsx)(q, { openedGift: O && !y && !e })
                        : (0, i.jsx)(H.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: j,
                          })),
                !y &&
                    !e &&
                    O &&
                    null != f &&
                    (0, i.jsx)(J, {
                        soundId: f,
                        step: this.step,
                    }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            $(this, "state", {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0,
            }),
            $(this, "modalRef", r.createRef()),
            $(this, "handleOpen", () => {
                this.setState({ opened: !0 });
            }),
            $(this, "handleAccept", async () => {
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
            $(this, "handleGoToLibrary", () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, _.uL)(B.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            $(this, "getDefaultAnimationStatus", () => (this.step === B.wZ8.OPEN ? M.SR.IDLE : M.SR.ACTION)),
            $(this, "getIdleAnimationStatus", () => {
                if (this.step !== B.wZ8.OPEN) return M.SR.LOOP;
            });
    }
}
let X = o.ZP.connectStores([T.Z, R.Z, b.Z, A.Z, E.Z, f.Z, y.Z], (t) => {
        let { giftCode: e } = t,
            n = R.Z.get(e.skuId),
            i = null != n ? b.Z.getApplication(n.applicationId) : null,
            r = f.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == e ? void 0 : e.entitlementBranches) != null
                    ? (0, D.z2)(e.entitlementBranches, n, T.Z)
                    : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, G.oE)(e.subscriptionPlanId) : null,
            accepting: A.Z.getIsAccepting(e.code),
            useReducedMotion: r,
        };
    })(Q),
    tt = (t) => {
        var e,
            n,
            { channelContext: r, code: s, customGiftMessage: l, emojiName: a, soundId: u, onClose: d } = t,
            f = (function (t, e) {
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
                    for (i = 0; i < s.length; i++)
                        (n = s[i]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
                }
                return r;
            })(t, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
        let g = (0, S.Dt)(),
            b = (0, o.e7)([A.Z], () => A.Z.get(s)),
            y = (0, p.ZP)(),
            { analyticsLocations: v } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
            { product: x } = (0, j.T)(null == b ? void 0 : b.skuId, !0);
        return null == b
            ? null
            : (0, i.jsx)(
                  X,
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
                                  $(t, e, n[e]);
                              });
                      }
                      return t;
                  })({}, f)),
                  (n = n =
                      {
                          customGiftMessage: l,
                          channelContext: r,
                          giftCode: b,
                          headerId: g,
                          emojiName: a,
                          soundId: u,
                          analyticsLocations: v,
                          isThemeDark: (0, c.wj)(y),
                          onClose: d,
                          collectiblesItemType: (0, O.$W)(x),
                          onAccept:
                              null != x
                                  ? () => {
                                        d(),
                                            (0, P.Z)({
                                                product: x,
                                                analyticsLocations: v,
                                                purchaseType: z.o8.GIFT,
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
