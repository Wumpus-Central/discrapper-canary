n.d(e, { default: () => tn }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(979554),
    o = n(442837),
    u = n(780384),
    c = n(481060),
    d = n(533307),
    p = n(410030),
    f = n(607070),
    m = n(100527),
    h = n(906732),
    g = n(728345),
    y = n(812206),
    O = n(884697),
    b = n(583434),
    j = n(551425),
    v = n(832149),
    P = n(745510),
    S = n(313201),
    x = n(925329),
    Z = n(703656),
    w = n(164670),
    I = n(435883),
    A = n(146779),
    C = n(763296),
    T = n(82142),
    E = n(283595),
    R = n(594174),
    N = n(509545),
    k = n(55563),
    D = n(626135),
    G = n(176354),
    L = n(669079),
    _ = n(296848),
    M = n(51144),
    U = n(538981),
    H = n(479446),
    F = n(715627),
    z = n(981632),
    B = n(474936),
    V = n(981631),
    K = n(215023),
    W = n(388032),
    q = n(114644),
    X = n(167969),
    Y = n(557256);
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
let Q = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: n } = r.useContext(P.h);
        return (
            r.useEffect(() => {
                e && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, e]),
            null
        );
    },
    $ = (t) => {
        let { step: e, soundId: n } = t;
        return (
            r.useEffect(() => {
                var t;
                if (e !== V.wZ8.CONFIRM) return;
                let i = C.Z.getSoundById(n);
                (0, A.playGiftSound)(n, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e, n]),
            null
        );
    };
class tt extends r.Component {
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == t && null != e && g.ZP.fetchApplication(e.applicationId);
        let l = null != n || null != i.giftStyle,
            s = (0, O.mO)(i),
            a = null != r ? G.ZP.getURL(r) : void 0,
            o = (0, L.HL)({ productLine: null == e ? void 0 : e.productLine });
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
        return (0, L.TO)(t, n, {
            error: i,
            accepted: r,
            accepting: e,
            opened: l,
            isCustomGift: s,
            isPremiumAppGift: a,
        });
    }
    get buttonText() {
        return (0, L.L2)(this.step, this.props.giftCode, {
            isCustomGift: this.state.isCustomGift,
            isPremiumAppGift: this.state.isPremiumAppGift,
        });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: n, isPremiumAppGift: i } = this.state,
            { giftCode: r, subscriptionPlan: l, collectiblesItemType: s, sku: o, application: u } = this.props;
        if (t && this.step === V.wZ8.ERROR) return W.intl.formatToMarkdownString(W.t.JUvC0t, {});
        if (i)
            if (!e)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: M.ZP.getName(R.default.getCurrentUser()),
                });
            else {
                var c, d;
                if (n) return W.intl.string(W.t["+BNMcH"]);
                let t = R.default.getUser(r.userId);
                return W.intl.formatToPlainString(W.t["2tBYtL"], {
                    sender: M.ZP.getName(t),
                    skuName: null != (c = null == o ? void 0 : o.name) ? c : "item",
                    applicationName: null != (d = null == u ? void 0 : u.name) ? d : "an application",
                });
            }
        if (t && !n)
            if (!e)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: M.ZP.getName(R.default.getCurrentUser()),
                });
            else {
                let t = R.default.getUser(r.userId),
                    e = M.ZP.getName(t);
                if (null != s)
                    switch (s) {
                        case a.Z.AVATAR_DECORATION:
                            return W.intl.formatToPlainString(W.t.SKduys, { sender: e });
                        case a.Z.PROFILE_EFFECT:
                            return W.intl.formatToPlainString(W.t["1w42T0"], { sender: e });
                        case a.Z.NAMEPLATE:
                            return W.intl.formatToPlainString(W.t.vFiQlZ, { sender: e });
                        default:
                            return W.intl.formatToPlainString(W.t.U4Ko29, { sender: e });
                    }
                return W.intl.formatToPlainString(W.t["0UR0u7"], {
                    sender: e,
                    timeInterval:
                        (null == l ? void 0 : l.interval) === B.rV.MONTH
                            ? W.intl.string(W.t.FPybU1)
                            : W.intl.string(W.t.tfqrho),
                });
            }
        return null == this.props.sku ? null : (0, L.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = R.default.getUser(this.props.giftCode.userId);
        return W.intl.formatToPlainString(W.t.DDO4W1, { sender: M.ZP.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: n, subscriptionPlan: i, giftCode: r } = this.props;
        if (null == t) return null;
        let { error: l, accepted: s, isCustomGift: a, opened: o, isPremiumAppGift: u } = this.state;
        if (u) {
            let t = R.default.getUser(r.userId);
            return o
                ? s
                    ? W.intl.string(W.t.fLHIp6)
                    : null
                : W.intl.formatToPlainString(W.t.DDO4W1, { sender: M.ZP.getName(t) });
        }
        return !o && a
            ? null
            : (0, L.iM)({
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
        return (0, L.e$)(t, n, i, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case V.wZ8.ERROR:
                return e;
            case V.wZ8.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId || this.state.isPremiumAppGift) return e;
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
        D.default.track(V.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: s,
            is_custom_message_edited: s && e !== W.intl.string(W.t.ZkOo1d),
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
                customGiftMessage: p,
                emojiName: f,
                soundId: m,
                isThemeDark: h,
            } = this.props,
            g = R.default.getUser(l.userId),
            {
                isCustomGift: y,
                isCollectiblesGift: O,
                accepted: b,
                opened: v,
                emojiURL: P,
                isPremiumAppGift: S,
            } = this.state,
            Z = R.default.getCurrentUser(),
            A = this.step === V.wZ8.ERROR,
            C =
                (null == l ? void 0 : l.userId) != null &&
                null != Z &&
                (null == Z ? void 0 : Z.id) != null &&
                l.userId === Z.id;
        switch (this.step) {
            case V.wZ8.ERROR:
                null == d || d(l, !1);
                break;
            case V.wZ8.SUCCESS:
                null == d || d(l, !0);
        }
        let T = (0, w.K)(t);
        return (0, i.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: o,
                    size: c.CgR.SMALL,
                    className: q.modal,
                    "aria-labelledby": a,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != l.giftStyle &&
                            !y &&
                            !O &&
                            (0, i.jsx)(z.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: l.giftStyle,
                                className: q.seasonalGiftIcon,
                            }),
                        !y && (0, i.jsx)("div", { className: q.backSplash }),
                        !O &&
                            (0, i.jsx)(c.olH, {
                                "data-migration-pending": !0,
                                onClick: r,
                                className: q.closeButton,
                            }),
                        (0, i.jsxs)(c.hzk, {
                            "data-migration-pending": !0,
                            className: s()({
                                [q.content]: !y,
                                [q.contentCustomGift]: y,
                            }),
                            children: [
                                (!O && !S && (null == l.giftStyle || (y && b))) || T
                                    ? (0, i.jsx)(x.Z, {
                                          size: x.A.LARGE,
                                          game: e,
                                          skuId: l.skuId,
                                      })
                                    : null,
                                A &&
                                    (0, i.jsx)("img", {
                                        alt: "",
                                        src: h ? X : Y,
                                    }),
                                (0, i.jsxs)(c.X6q, {
                                    id: a,
                                    className: s()({
                                        [q.customGiftHeader]: y && !b,
                                        [q.header]: !y || b,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: s()({ [q.customGiftHeaderText]: y }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, i.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(y && !b) &&
                                    (0, i.jsx)(c.Text, {
                                        className: q.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                y &&
                                    !O &&
                                    null != l.giftStyle &&
                                    !b &&
                                    !A &&
                                    (0, i.jsx)(z.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: q.giftAnimation,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !A && O && (0, i.jsx)(j.Z, { giftCode: l }),
                                A &&
                                    (0, i.jsx)(c.Text, {
                                        className: q.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                y &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !A &&
                                    null != p &&
                                    "" !== p &&
                                    !C &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.vwX, {
                                                children: W.intl.format(W.t.DDO4W1, { sender: M.ZP.getName(g) }),
                                            }),
                                            (0, i.jsx)(c.X6q, {
                                                id: a,
                                                className: q.customMessage,
                                                variant: "heading-sm/bold",
                                                children: p,
                                            }),
                                        ],
                                    }),
                                T &&
                                    (0, i.jsx)(I.q, {
                                        sku: t,
                                        className: s()({
                                            [q.gameItemImageGiftUnopened]: !this.state.opened,
                                            [q.gameItemImageGiftOpened]: this.state.opened,
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
                    this.step !== V.wZ8.ERROR &&
                    !b &&
                    !n &&
                    v &&
                    (null == f || null == P
                        ? (0, i.jsx)(Q, { openedGift: v && !b && !n })
                        : (0, i.jsx)(F.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: P,
                          })),
                !b &&
                    !n &&
                    v &&
                    null != m &&
                    (0, i.jsx)($, {
                        soundId: m,
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
                isPremiumAppGift: !1,
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
                (0, Z.uL)(V.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
            }),
            J(this, "getDefaultAnimationStatus", () => (this.step === V.wZ8.OPEN ? H.SR.IDLE : H.SR.ACTION)),
            J(this, "getIdleAnimationStatus", () => {
                if (this.step !== V.wZ8.OPEN) return H.SR.LOOP;
            });
    }
}
let te = o.ZP.connectStores([E.Z, k.Z, y.Z, T.Z, N.Z, f.Z], (t) => {
        let { giftCode: e } = t,
            n = k.Z.get(e.skuId),
            i = null != n ? y.Z.getApplication(n.applicationId) : null,
            r = f.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == e ? void 0 : e.entitlementBranches) != null
                    ? (0, L.z2)(e.entitlementBranches, n, E.Z)
                    : null,
            application: i,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
            accepting: T.Z.getIsAccepting(e.code),
            useReducedMotion: r,
        };
    })(tt),
    tn = (t) => {
        var e,
            n,
            r,
            { channelContext: l, code: s, customGiftMessage: a, emojiName: c, soundId: d, onClose: f } = t,
            g = (function (t, e) {
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
            O = (0, o.e7)([T.Z], () => T.Z.get(s)),
            j = (0, p.ZP)(),
            { analyticsLocations: P } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
            { product: x } = (0, b.T)(null == O ? void 0 : O.skuId),
            Z = (0, U.r)();
        return null == O
            ? null
            : (0, i.jsx)(
                  te,
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
                                  J(t, e, n[e]);
                              });
                      }
                      return t;
                  })({}, g)),
                  (n = n =
                      {
                          customGiftMessage: a,
                          channelContext: l,
                          giftCode: O,
                          headerId: y,
                          emojiName: c,
                          soundId: d,
                          analyticsLocations: P,
                          isThemeDark: (0, u.wj)(j),
                          onClose: () => {
                              f(), Z();
                          },
                          collectiblesItemType: null == x || null == (r = x.items[0]) ? void 0 : r.type,
                          onAccept:
                              null != x
                                  ? () => {
                                        f(),
                                            (0, v.Z)({
                                                product: x,
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
