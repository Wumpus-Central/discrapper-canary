i.d(e, { default: () => tA });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(575593),
    u = i(17928),
    o = i(935462),
    d = i(534514),
    c = i(834730),
    f = i(821609),
    p = i(869038),
    h = i(775602),
    m = i(793574),
    g = i(688810),
    A = i(627363),
    y = i(587895),
    x = i(590180),
    S = i(993408),
    R = i(674658),
    E = i(778712),
    I = i(97808),
    T = i(289873),
    C = i(242874),
    O = i(165191),
    N = i(287809),
    _ = i(562819),
    j = i(963977),
    P = i(344346),
    b = i(139136),
    M = i(245068),
    v = i(971144);
let k = E._3.SIZE_152,
    L = (0, _.Te)(k),
    w = (t) => {
        let { item: e } = t,
            i = (0, u.bG)([N.default], () => N.default.getCurrentUser()),
            {
                avatarDecorationSrc: l,
                avatarPlaceholderSrc: s,
                eventHandlers: r,
            } = (0, j.A)({ user: i, avatarDecorationOverride: e, size: L });
        return (0, n.jsx)("div", {
            className: v._P,
            children: (0, n.jsx)(I.eu, { ...r, "aria-label": e.label, src: s, avatarDecoration: l, size: k }),
        });
    },
    U = (t) => {
        let { item: e } = t;
        return (0, n.jsx)("div", {
            className: v.xC,
            children: (0, n.jsx)(b.A, { isHighlighted: !0, skuId: e?.skuId }),
        });
    },
    D = (t) => {
        let { item: e } = t;
        return (0, n.jsx)("div", {
            className: v.M4,
            children: (0, n.jsx)(P.A, {
                nameplate: e,
                className: v.qF,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    G = (t) => {
        let { product: e } = t;
        return (0, n.jsx)("div", { className: v.hT, children: (0, n.jsx)(M.X, { product: e, isHighlighted: !1 }) });
    },
    F = (t) => {
        let { giftCode: e } = t;
        return null == e.giftStyle
            ? null
            : (0, n.jsx)(O.A, {
                  defaultAnimationState: C.oA.ACTION,
                  idleAnimationState: C.oA.LOOP,
                  className: v.l$,
                  giftStyle: e.giftStyle,
              });
    },
    H = (t) => {
        let { giftCode: e } = t,
            { product: i, isFetching: l } = (0, R.q)(e.skuId, !0);
        if (l || null == i) return (0, n.jsx)("div", { className: v.dc, children: (0, n.jsx)(T.y, {}) });
        if (i.type === a.R.BUNDLE) return 0 === i.items.length ? null : (0, n.jsx)(G, { product: i });
        let s = i?.items[0];
        switch (s?.type) {
            case a.R.AVATAR_DECORATION:
                return (0, n.jsx)(w, { item: s });
            case a.R.PROFILE_EFFECT:
                return (0, n.jsx)(U, { item: s });
            case a.R.NAMEPLATE:
                return (0, n.jsx)(D, { item: s });
            case a.R.PROFILE_FRAME:
                return (0, n.jsx)(F, { giftCode: e });
            default:
                return null != e.giftStyle
                    ? (0, n.jsx)(O.A, {
                          defaultAnimationState: C.oA.ACTION,
                          idleAnimationState: C.oA.LOOP,
                          className: v.l$,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
var V = i(61750),
    z = i(21161),
    B = i(915089),
    $ = i(137177),
    K = i(976860),
    W = i(871123),
    q = i(192308),
    Y = i(954571),
    Q = i(188275),
    Z = i(652215),
    J = i(946261),
    X = i(209932),
    tt = i(30793),
    te = i(189081),
    ti = i(97352),
    tn = i(67480),
    tl = i(690521),
    ts = i(45938),
    tr = i(615396),
    ta = i(427262),
    tu = i(518926),
    to = i(788868),
    td = i(758836),
    tc = i(985018),
    tf = i(886898);
let tp = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = l.useContext(z.x);
        return (
            l.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    th = (t) => {
        let { step: e, soundId: i } = t;
        return (
            l.useEffect(() => {
                if (e !== Z.frR.CONFIRM) return;
                let t = X.A.getSoundById(i);
                (0, J.playGiftSound)(i, t?.volume ?? 1);
            }, [e, i]),
            null
        );
    };
class tm extends l.Component {
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
        let { application: t, sku: e, customGiftMessage: i, giftCode: n, emojiName: l } = this.props;
        null == t && null != e && A.Ay.fetchApplication(e.applicationId);
        let s = null != i || null != n.giftStyle,
            r = (0, S.hU)(n),
            a = null != l ? tl.Ay.getURL(l) : void 0;
        this.setState({ isCustomGift: s, isCollectiblesGift: r, emojiURL: a, opened: r }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: n, accepted: l, opened: s, isCustomGift: r } = this.state;
        return (0, ts.v3)(t, i, { error: n, accepted: l, accepting: e, opened: s, isCustomGift: r });
    }
    get buttonText() {
        return (0, ts.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: l, collectiblesItemType: s } = this.props;
        if (t && this.step === Z.frR.ERROR) return tc.intl.formatToMarkdownString(tc.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return tc.intl.formatToPlainString(tc.t.xHzRub, {
                    recipientDisplayName: ta.Ay.getName(N.default.getCurrentUser()),
                });
            else {
                let t = N.default.getUser(n.userId),
                    e = ta.Ay.getName(t);
                if (null != s)
                    switch (s) {
                        case a.R.AVATAR_DECORATION:
                            return tc.intl.formatToPlainString(tc.t.SKduyh, { sender: e });
                        case a.R.PROFILE_EFFECT:
                            return tc.intl.formatToPlainString(tc.t["1w42T2"], { sender: e });
                        case a.R.NAMEPLATE:
                            return tc.intl.formatToPlainString(tc.t.vFiQlU, { sender: e });
                        case a.R.PROFILE_FRAME:
                            return tc.intl.formatToPlainString(tc.t["UH/EQL"], { sender: e });
                        default:
                            return tc.intl.formatToPlainString(tc.t.U4Ko2y, { sender: e });
                    }
                return tc.intl.formatToPlainString(tc.t["0UR0u4"], {
                    sender: e,
                    timeInterval:
                        l?.interval === to.WT.MONTH ? tc.intl.string(tc.t.FPybU7) : tc.intl.string(tc.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, ts.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = N.default.getUser(this.props.giftCode.userId);
        return tc.intl.formatToPlainString(tc.t.DDO4Wz, { sender: ta.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n } = this.props;
        if (null == t) return null;
        let { error: l, accepted: s, isCustomGift: r, opened: a } = this.state;
        return !a && r
            ? null
            : (0, ts.e_)({
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
        return (0, ts.u1)(t, i, n, e, this.handleGoToLibrary);
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
    getDefaultAnimationStatus = () => (this.step === Z.frR.OPEN ? C.oA.IDLE : C.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== Z.frR.OPEN) return C.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: n, sku: l, analyticsLocations: s } = this.props,
            { isCustomGift: r } = this.state;
        Y.default.track(Z.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: s,
            has_custom_message: r,
            is_custom_message_edited: r && e !== tc.intl.string(tc.t.ZkOo1U),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: n,
            product_line: l?.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                onClose: i,
                giftCode: l,
                headerId: s,
                transitionState: a,
                useReducedMotion: u,
                onComplete: p,
                customGiftMessage: h,
                emojiName: m,
                soundId: g,
            } = this.props,
            A = N.default.getUser(l.userId),
            { isCustomGift: y, isCollectiblesGift: x, accepted: S, opened: R, emojiURL: E } = this.state,
            I = N.default.getCurrentUser(),
            T = this.step === Z.frR.ERROR,
            C = l?.userId != null && null != I && I?.id != null && l.userId === I.id;
        switch (this.step) {
            case Z.frR.ERROR:
                p?.(l, !1);
                break;
            case Z.frR.SUCCESS:
                p?.(l, !0);
        }
        return (0, n.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, n.jsxs)(o.EO, {
                    "data-migration-pending": !0,
                    transitionState: a,
                    size: o.rI.SMALL,
                    className: tf.yl,
                    "aria-labelledby": s,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != l.giftStyle &&
                            !y &&
                            !x &&
                            (0, n.jsx)(O.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: l.giftStyle,
                                className: tf.C9,
                            }),
                        !y && (0, n.jsx)("div", { className: tf.Dv }),
                        !x && (0, n.jsx)(o.s_, { "data-migration-pending": !0, onClick: i, className: tf.b }),
                        (0, n.jsxs)(o.$m, {
                            "data-migration-pending": !0,
                            className: r()({ [tf.Qs]: !y, [tf.Fl]: y }),
                            children: [
                                !x && (null == l.giftStyle || (y && S))
                                    ? (0, n.jsx)($.A, { size: $.M.LARGE, game: t, skuId: l.skuId })
                                    : null,
                                (0, n.jsxs)(d.D, {
                                    id: s,
                                    className: r()({ [tf.Ry]: y && !S, [tf.wx]: !y || S }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r()({ [tf.Qw]: y }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, n.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(y && !S) &&
                                    (0, n.jsx)(c.E, {
                                        className: tf.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                y &&
                                    !x &&
                                    null != l.giftStyle &&
                                    !S &&
                                    !T &&
                                    (0, n.jsx)(O.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tf.l$,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !T && x && (0, n.jsx)(H, { giftCode: l }),
                                T &&
                                    (0, n.jsx)(c.E, {
                                        className: tf.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                y &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !T &&
                                    null != h &&
                                    "" !== h &&
                                    !C &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(d.D, {
                                                id: s,
                                                variant: "heading-md/semibold",
                                                children: tc.intl.format(tc.t.DDO4Wz, { sender: ta.Ay.getName(A) }),
                                            }),
                                            (0, n.jsx)(c.E, {
                                                className: tf.$B,
                                                variant: "text-md/semibold",
                                                children: h,
                                            }),
                                        ],
                                    }),
                                (0, n.jsx)(f.$, {
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
                    !u &&
                    this.step !== Z.frR.ERROR &&
                    !S &&
                    !e &&
                    R &&
                    (null == m || null == E
                        ? (0, n.jsx)(tp, { openedGift: !0 })
                        : (0, n.jsx)(tu.A, { confettiTarget: this.modalRef.current, emojiURL: E })),
                !S && !e && R && null != g && (0, n.jsx)(th, { soundId: g, step: this.step }),
            ],
        });
    }
}
let tg = u.Ay.connectStores([te.A, tn.A, y.A, tt.A, ti.A, h.A, x.A], (t) => {
        let { giftCode: e } = t,
            i = tn.A.get(e.skuId),
            n = null != i ? y.A.getApplication(i.applicationId) : null,
            l = h.A.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, ts.YI)(e.entitlementBranches, i, te.A) : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, tr.c9)(e.subscriptionPlanId) : null,
            accepting: tt.A.getIsAccepting(e.code),
            useReducedMotion: l,
        };
    })((t) => {
        let {
                sku: e,
                giftCode: s,
                channelContext: r,
                customGiftMessage: a,
                onClose: u,
                analyticsLocations: o,
                emojiName: d,
                soundId: c,
            } = t,
            f = null != e && (0, W.bF)(e);
        return (l.useEffect(() => {
            if (f) {
                ((t) => {
                    let {
                        sku: e,
                        giftCode: l,
                        channelContext: s,
                        customGiftMessage: r,
                        analyticsLocations: a,
                        emojiName: u,
                        soundId: o,
                    } = t;
                    (0, q.openModalLazy)(
                        async () => {
                            let { default: t } = await i.e("94544").then(i.bind(i, 173971));
                            return (i) =>
                                (0, n.jsx)(t, {
                                    ...i,
                                    sku: e,
                                    giftCode: l,
                                    channelContext: s,
                                    customGiftMessage: r,
                                    analyticsLocations: a,
                                    emojiName: u,
                                    soundId: o,
                                });
                        },
                        {
                            modalKey: "social-layer-storefront-gift-code-claim-modal",
                            onCloseCallback: () => {
                                Y.default.track(Z.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                    type: Q.Nu,
                                    sku_id: e.id,
                                    application_id: e.applicationId,
                                    location_stack: a ?? [],
                                });
                            },
                        },
                    );
                })({
                    sku: e,
                    giftCode: s,
                    channelContext: r,
                    customGiftMessage: a,
                    analyticsLocations: o,
                    emojiName: d,
                    soundId: c,
                }),
                    u();
                return;
            }
        }, [e, f, r, a, s, u, o, d, c]),
        f)
            ? null
            : (0, n.jsx)(tm, { ...t });
    }),
    tA = (t) => {
        let { channelContext: e, code: i, customGiftMessage: l, emojiName: s, soundId: r, onClose: a, ...o } = t,
            d = (0, B.GV)(),
            c = (0, u.bG)([tt.A], () => tt.A.get(i)),
            { analyticsLocations: f } = (0, g.Ay)(m.A.GIFT_CODE_MODAL),
            { product: p } = (0, R.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, n.jsx)(tg, {
                  ...o,
                  customGiftMessage: l,
                  channelContext: e,
                  giftCode: c,
                  headerId: d,
                  emojiName: s,
                  soundId: r,
                  analyticsLocations: f,
                  onClose: a,
                  collectiblesItemType: (0, S.oj)(p),
                  onAccept:
                      null != p
                          ? () => {
                                a(), (0, V.A)({ product: p, analyticsLocations: f, purchaseType: td.gs.GIFT });
                            }
                          : void 0,
              });
    };
