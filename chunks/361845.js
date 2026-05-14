i.d(e, { default: () => ty });
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(575593),
    o = i(17928),
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
    C = i(778712),
    I = i(97808),
    j = i(289873),
    T = i(242874),
    E = i(75825),
    N = i(287809),
    _ = i(562819),
    O = i(963977),
    v = i(344346),
    b = i(139136),
    L = i(395744),
    P = i(245068),
    k = i(971144);
let w = C._3.SIZE_152,
    M = (0, _.Te)(w),
    G = (t) => {
        let { responsive: e } = t;
        return !0 !== e;
    },
    D = (t) => {
        let { item: e } = t,
            i = (0, o.bG)([N.default], () => N.default.getCurrentUser()),
            {
                avatarDecorationSrc: l,
                avatarPlaceholderSrc: n,
                eventHandlers: a,
            } = (0, O.A)({ user: i, avatarDecorationOverride: e, size: M });
        return (0, s.jsx)("div", {
            className: k._P,
            children: (0, s.jsx)(I.eu, { ...a, "aria-label": e.label, src: n, avatarDecoration: l, size: w }),
        });
    },
    F = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: k.xC,
            children: (0, s.jsx)(b.A, { isHighlighted: !0, skuId: e?.skuId }),
        });
    },
    U = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", { className: k.pI, children: (0, s.jsx)(L.A, { frame: e, filterLayer: G }) });
    },
    H = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: k.M4,
            children: (0, s.jsx)(v.A, {
                nameplate: e,
                className: k.qF,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    z = (t) => {
        let { product: e } = t;
        return (0, s.jsx)("div", { className: k.hT, children: (0, s.jsx)(P.X, { product: e, isHighlighted: !1 }) });
    },
    V = (t) => {
        let { giftCode: e } = t,
            { product: i, isFetching: l } = (0, S.q)(e.skuId, !0);
        if (l || null == i) return (0, s.jsx)("div", { className: k.dc, children: (0, s.jsx)(j.y, {}) });
        if (i.type === r.R.BUNDLE) return 0 === i.items.length ? null : (0, s.jsx)(z, { product: i });
        let n = i?.items[0];
        switch (n?.type) {
            case r.R.AVATAR_DECORATION:
                return (0, s.jsx)(D, { item: n });
            case r.R.PROFILE_EFFECT:
                return (0, s.jsx)(F, { item: n });
            case r.R.NAMEPLATE:
                return (0, s.jsx)(H, { item: n });
            case r.R.PROFILE_FRAME:
                return (0, s.jsx)(U, { item: n });
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
    $ = i(21161),
    W = i(915089),
    q = i(137177),
    K = i(976860),
    Q = i(871123),
    Y = i(192308),
    J = i(174459),
    X = i(188275),
    Z = i(652215),
    tt = i(946261),
    te = i(209932),
    ti = i(30793),
    ts = i(189081),
    tl = i(97352),
    tn = i(67480),
    ta = i(690521),
    tr = i(45938),
    to = i(615396),
    tu = i(427262),
    td = i(518926),
    tc = i(788868),
    tp = i(758836),
    th = i(375708),
    tf = i(886898);
let tm = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = l.useContext($.x);
        return (
            l.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    tg = (t) => {
        let { step: e, soundId: i } = t;
        return (
            l.useEffect(() => {
                if (e !== Z.frR.CONFIRM) return;
                let t = te.A.getSoundById(i);
                (0, tt.playGiftSound)(i, t?.volume ?? 1);
            }, [e, i]),
            null
        );
    };
class tA extends l.Component {
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
            r = null != l ? ta.Ay.getURL(l) : void 0;
        this.setState({ isCustomGift: n, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: l, opened: n, isCustomGift: a } = this.state;
        return (0, tr.v3)(t, i, { error: s, accepted: l, accepting: e, opened: n, isCustomGift: a });
    }
    get buttonText() {
        return (0, tr.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: l, collectiblesItemType: n } = this.props;
        if (t && this.step === Z.frR.ERROR) return th.intl.formatToMarkdownString(th.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return th.intl.formatToPlainString(th.t.xHzRub, {
                    recipientDisplayName: tu.Ay.getName(N.default.getCurrentUser()),
                });
            else {
                let t = N.default.getUser(s.userId),
                    e = tu.Ay.getName(t);
                if (null != n)
                    switch (n) {
                        case r.R.AVATAR_DECORATION:
                            return th.intl.formatToPlainString(th.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return th.intl.formatToPlainString(th.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return th.intl.formatToPlainString(th.t.vFiQlU, { sender: e });
                        case r.R.PROFILE_FRAME:
                            return th.intl.formatToPlainString(th.t["UH/EQL"], { sender: e });
                        default:
                            return th.intl.formatToPlainString(th.t.U4Ko2y, { sender: e });
                    }
                return th.intl.formatToPlainString(th.t["0UR0u4"], {
                    sender: e,
                    timeInterval:
                        l?.interval === tc.WT.MONTH ? th.intl.string(th.t.FPybU7) : th.intl.string(th.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, tr.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = N.default.getUser(this.props.giftCode.userId);
        return th.intl.formatToPlainString(th.t.DDO4Wz, { sender: tu.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: l, accepted: n, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, tr.e_)({
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
        return (0, tr.u1)(t, i, s, e, this.handleGoToLibrary);
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
            await h.A.redeemGiftCode({ code: t.code, options: { channelId: e } }),
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
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s, sku: l, analyticsLocations: n } = this.props,
            { isCustomGift: a } = this.state;
        J.default.track(Z.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: n,
            has_custom_message: a,
            is_custom_message_edited: a && e !== th.intl.string(th.t.ZkOo1U),
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
            A = N.default.getUser(l.userId),
            { isCustomGift: x, isCollectiblesGift: y, accepted: R, opened: S, emojiURL: C } = this.state,
            I = N.default.getCurrentUser(),
            j = this.step === Z.frR.ERROR,
            T = l?.userId != null && null != I && I?.id != null && l.userId === I.id;
        switch (this.step) {
            case Z.frR.ERROR:
                h?.(l, !1);
                break;
            case Z.frR.SUCCESS:
                h?.(l, !0);
        }
        return (0, s.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: u.rI.SMALL,
                    className: tf.yl,
                    "aria-labelledby": n,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != l.giftStyle &&
                            !x &&
                            !y &&
                            (0, s.jsx)(E.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: l.giftStyle,
                                className: tf.C9,
                            }),
                        !x && (0, s.jsx)("div", { className: tf.Dv }),
                        !y && (0, s.jsx)(u.s_, { "data-migration-pending": !0, onClick: i, className: tf.b }),
                        (0, s.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: a()({ [tf.Qs]: !x, [tf.Fl]: x }),
                            children: [
                                !y && (null == l.giftStyle || (x && R))
                                    ? (0, s.jsx)(q.A, { size: q.M.LARGE, game: t, skuId: l.skuId })
                                    : null,
                                (0, s.jsxs)(d.D, {
                                    id: n,
                                    className: a()({ [tf.Ry]: x && !R, [tf.wx]: !x || R }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: a()({ [tf.Qw]: x }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, s.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(x && !R) &&
                                    (0, s.jsx)(c.E, {
                                        className: tf.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                x &&
                                    !y &&
                                    null != l.giftStyle &&
                                    !R &&
                                    !j &&
                                    (0, s.jsx)(E.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tf.l$,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !j && y && (0, s.jsx)(V, { giftCode: l }),
                                j &&
                                    (0, s.jsx)(c.E, {
                                        className: tf.rf,
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
                                                id: n,
                                                variant: "heading-md/semibold",
                                                children: th.intl.format(th.t.DDO4Wz, { sender: tu.Ay.getName(A) }),
                                            }),
                                            (0, s.jsx)(c.E, {
                                                className: tf.$B,
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
                    this.step !== Z.frR.ERROR &&
                    !R &&
                    !e &&
                    S &&
                    (null == m || null == C
                        ? (0, s.jsx)(tm, { openedGift: !0 })
                        : (0, s.jsx)(td.A, { confettiTarget: this.modalRef.current, emojiURL: C })),
                !R && !e && S && null != g && (0, s.jsx)(tg, { soundId: g, step: this.step }),
            ],
        });
    }
}
let tx = o.Ay.connectStores([ts.A, tn.A, x.A, ti.A, tl.A, f.A, y.A], (t) => {
        let { giftCode: e } = t,
            i = tn.A.get(e.skuId),
            s = null != i ? x.A.getApplication(i.applicationId) : null,
            l = f.A.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, tr.YI)(e.entitlementBranches, i, ts.A) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, to.c9)(e.subscriptionPlanId) : null,
            accepting: ti.A.getIsAccepting(e.code),
            useReducedMotion: l,
        };
    })((t) => {
        let {
                sku: e,
                giftCode: n,
                channelContext: a,
                customGiftMessage: r,
                onClose: o,
                analyticsLocations: u,
                emojiName: d,
                soundId: c,
            } = t,
            p = null != e && (0, Q.bF)(e);
        return (l.useEffect(() => {
            if (p) {
                ((t) => {
                    let {
                        sku: e,
                        giftCode: l,
                        channelContext: n,
                        customGiftMessage: a,
                        analyticsLocations: r,
                        emojiName: o,
                        soundId: u,
                    } = t;
                    (0, Y.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                i.e("24059"),
                                i.e("90860"),
                                i.e("60658"),
                                i.e("1368"),
                                i.e("5636"),
                                i.e("20310"),
                                i.e("94544"),
                            ]).then(i.bind(i, 173971));
                            return (i) =>
                                (0, s.jsx)(t, {
                                    ...i,
                                    sku: e,
                                    giftCode: l,
                                    channelContext: n,
                                    customGiftMessage: a,
                                    analyticsLocations: r,
                                    emojiName: o,
                                    soundId: u,
                                });
                        },
                        {
                            modalKey: "social-layer-storefront-gift-code-claim-modal",
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
                    giftCode: n,
                    channelContext: a,
                    customGiftMessage: r,
                    analyticsLocations: u,
                    emojiName: d,
                    soundId: c,
                }),
                    o();
                return;
            }
        }, [e, p, a, r, n, o, u, d, c]),
        p)
            ? null
            : (0, s.jsx)(tA, { ...t });
    }),
    ty = (t) => {
        let { channelContext: e, code: i, customGiftMessage: l, emojiName: n, soundId: a, onClose: r, ...u } = t,
            d = (0, W.GV)(),
            c = (0, o.bG)([ti.A], () => ti.A.get(i)),
            { analyticsLocations: p } = (0, g.Ay)(m.A.GIFT_CODE_MODAL),
            { product: h } = (0, S.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, s.jsx)(tx, {
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
                                r(), (0, B.A)({ product: h, analyticsLocations: p, purchaseType: tp.gs.GIFT });
                            }
                          : void 0,
              });
    };
