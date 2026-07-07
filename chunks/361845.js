i.d(e, { default: () => tR });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(575593),
    o = i(17928),
    u = i(935462),
    d = i(534514),
    c = i(834730),
    h = i(821609),
    p = i(869038),
    f = i(775602),
    m = i(793574),
    g = i(688810),
    A = i(627363),
    x = i(587895),
    y = i(590180),
    R = i(993408),
    S = i(674658),
    C = i(778712),
    I = i(97808),
    j = i(289873),
    T = i(242874),
    E = i(75825),
    N = i(287809),
    _ = i(562819),
    v = i(963977),
    O = i(344346),
    b = i(139136),
    L = i(395744),
    P = i(245068),
    k = i(971144);
let M = C._3.SIZE_152,
    w = (0, _.Te)(M);
function G(t) {
    let { responsive: e } = t;
    return !0 !== e;
}
let D = (t) => {
    let { item: e } = t,
        i = (0, o.bG)([N.default], () => N.default.getCurrentUser()),
        {
            avatarDecorationSrc: n,
            avatarPlaceholderSrc: l,
            eventHandlers: a,
        } = (0, v.A)({ user: i, avatarDecorationOverride: e, size: w });
    return (0, s.jsx)("div", {
        className: k._P,
        children: (0, s.jsx)(I.eu, { ...a, "aria-label": e.label, src: l, avatarDecoration: n, size: M }),
    });
};
function F(t) {
    let { item: e } = t;
    return (0, s.jsx)("div", { className: k.xC, children: (0, s.jsx)(b.A, { isHighlighted: !0, skuId: e?.skuId }) });
}
function U(t) {
    let { item: e } = t;
    return (0, s.jsx)("div", { className: k.pI, children: (0, s.jsx)(L.A, { frame: e, filterLayer: G }) });
}
function H(t) {
    let { item: e } = t;
    return (0, s.jsx)("div", {
        className: k.M4,
        children: (0, s.jsx)(O.A, {
            nameplate: e,
            className: k.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
function z(t) {
    let { product: e } = t;
    return (0, s.jsx)("div", { className: k.hT, children: (0, s.jsx)(P.X, { product: e, isHighlighted: !1 }) });
}
let V = function (t) {
    let { giftCode: e } = t,
        { product: i, isFetching: n } = (0, S.q)(e.skuId, !0);
    if (n || null == i) return (0, s.jsx)("div", { className: k.dc, children: (0, s.jsx)(j.y, {}) });
    if (i.type === r.R.BUNDLE) return 0 === i.items.length ? null : (0, s.jsx)(z, { product: i });
    let l = i?.items[0];
    switch (l?.type) {
        case r.R.AVATAR_DECORATION:
            return (0, s.jsx)(D, { item: l });
        case r.R.PROFILE_EFFECT:
            return (0, s.jsx)(F, { item: l });
        case r.R.NAMEPLATE:
            return (0, s.jsx)(H, { item: l });
        case r.R.PROFILE_FRAME:
            return (0, s.jsx)(U, { item: l });
        default:
            return null != e.giftStyle
                ? (0, s.jsx)(E.A, {
                      defaultAnimationState: T.oA.ACTION,
                      idleAnimationState: T.oA.LOOP,
                      className: k.l$,
                      giftStyle: e.giftStyle,
                  })
                : null;
    }
};
var B = i(61750),
    q = i(21161),
    $ = i(915089),
    W = i(769015),
    K = i(976860),
    Q = i(871123),
    Y = i(192308),
    J = i(174459),
    X = i(188275),
    Z = i(652215);
let tt = "social-layer-storefront-gift-code-claim-modal";
var te = i(946261),
    ti = i(209932),
    ts = i(30793),
    tn = i(189081),
    tl = i(97352),
    ta = i(67480),
    tr = i(690521),
    to = i(45938),
    tu = i(615396),
    td = i(427262),
    tc = i(518926),
    th = i(202541),
    tp = i(758836),
    tf = i(375708),
    tm = i(886898);
function tg(t) {
    let { openedGift: e } = t,
        { createMultipleConfettiAt: i } = n.useContext(q.x);
    return (
        n.useEffect(() => {
            e && i(window.innerWidth / 2, window.innerHeight / 4);
        }, [i, e]),
        null
    );
}
function tA(t) {
    let { step: e, soundId: i } = t;
    return (
        n.useEffect(() => {
            if (e !== Z.frR.CONFIRM) return;
            let t = ti.A.getSoundById(i);
            (0, te.playGiftSound)(i, t?.volume ?? 1);
        }, [e, i]),
        null
    );
}
class tx extends n.Component {
    state = {
        error: null,
        accepted: !1,
        opened: !1,
        isCustomGift: !1,
        isCollectiblesGift: !1,
        step: void 0,
        emojiURL: void 0,
    };
    modalRef = n.createRef();
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: s, emojiName: n } = this.props;
        null == t && null != e && A.Ay.fetchApplication(e.applicationId);
        let l = null != i || null != s.giftStyle,
            a = (0, R.hU)(s),
            r = null != n ? tr.Ay.getURL(n) : void 0;
        this.setState({ isCustomGift: l, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: n, opened: l, isCustomGift: a } = this.state;
        return (0, to.v3)(t, i, { error: s, accepted: n, accepting: e, opened: l, isCustomGift: a });
    }
    get buttonText() {
        return (0, to.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: n, collectiblesItemType: l } = this.props;
        if (t && this.step === Z.frR.ERROR) return tf.intl.formatToMarkdownString(tf.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return tf.intl.formatToPlainString(tf.t.xHzRub, {
                    recipientDisplayName: td.Ay.getName(N.default.getCurrentUser()),
                });
            else {
                let t = N.default.getUser(s.userId),
                    e = td.Ay.getName(t);
                if (null != l)
                    switch (l) {
                        case r.R.AVATAR_DECORATION:
                            return tf.intl.formatToPlainString(tf.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return tf.intl.formatToPlainString(tf.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return tf.intl.formatToPlainString(tf.t.vFiQlU, { sender: e });
                        case r.R.PROFILE_FRAME:
                            return tf.intl.formatToPlainString(tf.t["UH/EQL"], { sender: e });
                        default:
                            return tf.intl.formatToPlainString(tf.t.U4Ko2y, { sender: e });
                    }
                return tf.intl.formatToPlainString(tf.t["0UR0u4"], {
                    sender: e,
                    timeInterval:
                        n?.interval === th.WT.MONTH ? tf.intl.string(tf.t.FPybU7) : tf.intl.string(tf.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, to.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = N.default.getUser(this.props.giftCode.userId);
        return tf.intl.formatToPlainString(tf.t.DDO4Wz, { sender: td.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: n, accepted: l, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, to.e_)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: n,
                  accepted: l,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: s,
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: s } = this.state;
        return (0, to.u1)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case Z.frR.ERROR:
                return e;
            case Z.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case Z.frR.OPEN:
                return this.handleOpen;
            case Z.frR.CONFIRM:
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
            await p.A.redeemGiftCode({ code: t.code, options: { channelId: e } }),
                this.setState({ accepted: !0 }),
                i?.();
        } catch (t) {
            this.setState({ error: t });
        }
    };
    handleGoToLibrary = () => {
        let { onClose: t, libraryApplication: e } = this.props;
        (0, K.pX)(Z.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
    };
    getDefaultAnimationStatus = () => (this.step === Z.frR.OPEN ? T.oA.IDLE : T.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== Z.frR.OPEN) return T.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s, sku: n, analyticsLocations: l } = this.props,
            { isCustomGift: a } = this.state;
        J.default.track(Z.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: a,
            is_custom_message_edited: a && e !== tf.intl.string(tf.t.ZkOo1U),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: s,
            product_line: n?.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                onClose: i,
                giftCode: n,
                headerId: l,
                transitionState: r,
                useReducedMotion: o,
                onComplete: p,
                customGiftMessage: f,
                emojiName: m,
                soundId: g,
            } = this.props,
            A = N.default.getUser(n.userId),
            { isCustomGift: x, isCollectiblesGift: y, accepted: R, opened: S, emojiURL: C } = this.state,
            I = N.default.getCurrentUser(),
            j = this.step === Z.frR.ERROR,
            T = n?.userId != null && null != I && I?.id != null && n.userId === I.id;
        switch (this.step) {
            case Z.frR.ERROR:
                p?.(n, !1);
                break;
            case Z.frR.SUCCESS:
                p?.(n, !0);
        }
        return (0, s.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: u.rI.SMALL,
                    className: tm.yl,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != n.giftStyle &&
                            !x &&
                            !y &&
                            (0, s.jsx)(E.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: tm.C9,
                            }),
                        !x && (0, s.jsx)("div", { className: tm.Dv }),
                        !y && (0, s.jsx)(u.s_, { "data-migration-pending": !0, onClick: i, className: tm.b }),
                        (0, s.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: a()({ [tm.Qs]: !x, [tm.Fl]: x }),
                            children: [
                                !y && (null == n.giftStyle || (x && R))
                                    ? (0, s.jsx)(W.A, { size: W.M.LARGE, game: t, skuId: n.skuId })
                                    : null,
                                (0, s.jsxs)(d.D, {
                                    id: l,
                                    className: a()({ [tm.Ry]: x && !R, [tm.wx]: !x || R }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: a()({ [tm.Qw]: x }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, s.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(x && !R) &&
                                    (0, s.jsx)(c.E, {
                                        className: tm.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                x &&
                                    !y &&
                                    null != n.giftStyle &&
                                    !R &&
                                    !j &&
                                    (0, s.jsx)(E.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tm.l$,
                                        giftStyle: n.giftStyle,
                                    }),
                                this.state.opened && !j && y && (0, s.jsx)(V, { giftCode: n }),
                                j &&
                                    (0, s.jsx)(c.E, {
                                        className: tm.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                x &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !j &&
                                    null != f &&
                                    "" !== f &&
                                    !T &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(d.D, {
                                                id: l,
                                                variant: "heading-md/semibold",
                                                children: tf.intl.format(tf.t.DDO4Wz, { sender: td.Ay.getName(A) }),
                                            }),
                                            (0, s.jsx)(c.E, {
                                                className: tm.$B,
                                                variant: "text-md/semibold",
                                                children: f,
                                            }),
                                        ],
                                    }),
                                (0, s.jsx)(h.$, {
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
                null != n.giftStyle &&
                    !o &&
                    this.step !== Z.frR.ERROR &&
                    !R &&
                    !e &&
                    S &&
                    (null == m || null == C
                        ? (0, s.jsx)(tg, { openedGift: !0 })
                        : (0, s.jsx)(tc.A, { confettiTarget: this.modalRef.current, emojiURL: C })),
                !R && !e && S && null != g && (0, s.jsx)(tA, { soundId: g, step: this.step }),
            ],
        });
    }
}
let ty = o.Ay.connectStores([tn.A, ta.A, x.A, ts.A, tl.A, f.Ay, y.A], (t) => {
        let { giftCode: e } = t,
            i = ta.A.get(e.skuId),
            s = null != i ? x.A.getApplication(i.applicationId) : null,
            n = f.Ay.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, to.YI)(e.entitlementBranches, i, tn.A) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, tu.c9)(e.subscriptionPlanId) : null,
            accepting: ts.A.getIsAccepting(e.code),
            useReducedMotion: n,
        };
    })(function (t) {
        let {
                sku: e,
                giftCode: l,
                channelContext: a,
                customGiftMessage: r,
                onClose: o,
                analyticsLocations: u,
                emojiName: d,
                soundId: c,
            } = t,
            h = null != e && (0, Q.bF)(e);
        return (n.useEffect(() => {
            if (h) {
                ((t) => {
                    let {
                            sku: e,
                            giftCode: n,
                            channelContext: l,
                            customGiftMessage: a,
                            analyticsLocations: r,
                            emojiName: o,
                            soundId: u,
                        } = t,
                        d = !1,
                        c = (t) => {
                            d = t.shouldIgnoreCloseRequest;
                        };
                    (0, Y.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                i.e("24059"),
                                i.e("90860"),
                                i.e("42842"),
                                i.e("72963"),
                                i.e("5636"),
                                i.e("61684"),
                                i.e("94544"),
                            ]).then(i.bind(i, 173971));
                            return (i) =>
                                (0, s.jsx)(t, {
                                    ...i,
                                    sku: e,
                                    giftCode: n,
                                    channelContext: l,
                                    customGiftMessage: a,
                                    analyticsLocations: r,
                                    emojiName: o,
                                    soundId: u,
                                    onSetIgnoreCloseRequest: c,
                                });
                        },
                        {
                            modalKey: tt,
                            onCloseRequest: () => {
                                d || (0, Y.closeModal)(tt);
                            },
                            onCloseCallback: () => {
                                J.default.track(Z.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                    type: X.Nu,
                                    sku_id: e.id,
                                    application_id: e.applicationId,
                                    location_stack: r ?? [],
                                });
                            },
                        },
                    );
                })({
                    sku: e,
                    giftCode: l,
                    channelContext: a,
                    customGiftMessage: r,
                    analyticsLocations: u,
                    emojiName: d,
                    soundId: c,
                }),
                    o();
                return;
            }
        }, [e, h, a, r, l, o, u, d, c]),
        h)
            ? null
            : (0, s.jsx)(tx, { ...t });
    }),
    tR = function (t) {
        let { channelContext: e, code: i, customGiftMessage: n, emojiName: l, soundId: a, onClose: r, ...u } = t,
            d = (0, $.GV)(),
            c = (0, o.bG)([ts.A], () => ts.A.get(i)),
            { analyticsLocations: h } = (0, g.Ay)(m.A.GIFT_CODE_MODAL),
            { product: p } = (0, S.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, s.jsx)(ty, {
                  ...u,
                  customGiftMessage: n,
                  channelContext: e,
                  giftCode: c,
                  headerId: d,
                  emojiName: l,
                  soundId: a,
                  analyticsLocations: h,
                  onClose: r,
                  collectiblesItemType: (0, R.oj)(p),
                  onAccept:
                      null != p
                          ? () => {
                                r(), (0, B.A)({ product: p, analyticsLocations: h, purchaseType: tp.gs.GIFT });
                            }
                          : void 0,
              });
    };
