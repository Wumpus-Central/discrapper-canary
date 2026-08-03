let l, i;
n.d(t, { A: () => oa });
var s,
    a = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(534740),
    u = n(837381),
    h = n(17928),
    m = n(446837),
    g = n(259678),
    p = n(448539),
    A = n(536804),
    f = n(789279),
    C = n(584648),
    x = n(947876);
let E = "u" < typeof window ? m.t : (window.ResizeObserver ?? m.t),
    S =
        ((s = c()(x.qZ, x.Vl)),
        (l = new Map()),
        (i =
            "u" < typeof document
                ? p.F
                : new E((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          l.get(t)?.(e);
                      });
                  })),
        r.forwardRef(function (e, t) {
            let {
                    children: n,
                    className: o,
                    onResize: d,
                    contentClassName: u,
                    onScroll: h,
                    dir: m = "ltr",
                    fade: E = !1,
                    customTheme: S = !1,
                    style: _,
                    ...I
                } = e,
                j = r.useRef(null),
                y = r.useRef(null),
                [b, N] = r.useState(!1),
                { scrollerRef: v, getScrollerState: T } = (0, A.A)(),
                M = (0, f.A)(v);
            r.useImperativeHandle(
                t,
                () => ({
                    getScrollerNode: () => v.current,
                    isScrolling: () => null != j.current,
                    getScrollerState: T,
                    ...(0, C.A)(v, T, M),
                }),
                [v, T, M],
            );
            let R = r.useCallback(
                (e) => {
                    null == j.current ? N(!0) : clearTimeout(j.current),
                        (j.current = setTimeout(() => {
                            (j.current = null), N(!1);
                        }, 200)),
                        null != h && h(e);
                },
                [h],
            );
            return (
                r.useEffect(() => () => clearTimeout(j.current), []),
                (0, p.A)({ ref: v, key: "container", onUpdate: d, resizeObserver: i, listenerMap: l }),
                (0, p.A)({ ref: y, key: "content", onUpdate: d, resizeObserver: i, listenerMap: l }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: c()(o, { [x.Rv]: E, [x.D8]: S, [s]: !0, [x.fs]: !0, [x.qw]: b && E }),
                    style: _,
                    dir: m,
                    onScroll: R,
                    ...I,
                    children: (0, a.jsx)(g.xp, {
                        containerRef: y,
                        children: (0, a.jsxs)("div", {
                            ref: y,
                            className: c()(u, x.Qs),
                            children: [n, b && (0, a.jsx)("div", { className: x.X3 })],
                        }),
                    }),
                })
            );
        }));
var _ = n(312138),
    I = n(737992),
    j = n(148494),
    y = n(432371),
    b = n(765548),
    N = n(775602);
n(321073);
var v = n(228366),
    T = n(911411),
    M = n(290863);
let R = [],
    D = [],
    L = [];
var k = n(429913),
    P = n(47167),
    O = n(828488),
    G = n(619065),
    U = n(623562),
    w = n(727011),
    F = n(319365);
let H = r.createContext(null);
function B(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = r.useRef(null),
        s = r.useRef(null),
        { isFocused: o, setIsFocused: c } = (0, F.D7)(),
        d = r.useCallback(
            async (e) => {
                (o && G.A.getSelectedConversationId(t.id) === e) ||
                    ((s.current = e),
                    await new Promise((l) => {
                        let i = () => {
                            n.removeScrollCompleteCallback(i), l();
                        };
                        n.addScrollCompleteCallback(i), (0, U.xI)(t.id, t.guild_id, e);
                    }),
                    s.current === e && (s.current = null),
                    e === G.A.getSelectedConversationId(t.id) &&
                        (c(!0), w.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, t.guild_id, n, c, o],
        ),
        u = r.useMemo(
            () => ({ bannerMeasurementRef: i, conversationJumpInProgressRef: s, selectAndFocusConversation: d }),
            [i, d],
        );
    return (0, a.jsx)(H.Provider, { value: u, children: l });
}
function V() {
    let e = r.useContext(H);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
let K = r.createContext(null);
function z() {
    let e = r.useContext(K);
    if (null == e) throw Error("useConversationFocusDismiss must be used inside <ConversationFocusDismissProvider>");
    return e;
}
function W(e) {
    let { children: t } = e,
        [n, l] = r.useState(null),
        i = r.useMemo(() => ({ dismissReason: n, setDismissReason: l }), [n, l]);
    return (0, a.jsx)(K.Provider, { value: i, children: t });
}
var $ = n(661531),
    q = n(602853),
    J = n(717421),
    Z = n(689175),
    Y = n(866323),
    X = n(448761);
let Q = (0, n(600975).C)({
    kind: "user",
    id: "2021-12_inferno_spam_redaction",
    label: "Inferno Spam Redaction",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Allow guild channel messages from spammers to be collapsed", config: { enabled: !0 } },
    ],
});
var ee = n(58703),
    et = n(935208),
    en = n(857069),
    el = n(694318);
n(938796);
var ei = n(253506),
    es = n(665260),
    ea = n(704844),
    er = n(280450),
    eo = n(320095),
    ec = n(963852),
    ed = n(652215);
let eu = new Map();
function eh(e, t) {
    let n = (0, ec.Ay)({
            channelId: t,
            type: ed.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: ed.pr7.EPHEMERAL,
            state: ed.cmJ.SENT,
        }),
        l = (0, eo.rh)(n);
    return (l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l;
}
function em(e, t, n) {
    if (X.M.NON_COLLAPSIBLE.has(t.type));
    else if (t.hasFlag(ed.pr7.HIDDEN_SUSPENDED_USER)) return ed.TZK.MESSAGE_GROUP_SUSPENDED_USER;
    else if (t.blocked) return ed.TZK.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return ed.TZK.MESSAGE_GROUP_IGNORED;
    else if ((0, el.iJ)(e) && n) return ed.TZK.MESSAGE_GROUP_SPAMMER;
    return null;
}
var eg = n(232835),
    ep = n(625494),
    eA = n(446576),
    ef = n(26430),
    eC = n(866665),
    ex = n(939249),
    eE = n(53788),
    eS = n(922016),
    e_ = n(148795),
    eI = n(834730),
    ej = n(297264),
    ey = n(260598),
    eb = n(691540),
    eN = n(857250),
    ev = n(97483),
    eT = n(789645),
    eM = n(821609),
    eR = n(802986),
    eD = n(375708),
    eL = n(568013);
let ek = [
    { value: "not_useful", label: eR.default.HcSKAh },
    { value: "off_topic", label: eR.default["1cHvxU"] },
    { value: "missing_messages", label: eR.default.ZAJcv4 },
    { value: "misleading_title", label: eR.default.omVRS3 },
    { value: "inappropriate", label: eR.default.dRzDTy },
    { value: "too_cluttered", label: eR.default.wb6DmY },
    { value: "hard_to_use", label: eR.default.NUVZB6 },
    { value: "too_old", label: eR.default.kAFQd3 },
    { value: "other", label: eR.default.OSgZpc },
];
function eP(e) {
    let { channel: t, conversation: n, isFocusMode: l, onClose: i } = e,
        [s, o] = r.useState(() => new Set()),
        [d, u] = r.useState(""),
        h = s.size > 0,
        m = s.has("other"),
        g = r.useCallback((e) => {
            o((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        p = r.useCallback(() => {
            w.X.trackThumbsDownReasonSelected({
                channelId: t.id,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && d.length > 0 ? d : null,
            }),
                (0, eb.P0)((0, eN.o)(eD.intl.string(eR.default.xrEgG0), ev.Ck.SUCCESS)),
                i();
        }, [t.id, n.id, l, s, d, m, i]);
    return (0, a.jsxs)("div", {
        className: eL.oO,
        children: [
            (0, a.jsxs)("div", {
                className: eL.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: eL.TK,
                        children: [
                            (0, a.jsx)(ej.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eD.intl.string(eR.default.C3suOL),
                            }),
                            (0, a.jsx)(eI.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                className: eL.VA,
                                children: eD.intl.string(eR.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ex.D, {
                        className: eL.b,
                        "aria-label": eD.intl.string(eR.default.HLYa5G),
                        onClick: i,
                        children: (0, a.jsx)(eT.P, { size: "xs", color: $.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: eL.Ip,
                role: "group",
                "aria-label": eD.intl.string(eR.default["Lp/NZo"]),
                children: ek.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, a.jsx)(
                        ex.D,
                        {
                            className: c()(eL.jw, s.has(t) && eL.gM),
                            onClick: () => g(t),
                            children: (0, a.jsx)(eI.E, {
                                variant: "text-md/normal",
                                color: "text-strong",
                                children: eD.intl.string(n),
                            }),
                        },
                        t,
                    );
                }),
            }),
            m &&
                (0, a.jsxs)("div", {
                    className: eL.Su,
                    children: [
                        (0, a.jsx)(ey.f, {
                            value: d,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eD.intl.string(eR.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, a.jsxs)("div", {
                            className: eL.rP,
                            children: [
                                (0, a.jsx)(eI.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: eD.intl.string(eR.default.xZzxfK),
                                }),
                                (0, a.jsxs)(eI.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: [d.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsx)(eM.$, {
                text: eD.intl.string(eR.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eO = n(6889);
function eG(e) {
    return c()(eO.FW, { [eO.Jl]: "positive" === e, [eO.vF]: "critical" === e });
}
function eU(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        m = (0, h.bG)([G.A], () => G.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: g } = (0, F.D7)(),
        p = r.useCallback(() => d(!1), []),
        A = r.useCallback(() => {
            (0, U.oq)(t.id, n.id, "up"),
                w.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: g });
        }, [t.id, n.id, g]),
        f = r.useCallback(() => {
            (0, U.oq)(t.id, n.id, "down"),
                d(!0),
                w.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: g });
        }, [t.id, n.id, g]),
        C = r.useCallback(
            () => (0, a.jsx)(eP, { channel: t, conversation: n, isFocusMode: g, onClose: p }),
            [t, n, g, p],
        ),
        x = g ? eA.g : ef._,
        E = g ? eD.intl.string(eR.default.pDD8E1) : eD.intl.string(eR.default["o+pmGy"]),
        S = g ? eD.intl.string(eR.default.XaJ3qC) : eD.intl.string(eR.default.pU5Dut),
        _ = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eC.m, {
                    text: eD.intl.string(eR.default.sBwxOY),
                    children: (0, a.jsx)(ex.D, {
                        "aria-label": eD.intl.string(eR.default.vjJjMc),
                        onClick: A,
                        className: eG("up" === m ? "positive" : void 0),
                        children: (0, a.jsx)(eE.G, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
                (0, a.jsx)(eS.Y, {
                    targetElementRef: u,
                    shouldShow: o,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: eS.Y.Animation.FADE,
                    onRequestClose: p,
                    renderPopout: C,
                    children: () =>
                        (0, a.jsx)("div", {
                            ref: u,
                            children: (0, a.jsx)(eC.m, {
                                text: eD.intl.string(eR.default.tbhdqW),
                                children: (0, a.jsx)(ex.D, {
                                    "aria-label": eD.intl.string(eR.default.TGK5M0),
                                    onClick: f,
                                    className: eG("down" === m ? "critical" : void 0),
                                    children: (0, a.jsx)(e_.d, { color: "currentColor", size: "refresh_sm" }),
                                }),
                            }),
                        }),
                }),
                (0, a.jsx)(eC.m, {
                    text: E,
                    children: (0, a.jsx)(ex.D, {
                        "aria-label": S,
                        onClick: s,
                        className: eG(),
                        children: (0, a.jsx)(x, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, a.jsxs)("div", {
        className: c()(eO.zr, { [eO.e8]: i }),
        children: [
            (0, a.jsx)(eI.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: eO.DD,
                children: n.title,
            }),
            (0, a.jsx)("div", { className: c()(eO.o1, { [eO.jF]: l }), children: _ }),
        ],
    });
}
var ew = n(73202);
function eF(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = r.useCallback(() => {
            l("return");
        }, [l]);
    return (0, a.jsx)("div", {
        className: ew.A,
        children: (0, a.jsx)(eU, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eH = n(284009),
    eB = n.n(eH),
    eV = n(807884),
    eK = n(93474),
    ez = n(201275),
    eW = n(384231),
    e$ = n(959698),
    eq = n(853145),
    eJ = n(9842),
    eZ = n(976860),
    eY = n(885386),
    eX = n(734057),
    eQ = n(540999),
    e0 = n(580745),
    e1 = n(521427),
    e2 = n(375901),
    e3 = n(143413),
    e4 = n(763754),
    e7 = n(391669);
function e8(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = r.useState(!1),
        o = r.useRef(null);
    return (
        r.useEffect(
            () => (
                s(!0),
                (o.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)),
                () => {
                    null != o.current && clearTimeout(o.current);
                }
            ),
            [l],
        ),
        (0, a.jsx)("div", { "data-flash": i, className: c()(e7.j, n), children: t })
    );
}
var e5 = n(491182),
    e9 = n(860227),
    e6 = n(537174),
    te = n(837528),
    tt = n(516287),
    tn = n(843626),
    tl = n(294454),
    ti = n(857071),
    ts = n(517997),
    ta = n(406704),
    tr = n(747926),
    to = n(54570),
    tc = n(8880),
    td = n(834942),
    tu = n(576705),
    th = n(957565),
    tm = n(723702),
    tg = n(697470),
    tp = n(492841),
    tA = n(707985),
    tf = n(519222);
let tC = function (e, t, n) {
    let l = r.useRef(n);
    return (
        (l.current = n),
        r.useCallback(
            (n) => {
                if (!l.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    s = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    a = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    r = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    o = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    c = eg.A.getMessage(t, e),
                    d = eX.A.getChannel(t);
                if (null == c || null == d) return;
                let u = er.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (tu.A.can(ed.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tf.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tm.isMac)() ? r : a) && th.p5 && (n.preventDefault(), (0, th.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tg.A)(c, u) && (n.preventDefault(), (0, tf.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tp.A)(c, d) && (n.preventDefault(), (0, tf.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || td.A.canChatInGuild(e.guild_id),
                                    n = eY.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tA.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && tu.A.can(ed.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && ti.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, ta.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            ep._.dispatchKeyed(ed.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, ts.r)(d, c) && (n.preventDefault(), (0, tf.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, tn.p)(c) &&
                            (n.preventDefault(), (0, tl.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            tc.A.isSpeakingMessage(t, e) ? (0, to.pr)() : (0, to.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, ta.D1)(d, c)) n.preventDefault(), (0, tr.Tv)(d, c, "Message Shortcut");
                        else if (c.hasFlag(ed.pr7.HAS_THREAD)) {
                            let e = eX.A.getChannel(et.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, tr.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tf.cl)(d, c));
                        break;
                    case "escape":
                        e0.A.isEditing(d.id, c.id) ? j.A.endEditMessage(d.id) : ep._.dispatch(ed.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tx = n(754459),
    tE = n(375199),
    tS = n(824556),
    t_ = n(886737),
    tI = n(699352),
    tj = n(877413),
    ty = n.n(tj),
    tb = n(231483),
    tN = n(975571),
    tv = n(521981),
    tT = n(164664),
    tM = n(438729),
    tR = n(606049),
    tD = n(234620),
    tL = n(281867),
    tk = n(742715);
let tP = r.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: i } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: c()(tD.K1, { [tD.oE]: l }),
                    children: [
                        (0, a.jsx)("div", {
                            className: tD.Oz,
                            children: (0, a.jsx)(tb.l, { size: "xs", color: "currentColor", className: tD.F_ }),
                        }),
                        (0, a.jsx)("div", {
                            className: tD.jC,
                            children: (0, a.jsx)(eI.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, tv.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: c()(tD.ah, { [tD.oE]: l }),
                    children: (0, a.jsx)(tT.A, {
                        message: t,
                        onDeleteMessage: i,
                        children: (0, a.jsx)(eI.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: tD.C2,
                            children: eD.intl.format(eD.t["Nd3Gh+"], {
                                helpUrl: tN.A.getArticleURL(ed.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    tO = r.memo(function (e) {
        let { className: t, compact: n, message: l, children: i, content: s, onUpdate: o } = e,
            d = l.editedTimestamp?.toString(),
            u = r.useRef(!1),
            m = (0, h.bG)([eK.A], () => eK.A.getMessage(l.id), [l.id]),
            g = r.useCallback(() => {
                if (m?.isBlockedEdit) {
                    var e;
                    (e = l.id), v.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e });
                } else j.A.deleteMessage(l.channel_id, l.id, !0);
            }, [l, m]);
        return (
            r.useLayoutEffect(() => {
                u.current ? null != o && o() : (u.current = !0);
            }, [o, l.content, s, d, i]),
            (0, a.jsxs)("div", {
                id: (0, e9.CJ)(l),
                className: c()(t, tk.PT, {
                    [tL.BK]: !0,
                    [tL.nB]: "rtl" === ty()(l.content),
                    [tD.Dy]: m?.isBlockedEdit,
                    [tD.bv]: !m?.isBlockedEdit,
                }),
                children: [
                    i ?? (0, tM._A)(l, s),
                    m?.isBlockedEdit &&
                        null != l.timestamp &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " ",
                                (0, a.jsx)(tR.A, {
                                    timestamp: l.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, a.jsxs)("span", {
                                        className: tL.oh,
                                        children: ["(", eD.intl.string(eD.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(tP, {
                        notice: m?.errorMessage ?? eD.intl.string(eD.t.zQ69pv),
                        message: l,
                        compact: n,
                        onDismiss: g,
                    }),
                ],
            })
        );
    }, tM.sP);
var tG = n(649852),
    tU = n.n(tG),
    tw = n(311283),
    tF = n(473935),
    tH = n(173936),
    tB = n(290136),
    tV = n(666492),
    tK = n(606096),
    tz = n(997146),
    tW = n(366605),
    t$ = n(163328),
    tq = n(110384),
    tJ = n(22231),
    tZ = n(563119),
    tY = n(581925),
    tX = n(778492),
    tQ = n(241326),
    t0 = n(365199),
    t1 = n(417270),
    t2 = n(565645),
    t3 = n(812930),
    t4 = n(822123),
    t7 = n(7584),
    t8 = n(635222),
    t5 = n(969043),
    t9 = n(427209),
    t6 = n(743738),
    ne = n(649963),
    nt = n(815807),
    nn = n(429433),
    nl = n(269073),
    ni = n(85109),
    ns = n(71393),
    na = n(174459),
    nr = n(690521),
    no = n(403362),
    nc = n(628691),
    nd = n(101555),
    nu = n(894732);
let nh = r.forwardRef(function (e, t) {
    let {
        label: n,
        ariaLabel: l,
        tooltipText: i,
        icon: s,
        iconProps: r,
        onClick: o,
        onTooltipShow: d,
        onTooltipHide: u,
        disabled: h,
        dangerous: m,
        separator: g,
        buttonClassName: p,
        children: A,
        ...f
    } = e;
    return (0, a.jsx)(eC.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: i ?? n,
        "aria-label": n,
        onTooltipShow: d,
        onTooltipHide: u,
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(nd.$n, {
                    ref: t,
                    className: c()(nu.W1, p),
                    onClick: (e) => {
                        o(e);
                    },
                    "aria-label": l ?? n,
                    disabled: h,
                    dangerous: m,
                    ...f,
                    children: [
                        null != s ? (0, a.jsx)(s, { className: nu.Kk, color: "currentColor", ...r }) : null,
                        null != A ? (0, a.jsx)("div", { className: c()(nu.Kk, nu.IO), children: A }) : null,
                    ],
                }),
                g && (0, a.jsx)(nd.wv, {}),
            ],
        }),
    });
});
function nm(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", { className: c()(nu.me, t) });
}
function ng(e) {
    let { children: t, ...n } = e;
    return (0, a.jsx)(nd.Ay, { className: c()(n.className, nu.oO), children: t });
}
var np = n(607399),
    nA = n(460905);
function nf(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        o = r.useRef(null);
    return (0, a.jsx)(eS.Y, {
        targetElementRef: o,
        animation: eS.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: np.Fr ? "top" : "left",
        align: np.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, a.jsx)(nh, { ref: o, label: eD.intl.string(eD.t.lfIHs4), icon: nA.n, onClick: l }, "add-reaction"),
    });
}
var nC = n(720882),
    nx = n(307731),
    nE = n(519718);
let nS = [t7.Ay.getByName("100"), t7.Ay.getByName("laughing"), t7.Ay.getByName("sparkling_heart")].filter(no.Vq);
function n_(e) {
    e.stopPropagation();
}
function nI(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, nC.c)({
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
        ariaLabel: eD.intl.string(eD.t.Lv7LxN),
    });
}
let nj = r.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, t4.QZ)(t.guild_id).filter(
            (e) =>
                !nr.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: nx.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, t8.A)(l.concat(nS)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, nt.i6)(t.emoji, (0, nt.jq)(e))),
                i = null != l ? eD.intl.string(eD.t.wunKKA) : eD.intl.string(eD.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? eD.intl.formatToPlainString(eD.t.vjeruO, { emojiName: r })
                        : eD.intl.formatToPlainString(eD.t.L1JQwE, { emojiName: r });
            return (0, a.jsx)(
                nh,
                {
                    tooltipText: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(eI.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nE.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, a.jsx)(eI.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: nE.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: function () {
                        return nN({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: ne.qN.MESSAGE_HOVER_BAR,
                        });
                    },
                    children: (0, a.jsx)(t2.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nE.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function ny(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: s,
            canReport: o,
            canEdit: c,
            canPublish: d,
            canReact: u,
            canConfigureJoin: m,
            canReply: g,
            canStartThread: p,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: x,
            isExpanded: E,
            showMoreUtilities: S,
            showEmojiPicker: _,
            showMessageBookmarksActions: I,
            isMessageBookmark: y,
            setPopout: b,
            hasDeveloperMode: v,
            isFocused: T,
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
                d = (0, h.bG)([ns.A], () => ns.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, h.bG)([er.default], () => er.default.getId()),
                m = (0, ta.Id)(t),
                g = (0, ta.s5)(t),
                { firstMessage: p } = (0, h.bG)([t5.A], () => t5.A.getMessage(t.id), [t.id]),
                A = eY.jW.useSetting(),
                f = eY.Q_.useSetting(),
                C = (0, h.bG)([td.A], () => null == t.guild_id || td.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: x,
                    canAddNewReactions: E,
                    canSendMessages: S,
                } = (0, h.cf)(
                    [tu.A],
                    () => ({
                        canAddNewReactions: C && tu.A.can(ed.xBc.ADD_REACTIONS, t),
                        canManageMessages: tu.A.can(ed.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: tu.A.can(ed.xBc.SEND_MESSAGES, t),
                    }),
                    [t, C],
                ),
                _ = (0, ts.u)(t, n),
                I = (0, ta.n)(t, n),
                j = (0, ta.R)(n),
                y = (0, h.bG)([ti.A], () => null != t.guild_id && ti.A.isLurking(t.guild_id), [t]),
                b = c.id === u,
                v = (x || n.canDeleteOwnMessage(u)) && m && !ed.MRS.UNDELETABLE.has(n.type);
            n.type === ed.lAJ.AUTO_MODERATION_ACTION && (v = v && x),
                t.isModeratorReportChannel() && (v = v && n.id !== p?.id && !(0, e3.A)(n));
            let T = (0, nc.ul)(n),
                M = (0, tp.A)(n, t),
                R = !t.isSystemDM() && (0, tg.A)(n, u) && m && !g,
                { disableReactionCreates: D } = (0, tA.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: E,
                    isLurking: y,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                L =
                    t.type === ed.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(ed.GuildFeatures.NEWS) &&
                    S &&
                    (b || x) &&
                    (0, t3.A)(n),
                k = t.getGuildId(),
                P =
                    null != k &&
                    n.type === ed.lAJ.USER_JOIN &&
                    tu.A.canWithPartialContext(ed.xBc.MANAGE_GUILD, { guildId: k }),
                O = (0, tn.m)(n),
                G = (0, e1.kn)(n, t, "MessageHoverBar"),
                U = n.hasFlag(ed.pr7.IS_GUILD_OFFICIAL),
                w = (0, nl.jv)("message_utilities"),
                F = (0, h.bG)([ni.A], () => null != ni.A.getSavedMessage(t.id, n.id)),
                H = (0, tw.A)(a),
                B = (0, h.bG)([N.Ay], () => N.Ay.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: M,
                canEdit: R,
                canDelete: v,
                canReport: T,
                canReply: _,
                canStartThread: I,
                canViewThread: j,
                canForward: O,
                canManageOfficialMessages: G,
                isGuildOfficial: U,
                canCopy: th.p5,
                hasDeveloperMode: f,
                canReact: !D && A,
                canPublish: L,
                canConfigureJoin: P,
                isExpanded: H && !B && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: w,
                isMessageBookmark: F,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = r.useRef(null),
        R = r.useCallback(() => {
            S ||
                na.default.track(ed.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                b({ moreUtilities: !S });
        }, [S, b, n]),
        D = r.useCallback(() => {
            b({ emojiPicker: !_ });
        }, [_, b]),
        L = (0, ta.Id)(t),
        k = n.hasFlag(ed.pr7.CROSSPOSTED);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            E
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l && v
                              ? (0, a.jsx)(
                                    nh,
                                    {
                                        label: eD.intl.string(eD.t.zBoHlf),
                                        icon: tF.L,
                                        onClick: (e) => (0, tf.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, a.jsx)(
                                    nh,
                                    { label: eD.intl.string(eD.t.WqhZss), icon: tH.q, onClick: () => (0, tf.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, a.jsx)(
                                    nh,
                                    { label: eD.intl.string(eD.t.NpHUi1), icon: tB.c, onClick: () => (0, tf.vc)(t) },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, a.jsx)(
                                    nh,
                                    { label: eD.intl.string(eD.t.RpE9k7), icon: tV.Q, onClick: () => (0, tf.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          I
                              ? (0, a.jsx)(
                                    nh,
                                    {
                                        label: y ? eD.intl.string(eD.t.LHUP9D) : eD.intl.string(eD.t["9p3D9p"]),
                                        icon: y ? tK.c : tz.c,
                                        onClick: () => (y ? (0, tf.r7)(t, n) : (0, tf.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, a.jsx)(
                                    nh,
                                    {
                                        label: n.pinned ? eD.intl.string(eD.t["Bse+F/"]) : eD.intl.string(eD.t.CvQ18w),
                                        icon: tW.t,
                                        onClick: (e) => (0, tf.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, a.jsx)(
                                    nh,
                                    { label: eD.intl.string(eD.t.rBIGBL), icon: t$.y, onClick: () => (0, tf.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, a.jsx)(
                                    nh,
                                    {
                                        label: eD.intl.string(eD.t["5IEsGx"]),
                                        icon: tq.W,
                                        onClick: (e) => (0, tf.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            u
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          E
                              ? null
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(nj, { channel: t, message: n }), (0, a.jsx)(nm, {})],
                                }),
                          (0, a.jsx)(nf, {
                              togglePopout: D,
                              renderEmojiPicker: nv,
                              shouldShow: _,
                              isFocused: T,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            g && !c
                ? (0, a.jsx)(
                      nh,
                      { label: eD.intl.string(eD.t["5IEsGx"]), icon: tq.W, onClick: (e) => (0, tf.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, a.jsx)(
                      nh,
                      { label: eD.intl.string(eD.t.bt75uw), icon: tJ.R, onClick: () => (0, tf.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, a.jsx)(
                      nh,
                      { label: eD.intl.string(eD.t.I3ltXO), icon: t9.A, onClick: () => (0, tf.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, a.jsx)(
                      nh,
                      { label: eD.intl.string(eD.t.rBIGBL), icon: t$.y, onClick: () => (0, tf.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, a.jsx)(
                      nh,
                      { label: eD.intl.string(eD.t["39d0Wj"]), icon: t$.y, onClick: () => (0, tf.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, a.jsx)(
                      nh,
                      {
                          label: x ? eD.intl.string(eD.t["2km5Gf"]) : eD.intl.string(eD.t["lE/PG3"]),
                          icon: x ? tZ.$ : tY.L,
                          onClick: () => j.A.patchMessageGuildOfficial(t.id, n.id, !x),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, a.jsx)(
                      nh,
                      {
                          label: k ? eD.intl.string(eD.t["1kWJAr"]) : eD.intl.string(eD.t.MFGE51),
                          icon: tX.k,
                          onClick: () => (0, tf.Le)(t, n),
                          disabled: k,
                      },
                      "publish",
                  )
                : null,
            s && E
                ? (0, a.jsx)(
                      nh,
                      {
                          label: eD.intl.string(eD.t.oyYWHE),
                          icon: tQ.u,
                          onClick: (e) => (0, tf.RC)(t, n, e),
                          dangerous: !0,
                          separator: !E,
                      },
                      "delete",
                  )
                : null,
            E && s
                ? null
                : (0, a.jsx)(eS.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, a.jsx)(nI, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: i,
                              updatePosition: l,
                          });
                      },
                      shouldShow: S,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: eS.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, a.jsx)(
                              nh,
                              {
                                  ref: M,
                                  label: eD.intl.string(eD.t["UKOtz+"]),
                                  icon: t0.j,
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
function nb(e) {
    let { channel: t, message: n } = e,
        l = (0, h.bG)([eK.A], () => null != eK.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, t6.Bl)(n.interactionData));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !l &&
                i &&
                (0, a.jsx)(
                    nh,
                    { label: eD.intl.string(eD.t["5911Lb"]), icon: t1.m, onClick: () => (0, tf.Io)(t, n) },
                    "retry",
                ),
            (0, a.jsx)(
                nh,
                { label: eD.intl.string(eD.t.oyYWHE), icon: tQ.u, onClick: (e) => (0, tf.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function nN(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, nt.jq)(n);
    "add" === t
        ? (0, ne.BB)(l.id, i.id, r, s, { burst: a })
        : (0, ne.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nv(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? ed.liQ.GUILD_CHANNEL : ed.liQ.DM_CHANNEL,
                section: (0, nt.sn)(e),
                object: ed.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, a.jsx)(nn.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            nN({ type: "add", emoji: i, channel: e, message: t, location: ne.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tU()(n, 150)() : n());
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nT = r.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, h.bG)([e0.A], () => e0.A.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ed.cmJ.SEND_FAILED ? (0, a.jsx)(nb, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== ed.cmJ.SEND_FAILED ? (0, a.jsx)(ny, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, a.jsx)("div", {
              className: c()(e.className, { [nE.kL]: !0, [nE.gN]: l, [nE.nK]: i }),
              onClick: n_,
              onContextMenu: n_,
              role: "group",
              "aria-label": eD.intl.string(eD.t.Lv7LxN),
              children: (0, a.jsxs)(ng, { className: e.innerClassName, children: [r, o] }),
          });
});
var nM = n(364932),
    nR = n(639288),
    nD = n(10364);
let nL = r.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: i,
                isGroupStart: s,
                usernameProfile: o,
                avatarProfile: c,
                setPopout: d,
                author: u,
                repliedMessage: h,
                roleIcon: m,
            } = e,
            g = (0, te.r4)(t.author.id, n.id),
            p = (0, te.m)(t, n, o, d),
            A = (0, te.Jo)(c, d),
            f = r.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, a.jsx)(nR.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== ed.lAJ.REPLY,
            renderPopout: nD.A,
            showAvatarPopout: c,
            showUsernamePopout: o,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    nk = r.memo(tR.A);
function nP(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: i,
            author: s,
            repliedMessage: r,
            roleIcon: o,
        } = e,
        { message: c, compact: d, channel: u, groupId: h } = t,
        { usernameProfile: m, avatarProfile: g } = l;
    if ((0, e3.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, a.jsx)(nL, {
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
              repliedMessage: r,
              roleIcon: o,
          })
        : (0, a.jsx)(nk, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, e9.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nO = n(141268),
    nG = n(155718),
    nU = n(168186),
    nw = n(994500),
    nF = n(217424),
    nH = n(807081),
    nB = n(387408),
    nV = n(942075),
    nK = n(808829),
    nz = n(552691),
    nW = n(861464),
    n$ = n(308334);
let nq = r.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: o,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: u,
        } = e,
        m = n.state === eJ.a.LOADED ? n.message : void 0,
        g = (0, e4.X4)(m),
        p = (0, eW.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, e$.U)(),
        f = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, nB.A)(m);
            if (e.type === ed.lAJ.USER_JOIN)
                return (0, nH.$)(
                    eD.intl.formatToParts(nW.A.getSystemMessageUserJoin(e.id), {
                        username: null != g ? g.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === ed.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nH.$)(
                    (0, nV.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === ed.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nH.$)((0, nK.P)({ application: e?.application, username: g?.nick }));
            if (e.type === ed.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nH.$)((0, nz.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === ed.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nH.$)((0, nz.uk)({ application: e?.application, username: g?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0, postProcessor: A ? t_.A : void 0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0, allowGameMentions: !0 }
                        : { ...t, formatInline: !0, allowHeading: p, allowList: p, allowGameMentions: !0 };
                return (0, tv.Ay)(e, n).content;
            }
            return null;
        }, [m, g, l, p, A]),
        { isReplyAuthorBlocked: C, isReplyAuthorIgnored: x } = (0, h.cf)(
            [nw.A],
            () => ({
                isReplyAuthorBlocked: null != m && nw.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && nw.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        E = (0, te.r4)(m?.author.id, l.id),
        S = (0, te.Ck)(t, n, l),
        _ = (0, te.H9)(m, l, s, c),
        I = (0, te.Ge)(o, c),
        j = r.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        y = (0, e4.X4)(t);
    return (0, a.jsx)(n$.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: y,
        referencedMessage: n,
        content: f,
        compact: i,
        isReplyAuthorBlocked: C,
        isReplyAuthorIgnored: x,
        showAvatarPopout: o,
        showUsernamePopout: s,
        renderPopout: nD.A,
        onClickAvatar: I,
        onClickUsername: _,
        onClickReply: S,
        onContextMenu: E,
        onPopoutRequestClose: j,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nJ(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: r,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0,
    } = e;
    return (
        null != o &&
        (0, a.jsx)(nq, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: i,
            referencedUsernameProfile: s,
            referencedAvatarProfile: r,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
let nZ = r.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: o,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: u,
        } = e,
        { isInteractionUserBlocked: m, isInteractionUserIgnored: g } = (0, h.cf)(
            [nw.A],
            () => ({
                isInteractionUserBlocked: nw.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nw.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(t?.messageReference)),
        A = (0, te.r4)(t.interaction?.user.id, n.id),
        f = (0, te.T0)(t.interaction, n, i, u),
        C = (0, te.Yq)(s, u),
        x = (0, nU.Am)(t),
        E = x?.type === nG.G4.APPLICATION_COMMAND ? x.target_user?.id : void 0,
        S = (0, te.r4)(E, n.id),
        _ = (0, te.I)(E, n, c, u),
        I = (0, te.Ge)(d, u),
        j = (0, te.U_)(o, u),
        y = r.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        b = r.useCallback(
            () =>
                nJ({
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
    return (0, a.jsx)(nF.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: m,
        isInteractionUserIgnored: g,
        showAvatarPopout: s,
        showUsernamePopout: i,
        showDataPopout: o,
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
        renderTargetMessage: b,
    });
});
var nY = n(352043),
    nX = n(381941);
function nQ(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eB()(n.type === ed.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...r } = (0, u.rm)(e.id ?? ""),
        o = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(l)),
        { popouts: d, setPopout: m } = (0, tx.A)(n.id, nX.Fd),
        g = (0, e4.Ay)(n),
        p = (0, e9.fF)(n),
        A = (0, e9.ZD)(n);
    if (null != o)
        switch (o.state) {
            case eJ.a.LOADED:
                return (0, a.jsx)(n0, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case eJ.a.NOT_LOADED:
            case eJ.a.DELETED:
        }
    return (0, a.jsx)(e5.A, {
        ...r,
        id: t,
        compact: i,
        className: c()(s, { [nM.iU]: !0, [nM.HJ]: !i, [nM.H4]: !0, [nM._A]: !0 }),
        childrenHeader: nP({ messageProps: e, setPopout: m, messagePopouts: d, replyReference: l, author: g }),
        childrenSystemMessage: (0, nY.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function n0(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: o = !1,
            className: d,
            groupId: m,
            viewingChannelId: g,
        } = e,
        p = n.type === ed.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, u.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: x, handleBlur: E } = (0, te.G8)(A),
        { popouts: S, selected: _, setPopout: I } = (0, tx.A)(n.id, nX.Fd),
        j = eY.hD.useSetting(),
        y = eY.rs.useSetting(),
        b = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(p)),
        v = (0, eW.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: T,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, te.yp)({ groupId: m, message: n, defaultValue: _ }),
        D = (0, h.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
        L = _ || (D && C),
        k = L || R,
        P = (0, h.bG)([eQ.A], () => eQ.A.isDeveloper),
        {
            content: O,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tE.A)(n, {
            hideSimpleEmbedContent: j && y,
            formatInline: !1,
            allowList: v,
            allowHeading: v,
            allowLinks: !0,
            allowDevLinks: P,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        w = tC(l, i, D),
        F = (0, e4.Ay)(n),
        H = (0, e9.fF)(n, m),
        B = (0, e9.ZD)(n),
        V = (0, a.jsx)(tt.x, { value: k, children: (0, nO.A)(e, O, !1) }),
        K = r.useCallback(() => (0, eZ.uh)(s, i, l), [s, i, l]),
        z = (0, ez.$7)({ guildId: s, roleId: F.iconRoleId });
    return (0, a.jsxs)("div", {
        className: nM.m5,
        children: [
            (0, a.jsx)(ex.D, {
                className: nM.lA,
                onClick: K,
                "aria-label": eD.intl.string(eD.t.k5WiPf),
                children: eD.intl.string(eD.t.k5WiPf),
            }),
            (0, a.jsx)(e5.A, {
                ...f,
                id: t,
                compact: o,
                className: c()(d, {
                    [nM.iU]: !0,
                    [nM.HJ]: !o,
                    [nM.mK]: n.mentioned,
                    [nM.M1]: (0, eo.ec)(n),
                    [nM.H4]: (0, e3.A)(n),
                    [nM._A]: n.id === m || n.type === ed.lAJ.REPLY,
                    [nM.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: x,
                onBlur: E,
                childrenRepliedMessage:
                    n.type === ed.lAJ.REPLY &&
                    nJ({
                        ...e,
                        setPopout: I,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: b,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nP({
                    messageProps: e,
                    setPopout: I,
                    messagePopouts: S,
                    replyReference: p,
                    author: F,
                    repliedMessage: b,
                    roleIcon: z,
                }),
                childrenAccessories: (0, tI.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: G,
                    hasBailedAst: U,
                    isInteracting: k,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nY.A)(e),
                childrenMessageContent: V,
                onMouseMove: T,
                onMouseLeave: M,
                "aria-labelledby": H,
                "aria-describedby": B,
                hasThread: !1,
                author: F,
            }),
        ],
    });
}
let n1 = r.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: o,
            channel: { id: d },
            compact: m = !1,
            className: p,
            flashKey: A,
            groupId: f,
            renderContentOnly: C,
            hideInviteEmbedBanner: x,
            hideActivityInvite: E,
        } = e;
    eB()(i.type !== ed.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let S = ed.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: _, ...I } = (0, u.rm)(e.id ?? ""),
        j = eY.hD.useSetting(),
        y = eY.rs.useSetting(),
        b = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(S)),
        { popouts: v, selected: T, setPopout: M } = (0, tx.A)(i.id, nX.Fd),
        R = (0, te.VL)(i, o, M),
        D = (0, te.ri)(i, o),
        {
            handleMouseEnter: L,
            handleMouseLeave: k,
            hasHovered: P,
            isHovered: O,
        } = (0, te.yp)({ groupId: f, message: i, defaultValue: T }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, te.G8)(_),
        H = r.useCallback(
            (e) => {
                w(e), L(e);
            },
            [w, L],
        ),
        B = r.useCallback(
            (e) => {
                F(e), k();
            },
            [F, k],
        ),
        V = (0, h.bG)([e0.A], () => e0.A.isEditing(d, s), [d, s]),
        K = (0, h.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
        z = T || V || (K && G),
        W = z || O,
        $ = (0, h.bG)(
            [eX.A],
            () => i.hasFlag(ed.pr7.HAS_THREAD) && eX.A.getChannel(et.default.castMessageIdAsChannelId(i.id)),
        ),
        q = i.isFirstMessageInForumPost(o),
        J = (0, eW.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        Z = (0, h.bG)([eQ.A], () => eQ.A.isDeveloper),
        Y = (0, e$.U)(),
        {
            content: X,
            hasSpoilerEmbeds: Q,
            hasBailedAst: ee,
        } = (0, tE.A)(i, {
            hideSimpleEmbedContent: j && y,
            formatInline: !1,
            allowList: q || J,
            allowHeading: q || J,
            allowLinks: !0,
            allowDevLinks: Z,
            previewLinkTarget: !0,
            postProcessor: Y ? t_.A : void 0,
        }),
        en = tC(s, d, K),
        el = (0, e4.Ay)(i),
        ei = (0, h.bG)([eq.A], () => eq.A.getPendingReply(d)),
        ea =
            ((t = r.useRef(A)),
            r.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        er = (0, ez.$7)({ guildId: o.guild_id, roleId: el.iconRoleId }),
        ec = (0, eV.A)(d, s)?.color ?? null,
        eu = (0, e9.fF)(i, f),
        eh = (0, e9.ZD)(i),
        em = (0, h.bG)([eK.A], () => eK.A.getMessage(s), [s]),
        eg = (0, e1.bW)(o.guild_id, "ChatMessage"),
        ep = (0, e6.o)(),
        eA = (0, tS.A)({ message: i, channel: o, officialMessagesEnabled: eg }),
        ef = r.useRef(window),
        eC = null != em;
    (n =
        i.type === ed.lAJ.CUSTOM_GIFT
            ? ""
            : !V && eC
              ? (function (e, t) {
                    let { message: n, compact: l } = e;
                    return (0, a.jsx)(tO, { message: n, content: t, compact: l ?? !1 });
                })(e, X)
              : (0, nO.A)(e, X, V)),
        (n = (0, a.jsx)(tt.x, { value: W, children: n }));
    let ex = i.id === f,
        eE = (0, a.jsx)(g.vN, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
                id: l,
                className: nM.Nt,
                "aria-setsize": -1,
                style: null != ec ? { backgroundColor: ec } : void 0,
                children: (0, a.jsx)(e5.A, {
                    ...I,
                    "aria-setsize": -1,
                    "aria-roledescription": eD.intl.string(eD.t.BAB0yK),
                    "aria-labelledby": eu,
                    "aria-describedby": eh,
                    onFocus: H,
                    onBlur: B,
                    onContextMenu: R,
                    onKeyDown: en,
                    onClick: D,
                    compact: m,
                    contentOnly: C,
                    className: c()(p, {
                        [nM.iU]: !0,
                        [nM.HJ]: !m,
                        [nM.mK]: i.mentioned,
                        [nM.M1]: (0, eo.ec)(i),
                        [nM.SH]: i.type === ed.lAJ.NITRO_NOTIFICATION,
                        [nM.Sg]: i.hasFlag(ed.pr7.IS_GUILD_OFFICIAL) && eg && !ep,
                        [nM.H4]: (0, e3.A)(i),
                        [nM._A]: !C && (ex || i.type === ed.lAJ.REPLY),
                        [nM.wH]: z,
                        [nM.$n]: ei?.message.id === i.id,
                        [nM.$w]: i.isCommandType() && i.state === ed.cmJ.SENDING,
                        [nM.DX]: eC,
                    }),
                    zalgo: !V,
                    childrenRepliedMessage:
                        C || i.type !== ed.lAJ.REPLY
                            ? void 0
                            : nJ({
                                  ...e,
                                  setPopout: M,
                                  referencedUsernameProfile: v.referencedUsernameProfile,
                                  referencedAvatarProfile: v.referencedAvatarProfile,
                                  replyReference: S,
                                  replyMessage: b,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, a.jsx)(nZ, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, M, v),
                    childrenHeader: C
                        ? void 0
                        : nP({
                              messageProps: e,
                              setPopout: M,
                              messagePopouts: v,
                              replyReference: S,
                              author: el,
                              repliedMessage: b,
                              roleIcon: er,
                          }),
                    childrenAccessories: (0, tI.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: Q,
                        hasBailedAst: ee,
                        handleContextMenu: R,
                        isInteracting: W,
                        isAutomodBlockedMessage: eC,
                        hideInviteEmbedBanner: x,
                        hideActivityInvite: E,
                    }),
                    childrenButtons:
                        P || U
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: l, moreUtilities: i },
                                          isFocused: s,
                                          buttonProps: { message: r, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = r.state === ed.cmJ.SENDING,
                                      m = r.id === c,
                                      g = (0, es.Lt)(r.flags, ed.pr7.EPHEMERAL),
                                      p = r.state === ed.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, a.jsx)(nT, {
                                            className: nM.Uo,
                                            innerClassName: nM.Mc,
                                            isHeader: !d && m && !(0, e3.A)(r),
                                            isReply: !d && r.type === ed.lAJ.REPLY && null != r.messageReference,
                                            channel: o,
                                            message: r,
                                            messageWindow: u,
                                            setPopout: t,
                                            showEmojiPicker: n,
                                            showEmojiBurstPicker: l,
                                            showMoreUtilities: i,
                                            isFocused: s,
                                        });
                              })({
                                  buttonProps: e,
                                  setPopout: M,
                                  messagePopouts: v,
                                  isFocused: O || G,
                                  messageWindow: ef.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nY.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: L,
                    onMouseLeave: k,
                    hasThread: !C && i.hasFlag(ed.pr7.HAS_THREAD) && null != $,
                    isSystemMessage: (0, e3.A)(i),
                    hasReply: i.type === ed.lAJ.REPLY,
                    messageRef: (e) => {
                        (eA.current = e), (ef.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: el,
                }),
            }),
        });
    return null != ea
        ? (0, a.jsx)(
              e8,
              { flashKey: ea, className: c()({ [nM.bB]: !0, [nM._A]: !m && i.id === f }), children: eE },
              `bg-flash-${l}`,
          )
        : eE;
});
n(801541);
var n2 = n(889137),
    n3 = n(952270),
    n4 = n(428678),
    n7 = n(353182),
    n8 = n(922529),
    n5 = n(888675),
    n9 = n(466959);
function n6(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: r = !0 } = e,
        o = (0, n2.YW)({ collapsedReason: s })
            .with({ collapsedReason: eD.t["VFWjc+"] }, () =>
                (0, a.jsx)(n3.G, { size: "md", color: "currentColor", className: n9.Q6 }),
            )
            .with({ collapsedReason: eD.t["+FcYM/"] }, () =>
                (0, a.jsx)(n4.K, { size: "md", color: "currentColor", className: n9.Q6 }),
            )
            .with({ collapsedReason: eD.t.rHRovo }, () =>
                (0, a.jsx)(n7._, { size: "md", color: "currentColor", className: n9.TG }),
            )
            .otherwise(() => (0, a.jsx)(eT.P, { size: "md", color: "currentColor", className: n9.Q6 }));
    return (0, a.jsx)(e5.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, a.jsx)(n5.A, {
            compact: i,
            className: n9.L9,
            iconNode: o,
            children: (0, a.jsxs)("div", {
                className: r ? n9.Fo : n9.GU,
                children: [
                    eD.intl.format(s, { count: l }),
                    r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, a.jsx)(ex.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: n9.rB,
                                    children: t ? eD.intl.string(eD.t.fgq1gs) : eD.intl.string(eD.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let le = r.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, collapsedReason: s, canUncollapse: o = !0 } = e,
        { hasJumpTarget: d = !1 } = t,
        [u, h] = r.useState(d && o),
        m = r.useCallback(() => {
            o && h((e) => !e);
        }, [o]);
    r.useEffect(() => {
        d && o && h(!0);
    }, [d, o]);
    let g = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, a.jsxs)("div", {
        className: c()({ [nM._A]: !0, [n9.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === ed.TZK.DIVIDER)
                ? (0, a.jsx)(n8.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, a.jsx)(
                n6,
                { count: g, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: o },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === ed.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, a.jsx)(n8.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === ed.TZK.MESSAGE || e.type === ed.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === ed.TZK.THREAD_STARTER_MESSAGE ? nQ : n1;
                          return (0, a.jsx)(
                              t,
                              {
                                  id: (0, e2.j)(n.id, e.content.id),
                                  className: n9.__invalid_blocked,
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
var lt = n(114212),
    ln = n(74435);
function ll(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, a.jsx)("div", {
        className: c()(ln.dU, t && ln.yZ),
        children: (0, a.jsx)("div", { className: ln.JN, children: n }),
    });
}
let li = r.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, a.jsx)(ll, { isCollapsed: n, children: l });
});
var ls = n(469395);
function la(e) {
    return "group" in e;
}
let lr = (0, a.jsxs)(a.Fragment, {
    children: [
        (0, a.jsx)(lt.Ay, { messages: 4, groupSpacing: 16, className: ls.Xb }),
        (0, a.jsx)(lt.Ay, { messages: 2, groupSpacing: 16, className: ls.Xb }),
        (0, a.jsx)(lt.Ay, { messages: 3, groupSpacing: 16, className: ls.Xb }),
    ],
});
function lo(e) {
    let { channel: t, conversation: n, focusStream: l, isCollapsed: i } = e,
        s = (0, h.bG)([G.A], () => G.A.isConversationFetchPending(n.id, !0), [n]);
    return (0, a.jsxs)("div", {
        className: ls.XT,
        children: [
            (0, a.jsx)("ol", {
                className: ls.cl,
                children: l.map((e) => {
                    if (la(e)) {
                        var n;
                        return (0, a.jsx)(
                            li,
                            {
                                isOnTopic: e.isOnTopic,
                                isCollapsed: i,
                                children: (0, a.jsx)(le, {
                                    messages: e.group,
                                    channel: t,
                                    unreadId: "",
                                    collapsedReason:
                                        (n = e.group.type) === ed.TZK.MESSAGE_GROUP_BLOCKED
                                            ? eD.t["+FcYM/"]
                                            : n === ed.TZK.MESSAGE_GROUP_IGNORED
                                              ? eD.t["VFWjc+"]
                                              : n === ed.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                ? eD.t.rHRovo
                                                : eD.t.xfkfTK,
                                    canUncollapse: e.group.type !== ed.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                }),
                            },
                            e.group.key,
                        );
                    }
                    return (0, a.jsx)(
                        li,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: i,
                            children: (0, a.jsx)(n1, {
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
            s && lr,
        ],
    });
}
n(30146);
var lc = n(435558),
    ld = n.n(lc);
let lu = { tension: 240, friction: 30 },
    lh = { tension: 320, friction: 28 },
    lm = { tension: 280, friction: 24, clamp: !0 },
    lg = { tension: 170, friction: 22, clamp: !0 },
    lp = { tension: 220, friction: 28, clamp: !0 },
    lA = 6,
    lf = -3,
    lC = 9;
var lx = n(721563);
async function lE(e) {
    let t = e.current,
        n = t?.getScrollerNode();
    null == t ||
        null == n ||
        n.scrollTop <= 5 ||
        (await new Promise((e) => {
            t.scrollTo({ to: 0, animate: !0, callback: () => e() });
        }));
}
function lS(e) {
    let { style: t, channel: n, conversation: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: o } = (0, F.D7)(),
        { dismissReason: c } = z(),
        u = o ? lm : "navigation" === c ? lp : lg,
        m = (0, q.r)($.A.colors.BORDER_SUBTLE).spring(),
        g = (0, q.r)($.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: p,
            shadowAlpha: A,
            contentPadding: f,
        } = (0, J.z)(
            { borderTopRadius: o ? 12 : 8, shadowAlpha: 0.4 * !!o, contentPadding: 4 * !!o, config: u },
            "respect-motion-settings",
        ),
        { borderColor: C } = (0, J.z)({ borderColor: o ? m : g, config: u }, "respect-motion-settings"),
        [x, E] = r.useState(!1),
        [S, _] = r.useState(!0),
        I = r.useCallback(() => {
            let e = i.current;
            null != e && (E(e.getDistanceFromTop() > 5), _(e.getDistanceFromBottom() > 5));
        }, [i]),
        j = (0, h.bG)([eg.A], () => eg.A.getMessages(n.id), [n.id]),
        y = (0, h.bG)([G.A], () => {
            if (l?.id == null) return null;
            let e = G.A.getConversationMetadata(n.id, l.id);
            return e?.fullyHydrated === !0 ? e.hydratedMessages : null;
        }, [n.id, l]),
        b = r.useMemo(
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
                                          0 > et.default.compare(t.id, e.startMessageId) ||
                                              et.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return i.sort((e, t) => et.default.compare(e.record.id, t.record.id)), i;
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, en.A)(e, a, t.record)) && (r = t.record.id);
                              let n = em(e, t.record, (0, el.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && la(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: ed.TZK.MESSAGE, content: t.record, groupId: r };
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
        : (0, a.jsxs)(d.animated.div, {
              className: lx.Nr,
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
                  (0, a.jsx)(d.animated.div, { className: lx.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, a.jsx)(d.animated.div, {
                      style: { paddingTop: f, paddingLeft: f, paddingRight: f },
                      children: (0, a.jsx)(eF, { channel: n, conversation: l, requestDismiss: s }),
                  }),
                  (0, a.jsxs)("div", {
                      className: lx.gk,
                      children: [
                          (0, a.jsx)(Z.zC, {
                              className: lx.XG,
                              ref: i,
                              onScroll: I,
                              children: (0, a.jsxs)(d.animated.div, {
                                  style: { paddingLeft: f, paddingRight: f },
                                  children: [
                                      (0, a.jsx)(lo, {
                                          channel: n,
                                          conversation: l,
                                          focusStream: b,
                                          isCollapsed: o || "navigation" === c,
                                      }),
                                      (0, a.jsx)("div", { className: lx.lB }),
                                  ],
                              }),
                          }),
                          x && (0, a.jsx)("div", { className: lx.iX, "aria-hidden": !0 }),
                          S && (0, a.jsx)("div", { className: lx.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function l_(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = z(),
        { bannerMeasurementRef: i } = V(),
        { isFocused: s, setIsFocused: o } = (0, F.D7)(),
        d = r.useRef(!1),
        u = r.useRef(null),
        m = (0, h.bG)([G.A], () => G.A.getSelectedConversationId(t.id), [t.id]),
        g = r.useCallback(
            async (e) => {
                if (null != m && !d.current) {
                    if (
                        ((d.current = !0),
                        w.X.trackFocusModeDismissed({ channelId: t.id, conversationId: m, dismissReason: e }),
                        "return" === e)
                    ) {
                        let e = G.A.getConversationMetadata(t.id, m)?.conversation;
                        if (null != e)
                            try {
                                await j.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await lE(u);
                    }
                    l(e), o(!1), (d.current = !1);
                }
            },
            [t.id, o, l, u, m],
        );
    !(function (e, t) {
        let { isFocused: n } = (0, F.D7)(),
            l = (0, h.cf)([eg.A], () => {
                let t = eg.A.getMessages(e.id);
                return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
            }, [e.id]),
            i = r.useRef(l);
        r.useEffect(() => {
            if (!n) return;
            let t = eg.A.getMessages(e.id);
            i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
        }, [n, e.id]),
            r.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: s } = i.current;
                (l.jumpTargetId !== e || l.jumpSequenceId !== s) && t("navigation");
            }, [n, l, t]);
    })(t, g),
        r.useEffect(() => {
            if (s)
                return (
                    ep._.subscribe(ed.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        ep._.unsubscribe(ed.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                g("return");
            }
        }, [s, g]);
    let p = r.useCallback(() => {
            g("return");
        }, [g]),
        A = r.useMemo(
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
                config: () => (e) => ("leave" !== e ? lm : "navigation" === n ? lp : lg),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        f = (0, Y.p)(s ? m : null, A, "respect-motion-settings");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: c()(lx.tB, !s && lx.Vq, {
                    [lx.Em]: !s && "navigation" === n,
                    [lx.Zp]: !s && "navigation" !== n,
                }),
                onClick: p,
                "aria-hidden": !0,
            }),
            f((e, n) => {
                if (null == n) return null;
                let l = G.A.getConversationMetadata(t.id, n)?.conversation ?? null;
                return (0, a.jsx)(lS, { style: e, channel: t, conversation: l, scrollerRef: u, requestDismiss: g });
            }),
        ],
    });
}
function lI(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, F.D7)(),
        { dismissReason: l } = z();
    return n || null !== l ? (0, a.jsx)(l_, { channel: t }) : null;
}
var lj = n(708988),
    ly = n(872351),
    lb = n(15301);
let lN = (0, d.animated)("button"),
    lv = (0, d.animated)(eI.E);
function lT(e) {
    e.preventDefault();
}
let lM = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: o,
            layout: u,
            isExpanded: h,
            anchorId: m,
            hoveredConversationId: g,
            selectedConversationId: p,
            isFocusOverlayOpen: A,
            onHoverConversationChange: f,
            onJump: C,
        } = e,
        x = p === o.id,
        E = g === o.id,
        S = null != g && !E,
        _ = null == m ? "up" : et.default.compare(o.startMessageId, m) > 0 ? "down" : "up",
        I = o.title,
        j = Math.min(16, Math.max(4, Math.round(0.6 * I.length))),
        y = (0, J.z)({ y: u.y, opacity: +!u.hidden, config: lu }, "respect-motion-settings"),
        b = (0, J.z)(
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
                lineOpacity: +(!h && !u.hidden),
                config: lh,
            },
            "respect-motion-settings",
        ),
        N = r.useCallback(() => f(o.id), [f, o.id]),
        v = r.useCallback(() => f(null), [f]),
        T = r.useCallback(() => C(o.id), [C, o.id]),
        M = u.hidden || u.edge;
    return (0, a.jsxs)(lN, {
        "aria-current": x ? "true" : void 0,
        "aria-hidden": M ? "true" : void 0,
        className: c()(lb.ng, { [lb._D]: x, [lb.DJ]: E, [lb.KZ]: S }),
        style: {
            transform: y.y.to((e) => `translateY(${e}px)`),
            opacity: y.opacity,
            pointerEvents: M ? "none" : void 0,
        },
        onMouseDown: lT,
        onMouseEnter: N,
        onMouseLeave: v,
        onClick: T,
        children: [
            (0, a.jsx)(d.animated.span, {
                className: c()(lb.Og, A && lb.v7),
                style: {
                    opacity: b.pillOpacity,
                    transform: (0, d.to)(
                        [b.pillX, b.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, a.jsx)(eI.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: lb.B6,
                    children: I,
                }),
            }),
            (0, a.jsx)(lv, {
                tag: "span",
                variant: x ? "text-md/semibold" : "text-md/normal",
                color: x ? "text-strong" : E ? "text-default" : S ? "text-muted" : "text-subtle",
                className: lb.QV,
                lineClamp: 1,
                style: {
                    opacity: b.textOpacity,
                    transform: (0, d.to)([b.textScale, b.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: I,
            }),
            (0, a.jsx)("span", {
                className: lb.iF,
                children: (0, a.jsx)(d.animated.span, {
                    className: lb.iN,
                    style: {
                        width: b.lineWidth,
                        opacity: b.lineOpacity,
                        transform: b.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, a.jsx)(d.animated.span, {
                className: lb.$N,
                "aria-hidden": "true",
                style: {
                    opacity: b.arrowOpacity,
                    transform: (0, d.to)([b.arrowX, b.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === _
                        ? (0, a.jsx)(lj.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, a.jsx)(ly.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function lR(e) {
    let {
            items: t,
            isExpanded: n,
            anchorId: l,
            hoveredConversationId: i,
            selectedConversationId: s,
            showTopFade: o,
            showBottomFade: d,
            isFocusOverlayOpen: u,
            onHoverConversationChange: h,
            onJump: m,
        } = e,
        g = r.useMemo(() => (n && null != s ? (t.find((e) => e.conversation.id === s)?.slot ?? -1) : -1), [n, t, s]),
        p = r.useMemo(() => {
            let e = new Map();
            for (let t = lf; t <= lC; t++)
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
                    })({ slot: t, jumpedSlot: g, isExpanded: n, showTopFade: o, showBottomFade: d }),
                );
            return e;
        }, [g, n, o, d]);
    return (0, a.jsx)("div", {
        className: c()(lb._R, n && lb.h1),
        role: "list",
        "aria-label": eD.intl.string(eR.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: r } = e,
                o = p.get(r);
            return null == o
                ? null
                : (0, a.jsx)(
                      lM,
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
var lD = n(778712),
    lL = n(97808),
    lk = n(854627),
    lP = n(562153);
n(575279);
var lO = n(109844);
let lG = [
    { name: "40%", l1: "75%", l2: "50%" },
    { name: "55%", l1: "90%", l2: null },
    { name: "30%", l1: "60%", l2: "80%" },
    { name: "65%", l1: "45%", l2: "70%" },
];
function lU(e) {
    let { channel: t, message: n } = e,
        l = lP.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lk.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: lD._3.SIZE_32,
        }),
        o = r.useMemo(() => (0, tv.Ay)(n).content, [n]),
        c = eY.PZ.useSetting(),
        d = r.useMemo(() => (0, ee.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, a.jsxs)("div", {
        className: lO.QS,
        children: [
            (0, a.jsx)(lL.eu, {
                className: lO.MM,
                src: i,
                avatarDecoration: s,
                size: lD._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, a.jsxs)("div", {
                className: lO.gp,
                children: [
                    (0, a.jsxs)("div", {
                        className: lO.yl,
                        children: [
                            (0, a.jsx)(eI.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, a.jsx)(eI.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, a.jsx)(eI.E, { variant: "text-sm/normal", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function lw() {
    return (0, a.jsx)("div", {
        className: lO.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lG[t % lG.length];
            return (0, a.jsxs)(
                "div",
                {
                    className: lO.uA,
                    children: [
                        (0, a.jsx)("div", { className: lO.h }),
                        (0, a.jsxs)("div", {
                            className: lO.jE,
                            children: [
                                (0, a.jsx)("div", { className: lO.zw, style: { width: n.name } }),
                                (0, a.jsx)("div", { className: lO.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, a.jsx)("div", { className: lO.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lF(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, F.D7)(),
        i = (0, h.bG)([G.A], () => G.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = r.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, a.jsx)("div", {
        className: c()(lO.Zt, l && lO.CU),
        children: (0, a.jsx)("div", {
            className: lO.eU,
            children:
                null == s
                    ? (0, a.jsx)(lw, {})
                    : s.length > 0
                      ? (0, a.jsx)("div", {
                            className: lO.z0,
                            children: s.map((e) => (0, a.jsx)(lU, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lH = n(876938);
function lB(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, h.bG)([G.A], () => G.A.getSelectedConversation(t.id)?.id ?? null, [t.id]),
        { selectAndFocusConversation: s } = V(),
        { isFocused: o } = (0, F.D7)(),
        { dismissReason: d } = z(),
        u = (function (e) {
            let [t, n] = r.useState(null);
            return (
                r.useEffect(() => {
                    function t(e) {
                        return n(e?.id ?? null);
                    }
                    return e.addAutomaticAnchorCallback(t, !0), () => e.removeAutomaticAnchorCallback(t);
                }, [e]),
                t
            );
        })(n),
        m = r.useMemo(
            () =>
                0 === l.length
                    ? null
                    : (l[
                          (function (e, t) {
                              if (0 === e.length) return 0;
                              if (null == t) return e.length - 1;
                              let n = e.findLastIndex((e) => 0 >= et.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, u)
                      ]?.id ?? null),
            [u, l],
        ),
        g = r.useMemo(
            () =>
                0 === l.length
                    ? null
                    : null != i && l.some((e) => e.id === i)
                      ? i
                      : null != m && l.some((e) => e.id === m)
                        ? m
                        : l[l.length - 1].id,
            [m, l, i],
        ),
        { clampLow: p, clampHigh: A } = (function (e) {
            if (0 === e) return { clampLow: 0, clampHigh: 0 };
            let t = Math.min(2, e - 1),
                n = Math.max(t, e - 1 - 2);
            return { clampLow: t, clampHigh: n };
        })(l.length),
        f = r.useMemo(
            () =>
                (function (e, t, n, l) {
                    if (0 === e.length) return 0;
                    let i = null != t ? e.findIndex((e) => e.id === t) : -1,
                        s = i >= 0 ? i : e.length - 1;
                    return (0, lc.clamp)(s, n, l);
                })(l, g, p, A),
            [l, g, p, A],
        ),
        [C, x] = r.useState(!1),
        E = r.useCallback(() => x(!1), []),
        S = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lA; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, f),
            [l, f],
        ),
        _ = r.useMemo(() => S.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [S]),
        { showTopFade: I, showBottomFade: j } = r.useMemo(
            () => ({ showTopFade: f >= 3, showBottomFade: f < l.length - 3 }),
            [f, l.length],
        ),
        y = r.useRef(null),
        [b, N] = r.useState(null),
        v = null != b && b !== i ? b : null;
    r.useEffect(() => {
        (0, U.p7)(t.id, _.length);
    }, [t.id]);
    let T = r.useCallback(
            (e) => {
                null != e &&
                    e !== i &&
                    w.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    N(e),
                    null != e && e !== i && (0, U.qC)(t.id, t.guild_id, e, { previewLimit: 4 });
            },
            [t.id, t.guild_id, o, i],
        ),
        M = r.useCallback(() => {
            N(null), E();
        }, [E]),
        R = r.useCallback(
            (e) => {
                w.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: o }), s(e), E();
            },
            [t.id, E, o, s],
        ),
        D = r.useCallback(() => (null != v ? (0, a.jsx)(lF, { channel: t, conversationId: v }) : null), [t, v]),
        L = r.useCallback(
            (e) => {
                let t;
                null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    C && (N(null), E());
            },
            [n, C, E],
        ),
        k = r.useCallback(() => {
            x(!0),
                w.X.trackTopicsUnitImpression({ channelId: t.id, conversationIds: _.map((e) => e.id), isFocusMode: o });
        }, [t.id, _, o]);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: c()(lH.kL, o && lH.tW, { [lH._Y]: !o && "navigation" === d, [lH.J_]: !o && "return" === d }),
              children: (0, a.jsxs)("div", {
                  className: c()(lH.rI, C && lH.RK),
                  onMouseEnter: k,
                  onMouseLeave: M,
                  onWheel: o ? void 0 : L,
                  children: [
                      (0, a.jsx)("div", { className: c()(lH.oT, C && lH.RK), "aria-hidden": !0 }),
                      (0, a.jsx)(eS.Y, {
                          targetElementRef: y,
                          shouldShow: C && null != v,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: eS.Y.Animation.FADE,
                          renderPopout: D,
                          children: () =>
                              (0, a.jsx)("div", {
                                  ref: y,
                                  className: c()(lH.nd, { [lH.mc]: C, [lH._z]: !C, [lH.OP]: C && I, [lH.yc]: C && j }),
                                  style: { height: 188 },
                                  children: (0, a.jsx)(lR, {
                                      items: S,
                                      isExpanded: C,
                                      anchorId: u,
                                      hoveredConversationId: b,
                                      selectedConversationId: i,
                                      showTopFade: I,
                                      showBottomFade: j,
                                      isFocusOverlayOpen: o,
                                      onHoverConversationChange: T,
                                      onJump: R,
                                  }),
                              }),
                      }),
                  ],
              }),
          });
}
function lV(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, O.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, h.yK)([G.A], () => (l ? (G.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, a.jsx)(lB, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lK(e) {
    let { channel: t, scrollManager: n } = e;
    return (0, O.sV)(t.guild_id, "scrollbar_chips")
        ? (0, a.jsxs)(W, {
              children: [(0, a.jsx)(lI, { channel: t }), (0, a.jsx)(lV, { channel: t, scrollManager: n })],
          })
        : null;
}
var lz = n(354328),
    lW = n(807632),
    l$ = n(875317),
    lq = n(164956),
    lJ = n(302031),
    lZ = n(822074),
    lY = n(617617),
    lX = n(72314),
    lQ = n(568548),
    l0 = n(399263),
    l1 = n(287809),
    l2 = n(234320),
    l3 = n(863439),
    l4 = n(326337),
    l7 = n(575402);
function l8(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, a.jsx)("div", {
            className: l7.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, a.jsx)(lt.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l5 = n(830178),
    l9 = n(887129),
    l6 = n(621466),
    ie = n(315710),
    it = n(951001),
    il = n(334738),
    ii = n(267102),
    is = n(863922),
    ia = n(965407);
function ir(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l6.vq)(l, HTMLElement); ) (n += l.offsetTop ?? 0), (l = l.offsetParent);
    return n;
}
function io(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === et.default.castChannelIdAsMessageId(e.channelId))) {
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
        ].sort(et.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let ic = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class id {
    props;
    ref = r.createRef();
    automaticAnchor = null;
    messageFetchAnchor = null;
    focusAnchor = null;
    loading;
    jumping = !1;
    pinned;
    dragging = !1;
    isAtBottom = null;
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
            const t = lX.A.isAtBottom(e.channel.id);
            (this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lX.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null));
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
            let n = io(e.messages);
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
                    (l = et.default.extractTimestamp(i.id)),
                    this.scrollToMessage({
                        jumpTargetId: n,
                        animate: !0,
                        fromTimestamp: l,
                        onJumpComplete: e.messages.onJumpComplete,
                    });
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            r = t.last(),
            o = ia.A.getOptions(a?.id ?? "");
        if (null != a && a.state === ed.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: nX.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, l6.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = ir(l, i),
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
        return this.props.channel.isForumPost() ? nX.Gt : nX.k8;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            l = this.getScrollerState(),
            { scrollTop: i } = l,
            s = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            r = -1,
            o = !1;
        for (;;) {
            var c;
            let t = -1 === (c = r) ? et.default.castChannelIdAsMessageId(n.id) : e._array[c]?.id;
            if (null == t) break;
            let d = this.getAnchorData(t, i);
            if (((this._bottomAnchor = d), o && null != d && d.offsetTop > i + s + l.offsetHeight)) break;
            if (o) {
                r++;
                continue;
            }
            null != d && (d.offsetTop >= i + s || r === e.length - 1) && ((a = d), (o = !0)), r++;
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
            if (!(0, l6.vq)(t)) continue;
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
                  padding: nX.mZ + this.props.additionalMessagePadding,
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
    updateVisibleMessagesDebounced = ld().debounce(is.s_, 300);
    setAutomaticAnchor(e) {
        (this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id);
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? ic;
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
                (this.loadMorePausedUntilUserScroll &&
                    null != e &&
                    1 !== this.isInScrollTriggerLoadingRegion(t) &&
                    (this.loadMorePausedUntilUserScroll = !1),
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
                (0, il._9)(this.props.channel.id, this.props.windowId);
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
            let n = io(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l6.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : nX.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nX.q4),
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
            s = ir(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = io(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== ed.rbe.GUILD_VOICE &&
                this.props.channel.type !== ed.rbe.GUILD_STAGE_VOICE
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
                j.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(ed.EMb, 2 * (0, l4.h)("scrollManager.loadMore")),
                    truncate: !0,
                });
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.ref.current?.scrollTo({ to: e, animate: !N.Ay.useReducedMotion && t, callback: n }),
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
            j.A.jumpToPresent(n.id, (0, l4.h)("scrollManager.jumpToPresent")),
                (0, eZ.uh)(n.getGuildId() ?? ed.ME, n.id);
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensionsDebounced = ld().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) it.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            it.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
        let { jumpTargetId: t, animate: n = !1, fromTimestamp: l, onJumpComplete: i } = e;
        if (null == this.ref.current) return;
        if (t === this.props.channel.id) return void this.scrollTo(0);
        let s = this.getElementFromMessageId(t);
        this.isJumping() ||
            !n ||
            null == l ||
            N.Ay.useReducedMotion ||
            (et.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let a = () => {
            (this.jumping = !1),
                (0, l6.vq)(s) && ((s.tabIndex = -1), (0, ie.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, l6.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : nX.mZ,
                  ),
                  n,
                  a,
              )
            : this.scrollToNewMessages(n, "middle", a);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: i, hasUnreads: s, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!i.hasMoreBefore) return 0;
            else return s ? a - nX.N0 - 2 : a + 500;
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
            (this._automaticAnchorCallbacks = ld().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ld().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ld().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ld().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, il.Z5)(this.props.channel.id, this.props.windowId);
    }
}
n(667532);
var iu = n(95561),
    ih = n(486227),
    im = n(731738),
    ig = n(192308),
    ip = n(832712),
    iA = n(807393),
    iC = n(381689),
    ix = n(754302),
    iE = n(632738),
    iS = n(544231),
    i_ = n(349435),
    iI = n(665909);
function ij(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/41b06cc820452b3b01d2a90f76b9ba4007cf4c795b2647fc3f0ff7d6a0632785.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var iy = n(149725);
function ib(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        o = r.useCallback(() => {
            l?.();
        }, [l]);
    return (0, a.jsxs)("div", {
        className: iy.HZ,
        children: [
            (0, a.jsxs)("div", {
                className: iy.Be,
                children: [
                    (0, a.jsx)(ij, { alt: "", size: 32 }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(ej.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, a.jsx)(eI.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: iy.Uo,
                children: i?.map((e, t) =>
                    (0, a.jsx)(
                        eM.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, a.jsx)(ex.D, {
                      className: iy.b,
                      onClick: o,
                      role: "button",
                      "aria-label": eD.intl.string(eD.t.WAI6xu),
                      children: (0, a.jsx)(eT.P, { size: "md", color: "currentColor", className: iy.b }),
                  })
                : null,
        ],
    });
}
function iN(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: l,
        warningType: i,
        header: s,
        description: o,
        onDismiss: c,
        buttons: d,
    } = e;
    r.useEffect(() => {
        iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = r.useCallback(() => {
        c?.(), (0, iI._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: iI.Wm.USER_BANNER_DISMISS });
    }, [c, t, n, l, i]);
    return (0, a.jsx)(ib, { buttons: d, description: o, header: s, onDismiss: u });
}
var iv = n(477427);
function iT(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eD.intl.string(eD.t.wSZfJR), description: eD.intl.string(eD.t.CRwzW5) },
            { title: eD.intl.string(eD.t.cmMUaB), description: eD.intl.string(eD.t.n6G1ue) },
            { title: eD.intl.string(eD.t["5SPKSy"]), description: eD.intl.string(eD.t.eyjeJQ) },
        ],
        o = r.useCallback(() => {
            (0, iS.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        ip.A.updateChannelOverrideSettings(null, t, { muted: !0 }, iv.fd.Muted),
            iC.A.showMuteSuccessToast(i, t),
            (0, iI._$)({ channelId: t, warningId: l, senderId: i, warningType: i_._j.LIKELY_ATO, cta: e }),
            o();
    }
    return (
        r.useEffect(() => {
            (0, iI.mO)(ed.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: i_._j.LIKELY_ATO,
            }),
                iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, a.jsx)(iN, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: i_._j.LIKELY_ATO,
            header: eD.intl.string(eD.t.R8UsiI),
            description: eD.intl.string(eD.t.lI8nQl),
            onDismiss: o,
            buttons: [
                {
                    text: eD.intl.string(eD.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        (0, ig.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("57421"), n.e("82911"), n.e("47894")]).then(
                                n.bind(n, 129493),
                            );
                            return (n) => {
                                let { transitionState: r, onClose: o } = n;
                                return (0, a.jsx)(e, {
                                    transitionState: r,
                                    onClose: o,
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    description: eD.intl.string(eD.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, a.jsx)(
                                            ix.B,
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
                                        (0, a.jsx)(
                                            iE.PQ,
                                            {
                                                title: eD.intl.string(eD.t.ftIK2A),
                                                description: eD.intl.string(eD.t.w2ve0t),
                                                buttonText: eD.intl.string(eD.t.ftIK2A),
                                                onButtonPress: () => {
                                                    c(iI.Wm.USER_MODAL_MUTE), o();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, a.jsx)(ex.D, {
                                        onClick: () =>
                                            (0, iI._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: i_._j.LIKELY_ATO,
                                                cta: iI.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, a.jsx)(ej.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: eD.intl.format(eD.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, iI._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: i_._j.LIKELY_ATO,
                                cta: iI.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: eD.intl.string(eD.t.ftIK2A), onClick: () => c(iI.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var iM = n(564771),
    iR = n(711789);
function iD(e) {
    let { channel: t, scrollManager: n } = e,
        l = r.useRef(null),
        { selectAndFocusConversation: i } = V(),
        s = (0, h.bG)([G.A], () => G.A.getSelectedConversation(t.id)),
        { isShifted: o } = (function (e) {
            let { bannerRef: t, scrollManager: n, channelId: l, selectedConversationId: i } = e,
                { bannerMeasurementRef: s, conversationJumpInProgressRef: a } = V(),
                [o, c] = r.useState(!1),
                d = r.useRef(!1);
            return (
                r.useEffect(() => {
                    if (null != t.current)
                        return () => {
                            (0, U.P7)(l, i);
                        };
                }, [l, t, i]),
                r.useEffect(() => {
                    if (null == t.current || null == s) return;
                    let e = n.ref.current?.getScrollerNode();
                    if (null != e)
                        return (
                            e.addEventListener("scroll", i, { passive: !0 }),
                            () => {
                                e.removeEventListener("scroll", i), (s.current = null), (d.current = !1), c(!1);
                            }
                        );
                    function i() {
                        if (null == e || null == t.current) return;
                        let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                        s.current = n;
                        let i = e.clientHeight / 2,
                            r = n < i + 50 && n + 40 > i - 50;
                        if ((r !== d.current && ((d.current = r), c(r)), null != a.current)) return;
                        let o = e.getBoundingClientRect(),
                            u = t.current.getBoundingClientRect();
                        (u.bottom < o.top || u.top > o.bottom) && (0, U.P7)(l);
                    }
                }, [s, t, n, c, l, a]),
                { isShifted: o }
            );
        })({ bannerRef: l, scrollManager: n, channelId: t.id, selectedConversationId: s?.id ?? null }),
        c = r.useCallback(() => {
            null != s && i(s.id);
        }, [i, s]);
    return null == s
        ? null
        : (0, a.jsx)("div", {
              ref: l,
              className: iR.A,
              children: (0, a.jsx)(eU, {
                  channel: t,
                  conversation: s,
                  actionsShifted: o,
                  onFocusToggle: c,
                  suppressBorder: !0,
              }),
          });
}
var iL = n(495273),
    ik = n(429933),
    iP = n(176781),
    iO = n(314307),
    iG = n(463930),
    iU = n(442433),
    iw = n(793574),
    iF = n(688810),
    iH = n(967144),
    iB = n(342296),
    iV = n(696451),
    iK = n(427262),
    iz = n(227623);
function iW(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = r.useRef(null),
        { analyticsLocations: o } = (0, iF.Ay)(iw.A.USERNAME),
        c = (0, h.bG)([l1.default], () => l1.default.getUser(t)),
        d = (0, h.bG)([iV.Ay], () => (null != t ? iV.Ay.getMember(l.guild_id, t) : null)),
        u = (0, iH.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function m(e) {
        if (null == c) return null;
        (0, iU.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("97422"),
                n.e("97705"),
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
                n.e("85802"),
                n.e("66939"),
                n.e("24966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, a.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? iK.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, a.jsx)(iF.f5, {
              value: o,
              children: (0, a.jsx)(iB.A, {
                  targetElementRef: s,
                  user: c,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: d?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, a.jsx)(ex.D, {
                          ...e,
                          innerRef: s,
                          tag: "span",
                          onContextMenu: m,
                          children: (0, a.jsx)(eI.E, {
                              className: iz.e,
                              tag: "span",
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: (0, a.jsx)(iG.g, { name: g, colorString: p ?? null, colorStrings: u }),
                          }),
                      }),
              }),
          });
}
var i$ = n(16590),
    iq = n(583409);
function iJ(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t);
    return (0, a.jsxs)(iO.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", {
                className: iq.P,
                children: (0, a.jsx)(iP.x, { size: "lg", color: $.A.colors.ICON_SUBTLE }),
            }),
            (0, a.jsx)(iO.cr, { children: n }),
            null != t.ownerId &&
                (0, a.jsx)(eI.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eD.intl.format(i$.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, a.jsx)(iW, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iZ = n(93246),
    iY = n(95701),
    iX = n(808728),
    iQ = n(534890),
    i0 = n(713654),
    i1 = n(691060),
    i2 = n(376310),
    i3 = n(376306);
function i4(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, a.jsx)("div", {
        className: c()(i3._, { [i3.L]: l }),
        children: Array.from(t).map((e) =>
            (0, a.jsx)(i2.A, { tag: e, onRemove: i, size: null == i ? i2.A.Sizes.SMALL : i2.A.Sizes.MEDIUM }, e.id),
        ),
    });
}
var i7 = n(126553);
function i8(e) {
    let { channel: t } = e,
        n = (0, i1.kt)(t),
        { firstMessage: l } = (0, h.cf)([t5.A], () => t5.A.getMessage(t.id)),
        i = new Set((0, i1.zt)(t, n)),
        s = (0, i0.gU)(t) ?? iQ.o,
        r = (0, P.Ay)(t);
    return (0, a.jsxs)(iO.Ay, {
        channelId: t.id,
        className: i7.kL,
        children: [
            (0, a.jsx)("div", { className: i7.P0, children: (0, a.jsx)(s, { className: i7.Kk, strokeWidth: 1.75 }) }),
            (0, a.jsx)(iO.cr, { className: i7.wx, children: r }),
            null == l &&
                (0, a.jsx)(eI.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eD.intl.string(eD.t.mE3KJN),
                }),
            (0, a.jsx)(i4, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var i5 = n(289873),
    i9 = n(548118),
    i6 = n(513461),
    se = n(654265),
    st = n(561446),
    sn = n(760436);
function sl(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, h.bG)([l1.default], () => l1.default.getUser(t.userId));
    return (0, a.jsxs)("div", {
        className: sn.I8,
        children: [
            (0, a.jsxs)("div", {
                className: sn.Ov,
                children: [
                    null != n &&
                        (0, a.jsxs)("div", {
                            className: sn.yB,
                            children: [
                                (0, a.jsx)(i9.Ay, { guild: n, active: !0, size: i9.Ay.Sizes.SMOL, className: sn.$f }),
                                (0, a.jsx)(ej.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, a.jsx)(ej.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: eD.intl.format(eD.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== i6.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === i6.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("hr", { className: sn.g2 }),
                            (0, a.jsxs)("div", {
                                className: sn.fs,
                                children: [
                                    (0, a.jsx)(eI.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, a.jsx)(eI.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function si(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, se.A)(t.id);
    return (0, a.jsx)(iO.Ay, {
        channelId: t.id,
        className: sn.kL,
        children:
            null != l && null != l.formResponses
                ? (0, a.jsxs)("div", {
                      className: sn.KJ,
                      children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(sl, { guild: i, joinRequest: l }) }),
                          (0, a.jsx)(st.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, a.jsx)(i5.y, {})
                  : null,
    });
}
var ss = n(825484),
    sa = n(241541),
    sr = n(571694),
    so = n(922301),
    sc = n(660184),
    sd = n(598104),
    su = n(396787),
    sh = n(242533);
function sm(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, a.jsx)(eC.m, {
              position: "bottom",
              text: eD.intl.string(eD.t["0qPSMV"]),
              children: (0, a.jsxs)(ex.D, {
                  className: c()(sh.e, l),
                  onClick: () => (0, su.jv)(t.id, s),
                  children: [
                      n,
                      (0, a.jsx)("div", {
                          className: sh.Z,
                          children: (0, a.jsx)(tJ.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)("div", { className: l, children: n });
}
var sg = n(73028),
    sp = n(277370),
    sA = n(993011);
function sf(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        o = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, lk.A)({ userId: i?.id, size: lD._3.SIZE_80, animateOnHover: !0 }),
        [m, g] = r.useState(!1),
        p = r.useCallback(() => {
            d.onMouseEnter(), g(!0);
        }, [d]),
        A = r.useCallback(() => {
            d.onMouseLeave(), g(!1);
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, a.jsxs)(iO.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, a.jsx)(sm, {
                      channel: n,
                      editable: !0,
                      location: iw.A.EMPTY_GROUP_DM,
                      children: (0, a.jsx)(sd.A, { channel: n, size: lD._3.SIZE_80, animated: t, "aria-label": o }),
                  })
                : (0, a.jsx)(lL.eu, {
                      "aria-label": o,
                      size: lD._3.SIZE_80,
                      src: (0, sr.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, a.jsx)(iO.cr, {
                children: f
                    ? (0, a.jsx)(sc.A, {
                          userName: o,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: m ? so.G.ANIMATED : so.G.STATIC,
                          loop: !0,
                      })
                    : o,
            }),
            (0, a.jsx)(iO.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, a.jsxs)(ss.e, {
                    className: sA.U,
                    children: [
                        (0, a.jsx)(sp.NE, { channel: n, text: eD.intl.string(eD.t.NB5DFD), icon: sa.D }),
                        (0, a.jsx)(eM.$, {
                            icon: tJ.R,
                            variant: "secondary",
                            text: eD.intl.string(eD.t["5Q9+/L"]),
                            "aria-label": eD.intl.string(eD.t["5Q9+/L"]),
                            onClick: () => (0, sg.U)(n.id, iw.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var sC = n(136722),
    sx = n(342952),
    sE = n(177953),
    sS = n(725570),
    s_ = n(435183),
    sI = n(685374),
    sj = n(63104),
    sy = n(12150);
function sb(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: r } = e;
    return (
        (t = i
            ? (0, a.jsx)(sj.A, { size: 12, color: s, className: sy.TS })
            : (0, a.jsx)("div", { className: sy.yY, style: { backgroundColor: s } })),
        (0, a.jsxs)("div", { className: c()(n, sy.JC), style: { "--custom-role-label-color": s }, children: [t, r, l] })
    );
}
var sN = n(468689),
    sv = n(46054),
    sT = n(34457),
    sM = n(317525),
    sR = n(488926),
    sD = n(264164);
function sL(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: r = !1,
        verified: o = !1,
    } = e;
    return (0, a.jsx)(ex.D, {
        className: c()(t, sD.x6, { [sD.r9]: r }),
        onClick: r ? void 0 : s,
        "aria-disabled": r,
        role: "button",
        children: (0, a.jsx)(sb, {
            className: sD.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, a.jsx)(eT.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: sD.Tj,
                    colorClass: sD.eG,
                }),
        }),
    });
}
var sk = n(589053);
function sP(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        o = (0, h.bG)([sM.A], () => (null != s ? sM.A.getSortedRoles(s) : void 0)),
        d = (0, h.bG)([l1.default, ns.A], () => l1.default.getUser(ns.A.getGuild(s)?.ownerId)),
        u = r.useMemo(() => (null != o ? o.filter((e) => !(0, sT.Oy)(e)) : []), [o]),
        m = r.useMemo(
            () =>
                ld()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sR.aH({ forceRoles: { [e.id]: e }, context: t });
                        return sC.X8(n, sC.kg(ed.xBc.ADMINISTRATOR, ed.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        g = (0, h.yK)([l1.default], () => {
            let e = {};
            for (let n of (null != d && (e[d.id] = d), Object.values(t.permissionOverwrites))) {
                if (n.type !== nG.r2.MEMBER || null != e[n.id]) continue;
                let t = l1.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return ld()(e)
                .filter((e) => {
                    let n = sR.$3({ permission: ed.xBc.ADMINISTRATOR, user: e, context: t }),
                        l = t.permissionOverwrites[e.id] ?? sR.x3,
                        i = sC.zy(l.allow, ed.xBc.VIEW_CHANNEL);
                    return n || i;
                })
                .value();
        }, [t, d]),
        p = tu.A.can(ed.xBc.MANAGE_CHANNELS, t) || tu.A.can(ed.xBc.MANAGE_ROLES, t),
        A = r.useCallback(() => l(!1), []);
    return (0, a.jsxs)(iO.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iO.WK, { locked: !0, channelType: t.type }),
            (0, a.jsx)(iO.cr, { children: eD.intl.format(eD.t.I3R7Vn, { channelName: i }) }),
            (0, a.jsx)(iO.j1, {
                className: tk.PT,
                children: eD.intl.format(eD.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => sv.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, a.jsxs)("div", {
                      className: sk.$x,
                      children: [
                          (0, a.jsx)(eM.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eD.intl.string(eD.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sE.n,
                          }),
                          (0, a.jsx)(eM.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eD.intl.string(eD.t["3gUsJb"]),
                              onClick: function () {
                                  s_.Ay.open(t.id);
                              },
                              icon: tJ.R,
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: sk.ol,
                children: [
                    (function () {
                        if (1 !== g.length || m.length > 0)
                            return (0, a.jsx)(sx.A, { guildId: t.guild_id, className: sk.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = iK.Ay.getName(e);
                        return (0, a.jsxs)("div", {
                            className: sk.HD,
                            children: [
                                (0, a.jsx)(lL.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lD._3.SIZE_24,
                                }),
                                (0, a.jsx)(eI.E, {
                                    tag: "span",
                                    className: sk.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, a.jsx)(eI.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: eD.intl.string(eD.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    m.map((e, n) => {
                        let l = e.colorString ?? ed.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return p
                            ? (0, a.jsx)(
                                  sL,
                                  {
                                      className: c()(sk.JC, { [sk.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !p,
                                      verified: i,
                                      onClick: () => {
                                          sN.A.open(t.guild_id, ed.BEX.MEMBERS), sN.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, a.jsx)(
                                  sb,
                                  {
                                      className: c()(sk.JC, { [sk.HV]: n === m.length - 1 }),
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
                ? (0, a.jsx)(sS.aF, {
                      renderModal: (e) =>
                          (0, a.jsx)(sI.default, { ...e, onClose: () => (A(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sO = n(961112);
function sG(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, h.bG)([tu.A], () => tu.A.can(ed.xBc.MANAGE_CHANNELS, t) && iY.bk.has(t.type));
    return (0, a.jsxs)(iO.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iO.WK, { channelType: t.type }),
            (0, a.jsx)(iO.cr, { children: eD.intl.format(eD.t.I3R7Vn, { channelName: n }) }),
            (0, a.jsx)(iO.j1, {
                className: tk.PT,
                children: eD.intl.format(eD.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => sv.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, a.jsx)("div", {
                      className: sO.U,
                      children: (0, a.jsx)(eM.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eD.intl.string(eD.t["3gUsJb"]),
                          onClick: () => {
                              s_.Ay.open(t.id);
                          },
                          icon: tJ.R,
                      }),
                  })
                : null,
        ],
    });
}
var sU = n(726088);
function sw(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, a.jsx)("div", { style: { marginTop: -8 } })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(eI.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, a.jsx)("div", {
                          className: sU.VA,
                          children: eD.intl.format(eD.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, a.jsx)(
                                      iW,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, a.jsx)("span", {
                                              className: c()(sU.eM, sU.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === ed.rbe.PRIVATE_THREAD
                      ? (0, a.jsx)(eI.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eD.intl.string(eD.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sF(e) {
    let { channel: t } = e,
        n = (0, i0.gU)(t) ?? t$.y,
        l = (0, P.Ay)(t);
    return (0, a.jsxs)(iO.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", { className: sU.P0, children: (0, a.jsx)(n, { className: sU.Kk }) }),
            (0, a.jsx)(iO.cr, { children: l }),
            (0, a.jsx)(sw, { channel: t }),
        ],
    });
}
var sH = n(328857),
    sB = n(157550),
    sV = n(957283),
    sK = n(189213),
    sz = n(933958),
    sW = n(869003),
    s$ = n(321191),
    sq = n(712440),
    sJ = n(733110),
    sZ = n(543465),
    sY = n(308528),
    sX = n(928658),
    sQ = n(978914),
    s0 = n(977347);
function s1(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: o,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, h.bG)([nw.A], () => nw.A.getRelationshipType(t), [t])) === ed.eA$.NONE ||
                    l === ed.eA$.BLOCKED ||
                    l === ed.eA$.PENDING_INCOMING,
                s = n || i,
                a = (0, s0.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, sQ.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, l),
        { channelId: c } = (0, sV.N)(),
        d = t.id === c,
        u = !np.Fr && !d,
        m = r.useCallback(() => {
            null != i &&
                (0, sX.b8)(i, () => {
                    sY.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && o)
        ? null
        : (0, a.jsx)(eM.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: m,
              text: eD.intl.string(eD.t.HHZmDn),
          });
}
function s2(e) {
    let { channel: t } = e,
        l = (0, h.bG)([sZ.Ay], () => sZ.Ay.isChannelMuted(null, t.id));
    return (0, a.jsx)(eM.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eD.intl.string(eD.t.YqAjXy) : eD.intl.string(eD.t.w4m945),
        onClick: function () {
            (0, ig.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, a.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function s3(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, h.bG)([sz.Ay], () => sz.Ay.getSelfEmbeddedActivities());
    function s() {
        sq.A.delete(l.id);
        let e = i.get(n.id);
        null != e && sW.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, a.jsx)(eM.$, {
        variant: "secondary",
        text: eD.intl.string(eD.t["5S3sQF"]),
        onClick: () => {
            (0, ig.openModal)((e) =>
                (0, a.jsx)(sK.Modal, {
                    title: eD.intl.string(eD.t["DT39A+"]),
                    subtitle: eD.intl.formatToPlainString(eD.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: eD.intl.string(eD.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: eD.intl.string(eD.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                s(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                na.default.track(ed.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function s4(e) {
    var t;
    let { channel: n, user: l } = e,
        i =
            ((t = l?.id ?? ed.dJq),
            (0, h.bG)([s$.A], () => (null !== t ? s$.A.getUserProfile(t ?? ed.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: o } = (0, h.cf)([sJ.default], () => ({
            authorizedAppToken: sJ.default.getNewestTokenForApplication(i?.id),
            authorizedAppsFetchState: sJ.default.getFetchState(),
        }));
    return (r.useEffect(() => {
        l.bot && o === sJ.FetchState.NOT_FETCHED && sq.A.fetch();
    }, [l.bot, o]),
    l.bot && null != i && null != s)
        ? (0, a.jsxs)(ss.e, {
              size: "sm",
              children: [
                  (0, a.jsx)(s2, { channel: n }),
                  (0, a.jsx)(s3, { application: i, channel: n, oauth2Token: s }),
                  (0, a.jsx)(s1, { channel: n, user: l }),
              ],
          })
        : (0, a.jsx)(ss.e, { size: "sm", children: (0, a.jsx)(s1, { channel: n, user: l }) });
}
var s7 = n(692617),
    s8 = n(903209),
    s5 = n(975732),
    s9 = n(518477),
    s6 = n(949657);
function ae(e) {
    let { userId: t, channelId: n, showDivider: l = !1, compact: i = !1 } = e,
        s = (0, h.bG)([s$.A], () => s$.A.getMutualGuilds(t), [t]),
        o = l1.default.getUser(t);
    r.useEffect(() => {
        null == s && null != o && (0, s8.A)(t, o.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [s, t, o]);
    let d = r.useMemo(
        () =>
            (s ?? []).map((e) => {
                let { guild: t } = e;
                return t;
            }),
        [s],
    );
    return null == s || 0 === s.length
        ? (0, a.jsx)("div", {
              className: c()(s6.kL, l ? s6.yF : null),
              children: (0, a.jsx)(eI.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: eD.intl.string(eD.t.zjVh8h),
              }),
          })
        : (0, a.jsxs)(ex.D, {
              className: c()(s6.kL, s6.vk, { [s6.yF]: l }),
              onClick: function () {
                  (0, s5.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: s9.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iw.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, a.jsx)(s7.A, {
                      guilds: d,
                      maxGuilds: 3,
                      size: i ? i9.Ay.Sizes.SMOL : i9.Ay.Sizes.SMALLER,
                      hideOverflowCount: !0,
                  }),
                  (0, a.jsx)(eI.E, {
                      className: s6.NI,
                      variant: "text-sm/normal",
                      children: eD.intl.format(eD.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var at = n(717398),
    an = n(327166),
    al = n(390848),
    ai = n(203317);
function as(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eM.$, {
        size: "sm",
        variant: "secondary",
        onClick: function () {
            at.A.blockUser(t, { location: ed.liQ.DM_CHANNEL });
        },
        text: eD.intl.string(eD.t.l4Emac),
    });
}
function aa(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, an.D)(t, i),
        r = (0, h.bG)([nw.A], () => nw.A.getRelationshipType(t), [t]),
        o = (0, h.bG)([nw.A], () => nw.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, al.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: ed.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, a.jsx)(eM.$, {
              variant: l,
              onClick: function () {
                  r === ed.eA$.PENDING_INCOMING
                      ? c()
                      : at.A.addRelationship({ userId: t, context: { location: ed.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function ar(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eM.$, {
        variant: "secondary",
        onClick: function () {
            at.A.removeFriend(t, { location: ed.liQ.DM_CHANNEL });
        },
        text: eD.intl.string(eD.t.cvSt1J),
    });
}
function ao(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eM.$, {
        variant: "secondary",
        onClick: function () {
            at.A.unblockUser(t, { location: ed.liQ.DM_CHANNEL });
        },
        text: eD.intl.string(eD.t.XyHpKH),
    });
}
function ac(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, h.bG)([nw.A], () => nw.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, al.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: ed.liQ.DM_CHANNEL,
        });
    return (0, a.jsxs)("div", {
        className: ai.K,
        children: [
            (0, a.jsx)(eI.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eD.intl.format(eD.t.uIomXw, { username: iK.Ay.getName(n) }),
            }),
            (0, a.jsxs)(ss.e, {
                size: "sm",
                children: [
                    (0, a.jsx)(eM.$, { variant: "primary", onClick: s, text: eD.intl.string(eD.t["+WbSn5"]) }),
                    (0, a.jsx)(eM.$, {
                        variant: "secondary",
                        onClick: function () {
                            at.A.cancelFriendRequest(n.id, { location: ed.liQ.DM_CHANNEL });
                        },
                        text: eD.intl.string(eD.t.rQSndv),
                    }),
                    (0, a.jsx)(as, { userId: n.id }),
                    l ? null : (0, a.jsx)(s1, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function ad(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: r,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, h.bG)([nw.A], () => nw.A.getRelationshipType(l.id), [l.id]);
    if (c === ed.eA$.PENDING_INCOMING && !o) return (0, a.jsx)(ac, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case ed.eA$.NONE:
        case ed.eA$.PENDING_INCOMING:
            l.bot || (t = (0, a.jsx)(aa, { userId: l.id, showingBanner: i, variant: s, label: r }));
            break;
        case ed.eA$.FRIEND:
            t = (0, a.jsx)(ar, { userId: l.id });
            break;
        case ed.eA$.BLOCKED:
            t = (0, a.jsx)(ao, { userId: l.id });
            break;
        case ed.eA$.PENDING_OUTGOING:
            t = (0, a.jsx)(eM.$, { variant: "primary", disabled: !0, text: eD.intl.string(eD.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== ed.eA$.BLOCKED;
    return (0, a.jsxs)(ss.e, {
        size: "sm",
        children: [t, d ? (0, a.jsx)(as, { userId: l.id }) : null, i ? null : (0, a.jsx)(s1, { channel: n, user: l })],
    });
}
var au = n(92650),
    ah = n(138298),
    am = n(761640);
function ag(e) {
    let { channel: t, user: n } = e,
        l = r.useCallback(() => {
            (0, eb.P0)((0, eN.o)(eD.intl.string(eD.t.a2j0hv), ev.Ck.FAILURE));
        }, []),
        i = r.useCallback(() => {
            ah.A.closeChannelSidebar(am.fe);
        }, []),
        s = r.useCallback(() => {
            ah.A.closeChannelSidebar(am.fe);
        }, []),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, au.t)({ user: l1.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, a.jsxs)(ss.e, {
        size: "sm",
        children: [
            (0, a.jsx)(eM.$, {
                variant: "primary",
                disabled: g,
                onClick: () => o(t.id),
                loading: d,
                text: eD.intl.string(eD.t.Kz8Pwr),
            }),
            (0, a.jsx)(eM.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: eD.intl.string(eD.t.B2nygW),
            }),
            (0, a.jsx)(s1, { channel: t, user: n }),
        ],
    });
}
var ap = n(480978);
function aA(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, sV.N)(),
        r = (0, h.bG)([sB.A], () => null != s && sB.A.isSpam(s), [s]),
        o = (0, h.bG)([nw.A], () => nw.A.getRelationshipType(l.id), [l.id]),
        c = n.id === s,
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        m = (0, e$.U)(),
        g = ap.n;
    return (
        u
            ? (t = null)
            : m
              ? ((t = (0, a.jsx)(ad, {
                    channel: n,
                    user: l,
                    showingBanner: i,
                    addFriendVariant: "active",
                    addFriendLabel: eD.intl.string(eD.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (g = ap.O))
              : r || c
                ? (t = (0, a.jsx)(ag, { channel: n, user: l }))
                : d
                  ? (t = (0, a.jsx)(s4, { channel: n, user: l }))
                  : ((t = (0, a.jsx)(ad, { channel: n, user: l, showingBanner: i })),
                    o === ed.eA$.PENDING_INCOMING && (g = ap.O)),
        (0, a.jsxs)("div", {
            className: g,
            children: [(0, a.jsx)(ae, { userId: l.id, channelId: n.id, showDivider: g !== ap.O, compact: m }), t],
        })
    );
}
var af = n(746080),
    aC = n(522826);
function ax(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iL.Ae)(n),
        i = (0, h.bG)([iX.Ay], () => null != n.guild_id && n === iX.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, ik.A)(n.id)) return null;
    if (n.isForumPost()) return (0, a.jsx)(i8, { channel: n });
    if (n.isMediaThread()) return (0, a.jsx)(iJ, { channel: n });
    if (iY.Le.has(n.type)) return (0, a.jsx)(sF, { channel: n });
    if (i) return (0, a.jsx)(sH.A, { channel: n });
    else if (l) return (0, a.jsx)(sP, { channel: n });
    return (0, a.jsx)(sG, { channel: n });
}
function aE(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, h.bG)([l1.default], () => (t.isPrivate() ? l1.default.getUser(t.getRecipientId()) : null)),
        r = iK.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, h.cf)([tu.A], () => ({
            canManageRoles: tu.A.can(ed.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: tu.A.can(ed.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, a.jsx)(sf, { channel: t, children: eD.intl.string(eD.t.Rzvnig) });
    if (i === ed.rbe.DM)
        return (0, a.jsxs)(sf, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, a.jsx)(ej.D, { variant: "heading-xl/medium", className: aC.SX, children: r }),
                eD.intl.format(eD.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, a.jsx)(iZ.Y, { userId: s.id }) : null,
                null != s ? (0, a.jsx)(aA, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, a.jsxs)(iO.Ay, {
                channelId: t.id,
                children: [
                    (0, a.jsx)(iO.cr, { children: eD.intl.format(eD.t.I3R7Vn, { channelName: l }) }),
                    (0, a.jsx)(iO.j1, { children: eD.intl.string(eD.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(af.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, a.jsx)(si, { channel: t });
        else return (0, a.jsx)(sf, { channel: t, children: eD.intl.format(eD.t.MFwcqO, { name: l }) });
    return c
        ? (0, a.jsx)(ax, { channel: t, canManageRoles: o })
        : (0, a.jsx)(iO.Ay, {
              channelId: t.id,
              children: (0, a.jsx)(iO.j1, { children: eD.intl.format(eD.t.hPVEQG, { channelName: l }) }),
          });
}
var aS = n(506774),
    a_ = n(933832),
    aI = n(782603),
    aj = n(408278),
    ay = n(763175),
    ab = n(56562),
    aN = n(765671),
    av = n(304072),
    aT = n(578623),
    aM = n(702841),
    aR = n(696986),
    aD = n(871237),
    aL = n(36491),
    ak = n(953727);
function aP(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, ak.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 49 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, a.jsx)("path", {
                d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
                fill: "white",
            }),
            (0, a.jsx)("path", {
                d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
                fill: "#66B9FF",
            }),
            (0, a.jsx)("path", {
                d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
                fill: "#89D6FF",
            }),
            (0, a.jsx)("path", {
                d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
                fill: "#FFEFA3",
            }),
            (0, a.jsx)("path", {
                d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
                fill: "#3F96EF",
            }),
            (0, a.jsx)("path", {
                d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
                fill: "url(#paint0_linear_859_60333)",
            }),
            (0, a.jsx)("path", {
                d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
                fill: "#FFC31A",
            }),
            (0, a.jsx)("path", {
                d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
                fill: "#55EF84",
            }),
            (0, a.jsx)("path", {
                d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
                fill: "#FF78B5",
            }),
            (0, a.jsx)("path", {
                d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
                fill: "#89D6FF",
            }),
            (0, a.jsx)("path", {
                d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
                fill: "#3541D6",
            }),
            (0, a.jsx)("path", {
                d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
                fill: "white",
            }),
            (0, a.jsx)("path", {
                d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
                fill: "white",
            }),
            (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                    id: "paint0_linear_859_60333",
                    x1: "34.2419",
                    y1: "5.70262",
                    x2: "5.61649",
                    y2: "53.1558",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, a.jsx)("stop", { offset: "0.14", stopColor: "#FFE45C" }),
                        (0, a.jsx)("stop", { offset: "0.83", stopColor: "#FFC31A" }),
                    ],
                }),
            }),
        ],
    });
}
var aO = n(578276);
function aG(e) {
    let { threadId: t } = e,
        n = (0, aM.bG)([eX.A], () => eX.A.getChannel(t)),
        l = (0, aM.bG)([eX.A], () => eX.A.getChannel(n?.parent_id)),
        i = r.useCallback(() => {
            null != n &&
                null != l &&
                ((0, iu.zV)(ed.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, th.C)((0, aD.af)(n, l)));
        }, [n, l]);
    return (0, a.jsxs)("div", {
        className: aO.BQ,
        children: [
            (0, a.jsx)(aP, {}),
            (0, a.jsxs)("div", {
                className: aO.BB,
                children: [
                    (0, a.jsx)(eI.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eD.intl.string(eD.t["5uAO7d"]),
                    }),
                    (0, a.jsx)(eI.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eD.intl.format(eD.t.WnfPV3, {
                            helpArticleUrl: tN.A.getCreatorSupportArticleURL(ed.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, a.jsx)(aR.h, { size: 4 }),
                    (0, a.jsx)(eM.$, { text: eD.intl.string(eD.t.C5UQC9), variant: "primary", icon: tH.q, onClick: i }),
                ],
            }),
            (0, a.jsx)(ex.D, {
                className: aO.b,
                onClick: function () {
                    (0, aL.sF)(t);
                },
                "aria-label": eD.intl.string(eD.t["0+xZH0"]),
                children: (0, a.jsx)(eT.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var aU = n(505527),
    aw = n(467073),
    aF = n(960538),
    aH = n(604121),
    aB = n(403029);
function aV() {
    return n
        .e("15423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let aK = r.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        i = (0, h.bG)([tu.A], () => tu.A.can(ed.xBc.SEND_MESSAGES_IN_THREADS, t)),
        s = (0, ta.s5)(t),
        r = (0, h.bG)([er.default], () => er.default.getId());
    return n
        ? i && !s && t.ownerId !== r
            ? (0, a.jsxs)("div", {
                  className: aB.aP,
                  children: [
                      (0, a.jsx)(aH.a, { importData: aV, shouldAnimate: !l, className: aB.lY }),
                      (0, a.jsxs)("div", {
                          className: aB.FS,
                          children: [
                              (0, a.jsx)(ej.D, {
                                  variant: "heading-md/semibold",
                                  children: eD.intl.string(eD.t.OmBThA),
                              }),
                              (0, a.jsx)(eI.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: eD.intl.string(eD.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
            : null
        : (0, a.jsx)("div", { className: aB.yF });
});
var az = n(279182),
    aW = n(831688),
    a$ = n(226698),
    aq = n(892340),
    aJ = n(715757),
    aZ = n(390897),
    aY = n(862482),
    aX = n(215026),
    aQ = n(66834),
    a0 = n(964486),
    a1 = n(351001),
    a2 = n(400528);
function a3(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, a.jsx)(eC.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, a.jsx)(aj.K, {
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
var a4 = n(221314),
    a7 = n(145530),
    a8 = n(905499),
    a5 = n(406810),
    a9 = n(991982),
    a6 = n(838111),
    re = n(870136);
function rt(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        o = s?.reported_user_id,
        c = (0, h.bG)([l1.default], () => (null != o ? l1.default.getUser(o) : null)),
        d = (0, h.bG)([ns.A], () => ns.A.getGuild(t.guild_id));
    (0, aJ.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, h.bG)([a2.A], () => null != l && a2.A.isUserBanned(l.id)),
                o = null != l && null == s,
                [c, d] = r.useState(o),
                u = (0, h.bG)([tu.A], () => null != l && null != i && (0, a1.fJ)(l, i, [tu.A]));
            if (
                ((0, a0.Ay)(() => {
                    o && aQ.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let m = !0 === s ? eD.intl.string(a4.default.dpfwQ1) : eD.intl.string(a4.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, a.jsx)(
                a3,
                {
                    text: m,
                    icon: aX.w,
                    onClick: function () {
                        null != l &&
                            (0, ig.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("87407"), n.e("2504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: aY.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        m = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, h.bG)([tu.A], () => null != l && null != i && (0, a1.KX)(l, i, [tu.A])),
                r = (0, h.bG)([iV.Ay], () => null == l || null == iV.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = r ? eD.intl.string(a4.default.Ux67nW) : eD.intl.string(a4.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, a.jsx)(
                a3,
                {
                    text: o,
                    icon: a8.N,
                    onClick: function () {
                        null != l &&
                            (0, ig.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("10788"), n.e("40243")]).then(
                                    n.bind(n, 547166),
                                );
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: r,
                },
                c,
            );
        })({ channel: t, user: c, guild: d }),
        g = [
            (function (e) {
                let { message: t, user: n, guild: l, channel: i } = e,
                    s = (0, h.bG)([tu.A], () => null != n && null != l && (0, a1.Kd)(n, l, [tu.A])),
                    { messageReference: r } = t,
                    o = (0, h.bG)([eg.A], () => (null != r ? eg.A.getMessage(r.channel_id, r.message_id) : null)),
                    c = (0, h.bG)([eX.A], () => (null != o ? eX.A.getChannel(o.channel_id) : null)),
                    d = (0, h.bG)([eX.A], () => eX.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? eD.intl.string(a4.default["0IZbwC"]) : eD.intl.string(a4.default.Uj6oD4),
                    m = null == o,
                    g = `delete-message-${t.id}`;
                return (0, a.jsx)(
                    a3,
                    {
                        text: u,
                        icon: tQ.u,
                        onClick: function () {
                            null != c &&
                                null != o &&
                                a7.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: m,
                        color: aY.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            m,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, h.bG)(
                        [l1.default, ns.A, tu.A],
                        () => null != n && null != l && (0, a6.b)(l.id, n.id, [l1.default, ns.A, tu.A]),
                    ),
                    [s, r] = (0, re.Ay)(n?.id, t.guild_id),
                    o = (0, h.bG)([iV.Ay], () => null != l && null != n && null != iV.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, a.jsx)(
                    a3,
                    {
                        text: r ? eD.intl.string(a4.default["6uMZbv"]) : eD.intl.string(a4.default["Sgg/uI"]),
                        icon: a5.O,
                        onClick: function () {
                            null != n && (0, a9.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: r,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== g.length
        ? (0, a.jsx)(a.Fragment, { children: g.map((e, t) => (0, a.jsx)(r.Fragment, { children: e }, t)) })
        : null;
}
function rn(e) {
    let { message: t, channel: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, a.jsx)(rt, { channel: n, message: t, snapshot: e }, l)),
    });
}
var rl = n(152007),
    ri = n(867455),
    rs = n(435470),
    ra = n(473503),
    rr = n(853742),
    ro = n(702667),
    rc = n(435153),
    rd = n(85277);
function ru(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, aq.uW)(t),
        [s, o] = r.useState(!1);
    function c() {
        o(!0),
            a$.A.resolveFlag(t.id).then(() => {
                o(!1);
            });
    }
    return i
        ? (0, a.jsx)(eM.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eD.intl.string(a4.default["2Y4vkk"]) : eD.intl.string(a4.default.YIbR4r),
              onClick: function () {
                  !0 === aS.w.get(aZ.f)
                      ? c()
                      : (0, ig.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, a.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: a_.A,
              disabled: l,
          })
        : null;
}
function rh(e) {
    let {
            postId: t,
            isFirstMessage: n,
            isLastItem: l = !1,
            parentChannelId: i,
            hideDivider: s = !1,
            hideFollowButton: o = !1,
            hideUnfollowButton: d = !1,
            className: u,
        } = e,
        { ref: m, width: g } = (0, aN.Ay)(),
        [p, A] = r.useState(3),
        [f, C] = r.useState(!n),
        [x, E] = (0, av.A)(!1, 2e3),
        S = (0, h.bG)([eX.A], () => eX.A.getChannel(t), [t]),
        { firstMessage: _ } = (0, ra.OA)(S),
        I = (0, h.bG)([rl.A], () => rl.A.hasJoined(t)),
        { disableReactionUpdates: y, disableReactionCreates: b, isLurking: N, isPendingMember: v } = (0, aw.A)(S),
        T = (0, aJ.W1)(S),
        M = (0, h.bG)([eX.A], () => eX.A.getChannel(i)),
        R = (0, rs.Ck)(M),
        D = (0, h.bG)([aT.A], () => aT.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        L = r.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    C((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    if (
        (r.useLayoutEffect(() => {
            let e = m.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(L, { threshold: 1 });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }),
        r.useLayoutEffect(() => {
            null == g || A(Math.floor((g - 280) / 58));
        }, [g]),
        null == S)
    )
        return null;
    let k = null != _ && _.reactions.length > 0;
    function P() {
        null != S &&
            ((0, rr.jC)({ postId: S.id, location: { section: ed.JJy.CHANNEL_HEADER } }),
            (0, th.C)((0, aD.af)(S, M), () => E(!0)));
    }
    let O = I ? a_.A : aI.X;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: c()(ro.kL, { [ro.wx]: f }, u),
                ref: m,
                children: [
                    T
                        ? (0, a.jsx)("div", {
                              className: ro.kX,
                              children: null != _ && (0, a.jsx)(rn, { message: _, channel: S }),
                          })
                        : (0, a.jsx)("div", {
                              className: ro.hY,
                              children:
                                  null != _ &&
                                  (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          !k &&
                                              !b &&
                                              null != R &&
                                              (0, a.jsx)("div", {
                                                  className: rc.reactions,
                                                  children: (0, a.jsx)(aW.q, {
                                                      message: _,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: N,
                                                      isPendingMember: v,
                                                      emoji: R,
                                                      type: aU.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, a.jsx)(az.A, {
                                              message: _,
                                              channel: S,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: y,
                                              isLurking: N,
                                              isPendingMember: v,
                                              maxReactions: p,
                                              className: ro.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !b &&
                                              (0, a.jsx)(aF.t, {
                                                  message: _,
                                                  channel: S,
                                                  useChatFontScaling: !1,
                                                  className: c()(rd.secondary, ro.vU, rc.visible, { [ro.w$]: !k }),
                                                  isForumToolbar: !0,
                                                  children: !k && eD.intl.string(eD.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, a.jsxs)("div", {
                        className: ro.Uo,
                        children: [
                            T
                                ? (0, a.jsx)(ru, { channel: S })
                                : !N &&
                                  (!o || I) &&
                                  (!d || !I) &&
                                  (0, a.jsx)(eC.m, {
                                      text: eD.intl.string(eD.t.F7oeDv),
                                      children: (0, a.jsx)(eM.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: I ? eD.intl.string(eD.t["7OkUzs"]) : eD.intl.string(eD.t["3aOv+h"]),
                                          onClick: function () {
                                              null != S &&
                                                  (I
                                                      ? ri.A.leaveThread(S, "Forum Toolbar")
                                                      : ri.A.joinThread(S, "Forum Toolbar"));
                                          },
                                      }),
                                  }),
                            (0, a.jsx)(eC.m, {
                                text: eD.intl.string(eD.t.WqhZss),
                                children: x
                                    ? (0, a.jsx)(eM.$, {
                                          icon: a_.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eD.intl.string(eD.t.t5VZ88),
                                      })
                                    : (0, a.jsx)(aj.K, {
                                          icon: tH.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eD.intl.string(eD.t.WqhZss),
                                      }),
                            }),
                            f &&
                                (0, a.jsx)(eC.m, {
                                    text: eD.intl.string(eD.t.nFP4oa),
                                    children: (0, a.jsx)(aj.K, {
                                        icon: ay.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: function () {
                                            null != S &&
                                                j.A.jumpToMessage({
                                                    channelId: S.id,
                                                    messageId: S.id,
                                                    flash: !0,
                                                    jumpType: ab.vx.INSTANT,
                                                });
                                        },
                                        "aria-label": eD.intl.string(eD.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, a.jsx)(aG, { threadId: t }),
            !s && (0, a.jsx)(aK, { channel: S, isLastItem: l }),
        ],
    });
}
var rm = n(364522),
    rg = n(80682),
    rp = n(763899),
    rA = n(983851),
    rf = n(104171),
    rC = n(262763),
    rx = n(499211),
    rE = n(763827),
    rS = n(977997),
    r_ = n(607567),
    rI = n(917592),
    rj = n(774418),
    ry = n(263594);
function rb(e) {
    let { channel: t, className: n } = e,
        l = (0, ta._M)(t),
        i = (0, ta.gZ)(t),
        s = (0, h.bG)([rS.A], () => rS.A.isInChannel(t.id)),
        o = (0, h.bG)([r_.Ay], () => r_.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: d } = (0, rx.A)(t.id),
        u = (0, h.bG)([rE.A], () => (rE.A.getChannelId() === t.id ? rE.A.getState() : ed.S7L.RTC_DISCONNECTED), [t.id]),
        m = r.useCallback(() => {
            rC.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: d, locked: !1 });
        }, [t, s, d]),
        g = r.useMemo(() => o.map((e) => e.user.id), [o]),
        p = (0, rs.$I)(t, g),
        A = p.length > 0,
        { connectionStatusText: f } = rI.A.getStatus(u, !1);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(eC.m, {
                text: i ? (l ? void 0 : eD.intl.string(rj.default.yaoRu1)) : eD.intl.string(rj.default.yBjQ3q),
                caretConfig: { position: "bottom", align: "start" },
                align: "left",
                children: (0, a.jsxs)(ex.D, {
                    className: c()(ry.Xt, l ? null : ry.tW),
                    onClick: l ? m : void 0,
                    children: [
                        (0, a.jsx)(rA.H, {
                            size: "refresh_sm",
                            color: s ? $.A.colors.STATUS_POSITIVE : $.A.colors.ICON_MUTED,
                        }),
                        (0, a.jsx)(eI.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: ry.Gp,
                            children: u === ed.S7L.RTC_DISCONNECTED ? eD.intl.string(rj.default.ficpp7) : f,
                        }),
                    ],
                }),
            }),
            A
                ? (0, a.jsx)(rf.Ay, {
                      className: ry.L_,
                      guildId: t.guild_id,
                      users: p,
                      size: rf.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var rN = n(917147);
function rv(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, i1.kt)(l),
        o = (0, lW.IO)(l),
        c = t?.author.id,
        d = (0, r.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, rg.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, a.jsxs)("div", {
            className: rN.TX,
            children: [
                (0, a.jsxs)(rm.Ar, {
                    children: [
                        null != t
                            ? (0, a.jsx)("ol", {
                                  children: (0, a.jsx)(n1, {
                                      className: rN.iU,
                                      compact: n,
                                      channel: l,
                                      message: t,
                                      groupId: t.id,
                                      id: i,
                                      isLastItem: !1,
                                      renderContentOnly: !1,
                                      hideInviteEmbedBanner: !0,
                                      hideActivityInvite: !0,
                                  }),
                              })
                            : null,
                        (0, a.jsxs)("div", {
                            className: rN.iQ,
                            children: [
                                null == t &&
                                    (0, a.jsx)(eI.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: eD.intl.string(eD.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, a.jsx)("div", {
                                        className: rN.GA,
                                        children: s.map((e) =>
                                            (0, a.jsx)(i2.A, { tag: e, size: i2.A.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, a.jsx)(rp.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, a.jsx)("div", { className: rN.b1 }),
                                (0, a.jsx)(rh, {
                                    className: rN.Jr,
                                    parentChannelId: l.parent_id,
                                    postId: l.id,
                                    isFirstMessage: !0,
                                    isLastItem: !0,
                                    hideDivider: !0,
                                    hideFollowButton: !0,
                                }),
                                o &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: rN.b1 }),
                                            (0, a.jsx)(rb, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: rN.ld }),
            ],
        })
    );
}
var rT = n(640708),
    rM = n(378570),
    rR = n(452082),
    rD = n(327337);
function rL(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = r.useCallback(() => {
            (0, iS.xi)(t, [l]);
        }, [t, l]),
        o = (0, h.bG)([nw.A], () => nw.A.isBlocked(i)),
        c = r.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: i_._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    r.useEffect(() => {
        (0, iI.QF)({ ...c, viewName: iI.gN.SAFETY_WARNING_BANNER }), iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW });
    }, [c]);
    let d = r.useCallback(
            (e) => {
                (0, iI._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = r.useCallback(() => {
            (0, ig.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("79340"),
                        n.e("6627"),
                        n.e("70940"),
                        n.e("2033"),
                        n.e("82830"),
                        n.e("19959"),
                        n.e("20516"),
                    ]).then(n.bind(n, 131882));
                    return (n) => {
                        let { transitionState: s, onClose: r } = n;
                        return (0, a.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: i_._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: r,
                        });
                    };
                },
                { modalKey: rD.V },
            ),
                d(iI.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, i, l, d]),
        m = r.useCallback(() => {
            s(), d(iI.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [s, d]),
        g = r.useCallback(() => {
            s(), d(iI.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [s, d]),
        p = r.useCallback(() => {
            (0, ig.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70940"), n.e("84938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, a.jsx)(e, {
                        transitionState: l,
                        onBlock: m,
                        onBlockAndReport: g,
                        onCancel: () => {
                            s?.(), d(iI.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [m, g, i, t, d]);
    return (0, a.jsx)(iN, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: i_._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eD.intl.string(eD.t.ZzlB5p),
        description: eD.intl.string(eD.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eD.intl.string(eD.t.Qyu4UK), variant: "primary", onClick: u },
            ...(o ? [] : [{ text: eD.intl.string(eD.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var rk = n(74114);
function rP(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, h.cf)([nw.A], () => ({ isIgnored: nw.A.isIgnored(t) }), [t]),
        s = r.useCallback(() => {
            (0, iI._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: i_._j.STRANGER_DANGER,
                cta: iI.Wm.USER_MODAL_IGNORE,
            }),
                at.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]),
        o = r.useCallback(() => {
            (0, iI._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: i_._j.STRANGER_DANGER,
                cta: iI.Wm.USER_MODAL_UNIGNORE,
            }),
                at.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]);
    return (0, a.jsx)(iE.PQ, {
        title: eD.intl.string(eD.t.avyV7P),
        description: eD.intl.string(eD.t.naWE6W),
        buttonText: i ? eD.intl.string(eD.t["3SrzRT"]) : eD.intl.string(eD.t.avyV7P),
        onButtonPress: i ? o : s,
    });
}
function rO(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, h.cf)([nw.A], () => ({ isBlocked: nw.A.isBlocked(i) }), [i]),
        o = r.useCallback(() => {
            (0, iS.xi)(t, [l]);
        }, [t, l]),
        c = (0, rD.eT)(),
        d = r.useCallback(
            (e) => () => {
                at.A.blockUser(i, { location: rD.Rx }).then(() => {
                    o();
                }),
                    (0, iI._$)({ channelId: t, warningId: l, senderId: i, warningType: i_._j.STRANGER_DANGER, cta: e });
            },
            [o, t, l, i],
        );
    function u(e, s, r) {
        (0, ig.openModalLazy)(async () => {
            let { default: o } = await Promise.all([n.e("39722"), n.e("14788"), n.e("67554")]).then(n.bind(n, 219801));
            return (n) =>
                (0, a.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        r?.(),
                            (0, iI._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: i_._j.STRANGER_DANGER,
                                cta: s,
                            });
                    },
                });
        });
    }
    return (
        r.useEffect(() => {
            (0, iI.mO)(ed.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: i_._j.STRANGER_DANGER,
            }),
                iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, a.jsx)(iN, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: i_._j.STRANGER_DANGER,
            header: eD.intl.string(eD.t.iOkDpM),
            description: eD.intl.string(eD.t.ISUbcM),
            onDismiss: o,
            buttons: [
                {
                    text: eD.intl.string(eD.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        (function e() {
                            (0, ig.openModalLazy)(async () => {
                                let { default: s } = await Promise.all([n.e("57421"), n.e("82911"), n.e("47894")]).then(
                                    n.bind(n, 129493),
                                );
                                return (n) => {
                                    let { transitionState: r, onClose: o } = n;
                                    return (0, a.jsx)(s, {
                                        transitionState: r,
                                        onClose: o,
                                        channelId: t,
                                        warningId: l,
                                        senderId: i,
                                        description: eD.intl.string(eD.t.DJMZX6),
                                        safetyTipRows: c.map((e, t) =>
                                            (0, a.jsx)(ix.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    rP,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, a.jsx)(
                                                    iE.PQ,
                                                    {
                                                        title: eD.intl.string(eD.t["5QYPO2"]),
                                                        description: eD.intl.string(eD.t.G08MKu),
                                                        buttonText: eD.intl.string(eD.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            o(),
                                                                u(
                                                                    iI.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    iI.Wm.USER_MODAL_BLOCK_CANCEL,
                                                                    e,
                                                                );
                                                        },
                                                    },
                                                    "block-button",
                                                ),
                                            ],
                                        }),
                                    });
                                };
                            });
                        })(),
                            (0, iI._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: i_._j.STRANGER_DANGER,
                                cta: iI.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eD.intl.string(eD.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => u(iI.Wm.USER_BANNER_BLOCK_CONFIRM, iI.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var rG = n(306788),
    rU = n(340833),
    rw = n(913642),
    rF = n(453302),
    rH = n(670455),
    rB = n(791419);
function rV(e) {
    let { summary: t, channel: n } = e,
        l = (0, aM.bG)([lZ.A], () => lZ.A.summaryFeedback(t));
    function i(e, l) {
        e.stopPropagation(), (0, rF.A)({ summary: t, channel: n, rating: l });
    }
    let s = (0, Y.p)(
        null == l,
        {
            enter: { from: { opacity: 0 }, to: { opacity: 1 } },
            leave: { opacity: 0 },
            config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
        },
        "animate-always",
    );
    return (0, a.jsx)(a.Fragment, {
        children: s((e, t) =>
            t
                ? (0, a.jsx)("div", {
                      className: rB.RD,
                      children: (0, a.jsxs)(d.animated.div, {
                          style: e,
                          className: rB.GK,
                          children: [
                              (0, a.jsx)(eI.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: eD.intl.string(eD.t["5ZsiE9"]),
                              }),
                              (0, a.jsx)(ex.D, {
                                  onClick: (e) => i(e, rH.P0.GOOD),
                                  children: (0, a.jsx)(rw.A, { className: rB.O1, width: 12, height: 12 }),
                              }),
                              (0, a.jsx)(ex.D, {
                                  onClick: (e) => i(e, rH.P0.BAD),
                                  children: (0, a.jsx)(rU.A, { className: rB.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function rK(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aM.bG)([lZ.A], () => lZ.A.selectedSummary(l.id));
    if (null == s) return null;
    let r = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(rG.K, { size: "xs", color: "currentColor", className: rB.cR }), n.content],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(rV, { summary: s, channel: l }),
                      (0, a.jsx)(rG.K, { size: "xs", color: "currentColor", className: rB.Jq }),
                  ],
              })),
        (0, a.jsx)(
            n8.A,
            {
                className: c()(rB.aK, o ? rB.Ke : rB.hO),
                contentClassName: o ? rB.Ew : rB.rD,
                isUnread: r,
                id: r ? nX.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var rz = n(383233),
    rW = n(309010),
    r$ = n(927813),
    rq = n(675171),
    rJ = n(806621),
    rZ = n(636922),
    rY = n(591789);
let rX = r.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = r.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, a.jsx)(ex.D, {
        className: c()(rY.XI, { [rY.Lq]: t }),
        onClick: l,
        "aria-label": eD.intl.string(t ? eD.t.hC8KHg : eD.t.XBlaiC),
        children: (0, a.jsx)(eI.E, {
            variant: "text-sm/normal",
            color: "text-link",
            className: rY.Qq,
            children: t ? eD.intl.string(eD.t.hC8KHg) : eD.intl.string(eD.t.XBlaiC),
        }),
    });
});
var rQ = n(34337),
    r0 = n(330001),
    r1 = n(631576),
    r2 = n(750385),
    r3 = n(148355),
    r4 = n(263588);
let r7 = "749054660769218631";
function r8(e) {
    let { channel: t } = e,
        [n, l] = r.useState("");
    r.useEffect(() => {
        (0, r1.zk)("847199849233514549", !0);
    }, []);
    let i = (0, h.bG)(
            [eg.A, er.default],
            () =>
                !!ld()(eg.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== er.default.getId() && e.state === ed.cmJ.SENT && !(0, e3.A)(e)),
        ),
        s = (0, h.bG)([l1.default], () => l1.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        o = iK.Ay.useName(s) ?? eD.intl.string(eD.t.y1Wu2f),
        c = (0, h.bG)([r2.A], () => r2.A.getStickerById(r7)),
        d = r.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    (0, r0.W)({ channelId: t.id, source: "In-channel greet" }), await j.A.sendGreetMessage(t.id, r7);
                } catch (e) {
                    e.ok || 429 !== e.status || l(eD.intl.string(eD.t.Whhv4w));
                }
        }, [t.id, n]),
        u = eD.intl.formatToPlainString(eD.t.m0zYbV, { username: o }),
        m =
            null != n && "" !== n
                ? (0, a.jsx)(eI.E, {
                      className: r4.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, a.jsxs)("div", {
              className: r4.ft,
              children: [
                  (0, a.jsxs)(ex.D, {
                      className: null != n && "" !== n ? r4.AO : r4.Iq,
                      "aria-label": eD.intl.string(eD.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, a.jsx)(r3.A, { sticker: c, size: 24 }),
                          (0, a.jsx)(eI.E, { className: r4.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  m,
              ],
          })
        : (0, a.jsxs)("div", {
              className: r4.nj,
              children: [
                  (0, a.jsx)(r3.A, { sticker: c, size: 160, className: r4.Xr }),
                  (0, a.jsx)(eM.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: u,
                  }),
                  m,
              ],
          });
}
var r5 = n(900210),
    r9 = n(626360);
function r6(e) {
    return null != e && e.type === ed.TZK.MESSAGE && e.content.id === e.groupId;
}
function oe(e) {
    return (
        e.type === ed.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === ed.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === ed.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === ed.TZK.MESSAGE_GROUP_SUSPENDED_USER
    );
}
let ot = r.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, a.jsx)(rZ.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new rz.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: ed.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, a.jsx)(iM.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var on = n(859803);
let ol = { bottom: 16 },
    oi = (0, d.animated)(S);
function os(e) {
    var t;
    let n,
        l,
        i,
        {
            className: s,
            messageGroupSpacing: o,
            scrollerClassName: d,
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: C,
            uploads: x,
            hasUnreads: E,
            editingMessageId: S,
            fontSize: T,
            keyboardModeEnabled: M,
            filterAfterTimestamp: R,
            showingQuarantineBanner: D,
            hideSummaries: L = !1,
            jumpBarClassName: k,
            typingGradient: G,
            isGameInvitesPost: U,
        } = e,
        [w, F] = r.useState(lX.A.isAtBottom(m.id) ?? !1),
        H = (0, P.Ay)(m),
        V = (0, l4.I)(f, T),
        K = f ? V : Math.round(0.87 * V),
        z = Math.max(1, Math.round((K / 30) * 8)),
        W = r.useMemo(
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
                        throw Error(`generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${i}`);
                    let r = s / ed.hH7.FONT_SIZE_DEFAULT,
                        o = t ? lt.BP : lt.B5,
                        c = t ? lt.Uj : lt._G,
                        d = 0,
                        u = Array(n)
                            .fill(null)
                            .map(() => {
                                let e = ld().random(1, l);
                                return (d += a * r), (d += o * r), (d += (e - 1) * c * r), e;
                            }),
                        h = u.map((e, t) => t),
                        m = [];
                    for (; m.length < i; ) {
                        let e = { width: ld().random(140, 400), height: ld().random(100, 320) };
                        m.push([h.splice(ld().random(0, h.length - 1), 1)[0], e]), (d += e.height + lt.VF * r);
                    }
                    return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                })({ compact: f, messageGroups: K, groupRange: 4, attachments: z, fontSize: T, groupSpacing: o }),
            [f, K, z, T, o],
        ),
        $ = (function (e) {
            let {
                    messages: t,
                    channel: n,
                    compact: l,
                    hasUnreads: i,
                    focusId: s,
                    placeholderHeight: a,
                    canLoadMore: o = !0,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: d,
                    additionalMessagePadding: u = 0,
                } = e,
                { windowId: h } = r.useContext(ii.Ay),
                [m] = r.useState(
                    () =>
                        new id({
                            messages: t,
                            channel: n,
                            compact: l,
                            hasUnreads: i,
                            focusId: s,
                            placeholderHeight: a,
                            canLoadMore: o,
                            windowId: h,
                            handleScrollToBottom: c,
                            handleScrollFromBottom: d,
                            additionalMessagePadding: u,
                        }),
                );
            return (
                m.getSnapshotBeforeUpdate(s),
                r.useLayoutEffect(() =>
                    m.mergePropsAndUpdate({
                        messages: t,
                        channel: n,
                        compact: l,
                        hasUnreads: i,
                        focusId: s,
                        placeholderHeight: a,
                        canLoadMore: o,
                        windowId: h,
                        handleScrollToBottom: c,
                        handleScrollFromBottom: d,
                        additionalMessagePadding: u,
                    }),
                ),
                r.useLayoutEffect(() => () => m.cleanup(), [m]),
                m
            );
        })({
            messages: g,
            channel: m,
            compact: f,
            hasUnreads: E,
            focusId: S,
            placeholderHeight: W.totalHeight,
            canLoadMore: null == R,
            handleScrollToBottom: r.useCallback(() => F(!0), [F]),
            handleScrollFromBottom: r.useCallback(() => F(!1), [F]),
            additionalMessagePadding: 48,
        }),
        q = (0, O.sV)(m.guild_id, "message_stream"),
        J = (function (e) {
            let { scrollerRef: t, ...n } = e,
                l = (0, b.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                i = (0, b.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                s = r.useCallback(
                    (e) => {
                        if (!n.keyboardModeEnabled) return;
                        let l = t.current?.getScrollerNode()?.ownerDocument,
                            i = l?.querySelector(e);
                        null != i &&
                            t.current?.scrollIntoViewNode({ node: i, padding: 4 * nX.mZ, callback: () => i?.focus() });
                    },
                    [n.keyboardModeEnabled, t],
                ),
                a = r.useCallback(() => {
                    n.hasMoreAfter || ep._.dispatchToLastSubscribed(ed.jej.TEXTAREA_FOCUS);
                }, [n.hasMoreAfter]),
                o = (0, l9.Ay)({
                    id: e2.D,
                    preserveFocusPosition: !1,
                    setFocus: s,
                    isEnabled: n.keyboardModeEnabled && !n.isEditing,
                    scrollToStart: i,
                    scrollToEnd: l,
                    onNavigateNextAtEnd: a,
                }),
                c = r.useCallback(
                    (e) => {
                        let { atEnd: t = !1 } = e;
                        t ? o.focusLastVisibleItem() : o.focusFirstVisibleItem();
                    },
                    [o],
                );
            return (0, l2.Vo)({ event: ed.jej.FOCUS_MESSAGES, handler: c }), o;
        })({ scrollerRef: $.ref, isEditing: null != S, keyboardModeEnabled: M, hasMoreAfter: g.hasMoreAfter }),
        Z = (0, h.bG)([lq.A], () =>
            tu.A.can(ed.xBc.READ_MESSAGE_HISTORY, m) ? null : lq.A.getViewingRolesTimestamp(m.getGuildId()),
        ),
        {
            channelStreamMarkup: Y,
            newMessagesBar: X,
            jumpToPresentBar: Q,
            forumPostActionBar: el,
            pinnedFirstMessage: ei,
            safetyWarningBanner: es,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    channel: s,
                    messages: o,
                    unreadCount: c,
                    showNewMessagesBar: d,
                    messageDisplayCompact: u,
                    channelStream: m,
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
                I = l1.default.getCurrentUser();
            function b() {
                return A.isInitialized() || o.ready;
            }
            let T = (0, rJ.r)(s),
                M = o.length > 0 && o.first()?.isFirstMessageInForumPost(s),
                R = (0, y.cI)(s),
                D = (0, h.bG)([lZ.A], () => lZ.A.shouldShowTopicsBar() && !E),
                L = (0, rk.l)(s.id),
                k = (0, rR.j)(s.id, rD.Rx),
                P = (0, ih.E)(s.id),
                O = (0, rq.A)(),
                G = (function (e, t) {
                    if (e.isDM() && null != t)
                        if (t.type === i_._j.STRANGER_DANGER)
                            return (0, a.jsx)(rO, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else if (t.type === i_._j.LIKELY_ATO)
                            return (0, a.jsx)(iT, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else return (0, a.jsx)(rL, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                    return null;
                })(s, L ?? k ?? P),
                U = !s.isForumPost() || M || _ ? null : (0, a.jsx)(rh, { postId: s.id }),
                { firstMessage: w, loaded: F } = (0, lW.n5)(s, _),
                H =
                    _ && F
                        ? (0, a.jsx)(
                              rv,
                              {
                                  compact: u,
                                  channel: s,
                                  message: w,
                                  id: null != w ? (0, e2.j)(s.id, w.id) : `deleted-${s.id}`,
                              },
                              w?.id ?? `deleted-${s.id}`,
                          )
                        : null,
                B = (0, ik.A)(s.id),
                V = (0, aJ.W1)(s);
            (t = eY.Sf.useSetting()),
                (n = (0, aM.bG)([N.Ay], () => N.Ay.useReducedMotion)),
                r.useEffect(() => {
                    function e(e) {
                        let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                        a ||
                            r !== aU.v.BURST ||
                            !t ||
                            n ||
                            (0, ne.on)({ channelId: i, messageId: l, emoji: s, key: r5.W.EXTERNAL });
                    }
                    return (
                        v.h.subscribe("MESSAGE_REACTION_ADD", e),
                        () => {
                            v.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                        }
                    );
                }, [t, n]);
            let K = null,
                z = [],
                W = m.map((e, t) => {
                    if (e.type === ed.TZK.DIVIDER) {
                        let n = null != e.unreadId;
                        return null != C
                            ? null
                            : e.isConversationChannelHeader
                              ? (0, a.jsx)(iD, { channel: s, scrollManager: A }, `conversation-${e.contentKey ?? t}`)
                              : e.isSummaryDivider
                                ? (0, a.jsx)(rK, {
                                      index: t,
                                      item: e,
                                      channel: s,
                                      isBeforeGroup: null == e.content && r6(m[t + 1]),
                                  })
                                : (0, a.jsx)(
                                      n8.A,
                                      {
                                          isUnread: n,
                                          isBeforeGroup: null == e.content && r6(m[t + 1]),
                                          id: n ? nX.q4 : void 0,
                                          itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                          children: e.content,
                                      },
                                      `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                  );
                    }
                    if (e.type === ed.TZK.FORUM_POST_ACTION_BAR)
                        return (0, a.jsx)(
                            rh,
                            {
                                parentChannelId: s.parent_id,
                                postId: s.id,
                                isLastItem: t + 1 === m.length,
                                isFirstMessage: !0,
                            },
                            `forum-post-action-bar-${s.id}`,
                        );
                    if (oe(e)) {
                        let t,
                            n = !0;
                        return (
                            e.type === ed.TZK.MESSAGE_GROUP_BLOCKED
                                ? (t = eD.t["+FcYM/"])
                                : e.type === ed.TZK.MESSAGE_GROUP_IGNORED
                                  ? (t = eD.t["VFWjc+"])
                                  : e.type === ed.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                    ? ((t = eD.t.rHRovo), (n = !1))
                                    : (t = eD.t.xfkfTK),
                            (0, a.jsx)(
                                le,
                                {
                                    unreadId: nX.q4,
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
                    if (null != C && C > e.content.timestamp.getTime() * r$.A.Millis.SECOND) return;
                    e.type === ed.TZK.MESSAGE && null == K && (K = e);
                    let n = e.groupId === K?.groupId ? K.content.id : e.groupId,
                        l = V && e.content.isFirstMessageInForumPost(s),
                        i = e.type === ed.TZK.THREAD_STARTER_MESSAGE ? nQ : n1;
                    return (0, a.jsx)(
                        i,
                        {
                            compact: u && !l,
                            channel: s,
                            message: e.content,
                            groupId: n,
                            flashKey: e.flashKey,
                            id: (0, e2.j)(s.id, e.content.id),
                            isLastItem: t >= m.length - 1,
                            renderContentOnly: B || l,
                        },
                        e.content.id,
                    );
                });
            z.push(...W);
            let $ = m[m.length - 1];
            if (
                (null != I &&
                    g.forEach((e, t) => {
                        let n = 0 === t && (0, en.l)(s, $, new rz.Ay({ type: ed.lAJ.DEFAULT, author: I }));
                        z.push(
                            (0, a.jsx)(
                                ot,
                                { file: e, channel: s, user: I, isGroupStart: n, compact: u },
                                `upload-${e.id}`,
                            ),
                        );
                    }),
                o.hasMoreBefore && null == C)
            ) {
                o.length > 0 &&
                    (o.length > 1 &&
                        (function (e) {
                            let t = !1;
                            for (let n of e)
                                if (n.type !== ed.TZK.DIVIDER) {
                                    if (!oe(n)) return !1;
                                    t = !0;
                                }
                            return t;
                        })(m) &&
                        z.unshift((0, a.jsx)(rX, { loading: o.loadingMore, onClick: () => p() }, "load-more-before")),
                    z.unshift((0, a.jsx)("div", { style: { height: nX.N0, flex: "0 0 auto" } }, "buffer")));
                let { useReducedMotion: e } = N.Ay;
                ((e && b()) || !e) && z.unshift((0, a.jsx)(l8, { compact: u, ...f }, "has-more"));
            }
            if (
                ((o.hasMoreBefore && null == C) ||
                    _ ||
                    z.unshift((0, a.jsx)(aE, { channel: s, showingBanner: x }, "empty-message")),
                o.hasMoreAfter && z.push((0, a.jsx)(l8, { compact: u, ...f }, "has-more-after")),
                !x && T && b() && z.push((0, a.jsx)(r8, { channel: s })),
                c > 0 && d && b())
            ) {
                let e,
                    t,
                    n = lQ.Ay.getOldestUnreadTimestamp(s.id),
                    i = 0 !== n ? n : et.default.extractTimestamp(s.id),
                    r = (0, ee.ro)(new Date(), new Date(i));
                if (
                    (lQ.Ay.isEstimated(s.id)
                        ? ((e = r ? eD.t.wvtbbG : eD.t.tHqbtg), (t = eD.t.vaPWFe))
                        : ((e = r ? eD.t["BctFH/"] : eD.t["3wXb9P"]), (t = eD.t["4H8ldG"])),
                    R && (0, y.Kc)(s) && O.includes(r9.i.SUMMARIES))
                ) {
                    let n = lQ.Ay.ackMessageId(s.id),
                        r = (function (e, t) {
                            let n = lZ.A.summaries(e) ?? [],
                                l = 0;
                            for (let e of n) et.default.compare(e.endId, t) > 0 && (l += 1);
                            return l;
                        })(s.id, lQ.Ay.getOldestUnreadMessageId(s.id));
                    if (
                        ((0, iu.zV)(ed.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                            num_unread_summaries: r,
                            num_unread_messages: c,
                            last_ack_message_id: n,
                            summaries_enabled_by_user: D,
                            summaries_enabled_for_channel: (0, y.pk)(s),
                        }),
                        (0, y.pk)(s))
                    ) {
                        let n = D ? eD.intl.format(t, { count: c }) : eD.intl.format(e, { count: c, timestamp: i });
                        if (D) {
                            let e =
                                r > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(eI.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eD.intl.format(t, { count: c }),
                                              }),
                                              (0, a.jsx)(rT.A, {
                                                  style: { paddingLeft: 8, paddingRight: 8 },
                                                  height: 4,
                                                  width: 4,
                                              }),
                                              (0, a.jsx)(eI.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eD.intl.format(eD.t.CBftDc, { count: r }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(eI.E, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: n,
                                      });
                            l = (0, a.jsx)(rQ.OZ, { scrollManager: A, content: e, channel: s });
                        } else {
                            let e = (0, a.jsx)("div", {
                                style: { display: "flex", textTransform: "none", alignItems: "center" },
                                children:
                                    r > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eD.intl.format(t, { count: c }),
                                                  }),
                                                  (0, a.jsx)(rT.A, {
                                                      style: { paddingLeft: 8, paddingRight: 8 },
                                                      height: 4,
                                                      width: 4,
                                                  }),
                                                  (0, a.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eD.intl.format(eD.t.CBftDc, { count: r }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(eI.E, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: n,
                                          }),
                            });
                            l = (0, a.jsx)(rQ.GN, { content: e, channelId: s.id });
                        }
                    }
                } else
                    O.includes(r9.i.NEW_MESSAGES) &&
                        (l = (0, a.jsx)(rQ.GN, {
                            content: eD.intl.format(e, { count: c, timestamp: i }),
                            channelId: s.id,
                        }));
            }
            if (
                (null == l &&
                    (0, y.pk)(s) &&
                    D &&
                    O.includes(r9.i.SUMMARIES) &&
                    (l = (0, a.jsx)(rQ.UK, { channel: s, scrollManager: A })),
                o.error)
            )
                i = (0, a.jsx)(rQ.Ez, {
                    loading: o.loadingMore,
                    onClick: () => {
                        var e;
                        return (
                            (e = s.id),
                            void j.A.fetchMessages({
                                channelId: e,
                                limit: (0, l4.h)("renderStream.reload"),
                                truncate: !0,
                            })
                        );
                    },
                    className: S,
                });
            else if (o.hasMoreAfter && b()) {
                let { jumpReturnTargetId: e } = o;
                i =
                    o.loadingMore && o.jumpedToPresent
                        ? (0, a.jsx)(rQ.Ab, { className: S })
                        : null != e
                          ? (0, a.jsx)(rQ.Ab, {
                                type: rQ.ks.REPLY,
                                onClick: () => {
                                    j.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                },
                                className: S,
                            })
                          : (0, a.jsx)(rQ.Ab, {
                                onClick: () => {
                                    let e;
                                    return (
                                        j.A.jumpToPresent(s.id, (0, l4.h)("renderStream.jumpToPresent")),
                                        (e = rW.Ay.getChannelId()),
                                        void (s.id === e && (0, rM.iN)(s.id))
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
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: C,
            uploads: x,
            loadMore: $.loadMore,
            scrollManager: $,
            specs: W,
            filterAfterTimestamp: R ?? Z,
            showingQuarantineBanner: D,
            hideSummaries: L,
            jumpToPresent: function () {
                g.hasPresent()
                    ? $.ref.current?.scrollToBottom({ animate: !N.Ay.useReducedMotion })
                    : j.A.jumpToPresent(m.id, V);
            },
            jumpBarClassName: k,
            isGameInvitesPost: U,
        });
    (t = $.ref),
        (n = r.useCallback(() => t.current?.scrollToBottom(), [t])),
        (l = r.useCallback(() => t.current?.scrollPageUp({ animate: !N.Ay.useReducedMotion }), [t])),
        (i = r.useCallback(() => t.current?.scrollPageDown({ animate: !N.Ay.useReducedMotion }), [t])),
        (0, l2.Vo)({ event: ed.jej.SCROLLTO_PRESENT, handler: n }),
        (0, l2.Vo)({ event: ed.jej.SCROLL_PAGE_UP, handler: l }),
        (0, l2.Vo)({ event: ed.jej.SCROLL_PAGE_DOWN, handler: i });
    let ea = (0, _.R7)(),
        { ref: er, ...eo } = (0, u.LT)(J),
        ec = r.useRef(null),
        eu = r.useMemo(() => ({ ref: ec, padding: ol }), []),
        eh = (0, b.A)((e) => {
            let t = e?.getScrollerNode() ?? null;
            ($.ref.current = e), (er.current = t), (ec.current = t);
        }),
        em = (0, h.bG)([lY.A], () => {
            let e = lY.A.settings.appearance?.clientThemeSettings;
            return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
        }),
        eg = (0, l$.Q)(),
        eA = em || null != eg,
        ef = r.useMemo(() => (G ? (w ? on.gA : on.ru) : on.Zd), [G, w]),
        eC = r.useMemo(() => (G ? (w ? on.cz : on.XF) : on.U6), [G, w]);
    return (0, a.jsxs)(u.hD, {
        navigator: J,
        children: [
            ei,
            null != es && es,
            (0, a.jsxs)("div", {
                className: c()(on.Og, s, `group-spacing-${o}`),
                children: [
                    null == es && X,
                    (0, a.jsxs)(B, {
                        channel: m,
                        scrollManager: $,
                        children: [
                            (0, a.jsx)(oi, {
                                ref: eh,
                                customTheme: !0,
                                className: c()(d, on.XG, eA ? eC : void 0),
                                contentClassName: on.gT,
                                onResize: $.handleResize,
                                onScroll: $.handleScroll,
                                onMouseDown: $.handleMouseDown,
                                onMouseUp: $.handleMouseUp,
                                ...ea,
                                tabIndex: -1,
                                role: "group",
                                children: (0, a.jsxs)(I.W.Provider, {
                                    value: eu,
                                    children: [
                                        el,
                                        (0, a.jsxs)("ol", {
                                            className: on.bv,
                                            "aria-label": eD.intl.formatToPlainString(eD.t.XarRiL, {
                                                channelName: H ?? "",
                                            }),
                                            ...eo,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: on.$4,
                                                    id: "messagesNavigationDescription",
                                                    "aria-hidden": !0,
                                                    children: eD.intl.string(eD.t["Spb3s/"]),
                                                }),
                                                Y,
                                                (0, a.jsx)("div", {
                                                    className: c()({
                                                        [on.lB]: !D,
                                                        [on.Ie]: 0 === g.length && !g.loadingMore,
                                                        [on.Fb]:
                                                            1 === g.length &&
                                                            !g.loadingMore &&
                                                            m.isForumPost() &&
                                                            g.first()?.isFirstMessageInForumPost(m),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            eA ? null : (0, a.jsx)("div", { className: ef }),
                            Q,
                            q && (0, a.jsx)(lK, { channel: m, scrollManager: $ }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let oa = r.memo(function (e) {
    let {
            channel: t,
            showingQuarantineBanner: n,
            hideSummaries: l = !1,
            forceCompact: i = !1,
            forceCozy: s = !1,
            typingGradient: o = !1,
            ...c
        } = e,
        {
            canManageMessages: d,
            permissionVersion: u,
            canChat: m,
        } = (function (e) {
            let t = e.getGuildId(),
                n = (0, h.bG)([td.A], () => null == t || td.A.canChatInGuild(t), [t]),
                { canManageMessages: l, permissionVersion: i } = (0, h.cf)(
                    [tu.A],
                    () => ({
                        canManageMessages: tu.A.can(ed.xBc.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? tu.A.getGuildVersion(t) : null,
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
            let e = eY.hH.useSetting(),
                t = eY.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: l,
                    keyboardModeEnabled: i,
                } = (0, h.cf)([N.Ay], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = N.Ay;
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
                l = (0, h.bG)([eg.A], () => eg.A.getMessages(e.id), [e.id]),
                i = (0, h.bG)([lQ.Ay], () => lQ.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                { enabled: s } = Q.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                a = l1.default.getUser(er.default.getId())?.hasFlag(ed.nhx.SPAMMER) ?? !1,
                o = (0, y.cI)(e),
                c = (0, lz.A)("use_topic_dividers_in_chat"),
                d = (0, h.yK)([lZ.A], () => (o && c ? (lZ.A.summaries(e.id) ?? []) : []), [o, e.id, c]),
                u = (0, h.bG)([lZ.A], () => (o ? lZ.A.selectedSummary(e.id) : null), [o, e.id]),
                m = (0, O.sV)(e.guild_id, "message_stream"),
                g = (0, h.bG)([G.A], () => (m ? G.A.getSelectedConversation(e.id) : null), [m, e.id]),
                p =
                    ((t = l),
                    (n = r.useMemo(() => {
                        let e = new Set();
                        return (
                            t.forEach((t) => {
                                null != t.applicationId && null == t.application && e.add(t.applicationId);
                            }),
                            Array.from(e)
                        );
                    }, [t])),
                    (0, k.A)(n));
            !(function (e, t) {
                let [n, l] = (function (e, t) {
                    let [n, l] = r.useMemo(
                            () =>
                                (function (e, t) {
                                    if (!t.isPrivate()) return [L, D];
                                    let n = e.filter((e) => e.application?.id != null && e.activity?.party_id != null),
                                        l = n.map((e) => e.id);
                                    return [n, l];
                                })(e, t),
                            [e, t],
                        ),
                        i = (0, h.yK)([M.A], () => {
                            let e = [];
                            return (
                                n.forEach((t) => {
                                    null !=
                                        M.A.findActivity(
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
                        r.useMemo(
                            () =>
                                (function (e, t) {
                                    if (0 === e.length) return R;
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
                r.useEffect(() => {
                    for (let e of l)
                        T.A.isSubscribed(e) || v.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                }, [l]);
            })(l, e);
            let A = (0, lW.YG)(e),
                f = r.useMemo(
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
                                p = null != a ? et.default.extractTimestamp(a) : null,
                                A = null;
                            return (
                                s.forEach((e) => {
                                    var f, C;
                                    let x, E, S;
                                    if (u && e.isFirstMessageInForumPost(i)) return;
                                    if (null != o && o.length > 0) {
                                        let t = et.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o?.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = et.default.extractTimestamp(o[e].startId),
                                                l = et.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (A === o[e].id) break;
                                                m.push({
                                                    type: ed.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (A = o[e].id);
                                                break;
                                            }
                                        }
                                    }
                                    let _ = (0, ee.i$)(e.timestamp, "LL");
                                    _ !== t &&
                                        null == A &&
                                        (m.push({ type: ed.TZK.DIVIDER, content: _, contentKey: _ }), (t = _));
                                    let I = m[m.length - 1],
                                        j = null,
                                        y = (0, el.kf)(e);
                                    g = g || y;
                                    let b = em(i, e, y && r);
                                    (null !== b &&
                                        ([j, I] =
                                            ((E = f = I),
                                            null == f || f.type !== b
                                                ? ((x = { type: b, content: [], key: e.id }), m.push(x))
                                                : (E = (x = f).content[x.content.length - 1]),
                                            [x, E])),
                                    a === e.id && null != p)
                                        ? (null != I && I.type === ed.TZK.DIVIDER
                                              ? (I.unreadId = e.id)
                                              : null !== j
                                                ? ((C = j),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      C.content.push({ type: ed.TZK.DIVIDER, unreadId: e.id }),
                                                  (C.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  m.push({ type: ed.TZK.DIVIDER, unreadId: e.id }),
                                          (p = null))
                                        : null != p &&
                                          et.default.extractTimestamp(e.id) > p &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              m.push({ type: ed.TZK.DIVIDER, unreadId: e.id }),
                                          (p = null));
                                    let N =
                                        null !=
                                        (S = (function (e, t) {
                                            if (eu.get(t.id) === e.id) return eh(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, es.Lt)(e.flags, ed.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === er.default.getId() ||
                                                null != e.activity ||
                                                (0, es.Lt)(t.recipientFlags ?? 0, ei.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                eu.has(t.id)
                                            )
                                                return null;
                                            let n = eh(e, t.id);
                                            eu.set(t.id, e.id);
                                            let l = (0, es.lA)(
                                                t.recipientFlags ?? 0,
                                                ei.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return ea.A.updatePrivateChannelRecipientFlags(t.id, l), n;
                                        })(e, i))
                                            ? { message: S, position: "before" }
                                            : null;
                                    null != N &&
                                        "before" === N.position &&
                                        m.push({ type: ed.TZK.MESSAGE, content: N.message, groupId: N.message.id });
                                    let v = I?.type === ed.TZK.MESSAGE ? l : I;
                                    (0, en.l)(i, v, e) && (n = e.id);
                                    let T = {
                                        type:
                                            e.type === ed.lAJ.THREAD_STARTER_MESSAGE
                                                ? ed.TZK.THREAD_STARTER_MESSAGE
                                                : ed.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = T);
                                    let { jumpSequenceId: M, jumpFlash: R, jumpTargetId: D } = s;
                                    R && e.id === D && null != M && (T.flashKey = M),
                                        s.jumpTargetId === e.id && (T.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            m.push({
                                                type: ed.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        h &&
                                            null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            m.push({
                                                type: ed.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationChannelHeader: !0,
                                            }),
                                        null !== j
                                            ? (j.content.push(T), T.jumpTarget && (j.hasJumpTarget = !0))
                                            : m.push(T),
                                        e.isFirstMessageInForumPost(i) &&
                                            m.push({ type: ed.TZK.FORUM_POST_ACTION_BAR }),
                                        null != N &&
                                            "after" === N.position &&
                                            m.push({ type: ed.TZK.MESSAGE, content: N.message, groupId: N.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            m.push({ type: ed.TZK.DIVIDER, contentKey: c.endId, isSummaryDivider: !0 });
                                }),
                                g && (0, el.iJ)(i) && Q.trackExposure({ location: "416cc9_1" }),
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
                            isTopicalNavEnabled: m,
                        }),
                    [l, e, i, s, d, u, g, p, a, A, m],
                );
            return {
                messages: l,
                channelStream: f,
                oldestUnreadMessageId: i,
                editingMessageId: (0, h.bG)([e0.A], () => e0.A.getEditingMessage(e.id)?.id),
                isGameInvitesPost: A,
            };
        })(t);
    return (0, a.jsx)(lJ.Bs.Provider, {
        value: (0, l3.A)(f, d),
        children: (0, a.jsx)(l5.t, {
            children: (0, a.jsx)(os, {
                ...c,
                messageGroupSpacing: g,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (i || A),
                messages: x,
                channelStream: E,
                permissionVersion: u,
                uploads: (0, h.bG)([l0.A], () => l0.A.getFiles(t.id), [t]),
                unreadCount: (0, h.bG)([lQ.Ay], () => lQ.Ay.getUnreadCount(t.id), [t]),
                hasUnreads: null != S,
                canChat: m,
                editingMessageId: _,
                fontSize: p,
                keyboardModeEnabled: C,
                showingQuarantineBanner: n,
                hideSummaries: l,
                typingGradient: o,
                isGameInvitesPost: I,
            }),
        }),
    });
});
