i.d(e, { default: () => $ }), i(388685), i(415506);
var n = i(951288),
    r = i(647438),
    l = i(120356),
    s = i.n(l),
    a = i(979554),
    o = i(442837),
    u = i(780384),
    c = i(481060),
    d = i(533307),
    p = i(410030),
    f = i(607070),
    m = i(100527),
    h = i(906732),
    g = i(728345),
    y = i(812206),
    O = i(884697),
    b = i(583434),
    j = i(551425),
    P = i(832149),
    S = i(745510),
    v = i(313201),
    x = i(925329),
    Z = i(703656),
    w = i(146779),
    C = i(763296),
    A = i(82142),
    T = i(283595),
    I = i(594174),
    E = i(509545),
    R = i(55563),
    N = i(626135),
    k = i(176354),
    D = i(669079),
    L = i(296848),
    G = i(51144),
    _ = i(479446),
    M = i(715627),
    U = i(981632),
    H = i(474936),
    F = i(981631),
    z = i(215023),
    V = i(388032),
    B = i(269142),
    K = i(167969),
    W = i(557256);
function q(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
let X = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = r.useContext(S.h);
        return (
            r.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    Y = (t) => {
        let { step: e, soundId: i } = t;
        return (
            r.useEffect(() => {
                var t;
                if (e !== F.wZ8.CONFIRM) return;
                let n = C.Z.getSoundById(i);
                (0, w.playGiftSound)(i, null != (t = null == n ? void 0 : n.volume) ? t : 1);
            }, [e, i]),
            null
        );
    };
class J extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: n, emojiName: r } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
        let l = null != i || null != n.giftStyle,
            s = (0, O.mO)(n),
            a = null != r ? k.ZP.getURL(r) : void 0,
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
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: n, accepted: r, opened: l, isCustomGift: s, isPremiumAppGift: a } = this.state;
        return (0, D.TO)(t, i, {
            error: n,
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
        let { isCustomGift: t, opened: e, accepted: i, isPremiumAppGift: n } = this.state,
            { giftCode: r, subscriptionPlan: l, collectiblesItemType: s, sku: o, application: u } = this.props;
        if (t && this.step === F.wZ8.ERROR) return V.intl.formatToMarkdownString(V.t.JUvC0t, {});
        if (n)
            if (!e)
                return V.intl.formatToPlainString(V.t.xHzRub, {
                    recipientDisplayName: G.ZP.getName(I.default.getCurrentUser()),
                });
            else {
                var c, d;
                if (i) return V.intl.string(V.t["+BNMcH"]);
                let t = I.default.getUser(r.userId);
                return V.intl.formatToPlainString(V.t["2tBYtL"], {
                    sender: G.ZP.getName(t),
                    skuName: null != (c = null == o ? void 0 : o.name) ? c : "item",
                    applicationName: null != (d = null == u ? void 0 : u.name) ? d : "an application",
                });
            }
        if (t && !i)
            if (!e)
                return V.intl.formatToPlainString(V.t.xHzRub, {
                    recipientDisplayName: G.ZP.getName(I.default.getCurrentUser()),
                });
            else {
                let t = I.default.getUser(r.userId),
                    e = G.ZP.getName(t);
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
                        (null == l ? void 0 : l.interval) === H.rV.MONTH
                            ? V.intl.string(V.t.FPybU1)
                            : V.intl.string(V.t.tfqrho),
                });
            }
        return null == this.props.sku ? null : (0, D.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = I.default.getUser(this.props.giftCode.userId);
        return V.intl.formatToPlainString(V.t.DDO4W1, { sender: G.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n, giftCode: r } = this.props;
        if (null == t) return null;
        let { error: l, accepted: s, isCustomGift: a, opened: o, isPremiumAppGift: u } = this.state;
        if (u) {
            let t = I.default.getUser(r.userId);
            return o
                ? s
                    ? V.intl.string(V.t.fLHIp6)
                    : null
                : V.intl.formatToPlainString(V.t.DDO4W1, { sender: G.ZP.getName(t) });
        }
        return !o && a
            ? null
            : (0, D.iM)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: l,
                  accepted: s,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: n,
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
            case F.wZ8.ERROR:
                return e;
            case F.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId || this.state.isPremiumAppGift) return e;
                return this.handleGoToLibrary;
            case F.wZ8.OPEN:
                return this.handleOpen;
            case F.wZ8.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: n, sku: r, analyticsLocations: l } = this.props,
            { isCustomGift: s } = this.state;
        N.default.track(F.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: s,
            is_custom_message_edited: s && e !== V.intl.string(V.t.ZkOo1d),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: n,
            product_line: null == r ? void 0 : r.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                onClose: i,
                giftCode: r,
                headerId: l,
                transitionState: a,
                useReducedMotion: o,
                onComplete: u,
                customGiftMessage: d,
                emojiName: p,
                soundId: f,
                isThemeDark: m,
            } = this.props,
            h = I.default.getUser(r.userId),
            {
                isCustomGift: g,
                isCollectiblesGift: y,
                accepted: O,
                opened: b,
                emojiURL: P,
                isPremiumAppGift: S,
            } = this.state,
            v = I.default.getCurrentUser(),
            Z = this.step === F.wZ8.ERROR,
            w =
                (null == r ? void 0 : r.userId) != null &&
                null != v &&
                (null == v ? void 0 : v.id) != null &&
                r.userId === v.id;
        switch (this.step) {
            case F.wZ8.ERROR:
                null == u || u(r, !1);
                break;
            case F.wZ8.SUCCESS:
                null == u || u(r, !0);
        }
        return (0, n.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, n.jsxs)(c.Y0X, {
                    transitionState: a,
                    size: c.CgR.SMALL,
                    className: B.modal,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != r.giftStyle &&
                            !g &&
                            !y &&
                            (0, n.jsx)(U.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: r.giftStyle,
                                className: B.seasonalGiftIcon,
                            }),
                        !g && (0, n.jsx)("div", { className: B.backSplash }),
                        !y &&
                            (0, n.jsx)(c.olH, {
                                onClick: i,
                                className: B.closeButton,
                            }),
                        (0, n.jsxs)(c.hzk, {
                            className: s()({
                                [B.content]: !g,
                                [B.contentCustomGift]: g,
                            }),
                            children: [
                                !y &&
                                    !S &&
                                    (null == r.giftStyle || (g && O)) &&
                                    (0, n.jsx)(x.Z, {
                                        size: x.Z.Sizes.LARGE,
                                        game: t,
                                        skuId: r.skuId,
                                    }),
                                Z &&
                                    (0, n.jsx)("img", {
                                        alt: "",
                                        src: m ? K : W,
                                    }),
                                (0, n.jsxs)(c.X6q, {
                                    id: l,
                                    className: s()({
                                        [B.customGiftHeader]: g && !O,
                                        [B.header]: !g || O,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: s()({ [B.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, n.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(g && !O) &&
                                    (0, n.jsx)(c.Text, {
                                        className: B.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                g &&
                                    !y &&
                                    null != r.giftStyle &&
                                    !O &&
                                    !Z &&
                                    (0, n.jsx)(U.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: B.giftAnimation,
                                        giftStyle: r.giftStyle,
                                    }),
                                this.state.opened && !Z && y && (0, n.jsx)(j.Z, { giftCode: r }),
                                Z &&
                                    (0, n.jsx)(c.Text, {
                                        className: B.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !Z &&
                                    null != d &&
                                    "" !== d &&
                                    !w &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.vwX, {
                                                children: V.intl.format(V.t.DDO4W1, { sender: G.ZP.getName(h) }),
                                            }),
                                            (0, n.jsx)(c.X6q, {
                                                id: l,
                                                className: B.customMessage,
                                                variant: "heading-sm/bold",
                                                children: d,
                                            }),
                                        ],
                                    }),
                                (0, n.jsx)(c.zxk, {
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
                    this.step !== F.wZ8.ERROR &&
                    !O &&
                    !e &&
                    b &&
                    (null == p || null == P
                        ? (0, n.jsx)(X, { openedGift: b && !O && !e })
                        : (0, n.jsx)(M.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: P,
                          })),
                !O &&
                    !e &&
                    b &&
                    null != f &&
                    (0, n.jsx)(Y, {
                        soundId: f,
                        step: this.step,
                    }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            q(this, "state", {
                error: null,
                accepted: !1,
                opened: !1,
                isCustomGift: !1,
                isCollectiblesGift: !1,
                step: void 0,
                emojiURL: void 0,
                isPremiumAppGift: !1,
            }),
            q(this, "modalRef", r.createRef()),
            q(this, "handleOpen", () => {
                this.setState({ opened: !0 });
            }),
            q(this, "handleAccept", async () => {
                let { giftCode: t, channelContext: e, onAccept: i } = this.props;
                if (null == t) throw Error("GiftCode is null at acceptance.");
                try {
                    await d.Z.redeemGiftCode({
                        code: t.code,
                        options: { channelId: e },
                    }),
                        this.setState({ accepted: !0 }),
                        null == i || i();
                } catch (t) {
                    this.setState({ error: t });
                }
            }),
            q(this, "handleGoToLibrary", () => {
                let { onClose: t, libraryApplication: e } = this.props;
                (0, Z.uL)(F.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            q(this, "getDefaultAnimationStatus", () => (this.step === F.wZ8.OPEN ? _.SR.IDLE : _.SR.ACTION)),
            q(this, "getIdleAnimationStatus", () => {
                if (this.step !== F.wZ8.OPEN) return _.SR.LOOP;
            });
    }
}
let Q = o.ZP.connectStores([T.Z, R.Z, y.Z, A.Z, E.Z, f.Z], (t) => {
        let { giftCode: e } = t,
            i = R.Z.get(e.skuId),
            n = null != i ? y.Z.getApplication(i.applicationId) : null,
            r = f.Z.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && (null == e ? void 0 : e.entitlementBranches) != null
                    ? (0, D.z2)(e.entitlementBranches, i, T.Z)
                    : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, L.oE)(e.subscriptionPlanId) : null,
            accepting: A.Z.getIsAccepting(e.code),
            useReducedMotion: r,
        };
    })(J),
    $ = (t) => {
        var e,
            i,
            r,
            { channelContext: l, code: s, customGiftMessage: a, emojiName: c, soundId: d, onClose: f } = t,
            g = (function (t, e) {
                if (null == t) return {};
                var i,
                    n,
                    r = (function (t, e) {
                        if (null == t) return {};
                        var i,
                            n,
                            r = {},
                            l = Object.keys(t);
                        for (n = 0; n < l.length; n++) (i = l[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < l.length; n++)
                        (i = l[n]),
                            !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]);
                }
                return r;
            })(t, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
        let y = (0, v.Dt)(),
            O = (0, o.e7)([A.Z], () => A.Z.get(s)),
            j = (0, p.ZP)(),
            { analyticsLocations: S } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
            { product: x } = (0, b.T)(null == O ? void 0 : O.skuId);
        return null == O
            ? null
            : (0, n.jsx)(
                  Q,
                  ((e = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var i = null != arguments[e] ? arguments[e] : {},
                              n = Object.keys(i);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (n = n.concat(
                                  Object.getOwnPropertySymbols(i).filter(function (t) {
                                      return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                  }),
                              )),
                              n.forEach(function (e) {
                                  q(t, e, i[e]);
                              });
                      }
                      return t;
                  })({}, g)),
                  (i = i =
                      {
                          customGiftMessage: a,
                          channelContext: l,
                          giftCode: O,
                          headerId: y,
                          emojiName: c,
                          soundId: d,
                          analyticsLocations: S,
                          isThemeDark: (0, u.wj)(j),
                          onClose: f,
                          collectiblesItemType: null == x || null == (r = x.items[0]) ? void 0 : r.type,
                          onAccept:
                              null != x
                                  ? () => {
                                        f(),
                                            (0, P.Z)({
                                                product: x,
                                                analyticsLocations: S,
                                                purchaseType: z.o8.GIFT,
                                            });
                                    }
                                  : void 0,
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
                  e),
              );
    };
