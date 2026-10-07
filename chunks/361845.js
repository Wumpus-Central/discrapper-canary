i.d(e, { default: () => tC });
var n = i(477900),
    s = i(582128),
    l = i(503698),
    a = i.n(l),
    r = i(575593),
    o = i(17928),
    u = i(935462),
    d = i(297264),
    c = i(834730),
    f = i(821609),
    h = i(638495),
    p = i(869038),
    m = i(775602),
    g = i(793574),
    A = i(688810),
    x = i(627363),
    y = i(587895),
    R = i(590180),
    S = i(993408),
    C = i(674658),
    I = i(778712),
    T = i(97808),
    j = i(289873),
    E = i(242874),
    v = i(180522),
    N = i(287809),
    _ = i(562819),
    O = i(215689),
    b = i(344346),
    L = i(139136),
    P = i(395744),
    k = i(245068),
    M = i(864449);
let w = I._3.SIZE_152,
    G = (0, _.Te)(w);
function D(t) {
    let { responsive: e } = t;
    return !0 !== e;
}
function F(t) {
    let { item: e } = t,
        i = (0, o.bG)([N.default], () => N.default.getCurrentUser()),
        {
            avatarDecorationSrc: s,
            avatarPlaceholderSrc: l,
            eventHandlers: a,
        } = (0, O.A)({ user: i, avatarDecorationOverride: e, size: G });
    return (0, n.jsx)("div", {
        className: M._P,
        children: (0, n.jsx)(T.eu, { ...a, "aria-label": e.label, src: l, avatarDecoration: s, size: w }),
    });
}
function U(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", { className: M.xC, children: (0, n.jsx)(L.A, { isHighlighted: !0, skuId: e?.skuId }) });
}
function H(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", { className: M.pI, children: (0, n.jsx)(P.A, { frame: e, filterLayer: D }) });
}
function z(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", {
        className: M.M4,
        children: (0, n.jsx)(b.A, {
            nameplate: e,
            className: M.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
function V(t) {
    let { product: e } = t;
    return (0, n.jsx)("div", { className: M.hT, children: (0, n.jsx)(k.X, { product: e, isHighlighted: !1 }) });
}
let B = function (t) {
    let { giftCode: e } = t,
        { product: i, isFetching: s } = (0, C.q)(e.skuId, !0);
    if (s || null == i) return (0, n.jsx)("div", { className: M.dc, children: (0, n.jsx)(j.y, {}) });
    if (i.type === r.R.BUNDLE) return 0 === i.items.length ? null : (0, n.jsx)(V, { product: i });
    let l = i?.items[0];
    switch (l?.type) {
        case r.R.AVATAR_DECORATION:
            return (0, n.jsx)(F, { item: l });
        case r.R.PROFILE_EFFECT:
            return (0, n.jsx)(U, { item: l });
        case r.R.NAMEPLATE:
            return (0, n.jsx)(z, { item: l });
        case r.R.PROFILE_FRAME:
            return (0, n.jsx)(H, { item: l });
        default:
            return null != e.giftStyle
                ? (0, n.jsx)(v.A, {
                      defaultAnimationState: E.oA.ACTION,
                      idleAnimationState: E.oA.LOOP,
                      className: M.l$,
                      giftStyle: e.giftStyle,
                  })
                : null;
    }
};
var q = i(61750),
    K = i(21161),
    W = i(915089),
    $ = i(769015),
    Q = i(976860),
    Y = i(871123),
    J = i(192308),
    X = i(174459),
    Z = i(188275),
    tt = i(652215);
let te = "social-layer-storefront-gift-code-claim-modal";
var ti = i(946261),
    tn = i(209932),
    ts = i(30793),
    tl = i(189081),
    ta = i(97352),
    tr = i(67480),
    to = i(690521),
    tu = i(45938),
    td = i(615396),
    tc = i(427262),
    tf = i(518926),
    th = i(202541),
    tp = i(758836),
    tm = i(341535),
    tg = i(375708),
    tA = i(368773);
function tx(t) {
    let { openedGift: e } = t,
        { createMultipleConfettiAt: i } = s.useContext(K.x);
    return (
        s.useEffect(() => {
            e && i(window.innerWidth / 2, window.innerHeight / 4);
        }, [i, e]),
        null
    );
}
function ty(t) {
    let { step: e, soundId: i } = t;
    return (
        s.useEffect(() => {
            if (e !== tt.frR.CONFIRM) return;
            let t = tn.A.getSoundById(i);
            (0, ti.playGiftSound)(i, t?.volume ?? 1);
        }, [e, i]),
        null
    );
}
class tR extends s.Component {
    state = {
        error: null,
        accepted: !1,
        opened: !1,
        isCustomGift: !1,
        isCollectiblesGift: !1,
        step: void 0,
        emojiURL: void 0,
    };
    modalRef = s.createRef();
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: n, emojiName: s } = this.props;
        null == t && null != e && x.Ay.fetchApplication(e.applicationId);
        let l = null != i || null != n.giftStyle,
            a = (0, S.hU)(n),
            r = null != s ? to.Ay.getURL(s) : void 0;
        (this.setState({ isCustomGift: l, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics());
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: n, accepted: s, opened: l, isCustomGift: a } = this.state;
        return (0, tu.v3)(t, i, { error: n, accepted: s, accepting: e, opened: l, isCustomGift: a });
    }
    get buttonText() {
        return (0, tu.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: s, collectiblesItemType: l } = this.props;
        if (t && this.step === tt.frR.ERROR) return tg.intl.formatToMarkdownString(tg.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return tg.intl.formatToPlainString(tg.t.xHzRub, {
                    recipientDisplayName: tc.Ay.getName(N.default.getCurrentUser()),
                });
            else {
                let t = N.default.getUser(n.userId),
                    e = tc.Ay.getName(t);
                if (null != l)
                    switch (l) {
                        case r.R.AVATAR_DECORATION:
                            return tg.intl.formatToPlainString(tg.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return tg.intl.formatToPlainString(tg.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return tg.intl.formatToPlainString(tg.t.vFiQlU, { sender: e });
                        case r.R.PROFILE_FRAME:
                            return tg.intl.formatToPlainString(tg.t["UH/EQL"], { sender: e });
                        default:
                            return tg.intl.formatToPlainString(tg.t.U4Ko2y, { sender: e });
                    }
                return s?.interval === th.WT.MONTH && s.intervalCount > 1
                    ? tg.intl.formatToPlainString(tm.default.E7QYGI, { sender: e, intervalCount: s.intervalCount })
                    : tg.intl.formatToPlainString(tg.t["0UR0u4"], {
                          sender: e,
                          timeInterval:
                              s?.interval === th.WT.MONTH ? tg.intl.string(tg.t.FPybU7) : tg.intl.string(tg.t.tfqrhj),
                      });
            }
        return null == this.props.sku ? null : (0, tu.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = N.default.getUser(this.props.giftCode.userId);
        return tg.intl.formatToPlainString(tg.t.DDO4Wz, { sender: tc.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n } = this.props;
        if (null == t) return null;
        let { error: s, accepted: l, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, tu.e_)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: s,
                  accepted: l,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: n,
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: n } = this.state;
        return (0, tu.u1)(t, i, n, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case tt.frR.ERROR:
                return e;
            case tt.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case tt.frR.OPEN:
                return this.handleOpen;
            case tt.frR.CONFIRM:
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
            (await p.Ay.redeemGiftCode({ code: t.code, options: { channelId: e } }),
                this.setState({ accepted: !0 }),
                i?.());
        } catch (t) {
            this.setState({ error: t });
        }
    };
    handleGoToLibrary = () => {
        let { onClose: t, libraryApplication: e } = this.props;
        ((0, Q.pX)(tt.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t());
    };
    getDefaultAnimationStatus = () => (this.step === tt.frR.OPEN ? E.oA.IDLE : E.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== tt.frR.OPEN) return E.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: n, sku: s, analyticsLocations: l } = this.props,
            { isCustomGift: a } = this.state;
        X.default.track(tt.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: a,
            is_custom_message_edited: a && e !== tg.intl.string(tg.t.ZkOo1U),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: n,
            product_line: s?.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                onClose: i,
                giftCode: s,
                headerId: l,
                transitionState: r,
                useReducedMotion: o,
                onComplete: h,
                customGiftMessage: p,
                emojiName: m,
                soundId: g,
            } = this.props,
            A = N.default.getUser(s.userId),
            { isCustomGift: x, isCollectiblesGift: y, accepted: R, opened: S, emojiURL: C } = this.state,
            I = N.default.getCurrentUser(),
            T = this.step === tt.frR.ERROR,
            j = s?.userId != null && null != I && I?.id != null && s.userId === I.id;
        switch (this.step) {
            case tt.frR.ERROR:
                h?.(s, !1);
                break;
            case tt.frR.SUCCESS:
                h?.(s, !0);
        }
        return (0, n.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, n.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: u.rI.SMALL,
                    className: tA.yl,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != s.giftStyle &&
                            !x &&
                            !y &&
                            (0, n.jsx)(v.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: s.giftStyle,
                                className: tA.C9,
                            }),
                        !x && (0, n.jsx)("div", { className: tA.Dv }),
                        !y && (0, n.jsx)(u.s_, { "data-migration-pending": !0, onClick: i, className: tA.b }),
                        (0, n.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: a()({ [tA.Qs]: !x, [tA.Fl]: x }),
                            children: [
                                !y && (null == s.giftStyle || (x && R))
                                    ? (0, n.jsx)($.A, { size: $.M.LARGE, game: t, skuId: s.skuId })
                                    : null,
                                (0, n.jsxs)(d.D, {
                                    id: l,
                                    className: a()({ [tA.Ry]: x && !R, [tA.wx]: !x || R }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: a()({ [tA.Qw]: x }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, n.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(x && !R) &&
                                    (0, n.jsx)(c.E, {
                                        className: tA.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                x &&
                                    !y &&
                                    null != s.giftStyle &&
                                    !R &&
                                    !T &&
                                    (0, n.jsx)(v.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tA.l$,
                                        giftStyle: s.giftStyle,
                                    }),
                                this.state.opened && !T && y && (0, n.jsx)(B, { giftCode: s }),
                                T &&
                                    (0, n.jsx)(c.E, {
                                        className: tA.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                x &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !T &&
                                    null != p &&
                                    "" !== p &&
                                    !j &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(d.D, {
                                                id: l,
                                                variant: "heading-md/semibold",
                                                children: tg.intl.format(tg.t.DDO4Wz, { sender: tc.Ay.getName(A) }),
                                            }),
                                            (0, n.jsx)(c.E, {
                                                className: tA.$B,
                                                variant: "text-md/semibold",
                                                children: p,
                                            }),
                                        ],
                                    }),
                                (0, n.jsx)(f.$, {
                                    variant: "primary",
                                    text: this.buttonText,
                                    loading: e,
                                    onClick: () => {
                                        (this.trackStepAnalytics(), this.handleClick());
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                null != s.giftStyle &&
                    !o &&
                    this.step !== tt.frR.ERROR &&
                    !R &&
                    !e &&
                    S &&
                    (null == m || null == C
                        ? (0, n.jsx)(tx, { openedGift: !0 })
                        : (0, n.jsx)(tf.A, { confettiTarget: this.modalRef.current, emojiURL: C })),
                !R && !e && S && null != g && (0, n.jsx)(ty, { soundId: g, step: this.step }),
            ],
        });
    }
}
let tS = o.Ay.connectStores([tl.A, tr.A, y.A, ts.A, ta.A, m.Ay, R.A], (t) => {
        let { giftCode: e } = t,
            i = tr.A.get(e.skuId),
            n = null != i ? y.A.getApplication(i.applicationId) : null,
            s = m.Ay.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, tu.YI)(e.entitlementBranches, i, tl.A) : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, td.c9)(e.subscriptionPlanId) : null,
            accepting: ts.A.getIsAccepting(e.code),
            useReducedMotion: s,
        };
    })(function (t) {
        let e = (0, h.k)(),
            {
                sku: l,
                giftCode: a,
                channelContext: r,
                customGiftMessage: o,
                onClose: u,
                analyticsLocations: d,
                emojiName: c,
                soundId: f,
            } = t,
            p = null != l && (0, Y.bF)(l);
        return (s.useEffect(() => {
            if (p) {
                (((t) => {
                    let {
                            sku: e,
                            giftCode: s,
                            channelContext: l,
                            customGiftMessage: a,
                            analyticsLocations: r,
                            emojiName: o,
                            soundId: u,
                            contextKey: d,
                        } = t,
                        c = d ?? (0, J.getInteractingModalContext)(),
                        f = !1;
                    function h(t) {
                        f = t.shouldIgnoreCloseRequest;
                    }
                    (0, J.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                i.e("286615"),
                                i.e("728809"),
                                i.e("678157"),
                                i.e("572963"),
                                i.e("538513"),
                                i.e("361684"),
                                i.e("494544"),
                            ]).then(i.bind(i, 173971));
                            return (i) =>
                                (0, n.jsx)(t, {
                                    ...i,
                                    sku: e,
                                    giftCode: s,
                                    channelContext: l,
                                    customGiftMessage: a,
                                    analyticsLocations: r,
                                    emojiName: o,
                                    soundId: u,
                                    onSetIgnoreCloseRequest: h,
                                });
                        },
                        {
                            modalKey: te,
                            contextKey: c,
                            onCloseRequest: () => {
                                f || (0, J.closeModal)(te, c);
                            },
                            onCloseCallback: () => {
                                X.default.track(tt.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                    type: Z.Nu,
                                    sku_id: e.id,
                                    application_id: e.applicationId,
                                    location_stack: r ?? [],
                                });
                            },
                        },
                    );
                })({
                    sku: l,
                    giftCode: a,
                    channelContext: r,
                    customGiftMessage: o,
                    analyticsLocations: d,
                    emojiName: c,
                    soundId: f,
                    contextKey: e,
                }),
                    u());
                return;
            }
        }, [l, p, r, o, a, u, d, c, f, e]),
        p)
            ? null
            : (0, n.jsx)(tR, { ...t });
    }),
    tC = function (t) {
        let { channelContext: e, code: i, customGiftMessage: s, emojiName: l, soundId: a, onClose: r, ...u } = t,
            d = (0, W.GV)(),
            c = (0, o.bG)([ts.A], () => ts.A.get(i)),
            { analyticsLocations: f } = (0, A.Ay)(g.A.GIFT_CODE_MODAL),
            { product: h } = (0, C.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, n.jsx)(tS, {
                  ...u,
                  customGiftMessage: s,
                  channelContext: e,
                  giftCode: c,
                  headerId: d,
                  emojiName: l,
                  soundId: a,
                  analyticsLocations: f,
                  onClose: r,
                  collectiblesItemType: (0, S.oj)(h),
                  onAccept:
                      null != h
                          ? () => {
                                (r(), (0, q.A)({ product: h, analyticsLocations: f, purchaseType: tp.gs.GIFT }));
                            }
                          : void 0,
              });
    };
