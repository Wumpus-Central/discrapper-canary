let l, i;
n.d(t, { A: () => og });
var s,
    a = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(837381),
    u = n(17928),
    h = n(446837),
    m = n(559106),
    g = n(448539),
    p = n(536804),
    A = n(789279),
    f = n(584648),
    C = n(6095);
let x = "u" < typeof window ? h.t : (window.ResizeObserver ?? h.t),
    E =
        ((s = c()(C.qZ, C.Vl)),
        (l = new Map()),
        (i =
            "u" < typeof document
                ? g.F
                : new x((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          l.get(t)?.(e);
                      });
                  })),
        function (e) {
            let {
                    children: t,
                    className: n,
                    onResize: o,
                    contentClassName: d,
                    onScroll: u,
                    dir: h = "ltr",
                    fade: x = !1,
                    customTheme: E = !1,
                    style: S,
                    ref: I,
                    ...y
                } = e,
                _ = r.useRef(null),
                j = r.useRef(null),
                [v, b] = r.useState(!1),
                { scrollerRef: N, getScrollerState: T } = (0, p.A)(),
                M = (0, A.A)(N);
            r.useImperativeHandle(
                I,
                () => ({
                    getScrollerNode: () => N.current,
                    isScrolling: () => null != _.current,
                    getScrollerState: T,
                    ...(0, f.A)(N, T, M),
                }),
                [N, T, M],
            );
            let R = r.useCallback(
                (e) => {
                    (null == _.current ? b(!0) : clearTimeout(_.current),
                        (_.current = setTimeout(() => {
                            ((_.current = null), b(!1));
                        }, 200)),
                        null != u && u(e));
                },
                [u],
            );
            return (
                r.useEffect(() => () => clearTimeout(_.current), []),
                (0, g.A)({ ref: N, key: "container", onUpdate: o, resizeObserver: i, listenerMap: l }),
                (0, g.A)({ ref: j, key: "content", onUpdate: o, resizeObserver: i, listenerMap: l }),
                (0, a.jsx)("div", {
                    ref: N,
                    className: c()(n, { [C.Rv]: x, [C.D8]: E, [s]: !0, [C.fs]: !0, [C.qw]: v && x }),
                    style: S,
                    dir: h,
                    onScroll: R,
                    ...y,
                    children: (0, a.jsx)(m.xp, {
                        containerRef: j,
                        children: (0, a.jsxs)("div", {
                            ref: j,
                            className: c()(d, C.Qs),
                            children: [t, v && (0, a.jsx)("div", { className: C.X3 })],
                        }),
                    }),
                })
            );
        });
var S = n(312138),
    I = n(737992),
    y = n(148494),
    _ = n(432371),
    j = n(765548),
    v = n(775602);
n(321073);
var b = n(73153),
    N = n(911411),
    T = n(290863);
let M = [],
    R = [],
    D = [];
var k = n(717117),
    L = n(429913),
    P = n(47167),
    O = n(147248),
    G = n(623562),
    U = n(727011),
    w = n(120570),
    F = n(319365);
let H = r.createContext(null);
function B(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = r.useRef(null),
        { isFocused: s, setIsFocused: o } = (0, F.D7)(),
        c = r.useCallback(
            async (e, l) => {
                (s && w.A.getSelectedConversationId(t.id) === e) ||
                    (await new Promise((e) => {
                        let t = () => {
                            (n.removeScrollCompleteCallback(t), e());
                        };
                        (n.addScrollCompleteCallback(t), l());
                    }),
                    e === w.A.getSelectedConversationId(t.id) &&
                        (o(!0), U.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, n, o, s],
        ),
        d = r.useCallback(
            async (e, n) => {
                let { cacheType: l } = n;
                await c(e, () => (0, G.xI)(t.id, e, { cacheType: l }));
            },
            [t.id, c],
        ),
        u = r.useCallback(async () => {
            let e = w.A.getConversation(t.id);
            null != e &&
                (await c(e.id, () => y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 })));
        }, [t.id, c]),
        h = r.useMemo(
            () => ({ bannerMeasurementRef: i, selectAndFocusConversation: d, refocusSelectedConversation: u }),
            [i, d, u],
        );
    return (0, a.jsx)(H.Provider, { value: h, children: l });
}
function K() {
    let e = r.useContext(H);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
var V = n(828488);
let z = r.createContext(null);
function W() {
    let e = r.useContext(z);
    if (null == e) throw Error("useConversationFocusDismiss must be used inside <ConversationFocusDismissProvider>");
    return e;
}
function $(e) {
    let { children: t } = e,
        [n, l] = r.useState(null),
        i = r.useMemo(() => ({ dismissReason: n, setDismissReason: l }), [n, l]);
    return (0, a.jsx)(z.Provider, { value: i, children: t });
}
var q = n(941143),
    J = n(661531),
    Z = n(602853),
    X = n(717421),
    Y = n(689175),
    Q = n(866323),
    ee = n(475743),
    et = n(448761);
let en = (0, n(600975).C)({
    kind: "user",
    id: "2021-12_inferno_spam_redaction",
    label: "Inferno Spam Redaction",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Allow guild channel messages from spammers to be collapsed", config: { enabled: !0 } },
    ],
});
var el = n(58703),
    ei = n(935208),
    es = n(857069),
    ea = n(694318);
n(938796);
var er = n(253506),
    eo = n(665260),
    ec = n(704844),
    ed = n(280450),
    eu = n(320095),
    eh = n(963852),
    em = n(652215);
let eg = new Map();
function ep(e, t) {
    let n = (0, eh.Ay)({
            channelId: t,
            type: em.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: em.pr7.EPHEMERAL,
            state: em.cmJ.SENT,
        }),
        l = (0, eu.rh)(n);
    return ((l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l);
}
function eA(e, t, n) {
    if (et.M.NON_COLLAPSIBLE.has(t.type));
    else if (t.hasFlag(em.pr7.HIDDEN_SUSPENDED_USER)) return em.TZK.MESSAGE_GROUP_SUSPENDED_USER;
    else if (t.blocked) return em.TZK.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return em.TZK.MESSAGE_GROUP_IGNORED;
    else if ((0, ea.iJ)(e) && n) return em.TZK.MESSAGE_GROUP_SPAMMER;
    return null;
}
var ef = n(232835),
    eC = n(625494),
    ex = n(446576),
    eE = n(26430),
    eS = n(866665),
    eI = n(939249),
    ey = n(53788),
    e_ = n(265872),
    ej = n(148795),
    ev = n(834730),
    eb = n(181041),
    eN = n(297264),
    eT = n(103557),
    eM = n(858899),
    eR = n(789645),
    eD = n(821609),
    ek = n(361249),
    eL = n(105292),
    eP = n(128904);
let eO = [
    { value: "not_useful", label: ek.default.HcSKAh },
    { value: "off_topic", label: ek.default["1cHvxU"] },
    { value: "missing_messages", label: ek.default.ZAJcv4 },
    { value: "misleading_title", label: ek.default.omVRS3 },
    { value: "inappropriate", label: ek.default.dRzDTy },
    { value: "too_cluttered", label: ek.default.wb6DmY },
    { value: "hard_to_use", label: ek.default.NUVZB6 },
    { value: "too_old", label: ek.default.kAFQd3 },
    { value: "other", label: ek.default.OSgZpc },
];
function eG(e) {
    let { channel: t, conversation: n, isFocusMode: l, onClose: i } = e,
        [s, o] = r.useState(() => new Set()),
        [d, u] = r.useState(""),
        h = s.size > 0,
        m = s.has("other"),
        g = r.useCallback((e) => {
            o((t) => {
                let n = new Set(t);
                return (n.has(e) ? n.delete(e) : n.add(e), n);
            });
        }, []),
        p = r.useCallback(() => {
            (U.X.trackThumbsDownReasonSelected({
                channelId: t.id,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && d.length > 0 ? d : null,
            }),
                (0, eM.P0)({ text: eL.intl.string(ek.default.xrEgG0), variant: "success" }),
                i());
        }, [t.id, n.id, l, s, d, m, i]);
    return (0, a.jsxs)("div", {
        className: eP.oO,
        children: [
            (0, a.jsxs)("div", {
                className: eP.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: eP.TK,
                        children: [
                            (0, a.jsx)(eN.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eL.intl.string(ek.default.C3suOL),
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                className: eP.VA,
                                children: eL.intl.string(ek.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(eI.D, {
                        className: eP.b,
                        "aria-label": eL.intl.string(ek.default.HLYa5G),
                        onClick: i,
                        children: (0, a.jsx)(eR.P, { size: "xs", color: J.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: eP.Ip,
                role: "group",
                "aria-label": eL.intl.string(ek.default["Lp/NZo"]),
                children: eO.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, a.jsx)(
                        eI.D,
                        {
                            className: c()(eP.jw, s.has(t) && eP.gM),
                            onClick: () => g(t),
                            children: (0, a.jsx)(ev.E, {
                                variant: "text-md/normal",
                                color: "text-strong",
                                children: eL.intl.string(n),
                            }),
                        },
                        t,
                    );
                }),
            }),
            m &&
                (0, a.jsxs)("div", {
                    className: eP.Su,
                    children: [
                        (0, a.jsx)(eT.f, {
                            value: d,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eL.intl.string(ek.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, a.jsxs)("div", {
                            className: eP.rP,
                            children: [
                                (0, a.jsx)(ev.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: eL.intl.string(ek.default.xZzxfK),
                                }),
                                (0, a.jsxs)(ev.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: [d.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsx)(eD.$, {
                text: eL.intl.string(ek.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eU = n(808379);
function ew(e) {
    return c()(eU.FW, { [eU.Jl]: "positive" === e, [eU.vF]: "critical" === e });
}
function eF(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [o, d] = r.useState(!1),
        h = r.useRef(null),
        m = (0, u.bG)([eb.A], () => eb.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: g } = (0, F.D7)(),
        p = r.useCallback(() => d(!1), []),
        A = r.useCallback(() => {
            ((0, G.oq)(t.id, n.id, "up"),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: g }));
        }, [t.id, n.id, g]),
        f = r.useCallback(() => {
            ((0, G.oq)(t.id, n.id, "down"),
                d(!0),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: g }));
        }, [t.id, n.id, g]),
        C = r.useCallback(
            () => (0, a.jsx)(eG, { channel: t, conversation: n, isFocusMode: g, onClose: p }),
            [t, n, g, p],
        ),
        x = g ? ex.g : eE._,
        E = g ? eL.intl.string(ek.default.pDD8E1) : eL.intl.string(ek.default["o+pmGy"]),
        S = g ? eL.intl.string(ek.default.XaJ3qC) : eL.intl.string(ek.default.pU5Dut),
        I = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eS.m, {
                    text: eL.intl.string(ek.default.sBwxOY),
                    children: (0, a.jsx)(eI.D, {
                        "aria-label": eL.intl.string(ek.default.vjJjMc),
                        onClick: A,
                        className: ew("up" === m ? "positive" : void 0),
                        children: (0, a.jsx)(ey.G, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
                (0, a.jsx)(e_.Y, {
                    targetElementRef: h,
                    shouldShow: o,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: e_.Y.Animation.FADE,
                    onRequestClose: p,
                    renderPopout: C,
                    children: () =>
                        (0, a.jsx)("div", {
                            ref: h,
                            children: (0, a.jsx)(eS.m, {
                                text: eL.intl.string(ek.default.tbhdqW),
                                children: (0, a.jsx)(eI.D, {
                                    "aria-label": eL.intl.string(ek.default.TGK5M0),
                                    onClick: f,
                                    className: ew("down" === m ? "critical" : void 0),
                                    children: (0, a.jsx)(ej.d, { color: "currentColor", size: "refresh_sm" }),
                                }),
                            }),
                        }),
                }),
                (0, a.jsx)(eS.m, {
                    text: E,
                    children: (0, a.jsx)(eI.D, {
                        "aria-label": S,
                        onClick: s,
                        className: ew(),
                        children: (0, a.jsx)(x, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, a.jsxs)("div", {
        className: c()(eU.zr, { [eU.e8]: i }),
        children: [
            (0, a.jsx)(ev.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: eU.DD,
                children: n.title,
            }),
            (0, a.jsx)("div", { className: c()(eU.o1, { [eU.jF]: l }), children: I }),
        ],
    });
}
var eH = n(599735);
function eB(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = r.useCallback(() => {
            l("return");
        }, [l]);
    return (0, a.jsx)("div", {
        className: eH.A,
        children: (0, a.jsx)(eF, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eK = n(284009),
    eV = n.n(eK),
    ez = n(256331),
    eW = n(93474),
    e$ = n(384231),
    eq = n(959698),
    eJ = n(853145),
    eZ = n(9842),
    eX = n(69282),
    eY = n(976860),
    eQ = n(253932),
    e0 = n(734057),
    e1 = n(540999),
    e2 = n(580745),
    e3 = n(521427),
    e4 = n(375901),
    e7 = n(143413),
    e8 = n(763754),
    e5 = n(75668);
function e6(e) {
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
        (0, a.jsx)("div", { "data-flash": i, className: c()(e5.j, n), children: t })
    );
}
var e9 = n(491182),
    te = n(860227),
    tt = n(537174),
    tn = n(837528),
    tl = n(516287),
    ti = n(843626),
    ts = n(294454),
    ta = n(857071),
    tr = n(517997),
    to = n(406704),
    tc = n(747926),
    td = n(54570),
    tu = n(8880),
    th = n(834942),
    tm = n(576705),
    tg = n(957565),
    tp = n(723702),
    tA = n(697470),
    tf = n(492841),
    tC = n(707985),
    tx = n(519222);
let tE = function (e, t, n) {
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
                    c = ef.A.getMessage(t, e),
                    d = e0.A.getChannel(t);
                if (null == c || null == d) return;
                let u = ed.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (tm.A.can(em.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tx.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tp.isMac)() ? r : a) && tg.p5 && (n.preventDefault(), (0, tg.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tA.A)(c, u) && (n.preventDefault(), (0, tx.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tf.A)(c, d) && (n.preventDefault(), (0, tx.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || th.A.canChatInGuild(e.guild_id),
                                    n = eQ.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tC.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && tm.A.can(em.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && ta.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, to.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eC._.dispatchKeyed(em.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, tr.r)(d, c) && (n.preventDefault(), (0, tx.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, ti.p)(c) &&
                            (n.preventDefault(), (0, ts.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            tu.A.isSpeakingMessage(t, e) ? (0, td.pr)() : (0, td.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, to.D1)(d, c)) (n.preventDefault(), (0, tc.Tv)(d, c, "Message Shortcut"));
                        else if (c.hasFlag(em.pr7.HAS_THREAD)) {
                            let e = e0.A.getChannel(ei.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, tc.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tx.cl)(d, c));
                        break;
                    case "escape":
                        e2.A.isEditing(d.id, c.id) ? y.A.endEditMessage(d.id) : eC._.dispatch(em.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tS = n(754459),
    tI = n(941308),
    ty = n(824556),
    t_ = n(699352),
    tj = n(235227),
    tv = n(649852),
    tb = n.n(tv),
    tN = n(311283),
    tT = n(473935),
    tM = n(173936),
    tR = n(290136),
    tD = n(666492),
    tk = n(606096),
    tL = n(997146),
    tP = n(366605),
    tO = n(163328),
    tG = n(110384),
    tU = n(22231),
    tw = n(563119),
    tF = n(581925),
    tH = n(778492),
    tB = n(241326),
    tK = n(365199),
    tV = n(417270),
    tz = n(788026),
    tW = n(812930),
    t$ = n(822123),
    tq = n(7584),
    tJ = n(635222),
    tZ = n(969043),
    tX = n(427209),
    tY = n(743738),
    tQ = n(973196),
    t0 = n(649963),
    t1 = n(815807),
    t2 = n(429433),
    t3 = n(738125),
    t4 = n(85109),
    t7 = n(71393),
    t8 = n(174459),
    t5 = n(690521),
    t6 = n(403362),
    t9 = n(628691),
    ne = n(194085),
    nt = n(568467),
    nn = n(607399),
    nl = n(460905);
function ni(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        o = r.useRef(null);
    return (0, a.jsx)(e_.Y, {
        targetElementRef: o,
        animation: e_.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: nn.Fr ? "top" : "left",
        align: nn.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, a.jsx)(ne.qv, { ref: o, label: eL.intl.string(eL.t.lfIHs4), icon: nl.n, onClick: l }, "add-reaction"),
    });
}
var ns = n(355682),
    na = n(307731),
    nr = n(338373);
let no = [tq.Ay.getByName("100"), tq.Ay.getByName("laughing"), tq.Ay.getByName("sparkling_heart")].filter(t6.Vq);
function nc(e) {
    e.stopPropagation();
}
function nd(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, ns.c)({
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
        ariaLabel: eL.intl.string(eL.t.Lv7LxN),
    });
}
let nu = r.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, t$.QZ)(t.guild_id).filter(
            (e) =>
                !t5.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: na.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, tJ.A)(l.concat(no)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, t1.i6)(t.emoji, (0, t1.jq)(e))),
                i = null != l ? eL.intl.string(eL.t.wunKKA) : eL.intl.string(eL.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? eL.intl.formatToPlainString(eL.t.vjeruO, { emojiName: r })
                        : eL.intl.formatToPlainString(eL.t.L1JQwE, { emojiName: r });
            return (0, a.jsx)(
                ne.qv,
                {
                    tooltipText: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(ev.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nr.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: nr.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: function () {
                        return ng({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: t0.qN.MESSAGE_HOVER_BAR,
                        });
                    },
                    children: (0, a.jsx)(tz.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nr.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function nh(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: s,
            canReport: o,
            canEdit: c,
            canPublish: d,
            canReact: h,
            canConfigureJoin: m,
            canReply: g,
            canStartThread: p,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: x,
            isExpanded: E,
            showMoreUtilities: S,
            showEmojiPicker: I,
            isMessageBookmark: _,
            isMessageReminder: j,
            setPopout: b,
            hasDeveloperMode: N,
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
                d = (0, u.bG)([t7.A], () => t7.A.getGuild(t.guild_id), [t.guild_id]),
                h = (0, u.bG)([ed.default], () => ed.default.getId()),
                m = (0, to.Id)(t),
                g = (0, to.s5)(t),
                { firstMessage: p } = (0, u.bG)([tZ.A], () => tZ.A.getMessage(t.id), [t.id]),
                A = eQ.jW.useSetting(),
                f = eQ.Q_.useSetting(),
                C = (0, u.bG)([th.A], () => null == t.guild_id || th.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: x,
                    canAddNewReactions: E,
                    canSendMessages: S,
                } = (0, u.cf)(
                    [tm.A],
                    () => ({
                        canAddNewReactions: C && tm.A.can(em.xBc.ADD_REACTIONS, t),
                        canManageMessages: tm.A.can(em.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: tm.A.can(em.xBc.SEND_MESSAGES, t),
                    }),
                    [t, C],
                ),
                I = (0, tQ.A)(),
                y = (0, tr.u)(t, n) && !I,
                _ = (0, to.n)(t, n),
                j = (0, to.R)(n),
                b = (0, u.bG)([ta.A], () => null != t.guild_id && ta.A.isLurking(t.guild_id), [t]),
                N = c.id === h,
                T = (x || n.canDeleteOwnMessage(h)) && m && !em.MRS.UNDELETABLE.has(n.type);
            (n.type === em.lAJ.AUTO_MODERATION_ACTION && (T = T && x),
                t.isModeratorReportChannel() && (T = T && n.id !== p?.id && !(0, e7.A)(n)));
            let M = (0, t9.ul)(n),
                R = (0, tf.A)(n, t),
                D = !t.isSystemDM() && (0, tA.A)(n, h) && m && !g,
                { disableReactionCreates: k } = (0, tC.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: E,
                    isLurking: b,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                L =
                    t.type === em.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(em.GuildFeatures.NEWS) &&
                    S &&
                    (N || x) &&
                    (0, tW.A)(n),
                P = t.getGuildId(),
                O =
                    null != P &&
                    n.type === em.lAJ.USER_JOIN &&
                    tm.A.canWithPartialContext(em.xBc.MANAGE_GUILD, { guildId: P }),
                G = (0, ti.m)(n),
                U = (0, e3.kn)(n, t, "MessageHoverBar"),
                w = n.hasFlag(em.pr7.IS_GUILD_OFFICIAL),
                { isMessageBookmark: F, isMessageReminder: H } = (0, u.cf)([t4.A], () => ({
                    isMessageBookmark: t4.A.isMessageBookmarked(t.id, n.id),
                    isMessageReminder: t4.A.isMessageReminder(t.id, n.id),
                })),
                B = (0, tN.A)(a),
                K = (0, u.bG)([v.Ay], () => v.Ay.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: D,
                canDelete: T,
                canReport: M,
                canReply: y,
                canStartThread: _,
                canViewThread: j,
                canForward: G,
                canManageOfficialMessages: U,
                isGuildOfficial: w,
                canCopy: tg.p5,
                hasDeveloperMode: f,
                canReact: !k && A,
                canPublish: L,
                canConfigureJoin: O,
                isExpanded: B && !K && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                isMessageBookmark: F,
                isMessageReminder: H,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = r.useRef(null),
        R = r.useCallback(() => {
            (S ||
                t8.default.track(em.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                b({ moreUtilities: !S }));
        }, [S, b, n]),
        D = r.useCallback(() => {
            b({ emojiPicker: !I });
        }, [I, b]),
        k = (0, to.Id)(t),
        L = n.hasFlag(em.pr7.CROSSPOSTED);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            E
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l && N
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.zBoHlf),
                                        icon: tT.L,
                                        onClick: (e) => (0, tx.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.WqhZss),
                                        icon: tM.LinkIcon,
                                        onClick: () => (0, tx.S)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.NpHUi1),
                                        icon: tR.CircleQuestionIcon,
                                        onClick: () => (0, tx.vc)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          k
                              ? (0, a.jsx)(
                                    ne.qv,
                                    { label: eL.intl.string(eL.t.RpE9k7), icon: tD.Q, onClick: () => (0, tx.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          j
                              ? null
                              : (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: _ ? eL.intl.string(eL.t.LHUP9D) : eL.intl.string(eL.t["9p3D9p"]),
                                        icon: _ ? tk.BookmarkIcon : tL.c,
                                        onClick: () => {
                                            var e;
                                            return _
                                                ? void (0, nt.x)({ channelId: t.id, messageId: n.id, displayToast: !0 })
                                                : ((e = t3.r.MESSAGE_TOOLBAR),
                                                  void (0, nt.Y)({
                                                      channelId: t.id,
                                                      messageId: n.id,
                                                      displayToast: !0,
                                                      source: e,
                                                  }));
                                        },
                                    },
                                    "bookmark",
                                ),
                          i
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: n.pinned ? eL.intl.string(eL.t["Bse+F/"]) : eL.intl.string(eL.t.CvQ18w),
                                        icon: tP.t,
                                        onClick: (e) => (0, tx.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, a.jsx)(
                                    ne.qv,
                                    { label: eL.intl.string(eL.t.rBIGBL), icon: tO.y, onClick: () => (0, tx.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t["5IEsGx"]),
                                        icon: tG.W,
                                        onClick: (e) => (0, tx.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            h
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          E
                              ? null
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(nu, { channel: t, message: n }), (0, a.jsx)(ne.$$, {})],
                                }),
                          (0, a.jsx)(ni, {
                              togglePopout: D,
                              renderEmojiPicker: np,
                              shouldShow: I,
                              isFocused: T,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            g && !c
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t["5IEsGx"]), icon: tG.W, onClick: (e) => (0, tx.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t.bt75uw), icon: tU.PencilIcon, onClick: () => (0, tx.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t.I3ltXO), icon: tX.A, onClick: () => (0, tx.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t.rBIGBL), icon: tO.y, onClick: () => (0, tx.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t["39d0Wj"]), icon: tO.y, onClick: () => (0, tx.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: x ? eL.intl.string(eL.t["2km5Gf"]) : eL.intl.string(eL.t["lE/PG3"]),
                          icon: x ? tw.$ : tF.L,
                          onClick: () => y.A.patchMessageGuildOfficial(t.id, n.id, !x),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: L ? eL.intl.string(eL.t["1kWJAr"]) : eL.intl.string(eL.t.MFGE51),
                          icon: tH.k,
                          onClick: () => (0, tx.Le)(t, n),
                          disabled: L,
                      },
                      "publish",
                  )
                : null,
            s && E
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: eL.intl.string(eL.t.oyYWHE),
                          icon: tB.TrashIcon,
                          onClick: (e) => (0, tx.RC)(t, n, e),
                          dangerous: !0,
                          separator: !E,
                      },
                      "delete",
                  )
                : null,
            E && s
                ? null
                : (0, a.jsx)(e_.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, a.jsx)(nd, {
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
                      animation: e_.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, a.jsx)(
                              ne.qv,
                              {
                                  ref: M,
                                  label: eL.intl.string(eL.t["UKOtz+"]),
                                  icon: tK.MoreHorizontalIcon,
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
function nm(e) {
    let { channel: t, message: n } = e,
        l = (0, u.bG)([eW.A], () => null != eW.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, tY.Bl)(n.interactionData));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !l &&
                i &&
                (0, a.jsx)(
                    ne.qv,
                    { label: eL.intl.string(eL.t["5911Lb"]), icon: tV.RetryIcon, onClick: () => (0, tx.Io)(t, n) },
                    "retry",
                ),
            (0, a.jsx)(
                ne.qv,
                { label: eL.intl.string(eL.t.oyYWHE), icon: tB.TrashIcon, onClick: (e) => (0, tx.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function ng(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, t1.jq)(n);
    "add" === t
        ? (0, t0.BB)(l.id, i.id, r, s, { burst: a })
        : (0, t0.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function np(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? em.liQ.GUILD_CHANNEL : em.liQ.DM_CHANNEL,
                section: (0, t1.sn)(e),
                object: em.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, a.jsx)(t2.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            (ng({ type: "add", emoji: i, channel: e, message: t, location: t0.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tb()(n, 150)() : n()));
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nA = r.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, u.bG)([e2.A], () => e2.A.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === em.cmJ.SEND_FAILED ? (0, a.jsx)(nm, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== em.cmJ.SEND_FAILED ? (0, a.jsx)(nh, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, a.jsx)("div", {
              className: c()(e.className, { [nr.kL]: !0, [nr.gN]: l, [nr.nK]: i }),
              onClick: nc,
              onContextMenu: nc,
              role: "group",
              "aria-label": eL.intl.string(eL.t.Lv7LxN),
              children: (0, a.jsxs)(ne.Ay, { className: e.innerClassName, children: [r, o] }),
          });
});
var nf = n(13673),
    nC = n(895597),
    nx = n(606049),
    nE = n(10364);
let nS = r.memo(function (e) {
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
            g = (0, tn.r4)(t.author.id, n.id),
            p = (0, tn.m)(t, n, o, d),
            A = (0, tn.Jo)(c, d),
            f = r.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, a.jsx)(nC.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== em.lAJ.REPLY,
            renderPopout: nE.A,
            showAvatarPopout: c,
            showUsernamePopout: o,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
            enableScheduledBadge: !0,
        });
    }),
    nI = r.memo(nx.A);
function ny(e) {
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
    if ((0, e7.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, a.jsx)(nS, {
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
        : (0, a.jsx)(nI, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, te.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var n_ = n(91624),
    nj = n(127258),
    nv = n(168186),
    nb = n(994500),
    nN = n(217424),
    nT = n(807081),
    nM = n(387408),
    nR = n(942075),
    nD = n(747407),
    nk = n(808829),
    nL = n(552691),
    nP = n(861464),
    nO = n(521981),
    nG = n(448368),
    nU = n(886737);
let nw = r.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: o,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: h,
        } = e,
        m = n.state === eZ.a.LOADED ? n.message : void 0,
        g = (0, e8.X4)(m),
        p = (0, e8.d8)(m?.actor, l).nick,
        A = (0, e$.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        f = (0, eq.U)(),
        C = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, nM.A)(m);
            if (e.type === em.lAJ.USER_JOIN)
                return e.author.bot
                    ? nP.A.getSystemMessageAppAdded(null != g ? g.nick : e.author.username, null != e.actor ? p : null)
                    : (0, nT.$)(
                          eL.intl.formatToParts(nP.A.getSystemMessageUserJoin(e.id), {
                              username: null != g ? g.nick : e.author.username,
                              usernameHook: (e) => e,
                          }),
                      );
            if (e.type === em.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nT.$)(
                    (0, nR.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === em.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nT.$)((0, nk.P)({ application: e?.application, username: g?.nick }));
            if (e.type === em.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nT.$)((0, nL.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === em.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nT.$)((0, nL.uk)({ application: e?.application, username: g?.nick }));
            else if (e.type === em.lAJ.GUILD_SPACE_MESSAGE) return (0, nD.X)(e, l);
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0, postProcessor: f ? nU.A : void 0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0, allowGameMentions: !0 }
                        : { ...t, formatInline: !0, allowHeading: A, allowList: A, allowGameMentions: !0 };
                return (0, nO.Ay)(e, n).content;
            }
            return null;
        }, [m, g, p, l, A, f]),
        { isReplyAuthorBlocked: x, isReplyAuthorIgnored: E } = (0, u.cf)(
            [nb.A],
            () => ({
                isReplyAuthorBlocked: null != m && nb.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && nb.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        S = (0, tn.r4)(m?.author.id, l.id),
        I = (0, tn.Ck)(t, n, l),
        y = (0, tn.H9)(m, l, s, c),
        _ = (0, tn.Ge)(o, c),
        j = r.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        v = (0, e8.X4)(t);
    return (0, a.jsx)(nG.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: v,
        referencedMessage: n,
        content: C,
        compact: i,
        isReplyAuthorBlocked: x,
        isReplyAuthorIgnored: E,
        showAvatarPopout: o,
        showUsernamePopout: s,
        renderPopout: nE.A,
        onClickAvatar: _,
        onClickUsername: y,
        onClickReply: I,
        onContextMenu: S,
        onPopoutRequestClose: j,
        isReplySpineClickable: d,
        showReplySpine: h,
    });
});
function nF(e) {
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
        (0, a.jsx)(nw, {
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
let nH = r.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: o,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: h,
        } = e,
        { isInteractionUserBlocked: m, isInteractionUserIgnored: g } = (0, u.cf)(
            [nb.A],
            () => ({
                isInteractionUserBlocked: nb.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nb.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, u.bG)([eZ.A], () => eZ.A.getMessageByReference(t?.messageReference)),
        A = (0, tn.r4)(t.interaction?.user.id, n.id),
        f = (0, tn.T0)(t.interaction, n, i, h),
        C = (0, tn.Yq)(s, h),
        x = (0, nv.Am)(t),
        E = x?.type === nj.G.APPLICATION_COMMAND ? x.target_user?.id : void 0,
        S = (0, tn.r4)(E, n.id),
        I = (0, tn.I)(E, n, c, h),
        y = (0, tn.Ge)(d, h),
        _ = (0, tn.U_)(o, h),
        j = r.useCallback(() => {
            h({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [h]),
        v = r.useCallback(
            () =>
                nF({
                    message: t,
                    channel: n,
                    compact: l,
                    setPopout: h,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: p,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, l, t, d, p, c, h],
        );
    return (0, a.jsx)(nN.A, {
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
        onClickCommand: _,
        onUserContextMenu: A,
        onClickTargetAvatar: y,
        onClickTargetUsername: I,
        onTargetUserContextMenu: S,
        onPopoutRequestClose: j,
        renderTargetMessage: v,
    });
});
var nB = n(64369),
    nK = n(381941);
function nV(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eV()(n.type === em.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...r } = (0, d.rm)(e.id ?? ""),
        o = (0, u.bG)([eZ.A], () => eZ.A.getMessageByReference(l)),
        { popouts: h, setPopout: m } = (0, tS.A)(n.id, nK.Fd),
        g = (0, e8.Ay)(n),
        p = (0, te.fF)(n),
        A = (0, te.ZD)(n);
    if (null != o)
        switch (o.state) {
            case eZ.a.LOADED:
                return (0, a.jsx)(nz, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case eZ.a.NOT_LOADED:
            case eZ.a.DELETED:
        }
    return (0, a.jsx)(e9.A, {
        ...r,
        id: t,
        compact: i,
        className: c()(s, { [nf.iU]: !0, [nf.HJ]: !i, [nf.H4]: !0, [nf._A]: !0 }),
        childrenHeader: ny({ messageProps: e, setPopout: m, messagePopouts: h, replyReference: l, author: g }),
        childrenSystemMessage: (0, nB.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function nz(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: o = !1,
            className: h,
            groupId: m,
            viewingChannelId: g,
        } = e,
        p = n.type === em.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, d.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: x, handleBlur: E } = (0, tn.G8)(A),
        { popouts: S, selected: I, setPopout: y } = (0, tS.A)(n.id, nK.Fd),
        _ = eQ.hD.useSetting(),
        j = eQ.rs.useSetting(),
        b = (0, u.bG)([eZ.A], () => eZ.A.getMessageByReference(p)),
        N = (0, e$.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: T,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, tn.yp)({ groupId: m, message: n, defaultValue: I }),
        D = (0, u.bG)([v.Ay], () => v.Ay.keyboardModeEnabled),
        k = I || (D && C),
        L = k || R,
        P = (0, u.bG)([e1.A], () => e1.A.isDeveloper),
        {
            content: O,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tI.A)(n, {
            hideSimpleEmbedContent: _ && j,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: P,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        w = tE(l, i, D),
        F = (0, e8.Ay)(n),
        H = (0, te.fF)(n, m),
        B = (0, te.ZD)(n),
        K = (0, a.jsx)(tl.x, { value: L, children: (0, n_.Ay)(e, O, !1) }),
        V = r.useCallback(() => (0, eY.uh)(s, i, l), [s, i, l]),
        z = (0, eX.Xx)({ guildId: s, roleId: F.iconRoleId });
    return (0, a.jsxs)("div", {
        className: nf.m5,
        children: [
            (0, a.jsx)(eI.D, {
                className: nf.lA,
                onClick: V,
                "aria-label": eL.intl.string(eL.t.k5WiPf),
                children: eL.intl.string(eL.t.k5WiPf),
            }),
            (0, a.jsx)(e9.A, {
                ...f,
                id: t,
                compact: o,
                className: c()(h, {
                    [nf.iU]: !0,
                    [nf.HJ]: !o,
                    [nf.mK]: n.mentioned,
                    [nf.M1]: (0, eu.ec)(n),
                    [nf.H4]: (0, e7.A)(n),
                    [nf._A]: n.id === m || n.type === em.lAJ.REPLY,
                    [nf.wH]: k,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: x,
                onBlur: E,
                childrenRepliedMessage:
                    n.type === em.lAJ.REPLY &&
                    nF({
                        ...e,
                        setPopout: y,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: b,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: ny({
                    messageProps: e,
                    setPopout: y,
                    messagePopouts: S,
                    replyReference: p,
                    author: F,
                    repliedMessage: b,
                    roleIcon: z,
                }),
                childrenAccessories: (0, t_.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: G,
                    hasBailedAst: U,
                    isInteracting: L,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nB.A)(e),
                childrenMessageContent: K,
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
let nW = r.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: o,
            channel: { id: h },
            compact: g = !1,
            className: p,
            flashKey: A,
            groupId: f,
            renderContentOnly: C,
            hideInviteEmbedBanner: x,
            hideActivityInvite: E,
        } = e;
    eV()(i.type !== em.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let S = em.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: I, ...y } = (0, d.rm)(e.id ?? ""),
        _ = eQ.hD.useSetting(),
        j = eQ.rs.useSetting(),
        b = (0, u.bG)([eZ.A], () => eZ.A.getMessageByReference(S)),
        { popouts: N, selected: T, setPopout: M } = (0, tS.A)(i.id, nK.Fd),
        R = (0, tn.VL)(i, o, M),
        D = (0, tn.ri)(i, o),
        {
            handleMouseEnter: k,
            handleMouseLeave: L,
            hasHovered: P,
            isHovered: O,
        } = (0, tn.yp)({ groupId: f, message: i, defaultValue: T }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, tn.G8)(I),
        H = r.useCallback(
            (e) => {
                (w(e), k(e));
            },
            [w, k],
        ),
        B = r.useCallback(
            (e) => {
                (F(e), L());
            },
            [F, L],
        ),
        K = (0, u.bG)([e2.A], () => e2.A.isEditing(h, s), [h, s]),
        z = (0, u.bG)([v.Ay], () => v.Ay.keyboardModeEnabled),
        W = T || K || (z && G),
        $ = W || O,
        q = (0, u.bG)(
            [e0.A],
            () => i.hasFlag(em.pr7.HAS_THREAD) && e0.A.getChannel(ei.default.castMessageIdAsChannelId(i.id)),
        ),
        J = i.isFirstMessageInForumPost(o),
        Z = (0, e$.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        X = (0, u.bG)([e1.A], () => e1.A.isDeveloper),
        Y = (0, eq.U)(),
        {
            content: Q,
            hasSpoilerEmbeds: ee,
            hasBailedAst: et,
        } = (0, tI.A)(i, {
            hideSimpleEmbedContent: _ && j,
            formatInline: !1,
            allowList: J || Z,
            allowHeading: J || Z,
            allowLinks: !0,
            allowDevLinks: X,
            previewLinkTarget: !0,
            restrictedPreview: Y,
        }),
        en = tE(s, h, z),
        el = (0, e8.Ay)(i),
        es = (0, u.bG)([eJ.A], () => eJ.A.getPendingReply(h)),
        ea =
            ((t = r.useRef(A)),
            r.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        er = (0, eX.Xx)({ guildId: o.guild_id, roleId: el.iconRoleId }),
        ec = (function (e, t) {
            let { enabled: n } = V.LX.useConfig({ location: "useMessageConversation" });
            return (0, u.bG)(
                [eb.A, ez.A],
                () => {
                    if (!n || !ez.A.isHighlightingEnabled()) return null;
                    let l = eb.A.getConversationForMessage(e, t);
                    return null == l ? null : eb.A.getConversationColor(e, l);
                },
                [e, t, n],
            );
        })(h, s),
        ed = (0, te.fF)(i, f),
        eh = (0, te.ZD)(i),
        eg = (0, u.bG)([eW.A], () => eW.A.getMessage(s), [s]),
        ep = (0, e3.bW)(o.guild_id, "ChatMessage"),
        eA = (0, tt.o)(),
        ef = (0, ty.A)({ message: i, channel: o, officialMessagesEnabled: ep }),
        eC = r.useRef(window),
        ex = null != eg;
    ((n = i.type === em.lAJ.CUSTOM_GIFT ? "" : !K && ex ? (0, tj.A)(e, Q) : (0, n_.Ay)(e, Q, K)),
        (n = (0, a.jsx)(tl.x, { value: $, children: n })));
    let eE = i.id === f,
        eS = (0, a.jsx)(m.vN, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
                id: l,
                className: nf.Nt,
                "aria-setsize": -1,
                style: null != ec ? { backgroundColor: ec } : void 0,
                children: (0, a.jsx)(e9.A, {
                    ...y,
                    "aria-setsize": -1,
                    "aria-roledescription": eL.intl.string(eL.t.BAB0yK),
                    "aria-labelledby": ed,
                    "aria-describedby": eh,
                    onFocus: H,
                    onBlur: B,
                    onContextMenu: R,
                    onKeyDown: en,
                    onClick: D,
                    compact: g,
                    contentOnly: C,
                    className: c()(p, {
                        [nf.iU]: !0,
                        [nf.HJ]: !g,
                        [nf.mK]: i.mentioned,
                        [nf.M1]: (0, eu.ec)(i),
                        [nf.SH]: i.type === em.lAJ.NITRO_NOTIFICATION,
                        [nf.Sg]: i.hasFlag(em.pr7.IS_GUILD_OFFICIAL) && ep && !eA,
                        [nf.H4]: (0, e7.A)(i),
                        [nf._A]: !C && (eE || i.type === em.lAJ.REPLY),
                        [nf.wH]: W,
                        [nf.$n]: es?.message.id === i.id,
                        [nf.$w]: i.isCommandType() && i.state === em.cmJ.SENDING,
                        [nf.DX]: ex,
                    }),
                    zalgo: !K,
                    childrenRepliedMessage:
                        C || i.type !== em.lAJ.REPLY
                            ? void 0
                            : nF({
                                  ...e,
                                  setPopout: M,
                                  referencedUsernameProfile: N.referencedUsernameProfile,
                                  referencedAvatarProfile: N.referencedAvatarProfile,
                                  replyReference: S,
                                  replyMessage: b,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, a.jsx)(nH, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, M, N),
                    childrenHeader: C
                        ? void 0
                        : ny({
                              messageProps: e,
                              setPopout: M,
                              messagePopouts: N,
                              replyReference: S,
                              author: el,
                              repliedMessage: b,
                              roleIcon: er,
                          }),
                    childrenAccessories: (0, t_.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ee,
                        hasBailedAst: et,
                        handleContextMenu: R,
                        isInteracting: $,
                        isAutomodBlockedMessage: ex,
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
                                      h = r.state === em.cmJ.SENDING,
                                      m = r.id === c,
                                      g = (0, eo.Lt)(r.flags, em.pr7.EPHEMERAL),
                                      p = r.state === em.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, a.jsx)(nA, {
                                            className: nf.Uo,
                                            innerClassName: nf.Mc,
                                            isHeader: !d && m && !(0, e7.A)(r),
                                            isReply: !d && r.type === em.lAJ.REPLY && null != r.messageReference,
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
                                  messagePopouts: N,
                                  isFocused: O || G,
                                  messageWindow: eC.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nB.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: k,
                    onMouseLeave: L,
                    hasThread: !C && i.hasFlag(em.pr7.HAS_THREAD) && null != q,
                    isSystemMessage: (0, e7.A)(i),
                    hasReply: i.type === em.lAJ.REPLY,
                    messageRef: (e) => {
                        ((ef.current = e), (eC.current = e?.ownerDocument?.defaultView ?? window));
                    },
                    author: el,
                }),
            }),
        });
    return null != ea
        ? (0, a.jsx)(
              e6,
              { flashKey: ea, className: c()({ [nf.bB]: !0, [nf._A]: !g && i.id === f }), children: eS },
              `bg-flash-${l}`,
          )
        : eS;
});
n(801541);
var n$ = n(889137),
    nq = n(952270),
    nJ = n(428678),
    nZ = n(353182),
    nX = n(922529),
    nY = n(888675),
    nQ = n(845806);
function n0(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: r = !0 } = e,
        o = (0, n$.YW)({ collapsedReason: s })
            .with({ collapsedReason: eL.t["VFWjc+"] }, () =>
                (0, a.jsx)(nq.EyeSlashIcon, { size: "md", color: "currentColor", className: nQ.Q6 }),
            )
            .with({ collapsedReason: eL.t["+FcYM/"] }, () =>
                (0, a.jsx)(nJ.K, { size: "md", color: "currentColor", className: nQ.Q6 }),
            )
            .with({ collapsedReason: eL.t.rHRovo }, () =>
                (0, a.jsx)(nZ._, { size: "md", color: "currentColor", className: nQ.TG }),
            )
            .otherwise(() => (0, a.jsx)(eR.P, { size: "md", color: "currentColor", className: nQ.Q6 }));
    return (0, a.jsx)(e9.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nY.A, {
            compact: i,
            className: nQ.L9,
            iconNode: o,
            children: (0, a.jsxs)("div", {
                className: r ? nQ.Fo : nQ.GU,
                children: [
                    eL.intl.format(s, { count: l }),
                    r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, a.jsx)(eI.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: nQ.rB,
                                    children: t ? eL.intl.string(eL.t.fgq1gs) : eL.intl.string(eL.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let n1 = r.memo(function (e) {
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
        className: c()({ [nf._A]: !0, [nQ.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === em.TZK.DIVIDER)
                ? (0, a.jsx)(nX.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, a.jsx)(
                n0,
                { count: g, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: o },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === em.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, a.jsx)(nX.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === em.TZK.MESSAGE || e.type === em.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === em.TZK.THREAD_STARTER_MESSAGE ? nV : nW;
                          return (0, a.jsx)(
                              t,
                              {
                                  id: (0, e4.j)(n.id, e.content.id),
                                  className: nQ.__invalid_blocked,
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
var n2 = n(114212),
    n3 = n(248432);
function n4(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, a.jsx)("div", {
        className: c()(n3.dU, t && n3.yZ),
        children: (0, a.jsx)("div", { className: n3.JN, children: n }),
    });
}
let n7 = r.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, a.jsx)(n4, { isCollapsed: n, children: l });
});
var n8 = n(708510);
function n5(e) {
    return "group" in e;
}
let n6 = (0, a.jsxs)(a.Fragment, {
    children: [
        (0, a.jsx)(n2.Ay, { messages: 4, groupSpacing: 16, className: n8.Xb }),
        (0, a.jsx)(n2.Ay, { messages: 2, groupSpacing: 16, className: n8.Xb }),
        (0, a.jsx)(n2.Ay, { messages: 3, groupSpacing: 16, className: n8.Xb }),
    ],
});
function n9(e) {
    let { channel: t, focusStream: n, isCollapsed: l, isHydrating: i } = e;
    return (0, a.jsxs)("div", {
        className: n8.XT,
        children: [
            (0, a.jsx)("ol", {
                className: n8.cl,
                children: n.map((e) => {
                    if (n5(e)) {
                        var n;
                        return (0, a.jsx)(
                            n7,
                            {
                                isOnTopic: e.isOnTopic,
                                isCollapsed: l,
                                children: (0, a.jsx)(n1, {
                                    messages: e.group,
                                    channel: t,
                                    unreadId: "",
                                    collapsedReason:
                                        (n = e.group.type) === em.TZK.MESSAGE_GROUP_BLOCKED
                                            ? eL.t["+FcYM/"]
                                            : n === em.TZK.MESSAGE_GROUP_IGNORED
                                              ? eL.t["VFWjc+"]
                                              : n === em.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                ? eL.t.rHRovo
                                                : eL.t.xfkfTK,
                                    canUncollapse: e.group.type !== em.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                }),
                            },
                            e.group.key,
                        );
                    }
                    return (0, a.jsx)(
                        n7,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: l,
                            children: (0, a.jsx)(nW, {
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
            i && n6,
        ],
    });
}
n(30146);
var le = n(435558),
    lt = n.n(le);
let ln = { tension: 240, friction: 30 },
    ll = { tension: 320, friction: 28 },
    li = { tension: 280, friction: 24, clamp: !0 },
    ls = { tension: 170, friction: 22, clamp: !0 },
    la = { tension: 220, friction: 28, clamp: !0 },
    lr = 6,
    lo = -3,
    lc = 9;
function ld(e) {
    return (188 - (6 * e + 36)) / 2;
}
var lu = n(419828);
async function lh(e) {
    let t = e.current,
        n = t?.getScrollerNode();
    null == t ||
        null == n ||
        n.scrollTop <= 5 ||
        (await new Promise((e) => {
            t.scrollTo({ to: 0, animate: !0, callback: () => e() });
        }));
}
function lm(e) {
    let { style: t, channel: n, conversationId: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: o } = (0, F.D7)(),
        { dismissReason: c } = W(),
        d = o ? li : "navigation" === c ? la : ls,
        h = (0, Z.r)(J.A.colors.BORDER_SUBTLE).spring(),
        m = (0, Z.r)(J.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: g,
            shadowAlpha: p,
            contentPadding: A,
        } = (0, X.z)(
            { borderTopRadius: o ? 12 : 8, shadowAlpha: 0.4 * !!o, contentPadding: 4 * !!o, config: d },
            "respect-motion-settings",
        ),
        { borderColor: f } = (0, X.z)({ borderColor: o ? h : m, config: d }, "respect-motion-settings"),
        [C, x] = r.useState(!0),
        E = r.useRef(null),
        S = r.useCallback(() => {
            let e = i.current;
            null != e &&
                (null != E.current && (E.current.style.opacity = String(Math.min(1, e.getDistanceFromTop() / 16))),
                x(e.getDistanceFromBottom() > 5));
        }, [i]),
        I = (0, u.bG)([ef.A], () => ef.A.getMessages(n.id), [n.id]),
        {
            isSelected: y,
            selectedConversation: _,
            selectedHydratedMessages: j,
            isSelectionHydrating: v,
        } = (0, u.cf)(
            [w.A],
            () => ({
                isSelected: w.A.getSelectedConversationId(n.id) === l,
                selectedConversation: w.A.getConversation(n.id),
                selectedHydratedMessages: w.A.isFullyHydrated(n.id) ? w.A.getHydratedMessages(n.id) : null,
                isSelectionHydrating: w.A.isConversationFetchPending(n.id, !0),
            }),
            [n.id, l],
        ),
        b = (0, ee.p0)({ value: _, shouldUpdate: y }),
        N = (0, ee.p0)({ value: j, shouldUpdate: y }),
        T = r.useMemo(
            () =>
                null != b
                    ? (function (e, t, n, l) {
                          let i = (function (e, t, n) {
                                  let l = new Set(e.messageIds),
                                      i = [],
                                      s = new Set(),
                                      a = 0;
                                  if (
                                      (t.forEach((t) => {
                                          0 > ei.default.compare(t.id, e.startMessageId) ||
                                              ei.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return (i.sort((e, t) => ei.default.compare(e.record.id, t.record.id)), i);
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, es.A)(e, a, t.record)) && (r = t.record.id);
                              let n = eA(e, t.record, (0, ea.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && n5(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: em.TZK.MESSAGE, content: t.record, groupId: r };
                                  (e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0));
                              } else s.push({ record: t.record, isOnTopic: t.isOnTopic, groupId: r });
                              a = t.record;
                          }
                          return s;
                      })(n, b, I, N)
                    : [],
            [n, b, I, N],
        );
    return null == b
        ? null
        : (0, a.jsxs)(q.animated.div, {
              className: lu.Nr,
              style: {
                  top: t.cardTop,
                  bottom: 0,
                  left: t.cardInsetLeft,
                  right: t.cardInsetRight,
                  opacity: t.cardOpacity,
                  borderColor: f,
                  borderRadius: g.to((e) => `${e}px ${e}px 0 0`),
                  boxShadow: p.to((e) => `0 8px 24px rgba(0, 0, 0, ${e})`),
              },
              children: [
                  (0, a.jsx)(q.animated.div, { className: lu.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, a.jsx)(q.animated.div, {
                      style: { paddingTop: A, paddingLeft: A, paddingRight: A },
                      children: (0, a.jsx)(eB, { channel: n, conversation: b, requestDismiss: s }),
                  }),
                  (0, a.jsxs)("div", {
                      className: lu.gk,
                      children: [
                          (0, a.jsx)(Y.zC, {
                              className: lu.XG,
                              ref: i,
                              onScroll: S,
                              children: (0, a.jsxs)(q.animated.div, {
                                  style: { paddingLeft: A, paddingRight: A },
                                  children: [
                                      (0, a.jsx)(n9, {
                                          channel: n,
                                          focusStream: T,
                                          isCollapsed: o || "navigation" === c,
                                          isHydrating: y && v,
                                      }),
                                      (0, a.jsx)("div", { className: lu.lB }),
                                  ],
                              }),
                          }),
                          (0, a.jsx)("div", { ref: E, className: lu.iX, "aria-hidden": !0 }),
                          C && (0, a.jsx)("div", { className: lu.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lg(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = W(),
        { bannerMeasurementRef: i } = K(),
        { isFocused: s, setIsFocused: o } = (0, F.D7)(),
        d = r.useRef(!1),
        h = r.useRef(null),
        m = (0, u.bG)([w.A], () => w.A.getSelectedConversationId(t.id), [t.id]),
        g = r.useCallback(
            async (e) => {
                if (s && !d.current) {
                    if (
                        ((d.current = !0),
                        null != m &&
                            U.X.trackFocusModeDismissed({ channelId: t.id, conversationId: m, dismissReason: e }),
                        "return" === e && null != m)
                    ) {
                        let e = w.A.getConversation(t.id);
                        if (null != e)
                            try {
                                await y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await lh(h);
                    }
                    (l(e), o(!1), (d.current = !1));
                }
            },
            [t.id, s, o, l, h, m],
        );
    (!(function (e, t) {
        let { isFocused: n } = (0, F.D7)(),
            l = (0, u.cf)(
                [ef.A],
                () => {
                    let t = ef.A.getMessages(e.id);
                    return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
                },
                [e.id],
            ),
            i = r.useRef(l),
            s = r.useRef(null);
        (r.useEffect(() => {
            if (!n) return;
            let t = ef.A.getMessages(e.id);
            ((i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId }),
                (s.current = w.A.getConversation(e.id)));
        }, [n, e.id]),
            r.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: a } = i.current;
                (l.jumpTargetId === e && l.jumpSequenceId === a) ||
                    s.current?.messageIds.some((e) => e === l.jumpTargetId) ||
                    t("navigation");
            }, [n, l, t]));
    })(t, g),
        r.useEffect(() => {
            if (s)
                return (
                    eC._.subscribe(em.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        eC._.unsubscribe(em.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                g("return");
            }
        }, [s, g]));
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
                config: () => (e) => ("leave" !== e ? li : "navigation" === n ? la : ls),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        f = (0, Q.p)(s ? m : null, A, "respect-motion-settings");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: c()(lu.tB, !s && lu.Vq, {
                    [lu.Em]: !s && "navigation" === n,
                    [lu.Zp]: !s && "navigation" !== n,
                }),
                onClick: p,
                "aria-hidden": !0,
            }),
            f((e, n) =>
                null == n
                    ? null
                    : (0, a.jsx)(lm, { style: e, channel: t, conversationId: n, scrollerRef: h, requestDismiss: g }),
            ),
        ],
    });
}
function lp(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, F.D7)(),
        { dismissReason: l } = W();
    return n || null !== l ? (0, a.jsx)(lg, { channel: t }) : null;
}
var lA = n(708988),
    lf = n(872351),
    lC = n(359144);
let lx = (0, q.animated)("button"),
    lE = (0, k.P)(ev.E);
function lS(e) {
    e.preventDefault();
}
let lI = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: o,
            layout: d,
            isExpanded: u,
            anchorId: h,
            hoveredConversationId: m,
            selectedConversationId: g,
            isFocusOverlayOpen: p,
            onHoverConversationChange: A,
            onJump: f,
        } = e,
        C = g === o.id,
        x = m === o.id,
        E = null != m && !x,
        S = null == h ? "up" : ei.default.compare(o.startMessageId, h) > 0 ? "down" : "up",
        I = o.title,
        y = Math.min(16, Math.max(4, Math.round(0.6 * I.length))),
        _ = (0, X.z)({ y: d.y, opacity: +!d.hidden, config: ln }, "respect-motion-settings"),
        j = (0, X.z)(
            {
                ...((t = u && C),
                (n = 0),
                u && (C && x ? (n = -17) : C ? (n = -13) : x && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                C && x ? ((l = 0), (i = 0), (s = 0.5)) : u && x && ((l = 1), (i = 0), (s = 1)),
                {
                    textScale: u ? 1 : 0.5,
                    textX: n,
                    textOpacity: +!!u,
                    lineScaleX: u ? 3 : 1,
                    pillOpacity: +!!t,
                    pillX: t ? (x ? -4 : 0) : 8,
                    pillScale: t ? 1 : 0.85,
                    arrowOpacity: l,
                    arrowX: i,
                    arrowScale: s,
                }),
                lineWidth: y,
                lineOpacity: +(!u && !d.hidden),
                config: ll,
            },
            "respect-motion-settings",
        ),
        v = r.useCallback(() => A(o.id), [A, o.id]),
        b = r.useCallback(() => A(null), [A]),
        N = r.useCallback(() => f(o.id), [f, o.id]),
        T = d.hidden || d.edge;
    return (0, a.jsxs)(lx, {
        "aria-current": C ? "true" : void 0,
        "aria-hidden": T ? "true" : void 0,
        className: c()(lC.ng, { [lC._D]: C, [lC.DJ]: x, [lC.KZ]: E }),
        style: {
            transform: _.y.to((e) => `translateY(${e}px)`),
            opacity: _.opacity,
            pointerEvents: T ? "none" : void 0,
        },
        onMouseDown: lS,
        onMouseEnter: v,
        onMouseLeave: b,
        onClick: N,
        children: [
            (0, a.jsx)(q.animated.span, {
                className: c()(lC.Og, p && lC.v7),
                style: {
                    opacity: j.pillOpacity,
                    transform: (0, q.to)(
                        [j.pillX, j.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, a.jsx)(ev.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: lC.B6,
                    children: I,
                }),
            }),
            (0, a.jsx)(lE, {
                tag: "span",
                variant: C ? "text-md/semibold" : "text-md/normal",
                color: C ? "text-strong" : x ? "text-default" : E ? "text-muted" : "text-subtle",
                className: lC.QV,
                lineClamp: 1,
                style: {
                    opacity: j.textOpacity,
                    transform: (0, q.to)([j.textScale, j.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: I,
            }),
            (0, a.jsx)("span", {
                className: lC.iF,
                children: (0, a.jsx)(q.animated.span, {
                    className: lC.iN,
                    style: {
                        width: j.lineWidth,
                        opacity: j.lineOpacity,
                        transform: j.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, a.jsx)(q.animated.span, {
                className: lC.$N,
                "aria-hidden": "true",
                style: {
                    opacity: j.arrowOpacity,
                    transform: (0, q.to)([j.arrowX, j.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === S
                        ? (0, a.jsx)(lA.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, a.jsx)(lf.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function ly(e) {
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
            for (let t = lo; t <= lc; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i
                                ? ((t = ld(28) + 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8))
                                : (t = ld(14) + 14 * n),
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
        className: c()(lC._R, n && lC.h1),
        role: "list",
        "aria-label": eL.intl.string(ek.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: r } = e,
                o = p.get(r);
            return null == o
                ? null
                : (0, a.jsx)(
                      lI,
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
var l_ = n(778712),
    lj = n(97808),
    lv = n(854627),
    lb = n(562153);
n(575279);
var lN = n(437057);
let lT = [
        { name: "40%", l1: "75%", l2: "50%" },
        { name: "55%", l1: "90%", l2: null },
        { name: "30%", l1: "60%", l2: "80%" },
        { name: "65%", l1: "45%", l2: "70%" },
    ],
    lM = {};
function lR(e) {
    let { channel: t, message: n } = e,
        l = lb.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lv.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: l_._3.SIZE_32,
        }),
        { content: o } = (0, tI.A)(n, lM),
        c = eQ.PZ.useSetting(),
        d = r.useMemo(() => (0, el.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, a.jsxs)("div", {
        className: lN.QS,
        children: [
            (0, a.jsx)(lj.eu, {
                className: lN.MM,
                src: i,
                avatarDecoration: s,
                size: l_._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, a.jsxs)("div", {
                className: lN.gp,
                children: [
                    (0, a.jsxs)("div", {
                        className: lN.yl,
                        children: [
                            (0, a.jsx)(ev.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, a.jsx)(ev.E, { variant: "text-sm/normal", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function lD() {
    return (0, a.jsx)("div", {
        className: lN.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lT[t % lT.length];
            return (0, a.jsxs)(
                "div",
                {
                    className: lN.uA,
                    children: [
                        (0, a.jsx)("div", { className: lN.h }),
                        (0, a.jsxs)("div", {
                            className: lN.jE,
                            children: [
                                (0, a.jsx)("div", { className: lN.zw, style: { width: n.name } }),
                                (0, a.jsx)("div", { className: lN.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, a.jsx)("div", { className: lN.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lk(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, F.D7)(),
        i = (0, u.bG)([eb.A], () => eb.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = r.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, a.jsx)("div", {
        className: c()(lN.Zt, l && lN.CU),
        children: (0, a.jsx)("div", {
            className: lN.eU,
            children:
                null == s
                    ? (0, a.jsx)(lD, {})
                    : s.length > 0
                      ? (0, a.jsx)("div", {
                            className: lN.z0,
                            children: s.map((e) => (0, a.jsx)(lR, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lL = n(130791);
function lP(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, u.bG)([w.A], () => w.A.getSelectedConversationId(t.id), [t.id]),
        { selectAndFocusConversation: s } = K(),
        { isFocused: o } = (0, F.D7)(),
        { dismissReason: d } = W(),
        h = (function (e) {
            let [t, n] = r.useState(null);
            return (
                r.useEffect(() => {
                    function t(e) {
                        return n(e?.id ?? null);
                    }
                    return (e.addAutomaticAnchorCallback(t, !0), () => e.removeAutomaticAnchorCallback(t));
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
                              let n = e.findLastIndex((e) => 0 >= ei.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, h)
                      ]?.id ?? null),
            [h, l],
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
                    return (0, le.clamp)(s, n, l);
                })(l, g, p, A),
            [l, g, p, A],
        ),
        [C, x] = r.useState(!1),
        E = r.useCallback(() => x(!1), []),
        S = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lr; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, f),
            [l, f],
        ),
        I = r.useMemo(() => S.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [S]),
        { showTopFade: y, showBottomFade: _ } = r.useMemo(
            () => ({ showTopFade: f >= 3, showBottomFade: f < l.length - 3 }),
            [f, l.length],
        ),
        j = r.useRef(null),
        [v, b] = r.useState(null),
        N = null != v && v !== i ? v : null;
    r.useEffect(() => {
        (0, G.p7)(t.id, I.length);
    }, [t.id]);
    let T = r.useCallback(
            (e) => {
                (null != e &&
                    e !== i &&
                    U.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    b(e),
                    null != e && e !== i && (0, G.qC)(t.id, e, { previewLimit: 4, cacheType: "channel" }));
            },
            [t.id, o, i],
        ),
        M = r.useCallback(() => {
            (b(null), E());
        }, [E]),
        R = r.useCallback(
            (e) => {
                (U.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    s(e, { cacheType: "channel" }),
                    E());
            },
            [t.id, E, o, s],
        ),
        D = r.useCallback(() => (null != N ? (0, a.jsx)(lk, { channel: t, conversationId: N }) : null), [t, N]),
        k = r.useCallback(
            (e) => {
                let t;
                (null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    C && (b(null), E()));
            },
            [n, C, E],
        ),
        L = r.useCallback(() => {
            (x(!0),
                U.X.trackTopicsUnitImpression({
                    channelId: t.id,
                    conversationIds: I.map((e) => e.id),
                    isFocusMode: o,
                }));
        }, [t.id, I, o]);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: c()(lL.kL, o && lL.tW, { [lL._Y]: !o && "navigation" === d, [lL.J_]: !o && "return" === d }),
              children: (0, a.jsxs)("div", {
                  className: c()(lL.rI, C && lL.RK),
                  onMouseEnter: L,
                  onMouseLeave: M,
                  onWheel: o ? void 0 : k,
                  children: [
                      (0, a.jsx)("div", { className: c()(lL.oT, C && lL.RK), "aria-hidden": !0 }),
                      (0, a.jsx)(e_.Y, {
                          targetElementRef: j,
                          shouldShow: C && null != N,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: e_.Y.Animation.FADE,
                          renderPopout: D,
                          children: () =>
                              (0, a.jsx)("div", {
                                  ref: j,
                                  className: c()(lL.nd, { [lL.mc]: C, [lL._z]: !C, [lL.OP]: C && y, [lL.yc]: C && _ }),
                                  style: { height: 188 },
                                  children: (0, a.jsx)(ly, {
                                      items: S,
                                      isExpanded: C,
                                      anchorId: h,
                                      hoveredConversationId: v,
                                      selectedConversationId: i,
                                      showTopFade: y,
                                      showBottomFade: _,
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
function lO(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, V.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, u.yK)([eb.A], () => (l ? (eb.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, a.jsx)(lP, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lG(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, V.sV)(t.guild_id, "scrollbar_chips");
    return (0, a.jsxs)($, {
        children: [(0, a.jsx)(lp, { channel: t }), l && (0, a.jsx)(lO, { channel: t, scrollManager: n })],
    });
}
var lU = n(354328),
    lw = n(807632),
    lF = n(875317),
    lH = n(164956),
    lB = n(302031),
    lK = n(822074),
    lV = n(141343),
    lz = n(72314),
    lW = n(573163),
    l$ = n(399263),
    lq = n(287809),
    lJ = n(234320),
    lZ = n(863439),
    lX = n(326337),
    lY = n(125435);
function lQ(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, a.jsx)("div", {
            className: lY.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, a.jsx)(n2.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l0 = n(830178),
    l1 = n(887129),
    l2 = n(621466),
    l3 = n(315710),
    l4 = n(951001),
    l7 = n(334738),
    l8 = n(267102),
    l5 = n(863922),
    l6 = n(965407);
function l9(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l2.vq)(l, HTMLElement);) ((n += l.offsetTop ?? 0), (l = l.offsetParent));
    return n;
}
let ie = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"]);
function it(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === ei.default.castChannelIdAsMessageId(e.channelId))) {
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
        ].sort(ei.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let il = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class ii {
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
    scrollHeightBeforeLoad = null;
    loadMorePausedUntilUserScroll = !1;
    _bottomAnchor = null;
    _automaticAnchorCallbacks = [];
    _scrollCompleteCallbacks = [];
    constructor(e) {
        if (((this.props = e), (this.loading = e.messages.loadingMore), null != e.messages.jumpTargetId))
            this.pinned = !1;
        else {
            const t = lz.A.isAtBottom(e.channel.id);
            ((this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lz.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null)));
        }
    }
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned && !this.props.messages.hasMoreAfter;
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
        return null == t ? null : t.getElementById((0, e4.j)(n, e));
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
        let t = this.props.windowId;
        (this.mergePropsAndUpdate_(e),
            this.acking && t !== this.props.windowId && ((this.acking = !1), (0, l7.Z5)(this.props.channel.id, t)),
            this.props.messages.ready && this.enableAutomaticAck());
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
            ((this.loadMorePausedUntilUserScroll = !1), (this.scrollHeightBeforeLoad = null));
        else if (null != this.scrollHeightBeforeLoad && !e.messages.loadingMore) {
            let e = i - this.scrollHeightBeforeLoad;
            ((this.scrollHeightBeforeLoad = null),
                (this.loadMorePausedUntilUserScroll = this.loadMorePausedUntilUserScroll || e < 100));
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
                (null != i &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (l = ei.default.extractTimestamp(i.id)),
                    this.scrollToMessage({
                        jumpTargetId: n,
                        animate: !0,
                        fromTimestamp: l,
                        onJumpComplete: e.messages.onJumpComplete,
                    }));
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            ((this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0));
            return;
        }
        let a = e.messages.last(),
            r = t.last(),
            o = l6.A.getOptions(a?.id ?? "");
        if (null != a && a.state === em.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: nK.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, l2.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = l9(l, i),
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
        return this.props.channel.isForumPost() ? nK.Gt : nK.k8;
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
            let t = -1 === (c = r) ? ei.default.castChannelIdAsMessageId(n.id) : e._array[c]?.id;
            if (null == t) break;
            let d = this.getAnchorData(t, i);
            if (((this._bottomAnchor = d), o && null != d && d.offsetTop > i + s + l.offsetHeight)) break;
            if (o) {
                r++;
                continue;
            }
            (null != d && (d.offsetTop >= i + s || r === e.length - 1) && ((a = d), (o = !0)), r++);
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
            if (!(0, l2.vq)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return { node: t, fixedScrollTop: t.offsetTop - (e.offsetFromTop + n) };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        (null != this.focusAnchor
            ? (this.isPinned()
                  ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                  : this.mergeTo(n, this.handleScroll),
              this.ref.current?.scrollIntoViewNode({
                  node: t,
                  padding: nK.mZ + this.props.additionalMessagePadding,
                  callback: this.handleScroll,
              }))
            : this.mergeTo(n, this.handleScroll),
            this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()));
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
        (t && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(l));
    }
    updateVisibleMessagesDebounced = lt().debounce(l5.s_, 300);
    setAutomaticAnchor(e) {
        ((this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id));
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
            ((this.scrollCounter = 0),
                clearTimeout(this.anchorTimeout),
                this.isPinned() ||
                    (null == this.automaticAnchor
                        ? this.setAutomaticAnchor(this.findAnchor())
                        : this.updateAutomaticAnchor(t.scrollTop, !0)),
                clearTimeout(this.anchorTimeout),
                this.fixScrollPosition(t.offsetHeight, t.scrollHeight),
                (this.scrollTopCache = t.scrollTop));
        else {
            if (null != e && e.target !== this.ref.current?.getScrollerNode()) return;
            this.scrollTopCache !== t.scrollTop &&
                (this.loadMorePausedUntilUserScroll &&
                    null != e &&
                    0 === this.isInScrollTriggerLoadingRegion(t) &&
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
                    ((this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null));
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
            return (this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(t));
        let l = this.isInScrollTriggerLoadingRegion(t);
        (1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(),
            this.handleScrollSpeed(t));
    };
    handleResize = (e, t) => {
        let { offsetHeightCache: n, scrollHeightCache: l } = this;
        ("container" === t ? (n = e.contentRect.height) : "content" === t && (l = e.contentRect.height),
            this.isHeightChange(n, l) && this.fixScrollPosition(n, l));
    };
    handleMouseDown = (e) => {
        e.target === e.currentTarget && (this.dragging = !0);
    };
    handleMouseUp = () => {
        (this.dragging && (this.loadMorePausedUntilUserScroll = !1), (this.dragging = !1), this.handleScroll());
    };
    handleUserScrollGesture = () => {
        this.loadMorePausedUntilUserScroll && ((this.loadMorePausedUntilUserScroll = !1), this.handleScroll());
    };
    handleKeyDown = (e) => {
        ie.has(e.key) && this.handleUserScrollGesture();
    };
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i, topPlaceholderHeight: s, bottomPlaceholderHeight: a } = this.props;
        return i.hasMoreBefore && t < s && l > n ? 1 : i.hasMoreAfter && t >= l - n - a ? 2 : 0;
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
                props: { topPlaceholderHeight: s, bottomPlaceholderHeight: a },
            } = this;
        if (((this.prevScrollTop = t), null == i || this.isPinned() || this.isScrolledToBottom(e))) return;
        let r = this.isInPlaceholderRegion(e),
            o = t - i;
        0 !== r &&
            0 !== o &&
            (1 === r && t + o <= 0
                ? (this.mergeTo(s - n), (this.prevScrollTop = s - n))
                : 2 === r && t + o >= l - n && (this.mergeTo(l - a), (this.prevScrollTop = l - a)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, l7._9)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        ((this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            (this.prevScrollTop = null),
            this.fixJumpTarget(),
            this.isPinned() && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition(),
            this.isLoading() || (this.messageFetchAnchor = null));
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = it(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l2.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : nK.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nK.q4),
            i = () => {
                ((this.jumping = !1),
                    this.setAutomaticAnchor(this.findAnchor()),
                    null != n && n(),
                    this.handleScroll());
            };
        ((this.pinned = !1),
            (this.jumping = e),
            null != l
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, t, this.newMessageBarBuffer()), e, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), e, i));
    }
    getOffsetOrientationFromNode(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = this.ref.current?.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            s = l9(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = it(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== em.rbe.GUILD_VOICE &&
                this.props.channel.type !== em.rbe.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(e + this.props.topPlaceholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    loadMore = (() => {
        var e = this;
        return function () {
            let t,
                n,
                l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                i = arguments.length > 1 ? arguments[1] : void 0,
                { messages: s } = e.props;
            if (l) {
                let e = s.last();
                null != e && (n = e.id);
            } else {
                let e = s.first();
                null != e && (t = e.id);
            }
            (i?.pauseUntilUserScroll === !0 && (e.loadMorePausedUntilUserScroll = !0),
                (e.messageFetchAnchor = e.findFetchAnchor(l)),
                (e.scrollHeightBeforeLoad = e.scrollHeightCache),
                (e.loading = !0),
                y.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(em.EMb, 2 * (0, lX.h)("scrollManager.loadMore")),
                    ...(i?.truncate === !1 ? null : { truncate: !0 }),
                }));
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        (this.ref.current?.scrollTo({ to: e, animate: !v.Ay.useReducedMotion && t, callback: n }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced());
    }
    mergeTo(e, t) {
        (this.ref.current?.mergeTo({ to: e, callback: t }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced());
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter)
            (y.A.jumpToPresent(n.id, (0, lX.h)("scrollManager.jumpToPresent")),
                (0, eY.uh)(n.getGuildId() ?? em.ME, n.id));
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                ((this.jumping = !1), this.handleScroll());
            });
    }
    updateStoreDimensionsDebounced = lt().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) l4.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { topPlaceholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            l4.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
        (this.isJumping() ||
            !n ||
            null == l ||
            v.Ay.useReducedMotion ||
            (ei.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0));
        let a = () => {
            ((this.jumping = !1),
                (0, l2.vq)(s) && ((s.tabIndex = -1), (0, l3.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e()));
        };
        (0, l2.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : nK.mZ,
                  ),
                  n,
                  a,
              )
            : this.scrollToNewMessages(n, "middle", a);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: i, hasUnreads: s, topPlaceholderHeight: a, bottomPlaceholderHeight: r } = this.props;
        if ("top" === e)
            if (!i.hasMoreBefore) return 0;
            else return s ? a - nK.N0 - 2 : a + 500;
        return i.hasMoreAfter ? n - l - r - 500 : n - l;
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
            (this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t));
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        (this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = lt().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor()));
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = lt().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        (this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = lt().uniq(this._scrollCompleteCallbacks)));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = lt().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        ((this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, l7.Z5)(this.props.channel.id, this.props.windowId));
    }
}
n(667532);
var is = n(666860),
    ia = n(486227),
    ir = n(731738),
    io = n(192308),
    ic = n(832712),
    id = n(807393),
    iu = n(662502),
    ih = n(754302),
    im = n(632738),
    ig = n(544231),
    ip = n(349435),
    iA = n(665909),
    iC = n(62617);
function ix(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e,
        o = r.useMemo(() => (0, iC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }), [s]);
    return (0, a.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/8bebc44873d2e7c35f88dbb91386484816332e49b46e9379ef31b1fd9d01e85c.svg",
        className: (0, iC.Z)(),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var iE = n(771800);
function iS(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        o = r.useCallback(() => {
            l?.();
        }, [l]);
    return (0, a.jsxs)("div", {
        className: iE.HZ,
        children: [
            (0, a.jsxs)("div", {
                className: iE.Be,
                children: [
                    (0, a.jsx)(ix, { alt: "", size: 32 }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(eN.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, a.jsx)(ev.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: iE.Uo,
                children: i?.map((e, t) =>
                    (0, a.jsx)(
                        eD.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, a.jsx)(eI.D, {
                      className: iE.b,
                      onClick: o,
                      role: "button",
                      "aria-label": eL.intl.string(eL.t.WAI6xu),
                      children: (0, a.jsx)(eR.P, { size: "md", color: "currentColor", className: iE.b }),
                  })
                : null,
        ],
    });
}
function iI(e) {
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
        id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = r.useCallback(() => {
        (c?.(),
            (0, iA._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: iA.Wm.USER_BANNER_DISMISS }));
    }, [c, t, n, l, i]);
    return (0, a.jsx)(iS, { buttons: d, description: o, header: s, onDismiss: u });
}
var iy = n(477427);
function i_(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eL.intl.string(eL.t.wSZfJR), description: eL.intl.string(eL.t.CRwzW5) },
            { title: eL.intl.string(eL.t.cmMUaB), description: eL.intl.string(eL.t.n6G1ue) },
            { title: eL.intl.string(eL.t["5SPKSy"]), description: eL.intl.string(eL.t.eyjeJQ) },
        ],
        o = r.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        (ic.A.updateChannelOverrideSettings({
            guildId: null,
            channelId: t,
            settings: { muted: !0 },
            label: iy.fd.Muted,
        }),
            iu.A.showMuteSuccessToast(i, t),
            (0, iA._$)({ channelId: t, warningId: l, senderId: i, warningType: ip._j.LIKELY_ATO, cta: e }),
            o());
    }
    return (
        r.useEffect(() => {
            ((0, iA.mO)(em.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: ip._j.LIKELY_ATO,
            }),
                id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iI, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: ip._j.LIKELY_ATO,
            header: eL.intl.string(eL.t.R8UsiI),
            description: eL.intl.string(eL.t.lI8nQl),
            onDismiss: o,
            buttons: [
                {
                    text: eL.intl.string(eL.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        ((0, io.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("532648"), n.e("482911"), n.e("547894")]).then(
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
                                    description: eL.intl.string(eL.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, a.jsx)(
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
                                        (0, a.jsx)(
                                            im.PQ,
                                            {
                                                title: eL.intl.string(eL.t.ftIK2A),
                                                description: eL.intl.string(eL.t.w2ve0t),
                                                buttonText: eL.intl.string(eL.t.ftIK2A),
                                                onButtonPress: () => {
                                                    (c(iA.Wm.USER_MODAL_MUTE), o());
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, a.jsx)(eI.D, {
                                        onClick: () =>
                                            (0, iA._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: ip._j.LIKELY_ATO,
                                                cta: iA.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, a.jsx)(eN.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: eL.intl.format(eL.t.UkH122, {
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
                            }));
                    },
                },
                { text: eL.intl.string(eL.t.ftIK2A), onClick: () => c(iA.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var ij = n(564771),
    iv = n(866660);
function ib(e) {
    let { channel: t, scrollManager: n, flashKey: l } = e,
        i = r.useRef(null),
        { refocusSelectedConversation: s } = K(),
        o = (0, u.bG)([w.A], () => w.A.getConversation(t.id)),
        { isShifted: c } = (function (e) {
            let { bannerRef: t, scrollManager: n } = e,
                { bannerMeasurementRef: l } = K(),
                [i, s] = r.useState(!1),
                a = r.useRef(!1);
            return (
                r.useEffect(() => {
                    if (null == t.current) return;
                    let e = n.ref.current?.getScrollerNode();
                    if (null != e)
                        return (
                            e.addEventListener("scroll", i, { passive: !0 }),
                            () => {
                                (e.removeEventListener("scroll", i), (l.current = null), (a.current = !1), s(!1));
                            }
                        );
                    function i() {
                        if (null == e || null == t.current) return;
                        let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                        l.current = n;
                        let i = e.clientHeight / 2,
                            r = n < i + 50 && n + 40 > i - 50;
                        r !== a.current && ((a.current = r), s(r));
                    }
                }, [l, t, n]),
                { isShifted: i }
            );
        })({ bannerRef: i, scrollManager: n }),
        d = r.useRef(o?.id ?? null);
    if (
        (r.useEffect(() => {
            let e = d.current;
            if (null != e)
                return () => {
                    (0, G.P7)(t.id, e);
                };
        }, [t.id]),
        null == o)
    )
        return null;
    let h = (0, a.jsx)("div", {
        ref: i,
        className: iv.A,
        children: (0, a.jsx)(eF, {
            channel: t,
            conversation: o,
            actionsShifted: c,
            onFocusToggle: s,
            suppressBorder: !0,
        }),
    });
    return null != l ? (0, a.jsx)(e6, { flashKey: l, children: h }) : h;
}
var iN = n(495273),
    iT = n(429933),
    iM = n(176781),
    iR = n(314307),
    iD = n(463930),
    ik = n(442433),
    iL = n(793574),
    iP = n(688810),
    iO = n(967144),
    iG = n(342296),
    iU = n(696451),
    iw = n(427262),
    iF = n(209516);
function iH(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = r.useRef(null),
        { analyticsLocations: o } = (0, iP.Ay)(iL.A.USERNAME),
        c = (0, u.bG)([lq.default], () => lq.default.getUser(t)),
        d = (0, u.bG)([iU.Ay], () => (null != t ? iU.Ay.getMember(l.guild_id, t) : null)),
        h = (0, iO.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function m(e) {
        if (null == c) return null;
        (0, ik.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("926132"),
                n.e("893190"),
                n.e("146652"),
                n.e("882073"),
                n.e("691994"),
                n.e("229787"),
                n.e("576665"),
                n.e("624198"),
                n.e("715038"),
                n.e("823427"),
                n.e("242204"),
                n.e("343116"),
                n.e("70515"),
                n.e("666939"),
                n.e("424966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, a.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? iw.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, a.jsx)(iP.f5, {
              value: o,
              children: (0, a.jsx)(iG.A, {
                  targetElementRef: s,
                  user: c,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: d?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, a.jsx)(eI.D, {
                          ...e,
                          innerRef: s,
                          tag: "span",
                          onContextMenu: m,
                          children: (0, a.jsx)(ev.E, {
                              className: iF.e,
                              tag: "span",
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: (0, a.jsx)(iD.g, { name: g, colorString: p ?? null, colorStrings: h }),
                          }),
                      }),
              }),
          });
}
var iB = n(185973),
    iK = n(91172);
function iV(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t);
    return (0, a.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", {
                className: iK.P,
                children: (0, a.jsx)(iM.x, { size: "lg", color: J.A.colors.ICON_SUBTLE }),
            }),
            (0, a.jsx)(iR.cr, { children: n }),
            null != t.ownerId &&
                (0, a.jsx)(ev.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eL.intl.format(iB.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, a.jsx)(iH, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iz = n(93246),
    iW = n(95701),
    i$ = n(808728),
    iq = n(534890),
    iJ = n(713654),
    iZ = n(691060),
    iX = n(376310),
    iY = n(959717);
function iQ(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, a.jsx)("div", {
        className: c()(iY._, { [iY.L]: l }),
        children: Array.from(t).map((e) =>
            (0, a.jsx)(iX.Ay, { tag: e, onRemove: i, size: null == i ? iX.Ay.Sizes.SMALL : iX.Ay.Sizes.MEDIUM }, e.id),
        ),
    });
}
var i0 = n(151582);
function i1(e) {
    let { channel: t } = e,
        n = (0, iZ.kt)(t),
        { firstMessage: l } = (0, u.cf)([tZ.A], () => tZ.A.getMessage(t.id)),
        i = new Set((0, iZ.zt)(t, n)),
        s = (0, iJ.gU)(t) ?? iq.ChatIcon,
        r = (0, P.Ay)(t);
    return (0, a.jsxs)(iR.Ay, {
        channelId: t.id,
        className: i0.kL,
        children: [
            (0, a.jsx)("div", { className: i0.P0, children: (0, a.jsx)(s, { className: i0.Kk, strokeWidth: 1.75 }) }),
            (0, a.jsx)(iR.cr, { className: i0.wx, children: r }),
            null == l &&
                (0, a.jsx)(ev.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eL.intl.string(eL.t.mE3KJN),
                }),
            (0, a.jsx)(iQ, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var i2 = n(289873),
    i3 = n(548118),
    i4 = n(513461),
    i7 = n(654265),
    i8 = n(561446),
    i5 = n(881817);
function i6(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, u.bG)([lq.default], () => lq.default.getUser(t.userId));
    return (0, a.jsxs)("div", {
        className: i5.I8,
        children: [
            (0, a.jsxs)("div", {
                className: i5.Ov,
                children: [
                    null != n &&
                        (0, a.jsxs)("div", {
                            className: i5.yB,
                            children: [
                                (0, a.jsx)(i3.Ay, { guild: n, active: !0, size: i3.Ay.Sizes.SMOL, className: i5.$f }),
                                (0, a.jsx)(eN.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, a.jsx)(eN.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: eL.intl.format(eL.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== i4.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === i4.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("hr", { className: i5.g2 }),
                            (0, a.jsxs)("div", {
                                className: i5.fs,
                                children: [
                                    (0, a.jsx)(ev.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, a.jsx)(ev.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function i9(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, i7.A)(t.id);
    return (0, a.jsx)(iR.Ay, {
        channelId: t.id,
        className: i5.kL,
        children:
            null != l && null != l.formResponses
                ? (0, a.jsxs)("div", {
                      className: i5.KJ,
                      children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(i6, { guild: i, joinRequest: l }) }),
                          (0, a.jsx)(i8.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, a.jsx)(i2.y, {})
                  : null,
    });
}
var se = n(825484),
    st = n(241541),
    sn = n(571694),
    sl = n(922301),
    si = n(660184),
    ss = n(598104),
    sa = n(396787),
    sr = n(117534);
function so(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, a.jsx)(eS.m, {
              position: "bottom",
              text: eL.intl.string(eL.t["0qPSMV"]),
              children: (0, a.jsxs)(eI.D, {
                  className: c()(sr.e, l),
                  onClick: () => (0, sa.jv)(t.id, s),
                  children: [
                      n,
                      (0, a.jsx)("div", {
                          className: sr.Z,
                          children: (0, a.jsx)(tU.PencilIcon, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)("div", { className: l, children: n });
}
var sc = n(73028),
    sd = n(452015),
    su = n(151440);
function sh(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, u.bG)([v.Ay], () => v.Ay.useReducedMotion),
        o = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: h,
        } = (0, lv.A)({ userId: i?.id, size: l_._3.SIZE_80, animateOnHover: !0 }),
        [m, g] = r.useState(!1),
        p = r.useCallback(() => {
            (d.onMouseEnter(), g(!0));
        }, [d]),
        A = r.useCallback(() => {
            (d.onMouseLeave(), g(!1));
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, a.jsxs)(iR.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && h),
            n.isMultiUserDM()
                ? (0, a.jsx)(so, {
                      channel: n,
                      editable: !0,
                      location: iL.A.EMPTY_GROUP_DM,
                      children: (0, a.jsx)(ss.A, { channel: n, size: l_._3.SIZE_80, animated: t, "aria-label": o }),
                  })
                : (0, a.jsx)(lj.eu, {
                      "aria-label": o,
                      size: l_._3.SIZE_80,
                      src: (0, sn.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, a.jsx)(iR.cr, {
                children: f
                    ? (0, a.jsx)(si.A, {
                          userName: o,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: m ? sl.G.ANIMATED : sl.G.STATIC,
                          loop: !0,
                      })
                    : o,
            }),
            (0, a.jsx)(iR.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, a.jsxs)(se.e, {
                    className: su.U,
                    children: [
                        (0, a.jsx)(sd.NE, { channel: n, text: eL.intl.string(eL.t.NB5DFD), icon: st.D }),
                        (0, a.jsx)(eD.$, {
                            icon: tU.PencilIcon,
                            variant: "secondary",
                            text: eL.intl.string(eL.t["5Q9+/L"]),
                            "aria-label": eL.intl.string(eL.t["5Q9+/L"]),
                            onClick: () => (0, sc.U)(n.id, iL.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var sm = n(136722),
    sg = n(342952),
    sp = n(177953),
    sA = n(725570),
    sf = n(435183),
    sC = n(155718),
    sx = n(685374),
    sE = n(63104),
    sS = n(597367);
function sI(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: r } = e;
    return (
        (t = i
            ? (0, a.jsx)(sE.A, { size: 12, color: s, className: sS.TS })
            : (0, a.jsx)("div", { className: sS.yY, style: { backgroundColor: s } })),
        (0, a.jsxs)("div", { className: c()(n, sS.JC), style: { "--custom-role-label-color": s }, children: [t, r, l] })
    );
}
var sy = n(468689),
    s_ = n(46054),
    sj = n(34457),
    sv = n(317525),
    sb = n(488926),
    sN = n(869685);
function sT(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: r = !1,
        verified: o = !1,
    } = e;
    return (0, a.jsx)(eI.D, {
        className: c()(t, sN.x6, { [sN.r9]: r }),
        onClick: r ? void 0 : s,
        "aria-disabled": r,
        role: "button",
        children: (0, a.jsx)(sI, {
            className: sN.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, a.jsx)(eR.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: sN.Tj,
                    colorClass: sN.eG,
                }),
        }),
    });
}
var sM = n(314040),
    sR = n(165648);
function sD(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        o = (0, u.bG)([sv.A], () => (null != s ? sv.A.getSortedRoles(s) : void 0)),
        d = (0, u.bG)([lq.default, t7.A], () => lq.default.getUser(t7.A.getGuild(s)?.ownerId)),
        h = r.useMemo(() => (null != o ? o.filter((e) => !(0, sj.Oy)(e)) : []), [o]),
        m = r.useMemo(
            () =>
                lt()(h)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sb.aH({ forceRoles: { [e.id]: e }, context: t });
                        return sm.X8(n, sm.kg(em.xBc.ADMINISTRATOR, em.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, h],
        ),
        g = (0, u.yK)(
            [lq.default],
            () => {
                let e = {};
                for (let n of (null != d && (e[d.id] = d), Object.values(t.permissionOverwrites))) {
                    if (n.type !== sC.r2.MEMBER || null != e[n.id]) continue;
                    let t = lq.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return lt()(e)
                    .filter((e) => {
                        let n = sb.$3({ permission: em.xBc.ADMINISTRATOR, user: e, context: t }),
                            l = t.permissionOverwrites[e.id] ?? sb.x3,
                            i = sm.zy(l.allow, em.xBc.VIEW_CHANNEL);
                        return n || i;
                    })
                    .value();
            },
            [t, d],
        ),
        p = tm.A.can(em.xBc.MANAGE_CHANNELS, t) || tm.A.can(em.xBc.MANAGE_ROLES, t),
        A = (0, u.bG)([t7.A, tm.A], () => {
            let e = t7.A.getGuild(s);
            return null != e && tm.A.canAccessGuildSettings(e) && tm.A.canAccessMemberSafetyPage(e);
        }),
        f = r.useCallback(() => l(!1), []);
    return (0, a.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iR.WK, { locked: !0, channelType: t.type }),
            (0, a.jsx)(iR.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: i }) }),
            (0, a.jsx)(iR.j1, {
                className: sR.PT,
                children: eL.intl.format(eL.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => s_.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, a.jsxs)("div", {
                      className: sM.$x,
                      children: [
                          (0, a.jsx)(eD.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eL.intl.string(eL.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sp.n,
                          }),
                          (0, a.jsx)(eD.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eL.intl.string(eL.t["3gUsJb"]),
                              onClick: function () {
                                  sf.Ay.open(t.id);
                              },
                              icon: tU.PencilIcon,
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: sM.ol,
                children: [
                    (function () {
                        if (1 !== g.length || m.length > 0)
                            return (0, a.jsx)(sg.A, { guildId: t.guild_id, className: sM.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = iw.Ay.getName(e);
                        return (0, a.jsxs)("div", {
                            className: sM.HD,
                            children: [
                                (0, a.jsx)(lj.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: l_._3.SIZE_24,
                                }),
                                (0, a.jsx)(ev.E, {
                                    tag: "span",
                                    className: sM.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, a.jsx)(ev.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: eL.intl.string(eL.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    m.map((e, n) => {
                        let l = e.colorString ?? em.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return A
                            ? (0, a.jsx)(
                                  sT,
                                  {
                                      className: c()(sM.JC, { [sM.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: i,
                                      onClick: () => {
                                          (sy.A.open(t.guild_id, em.BEX.MEMBERS), sy.A.selectRole(e.id));
                                      },
                                  },
                                  e.id,
                              )
                            : (0, a.jsx)(
                                  sI,
                                  {
                                      className: c()(sM.JC, { [sM.HV]: n === m.length - 1 }),
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
                ? (0, a.jsx)(sA.aF, {
                      renderModal: (e) =>
                          (0, a.jsx)(sx.default, { ...e, onClose: () => (f(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sk = n(270171);
function sL(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, u.bG)([tm.A], () => tm.A.can(em.xBc.MANAGE_CHANNELS, t) && iW.bk.has(t.type));
    return (0, a.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iR.WK, { channelType: t.type }),
            (0, a.jsx)(iR.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: n }) }),
            (0, a.jsx)(iR.j1, {
                className: sR.PT,
                children: eL.intl.format(eL.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => s_.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, a.jsx)("div", {
                      className: sk.U,
                      children: (0, a.jsx)(eD.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eL.intl.string(eL.t["3gUsJb"]),
                          onClick: () => {
                              sf.Ay.open(t.id);
                          },
                          icon: tU.PencilIcon,
                      }),
                  })
                : null,
        ],
    });
}
var sP = n(909833);
function sO(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, a.jsx)("div", { style: { marginTop: -8 } })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ev.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, a.jsx)("div", {
                          className: sP.VA,
                          children: eL.intl.format(eL.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, a.jsx)(
                                      iH,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, a.jsx)("span", {
                                              className: c()(sP.eM, sP.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === em.rbe.PRIVATE_THREAD
                      ? (0, a.jsx)(ev.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eL.intl.string(eL.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sG(e) {
    let { channel: t } = e,
        n = (0, iJ.gU)(t) ?? tO.y,
        l = (0, P.Ay)(t);
    return (0, a.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", { className: sP.P0, children: (0, a.jsx)(n, { className: sP.Kk }) }),
            (0, a.jsx)(iR.cr, { children: l }),
            (0, a.jsx)(sO, { channel: t }),
        ],
    });
}
var sU = n(187495),
    sw = n(321404),
    sF = n(957283),
    sH = n(436726);
function sB() {
    return (0, a.jsx)("div", {
        className: sH.k,
        children: (0, a.jsx)(ev.E, {
            variant: "text-md/normal",
            color: "text-muted",
            className: sH.Q,
            children: eL.intl.string(eL.t.eeJvfA),
        }),
    });
}
var sK = n(189213),
    sV = n(933958),
    sz = n(988534),
    sW = n(321191);
function s$(e) {
    return (0, u.bG)([sW.A], () => (null !== e ? sW.A.getUserProfile(e ?? em.dJq)?.application : void 0)) ?? void 0;
}
var sq = n(260498),
    sJ = n(5960),
    sZ = n(381991),
    sX = n(616334),
    sY = n(246338),
    sQ = n(434279),
    s0 = n(712440),
    s1 = n(733110),
    s2 = n(543465),
    s3 = n(308528),
    s4 = n(928658),
    s7 = n(978914),
    s8 = n(977347);
function s5(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: o,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, u.bG)([nb.A], () => nb.A.getRelationshipType(t), [t])) === em.eA$.NONE ||
                    l === em.eA$.BLOCKED ||
                    l === em.eA$.PENDING_INCOMING,
                s = s$(n ? t : null),
                a = !0 === (0, sJ.A)(n ? (s?.id ?? t) : null, n),
                r = n ? !a : i,
                o = (0, s8.D)(e.id, t),
                { message: c, loaded: d, error: h } = (0, s7.I)(e, { enabled: r }),
                m = o ?? (c?.author?.id === t ? c : null);
            return { message: m, isReportable: r, isLoaded: null != m || d || h };
        })(t, n.id, l),
        { channelId: c } = (0, sF.N)(),
        d = t.id === c,
        h = !nn.Fr && !d,
        m = r.useCallback(() => {
            null != i &&
                (0, s4.b8)(i, () => {
                    s3.A.closePrivateChannel(t.id, h);
                });
        }, [t.id, i, h]);
    return !s || (null == i && o)
        ? null
        : (0, a.jsx)(eD.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: m,
              text: eL.intl.string(eL.t.HHZmDn),
          });
}
var s6 = n(809526);
function s9(e) {
    let { channel: t } = e,
        l = (0, u.bG)([s2.Ay], () => s2.Ay.isChannelMuted(null, t.id));
    return (0, a.jsx)(eD.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eL.intl.string(eL.t.YqAjXy) : eL.intl.string(eL.t.w4m945),
        onClick: function () {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await n.e("499312").then(n.bind(n, 259763));
                return (n) => (0, a.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function ae(e) {
    let { application: t, project: n } = e;
    return (0, a.jsx)(eD.$, {
        variant: "secondary",
        text: eL.intl.string(s6.default.jMMrDM),
        onClick: () => {
            var e;
            return (
                (e = t.id),
                void (null != (0, sQ.wu)(n) || null != (0, sY.oX)("openConjureProjectEditor")
                    ? (0, sZ.Ay)(n.id)
                    : (0, sX.A)(n.id, { initialTab: "app", isPreview: n.preview_application_id === e }))
            );
        },
    });
}
function at(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, u.bG)([sV.Ay], () => sV.Ay.getSelfEmbeddedActivities());
    function s() {
        s0.A.delete(l.id);
        let e = i.get(n.id);
        null != e && (0, sz.d)({ location: e.location, applicationId: n.id });
    }
    return (0, a.jsx)(eD.$, {
        variant: "secondary",
        text: eL.intl.string(eL.t.xUqheM),
        onClick: () => {
            ((0, io.openModal)((e) =>
                (0, a.jsx)(sK.a, {
                    title: eL.intl.string(eL.t["DT39A+"]),
                    subtitle: eL.intl.formatToPlainString(eL.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: eL.intl.string(eL.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: eL.intl.string(eL.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                (s(), e.onClose());
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                t8.default.track(em.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                }));
        },
    });
}
function an(e) {
    var t, n;
    let l,
        i,
        { channel: s, user: o } = e,
        c = s$(o?.id ?? em.dJq),
        { authorizedAppToken: d, authorizedAppsFetchState: h } = (0, u.cf)([s1.default], () => ({
            authorizedAppToken: s1.default.getNewestTokenForApplication(c?.id),
            authorizedAppsFetchState: s1.default.getFetchState(),
        })),
        { isOwned: m, project: g } =
            ((t = c?.id),
            (n = o.bot),
            (l = (0, sJ.A)(t, n)),
            (i = (0, u.bG)([sq.Ay], () => (!0 === l && null != t ? sq.Ay.findProjectByApplicationId(t) : null), [
                l,
                t,
            ])),
            { isOwned: l, project: i });
    return (r.useEffect(() => {
        o.bot && h === s1.FetchState.NOT_FETCHED && s0.A.fetch();
    }, [o.bot, h]),
    o.bot && null != c && (null != d || null != g))
        ? (0, a.jsxs)(se.e, {
              size: "sm",
              children: [
                  (0, a.jsx)(s9, { channel: s }),
                  null != g
                      ? (0, a.jsx)(ae, { application: c, project: g })
                      : null != d && !1 === m
                        ? (0, a.jsx)(at, { application: c, channel: s, oauth2Token: d })
                        : null,
                  (0, a.jsx)(s5, { channel: s, user: o }),
              ],
          })
        : (0, a.jsx)(se.e, { size: "sm", children: (0, a.jsx)(s5, { channel: s, user: o }) });
}
var al = n(692617),
    ai = n(903209),
    as = n(402860),
    aa = n(518477),
    ar = n(976926);
function ao(e) {
    let { userId: t, channelId: n, showDivider: l = !1, compact: i = !1 } = e,
        s = (0, u.bG)([sW.A], () => sW.A.getMutualGuilds(t), [t]),
        o = lq.default.getUser(t);
    r.useEffect(() => {
        null == s && null != o && (0, ai.A)(t, o.getAvatarURL(null, 80), { withMutualGuilds: !0 });
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
              className: c()(ar.kL, l ? ar.yF : null),
              children: (0, a.jsx)(ev.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: eL.intl.string(eL.t.zjVh8h),
              }),
          })
        : (0, a.jsxs)(eI.D, {
              className: c()(ar.kL, ar.vk, { [ar.yF]: l }),
              onClick: function () {
                  (0, as.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: aa.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iL.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, a.jsx)(al.A, {
                      guilds: d,
                      maxGuilds: 3,
                      size: i ? i3.Ay.Sizes.SMOL : i3.Ay.Sizes.SMALLER,
                      hideOverflowCount: !0,
                  }),
                  (0, a.jsx)(ev.E, {
                      className: ar.NI,
                      variant: "text-sm/normal",
                      children: eL.intl.format(eL.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var ac = n(49229),
    ad = n(327166),
    au = n(390848),
    ah = n(156328);
function am(e) {
    let { userId: t } = e;
    async function n() {
        (await ac.A.blockUser(t, { location: em.liQ.DM_CHANNEL }), iu.A.showBlockSuccessToast(t));
    }
    return (0, a.jsx)(eD.$, { size: "sm", variant: "secondary", onClick: n, text: eL.intl.string(eL.t.l4Emac) });
}
function ag(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, ad.D)(t, i),
        r = (0, u.bG)([nb.A], () => nb.A.getRelationshipType(t), [t]),
        o = (0, u.bG)([nb.A], () => nb.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, au.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: em.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, a.jsx)(eD.$, {
              variant: l,
              onClick: function () {
                  r === em.eA$.PENDING_INCOMING
                      ? c()
                      : ac.A.addRelationship({ userId: t, context: { location: em.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function ap(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eD.$, {
        variant: "secondary",
        onClick: function () {
            ac.A.removeFriend(t, { location: em.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.cvSt1J),
    });
}
function aA(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eD.$, {
        variant: "secondary",
        onClick: function () {
            ac.A.unblockUser(t, { location: em.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.XyHpKH),
    });
}
function af(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, u.bG)([nb.A], () => nb.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, au.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: em.liQ.DM_CHANNEL,
        });
    return (0, a.jsxs)("div", {
        className: ah.K,
        children: [
            (0, a.jsx)(ev.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eL.intl.format(eL.t.uIomXw, { username: iw.Ay.getName(n) }),
            }),
            (0, a.jsxs)(se.e, {
                size: "sm",
                children: [
                    (0, a.jsx)(eD.$, { variant: "primary", onClick: s, text: eL.intl.string(eL.t["+WbSn5"]) }),
                    (0, a.jsx)(eD.$, {
                        variant: "secondary",
                        onClick: function () {
                            ac.A.cancelFriendRequest(n.id, { location: em.liQ.DM_CHANNEL });
                        },
                        text: eL.intl.string(eL.t.rQSndv),
                    }),
                    (0, a.jsx)(am, { userId: n.id }),
                    l ? null : (0, a.jsx)(s5, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function aC(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: r,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, u.bG)([nb.A], () => nb.A.getRelationshipType(l.id), [l.id]);
    if (c === em.eA$.PENDING_INCOMING && !o) return (0, a.jsx)(af, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case em.eA$.NONE:
        case em.eA$.PENDING_INCOMING:
            l.bot || (t = (0, a.jsx)(ag, { userId: l.id, showingBanner: i, variant: s, label: r }));
            break;
        case em.eA$.FRIEND:
            t = (0, a.jsx)(ap, { userId: l.id });
            break;
        case em.eA$.BLOCKED:
            t = (0, a.jsx)(aA, { userId: l.id });
            break;
        case em.eA$.PENDING_OUTGOING:
            t = (0, a.jsx)(eD.$, { variant: "primary", disabled: !0, text: eL.intl.string(eL.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== em.eA$.BLOCKED;
    return (0, a.jsxs)(se.e, {
        size: "sm",
        children: [t, d ? (0, a.jsx)(am, { userId: l.id }) : null, i ? null : (0, a.jsx)(s5, { channel: n, user: l })],
    });
}
var ax = n(92650),
    aE = n(138298),
    aS = n(358047);
function aI(e) {
    let { channel: t, user: n } = e,
        l = r.useCallback(() => {
            (0, eM.P0)({ text: eL.intl.string(eL.t.a2j0hv), variant: "critical" });
        }, []),
        i = r.useCallback(() => {
            aE.A.closeChannelSidebar(aS.fe);
        }, []),
        s = r.useCallback(() => {
            aE.A.closeChannelSidebar(aS.fe);
        }, []),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, ax.t)({ user: lq.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, a.jsxs)(se.e, {
        size: "sm",
        children: [
            (0, a.jsx)(eD.$, {
                variant: "primary",
                disabled: g,
                onClick: () => o(t.id),
                loading: d,
                text: eL.intl.string(eL.t.Kz8Pwr),
            }),
            (0, a.jsx)(eD.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: eL.intl.string(eL.t.B2nygW),
            }),
            (0, a.jsx)(s5, { channel: t, user: n }),
        ],
    });
}
var ay = n(693833);
function a_(e) {
    var t;
    let n,
        { channel: l, user: i, showingBanner: s } = e,
        { channelId: r } = (0, sF.N)(),
        o = (0, u.bG)([nb.A], () => nb.A.getRelationshipType(i.id), [i.id]),
        c = l.id === r,
        d = (0, sw.c)(l.id),
        h =
            ((t = l.id),
            (0, u.bG)(
                [ef.A],
                () => {
                    var e;
                    return (e = ef.A.getMessages(t)).ready && 0 === e.length && !e.hasMoreBefore && !e.hasMoreAfter;
                },
                [t],
            )),
        m = !0 === i.bot,
        g = i.isNonUserBot(),
        p = (0, eq.U)(),
        A = ay.n;
    return (
        g
            ? (n = null)
            : p
              ? ((n = (0, a.jsx)(aC, {
                    channel: l,
                    user: i,
                    showingBanner: s,
                    addFriendVariant: "active",
                    addFriendLabel: eL.intl.string(eL.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (A = ay.O))
              : c && d
                ? (n = (0, a.jsx)(aI, { channel: l, user: i }))
                : m
                  ? (n = (0, a.jsx)(an, { channel: l, user: i }))
                  : ((n = (0, a.jsx)(aC, { channel: l, user: i, showingBanner: s })),
                    o === em.eA$.PENDING_INCOMING && (A = ay.O)),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: A,
                    children: [
                        (0, a.jsx)(ao, { userId: i.id, channelId: l.id, showDivider: A !== ay.O, compact: p }),
                        n,
                    ],
                }),
                d && h ? (0, a.jsx)(sB, {}) : null,
            ],
        })
    );
}
var aj = n(746080),
    av = n(221851);
function ab(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iN.Ae)(n),
        i = (0, u.bG)([i$.Ay], () => null != n.guild_id && n === i$.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, iT.A)(n.id)) return null;
    if (n.isForumPost()) return (0, a.jsx)(i1, { channel: n });
    if (n.isMediaThread()) return (0, a.jsx)(iV, { channel: n });
    if (iW.Le.has(n.type)) return (0, a.jsx)(sG, { channel: n });
    if (i) return (0, a.jsx)(sU.A, { channel: n });
    else if (l) return (0, a.jsx)(sD, { channel: n });
    return (0, a.jsx)(sL, { channel: n });
}
function aN(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, u.bG)([lq.default], () => (t.isPrivate() ? lq.default.getUser(t.getRecipientId()) : null)),
        r = iw.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, u.cf)([tm.A], () => ({
            canManageRoles: tm.A.can(em.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: tm.A.can(em.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, a.jsx)(sh, { channel: t, children: eL.intl.string(eL.t.Rzvnig) });
    if (i === em.rbe.DM)
        return (0, a.jsxs)(sh, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, a.jsx)(eN.D, { variant: "heading-xl/medium", className: av.SX, children: r }),
                eL.intl.format(eL.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, a.jsx)(iz.Y, { userId: s.id }) : null,
                null != s ? (0, a.jsx)(a_, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, a.jsxs)(iR.Ay, {
                channelId: t.id,
                children: [
                    (0, a.jsx)(iR.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: l }) }),
                    (0, a.jsx)(iR.j1, { children: eL.intl.string(eL.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(aj.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, a.jsx)(i9, { channel: t });
        else return (0, a.jsx)(sh, { channel: t, children: eL.intl.format(eL.t.MFwcqO, { name: l }) });
    return c
        ? (0, a.jsx)(ab, { channel: t, canManageRoles: o })
        : (0, a.jsx)(iR.Ay, {
              channelId: t.id,
              children: (0, a.jsx)(iR.j1, { children: eL.intl.format(eL.t.hPVEQG, { channelName: l }) }),
          });
}
var aT = n(506774),
    aM = n(933832),
    aR = n(782603),
    aD = n(408278),
    ak = n(763175),
    aL = n(56562),
    aP = n(765671),
    aO = n(304072),
    aG = n(578623),
    aU = n(702841),
    aw = n(696986),
    aF = n(147036),
    aH = n(975571),
    aB = n(36491),
    aK = n(953727);
function aV(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, aK.A)(l),
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
var az = n(423382);
function aW(e) {
    let { threadId: t } = e,
        n = (0, aU.bG)([e0.A], () => e0.A.getChannel(t)),
        l = (0, aU.bG)([e0.A], () => e0.A.getChannel(n?.parent_id)),
        i = r.useCallback(() => {
            null != n &&
                null != l &&
                ((0, is.zV)(em.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, tg.C)((0, aF.af)(n, l)));
        }, [n, l]);
    return (0, a.jsxs)("div", {
        className: az.BQ,
        children: [
            (0, a.jsx)(aV, {}),
            (0, a.jsxs)("div", {
                className: az.BB,
                children: [
                    (0, a.jsx)(ev.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eL.intl.string(eL.t["5uAO7d"]),
                    }),
                    (0, a.jsx)(ev.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t.WnfPV3, {
                            helpArticleUrl: aH.A.getCreatorSupportArticleURL(em.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, a.jsx)(aw.h, { size: 4 }),
                    (0, a.jsx)(eD.$, {
                        text: eL.intl.string(eL.t.C5UQC9),
                        variant: "primary",
                        icon: tM.LinkIcon,
                        onClick: i,
                    }),
                ],
            }),
            (0, a.jsx)(eI.D, {
                className: az.b,
                onClick: function () {
                    (0, aB.sF)(t);
                },
                "aria-label": eL.intl.string(eL.t["0+xZH0"]),
                children: (0, a.jsx)(eR.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var a$ = n(505527),
    aq = n(467073),
    aJ = n(960538),
    aZ = n(604121),
    aX = n(988904);
function aY() {
    return n
        .e("515423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let aQ = r.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, u.bG)([v.Ay], () => v.Ay.useReducedMotion),
        i = (0, u.bG)([tm.A], () => tm.A.can(em.xBc.SEND_MESSAGES_IN_THREADS, t)),
        s = (0, to.s5)(t),
        r = (0, u.bG)([ed.default], () => ed.default.getId());
    return n
        ? i && !s && t.ownerId !== r
            ? (0, a.jsxs)("div", {
                  className: aX.aP,
                  children: [
                      (0, a.jsx)(aZ.a, { importData: aY, shouldAnimate: !l, className: aX.lY }),
                      (0, a.jsxs)("div", {
                          className: aX.FS,
                          children: [
                              (0, a.jsx)(eN.D, {
                                  variant: "heading-md/semibold",
                                  children: eL.intl.string(eL.t.OmBThA),
                              }),
                              (0, a.jsx)(ev.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: eL.intl.string(eL.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
            : null
        : (0, a.jsx)("div", { className: aX.yF });
});
var a0 = n(930390),
    a1 = n(831688),
    a2 = n(226698),
    a3 = n(892340),
    a4 = n(715757),
    a7 = n(390897),
    a8 = n(862482),
    a5 = n(215026),
    a6 = n(66834),
    a9 = n(964486),
    re = n(351001),
    rt = n(400528);
function rn(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, a.jsx)(eS.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, a.jsx)(aD.K, {
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
var rl = n(291185),
    ri = n(145530),
    rs = n(905499),
    ra = n(406810),
    rr = n(991982),
    ro = n(838111),
    rc = n(870136);
function rd(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        o = s?.reported_user_id,
        c = (0, u.bG)([lq.default], () => (null != o ? lq.default.getUser(o) : null)),
        d = (0, u.bG)([t7.A], () => t7.A.getGuild(t.guild_id));
    (0, a4.ml)(l);
    let h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, u.bG)([rt.A], () => null != l && rt.A.isUserBanned(l.id)),
                o = null != l && null == s,
                [c, d] = r.useState(o),
                h = (0, u.bG)([tm.A], () => null != l && null != i && (0, re.fJ)(l, i, [tm.A]));
            if (
                ((0, a9.Ay)(() => {
                    o && a6.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !h)
            )
                return null;
            let m = !0 === s ? eL.intl.string(rl.default.dpfwQ1) : eL.intl.string(rl.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, a.jsx)(
                rn,
                {
                    text: m,
                    icon: a5.w,
                    onClick: function () {
                        null != l &&
                            (0, io.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("420282"), n.e("802504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: a8.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        m = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, u.bG)([tm.A], () => null != l && null != i && (0, re.KX)(l, i, [tm.A])),
                r = (0, u.bG)([iU.Ay], () => null == l || null == iU.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = r ? eL.intl.string(rl.default.Ux67nW) : eL.intl.string(rl.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, a.jsx)(
                rn,
                {
                    text: o,
                    icon: rs.N,
                    onClick: function () {
                        null != l &&
                            (0, io.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("742258"),
                                    n.e("253335"),
                                    n.e("916758"),
                                    n.e("947802"),
                                    n.e("387634"),
                                    n.e("623927"),
                                    n.e("479971"),
                                    n.e("202622"),
                                    n.e("736621"),
                                    n.e("140243"),
                                ]).then(n.bind(n, 547166));
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
                    s = (0, u.bG)([tm.A], () => null != n && null != l && (0, re.Kd)(n, l, [tm.A])),
                    { messageReference: r } = t,
                    o = (0, u.bG)([ef.A], () => (null != r ? ef.A.getMessage(r.channel_id, r.message_id) : null)),
                    c = (0, u.bG)([e0.A], () => (null != o ? e0.A.getChannel(o.channel_id) : null)),
                    d = (0, u.bG)([e0.A], () => e0.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let h = null == o ? eL.intl.string(rl.default["0IZbwC"]) : eL.intl.string(rl.default.Uj6oD4),
                    m = null == o,
                    g = `delete-message-${t.id}`;
                return (0, a.jsx)(
                    rn,
                    {
                        text: h,
                        icon: tB.TrashIcon,
                        onClick: function () {
                            null != c &&
                                null != o &&
                                ri.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: m,
                        color: a8.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            h,
            m,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, u.bG)(
                        [lq.default, t7.A, tm.A],
                        () => null != n && null != l && (0, ro.b)(l.id, n.id, [lq.default, t7.A, tm.A]),
                    ),
                    [s, r] = (0, rc.Ay)(n?.id, t.guild_id),
                    o = (0, u.bG)([iU.Ay], () => null != l && null != n && null != iU.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, a.jsx)(
                    rn,
                    {
                        text: r ? eL.intl.string(rl.default["6uMZbv"]) : eL.intl.string(rl.default["Sgg/uI"]),
                        icon: ra.ClockIcon,
                        onClick: function () {
                            null != n && (0, rr.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
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
function ru(e) {
    let { message: t, channel: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, a.jsx)(rd, { channel: n, message: t, snapshot: e }, l)),
    });
}
var rh = n(152007),
    rm = n(472456),
    rg = n(435470),
    rp = n(473503),
    rA = n(853742),
    rf = n(371476),
    rC = n(356974),
    rx = n(65406);
function rE(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, a3.uW)(t),
        [s, o] = r.useState(!1);
    function c() {
        (o(!0),
            a2.A.resolveFlag(t.id).then(() => {
                o(!1);
            }));
    }
    return i
        ? (0, a.jsx)(eD.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eL.intl.string(rl.default["2Y4vkk"]) : eL.intl.string(rl.default.YIbR4r),
              onClick: function () {
                  !0 === aT.w.get(a7.f)
                      ? c()
                      : (0, io.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, a.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: aM.CheckmarkLargeIcon,
              disabled: l,
          })
        : null;
}
function rS(e) {
    let {
            postId: t,
            isFirstMessage: n,
            isLastItem: l = !1,
            parentChannelId: i,
            hideDivider: s = !1,
            hideFollowButton: o = !1,
            hideUnfollowButton: d = !1,
            className: h,
        } = e,
        { ref: m, width: g } = (0, aP.Ay)(),
        [p, A] = r.useState(3),
        [f, C] = r.useState(!n),
        [x, E] = (0, aO.A)(!1, 2e3),
        S = (0, u.bG)([e0.A], () => e0.A.getChannel(t), [t]),
        { firstMessage: I } = (0, rp.OA)(S),
        _ = (0, u.bG)([rh.A], () => rh.A.hasJoined(t)),
        { disableReactionUpdates: j, disableReactionCreates: v, isLurking: b, isPendingMember: N } = (0, aq.A)(S),
        T = (0, a4.W1)(S),
        M = (0, u.bG)([e0.A], () => e0.A.getChannel(i)),
        R = (0, rg.Ck)(M),
        D = (0, u.bG)([aG.A], () => aG.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        k = r.useCallback(
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
            let t = new IntersectionObserver(k, { threshold: 1 });
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
    let L = null != I && I.reactions.length > 0;
    function P() {
        null != S &&
            ((0, rA.jC)({ postId: S.id, location: { section: em.JJy.CHANNEL_HEADER } }),
            (0, tg.C)((0, aF.af)(S, M), () => E(!0)));
    }
    let O = _ ? aM.CheckmarkLargeIcon : aR.BellIcon;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: c()(rf.kL, { [rf.wx]: f }, h),
                ref: m,
                children: [
                    T
                        ? (0, a.jsx)("div", {
                              className: rf.kX,
                              children: null != I && (0, a.jsx)(ru, { message: I, channel: S }),
                          })
                        : (0, a.jsx)("div", {
                              className: rf.hY,
                              children:
                                  null != I &&
                                  (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          !L &&
                                              !v &&
                                              null != R &&
                                              (0, a.jsx)("div", {
                                                  className: rC.reactions,
                                                  children: (0, a.jsx)(a1.q, {
                                                      message: I,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: b,
                                                      isPendingMember: N,
                                                      emoji: R,
                                                      type: a$.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, a.jsx)(a0.A, {
                                              message: I,
                                              channel: S,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: j,
                                              isLurking: b,
                                              isPendingMember: N,
                                              maxReactions: p,
                                              className: rf.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !v &&
                                              (0, a.jsx)(aJ.t, {
                                                  message: I,
                                                  channel: S,
                                                  useChatFontScaling: !1,
                                                  className: c()(rx.secondary, rf.vU, rC.visible, { [rf.w$]: !L }),
                                                  isForumToolbar: !0,
                                                  children: !L && eL.intl.string(eL.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, a.jsxs)("div", {
                        className: rf.Uo,
                        children: [
                            T
                                ? (0, a.jsx)(rE, { channel: S })
                                : !b &&
                                  (!o || _) &&
                                  (!d || !_) &&
                                  (0, a.jsx)(eS.m, {
                                      text: eL.intl.string(eL.t.F7oeDv),
                                      children: (0, a.jsx)(eD.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: _ ? eL.intl.string(eL.t["7OkUzs"]) : eL.intl.string(eL.t["3aOv+h"]),
                                          onClick: function () {
                                              null != S &&
                                                  (_
                                                      ? rm.A.leaveThread(S, "Forum Toolbar")
                                                      : rm.A.joinThread(S, "Forum Toolbar"));
                                          },
                                      }),
                                  }),
                            (0, a.jsx)(eS.m, {
                                text: eL.intl.string(eL.t.WqhZss),
                                children: x
                                    ? (0, a.jsx)(eD.$, {
                                          icon: aM.CheckmarkLargeIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eL.intl.string(eL.t.t5VZ88),
                                      })
                                    : (0, a.jsx)(aD.K, {
                                          icon: tM.LinkIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eL.intl.string(eL.t.WqhZss),
                                      }),
                            }),
                            f &&
                                (0, a.jsx)(eS.m, {
                                    text: eL.intl.string(eL.t.nFP4oa),
                                    children: (0, a.jsx)(aD.K, {
                                        icon: ak.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: function () {
                                            null != S &&
                                                y.A.jumpToMessage({
                                                    channelId: S.id,
                                                    messageId: S.id,
                                                    flash: !0,
                                                    jumpType: aL.vx.INSTANT,
                                                });
                                        },
                                        "aria-label": eL.intl.string(eL.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, a.jsx)(aW, { threadId: t }),
            !s && (0, a.jsx)(aQ, { channel: S, isLastItem: l }),
        ],
    });
}
var rI = n(364522),
    ry = n(80682),
    r_ = n(441939),
    rj = n(983851),
    rv = n(104171),
    rb = n(262763),
    rN = n(499211),
    rT = n(763827),
    rM = n(977997),
    rR = n(607567),
    rD = n(917592),
    rk = n(689125),
    rL = n(477569);
function rP(e) {
    let { channel: t, className: n } = e,
        l = (0, to._M)(t),
        i = (0, to.gZ)(t),
        s = (0, u.bG)([rM.A], () => rM.A.isInChannel(t.id)),
        o = (0, u.bG)([rR.Ay], () => rR.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: d } = (0, rN.A)(t.id),
        h = (0, u.bG)([rT.A], () => (rT.A.getChannelId() === t.id ? rT.A.getState() : em.S7L.RTC_DISCONNECTED), [t.id]),
        m = r.useCallback(() => {
            rb.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: d, locked: !1 });
        }, [t, s, d]),
        g = r.useMemo(() => o.map((e) => e.user.id), [o]),
        p = (0, rg.$I)(t, g),
        A = p.length > 0,
        { connectionStatusText: f } = rD.A.getStatus(h, !1);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(eS.m, {
                text: i ? (l ? void 0 : eL.intl.string(rk.default.yaoRu1)) : eL.intl.string(rk.default.yBjQ3q),
                caretConfig: { position: "bottom", align: "start" },
                align: "left",
                children: (0, a.jsxs)(eI.D, {
                    className: c()(rL.Xt, l ? null : rL.tW),
                    onClick: l ? m : void 0,
                    children: [
                        (0, a.jsx)(rj.H, {
                            size: "refresh_sm",
                            color: s ? J.A.colors.STATUS_POSITIVE : J.A.colors.ICON_MUTED,
                        }),
                        (0, a.jsx)(ev.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: rL.Gp,
                            children: h === em.S7L.RTC_DISCONNECTED ? eL.intl.string(rk.default.ficpp7) : f,
                        }),
                    ],
                }),
            }),
            A
                ? (0, a.jsx)(rv.Ay, {
                      className: rL.L_,
                      guildId: t.guild_id,
                      users: p,
                      size: rv.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var rO = n(950490);
function rG(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, iZ.kt)(l),
        o = (0, lw.IO)(l),
        c = t?.author.id,
        d = (0, r.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, ry.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, a.jsxs)("div", {
            className: rO.TX,
            children: [
                (0, a.jsxs)(rI.Ar, {
                    children: [
                        null != t
                            ? (0, a.jsx)("ol", {
                                  children: (0, a.jsx)(nW, {
                                      className: rO.iU,
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
                            className: rO.iQ,
                            children: [
                                null == t &&
                                    (0, a.jsx)(ev.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: eL.intl.string(eL.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, a.jsx)("div", {
                                        className: rO.GA,
                                        children: s.map((e) =>
                                            (0, a.jsx)(iX.Ay, { tag: e, size: iX.Ay.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, a.jsx)(r_.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, a.jsx)("div", { className: rO.b1 }),
                                (0, a.jsx)(rS, {
                                    className: rO.Jr,
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
                                            (0, a.jsx)("div", { className: rO.b1 }),
                                            (0, a.jsx)(rP, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: rO.ld }),
            ],
        })
    );
}
var rU = n(640708),
    rw = n(378570),
    rF = n(452082),
    rH = n(327337);
function rB(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = r.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        o = (0, u.bG)([nb.A], () => nb.A.isBlocked(i)),
        c = r.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    r.useEffect(() => {
        ((0, iA.QF)({ ...c, viewName: iA.gN.SAFETY_WARNING_BANNER }),
            id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW }));
    }, [c]);
    let d = r.useCallback(
            (e) => {
                (0, iA._$)({ ...c, cta: e });
            },
            [c],
        ),
        h = r.useCallback(() => {
            ((0, io.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("456510"),
                        n.e("506627"),
                        n.e("770940"),
                        n.e("302033"),
                        n.e("882830"),
                        n.e("623068"),
                    ]).then(n.bind(n, 516567));
                    return (n) => {
                        let { transitionState: s, onClose: r } = n;
                        return (0, a.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: r,
                        });
                    };
                },
                { modalKey: rH.V },
            ),
                d(iA.Wm.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, i, l, d]),
        m = r.useCallback(() => {
            (s(), d(iA.Wm.USER_BANNER_BLOCK_CONFIRM));
        }, [s, d]),
        g = r.useCallback(() => {
            (s(), d(iA.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [s, d]),
        p = r.useCallback(() => {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("770940"), n.e("784938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, a.jsx)(e, {
                        transitionState: l,
                        onBlock: m,
                        onBlockAndReport: g,
                        onCancel: () => {
                            (s?.(), d(iA.Wm.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [m, g, i, t, d]);
    return (0, a.jsx)(iI, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eL.intl.string(eL.t.ZzlB5p),
        description: eL.intl.string(eL.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eL.intl.string(eL.t.Qyu4UK), variant: "primary", onClick: h },
            ...(o ? [] : [{ text: eL.intl.string(eL.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var rK = n(74114);
function rV(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, u.cf)([nb.A], () => ({ isIgnored: nb.A.isIgnored(t) }), [t]),
        s = r.useCallback(() => {
            ((0, iA._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: ip._j.STRANGER_DANGER,
                cta: iA.Wm.USER_MODAL_IGNORE,
            }),
                ac.A.ignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]),
        o = r.useCallback(() => {
            ((0, iA._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: ip._j.STRANGER_DANGER,
                cta: iA.Wm.USER_MODAL_UNIGNORE,
            }),
                ac.A.unignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]);
    return (0, a.jsx)(im.PQ, {
        title: eL.intl.string(eL.t.avyV7P),
        description: eL.intl.string(eL.t.naWE6W),
        buttonText: i ? eL.intl.string(eL.t["3SrzRT"]) : eL.intl.string(eL.t.avyV7P),
        onButtonPress: i ? o : s,
    });
}
function rz(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, u.cf)([nb.A], () => ({ isBlocked: nb.A.isBlocked(i) }), [i]),
        o = r.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        c = (0, rH.eT)(),
        d = r.useCallback(
            (e) => () => {
                (ac.A.blockUser(i, { location: rH.Rx }).then(() => {
                    (iu.A.showBlockSuccessToast(i, t), o());
                }),
                    (0, iA._$)({
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        warningType: ip._j.STRANGER_DANGER,
                        cta: e,
                    }));
            },
            [o, t, l, i],
        );
    function h(e, s, r) {
        (0, io.openModalLazy)(async () => {
            let { default: o } = await Promise.all([n.e("283887"), n.e("670398"), n.e("826696"), n.e("367554")]).then(
                n.bind(n, 219801),
            );
            return (n) =>
                (0, a.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        (r?.(),
                            (0, iA._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: ip._j.STRANGER_DANGER,
                                cta: s,
                            }));
                    },
                });
        });
    }
    return (
        r.useEffect(() => {
            ((0, iA.mO)(em.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: ip._j.STRANGER_DANGER,
            }),
                id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iI, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: ip._j.STRANGER_DANGER,
            header: eL.intl.string(eL.t.iOkDpM),
            description: eL.intl.string(eL.t.ISUbcM),
            onDismiss: o,
            buttons: [
                {
                    text: eL.intl.string(eL.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        ((function e() {
                            (0, io.openModalLazy)(async () => {
                                let { default: s } = await Promise.all([
                                    n.e("532648"),
                                    n.e("482911"),
                                    n.e("547894"),
                                ]).then(n.bind(n, 129493));
                                return (n) => {
                                    let { transitionState: r, onClose: o } = n;
                                    return (0, a.jsx)(s, {
                                        transitionState: r,
                                        onClose: o,
                                        channelId: t,
                                        warningId: l,
                                        senderId: i,
                                        description: eL.intl.string(eL.t.DJMZX6),
                                        safetyTipRows: c.map((e, t) =>
                                            (0, a.jsx)(ih.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    rV,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, a.jsx)(
                                                    im.PQ,
                                                    {
                                                        title: eL.intl.string(eL.t["5QYPO2"]),
                                                        description: eL.intl.string(eL.t.G08MKu),
                                                        buttonText: eL.intl.string(eL.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            (o(),
                                                                h(
                                                                    iA.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    iA.Wm.USER_MODAL_BLOCK_CANCEL,
                                                                    e,
                                                                ));
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
                            (0, iA._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: ip._j.STRANGER_DANGER,
                                cta: iA.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eL.intl.string(eL.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => h(iA.Wm.USER_BANNER_BLOCK_CONFIRM, iA.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var rW = n(306788),
    r$ = n(340833),
    rq = n(913642),
    rJ = n(453302),
    rZ = n(670455),
    rX = n(912104);
function rY(e) {
    let { summary: t, channel: n } = e,
        l = (0, aU.bG)([lK.A], () => lK.A.summaryFeedback(t));
    function i(e, l) {
        (e.stopPropagation(), (0, rJ.A)({ summary: t, channel: n, rating: l }));
    }
    let s = (0, Q.p)(
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
                      className: rX.RD,
                      children: (0, a.jsxs)(q.animated.div, {
                          style: e,
                          className: rX.GK,
                          children: [
                              (0, a.jsx)(ev.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: eL.intl.string(eL.t["5ZsiE9"]),
                              }),
                              (0, a.jsx)(eI.D, {
                                  onClick: (e) => i(e, rZ.P0.GOOD),
                                  children: (0, a.jsx)(rq.A, { className: rX.O1, width: 12, height: 12 }),
                              }),
                              (0, a.jsx)(eI.D, {
                                  onClick: (e) => i(e, rZ.P0.BAD),
                                  children: (0, a.jsx)(r$.A, { className: rX.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function rQ(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aU.bG)([lK.A], () => lK.A.selectedSummary(l.id));
    if (null == s) return null;
    let r = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(rW.K, { size: "xs", color: "currentColor", className: rX.cR }), n.content],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(rY, { summary: s, channel: l }),
                      (0, a.jsx)(rW.K, { size: "xs", color: "currentColor", className: rX.Jq }),
                  ],
              })),
        (0, a.jsx)(
            nX.A,
            {
                className: c()(rX.aK, o ? rX.Ke : rX.hO),
                contentClassName: o ? rX.Ew : rX.rD,
                isUnread: r,
                id: r ? nK.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var r0 = n(383233),
    r1 = n(309010),
    r2 = n(675171),
    r3 = n(806621),
    r4 = n(636922),
    r7 = n(857740);
let r8 = r.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = r.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, a.jsx)(eI.D, {
        className: c()(r7.XI, { [r7.Lq]: t }),
        onClick: l,
        "aria-label": eL.intl.string(t ? eL.t.hC8KHg : eL.t.XBlaiC),
        children: (0, a.jsx)(ev.E, {
            variant: "text-sm/normal",
            color: "text-link",
            className: r7.Qq,
            children: t ? eL.intl.string(eL.t.hC8KHg) : eL.intl.string(eL.t.XBlaiC),
        }),
    });
});
var r5 = n(44788),
    r6 = n(330001),
    r9 = n(631576),
    oe = n(750385),
    ot = n(148355),
    on = n(845321);
let ol = "749054660769218631";
function oi(e) {
    let { channel: t } = e,
        [n, l] = r.useState("");
    r.useEffect(() => {
        (0, r9.zk)("847199849233514549", !0);
    }, []);
    let i = (0, u.bG)(
            [ef.A, ed.default],
            () =>
                !!lt()(ef.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== ed.default.getId() && e.state === em.cmJ.SENT && !(0, e7.A)(e)),
        ),
        s = (0, u.bG)([lq.default], () => lq.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        o = iw.Ay.useName(s) ?? eL.intl.string(eL.t.y1Wu2f),
        c = (0, u.bG)([oe.A], () => oe.A.getStickerById(ol)),
        d = r.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    ((0, r6.W)({ channelId: t.id, source: "In-channel greet" }), await y.A.sendGreetMessage(t.id, ol));
                } catch (e) {
                    e.ok || 429 !== e.status || l(eL.intl.string(eL.t.Whhv4w));
                }
        }, [t.id, n]),
        h = eL.intl.formatToPlainString(eL.t.m0zYbV, { username: o }),
        m =
            null != n && "" !== n
                ? (0, a.jsx)(ev.E, {
                      className: on.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, a.jsxs)("div", {
              className: on.ft,
              children: [
                  (0, a.jsxs)(eI.D, {
                      className: null != n && "" !== n ? on.AO : on.Iq,
                      "aria-label": eL.intl.string(eL.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, a.jsx)(ot.A, { sticker: c, size: 24 }),
                          (0, a.jsx)(ev.E, { className: on.Qq, variant: "text-md/medium", children: h }),
                      ],
                  }),
                  m,
              ],
          })
        : (0, a.jsxs)("div", {
              className: on.nj,
              children: [
                  (0, a.jsx)(ot.A, { sticker: c, size: 160, className: on.Xr }),
                  (0, a.jsx)(eD.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: h,
                  }),
                  m,
              ],
          });
}
var os = n(900210),
    oa = n(626360);
function or(e) {
    return null != e && e.type === em.TZK.MESSAGE && e.content.id === e.groupId;
}
function oo(e) {
    return (
        e.type === em.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === em.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === em.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === em.TZK.MESSAGE_GROUP_SUSPENDED_USER
    );
}
let oc = r.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, a.jsx)(r4.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new r0.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: em.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, a.jsx)(ij.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var od = n(33176);
let ou = { bottom: 16 },
    oh = (0, k.P)(E);
function om(e) {
    let t,
        n,
        l,
        i,
        {
            className: s,
            messageGroupSpacing: o,
            scrollerClassName: h,
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: C,
            uploads: x,
            hasUnreads: E,
            editingMessageId: N,
            fontSize: T,
            keyboardModeEnabled: M,
            filterAfterTimestamp: R,
            showingQuarantineBanner: D,
            hideSummaries: k = !1,
            jumpBarClassName: L,
            typingGradient: G,
            isGameInvitesPost: U,
        } = e,
        [w, F] = r.useState(lz.A.isAtBottom(m.id) ?? !0),
        H = (0, P.Ay)(m),
        K = (0, lX.I)(f, T),
        V = f ? K : Math.round(0.87 * K),
        z = Math.max(1, Math.round((V / 30) * 8)),
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
                    let r = s / em.hH7.FONT_SIZE_DEFAULT,
                        o = t ? n2.BP : n2.B5,
                        c = t ? n2.Uj : n2._G,
                        d = 0,
                        u = Array(n)
                            .fill(null)
                            .map(() => {
                                let e = lt().random(1, l);
                                return ((d += a * r), (d += o * r), (d += (e - 1) * c * r), e);
                            }),
                        h = u.map((e, t) => t),
                        m = [];
                    for (; m.length < i;) {
                        let e = { width: lt().random(140, 400), height: lt().random(100, 320) };
                        (m.push([h.splice(lt().random(0, h.length - 1), 1)[0], e]), (d += e.height + n2.VF * r));
                    }
                    return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                })({ compact: f, messageGroups: V, groupRange: 4, attachments: z, fontSize: T, groupSpacing: o }),
            [f, V, z, T, o],
        ),
        $ = (0, u.bG)([lH.A], () =>
            tm.A.can(em.xBc.READ_MESSAGE_HISTORY, m) ? null : lH.A.getViewingRolesTimestamp(m.getGuildId()),
        ),
        q = R ?? $,
        J = g.hasMoreBefore && null == q,
        Z = J ? W.totalHeight : 0,
        X = g.hasMoreAfter ? W.totalHeight : 0,
        Y = (function (e) {
            let {
                    messages: t,
                    channel: n,
                    compact: l,
                    hasUnreads: i,
                    focusId: s,
                    topPlaceholderHeight: a,
                    bottomPlaceholderHeight: o,
                    canLoadMore: c = !0,
                    handleScrollToBottom: d,
                    handleScrollFromBottom: u,
                    additionalMessagePadding: h = 0,
                } = e,
                { windowId: m } = r.useContext(l8.Ay),
                [g] = r.useState(
                    () =>
                        new ii({
                            messages: t,
                            channel: n,
                            compact: l,
                            hasUnreads: i,
                            focusId: s,
                            topPlaceholderHeight: a,
                            bottomPlaceholderHeight: o,
                            canLoadMore: c,
                            windowId: m,
                            handleScrollToBottom: d,
                            handleScrollFromBottom: u,
                            additionalMessagePadding: h,
                        }),
                );
            return (
                g.getSnapshotBeforeUpdate(s),
                r.useLayoutEffect(() =>
                    g.mergePropsAndUpdate({
                        messages: t,
                        channel: n,
                        compact: l,
                        hasUnreads: i,
                        focusId: s,
                        topPlaceholderHeight: a,
                        bottomPlaceholderHeight: o,
                        canLoadMore: c,
                        windowId: m,
                        handleScrollToBottom: d,
                        handleScrollFromBottom: u,
                        additionalMessagePadding: h,
                    }),
                ),
                r.useLayoutEffect(() => () => g.cleanup(), [g]),
                g
            );
        })({
            messages: g,
            channel: m,
            compact: f,
            hasUnreads: E,
            focusId: N,
            topPlaceholderHeight: Z,
            bottomPlaceholderHeight: X,
            canLoadMore: null == R,
            handleScrollToBottom: r.useCallback(() => F(!0), [F]),
            handleScrollFromBottom: r.useCallback(() => F(!1), [F]),
            additionalMessagePadding: 48,
        }),
        Q = (function (e) {
            let { scrollerRef: t, ...n } = e,
                l = (0, j.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                i = (0, j.A)(() => {
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
                            t.current?.scrollIntoViewNode({ node: i, padding: 4 * nK.mZ, callback: () => i?.focus() });
                    },
                    [n.keyboardModeEnabled, t],
                ),
                a = r.useCallback(() => {
                    n.hasMoreAfter || eC._.dispatchToLastSubscribed(em.jej.TEXTAREA_FOCUS);
                }, [n.hasMoreAfter]),
                o = (0, l1.Ay)({
                    id: e4.D,
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
            return ((0, lJ.Vo)({ event: em.jej.FOCUS_MESSAGES, handler: c }), o);
        })({ scrollerRef: Y.ref, isEditing: null != N, keyboardModeEnabled: M, hasMoreAfter: g.hasMoreAfter }),
        {
            channelStreamMarkup: ee,
            newMessagesBar: et,
            jumpToPresentBar: en,
            forumPostActionBar: ea,
            pinnedFirstMessage: er,
            safetyWarningBanner: eo,
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
                    messageDisplayCompact: h,
                    channelStream: m,
                    uploads: g,
                    loadMore: p,
                    scrollManager: A,
                    specs: f,
                    filterAfterTimestamp: C,
                    hasTopPlaceholders: x,
                    showingQuarantineBanner: E,
                    hideSummaries: S,
                    jumpBarClassName: I,
                    isGameInvitesPost: j,
                } = e,
                N = lq.default.getCurrentUser();
            function T() {
                return A.isInitialized() || o.ready;
            }
            let M = (0, r3.r)(s),
                R = m.some((e) => e.type === em.TZK.FORUM_POST_ACTION_BAR),
                D = (0, _.cI)(s),
                k = (0, u.bG)([lK.A], () => lK.A.shouldShowTopicsBar() && !S),
                L = (0, rK.l)(s.id),
                P = (0, rF.j)(s.id, rH.Rx),
                O = (0, ia.E)(s.id),
                G = (0, r2.A)(),
                U = (function (e, t) {
                    if (e.isDM() && null != t)
                        if (t.type === ip._j.STRANGER_DANGER)
                            return (0, a.jsx)(rz, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else if (t.type === ip._j.LIKELY_ATO)
                            return (0, a.jsx)(i_, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else return (0, a.jsx)(rB, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                    return null;
                })(s, L ?? P ?? O),
                w = !s.isForumPost() || R || j ? null : (0, a.jsx)(rS, { postId: s.id }),
                { firstMessage: F, loaded: H } = (0, lw.n5)(s, j),
                B =
                    j && H
                        ? (0, a.jsx)(
                              rG,
                              {
                                  compact: h,
                                  channel: s,
                                  message: F,
                                  id: null != F ? (0, e4.j)(s.id, F.id) : `deleted-${s.id}`,
                              },
                              F?.id ?? `deleted-${s.id}`,
                          )
                        : null,
                K = (0, iT.A)(s.id),
                V = (0, a4.W1)(s);
            ((t = eQ.Sf.useSetting()),
                (n = (0, aU.bG)([v.Ay], () => v.Ay.useReducedMotion)),
                r.useEffect(() => {
                    function e(e) {
                        let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                        a ||
                            r !== a$.v.BURST ||
                            !t ||
                            n ||
                            (0, t0.on)({ channelId: i, messageId: l, emoji: s, key: os.W.EXTERNAL });
                    }
                    return (
                        b.h.subscribe("MESSAGE_REACTION_ADD", e),
                        () => {
                            b.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                        }
                    );
                }, [t, n]));
            let z = null,
                W = [],
                $ = m.map((e, t) => {
                    if (e.type === em.TZK.DIVIDER) {
                        let n = null != e.unreadId;
                        return null != C
                            ? null
                            : e.isConversationChannelHeader
                              ? (0, a.jsx)(
                                    ib,
                                    { channel: s, scrollManager: A, flashKey: e.flashKey },
                                    `conversation-${e.contentKey ?? t}`,
                                )
                              : e.isSummaryDivider
                                ? (0, a.jsx)(
                                      rQ,
                                      {
                                          index: t,
                                          item: e,
                                          channel: s,
                                          isBeforeGroup: null == e.content && or(m[t + 1]),
                                      },
                                      `summary-divider-${e.contentKey ?? t}`,
                                  )
                                : (0, a.jsx)(
                                      nX.A,
                                      {
                                          isUnread: n,
                                          isBeforeGroup: null == e.content && or(m[t + 1]),
                                          id: n ? nK.q4 : void 0,
                                          itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                          children: e.content,
                                      },
                                      `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                  );
                    }
                    if (e.type === em.TZK.FORUM_POST_ACTION_BAR)
                        return (0, a.jsx)(
                            rS,
                            {
                                parentChannelId: s.parent_id,
                                postId: s.id,
                                isLastItem: t + 1 === m.length,
                                isFirstMessage: !0,
                            },
                            `forum-post-action-bar-${s.id}`,
                        );
                    if (oo(e)) {
                        let t,
                            n = !0;
                        return (
                            e.type === em.TZK.MESSAGE_GROUP_BLOCKED
                                ? (t = eL.t["+FcYM/"])
                                : e.type === em.TZK.MESSAGE_GROUP_IGNORED
                                  ? (t = eL.t["VFWjc+"])
                                  : e.type === em.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                    ? ((t = eL.t.rHRovo), (n = !1))
                                    : (t = eL.t.xfkfTK),
                            (0, a.jsx)(
                                n1,
                                {
                                    unreadId: nK.q4,
                                    messages: e,
                                    channel: s,
                                    compact: h,
                                    collapsedReason: t,
                                    canUncollapse: n,
                                },
                                e.key,
                            )
                        );
                    }
                    if (null != C && C > e.content.timestamp.getTime()) return;
                    e.type === em.TZK.MESSAGE && null == z && (z = e);
                    let n = e.groupId === z?.groupId ? z.content.id : e.groupId,
                        l = V && e.content.isFirstMessageInForumPost(s),
                        i = e.type === em.TZK.THREAD_STARTER_MESSAGE ? nV : nW;
                    return (0, a.jsx)(
                        i,
                        {
                            compact: h && !l,
                            channel: s,
                            message: e.content,
                            groupId: n,
                            flashKey: e.flashKey,
                            id: (0, e4.j)(s.id, e.content.id),
                            isLastItem: t >= m.length - 1,
                            renderContentOnly: K || l,
                        },
                        e.content.id,
                    );
                });
            W.push(...$);
            let q = m[m.length - 1];
            if (
                (null != N &&
                    g.forEach((e, t) => {
                        let n = 0 === t && (0, es.l)(s, q, new r0.Ay({ type: em.lAJ.DEFAULT, author: N }));
                        W.push(
                            (0, a.jsx)(
                                oc,
                                { file: e, channel: s, user: N, isGroupStart: n, compact: h },
                                `upload-${e.id}`,
                            ),
                        );
                    }),
                x)
            ) {
                o.length > 0 &&
                    (o.length > 1 &&
                        o.length < em.UNo &&
                        (function (e) {
                            let t = 0,
                                n = 0;
                            for (let l of e)
                                l.type !== em.TZK.DIVIDER &&
                                    (oo(l)
                                        ? (t += l.content.filter((e) => e.type !== em.TZK.DIVIDER).length)
                                        : (n += 1));
                            return t > n;
                        })(m) &&
                        W.unshift(
                            (0, a.jsx)(
                                r8,
                                {
                                    loading: o.loadingMore,
                                    onClick: () => p(!1, { pauseUntilUserScroll: !0, truncate: !1 }),
                                },
                                "load-more-before",
                            ),
                        ),
                    W.unshift((0, a.jsx)("div", { style: { height: nK.N0, flex: "0 0 auto" } }, "buffer")));
                let { useReducedMotion: e } = v.Ay;
                ((e && T()) || !e) && W.unshift((0, a.jsx)(lQ, { compact: h, ...f }, "has-more"));
            }
            if (
                (x || j || W.unshift((0, a.jsx)(aN, { channel: s, showingBanner: E }, "empty-message")),
                o.hasMoreAfter && W.push((0, a.jsx)(lQ, { compact: h, ...f }, "has-more-after")),
                !E && M && T() && W.push((0, a.jsx)(oi, { channel: s })),
                c > 0 && d && T())
            ) {
                let e,
                    t,
                    n = lW.Ay.getOldestUnreadTimestamp(s.id),
                    i = 0 !== n ? n : ei.default.extractTimestamp(s.id),
                    r = (0, el.ro)(new Date(), new Date(i));
                if (
                    (lW.Ay.isEstimated(s.id)
                        ? ((e = r ? eL.t.wvtbbG : eL.t.tHqbtg), (t = eL.t.vaPWFe))
                        : ((e = r ? eL.t["BctFH/"] : eL.t["3wXb9P"]), (t = eL.t["4H8ldG"])),
                    D && (0, _.Kc)(s) && G.includes(oa.i.SUMMARIES))
                ) {
                    let n = lW.Ay.ackMessageId(s.id),
                        r = (function (e, t) {
                            let n = lK.A.summaries(e) ?? [],
                                l = 0;
                            for (let e of n) ei.default.compare(e.endId, t) > 0 && (l += 1);
                            return l;
                        })(s.id, lW.Ay.getOldestUnreadMessageId(s.id));
                    if (
                        ((0, is.zV)(em.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                            num_unread_summaries: r,
                            num_unread_messages: c,
                            last_ack_message_id: n,
                            summaries_enabled_by_user: k,
                            summaries_enabled_for_channel: (0, _.pk)(s),
                        }),
                        (0, _.pk)(s))
                    ) {
                        let n = k ? eL.intl.format(t, { count: c }) : eL.intl.format(e, { count: c, timestamp: i });
                        if (k) {
                            let e =
                                r > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(ev.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eL.intl.format(t, { count: c }),
                                              }),
                                              (0, a.jsx)(rU.A, {
                                                  style: { paddingLeft: 8, paddingRight: 8 },
                                                  height: 4,
                                                  width: 4,
                                              }),
                                              (0, a.jsx)(ev.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eL.intl.format(eL.t.CBftDc, { count: r }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(ev.E, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: n,
                                      });
                            l = (0, a.jsx)(r5.OZ, { scrollManager: A, content: e, channel: s });
                        } else {
                            let e = (0, a.jsx)("div", {
                                style: { display: "flex", textTransform: "none", alignItems: "center" },
                                children:
                                    r > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(ev.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eL.intl.format(t, { count: c }),
                                                  }),
                                                  (0, a.jsx)(rU.A, {
                                                      style: { paddingLeft: 8, paddingRight: 8 },
                                                      height: 4,
                                                      width: 4,
                                                  }),
                                                  (0, a.jsx)(ev.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eL.intl.format(eL.t.CBftDc, { count: r }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(ev.E, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: n,
                                          }),
                            });
                            l = (0, a.jsx)(r5.GN, { content: e, channelId: s.id });
                        }
                    }
                } else
                    G.includes(oa.i.NEW_MESSAGES) &&
                        (l = (0, a.jsx)(r5.GN, {
                            content: eL.intl.format(e, { count: c, timestamp: i }),
                            channelId: s.id,
                        }));
            }
            if (
                (null == l &&
                    (0, _.pk)(s) &&
                    k &&
                    G.includes(oa.i.SUMMARIES) &&
                    (l = (0, a.jsx)(r5.UK, { channel: s, scrollManager: A })),
                o.error)
            )
                i = (0, a.jsx)(r5.Ez, {
                    loading: o.loadingMore,
                    onClick: () => {
                        var e;
                        return (
                            (e = s.id),
                            void y.A.fetchMessages({
                                channelId: e,
                                limit: (0, lX.h)("renderStream.reload"),
                                truncate: !0,
                            })
                        );
                    },
                    className: I,
                });
            else if (o.hasMoreAfter && T()) {
                let { jumpReturnTargetId: e } = o;
                i =
                    o.loadingMore && o.jumpedToPresent
                        ? (0, a.jsx)(r5.Ab, { className: I })
                        : null != e
                          ? (0, a.jsx)(r5.Ab, {
                                type: r5.ks.REPLY,
                                onClick: () => {
                                    y.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                },
                                className: I,
                            })
                          : (0, a.jsx)(r5.Ab, {
                                onClick: () => {
                                    let e;
                                    return (
                                        y.A.jumpToPresent(s.id, (0, lX.h)("renderStream.jumpToPresent")),
                                        (e = r1.Ay.getChannelId()),
                                        void (s.id === e && (0, rw.iN)(s.id))
                                    );
                                },
                                className: I,
                            });
            }
            return {
                channelStreamMarkup: W,
                newMessagesBar: l,
                jumpToPresentBar: i,
                forumPostActionBar: w,
                pinnedFirstMessage: B,
                safetyWarningBanner: U,
            };
        })({
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: C,
            uploads: x,
            loadMore: Y.loadMore,
            scrollManager: Y,
            specs: W,
            hasTopPlaceholders: J,
            filterAfterTimestamp: q,
            showingQuarantineBanner: D,
            hideSummaries: k,
            jumpToPresent: function () {
                g.hasPresent()
                    ? Y.ref.current?.scrollToBottom({ animate: !v.Ay.useReducedMotion })
                    : y.A.jumpToPresent(m.id, K);
            },
            jumpBarClassName: L,
            isGameInvitesPost: U,
        });
    ((t = Y.ref),
        (n = r.useCallback(() => t.current?.scrollToBottom(), [t])),
        (l = r.useCallback(() => {
            (Y.handleUserScrollGesture(), t.current?.scrollPageUp({ animate: !v.Ay.useReducedMotion }));
        }, [Y, t])),
        (i = r.useCallback(() => {
            (Y.handleUserScrollGesture(), t.current?.scrollPageDown({ animate: !v.Ay.useReducedMotion }));
        }, [Y, t])),
        (0, lJ.Vo)({ event: em.jej.SCROLLTO_PRESENT, handler: n }),
        (0, lJ.Vo)({ event: em.jej.SCROLL_PAGE_UP, handler: l }),
        (0, lJ.Vo)({ event: em.jej.SCROLL_PAGE_DOWN, handler: i }));
    let ec = (0, S.R7)(),
        { ref: ed, ...eu } = (0, d.LT)(Q),
        eh = r.useRef(null),
        eg = r.useMemo(() => ({ ref: eh, padding: ou }), []),
        ep = (0, j.A)((e) => {
            let t = e?.getScrollerNode() ?? null;
            ((Y.ref.current = e), (ed.current = t), (eh.current = t));
        }),
        eA = (0, u.bG)([O.A], () => O.A.gradientPreset),
        ef = eQ.eh.useSetting().customUserThemeSettings,
        ex = (0, lV.V)(),
        eE = (0, lF.Q)(),
        eS = null != eA || (null != ef && !ex) || null != eE,
        eI = r.useMemo(() => (G ? (w ? od.gA : od.ru) : od.Zd), [G, w]),
        ey = r.useMemo(() => (G ? (w ? od.cz : od.XF) : od.U6), [G, w]);
    return (0, a.jsxs)(d.hD, {
        navigator: Q,
        children: [
            er,
            null != eo && eo,
            (0, a.jsxs)("div", {
                className: c()(od.Og, s, `group-spacing-${o}`),
                children: [
                    null == eo && et,
                    (0, a.jsxs)(B, {
                        channel: m,
                        scrollManager: Y,
                        children: [
                            (0, a.jsx)(oh, {
                                ref: ep,
                                customTheme: !0,
                                className: c()(h, od.XG, eS ? ey : void 0),
                                contentClassName: od.gT,
                                onResize: Y.handleResize,
                                onScroll: Y.handleScroll,
                                onMouseDown: Y.handleMouseDown,
                                onMouseUp: Y.handleMouseUp,
                                onWheel: Y.handleUserScrollGesture,
                                onTouchMove: Y.handleUserScrollGesture,
                                onKeyDown: Y.handleKeyDown,
                                ...ec,
                                tabIndex: -1,
                                role: "group",
                                children: (0, a.jsxs)(I.W.Provider, {
                                    value: eg,
                                    children: [
                                        ea,
                                        (0, a.jsxs)("ol", {
                                            className: od.bv,
                                            "aria-label": eL.intl.formatToPlainString(eL.t.XarRiL, {
                                                channelName: H ?? "",
                                            }),
                                            ...eu,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: od.$4,
                                                    id: "messagesNavigationDescription",
                                                    "aria-hidden": !0,
                                                    children: eL.intl.string(eL.t["Spb3s/"]),
                                                }),
                                                ee,
                                                (0, a.jsx)("div", {
                                                    className: c()({
                                                        [od.lB]: !D,
                                                        [od.Ie]: 0 === g.length && !g.loadingMore,
                                                        [od.Fb]:
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
                            eS ? null : (0, a.jsx)("div", { className: eI }),
                            en,
                            (0, a.jsx)(lG, { channel: m, scrollManager: Y }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let og = r.memo(function (e) {
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
            permissionVersion: h,
            canChat: m,
        } = (function (e) {
            let t = e.getGuildId(),
                n = (0, u.bG)([th.A], () => null == t || th.A.canChatInGuild(t), [t]),
                { canManageMessages: l, permissionVersion: i } = (0, u.cf)(
                    [tm.A],
                    () => ({
                        canManageMessages: tm.A.can(em.xBc.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? tm.A.getGuildVersion(t) : null,
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
            let e = eQ.hH.useSetting(),
                t = eQ.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: l,
                    keyboardModeEnabled: i,
                } = (0, u.cf)([v.Ay], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = v.Ay;
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
            editingMessageId: I,
            isGameInvitesPost: y,
        } = (function (e) {
            var t, n;
            let l,
                i = (0, u.bG)([ef.A], () => ef.A.getMessages(e.id), [e.id]),
                s = (0, u.bG)([lW.Ay], () => lW.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                { enabled: a } = en.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                o = lq.default.getUser(ed.default.getId())?.hasFlag(em.nhx.SPAMMER) ?? !1,
                c = (0, _.cI)(e),
                d = (0, lU.A)("use_topic_dividers_in_chat"),
                h = (0, u.yK)([lK.A], () => (c && d ? (lK.A.summaries(e.id) ?? []) : []), [c, e.id, d]),
                m = (0, u.bG)([lK.A], () => (c ? lK.A.selectedSummary(e.id) : null), [c, e.id]),
                g = ((t = e.id), (0, u.bG)([w.A], () => w.A.getConversation(t) ?? void 0, [t])),
                p =
                    ((n = i),
                    (l = r.useMemo(() => {
                        let e = new Set();
                        return (
                            n.forEach((t) => {
                                null != t.applicationId && null == t.application && e.add(t.applicationId);
                            }),
                            Array.from(e)
                        );
                    }, [n])),
                    (0, L.A)(l));
            !(function (e, t) {
                let [n, l] = (function (e, t) {
                    let [n, l] = r.useMemo(
                            () =>
                                (function (e, t) {
                                    if (!t.isPrivate()) return [D, R];
                                    let n = e.filter((e) => e.application?.id != null && e.activity?.party_id != null),
                                        l = n.map((e) => e.id);
                                    return [n, l];
                                })(e, t),
                            [e, t],
                        ),
                        i = (0, u.yK)(
                            [T.A],
                            () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            T.A.findActivity(
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
                            },
                            [n],
                        );
                    return [
                        l,
                        r.useMemo(
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
                r.useEffect(() => {
                    for (let e of l)
                        N.A.isSubscribed(e) || b.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                }, [l]);
            })(i, e);
            let A = (0, lw.YG)(e),
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
                                } = e,
                                h = [],
                                m = !1,
                                g = null != a ? ei.default.extractTimestamp(a) : null,
                                p = null;
                            return (
                                !u &&
                                    i.isForumPost() &&
                                    !s.hasMoreBefore &&
                                    !s.first()?.isFirstMessageInForumPost(i) &&
                                    h.push({ type: em.TZK.FORUM_POST_ACTION_BAR }),
                                s.forEach((e) => {
                                    var A, f;
                                    let C, x, E;
                                    if (u && e.isFirstMessageInForumPost(i)) return;
                                    if (null != o && o.length > 0) {
                                        let t = ei.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = ei.default.extractTimestamp(o[e].startId),
                                                l = ei.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (p === o[e].id) break;
                                                (h.push({
                                                    type: em.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (p = o[e].id));
                                                break;
                                            }
                                        }
                                    }
                                    let S = (0, el.i$)(e.timestamp, "LL");
                                    S !== t &&
                                        null == p &&
                                        (h.push({ type: em.TZK.DIVIDER, content: S, contentKey: S }), (t = S));
                                    let I = h[h.length - 1],
                                        y = null,
                                        _ = (0, ea.kf)(e);
                                    m = m || _;
                                    let j = eA(i, e, _ && r);
                                    (null !== j &&
                                        ([y, I] =
                                            ((x = A = I),
                                            null == A || A.type !== j
                                                ? ((C = { type: j, content: [], key: e.id }), h.push(C))
                                                : (x = (C = A).content[C.content.length - 1]),
                                            [C, x])),
                                    a === e.id && null != g)
                                        ? (null != I && I.type === em.TZK.DIVIDER
                                              ? (I.unreadId = e.id)
                                              : null !== y
                                                ? ((f = y),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      f.content.push({ type: em.TZK.DIVIDER, unreadId: e.id }),
                                                  (f.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  h.push({ type: em.TZK.DIVIDER, unreadId: e.id }),
                                          (g = null))
                                        : null != g &&
                                          ei.default.extractTimestamp(e.id) > g &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              h.push({ type: em.TZK.DIVIDER, unreadId: e.id }),
                                          (g = null));
                                    let v =
                                        null !=
                                        (E = (function (e, t) {
                                            if (eg.get(t.id) === e.id) return ep(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, eo.Lt)(e.flags, em.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === ed.default.getId() ||
                                                null != e.activity ||
                                                (0, eo.Lt)(t.recipientFlags ?? 0, er.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                eg.has(t.id)
                                            )
                                                return null;
                                            let n = ep(e, t.id);
                                            eg.set(t.id, e.id);
                                            let l = (0, eo.lA)(
                                                t.recipientFlags ?? 0,
                                                er.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return (ec.A.updatePrivateChannelRecipientFlags(t.id, l), n);
                                        })(e, i))
                                            ? { message: E, position: "before" }
                                            : null;
                                    null != v &&
                                        "before" === v.position &&
                                        h.push({ type: em.TZK.MESSAGE, content: v.message, groupId: v.message.id });
                                    let b = I?.type === em.TZK.MESSAGE ? l : I;
                                    (0, es.l)(i, b, e) && (n = e.id);
                                    let N = {
                                        type:
                                            e.type === em.lAJ.THREAD_STARTER_MESSAGE
                                                ? em.TZK.THREAD_STARTER_MESSAGE
                                                : em.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = N);
                                    let { jumpSequenceId: T, jumpFlash: M, jumpTargetId: R } = s;
                                    (M && e.id === R && null != T && (N.flashKey = T),
                                        s.jumpTargetId === e.id && (N.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            h.push({
                                                type: em.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            (h.push({
                                                type: em.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationChannelHeader: !0,
                                                flashKey: N.flashKey,
                                            }),
                                            (N.flashKey = void 0)),
                                        null !== y
                                            ? (y.content.push(N), N.jumpTarget && (y.hasJumpTarget = !0))
                                            : h.push(N),
                                        e.isFirstMessageInForumPost(i) &&
                                            h.push({ type: em.TZK.FORUM_POST_ACTION_BAR }),
                                        null != v &&
                                            "after" === v.position &&
                                            h.push({ type: em.TZK.MESSAGE, content: v.message, groupId: v.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            h.push({
                                                type: em.TZK.DIVIDER,
                                                contentKey: c.endId,
                                                isSummaryDivider: !0,
                                            }));
                                }),
                                m && (0, ea.iJ)(i) && en.trackExposure({ location: "416cc9_1" }),
                                h
                            );
                        })({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: s,
                            treatSpam: a && !o,
                            summaries: h,
                            selectedSummary: m,
                            selectedConversation: g,
                            pinFirstMessage: A,
                        }),
                    [i, e, s, a, h, m, g, p, o, A],
                );
            return {
                messages: i,
                channelStream: f,
                oldestUnreadMessageId: s,
                editingMessageId: (0, u.bG)([e2.A], () => e2.A.getEditingMessage(e.id)?.id),
                isGameInvitesPost: A,
            };
        })(t),
        j = (0, lZ.A)(f, d);
    return (0, a.jsx)(lB.Bs.Provider, {
        value: j,
        children: (0, a.jsx)(l0.t, {
            children: (0, a.jsx)(om, {
                ...c,
                messageGroupSpacing: g,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (i || A),
                messages: x,
                channelStream: E,
                permissionVersion: h,
                uploads: (0, u.bG)([l$.A], () => l$.A.getFiles(t.id), [t]),
                unreadCount: (0, u.bG)([lW.Ay], () => lW.Ay.getUnreadCount(t.id), [t]),
                hasUnreads: null != S,
                canChat: m,
                editingMessageId: I,
                fontSize: p,
                keyboardModeEnabled: C,
                showingQuarantineBanner: n,
                hideSummaries: l,
                typingGradient: o,
                isGameInvitesPost: y,
            }),
        }),
    });
});
