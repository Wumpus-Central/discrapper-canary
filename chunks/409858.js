n.d(t, { default: () => en }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(979554),
    o = n(442837),
    u = n(780384),
    c = n(481060),
    d = n(533307),
    p = n(410030),
    f = n(607070),
    m = n(100527),
    g = n(906732),
    h = n(728345),
    b = n(812206),
    y = n(597688),
    O = n(884697),
    v = n(583434),
    P = n(551425),
    j = n(832149),
    x = n(745510),
    S = n(313201),
    _ = n(925329),
    w = n(703656),
    I = n(164670),
    Z = n(435883),
    C = n(146779),
    A = n(763296),
    T = n(82142),
    N = n(283595),
    E = n(594174),
    R = n(509545),
    k = n(55563),
    G = n(626135),
    D = n(176354),
    L = n(669079),
    M = n(296848),
    H = n(51144),
    U = n(479446),
    B = n(715627),
    F = n(981632),
    z = n(474936),
    V = n(981631),
    K = n(215023),
    W = n(388032),
    q = n(269142),
    Y = n(167969),
    $ = n(557256);
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
let Q = (e) => {
        let { openedGift: t } = e,
            { createMultipleConfettiAt: n } = r.useContext(x.h);
        return (
            r.useEffect(() => {
                t && n(window.innerWidth / 2, window.innerHeight / 4);
            }, [n, t]),
            null
        );
    },
    X = (e) => {
        let { step: t, soundId: n } = e;
        return (
            r.useEffect(() => {
                var e;
                if (t !== V.wZ8.CONFIRM) return;
                let i = A.Z.getSoundById(n);
                (0, C.playGiftSound)(n, null != (e = null == i ? void 0 : i.volume) ? e : 1);
            }, [t, n]),
            null
        );
    };
class ee extends r.Component {
    componentDidMount() {
        let { application: e, sku: t, customGiftMessage: n, giftCode: i, emojiName: r } = this.props;
        null == e && null != t && h.ZP.fetchApplication(t.applicationId);
        let l = null != n || null != i.giftStyle,
            a = (0, O.mO)(i),
            s = null != r ? D.ZP.getURL(r) : void 0,
            o = (0, L.HL)({ productLine: null == t ? void 0 : t.productLine });
        this.setState({
            isCustomGift: l,
            isCollectiblesGift: a,
            emojiURL: s,
            opened: a,
            isPremiumAppGift: o,
        }),
            this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: e, accepting: t, giftCode: n } = this.props,
            { error: i, accepted: r, opened: l, isCustomGift: a, isPremiumAppGift: s } = this.state;
        return (0, L.TO)(e, n, {
            error: i,
            accepted: r,
            accepting: t,
            opened: l,
            isCustomGift: a,
            isPremiumAppGift: s,
        });
    }
    get buttonText() {
        return (0, L.L2)(this.step, this.props.giftCode, {
            isCustomGift: this.state.isCustomGift,
            isPremiumAppGift: this.state.isPremiumAppGift,
        });
    }
    get firstHeaderText() {
        let { isCustomGift: e, opened: t, accepted: n, isPremiumAppGift: i } = this.state,
            { giftCode: r, subscriptionPlan: l, collectiblesItemType: a, sku: o, application: u } = this.props;
        if (e && this.step === V.wZ8.ERROR) return W.intl.formatToMarkdownString(W.t.JUvC0t, {});
        if (i)
            if (!t)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: H.ZP.getName(E.default.getCurrentUser()),
                });
            else {
                var c, d;
                if (n) return W.intl.string(W.t["+BNMcH"]);
                let e = E.default.getUser(r.userId);
                return W.intl.formatToPlainString(W.t["2tBYtL"], {
                    sender: H.ZP.getName(e),
                    skuName: null != (c = null == o ? void 0 : o.name) ? c : "item",
                    applicationName: null != (d = null == u ? void 0 : u.name) ? d : "an application",
                });
            }
        if (e && !n)
            if (!t)
                return W.intl.formatToPlainString(W.t.xHzRub, {
                    recipientDisplayName: H.ZP.getName(E.default.getCurrentUser()),
                });
            else {
                let e = E.default.getUser(r.userId),
                    t = H.ZP.getName(e);
                if (null != a)
                    switch (a) {
                        case s.Z.AVATAR_DECORATION:
                            return W.intl.formatToPlainString(W.t.SKduys, { sender: t });
                        case s.Z.PROFILE_EFFECT:
                            return W.intl.formatToPlainString(W.t["1w42T0"], { sender: t });
                        case s.Z.NAMEPLATE:
                            return W.intl.formatToPlainString(W.t.vFiQlZ, { sender: t });
                        default:
                            return W.intl.formatToPlainString(W.t.U4Ko29, { sender: t });
                    }
                return W.intl.formatToPlainString(W.t["0UR0u7"], {
                    sender: t,
                    timeInterval:
                        (null == l ? void 0 : l.interval) === z.rV.MONTH
                            ? W.intl.string(W.t.FPybU1)
                            : W.intl.string(W.t.tfqrho),
                });
            }
        return null == this.props.sku ? null : (0, L.dQ)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let e = E.default.getUser(this.props.giftCode.userId);
        return W.intl.formatToPlainString(W.t.DDO4W1, { sender: H.ZP.getName(e) });
    }
    get bodyText() {
        let { sku: e, accepting: t, libraryApplication: n, subscriptionPlan: i, giftCode: r } = this.props;
        if (null == e) return null;
        let { error: l, accepted: a, isCustomGift: s, opened: o, isPremiumAppGift: u } = this.state;
        if (u) {
            let e = E.default.getUser(r.userId);
            return o
                ? a
                    ? W.intl.string(W.t.fLHIp6)
                    : null
                : W.intl.formatToPlainString(W.t.DDO4W1, { sender: H.ZP.getName(e) });
        }
        return !o && s
            ? null
            : (0, L.iM)({
                  step: this.step,
                  sku: e,
                  libraryApplication: n,
                  error: l,
                  accepted: a,
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
                if (__OVERLAY__ || null != e.subscriptionPlanId || this.state.isPremiumAppGift) return t;
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
            { isCustomGift: a } = this.state;
        G.default.track(V.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: a,
            is_custom_message_edited: a && t !== W.intl.string(W.t.ZkOo1d),
            gift_style: e.giftStyle,
            gift_code: e.code,
            emoji_name: n,
            sound_id: i,
            product_line: null == r ? void 0 : r.productLine,
        });
    }
    render() {
        let {
                sku: e,
                application: t,
                accepting: n,
                onClose: r,
                giftCode: l,
                headerId: s,
                transitionState: o,
                useReducedMotion: u,
                onComplete: d,
                customGiftMessage: p,
                emojiName: f,
                soundId: m,
                isThemeDark: g,
            } = this.props,
            h = E.default.getUser(l.userId),
            {
                isCustomGift: b,
                isCollectiblesGift: y,
                accepted: O,
                opened: v,
                emojiURL: j,
                isPremiumAppGift: x,
            } = this.state,
            S = E.default.getCurrentUser(),
            w = this.step === V.wZ8.ERROR,
            C =
                (null == l ? void 0 : l.userId) != null &&
                null != S &&
                (null == S ? void 0 : S.id) != null &&
                l.userId === S.id;
        switch (this.step) {
            case V.wZ8.ERROR:
                null == d || d(l, !1);
                break;
            case V.wZ8.SUCCESS:
                null == d || d(l, !0);
        }
        let A = (0, I.K$)(e);
        return (0, i.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, i.jsxs)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: o,
                    size: c.CgR.SMALL,
                    className: q.modal,
                    "aria-labelledby": s,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != l.giftStyle &&
                            !b &&
                            !y &&
                            (0, i.jsx)(F.Z, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: l.giftStyle,
                                className: q.seasonalGiftIcon,
                            }),
                        !b && (0, i.jsx)("div", { className: q.backSplash }),
                        !y &&
                            (0, i.jsx)(c.olH, {
                                "data-migration-pending": !0,
                                onClick: r,
                                className: q.closeButton,
                            }),
                        (0, i.jsxs)(c.hzk, {
                            "data-migration-pending": !0,
                            className: a()({
                                [q.content]: !b,
                                [q.contentCustomGift]: b,
                            }),
                            children: [
                                (!y && !x && (null == l.giftStyle || (b && O))) || A
                                    ? (0, i.jsx)(_.Z, {
                                          size: _.A.LARGE,
                                          game: t,
                                          skuId: l.skuId,
                                      })
                                    : null,
                                w &&
                                    (0, i.jsx)("img", {
                                        alt: "",
                                        src: g ? Y : $,
                                    }),
                                (0, i.jsxs)(c.Heading, {
                                    id: s,
                                    className: a()({
                                        [q.customGiftHeader]: b && !O,
                                        [q.header]: !b || O,
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()({ [q.customGiftHeaderText]: b }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, i.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(b && !O) &&
                                    (0, i.jsx)(c.Text, {
                                        className: q.body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                b &&
                                    !y &&
                                    null != l.giftStyle &&
                                    !O &&
                                    !w &&
                                    (0, i.jsx)(F.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: q.giftAnimation,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !w && y && (0, i.jsx)(P.Z, { giftCode: l }),
                                w &&
                                    (0, i.jsx)(c.Text, {
                                        className: q.body,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                b &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !w &&
                                    null != p &&
                                    "" !== p &&
                                    !C &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                id: s,
                                                variant: "heading-md/semibold",
                                                children: W.intl.format(W.t.DDO4W1, { sender: H.ZP.getName(h) }),
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: q.customMessage,
                                                variant: "text-md/semibold",
                                                children: p,
                                            }),
                                        ],
                                    }),
                                A &&
                                    (0, i.jsx)(Z.q, {
                                        sku: e,
                                        className: a()({
                                            [q.gameItemImageGiftUnopened]: !this.state.opened,
                                            [q.gameItemImageGiftOpened]: this.state.opened,
                                        }),
                                    }),
                                (0, i.jsx)(c.Button, {
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
                    !O &&
                    !n &&
                    v &&
                    (null == f || null == j
                        ? (0, i.jsx)(Q, { openedGift: v && !O && !n })
                        : (0, i.jsx)(B.Z, {
                              confettiTarget: this.modalRef.current,
                              emojiURL: j,
                          })),
                !O &&
                    !n &&
                    v &&
                    null != m &&
                    (0, i.jsx)(X, {
                        soundId: m,
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
                isPremiumAppGift: !1,
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
                (0, w.uL)(V.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }), e();
            }),
            J(this, "getDefaultAnimationStatus", () => (this.step === V.wZ8.OPEN ? U.SR.IDLE : U.SR.ACTION)),
            J(this, "getIdleAnimationStatus", () => {
                if (this.step !== V.wZ8.OPEN) return U.SR.LOOP;
            });
    }
}
let et = o.ZP.connectStores([N.Z, k.Z, b.Z, T.Z, R.Z, f.Z, y.Z], (e) => {
        let { giftCode: t } = e,
            n = k.Z.get(t.skuId),
            i = null != n ? b.Z.getApplication(n.applicationId) : null,
            r = f.Z.useReducedMotion;
        return {
            sku: n,
            libraryApplication:
                null != n && (null == t ? void 0 : t.entitlementBranches) != null
                    ? (0, L.z2)(t.entitlementBranches, n, N.Z)
                    : null,
            application: i,
            subscriptionPlan: null != t.subscriptionPlanId ? (0, M.oE)(t.subscriptionPlanId) : null,
            accepting: T.Z.getIsAccepting(t.code),
            useReducedMotion: r,
        };
    })(ee),
    en = (e) => {
        var t,
            n,
            { channelContext: r, code: l, customGiftMessage: a, emojiName: s, soundId: c, onClose: d } = e,
            f = (function (e, t) {
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
        let h = (0, S.Dt)(),
            b = (0, o.e7)([T.Z], () => T.Z.get(l)),
            y = (0, p.ZP)(),
            { analyticsLocations: P } = (0, g.ZP)(m.Z.GIFT_CODE_MODAL),
            { product: x } = (0, v.T)(null == b ? void 0 : b.skuId, !0);
        return null == b
            ? null
            : (0, i.jsx)(
                  et,
                  ((t = (function (e) {
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
                  })({}, f)),
                  (n = n =
                      {
                          customGiftMessage: a,
                          channelContext: r,
                          giftCode: b,
                          headerId: h,
                          emojiName: s,
                          soundId: c,
                          analyticsLocations: P,
                          isThemeDark: (0, u.wj)(y),
                          onClose: d,
                          collectiblesItemType: (0, O.$W)(x),
                          onAccept:
                              null != x
                                  ? () => {
                                        d(),
                                            (0, j.Z)({
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
