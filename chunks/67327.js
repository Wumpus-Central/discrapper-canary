i.d(e, { default: () => Y });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(575593),
    o = i(311907),
    u = i(397927),
    d = i(869038),
    c = i(775602),
    f = i(793574),
    p = i(688810),
    h = i(627363),
    m = i(587895),
    g = i(590180),
    A = i(993408),
    x = i(674658),
    _ = i(552915),
    y = i(61750),
    R = i(21161),
    S = i(915089),
    C = i(769015),
    T = i(976860),
    I = i(871123),
    b = i(220297),
    j = i(946261),
    v = i(209932),
    E = i(30793),
    N = i(189081),
    O = i(287809),
    w = i(97352),
    P = i(67480),
    k = i(954571),
    L = i(690521),
    G = i(45938),
    M = i(615396),
    D = i(427262),
    F = i(242874),
    U = i(518926),
    H = i(75825),
    B = i(788868),
    V = i(652215),
    z = i(758836),
    $ = i(985018),
    Q = i(910143);
let q = (t) => {
        let { openedGift: e } = t,
            { createMultipleConfettiAt: i } = n.useContext(R.x);
        return (
            n.useEffect(() => {
                e && i(window.innerWidth / 2, window.innerHeight / 4);
            }, [i, e]),
            null
        );
    },
    W = (t) => {
        let { step: e, soundId: i } = t;
        return (
            n.useEffect(() => {
                if (e !== V.frR.CONFIRM) return;
                let t = v.A.getSoundById(i);
                (0, j.playGiftSound)(i, t?.volume ?? 1);
            }, [e, i]),
            null
        );
    };
class J extends n.Component {
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
        null == t && null != e && h.Ay.fetchApplication(e.applicationId);
        let l = null != i || null != s.giftStyle,
            a = (0, A.hU)(s),
            r = null != n ? L.Ay.getURL(n) : void 0;
        this.setState({ isCustomGift: l, isCollectiblesGift: a, emojiURL: r, opened: a }), this.trackStepAnalytics();
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: s, accepted: n, opened: l, isCustomGift: a } = this.state;
        return (0, G.v3)(t, i, { error: s, accepted: n, accepting: e, opened: l, isCustomGift: a });
    }
    get buttonText() {
        return (0, G.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: s, subscriptionPlan: n, collectiblesItemType: l } = this.props;
        if (t && this.step === V.frR.ERROR) return $.intl.formatToMarkdownString($.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return $.intl.formatToPlainString($.t.xHzRub, {
                    recipientDisplayName: D.Ay.getName(O.default.getCurrentUser()),
                });
            else {
                let t = O.default.getUser(s.userId),
                    e = D.Ay.getName(t);
                if (null != l)
                    switch (l) {
                        case r.R.AVATAR_DECORATION:
                            return $.intl.formatToPlainString($.t.SKduyh, { sender: e });
                        case r.R.PROFILE_EFFECT:
                            return $.intl.formatToPlainString($.t["1w42T2"], { sender: e });
                        case r.R.NAMEPLATE:
                            return $.intl.formatToPlainString($.t.vFiQlU, { sender: e });
                        default:
                            return $.intl.formatToPlainString($.t.U4Ko2y, { sender: e });
                    }
                return $.intl.formatToPlainString($.t["0UR0u4"], {
                    sender: e,
                    timeInterval: n?.interval === B.WT.MONTH ? $.intl.string($.t.FPybU7) : $.intl.string($.t.tfqrhj),
                });
            }
        return null == this.props.sku ? null : (0, G.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
        let t = O.default.getUser(this.props.giftCode.userId);
        return $.intl.formatToPlainString($.t.DDO4Wz, { sender: D.Ay.getName(t) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: s } = this.props;
        if (null == t) return null;
        let { error: n, accepted: l, isCustomGift: a, opened: r } = this.state;
        return !r && a
            ? null
            : (0, G.e_)({
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
        return (0, G.u1)(t, i, s, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case V.frR.ERROR:
                return e;
            case V.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case V.frR.OPEN:
                return this.handleOpen;
            case V.frR.CONFIRM:
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
            await d.A.redeemGiftCode({ code: t.code, options: { channelId: e } }),
                this.setState({ accepted: !0 }),
                i?.();
        } catch (t) {
            this.setState({ error: t });
        }
    };
    handleGoToLibrary = () => {
        let { onClose: t, libraryApplication: e } = this.props;
        (0, T.pX)(V.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t();
    };
    getDefaultAnimationStatus = () => (this.step === V.frR.OPEN ? F.oA.IDLE : F.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== V.frR.OPEN) return F.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: s, sku: n, analyticsLocations: l } = this.props,
            { isCustomGift: a } = this.state;
        k.default.track(V.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: a,
            is_custom_message_edited: a && e !== $.intl.string($.t.ZkOo1U),
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
                onComplete: d,
                customGiftMessage: c,
                emojiName: f,
                soundId: p,
            } = this.props,
            h = O.default.getUser(n.userId),
            { isCustomGift: m, isCollectiblesGift: g, accepted: A, opened: x, emojiURL: y } = this.state,
            R = O.default.getCurrentUser(),
            S = this.step === V.frR.ERROR,
            T = n?.userId != null && null != R && R?.id != null && n.userId === R.id;
        switch (this.step) {
            case V.frR.ERROR:
                d?.(n, !1);
                break;
            case V.frR.SUCCESS:
                d?.(n, !0);
        }
        return (0, s.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, s.jsxs)(u.EOs, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: u.rIJ.SMALL,
                    className: Q.yl,
                    "aria-labelledby": l,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != n.giftStyle &&
                            !m &&
                            !g &&
                            (0, s.jsx)(H.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: Q.C9,
                            }),
                        !m && (0, s.jsx)("div", { className: Q.Dv }),
                        !g && (0, s.jsx)(u.s_y, { "data-migration-pending": !0, onClick: i, className: Q.b }),
                        (0, s.jsxs)(u.$mQ, {
                            "data-migration-pending": !0,
                            className: a()({ [Q.Qs]: !m, [Q.Fl]: m }),
                            children: [
                                !g && (null == n.giftStyle || (m && A))
                                    ? (0, s.jsx)(C.A, { size: C.M.LARGE, game: t, skuId: n.skuId })
                                    : null,
                                (0, s.jsxs)(u.Heading, {
                                    id: l,
                                    className: a()({ [Q.Ry]: m && !A, [Q.wx]: !m || A }),
                                    variant: "heading-sm/semibold",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: a()({ [Q.Qw]: m }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, s.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(m && !A) &&
                                    (0, s.jsx)(u.Text, {
                                        className: Q.rf,
                                        variant: "text-sm/normal",
                                        children: this.bodyText,
                                    }),
                                m &&
                                    !g &&
                                    null != n.giftStyle &&
                                    !A &&
                                    !S &&
                                    (0, s.jsx)(H.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: Q.l$,
                                        giftStyle: n.giftStyle,
                                    }),
                                this.state.opened && !S && g && (0, s.jsx)(_.A, { giftCode: n }),
                                S &&
                                    (0, s.jsx)(u.Text, {
                                        className: Q.rf,
                                        variant: "text-md/normal",
                                        children: this.errorMessage,
                                    }),
                                m &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !S &&
                                    null != c &&
                                    "" !== c &&
                                    !T &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(u.Heading, {
                                                id: l,
                                                variant: "heading-md/semibold",
                                                children: $.intl.format($.t.DDO4Wz, { sender: D.Ay.getName(h) }),
                                            }),
                                            (0, s.jsx)(u.Text, {
                                                className: Q.$B,
                                                variant: "text-md/semibold",
                                                children: c,
                                            }),
                                        ],
                                    }),
                                (0, s.jsx)(u.Button, {
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
                    this.step !== V.frR.ERROR &&
                    !A &&
                    !e &&
                    x &&
                    (null == f || null == y
                        ? (0, s.jsx)(q, { openedGift: x && !A && !e })
                        : (0, s.jsx)(U.A, { confettiTarget: this.modalRef.current, emojiURL: y })),
                !A && !e && x && null != p && (0, s.jsx)(W, { soundId: p, step: this.step }),
            ],
        });
    }
}
let K = o.Ay.connectStores([N.A, P.A, m.A, E.A, w.A, c.A, g.A], (t) => {
        let { giftCode: e } = t,
            i = P.A.get(e.skuId),
            s = null != i ? m.A.getApplication(i.applicationId) : null,
            n = c.A.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, G.YI)(e.entitlementBranches, i, N.A) : null,
            application: s,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, M.c9)(e.subscriptionPlanId) : null,
            accepting: E.A.getIsAccepting(e.code),
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
            c = null != e && (0, I.bF)(e);
        return (n.useEffect(() => {
            if (c) {
                (0, b.b)({
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
            : (0, s.jsx)(J, { ...t });
    }),
    Y = (t) => {
        let { channelContext: e, code: i, customGiftMessage: n, emojiName: l, soundId: a, onClose: r, ...u } = t,
            d = (0, S.GV)(),
            c = (0, o.bG)([E.A], () => E.A.get(i)),
            { analyticsLocations: h } = (0, p.Ay)(f.A.GIFT_CODE_MODAL),
            { product: m } = (0, x.q)(c?.skuId, !0);
        return null == c
            ? null
            : (0, s.jsx)(K, {
                  ...u,
                  customGiftMessage: n,
                  channelContext: e,
                  giftCode: c,
                  headerId: d,
                  emojiName: l,
                  soundId: a,
                  analyticsLocations: h,
                  onClose: r,
                  collectiblesItemType: (0, A.oj)(m),
                  onAccept:
                      null != m
                          ? () => {
                                r(), (0, y.A)({ product: m, analyticsLocations: h, purchaseType: z.gs.GIFT });
                            }
                          : void 0,
              });
    };
