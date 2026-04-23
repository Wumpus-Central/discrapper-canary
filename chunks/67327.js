i.d(e, { default: () => tt });
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(575593),
    o = i(311907),
    u = i(935462),
    d = i(534514),
    c = i(834730),
    p = i(821609),
    h = i(869038),
    f = i(775602),
    m = i(793574),
    g = i(688810),
    A = i(627363),
    x = i(587895),
    y = i(590180),
    R = i(993408),
    S = i(674658),
    C = i(552915),
    I = i(61750),
    T = i(21161),
    j = i(915089),
    E = i(769015),
    N = i(976860),
    O = i(871123),
    _ = i(220297),
    v = i(946261),
    b = i(209932),
    L = i(30793),
    P = i(189081),
    k = i(287809),
    w = i(97352),
    M = i(67480),
    G = i(954571),
    D = i(690521),
    F = i(45938),
    U = i(615396),
    H = i(427262),
    z = i(242874),
    V = i(518926),
    B = i(75825),
    $ = i(788868),
    W = i(652215),
    q = i(758836),
    K = i(985018),
    Q = i(886898);
let Y = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = l.useContext(T.x);
        return (
            l.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    J = (t) => {
        let { step: e, soundId: i } = t;
        return (
            l.useEffect(() => {
                if (e !== W.frR.CONFIRM) return;
                let t = b.A.getSoundById(i);
                (0, v.playGiftSound)(i, t?.volume ?? 1);
            }, [e, i]),
            null
        );
    };
class X extends l.Component {
    state = {
        error: null,
        accepted: !1,
        opened: !1,
        isCustomGift: !1,
        isCollectiblesGift: !1,
        step: void 0,
        emojiURL: void 0,
    };
    modalRef = l.createRef();
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: s, emojiName: l } = this.props;
        null == t && null != e && A.Ay.fetchApplication(e.applicationId);
        let n = null != i || null != s.giftStyle,
            a = (0, R.hU)(s),
            r = null != l ? D.Ay.getURL(l) : void 0;
        this.setState({ isCustomGift: n, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: l, opened: n, isCustomGift: a } = this.state;
        return (0, F.v3)(t, i, { error: s, accepted: l, accepting: e, opened: n, isCustomGift: a });
    }
    get buttonText() {
        return (0, F.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: l, collectiblesItemType: n } = this.props;
        if (t && this.step === W.frR.ERROR) return K.intl.formatToMarkdownString(K.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return K.intl.formatToPlainString(K.t.xHzRub, {
                    recipientDisplayName: H.Ay.getName(k.default.getCurrentUser()),
                });
            else {
                let t = k.default.getUser(s.userId),
                    e = H.Ay.getName(t);
                if (null != n)
                    switch (n) {
                        case r.R.AVATAR_DECORATION:
                            return K.intl.formatToPlainString(K.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return K.intl.formatToPlainString(K.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return K.intl.formatToPlainString(K.t.vFiQlU, { sender: e });
                        case r.R.PROFILE_FRAME:
                            return K.intl.formatToPlainString(K.t["UH/EQL"], { sender: e });
                        default:
                            return K.intl.formatToPlainString(K.t.U4Ko2y, { sender: e });
                    }
                return K.intl.formatToPlainString(K.t["0UR0u4"], {
                    sender: e,
                    timeInterval: l?.interval === $.WT.MONTH ? K.intl.string(K.t.FPybU7) : K.intl.string(K.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, F.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = k.default.getUser(this.props.giftCode.userId);
        return K.intl.formatToPlainString(K.t.DDO4Wz, { sender: H.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: l, accepted: n, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, F.e_)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: l,
                  accepted: n,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: s,
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: s } = this.state;
        return (0, F.u1)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case W.frR.ERROR:
                return e;
            case W.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case W.frR.OPEN:
                return this.handleOpen;
            case W.frR.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    handleOpen = () => {
        this.setState({ opened: !0 });
    };
    handleAccept = async () => {
        let { giftCode: t, channelContext: e, onAccept: i } = this.props;
        if (null == t) throw Error("GiftCode is null at acceptance.");
        try {
            await h.A.redeemGiftCode({ code: t.code, options: { channelId: e } }),
                this.setState({ accepted: !0 }),
                i?.();
        } catch (t) {
            this.setState({ error: t });
        }
    };
    handleGoToLibrary = () => {
        let { onClose: t, libraryApplication: e } = this.props;
        (0, N.pX)(W.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
    };
    getDefaultAnimationStatus = () => (this.step === W.frR.OPEN ? z.oA.IDLE : z.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== W.frR.OPEN) return z.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s, sku: l, analyticsLocations: n } = this.props,
            { isCustomGift: a } = this.state;
        G.default.track(W.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: n,
            has_custom_message: a,
            is_custom_message_edited: a && e !== K.intl.string(K.t.ZkOo1U),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: s,
            product_line: l?.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                onClose: i,
                giftCode: l,
                headerId: n,
                transitionState: r,
                useReducedMotion: o,
                onComplete: h,
                customGiftMessage: f,
                emojiName: m,
                soundId: g,
            } = this.props,
            A = k.default.getUser(l.userId),
            { isCustomGift: x, isCollectiblesGift: y, accepted: R, opened: S, emojiURL: I } = this.state,
            T = k.default.getCurrentUser(),
            j = this.step === W.frR.ERROR,
            N = l?.userId != null && null != T && T?.id != null && l.userId === T.id;
        switch (this.step) {
            case W.frR.ERROR:
                h?.(l, !1);
                break;
            case W.frR.SUCCESS:
                h?.(l, !0);
        }
        return (0, s.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: u.rI.SMALL,
                    className: Q.yl,
                    "aria-labelledby": n,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != l.giftStyle &&
                            !x &&
                            !y &&
                            (0, s.jsx)(B.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: l.giftStyle,
                                className: Q.C9,
                            }),
                        !x && (0, s.jsx)("div", { className: Q.Dv }),
                        !y && (0, s.jsx)(u.s_, { "data-migration-pending": !0, onClick: i, className: Q.b }),
                        (0, s.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: a()({ [Q.Qs]: !x, [Q.Fl]: x }),
                            children: [
                                !y && (null == l.giftStyle || (x && R))
                                    ? (0, s.jsx)(E.A, { size: E.M.LARGE, game: t, skuId: l.skuId })
                                    : null,
                                (0, s.jsxs)(d.D, {
                                    id: n,
                                    className: a()({ [Q.Ry]: x && !R, [Q.wx]: !x || R }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: a()({ [Q.Qw]: x }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, s.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(x && !R) &&
                                    (0, s.jsx)(c.E, {
                                        className: Q.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                x &&
                                    !y &&
                                    null != l.giftStyle &&
                                    !R &&
                                    !j &&
                                    (0, s.jsx)(B.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: Q.l$,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !j && y && (0, s.jsx)(C.A, { giftCode: l }),
                                j &&
                                    (0, s.jsx)(c.E, {
                                        className: Q.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                x &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !j &&
                                    null != f &&
                                    "" !== f &&
                                    !N &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(d.D, {
                                                id: n,
                                                variant: "heading-md/semibold",
                                                children: K.intl.format(K.t.DDO4Wz, { sender: H.Ay.getName(A) }),
                                            }),
                                            (0, s.jsx)(c.E, {
                                                className: Q.$B,
                                                variant: "text-md/semibold",
                                                children: f,
                                            }),
                                        ],
                                    }),
                                (0, s.jsx)(p.$, {
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
                null != l.giftStyle &&
                    !o &&
                    this.step !== W.frR.ERROR &&
                    !R &&
                    !e &&
                    S &&
                    (null == m || null == I
                        ? (0, s.jsx)(Y, { openedGift: !0 })
                        : (0, s.jsx)(V.A, { confettiTarget: this.modalRef.current, emojiURL: I })),
                !R && !e && S && null != g && (0, s.jsx)(J, { soundId: g, step: this.step }),
            ],
        });
    }
}
let Z = o.Ay.connectStores([P.A, M.A, x.A, L.A, w.A, f.A, y.A], (t) => {
        let { giftCode: e } = t,
            i = M.A.get(e.skuId),
            s = null != i ? x.A.getApplication(i.applicationId) : null,
            l = f.A.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, F.YI)(e.entitlementBranches, i, P.A) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, U.c9)(e.subscriptionPlanId) : null,
            accepting: L.A.getIsAccepting(e.code),
            useReducedMotion: l,
        };
    })((t) => {
        let {
                sku: e,
                giftCode: i,
                channelContext: n,
                customGiftMessage: a,
                onClose: r,
                analyticsLocations: o,
                emojiName: u,
                soundId: d,
            } = t,
            c = null != e && (0, O.bF)(e);
        return (l.useEffect(() => {
            if (c) {
                (0, _.b)({
                    sku: e,
                    giftCode: i,
                    channelContext: n,
                    customGiftMessage: a,
                    analyticsLocations: o,
                    emojiName: u,
                    soundId: d,
                }),
                    r();
                return;
            }
        }, [e, c, n, a, i, r, o, u, d]),
        c)
            ? null
            : (0, s.jsx)(X, { ...t });
    }),
    tt = (t) => {
        let { channelContext: e, code: i, customGiftMessage: l, emojiName: n, soundId: a, onClose: r, ...u } = t,
            d = (0, j.GV)(),
            c = (0, o.bG)([L.A], () => L.A.get(i)),
            { analyticsLocations: p } = (0, g.Ay)(m.A.GIFT_CODE_MODAL),
            { product: h } = (0, S.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, s.jsx)(Z, {
                  ...u,
                  customGiftMessage: l,
                  channelContext: e,
                  giftCode: c,
                  headerId: d,
                  emojiName: n,
                  soundId: a,
                  analyticsLocations: p,
                  onClose: r,
                  collectiblesItemType: (0, R.oj)(h),
                  onAccept:
                      null != h
                          ? () => {
                                r(), (0, I.A)({ product: h, analyticsLocations: p, purchaseType: q.gs.GIFT });
                            }
                          : void 0,
              });
    };
