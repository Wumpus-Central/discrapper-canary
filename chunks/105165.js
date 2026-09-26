let l, i;
n.d(t, { A: () => r5 });
var s,
    a = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(202091),
    u = n(837381),
    h = n(17928),
    m = n(446837),
    g = n(559106),
    p = n(448539),
    A = n(536804),
    f = n(789279),
    C = n(584648),
    x = n(6095);
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
                    style: I,
                    ...y
                } = e,
                _ = r.useRef(null),
                j = r.useRef(null),
                [b, v] = r.useState(!1),
                { scrollerRef: N, getScrollerState: T } = (0, A.A)(),
                M = (0, f.A)(N);
            r.useImperativeHandle(
                t,
                () => ({
                    getScrollerNode: () => N.current,
                    isScrolling: () => null != _.current,
                    getScrollerState: T,
                    ...(0, C.A)(N, T, M),
                }),
                [N, T, M],
            );
            let R = r.useCallback(
                (e) => {
                    (null == _.current ? v(!0) : clearTimeout(_.current),
                        (_.current = setTimeout(() => {
                            ((_.current = null), v(!1));
                        }, 200)),
                        null != h && h(e));
                },
                [h],
            );
            return (
                r.useEffect(() => () => clearTimeout(_.current), []),
                (0, p.A)({ ref: N, key: "container", onUpdate: d, resizeObserver: i, listenerMap: l }),
                (0, p.A)({ ref: j, key: "content", onUpdate: d, resizeObserver: i, listenerMap: l }),
                (0, a.jsx)("div", {
                    ref: N,
                    className: c()(o, { [x.Rv]: E, [x.D8]: S, [s]: !0, [x.fs]: !0, [x.qw]: b && E }),
                    style: I,
                    dir: m,
                    onScroll: R,
                    ...y,
                    children: (0, a.jsx)(g.xp, {
                        containerRef: j,
                        children: (0, a.jsxs)("div", {
                            ref: j,
                            className: c()(u, x.Qs),
                            children: [n, b && (0, a.jsx)("div", { className: x.X3 })],
                        }),
                    }),
                })
            );
        }));
var I = n(312138),
    y = n(737992),
    _ = n(148494),
    j = n(432371),
    b = n(765548),
    v = n(775602);
n(321073);
var N = n(228366),
    T = n(911411),
    M = n(290863);
let R = [],
    D = [],
    L = [];
var k = n(429913),
    P = n(47167),
    O = n(147248),
    G = n(828488),
    U = n(958720),
    w = n(623562),
    F = n(727011),
    H = n(319365);
let B = r.createContext(null);
function K(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = r.useRef(null),
        s = r.useRef(null),
        { isFocused: o, setIsFocused: c } = (0, H.D7)(),
        d = r.useCallback(
            async (e) => {
                (o && U.A.getSelectedConversationId(t.id) === e) ||
                    ((s.current = e),
                    await new Promise((l) => {
                        let i = () => {
                            (n.removeScrollCompleteCallback(i), l());
                        };
                        (n.addScrollCompleteCallback(i), (0, w.xI)(t.id, e));
                    }),
                    s.current === e && (s.current = null),
                    e === U.A.getSelectedConversationId(t.id) &&
                        (c(!0), F.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, n, c, o],
        ),
        u = r.useMemo(
            () => ({ bannerMeasurementRef: i, conversationJumpInProgressRef: s, selectAndFocusConversation: d }),
            [i, d],
        );
    return (0, a.jsx)(B.Provider, { value: u, children: l });
}
function V() {
    let e = r.useContext(B);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
let z = r.createContext(null);
function W() {
    let e = r.useContext(z);
    if (null == e) throw Error("useConversationFocusDismiss must be used inside <ConversationFocusDismissProvider>");
    return e;
}
function q(e) {
    let { children: t } = e,
        [n, l] = r.useState(null),
        i = r.useMemo(() => ({ dismissReason: n, setDismissReason: l }), [n, l]);
    return (0, a.jsx)(z.Provider, { value: i, children: t });
}
var $ = n(661531),
    J = n(602853),
    Z = n(717421),
    Y = n(689175),
    X = n(866323),
    Q = n(448761);
let ee = (0, n(600975).C)({
    kind: "user",
    id: "2021-12_inferno_spam_redaction",
    label: "Inferno Spam Redaction",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Allow guild channel messages from spammers to be collapsed", config: { enabled: !0 } },
    ],
});
var et = n(58703),
    en = n(935208),
    el = n(857069),
    ei = n(694318);
n(938796);
var es = n(253506),
    ea = n(665260),
    er = n(704844),
    eo = n(280450),
    ec = n(320095),
    ed = n(963852),
    eu = n(652215);
let eh = new Map();
function em(e, t) {
    let n = (0, ed.Ay)({
            channelId: t,
            type: eu.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: eu.pr7.EPHEMERAL,
            state: eu.cmJ.SENT,
        }),
        l = (0, ec.rh)(n);
    return ((l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l);
}
function eg(e, t, n) {
    if (Q.M.NON_COLLAPSIBLE.has(t.type));
    else if (t.hasFlag(eu.pr7.HIDDEN_SUSPENDED_USER)) return eu.TZK.MESSAGE_GROUP_SUSPENDED_USER;
    else if (t.blocked) return eu.TZK.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return eu.TZK.MESSAGE_GROUP_IGNORED;
    else if ((0, ei.iJ)(e) && n) return eu.TZK.MESSAGE_GROUP_SPAMMER;
    return null;
}
var ep = n(232835),
    eA = n(625494),
    ef = n(446576),
    eC = n(26430),
    ex = n(866665),
    eE = n(939249),
    eS = n(53788),
    eI = n(922016),
    ey = n(148795),
    e_ = n(834730),
    ej = n(297264),
    eb = n(103557),
    ev = n(691540),
    eN = n(857250),
    eT = n(97483),
    eM = n(789645),
    eR = n(821609),
    eD = n(977110),
    eL = n(375708),
    ek = n(128904);
let eP = [
    { value: "not_useful", label: eD.default.HcSKAh },
    { value: "off_topic", label: eD.default["1cHvxU"] },
    { value: "missing_messages", label: eD.default.ZAJcv4 },
    { value: "misleading_title", label: eD.default.omVRS3 },
    { value: "inappropriate", label: eD.default.dRzDTy },
    { value: "too_cluttered", label: eD.default.wb6DmY },
    { value: "hard_to_use", label: eD.default.NUVZB6 },
    { value: "too_old", label: eD.default.kAFQd3 },
    { value: "other", label: eD.default.OSgZpc },
];
function eO(e) {
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
            (F.X.trackThumbsDownReasonSelected({
                channelId: t.id,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && d.length > 0 ? d : null,
            }),
                (0, ev.P0)((0, eN.o)(eL.intl.string(eD.default.xrEgG0), eT.Ck.SUCCESS)),
                i());
        }, [t.id, n.id, l, s, d, m, i]);
    return (0, a.jsxs)("div", {
        className: ek.oO,
        children: [
            (0, a.jsxs)("div", {
                className: ek.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: ek.TK,
                        children: [
                            (0, a.jsx)(ej.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eL.intl.string(eD.default.C3suOL),
                            }),
                            (0, a.jsx)(e_.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                className: ek.VA,
                                children: eL.intl.string(eD.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(eE.D, {
                        className: ek.b,
                        "aria-label": eL.intl.string(eD.default.HLYa5G),
                        onClick: i,
                        children: (0, a.jsx)(eM.P, { size: "xs", color: $.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ek.Ip,
                role: "group",
                "aria-label": eL.intl.string(eD.default["Lp/NZo"]),
                children: eP.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, a.jsx)(
                        eE.D,
                        {
                            className: c()(ek.jw, s.has(t) && ek.gM),
                            onClick: () => g(t),
                            children: (0, a.jsx)(e_.E, {
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
                    className: ek.Su,
                    children: [
                        (0, a.jsx)(eb.f, {
                            value: d,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eL.intl.string(eD.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, a.jsxs)("div", {
                            className: ek.rP,
                            children: [
                                (0, a.jsx)(e_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: eL.intl.string(eD.default.xZzxfK),
                                }),
                                (0, a.jsxs)(e_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: [d.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsx)(eR.$, {
                text: eL.intl.string(eD.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eG = n(808379);
function eU(e) {
    return c()(eG.FW, { [eG.Jl]: "positive" === e, [eG.vF]: "critical" === e });
}
function ew(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        m = (0, h.bG)([U.A], () => U.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: g } = (0, H.D7)(),
        p = r.useCallback(() => d(!1), []),
        A = r.useCallback(() => {
            ((0, w.oq)(t.id, n.id, "up"),
                F.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: g }));
        }, [t.id, n.id, g]),
        f = r.useCallback(() => {
            ((0, w.oq)(t.id, n.id, "down"),
                d(!0),
                F.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: g }));
        }, [t.id, n.id, g]),
        C = r.useCallback(
            () => (0, a.jsx)(eO, { channel: t, conversation: n, isFocusMode: g, onClose: p }),
            [t, n, g, p],
        ),
        x = g ? ef.g : eC._,
        E = g ? eL.intl.string(eD.default.pDD8E1) : eL.intl.string(eD.default["o+pmGy"]),
        S = g ? eL.intl.string(eD.default.XaJ3qC) : eL.intl.string(eD.default.pU5Dut),
        I = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(ex.m, {
                    text: eL.intl.string(eD.default.sBwxOY),
                    children: (0, a.jsx)(eE.D, {
                        "aria-label": eL.intl.string(eD.default.vjJjMc),
                        onClick: A,
                        className: eU("up" === m ? "positive" : void 0),
                        children: (0, a.jsx)(eS.G, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
                (0, a.jsx)(eI.Y, {
                    targetElementRef: u,
                    shouldShow: o,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: eI.Y.Animation.FADE,
                    onRequestClose: p,
                    renderPopout: C,
                    children: () =>
                        (0, a.jsx)("div", {
                            ref: u,
                            children: (0, a.jsx)(ex.m, {
                                text: eL.intl.string(eD.default.tbhdqW),
                                children: (0, a.jsx)(eE.D, {
                                    "aria-label": eL.intl.string(eD.default.TGK5M0),
                                    onClick: f,
                                    className: eU("down" === m ? "critical" : void 0),
                                    children: (0, a.jsx)(ey.d, { color: "currentColor", size: "refresh_sm" }),
                                }),
                            }),
                        }),
                }),
                (0, a.jsx)(ex.m, {
                    text: E,
                    children: (0, a.jsx)(eE.D, {
                        "aria-label": S,
                        onClick: s,
                        className: eU(),
                        children: (0, a.jsx)(x, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, a.jsxs)("div", {
        className: c()(eG.zr, { [eG.e8]: i }),
        children: [
            (0, a.jsx)(e_.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: eG.DD,
                children: n.title,
            }),
            (0, a.jsx)("div", { className: c()(eG.o1, { [eG.jF]: l }), children: I }),
        ],
    });
}
var eF = n(599735);
function eH(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = r.useCallback(() => {
            l("return");
        }, [l]);
    return (0, a.jsx)("div", {
        className: eF.A,
        children: (0, a.jsx)(ew, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eB = n(284009),
    eK = n.n(eB),
    eV = n(807884),
    ez = n(93474),
    eW = n(384231),
    eq = n(959698),
    e$ = n(853145),
    eJ = n(9842),
    eZ = n(69282),
    eY = n(976860),
    eX = n(885386),
    eQ = n(734057),
    e0 = n(540999),
    e1 = n(580745),
    e2 = n(521427),
    e3 = n(375901),
    e4 = n(143413),
    e7 = n(763754),
    e8 = n(75668);
function e5(e) {
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
        (0, a.jsx)("div", { "data-flash": i, className: c()(e8.j, n), children: t })
    );
}
var e6 = n(491182),
    e9 = n(860227),
    te = n(537174),
    tt = n(837528),
    tn = n(516287),
    tl = n(843626),
    ti = n(294454),
    ts = n(857071),
    ta = n(517997),
    tr = n(406704),
    to = n(747926),
    tc = n(54570),
    td = n(8880),
    tu = n(834942),
    th = n(576705),
    tm = n(957565),
    tg = n(723702),
    tp = n(697470),
    tA = n(492841),
    tf = n(707985),
    tC = n(519222);
let tx = function (e, t, n) {
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
                    c = ep.A.getMessage(t, e),
                    d = eQ.A.getChannel(t);
                if (null == c || null == d) return;
                let u = eo.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (th.A.can(eu.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tC.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tg.isMac)() ? r : a) && tm.p5 && (n.preventDefault(), (0, tm.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tp.A)(c, u) && (n.preventDefault(), (0, tC.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tA.A)(c, d) && (n.preventDefault(), (0, tC.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || tu.A.canChatInGuild(e.guild_id),
                                    n = eX.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tf.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && th.A.can(eu.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && ts.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, tr.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eA._.dispatchKeyed(eu.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, ta.r)(d, c) && (n.preventDefault(), (0, tC.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, tl.p)(c) &&
                            (n.preventDefault(), (0, ti.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            td.A.isSpeakingMessage(t, e) ? (0, tc.pr)() : (0, tc.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, tr.D1)(d, c)) (n.preventDefault(), (0, to.Tv)(d, c, "Message Shortcut"));
                        else if (c.hasFlag(eu.pr7.HAS_THREAD)) {
                            let e = eQ.A.getChannel(en.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, to.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tC.cl)(d, c));
                        break;
                    case "escape":
                        e1.A.isEditing(d.id, c.id) ? _.A.endEditMessage(d.id) : eA._.dispatch(eu.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tE = n(754459),
    tS = n(439762),
    tI = n(824556),
    ty = n(886737),
    t_ = n(699352),
    tj = n(235227),
    tb = n(649852),
    tv = n.n(tb),
    tN = n(311283),
    tT = n(473935),
    tM = n(173936),
    tR = n(290136),
    tD = n(666492),
    tL = n(606096),
    tk = n(997146),
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
    tz = n(565645),
    tW = n(812930),
    tq = n(822123),
    t$ = n(7584),
    tJ = n(635222),
    tZ = n(969043),
    tY = n(427209),
    tX = n(743738),
    tQ = n(973196),
    t0 = n(649963),
    t1 = n(815807),
    t2 = n(429433),
    t3 = n(269073),
    t4 = n(738125),
    t7 = n(85109),
    t8 = n(71393),
    t5 = n(174459),
    t6 = n(690521),
    t9 = n(403362),
    ne = n(628691),
    nt = n(194085),
    nn = n(607399),
    nl = n(460905);
function ni(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        o = r.useRef(null);
    return (0, a.jsx)(eI.Y, {
        targetElementRef: o,
        animation: eI.Y.Animation.FADE,
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
            (0, a.jsx)(nt.qv, { ref: o, label: eL.intl.string(eL.t.lfIHs4), icon: nl.n, onClick: l }, "add-reaction"),
    });
}
var ns = n(674447),
    na = n(307731),
    nr = n(338373);
let no = [t$.Ay.getByName("100"), t$.Ay.getByName("laughing"), t$.Ay.getByName("sparkling_heart")].filter(t9.Vq);
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
        l = (0, tq.QZ)(t.guild_id).filter(
            (e) =>
                !t6.Ay.isEmojiFilteredOrLocked({
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
                nt.qv,
                {
                    tooltipText: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(e_.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nr.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, a.jsx)(e_.E, {
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
            showEmojiPicker: I,
            showMessageBookmarksActions: y,
            isMessageBookmark: j,
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
                d = (0, h.bG)([t8.A], () => t8.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, h.bG)([eo.default], () => eo.default.getId()),
                m = (0, tr.Id)(t),
                g = (0, tr.s5)(t),
                { firstMessage: p } = (0, h.bG)([tZ.A], () => tZ.A.getMessage(t.id), [t.id]),
                A = eX.jW.useSetting(),
                f = eX.Q_.useSetting(),
                C = (0, h.bG)([tu.A], () => null == t.guild_id || tu.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: x,
                    canAddNewReactions: E,
                    canSendMessages: S,
                } = (0, h.cf)(
                    [th.A],
                    () => ({
                        canAddNewReactions: C && th.A.can(eu.xBc.ADD_REACTIONS, t),
                        canManageMessages: th.A.can(eu.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: th.A.can(eu.xBc.SEND_MESSAGES, t),
                    }),
                    [t, C],
                ),
                I = (0, tQ.A)(),
                y = (0, ta.u)(t, n) && !I,
                _ = (0, tr.n)(t, n),
                j = (0, tr.R)(n),
                b = (0, h.bG)([ts.A], () => null != t.guild_id && ts.A.isLurking(t.guild_id), [t]),
                N = c.id === u,
                T = (x || n.canDeleteOwnMessage(u)) && m && !eu.MRS.UNDELETABLE.has(n.type);
            (n.type === eu.lAJ.AUTO_MODERATION_ACTION && (T = T && x),
                t.isModeratorReportChannel() && (T = T && n.id !== p?.id && !(0, e4.A)(n)));
            let M = (0, ne.ul)(n),
                R = (0, tA.A)(n, t),
                D = !t.isSystemDM() && (0, tp.A)(n, u) && m && !g,
                { disableReactionCreates: L } = (0, tf.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: E,
                    isLurking: b,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                k =
                    t.type === eu.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(eu.GuildFeatures.NEWS) &&
                    S &&
                    (N || x) &&
                    (0, tW.A)(n),
                P = t.getGuildId(),
                O =
                    null != P &&
                    n.type === eu.lAJ.USER_JOIN &&
                    th.A.canWithPartialContext(eu.xBc.MANAGE_GUILD, { guildId: P }),
                G = (0, tl.m)(n),
                U = (0, e2.kn)(n, t, "MessageHoverBar"),
                w = n.hasFlag(eu.pr7.IS_GUILD_OFFICIAL),
                F = (0, t3.jv)("message_utilities"),
                H = (0, h.bG)([t7.A], () => null != t7.A.getSavedMessage(t.id, n.id)),
                B = (0, tN.A)(a),
                K = (0, h.bG)([v.Ay], () => v.Ay.keyboardModeEnabled);
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
                canCopy: tm.p5,
                hasDeveloperMode: f,
                canReact: !L && A,
                canPublish: k,
                canConfigureJoin: O,
                isExpanded: B && !K && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: F,
                isMessageBookmark: H,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = r.useRef(null),
        R = r.useCallback(() => {
            (S ||
                t5.default.track(eu.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                b({ moreUtilities: !S }));
        }, [S, b, n]),
        D = r.useCallback(() => {
            b({ emojiPicker: !I });
        }, [I, b]),
        L = (0, tr.Id)(t),
        k = n.hasFlag(eu.pr7.CROSSPOSTED);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            E
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l && N
                              ? (0, a.jsx)(
                                    nt.qv,
                                    {
                                        label: eL.intl.string(eL.t.zBoHlf),
                                        icon: tT.L,
                                        onClick: (e) => (0, tC.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, a.jsx)(
                                    nt.qv,
                                    {
                                        label: eL.intl.string(eL.t.WqhZss),
                                        icon: tM.LinkIcon,
                                        onClick: () => (0, tC.S)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, a.jsx)(
                                    nt.qv,
                                    {
                                        label: eL.intl.string(eL.t.NpHUi1),
                                        icon: tR.CircleQuestionIcon,
                                        onClick: () => (0, tC.vc)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, a.jsx)(
                                    nt.qv,
                                    { label: eL.intl.string(eL.t.RpE9k7), icon: tD.Q, onClick: () => (0, tC.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          y
                              ? (0, a.jsx)(
                                    nt.qv,
                                    {
                                        label: j ? eL.intl.string(eL.t.LHUP9D) : eL.intl.string(eL.t["9p3D9p"]),
                                        icon: j ? tL.BookmarkIcon : tk.c,
                                        onClick: () => (j ? (0, tC.r7)(t, n) : (0, tC.wF)(t, n, t4.r.MESSAGE_TOOLBAR)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, a.jsx)(
                                    nt.qv,
                                    {
                                        label: n.pinned ? eL.intl.string(eL.t["Bse+F/"]) : eL.intl.string(eL.t.CvQ18w),
                                        icon: tP.t,
                                        onClick: (e) => (0, tC.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, a.jsx)(
                                    nt.qv,
                                    { label: eL.intl.string(eL.t.rBIGBL), icon: tO.y, onClick: () => (0, tC.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, a.jsx)(
                                    nt.qv,
                                    {
                                        label: eL.intl.string(eL.t["5IEsGx"]),
                                        icon: tG.W,
                                        onClick: (e) => (0, tC.$b)(t, n, e),
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
                                    children: [(0, a.jsx)(nu, { channel: t, message: n }), (0, a.jsx)(nt.$$, {})],
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
                      nt.qv,
                      { label: eL.intl.string(eL.t["5IEsGx"]), icon: tG.W, onClick: (e) => (0, tC.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, a.jsx)(
                      nt.qv,
                      { label: eL.intl.string(eL.t.bt75uw), icon: tU.PencilIcon, onClick: () => (0, tC.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, a.jsx)(
                      nt.qv,
                      { label: eL.intl.string(eL.t.I3ltXO), icon: tY.A, onClick: () => (0, tC.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, a.jsx)(
                      nt.qv,
                      { label: eL.intl.string(eL.t.rBIGBL), icon: tO.y, onClick: () => (0, tC.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, a.jsx)(
                      nt.qv,
                      { label: eL.intl.string(eL.t["39d0Wj"]), icon: tO.y, onClick: () => (0, tC.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, a.jsx)(
                      nt.qv,
                      {
                          label: x ? eL.intl.string(eL.t["2km5Gf"]) : eL.intl.string(eL.t["lE/PG3"]),
                          icon: x ? tw.$ : tF.L,
                          onClick: () => _.A.patchMessageGuildOfficial(t.id, n.id, !x),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, a.jsx)(
                      nt.qv,
                      {
                          label: k ? eL.intl.string(eL.t["1kWJAr"]) : eL.intl.string(eL.t.MFGE51),
                          icon: tH.k,
                          onClick: () => (0, tC.Le)(t, n),
                          disabled: k,
                      },
                      "publish",
                  )
                : null,
            s && E
                ? (0, a.jsx)(
                      nt.qv,
                      {
                          label: eL.intl.string(eL.t.oyYWHE),
                          icon: tB.TrashIcon,
                          onClick: (e) => (0, tC.RC)(t, n, e),
                          dangerous: !0,
                          separator: !E,
                      },
                      "delete",
                  )
                : null,
            E && s
                ? null
                : (0, a.jsx)(eI.Y, {
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
                      animation: eI.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, a.jsx)(
                              nt.qv,
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
        l = (0, h.bG)([ez.A], () => null != ez.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, tX.Bl)(n.interactionData));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !l &&
                i &&
                (0, a.jsx)(
                    nt.qv,
                    { label: eL.intl.string(eL.t["5911Lb"]), icon: tV.RetryIcon, onClick: () => (0, tC.Io)(t, n) },
                    "retry",
                ),
            (0, a.jsx)(
                nt.qv,
                { label: eL.intl.string(eL.t.oyYWHE), icon: tB.TrashIcon, onClick: (e) => (0, tC.RC)(t, n, e) },
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
                page: null != e.getGuildId() ? eu.liQ.GUILD_CHANNEL : eu.liQ.DM_CHANNEL,
                section: (0, t1.sn)(e),
                object: eu.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, a.jsx)(t2.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            (ng({ type: "add", emoji: i, channel: e, message: t, location: t0.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tv()(n, 150)() : n()));
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nA = r.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, h.bG)([e1.A], () => e1.A.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === eu.cmJ.SEND_FAILED ? (0, a.jsx)(nm, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== eu.cmJ.SEND_FAILED ? (0, a.jsx)(nh, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, a.jsx)("div", {
              className: c()(e.className, { [nr.kL]: !0, [nr.gN]: l, [nr.nK]: i }),
              onClick: nc,
              onContextMenu: nc,
              role: "group",
              "aria-label": eL.intl.string(eL.t.Lv7LxN),
              children: (0, a.jsxs)(nt.Ay, { className: e.innerClassName, children: [r, o] }),
          });
});
var nf = n(13673),
    nC = n(622868),
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
            g = (0, tt.r4)(t.author.id, n.id),
            p = (0, tt.m)(t, n, o, d),
            A = (0, tt.Jo)(c, d),
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
            showTimestampOnHover: !s && l && t.type !== eu.lAJ.REPLY,
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
    if ((0, e4.A)(c)) return null;
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
              id: (0, e9.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var n_ = n(91624),
    nj = n(155718),
    nb = n(168186),
    nv = n(994500),
    nN = n(217424),
    nT = n(807081),
    nM = n(387408),
    nR = n(942075),
    nD = n(808829),
    nL = n(552691),
    nk = n(861464),
    nP = n(521981),
    nO = n(448368);
let nG = r.memo(function (e) {
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
        g = (0, e7.X4)(m),
        p = (0, eW.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, eq.U)(),
        f = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, nM.A)(m);
            if (e.type === eu.lAJ.USER_JOIN)
                return (0, nT.$)(
                    eL.intl.formatToParts(nk.A.getSystemMessageUserJoin(e.id), {
                        username: null != g ? g.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === eu.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nT.$)(
                    (0, nR.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === eu.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nT.$)((0, nD.P)({ application: e?.application, username: g?.nick }));
            if (e.type === eu.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nT.$)((0, nL.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === eu.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nT.$)((0, nL.uk)({ application: e?.application, username: g?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0, postProcessor: A ? ty.A : void 0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0, allowGameMentions: !0 }
                        : { ...t, formatInline: !0, allowHeading: p, allowList: p, allowGameMentions: !0 };
                return (0, nP.Ay)(e, n).content;
            }
            return null;
        }, [m, g, l, p, A]),
        { isReplyAuthorBlocked: C, isReplyAuthorIgnored: x } = (0, h.cf)(
            [nv.A],
            () => ({
                isReplyAuthorBlocked: null != m && nv.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && nv.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        E = (0, tt.r4)(m?.author.id, l.id),
        S = (0, tt.Ck)(t, n, l),
        I = (0, tt.H9)(m, l, s, c),
        y = (0, tt.Ge)(o, c),
        _ = r.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        j = (0, e7.X4)(t);
    return (0, a.jsx)(nO.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: j,
        referencedMessage: n,
        content: f,
        compact: i,
        isReplyAuthorBlocked: C,
        isReplyAuthorIgnored: x,
        showAvatarPopout: o,
        showUsernamePopout: s,
        renderPopout: nE.A,
        onClickAvatar: y,
        onClickUsername: I,
        onClickReply: S,
        onContextMenu: E,
        onPopoutRequestClose: _,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nU(e) {
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
        (0, a.jsx)(nG, {
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
let nw = r.memo(function (e) {
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
            [nv.A],
            () => ({
                isInteractionUserBlocked: nv.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nv.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(t?.messageReference)),
        A = (0, tt.r4)(t.interaction?.user.id, n.id),
        f = (0, tt.T0)(t.interaction, n, i, u),
        C = (0, tt.Yq)(s, u),
        x = (0, nb.Am)(t),
        E = x?.type === nj.G4.APPLICATION_COMMAND ? x.target_user?.id : void 0,
        S = (0, tt.r4)(E, n.id),
        I = (0, tt.I)(E, n, c, u),
        y = (0, tt.Ge)(d, u),
        _ = (0, tt.U_)(o, u),
        j = r.useCallback(() => {
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
                nU({
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
        renderTargetMessage: b,
    });
});
var nF = n(3083),
    nH = n(381941);
function nB(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eK()(n.type === eu.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...r } = (0, u.rm)(e.id ?? ""),
        o = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(l)),
        { popouts: d, setPopout: m } = (0, tE.A)(n.id, nH.Fd),
        g = (0, e7.Ay)(n),
        p = (0, e9.fF)(n),
        A = (0, e9.ZD)(n);
    if (null != o)
        switch (o.state) {
            case eJ.a.LOADED:
                return (0, a.jsx)(nK, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case eJ.a.NOT_LOADED:
            case eJ.a.DELETED:
        }
    return (0, a.jsx)(e6.A, {
        ...r,
        id: t,
        compact: i,
        className: c()(s, { [nf.iU]: !0, [nf.HJ]: !i, [nf.H4]: !0, [nf._A]: !0 }),
        childrenHeader: ny({ messageProps: e, setPopout: m, messagePopouts: d, replyReference: l, author: g }),
        childrenSystemMessage: (0, nF.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function nK(e) {
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
        p = n.type === eu.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, u.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: x, handleBlur: E } = (0, tt.G8)(A),
        { popouts: S, selected: I, setPopout: y } = (0, tE.A)(n.id, nH.Fd),
        _ = eX.hD.useSetting(),
        j = eX.rs.useSetting(),
        b = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(p)),
        N = (0, eW.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: T,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, tt.yp)({ groupId: m, message: n, defaultValue: I }),
        D = (0, h.bG)([v.Ay], () => v.Ay.keyboardModeEnabled),
        L = I || (D && C),
        k = L || R,
        P = (0, h.bG)([e0.A], () => e0.A.isDeveloper),
        {
            content: O,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tS.A)(n, {
            hideSimpleEmbedContent: _ && j,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: P,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        w = tx(l, i, D),
        F = (0, e7.Ay)(n),
        H = (0, e9.fF)(n, m),
        B = (0, e9.ZD)(n),
        K = (0, a.jsx)(tn.x, { value: k, children: (0, n_.Ay)(e, O, !1) }),
        V = r.useCallback(() => (0, eY.uh)(s, i, l), [s, i, l]),
        z = (0, eZ.Xx)({ guildId: s, roleId: F.iconRoleId });
    return (0, a.jsxs)("div", {
        className: nf.m5,
        children: [
            (0, a.jsx)(eE.D, {
                className: nf.lA,
                onClick: V,
                "aria-label": eL.intl.string(eL.t.k5WiPf),
                children: eL.intl.string(eL.t.k5WiPf),
            }),
            (0, a.jsx)(e6.A, {
                ...f,
                id: t,
                compact: o,
                className: c()(d, {
                    [nf.iU]: !0,
                    [nf.HJ]: !o,
                    [nf.mK]: n.mentioned,
                    [nf.M1]: (0, ec.ec)(n),
                    [nf.H4]: (0, e4.A)(n),
                    [nf._A]: n.id === m || n.type === eu.lAJ.REPLY,
                    [nf.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: x,
                onBlur: E,
                childrenRepliedMessage:
                    n.type === eu.lAJ.REPLY &&
                    nU({
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
                    isInteracting: k,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nF.A)(e),
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
let nV = r.memo(function (e) {
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
    eK()(i.type !== eu.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let S = eu.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: I, ...y } = (0, u.rm)(e.id ?? ""),
        _ = eX.hD.useSetting(),
        j = eX.rs.useSetting(),
        b = (0, h.bG)([eJ.A], () => eJ.A.getMessageByReference(S)),
        { popouts: N, selected: T, setPopout: M } = (0, tE.A)(i.id, nH.Fd),
        R = (0, tt.VL)(i, o, M),
        D = (0, tt.ri)(i, o),
        {
            handleMouseEnter: L,
            handleMouseLeave: k,
            hasHovered: P,
            isHovered: O,
        } = (0, tt.yp)({ groupId: f, message: i, defaultValue: T }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, tt.G8)(I),
        H = r.useCallback(
            (e) => {
                (w(e), L(e));
            },
            [w, L],
        ),
        B = r.useCallback(
            (e) => {
                (F(e), k());
            },
            [F, k],
        ),
        K = (0, h.bG)([e1.A], () => e1.A.isEditing(d, s), [d, s]),
        V = (0, h.bG)([v.Ay], () => v.Ay.keyboardModeEnabled),
        z = T || K || (V && G),
        W = z || O,
        q = (0, h.bG)(
            [eQ.A],
            () => i.hasFlag(eu.pr7.HAS_THREAD) && eQ.A.getChannel(en.default.castMessageIdAsChannelId(i.id)),
        ),
        $ = i.isFirstMessageInForumPost(o),
        J = (0, eW.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        Z = (0, h.bG)([e0.A], () => e0.A.isDeveloper),
        Y = (0, eq.U)(),
        {
            content: X,
            hasSpoilerEmbeds: Q,
            hasBailedAst: ee,
        } = (0, tS.A)(i, {
            hideSimpleEmbedContent: _ && j,
            formatInline: !1,
            allowList: $ || J,
            allowHeading: $ || J,
            allowLinks: !0,
            allowDevLinks: Z,
            previewLinkTarget: !0,
            postProcessor: Y ? ty.A : void 0,
        }),
        et = tx(s, d, V),
        el = (0, e7.Ay)(i),
        ei = (0, h.bG)([e$.A], () => e$.A.getPendingReply(d)),
        es =
            ((t = r.useRef(A)),
            r.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        er = (0, eZ.Xx)({ guildId: o.guild_id, roleId: el.iconRoleId }),
        eo = (0, eV.A)(d, s)?.color ?? null,
        ed = (0, e9.fF)(i, f),
        eh = (0, e9.ZD)(i),
        em = (0, h.bG)([ez.A], () => ez.A.getMessage(s), [s]),
        eg = (0, e2.bW)(o.guild_id, "ChatMessage"),
        ep = (0, te.o)(),
        eA = (0, tI.A)({ message: i, channel: o, officialMessagesEnabled: eg }),
        ef = r.useRef(window),
        eC = null != em;
    ((n = i.type === eu.lAJ.CUSTOM_GIFT ? "" : !K && eC ? (0, tj.A)(e, X) : (0, n_.Ay)(e, X, K)),
        (n = (0, a.jsx)(tn.x, { value: W, children: n })));
    let ex = i.id === f,
        eE = (0, a.jsx)(g.vN, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
                id: l,
                className: nf.Nt,
                "aria-setsize": -1,
                style: null != eo ? { backgroundColor: eo } : void 0,
                children: (0, a.jsx)(e6.A, {
                    ...y,
                    "aria-setsize": -1,
                    "aria-roledescription": eL.intl.string(eL.t.BAB0yK),
                    "aria-labelledby": ed,
                    "aria-describedby": eh,
                    onFocus: H,
                    onBlur: B,
                    onContextMenu: R,
                    onKeyDown: et,
                    onClick: D,
                    compact: m,
                    contentOnly: C,
                    className: c()(p, {
                        [nf.iU]: !0,
                        [nf.HJ]: !m,
                        [nf.mK]: i.mentioned,
                        [nf.M1]: (0, ec.ec)(i),
                        [nf.SH]: i.type === eu.lAJ.NITRO_NOTIFICATION,
                        [nf.Sg]: i.hasFlag(eu.pr7.IS_GUILD_OFFICIAL) && eg && !ep,
                        [nf.H4]: (0, e4.A)(i),
                        [nf._A]: !C && (ex || i.type === eu.lAJ.REPLY),
                        [nf.wH]: z,
                        [nf.$n]: ei?.message.id === i.id,
                        [nf.$w]: i.isCommandType() && i.state === eu.cmJ.SENDING,
                        [nf.DX]: eC,
                    }),
                    zalgo: !K,
                    childrenRepliedMessage:
                        C || i.type !== eu.lAJ.REPLY
                            ? void 0
                            : nU({
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
                            ? (0, a.jsx)(nw, { message: l, channel: i, compact: s, setPopout: t, ...n })
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
                                      h = r.state === eu.cmJ.SENDING,
                                      m = r.id === c,
                                      g = (0, ea.Lt)(r.flags, eu.pr7.EPHEMERAL),
                                      p = r.state === eu.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, a.jsx)(nA, {
                                            className: nf.Uo,
                                            innerClassName: nf.Mc,
                                            isHeader: !d && m && !(0, e4.A)(r),
                                            isReply: !d && r.type === eu.lAJ.REPLY && null != r.messageReference,
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
                                  messageWindow: ef.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nF.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: L,
                    onMouseLeave: k,
                    hasThread: !C && i.hasFlag(eu.pr7.HAS_THREAD) && null != q,
                    isSystemMessage: (0, e4.A)(i),
                    hasReply: i.type === eu.lAJ.REPLY,
                    messageRef: (e) => {
                        ((eA.current = e), (ef.current = e?.ownerDocument?.defaultView ?? window));
                    },
                    author: el,
                }),
            }),
        });
    return null != es
        ? (0, a.jsx)(
              e5,
              { flashKey: es, className: c()({ [nf.bB]: !0, [nf._A]: !m && i.id === f }), children: eE },
              `bg-flash-${l}`,
          )
        : eE;
});
n(801541);
var nz = n(889137),
    nW = n(952270),
    nq = n(428678),
    n$ = n(353182),
    nJ = n(922529),
    nZ = n(888675),
    nY = n(845806);
function nX(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: r = !0 } = e,
        o = (0, nz.YW)({ collapsedReason: s })
            .with({ collapsedReason: eL.t["VFWjc+"] }, () =>
                (0, a.jsx)(nW.EyeSlashIcon, { size: "md", color: "currentColor", className: nY.Q6 }),
            )
            .with({ collapsedReason: eL.t["+FcYM/"] }, () =>
                (0, a.jsx)(nq.K, { size: "md", color: "currentColor", className: nY.Q6 }),
            )
            .with({ collapsedReason: eL.t.rHRovo }, () =>
                (0, a.jsx)(n$._, { size: "md", color: "currentColor", className: nY.TG }),
            )
            .otherwise(() => (0, a.jsx)(eM.P, { size: "md", color: "currentColor", className: nY.Q6 }));
    return (0, a.jsx)(e6.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nZ.A, {
            compact: i,
            className: nY.L9,
            iconNode: o,
            children: (0, a.jsxs)("div", {
                className: r ? nY.Fo : nY.GU,
                children: [
                    eL.intl.format(s, { count: l }),
                    r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, a.jsx)(eE.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: nY.rB,
                                    children: t ? eL.intl.string(eL.t.fgq1gs) : eL.intl.string(eL.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let nQ = r.memo(function (e) {
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
        className: c()({ [nf._A]: !0, [nY.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === eu.TZK.DIVIDER)
                ? (0, a.jsx)(nJ.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, a.jsx)(
                nX,
                { count: g, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: o },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === eu.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, a.jsx)(nJ.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === eu.TZK.MESSAGE || e.type === eu.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === eu.TZK.THREAD_STARTER_MESSAGE ? nB : nV;
                          return (0, a.jsx)(
                              t,
                              {
                                  id: (0, e3.j)(n.id, e.content.id),
                                  className: nY.__invalid_blocked,
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
var n0 = n(114212),
    n1 = n(248432);
function n2(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, a.jsx)("div", {
        className: c()(n1.dU, t && n1.yZ),
        children: (0, a.jsx)("div", { className: n1.JN, children: n }),
    });
}
let n3 = r.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, a.jsx)(n2, { isCollapsed: n, children: l });
});
var n4 = n(708510);
function n7(e) {
    return "group" in e;
}
let n8 = (0, a.jsxs)(a.Fragment, {
    children: [
        (0, a.jsx)(n0.Ay, { messages: 4, groupSpacing: 16, className: n4.Xb }),
        (0, a.jsx)(n0.Ay, { messages: 2, groupSpacing: 16, className: n4.Xb }),
        (0, a.jsx)(n0.Ay, { messages: 3, groupSpacing: 16, className: n4.Xb }),
    ],
});
function n5(e) {
    let { channel: t, conversation: n, focusStream: l, isCollapsed: i } = e,
        s = (0, h.bG)([U.A], () => U.A.isConversationFetchPending(n.id, !0), [n]);
    return (0, a.jsxs)("div", {
        className: n4.XT,
        children: [
            (0, a.jsx)("ol", {
                className: n4.cl,
                children: l.map((e) => {
                    if (n7(e)) {
                        var n;
                        return (0, a.jsx)(
                            n3,
                            {
                                isOnTopic: e.isOnTopic,
                                isCollapsed: i,
                                children: (0, a.jsx)(nQ, {
                                    messages: e.group,
                                    channel: t,
                                    unreadId: "",
                                    collapsedReason:
                                        (n = e.group.type) === eu.TZK.MESSAGE_GROUP_BLOCKED
                                            ? eL.t["+FcYM/"]
                                            : n === eu.TZK.MESSAGE_GROUP_IGNORED
                                              ? eL.t["VFWjc+"]
                                              : n === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                ? eL.t.rHRovo
                                                : eL.t.xfkfTK,
                                    canUncollapse: e.group.type !== eu.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                }),
                            },
                            e.group.key,
                        );
                    }
                    return (0, a.jsx)(
                        n3,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: i,
                            children: (0, a.jsx)(nV, {
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
            s && n8,
        ],
    });
}
n(30146);
var n6 = n(435558),
    n9 = n.n(n6);
let le = { tension: 240, friction: 30 },
    lt = { tension: 320, friction: 28 },
    ln = { tension: 280, friction: 24, clamp: !0 },
    ll = { tension: 170, friction: 22, clamp: !0 },
    li = { tension: 220, friction: 28, clamp: !0 },
    ls = 6,
    la = -3,
    lr = 9;
var lo = n(419828);
async function lc(e) {
    let t = e.current,
        n = t?.getScrollerNode();
    null == t ||
        null == n ||
        n.scrollTop <= 5 ||
        (await new Promise((e) => {
            t.scrollTo({ to: 0, animate: !0, callback: () => e() });
        }));
}
function ld(e) {
    let { style: t, channel: n, conversation: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: o } = (0, H.D7)(),
        { dismissReason: c } = W(),
        u = o ? ln : "navigation" === c ? li : ll,
        m = (0, J.r)($.A.colors.BORDER_SUBTLE).spring(),
        g = (0, J.r)($.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: p,
            shadowAlpha: A,
            contentPadding: f,
        } = (0, Z.z)(
            { borderTopRadius: o ? 12 : 8, shadowAlpha: 0.4 * !!o, contentPadding: 4 * !!o, config: u },
            "respect-motion-settings",
        ),
        { borderColor: C } = (0, Z.z)({ borderColor: o ? m : g, config: u }, "respect-motion-settings"),
        [x, E] = r.useState(!1),
        [S, I] = r.useState(!0),
        y = r.useCallback(() => {
            let e = i.current;
            null != e && (E(e.getDistanceFromTop() > 5), I(e.getDistanceFromBottom() > 5));
        }, [i]),
        _ = (0, h.bG)([ep.A], () => ep.A.getMessages(n.id), [n.id]),
        j = (0, h.bG)(
            [U.A],
            () => {
                if (l?.id == null) return null;
                let e = U.A.getConversationMetadata(n.id, l.id);
                return e?.fullyHydrated === !0 ? e.hydratedMessages : null;
            },
            [n.id, l],
        ),
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
                                          0 > en.default.compare(t.id, e.startMessageId) ||
                                              en.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return (i.sort((e, t) => en.default.compare(e.record.id, t.record.id)), i);
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, el.A)(e, a, t.record)) && (r = t.record.id);
                              let n = eg(e, t.record, (0, ei.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && n7(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: eu.TZK.MESSAGE, content: t.record, groupId: r };
                                  (e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0));
                              } else s.push({ record: t.record, isOnTopic: t.isOnTopic, groupId: r });
                              a = t.record;
                          }
                          return s;
                      })(n, l, _, j)
                    : [],
            [n, l, _, j],
        );
    return null == l
        ? null
        : (0, a.jsxs)(d.animated.div, {
              className: lo.Nr,
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
                  (0, a.jsx)(d.animated.div, { className: lo.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, a.jsx)(d.animated.div, {
                      style: { paddingTop: f, paddingLeft: f, paddingRight: f },
                      children: (0, a.jsx)(eH, { channel: n, conversation: l, requestDismiss: s }),
                  }),
                  (0, a.jsxs)("div", {
                      className: lo.gk,
                      children: [
                          (0, a.jsx)(Y.zC, {
                              className: lo.XG,
                              ref: i,
                              onScroll: y,
                              children: (0, a.jsxs)(d.animated.div, {
                                  style: { paddingLeft: f, paddingRight: f },
                                  children: [
                                      (0, a.jsx)(n5, {
                                          channel: n,
                                          conversation: l,
                                          focusStream: b,
                                          isCollapsed: o || "navigation" === c,
                                      }),
                                      (0, a.jsx)("div", { className: lo.lB }),
                                  ],
                              }),
                          }),
                          x && (0, a.jsx)("div", { className: lo.iX, "aria-hidden": !0 }),
                          S && (0, a.jsx)("div", { className: lo.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lu(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = W(),
        { bannerMeasurementRef: i } = V(),
        { isFocused: s, isFocusedRef: o, setIsFocused: d } = (0, H.D7)(),
        u = r.useRef(!1),
        m = r.useRef(null),
        g = (0, h.bG)([U.A], () => U.A.getSelectedConversationId(t.id), [t.id]),
        p = r.useCallback(
            async (e) => {
                if (o.current && !u.current) {
                    if (
                        ((u.current = !0),
                        null != g &&
                            F.X.trackFocusModeDismissed({ channelId: t.id, conversationId: g, dismissReason: e }),
                        "return" === e && null != g)
                    ) {
                        let e = U.A.getConversationMetadata(t.id, g)?.conversation;
                        if (null != e)
                            try {
                                await _.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await lc(m);
                    }
                    (l(e), d(!1), (u.current = !1));
                }
            },
            [t.id, o, d, l, m, g],
        );
    (!(function (e, t) {
        let { isFocused: n } = (0, H.D7)(),
            l = (0, h.cf)(
                [ep.A],
                () => {
                    let t = ep.A.getMessages(e.id);
                    return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
                },
                [e.id],
            ),
            i = r.useRef(l);
        (r.useEffect(() => {
            if (!n) return;
            let t = ep.A.getMessages(e.id);
            i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
        }, [n, e.id]),
            r.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: s } = i.current;
                (l.jumpTargetId !== e || l.jumpSequenceId !== s) && t("navigation");
            }, [n, l, t]));
    })(t, p),
        r.useEffect(() => {
            if (s)
                return (
                    eA._.subscribe(eu.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        eA._.unsubscribe(eu.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                p("return");
            }
        }, [s, p]));
    let A = r.useCallback(() => {
            p("return");
        }, [p]),
        f = r.useMemo(
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
                config: () => (e) => ("leave" !== e ? ln : "navigation" === n ? li : ll),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        C = (0, X.p)(s ? g : null, f, "respect-motion-settings");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: c()(lo.tB, !s && lo.Vq, {
                    [lo.Em]: !s && "navigation" === n,
                    [lo.Zp]: !s && "navigation" !== n,
                }),
                onClick: A,
                "aria-hidden": !0,
            }),
            C((e, n) => {
                if (null == n) return null;
                let l = U.A.getConversationMetadata(t.id, n)?.conversation ?? null;
                return (0, a.jsx)(ld, { style: e, channel: t, conversation: l, scrollerRef: m, requestDismiss: p });
            }),
        ],
    });
}
function lh(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, H.D7)(),
        { dismissReason: l } = W();
    return n || null !== l ? (0, a.jsx)(lu, { channel: t }) : null;
}
var lm = n(708988),
    lg = n(872351),
    lp = n(359144);
let lA = (0, d.animated)("button"),
    lf = (0, d.animated)(e_.E);
function lC(e) {
    e.preventDefault();
}
let lx = r.memo(function (e) {
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
        I = null == m ? "up" : en.default.compare(o.startMessageId, m) > 0 ? "down" : "up",
        y = o.title,
        _ = Math.min(16, Math.max(4, Math.round(0.6 * y.length))),
        j = (0, Z.z)({ y: u.y, opacity: +!u.hidden, config: le }, "respect-motion-settings"),
        b = (0, Z.z)(
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
                lineWidth: _,
                lineOpacity: +(!h && !u.hidden),
                config: lt,
            },
            "respect-motion-settings",
        ),
        v = r.useCallback(() => f(o.id), [f, o.id]),
        N = r.useCallback(() => f(null), [f]),
        T = r.useCallback(() => C(o.id), [C, o.id]),
        M = u.hidden || u.edge;
    return (0, a.jsxs)(lA, {
        "aria-current": x ? "true" : void 0,
        "aria-hidden": M ? "true" : void 0,
        className: c()(lp.ng, { [lp._D]: x, [lp.DJ]: E, [lp.KZ]: S }),
        style: {
            transform: j.y.to((e) => `translateY(${e}px)`),
            opacity: j.opacity,
            pointerEvents: M ? "none" : void 0,
        },
        onMouseDown: lC,
        onMouseEnter: v,
        onMouseLeave: N,
        onClick: T,
        children: [
            (0, a.jsx)(d.animated.span, {
                className: c()(lp.Og, A && lp.v7),
                style: {
                    opacity: b.pillOpacity,
                    transform: (0, d.to)(
                        [b.pillX, b.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, a.jsx)(e_.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: lp.B6,
                    children: y,
                }),
            }),
            (0, a.jsx)(lf, {
                tag: "span",
                variant: x ? "text-md/semibold" : "text-md/normal",
                color: x ? "text-strong" : E ? "text-default" : S ? "text-muted" : "text-subtle",
                className: lp.QV,
                lineClamp: 1,
                style: {
                    opacity: b.textOpacity,
                    transform: (0, d.to)([b.textScale, b.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: y,
            }),
            (0, a.jsx)("span", {
                className: lp.iF,
                children: (0, a.jsx)(d.animated.span, {
                    className: lp.iN,
                    style: {
                        width: b.lineWidth,
                        opacity: b.lineOpacity,
                        transform: b.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, a.jsx)(d.animated.span, {
                className: lp.$N,
                "aria-hidden": "true",
                style: {
                    opacity: b.arrowOpacity,
                    transform: (0, d.to)([b.arrowX, b.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === I
                        ? (0, a.jsx)(lm.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, a.jsx)(lg.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function lE(e) {
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
            for (let t = la; t <= lr; t++)
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
        className: c()(lp._R, n && lp.h1),
        role: "list",
        "aria-label": eL.intl.string(eD.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: r } = e,
                o = p.get(r);
            return null == o
                ? null
                : (0, a.jsx)(
                      lx,
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
var lS = n(778712),
    lI = n(97808),
    ly = n(854627),
    l_ = n(562153);
n(575279);
var lj = n(437057);
let lb = [
    { name: "40%", l1: "75%", l2: "50%" },
    { name: "55%", l1: "90%", l2: null },
    { name: "30%", l1: "60%", l2: "80%" },
    { name: "65%", l1: "45%", l2: "70%" },
];
function lv(e) {
    let { channel: t, message: n } = e,
        l = l_.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, ly.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: lS._3.SIZE_32,
        }),
        o = r.useMemo(() => (0, nP.Ay)(n).content, [n]),
        c = eX.PZ.useSetting(),
        d = r.useMemo(() => (0, et.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, a.jsxs)("div", {
        className: lj.QS,
        children: [
            (0, a.jsx)(lI.eu, {
                className: lj.MM,
                src: i,
                avatarDecoration: s,
                size: lS._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, a.jsxs)("div", {
                className: lj.gp,
                children: [
                    (0, a.jsxs)("div", {
                        className: lj.yl,
                        children: [
                            (0, a.jsx)(e_.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, a.jsx)(e_.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, a.jsx)(e_.E, { variant: "text-sm/normal", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function lN() {
    return (0, a.jsx)("div", {
        className: lj.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lb[t % lb.length];
            return (0, a.jsxs)(
                "div",
                {
                    className: lj.uA,
                    children: [
                        (0, a.jsx)("div", { className: lj.h }),
                        (0, a.jsxs)("div", {
                            className: lj.jE,
                            children: [
                                (0, a.jsx)("div", { className: lj.zw, style: { width: n.name } }),
                                (0, a.jsx)("div", { className: lj.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, a.jsx)("div", { className: lj.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lT(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, H.D7)(),
        i = (0, h.bG)([U.A], () => U.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = r.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, a.jsx)("div", {
        className: c()(lj.Zt, l && lj.CU),
        children: (0, a.jsx)("div", {
            className: lj.eU,
            children:
                null == s
                    ? (0, a.jsx)(lN, {})
                    : s.length > 0
                      ? (0, a.jsx)("div", {
                            className: lj.z0,
                            children: s.map((e) => (0, a.jsx)(lv, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lM = n(130791);
function lR(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, h.bG)([U.A], () => U.A.getSelectedConversation(t.id)?.id ?? null, [t.id]),
        { selectAndFocusConversation: s } = V(),
        { isFocused: o } = (0, H.D7)(),
        { dismissReason: d } = W(),
        u = (function (e) {
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
                              let n = e.findLastIndex((e) => 0 >= en.default.compare(e.startMessageId, t));
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
                    return (0, n6.clamp)(s, n, l);
                })(l, g, p, A),
            [l, g, p, A],
        ),
        [C, x] = r.useState(!1),
        E = r.useCallback(() => x(!1), []),
        S = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= ls; l++) {
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
        [b, v] = r.useState(null),
        N = null != b && b !== i ? b : null;
    r.useEffect(() => {
        (0, w.p7)(t.id, I.length);
    }, [t.id]);
    let T = r.useCallback(
            (e) => {
                (null != e &&
                    e !== i &&
                    F.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    v(e),
                    null != e && e !== i && (0, w.qC)(t.id, e, { previewLimit: 4 }));
            },
            [t.id, o, i],
        ),
        M = r.useCallback(() => {
            (v(null), E());
        }, [E]),
        R = r.useCallback(
            (e) => {
                (F.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: o }), s(e), E());
            },
            [t.id, E, o, s],
        ),
        D = r.useCallback(() => (null != N ? (0, a.jsx)(lT, { channel: t, conversationId: N }) : null), [t, N]),
        L = r.useCallback(
            (e) => {
                let t;
                (null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    C && (v(null), E()));
            },
            [n, C, E],
        ),
        k = r.useCallback(() => {
            (x(!0),
                F.X.trackTopicsUnitImpression({
                    channelId: t.id,
                    conversationIds: I.map((e) => e.id),
                    isFocusMode: o,
                }));
        }, [t.id, I, o]);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: c()(lM.kL, o && lM.tW, { [lM._Y]: !o && "navigation" === d, [lM.J_]: !o && "return" === d }),
              children: (0, a.jsxs)("div", {
                  className: c()(lM.rI, C && lM.RK),
                  onMouseEnter: k,
                  onMouseLeave: M,
                  onWheel: o ? void 0 : L,
                  children: [
                      (0, a.jsx)("div", { className: c()(lM.oT, C && lM.RK), "aria-hidden": !0 }),
                      (0, a.jsx)(eI.Y, {
                          targetElementRef: j,
                          shouldShow: C && null != N,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: eI.Y.Animation.FADE,
                          renderPopout: D,
                          children: () =>
                              (0, a.jsx)("div", {
                                  ref: j,
                                  className: c()(lM.nd, { [lM.mc]: C, [lM._z]: !C, [lM.OP]: C && y, [lM.yc]: C && _ }),
                                  style: { height: 188 },
                                  children: (0, a.jsx)(lE, {
                                      items: S,
                                      isExpanded: C,
                                      anchorId: u,
                                      hoveredConversationId: b,
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
function lD(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, G.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, h.yK)([U.A], () => (l ? (U.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, a.jsx)(lR, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lL(e) {
    let { channel: t, scrollManager: n } = e;
    return (0, G.sV)(t.guild_id, "scrollbar_chips")
        ? (0, a.jsxs)(q, {
              children: [(0, a.jsx)(lh, { channel: t }), (0, a.jsx)(lD, { channel: t, scrollManager: n })],
          })
        : null;
}
var lk = n(354328),
    lP = n(807632),
    lO = n(875317),
    lG = n(164956),
    lU = n(302031),
    lw = n(822074),
    lF = n(141343),
    lH = n(72314),
    lB = n(573163),
    lK = n(399263),
    lV = n(287809),
    lz = n(234320),
    lW = n(863439),
    lq = n(326337),
    l$ = n(125435);
function lJ(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, a.jsx)("div", {
            className: l$.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, a.jsx)(n0.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var lZ = n(830178),
    lY = n(887129),
    lX = n(621466),
    lQ = n(315710),
    l0 = n(951001),
    l1 = n(334738),
    l2 = n(267102),
    l3 = n(863922),
    l4 = n(965407);
function l7(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, lX.vq)(l, HTMLElement);) ((n += l.offsetTop ?? 0), (l = l.offsetParent));
    return n;
}
let l8 = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"]);
function l5(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === en.default.castChannelIdAsMessageId(e.channelId))) {
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
        ].sort(en.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let l6 = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class l9 {
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
            const t = lH.A.isAtBottom(e.channel.id);
            ((this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lH.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null)));
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
        return null == t ? null : t.getElementById((0, e3.j)(n, e));
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
        (this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck());
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
            let n = l5(e.messages);
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
                    (l = en.default.extractTimestamp(i.id)),
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
            o = l4.A.getOptions(a?.id ?? "");
        if (null != a && a.state === eu.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: nH.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, lX.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = l7(l, i),
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
        return this.props.channel.isForumPost() ? nH.Gt : nH.k8;
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
            let t = -1 === (c = r) ? en.default.castChannelIdAsMessageId(n.id) : e._array[c]?.id;
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
            if (!(0, lX.vq)(t)) continue;
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
                  padding: nH.mZ + this.props.additionalMessagePadding,
                  callback: this.handleScroll,
              }))
            : this.mergeTo(n, this.handleScroll),
            this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()),
            this.isLoading() || (this.messageFetchAnchor = null));
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
    updateVisibleMessagesDebounced = n9().debounce(l3.s_, 300);
    setAutomaticAnchor(e) {
        ((this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id));
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? l6;
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
        l8.has(e.key) && this.handleUserScrollGesture();
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
                (0, l1._9)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        ((this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            (this.prevScrollTop = null),
            this.fixJumpTarget(),
            this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition());
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = l5(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, lX.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : nH.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nH.q4),
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
            s = l7(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = l5(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== eu.rbe.GUILD_VOICE &&
                this.props.channel.type !== eu.rbe.GUILD_STAGE_VOICE
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
                _.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(eu.EMb, 2 * (0, lq.h)("scrollManager.loadMore")),
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
            (_.A.jumpToPresent(n.id, (0, lq.h)("scrollManager.jumpToPresent")),
                (0, eY.uh)(n.getGuildId() ?? eu.ME, n.id));
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                ((this.jumping = !1), this.handleScroll());
            });
    }
    updateStoreDimensionsDebounced = n9().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) l0.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { topPlaceholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            l0.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
            (en.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0));
        let a = () => {
            ((this.jumping = !1),
                (0, lX.vq)(s) && ((s.tabIndex = -1), (0, lQ.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e()));
        };
        (0, lX.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : nH.mZ,
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
            else return s ? a - nH.N0 - 2 : a + 500;
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
            (this._automaticAnchorCallbacks = n9().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor()));
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = n9().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        (this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = n9().uniq(this._scrollCompleteCallbacks)));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = n9().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        ((this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, l1.Z5)(this.props.channel.id, this.props.windowId));
    }
}
n(667532);
var ie = n(95561),
    it = n(486227),
    il = n(731738),
    ii = n(192308),
    is = n(832712),
    ia = n(807393),
    ir = n(381689),
    io = n(754302),
    ic = n(632738),
    id = n(544231),
    iu = n(349435),
    ih = n(665909);
function im(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/8bebc44873d2e7c35f88dbb91386484816332e49b46e9379ef31b1fd9d01e85c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var ig = n(771800);
function ip(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        o = r.useCallback(() => {
            l?.();
        }, [l]);
    return (0, a.jsxs)("div", {
        className: ig.HZ,
        children: [
            (0, a.jsxs)("div", {
                className: ig.Be,
                children: [
                    (0, a.jsx)(im, { alt: "", size: 32 }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(ej.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, a.jsx)(e_.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ig.Uo,
                children: i?.map((e, t) =>
                    (0, a.jsx)(
                        eR.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, a.jsx)(eE.D, {
                      className: ig.b,
                      onClick: o,
                      role: "button",
                      "aria-label": eL.intl.string(eL.t.WAI6xu),
                      children: (0, a.jsx)(eM.P, { size: "md", color: "currentColor", className: ig.b }),
                  })
                : null,
        ],
    });
}
function iA(e) {
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
        ia.A.increment({ name: il.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = r.useCallback(() => {
        (c?.(),
            (0, ih._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: ih.Wm.USER_BANNER_DISMISS }));
    }, [c, t, n, l, i]);
    return (0, a.jsx)(ip, { buttons: d, description: o, header: s, onDismiss: u });
}
var iC = n(477427);
function ix(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eL.intl.string(eL.t.wSZfJR), description: eL.intl.string(eL.t.CRwzW5) },
            { title: eL.intl.string(eL.t.cmMUaB), description: eL.intl.string(eL.t.n6G1ue) },
            { title: eL.intl.string(eL.t["5SPKSy"]), description: eL.intl.string(eL.t.eyjeJQ) },
        ],
        o = r.useCallback(() => {
            (0, id.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        (is.A.updateChannelOverrideSettings({
            guildId: null,
            channelId: t,
            settings: { muted: !0 },
            label: iC.fd.Muted,
        }),
            ir.A.showMuteSuccessToast(i, t),
            (0, ih._$)({ channelId: t, warningId: l, senderId: i, warningType: iu._j.LIKELY_ATO, cta: e }),
            o());
    }
    return (
        r.useEffect(() => {
            ((0, ih.mO)(eu.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iu._j.LIKELY_ATO,
            }),
                ia.A.increment({ name: il.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iA, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iu._j.LIKELY_ATO,
            header: eL.intl.string(eL.t.R8UsiI),
            description: eL.intl.string(eL.t.lI8nQl),
            onDismiss: o,
            buttons: [
                {
                    text: eL.intl.string(eL.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        ((0, ii.openModalLazy)(async () => {
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
                                            io.B,
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
                                            ic.PQ,
                                            {
                                                title: eL.intl.string(eL.t.ftIK2A),
                                                description: eL.intl.string(eL.t.w2ve0t),
                                                buttonText: eL.intl.string(eL.t.ftIK2A),
                                                onButtonPress: () => {
                                                    (c(ih.Wm.USER_MODAL_MUTE), o());
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, a.jsx)(eE.D, {
                                        onClick: () =>
                                            (0, ih._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: iu._j.LIKELY_ATO,
                                                cta: ih.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, a.jsx)(ej.D, {
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
                            (0, ih._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iu._j.LIKELY_ATO,
                                cta: ih.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                { text: eL.intl.string(eL.t.ftIK2A), onClick: () => c(ih.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var iE = n(564771),
    iS = n(866660);
function iI(e) {
    let { channel: t, scrollManager: n } = e,
        l = r.useRef(null),
        { selectAndFocusConversation: i } = V(),
        s = (0, h.bG)([U.A], () => U.A.getSelectedConversation(t.id)),
        { isShifted: o } = (function (e) {
            let { bannerRef: t, scrollManager: n, channelId: l, selectedConversationId: i } = e,
                { bannerMeasurementRef: s, conversationJumpInProgressRef: a } = V(),
                { isFocusedRef: o } = (0, H.D7)(),
                [c, d] = r.useState(!1),
                u = r.useRef(!1);
            return (
                r.useEffect(() => {
                    if (null != t.current)
                        return () => {
                            (0, w.P7)(l, i);
                        };
                }, [l, t, i]),
                r.useEffect(() => {
                    if (null == t.current || null == s) return;
                    let e = n.ref.current?.getScrollerNode();
                    if (null != e)
                        return (
                            e.addEventListener("scroll", i, { passive: !0 }),
                            () => {
                                (e.removeEventListener("scroll", i), (s.current = null), (u.current = !1), d(!1));
                            }
                        );
                    function i() {
                        if (null == e || null == t.current) return;
                        let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                        s.current = n;
                        let i = e.clientHeight / 2,
                            r = n < i + 50 && n + 40 > i - 50;
                        if ((r !== u.current && ((u.current = r), d(r)), null != a.current || o.current)) return;
                        let c = e.getBoundingClientRect(),
                            h = t.current.getBoundingClientRect();
                        (h.bottom < c.top || h.top > c.bottom) && (0, w.P7)(l);
                    }
                }, [s, t, n, d, l, a, o]),
                { isShifted: c }
            );
        })({ bannerRef: l, scrollManager: n, channelId: t.id, selectedConversationId: s?.id ?? null }),
        c = r.useCallback(() => {
            null != s && i(s.id);
        }, [i, s]);
    return null == s
        ? null
        : (0, a.jsx)("div", {
              ref: l,
              className: iS.A,
              children: (0, a.jsx)(ew, {
                  channel: t,
                  conversation: s,
                  actionsShifted: o,
                  onFocusToggle: c,
                  suppressBorder: !0,
              }),
          });
}
var iy = n(495273),
    i_ = n(429933),
    ij = n(176781),
    ib = n(314307),
    iv = n(463930),
    iN = n(442433),
    iT = n(793574),
    iM = n(688810),
    iR = n(967144),
    iD = n(342296),
    iL = n(696451),
    ik = n(427262),
    iP = n(209516);
function iO(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = r.useRef(null),
        { analyticsLocations: o } = (0, iM.Ay)(iT.A.USERNAME),
        c = (0, h.bG)([lV.default], () => lV.default.getUser(t)),
        d = (0, h.bG)([iL.Ay], () => (null != t ? iL.Ay.getMember(l.guild_id, t) : null)),
        u = (0, iR.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function m(e) {
        if (null == c) return null;
        (0, iN.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("926132"),
                n.e("146652"),
                n.e("893190"),
                n.e("229787"),
                n.e("882073"),
                n.e("691994"),
                n.e("576665"),
                n.e("624198"),
                n.e("823427"),
                n.e("343116"),
                n.e("70515"),
                n.e("285802"),
                n.e("666939"),
                n.e("424966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, a.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? ik.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, a.jsx)(iM.f5, {
              value: o,
              children: (0, a.jsx)(iD.A, {
                  targetElementRef: s,
                  user: c,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: d?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, a.jsx)(eE.D, {
                          ...e,
                          innerRef: s,
                          tag: "span",
                          onContextMenu: m,
                          children: (0, a.jsx)(e_.E, {
                              className: iP.e,
                              tag: "span",
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: (0, a.jsx)(iv.g, { name: g, colorString: p ?? null, colorStrings: u }),
                          }),
                      }),
              }),
          });
}
var iG = n(268378),
    iU = n(91172);
function iw(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t);
    return (0, a.jsxs)(ib.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", {
                className: iU.P,
                children: (0, a.jsx)(ij.x, { size: "lg", color: $.A.colors.ICON_SUBTLE }),
            }),
            (0, a.jsx)(ib.cr, { children: n }),
            null != t.ownerId &&
                (0, a.jsx)(e_.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eL.intl.format(iG.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, a.jsx)(iO, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iF = n(93246),
    iH = n(95701),
    iB = n(808728),
    iK = n(534890),
    iV = n(713654),
    iz = n(691060),
    iW = n(376310),
    iq = n(959717);
function i$(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, a.jsx)("div", {
        className: c()(iq._, { [iq.L]: l }),
        children: Array.from(t).map((e) =>
            (0, a.jsx)(iW.Ay, { tag: e, onRemove: i, size: null == i ? iW.Ay.Sizes.SMALL : iW.Ay.Sizes.MEDIUM }, e.id),
        ),
    });
}
var iJ = n(151582);
function iZ(e) {
    let { channel: t } = e,
        n = (0, iz.kt)(t),
        { firstMessage: l } = (0, h.cf)([tZ.A], () => tZ.A.getMessage(t.id)),
        i = new Set((0, iz.zt)(t, n)),
        s = (0, iV.gU)(t) ?? iK.ChatIcon,
        r = (0, P.Ay)(t);
    return (0, a.jsxs)(ib.Ay, {
        channelId: t.id,
        className: iJ.kL,
        children: [
            (0, a.jsx)("div", { className: iJ.P0, children: (0, a.jsx)(s, { className: iJ.Kk, strokeWidth: 1.75 }) }),
            (0, a.jsx)(ib.cr, { className: iJ.wx, children: r }),
            null == l &&
                (0, a.jsx)(e_.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eL.intl.string(eL.t.mE3KJN),
                }),
            (0, a.jsx)(i$, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var iY = n(289873),
    iX = n(548118),
    iQ = n(513461),
    i0 = n(654265),
    i1 = n(561446),
    i2 = n(881817);
function i3(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, h.bG)([lV.default], () => lV.default.getUser(t.userId));
    return (0, a.jsxs)("div", {
        className: i2.I8,
        children: [
            (0, a.jsxs)("div", {
                className: i2.Ov,
                children: [
                    null != n &&
                        (0, a.jsxs)("div", {
                            className: i2.yB,
                            children: [
                                (0, a.jsx)(iX.Ay, { guild: n, active: !0, size: iX.Ay.Sizes.SMOL, className: i2.$f }),
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
                            children: eL.intl.format(eL.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== iQ.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === iQ.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("hr", { className: i2.g2 }),
                            (0, a.jsxs)("div", {
                                className: i2.fs,
                                children: [
                                    (0, a.jsx)(e_.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, a.jsx)(e_.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function i4(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, i0.A)(t.id);
    return (0, a.jsx)(ib.Ay, {
        channelId: t.id,
        className: i2.kL,
        children:
            null != l && null != l.formResponses
                ? (0, a.jsxs)("div", {
                      className: i2.KJ,
                      children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(i3, { guild: i, joinRequest: l }) }),
                          (0, a.jsx)(i1.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, a.jsx)(iY.y, {})
                  : null,
    });
}
var i7 = n(825484),
    i8 = n(241541),
    i5 = n(571694),
    i6 = n(922301),
    i9 = n(660184),
    se = n(598104),
    st = n(396787),
    sn = n(117534);
function sl(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, a.jsx)(ex.m, {
              position: "bottom",
              text: eL.intl.string(eL.t["0qPSMV"]),
              children: (0, a.jsxs)(eE.D, {
                  className: c()(sn.e, l),
                  onClick: () => (0, st.jv)(t.id, s),
                  children: [
                      n,
                      (0, a.jsx)("div", {
                          className: sn.Z,
                          children: (0, a.jsx)(tU.PencilIcon, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)("div", { className: l, children: n });
}
var si = n(73028),
    ss = n(452015),
    sa = n(151440);
function sr(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, h.bG)([v.Ay], () => v.Ay.useReducedMotion),
        o = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, ly.A)({ userId: i?.id, size: lS._3.SIZE_80, animateOnHover: !0 }),
        [m, g] = r.useState(!1),
        p = r.useCallback(() => {
            (d.onMouseEnter(), g(!0));
        }, [d]),
        A = r.useCallback(() => {
            (d.onMouseLeave(), g(!1));
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, a.jsxs)(ib.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, a.jsx)(sl, {
                      channel: n,
                      editable: !0,
                      location: iT.A.EMPTY_GROUP_DM,
                      children: (0, a.jsx)(se.A, { channel: n, size: lS._3.SIZE_80, animated: t, "aria-label": o }),
                  })
                : (0, a.jsx)(lI.eu, {
                      "aria-label": o,
                      size: lS._3.SIZE_80,
                      src: (0, i5.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, a.jsx)(ib.cr, {
                children: f
                    ? (0, a.jsx)(i9.A, {
                          userName: o,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: m ? i6.G.ANIMATED : i6.G.STATIC,
                          loop: !0,
                      })
                    : o,
            }),
            (0, a.jsx)(ib.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, a.jsxs)(i7.e, {
                    className: sa.U,
                    children: [
                        (0, a.jsx)(ss.NE, { channel: n, text: eL.intl.string(eL.t.NB5DFD), icon: i8.D }),
                        (0, a.jsx)(eR.$, {
                            icon: tU.PencilIcon,
                            variant: "secondary",
                            text: eL.intl.string(eL.t["5Q9+/L"]),
                            "aria-label": eL.intl.string(eL.t["5Q9+/L"]),
                            onClick: () => (0, si.U)(n.id, iT.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var so = n(136722),
    sc = n(342952),
    sd = n(177953),
    su = n(725570),
    sh = n(435183),
    sm = n(685374),
    sg = n(63104),
    sp = n(597367);
function sA(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: r } = e;
    return (
        (t = i
            ? (0, a.jsx)(sg.A, { size: 12, color: s, className: sp.TS })
            : (0, a.jsx)("div", { className: sp.yY, style: { backgroundColor: s } })),
        (0, a.jsxs)("div", { className: c()(n, sp.JC), style: { "--custom-role-label-color": s }, children: [t, r, l] })
    );
}
var sf = n(468689),
    sC = n(46054),
    sx = n(34457),
    sE = n(317525),
    sS = n(488926),
    sI = n(869685);
function sy(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: r = !1,
        verified: o = !1,
    } = e;
    return (0, a.jsx)(eE.D, {
        className: c()(t, sI.x6, { [sI.r9]: r }),
        onClick: r ? void 0 : s,
        "aria-disabled": r,
        role: "button",
        children: (0, a.jsx)(sA, {
            className: sI.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, a.jsx)(eM.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: sI.Tj,
                    colorClass: sI.eG,
                }),
        }),
    });
}
var s_ = n(314040),
    sj = n(165648);
function sb(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        o = (0, h.bG)([sE.A], () => (null != s ? sE.A.getSortedRoles(s) : void 0)),
        d = (0, h.bG)([lV.default, t8.A], () => lV.default.getUser(t8.A.getGuild(s)?.ownerId)),
        u = r.useMemo(() => (null != o ? o.filter((e) => !(0, sx.Oy)(e)) : []), [o]),
        m = r.useMemo(
            () =>
                n9()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sS.aH({ forceRoles: { [e.id]: e }, context: t });
                        return so.X8(n, so.kg(eu.xBc.ADMINISTRATOR, eu.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        g = (0, h.yK)(
            [lV.default],
            () => {
                let e = {};
                for (let n of (null != d && (e[d.id] = d), Object.values(t.permissionOverwrites))) {
                    if (n.type !== nj.r2.MEMBER || null != e[n.id]) continue;
                    let t = lV.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return n9()(e)
                    .filter((e) => {
                        let n = sS.$3({ permission: eu.xBc.ADMINISTRATOR, user: e, context: t }),
                            l = t.permissionOverwrites[e.id] ?? sS.x3,
                            i = so.zy(l.allow, eu.xBc.VIEW_CHANNEL);
                        return n || i;
                    })
                    .value();
            },
            [t, d],
        ),
        p = th.A.can(eu.xBc.MANAGE_CHANNELS, t) || th.A.can(eu.xBc.MANAGE_ROLES, t),
        A = r.useCallback(() => l(!1), []);
    return (0, a.jsxs)(ib.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(ib.WK, { locked: !0, channelType: t.type }),
            (0, a.jsx)(ib.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: i }) }),
            (0, a.jsx)(ib.j1, {
                className: sj.PT,
                children: eL.intl.format(eL.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => sC.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, a.jsxs)("div", {
                      className: s_.$x,
                      children: [
                          (0, a.jsx)(eR.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eL.intl.string(eL.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sd.n,
                          }),
                          (0, a.jsx)(eR.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eL.intl.string(eL.t["3gUsJb"]),
                              onClick: function () {
                                  sh.Ay.open(t.id);
                              },
                              icon: tU.PencilIcon,
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: s_.ol,
                children: [
                    (function () {
                        if (1 !== g.length || m.length > 0)
                            return (0, a.jsx)(sc.A, { guildId: t.guild_id, className: s_.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = ik.Ay.getName(e);
                        return (0, a.jsxs)("div", {
                            className: s_.HD,
                            children: [
                                (0, a.jsx)(lI.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lS._3.SIZE_24,
                                }),
                                (0, a.jsx)(e_.E, {
                                    tag: "span",
                                    className: s_.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, a.jsx)(e_.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: eL.intl.string(eL.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    m.map((e, n) => {
                        let l = e.colorString ?? eu.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return p
                            ? (0, a.jsx)(
                                  sy,
                                  {
                                      className: c()(s_.JC, { [s_.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !p,
                                      verified: i,
                                      onClick: () => {
                                          (sf.A.open(t.guild_id, eu.BEX.MEMBERS), sf.A.selectRole(e.id));
                                      },
                                  },
                                  e.id,
                              )
                            : (0, a.jsx)(
                                  sA,
                                  {
                                      className: c()(s_.JC, { [s_.HV]: n === m.length - 1 }),
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
                ? (0, a.jsx)(su.aF, {
                      renderModal: (e) =>
                          (0, a.jsx)(sm.default, { ...e, onClose: () => (A(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sv = n(270171);
function sN(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, h.bG)([th.A], () => th.A.can(eu.xBc.MANAGE_CHANNELS, t) && iH.bk.has(t.type));
    return (0, a.jsxs)(ib.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(ib.WK, { channelType: t.type }),
            (0, a.jsx)(ib.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: n }) }),
            (0, a.jsx)(ib.j1, {
                className: sj.PT,
                children: eL.intl.format(eL.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => sC.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, a.jsx)("div", {
                      className: sv.U,
                      children: (0, a.jsx)(eR.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eL.intl.string(eL.t["3gUsJb"]),
                          onClick: () => {
                              sh.Ay.open(t.id);
                          },
                          icon: tU.PencilIcon,
                      }),
                  })
                : null,
        ],
    });
}
var sT = n(909833);
function sM(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, a.jsx)("div", { style: { marginTop: -8 } })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(e_.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, a.jsx)("div", {
                          className: sT.VA,
                          children: eL.intl.format(eL.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, a.jsx)(
                                      iO,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, a.jsx)("span", {
                                              className: c()(sT.eM, sT.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === eu.rbe.PRIVATE_THREAD
                      ? (0, a.jsx)(e_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eL.intl.string(eL.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sR(e) {
    let { channel: t } = e,
        n = (0, iV.gU)(t) ?? tO.y,
        l = (0, P.Ay)(t);
    return (0, a.jsxs)(ib.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", { className: sT.P0, children: (0, a.jsx)(n, { className: sT.Kk }) }),
            (0, a.jsx)(ib.cr, { children: l }),
            (0, a.jsx)(sM, { channel: t }),
        ],
    });
}
var sD = n(187495),
    sL = n(321404),
    sk = n(957283),
    sP = n(189213),
    sO = n(933958),
    sG = n(869003),
    sU = n(321191),
    sw = n(712440),
    sF = n(733110),
    sH = n(543465),
    sB = n(308528),
    sK = n(928658),
    sV = n(978914),
    sz = n(977347);
function sW(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: o,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, h.bG)([nv.A], () => nv.A.getRelationshipType(t), [t])) === eu.eA$.NONE ||
                    l === eu.eA$.BLOCKED ||
                    l === eu.eA$.PENDING_INCOMING,
                s = n || i,
                a = (0, sz.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, sV.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, l),
        { channelId: c } = (0, sk.N)(),
        d = t.id === c,
        u = !nn.Fr && !d,
        m = r.useCallback(() => {
            null != i &&
                (0, sK.b8)(i, () => {
                    sB.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && o)
        ? null
        : (0, a.jsx)(eR.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: m,
              text: eL.intl.string(eL.t.HHZmDn),
          });
}
function sq(e) {
    let { channel: t } = e,
        l = (0, h.bG)([sH.Ay], () => sH.Ay.isChannelMuted(null, t.id));
    return (0, a.jsx)(eR.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eL.intl.string(eL.t.YqAjXy) : eL.intl.string(eL.t.w4m945),
        onClick: function () {
            (0, ii.openModalLazy)(async () => {
                let { default: e } = await n.e("499312").then(n.bind(n, 259763));
                return (n) => (0, a.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function s$(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, h.bG)([sO.Ay], () => sO.Ay.getSelfEmbeddedActivities());
    function s() {
        sw.A.delete(l.id);
        let e = i.get(n.id);
        null != e && sG.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, a.jsx)(eR.$, {
        variant: "secondary",
        text: eL.intl.string(eL.t["5S3sQF"]),
        onClick: () => {
            ((0, ii.openModal)((e) =>
                (0, a.jsx)(sP.a, {
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
                t5.default.track(eu.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                }));
        },
    });
}
function sJ(e) {
    var t;
    let { channel: n, user: l } = e,
        i =
            ((t = l?.id ?? eu.dJq),
            (0, h.bG)([sU.A], () => (null !== t ? sU.A.getUserProfile(t ?? eu.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: o } = (0, h.cf)([sF.default], () => ({
            authorizedAppToken: sF.default.getNewestTokenForApplication(i?.id),
            authorizedAppsFetchState: sF.default.getFetchState(),
        }));
    return (r.useEffect(() => {
        l.bot && o === sF.FetchState.NOT_FETCHED && sw.A.fetch();
    }, [l.bot, o]),
    l.bot && null != i && null != s)
        ? (0, a.jsxs)(i7.e, {
              size: "sm",
              children: [
                  (0, a.jsx)(sq, { channel: n }),
                  (0, a.jsx)(s$, { application: i, channel: n, oauth2Token: s }),
                  (0, a.jsx)(sW, { channel: n, user: l }),
              ],
          })
        : (0, a.jsx)(i7.e, { size: "sm", children: (0, a.jsx)(sW, { channel: n, user: l }) });
}
var sZ = n(692617),
    sY = n(903209),
    sX = n(402860),
    sQ = n(518477),
    s0 = n(976926);
function s1(e) {
    let { userId: t, channelId: n, showDivider: l = !1, compact: i = !1 } = e,
        s = (0, h.bG)([sU.A], () => sU.A.getMutualGuilds(t), [t]),
        o = lV.default.getUser(t);
    r.useEffect(() => {
        null == s && null != o && (0, sY.A)(t, o.getAvatarURL(null, 80), { withMutualGuilds: !0 });
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
              className: c()(s0.kL, l ? s0.yF : null),
              children: (0, a.jsx)(e_.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: eL.intl.string(eL.t.zjVh8h),
              }),
          })
        : (0, a.jsxs)(eE.D, {
              className: c()(s0.kL, s0.vk, { [s0.yF]: l }),
              onClick: function () {
                  (0, sX.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: sQ.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iT.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, a.jsx)(sZ.A, {
                      guilds: d,
                      maxGuilds: 3,
                      size: i ? iX.Ay.Sizes.SMOL : iX.Ay.Sizes.SMALLER,
                      hideOverflowCount: !0,
                  }),
                  (0, a.jsx)(e_.E, {
                      className: s0.NI,
                      variant: "text-sm/normal",
                      children: eL.intl.format(eL.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var s2 = n(717398),
    s3 = n(327166),
    s4 = n(390848),
    s7 = n(156328);
function s8(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eR.$, {
        size: "sm",
        variant: "secondary",
        onClick: function () {
            s2.A.blockUser(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.l4Emac),
    });
}
function s5(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, s3.D)(t, i),
        r = (0, h.bG)([nv.A], () => nv.A.getRelationshipType(t), [t]),
        o = (0, h.bG)([nv.A], () => nv.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, s4.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: eu.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, a.jsx)(eR.$, {
              variant: l,
              onClick: function () {
                  r === eu.eA$.PENDING_INCOMING
                      ? c()
                      : s2.A.addRelationship({ userId: t, context: { location: eu.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function s6(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eR.$, {
        variant: "secondary",
        onClick: function () {
            s2.A.removeFriend(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.cvSt1J),
    });
}
function s9(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eR.$, {
        variant: "secondary",
        onClick: function () {
            s2.A.unblockUser(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.XyHpKH),
    });
}
function ae(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, h.bG)([nv.A], () => nv.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, s4.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: eu.liQ.DM_CHANNEL,
        });
    return (0, a.jsxs)("div", {
        className: s7.K,
        children: [
            (0, a.jsx)(e_.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eL.intl.format(eL.t.uIomXw, { username: ik.Ay.getName(n) }),
            }),
            (0, a.jsxs)(i7.e, {
                size: "sm",
                children: [
                    (0, a.jsx)(eR.$, { variant: "primary", onClick: s, text: eL.intl.string(eL.t["+WbSn5"]) }),
                    (0, a.jsx)(eR.$, {
                        variant: "secondary",
                        onClick: function () {
                            s2.A.cancelFriendRequest(n.id, { location: eu.liQ.DM_CHANNEL });
                        },
                        text: eL.intl.string(eL.t.rQSndv),
                    }),
                    (0, a.jsx)(s8, { userId: n.id }),
                    l ? null : (0, a.jsx)(sW, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function at(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: r,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, h.bG)([nv.A], () => nv.A.getRelationshipType(l.id), [l.id]);
    if (c === eu.eA$.PENDING_INCOMING && !o) return (0, a.jsx)(ae, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case eu.eA$.NONE:
        case eu.eA$.PENDING_INCOMING:
            l.bot || (t = (0, a.jsx)(s5, { userId: l.id, showingBanner: i, variant: s, label: r }));
            break;
        case eu.eA$.FRIEND:
            t = (0, a.jsx)(s6, { userId: l.id });
            break;
        case eu.eA$.BLOCKED:
            t = (0, a.jsx)(s9, { userId: l.id });
            break;
        case eu.eA$.PENDING_OUTGOING:
            t = (0, a.jsx)(eR.$, { variant: "primary", disabled: !0, text: eL.intl.string(eL.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== eu.eA$.BLOCKED;
    return (0, a.jsxs)(i7.e, {
        size: "sm",
        children: [t, d ? (0, a.jsx)(s8, { userId: l.id }) : null, i ? null : (0, a.jsx)(sW, { channel: n, user: l })],
    });
}
var an = n(92650),
    al = n(138298),
    ai = n(761640);
function as(e) {
    let { channel: t, user: n } = e,
        l = r.useCallback(() => {
            (0, ev.P0)((0, eN.o)(eL.intl.string(eL.t.a2j0hv), eT.Ck.FAILURE));
        }, []),
        i = r.useCallback(() => {
            al.A.closeChannelSidebar(ai.fe);
        }, []),
        s = r.useCallback(() => {
            al.A.closeChannelSidebar(ai.fe);
        }, []),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, an.t)({ user: lV.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, a.jsxs)(i7.e, {
        size: "sm",
        children: [
            (0, a.jsx)(eR.$, {
                variant: "primary",
                disabled: g,
                onClick: () => o(t.id),
                loading: d,
                text: eL.intl.string(eL.t.Kz8Pwr),
            }),
            (0, a.jsx)(eR.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: eL.intl.string(eL.t.B2nygW),
            }),
            (0, a.jsx)(sW, { channel: t, user: n }),
        ],
    });
}
var aa = n(693833);
function ar(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, sk.N)(),
        r = (0, h.bG)([nv.A], () => nv.A.getRelationshipType(l.id), [l.id]),
        o = n.id === s,
        c = (0, sL.c)(n.id),
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        m = (0, eq.U)(),
        g = aa.n;
    return (
        u
            ? (t = null)
            : m
              ? ((t = (0, a.jsx)(at, {
                    channel: n,
                    user: l,
                    showingBanner: i,
                    addFriendVariant: "active",
                    addFriendLabel: eL.intl.string(eL.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (g = aa.O))
              : o && c
                ? (t = (0, a.jsx)(as, { channel: n, user: l }))
                : d
                  ? (t = (0, a.jsx)(sJ, { channel: n, user: l }))
                  : ((t = (0, a.jsx)(at, { channel: n, user: l, showingBanner: i })),
                    r === eu.eA$.PENDING_INCOMING && (g = aa.O)),
        (0, a.jsxs)("div", {
            className: g,
            children: [(0, a.jsx)(s1, { userId: l.id, channelId: n.id, showDivider: g !== aa.O, compact: m }), t],
        })
    );
}
var ao = n(746080),
    ac = n(221851);
function ad(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iy.Ae)(n),
        i = (0, h.bG)([iB.Ay], () => null != n.guild_id && n === iB.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, i_.A)(n.id)) return null;
    if (n.isForumPost()) return (0, a.jsx)(iZ, { channel: n });
    if (n.isMediaThread()) return (0, a.jsx)(iw, { channel: n });
    if (iH.Le.has(n.type)) return (0, a.jsx)(sR, { channel: n });
    if (i) return (0, a.jsx)(sD.A, { channel: n });
    else if (l) return (0, a.jsx)(sb, { channel: n });
    return (0, a.jsx)(sN, { channel: n });
}
function au(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, h.bG)([lV.default], () => (t.isPrivate() ? lV.default.getUser(t.getRecipientId()) : null)),
        r = ik.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, h.cf)([th.A], () => ({
            canManageRoles: th.A.can(eu.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: th.A.can(eu.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, a.jsx)(sr, { channel: t, children: eL.intl.string(eL.t.Rzvnig) });
    if (i === eu.rbe.DM)
        return (0, a.jsxs)(sr, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, a.jsx)(ej.D, { variant: "heading-xl/medium", className: ac.SX, children: r }),
                eL.intl.format(eL.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, a.jsx)(iF.Y, { userId: s.id }) : null,
                null != s ? (0, a.jsx)(ar, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, a.jsxs)(ib.Ay, {
                channelId: t.id,
                children: [
                    (0, a.jsx)(ib.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: l }) }),
                    (0, a.jsx)(ib.j1, { children: eL.intl.string(eL.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(ao.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, a.jsx)(i4, { channel: t });
        else return (0, a.jsx)(sr, { channel: t, children: eL.intl.format(eL.t.MFwcqO, { name: l }) });
    return c
        ? (0, a.jsx)(ad, { channel: t, canManageRoles: o })
        : (0, a.jsx)(ib.Ay, {
              channelId: t.id,
              children: (0, a.jsx)(ib.j1, { children: eL.intl.format(eL.t.hPVEQG, { channelName: l }) }),
          });
}
var ah = n(506774),
    am = n(933832),
    ag = n(782603),
    ap = n(408278),
    aA = n(763175),
    af = n(56562),
    aC = n(765671),
    ax = n(304072),
    aE = n(578623),
    aS = n(702841),
    aI = n(696986),
    ay = n(147036),
    a_ = n(975571),
    aj = n(36491),
    ab = n(953727);
function av(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, ab.A)(l),
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
var aN = n(423382);
function aT(e) {
    let { threadId: t } = e,
        n = (0, aS.bG)([eQ.A], () => eQ.A.getChannel(t)),
        l = (0, aS.bG)([eQ.A], () => eQ.A.getChannel(n?.parent_id)),
        i = r.useCallback(() => {
            null != n &&
                null != l &&
                ((0, ie.zV)(eu.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, tm.C)((0, ay.af)(n, l)));
        }, [n, l]);
    return (0, a.jsxs)("div", {
        className: aN.BQ,
        children: [
            (0, a.jsx)(av, {}),
            (0, a.jsxs)("div", {
                className: aN.BB,
                children: [
                    (0, a.jsx)(e_.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eL.intl.string(eL.t["5uAO7d"]),
                    }),
                    (0, a.jsx)(e_.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t.WnfPV3, {
                            helpArticleUrl: a_.A.getCreatorSupportArticleURL(eu.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, a.jsx)(aI.h, { size: 4 }),
                    (0, a.jsx)(eR.$, {
                        text: eL.intl.string(eL.t.C5UQC9),
                        variant: "primary",
                        icon: tM.LinkIcon,
                        onClick: i,
                    }),
                ],
            }),
            (0, a.jsx)(eE.D, {
                className: aN.b,
                onClick: function () {
                    (0, aj.sF)(t);
                },
                "aria-label": eL.intl.string(eL.t["0+xZH0"]),
                children: (0, a.jsx)(eM.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var aM = n(505527),
    aR = n(467073),
    aD = n(960538),
    aL = n(604121),
    ak = n(988904);
function aP() {
    return n
        .e("515423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let aO = r.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, h.bG)([v.Ay], () => v.Ay.useReducedMotion),
        i = (0, h.bG)([th.A], () => th.A.can(eu.xBc.SEND_MESSAGES_IN_THREADS, t)),
        s = (0, tr.s5)(t),
        r = (0, h.bG)([eo.default], () => eo.default.getId());
    return n
        ? i && !s && t.ownerId !== r
            ? (0, a.jsxs)("div", {
                  className: ak.aP,
                  children: [
                      (0, a.jsx)(aL.a, { importData: aP, shouldAnimate: !l, className: ak.lY }),
                      (0, a.jsxs)("div", {
                          className: ak.FS,
                          children: [
                              (0, a.jsx)(ej.D, {
                                  variant: "heading-md/semibold",
                                  children: eL.intl.string(eL.t.OmBThA),
                              }),
                              (0, a.jsx)(e_.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: eL.intl.string(eL.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
            : null
        : (0, a.jsx)("div", { className: ak.yF });
});
var aG = n(279182),
    aU = n(831688),
    aw = n(226698),
    aF = n(892340),
    aH = n(715757),
    aB = n(390897),
    aK = n(862482),
    aV = n(215026),
    az = n(66834),
    aW = n(964486),
    aq = n(351001),
    a$ = n(400528);
function aJ(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, a.jsx)(ex.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, a.jsx)(ap.K, {
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
var aZ = n(39470),
    aY = n(145530),
    aX = n(905499),
    aQ = n(406810),
    a0 = n(991982),
    a1 = n(838111),
    a2 = n(870136);
function a3(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        o = s?.reported_user_id,
        c = (0, h.bG)([lV.default], () => (null != o ? lV.default.getUser(o) : null)),
        d = (0, h.bG)([t8.A], () => t8.A.getGuild(t.guild_id));
    (0, aH.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, h.bG)([a$.A], () => null != l && a$.A.isUserBanned(l.id)),
                o = null != l && null == s,
                [c, d] = r.useState(o),
                u = (0, h.bG)([th.A], () => null != l && null != i && (0, aq.fJ)(l, i, [th.A]));
            if (
                ((0, aW.Ay)(() => {
                    o && az.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let m = !0 === s ? eL.intl.string(aZ.default.dpfwQ1) : eL.intl.string(aZ.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, a.jsx)(
                aJ,
                {
                    text: m,
                    icon: aV.w,
                    onClick: function () {
                        null != l &&
                            (0, ii.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("420282"), n.e("802504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: aK.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        m = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, h.bG)([th.A], () => null != l && null != i && (0, aq.KX)(l, i, [th.A])),
                r = (0, h.bG)([iL.Ay], () => null == l || null == iL.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = r ? eL.intl.string(aZ.default.Ux67nW) : eL.intl.string(aZ.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, a.jsx)(
                aJ,
                {
                    text: o,
                    icon: aX.N,
                    onClick: function () {
                        null != l &&
                            (0, ii.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("253335"), n.e("140243")]).then(
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
                    s = (0, h.bG)([th.A], () => null != n && null != l && (0, aq.Kd)(n, l, [th.A])),
                    { messageReference: r } = t,
                    o = (0, h.bG)([ep.A], () => (null != r ? ep.A.getMessage(r.channel_id, r.message_id) : null)),
                    c = (0, h.bG)([eQ.A], () => (null != o ? eQ.A.getChannel(o.channel_id) : null)),
                    d = (0, h.bG)([eQ.A], () => eQ.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? eL.intl.string(aZ.default["0IZbwC"]) : eL.intl.string(aZ.default.Uj6oD4),
                    m = null == o,
                    g = `delete-message-${t.id}`;
                return (0, a.jsx)(
                    aJ,
                    {
                        text: u,
                        icon: tB.TrashIcon,
                        onClick: function () {
                            null != c &&
                                null != o &&
                                aY.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: m,
                        color: aK.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            m,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, h.bG)(
                        [lV.default, t8.A, th.A],
                        () => null != n && null != l && (0, a1.b)(l.id, n.id, [lV.default, t8.A, th.A]),
                    ),
                    [s, r] = (0, a2.Ay)(n?.id, t.guild_id),
                    o = (0, h.bG)([iL.Ay], () => null != l && null != n && null != iL.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, a.jsx)(
                    aJ,
                    {
                        text: r ? eL.intl.string(aZ.default["6uMZbv"]) : eL.intl.string(aZ.default["Sgg/uI"]),
                        icon: aQ.ClockIcon,
                        onClick: function () {
                            null != n && (0, a0.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
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
function a4(e) {
    let { message: t, channel: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, a.jsx)(a3, { channel: n, message: t, snapshot: e }, l)),
    });
}
var a7 = n(152007),
    a8 = n(867455),
    a5 = n(435470),
    a6 = n(473503),
    a9 = n(853742),
    re = n(371476),
    rt = n(356974),
    rn = n(65406);
function rl(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, aF.uW)(t),
        [s, o] = r.useState(!1);
    function c() {
        (o(!0),
            aw.A.resolveFlag(t.id).then(() => {
                o(!1);
            }));
    }
    return i
        ? (0, a.jsx)(eR.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eL.intl.string(aZ.default["2Y4vkk"]) : eL.intl.string(aZ.default.YIbR4r),
              onClick: function () {
                  !0 === ah.w.get(aB.f)
                      ? c()
                      : (0, ii.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, a.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: am.CheckmarkLargeIcon,
              disabled: l,
          })
        : null;
}
function ri(e) {
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
        { ref: m, width: g } = (0, aC.Ay)(),
        [p, A] = r.useState(3),
        [f, C] = r.useState(!n),
        [x, E] = (0, ax.A)(!1, 2e3),
        S = (0, h.bG)([eQ.A], () => eQ.A.getChannel(t), [t]),
        { firstMessage: I } = (0, a6.OA)(S),
        y = (0, h.bG)([a7.A], () => a7.A.hasJoined(t)),
        { disableReactionUpdates: j, disableReactionCreates: b, isLurking: v, isPendingMember: N } = (0, aR.A)(S),
        T = (0, aH.W1)(S),
        M = (0, h.bG)([eQ.A], () => eQ.A.getChannel(i)),
        R = (0, a5.Ck)(M),
        D = (0, h.bG)([aE.A], () => aE.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
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
    let k = null != I && I.reactions.length > 0;
    function P() {
        null != S &&
            ((0, a9.jC)({ postId: S.id, location: { section: eu.JJy.CHANNEL_HEADER } }),
            (0, tm.C)((0, ay.af)(S, M), () => E(!0)));
    }
    let O = y ? am.CheckmarkLargeIcon : ag.BellIcon;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: c()(re.kL, { [re.wx]: f }, u),
                ref: m,
                children: [
                    T
                        ? (0, a.jsx)("div", {
                              className: re.kX,
                              children: null != I && (0, a.jsx)(a4, { message: I, channel: S }),
                          })
                        : (0, a.jsx)("div", {
                              className: re.hY,
                              children:
                                  null != I &&
                                  (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          !k &&
                                              !b &&
                                              null != R &&
                                              (0, a.jsx)("div", {
                                                  className: rt.reactions,
                                                  children: (0, a.jsx)(aU.q, {
                                                      message: I,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: v,
                                                      isPendingMember: N,
                                                      emoji: R,
                                                      type: aM.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, a.jsx)(aG.A, {
                                              message: I,
                                              channel: S,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: j,
                                              isLurking: v,
                                              isPendingMember: N,
                                              maxReactions: p,
                                              className: re.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !b &&
                                              (0, a.jsx)(aD.t, {
                                                  message: I,
                                                  channel: S,
                                                  useChatFontScaling: !1,
                                                  className: c()(rn.secondary, re.vU, rt.visible, { [re.w$]: !k }),
                                                  isForumToolbar: !0,
                                                  children: !k && eL.intl.string(eL.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, a.jsxs)("div", {
                        className: re.Uo,
                        children: [
                            T
                                ? (0, a.jsx)(rl, { channel: S })
                                : !v &&
                                  (!o || y) &&
                                  (!d || !y) &&
                                  (0, a.jsx)(ex.m, {
                                      text: eL.intl.string(eL.t.F7oeDv),
                                      children: (0, a.jsx)(eR.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: y ? eL.intl.string(eL.t["7OkUzs"]) : eL.intl.string(eL.t["3aOv+h"]),
                                          onClick: function () {
                                              null != S &&
                                                  (y
                                                      ? a8.A.leaveThread(S, "Forum Toolbar")
                                                      : a8.A.joinThread(S, "Forum Toolbar"));
                                          },
                                      }),
                                  }),
                            (0, a.jsx)(ex.m, {
                                text: eL.intl.string(eL.t.WqhZss),
                                children: x
                                    ? (0, a.jsx)(eR.$, {
                                          icon: am.CheckmarkLargeIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eL.intl.string(eL.t.t5VZ88),
                                      })
                                    : (0, a.jsx)(ap.K, {
                                          icon: tM.LinkIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eL.intl.string(eL.t.WqhZss),
                                      }),
                            }),
                            f &&
                                (0, a.jsx)(ex.m, {
                                    text: eL.intl.string(eL.t.nFP4oa),
                                    children: (0, a.jsx)(ap.K, {
                                        icon: aA.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: function () {
                                            null != S &&
                                                _.A.jumpToMessage({
                                                    channelId: S.id,
                                                    messageId: S.id,
                                                    flash: !0,
                                                    jumpType: af.vx.INSTANT,
                                                });
                                        },
                                        "aria-label": eL.intl.string(eL.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, a.jsx)(aT, { threadId: t }),
            !s && (0, a.jsx)(aO, { channel: S, isLastItem: l }),
        ],
    });
}
var rs = n(364522),
    ra = n(80682),
    rr = n(763899),
    ro = n(983851),
    rc = n(104171),
    rd = n(262763),
    ru = n(499211),
    rh = n(763827),
    rm = n(977997),
    rg = n(607567),
    rp = n(917592),
    rA = n(490094),
    rf = n(477569);
function rC(e) {
    let { channel: t, className: n } = e,
        l = (0, tr._M)(t),
        i = (0, tr.gZ)(t),
        s = (0, h.bG)([rm.A], () => rm.A.isInChannel(t.id)),
        o = (0, h.bG)([rg.Ay], () => rg.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: d } = (0, ru.A)(t.id),
        u = (0, h.bG)([rh.A], () => (rh.A.getChannelId() === t.id ? rh.A.getState() : eu.S7L.RTC_DISCONNECTED), [t.id]),
        m = r.useCallback(() => {
            rd.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: d, locked: !1 });
        }, [t, s, d]),
        g = r.useMemo(() => o.map((e) => e.user.id), [o]),
        p = (0, a5.$I)(t, g),
        A = p.length > 0,
        { connectionStatusText: f } = rp.A.getStatus(u, !1);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(ex.m, {
                text: i ? (l ? void 0 : eL.intl.string(rA.default.yaoRu1)) : eL.intl.string(rA.default.yBjQ3q),
                caretConfig: { position: "bottom", align: "start" },
                align: "left",
                children: (0, a.jsxs)(eE.D, {
                    className: c()(rf.Xt, l ? null : rf.tW),
                    onClick: l ? m : void 0,
                    children: [
                        (0, a.jsx)(ro.H, {
                            size: "refresh_sm",
                            color: s ? $.A.colors.STATUS_POSITIVE : $.A.colors.ICON_MUTED,
                        }),
                        (0, a.jsx)(e_.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: rf.Gp,
                            children: u === eu.S7L.RTC_DISCONNECTED ? eL.intl.string(rA.default.ficpp7) : f,
                        }),
                    ],
                }),
            }),
            A
                ? (0, a.jsx)(rc.Ay, {
                      className: rf.L_,
                      guildId: t.guild_id,
                      users: p,
                      size: rc.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var rx = n(950490);
function rE(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, iz.kt)(l),
        o = (0, lP.IO)(l),
        c = t?.author.id,
        d = (0, r.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, ra.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, a.jsxs)("div", {
            className: rx.TX,
            children: [
                (0, a.jsxs)(rs.Ar, {
                    children: [
                        null != t
                            ? (0, a.jsx)("ol", {
                                  children: (0, a.jsx)(nV, {
                                      className: rx.iU,
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
                            className: rx.iQ,
                            children: [
                                null == t &&
                                    (0, a.jsx)(e_.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: eL.intl.string(eL.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, a.jsx)("div", {
                                        className: rx.GA,
                                        children: s.map((e) =>
                                            (0, a.jsx)(iW.Ay, { tag: e, size: iW.Ay.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, a.jsx)(rr.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, a.jsx)("div", { className: rx.b1 }),
                                (0, a.jsx)(ri, {
                                    className: rx.Jr,
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
                                            (0, a.jsx)("div", { className: rx.b1 }),
                                            (0, a.jsx)(rC, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: rx.ld }),
            ],
        })
    );
}
var rS = n(640708),
    rI = n(378570),
    ry = n(452082),
    r_ = n(327337);
function rj(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = r.useCallback(() => {
            (0, id.xi)(t, [l]);
        }, [t, l]),
        o = (0, h.bG)([nv.A], () => nv.A.isBlocked(i)),
        c = r.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: iu._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    r.useEffect(() => {
        ((0, ih.QF)({ ...c, viewName: ih.gN.SAFETY_WARNING_BANNER }),
            ia.A.increment({ name: il.K.SAFETY_WARNING_VIEW }));
    }, [c]);
    let d = r.useCallback(
            (e) => {
                (0, ih._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = r.useCallback(() => {
            ((0, ii.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("456510"),
                        n.e("506627"),
                        n.e("770940"),
                        n.e("302033"),
                        n.e("882830"),
                        n.e("819959"),
                        n.e("720516"),
                    ]).then(n.bind(n, 131882));
                    return (n) => {
                        let { transitionState: s, onClose: r } = n;
                        return (0, a.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: iu._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: r,
                        });
                    };
                },
                { modalKey: r_.V },
            ),
                d(ih.Wm.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, i, l, d]),
        m = r.useCallback(() => {
            (s(), d(ih.Wm.USER_BANNER_BLOCK_CONFIRM));
        }, [s, d]),
        g = r.useCallback(() => {
            (s(), d(ih.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [s, d]),
        p = r.useCallback(() => {
            (0, ii.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("770940"), n.e("784938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, a.jsx)(e, {
                        transitionState: l,
                        onBlock: m,
                        onBlockAndReport: g,
                        onCancel: () => {
                            (s?.(), d(ih.Wm.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [m, g, i, t, d]);
    return (0, a.jsx)(iA, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: iu._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eL.intl.string(eL.t.ZzlB5p),
        description: eL.intl.string(eL.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eL.intl.string(eL.t.Qyu4UK), variant: "primary", onClick: u },
            ...(o ? [] : [{ text: eL.intl.string(eL.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var rb = n(74114);
function rv(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, h.cf)([nv.A], () => ({ isIgnored: nv.A.isIgnored(t) }), [t]),
        s = r.useCallback(() => {
            ((0, ih._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iu._j.STRANGER_DANGER,
                cta: ih.Wm.USER_MODAL_IGNORE,
            }),
                s2.A.ignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]),
        o = r.useCallback(() => {
            ((0, ih._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iu._j.STRANGER_DANGER,
                cta: ih.Wm.USER_MODAL_UNIGNORE,
            }),
                s2.A.unignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]);
    return (0, a.jsx)(ic.PQ, {
        title: eL.intl.string(eL.t.avyV7P),
        description: eL.intl.string(eL.t.naWE6W),
        buttonText: i ? eL.intl.string(eL.t["3SrzRT"]) : eL.intl.string(eL.t.avyV7P),
        onButtonPress: i ? o : s,
    });
}
function rN(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, h.cf)([nv.A], () => ({ isBlocked: nv.A.isBlocked(i) }), [i]),
        o = r.useCallback(() => {
            (0, id.xi)(t, [l]);
        }, [t, l]),
        c = (0, r_.eT)(),
        d = r.useCallback(
            (e) => () => {
                (s2.A.blockUser(i, { location: r_.Rx }).then(() => {
                    o();
                }),
                    (0, ih._$)({
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        warningType: iu._j.STRANGER_DANGER,
                        cta: e,
                    }));
            },
            [o, t, l, i],
        );
    function u(e, s, r) {
        (0, ii.openModalLazy)(async () => {
            let { default: o } = await Promise.all([n.e("283887"), n.e("14788"), n.e("367554")]).then(
                n.bind(n, 219801),
            );
            return (n) =>
                (0, a.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        (r?.(),
                            (0, ih._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iu._j.STRANGER_DANGER,
                                cta: s,
                            }));
                    },
                });
        });
    }
    return (
        r.useEffect(() => {
            ((0, ih.mO)(eu.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iu._j.STRANGER_DANGER,
            }),
                ia.A.increment({ name: il.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iA, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iu._j.STRANGER_DANGER,
            header: eL.intl.string(eL.t.iOkDpM),
            description: eL.intl.string(eL.t.ISUbcM),
            onDismiss: o,
            buttons: [
                {
                    text: eL.intl.string(eL.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        ((function e() {
                            (0, ii.openModalLazy)(async () => {
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
                                            (0, a.jsx)(io.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    rv,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, a.jsx)(
                                                    ic.PQ,
                                                    {
                                                        title: eL.intl.string(eL.t["5QYPO2"]),
                                                        description: eL.intl.string(eL.t.G08MKu),
                                                        buttonText: eL.intl.string(eL.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            (o(),
                                                                u(
                                                                    ih.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    ih.Wm.USER_MODAL_BLOCK_CANCEL,
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
                            (0, ih._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iu._j.STRANGER_DANGER,
                                cta: ih.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eL.intl.string(eL.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => u(ih.Wm.USER_BANNER_BLOCK_CONFIRM, ih.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var rT = n(306788),
    rM = n(340833),
    rR = n(913642),
    rD = n(453302),
    rL = n(670455),
    rk = n(912104);
function rP(e) {
    let { summary: t, channel: n } = e,
        l = (0, aS.bG)([lw.A], () => lw.A.summaryFeedback(t));
    function i(e, l) {
        (e.stopPropagation(), (0, rD.A)({ summary: t, channel: n, rating: l }));
    }
    let s = (0, X.p)(
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
                      className: rk.RD,
                      children: (0, a.jsxs)(d.animated.div, {
                          style: e,
                          className: rk.GK,
                          children: [
                              (0, a.jsx)(e_.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: eL.intl.string(eL.t["5ZsiE9"]),
                              }),
                              (0, a.jsx)(eE.D, {
                                  onClick: (e) => i(e, rL.P0.GOOD),
                                  children: (0, a.jsx)(rR.A, { className: rk.O1, width: 12, height: 12 }),
                              }),
                              (0, a.jsx)(eE.D, {
                                  onClick: (e) => i(e, rL.P0.BAD),
                                  children: (0, a.jsx)(rM.A, { className: rk.O1, width: 12, height: 12 }),
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
        s = (0, aS.bG)([lw.A], () => lw.A.selectedSummary(l.id));
    if (null == s) return null;
    let r = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(rT.K, { size: "xs", color: "currentColor", className: rk.cR }), n.content],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(rP, { summary: s, channel: l }),
                      (0, a.jsx)(rT.K, { size: "xs", color: "currentColor", className: rk.Jq }),
                  ],
              })),
        (0, a.jsx)(
            nJ.A,
            {
                className: c()(rk.aK, o ? rk.Ke : rk.hO),
                contentClassName: o ? rk.Ew : rk.rD,
                isUnread: r,
                id: r ? nH.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var rG = n(383233),
    rU = n(309010),
    rw = n(675171),
    rF = n(806621),
    rH = n(636922),
    rB = n(857740);
let rK = r.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = r.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, a.jsx)(eE.D, {
        className: c()(rB.XI, { [rB.Lq]: t }),
        onClick: l,
        "aria-label": eL.intl.string(t ? eL.t.hC8KHg : eL.t.XBlaiC),
        children: (0, a.jsx)(e_.E, {
            variant: "text-sm/normal",
            color: "text-link",
            className: rB.Qq,
            children: t ? eL.intl.string(eL.t.hC8KHg) : eL.intl.string(eL.t.XBlaiC),
        }),
    });
});
var rV = n(85935),
    rz = n(330001),
    rW = n(631576),
    rq = n(750385),
    r$ = n(148355),
    rJ = n(845321);
let rZ = "749054660769218631";
function rY(e) {
    let { channel: t } = e,
        [n, l] = r.useState("");
    r.useEffect(() => {
        (0, rW.zk)("847199849233514549", !0);
    }, []);
    let i = (0, h.bG)(
            [ep.A, eo.default],
            () =>
                !!n9()(ep.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== eo.default.getId() && e.state === eu.cmJ.SENT && !(0, e4.A)(e)),
        ),
        s = (0, h.bG)([lV.default], () => lV.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        o = ik.Ay.useName(s) ?? eL.intl.string(eL.t.y1Wu2f),
        c = (0, h.bG)([rq.A], () => rq.A.getStickerById(rZ)),
        d = r.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    ((0, rz.W)({ channelId: t.id, source: "In-channel greet" }), await _.A.sendGreetMessage(t.id, rZ));
                } catch (e) {
                    e.ok || 429 !== e.status || l(eL.intl.string(eL.t.Whhv4w));
                }
        }, [t.id, n]),
        u = eL.intl.formatToPlainString(eL.t.m0zYbV, { username: o }),
        m =
            null != n && "" !== n
                ? (0, a.jsx)(e_.E, {
                      className: rJ.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, a.jsxs)("div", {
              className: rJ.ft,
              children: [
                  (0, a.jsxs)(eE.D, {
                      className: null != n && "" !== n ? rJ.AO : rJ.Iq,
                      "aria-label": eL.intl.string(eL.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, a.jsx)(r$.A, { sticker: c, size: 24 }),
                          (0, a.jsx)(e_.E, { className: rJ.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  m,
              ],
          })
        : (0, a.jsxs)("div", {
              className: rJ.nj,
              children: [
                  (0, a.jsx)(r$.A, { sticker: c, size: 160, className: rJ.Xr }),
                  (0, a.jsx)(eR.$, {
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
var rX = n(900210),
    rQ = n(626360);
function r0(e) {
    return null != e && e.type === eu.TZK.MESSAGE && e.content.id === e.groupId;
}
function r1(e) {
    return (
        e.type === eu.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === eu.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === eu.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
    );
}
let r2 = r.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, a.jsx)(rH.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new rG.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: eu.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, a.jsx)(iE.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var r3 = n(33176);
let r4 = { bottom: 16 },
    r7 = (0, d.animated)(S);
function r8(e) {
    let t,
        n,
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
            typingGradient: U,
            isGameInvitesPost: w,
        } = e,
        [F, H] = r.useState(lH.A.isAtBottom(m.id) ?? !0),
        B = (0, P.Ay)(m),
        V = (0, lq.I)(f, T),
        z = f ? V : Math.round(0.87 * V),
        W = Math.max(1, Math.round((z / 30) * 8)),
        q = r.useMemo(
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
                    let r = s / eu.hH7.FONT_SIZE_DEFAULT,
                        o = t ? n0.BP : n0.B5,
                        c = t ? n0.Uj : n0._G,
                        d = 0,
                        u = Array(n)
                            .fill(null)
                            .map(() => {
                                let e = n9().random(1, l);
                                return ((d += a * r), (d += o * r), (d += (e - 1) * c * r), e);
                            }),
                        h = u.map((e, t) => t),
                        m = [];
                    for (; m.length < i;) {
                        let e = { width: n9().random(140, 400), height: n9().random(100, 320) };
                        (m.push([h.splice(n9().random(0, h.length - 1), 1)[0], e]), (d += e.height + n0.VF * r));
                    }
                    return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                })({ compact: f, messageGroups: z, groupRange: 4, attachments: W, fontSize: T, groupSpacing: o }),
            [f, z, W, T, o],
        ),
        $ = (0, h.bG)([lG.A], () =>
            th.A.can(eu.xBc.READ_MESSAGE_HISTORY, m) ? null : lG.A.getViewingRolesTimestamp(m.getGuildId()),
        ),
        J = R ?? $,
        Z = g.hasMoreBefore && null == J,
        Y = Z ? q.totalHeight : 0,
        X = g.hasMoreAfter ? q.totalHeight : 0,
        Q = (function (e) {
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
                { windowId: m } = r.useContext(l2.Ay),
                [g] = r.useState(
                    () =>
                        new l9({
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
            focusId: S,
            topPlaceholderHeight: Y,
            bottomPlaceholderHeight: X,
            canLoadMore: null == R,
            handleScrollToBottom: r.useCallback(() => H(!0), [H]),
            handleScrollFromBottom: r.useCallback(() => H(!1), [H]),
            additionalMessagePadding: 48,
        }),
        ee = (0, G.sV)(m.guild_id, "message_stream"),
        ei = (function (e) {
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
                            t.current?.scrollIntoViewNode({ node: i, padding: 4 * nH.mZ, callback: () => i?.focus() });
                    },
                    [n.keyboardModeEnabled, t],
                ),
                a = r.useCallback(() => {
                    n.hasMoreAfter || eA._.dispatchToLastSubscribed(eu.jej.TEXTAREA_FOCUS);
                }, [n.hasMoreAfter]),
                o = (0, lY.Ay)({
                    id: e3.D,
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
            return ((0, lz.Vo)({ event: eu.jej.FOCUS_MESSAGES, handler: c }), o);
        })({ scrollerRef: Q.ref, isEditing: null != S, keyboardModeEnabled: M, hasMoreAfter: g.hasMoreAfter }),
        {
            channelStreamMarkup: es,
            newMessagesBar: ea,
            jumpToPresentBar: er,
            forumPostActionBar: eo,
            pinnedFirstMessage: ec,
            safetyWarningBanner: ed,
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
                    hasTopPlaceholders: x,
                    showingQuarantineBanner: E,
                    hideSummaries: S,
                    jumpBarClassName: I,
                    isGameInvitesPost: y,
                } = e,
                b = lV.default.getCurrentUser();
            function T() {
                return A.isInitialized() || o.ready;
            }
            let M = (0, rF.r)(s),
                R = m.some((e) => e.type === eu.TZK.FORUM_POST_ACTION_BAR),
                D = (0, j.cI)(s),
                L = (0, h.bG)([lw.A], () => lw.A.shouldShowTopicsBar() && !S),
                k = (0, rb.l)(s.id),
                P = (0, ry.j)(s.id, r_.Rx),
                O = (0, it.E)(s.id),
                G = (0, rw.A)(),
                U = (function (e, t) {
                    if (e.isDM() && null != t)
                        if (t.type === iu._j.STRANGER_DANGER)
                            return (0, a.jsx)(rN, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else if (t.type === iu._j.LIKELY_ATO)
                            return (0, a.jsx)(ix, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else return (0, a.jsx)(rj, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                    return null;
                })(s, k ?? P ?? O),
                w = !s.isForumPost() || R || y ? null : (0, a.jsx)(ri, { postId: s.id }),
                { firstMessage: F, loaded: H } = (0, lP.n5)(s, y),
                B =
                    y && H
                        ? (0, a.jsx)(
                              rE,
                              {
                                  compact: u,
                                  channel: s,
                                  message: F,
                                  id: null != F ? (0, e3.j)(s.id, F.id) : `deleted-${s.id}`,
                              },
                              F?.id ?? `deleted-${s.id}`,
                          )
                        : null,
                K = (0, i_.A)(s.id),
                V = (0, aH.W1)(s);
            ((t = eX.Sf.useSetting()),
                (n = (0, aS.bG)([v.Ay], () => v.Ay.useReducedMotion)),
                r.useEffect(() => {
                    function e(e) {
                        let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                        a ||
                            r !== aM.v.BURST ||
                            !t ||
                            n ||
                            (0, t0.on)({ channelId: i, messageId: l, emoji: s, key: rX.W.EXTERNAL });
                    }
                    return (
                        N.h.subscribe("MESSAGE_REACTION_ADD", e),
                        () => {
                            N.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                        }
                    );
                }, [t, n]));
            let z = null,
                W = [],
                q = m.map((e, t) => {
                    if (e.type === eu.TZK.DIVIDER) {
                        let n = null != e.unreadId;
                        return null != C
                            ? null
                            : e.isConversationChannelHeader
                              ? (0, a.jsx)(iI, { channel: s, scrollManager: A }, `conversation-${e.contentKey ?? t}`)
                              : e.isSummaryDivider
                                ? (0, a.jsx)(
                                      rO,
                                      {
                                          index: t,
                                          item: e,
                                          channel: s,
                                          isBeforeGroup: null == e.content && r0(m[t + 1]),
                                      },
                                      `summary-divider-${e.contentKey ?? t}`,
                                  )
                                : (0, a.jsx)(
                                      nJ.A,
                                      {
                                          isUnread: n,
                                          isBeforeGroup: null == e.content && r0(m[t + 1]),
                                          id: n ? nH.q4 : void 0,
                                          itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                          children: e.content,
                                      },
                                      `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                  );
                    }
                    if (e.type === eu.TZK.FORUM_POST_ACTION_BAR)
                        return (0, a.jsx)(
                            ri,
                            {
                                parentChannelId: s.parent_id,
                                postId: s.id,
                                isLastItem: t + 1 === m.length,
                                isFirstMessage: !0,
                            },
                            `forum-post-action-bar-${s.id}`,
                        );
                    if (r1(e)) {
                        let t,
                            n = !0;
                        return (
                            e.type === eu.TZK.MESSAGE_GROUP_BLOCKED
                                ? (t = eL.t["+FcYM/"])
                                : e.type === eu.TZK.MESSAGE_GROUP_IGNORED
                                  ? (t = eL.t["VFWjc+"])
                                  : e.type === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                    ? ((t = eL.t.rHRovo), (n = !1))
                                    : (t = eL.t.xfkfTK),
                            (0, a.jsx)(
                                nQ,
                                {
                                    unreadId: nH.q4,
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
                    if (null != C && C > e.content.timestamp.getTime()) return;
                    e.type === eu.TZK.MESSAGE && null == z && (z = e);
                    let n = e.groupId === z?.groupId ? z.content.id : e.groupId,
                        l = V && e.content.isFirstMessageInForumPost(s),
                        i = e.type === eu.TZK.THREAD_STARTER_MESSAGE ? nB : nV;
                    return (0, a.jsx)(
                        i,
                        {
                            compact: u && !l,
                            channel: s,
                            message: e.content,
                            groupId: n,
                            flashKey: e.flashKey,
                            id: (0, e3.j)(s.id, e.content.id),
                            isLastItem: t >= m.length - 1,
                            renderContentOnly: K || l,
                        },
                        e.content.id,
                    );
                });
            W.push(...q);
            let $ = m[m.length - 1];
            if (
                (null != b &&
                    g.forEach((e, t) => {
                        let n = 0 === t && (0, el.l)(s, $, new rG.Ay({ type: eu.lAJ.DEFAULT, author: b }));
                        W.push(
                            (0, a.jsx)(
                                r2,
                                { file: e, channel: s, user: b, isGroupStart: n, compact: u },
                                `upload-${e.id}`,
                            ),
                        );
                    }),
                x)
            ) {
                o.length > 0 &&
                    (o.length > 1 &&
                        o.length < eu.UNo &&
                        (function (e) {
                            let t = 0,
                                n = 0;
                            for (let l of e)
                                l.type !== eu.TZK.DIVIDER &&
                                    (r1(l)
                                        ? (t += l.content.filter((e) => e.type !== eu.TZK.DIVIDER).length)
                                        : (n += 1));
                            return t > n;
                        })(m) &&
                        W.unshift(
                            (0, a.jsx)(
                                rK,
                                {
                                    loading: o.loadingMore,
                                    onClick: () => p(!1, { pauseUntilUserScroll: !0, truncate: !1 }),
                                },
                                "load-more-before",
                            ),
                        ),
                    W.unshift((0, a.jsx)("div", { style: { height: nH.N0, flex: "0 0 auto" } }, "buffer")));
                let { useReducedMotion: e } = v.Ay;
                ((e && T()) || !e) && W.unshift((0, a.jsx)(lJ, { compact: u, ...f }, "has-more"));
            }
            if (
                (x || y || W.unshift((0, a.jsx)(au, { channel: s, showingBanner: E }, "empty-message")),
                o.hasMoreAfter && W.push((0, a.jsx)(lJ, { compact: u, ...f }, "has-more-after")),
                !E && M && T() && W.push((0, a.jsx)(rY, { channel: s })),
                c > 0 && d && T())
            ) {
                let e,
                    t,
                    n = lB.Ay.getOldestUnreadTimestamp(s.id),
                    i = 0 !== n ? n : en.default.extractTimestamp(s.id),
                    r = (0, et.ro)(new Date(), new Date(i));
                if (
                    (lB.Ay.isEstimated(s.id)
                        ? ((e = r ? eL.t.wvtbbG : eL.t.tHqbtg), (t = eL.t.vaPWFe))
                        : ((e = r ? eL.t["BctFH/"] : eL.t["3wXb9P"]), (t = eL.t["4H8ldG"])),
                    D && (0, j.Kc)(s) && G.includes(rQ.i.SUMMARIES))
                ) {
                    let n = lB.Ay.ackMessageId(s.id),
                        r = (function (e, t) {
                            let n = lw.A.summaries(e) ?? [],
                                l = 0;
                            for (let e of n) en.default.compare(e.endId, t) > 0 && (l += 1);
                            return l;
                        })(s.id, lB.Ay.getOldestUnreadMessageId(s.id));
                    if (
                        ((0, ie.zV)(eu.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                            num_unread_summaries: r,
                            num_unread_messages: c,
                            last_ack_message_id: n,
                            summaries_enabled_by_user: L,
                            summaries_enabled_for_channel: (0, j.pk)(s),
                        }),
                        (0, j.pk)(s))
                    ) {
                        let n = L ? eL.intl.format(t, { count: c }) : eL.intl.format(e, { count: c, timestamp: i });
                        if (L) {
                            let e =
                                r > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(e_.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eL.intl.format(t, { count: c }),
                                              }),
                                              (0, a.jsx)(rS.A, {
                                                  style: { paddingLeft: 8, paddingRight: 8 },
                                                  height: 4,
                                                  width: 4,
                                              }),
                                              (0, a.jsx)(e_.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eL.intl.format(eL.t.CBftDc, { count: r }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(e_.E, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: n,
                                      });
                            l = (0, a.jsx)(rV.OZ, { scrollManager: A, content: e, channel: s });
                        } else {
                            let e = (0, a.jsx)("div", {
                                style: { display: "flex", textTransform: "none", alignItems: "center" },
                                children:
                                    r > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(e_.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eL.intl.format(t, { count: c }),
                                                  }),
                                                  (0, a.jsx)(rS.A, {
                                                      style: { paddingLeft: 8, paddingRight: 8 },
                                                      height: 4,
                                                      width: 4,
                                                  }),
                                                  (0, a.jsx)(e_.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eL.intl.format(eL.t.CBftDc, { count: r }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(e_.E, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: n,
                                          }),
                            });
                            l = (0, a.jsx)(rV.GN, { content: e, channelId: s.id });
                        }
                    }
                } else
                    G.includes(rQ.i.NEW_MESSAGES) &&
                        (l = (0, a.jsx)(rV.GN, {
                            content: eL.intl.format(e, { count: c, timestamp: i }),
                            channelId: s.id,
                        }));
            }
            if (
                (null == l &&
                    (0, j.pk)(s) &&
                    L &&
                    G.includes(rQ.i.SUMMARIES) &&
                    (l = (0, a.jsx)(rV.UK, { channel: s, scrollManager: A })),
                o.error)
            )
                i = (0, a.jsx)(rV.Ez, {
                    loading: o.loadingMore,
                    onClick: () => {
                        var e;
                        return (
                            (e = s.id),
                            void _.A.fetchMessages({
                                channelId: e,
                                limit: (0, lq.h)("renderStream.reload"),
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
                        ? (0, a.jsx)(rV.Ab, { className: I })
                        : null != e
                          ? (0, a.jsx)(rV.Ab, {
                                type: rV.ks.REPLY,
                                onClick: () => {
                                    _.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                },
                                className: I,
                            })
                          : (0, a.jsx)(rV.Ab, {
                                onClick: () => {
                                    let e;
                                    return (
                                        _.A.jumpToPresent(s.id, (0, lq.h)("renderStream.jumpToPresent")),
                                        (e = rU.Ay.getChannelId()),
                                        void (s.id === e && (0, rI.iN)(s.id))
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
            loadMore: Q.loadMore,
            scrollManager: Q,
            specs: q,
            hasTopPlaceholders: Z,
            filterAfterTimestamp: J,
            showingQuarantineBanner: D,
            hideSummaries: L,
            jumpToPresent: function () {
                g.hasPresent()
                    ? Q.ref.current?.scrollToBottom({ animate: !v.Ay.useReducedMotion })
                    : _.A.jumpToPresent(m.id, V);
            },
            jumpBarClassName: k,
            isGameInvitesPost: w,
        });
    ((t = Q.ref),
        (n = r.useCallback(() => t.current?.scrollToBottom(), [t])),
        (l = r.useCallback(() => {
            (Q.handleUserScrollGesture(), t.current?.scrollPageUp({ animate: !v.Ay.useReducedMotion }));
        }, [Q, t])),
        (i = r.useCallback(() => {
            (Q.handleUserScrollGesture(), t.current?.scrollPageDown({ animate: !v.Ay.useReducedMotion }));
        }, [Q, t])),
        (0, lz.Vo)({ event: eu.jej.SCROLLTO_PRESENT, handler: n }),
        (0, lz.Vo)({ event: eu.jej.SCROLL_PAGE_UP, handler: l }),
        (0, lz.Vo)({ event: eu.jej.SCROLL_PAGE_DOWN, handler: i }));
    let eh = (0, I.R7)(),
        { ref: em, ...eg } = (0, u.LT)(ei),
        ep = r.useRef(null),
        ef = r.useMemo(() => ({ ref: ep, padding: r4 }), []),
        eC = (0, b.A)((e) => {
            let t = e?.getScrollerNode() ?? null;
            ((Q.ref.current = e), (em.current = t), (ep.current = t));
        }),
        ex = (0, h.bG)([O.A], () => O.A.gradientPreset),
        eE = eX.eh.useSetting().customUserThemeSettings,
        eS = (0, lF.V)(),
        eI = (0, lO.Q)(),
        ey = null != ex || (null != eE && !eS) || null != eI,
        ej = r.useMemo(() => (U ? (F ? r3.gA : r3.ru) : r3.Zd), [U, F]),
        eb = r.useMemo(() => (U ? (F ? r3.cz : r3.XF) : r3.U6), [U, F]);
    return (0, a.jsxs)(u.hD, {
        navigator: ei,
        children: [
            ec,
            null != ed && ed,
            (0, a.jsxs)("div", {
                className: c()(r3.Og, s, `group-spacing-${o}`),
                children: [
                    null == ed && ea,
                    (0, a.jsxs)(K, {
                        channel: m,
                        scrollManager: Q,
                        children: [
                            (0, a.jsx)(r7, {
                                ref: eC,
                                customTheme: !0,
                                className: c()(d, r3.XG, ey ? eb : void 0),
                                contentClassName: r3.gT,
                                onResize: Q.handleResize,
                                onScroll: Q.handleScroll,
                                onMouseDown: Q.handleMouseDown,
                                onMouseUp: Q.handleMouseUp,
                                onWheel: Q.handleUserScrollGesture,
                                onTouchMove: Q.handleUserScrollGesture,
                                onKeyDown: Q.handleKeyDown,
                                ...eh,
                                tabIndex: -1,
                                role: "group",
                                children: (0, a.jsxs)(y.W.Provider, {
                                    value: ef,
                                    children: [
                                        eo,
                                        (0, a.jsxs)("ol", {
                                            className: r3.bv,
                                            "aria-label": eL.intl.formatToPlainString(eL.t.XarRiL, {
                                                channelName: B ?? "",
                                            }),
                                            ...eg,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: r3.$4,
                                                    id: "messagesNavigationDescription",
                                                    "aria-hidden": !0,
                                                    children: eL.intl.string(eL.t["Spb3s/"]),
                                                }),
                                                es,
                                                (0, a.jsx)("div", {
                                                    className: c()({
                                                        [r3.lB]: !D,
                                                        [r3.Ie]: 0 === g.length && !g.loadingMore,
                                                        [r3.Fb]:
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
                            ey ? null : (0, a.jsx)("div", { className: ej }),
                            er,
                            ee && (0, a.jsx)(lL, { channel: m, scrollManager: Q }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let r5 = r.memo(function (e) {
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
                n = (0, h.bG)([tu.A], () => null == t || tu.A.canChatInGuild(t), [t]),
                { canManageMessages: l, permissionVersion: i } = (0, h.cf)(
                    [th.A],
                    () => ({
                        canManageMessages: th.A.can(eu.xBc.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? th.A.getGuildVersion(t) : null,
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
            let e = eX.hH.useSetting(),
                t = eX.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: l,
                    keyboardModeEnabled: i,
                } = (0, h.cf)([v.Ay], () => {
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
            var t;
            let n,
                l = (0, h.bG)([ep.A], () => ep.A.getMessages(e.id), [e.id]),
                i = (0, h.bG)([lB.Ay], () => lB.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                { enabled: s } = ee.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                a = lV.default.getUser(eo.default.getId())?.hasFlag(eu.nhx.SPAMMER) ?? !1,
                o = (0, j.cI)(e),
                c = (0, lk.A)("use_topic_dividers_in_chat"),
                d = (0, h.yK)([lw.A], () => (o && c ? (lw.A.summaries(e.id) ?? []) : []), [o, e.id, c]),
                u = (0, h.bG)([lw.A], () => (o ? lw.A.selectedSummary(e.id) : null), [o, e.id]),
                m = (0, G.sV)(e.guild_id, "message_stream"),
                g = (0, h.bG)([U.A], () => (m ? U.A.getSelectedConversation(e.id) : null), [m, e.id]),
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
                        i = (0, h.yK)(
                            [M.A],
                            () => {
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
                            },
                            [n],
                        );
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
                        T.A.isSubscribed(e) || N.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                }, [l]);
            })(l, e);
            let A = (0, lP.YG)(e),
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
                                p = null != a ? en.default.extractTimestamp(a) : null,
                                A = null;
                            return (
                                !u &&
                                    i.isForumPost() &&
                                    !s.hasMoreBefore &&
                                    !s.first()?.isFirstMessageInForumPost(i) &&
                                    m.push({ type: eu.TZK.FORUM_POST_ACTION_BAR }),
                                s.forEach((e) => {
                                    var f, C;
                                    let x, E, S;
                                    if (u && e.isFirstMessageInForumPost(i)) return;
                                    if (null != o && o.length > 0) {
                                        let t = en.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o?.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = en.default.extractTimestamp(o[e].startId),
                                                l = en.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (A === o[e].id) break;
                                                (m.push({
                                                    type: eu.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (A = o[e].id));
                                                break;
                                            }
                                        }
                                    }
                                    let I = (0, et.i$)(e.timestamp, "LL");
                                    I !== t &&
                                        null == A &&
                                        (m.push({ type: eu.TZK.DIVIDER, content: I, contentKey: I }), (t = I));
                                    let y = m[m.length - 1],
                                        _ = null,
                                        j = (0, ei.kf)(e);
                                    g = g || j;
                                    let b = eg(i, e, j && r);
                                    (null !== b &&
                                        ([_, y] =
                                            ((E = f = y),
                                            null == f || f.type !== b
                                                ? ((x = { type: b, content: [], key: e.id }), m.push(x))
                                                : (E = (x = f).content[x.content.length - 1]),
                                            [x, E])),
                                    a === e.id && null != p)
                                        ? (null != y && y.type === eu.TZK.DIVIDER
                                              ? (y.unreadId = e.id)
                                              : null !== _
                                                ? ((C = _),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      C.content.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                                  (C.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  m.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                          (p = null))
                                        : null != p &&
                                          en.default.extractTimestamp(e.id) > p &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              m.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                          (p = null));
                                    let v =
                                        null !=
                                        (S = (function (e, t) {
                                            if (eh.get(t.id) === e.id) return em(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, ea.Lt)(e.flags, eu.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === eo.default.getId() ||
                                                null != e.activity ||
                                                (0, ea.Lt)(t.recipientFlags ?? 0, es.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                eh.has(t.id)
                                            )
                                                return null;
                                            let n = em(e, t.id);
                                            eh.set(t.id, e.id);
                                            let l = (0, ea.lA)(
                                                t.recipientFlags ?? 0,
                                                es.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return (er.A.updatePrivateChannelRecipientFlags(t.id, l), n);
                                        })(e, i))
                                            ? { message: S, position: "before" }
                                            : null;
                                    null != v &&
                                        "before" === v.position &&
                                        m.push({ type: eu.TZK.MESSAGE, content: v.message, groupId: v.message.id });
                                    let N = y?.type === eu.TZK.MESSAGE ? l : y;
                                    (0, el.l)(i, N, e) && (n = e.id);
                                    let T = {
                                        type:
                                            e.type === eu.lAJ.THREAD_STARTER_MESSAGE
                                                ? eu.TZK.THREAD_STARTER_MESSAGE
                                                : eu.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = T);
                                    let { jumpSequenceId: M, jumpFlash: R, jumpTargetId: D } = s;
                                    (R && e.id === D && null != M && (T.flashKey = M),
                                        s.jumpTargetId === e.id && (T.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            m.push({
                                                type: eu.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        h &&
                                            null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            m.push({
                                                type: eu.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationChannelHeader: !0,
                                            }),
                                        null !== _
                                            ? (_.content.push(T), T.jumpTarget && (_.hasJumpTarget = !0))
                                            : m.push(T),
                                        e.isFirstMessageInForumPost(i) &&
                                            m.push({ type: eu.TZK.FORUM_POST_ACTION_BAR }),
                                        null != v &&
                                            "after" === v.position &&
                                            m.push({ type: eu.TZK.MESSAGE, content: v.message, groupId: v.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            m.push({
                                                type: eu.TZK.DIVIDER,
                                                contentKey: c.endId,
                                                isSummaryDivider: !0,
                                            }));
                                }),
                                g && (0, ei.iJ)(i) && ee.trackExposure({ location: "416cc9_1" }),
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
                editingMessageId: (0, h.bG)([e1.A], () => e1.A.getEditingMessage(e.id)?.id),
                isGameInvitesPost: A,
            };
        })(t);
    return (0, a.jsx)(lU.Bs.Provider, {
        value: (0, lW.A)(f, d),
        children: (0, a.jsx)(lZ.t, {
            children: (0, a.jsx)(r8, {
                ...c,
                messageGroupSpacing: g,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (i || A),
                messages: x,
                channelStream: E,
                permissionVersion: u,
                uploads: (0, h.bG)([lK.A], () => lK.A.getFiles(t.id), [t]),
                unreadCount: (0, h.bG)([lB.Ay], () => lB.Ay.getUnreadCount(t.id), [t]),
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
