i.d(e, { default: () => te });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(575593),
    o = i(311907),
    u = i(582754),
    d = i(397927),
    c = i(869038),
    f = i(736653),
    p = i(775602),
    h = i(793574),
    m = i(688810),
    g = i(627363),
    A = i(587895),
    x = i(590180),
    _ = i(993408),
    y = i(674658),
    R = i(552915),
    S = i(61750),
    C = i(21161),
    T = i(915089),
    I = i(769015),
    b = i(976860),
    j = i(871123),
    v = i(220297),
    E = i(946261),
    N = i(209932),
    O = i(30793),
    w = i(189081),
    P = i(287809),
    k = i(97352),
    L = i(67480),
    M = i(954571),
    G = i(690521),
    D = i(45938),
    F = i(615396),
    U = i(427262),
    H = i(242874),
    B = i(518926),
    V = i(75825),
    z = i(788868),
    $ = i(652215),
    Q = i(758836),
    q = i(985018),
    W = i(910143),
    J = i(428721),
    K = i(852119);
let Y = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = n.useContext(C.x);
        return (
            n.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    X = (t) => {
        let { step: e, soundId: i } = t;
        return (
            n.useEffect(() => {
                if (e !== $.frR.CONFIRM) return;
                let t = N.A.getSoundById(i);
                (0, E.playGiftSound)(i, t?.volume ?? 1);
            }, [e, i]),
            null
        );
    };
class Z extends n.Component {
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
        null == t && null != e && g.Ay.fetchApplication(e.applicationId);
        let l = null != i || null != s.giftStyle,
            a = (0, _.hU)(s),
            r = null != n ? G.Ay.getURL(n) : void 0;
        this.setState({ isCustomGift: l, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: n, opened: l, isCustomGift: a } = this.state;
        return (0, D.v3)(t, i, { error: s, accepted: n, accepting: e, opened: l, isCustomGift: a });
    }
    get buttonText() {
        return (0, D.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: n, collectiblesItemType: l } = this.props;
        if (t && this.step === $.frR.ERROR) return q.intl.formatToMarkdownString(q.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return q.intl.formatToPlainString(q.t.xHzRub, {
                    recipientDisplayName: U.Ay.getName(P.default.getCurrentUser()),
                });
            else {
                let t = P.default.getUser(s.userId),
                    e = U.Ay.getName(t);
                if (null != l)
                    switch (l) {
                        case r.R.AVATAR_DECORATION:
                            return q.intl.formatToPlainString(q.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return q.intl.formatToPlainString(q.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return q.intl.formatToPlainString(q.t.vFiQlU, { sender: e });
                        default:
                            return q.intl.formatToPlainString(q.t.U4Ko2y, { sender: e });
                    }
                return q.intl.formatToPlainString(q.t["0UR0u4"], {
                    sender: e,
                    timeInterval: n?.interval === z.WT.MONTH ? q.intl.string(q.t.FPybU7) : q.intl.string(q.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, D.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = P.default.getUser(this.props.giftCode.userId);
        return q.intl.formatToPlainString(q.t.DDO4Wz, { sender: U.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: n, accepted: l, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, D.e_)({
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
        return (0, D.u1)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case $.frR.ERROR:
                return e;
            case $.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case $.frR.OPEN:
                return this.handleOpen;
            case $.frR.CONFIRM:
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
            await c.A.redeemGiftCode({ code: t.code, options: { channelId: e } }),
                this.setState({ accepted: !0 }),
                i?.();
        } catch (t) {
            this.setState({ error: t });
        }
    };
    handleGoToLibrary = () => {
        let { onClose: t, libraryApplication: e } = this.props;
        (0, b.pX)($.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
    };
    getDefaultAnimationStatus = () => (this.step === $.frR.OPEN ? H.oA.IDLE : H.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== $.frR.OPEN) return H.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s, sku: n, analyticsLocations: l } = this.props,
            { isCustomGift: a } = this.state;
        M.default.track($.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: a,
            is_custom_message_edited: a && e !== q.intl.string(q.t.ZkOo1U),
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
                onComplete: u,
                customGiftMessage: c,
                emojiName: f,
                soundId: p,
                isThemeDark: h,
            } = this.props,
            m = P.default.getUser(n.userId),
            { isCustomGift: g, isCollectiblesGift: A, accepted: x, opened: _, emojiURL: y } = this.state,
            S = P.default.getCurrentUser(),
            C = this.step === $.frR.ERROR,
            T = n?.userId != null && null != S && S?.id != null && n.userId === S.id;
        switch (this.step) {
            case $.frR.ERROR:
                u?.(n, !1);
                break;
            case $.frR.SUCCESS:
                u?.(n, !0);
        }
        return (0, s.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(d.EOs, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: d.rIJ.SMALL,
                    className: W.yl,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != n.giftStyle &&
                            !g &&
                            !A &&
                            (0, s.jsx)(V.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: W.C9,
                            }),
                        !g && (0, s.jsx)("div", { className: W.Dv }),
                        !A && (0, s.jsx)(d.s_y, { "data-migration-pending": !0, onClick: i, className: W.b }),
                        (0, s.jsxs)(d.$mQ, {
                            "data-migration-pending": !0,
                            className: a()({ [W.Qs]: !g, [W.Fl]: g }),
                            children: [
                                !A && (null == n.giftStyle || (g && x))
                                    ? (0, s.jsx)(I.A, { size: I.M.LARGE, game: t, skuId: n.skuId })
                                    : null,
                                C && (0, s.jsx)("img", { alt: "", src: h ? J : K }),
                                (0, s.jsxs)(d.Heading, {
                                    id: l,
                                    className: a()({ [W.Ry]: g && !x, [W.wx]: !g || x }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: a()({ [W.Qw]: g }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, s.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(g && !x) &&
                                    (0, s.jsx)(d.Text, {
                                        className: W.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                g &&
                                    !A &&
                                    null != n.giftStyle &&
                                    !x &&
                                    !C &&
                                    (0, s.jsx)(V.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: W.l$,
                                        giftStyle: n.giftStyle,
                                    }),
                                this.state.opened && !C && A && (0, s.jsx)(R.A, { giftCode: n }),
                                C &&
                                    (0, s.jsx)(d.Text, {
                                        className: W.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                g &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !C &&
                                    null != c &&
                                    "" !== c &&
                                    !T &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(d.Heading, {
                                                id: l,
                                                variant: "heading-md/semibold",
                                                children: q.intl.format(q.t.DDO4Wz, { sender: U.Ay.getName(m) }),
                                            }),
                                            (0, s.jsx)(d.Text, {
                                                className: W.$B,
                                                variant: "text-md/semibold",
                                                children: c,
                                            }),
                                        ],
                                    }),
                                (0, s.jsx)(d.Button, {
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
                    this.step !== $.frR.ERROR &&
                    !x &&
                    !e &&
                    _ &&
                    (null == f || null == y
                        ? (0, s.jsx)(Y, { openedGift: _ && !x && !e })
                        : (0, s.jsx)(B.A, { confettiTarget: this.modalRef.current, emojiURL: y })),
                !x && !e && _ && null != p && (0, s.jsx)(X, { soundId: p, step: this.step }),
            ],
        });
    }
}
let tt = o.Ay.connectStores([w.A, L.A, A.A, O.A, k.A, p.A, x.A], (t) => {
        let { giftCode: e } = t,
            i = L.A.get(e.skuId),
            s = null != i ? A.A.getApplication(i.applicationId) : null,
            n = p.A.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, D.YI)(e.entitlementBranches, i, w.A) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, F.c9)(e.subscriptionPlanId) : null,
            accepting: O.A.getIsAccepting(e.code),
            useReducedMotion: n,
        };
    })((t) => {
        let {
                sku: e,
                giftCode: i,
                channelContext: l,
                customGiftMessage: a,
                onClose: r,
                analyticsLocations: o,
                emojiName: u,
                soundId: d,
            } = t,
            c = null != e && (0, j.bF)(e);
        return (n.useEffect(() => {
            if (c) {
                (0, v.b)({
                    sku: e,
                    giftCode: i,
                    channelContext: l,
                    customGiftMessage: a,
                    analyticsLocations: o,
                    emojiName: u,
                    soundId: d,
                }),
                    r();
                return;
            }
        }, [e, c, l, a, i, r, o, u, d]),
        c)
            ? null
            : (0, s.jsx)(Z, { ...t });
    }),
    te = (t) => {
        let { channelContext: e, code: i, customGiftMessage: n, emojiName: l, soundId: a, onClose: r, ...d } = t,
            c = (0, T.GV)(),
            p = (0, o.bG)([O.A], () => O.A.get(i)),
            g = (0, f.Ay)(),
            { analyticsLocations: A } = (0, m.Ay)(h.A.GIFT_CODE_MODAL),
            { product: x } = (0, y.q)(p?.skuId, !0);
        return null == p
            ? null
            : (0, s.jsx)(tt, {
                  ...d,
                  customGiftMessage: n,
                  channelContext: e,
                  giftCode: p,
                  headerId: c,
                  emojiName: l,
                  soundId: a,
                  analyticsLocations: A,
                  isThemeDark: (0, u.Mw)(g),
                  onClose: r,
                  collectiblesItemType: (0, _.oj)(x),
                  onAccept:
                      null != x
                          ? () => {
                                r(), (0, S.A)({ product: x, analyticsLocations: A, purchaseType: Q.gs.GIFT });
                            }
                          : void 0,
              });
    };
