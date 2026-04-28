i.d(e, { default: () => tA });
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
    T = i(289873),
    j = i(242874),
    E = i(75825),
    N = i(287809),
    O = i(562819),
    _ = i(963977),
    v = i(344346),
    b = i(139136),
    L = i(245068),
    P = i(971144);
let k = C._3.SIZE_152,
    w = (0, O.Te)(k),
    M = (t) => {
        let { item: e } = t,
            i = (0, o.bG)([N.default], () => N.default.getCurrentUser()),
            {
                avatarDecorationSrc: l,
                avatarPlaceholderSrc: n,
                eventHandlers: a,
            } = (0, _.A)({ user: i, avatarDecorationOverride: e, size: w });
        return (0, s.jsx)("div", {
            className: P._P,
            children: (0, s.jsx)(I.eu, { ...a, "aria-label": e.label, src: n, avatarDecoration: l, size: k }),
        });
    },
    G = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: P.xC,
            children: (0, s.jsx)(b.A, { isHighlighted: !0, skuId: e?.skuId }),
        });
    },
    D = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: P.M4,
            children: (0, s.jsx)(v.A, {
                nameplate: e,
                className: P.qF,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    F = (t) => {
        let { product: e } = t;
        return (0, s.jsx)("div", { className: P.hT, children: (0, s.jsx)(L.X, { product: e, isHighlighted: !1 }) });
    },
    U = (t) => {
        let { giftCode: e } = t;
        return null == e.giftStyle
            ? null
            : (0, s.jsx)(E.A, {
                  defaultAnimationState: j.oA.ACTION,
                  idleAnimationState: j.oA.LOOP,
                  className: P.l$,
                  giftStyle: e.giftStyle,
              });
    },
    H = (t) => {
        let { giftCode: e } = t,
            { product: i, isFetching: l } = (0, S.q)(e.skuId, !0);
        if (l || null == i) return (0, s.jsx)("div", { className: P.dc, children: (0, s.jsx)(T.y, {}) });
        if (i.type === r.R.BUNDLE) return 0 === i.items.length ? null : (0, s.jsx)(F, { product: i });
        let n = i?.items[0];
        switch (n?.type) {
            case r.R.AVATAR_DECORATION:
                return (0, s.jsx)(M, { item: n });
            case r.R.PROFILE_EFFECT:
                return (0, s.jsx)(G, { item: n });
            case r.R.NAMEPLATE:
                return (0, s.jsx)(D, { item: n });
            case r.R.PROFILE_FRAME:
                return (0, s.jsx)(U, { giftCode: e });
            default:
                return null != e.giftStyle
                    ? (0, s.jsx)(E.A, {
                          defaultAnimationState: j.oA.ACTION,
                          idleAnimationState: j.oA.LOOP,
                          className: P.l$,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
var z = i(61750),
    V = i(21161),
    B = i(915089),
    $ = i(137177),
    W = i(976860),
    q = i(871123),
    K = i(192308),
    Q = i(954571),
    Y = i(188275),
    J = i(652215),
    X = i(946261),
    Z = i(209932),
    tt = i(30793),
    te = i(189081),
    ti = i(97352),
    ts = i(67480),
    tl = i(690521),
    tn = i(45938),
    ta = i(615396),
    tr = i(427262),
    to = i(518926),
    tu = i(788868),
    td = i(758836),
    tc = i(985018),
    tp = i(886898);
let th = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = l.useContext(V.x);
        return (
            l.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    tf = (t) => {
        let { step: e, soundId: i } = t;
        return (
            l.useEffect(() => {
                if (e !== J.frR.CONFIRM) return;
                let t = Z.A.getSoundById(i);
                (0, X.playGiftSound)(i, t?.volume ?? 1);
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
        let { application: t, sku: e, customGiftMessage: i, giftCode: s, emojiName: l } = this.props;
        null == t && null != e && A.Ay.fetchApplication(e.applicationId);
        let n = null != i || null != s.giftStyle,
            a = (0, R.hU)(s),
            r = null != l ? tl.Ay.getURL(l) : void 0;
        this.setState({ isCustomGift: n, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: l, opened: n, isCustomGift: a } = this.state;
        return (0, tn.v3)(t, i, { error: s, accepted: l, accepting: e, opened: n, isCustomGift: a });
    }
    get buttonText() {
        return (0, tn.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: l, collectiblesItemType: n } = this.props;
        if (t && this.step === J.frR.ERROR) return tc.intl.formatToMarkdownString(tc.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return tc.intl.formatToPlainString(tc.t.xHzRub, {
                    recipientDisplayName: tr.Ay.getName(N.default.getCurrentUser()),
                });
            else {
                let t = N.default.getUser(s.userId),
                    e = tr.Ay.getName(t);
                if (null != n)
                    switch (n) {
                        case r.R.AVATAR_DECORATION:
                            return tc.intl.formatToPlainString(tc.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return tc.intl.formatToPlainString(tc.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return tc.intl.formatToPlainString(tc.t.vFiQlU, { sender: e });
                        case r.R.PROFILE_FRAME:
                            return tc.intl.formatToPlainString(tc.t["UH/EQL"], { sender: e });
                        default:
                            return tc.intl.formatToPlainString(tc.t.U4Ko2y, { sender: e });
                    }
                return tc.intl.formatToPlainString(tc.t["0UR0u4"], {
                    sender: e,
                    timeInterval:
                        l?.interval === tu.WT.MONTH ? tc.intl.string(tc.t.FPybU7) : tc.intl.string(tc.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, tn.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = N.default.getUser(this.props.giftCode.userId);
        return tc.intl.formatToPlainString(tc.t.DDO4Wz, { sender: tr.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: l, accepted: n, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, tn.e_)({
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
        return (0, tn.u1)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case J.frR.ERROR:
                return e;
            case J.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case J.frR.OPEN:
                return this.handleOpen;
            case J.frR.CONFIRM:
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
        (0, W.pX)(J.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
    };
    getDefaultAnimationStatus = () => (this.step === J.frR.OPEN ? j.oA.IDLE : j.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== J.frR.OPEN) return j.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s, sku: l, analyticsLocations: n } = this.props,
            { isCustomGift: a } = this.state;
        Q.default.track(J.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: n,
            has_custom_message: a,
            is_custom_message_edited: a && e !== tc.intl.string(tc.t.ZkOo1U),
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
            T = this.step === J.frR.ERROR,
            j = l?.userId != null && null != I && I?.id != null && l.userId === I.id;
        switch (this.step) {
            case J.frR.ERROR:
                h?.(l, !1);
                break;
            case J.frR.SUCCESS:
                h?.(l, !0);
        }
        return (0, s.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: u.rI.SMALL,
                    className: tp.yl,
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
                                className: tp.C9,
                            }),
                        !x && (0, s.jsx)("div", { className: tp.Dv }),
                        !y && (0, s.jsx)(u.s_, { "data-migration-pending": !0, onClick: i, className: tp.b }),
                        (0, s.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: a()({ [tp.Qs]: !x, [tp.Fl]: x }),
                            children: [
                                !y && (null == l.giftStyle || (x && R))
                                    ? (0, s.jsx)($.A, { size: $.M.LARGE, game: t, skuId: l.skuId })
                                    : null,
                                (0, s.jsxs)(d.D, {
                                    id: n,
                                    className: a()({ [tp.Ry]: x && !R, [tp.wx]: !x || R }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: a()({ [tp.Qw]: x }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, s.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(x && !R) &&
                                    (0, s.jsx)(c.E, {
                                        className: tp.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                x &&
                                    !y &&
                                    null != l.giftStyle &&
                                    !R &&
                                    !T &&
                                    (0, s.jsx)(E.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tp.l$,
                                        giftStyle: l.giftStyle,
                                    }),
                                this.state.opened && !T && y && (0, s.jsx)(H, { giftCode: l }),
                                T &&
                                    (0, s.jsx)(c.E, {
                                        className: tp.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                x &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !T &&
                                    null != f &&
                                    "" !== f &&
                                    !j &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(d.D, {
                                                id: n,
                                                variant: "heading-md/semibold",
                                                children: tc.intl.format(tc.t.DDO4Wz, { sender: tr.Ay.getName(A) }),
                                            }),
                                            (0, s.jsx)(c.E, {
                                                className: tp.$B,
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
                    this.step !== J.frR.ERROR &&
                    !R &&
                    !e &&
                    S &&
                    (null == m || null == C
                        ? (0, s.jsx)(th, { openedGift: !0 })
                        : (0, s.jsx)(to.A, { confettiTarget: this.modalRef.current, emojiURL: C })),
                !R && !e && S && null != g && (0, s.jsx)(tf, { soundId: g, step: this.step }),
            ],
        });
    }
}
let tg = o.Ay.connectStores([te.A, ts.A, x.A, tt.A, ti.A, f.A, y.A], (t) => {
        let { giftCode: e } = t,
            i = ts.A.get(e.skuId),
            s = null != i ? x.A.getApplication(i.applicationId) : null,
            l = f.A.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, tn.YI)(e.entitlementBranches, i, te.A) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, ta.c9)(e.subscriptionPlanId) : null,
            accepting: tt.A.getIsAccepting(e.code),
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
            p = null != e && (0, q.bF)(e);
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
                    (0, K.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                i.e("25806"),
                                i.e("90860"),
                                i.e("5636"),
                                i.e("61052"),
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
                                Q.default.track(J.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                    type: Y.Nu,
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
            : (0, s.jsx)(tm, { ...t });
    }),
    tA = (t) => {
        let { channelContext: e, code: i, customGiftMessage: l, emojiName: n, soundId: a, onClose: r, ...u } = t,
            d = (0, B.GV)(),
            c = (0, o.bG)([tt.A], () => tt.A.get(i)),
            { analyticsLocations: p } = (0, g.Ay)(m.A.GIFT_CODE_MODAL),
            { product: h } = (0, S.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, s.jsx)(tg, {
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
                                r(), (0, z.A)({ product: h, analyticsLocations: p, purchaseType: td.gs.GIFT });
                            }
                          : void 0,
              });
    };
