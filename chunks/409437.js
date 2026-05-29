let l, i;
n.d(t, { A: () => r5 });
var s,
    a,
    r = n(627968),
    o = n(64700),
    c = n(503698),
    d = n.n(c),
    u = n(922139),
    h = n(837381),
    m = n(17928),
    g = n(446837),
    p = n(187322),
    A = n(536804),
    f = n(789279),
    C = n(584648),
    x = n(448539),
    E = n(45596);
let S =
    ((s = d()(E.qZ, E.Vl)),
    (a = window.ResizeObserver ?? g.t),
    (l = new Map()),
    (i = new a((e) => {
        e.forEach((e) => {
            let { target: t } = e;
            l.get(t)?.(e);
        });
    })),
    o.forwardRef(function (e, t) {
        let {
                children: n,
                className: a,
                onResize: c,
                contentClassName: u,
                onScroll: h,
                dir: m = "ltr",
                fade: g = !1,
                customTheme: S = !1,
                style: _,
                ...I
            } = e,
            j = o.useRef(null),
            y = o.useRef(null),
            [v, T] = o.useState(!1),
            { scrollerRef: N, getScrollerState: b } = (0, A.A)(),
            M = (0, f.A)(N);
        o.useImperativeHandle(
            t,
            () => ({
                getScrollerNode: () => N.current,
                isScrolling: () => null != j.current,
                getScrollerState: b,
                ...(0, C.A)(N, b, M),
            }),
            [N, b, M],
        );
        let R = o.useCallback(
            (e) => {
                null == j.current ? T(!0) : clearTimeout(j.current),
                    (j.current = setTimeout(() => {
                        (j.current = null), T(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h],
        );
        return (
            o.useEffect(() => () => clearTimeout(j.current), []),
            (0, x.A)({ ref: N, key: "container", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, x.A)({ ref: y, key: "content", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, r.jsx)("div", {
                ref: N,
                className: d()(a, { [E.Rv]: g, [E.D8]: S, [s]: !0, [E.fs]: !0, [E.qw]: v && g }),
                style: _,
                dir: m,
                onScroll: R,
                ...I,
                children: (0, r.jsx)(p.xp, {
                    containerRef: y,
                    children: (0, r.jsxs)("div", {
                        ref: y,
                        className: d()(u, E.Qs),
                        children: [n, v && (0, r.jsx)("div", { className: E.X3 })],
                    }),
                }),
            })
        );
    }));
var _ = n(312138),
    I = n(720149),
    j = n(432371),
    y = n(765548),
    v = n(775602);
n(321073);
var T = n(228366),
    N = n(911411),
    b = n(290863);
let M = [],
    R = [],
    D = [];
var L = n(429913),
    k = n(47167),
    O = n(828488),
    P = n(958720),
    G = n(761259),
    U = n(174459),
    w = n(652215);
function F(e) {
    return { channel_id: e.id, channel_type: e.type, guild_id: e.guild_id ?? null };
}
let H = {
    trackEntrypointImpression(e) {
        U.default.track(w.HAw.TOPICAL_NAV_ENTRYPOINT_IMPRESSION, {
            ...F(e.channel),
            conversation_count: e.conversationCount,
        });
    },
    trackTopicsUnitImpression(e) {
        U.default.track(w.HAw.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, {
            ...F(e.channel),
            conversation_ids: e.conversationIds,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackPreviewImpression(e) {
        U.default.track(w.HAw.TOPICAL_NAV_PREVIEW_IMPRESSION, {
            ...F(e.channel),
            conversation_id: e.conversationId,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackTopicsUnitClicked(e) {
        U.default.track(w.HAw.TOPICAL_NAV_TOPICS_UNIT_CLICKED, {
            ...F(e.channel),
            conversation_id: e.conversationId,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackFocusModeImpression(e) {
        U.default.track(w.HAw.TOPICAL_NAV_FOCUS_MODE_IMPRESSION, {
            ...F(e.channel),
            conversation_id: e.conversationId,
        });
    },
    trackFocusModeDismissed(e) {
        U.default.track(w.HAw.TOPICAL_NAV_FOCUS_MODE_DISMISSED, {
            ...F(e.channel),
            conversation_id: e.conversationId,
            dismiss_reason: e.dismissReason,
        });
    },
    trackThumbsClicked(e) {
        U.default.track(w.HAw.TOPICAL_NAV_THUMBS_CLICKED, {
            ...F(e.channel),
            conversation_id: e.conversationId,
            is_thumbs_up: e.isThumbsUp,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackThumbsDownReasonSelected(e) {
        U.default.track(w.HAw.TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED, {
            ...F(e.channel),
            conversation_id: e.conversationId,
            is_focus_mode: e.isFocusMode,
            reasons: e.reasons,
            other_text: e.otherText,
        });
    },
};
var B = n(319365);
let V = o.createContext(null);
function K(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = o.useRef(null),
        s = o.useRef(null),
        { isFocused: a, setIsFocused: c } = (0, B.D7)(),
        d = o.useCallback(
            async (e) => {
                (a && P.A.getSelectedConversationId(t.id) === e) ||
                    ((s.current = e),
                    await new Promise((l) => {
                        let i = () => {
                            n.removeScrollCompleteCallback(i), l();
                        };
                        n.addScrollCompleteCallback(i), (0, G.xI)(t.id, t.guild_id, e);
                    }),
                    s.current === e && (s.current = null),
                    e === P.A.getSelectedConversationId(t.id) &&
                        (c(!0), H.trackFocusModeImpression({ channel: t, conversationId: e })));
            },
            [t, n, c, a],
        ),
        u = o.useMemo(
            () => ({ bannerMeasurementRef: i, conversationJumpInProgressRef: s, selectAndFocusConversation: d }),
            [i, d],
        );
    return (0, r.jsx)(V.Provider, { value: u, children: l });
}
function z() {
    let e = o.useContext(V);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
let W = o.createContext(null);
function q() {
    let e = o.useContext(W);
    if (null == e) throw Error("useConversationFocusDismiss must be used inside <ConversationFocusDismissProvider>");
    return e;
}
function $(e) {
    let { children: t } = e,
        [n, l] = o.useState(null),
        i = o.useMemo(() => ({ dismissReason: n, setDismissReason: l }), [n, l]);
    return (0, r.jsx)(W.Provider, { value: i, children: t });
}
var J = n(661531),
    Y = n(602853),
    Z = n(717421),
    X = n(689175),
    Q = n(866323),
    ee = n(448761),
    et = n(559149),
    en = n(58703),
    el = n(935208),
    ei = n(857069),
    es = n(694318);
n(938796);
var ea = n(253506),
    er = n(665260),
    eo = n(704844),
    ec = n(495544),
    ed = n(320095),
    eu = n(963852);
let eh = new Map();
function em(e, t) {
    let n = (0, eu.Ay)({
            channelId: t,
            type: w.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: w.pr7.EPHEMERAL,
            state: w.cmJ.SENT,
        }),
        l = (0, ed.rh)(n);
    return (l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l;
}
function eg(e, t, n) {
    if (ee.M.NON_COLLAPSIBLE.has(t.type));
    else if (t.hasFlag(w.pr7.HIDDEN_SUSPENDED_USER)) return w.TZK.MESSAGE_GROUP_SUSPENDED_USER;
    else if (t.blocked) return w.TZK.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return w.TZK.MESSAGE_GROUP_IGNORED;
    else if ((0, es.iJ)(e) && n) return w.TZK.MESSAGE_GROUP_SPAMMER;
    return null;
}
var ep = n(232835),
    eA = n(625494),
    ef = n(990078),
    eC = n(446576),
    ex = n(26430),
    eE = n(408278),
    eS = n(53788),
    e_ = n(922016),
    eI = n(148795),
    ej = n(834730),
    ey = n(534514),
    ev = n(260598),
    eT = n(691540),
    eN = n(857250),
    eb = n(97483),
    eM = n(939249),
    eR = n(789645),
    eD = n(821609),
    eL = n(802986),
    ek = n(375708),
    eO = n(58693);
let eP = [
    { value: "not_useful", label: eL.default.HcSKAh },
    { value: "off_topic", label: eL.default["1cHvxU"] },
    { value: "missing_messages", label: eL.default.ZAJcv4 },
    { value: "misleading_title", label: eL.default.omVRS3 },
    { value: "inappropriate", label: eL.default.dRzDTy },
    { value: "too_cluttered", label: eL.default.wb6DmY },
    { value: "hard_to_use", label: eL.default.NUVZB6 },
    { value: "too_old", label: eL.default.kAFQd3 },
    { value: "other", label: eL.default.OSgZpc },
];
function eG(e) {
    let { channel: t, conversation: n, isFocusMode: l, onClose: i } = e,
        [s, a] = o.useState(() => new Set()),
        [c, u] = o.useState(""),
        h = s.size > 0,
        m = s.has("other"),
        g = o.useCallback((e) => {
            a((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        p = o.useCallback(() => {
            H.trackThumbsDownReasonSelected({
                channel: t,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && c.length > 0 ? c : null,
            }),
                (0, eT.P0)((0, eN.o)(ek.intl.string(eL.default.xrEgG0), eb.Ck.SUCCESS)),
                i();
        }, [t, n.id, l, s, c, m, i]);
    return (0, r.jsxs)("div", {
        className: eO.oO,
        children: [
            (0, r.jsxs)("div", {
                className: eO.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: eO.TK,
                        children: [
                            (0, r.jsx)(ey.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ek.intl.string(eL.default.C3suOL),
                            }),
                            (0, r.jsx)(ej.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                className: eO.VA,
                                children: ek.intl.string(eL.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(eM.D, {
                        className: eO.b,
                        "aria-label": ek.intl.string(eL.default.HLYa5G),
                        onClick: i,
                        children: (0, r.jsx)(eR.P, { size: "xs", color: J.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: eO.Ip,
                role: "group",
                "aria-label": ek.intl.string(eL.default["Lp/NZo"]),
                children: eP.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, r.jsx)(
                        eM.D,
                        {
                            className: d()(eO.jw, s.has(t) && eO.gM),
                            onClick: () => g(t),
                            children: (0, r.jsx)(ej.E, {
                                variant: "text-md/normal",
                                color: "text-strong",
                                children: ek.intl.string(n),
                            }),
                        },
                        t,
                    );
                }),
            }),
            m &&
                (0, r.jsxs)("div", {
                    className: eO.Su,
                    children: [
                        (0, r.jsx)(ev.f, {
                            value: c,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: ek.intl.string(eL.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, r.jsxs)("div", {
                            className: eO.rP,
                            children: [
                                (0, r.jsx)(ej.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: ek.intl.string(eL.default.xZzxfK),
                                }),
                                (0, r.jsxs)(ej.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: [c.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, r.jsx)(eD.$, {
                text: ek.intl.string(eL.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eU = n(549569);
function ew(e) {
    let { channel: t, conversation: n, actionsSpringX: l, suppressBorder: i, onFocusToggle: s } = e,
        [a, c] = o.useState(!1),
        h = o.useRef(null),
        g = (0, m.bG)([P.A], () => P.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: p } = (0, B.D7)(),
        A = o.useCallback(() => c(!1), []),
        f = o.useCallback(() => {
            (0, G.oq)(t.id, n.id, "up"),
                H.trackThumbsClicked({ channel: t, conversationId: n.id, isThumbsUp: !0, isFocusMode: p });
        }, [t, n.id, p]),
        C = o.useCallback(() => {
            (0, G.oq)(t.id, n.id, "down"),
                c(!0),
                H.trackThumbsClicked({ channel: t, conversationId: n.id, isThumbsUp: !1, isFocusMode: p });
        }, [t, n.id, p]),
        x = o.useCallback(
            () => (0, r.jsx)(eG, { channel: t, conversation: n, isFocusMode: p, onClose: A }),
            [t, n, p, A],
        ),
        E = p ? eC.g : ex._,
        S = p ? ek.intl.string(eL.default.pDD8E1) : ek.intl.string(eL.default["o+pmGy"]),
        _ = p ? ek.intl.string(eL.default.XaJ3qC) : ek.intl.string(eL.default.pU5Dut),
        I = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ef.m, {
                    text: ek.intl.string(eL.default.sBwxOY),
                    children: (0, r.jsx)(eE.K, {
                        size: "sm",
                        variant: "up" === g ? "active" : "icon-only",
                        "aria-label": ek.intl.string(eL.default.vjJjMc),
                        icon: eS.G,
                        onClick: f,
                    }),
                }),
                (0, r.jsx)(e_.Y, {
                    targetElementRef: h,
                    shouldShow: a,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: e_.Y.Animation.FADE,
                    onRequestClose: A,
                    renderPopout: x,
                    children: () =>
                        (0, r.jsx)("div", {
                            ref: h,
                            children: (0, r.jsx)(ef.m, {
                                text: ek.intl.string(eL.default.tbhdqW),
                                children: (0, r.jsx)(eE.K, {
                                    size: "sm",
                                    variant: "down" === g ? "critical-primary" : "icon-only",
                                    "aria-label": ek.intl.string(eL.default.TGK5M0),
                                    icon: eI.d,
                                    onClick: C,
                                }),
                            }),
                        }),
                }),
                (0, r.jsx)(ef.m, {
                    text: S,
                    children: (0, r.jsx)(eE.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": _,
                        icon: E,
                        onClick: s,
                    }),
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: d()(eU.zr, { [eU.e8]: i }),
        children: [
            (0, r.jsx)(ej.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: eU.DD,
                children: n.title,
            }),
            null != l
                ? (0, r.jsx)(u.animated.div, {
                      className: eU.o1,
                      style: { transform: l.to((e) => `translateX(${e}px)`) },
                      children: I,
                  })
                : (0, r.jsx)("div", { className: eU.o1, children: I }),
        ],
    });
}
var eF = n(990986);
function eH(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = o.useCallback(() => {
            l("return");
        }, [l]);
    return (0, r.jsx)("div", {
        className: eF.A,
        children: (0, r.jsx)(ew, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eB = n(284009),
    eV = n.n(eB),
    eK = n(807884),
    ez = n(93474),
    eW = n(201275),
    eq = n(384231),
    e$ = n(853145),
    eJ = n(9842),
    eY = n(976860),
    eZ = n(885386),
    eX = n(734057),
    eQ = n(540999),
    e0 = n(580745),
    e1 = n(521427),
    e2 = n(375901),
    e3 = n(143413),
    e4 = n(763754),
    e7 = n(33453);
function e5(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = o.useState(!1),
        a = o.useRef(null);
    return (
        o.useEffect(
            () => (
                s(!0),
                (a.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)),
                () => {
                    null != a.current && clearTimeout(a.current);
                }
            ),
            [l],
        ),
        (0, r.jsx)("div", { "data-flash": i, className: d()(e7.j, n), children: t })
    );
}
var e8 = n(491182),
    e6 = n(860227),
    e9 = n(837528),
    te = n(516287),
    tt = n(843626),
    tn = n(294454),
    tl = n(857071),
    ti = n(517997),
    ts = n(406704),
    ta = n(747926),
    tr = n(54570),
    to = n(8880),
    tc = n(834942),
    td = n(576705),
    tu = n(957565),
    th = n(723702),
    tm = n(697470),
    tg = n(492841),
    tp = n(707985),
    tA = n(519222);
let tf = function (e, t, n) {
    let l = o.useRef(n);
    return (
        (l.current = n),
        o.useCallback(
            (n) => {
                if (!l.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    s = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    a = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    r = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    o = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    c = ep.A.getMessage(t, e),
                    d = eX.A.getChannel(t);
                if (null == c || null == d) return;
                let u = ec.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (td.A.can(w.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tA.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, th.isMac)() ? r : a) && tu.p5 && (n.preventDefault(), (0, tu.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tm.A)(c, u) && (n.preventDefault(), (0, tA.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tg.A)(c, d) && (n.preventDefault(), (0, tA.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || tc.A.canChatInGuild(e.guild_id),
                                    n = eZ.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tp.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && td.A.can(w.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && tl.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, ts.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eA._.dispatchKeyed(w.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, ti.r)(d, c) && (n.preventDefault(), (0, tA.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, tt.p)(c) &&
                            (n.preventDefault(), (0, tn.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            to.A.isSpeakingMessage(t, e) ? (0, tr.pr)() : (0, tr.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, ts.D1)(d, c)) n.preventDefault(), (0, ta.Tv)(d, c, "Message Shortcut");
                        else if (c.hasFlag(w.pr7.HAS_THREAD)) {
                            let e = eX.A.getChannel(el.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, ta.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tA.cl)(d, c));
                        break;
                    case "escape":
                        e0.A.isEditing(d.id, c.id) ? I.A.endEditMessage(d.id) : eA._.dispatch(w.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tC = n(754459),
    tx = n(375199),
    tE = n(824556),
    tS = n(699352),
    t_ = n(877413),
    tI = n.n(t_),
    tj = n(231483),
    ty = n(975571),
    tv = n(465364),
    tT = n(164664),
    tN = n(291812),
    tb = n(606049),
    tM = n(147860),
    tR = n(334211),
    tD = n(992595);
let tL = o.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: d()(tM.K1, { [tM.oE]: l }),
                    children: [
                        (0, r.jsx)("div", {
                            className: tM.Oz,
                            children: (0, r.jsx)(tj.l, { size: "xs", color: "currentColor", className: tM.F_ }),
                        }),
                        (0, r.jsx)("div", {
                            className: tM.jC,
                            children: (0, r.jsx)(ej.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, tv.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d()(tM.ah, { [tM.oE]: l }),
                    children: (0, r.jsx)(tT.A, {
                        message: t,
                        onDeleteMessage: i,
                        children: (0, r.jsx)(ej.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: tM.C2,
                            children: ek.intl.format(ek.t["Nd3Gh+"], {
                                helpUrl: ty.A.getArticleURL(w.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    tk = o.memo(function (e) {
        let { className: t, compact: n, message: l, children: i, content: s, onUpdate: a } = e,
            c = l.editedTimestamp?.toString(),
            u = o.useRef(!1),
            h = (0, m.bG)([ez.A], () => ez.A.getMessage(l.id), [l.id]),
            g = o.useCallback(() => {
                if (h?.isBlockedEdit) {
                    var e;
                    (e = l.id), T.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e });
                } else I.A.deleteMessage(l.channel_id, l.id, !0);
            }, [l, h]);
        return (
            o.useLayoutEffect(() => {
                u.current ? null != a && a() : (u.current = !0);
            }, [a, l.content, s, c, i]),
            (0, r.jsxs)("div", {
                id: (0, e6.CJ)(l),
                className: d()(t, tD.PT, {
                    [tR.BK]: !0,
                    [tR.nB]: "rtl" === tI()(l.content),
                    [tM.Dy]: h?.isBlockedEdit,
                    [tM.bv]: !h?.isBlockedEdit,
                }),
                children: [
                    i ?? (0, tN._A)(l, s),
                    h?.isBlockedEdit &&
                        null != l.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(tb.A, {
                                    timestamp: l.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: tR.oh,
                                        children: ["(", ek.intl.string(ek.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tL, {
                        notice: h?.errorMessage ?? ek.intl.string(ek.t.zQ69pv),
                        message: l,
                        compact: n,
                        onDismiss: g,
                    }),
                ],
            })
        );
    }, tN.sP);
var tO = n(111956),
    tP = n.n(tO),
    tG = n(311283),
    tU = n(473935),
    tw = n(173936),
    tF = n(290136),
    tH = n(666492),
    tB = n(606096),
    tV = n(997146),
    tK = n(366605),
    tz = n(163328),
    tW = n(110384),
    tq = n(22231),
    t$ = n(563119),
    tJ = n(581925),
    tY = n(778492),
    tZ = n(241326),
    tX = n(365199),
    tQ = n(417270),
    t0 = n(565645),
    t1 = n(812930),
    t2 = n(822123),
    t3 = n(7584),
    t4 = n(635222),
    t7 = n(969043),
    t5 = n(427209),
    t8 = n(743738),
    t6 = n(649963),
    t9 = n(815807),
    ne = n(429433),
    nt = n(966597),
    nn = n(85109),
    nl = n(71393),
    ni = n(690521),
    ns = n(403362),
    na = n(628691),
    nr = n(194085),
    no = n(607399),
    nc = n(460905);
function nd(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        a = o.useRef(null);
    return (0, r.jsx)(e_.Y, {
        targetElementRef: a,
        animation: e_.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: no.Fr ? "top" : "left",
        align: no.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(nr.qv, { ref: a, label: ek.intl.string(ek.t.lfIHs4), icon: nc.n, onClick: l }, "add-reaction"),
    });
}
var nu = n(720882),
    nh = n(307731),
    nm = n(237774);
let ng = [t3.Ay.getByName("100"), t3.Ay.getByName("laughing"), t3.Ay.getByName("sparkling_heart")].filter(ns.Vq);
function np(e) {
    e.stopPropagation();
}
function nA(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, nu.c)({
        message: t,
        channel: n,
        textSelection: "",
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: l,
        onHeightUpdate: s,
        onClose: i,
        navId: "message-actions",
        ariaLabel: ek.intl.string(ek.t.Lv7LxN),
    });
}
let nf = o.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, t2.QZ)(t.guild_id).filter(
            (e) =>
                !ni.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: nh.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, t4.A)(l.concat(ng)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, t9.i6)(t.emoji, (0, t9.jq)(e))),
                i = null != l ? ek.intl.string(ek.t.wunKKA) : ek.intl.string(ek.t.XVx5BN),
                a = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? ek.intl.formatToPlainString(ek.t.vjeruO, { emojiName: a })
                        : ek.intl.formatToPlainString(ek.t.L1JQwE, { emojiName: a });
            return (0, r.jsx)(
                nr.qv,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ej.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nm.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, r.jsx)(ej.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: nm.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        nE({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: t6.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(t0.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nm.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function nC(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: s,
            canReport: a,
            canEdit: c,
            canPublish: d,
            canReact: u,
            canConfigureJoin: h,
            canReply: g,
            canStartThread: p,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: x,
            isExpanded: E,
            showMoreUtilities: S,
            showEmojiPicker: _,
            showMessageBookmarksActions: j,
            isMessageBookmark: y,
            setPopout: T,
            hasDeveloperMode: N,
            isFocused: b,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: l,
                    showEmojiBurstPicker: i,
                    showMoreUtilities: s,
                    messageWindow: a,
                    setPopout: r,
                    isFocused: o,
                } = e,
                { author: c } = n,
                d = (0, m.bG)([nl.A], () => nl.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, m.bG)([ec.default], () => ec.default.getId()),
                h = (0, ts.Id)(t),
                g = (0, ts.s5)(t),
                { firstMessage: p } = (0, m.bG)([t7.A], () => t7.A.getMessage(t.id), [t.id]),
                A = eZ.jW.useSetting(),
                f = eZ.Q_.useSetting(),
                C = (0, m.bG)([tc.A], () => null == t.guild_id || tc.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: E } = (0, m.cf)(
                    [td.A],
                    () => ({
                        canAddNewReactions: C && td.A.can(w.xBc.ADD_REACTIONS, t),
                        canManageMessages: td.A.can(w.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, C],
                ),
                S = (0, ti.u)(t, n),
                _ = (0, ts.n)(t, n),
                I = (0, ts.R)(n),
                j = (0, m.bG)([tl.A], () => null != t.guild_id && tl.A.isLurking(t.guild_id), [t]),
                y = c.id === u,
                T = (x || n.canDeleteOwnMessage(u)) && h && !w.MRS.UNDELETABLE.has(n.type);
            n.type === w.lAJ.AUTO_MODERATION_ACTION && (T = T && x),
                t.isModeratorReportChannel() && (T = T && n.id !== p?.id && !(0, e3.A)(n));
            let N = (0, na.ul)(n),
                b = (0, tg.A)(n, t),
                M = !t.isSystemDM() && (0, tm.A)(n, u) && h && !g,
                { disableReactionCreates: R } = (0, tp.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: E,
                    isLurking: j,
                    isActiveChannelOrUnarchivableThread: h,
                }),
                D =
                    t.type === w.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(w.GuildFeatures.NEWS) &&
                    (y || x) &&
                    (0, t1.A)(n),
                L = t.getGuildId(),
                k =
                    null != L &&
                    n.type === w.lAJ.USER_JOIN &&
                    td.A.canWithPartialContext(w.xBc.MANAGE_GUILD, { guildId: L }),
                O = (0, tt.m)(n),
                P = (0, e1.Vc)(t.guild_id, t, "MessageHoverBar"),
                G = n.hasFlag(w.pr7.IS_GUILD_OFFICIAL),
                { enabled: U } = nt.A.useConfig({ location: "message_utilities" }),
                F = (0, m.bG)([nn.A], () => null != nn.A.getSavedMessage(t.id, n.id)),
                H = (0, tG.A)(a),
                B = (0, m.bG)([v.A], () => v.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: b,
                canEdit: M,
                canDelete: T,
                canReport: N,
                canReply: S,
                canStartThread: _,
                canViewThread: I,
                canForward: O,
                canManageOfficialMessages: P,
                isGuildOfficial: G,
                canCopy: tu.p5,
                hasDeveloperMode: f,
                canReact: !R && A,
                canPublish: D,
                canConfigureJoin: k,
                isExpanded: H && !B && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: U,
                isMessageBookmark: F,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = o.useRef(null),
        R = o.useCallback(() => {
            S ||
                U.default.track(w.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                T({ moreUtilities: !S });
        }, [S, T, n]),
        D = o.useCallback(() => {
            T({ emojiPicker: !_ });
        }, [_, T]),
        L = (0, ts.Id)(t),
        k = n.hasFlag(w.pr7.CROSSPOSTED);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && N
                              ? (0, r.jsx)(
                                    nr.qv,
                                    {
                                        label: ek.intl.string(ek.t.zBoHlf),
                                        icon: tU.L,
                                        onClick: (e) => (0, tA.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    nr.qv,
                                    { label: ek.intl.string(ek.t.WqhZss), icon: tw.q, onClick: () => (0, tA.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          h
                              ? (0, r.jsx)(
                                    nr.qv,
                                    { label: ek.intl.string(ek.t.NpHUi1), icon: tF.c, onClick: () => (0, tA.vc)(t) },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, r.jsx)(
                                    nr.qv,
                                    { label: ek.intl.string(ek.t.RpE9k7), icon: tH.Q, onClick: () => (0, tA.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          j
                              ? (0, r.jsx)(
                                    nr.qv,
                                    {
                                        label: y ? ek.intl.string(ek.t.LHUP9D) : ek.intl.string(ek.t["9p3D9p"]),
                                        icon: y ? tB.c : tV.c,
                                        onClick: () => (y ? (0, tA.r7)(t, n) : (0, tA.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, r.jsx)(
                                    nr.qv,
                                    {
                                        label: n.pinned ? ek.intl.string(ek.t["Bse+F/"]) : ek.intl.string(ek.t.CvQ18w),
                                        icon: tK.t,
                                        onClick: (e) => (0, tA.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, r.jsx)(
                                    nr.qv,
                                    { label: ek.intl.string(ek.t.rBIGBL), icon: tz.y, onClick: () => (0, tA.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, r.jsx)(
                                    nr.qv,
                                    {
                                        label: ek.intl.string(ek.t["5IEsGx"]),
                                        icon: tW.W,
                                        onClick: (e) => (0, tA.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          E
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(nf, { channel: t, message: n }), (0, r.jsx)(nr.$$, {})],
                                }),
                          (0, r.jsx)(nd, {
                              togglePopout: D,
                              renderEmojiPicker: nS,
                              shouldShow: _,
                              isFocused: b,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            g && !c
                ? (0, r.jsx)(
                      nr.qv,
                      { label: ek.intl.string(ek.t["5IEsGx"]), icon: tW.W, onClick: (e) => (0, tA.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, r.jsx)(
                      nr.qv,
                      { label: ek.intl.string(ek.t.bt75uw), icon: tq.R, onClick: () => (0, tA.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, r.jsx)(
                      nr.qv,
                      { label: ek.intl.string(ek.t.I3ltXO), icon: t5.A, onClick: () => (0, tA.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, r.jsx)(
                      nr.qv,
                      { label: ek.intl.string(ek.t.rBIGBL), icon: tz.y, onClick: () => (0, tA.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, r.jsx)(
                      nr.qv,
                      { label: ek.intl.string(ek.t["39d0Wj"]), icon: tz.y, onClick: () => (0, tA.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, r.jsx)(
                      nr.qv,
                      {
                          label: x ? ek.intl.string(ek.t["2km5Gf"]) : ek.intl.string(ek.t["lE/PG3"]),
                          icon: x ? t$.$ : tJ.L,
                          onClick: () => I.A.patchMessageGuildOfficial(t.id, n.id, !x),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, r.jsx)(
                      nr.qv,
                      {
                          label: k ? ek.intl.string(ek.t["1kWJAr"]) : ek.intl.string(ek.t.MFGE51),
                          icon: tY.k,
                          onClick: () => (0, tA.Le)(t, n),
                          disabled: k,
                      },
                      "publish",
                  )
                : null,
            s && E
                ? (0, r.jsx)(
                      nr.qv,
                      {
                          label: ek.intl.string(ek.t.oyYWHE),
                          icon: tZ.u,
                          onClick: (e) => (0, tA.RC)(t, n, e),
                          dangerous: !0,
                          separator: !E,
                      },
                      "delete",
                  )
                : null,
            E && s
                ? null
                : (0, r.jsx)(e_.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, r.jsx)(nA, {
                              channel: t,
                              message: n,
                              canReport: a,
                              onClose: i,
                              updatePosition: l,
                          });
                      },
                      shouldShow: S,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: e_.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, r.jsx)(
                              nr.qv,
                              {
                                  ref: M,
                                  label: ek.intl.string(ek.t["UKOtz+"]),
                                  icon: tX.j,
                                  selected: i,
                                  onClick: R,
                                  ...l,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function nx(e) {
    let { channel: t, message: n } = e,
        l = (0, m.bG)([ez.A], () => null != ez.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, t8.Bl)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l &&
                i &&
                (0, r.jsx)(
                    nr.qv,
                    { label: ek.intl.string(ek.t["5911Lb"]), icon: tQ.m, onClick: () => (0, tA.Io)(t, n) },
                    "retry",
                ),
            (0, r.jsx)(
                nr.qv,
                { label: ek.intl.string(ek.t.oyYWHE), icon: tZ.u, onClick: (e) => (0, tA.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function nE(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, t9.jq)(n);
    "add" === t
        ? (0, t6.BB)(l.id, i.id, r, s, { burst: a })
        : (0, t6.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nS(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? w.liQ.GUILD_CHANNEL : w.liQ.DM_CHANNEL,
                section: (0, t9.sn)(e),
                object: w.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, r.jsx)(ne.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            nE({ type: "add", emoji: i, channel: e, message: t, location: t6.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tP()(n, 150)() : n());
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let n_ = o.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, m.bG)([e0.A], () => e0.A.isEditing(t.id, n.id), [t.id, n.id]),
        a = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === w.cmJ.SEND_FAILED ? (0, r.jsx)(nx, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== w.cmJ.SEND_FAILED ? (0, r.jsx)(nC, { ...e }) : null;
        })(e);
    return s || (null == a && null == o)
        ? null
        : (0, r.jsx)("div", {
              className: d()(e.className, { [nm.kL]: !0, [nm.gN]: l, [nm.nK]: i }),
              onClick: np,
              onContextMenu: np,
              role: "group",
              "aria-label": ek.intl.string(ek.t.Lv7LxN),
              children: (0, r.jsxs)(nr.Ay, { className: e.innerClassName, children: [a, o] }),
          });
});
var nI = n(701628),
    nj = n(639288),
    ny = n(10364);
let nv = o.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: i,
                isGroupStart: s,
                usernameProfile: a,
                avatarProfile: c,
                setPopout: d,
                author: u,
                repliedMessage: h,
                roleIcon: m,
            } = e,
            g = (0, e9.r4)(t.author.id, n.id),
            p = (0, e9.m)(t, n, a, d),
            A = (0, e9.Jo)(c, d),
            f = o.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, r.jsx)(nj.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== w.lAJ.REPLY,
            renderPopout: ny.A,
            showAvatarPopout: c,
            showUsernamePopout: a,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    nT = o.memo(tb.A);
function nN(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: i,
            author: s,
            repliedMessage: a,
            roleIcon: o,
        } = e,
        { message: c, compact: d, channel: u, groupId: h } = t,
        { usernameProfile: m, avatarProfile: g } = l;
    if ((0, e3.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, r.jsx)(nv, {
              message: c,
              channel: u,
              compact: d,
              subscribeToGroupId: h,
              isGroupStart: p,
              groupId: h,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: g,
              author: s,
              repliedMessage: a,
              roleIcon: o,
          })
        : (0, r.jsx)(nT, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, e6.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nb = n(141268),
    nM = n(155718),
    nR = n(168186),
    nD = n(994500),
    nL = n(217424),
    nk = n(807081),
    nO = n(387408),
    nP = n(942075),
    nG = n(808829),
    nU = n(552691),
    nw = n(861464),
    nF = n(805964);
let nH = o.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: u,
        } = e,
        h = n.state === eJ.a.LOADED ? n.message : void 0,
        g = (0, e4.X4)(h),
        p = (0, eq.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = o.useMemo(() => {
            if (null == h) return null;
            let e = (0, nO.A)(h);
            if (e.type === w.lAJ.USER_JOIN)
                return (0, nk.$)(
                    ek.intl.formatToParts(nw.A.getSystemMessageUserJoin(e.id), {
                        username: null != g ? g.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === w.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nk.$)(
                    (0, nP.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === w.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nk.$)((0, nG.P)({ application: e?.application, username: g?.nick }));
            if (e.type === w.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nk.$)((0, nU.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === w.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nk.$)((0, nU.uk)({ application: e?.application, username: g?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0 }
                        : { ...t, formatInline: !0, allowHeading: p, allowList: p };
                return (0, tv.Ay)(e, n).content;
            }
            return null;
        }, [h, g, l, p]),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: C } = (0, m.cf)(
            [nD.A],
            () => ({
                isReplyAuthorBlocked: null != h && nD.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && nD.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        x = (0, e9.r4)(h?.author.id, l.id),
        E = (0, e9.Ck)(t, n, l),
        S = (0, e9.H9)(h, l, s, c),
        _ = (0, e9.Ge)(a, c),
        I = o.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        j = (0, e4.X4)(t);
    return (0, r.jsx)(nF.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: j,
        referencedMessage: n,
        content: A,
        compact: i,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: C,
        showAvatarPopout: a,
        showUsernamePopout: s,
        renderPopout: ny.A,
        onClickAvatar: _,
        onClickUsername: S,
        onClickReply: E,
        onContextMenu: x,
        onPopoutRequestClose: I,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nB(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: a,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0,
    } = e;
    return (
        null != o &&
        (0, r.jsx)(nH, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: i,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
let nV = o.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: a,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: u,
        } = e,
        { isInteractionUserBlocked: h, isInteractionUserIgnored: g } = (0, m.cf)(
            [nD.A],
            () => ({
                isInteractionUserBlocked: nD.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nD.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, m.bG)([eJ.A], () => eJ.A.getMessageByReference(t?.messageReference)),
        A = (0, e9.r4)(t.interaction?.user.id, n.id),
        f = (0, e9.T0)(t.interaction, n, i, u),
        C = (0, e9.Yq)(s, u),
        x = (0, nR.Am)(t),
        E = x?.type === nM.G4.APPLICATION_COMMAND ? x.target_user?.id : void 0,
        S = (0, e9.r4)(E, n.id),
        _ = (0, e9.I)(E, n, c, u),
        I = (0, e9.Ge)(d, u),
        j = (0, e9.U_)(a, u),
        y = o.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        v = o.useCallback(
            () =>
                nB({
                    message: t,
                    channel: n,
                    compact: l,
                    setPopout: u,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: p,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, l, t, d, p, c, u],
        );
    return (0, r.jsx)(nL.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: h,
        isInteractionUserIgnored: g,
        showAvatarPopout: s,
        showUsernamePopout: i,
        showDataPopout: a,
        showTargetAvatarPopout: d,
        showTargetUsernamePopout: c,
        onClickAvatar: C,
        onClickUsername: f,
        onClickCommand: j,
        onUserContextMenu: A,
        onClickTargetAvatar: I,
        onClickTargetUsername: _,
        onTargetUserContextMenu: S,
        onPopoutRequestClose: y,
        renderTargetMessage: v,
    });
});
var nK = n(352043),
    nz = n(381941);
function nW(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eV()(n.type === w.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...a } = (0, h.rm)(e.id ?? ""),
        o = (0, m.bG)([eJ.A], () => eJ.A.getMessageByReference(l)),
        { popouts: c, setPopout: u } = (0, tC.A)(n.id, nz.Fd),
        g = (0, e4.Ay)(n),
        p = (0, e6.fF)(n),
        A = (0, e6.ZD)(n);
    return n.type === w.lAJ.THREAD_STARTER_MESSAGE && null != o && o.state === eJ.a.LOADED
        ? (0, r.jsx)(nq, { ...e, viewingChannelId: n.channel_id, message: o.message, groupId: o.message.id })
        : (0, r.jsx)(e8.A, {
              ...a,
              id: t,
              compact: i,
              className: d()(s, { [nI.iU]: !0, [nI.HJ]: !i, [nI.H4]: !0, [nI._A]: !0 }),
              childrenHeader: nN({ messageProps: e, setPopout: u, messagePopouts: c, replyReference: l, author: g }),
              childrenSystemMessage: (0, nK.A)(e),
              childrenMessageContent: null,
              "aria-labelledby": p,
              "aria-describedby": A,
              hasThread: !1,
              author: g,
          });
}
function nq(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: a = !1,
            className: c,
            groupId: u,
            viewingChannelId: g,
        } = e,
        p = n.type === w.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, h.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: x, handleBlur: E } = (0, e9.G8)(A),
        { popouts: S, selected: _, setPopout: I } = (0, tC.A)(n.id, nz.Fd),
        j = eZ.hD.useSetting(),
        y = eZ.rs.useSetting(),
        T = (0, m.bG)([eJ.A], () => eJ.A.getMessageByReference(p)),
        N = (0, eq.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: b,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, e9.yp)({ groupId: u, message: n, defaultValue: _ }),
        D = (0, m.bG)([v.A], () => v.A.keyboardModeEnabled),
        L = _ || (D && C),
        k = L || R,
        O = (0, m.bG)([eQ.A], () => eQ.A.isDeveloper),
        {
            content: P,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tx.A)(n, {
            hideSimpleEmbedContent: j && y,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: O,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        F = tf(l, i, D),
        H = (0, e4.Ay)(n),
        B = (0, e6.fF)(n, u),
        V = (0, e6.ZD)(n),
        K = (0, r.jsx)(te.x, { value: k, children: (0, nb.A)(e, P, !1) }),
        z = o.useCallback(() => (0, eY.uh)(s, i, l), [s, i, l]),
        W = (0, eW.$7)({ guildId: s, roleId: H.iconRoleId });
    return (0, r.jsxs)("div", {
        className: nI.m5,
        children: [
            (0, r.jsx)(eM.D, {
                className: nI.lA,
                onClick: z,
                "aria-label": ek.intl.string(ek.t.k5WiPf),
                children: ek.intl.string(ek.t.k5WiPf),
            }),
            (0, r.jsx)(e8.A, {
                ...f,
                id: t,
                compact: a,
                className: d()(c, {
                    [nI.iU]: !0,
                    [nI.HJ]: !a,
                    [nI.mK]: n.mentioned,
                    [nI.M1]: (0, ed.ec)(n),
                    [nI.H4]: (0, e3.A)(n),
                    [nI._A]: n.id === u || n.type === w.lAJ.REPLY,
                    [nI.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: F,
                onFocus: x,
                onBlur: E,
                childrenRepliedMessage:
                    n.type === w.lAJ.REPLY &&
                    nB({
                        ...e,
                        setPopout: I,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: T,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nN({
                    messageProps: e,
                    setPopout: I,
                    messagePopouts: S,
                    replyReference: p,
                    author: H,
                    repliedMessage: T,
                    roleIcon: W,
                }),
                childrenAccessories: (0, tS.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: G,
                    hasBailedAst: U,
                    isInteracting: k,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nK.A)(e),
                childrenMessageContent: K,
                onMouseMove: b,
                onMouseLeave: M,
                "aria-labelledby": B,
                "aria-describedby": V,
                hasThread: !1,
                author: H,
            }),
        ],
    });
}
let n$ = o.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: a,
            channel: { id: c },
            compact: u = !1,
            className: g,
            flashKey: A,
            groupId: f,
            renderContentOnly: C,
        } = e;
    eV()(i.type !== w.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let x = w.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: E, ...S } = (0, h.rm)(e.id ?? ""),
        _ = eZ.hD.useSetting(),
        I = eZ.rs.useSetting(),
        j = (0, m.bG)([eJ.A], () => eJ.A.getMessageByReference(x)),
        { popouts: y, selected: T, setPopout: N } = (0, tC.A)(i.id, nz.Fd),
        b = (0, e9.VL)(i, a, N),
        M = (0, e9.ri)(i, a),
        {
            handleMouseEnter: R,
            handleMouseLeave: D,
            hasHovered: L,
            isHovered: k,
        } = (0, e9.yp)({ groupId: f, message: i, defaultValue: T }),
        { isFocused: O, hasFocused: P, handleFocus: G, handleBlur: U } = (0, e9.G8)(E),
        F = o.useCallback(
            (e) => {
                G(e), R(e);
            },
            [G, R],
        ),
        H = o.useCallback(
            (e) => {
                U(e), D();
            },
            [U, D],
        ),
        B = (0, m.bG)([e0.A], () => e0.A.isEditing(c, s), [c, s]),
        V = (0, m.bG)([v.A], () => v.A.keyboardModeEnabled),
        K = T || B || (V && O),
        z = K || k,
        W = (0, m.bG)(
            [eX.A],
            () => i.hasFlag(w.pr7.HAS_THREAD) && eX.A.getChannel(el.default.castMessageIdAsChannelId(i.id)),
        ),
        q = i.isFirstMessageInForumPost(a),
        $ = (0, eq.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        J = (0, m.bG)([eQ.A], () => eQ.A.isDeveloper),
        {
            content: Y,
            hasSpoilerEmbeds: Z,
            hasBailedAst: X,
        } = (0, tx.A)(i, {
            hideSimpleEmbedContent: _ && I,
            formatInline: !1,
            allowList: q || $,
            allowHeading: q || $,
            allowLinks: !0,
            allowDevLinks: J,
            previewLinkTarget: !0,
        }),
        Q = tf(s, c, V),
        ee = (0, e4.Ay)(i),
        et = (0, m.bG)([e$.A], () => e$.A.getPendingReply(c)),
        en =
            ((t = o.useRef(A)),
            o.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        ei = (0, eW.$7)({ guildId: a.guild_id, roleId: ee.iconRoleId }),
        es = (0, eK.A)(c, s)?.color ?? null,
        ea = (0, e6.fF)(i, f),
        eo = (0, e6.ZD)(i),
        ec = (0, m.bG)([ez.A], () => ez.A.getMessage(s), [s]),
        eu = (0, e1.bW)(a.guild_id, "ChatMessage"),
        eh = (0, tE.A)({ message: i, channel: a, officialMessagesEnabled: eu }),
        em = o.useRef(window),
        eg = null != ec;
    (n =
        i.type === w.lAJ.CUSTOM_GIFT
            ? ""
            : !B && eg
              ? (function (e, t) {
                    let { message: n, compact: l } = e;
                    return (0, r.jsx)(tk, { message: n, content: t, compact: l ?? !1 });
                })(e, Y)
              : (0, nb.A)(e, Y, B)),
        (n = (0, r.jsx)(te.x, { value: z, children: n }));
    let ep = i.id === f,
        eA = (0, r.jsx)(p.vN, {
            offset: { left: 4, right: 4 },
            children: (0, r.jsx)("li", {
                id: l,
                className: nI.Nt,
                "aria-setsize": -1,
                style: null != es ? { backgroundColor: es } : void 0,
                children: (0, r.jsx)(e8.A, {
                    ...S,
                    "aria-setsize": -1,
                    "aria-roledescription": ek.intl.string(ek.t.BAB0yK),
                    "aria-labelledby": ea,
                    "aria-describedby": eo,
                    onFocus: F,
                    onBlur: H,
                    onContextMenu: b,
                    onKeyDown: Q,
                    onClick: M,
                    compact: u,
                    contentOnly: C,
                    className: d()(g, {
                        [nI.iU]: !0,
                        [nI.HJ]: !u,
                        [nI.mK]: i.mentioned,
                        [nI.M1]: (0, ed.ec)(i),
                        [nI.SH]: i.type === w.lAJ.NITRO_NOTIFICATION,
                        [nI.Sg]: i.hasFlag(w.pr7.IS_GUILD_OFFICIAL) && eu,
                        [nI.H4]: (0, e3.A)(i),
                        [nI._A]: !C && (ep || i.type === w.lAJ.REPLY),
                        [nI.wH]: K,
                        [nI.$n]: et?.message.id === i.id,
                        [nI.$w]: i.isCommandType() && i.state === w.cmJ.SENDING,
                        [nI.DX]: eg,
                    }),
                    zalgo: !B,
                    childrenRepliedMessage:
                        C || i.type !== w.lAJ.REPLY
                            ? void 0
                            : nB({
                                  ...e,
                                  setPopout: N,
                                  referencedUsernameProfile: y.referencedUsernameProfile,
                                  referencedAvatarProfile: y.referencedAvatarProfile,
                                  replyReference: x,
                                  replyMessage: j,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, r.jsx)(nV, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, N, y),
                    childrenHeader: C
                        ? void 0
                        : nN({
                              messageProps: e,
                              setPopout: N,
                              messagePopouts: y,
                              replyReference: x,
                              author: ee,
                              repliedMessage: j,
                              roleIcon: ei,
                          }),
                    childrenAccessories: (0, tS.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: Z,
                        hasBailedAst: X,
                        handleContextMenu: b,
                        isInteracting: z,
                        isAutomodBlockedMessage: eg,
                        forceAddReactions: i.type === w.lAJ.EMOJI_ADDED,
                    }),
                    childrenButtons:
                        L || P
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: l, moreUtilities: i },
                                          isFocused: s,
                                          buttonProps: { message: a, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = a.state === w.cmJ.SENDING,
                                      m = a.id === c,
                                      g = (0, er.Lt)(a.flags, w.pr7.EPHEMERAL),
                                      p = a.state === w.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, r.jsx)(n_, {
                                            className: nI.Uo,
                                            innerClassName: nI.Mc,
                                            isHeader: !d && m && !(0, e3.A)(a),
                                            isReply: !d && a.type === w.lAJ.REPLY && null != a.messageReference,
                                            channel: o,
                                            message: a,
                                            messageWindow: u,
                                            setPopout: t,
                                            showEmojiPicker: n,
                                            showEmojiBurstPicker: l,
                                            showMoreUtilities: i,
                                            isFocused: s,
                                        });
                              })({
                                  buttonProps: e,
                                  setPopout: N,
                                  messagePopouts: y,
                                  isFocused: k || O,
                                  messageWindow: em.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nK.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: R,
                    onMouseLeave: D,
                    hasThread: !C && i.hasFlag(w.pr7.HAS_THREAD) && null != W,
                    isSystemMessage: (0, e3.A)(i),
                    hasReply: i.type === w.lAJ.REPLY,
                    messageRef: (e) => {
                        (eh.current = e), (em.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: ee,
                }),
            }),
        });
    return null != en
        ? (0, r.jsx)(
              e5,
              { flashKey: en, className: d()({ [nI.bB]: !0, [nI._A]: !u && i.id === f }), children: eA },
              `bg-flash-${l}`,
          )
        : eA;
});
n(801541);
var nJ = n(889137),
    nY = n(952270),
    nZ = n(428678),
    nX = n(353182),
    nQ = n(922529),
    n0 = n(888675),
    n1 = n(21623);
function n2(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        o = (0, nJ.YW)({ collapsedReason: s })
            .with({ collapsedReason: ek.t["VFWjc+"] }, () =>
                (0, r.jsx)(nY.G, { size: "md", color: "currentColor", className: n1.Q6 }),
            )
            .with({ collapsedReason: ek.t["+FcYM/"] }, () =>
                (0, r.jsx)(nZ.K, { size: "md", color: "currentColor", className: n1.Q6 }),
            )
            .with({ collapsedReason: ek.t.rHRovo }, () =>
                (0, r.jsx)(nX._, { size: "md", color: "currentColor", className: n1.TG }),
            )
            .otherwise(() => (0, r.jsx)(eR.P, { size: "md", color: "currentColor", className: n1.Q6 }));
    return (0, r.jsx)(e8.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(n0.A, {
            compact: i,
            className: n1.L9,
            iconNode: o,
            children: (0, r.jsxs)("div", {
                className: a ? n1.Fo : n1.GU,
                children: [
                    ek.intl.format(s, { count: l }),
                    a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, r.jsx)(eM.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: n1.rB,
                                    children: t ? ek.intl.string(ek.t.fgq1gs) : ek.intl.string(ek.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let n3 = o.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        { hasJumpTarget: c = !1 } = t,
        [u, h] = o.useState(c && a),
        m = o.useCallback(() => {
            a && h((e) => !e);
        }, [a]);
    o.useEffect(() => {
        c && a && h(!0);
    }, [c, a]);
    let g = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, r.jsxs)("div", {
        className: d()({ [nI._A]: !0, [n1.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === w.TZK.DIVIDER)
                ? (0, r.jsx)(nQ.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, r.jsx)(
                n2,
                { count: g, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: a },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === w.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, r.jsx)(nQ.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === w.TZK.MESSAGE || e.type === w.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === w.TZK.THREAD_STARTER_MESSAGE ? nW : n$;
                          return (0, r.jsx)(
                              t,
                              {
                                  id: (0, e2.j)(n.id, e.content.id),
                                  className: n1.__invalid_blocked,
                                  compact: l,
                                  channel: n,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1,
                              },
                              e.content.id,
                          );
                      }
                  })
                : null,
        ],
    });
});
var n4 = n(114212),
    n7 = n(765671),
    n5 = n(999803);
let n8 = { tension: 120, friction: 18 };
function n6(e) {
    let { isCollapsed: t, children: n } = e,
        l = o.useRef(null),
        i = o.useRef(void 0),
        [s, a] = o.useState(!1);
    (0, n7.i4)(
        l,
        (e) => {
            let { height: t } = e;
            null != t && ((i.current = t), a(!0));
        },
        [],
    );
    let [{ height: c, opacity: d }, h] = (0, Z.z)(
            () => ({ from: { height: 0, opacity: 0 }, config: n8 }),
            "respect-motion-settings",
            [],
        ),
        m = o.useRef(null);
    return (
        o.useEffect(() => {
            if (!s) return;
            let e = i.current;
            if (null == e) return;
            let n = m.current;
            (m.current = t),
                n !== t &&
                    (t
                        ? h({ from: { height: e, opacity: 1 }, to: { height: 0, opacity: 0 } })
                        : null == n
                          ? h({ to: { height: e, opacity: 1 }, immediate: !0 })
                          : h({ from: { height: 0, opacity: 0 }, to: { height: e, opacity: 1 } }));
        }, [t, s, h]),
        (0, r.jsx)(u.animated.div, {
            style: {
                height: s ? c : "auto",
                opacity: s ? d : 1,
                overflow: "hidden",
                pointerEvents: t ? "none" : "auto",
            },
            children: (0, r.jsx)("div", { className: n5.t, ref: l, children: n }),
        })
    );
}
let n9 = o.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, r.jsx)(n6, { isCollapsed: n, children: l });
});
var le = n(283243);
function lt(e) {
    return "group" in e;
}
let ln = (0, r.jsxs)(r.Fragment, {
    children: [
        (0, r.jsx)(n4.Ay, { messages: 4, groupSpacing: 16, className: le.Xb }),
        (0, r.jsx)(n4.Ay, { messages: 2, groupSpacing: 16, className: le.Xb }),
        (0, r.jsx)(n4.Ay, { messages: 3, groupSpacing: 16, className: le.Xb }),
    ],
});
function ll(e) {
    let { channel: t, conversation: n, focusStream: l, isCollapsed: i } = e,
        s = (0, m.bG)([P.A], () => P.A.isConversationFetchPending(n.id), [n]);
    return (0, r.jsxs)("div", {
        className: le.XT,
        children: [
            (0, r.jsx)("ol", {
                className: le.cl,
                children: l.map((e) => {
                    if (lt(e)) {
                        var n;
                        return (0, r.jsx)(
                            n9,
                            {
                                isOnTopic: e.isOnTopic,
                                isCollapsed: i,
                                children: (0, r.jsx)(n3, {
                                    messages: e.group,
                                    channel: t,
                                    unreadId: "",
                                    collapsedReason:
                                        (n = e.group.type) === w.TZK.MESSAGE_GROUP_BLOCKED
                                            ? ek.t["+FcYM/"]
                                            : n === w.TZK.MESSAGE_GROUP_IGNORED
                                              ? ek.t["VFWjc+"]
                                              : n === w.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                ? ek.t.rHRovo
                                                : ek.t.xfkfTK,
                                    canUncollapse: e.group.type !== w.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                }),
                            },
                            e.group.key,
                        );
                    }
                    return (0, r.jsx)(
                        n9,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: i,
                            children: (0, r.jsx)(n$, {
                                id: `overlay-msg-${e.record.id}`,
                                message: e.record,
                                channel: t,
                                groupId: e.groupId,
                                isLastItem: !1,
                                renderContentOnly: !1,
                            }),
                        },
                        e.record.id,
                    );
                }),
            }),
            s && ln,
        ],
    });
}
n(30146);
var li = n(735438),
    ls = n.n(li);
let la = { tension: 240, friction: 30 },
    lr = { tension: 320, friction: 28 },
    lo = { tension: 280, friction: 24, clamp: !0 },
    lc = { tension: 220, friction: 26, clamp: !0 },
    ld = { tension: 170, friction: 22, clamp: !0 },
    lu = { tension: 220, friction: 28, clamp: !0 },
    lh = 6,
    lm = -3,
    lg = 9;
function lp() {
    let { dismissReason: e } = q(),
        { isFocused: t } = (0, B.D7)();
    return t ? lo : "navigation" === e ? lu : ld;
}
var lA = n(798531);
async function lf(e) {
    let t = e.current,
        n = t?.getScrollerNode();
    null == t ||
        null == n ||
        n.scrollTop <= 5 ||
        (await new Promise((e) => {
            t.scrollTo({ to: 0, animate: !0, callback: () => e() });
        }));
}
function lC(e) {
    let { style: t, channel: n, conversation: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: a } = (0, B.D7)(),
        { dismissReason: c } = q(),
        d = a ? lo : "navigation" === c ? lu : ld,
        h = (0, Y.r)(J.A.colors.BORDER_SUBTLE).spring(),
        g = (0, Y.r)(J.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: p,
            shadowAlpha: A,
            contentPadding: f,
        } = (0, Z.z)(
            { borderTopRadius: a ? 12 : 8, shadowAlpha: 0.4 * !!a, contentPadding: 4 * !!a, config: d },
            "respect-motion-settings",
        ),
        { borderColor: C } = (0, Z.z)({ borderColor: a ? h : g, config: d }, "respect-motion-settings"),
        [x, E] = o.useState(!1),
        [S, _] = o.useState(!0),
        I = o.useCallback(() => {
            let e = i.current;
            null != e && (E(e.getDistanceFromTop() > 5), _(e.getDistanceFromBottom() > 5));
        }, [i]),
        j = (0, m.bG)([ep.A], () => ep.A.getMessages(n.id), [n.id]),
        y = (0, m.bG)([P.A], () => (l?.id != null ? P.A.getHydratedMessages(n.id, l.id) : null), [n.id, l]),
        v = o.useMemo(
            () =>
                null != l
                    ? (function (e, t, n, l) {
                          let i = (function (e, t, n) {
                                  let l = new Set(e.messageIds),
                                      i = [],
                                      s = new Set(),
                                      a = 0;
                                  if (
                                      (t.forEach((t) => {
                                          0 > el.default.compare(t.id, e.startMessageId) ||
                                              el.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return i.sort((e, t) => el.default.compare(e.record.id, t.record.id)), i;
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, ei.A)(e, a, t.record)) && (r = t.record.id);
                              let n = eg(e, t.record, (0, es.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && lt(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: w.TZK.MESSAGE, content: t.record, groupId: r };
                                  e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0);
                              } else s.push({ record: t.record, isOnTopic: t.isOnTopic, groupId: r });
                              a = t.record;
                          }
                          return s;
                      })(n, l, j, y)
                    : [],
            [n, l, j, y],
        );
    return null == l
        ? null
        : (0, r.jsxs)(u.animated.div, {
              className: lA.Nr,
              style: {
                  top: t.cardTop,
                  bottom: 0,
                  left: t.cardInsetLeft,
                  right: t.cardInsetRight,
                  opacity: t.cardOpacity,
                  borderColor: C,
                  borderRadius: p.to((e) => `${e}px ${e}px 0 0`),
                  boxShadow: A.to((e) => `0 8px 24px rgba(0, 0, 0, ${e})`),
              },
              children: [
                  (0, r.jsx)(u.animated.div, { className: lA.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, r.jsx)(u.animated.div, {
                      style: { paddingTop: f, paddingLeft: f, paddingRight: f },
                      children: (0, r.jsx)(eH, { channel: n, conversation: l, requestDismiss: s }),
                  }),
                  (0, r.jsxs)("div", {
                      className: lA.gk,
                      children: [
                          (0, r.jsx)(X.zC, {
                              className: lA.XG,
                              ref: i,
                              onScroll: I,
                              children: (0, r.jsxs)(u.animated.div, {
                                  style: { paddingLeft: f, paddingRight: f },
                                  children: [
                                      (0, r.jsx)(ll, {
                                          channel: n,
                                          conversation: l,
                                          focusStream: v,
                                          isCollapsed: a || "navigation" === c,
                                      }),
                                      (0, r.jsx)("div", { className: lA.lB }),
                                  ],
                              }),
                          }),
                          x && (0, r.jsx)("div", { className: lA.iX, "aria-hidden": !0 }),
                          S && (0, r.jsx)("div", { className: lA.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lx(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = q(),
        { bannerMeasurementRef: i } = z(),
        { isFocused: s, setIsFocused: a } = (0, B.D7)(),
        c = lp(),
        d = o.useRef(!1),
        h = o.useRef(null),
        g = (0, m.bG)([P.A], () => P.A.getSelectedConversationId(t.id), [t.id]),
        p = o.useCallback(
            async (e) => {
                if (null != g && !d.current) {
                    if (
                        ((d.current = !0),
                        H.trackFocusModeDismissed({ channel: t, conversationId: g, dismissReason: e }),
                        "return" === e)
                    ) {
                        let e = P.A.getConversationMetadata(t.id, g)?.conversation;
                        if (null != e)
                            try {
                                await I.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await lf(h);
                    }
                    l(e), a(!1), (d.current = !1);
                }
            },
            [t, a, l, h, g],
        );
    !(function (e, t) {
        let { isFocused: n } = (0, B.D7)(),
            l = (0, m.cf)([ep.A], () => {
                let t = ep.A.getMessages(e.id);
                return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
            }, [e.id]),
            i = o.useRef(l);
        o.useEffect(() => {
            if (!n) return;
            let t = ep.A.getMessages(e.id);
            i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
        }, [n, e.id]),
            o.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: s } = i.current;
                (l.jumpTargetId !== e || l.jumpSequenceId !== s) && t("navigation");
            }, [n, l, t]);
    })(t, p),
        o.useEffect(() => {
            if (!s) return;
            let e = () => {
                p("return");
            };
            return (
                eA._.subscribe(w.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                () => {
                    eA._.unsubscribe(w.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                }
            );
        }, [s, p]);
    let A = (0, Q.p)(
            s,
            { from: { opacity: 0 }, enter: { opacity: 0.9 }, leave: { opacity: 0 }, config: c },
            "respect-motion-settings",
        ),
        f = o.useCallback(() => {
            p("return");
        }, [p]),
        C = o.useMemo(
            () => ({
                from: () => ({
                    cardTop: i.current ?? 0,
                    cardInsetLeft: 4,
                    cardInsetRight: 16,
                    bodyTintOpacity: 0,
                    cardOpacity: 1,
                }),
                enter: { cardTop: 32, cardInsetLeft: 32, cardInsetRight: 32, bodyTintOpacity: 1, cardOpacity: 1 },
                leave: () => {
                    var e;
                    return (
                        (e = i.current),
                        "navigation" === n
                            ? { cardTop: 32, cardInsetLeft: 32, cardInsetRight: 32, bodyTintOpacity: 0, cardOpacity: 0 }
                            : {
                                  cardTop: e ?? 0,
                                  cardInsetLeft: 4,
                                  cardInsetRight: 16,
                                  bodyTintOpacity: 0,
                                  cardOpacity: 1,
                              }
                    );
                },
                config: () => (e) => ("leave" !== e ? lo : "navigation" === n ? lu : ld),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        x = (0, Q.p)(s ? g : null, C, "respect-motion-settings");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A((e, t) =>
                t ? (0, r.jsx)(u.animated.div, { className: lA.tB, style: e, onClick: f, "aria-hidden": !0 }) : null,
            ),
            x((e, n) => {
                if (null == n) return null;
                let l = P.A.getConversationMetadata(t.id, n)?.conversation ?? null;
                return (0, r.jsx)(lC, { style: e, channel: t, conversation: l, scrollerRef: h, requestDismiss: p });
            }),
        ],
    });
}
let lE = (e) => {
    let { channel: t } = e,
        { isFocused: n } = (0, B.D7)(),
        { dismissReason: l } = q();
    return n || null !== l ? (0, r.jsx)(lx, { channel: t }) : null;
};
var lS = n(708988),
    l_ = n(872351),
    lI = n(839181);
let lj = (0, u.animated)("button"),
    ly = (0, u.animated)(ej.E);
function lv(e) {
    e.preventDefault();
}
let lT = o.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: a,
            layout: c,
            isExpanded: h,
            anchorId: m,
            hoveredConversationId: g,
            selectedConversationId: p,
            isFocusOverlayOpen: A,
            onHoverConversationChange: f,
            onJump: C,
        } = e,
        x = p === a.id,
        E = g === a.id,
        S = null != g && !E,
        _ = null == m ? "up" : el.default.compare(a.startMessageId, m) > 0 ? "down" : "up",
        I = a.title,
        j = Math.min(16, Math.max(4, Math.round(0.6 * I.length))),
        y = (0, Z.z)({ y: c.y, opacity: +!c.hidden, config: la }, "respect-motion-settings"),
        v = (0, Z.z)(
            {
                ...((t = h && x),
                (n = 0),
                h && (x && E ? (n = -17) : x ? (n = -13) : E && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                x && E ? ((l = 0), (i = 0), (s = 0.5)) : h && E && ((l = 1), (i = 0), (s = 1)),
                {
                    textScale: h ? 1 : 0.5,
                    textX: n,
                    textOpacity: +!!h,
                    lineScaleX: h ? 3 : 1,
                    pillOpacity: +!!t,
                    pillX: t ? (E ? -4 : 0) : 8,
                    pillScale: t ? 1 : 0.85,
                    arrowOpacity: l,
                    arrowX: i,
                    arrowScale: s,
                }),
                lineWidth: j,
                lineOpacity: +(!h && !c.hidden),
                config: lr,
            },
            "respect-motion-settings",
        ),
        T = o.useCallback(() => f(a.id), [f, a.id]),
        N = o.useCallback(() => f(null), [f]),
        b = o.useCallback(() => C(a.id), [C, a.id]),
        M = c.hidden || c.edge;
    return (0, r.jsxs)(lj, {
        "aria-current": x ? "true" : void 0,
        "aria-hidden": M ? "true" : void 0,
        className: d()(lI.ng, { [lI._D]: x, [lI.DJ]: E, [lI.KZ]: S }),
        style: {
            transform: y.y.to((e) => `translateY(${e}px)`),
            opacity: y.opacity,
            pointerEvents: M ? "none" : void 0,
        },
        onMouseDown: lv,
        onMouseEnter: T,
        onMouseLeave: N,
        onClick: b,
        children: [
            (0, r.jsx)(u.animated.span, {
                className: d()(lI.Og, A && lI.v7),
                style: {
                    opacity: v.pillOpacity,
                    transform: (0, u.to)(
                        [v.pillX, v.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, r.jsx)(ej.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: lI.B6,
                    children: I,
                }),
            }),
            (0, r.jsx)(ly, {
                tag: "span",
                variant: x ? "text-md/semibold" : "text-md/normal",
                color: x ? "text-strong" : E ? "text-default" : S ? "text-muted" : "text-subtle",
                className: lI.QV,
                lineClamp: 1,
                style: {
                    opacity: v.textOpacity,
                    transform: (0, u.to)([v.textScale, v.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: I,
            }),
            (0, r.jsx)("span", {
                className: lI.iF,
                children: (0, r.jsx)(u.animated.span, {
                    className: lI.iN,
                    style: {
                        width: v.lineWidth,
                        opacity: v.lineOpacity,
                        transform: v.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, r.jsx)(u.animated.span, {
                className: lI.$N,
                "aria-hidden": "true",
                style: {
                    opacity: v.arrowOpacity,
                    transform: (0, u.to)([v.arrowX, v.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === _
                        ? (0, r.jsx)(lS.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, r.jsx)(l_.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function lN(e) {
    let {
            items: t,
            isExpanded: n,
            anchorId: l,
            hoveredConversationId: i,
            selectedConversationId: s,
            showTopFade: a,
            showBottomFade: c,
            isFocusOverlayOpen: u,
            onHoverConversationChange: h,
            onJump: m,
        } = e,
        g = o.useMemo(() => (n && null != s ? (t.find((e) => e.conversation.id === s)?.slot ?? -1) : -1), [n, t, s]),
        p = o.useMemo(() => {
            let e = new Map();
            for (let t = lm; t <= lg; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i ? ((t = 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8)) : (t = 42 + 14 * n),
                            {
                                y: t,
                                hidden: r,
                                edge: i ? !r && ((0 === n && s) || (6 === n && a)) : (n <= 0 && s) || (n >= 6 && a),
                            }
                        );
                    })({ slot: t, jumpedSlot: g, isExpanded: n, showTopFade: a, showBottomFade: c }),
                );
            return e;
        }, [g, n, a, c]);
    return (0, r.jsx)("div", {
        className: d()(lI._R, n && lI.h1),
        role: "list",
        "aria-label": ek.intl.string(eL.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: a } = e,
                o = p.get(a);
            return null == o
                ? null
                : (0, r.jsx)(
                      lT,
                      {
                          conversation: t,
                          layout: o,
                          isExpanded: n,
                          anchorId: l,
                          hoveredConversationId: i,
                          selectedConversationId: s,
                          isFocusOverlayOpen: u,
                          onHoverConversationChange: h,
                          onJump: m,
                      },
                      t.id,
                  );
        }),
    });
}
var lb = n(778712),
    lM = n(97808),
    lR = n(854627),
    lD = n(562153),
    lL = n(57004);
let lk = [
    { name: "40%", l1: "75%", l2: "50%" },
    { name: "55%", l1: "90%", l2: null },
    { name: "30%", l1: "60%", l2: "80%" },
    { name: "65%", l1: "45%", l2: "70%" },
];
function lO(e) {
    let { channel: t, message: n } = e,
        l = lD.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lR.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: lb._3.SIZE_32,
        }),
        a = o.useMemo(() => (0, tv.Ay)(n).content, [n]),
        c = eZ.PZ.useSetting(),
        d = o.useMemo(() => (0, en.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, r.jsxs)("div", {
        className: lL.QS,
        children: [
            (0, r.jsx)(lM.eu, {
                className: lL.MM,
                src: i,
                avatarDecoration: s,
                size: lb._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, r.jsxs)("div", {
                className: lL.gp,
                children: [
                    (0, r.jsxs)("div", {
                        className: lL.yl,
                        children: [
                            (0, r.jsx)(ej.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, r.jsx)(ej.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsx)(ej.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            }),
        ],
    });
}
function lP() {
    return (0, r.jsx)("div", {
        className: lL.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lk[t % lk.length];
            return (0, r.jsxs)(
                "div",
                {
                    className: lL.uA,
                    children: [
                        (0, r.jsx)("div", { className: lL.h }),
                        (0, r.jsxs)("div", {
                            className: lL.jE,
                            children: [
                                (0, r.jsx)("div", { className: lL.zw, style: { width: n.name } }),
                                (0, r.jsx)("div", { className: lL.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, r.jsx)("div", { className: lL.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lG(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, B.D7)(),
        i = (0, m.bG)([P.A], () => P.A.getHydratedMessages(t.id, n), [n, t.id]);
    o.useEffect(() => {
        null == i && (0, G.ik)(t.id, t.guild_id, n);
    }, [n, i, t]);
    let s = i?.slice(0, 4) ?? [];
    return (0, r.jsx)("div", {
        className: d()(lL.Zt, l && lL.CU),
        children: (0, r.jsx)("div", {
            className: lL.eU,
            children:
                null == i
                    ? (0, r.jsx)(lP, {})
                    : s.length > 0
                      ? (0, r.jsx)("div", {
                            className: lL.z0,
                            children: s.map((e) => (0, r.jsx)(lO, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lU = n(311394);
function lw(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, m.bG)([P.A], () => P.A.getSelectedConversation(t.id)?.id ?? null, [t.id]),
        { selectAndFocusConversation: s } = z(),
        { isFocused: a } = (0, B.D7)(),
        c = lp(),
        h = (0, Z.z)({ insetInlineEnd: a ? 48 : 16, config: c }, "respect-motion-settings"),
        g = (function (e) {
            let [t, n] = o.useState(null);
            return (
                o.useEffect(() => {
                    let t = (e) => n(e?.id ?? null);
                    return e.addAutomaticAnchorCallback(t, !0), () => e.removeAutomaticAnchorCallback(t);
                }, [e]),
                t
            );
        })(n),
        p = o.useMemo(
            () =>
                0 === l.length
                    ? null
                    : (l[
                          (function (e, t) {
                              if (0 === e.length) return 0;
                              if (null == t) return e.length - 1;
                              let n = e.findLastIndex((e) => 0 >= el.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, g)
                      ]?.id ?? null),
            [g, l],
        ),
        A = o.useMemo(
            () =>
                0 === l.length
                    ? null
                    : null != i && l.some((e) => e.id === i)
                      ? i
                      : null != p && l.some((e) => e.id === p)
                        ? p
                        : l[l.length - 1].id,
            [p, l, i],
        ),
        { clampLow: f, clampHigh: C } = (function (e) {
            if (0 === e) return { clampLow: 0, clampHigh: 0 };
            let t = Math.min(2, e - 1),
                n = Math.max(t, e - 1 - 2);
            return { clampLow: t, clampHigh: n };
        })(l.length),
        x = o.useMemo(
            () =>
                (function (e, t, n, l) {
                    if (0 === e.length) return 0;
                    let i = null != t ? e.findIndex((e) => e.id === t) : -1,
                        s = i >= 0 ? i : e.length - 1;
                    return (0, li.clamp)(s, n, l);
                })(l, A, f, C),
            [l, A, f, C],
        ),
        [E, S] = o.useState(!1),
        _ = o.useCallback(() => S(!1), []),
        I = o.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lh; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, x),
            [l, x],
        ),
        j = o.useMemo(() => I.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [I]),
        { showTopFade: y, showBottomFade: v } = o.useMemo(
            () => ({ showTopFade: x >= 3, showBottomFade: x < l.length - 3 }),
            [x, l.length],
        ),
        T = o.useRef(null),
        [N, b] = o.useState(null),
        M = null != N && N !== i ? N : null;
    o.useEffect(() => {
        H.trackEntrypointImpression({ channel: t, conversationCount: j.length });
    }, [t.id]);
    let R = o.useCallback(
            (e) => {
                null != e && e !== i && H.trackPreviewImpression({ channel: t, conversationId: e, isFocusMode: a }),
                    b(e);
            },
            [t, a, i],
        ),
        D = o.useCallback(() => {
            b(null), _();
        }, [_]),
        L = o.useCallback(
            (e) => {
                H.trackTopicsUnitClicked({ channel: t, conversationId: e, isFocusMode: a }), s(e), _();
            },
            [t, _, a, s],
        ),
        k = o.useCallback(() => (null != M ? (0, r.jsx)(lG, { channel: t, conversationId: M }) : null), [t, M]),
        O = o.useCallback(
            (e) => {
                let t;
                null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    E && (b(null), _());
            },
            [n, E, _],
        ),
        G = o.useCallback(() => {
            S(!0), H.trackTopicsUnitImpression({ channel: t, conversationIds: j.map((e) => e.id), isFocusMode: a });
        }, [t, j, a]);
    return 0 === l.length
        ? null
        : (0, r.jsx)(u.animated.div, {
              className: d()(lU.kL, a && lU.tW),
              style: { insetInlineEnd: h.insetInlineEnd },
              children: (0, r.jsxs)("div", {
                  className: d()(lU.rI, E && lU.RK),
                  onMouseEnter: G,
                  onMouseLeave: D,
                  onWheel: a ? void 0 : O,
                  children: [
                      (0, r.jsx)("div", { className: d()(lU.oT, E && lU.RK), "aria-hidden": !0 }),
                      (0, r.jsx)(e_.Y, {
                          targetElementRef: T,
                          shouldShow: E && null != M,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: e_.Y.Animation.FADE,
                          renderPopout: k,
                          children: () =>
                              (0, r.jsx)("div", {
                                  ref: T,
                                  className: d()(lU.nd, { [lU.mc]: E, [lU._z]: !E, [lU.OP]: E && y, [lU.yc]: E && v }),
                                  style: { height: 188 },
                                  children: (0, r.jsx)(lN, {
                                      items: I,
                                      isExpanded: E,
                                      anchorId: g,
                                      hoveredConversationId: N,
                                      selectedConversationId: i,
                                      showTopFade: y,
                                      showBottomFade: v,
                                      isFocusOverlayOpen: a,
                                      onHoverConversationChange: R,
                                      onJump: L,
                                  }),
                              }),
                      }),
                  ],
              }),
          });
}
function lF(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, O.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, m.yK)([P.A], () => (l ? P.A.getChannelConversations(t.id).map((e) => e.conversation) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, r.jsx)(lw, { channel: t, scrollManager: n, conversations: i }) : null;
}
let lH = (e) => {
    let { channel: t, scrollManager: n } = e;
    return (0, O.sV)(t.guild_id, "scrollbar_chips")
        ? (0, r.jsxs)($, {
              children: [(0, r.jsx)(lE, { channel: t }), (0, r.jsx)(lF, { channel: t, scrollManager: n })],
          })
        : null;
};
var lB = n(354328),
    lV = n(807632),
    lK = n(164956),
    lz = n(302031),
    lW = n(822074),
    lq = n(617617),
    l$ = n(72314),
    lJ = n(222823),
    lY = n(399263),
    lZ = n(287809),
    lX = n(234320),
    lQ = n(863439),
    l0 = n(326337),
    l1 = n(615170);
function l2(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return o.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, r.jsx)("div", {
            className: l1.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, r.jsx)(n4.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l3 = n(830178),
    l4 = n(887129),
    l7 = n(621466),
    l5 = n(951001),
    l8 = n(334738),
    l6 = n(267102),
    l9 = n(863922);
function ie(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l7.vq)(l, HTMLElement); ) (n += l.offsetTop ?? 0), (l = l.offsetParent);
    return n;
}
function it(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === el.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === n) return t;
        let l = e.getByIndex(e.indexOf(t) + n);
        return l?.id ?? t;
    }
    let l = [
            t,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(el.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let il = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class ii {
    props;
    ref = o.createRef();
    automaticAnchor = null;
    messageFetchAnchor = null;
    focusAnchor = null;
    loading;
    jumping = !1;
    pinned;
    dragging = !1;
    isAtBottom = !1;
    prevScrollTop = null;
    anchorTimeout = null;
    initialScrollTop = null;
    acking = !1;
    scrollCounter = 0;
    offsetHeightCache = 0;
    scrollHeightCache = 0;
    scrollTopCache = -1;
    scrollHeightBeforeLoad = 0;
    loadMorePausedUntilUserScroll = !1;
    _bottomAnchor = null;
    _automaticAnchorCallbacks = [];
    _scrollCompleteCallbacks = [];
    constructor(e) {
        if (((this.props = e), (this.loading = e.messages.loadingMore), null != e.messages.jumpTargetId))
            this.pinned = !1;
        else {
            const t = l$.A.isAtBottom(e.channel.id);
            (this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (l$.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null));
        }
    }
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned;
    }
    isJumping() {
        return this.jumping;
    }
    isDragging() {
        return this.dragging;
    }
    isInitialized() {
        return void 0 === this.initialScrollTop;
    }
    isScrollLoadingDisabled() {
        return (
            !!this.loadMorePausedUntilUserScroll ||
            this.isLoading() ||
            !this.isInitialized() ||
            this.isJumping() ||
            this.isDragging() ||
            !this.props.canLoadMore
        );
    }
    isActivelyScrolling() {
        return this.scrollCounter >= 5;
    }
    getDocument() {
        return this.ref.current?.getScrollerNode()?.ownerDocument;
    }
    getElementFromMessageId(e) {
        let t = this.getDocument(),
            {
                channel: { id: n },
            } = this.props;
        return null == t ? null : t.getElementById((0, e2.j)(n, e));
    }
    isScrolledToBottom() {
        let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - 2 && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck();
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = { ...e };
        let { offsetHeight: l, scrollHeight: i } = this.getScrollerState(),
            s = this.isHeightChange(l, i);
        if (
            ((this.offsetHeightCache = l),
            (this.scrollHeightCache = i),
            (this.loading = e.messages.loadingMore),
            t.channelId !== e.messages.channelId)
        )
            this.loadMorePausedUntilUserScroll = !1;
        else if (t.loadingMore && !e.messages.loadingMore) {
            let e = Math.abs(i - this.scrollHeightBeforeLoad);
            this.loadMorePausedUntilUserScroll = e < 100;
        }
        if (this.isInitialized() || this.isReady()) {
            if (!this.isInitialized()) return void this.restoreScroll();
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = it(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping())
                    return void (null != n
                        ? this.scrollToMessage({ jumpTargetId: n, animate: !0 })
                        : (this.jumping = !1));
            } else {
                let l,
                    i = t.first();
                null != i &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (l = el.default.extractTimestamp(i.id)),
                    this.scrollToMessage({ jumpTargetId: n, animate: !0, fromTimestamp: l });
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            r = t.last();
        if (null != a && a.state === w.cmJ.SENDING && r?.id !== a.id) return void this.setScrollToBottom();
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: nz.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, l7.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = ie(l, i),
            r = a - t;
        return (
            null != n && (r = Math.max(-s, Math.min(n, r))),
            { id: e, offsetFromTop: r, offsetTop: a, offsetHeight: s, clamped: null != r }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? nz.Gt : nz.k8;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            l = this.getScrollerState(),
            { scrollTop: i } = l,
            s = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            r = (t) => (-1 === t ? el.default.castChannelIdAsMessageId(n.id) : e._array[t]?.id),
            o = -1,
            c = !1;
        for (;;) {
            let t = r(o);
            if (null == t) break;
            let n = this.getAnchorData(t, i);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > i + s + l.offsetHeight)) break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= i + s || o === e.length - 1) && ((a = n), (c = !0)), o++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            l = e ? -1 : 1,
            i = null,
            s = t._array.length - 1;
        for (let a = e ? s : 0; null != t._array[a]; a += l) {
            let e = t._array[a],
                l = this.getAnchorData(e.id, n);
            if (null != l) {
                i = l;
                break;
            }
        }
        return i;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, l7.vq)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return { node: t, fixedScrollTop: t.offsetTop - (e.offsetFromTop + n) };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        null != this.focusAnchor
            ? (this.isPinned()
                  ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                  : this.mergeTo(n, this.handleScroll),
              this.ref.current?.scrollIntoViewNode({
                  node: t,
                  padding: nz.mZ + this.props.additionalMessagePadding,
                  callback: this.handleScroll,
              }))
            : this.mergeTo(n, this.handleScroll),
            this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()),
            this.isLoading() || (this.messageFetchAnchor = null);
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor;
    }
    updateFocusAnchor(e, t, n) {
        let l = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != l && (l.offsetFromTop >= n || t > l.offsetTop + l.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        this.updateFocusAnchor(this.focusAnchor?.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        let l = this.ref.current?.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != l &&
            (this.messageFetchAnchor = this.getAnchorData(
                this.messageFetchAnchor.id,
                e,
                this.isInPlaceholderRegion({ scrollTop: e, offsetHeight: t, scrollHeight: n }) > 0 ? t : void 0,
            ));
    }
    updateAutomaticAnchor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.ref.current?.getScrollerNode();
        if (null == this.automaticAnchor || null == n) return;
        let l = this.getAnchorData(this.automaticAnchor.id, e);
        t && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(l);
    }
    updateVisibleMessagesDebounced = ls().debounce(l9.s_, 300);
    setAutomaticAnchor(e) {
        (this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id);
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? il;
    }
    handleScroll = (e) => {
        if (!this.isInitialized()) return;
        let t = this.getScrollerState(),
            n = this.isScrolledToBottom(t);
        if (
            (n !== this.isAtBottom &&
                (n
                    ? ((this.isAtBottom = !0), this.props.handleScrollToBottom())
                    : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())),
            t.offsetHeight !== this.offsetHeightCache || t.scrollHeight !== this.scrollHeightCache)
        )
            (this.scrollCounter = 0),
                clearTimeout(this.anchorTimeout),
                this.isPinned() ||
                    (null == this.automaticAnchor
                        ? this.setAutomaticAnchor(this.findAnchor())
                        : this.updateAutomaticAnchor(t.scrollTop, !0)),
                clearTimeout(this.anchorTimeout),
                this.fixScrollPosition(t.offsetHeight, t.scrollHeight),
                (this.scrollTopCache = t.scrollTop);
        else {
            if (null != e && e.target !== this.ref.current?.getScrollerNode()) return;
            this.scrollTopCache !== t.scrollTop &&
                (this.loadMorePausedUntilUserScroll && null != e && (this.loadMorePausedUntilUserScroll = !1),
                (this.pinned = n),
                (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                this.pinned
                    ? this.cleanAutomaticAnchor()
                    : null != this.automaticAnchor
                      ? this.updateAutomaticAnchor(t.scrollTop, !0)
                      : this.setAutomaticAnchor(this.findAnchor()),
                (this.scrollTopCache = t.scrollTop),
                clearTimeout(this.anchorTimeout),
                (this.anchorTimeout = setTimeout(() => {
                    (this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null);
                    let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                    this.isHeightChange(t, e)
                        ? this.handleScroll()
                        : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()));
                }, 35)));
        }
        if (
            (this.handleFocusAnchorScroll(t.scrollTop, t.offsetHeight),
            this.updateStoreDimensionsDebounced(),
            this.isScrollLoadingDisabled())
        )
            return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(t);
        let l = this.isInScrollTriggerLoadingRegion(t);
        1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(t);
    };
    handleResize = (e, t) => {
        let { offsetHeightCache: n, scrollHeightCache: l } = this;
        "container" === t ? (n = e.contentRect.height) : "content" === t && (l = e.contentRect.height),
            this.isHeightChange(n, l) && this.fixScrollPosition(n, l);
    };
    handleMouseDown = (e) => {
        e.target === e.currentTarget && (this.dragging = !0);
    };
    handleMouseUp = () => {
        (this.dragging = !1), this.handleScroll();
    };
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i, placeholderHeight: s } = this.props;
        return i.hasMoreBefore && t < s && l > n ? 1 : i.hasMoreAfter && t >= l - n - s ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i } = this.props;
        return i.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && l > n
            ? 1
            : i.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            {
                prevScrollTop: i,
                props: { placeholderHeight: s },
            } = this;
        if (((this.prevScrollTop = t), null == i)) return;
        let a = this.isInPlaceholderRegion(e),
            r = t - i;
        0 !== a &&
            0 !== r &&
            (1 === a && t + r <= 0
                ? (this.mergeTo(s - n), (this.prevScrollTop = s - n))
                : 2 === a && t + r >= l - n && (this.mergeTo(l - s), (this.prevScrollTop = l - s)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, l8._9)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        (this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            this.fixJumpTarget(),
            this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition();
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = it(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l7.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : nz.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nz.q4),
            i = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != n && n(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = e),
            null != l
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, t, this.newMessageBarBuffer()), e, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), e, i);
    }
    getOffsetOrientationFromNode(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = this.ref.current?.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            s = ie(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = it(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1 })
            : this.props.hasUnreads &&
                this.props.channel.type !== w.rbe.GUILD_VOICE &&
                this.props.channel.type !== w.rbe.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    loadMore = (() => {
        var e = this;
        return function () {
            let t,
                n,
                l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { messages: i } = e.props;
            if (l) {
                let e = i.last();
                null != e && (n = e.id);
            } else {
                let e = i.first();
                null != e && (t = e.id);
            }
            (e.messageFetchAnchor = e.findFetchAnchor(l)),
                (e.scrollHeightBeforeLoad = e.scrollHeightCache),
                (e.loading = !0),
                I.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(w.EMb, 2 * (0, l0.h)("scrollManager.loadMore")),
                    truncate: !0,
                });
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.ref.current?.scrollTo({ to: e, animate: !v.A.useReducedMotion && t, callback: n }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        this.ref.current?.mergeTo({ to: e, callback: t }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter)
            I.A.jumpToPresent(n.id, (0, l0.h)("scrollManager.jumpToPresent")), (0, eY.uh)(n.getGuildId() ?? w.ME, n.id);
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensionsDebounced = ls().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) l5.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            l5.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.ref.current?.scrollPageUp({ animate: e });
    }
    scrollPageDown() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.ref.current?.scrollPageDown({ animate: e });
    }
    scrollToMessage(e) {
        let { jumpTargetId: t, animate: n = !1, fromTimestamp: l } = e;
        if (null == this.ref.current) return;
        if (t === this.props.channel.id) return void this.scrollTo(0);
        let i = this.getElementFromMessageId(t);
        this.isJumping() ||
            !n ||
            null == l ||
            v.A.useReducedMotion ||
            (el.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let s = () => {
            (this.jumping = !1),
                (0, l7.vq)(i) && ((i.tabIndex = -1), i.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, l7.vq)(i)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      i,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : nz.mZ,
                  ),
                  n,
                  s,
              )
            : this.scrollToNewMessages(n, "middle", s);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: i, hasUnreads: s, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!i.hasMoreBefore) return 0;
            else return s ? a - nz.N0 - 2 : a + 500;
        return i.hasMoreAfter ? n - l - a - 500 : n - l;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return (
            "top" === e && t.hasMoreBefore ? (n = 2) : "bottom" === e && t.hasMoreAfter && (n = -2),
            this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
        );
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: l } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = ls().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ls().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ls().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ls().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, l8.Z5)(this.props.channel.id, this.props.windowId);
    }
}
n(667532);
var is = n(95561),
    ia = n(486227),
    ir = n(731738),
    io = n(192308),
    ic = n(832712),
    id = n(807393),
    iu = n(381689),
    ih = n(754302),
    im = n(632738),
    ig = n(544231),
    ip = n(349435),
    iA = n(665909);
function iC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/41b06cc820452b3b01d2a90f76b9ba4007cf4c795b2647fc3f0ff7d6a0632785.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var ix = n(834581);
function iE(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        a = o.useCallback(() => {
            l?.();
        }, [l]);
    return (0, r.jsxs)("div", {
        className: ix.HZ,
        children: [
            (0, r.jsxs)("div", {
                className: ix.Be,
                children: [
                    (0, r.jsx)(iC, { alt: "", size: 32 }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(ey.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, r.jsx)(ej.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ix.Uo,
                children: i?.map((e, t) =>
                    (0, r.jsx)(
                        eD.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, r.jsx)(eM.D, {
                      className: ix.b,
                      onClick: a,
                      role: "button",
                      "aria-label": ek.intl.string(ek.t.WAI6xu),
                      children: (0, r.jsx)(eR.P, { size: "md", color: "currentColor", className: ix.b }),
                  })
                : null,
        ],
    });
}
function iS(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: l,
        warningType: i,
        header: s,
        description: a,
        onDismiss: c,
        buttons: d,
    } = e;
    o.useEffect(() => {
        id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = o.useCallback(() => {
        c?.(), (0, iA._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: iA.Wm.USER_BANNER_DISMISS });
    }, [c, t, n, l, i]);
    return (0, r.jsx)(iE, { buttons: d, description: a, header: s, onDismiss: u });
}
var i_ = n(477427);
function iI(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: ek.intl.string(ek.t.wSZfJR), description: ek.intl.string(ek.t.CRwzW5) },
            { title: ek.intl.string(ek.t.cmMUaB), description: ek.intl.string(ek.t.n6G1ue) },
            { title: ek.intl.string(ek.t["5SPKSy"]), description: ek.intl.string(ek.t.eyjeJQ) },
        ],
        a = o.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        c = (e) => {
            ic.A.updateChannelOverrideSettings(null, t, { muted: !0 }, i_.fd.Muted),
                iu.A.showMuteSuccessToast(i, t),
                (0, iA._$)({ channelId: t, warningId: l, senderId: i, warningType: ip._j.LIKELY_ATO, cta: e }),
                a();
        };
    return (
        o.useEffect(() => {
            (0, iA.mO)(w.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: ip._j.LIKELY_ATO,
            }),
                id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, r.jsx)(iS, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: ip._j.LIKELY_ATO,
            header: ek.intl.string(ek.t.R8UsiI),
            description: ek.intl.string(ek.t.lI8nQl),
            onDismiss: a,
            buttons: [
                {
                    text: ek.intl.string(ek.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, io.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("55941"), n.e("82911"), n.e("47894")]).then(
                                n.bind(n, 129493),
                            );
                            return (n) => {
                                let { transitionState: a, onClose: o } = n;
                                return (0, r.jsx)(e, {
                                    transitionState: a,
                                    onClose: o,
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    description: ek.intl.string(ek.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, r.jsx)(
                                            ih.B,
                                            {
                                                listType: "numbered",
                                                index: t,
                                                title: e.title,
                                                description: e.description,
                                            },
                                            t,
                                        ),
                                    ),
                                    actionRows: [
                                        (0, r.jsx)(
                                            im.PQ,
                                            {
                                                title: ek.intl.string(ek.t.ftIK2A),
                                                description: ek.intl.string(ek.t.w2ve0t),
                                                buttonText: ek.intl.string(ek.t.ftIK2A),
                                                onButtonPress: () => {
                                                    c(iA.Wm.USER_MODAL_MUTE), o();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, r.jsx)(eM.D, {
                                        onClick: () =>
                                            (0, iA._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: ip._j.LIKELY_ATO,
                                                cta: iA.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, r.jsx)(ey.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: ek.intl.format(ek.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, iA._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: ip._j.LIKELY_ATO,
                                cta: iA.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: ek.intl.string(ek.t.ftIK2A), onClick: () => c(iA.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var ij = n(564771),
    iy = n(625333);
function iv(e) {
    let { channel: t, scrollManager: n } = e,
        l = o.useRef(null),
        { selectAndFocusConversation: i } = z(),
        [{ x: s }, a] = (0, Z.z)(() => ({ x: 0, config: lc }), "respect-motion-settings", []),
        c = (0, m.bG)([P.A], () => P.A.getSelectedConversation(t.id));
    !(function (e) {
        let { bannerRef: t, scrollManager: n, channelId: l, selectedConversationId: i, setIconShiftSpring: s } = e,
            { bannerMeasurementRef: a, conversationJumpInProgressRef: r } = z();
        o.useEffect(() => {
            if (null != t.current)
                return () => {
                    (0, G.P7)(l, i);
                };
        }, [l, t, i]),
            o.useEffect(() => {
                if (null == t.current || null == a) return;
                let e = n.ref.current?.getScrollerNode();
                if (null == e) return;
                let i = () => {
                    if (null == t.current) return;
                    let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                    a.current = n;
                    let i = e.clientHeight / 2;
                    if ((s({ x: n < i + 50 && n + 40 > i - 50 ? -28 : 0, config: lc }), null != r.current)) return;
                    let o = e.getBoundingClientRect(),
                        c = t.current.getBoundingClientRect();
                    (c.bottom < o.top || c.top > o.bottom) && (0, G.P7)(l);
                };
                return (
                    e.addEventListener("scroll", i, { passive: !0 }),
                    () => {
                        e.removeEventListener("scroll", i), (a.current = null), s({ x: 0, config: lc });
                    }
                );
            }, [a, t, n, s, l, r]);
    })({
        bannerRef: l,
        scrollManager: n,
        channelId: t.id,
        selectedConversationId: c?.id ?? null,
        setIconShiftSpring: a,
    });
    let d = o.useCallback(() => {
        null != c && i(c.id);
    }, [i, c]);
    return null == c
        ? null
        : (0, r.jsx)("div", {
              ref: l,
              className: iy.A,
              children: (0, r.jsx)(ew, {
                  channel: t,
                  conversation: c,
                  actionsSpringX: s,
                  onFocusToggle: d,
                  suppressBorder: !0,
              }),
          });
}
var iT = n(495273),
    iN = n(429933),
    ib = n(93246),
    iM = n(95701),
    iR = n(808728),
    iD = n(427262),
    iL = n(314307),
    ik = n(534890),
    iO = n(713654),
    iP = n(435470),
    iG = n(376310),
    iU = n(42362);
function iw(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)("div", {
        className: d()(iU._, { [iU.L]: l }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(iG.A, { tag: e, onRemove: i, size: null == i ? iG.A.Sizes.SMALL : iG.A.Sizes.MEDIUM }, e.id),
        ),
    });
}
var iF = n(873185);
function iH(e) {
    let { channel: t } = e,
        n = (0, iP.kt)(t),
        { firstMessage: l } = (0, m.cf)([t7.A], () => t7.A.getMessage(t.id)),
        i = new Set((0, iP.zt)(t, n)),
        s = (0, iO.gU)(t) ?? ik.o,
        a = (0, k.Ay)(t);
    return (0, r.jsxs)(iL.Ay, {
        channelId: t.id,
        className: iF.kL,
        children: [
            (0, r.jsx)("div", { className: iF.P0, children: (0, r.jsx)(s, { className: iF.Kk, strokeWidth: 1.75 }) }),
            (0, r.jsx)(iL.cr, { className: iF.wx, children: a }),
            null == l &&
                (0, r.jsx)(ej.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: ek.intl.string(ek.t.mE3KJN),
                }),
            (0, r.jsx)(iw, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var iB = n(289873),
    iV = n(548118),
    iK = n(513461),
    iz = n(654265),
    iW = n(561446),
    iq = n(806700);
function i$(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, m.bG)([lZ.default], () => lZ.default.getUser(t.userId));
    return (0, r.jsxs)("div", {
        className: iq.I8,
        children: [
            (0, r.jsxs)("div", {
                className: iq.Ov,
                children: [
                    null != n &&
                        (0, r.jsxs)("div", {
                            className: iq.yB,
                            children: [
                                (0, r.jsx)(iV.Ay, { guild: n, active: !0, size: iV.Ay.Sizes.SMOL, className: iq.$f }),
                                (0, r.jsx)(ey.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, r.jsx)(ey.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: ek.intl.format(ek.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== iK.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === iK.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("hr", { className: iq.g2 }),
                            (0, r.jsxs)("div", {
                                className: iq.fs,
                                children: [
                                    (0, r.jsx)(ej.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, r.jsx)(ej.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function iJ(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, iz.A)(t.id);
    return (0, r.jsx)(iL.Ay, {
        channelId: t.id,
        className: iq.kL,
        children:
            null != l && null != l.formResponses
                ? (0, r.jsxs)("div", {
                      className: iq.KJ,
                      children: [
                          (0, r.jsx)("div", { children: (0, r.jsx)(i$, { guild: i, joinRequest: l }) }),
                          (0, r.jsx)(iW.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, r.jsx)(iB.y, {})
                  : null,
    });
}
var iY = n(825484),
    iZ = n(241541),
    iX = n(793574),
    iQ = n(571694),
    i0 = n(922301),
    i1 = n(368919),
    i2 = n(598104),
    i3 = n(396787),
    i4 = n(817789);
function i7(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, r.jsx)(ef.m, {
              position: "bottom",
              text: ek.intl.string(ek.t["0qPSMV"]),
              children: (0, r.jsxs)(eM.D, {
                  className: d()(i4.e, l),
                  onClick: () => (0, i3.jv)(t.id, s),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: i4.Z,
                          children: (0, r.jsx)(tq.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", { className: l, children: n });
}
var i5 = n(73028),
    i8 = n(277370),
    i6 = n(322923);
function i9(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, m.bG)([v.A], () => v.A.useReducedMotion),
        a = (0, k.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, lR.A)({ userId: i?.id, size: lb._3.SIZE_80, animateOnHover: !0 }),
        [h, g] = o.useState(!1),
        p = o.useCallback(() => {
            d.onMouseEnter(), g(!0);
        }, [d]),
        A = o.useCallback(() => {
            d.onMouseLeave(), g(!1);
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, r.jsxs)(iL.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, r.jsx)(i7, {
                      channel: n,
                      editable: !0,
                      location: iX.A.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(i2.A, { channel: n, size: lb._3.SIZE_80, animated: t, "aria-label": a }),
                  })
                : (0, r.jsx)(lM.eu, {
                      "aria-label": a,
                      size: lb._3.SIZE_80,
                      src: (0, iQ.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, r.jsx)(iL.cr, {
                children: f
                    ? (0, r.jsx)(i1.A, {
                          userName: a,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: h ? i0.G.ANIMATED : i0.G.STATIC,
                          loop: !0,
                      })
                    : a,
            }),
            (0, r.jsx)(iL.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(iY.e, {
                    className: i6.U,
                    children: [
                        (0, r.jsx)(i8.NE, { channel: n, text: ek.intl.string(ek.t["6Qgrev"]), icon: iZ.D }),
                        (0, r.jsx)(eD.$, {
                            icon: tq.R,
                            variant: "secondary",
                            text: ek.intl.string(ek.t["5Q9+/L"]),
                            "aria-label": ek.intl.string(ek.t["5Q9+/L"]),
                            onClick: () => (0, i5.U)(n.id, iX.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var se = n(136722),
    st = n(342952),
    sn = n(177953),
    sl = n(725570),
    si = n(435183),
    ss = n(685374),
    sa = n(87e3),
    sr = n(474462);
function so(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: a } = e;
    return (
        (t = i
            ? (0, r.jsx)(sa.A, { size: 12, color: s, className: sr.TS })
            : (0, r.jsx)("div", { className: sr.yY, style: { backgroundColor: s } })),
        (0, r.jsxs)("div", { className: d()(n, sr.JC), style: { "--custom-role-label-color": s }, children: [t, a, l] })
    );
}
var sc = n(468689),
    sd = n(46054),
    su = n(34457),
    sh = n(317525),
    sm = n(488926),
    sg = n(84476);
function sp(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: a = !1,
        verified: o = !1,
    } = e;
    return (0, r.jsx)(eM.D, {
        className: d()(t, sg.x6, { [sg.r9]: a }),
        onClick: a ? void 0 : s,
        "aria-disabled": a,
        role: "button",
        children: (0, r.jsx)(so, {
            className: sg.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, r.jsx)(eR.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: sg.Tj,
                    colorClass: sg.eG,
                }),
        }),
    });
}
var sA = n(516757);
function sf(e) {
    let { channel: t } = e,
        [n, l] = o.useState(!1),
        i = (0, k.Ay)(t, !0),
        s = t.guild_id,
        a = (0, m.bG)([sh.A], () => (null != s ? sh.A.getSortedRoles(s) : void 0)),
        c = (0, m.bG)([lZ.default, nl.A], () => lZ.default.getUser(nl.A.getGuild(s)?.ownerId)),
        u = o.useMemo(() => (null != a ? a.filter((e) => !(0, su.Oy)(e)) : []), [a]),
        h = o.useMemo(
            () =>
                ls()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sm.aH({ forceRoles: { [e.id]: e }, context: t });
                        return se.X8(n, se.kg(w.xBc.ADMINISTRATOR, w.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        g = (0, m.yK)([lZ.default], () => {
            let e = {};
            for (let n of (null != c && (e[c.id] = c), Object.values(t.permissionOverwrites))) {
                if (n.type !== nM.r2.MEMBER || null != e[n.id]) continue;
                let t = lZ.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return ls()(e)
                .filter((e) => {
                    let n = sm.$3({ permission: w.xBc.ADMINISTRATOR, user: e, context: t }),
                        l = t.permissionOverwrites[e.id] ?? sm.x3,
                        i = se.zy(l.allow, w.xBc.VIEW_CHANNEL);
                    return n || i;
                })
                .value();
        }, [t, c]),
        p = td.A.can(w.xBc.MANAGE_CHANNELS, t) || td.A.can(w.xBc.MANAGE_ROLES, t),
        A = o.useCallback(() => l(!1), []);
    return (0, r.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(iL.WK, { locked: !0, channelType: t.type }),
            (0, r.jsx)(iL.cr, { children: ek.intl.format(ek.t.I3R7Vn, { channelName: i }) }),
            (0, r.jsx)(iL.j1, {
                className: tD.PT,
                children: ek.intl.format(ek.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => sd.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, r.jsxs)("div", {
                      className: sA.$x,
                      children: [
                          (0, r.jsx)(eD.$, {
                              size: "sm",
                              variant: "secondary",
                              text: ek.intl.string(ek.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sn.n,
                          }),
                          (0, r.jsx)(eD.$, {
                              size: "sm",
                              variant: "secondary",
                              text: ek.intl.string(ek.t["3gUsJb"]),
                              onClick: function () {
                                  si.Ay.open(t.id);
                              },
                              icon: tq.R,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: sA.ol,
                children: [
                    (function () {
                        if (1 !== g.length || h.length > 0)
                            return (0, r.jsx)(st.A, { guildId: t.guild_id, className: sA.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = iD.Ay.getName(e);
                        return (0, r.jsxs)("div", {
                            className: sA.HD,
                            children: [
                                (0, r.jsx)(lM.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lb._3.SIZE_24,
                                }),
                                (0, r.jsx)(ej.E, {
                                    tag: "span",
                                    className: sA.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, r.jsx)(ej.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: ek.intl.string(ek.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    h.map((e, n) => {
                        let l = e.colorString ?? w.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return p
                            ? (0, r.jsx)(
                                  sp,
                                  {
                                      className: d()(sA.JC, { [sA.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !p,
                                      verified: i,
                                      onClick: () => {
                                          sc.A.open(t.guild_id, w.BEX.MEMBERS), sc.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  so,
                                  {
                                      className: d()(sA.JC, { [sA.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: i,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, r.jsx)(sl.aF, {
                      renderModal: (e) =>
                          (0, r.jsx)(ss.default, { ...e, onClose: () => (A(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sC = n(329856);
function sx(e) {
    let { channel: t } = e,
        n = (0, k.Ay)(t, !0),
        l = (0, m.bG)([td.A], () => td.A.can(w.xBc.MANAGE_CHANNELS, t) && iM.bk.has(t.type));
    return (0, r.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(iL.WK, { channelType: t.type }),
            (0, r.jsx)(iL.cr, { children: ek.intl.format(ek.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(iL.j1, {
                className: tD.PT,
                children: ek.intl.format(ek.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => sd.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, r.jsx)("div", {
                      className: sC.U,
                      children: (0, r.jsx)(eD.$, {
                          size: "sm",
                          variant: "secondary",
                          text: ek.intl.string(ek.t["3gUsJb"]),
                          onClick: () => {
                              si.Ay.open(t.id);
                          },
                          icon: tq.R,
                      }),
                  })
                : null,
        ],
    });
}
var sE = n(463930),
    sS = n(442433),
    s_ = n(688810),
    sI = n(967144),
    sj = n(342296),
    sy = n(696451),
    sv = n(415296);
function sT(e) {
    let { userId: t, channel: l } = e,
        i = o.useRef(null),
        { analyticsLocations: s } = (0, s_.Ay)(iX.A.USERNAME),
        a = (0, m.bG)([lZ.default], () => lZ.default.getUser(t)),
        c = (0, m.bG)([sy.Ay], () => (null != t ? sy.Ay.getMember(l.guild_id, t) : null)),
        u = (0, sI.gn)(l.guild_id, t ?? void 0, c?.colorStrings ?? null);
    function h(e) {
        if (null == a) return null;
        (0, sS.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("36198"),
                n.e("94881"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("8757"),
                n.e("85968"),
                n.e("29787"),
                n.e("82073"),
                n.e("91994"),
                n.e("76665"),
                n.e("76273"),
                n.e("24198"),
                n.e("23427"),
                n.e("72883"),
                n.e("43116"),
                n.e("70515"),
                n.e("66939"),
                n.e("85802"),
                n.e("24966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, r.jsx)(e, { ...t, user: a, guildId: l.guild_id, channel: l });
        });
    }
    let g = c?.nick ?? iD.Ay.getName(a) ?? "???",
        p = c?.colorString;
    return null == a
        ? (0, r.jsx)("span", { className: d()(sv.eM, sv.sL), children: g })
        : (0, r.jsx)(s_.f5, {
              value: s,
              children: (0, r.jsx)(sj.A, {
                  targetElementRef: i,
                  user: a,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: c?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(eM.D, {
                          ...e,
                          innerRef: i,
                          tag: "span",
                          className: sv.eM,
                          onContextMenu: h,
                          children: (0, r.jsx)(sE.g, { name: g, colorString: p ?? null, colorStrings: u }),
                      }),
              }),
          });
}
function sN(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(ej.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: sv.VA,
                          children: ek.intl.format(ek.t.imPXd5, {
                              usernameHook: (e, n) => (0, r.jsx)(sT, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === w.rbe.PRIVATE_THREAD
                      ? (0, r.jsx)(ej.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: ek.intl.string(ek.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sb(e) {
    let { channel: t } = e,
        n = (0, iO.gU)(t) ?? tz.y,
        l = (0, k.Ay)(t);
    return (0, r.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)("div", { className: sv.P0, children: (0, r.jsx)(n, { className: sv.Kk }) }),
            (0, r.jsx)(iL.cr, { children: l }),
            (0, r.jsx)(sN, { channel: t }),
        ],
    });
}
var sM = n(222983),
    sR = n(157550),
    sD = n(957283),
    sL = n(189213),
    sk = n(824552),
    sO = n(933958),
    sP = n(869003),
    sG = n(841595),
    sU = n(546183),
    sw = n(543465),
    sF = n(308528),
    sH = n(928658),
    sB = n(978914),
    sV = n(977347);
function sK(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: a,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, m.bG)([nD.A], () => nD.A.getRelationshipType(t), [t])) === w.eA$.NONE ||
                    l === w.eA$.BLOCKED ||
                    l === w.eA$.PENDING_INCOMING,
                s = n || i,
                a = (0, sV.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, sB.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, l),
        { channelId: c } = (0, sD.N)(),
        d = t.id === c,
        u = !no.Fr && !d,
        h = o.useCallback(() => {
            null != i &&
                (0, sH.b8)(i, () => {
                    sF.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && a)
        ? null
        : (0, r.jsx)(eD.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: h,
              text: ek.intl.string(ek.t.HHZmDn),
          });
}
function sz(e) {
    let { channel: t } = e,
        l = (0, m.bG)([sw.Ay], () => sw.Ay.isChannelMuted(null, t.id));
    return (0, r.jsx)(eD.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? ek.intl.string(ek.t.YqAjXy) : ek.intl.string(ek.t.w4m945),
        onClick: function () {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function sW(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, m.bG)([sO.Ay], () => sO.Ay.getSelfEmbeddedActivities());
    function s() {
        sk.A.delete(l.id);
        let e = i.get(n.id);
        null != e && sP.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, r.jsx)(eD.$, {
        variant: "secondary",
        text: ek.intl.string(ek.t["5S3sQF"]),
        onClick: () => {
            (0, io.openModal)((e) =>
                (0, r.jsx)(sL.Modal, {
                    title: ek.intl.string(ek.t["DT39A+"]),
                    subtitle: ek.intl.formatToPlainString(ek.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: ek.intl.string(ek.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: ek.intl.string(ek.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                s(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                U.default.track(w.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function sq(e) {
    var t;
    let { channel: n, user: l } = e,
        i =
            ((t = l?.id ?? w.dJq),
            (0, m.bG)([sG.A], () => (null !== t ? sG.A.getUserProfile(t ?? w.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: a } = (0, m.cf)([sU.default], () => ({
            authorizedAppToken: sU.default.getNewestTokenForApplication(i?.id),
            authorizedAppsFetchState: sU.default.getFetchState(),
        }));
    return (o.useEffect(() => {
        l.bot && a === sU.FetchState.NOT_FETCHED && sk.A.fetch();
    }, [l.bot, a]),
    l.bot && null != i && null != s)
        ? (0, r.jsxs)(iY.e, {
              size: "sm",
              children: [
                  (0, r.jsx)(sz, { channel: n }),
                  (0, r.jsx)(sW, { application: i, channel: n, oauth2Token: s }),
                  (0, r.jsx)(sK, { channel: n, user: l }),
              ],
          })
        : (0, r.jsx)(iY.e, { size: "sm", children: (0, r.jsx)(sK, { channel: n, user: l }) });
}
var s$ = n(573435),
    sJ = n(903209),
    sY = n(975732),
    sZ = n(486020),
    sX = n(518477),
    sQ = n(864401);
function s0(e) {
    let { userId: t, channelId: n, showDivider: l = !1 } = e,
        i = (0, m.bG)([sG.A], () => sG.A.getMutualGuilds(t), [t]),
        s = lZ.default.getUser(t);
    o.useEffect(() => {
        null == i && null != s && (0, sJ.A)(t, s.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [i, t, s]);
    let a = o.useMemo(() => {
        if (null == i) return [];
        let e = i.slice(0, 3),
            t = e.length - 1;
        return e
            .map((e, n) => {
                let { guild: l } = e,
                    i = sZ.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 24 });
                if (null == i) return null;
                let s = (0, r.jsx)("img", { src: i, alt: "", className: sQ.my }, l.id);
                return n === t
                    ? s
                    : (0, r.jsx)(
                          s$.Ay,
                          {
                              className: sQ.cp,
                              mask: s$.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              width: 24,
                              height: 24,
                              children: s,
                          },
                          l.id,
                      );
            })
            .filter(ns.Vq);
    }, [i]);
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: d()(sQ.kL, l ? sQ.yF : null),
              children: (0, r.jsx)(ej.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: ek.intl.string(ek.t.zjVh8h),
              }),
          })
        : (0, r.jsxs)(eM.D, {
              className: d()(sQ.kL, sQ.vk, { [sQ.yF]: l }),
              onClick: () => {
                  (0, sY.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: sX.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iX.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, r.jsx)("div", { className: sQ.H, children: a }),
                  (0, r.jsx)(ej.E, {
                      className: sQ.NI,
                      variant: "text-sm/normal",
                      children: ek.intl.format(ek.t.eE3oep, { count: i.length }),
                  }),
              ],
          });
}
var s1 = n(717398),
    s2 = n(327166),
    s3 = n(390848),
    s4 = n(175709);
function s7(e) {
    let { userId: t } = e;
    return (0, r.jsx)(eD.$, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
            s1.A.blockUser(t, { location: w.liQ.DM_CHANNEL });
        },
        text: ek.intl.string(ek.t.l4Emac),
    });
}
function s5(e) {
    let { userId: t, showingBanner: n } = e,
        l = (0, s2.D)(t);
    return n
        ? null
        : (0, r.jsx)(eD.$, {
              variant: "primary",
              onClick: () => {
                  s1.A.addRelationship({ userId: t, context: { location: w.liQ.DM_CHANNEL } });
              },
              text: l,
          });
}
function s8(e) {
    let { userId: t } = e;
    return (0, r.jsx)(eD.$, {
        variant: "secondary",
        onClick: () => {
            s1.A.removeFriend(t, { location: w.liQ.DM_CHANNEL });
        },
        text: ek.intl.string(ek.t.cvSt1J),
    });
}
function s6(e) {
    let { userId: t } = e;
    return (0, r.jsx)(eD.$, {
        variant: "secondary",
        onClick: () => {
            s1.A.unblockUser(t, { location: w.liQ.DM_CHANNEL });
        },
        text: ek.intl.string(ek.t.XyHpKH),
    });
}
function s9(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, m.bG)([nD.A], () => nD.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, s3.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: w.liQ.DM_CHANNEL,
        });
    return (0, r.jsxs)("div", {
        className: s4.K,
        children: [
            (0, r.jsx)(ej.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: ek.intl.format(ek.t.uIomXw, { username: iD.Ay.getName(n) }),
            }),
            (0, r.jsxs)(iY.e, {
                size: "sm",
                children: [
                    (0, r.jsx)(eD.$, { variant: "primary", onClick: s, text: ek.intl.string(ek.t["+WbSn5"]) }),
                    (0, r.jsx)(eD.$, {
                        variant: "secondary",
                        onClick: () => {
                            s1.A.cancelFriendRequest(n.id, { location: w.liQ.DM_CHANNEL });
                        },
                        text: ek.intl.string(ek.t.rQSndv),
                    }),
                    (0, r.jsx)(s7, { userId: n.id }),
                    l ? null : (0, r.jsx)(sK, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function ae(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        s = (0, m.bG)([nD.A], () => nD.A.getRelationshipType(l.id), [l.id]);
    if (s === w.eA$.PENDING_INCOMING) return (0, r.jsx)(s9, { channel: n, user: l, showingBanner: i });
    switch (s) {
        case w.eA$.NONE:
            l.bot || (t = (0, r.jsx)(s5, { userId: l.id, showingBanner: i }));
            break;
        case w.eA$.FRIEND:
            t = (0, r.jsx)(s8, { userId: l.id });
            break;
        case w.eA$.BLOCKED:
            t = (0, r.jsx)(s6, { userId: l.id });
            break;
        case w.eA$.PENDING_OUTGOING:
            t = (0, r.jsx)(eD.$, { variant: "primary", disabled: !0, text: ek.intl.string(ek.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let a = s !== w.eA$.BLOCKED;
    return (0, r.jsxs)(iY.e, {
        size: "sm",
        children: [t, a ? (0, r.jsx)(s7, { userId: l.id }) : null, i ? null : (0, r.jsx)(sK, { channel: n, user: l })],
    });
}
var at = n(92650),
    an = n(138298),
    al = n(761640);
function ai(e) {
    let { channel: t, user: n } = e,
        l = o.useCallback(() => {
            (0, eT.P0)((0, eN.o)(ek.intl.string(ek.t.a2j0hv), eb.Ck.FAILURE));
        }, []),
        i = o.useCallback(() => {
            an.A.closeChannelSidebar(al.fe);
        }, []),
        s = o.useCallback(() => {
            an.A.closeChannelSidebar(al.fe);
        }, []),
        {
            acceptMessageRequest: a,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, at.t)({ user: lZ.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, r.jsxs)(iY.e, {
        size: "sm",
        children: [
            (0, r.jsx)(eD.$, {
                variant: "primary",
                disabled: g,
                onClick: () => a(t.id),
                loading: d,
                text: ek.intl.string(ek.t.Kz8Pwr),
            }),
            (0, r.jsx)(eD.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: ek.intl.string(ek.t.B2nygW),
            }),
            (0, r.jsx)(sK, { channel: t, user: n }),
        ],
    });
}
var as = n(331674);
function aa(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, sD.N)(),
        a = (0, m.bG)([sR.A], () => null != s && sR.A.isSpam(s), [s]),
        o = (0, m.bG)([nD.A], () => nD.A.getRelationshipType(l.id), [l.id]),
        c = n.id === s,
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        h = as.n;
    return (
        u
            ? (t = null)
            : a || c
              ? (t = (0, r.jsx)(ai, { channel: n, user: l }))
              : d
                ? (t = (0, r.jsx)(sq, { channel: n, user: l }))
                : ((t = (0, r.jsx)(ae, { channel: n, user: l, showingBanner: i })),
                  o === w.eA$.PENDING_INCOMING && (h = as.O)),
        (0, r.jsxs)("div", {
            className: h,
            children: [(0, r.jsx)(s0, { userId: l.id, channelId: n.id, showDivider: h !== as.O }), t],
        })
    );
}
var ar = n(746080),
    ao = n(818050);
function ac(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iT.Ae)(n),
        i = (0, m.bG)([iR.Ay], () => null != n.guild_id && n === iR.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, iN.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(iH, { channel: n });
    if (iM.Le.has(n.type)) return (0, r.jsx)(sb, { channel: n });
    if (i) return (0, r.jsx)(sM.A, { channel: n });
    if (l) return (0, r.jsx)(sf, { channel: n });
    return (0, r.jsx)(sx, { channel: n });
}
function ad(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, k.Ay)(t),
        { type: i } = t,
        s = (0, m.bG)([lZ.default], () => (t.isPrivate() ? lZ.default.getUser(t.getRecipientId()) : null)),
        a = iD.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, m.cf)([td.A], () => ({
            canManageRoles: td.A.can(w.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: td.A.can(w.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, r.jsx)(i9, { channel: t, children: ek.intl.string(ek.t.Rzvnig) });
    if (i === w.rbe.DM)
        return (0, r.jsxs)(i9, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, r.jsx)(ey.D, { variant: "heading-xl/medium", className: ao.SX, children: a }),
                ek.intl.format(ek.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, r.jsx)(ib.Y, { userId: s.id }) : null,
                null != s ? (0, r.jsx)(aa, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, r.jsxs)(iL.Ay, {
                channelId: t.id,
                children: [
                    (0, r.jsx)(iL.cr, { children: ek.intl.format(ek.t.I3R7Vn, { channelName: l }) }),
                    (0, r.jsx)(iL.j1, { children: ek.intl.string(ek.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(ar.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(iJ, { channel: t });
        else return (0, r.jsx)(i9, { channel: t, children: ek.intl.format(ek.t.MFwcqO, { name: l }) });
    return c
        ? (0, r.jsx)(ac, { channel: t, canManageRoles: o })
        : (0, r.jsx)(iL.Ay, {
              channelId: t.id,
              children: (0, r.jsx)(iL.j1, { children: ek.intl.format(ek.t.hPVEQG, { channelName: l }) }),
          });
}
var au = n(506774),
    ah = n(933832),
    am = n(782603),
    ag = n(763175),
    ap = n(56562),
    aA = n(304072),
    af = n(578623),
    aC = n(702841),
    ax = n(696986),
    aE = n(871237),
    aS = n(36491),
    a_ = n(953727);
function aI(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, r.jsxs)("svg", {
        ...(0, a_.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 49 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("path", {
                d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
                fill: "#66B9FF",
            }),
            (0, r.jsx)("path", {
                d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
                fill: "#89D6FF",
            }),
            (0, r.jsx)("path", {
                d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
                fill: "#FFEFA3",
            }),
            (0, r.jsx)("path", {
                d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
                fill: "#3F96EF",
            }),
            (0, r.jsx)("path", {
                d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
                fill: "url(#paint0_linear_859_60333)",
            }),
            (0, r.jsx)("path", {
                d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
                fill: "#FFC31A",
            }),
            (0, r.jsx)("path", {
                d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
                fill: "#55EF84",
            }),
            (0, r.jsx)("path", {
                d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
                fill: "#FF78B5",
            }),
            (0, r.jsx)("path", {
                d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
                fill: "#89D6FF",
            }),
            (0, r.jsx)("path", {
                d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
                fill: "#3541D6",
            }),
            (0, r.jsx)("path", {
                d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
                fill: "white",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_859_60333",
                    x1: "34.2419",
                    y1: "5.70262",
                    x2: "5.61649",
                    y2: "53.1558",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { offset: "0.14", stopColor: "#FFE45C" }),
                        (0, r.jsx)("stop", { offset: "0.83", stopColor: "#FFC31A" }),
                    ],
                }),
            }),
        ],
    });
}
var aj = n(788780);
function ay(e) {
    let { threadId: t } = e,
        n = (0, aC.bG)([eX.A], () => eX.A.getChannel(t)),
        l = (0, aC.bG)([eX.A], () => eX.A.getChannel(n?.parent_id)),
        i = o.useCallback(() => {
            null != n &&
                null != l &&
                ((0, is.zV)(w.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, tu.C)((0, aE.af)(n, l)));
        }, [n, l]);
    return (0, r.jsxs)("div", {
        className: aj.BQ,
        children: [
            (0, r.jsx)(aI, {}),
            (0, r.jsxs)("div", {
                className: aj.BB,
                children: [
                    (0, r.jsx)(ej.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: ek.intl.string(ek.t["5uAO7d"]),
                    }),
                    (0, r.jsx)(ej.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: ek.intl.format(ek.t.WnfPV3, {
                            helpArticleUrl: ty.A.getCreatorSupportArticleURL(w.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(ax.h, { size: 4 }),
                    (0, r.jsx)(eD.$, { text: ek.intl.string(ek.t.C5UQC9), variant: "primary", icon: tw.q, onClick: i }),
                ],
            }),
            (0, r.jsx)(eM.D, {
                className: aj.b,
                onClick: () => {
                    (0, aS.sF)(t);
                },
                "aria-label": ek.intl.string(ek.t["0+xZH0"]),
                children: (0, r.jsx)(eR.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var av = n(505527),
    aT = n(467073),
    aN = n(960538),
    ab = n(604121),
    aM = n(238301);
let aR = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    aD = o.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            l = (0, m.bG)([v.A], () => v.A.useReducedMotion),
            i = (0, m.bG)([td.A], () => td.A.can(w.xBc.SEND_MESSAGES_IN_THREADS, t)),
            s = (0, ts.s5)(t),
            a = (0, m.bG)([ec.default], () => ec.default.getId());
        return n
            ? i && !s && t.ownerId !== a
                ? (0, r.jsxs)("div", {
                      className: aM.aP,
                      children: [
                          (0, r.jsx)(ab.a, { importData: aR, shouldAnimate: !l, className: aM.lY }),
                          (0, r.jsxs)("div", {
                              className: aM.FS,
                              children: [
                                  (0, r.jsx)(ey.D, {
                                      variant: "heading-md/semibold",
                                      children: ek.intl.string(ek.t.OmBThA),
                                  }),
                                  (0, r.jsx)(ej.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: ek.intl.string(ek.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, r.jsx)("div", { className: aM.yF });
    });
var aL = n(930390),
    ak = n(831688),
    aO = n(226698),
    aP = n(892340),
    aG = n(715757),
    aU = n(390897),
    aw = n(862482),
    aF = n(215026),
    aH = n(66834),
    aB = n(964486),
    aV = n(351001),
    aK = n(400528);
function az(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, r.jsx)(eE.K, {
            icon: n,
            variant: "secondary",
            onClick: l,
            disabled: i,
            loading: s,
            "aria-label": t,
            size: "sm",
        }),
    });
}
var aW = n(221314),
    aq = n(145530),
    a$ = n(905499),
    aJ = n(406810),
    aY = n(991982),
    aZ = n(838111),
    aX = n(870136);
function aQ(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        a = s?.reported_user_id,
        c = (0, m.bG)([lZ.default], () => (null != a ? lZ.default.getUser(a) : null)),
        d = (0, m.bG)([nl.A], () => nl.A.getGuild(t.guild_id));
    (0, aG.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([aK.A], () => null != l && aK.A.isUserBanned(l.id)),
                a = null != l && null == s,
                [c, d] = o.useState(a),
                u = (0, m.bG)([td.A], () => null != l && null != i && (0, aV.fJ)(l, i, [td.A]));
            if (
                ((0, aB.Ay)(() => {
                    a && aH.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let h = !0 === s ? ek.intl.string(aW.default.dpfwQ1) : ek.intl.string(aW.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, r.jsx)(
                az,
                {
                    text: h,
                    icon: aF.w,
                    onClick: () => {
                        null != l &&
                            (0, io.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("33847"), n.e("2504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: aw.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([td.A], () => null != l && null != i && (0, aV.KX)(l, i, [td.A])),
                a = (0, m.bG)([sy.Ay], () => null == l || null == sy.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = a ? ek.intl.string(aW.default.Ux67nW) : ek.intl.string(aW.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, r.jsx)(
                az,
                {
                    text: o,
                    icon: a$.N,
                    onClick: () => {
                        null != l &&
                            (0, io.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("97660"), n.e("40243")]).then(
                                    n.bind(n, 547166),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: a,
                },
                c,
            );
        })({ channel: t, user: c, guild: d }),
        g = [
            (function (e) {
                let { message: t, user: n, guild: l, channel: i } = e,
                    s = (0, m.bG)([td.A], () => null != n && null != l && (0, aV.Kd)(n, l, [td.A])),
                    { messageReference: a } = t,
                    o = (0, m.bG)([ep.A], () => (null != a ? ep.A.getMessage(a.channel_id, a.message_id) : null)),
                    c = (0, m.bG)([eX.A], () => (null != o ? eX.A.getChannel(o.channel_id) : null)),
                    d = (0, m.bG)([eX.A], () => eX.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? ek.intl.string(aW.default["0IZbwC"]) : ek.intl.string(aW.default.Uj6oD4),
                    h = null == o,
                    g = `delete-message-${t.id}`;
                return (0, r.jsx)(
                    az,
                    {
                        text: u,
                        icon: tZ.u,
                        onClick: () => {
                            null != c &&
                                null != o &&
                                aq.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: h,
                        color: aw.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            h,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, m.bG)(
                        [lZ.default, nl.A, td.A],
                        () => null != n && null != l && (0, aZ.b)(l.id, n.id, [lZ.default, nl.A, td.A]),
                    ),
                    [s, a] = (0, aX.Ay)(n?.id, t.guild_id),
                    o = (0, m.bG)([sy.Ay], () => null != l && null != n && null != sy.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, r.jsx)(
                    az,
                    {
                        text: a ? ek.intl.string(aW.default["6uMZbv"]) : ek.intl.string(aW.default["Sgg/uI"]),
                        icon: aJ.O,
                        onClick: () => {
                            null != n && (0, aY.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: a,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== g.length
        ? (0, r.jsx)(r.Fragment, { children: g.map((e, t) => (0, r.jsx)(o.Fragment, { children: e }, t)) })
        : null;
}
function a0(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, r.jsx)(aQ, { channel: n, message: t, snapshot: e }, l)),
    });
}
var a1 = n(152007),
    a2 = n(867455),
    a3 = n(473503),
    a4 = n(853742),
    a7 = n(189971),
    a5 = n(347353),
    a8 = n(518229);
function a6(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, aP.uW)(t),
        [s, a] = o.useState(!1),
        c = () => {
            a(!0),
                aO.A.resolveFlag(t.id).then(() => {
                    a(!1);
                });
        };
    return i
        ? (0, r.jsx)(eD.$, {
              size: "sm",
              variant: "secondary",
              text: l ? ek.intl.string(aW.default["2Y4vkk"]) : ek.intl.string(aW.default.YIbR4r),
              onClick: () => {
                  !0 === au.w.get(aU.f)
                      ? c()
                      : (0, io.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, r.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: ah.A,
              disabled: l,
          })
        : null;
}
function a9(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: i } = e,
        { ref: s, width: a } = (0, n7.Ay)(),
        [c, u] = o.useState(3),
        [h, g] = o.useState(!n),
        [p, A] = (0, aA.A)(!1, 2e3),
        f = (0, m.bG)([eX.A], () => eX.A.getChannel(t), [t]),
        { firstMessage: C } = (0, a3.OA)(f),
        x = (0, m.bG)([a1.A], () => a1.A.hasJoined(t)),
        { disableReactionUpdates: E, disableReactionCreates: S, isLurking: _, isPendingMember: j } = (0, aT.A)(f),
        y = (0, aG.W1)(f),
        v = (0, m.bG)([eX.A], () => eX.A.getChannel(i)),
        T = (0, iP.Ck)(v),
        N = (0, m.bG)([af.A], () => af.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        b = o.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    g((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    if (
        (o.useLayoutEffect(() => {
            let e = s.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(b, { threshold: 1 });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }),
        o.useLayoutEffect(() => {
            null == a || u(Math.floor((a - 280) / 58));
        }, [a]),
        null == f)
    )
        return null;
    let M = null != C && C.reactions.length > 0,
        R = () => {
            (0, a4.jC)({ postId: f.id, location: { section: w.JJy.CHANNEL_HEADER } }),
                (0, tu.C)((0, aE.af)(f, v), () => A(!0));
        },
        D = x ? ah.A : am.X;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: d()(a7.kL, { [a7.wx]: h }),
                ref: s,
                children: [
                    y
                        ? (0, r.jsx)("div", {
                              className: a7.kX,
                              children: null != C && (0, r.jsx)(a0, { message: C, channel: f }),
                          })
                        : (0, r.jsx)("div", {
                              className: a7.hY,
                              children:
                                  null != C &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          !M &&
                                              !S &&
                                              null != T &&
                                              (0, r.jsx)("div", {
                                                  className: a5.reactions,
                                                  children: (0, r.jsx)(ak.qT, {
                                                      message: C,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: _,
                                                      isPendingMember: j,
                                                      emoji: T,
                                                      type: av.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, r.jsx)(aL.A, {
                                              message: C,
                                              channel: f,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: E,
                                              isLurking: _,
                                              isPendingMember: j,
                                              maxReactions: c,
                                              className: a7.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !S &&
                                              (0, r.jsx)(aN.t, {
                                                  message: C,
                                                  channel: f,
                                                  useChatFontScaling: !1,
                                                  className: d()(a8.secondary, a7.vU, { [a7.w$]: !M }),
                                                  isForumToolbar: !0,
                                                  children: !M && ek.intl.string(ek.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, r.jsxs)("div", {
                        className: a7.Uo,
                        children: [
                            y
                                ? (0, r.jsx)(a6, { channel: f })
                                : !_ &&
                                  (0, r.jsx)(ef.m, {
                                      text: ek.intl.string(ek.t.F7oeDv),
                                      children: (0, r.jsx)(eD.$, {
                                          icon: D,
                                          size: "sm",
                                          variant: "secondary",
                                          text: x ? ek.intl.string(ek.t["7OkUzs"]) : ek.intl.string(ek.t["3aOv+h"]),
                                          onClick: () => {
                                              x
                                                  ? a2.A.leaveThread(f, "Forum Toolbar")
                                                  : a2.A.joinThread(f, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(ef.m, {
                                text: ek.intl.string(ek.t.WqhZss),
                                children: p
                                    ? (0, r.jsx)(eD.$, {
                                          icon: ah.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: R,
                                          text: ek.intl.string(ek.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(eE.K, {
                                          icon: tw.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: R,
                                          "aria-label": ek.intl.string(ek.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(ef.m, {
                                    text: ek.intl.string(ek.t.nFP4oa),
                                    children: (0, r.jsx)(eE.K, {
                                        icon: ag.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            I.A.jumpToMessage({
                                                channelId: f.id,
                                                messageId: f.id,
                                                flash: !0,
                                                jumpType: ap.US.INSTANT,
                                            });
                                        },
                                        "aria-label": ek.intl.string(ek.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            N && (0, r.jsx)(ay, { threadId: t }),
            (0, r.jsx)(aD, { channel: f, isLastItem: l }),
        ],
    });
}
var re = n(364522),
    rt = n(627363),
    rn = n(454292),
    rl = n(84120),
    ri = n(773746),
    rs = n(717415),
    ra = n(480595),
    rr = n(461213);
function ro(e) {
    let { application: t, channel: n, message: l, presenceActivity: i, analyticsLocations: s, hideParty: a = !1 } = e,
        o = (0, m.bG)([ec.default], () => ec.default.getId()),
        c = (0, m.bG)([ra.A, rr.A], () => (0, rn.A)(ra.A, rr.A, t.id), [t.id]),
        d = (0, rl.em)({ presenceActivity: i, channel: n, activityActionType: w.xL.JOIN }),
        {
            isEmbeddedApplication: u,
            iconSrc: h,
            applicationName: g,
            launchableAppId: p,
            tryWithGdnAction: A,
            viewAction: f,
            accountLinkingEntryPointExperimentConfig: C,
            canStartAuthorization: x,
            hasAlreadyLinked: E,
            startAuthorizeWithToast: S,
            requireAccountLink: _,
            requireGameLaunch: I,
            accountLinkButtonRef: j,
            renderAccountLinkUpsell: y,
        } = (0, rs.p)({
            analyticsLocations: s,
            application: t,
            channel: n,
            message: l,
            presenceActivity: i,
            location: "GameInviteChannelEmbed",
        });
    return (0, r.jsx)(ri.A, {
        message: l,
        application: t,
        applicationName: g,
        channel: n,
        header: void 0,
        currentUserId: o,
        launchableAppId: p,
        isEmbeddedApplication: u,
        tryWithGdnAction: A,
        staticBannerSrc: void 0,
        onClickContent: f,
        iconSrc: h,
        presenceActivity: i,
        currentUserPresenceActivity: c,
        hideParty: a,
        partyStatusElement: d,
        analyticsLocations: s,
        showAuthButton: x && !E && C.enabled,
        requireAccountLink: _,
        requireGameLaunch: I,
        canPromptAuth: x && !E,
        startAuthorization: S,
        accountLinkButtonRef: j,
        renderAccountLinkUpsell: y,
    });
}
var rc = n(983851),
    rd = n(104171),
    ru = n(262763),
    rh = n(499211),
    rm = n(977997),
    rg = n(607567),
    rp = n(774418),
    rA = n(556114);
function rf(e) {
    let { channel: t, className: n } = e,
        l = (0, ts._M)(t),
        i = (0, m.bG)([rm.A], () => rm.A.isInChannel(t.id)),
        s = (0, m.bG)([rg.Ay], () => rg.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: a } = (0, rh.A)(t.id),
        c = o.useCallback(() => {
            ru.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: a, locked: !1 });
        }, [t, i, a]),
        u = o.useMemo(() => s.map((e) => e.user.id), [s]),
        h = (0, iP.$I)(t, u),
        g = h.length > 0;
    return l || g
        ? (0, r.jsxs)("div", {
              className: d()(rA.Lz, n),
              children: [
                  (0, r.jsxs)(eM.D, {
                      className: rA.Xt,
                      onClick: c,
                      children: [
                          (0, r.jsx)(rc.H, {
                              size: "refresh_sm",
                              color: i ? J.A.colors.STATUS_POSITIVE : J.A.colors.ICON_MUTED,
                          }),
                          (0, r.jsx)(ej.E, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              className: rA.Gp,
                              children: ek.intl.string(rp.default.LFHDVw),
                          }),
                      ],
                  }),
                  g
                      ? (0, r.jsx)(rd.Ay, { className: rA.L_, guildId: t.guild_id, users: h, size: rd.DN.SIZE_24 })
                      : null,
              ],
          })
        : null;
}
var rC = n(974963);
function rx(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, iP.kt)(l),
        a = s.some((e) => e.name === lV.Dg),
        o = (0, m.bG)([nl.A], () => nl.A.getGuild(l.guild_id)?.gameApplicationIds ?? [], [l.guild_id])[0],
        { data: c } = (0, rt.YY)(o),
        { analyticsLocations: d } = (0, s_.Ay)(iX.A.INVITE_EMBED),
        u = (0, m.bG)([b.A], () => (null != o ? b.A.getApplicationActivity(t.author.id, o) : null), [t.author.id, o]);
    return (0, r.jsxs)("div", {
        className: rC.TX,
        children: [
            (0, r.jsxs)(re.Ar, {
                className: rC.XG,
                children: [
                    (0, r.jsx)("ol", {
                        children: (0, r.jsx)(n$, {
                            compact: n,
                            channel: l,
                            message: t,
                            groupId: t.id,
                            id: i,
                            isLastItem: !1,
                            renderContentOnly: !1,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: rC.TY,
                        children: [
                            s.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: rC.GA,
                                    children: s.map((e) => (0, r.jsx)(iG.A, { tag: e, size: iG.A.Sizes.MEDIUM }, e.id)),
                                }),
                            null != c &&
                                null != u &&
                                (0, r.jsx)("div", {
                                    className: rC.x,
                                    children: (0, r.jsx)(ro, {
                                        application: c,
                                        channel: l,
                                        message: t,
                                        presenceActivity: u,
                                        analyticsLocations: d,
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: rC.Y0,
                                children: (0, r.jsx)(a9, {
                                    parentChannelId: l.parent_id,
                                    postId: l.id,
                                    isFirstMessage: !0,
                                    isLastItem: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            !a &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", { className: rC.b1 }),
                        (0, r.jsx)(rf, { className: rC.Lz, channel: l }),
                    ],
                }),
            (0, r.jsx)("div", { className: rC.ld }),
        ],
    });
}
var rE = n(640708),
    rS = n(378570),
    r_ = n(452082),
    rI = n(327337);
function rj(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = o.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        a = (0, m.bG)([nD.A], () => nD.A.isBlocked(i)),
        c = o.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    o.useEffect(() => {
        (0, iA.QF)({ ...c, viewName: iA.gN.SAFETY_WARNING_BANNER }), id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW });
    }, [c]);
    let d = o.useCallback(
            (e) => {
                (0, iA._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = o.useCallback(() => {
            (0, io.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("25028"),
                        n.e("6627"),
                        n.e("43549"),
                        n.e("70940"),
                        n.e("2033"),
                        n.e("82830"),
                        n.e("19959"),
                        n.e("20516"),
                    ]).then(n.bind(n, 131882));
                    return (n) => {
                        let { transitionState: s, onClose: a } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: a,
                        });
                    };
                },
                { modalKey: rI.V },
            ),
                d(iA.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, i, l, d]),
        h = o.useCallback(() => {
            s(), d(iA.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [s, d]),
        g = o.useCallback(() => {
            s(), d(iA.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [s, d]),
        p = o.useCallback(() => {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70940"), n.e("84938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onBlock: h,
                        onBlockAndReport: g,
                        onCancel: () => {
                            s?.(), d(iA.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [h, g, i, t, d]);
    return (0, r.jsx)(iS, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: ek.intl.string(ek.t.ZzlB5p),
        description: ek.intl.string(ek.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: ek.intl.string(ek.t.Qyu4UK), variant: "primary", onClick: u },
            ...(a ? [] : [{ text: ek.intl.string(ek.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var ry = n(74114);
function rv(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, m.cf)([nD.A], () => ({ isIgnored: nD.A.isIgnored(t) }), [t]),
        s = o.useCallback(() => {
            (0, iA._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: ip._j.STRANGER_DANGER,
                cta: iA.Wm.USER_MODAL_IGNORE,
            }),
                s1.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]),
        a = o.useCallback(() => {
            (0, iA._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: ip._j.STRANGER_DANGER,
                cta: iA.Wm.USER_MODAL_UNIGNORE,
            }),
                s1.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]);
    return (0, r.jsx)(im.PQ, {
        title: ek.intl.string(ek.t.avyV7P),
        description: ek.intl.string(ek.t.naWE6W),
        buttonText: i ? ek.intl.string(ek.t["3SrzRT"]) : ek.intl.string(ek.t.avyV7P),
        onButtonPress: i ? a : s,
    });
}
function rT(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, m.cf)([nD.A], () => ({ isBlocked: nD.A.isBlocked(i) }), [i]),
        a = o.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        c = (0, rI.eT)(),
        d = o.useCallback(
            (e) => () => {
                s1.A.blockUser(i, { location: rI.Rx }).then(() => {
                    a();
                }),
                    (0, iA._$)({ channelId: t, warningId: l, senderId: i, warningType: ip._j.STRANGER_DANGER, cta: e });
            },
            [a, t, l, i],
        );
    o.useEffect(() => {
        (0, iA.mO)(w.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: ip._j.STRANGER_DANGER,
        }),
            id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW });
    }, [t, l, i]);
    let u = () => {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("55941"), n.e("82911"), n.e("47894")]).then(
                    n.bind(n, 129493),
                );
                return (n) => {
                    let { transitionState: s, onClose: a } = n;
                    return (0, r.jsx)(e, {
                        transitionState: s,
                        onClose: a,
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        description: ek.intl.string(ek.t.DJMZX6),
                        safetyTipRows: c.map((e, t) =>
                            (0, r.jsx)(ih.B, { index: t, listType: "numbered", title: e }, t),
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(rv, { senderId: i, channelId: t, warningId: l }, "more-tips-button"),
                                (0, r.jsx)(
                                    im.PQ,
                                    {
                                        title: ek.intl.string(ek.t["5QYPO2"]),
                                        description: ek.intl.string(ek.t.G08MKu),
                                        buttonText: ek.intl.string(ek.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            a(), h(iA.Wm.USER_MODAL_BLOCK_CONFIRM, iA.Wm.USER_MODAL_BLOCK_CANCEL, u);
                                        },
                                    },
                                    "block-button",
                                ),
                            ],
                        }),
                    });
                };
            });
        },
        h = (e, s, a) => {
            (0, io.openModalLazy)(async () => {
                let { default: o } = await Promise.all([n.e("74370"), n.e("14788"), n.e("67554")]).then(
                    n.bind(n, 219801),
                );
                return (n) =>
                    (0, r.jsx)(o, {
                        ...n,
                        userId: i,
                        confirmBlock: d(e),
                        onCancel: () => {
                            a?.(),
                                (0, iA._$)({
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    warningType: ip._j.STRANGER_DANGER,
                                    cta: s,
                                });
                        },
                    });
            });
        };
    return (0, r.jsx)(iS, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: ip._j.STRANGER_DANGER,
        header: ek.intl.string(ek.t.iOkDpM),
        description: ek.intl.string(ek.t.ISUbcM),
        onDismiss: a,
        buttons: [
            {
                text: ek.intl.string(ek.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    u(),
                        (0, iA._$)({
                            channelId: t,
                            warningId: l,
                            senderId: i,
                            warningType: ip._j.STRANGER_DANGER,
                            cta: iA.Wm.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(s
                ? []
                : [
                      {
                          text: ek.intl.string(ek.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => h(iA.Wm.USER_BANNER_BLOCK_CONFIRM, iA.Wm.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
var rN = n(306788),
    rb = n(340833),
    rM = n(913642),
    rR = n(453302),
    rD = n(670455),
    rL = n(182147);
function rk(e) {
    let { summary: t, channel: n } = e,
        l = (0, aC.bG)([lW.A], () => lW.A.summaryFeedback(t)),
        i = (e, l) => {
            e.stopPropagation(), (0, rR.A)({ summary: t, channel: n, rating: l });
        },
        s = (0, Q.p)(
            null == l,
            {
                enter: { from: { opacity: 0 }, to: { opacity: 1 } },
                leave: { opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
    return (0, r.jsx)(r.Fragment, {
        children: s((e, t) =>
            t
                ? (0, r.jsx)("div", {
                      className: rL.RD,
                      children: (0, r.jsxs)(u.animated.div, {
                          style: e,
                          className: rL.GK,
                          children: [
                              (0, r.jsx)(ej.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: ek.intl.string(ek.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(eM.D, {
                                  onClick: (e) => i(e, rD.P0.GOOD),
                                  children: (0, r.jsx)(rM.A, { className: rL.O1, width: 12, height: 12 }),
                              }),
                              (0, r.jsx)(eM.D, {
                                  onClick: (e) => i(e, rD.P0.BAD),
                                  children: (0, r.jsx)(rb.A, { className: rL.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function rO(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aC.bG)([lW.A], () => lW.A.selectedSummary(l.id));
    if (null == s) return null;
    let a = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(rN.K, { size: "xs", color: "currentColor", className: rL.cR }), n.content],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(rk, { summary: s, channel: l }),
                      (0, r.jsx)(rN.K, { size: "xs", color: "currentColor", className: rL.Jq }),
                  ],
              })),
        (0, r.jsx)(
            nQ.A,
            {
                className: d()(rL.aK, o ? rL.Ke : rL.hO),
                contentClassName: o ? rL.Ew : rL.rD,
                isUnread: a,
                id: a ? nz.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var rP = n(383233),
    rG = n(309010),
    rU = n(927813),
    rw = n(675171),
    rF = n(806621),
    rH = n(636922),
    rB = n(756773);
let rV = o.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = o.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, r.jsx)(eM.D, {
        className: d()(rB.XI, { [rB.Lq]: t }),
        onClick: l,
        "aria-label": ek.intl.string(t ? ek.t.hC8KHg : ek.t.XBlaiC),
        children: (0, r.jsx)(ej.E, {
            variant: "text-sm/normal",
            color: "text-link",
            className: rB.Qq,
            children: t ? ek.intl.string(ek.t.hC8KHg) : ek.intl.string(ek.t.XBlaiC),
        }),
    });
});
var rK = n(34337),
    rz = n(330001),
    rW = n(631576),
    rq = n(750385),
    r$ = n(148355),
    rJ = n(310876);
let rY = "749054660769218631";
function rZ(e) {
    let { channel: t } = e,
        [n, l] = o.useState("");
    o.useEffect(() => {
        (0, rW.zk)("847199849233514549", !0);
    }, []);
    let i = (0, m.bG)(
            [ep.A, ec.default],
            () =>
                !!ls()(ep.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== ec.default.getId() && e.state === w.cmJ.SENT && !(0, e3.A)(e)),
        ),
        s = (0, m.bG)([lZ.default], () => lZ.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        a = iD.Ay.useName(s) ?? ek.intl.string(ek.t.y1Wu2f),
        c = (0, m.bG)([rq.A], () => rq.A.getStickerById(rY)),
        d = o.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    (0, rz.W)({ channelId: t.id, source: "In-channel greet" }), await I.A.sendGreetMessage(t.id, rY);
                } catch (e) {
                    e.ok || 429 !== e.status || l(ek.intl.string(ek.t.Whhv4w));
                }
        }, [t.id, n]),
        u = ek.intl.formatToPlainString(ek.t.m0zYbV, { username: a }),
        h =
            null != n && "" !== n
                ? (0, r.jsx)(ej.E, {
                      className: rJ.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, r.jsxs)("div", {
              className: rJ.ft,
              children: [
                  (0, r.jsxs)(eM.D, {
                      className: null != n && "" !== n ? rJ.AO : rJ.Iq,
                      "aria-label": ek.intl.string(ek.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, r.jsx)(r$.A, { sticker: c, size: 24 }),
                          (0, r.jsx)(ej.E, { className: rJ.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  h,
              ],
          })
        : (0, r.jsxs)("div", {
              className: rJ.nj,
              children: [
                  (0, r.jsx)(r$.A, { sticker: c, size: 160, className: rJ.Xr }),
                  (0, r.jsx)(eD.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: u,
                  }),
                  h,
              ],
          });
}
var rX = n(900210),
    rQ = n(626360);
function r0(e) {
    return null != e && e.type === w.TZK.MESSAGE && e.content.id === e.groupId;
}
function r1(e) {
    return (
        e.type === w.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === w.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === w.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === w.TZK.MESSAGE_GROUP_SUSPENDED_USER
    );
}
let r2 = o.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, r.jsx)(rH.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new rP.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: w.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, r.jsx)(ij.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var r3 = n(408899);
let r4 = (0, u.animated)(S),
    r7 = o.memo(
        function (e) {
            var t;
            let n,
                l,
                i,
                {
                    className: s,
                    messageGroupSpacing: a,
                    scrollerClassName: c,
                    channel: u,
                    messages: g,
                    unreadCount: p,
                    showNewMessagesBar: A,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: x,
                    hasUnreads: E,
                    editingMessageId: S,
                    fontSize: N,
                    keyboardModeEnabled: b,
                    filterAfterTimestamp: M,
                    showingQuarantineBanner: R,
                    hideSummaries: D = !1,
                    jumpBarClassName: L,
                    typingGradient: P,
                    isGameInvitesPost: G,
                } = e,
                [U, F] = o.useState(l$.A.isAtBottom(u.id) ?? !1),
                H = (0, k.Ay)(u),
                B = (0, l0.I)(f, N),
                V = f ? B : Math.round(0.87 * B),
                z = Math.max(1, Math.round((V / 30) * 8)),
                W = o.useMemo(
                    () =>
                        (function (e) {
                            let {
                                compact: t,
                                messageGroups: n,
                                groupRange: l,
                                attachments: i,
                                fontSize: s,
                                groupSpacing: a,
                            } = e;
                            if (i > n)
                                throw Error(
                                    `generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${i}`,
                                );
                            let r = s / w.hH7.FONT_SIZE_DEFAULT,
                                o = t ? n4.BP : n4.B5,
                                c = t ? n4.Uj : n4._G,
                                d = 0,
                                u = Array(n)
                                    .fill(null)
                                    .map(() => {
                                        let e = ls().random(1, l);
                                        return (d += a * r), (d += o * r), (d += (e - 1) * c * r), e;
                                    }),
                                h = u.map((e, t) => t),
                                m = [];
                            for (; m.length < i; ) {
                                let e = { width: ls().random(140, 400), height: ls().random(100, 320) };
                                m.push([h.splice(ls().random(0, h.length - 1), 1)[0], e]), (d += e.height + n4.VF * r);
                            }
                            return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                        })({
                            compact: f,
                            messageGroups: V,
                            groupRange: 4,
                            attachments: z,
                            fontSize: N,
                            groupSpacing: a,
                        }),
                    [f, V, z, N, a],
                ),
                q = (function (e) {
                    let {
                            messages: t,
                            channel: n,
                            compact: l,
                            hasUnreads: i,
                            focusId: s,
                            placeholderHeight: a,
                            canLoadMore: r = !0,
                            handleScrollToBottom: c,
                            handleScrollFromBottom: d,
                            additionalMessagePadding: u = 0,
                        } = e,
                        { windowId: h } = o.useContext(l6.Ay),
                        [m] = o.useState(
                            () =>
                                new ii({
                                    messages: t,
                                    channel: n,
                                    compact: l,
                                    hasUnreads: i,
                                    focusId: s,
                                    placeholderHeight: a,
                                    canLoadMore: r,
                                    windowId: h,
                                    handleScrollToBottom: c,
                                    handleScrollFromBottom: d,
                                    additionalMessagePadding: u,
                                }),
                        );
                    return (
                        m.getSnapshotBeforeUpdate(s),
                        o.useLayoutEffect(() =>
                            m.mergePropsAndUpdate({
                                messages: t,
                                channel: n,
                                compact: l,
                                hasUnreads: i,
                                focusId: s,
                                placeholderHeight: a,
                                canLoadMore: r,
                                windowId: h,
                                handleScrollToBottom: c,
                                handleScrollFromBottom: d,
                                additionalMessagePadding: u,
                            }),
                        ),
                        o.useLayoutEffect(() => () => m.cleanup(), [m]),
                        m
                    );
                })({
                    messages: g,
                    channel: u,
                    compact: f,
                    hasUnreads: E,
                    focusId: S,
                    placeholderHeight: W.totalHeight,
                    canLoadMore: null == M,
                    handleScrollToBottom: o.useCallback(() => F(!0), [F]),
                    handleScrollFromBottom: o.useCallback(() => F(!1), [F]),
                    additionalMessagePadding: 48,
                }),
                $ = (0, O.sV)(u.guild_id, "message_stream"),
                J = (function (e) {
                    let { scrollerRef: t, ...n } = e,
                        l = (0, y.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        i = (0, y.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        s = o.useCallback(
                            (e) => {
                                if (!n.keyboardModeEnabled) return;
                                let l = t.current?.getScrollerNode()?.ownerDocument,
                                    i = l?.querySelector(e);
                                null != i &&
                                    t.current?.scrollIntoViewNode({
                                        node: i,
                                        padding: 4 * nz.mZ,
                                        callback: () => i?.focus(),
                                    });
                            },
                            [n.keyboardModeEnabled, t],
                        ),
                        a = o.useCallback(() => {
                            n.hasMoreAfter || eA._.dispatchToLastSubscribed(w.jej.TEXTAREA_FOCUS);
                        }, [n.hasMoreAfter]),
                        r = (0, l4.Ay)({
                            id: e2.D,
                            preserveFocusPosition: !1,
                            setFocus: s,
                            isEnabled: n.keyboardModeEnabled && !n.isEditing,
                            scrollToStart: i,
                            scrollToEnd: l,
                            onNavigateNextAtEnd: a,
                        }),
                        c = o.useCallback(
                            (e) => {
                                let { atEnd: t = !1 } = e;
                                t ? r.focusLastVisibleItem() : r.focusFirstVisibleItem();
                            },
                            [r],
                        );
                    return (0, lX.Vo)({ event: w.jej.FOCUS_MESSAGES, handler: c }), r;
                })({ scrollerRef: q.ref, isEditing: null != S, keyboardModeEnabled: b, hasMoreAfter: g.hasMoreAfter }),
                Y = (0, m.bG)([lK.A], () =>
                    td.A.can(w.xBc.READ_MESSAGE_HISTORY, u) ? null : lK.A.getViewingRolesTimestamp(u.getGuildId()),
                ),
                {
                    channelStreamMarkup: Z,
                    newMessagesBar: X,
                    jumpToPresentBar: Q,
                    forumPostActionBar: ee,
                    pinnedFirstMessage: et,
                    safetyWarningBanner: es,
                } = (function (e) {
                    let t,
                        n,
                        l,
                        i,
                        {
                            channel: s,
                            messages: a,
                            unreadCount: c,
                            showNewMessagesBar: d,
                            messageDisplayCompact: u,
                            channelStream: h,
                            uploads: g,
                            loadMore: p,
                            scrollManager: A,
                            specs: f,
                            filterAfterTimestamp: C,
                            showingQuarantineBanner: x,
                            hideSummaries: E,
                            jumpBarClassName: S,
                            isGameInvitesPost: _,
                        } = e,
                        y = lZ.default.getCurrentUser(),
                        N = () => A.isInitialized() || a.ready,
                        b = (0, rF.r)(s),
                        M = a.length > 0 && a.first()?.isFirstMessageInForumPost(s),
                        R = (0, j.cI)(s),
                        D = (0, m.bG)([lW.A], () => lW.A.shouldShowTopicsBar() && !E),
                        L = (0, ry.l)(s.id),
                        k = (0, r_.j)(s.id, rI.Rx),
                        O = (0, ia.E)(s.id),
                        P = (0, rw.A)(),
                        G = (function (e, t) {
                            if (e.isDM() && null != t)
                                if (t.type === ip._j.STRANGER_DANGER)
                                    return (0, r.jsx)(rT, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else if (t.type === ip._j.LIKELY_ATO)
                                    return (0, r.jsx)(iI, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else
                                    return (0, r.jsx)(rj, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                            return null;
                        })(s, L ?? k ?? O),
                        U = s.isForumPost() && !M ? (0, r.jsx)(a9, { postId: s.id }) : null,
                        { firstMessage: F } = (0, lV.n5)(s, _),
                        H =
                            null != F
                                ? (0, r.jsx)(
                                      rx,
                                      { compact: u, channel: s, message: F, id: (0, e2.j)(s.id, F.id) },
                                      F.id,
                                  )
                                : null,
                        B = (0, iN.A)(s.id),
                        V = (0, aG.W1)(s);
                    (t = eZ.Sf.useSetting()),
                        (n = (0, aC.bG)([v.A], () => v.A.useReducedMotion)),
                        o.useEffect(() => {
                            function e(e) {
                                let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                                a ||
                                    r !== av.v.BURST ||
                                    !t ||
                                    n ||
                                    (0, t6.on)({ channelId: i, messageId: l, emoji: s, key: rX.W.EXTERNAL });
                            }
                            return (
                                T.h.subscribe("MESSAGE_REACTION_ADD", e),
                                () => {
                                    T.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                                }
                            );
                        }, [t, n]);
                    let K = null,
                        z = [],
                        W = h.map((e, t) => {
                            if (e.type === w.TZK.DIVIDER) {
                                let n = null != e.unreadId;
                                return null != C
                                    ? null
                                    : e.isConversationChannelHeader
                                      ? (0, r.jsx)(
                                            iv,
                                            { channel: s, scrollManager: A },
                                            `conversation-${e.contentKey ?? t}`,
                                        )
                                      : e.isSummaryDivider
                                        ? (0, r.jsx)(rO, {
                                              index: t,
                                              item: e,
                                              channel: s,
                                              isBeforeGroup: null == e.content && r0(h[t + 1]),
                                          })
                                        : (0, r.jsx)(
                                              nQ.A,
                                              {
                                                  isUnread: n,
                                                  isBeforeGroup: null == e.content && r0(h[t + 1]),
                                                  id: n ? nz.q4 : void 0,
                                                  itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                                  children: e.content,
                                              },
                                              `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                          );
                            }
                            if (e.type === w.TZK.FORUM_POST_ACTION_BAR)
                                return (0, r.jsx)(
                                    a9,
                                    {
                                        parentChannelId: s.parent_id,
                                        postId: s.id,
                                        isLastItem: t + 1 === h.length,
                                        isFirstMessage: !0,
                                    },
                                    `forum-post-action-bar-${s.id}`,
                                );
                            if (r1(e)) {
                                let t,
                                    n = !0;
                                return (
                                    e.type === w.TZK.MESSAGE_GROUP_BLOCKED
                                        ? (t = ek.t["+FcYM/"])
                                        : e.type === w.TZK.MESSAGE_GROUP_IGNORED
                                          ? (t = ek.t["VFWjc+"])
                                          : e.type === w.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                            ? ((t = ek.t.rHRovo), (n = !1))
                                            : (t = ek.t.xfkfTK),
                                    (0, r.jsx)(
                                        n3,
                                        {
                                            unreadId: nz.q4,
                                            messages: e,
                                            channel: s,
                                            compact: u,
                                            collapsedReason: t,
                                            canUncollapse: n,
                                        },
                                        e.key,
                                    )
                                );
                            }
                            if (null != C && C > e.content.timestamp.getTime() * rU.A.Millis.SECOND) return;
                            e.type === w.TZK.MESSAGE && null == K && (K = e);
                            let n = e.groupId === K?.groupId ? K.content.id : e.groupId,
                                l = V && e.content.isFirstMessageInForumPost(s),
                                i = e.type === w.TZK.THREAD_STARTER_MESSAGE ? nW : n$;
                            return (0, r.jsx)(
                                i,
                                {
                                    compact: u && !l,
                                    channel: s,
                                    message: e.content,
                                    groupId: n,
                                    flashKey: e.flashKey,
                                    id: (0, e2.j)(s.id, e.content.id),
                                    isLastItem: t >= h.length - 1,
                                    renderContentOnly: B || l,
                                },
                                e.content.id,
                            );
                        });
                    z.push(...W);
                    let q = h[h.length - 1];
                    if (
                        (null != y &&
                            g.forEach((e, t) => {
                                let n = 0 === t && (0, ei.l)(s, q, new rP.Ay({ type: w.lAJ.DEFAULT, author: y }));
                                z.push(
                                    (0, r.jsx)(
                                        r2,
                                        { file: e, channel: s, user: y, isGroupStart: n, compact: u },
                                        `upload-${e.id}`,
                                    ),
                                );
                            }),
                        a.hasMoreBefore && null == C)
                    ) {
                        a.length > 0 &&
                            (a.length > 1 &&
                                (function (e) {
                                    let t = !1;
                                    for (let n of e)
                                        if (n.type !== w.TZK.DIVIDER) {
                                            if (!r1(n)) return !1;
                                            t = !0;
                                        }
                                    return t;
                                })(h) &&
                                z.unshift(
                                    (0, r.jsx)(rV, { loading: a.loadingMore, onClick: () => p() }, "load-more-before"),
                                ),
                            z.unshift((0, r.jsx)("div", { style: { height: nz.N0, flex: "0 0 auto" } }, "buffer")));
                        let { useReducedMotion: e } = v.A;
                        ((e && N()) || !e) && z.unshift((0, r.jsx)(l2, { compact: u, ...f }, "has-more"));
                    }
                    if (
                        ((a.hasMoreBefore && null == C) ||
                            _ ||
                            z.unshift((0, r.jsx)(ad, { channel: s, showingBanner: x }, "empty-message")),
                        a.hasMoreAfter && z.push((0, r.jsx)(l2, { compact: u, ...f }, "has-more-after")),
                        !x && b && N() && z.push((0, r.jsx)(rZ, { channel: s })),
                        c > 0 && d && N())
                    ) {
                        let e,
                            t,
                            n = lJ.Ay.getOldestUnreadTimestamp(s.id),
                            i = 0 !== n ? n : el.default.extractTimestamp(s.id),
                            a = (0, en.ro)(new Date(), new Date(i));
                        if (
                            (lJ.Ay.isEstimated(s.id)
                                ? ((e = a ? ek.t.wvtbbG : ek.t.tHqbtg), (t = ek.t.vaPWFe))
                                : ((e = a ? ek.t["BctFH/"] : ek.t["3wXb9P"]), (t = ek.t["4H8ldG"])),
                            R && (0, j.Kc)(s) && P.includes(rQ.i.SUMMARIES))
                        ) {
                            let n = lJ.Ay.ackMessageId(s.id),
                                a = (function (e, t) {
                                    let n = lW.A.summaries(e) ?? [],
                                        l = 0;
                                    for (let e of n) el.default.compare(e.endId, t) > 0 && (l += 1);
                                    return l;
                                })(s.id, lJ.Ay.getOldestUnreadMessageId(s.id));
                            if (
                                ((0, is.zV)(w.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                                    num_unread_summaries: a,
                                    num_unread_messages: c,
                                    last_ack_message_id: n,
                                    summaries_enabled_by_user: D,
                                    summaries_enabled_for_channel: (0, j.pk)(s),
                                }),
                                (0, j.pk)(s))
                            ) {
                                let n = D
                                    ? ek.intl.format(t, { count: c })
                                    : ek.intl.format(e, { count: c, timestamp: i });
                                if (D) {
                                    let e =
                                        a > 0
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(ej.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: ek.intl.format(t, { count: c }),
                                                      }),
                                                      (0, r.jsx)(rE.A, {
                                                          style: { paddingLeft: 8, paddingRight: 8 },
                                                          height: 4,
                                                          width: 4,
                                                      }),
                                                      (0, r.jsx)(ej.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: ek.intl.format(ek.t.CBftDc, { count: a }),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(ej.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: n,
                                              });
                                    l = (0, r.jsx)(rK.OZ, { scrollManager: A, content: e, channel: s });
                                } else {
                                    let e = (0, r.jsx)("div", {
                                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                                        children:
                                            a > 0
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(ej.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: ek.intl.format(t, { count: c }),
                                                          }),
                                                          (0, r.jsx)(rE.A, {
                                                              style: { paddingLeft: 8, paddingRight: 8 },
                                                              height: 4,
                                                              width: 4,
                                                          }),
                                                          (0, r.jsx)(ej.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: ek.intl.format(ek.t.CBftDc, { count: a }),
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ej.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: n,
                                                  }),
                                    });
                                    l = (0, r.jsx)(rK.GN, { content: e, channelId: s.id });
                                }
                            }
                        } else
                            P.includes(rQ.i.NEW_MESSAGES) &&
                                (l = (0, r.jsx)(rK.GN, {
                                    content: ek.intl.format(e, { count: c, timestamp: i }),
                                    channelId: s.id,
                                }));
                    }
                    if (
                        (null == l &&
                            (0, j.pk)(s) &&
                            D &&
                            P.includes(rQ.i.SUMMARIES) &&
                            (l = (0, r.jsx)(rK.UK, { channel: s, scrollManager: A })),
                        a.error)
                    )
                        i = (0, r.jsx)(rK.Ez, {
                            loading: a.loadingMore,
                            onClick: () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void I.A.fetchMessages({
                                        channelId: e,
                                        limit: (0, l0.h)("renderStream.reload"),
                                        truncate: !0,
                                    })
                                );
                            },
                            className: S,
                        });
                    else if (a.hasMoreAfter && N()) {
                        let { jumpReturnTargetId: e } = a;
                        i =
                            a.loadingMore && a.jumpedToPresent
                                ? (0, r.jsx)(rK.Ab, { className: S })
                                : null != e
                                  ? (0, r.jsx)(rK.Ab, {
                                        type: rK.ks.REPLY,
                                        onClick: () => {
                                            I.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                        },
                                        className: S,
                                    })
                                  : (0, r.jsx)(rK.Ab, {
                                        onClick: () => {
                                            let e;
                                            return (
                                                I.A.jumpToPresent(s.id, (0, l0.h)("renderStream.jumpToPresent")),
                                                (e = rG.A.getChannelId()),
                                                void (s.id === e && (0, rS.iN)(s.id))
                                            );
                                        },
                                        className: S,
                                    });
                    }
                    return {
                        channelStreamMarkup: z,
                        newMessagesBar: l,
                        jumpToPresentBar: i,
                        forumPostActionBar: U,
                        pinnedFirstMessage: H,
                        safetyWarningBanner: G,
                    };
                })({
                    channel: u,
                    messages: g,
                    unreadCount: p,
                    showNewMessagesBar: A,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: x,
                    loadMore: q.loadMore,
                    scrollManager: q,
                    specs: W,
                    filterAfterTimestamp: M ?? Y,
                    showingQuarantineBanner: R,
                    hideSummaries: D,
                    jumpToPresent: () => {
                        g.hasPresent()
                            ? q.ref.current?.scrollToBottom({ animate: !v.A.useReducedMotion })
                            : I.A.jumpToPresent(u.id, B);
                    },
                    jumpBarClassName: L,
                    isGameInvitesPost: G,
                });
            (t = q.ref),
                (n = o.useCallback(() => t.current?.scrollToBottom(), [t])),
                (l = o.useCallback(() => t.current?.scrollPageUp({ animate: !v.A.useReducedMotion }), [t])),
                (i = o.useCallback(() => t.current?.scrollPageDown({ animate: !v.A.useReducedMotion }), [t])),
                (0, lX.Vo)({ event: w.jej.SCROLLTO_PRESENT, handler: n }),
                (0, lX.Vo)({ event: w.jej.SCROLL_PAGE_UP, handler: l }),
                (0, lX.Vo)({ event: w.jej.SCROLL_PAGE_DOWN, handler: i });
            let ea = (0, _.R7)(),
                { ref: er, ...eo } = (0, h.LT)(J),
                ec = (0, y.A)((e) => {
                    (q.ref.current = e), (er.current = e?.getScrollerNode() ?? null);
                }),
                ed = (0, m.bG)([lq.A], () => {
                    let e = lq.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eu = o.useMemo(() => (P ? (U ? r3.gA : r3.ru) : r3.Zd), [P, U]),
                eh = o.useMemo(() => (P ? (U ? r3.cz : r3.XF) : r3.U6), [P, U]);
            return (0, r.jsxs)(h.hD, {
                navigator: J,
                children: [
                    et,
                    null != es && es,
                    (0, r.jsxs)("div", {
                        className: d()(r3.Og, s, `group-spacing-${a}`),
                        children: [
                            null == es && X,
                            (0, r.jsxs)(K, {
                                channel: u,
                                scrollManager: q,
                                children: [
                                    (0, r.jsxs)(r4, {
                                        ref: ec,
                                        customTheme: !0,
                                        className: d()(c, r3.XG, ed ? eh : void 0),
                                        contentClassName: r3.gT,
                                        onResize: q.handleResize,
                                        onScroll: q.handleScroll,
                                        onMouseDown: q.handleMouseDown,
                                        onMouseUp: q.handleMouseUp,
                                        ...ea,
                                        tabIndex: -1,
                                        role: "group",
                                        children: [
                                            ee,
                                            (0, r.jsxs)("ol", {
                                                className: r3.bv,
                                                "aria-label": ek.intl.formatToPlainString(ek.t.XarRiL, {
                                                    channelName: H ?? "",
                                                }),
                                                ...eo,
                                                children: [
                                                    (0, r.jsx)("span", {
                                                        className: r3.$4,
                                                        id: "messagesNavigationDescription",
                                                        "aria-hidden": !0,
                                                        children: ek.intl.string(ek.t["Spb3s/"]),
                                                    }),
                                                    Z,
                                                    (0, r.jsx)("div", {
                                                        className: d()({
                                                            [r3.lB]: !R,
                                                            [r3.Ie]: 0 === g.length && !g.loadingMore,
                                                            [r3.Fb]:
                                                                1 === g.length &&
                                                                !g.loadingMore &&
                                                                u.isForumPost() &&
                                                                g.first()?.isFirstMessageInForumPost(u),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    ed ? null : (0, r.jsx)("div", { className: eu }),
                                    Q,
                                    $ && (0, r.jsx)(lH, { channel: u, scrollManager: q }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    r5 = o.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: l = !1,
                forceCompact: i = !1,
                forceCozy: s = !1,
                typingGradient: a = !1,
                ...c
            } = e,
            {
                canManageMessages: d,
                permissionVersion: u,
                canChat: h,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, m.bG)([tc.A], () => null == t || tc.A.canChatInGuild(t), [t]),
                    { canManageMessages: l, permissionVersion: i } = (0, m.cf)(
                        [td.A],
                        () => ({
                            canManageMessages: td.A.can(w.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? td.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: i, canManageMessages: l };
            })(t),
            {
                messageGroupSpacing: g,
                fontSize: p,
                messageDisplayCompact: A,
                renderSpoilers: f,
                keyboardModeEnabled: C,
            } = (function () {
                let e = eZ.hH.useSetting(),
                    t = eZ.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: l,
                        keyboardModeEnabled: i,
                    } = (0, m.cf)([v.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = v.A;
                        return { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n };
                    });
                return {
                    messageGroupSpacing: n,
                    messageDisplayCompact: e,
                    renderSpoilers: t,
                    fontSize: l,
                    keyboardModeEnabled: i,
                };
            })(),
            {
                messages: x,
                channelStream: E,
                oldestUnreadMessageId: S,
                editingMessageId: _,
                isGameInvitesPost: I,
            } = (function (e) {
                var t;
                let n,
                    l = (0, m.bG)([ep.A], () => ep.A.getMessages(e.id), [e.id]),
                    i = (0, m.bG)([lJ.Ay], () => lJ.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = et.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    a = lZ.default.getUser(ec.default.getId())?.hasFlag(w.nhx.SPAMMER) ?? !1,
                    r = (0, j.cI)(e),
                    c = (0, lB.A)("use_topic_dividers_in_chat"),
                    d = (0, m.yK)([lW.A], () => (r && c ? (lW.A.summaries(e.id) ?? []) : []), [r, e.id, c]),
                    u = (0, m.bG)([lW.A], () => (r ? lW.A.selectedSummary(e.id) : null), [r, e.id]),
                    h = (0, O.Lw)(e.getGuildId(), "message_stream"),
                    g = (0, m.bG)([P.A], () => (h ? P.A.getSelectedConversation(e.id) : null), [h, e.id]),
                    p =
                        ((t = l),
                        (n = o.useMemo(() => {
                            let e = new Set();
                            return (
                                t.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [t])),
                        (0, L.A)(n));
                !(function (e, t) {
                    let [n, l] = (function (e, t) {
                        let [n, l] = o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (!t.isPrivate()) return [D, R];
                                        let n = e.filter(
                                                (e) => e.application?.id != null && e.activity?.party_id != null,
                                            ),
                                            l = n.map((e) => e.id);
                                        return [n, l];
                                    })(e, t),
                                [e, t],
                            ),
                            i = (0, m.yK)([b.A], () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            b.A.findActivity(
                                                t.author.id,
                                                (e) =>
                                                    e.application_id === t.application?.id &&
                                                    e.party?.id === t.activity?.party_id,
                                                null,
                                                !0,
                                            ) && e.push(t.id);
                                    }),
                                    e
                                );
                            }, [n]);
                        return [
                            l,
                            o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (0 === e.length) return M;
                                        let n = [];
                                        return (
                                            e.forEach((e) => {
                                                let l = e.application?.id,
                                                    i = e.activity?.party_id;
                                                if (e.id in t || null == l || null == i) return;
                                                let s = e.timestamp.getTime(),
                                                    a = {
                                                        userId: e.author.id,
                                                        applicationId: l,
                                                        partyId: i,
                                                        messageId: e.id,
                                                        channelId: e.channel_id,
                                                        inviteTime: s,
                                                    };
                                                n.push(a);
                                            }),
                                            n
                                        );
                                    })(n, i),
                                [n, i],
                            ),
                        ];
                    })(e, t);
                    o.useEffect(() => {
                        for (let e of l)
                            N.A.isSubscribed(e) ||
                                T.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                    }, [l]);
                })(l, e);
                let A = (0, lV.YG)(e),
                    f = (0, O.sV)(e.guild_id, "message_stream"),
                    C = o.useMemo(
                        () =>
                            (function (e) {
                                let t,
                                    n,
                                    l,
                                    {
                                        channel: i,
                                        messages: s,
                                        oldestUnreadMessageId: a,
                                        treatSpam: r,
                                        summaries: o,
                                        selectedSummary: c,
                                        selectedConversation: d,
                                        pinFirstMessage: u = !1,
                                        isTopicalNavEnabled: h = !1,
                                    } = e,
                                    m = [],
                                    g = !1,
                                    p = null != a ? el.default.extractTimestamp(a) : null,
                                    A = null;
                                return (
                                    s.forEach((e) => {
                                        var f, C;
                                        let x, E, S;
                                        if (u && e.isFirstMessageInForumPost(i)) return;
                                        if (null != o && o.length > 0) {
                                            let t = el.default.extractTimestamp(e.id);
                                            for (let e = 0; e < o?.length; e++) {
                                                if (null == o[e]) continue;
                                                let n = el.default.extractTimestamp(o[e].startId),
                                                    l = el.default.extractTimestamp(o[e].endId);
                                                if (t >= n && t <= l) {
                                                    if (A === o[e].id) break;
                                                    m.push({
                                                        type: w.TZK.DIVIDER,
                                                        content: o[e].topic,
                                                        contentKey: o[e].id,
                                                    }),
                                                        (A = o[e].id);
                                                    break;
                                                }
                                            }
                                        }
                                        let _ = (0, en.i$)(e.timestamp, "LL");
                                        _ !== t &&
                                            null == A &&
                                            (m.push({ type: w.TZK.DIVIDER, content: _, contentKey: _ }), (t = _));
                                        let I = m[m.length - 1],
                                            j = null,
                                            y = (0, es.kf)(e);
                                        g = g || y;
                                        let v = eg(i, e, y && r);
                                        (null !== v &&
                                            ([j, I] =
                                                ((E = f = I),
                                                null == f || f.type !== v
                                                    ? ((x = { type: v, content: [], key: e.id }), m.push(x))
                                                    : (E = (x = f).content[x.content.length - 1]),
                                                [x, E])),
                                        a === e.id && null != p)
                                            ? (null != I && I.type === w.TZK.DIVIDER
                                                  ? (I.unreadId = e.id)
                                                  : null !== j
                                                    ? ((C = j),
                                                      e.isFirstMessageInForumPost(i) ||
                                                          C.content.push({ type: w.TZK.DIVIDER, unreadId: e.id }),
                                                      (C.hasUnread = !0))
                                                    : e.isFirstMessageInForumPost(i) ||
                                                      m.push({ type: w.TZK.DIVIDER, unreadId: e.id }),
                                              (p = null))
                                            : null != p &&
                                              el.default.extractTimestamp(e.id) > p &&
                                              (e.isFirstMessageInForumPost(i) ||
                                                  m.push({ type: w.TZK.DIVIDER, unreadId: e.id }),
                                              (p = null));
                                        let T =
                                            null !=
                                            (S = (function (e, t) {
                                                if (eh.get(t.id) === e.id) return em(e, t.id);
                                                if (
                                                    null == e.applicationId ||
                                                    !(0, er.Lt)(e.flags, w.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                    !t.isDM() ||
                                                    e.author.id === ec.default.getId() ||
                                                    null != e.activity ||
                                                    (0, er.Lt)(
                                                        t.recipientFlags ?? 0,
                                                        ea.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                    ) ||
                                                    eh.has(t.id)
                                                )
                                                    return null;
                                                let n = em(e, t.id);
                                                eh.set(t.id, e.id);
                                                let l = (0, er.lA)(
                                                    t.recipientFlags ?? 0,
                                                    ea.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                    !0,
                                                );
                                                return eo.A.updatePrivateChannelRecipientFlags(t.id, l), n;
                                            })(e, i))
                                                ? { message: S, position: "before" }
                                                : null;
                                        null != T &&
                                            "before" === T.position &&
                                            m.push({ type: w.TZK.MESSAGE, content: T.message, groupId: T.message.id });
                                        let N = I?.type === w.TZK.MESSAGE ? l : I;
                                        (0, ei.l)(i, N, e) && (n = e.id);
                                        let b = {
                                            type:
                                                e.type === w.lAJ.THREAD_STARTER_MESSAGE
                                                    ? w.TZK.THREAD_STARTER_MESSAGE
                                                    : w.TZK.MESSAGE,
                                            content: e,
                                            groupId: n,
                                        };
                                        n === e.id && (l = b);
                                        let { jumpSequenceId: M, jumpFlash: R, jumpTargetId: D } = s;
                                        R && e.id === D && null != M && (b.flashKey = M),
                                            s.jumpTargetId === e.id && (b.jumpTarget = !0),
                                            null != c &&
                                                e.id === c.startId &&
                                                c.count > 1 &&
                                                m.push({
                                                    type: w.TZK.DIVIDER,
                                                    content: c.topic,
                                                    contentKey: c.startId,
                                                    isSummaryDivider: !0,
                                                }),
                                            h &&
                                                null != d &&
                                                e.id === d.startMessageId &&
                                                d.messageCount > 1 &&
                                                m.push({
                                                    type: w.TZK.DIVIDER,
                                                    content: d.title,
                                                    contentKey: `conv-start-${d.id}`,
                                                    isConversationChannelHeader: !0,
                                                }),
                                            null !== j
                                                ? (j.content.push(b), b.jumpTarget && (j.hasJumpTarget = !0))
                                                : m.push(b),
                                            e.isFirstMessageInForumPost(i) &&
                                                m.push({ type: w.TZK.FORUM_POST_ACTION_BAR }),
                                            null != T &&
                                                "after" === T.position &&
                                                m.push({
                                                    type: w.TZK.MESSAGE,
                                                    content: T.message,
                                                    groupId: T.message.id,
                                                }),
                                            null != c &&
                                                e.id === c.endId &&
                                                c.count > 1 &&
                                                m.push({
                                                    type: w.TZK.DIVIDER,
                                                    contentKey: c.endId,
                                                    isSummaryDivider: !0,
                                                });
                                    }),
                                    g && (0, es.iJ)(i) && et.A.trackExposure({ location: "416cc9_1" }),
                                    m
                                );
                            })({
                                channel: e,
                                messages: l,
                                oldestUnreadMessageId: i,
                                treatSpam: s && !a,
                                summaries: d,
                                selectedSummary: u,
                                selectedConversation: g,
                                pinFirstMessage: A,
                                isTopicalNavEnabled: f,
                            }),
                        [l, e, i, s, d, u, g, p, a, A, f],
                    );
                return {
                    messages: l,
                    channelStream: C,
                    oldestUnreadMessageId: i,
                    editingMessageId: (0, m.bG)([e0.A], () => e0.A.getEditingMessage(e.id)?.id),
                    isGameInvitesPost: A,
                };
            })(t),
            y = t.getGuildId();
        return (
            o.useEffect(() => {
                null != y && O.W$.trackExposure({ guildId: y, location: "guild_entry" });
            }, [y]),
            (0, r.jsx)(lz.Bs.Provider, {
                value: (0, lQ.A)(f, d),
                children: (0, r.jsx)(l3.t, {
                    children: (0, r.jsx)(r7, {
                        ...c,
                        messageGroupSpacing: g,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !s && (i || A),
                        messages: x,
                        channelStream: E,
                        permissionVersion: u,
                        uploads: (0, m.bG)([lY.A], () => lY.A.getFiles(t.id), [t]),
                        unreadCount: (0, m.bG)([lJ.Ay], () => lJ.Ay.getUnreadCount(t.id), [t]),
                        hasUnreads: null != S,
                        canChat: h,
                        editingMessageId: _,
                        fontSize: p,
                        keyboardModeEnabled: C,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: a,
                        isGameInvitesPost: I,
                    }),
                }),
            })
        );
    });
