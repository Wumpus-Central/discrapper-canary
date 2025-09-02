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
    f = i(410030),
    p = i(607070),
    m = i(100527),
    h = i(906732),
    g = i(728345),
    y = i(812206),
    b = i(884697),
    O = i(583434),
    P = i(551425),
    v = i(832149),
    j = i(745510),
    S = i(313201),
    x = i(925329),
    w = i(703656),
    Z = i(146779),
    _ = i(763296),
    A = i(82142),
    C = i(283595),
    T = i(594174),
    I = i(509545),
    E = i(55563),
    R = i(626135),
    N = i(176354),
    k = i(669079),
    G = i(296848),
    D = i(51144),
    L = i(479446),
    M = i(715627),
    H = i(981632),
    U = i(474936),
    F = i(981631),
    z = i(215023),
    B = i(388032),
    V = i(269142),
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
            { createMultipleConfettiAt: i } = r.useContext(j.h);
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
                let n = _.Z.getSoundById(i);
                (0, Z.playGiftSound)(i, null != (t = null == n ? void 0 : n.volume) ? t : 1);
            }, [e, i]),
            null
        );
    };
class J extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: n, emojiName: r } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
        let l = null != i || null != n.giftStyle,
            s = (0, b.mO)(n),
            a = null != r ? N.ZP.getURL(r) : void 0,
            o = (0, k.HL)({ productLine: null == e ? void 0 : e.productLine });
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
        return (0, k.TO)(t, i, {
            error: n,
            accepted: r,
            accepting: e,
            opened: l,
            isCustomGift: s,
            isPremiumAppGift: a,
        });
    }
    get buttonText() {
        return (0, k.L2)(this.step, this.props.giftCode, {
            isCustomGift: this.state.isCustomGift,
            isPremiumAppGift: this.state.isPremiumAppGift,
        });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i, isPremiumAppGift: n } = this.state,
            { giftCode: r, subscriptionPlan: l, collectiblesItemType: s, sku: o, application: u } = this.props;
        if (t && this.step === F.wZ8.ERROR) return B.intl.formatToMarkdownString(B.t.JUvC0t, {});
        if (n)
            if (!e)
                return B.intl.formatToPlainString(B.t.xHzRub, {
                    recipientDisplayName: D.ZP.getName(T.default.getCurrentUser()),
                });
            else {
                var c, d;
                if (i) return B.intl.string(B.t["+BNMcH"]);
                let t = T.default.getUser(r.userId);
                return B.intl.formatToPlainString(B.t["2tBYtL"], {
                    sender: D.ZP.getName(t),
                    skuName: null != (c = null == o ? void 0 : o.name) ? c : "item",
                    applicationName: null != (d = null == u ? void 0 : u.name) ? d : "an application",
                });
            }
        if (t && !i)
            if (!e)
                return B.intl.formatToPlainString(B.t.xHzRub, {
                    recipientDisplayName: D.ZP.getName(T.default.getCurrentUser()),
                });
            else {
                let t = T.default.getUser(r.userId),
                    e = D.ZP.getName(t);
                if (null != s)
                    switch (s) {
                        case a.Z.AVATAR_DECORATION:
                            return B.intl.formatToPlainString(B.t.SKduys, { sender: e });
                        case a.Z.PROFILE_EFFECT:
                            return B.intl.formatToPlainString(B.t["1w42T0"], { sender: e });
                        case a.Z.NAMEPLATE:
                            return B.intl.formatToPlainString(B.t.vFiQlZ, { sender: e });
                        default:
                            return B.intl.formatToPlainString(B.t.U4Ko29, { sender: e });
                    }
                return B.intl.formatToPlainString(B.t["0UR0u7"], {
                    sender: e,
                    timeInterval:
                        (null == l ? void 0 : l.interval) === U.rV.MONTH
                            ? B.intl.string(B.t.FPybU1)
                            : B.intl.string(B.t.tfqrho),
                });
            }
        return null == this.props.sku ? null : (0, k.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = T.default.getUser(this.props.giftCode.userId);
        return B.intl.formatToPlainString(B.t.DDO4W1, { sender: D.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n, giftCode: r } = this.props;
        if (null == t) return null;
        let { error: l, accepted: s, isCustomGift: a, opened: o, isPremiumAppGift: u } = this.state;
        if (u) {
            let t = T.default.getUser(r.userId);
            return o
                ? s
                    ? B.intl.string(B.t.fLHIp6)
                    : null
                : B.intl.formatToPlainString(B.t.DDO4W1, { sender: D.ZP.getName(t) });
        }
        return !o && a
            ? null
            : (0, k.iM)({
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
        return (0, k.e$)(t, i, n, e, this.handleGoToLibrary);
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
        R.default.track(F.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: s,
            is_custom_message_edited: s && e !== B.intl.string(B.t.ZkOo1d),
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
                emojiName: f,
                soundId: p,
                isThemeDark: m,
            } = this.props,
            h = T.default.getUser(r.userId),
            {
                isCustomGift: g,
                isCollectiblesGift: y,
                accepted: b,
                opened: O,
                emojiURL: v,
                isPremiumAppGift: j,
            } = this.state,
            S = T.default.getCurrentUser(),
            w = this.step === F.wZ8.ERROR,
            Z =
                (null == r ? void 0 : r.userId) != null &&
                null != S &&
                (null == S ? void 0 : S.id) != null &&
                r.userId === S.id;
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
                    className: V.modal,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != r.giftStyle &&
                            !g &&
                            !y &&
                            (0, n.jsx)(H.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: r.giftStyle,
                                className: V.seasonalGiftIcon,
                            }),
                        !g && (0, n.jsx)("div", { className: V.backSplash }),
                        !y &&
                            (0, n.jsx)(c.olH, {
                                onClick: i,
                                className: V.closeButton,
                            }),
                        (0, n.jsxs)(c.hzk, {
                            className: s()({
                                [V.content]: !g,
                                [V.contentCustomGift]: g,
                            }),
                            children: [
                                !y &&
                                    !j &&
                                    (null == r.giftStyle || (g && b)) &&
                                    (0, n.jsx)(x.Z, {
                                        size: x.A.LARGE,
                                        game: t,
                                        skuId: r.skuId,
                                    }),
                                w &&
                                    (0, n.jsx)("img", {
                                        alt: "",
                                        src: m ? K : W,
                                    }),
                                (0, n.jsxs)(c.X6q, {
                                    id: l,
                                    className: s()({
                                        [V.customGiftHeader]: g && !b,
                                        [V.header]: !g || b,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: s()({ [V.customGiftHeaderText]: g }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, n.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(g && !b) &&
                                    (0, n.jsx)(c.Text, {
                                        className: V.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                g &&
                                    !y &&
                                    null != r.giftStyle &&
                                    !b &&
                                    !w &&
                                    (0, n.jsx)(H.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: V.giftAnimation,
                                        giftStyle: r.giftStyle,
                                    }),
                                this.state.opened && !w && y && (0, n.jsx)(P.Z, { giftCode: r }),
                                w &&
                                    (0, n.jsx)(c.Text, {
                                        className: V.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !w &&
                                    null != d &&
                                    "" !== d &&
                                    !Z &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.vwX, {
                                                children: B.intl.format(B.t.DDO4W1, { sender: D.ZP.getName(h) }),
                                            }),
                                            (0, n.jsx)(c.X6q, {
                                                id: l,
                                                className: V.customMessage,
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
                    !b &&
                    !e &&
                    O &&
                    (null == f || null == v
                        ? (0, n.jsx)(X, { openedGift: O && !b && !e })
                        : (0, n.jsx)(M.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: v,
                          })),
                !b &&
                    !e &&
                    O &&
                    null != p &&
                    (0, n.jsx)(Y, {
                        soundId: p,
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
                (0, w.uL)(F.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            q(this, "getDefaultAnimationStatus", () => (this.step === F.wZ8.OPEN ? L.SR.IDLE : L.SR.ACTION)),
            q(this, "getIdleAnimationStatus", () => {
                if (this.step !== F.wZ8.OPEN) return L.SR.LOOP;
            });
    }
}
let Q = o.ZP.connectStores([C.Z, E.Z, y.Z, A.Z, I.Z, p.Z], (t) => {
        let { giftCode: e } = t,
            i = E.Z.get(e.skuId),
            n = null != i ? y.Z.getApplication(i.applicationId) : null,
            r = p.Z.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && (null == e ? void 0 : e.entitlementBranches) != null
                    ? (0, k.z2)(e.entitlementBranches, i, C.Z)
                    : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, G.oE)(e.subscriptionPlanId) : null,
            accepting: A.Z.getIsAccepting(e.code),
            useReducedMotion: r,
        };
    })(J),
    $ = (t) => {
        var e,
            i,
            r,
            { channelContext: l, code: s, customGiftMessage: a, emojiName: c, soundId: d, onClose: p } = t,
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
        let y = (0, S.Dt)(),
            b = (0, o.e7)([A.Z], () => A.Z.get(s)),
            P = (0, f.ZP)(),
            { analyticsLocations: j } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
            { product: x } = (0, O.T)(null == b ? void 0 : b.skuId);
        return null == b
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
                          giftCode: b,
                          headerId: y,
                          emojiName: c,
                          soundId: d,
                          analyticsLocations: j,
                          isThemeDark: (0, u.wj)(P),
                          onClose: p,
                          collectiblesItemType: null == x || null == (r = x.items[0]) ? void 0 : r.type,
                          onAccept:
                              null != x
                                  ? () => {
                                        p(),
                                            (0, v.Z)({
                                                product: x,
                                                analyticsLocations: j,
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
