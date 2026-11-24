let l, i;
n.d(t, { A: () => op });
var s,
    a = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(837381),
    u = n(855986),
    h = n(643580),
    m = n(559106),
    g = n(448539),
    p = n(536804),
    A = n(354730),
    f = n(584648),
    C = n(6095);
let E = "u" < typeof window ? h.t : (window.ResizeObserver ?? h.t),
    x =
        ((s = c()(C.qZ, C.Vl)),
        (l = new Map()),
        (i =
            "u" < typeof document
                ? g.F
                : new E((e) => {
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
                    fade: E = !1,
                    customTheme: x = !1,
                    style: I,
                    ref: S,
                    ...y
                } = e,
                b = r.useRef(null),
                _ = r.useRef(null),
                [j, v] = r.useState(!1),
                { scrollerRef: T, getScrollerState: N } = (0, p.A)(),
                M = (0, A.A)(T);
            r.useImperativeHandle(
                S,
                () => ({
                    getScrollerNode: () => T.current,
                    isScrolling: () => null != b.current,
                    getScrollerState: N,
                    ...(0, f.A)(T, N, M),
                }),
                [T, N, M],
            );
            let R = r.useCallback(
                (e) => {
                    (null == b.current ? v(!0) : clearTimeout(b.current),
                        (b.current = setTimeout(() => {
                            ((b.current = null), v(!1));
                        }, 200)),
                        null != u && u(e));
                },
                [u],
            );
            return (
                r.useEffect(() => () => clearTimeout(b.current), []),
                (0, g.A)({ ref: T, key: "container", onUpdate: o, resizeObserver: i, listenerMap: l }),
                (0, g.A)({ ref: _, key: "content", onUpdate: o, resizeObserver: i, listenerMap: l }),
                (0, a.jsx)("div", {
                    ref: T,
                    className: c()(n, { [C.Rv]: E, [C.D8]: x, [s]: !0, [C.fs]: !0, [C.qw]: j && E }),
                    style: I,
                    dir: h,
                    onScroll: R,
                    ...y,
                    children: (0, a.jsx)(m.xp, {
                        containerRef: _,
                        children: (0, a.jsxs)("div", {
                            ref: _,
                            className: c()(d, C.Qs),
                            children: [t, j && (0, a.jsx)("div", { className: C.X3 })],
                        }),
                    }),
                })
            );
        });
var I = n(312138),
    S = n(737992),
    y = n(138399),
    b = n(432371),
    _ = n(765548),
    j = n(775602);
n(321073);
var v = n(73153),
    T = n(911411),
    N = n(290863);
let M = [],
    R = [],
    D = [];
var k = n(717117),
    L = n(429913),
    P = n(47167),
    O = n(47671),
    G = n(856896),
    U = n(727011),
    w = n(120570),
    F = n(319365);
let H = r.createContext(null);
function B(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = r.useRef(null),
        { conversationFocus: s, setConversationFocus: o, dismissFocus: c } = (0, F.D7)(),
        d = r.useCallback(
            async (e, l) => {
                let { messageId: i = null, jump: a } = l;
                if (s?.conversationId === e) {
                    null != i && o({ conversationId: e, messageId: i });
                    return;
                }
                (c("navigation"),
                    await new Promise((e) => {
                        let t = () => {
                            (n.removeScrollCompleteCallback(t), e());
                        };
                        (n.addScrollCompleteCallback(t), a());
                    }),
                    e === w.A.getSelectedConversationId(t.id) &&
                        (o({ conversationId: e, messageId: i }),
                        U.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, n, s, o, c],
        ),
        h = r.useCallback(
            (e, n) => {
                let { cacheType: l } = n;
                d(e, { jump: () => (0, G.xI)(t.id, e, { cacheType: l }) });
            },
            [t.id, d],
        ),
        m = r.useCallback(() => {
            let e = w.A.getConversation(t.id);
            null != e &&
                d(e.id, { jump: () => y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 }) });
        }, [t.id, d]),
        g = (0, u.bG)([w.A], () => w.A.getFocusRequest());
    r.useEffect(() => {
        if (null == g) return;
        let e = w.A.getConversation(t.id);
        null != e &&
            null != w.A.consumeFocusRequest() &&
            d(e.id, {
                messageId: g.messageId,
                jump: () => y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 }),
            });
    }, [g, t.id, d]);
    let p = r.useMemo(
        () => ({ bannerMeasurementRef: i, selectAndFocusConversation: h, refocusSelectedConversation: m }),
        [i, h, m],
    );
    return (0, a.jsx)(H.Provider, { value: p, children: l });
}
function K() {
    let e = r.useContext(H);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
var V = n(828488),
    z = n(156150),
    W = n(646514),
    $ = n(602853),
    q = n(717421),
    Z = n(516521),
    J = n(866323),
    X = n(475743),
    Y = n(448761);
let Q = (0, n(600975).C)({
    kind: "user",
    id: "2021-12_inferno_spam_redaction",
    label: "Inferno Spam Redaction",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Allow guild channel messages from spammers to be collapsed", config: { enabled: !0 } },
    ],
});
var ee = n(5377),
    et = n(661191),
    en = n(652215);
let el = /^Sent a message to .+ but has not yet linked their Discord account\.$/;
var ei = n(857069),
    es = n(694318);
n(938796);
var ea = n(253506),
    er = n(665260),
    eo = n(704844),
    ec = n(46653),
    ed = n(432005),
    eu = n(963852);
let eh = new Map();
function em(e, t) {
    let n = (0, eu.Ay)({
            channelId: t,
            type: en.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: en.pr7.EPHEMERAL,
            state: en.cmJ.SENT,
        }),
        l = (0, ed.rh)(n);
    return ((l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l);
}
function eg(e, t, n) {
    if (Y.M.NON_COLLAPSIBLE.has(t.type));
    else {
        if (t.hasFlag(en.pr7.HIDDEN_SUSPENDED_USER)) return en.TZK.MESSAGE_GROUP_SUSPENDED_USER;
        if (t.blocked) return en.TZK.MESSAGE_GROUP_BLOCKED;
        if (t.ignored) return en.TZK.MESSAGE_GROUP_IGNORED;
        if (
            null != e.linkedLobby &&
            t.type === en.lAJ.DEFAULT &&
            "1384671873593512078" === t.applicationId &&
            (null == t.additionalName || "" === t.additionalName) &&
            t.author.isProvisional &&
            0 === t.attachments.length &&
            0 === t.embeds.length &&
            el.test(t.content)
        )
            return en.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS;
        if ((0, es.iJ)(e) && n) return en.TZK.MESSAGE_GROUP_SPAMMER;
    }
    return null;
}
var ep = n(596344),
    eA = n(188567),
    ef = n(446576),
    eC = n(26430),
    eE = n(866665),
    ex = n(939249),
    eI = n(53788),
    eS = n(265872),
    ey = n(148795),
    eb = n(834730),
    e_ = n(181041),
    ej = n(858899),
    ev = n(165862),
    eT = n(477782),
    eN = n(173936),
    eM = n(365199),
    eR = n(957565),
    eD = n(58241),
    ek = n(423661),
    eL = n(792996);
function eP(e) {
    let { conversation: t, feedbackRating: n, onThumbsUp: l, onThumbsDown: i, className: s } = e,
        o = r.useRef(null),
        c = r.useCallback(() => {
            (0, eR.C)((0, eD.zZ)(t), () => (0, ej.P0)({ text: eL.intl.string(eL.t["L/PwZf"]), variant: "success" }));
        }, [t]);
    return (0, a.jsx)(eS.Y, {
        targetElementRef: o,
        position: "bottom",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ev.W, {
                "data-menu-migrated": !0,
                navId: "conversation-more-menu",
                onClose: t,
                onSelect: void 0,
                "aria-label": eL.intl.string(eL.t.DEoVWZ),
                children: (0, a.jsxs)(eT.rX, {
                    children: [
                        (0, a.jsx)(eT.Dr, {
                            id: "thumbs-up",
                            label: eL.intl.string(ek.default.sBwxOY),
                            icon: eI.ThumbsUpIcon,
                            leadingAccessory: {
                                type: "icon",
                                icon: eI.ThumbsUpIcon,
                                color: "up" === n ? W.A.colors.ICON_FEEDBACK_POSITIVE : "currentColor",
                            },
                            action: l,
                        }),
                        (0, a.jsx)(eT.Dr, {
                            id: "thumbs-down",
                            label: eL.intl.string(ek.default.tbhdqW),
                            icon: ey.ThumbsDownIcon,
                            leadingAccessory: {
                                type: "icon",
                                icon: ey.ThumbsDownIcon,
                                color: "down" === n ? W.A.colors.ICON_FEEDBACK_CRITICAL : "currentColor",
                            },
                            action: i,
                        }),
                        eR.p5 &&
                            (0, a.jsx)(eT.Dr, {
                                id: "copy-link",
                                label: eL.intl.string(eL.t.WqhZss),
                                icon: eN.LinkIcon,
                                leadingAccessory: { type: "icon", icon: eN.LinkIcon },
                                action: c,
                            }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(eE.m, {
                text: eL.intl.string(eL.t["6Ic4Ev"]),
                children: (0, a.jsx)(ex.D, {
                    ...e,
                    innerRef: o,
                    "aria-label": eL.intl.string(eL.t["6Ic4Ev"]),
                    className: s,
                    children: (0, a.jsx)(eM.MoreHorizontalIcon, { color: "currentColor", size: "refresh_sm" }),
                }),
            }),
    });
}
var eO = n(534514),
    eG = n(103557),
    eU = n(789645),
    ew = n(821609),
    eF = n(128904);
let eH = [
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
function eB(e) {
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
                (0, ej.P0)({ text: eL.intl.string(ek.default.xrEgG0), variant: "success" }),
                i());
        }, [t.id, n.id, l, s, d, m, i]);
    return (0, a.jsxs)("div", {
        className: eF.oO,
        children: [
            (0, a.jsxs)("div", {
                className: eF.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: eF.TK,
                        children: [
                            (0, a.jsx)(eO.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eL.intl.string(ek.default.C3suOL),
                            }),
                            (0, a.jsx)(eb.E, {
                                variant: "body-md/medium",
                                color: "text-subtle",
                                className: eF.VA,
                                children: eL.intl.string(ek.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ex.D, {
                        className: eF.b,
                        "aria-label": eL.intl.string(ek.default.HLYa5G),
                        onClick: i,
                        children: (0, a.jsx)(eU.XSmallIcon, { size: "xs", color: W.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: eF.Ip,
                role: "group",
                "aria-label": eL.intl.string(ek.default["Lp/NZo"]),
                children: eH.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, a.jsx)(
                        ex.D,
                        {
                            className: c()(eF.jw, s.has(t) && eF.gM),
                            onClick: () => g(t),
                            children: (0, a.jsx)(eb.E, {
                                variant: "body-md/normal",
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
                    className: eF.Su,
                    children: [
                        (0, a.jsx)(eG.f, {
                            value: d,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eL.intl.string(ek.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, a.jsxs)("div", {
                            className: eF.rP,
                            children: [
                                (0, a.jsx)(eb.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: eL.intl.string(ek.default.xZzxfK),
                                }),
                                (0, a.jsxs)(eb.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: [d.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsx)(ew.$, {
                text: eL.intl.string(ek.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eK = n(808379);
function eV(e) {
    return c()(eK.FW, { [eK.Jl]: "positive" === e, [eK.vF]: "critical" === e });
}
function ez(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [o, d] = r.useState(!1),
        h = r.useRef(null),
        m = (0, u.bG)([e_.A], () => e_.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { conversationFocus: g } = (0, F.D7)(),
        p = null != g,
        A = r.useCallback(() => d(!1), []),
        f = r.useCallback(() => {
            ((0, G.oq)(t.id, n.id, "up"),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: p }));
        }, [t.id, n.id, p]),
        C = r.useCallback(() => {
            ((0, G.oq)(t.id, n.id, "down"),
                d(!0),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: p }));
        }, [t.id, n.id, p]),
        E = r.useCallback(
            () => (0, a.jsx)(eB, { channel: t, conversation: n, isFocusMode: p, onClose: A }),
            [t, n, p, A],
        ),
        x = p ? ef.MinimizeIcon : eC.MaximizeIcon,
        I = p ? eL.intl.string(ek.default.pDD8E1) : eL.intl.string(ek.default["o+pmGy"]),
        S = p ? eL.intl.string(ek.default.XaJ3qC) : eL.intl.string(ek.default.pU5Dut),
        y = (0, a.jsxs)(a.Fragment, {
            children: [
                !p &&
                    (0, a.jsx)(eE.m, {
                        text: eL.intl.string(ek.default.sBwxOY),
                        children: (0, a.jsx)(ex.D, {
                            "aria-label": eL.intl.string(ek.default.vjJjMc),
                            onClick: f,
                            className: eV("up" === m ? "positive" : void 0),
                            children: (0, a.jsx)(eI.ThumbsUpIcon, { color: "currentColor", size: "refresh_sm" }),
                        }),
                    }),
                (0, a.jsx)(eS.Y, {
                    targetElementRef: h,
                    shouldShow: o,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: eS.Y.Animation.FADE,
                    onRequestClose: A,
                    renderPopout: E,
                    children: () =>
                        (0, a.jsx)("div", {
                            ref: h,
                            children: p
                                ? (0, a.jsx)(eP, {
                                      conversation: n,
                                      feedbackRating: m,
                                      onThumbsUp: f,
                                      onThumbsDown: C,
                                      className: eV(),
                                  })
                                : (0, a.jsx)(eE.m, {
                                      text: eL.intl.string(ek.default.tbhdqW),
                                      children: (0, a.jsx)(ex.D, {
                                          "aria-label": eL.intl.string(ek.default.TGK5M0),
                                          onClick: C,
                                          className: eV("down" === m ? "critical" : void 0),
                                          children: (0, a.jsx)(ey.ThumbsDownIcon, {
                                              color: "currentColor",
                                              size: "refresh_sm",
                                          }),
                                      }),
                                  }),
                        }),
                }),
                (0, a.jsx)(eE.m, {
                    text: I,
                    children: (0, a.jsx)(ex.D, {
                        "aria-label": S,
                        onClick: s,
                        className: eV(),
                        children: (0, a.jsx)(x, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, a.jsxs)("div", {
        className: c()(eK.zr, { [eK.e8]: i }),
        children: [
            (0, a.jsx)(eb.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                className: eK.DD,
                children: n.title,
            }),
            (0, a.jsx)("div", { className: c()(eK.o1, { [eK.jF]: l }), children: y }),
        ],
    });
}
var eW = n(599735);
function e$(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = r.useCallback(() => {
            l("return");
        }, [l]);
    return (0, a.jsx)("div", {
        className: eW.A,
        children: (0, a.jsx)(ez, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eq = n(284009),
    eZ = n.n(eq),
    eJ = n(256331),
    eX = n(93474),
    eY = n(384231),
    eQ = n(853145),
    e0 = n(9842),
    e1 = n(69282),
    e2 = n(976860),
    e3 = n(253932),
    e4 = n(734057),
    e7 = n(580745),
    e5 = n(521427),
    e8 = n(375901),
    e6 = n(143413),
    e9 = n(763754),
    te = n(75668);
function tt(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = r.useState(!1),
        [o, d] = r.useState(null),
        u = r.useRef(null),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            (s(!0),
                (u.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)));
            let e =
                null == h.current || j.Ay.useReducedMotion
                    ? null
                    : (function (e, t) {
                          let n = e.ownerDocument.defaultView ?? window,
                              l = !1,
                              i = -1,
                              s = null,
                              a = null,
                              r = 0,
                              o = null == n.IntersectionObserver,
                              c =
                                  null != n.IntersectionObserver
                                      ? new n.IntersectionObserver((e) => {
                                            o = e[e.length - 1]?.isIntersecting ?? o;
                                        })
                                      : null;
                          function d() {
                              ((l = !0), n.cancelAnimationFrame(i), c?.disconnect());
                          }
                          return (
                              c?.observe(e),
                              (i = n.requestAnimationFrame(function c(u) {
                                  if (l) return;
                                  if (((s ??= u), u - s >= 1e3)) return void d();
                                  let { top: h, left: m } = e.getBoundingClientRect(),
                                      g = null == a || h !== a.top || m !== a.left;
                                  if (((r = o && !g ? r + 1 : 0), (a = { top: h, left: m }), r >= 3)) {
                                      (d(), t());
                                      return;
                                  }
                                  i = n.requestAnimationFrame(c);
                              })),
                              d
                          );
                      })(h.current, () => d(l));
            return () => {
                (null != u.current && clearTimeout(u.current), e?.());
            };
        }, [l]),
        (0, a.jsxs)("div", {
            ref: h,
            "data-flash": i,
            className: c()(te.jl, n),
            children: [t, (0, a.jsx)("span", { "data-pulse": o === l, className: te.Vv, "aria-hidden": "true" }, l)],
        })
    );
}
var tn = n(491182),
    tl = n(860227),
    ti = n(537174),
    ts = n(21299),
    ta = n(516287),
    tr = n(843626),
    to = n(294454),
    tc = n(857071),
    td = n(517997),
    tu = n(406704),
    th = n(747926),
    tm = n(54570),
    tg = n(8880),
    tp = n(834942),
    tA = n(576705),
    tf = n(723702),
    tC = n(697470),
    tE = n(492841),
    tx = n(707985),
    tI = n(519222);
let tS = function (e, t, n) {
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
                    d = e4.A.getChannel(t);
                if (null == c || null == d) return;
                let u = ec.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (tA.A.can(en.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tI.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tf.cX)() ? r : a) && eR.p5 && (n.preventDefault(), (0, eR.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tC.A)(c, u) && (n.preventDefault(), (0, tI.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tE.A)(c, d) && (n.preventDefault(), (0, tI.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || tp.A.canChatInGuild(e.guild_id),
                                    n = e3.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tx.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && tA.A.can(en.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && tc.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, tu.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eA._.dispatchKeyed(en.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, td.r)(d, c) && (n.preventDefault(), (0, tI.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, tr.p)(c) &&
                            (n.preventDefault(), (0, to.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            tg.A.isSpeakingMessage(t, e) ? (0, tm.pr)() : (0, tm.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, tu.D1)(d, c)) (n.preventDefault(), (0, th.Tv)(d, c, "Message Shortcut"));
                        else if (c.hasFlag(en.pr7.HAS_THREAD)) {
                            let e = e4.A.getChannel(et.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, th.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tI.cl)(d, c));
                        break;
                    case "escape":
                        e7.A.isEditing(d.id, c.id) ? y.A.endEditMessage(d.id) : eA._.dispatch(en.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var ty = n(754459),
    tb = n(538355),
    t_ = n(824556),
    tj = n(699352),
    tv = n(469759),
    tT = n(649852),
    tN = n.n(tT),
    tM = n(311283),
    tR = n(473935),
    tD = n(290136),
    tk = n(666492),
    tL = n(606096),
    tP = n(997146),
    tO = n(366605),
    tG = n(163328),
    tU = n(110384),
    tw = n(22231),
    tF = n(563119),
    tH = n(581925),
    tB = n(778492),
    tK = n(241326),
    tV = n(417270),
    tz = n(565645),
    tW = n(812930),
    t$ = n(822123),
    tq = n(7584),
    tZ = n(635222),
    tJ = n(969043),
    tX = n(427209),
    tY = n(964363),
    tQ = n(973196),
    t0 = n(649963),
    t1 = n(815807),
    t2 = n(429433),
    t3 = n(738125),
    t4 = n(85109),
    t7 = n(71393),
    t5 = n(129230),
    t8 = n(690521),
    t6 = n(403362),
    t9 = n(628691),
    ne = n(194085),
    nt = n(81612),
    nn = n(607399),
    nl = n(460905);
function ni(e) {
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
        position: nn.Fr ? "top" : "left",
        align: nn.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, a.jsx)(
                ne.qv,
                { ref: o, label: eL.intl.string(eL.t.lfIHs4), icon: nl.ReactionIcon, onClick: l },
                "add-reaction",
            ),
    });
}
var ns = n(333881),
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
                !t8.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: na.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, tZ.A)(l.concat(no)).values()]).slice(0, 3),
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
                            (0, a.jsx)(eb.E, {
                                variant: "body-sm/medium",
                                color: "text-strong",
                                className: nr.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, a.jsx)(eb.E, {
                                variant: "body-xs/normal",
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
            isGuildOfficial: E,
            isExpanded: x,
            showMoreUtilities: I,
            showEmojiPicker: S,
            isMessageBookmark: b,
            isMessageReminder: _,
            setPopout: v,
            hasDeveloperMode: T,
            isFocused: N,
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
                h = (0, u.bG)([ec.default], () => ec.default.getId()),
                m = (0, tu.Id)(t),
                g = (0, tu.s5)(t),
                { firstMessage: p } = (0, u.bG)([tJ.A], () => tJ.A.getMessage(t.id), [t.id]),
                A = e3.jW.useSetting(),
                f = e3.Q_.useSetting(),
                C = (0, u.bG)([tp.A], () => null == t.guild_id || tp.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: E,
                    canAddNewReactions: x,
                    canSendMessages: I,
                } = (0, u.cf)(
                    [tA.A],
                    () => ({
                        canAddNewReactions: C && tA.A.can(en.xBc.ADD_REACTIONS, t),
                        canManageMessages: tA.A.can(en.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: tA.A.can(en.xBc.SEND_MESSAGES, t),
                    }),
                    [t, C],
                ),
                S = (0, tQ.A)(),
                y = (0, td.u)(t, n) && !S,
                b = (0, tu.n)(t, n),
                _ = (0, tu.R)(n),
                v = (0, u.bG)([tc.A], () => null != t.guild_id && tc.A.isLurking(t.guild_id), [t]),
                T = c.id === h,
                N = (E || n.canDeleteOwnMessage(h)) && m && !en.MRS.UNDELETABLE.has(n.type);
            (n.type === en.lAJ.AUTO_MODERATION_ACTION && (N = N && E),
                t.isModeratorReportChannel() && (N = N && n.id !== p?.id && !(0, e6.A)(n)));
            let M = (0, t9.ul)(n),
                R = (0, tE.A)(n, t),
                D = !t.isSystemDM() && (0, tC.A)(n, h) && m && !g,
                { disableReactionCreates: k } = (0, tx.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: x,
                    isLurking: v,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                L =
                    t.type === en.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(en.GuildFeatures.NEWS) &&
                    I &&
                    (T || E) &&
                    (0, tW.A)(n),
                P = t.getGuildId(),
                O =
                    null != P &&
                    n.type === en.lAJ.USER_JOIN &&
                    tA.A.canWithPartialContext(en.xBc.MANAGE_GUILD, { guildId: P }),
                G = (0, tr.m)(n),
                U = (0, e5.kn)(n, t, "MessageHoverBar"),
                w = n.hasFlag(en.pr7.IS_GUILD_OFFICIAL),
                { isMessageBookmark: F, isMessageReminder: H } = (0, u.cf)([t4.A], () => ({
                    isMessageBookmark: t4.A.isMessageBookmarked(t.id, n.id),
                    isMessageReminder: t4.A.isMessageReminder(t.id, n.id),
                })),
                B = (0, tM.A)(a),
                K = (0, u.bG)([j.Ay], () => j.Ay.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: D,
                canDelete: N,
                canReport: M,
                canReply: y,
                canStartThread: b,
                canViewThread: _,
                canForward: G,
                canManageOfficialMessages: U,
                isGuildOfficial: w,
                canCopy: eR.p5,
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
            (I ||
                t5.default.track(en.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                v({ moreUtilities: !I }));
        }, [I, v, n]),
        D = r.useCallback(() => {
            v({ emojiPicker: !S });
        }, [S, v]),
        k = (0, tu.Id)(t),
        L = n.hasFlag(en.pr7.CROSSPOSTED);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            x
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l && T
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.zBoHlf),
                                        icon: tR.IdIcon,
                                        onClick: (e) => (0, tI.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.WqhZss),
                                        icon: eN.LinkIcon,
                                        onClick: () => (0, tI.S)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.NpHUi1),
                                        icon: tD.CircleQuestionIcon,
                                        onClick: () => (0, tI.vc)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          k
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.RpE9k7),
                                        icon: tk.ChatMarkUnreadIcon,
                                        onClick: () => (0, tI.cl)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          _
                              ? null
                              : (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: b ? eL.intl.string(eL.t.LHUP9D) : eL.intl.string(eL.t["9p3D9p"]),
                                        icon: b ? tL.BookmarkIcon : tP.BookmarkOutlineIcon,
                                        onClick: () => {
                                            var e;
                                            return b
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
                                        icon: tO.PinIcon,
                                        onClick: (e) => (0, tI.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t.rBIGBL),
                                        icon: tG.ThreadIcon,
                                        onClick: () => (0, tI.Nw)(t, n),
                                    },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, a.jsx)(
                                    ne.qv,
                                    {
                                        label: eL.intl.string(eL.t["5IEsGx"]),
                                        icon: tU.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, tI.$b)(t, n, e),
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
                          x
                              ? null
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(nu, { channel: t, message: n }), (0, a.jsx)(ne.$$, {})],
                                }),
                          (0, a.jsx)(ni, {
                              togglePopout: D,
                              renderEmojiPicker: np,
                              shouldShow: S,
                              isFocused: N,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            g && !c
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: eL.intl.string(eL.t["5IEsGx"]),
                          icon: tU.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, tI.$b)(t, n, e),
                      },
                      "reply-other",
                  )
                : null,
            c
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t.bt75uw), icon: tw.PencilIcon, onClick: () => (0, tI.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t.I3ltXO), icon: tX.A, onClick: () => (0, tI.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t.rBIGBL), icon: tG.ThreadIcon, onClick: () => (0, tI.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, a.jsx)(
                      ne.qv,
                      { label: eL.intl.string(eL.t["39d0Wj"]), icon: tG.ThreadIcon, onClick: () => (0, tI.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: E ? eL.intl.string(eL.t["2km5Gf"]) : eL.intl.string(eL.t["lE/PG3"]),
                          icon: E ? tF.StampXIcon : tH.StampIcon,
                          onClick: () => y.A.patchMessageGuildOfficial(t.id, n.id, !E),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: L ? eL.intl.string(eL.t["1kWJAr"]) : eL.intl.string(eL.t.MFGE51),
                          icon: tB.AnnouncementsIcon,
                          onClick: () => (0, tI.Le)(t, n),
                          disabled: L,
                      },
                      "publish",
                  )
                : null,
            s && x
                ? (0, a.jsx)(
                      ne.qv,
                      {
                          label: eL.intl.string(eL.t.oyYWHE),
                          icon: tK.TrashIcon,
                          onClick: (e) => (0, tI.RC)(t, n, e),
                          dangerous: !0,
                          separator: !x,
                      },
                      "delete",
                  )
                : null,
            x && s
                ? null
                : (0, a.jsx)(eS.Y, {
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
                      shouldShow: I,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: eS.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, a.jsx)(
                              ne.qv,
                              {
                                  ref: M,
                                  label: eL.intl.string(eL.t["UKOtz+"]),
                                  icon: eM.MoreHorizontalIcon,
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
        l = (0, u.bG)([eX.A], () => null != eX.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, tY.Bl)(n.interactionData));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !l &&
                i &&
                (0, a.jsx)(
                    ne.qv,
                    { label: eL.intl.string(eL.t["5911Lb"]), icon: tV.RetryIcon, onClick: () => (0, tI.Io)(t, n) },
                    "retry",
                ),
            (0, a.jsx)(
                ne.qv,
                { label: eL.intl.string(eL.t.oyYWHE), icon: tK.TrashIcon, onClick: (e) => (0, tI.RC)(t, n, e) },
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
                page: null != e.getGuildId() ? en.liQ.GUILD_CHANNEL : en.liQ.DM_CHANNEL,
                section: (0, t1.sn)(e),
                object: en.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, a.jsx)(t2.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            (ng({ type: "add", emoji: i, channel: e, message: t, location: t0.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tN()(n, 150)() : n()));
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nA = r.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, u.bG)([e7.A], () => e7.A.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === en.cmJ.SEND_FAILED ? (0, a.jsx)(nm, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== en.cmJ.SEND_FAILED ? (0, a.jsx)(nh, { ...e }) : null;
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
    nC = n(549587),
    nE = n(776579),
    nx = n(54391);
let nI = r.memo(function (e) {
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
            g = (0, ts.r4)(t.author.id, n.id),
            p = (0, ts.m)(t, n, o, d),
            A = (0, ts.Jo)(c, d),
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
            showTimestampOnHover: !s && l && t.type !== en.lAJ.REPLY,
            renderPopout: nx.A,
            showAvatarPopout: c,
            showUsernamePopout: o,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    nS = r.memo(nE.A);
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
    if ((0, e6.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, a.jsx)(nI, {
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
        : (0, a.jsx)(nS, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, tl.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nb = n(91624),
    n_ = n(127258),
    nj = n(168186),
    nv = n(994500),
    nT = n(267508),
    nN = n(826059),
    nM = n(387408),
    nR = n(942075),
    nD = n(747407),
    nk = n(808829),
    nL = n(552691),
    nP = n(779014),
    nO = n(448368),
    nG = n(448767),
    nU = n(354777);
function nw(e) {
    let { message: t, options: n } = e;
    return (0, tb.A)(t, n).content;
}
let nF = r.memo(function (e) {
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
        m = n.state === e0.a.LOADED ? n.message : void 0,
        g = (0, e9.X4)(m),
        p = (0, e9.d8)(m?.actor, l).nick,
        A = (0, eY.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        f = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, nM.A)(m);
            if (e.type === en.lAJ.USER_JOIN)
                return e.author.bot
                    ? nP.A.getSystemMessageAppAdded(null != g ? g.nick : e.author.username, null != e.actor ? p : null)
                    : (0, nN.$)(
                          eL.intl.formatToParts(nP.A.getSystemMessageUserJoin(e.id), {
                              username: null != g ? g.nick : e.author.username,
                              usernameHook: (e) => e,
                          }),
                      );
            if (e.type === en.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nN.$)(
                    (0, nR.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === en.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nN.$)((0, nk.P)({ application: e?.application, username: g?.nick }));
            if (e.type === en.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nN.$)((0, nL.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === en.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nN.$)((0, nL.uk)({ application: e?.application, username: g?.nick }));
            else if (e.type === en.lAJ.GUILD_SPACE_MESSAGE) return (0, nD.X)(e, l);
            if (
                null != e.content &&
                "" !== e.content &&
                !(function (e) {
                    if (!(0, nG.k5)(e.embeds)) return !1;
                    let { content: t } = (0, nU.b6)(e, { formatInline: !0, allowLinks: !0 });
                    return Array.isArray(t) && 0 === t.length;
                })(e)
            ) {
                let t = e.isFirstMessageInForumPost(l)
                    ? { formatInline: !0, noStyleAndInteraction: !0, allowLinks: !0, allowHeading: !0, allowList: !0 }
                    : { formatInline: !0, allowLinks: !0, allowHeading: A, allowList: A };
                return (0, a.jsx)(nw, { message: e, options: t });
            }
            return null;
        }, [m, g, p, l, A]),
        { isReplyAuthorBlocked: C, isReplyAuthorIgnored: E } = (0, u.cf)(
            [nv.A],
            () => ({
                isReplyAuthorBlocked: null != m && nv.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && nv.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        x = (0, ts.r4)(m?.author.id, l.id),
        I = (0, ts.Ck)(t, n, l),
        S = (0, ts.H9)(m, l, s, c),
        y = (0, ts.Ge)(o, c),
        b = r.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        _ = (0, e9.X4)(t);
    return (0, a.jsx)(nO.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: _,
        referencedMessage: n,
        content: f,
        compact: i,
        isReplyAuthorBlocked: C,
        isReplyAuthorIgnored: E,
        showAvatarPopout: o,
        showUsernamePopout: s,
        renderPopout: nx.A,
        onClickAvatar: y,
        onClickUsername: S,
        onClickReply: I,
        onContextMenu: x,
        onPopoutRequestClose: b,
        isReplySpineClickable: d,
        showReplySpine: h,
    });
});
function nH(e) {
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
        (0, a.jsx)(nF, {
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
let nB = r.memo(function (e) {
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
            [nv.A],
            () => ({
                isInteractionUserBlocked: nv.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nv.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, u.bG)([e0.A], () => e0.A.getMessageByReference(t?.messageReference)),
        A = (0, ts.r4)(t.interaction?.user.id, n.id),
        f = (0, ts.T0)(t.interaction, n, i, h),
        C = (0, ts.Yq)(s, h),
        E = (0, nj.Am)(t),
        x = E?.type === n_.G.APPLICATION_COMMAND ? E.target_user?.id : void 0,
        I = (0, ts.r4)(x, n.id),
        S = (0, ts.I)(x, n, c, h),
        y = (0, ts.Ge)(d, h),
        b = (0, ts.U_)(o, h),
        _ = r.useCallback(() => {
            h({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [h]),
        j = r.useCallback(
            () =>
                nH({
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
    return (0, a.jsx)(nT.A, {
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
        onClickCommand: b,
        onUserContextMenu: A,
        onClickTargetAvatar: y,
        onClickTargetUsername: S,
        onTargetUserContextMenu: I,
        onPopoutRequestClose: _,
        renderTargetMessage: j,
    });
});
var nK = n(117096),
    nV = n(381941);
function nz(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eZ()(n.type === en.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...r } = (0, d.rm)(e.id ?? ""),
        o = (0, u.bG)([e0.A], () => e0.A.getMessageByReference(l)),
        { popouts: h, setPopout: m } = (0, ty.A)(n.id, nV.Fd),
        g = (0, e9.Ay)(n),
        p = (0, tl.fF)(n),
        A = (0, tl.ZD)(n);
    if (null != o)
        switch (o.state) {
            case e0.a.LOADED:
                return (0, a.jsx)(nW, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case e0.a.NOT_LOADED:
            case e0.a.DELETED:
        }
    return (0, a.jsx)(tn.A, {
        ...r,
        id: t,
        compact: i,
        className: c()(s, { [nf.iU]: !0, [nf.HJ]: !i, [nf.H4]: !0, [nf._A]: !0 }),
        childrenHeader: ny({ messageProps: e, setPopout: m, messagePopouts: h, replyReference: l, author: g }),
        childrenSystemMessage: (0, nK.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function nW(e) {
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
        p = n.type === en.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, d.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: E, handleBlur: x } = (0, ts.G8)(A),
        { popouts: I, selected: S, setPopout: y } = (0, ty.A)(n.id, nV.Fd),
        b = e3.hD.useSetting(),
        _ = e3.rs.useSetting(),
        v = (0, u.bG)([e0.A], () => e0.A.getMessageByReference(p)),
        T = (0, eY.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: N,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, ts.yp)({ groupId: m, message: n, defaultValue: S }),
        D = (0, u.bG)([j.Ay], () => j.Ay.keyboardModeEnabled),
        k = S || (D && C),
        L = k || R,
        {
            content: P,
            hasSpoilerEmbeds: O,
            hasBailedAst: G,
        } = (0, tb.A)(n, {
            hideSimpleEmbedContent: b && _,
            allowList: T,
            allowHeading: T,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        U = tS(l, i, D),
        w = (0, e9.Ay)(n),
        F = (0, tl.fF)(n, m),
        H = (0, tl.ZD)(n),
        B = (0, a.jsx)(ta.x, { value: L, children: (0, nb.Ay)(e, P, !1) }),
        K = r.useCallback(() => (0, e2.uh)(s, i, l), [s, i, l]),
        V = (0, e1.Xx)({ guildId: s, roleId: w.iconRoleId });
    return (0, a.jsxs)("div", {
        className: nf.m5,
        children: [
            (0, a.jsx)(ex.D, {
                className: nf.lA,
                onClick: K,
                "aria-label": eL.intl.string(eL.t.k5WiPf),
                children: eL.intl.string(eL.t.k5WiPf),
            }),
            (0, a.jsx)(tn.A, {
                ...f,
                id: t,
                compact: o,
                className: c()(h, {
                    [nf.iU]: !0,
                    [nf.HJ]: !o,
                    [nf.mK]: n.mentioned,
                    [nf.M1]: (0, ed.ec)(n),
                    [nf.H4]: (0, e6.A)(n),
                    [nf._A]: n.id === m || n.type === en.lAJ.REPLY,
                    [nf.wH]: k,
                }),
                zalgo: !0,
                onKeyDown: U,
                onFocus: E,
                onBlur: x,
                childrenRepliedMessage:
                    n.type === en.lAJ.REPLY &&
                    nH({
                        ...e,
                        setPopout: y,
                        referencedUsernameProfile: I.referencedUsernameProfile,
                        referencedAvatarProfile: I.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: v,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: ny({
                    messageProps: e,
                    setPopout: y,
                    messagePopouts: I,
                    replyReference: p,
                    author: w,
                    repliedMessage: v,
                    roleIcon: V,
                }),
                childrenAccessories: (0, tj.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: O,
                    hasBailedAst: G,
                    isInteracting: L,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                    allowFullScreen: !0,
                }),
                childrenSystemMessage: (0, nK.A)(e),
                childrenMessageContent: B,
                onMouseMove: N,
                onMouseLeave: M,
                "aria-labelledby": F,
                "aria-describedby": H,
                hasThread: !1,
                author: w,
            }),
        ],
    });
}
let n$ = r.memo(function (e) {
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
            hideInviteEmbedBanner: E,
            hideActivityInvite: x,
        } = e;
    eZ()(i.type !== en.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let I = en.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: S, ...y } = (0, d.rm)(e.id ?? ""),
        b = e3.hD.useSetting(),
        _ = e3.rs.useSetting(),
        v = (0, u.bG)([e0.A], () => e0.A.getMessageByReference(I)),
        { popouts: T, selected: N, setPopout: M } = (0, ty.A)(i.id, nV.Fd),
        R = (0, ts.VL)(i, o, M),
        D = (0, ts.ri)(i, o),
        {
            handleMouseEnter: k,
            handleMouseLeave: L,
            hasHovered: P,
            isHovered: O,
        } = (0, ts.yp)({ groupId: f, message: i, defaultValue: N }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, ts.G8)(S),
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
        K = (0, u.bG)([e7.A], () => e7.A.isEditing(h, s), [h, s]),
        z = (0, u.bG)([j.Ay], () => j.Ay.keyboardModeEnabled),
        W = N || K || (z && G),
        $ = W || O,
        q = (0, u.bG)(
            [e4.A],
            () => i.hasFlag(en.pr7.HAS_THREAD) && e4.A.getChannel(et.default.castMessageIdAsChannelId(i.id)),
        ),
        Z = i.isFirstMessageInForumPost(o),
        J = (0, eY.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        {
            content: X,
            hasSpoilerEmbeds: Y,
            hasBailedAst: Q,
        } = (0, tb.A)(i, {
            hideSimpleEmbedContent: b && _,
            allowList: Z || J,
            allowHeading: Z || J,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        ee = tS(s, h, z),
        el = (0, e9.Ay)(i),
        ei = (0, u.bG)([eQ.A], () => eQ.A.getPendingReply(h)),
        es =
            ((t = r.useRef(A)),
            r.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        ea = (0, e1.Xx)({ guildId: o.guild_id, roleId: el.iconRoleId }),
        eo = (function (e, t) {
            let { enabled: n } = V.LX.useConfig({ location: "useMessageConversation" });
            return (0, u.bG)(
                [e_.A, eJ.A],
                () => {
                    if (!n || !eJ.A.isHighlightingEnabled()) return null;
                    let l = e_.A.getConversationForMessage(e, t);
                    return null == l ? null : e_.A.getConversationColor(e, l);
                },
                [e, t, n],
            );
        })(h, s),
        ec = (0, tl.fF)(i, f),
        eu = (0, tl.ZD)(i),
        eh = (0, u.bG)([eX.A], () => eX.A.getMessage(s), [s]),
        em = (0, e5.bW)(o.guild_id, "ChatMessage"),
        eg = (0, ti.o)(),
        ep = (0, t_.A)({ message: i, channel: o, officialMessagesEnabled: em }),
        eA = r.useRef(window),
        ef = null != eh;
    ((n = i.type === en.lAJ.CUSTOM_GIFT ? "" : !K && ef ? (0, tv.A)(e, X) : (0, nb.Ay)(e, X, K)),
        (n = (0, a.jsx)(ta.x, { value: $, children: n })));
    let eC = i.id === f,
        eE = (0, a.jsx)(m.vN, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
                id: l,
                className: nf.Nt,
                "aria-setsize": -1,
                style: null != eo ? { backgroundColor: eo } : void 0,
                children: (0, a.jsx)(tn.A, {
                    ...y,
                    "aria-setsize": -1,
                    "aria-roledescription": eL.intl.string(eL.t.BAB0yK),
                    "aria-labelledby": ec,
                    "aria-describedby": eu,
                    onFocus: H,
                    onBlur: B,
                    onContextMenu: R,
                    onKeyDown: ee,
                    onClick: D,
                    compact: g,
                    contentOnly: C,
                    className: c()(p, {
                        [nf.iU]: !0,
                        [nf.HJ]: !g,
                        [nf.mK]: i.mentioned,
                        [nf.M1]: (0, ed.ec)(i),
                        [nf.SH]: i.type === en.lAJ.NITRO_NOTIFICATION,
                        [nf.Sg]: i.hasFlag(en.pr7.IS_GUILD_OFFICIAL) && em && !eg,
                        [nf.H4]: (0, e6.A)(i),
                        [nf._A]: !C && (eC || i.type === en.lAJ.REPLY),
                        [nf.wH]: W,
                        [nf.$n]: ei?.message.id === i.id,
                        [nf.$w]: i.isCommandType() && i.state === en.cmJ.SENDING,
                        [nf.DX]: ef,
                    }),
                    zalgo: !K,
                    childrenRepliedMessage:
                        C || i.type !== en.lAJ.REPLY
                            ? void 0
                            : nH({
                                  ...e,
                                  setPopout: M,
                                  referencedUsernameProfile: T.referencedUsernameProfile,
                                  referencedAvatarProfile: T.referencedAvatarProfile,
                                  replyReference: I,
                                  replyMessage: v,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, a.jsx)(nB, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, M, T),
                    childrenHeader: C
                        ? void 0
                        : ny({
                              messageProps: e,
                              setPopout: M,
                              messagePopouts: T,
                              replyReference: I,
                              author: el,
                              repliedMessage: v,
                              roleIcon: ea,
                          }),
                    childrenAccessories: (0, tj.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: Y,
                        hasBailedAst: Q,
                        handleContextMenu: R,
                        isInteracting: $,
                        isAutomodBlockedMessage: ef,
                        hideInviteEmbedBanner: E,
                        hideActivityInvite: x,
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
                                      h = r.state === en.cmJ.SENDING,
                                      m = r.id === c,
                                      g = (0, er.Lt)(r.flags, en.pr7.EPHEMERAL),
                                      p = r.state === en.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, a.jsx)(nA, {
                                            className: nf.Uo,
                                            innerClassName: nf.Mc,
                                            isHeader: !d && m && !(0, e6.A)(r),
                                            isReply: !d && r.type === en.lAJ.REPLY && null != r.messageReference,
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
                                  messagePopouts: T,
                                  isFocused: O || G,
                                  messageWindow: eA.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nK.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: k,
                    onMouseLeave: L,
                    hasThread: !C && i.hasFlag(en.pr7.HAS_THREAD) && null != q,
                    isSystemMessage: (0, e6.A)(i),
                    hasReply: i.type === en.lAJ.REPLY,
                    messageRef: (e) => {
                        ((ep.current = e), (eA.current = e?.ownerDocument?.defaultView ?? window));
                    },
                    author: el,
                }),
            }),
        });
    return null != es
        ? (0, a.jsx)(
              tt,
              { flashKey: es, className: c()({ [nf.bB]: !0, [nf._A]: !g && i.id === f }), children: eE },
              `bg-flash-${l}`,
          )
        : eE;
});
n(801541);
var nq = n(889137),
    nZ = n(952270),
    nJ = n(428678),
    nX = n(353182),
    nY = n(922529),
    nQ = n(888675),
    n0 = n(845806);
function n1(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: r = !0 } = e,
        o = null != e.collapsedReason ? eL.intl.format(e.collapsedReason, { count: l }) : e.collapsedText,
        c =
            e.icon ??
            (0, nq.YW)({ collapsedReason: s })
                .with({ collapsedReason: eL.t["VFWjc+"] }, () =>
                    (0, a.jsx)(nZ.EyeSlashIcon, { size: "md", color: "currentColor", className: n0.Q6 }),
                )
                .with({ collapsedReason: eL.t["+FcYM/"] }, () =>
                    (0, a.jsx)(nJ.DenyIcon, { size: "md", color: "currentColor", className: n0.Q6 }),
                )
                .with({ collapsedReason: eL.t.rHRovo }, () =>
                    (0, a.jsx)(nX.ChatXIcon, { size: "md", color: "currentColor", className: n0.TG }),
                )
                .otherwise(() => (0, a.jsx)(eU.XSmallIcon, { size: "md", color: "currentColor", className: n0.Q6 }));
    return (0, a.jsx)(tn.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nQ.A, {
            compact: i,
            className: n0.L9,
            iconNode: c,
            children: (0, a.jsxs)("div", {
                className: r ? n0.Fo : n0.GU,
                children: [
                    o,
                    r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, a.jsx)(ex.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: n0.rB,
                                    children: t ? eL.intl.string(eL.t.fgq1gs) : eL.intl.string(eL.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let n2 = r.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, canUncollapse: s = !0, ...o } = e,
        { hasJumpTarget: d = !1 } = t,
        [u, h] = r.useState(d && s),
        m = r.useCallback(() => {
            s && h((e) => !e);
        }, [s]);
    r.useEffect(() => {
        d && s && h(!0);
    }, [d, s]);
    let g = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, a.jsxs)("div", {
        className: c()({ [nf._A]: !0, [n0.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === en.TZK.DIVIDER)
                ? (0, a.jsx)(nY.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, a.jsx)(
                n1,
                { count: g, compact: l, expanded: u, onClick: m, canUncollapse: s, ...o },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === en.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, a.jsx)(nY.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === en.TZK.MESSAGE || e.type === en.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === en.TZK.THREAD_STARTER_MESSAGE ? nz : n$;
                          return (0, a.jsx)(
                              t,
                              {
                                  id: (0, e8.j)(n.id, e.content.id),
                                  className: n0.__invalid_blocked,
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
var n3 = n(114212),
    n4 = n(687966),
    n7 = n(696451),
    n5 = n(427262),
    n8 = n(447215);
let n6 = r.memo(function (e) {
    let t,
        { channel: n, messages: l, compact: i, unreadId: s } = e,
        o = r.useMemo(() => {
            let e = [];
            for (let t of l.content) t.type === en.TZK.MESSAGE && e.push(t.content);
            return e;
        }, [l]),
        c = r.useMemo(
            () =>
                (function (e) {
                    let t = new Set(),
                        n = [];
                    for (let l of e) t.has(l.author.id) || (t.add(l.author.id), n.push(l));
                    return n;
                })(o),
            [o],
        ),
        d = (0, u.yK)([n7.Ay], () => c.map((e) => n7.Ay.getNick(n.guild_id, e.author.id) ?? n5.Ay.getName(e.author)), [
            c,
            n.guild_id,
        ]),
        [h, m] = c,
        g = (0, n8.P)({ user: h?.author, channelId: n.id, guildId: n.guild_id, messageId: h?.id }),
        p = (0, n8.P)({ user: m?.author, channelId: n.id, guildId: n.guild_id, messageId: m?.id }),
        [A = "", f = ""] = d;
    return (
        (t =
            d.length <= 1
                ? eL.intl.format(eL.t.eyrHuJ, { a: A, aHook: g(), count: o.length })
                : d.length <= 2
                  ? eL.intl.format(eL.t["RjbAw/"], { a: A, aHook: g(), b: f, bHook: p() })
                  : eL.intl.format(eL.t["YDqd/d"], { a: A, aHook: g(), b: f, bHook: p(), count: d.length - 2 })),
        (0, a.jsx)(n2, {
            channel: n,
            messages: l,
            compact: i,
            unreadId: s,
            collapsedText: t,
            icon: (0, a.jsx)(n4.GameControllerIcon, { size: "md", color: "currentColor", className: n0.Q6 }),
        })
    );
});
var n9 = n(248432);
function le(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, a.jsx)("div", {
        className: c()(n9.dU, t && n9.yZ),
        children: (0, a.jsx)("div", { className: n9.JN, children: n }),
    });
}
let lt = r.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, a.jsx)(le, { isCollapsed: n, children: l });
});
var ln = n(708510);
function ll(e) {
    return "group" in e;
}
let li = (0, a.jsxs)(a.Fragment, {
    children: [
        (0, a.jsx)(n3.A, { messages: 4, groupSpacing: 16, className: ln.Xb }),
        (0, a.jsx)(n3.A, { messages: 2, groupSpacing: 16, className: ln.Xb }),
        (0, a.jsx)(n3.A, { messages: 3, groupSpacing: 16, className: ln.Xb }),
    ],
});
function ls(e) {
    let { channel: t, focusStream: n, isCollapsed: l, isHydrating: i, flashTarget: s } = e;
    return (0, a.jsxs)("div", {
        className: ln.XT,
        children: [
            (0, a.jsx)("ol", {
                className: ln.cl,
                children: n.map((e) => {
                    if (ll(e)) {
                        var n;
                        return e.group.type === en.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS
                            ? (0, a.jsx)(
                                  lt,
                                  {
                                      isOnTopic: e.isOnTopic,
                                      isCollapsed: l,
                                      children: (0, a.jsx)(n6, { messages: e.group, channel: t, unreadId: "" }),
                                  },
                                  e.group.key,
                              )
                            : (0, a.jsx)(
                                  lt,
                                  {
                                      isOnTopic: e.isOnTopic,
                                      isCollapsed: l,
                                      children: (0, a.jsx)(n2, {
                                          messages: e.group,
                                          channel: t,
                                          unreadId: "",
                                          collapsedReason:
                                              (n = e.group.type) === en.TZK.MESSAGE_GROUP_BLOCKED
                                                  ? eL.t["+FcYM/"]
                                                  : n === en.TZK.MESSAGE_GROUP_IGNORED
                                                    ? eL.t["VFWjc+"]
                                                    : n === en.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                      ? eL.t.rHRovo
                                                      : eL.t.xfkfTK,
                                          canUncollapse: e.group.type !== en.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                      }),
                                  },
                                  e.group.key,
                              );
                    }
                    return (0, a.jsx)(
                        lt,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: l,
                            children: (0, a.jsx)(n$, {
                                id: `overlay-msg-${e.record.id}`,
                                message: e.record,
                                channel: t,
                                groupId: e.groupId,
                                isLastItem: !1,
                                renderContentOnly: !1,
                                flashKey: s?.messageId === e.record.id ? s.key : void 0,
                            }),
                        },
                        e.record.id,
                    );
                }),
            }),
            i && li,
        ],
    });
}
n(30146);
var la = n(435558),
    lr = n.n(la);
let lo = { tension: 240, friction: 30 },
    lc = { tension: 320, friction: 28 },
    ld = { tension: 280, friction: 24, clamp: !0 },
    lu = { tension: 170, friction: 22, clamp: !0 },
    lh = { tension: 220, friction: 28, clamp: !0 },
    lm = 6;
function lg(e) {
    return (188 - (6 * e + 36)) / 2;
}
var lp = n(419828);
function lA(e) {
    let { style: t, channel: n, conversationId: l, scrollerRef: i, requestDismiss: s, focusTarget: o } = e,
        { conversationFocus: c, dismissReason: d } = (0, F.D7)(),
        h = c?.conversationId === l,
        m = h ? ld : "navigation" === d ? lh : lu,
        g = (0, $.r)(W.A.colors.BORDER_SUBTLE).spring(),
        p = (0, $.r)(W.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: A,
            shadowAlpha: f,
            contentPadding: C,
        } = (0, q.z)(
            { borderTopRadius: h ? 12 : 8, shadowAlpha: 0.4 * !!h, contentPadding: 4 * !!h, config: m },
            "respect-motion-settings",
        ),
        { borderColor: E } = (0, q.z)({ borderColor: h ? g : p, config: m }, "respect-motion-settings"),
        [x, I] = r.useState(!0),
        S = r.useRef(null),
        y = r.useCallback(() => {
            let e = i?.current;
            null != e &&
                (null != S.current && (S.current.style.opacity = String(Math.min(1, e.getDistanceFromTop() / 16))),
                I(e.getDistanceFromBottom() > 5));
        }, [i]),
        b = (0, u.bG)([ep.A], () => ep.A.getMessages(n.id), [n.id]),
        {
            isSelected: _,
            selectedConversation: j,
            selectedHydratedMessages: v,
            isSelectionHydrating: T,
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
        N = (0, X.p0)({ value: j, shouldUpdate: _ }),
        M = (0, X.p0)({ value: v, shouldUpdate: _ }),
        R = r.useMemo(
            () =>
                null != N
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
                                  return (i.sort((e, t) => et.default.compare(e.record.id, t.record.id)), i);
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
                                  null != l && ll(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: en.TZK.MESSAGE, content: t.record, groupId: r };
                                  (e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0));
                              } else s.push({ record: t.record, isOnTopic: t.isOnTopic, groupId: r });
                              a = t.record;
                          }
                          return s;
                      })(n, N, b, M)
                    : [],
            [n, N, b, M],
        ),
        [D, k] = r.useState(null),
        L = o?.messageId,
        P = null != L && R.some((e) => !ll(e) && e.record.id === L);
    return (r.useEffect(() => {
        if (!P || null == L) return;
        let e = document.getElementById(`overlay-msg-${L}`),
            t = i?.current;
        null != e &&
            null != t &&
            t.scrollIntoViewNode({
                node: e,
                padding: 64,
                animate: !0,
                callback: () => k((e) => ({ messageId: L, key: (e?.key ?? 0) + 1 })),
            });
    }, [o, L, P, i]),
    null == N)
        ? null
        : (0, a.jsxs)(z.animated.div, {
              className: lp.Nr,
              style: {
                  top: t.cardTop,
                  bottom: 0,
                  left: t.cardInsetLeft,
                  right: t.cardInsetRight,
                  opacity: t.cardOpacity,
                  borderColor: E,
                  borderRadius: A.to((e) => `${e}px ${e}px 0 0`),
                  boxShadow: f.to((e) => `0 8px 24px rgba(0, 0, 0, ${e})`),
              },
              children: [
                  (0, a.jsx)(z.animated.div, { className: lp.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, a.jsx)(z.animated.div, {
                      style: { paddingTop: C, paddingLeft: C, paddingRight: C },
                      children: (0, a.jsx)(e$, { channel: n, conversation: N, requestDismiss: s }),
                  }),
                  (0, a.jsxs)("div", {
                      className: lp.gk,
                      children: [
                          (0, a.jsx)(Z.zC, {
                              className: lp.XG,
                              ref: i,
                              onScroll: y,
                              children: (0, a.jsxs)(z.animated.div, {
                                  style: { paddingLeft: C, paddingRight: C },
                                  children: [
                                      (0, a.jsx)(ls, {
                                          channel: n,
                                          focusStream: R,
                                          isCollapsed: h || "navigation" === d,
                                          isHydrating: _ && T,
                                          flashTarget: D,
                                      }),
                                      (0, a.jsx)("div", { className: lp.lB }),
                                  ],
                              }),
                          }),
                          (0, a.jsx)("div", { ref: S, className: lp.iX, "aria-hidden": !0 }),
                          x && (0, a.jsx)("div", { className: lp.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lf(e) {
    let { channel: t } = e,
        { bannerMeasurementRef: n } = K(),
        { conversationFocus: l, dismissReason: i, clearDismissReason: s, dismissFocus: o } = (0, F.D7)(),
        d = null != l,
        [h, m] = r.useState(null),
        g = r.useRef(!1),
        p = r.useRef(null),
        A = r.useCallback(
            async (e) => {
                if (d && !g.current) {
                    if (((g.current = !0), "return" === e)) {
                        let e = w.A.getConversation(t.id);
                        if (null != e)
                            try {
                                await y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await (async function (e) {
                            let t = e.current,
                                n = t?.getScrollerNode();
                            null == t ||
                                null == n ||
                                n.scrollTop <= 5 ||
                                (await new Promise((e) => {
                                    t.scrollTo({ to: 0, animate: !0, callback: () => e() });
                                }));
                        })(p);
                    }
                    (o(e), (g.current = !1));
                }
            },
            [t.id, d, o, p],
        );
    (!(function (e, t) {
        let { conversationFocus: n } = (0, F.D7)(),
            l = (0, u.cf)(
                [ep.A],
                () => {
                    let t = ep.A.getMessages(e.id);
                    return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
                },
                [e.id],
            ),
            i = r.useRef(l),
            s = r.useRef(null);
        (r.useEffect(() => {
            if (null == n) return;
            let t = ep.A.getMessages(e.id);
            ((i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId }),
                (s.current = w.A.getConversation(e.id)));
        }, [n, e.id]),
            r.useEffect(() => {
                if (null == n) return;
                let { jumpTargetId: e, jumpSequenceId: a } = i.current;
                (l.jumpTargetId === e && l.jumpSequenceId === a) ||
                    s.current?.messageIds.some((e) => e === l.jumpTargetId) ||
                    t("navigation");
            }, [n, l, t]));
    })(t, A),
        r.useEffect(() => {
            if (d)
                return (
                    eA._.subscribe(en.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        eA._.unsubscribe(en.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                A("return");
            }
        }, [d, A]));
    let f = r.useCallback(() => {
            A("return");
        }, [A]),
        C = r.useMemo(
            () => ({
                from: () => ({
                    cardTop: n.current ?? 0,
                    cardInsetLeft: 4,
                    cardInsetRight: 16,
                    bodyTintOpacity: 0,
                    cardOpacity: 1,
                }),
                enter: { cardTop: 32, cardInsetLeft: 32, cardInsetRight: 32, bodyTintOpacity: 1, cardOpacity: 1 },
                leave: () => {
                    var e;
                    return (
                        (e = n.current),
                        "navigation" === i
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
                config: () => (e) => ("leave" !== e ? ld : "navigation" === i ? lh : lu),
                onRest: (e, t) => {
                    ("leave" === t.phase && s(), "enter" === t.phase && m(t.item ?? null));
                },
            }),
            [i, n, s],
        ),
        E = (0, J.p)(l?.conversationId ?? null, C, "respect-motion-settings");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: c()(lp.tB, !d && lp.Vq, {
                    [lp.Em]: !d && "navigation" === i,
                    [lp.Zp]: !d && "navigation" !== i,
                }),
                onClick: f,
                "aria-hidden": !0,
            }),
            E((e, n) =>
                null == n
                    ? null
                    : (0, a.jsx)(lA, {
                          style: e,
                          channel: t,
                          conversationId: n,
                          scrollerRef: n === l?.conversationId ? p : void 0,
                          requestDismiss: A,
                          focusTarget: n === h && n === l?.conversationId ? l : null,
                      }),
            ),
        ],
    });
}
function lC(e) {
    let { channel: t } = e,
        { conversationFocus: n, dismissReason: l } = (0, F.D7)();
    return null == n && null === l ? null : (0, a.jsx)(lf, { channel: t });
}
var lE = n(708988),
    lx = n(872351),
    lI = n(359144);
let lS = (0, z.animated)("button"),
    ly = (0, k.P)(eb.E);
function lb(e) {
    e.preventDefault();
}
let l_ = r.memo(function (e) {
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
        E = m === o.id,
        x = null != m && !E,
        I = null == h ? "up" : et.default.compare(o.startMessageId, h) > 0 ? "down" : "up",
        S = o.title,
        y = Math.min(16, Math.max(4, Math.round(0.6 * S.length))),
        b = (0, q.z)({ y: d.y, opacity: +!d.hidden, config: lo }, "respect-motion-settings"),
        _ = (0, q.z)(
            {
                ...((t = u && C),
                (n = 0),
                u && (C && E ? (n = -17) : C ? (n = -13) : E && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                C && E ? ((l = 0), (i = 0), (s = 0.5)) : u && E && ((l = 1), (i = 0), (s = 1)),
                {
                    textScale: u ? 1 : 0.5,
                    textX: n,
                    textOpacity: +!!u,
                    lineScaleX: u ? 3 : 1,
                    pillOpacity: +!!t,
                    pillX: t ? (E ? -4 : 0) : 8,
                    pillScale: t ? 1 : 0.85,
                    arrowOpacity: l,
                    arrowX: i,
                    arrowScale: s,
                }),
                lineWidth: y,
                lineOpacity: +(!u && !d.hidden),
                config: lc,
            },
            "respect-motion-settings",
        ),
        j = r.useCallback(() => A(o.id), [A, o.id]),
        v = r.useCallback(() => A(null), [A]),
        T = r.useCallback(() => f(o.id), [f, o.id]),
        N = d.hidden || d.edge;
    return (0, a.jsxs)(lS, {
        "aria-current": C ? "true" : void 0,
        "aria-hidden": N ? "true" : void 0,
        className: c()(lI.ng, { [lI._D]: C, [lI.DJ]: E, [lI.KZ]: x }),
        style: {
            transform: b.y.to((e) => `translateY(${e}px)`),
            opacity: b.opacity,
            pointerEvents: N ? "none" : void 0,
        },
        onMouseDown: lb,
        onMouseEnter: j,
        onMouseLeave: v,
        onClick: T,
        children: [
            (0, a.jsx)(z.animated.span, {
                className: c()(lI.Og, p && lI.v7),
                style: {
                    opacity: _.pillOpacity,
                    transform: (0, z.to)(
                        [_.pillX, _.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, a.jsx)(eb.E, {
                    tag: "span",
                    variant: "body-md/semibold",
                    color: "none",
                    className: lI.B6,
                    children: S,
                }),
            }),
            (0, a.jsx)(ly, {
                tag: "span",
                variant: C ? "body-md/semibold" : "body-md/normal",
                color: C ? "text-strong" : E ? "text-default" : x ? "text-muted" : "text-subtle",
                className: lI.QV,
                lineClamp: 1,
                style: {
                    opacity: _.textOpacity,
                    transform: (0, z.to)([_.textScale, _.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: S,
            }),
            (0, a.jsx)("span", {
                className: lI.iF,
                children: (0, a.jsx)(z.animated.span, {
                    className: lI.iN,
                    style: {
                        width: _.lineWidth,
                        opacity: _.lineOpacity,
                        transform: _.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, a.jsx)(z.animated.span, {
                className: lI.$N,
                "aria-hidden": "true",
                style: {
                    opacity: _.arrowOpacity,
                    transform: (0, z.to)([_.arrowX, _.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === I
                        ? (0, a.jsx)(lE.ArrowSmallDownIcon, { size: "refresh_sm", color: "currentColor" })
                        : (0, a.jsx)(lx.ArrowSmallUpIcon, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function lj(e) {
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
            for (let t = -3; t <= 9; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i
                                ? ((t = lg(28) + 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8))
                                : (t = lg(14) + 14 * n),
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
        className: c()(lI._R, n && lI.h1),
        role: "list",
        "aria-label": eL.intl.string(ek.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: r } = e,
                o = p.get(r);
            return null == o
                ? null
                : (0, a.jsx)(
                      l_,
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
var lv = n(778712),
    lT = n(97808),
    lN = n(854627),
    lM = n(562153);
n(575279);
var lR = n(437057);
let lD = [
        { name: "40%", l1: "75%", l2: "50%" },
        { name: "55%", l1: "90%", l2: null },
        { name: "30%", l1: "60%", l2: "80%" },
        { name: "65%", l1: "45%", l2: "70%" },
    ],
    lk = {};
function lL(e) {
    let { channel: t, message: n } = e,
        l = lM.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lN.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: lv._3.SIZE_32,
        }),
        { content: o } = (0, tb.A)(n, lk),
        c = e3.PZ.useSetting(),
        d = r.useMemo(() => (0, ee.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, a.jsxs)("div", {
        className: lR.QS,
        children: [
            (0, a.jsx)(lT.eu, {
                className: lR.MM,
                src: i,
                avatarDecoration: s,
                size: lv._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, a.jsxs)("div", {
                className: lR.gp,
                children: [
                    (0, a.jsxs)("div", {
                        className: lR.yl,
                        children: [
                            (0, a.jsx)(eb.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, a.jsx)(eb.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, a.jsx)(eb.E, { variant: "body-sm/normal", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function lP() {
    return (0, a.jsx)("div", {
        className: lR.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lD[t % lD.length];
            return (0, a.jsxs)(
                "div",
                {
                    className: lR.uA,
                    children: [
                        (0, a.jsx)("div", { className: lR.h }),
                        (0, a.jsxs)("div", {
                            className: lR.jE,
                            children: [
                                (0, a.jsx)("div", { className: lR.zw, style: { width: n.name } }),
                                (0, a.jsx)("div", { className: lR.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, a.jsx)("div", { className: lR.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lO(e) {
    let { channel: t, conversationId: n } = e,
        { conversationFocus: l } = (0, F.D7)(),
        i = (0, u.bG)([e_.A], () => e_.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = r.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, a.jsx)("div", {
        className: c()(lR.Zt, null != l && lR.CU),
        children: (0, a.jsx)("div", {
            className: lR.eU,
            children:
                null == s
                    ? (0, a.jsx)(lP, {})
                    : s.length > 0
                      ? (0, a.jsx)("div", {
                            className: lR.z0,
                            children: s.map((e) => (0, a.jsx)(lL, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lG = n(130791);
function lU(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, u.bG)([w.A], () => w.A.getSelectedConversationId(t.id), [t.id]),
        { selectAndFocusConversation: s } = K(),
        { conversationFocus: o, dismissReason: d } = (0, F.D7)(),
        h = null != o,
        m = (function (e) {
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
        g = r.useMemo(
            () =>
                0 === l.length
                    ? null
                    : (l[
                          (function (e, t) {
                              if (0 === e.length) return 0;
                              if (null == t) return e.length - 1;
                              let n = e.findLastIndex((e) => 0 >= et.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, m)
                      ]?.id ?? null),
            [m, l],
        ),
        p = r.useMemo(
            () =>
                0 === l.length
                    ? null
                    : null != i && l.some((e) => e.id === i)
                      ? i
                      : null != g && l.some((e) => e.id === g)
                        ? g
                        : l[l.length - 1].id,
            [g, l, i],
        ),
        { clampLow: A, clampHigh: f } = (function (e) {
            if (0 === e) return { clampLow: 0, clampHigh: 0 };
            let t = Math.min(2, e - 1),
                n = Math.max(t, e - 1 - 2);
            return { clampLow: t, clampHigh: n };
        })(l.length),
        C = r.useMemo(
            () =>
                (function (e, t, n, l) {
                    if (0 === e.length) return 0;
                    let i = null != t ? e.findIndex((e) => e.id === t) : -1,
                        s = i >= 0 ? i : e.length - 1;
                    return (0, la.clamp)(s, n, l);
                })(l, p, A, f),
            [l, p, A, f],
        ),
        [E, x] = r.useState(!1),
        I = r.useCallback(() => x(!1), []),
        S = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lm; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, C),
            [l, C],
        ),
        y = r.useMemo(() => S.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [S]),
        { showTopFade: b, showBottomFade: _ } = r.useMemo(
            () => ({ showTopFade: C >= 3, showBottomFade: C < l.length - 3 }),
            [C, l.length],
        ),
        j = r.useRef(null),
        [v, T] = r.useState(null),
        N = null != v && v !== i ? v : null;
    r.useEffect(() => {
        (0, G.p7)(t.id, y.length);
    }, [t.id]);
    let M = r.useCallback(
            (e) => {
                (null != e &&
                    e !== i &&
                    U.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: h }),
                    T(e),
                    null != e && e !== i && (0, G.qC)(t.id, e, { previewLimit: 4, cacheType: "channel" }));
            },
            [t.id, h, i],
        ),
        R = r.useCallback(() => {
            (T(null), I());
        }, [I]),
        D = r.useCallback(
            (e) => {
                (U.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: h }),
                    s(e, { cacheType: "channel" }),
                    I());
            },
            [t.id, I, h, s],
        ),
        k = r.useCallback(() => (null != N ? (0, a.jsx)(lO, { channel: t, conversationId: N }) : null), [t, N]),
        L = r.useCallback(
            (e) => {
                let t;
                (null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    E && (T(null), I()));
            },
            [n, E, I],
        ),
        P = r.useCallback(() => {
            (x(!0),
                U.X.trackTopicsUnitImpression({
                    channelId: t.id,
                    conversationIds: y.map((e) => e.id),
                    isFocusMode: h,
                }));
        }, [t.id, y, h]);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: c()(lG.kL, h && lG.tW, { [lG._Y]: !h && "navigation" === d, [lG.J_]: !h && "return" === d }),
              children: (0, a.jsxs)("div", {
                  className: c()(lG.rI, E && lG.RK),
                  onMouseEnter: P,
                  onMouseLeave: R,
                  onWheel: h ? void 0 : L,
                  children: [
                      (0, a.jsx)("div", { className: c()(lG.oT, E && lG.RK), "aria-hidden": !0 }),
                      (0, a.jsx)(eS.Y, {
                          targetElementRef: j,
                          shouldShow: E && null != N,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: eS.Y.Animation.FADE,
                          renderPopout: k,
                          children: () =>
                              (0, a.jsx)("div", {
                                  ref: j,
                                  className: c()(lG.nd, { [lG.mc]: E, [lG._z]: !E, [lG.OP]: E && b, [lG.yc]: E && _ }),
                                  style: { height: 188 },
                                  children: (0, a.jsx)(lj, {
                                      items: S,
                                      isExpanded: E,
                                      anchorId: m,
                                      hoveredConversationId: v,
                                      selectedConversationId: i,
                                      showTopFade: b,
                                      showBottomFade: _,
                                      isFocusOverlayOpen: h,
                                      onHoverConversationChange: M,
                                      onJump: D,
                                  }),
                              }),
                      }),
                  ],
              }),
          });
}
function lw(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, V.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, u.yK)([e_.A], () => (l ? (e_.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, a.jsx)(lU, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lF(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, V.sV)(t.guild_id, "scrollbar_chips");
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(lC, { channel: t }), l && (0, a.jsx)(lw, { channel: t, scrollManager: n })],
    });
}
var lH = n(354328),
    lB = n(807632),
    lK = n(875317),
    lV = n(164956),
    lz = n(302031),
    lW = n(391820),
    l$ = n(141343),
    lq = n(72314),
    lZ = n(218461),
    lJ = n(399263),
    lX = n(287809),
    lY = n(234320),
    lQ = n(863439),
    l0 = n(326337),
    l1 = n(125435);
function l2(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, a.jsx)("div", {
            className: l1.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, a.jsx)(n3.A, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l3 = n(830178),
    l4 = n(116903),
    l7 = n(621466),
    l5 = n(315710),
    l8 = n(951001),
    l6 = n(334738),
    l9 = n(267102),
    ie = n(863922),
    it = n(965407);
function il(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l7.vq)(l, HTMLElement);) ((n += l.offsetTop ?? 0), (l = l.offsetParent));
    return n;
}
let ii = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"]);
function is(e) {
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
let ia = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class ir {
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
            let t = lq.A.isAtBottom(e.channel.id);
            ((this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lq.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null)));
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
        return null == t ? null : t.getElementById((0, e8.j)(n, e));
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
            this.acking && t !== this.props.windowId && ((this.acking = !1), (0, l6.Z5)(this.props.channel.id, t)),
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
            let n = is(e.messages);
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
                    (l = et.default.extractTimestamp(i.id)),
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
            o = it.A.getOptions(a?.id ?? "");
        if (null != a && a.state === en.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: 16 + this.props.additionalMessagePadding,
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
            a = il(l, i),
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
        return this.props.channel.isForumPost() ? 64 : 32;
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
        let e = this.ref.current?.getScrollerNode();
        if (null == e) return null;
        for (let t of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == t) continue;
            let n = this.getElementFromMessageId(t.id);
            if (!(0, l7.vq)(n)) continue;
            let l = t === this.messageFetchAnchor ? t.offsetHeight - n.offsetHeight : 0;
            return { node: n, fixedScrollTop: il(n, e) - (t.offsetFromTop + l) };
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
                  padding: 16 + this.props.additionalMessagePadding,
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
    updateVisibleMessagesDebounced = lr().debounce(ie.s_, 300);
    setAutomaticAnchor(e) {
        ((this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id));
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? ia;
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
        ii.has(e.key) && this.handleUserScrollGesture();
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
                (0, l6._9)(this.props.channel.id, this.props.windowId);
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
            let n = is(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l7.vq)(l)
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : 16), !0)
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nV.q4),
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
            s = il(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = is(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== en.rbe.GUILD_VOICE &&
                this.props.channel.type !== en.rbe.GUILD_STAGE_VOICE
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
                    limit: Math.min(30, 2 * (0, l0.h)("scrollManager.loadMore")),
                    ...(i?.truncate === !1 ? null : { truncate: !0 }),
                }));
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        (this.ref.current?.scrollTo({ to: e, animate: !j.Ay.useReducedMotion && t, callback: n }),
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
            (y.A.jumpToPresent(n.id, (0, l0.h)("scrollManager.jumpToPresent")),
                (0, e2.uh)(n.getGuildId() ?? en.ME, n.id));
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                ((this.jumping = !1), this.handleScroll());
            });
    }
    updateStoreDimensionsDebounced = lr().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) l8.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { topPlaceholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            l8.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
            j.Ay.useReducedMotion ||
            (et.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0));
        let a = () => {
            ((this.jumping = !1),
                (0, l7.vq)(s) && ((s.tabIndex = -1), (0, l5.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e()));
        };
        (0, l7.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : 16,
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
            else return s ? a - 16 - 2 : a + 500;
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
            (this._automaticAnchorCallbacks = lr().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor()));
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = lr().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        (this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = lr().uniq(this._scrollCompleteCallbacks)));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = lr().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        ((this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, l6.Z5)(this.props.channel.id, this.props.windowId));
    }
}
n(667532);
var io = n(149468),
    ic = n(486227),
    id = n(731738),
    iu = n(192308),
    ih = n(832712),
    im = n(913379),
    ig = n(662502),
    ip = n(754302),
    iA = n(632738),
    iC = n(544231),
    iE = n(349435),
    ix = n(665909),
    iI = n(62617);
function iS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e,
        o = r.useMemo(() => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }), [s]);
    return (0, a.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/8bebc44873d2e7c35f88dbb91386484816332e49b46e9379ef31b1fd9d01e85c.svg",
        className: (0, iI.Z)(),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var iy = n(771800);
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
                    (0, a.jsx)(iS, { alt: "", size: 32 }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(eO.D, { variant: "heading-sm/semibold", color: "text-strong", children: t }),
                            (0, a.jsx)(eb.E, { variant: "body-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: iy.Uo,
                children: i?.map((e, t) =>
                    (0, a.jsx)(
                        ew.$,
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
                      "aria-label": eL.intl.string(eL.t.WAI6xu),
                      children: (0, a.jsx)(eU.XSmallIcon, { size: "md", color: "currentColor", className: iy.b }),
                  })
                : null,
        ],
    });
}
function i_(e) {
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
        im.A.increment({ name: id.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = r.useCallback(() => {
        (c?.(),
            (0, ix._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: ix.Wm.USER_BANNER_DISMISS }));
    }, [c, t, n, l, i]);
    return (0, a.jsx)(ib, { buttons: d, description: o, header: s, onDismiss: u });
}
var ij = n(477427);
function iv(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eL.intl.string(eL.t.wSZfJR), description: eL.intl.string(eL.t.CRwzW5) },
            { title: eL.intl.string(eL.t.cmMUaB), description: eL.intl.string(eL.t.n6G1ue) },
            { title: eL.intl.string(eL.t["5SPKSy"]), description: eL.intl.string(eL.t.eyjeJQ) },
        ],
        o = r.useCallback(() => {
            (0, iC.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        (ih.A.updateChannelOverrideSettings({
            guildId: null,
            channelId: t,
            settings: { muted: !0 },
            label: ij.fd.Muted,
        }),
            ig.A.showMuteSuccessToast(i, t),
            (0, ix._$)({ channelId: t, warningId: l, senderId: i, warningType: iE._j.LIKELY_ATO, cta: e }),
            o());
    }
    return (
        r.useEffect(() => {
            ((0, ix.mO)(en.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iE._j.LIKELY_ATO,
            }),
                im.A.increment({ name: id.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(i_, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iE._j.LIKELY_ATO,
            header: eL.intl.string(eL.t.R8UsiI),
            description: eL.intl.string(eL.t.lI8nQl),
            onDismiss: o,
            buttons: [
                {
                    text: eL.intl.string(eL.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        ((0, iu.mM)(async () => {
                            let { default: e } = await Promise.all([n.e(532648), n.e(482911), n.e(741029)]).then(
                                n.bind(n, 198916),
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
                                            ip.B,
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
                                            iA.PQ,
                                            {
                                                title: eL.intl.string(eL.t.ftIK2A),
                                                description: eL.intl.string(eL.t.w2ve0t),
                                                buttonText: eL.intl.string(eL.t.ftIK2A),
                                                onButtonPress: () => {
                                                    (c(ix.Wm.USER_MODAL_MUTE), o());
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, a.jsx)(ex.D, {
                                        onClick: () =>
                                            (0, ix._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: iE._j.LIKELY_ATO,
                                                cta: ix.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, a.jsx)(eO.D, {
                                            variant: "heading-xs/medium",
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
                            (0, ix._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iE._j.LIKELY_ATO,
                                cta: ix.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                { text: eL.intl.string(eL.t.ftIK2A), onClick: () => c(ix.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var iT = n(905394),
    iN = n(866660);
function iM(e) {
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
        className: iN.A,
        children: (0, a.jsx)(ez, {
            channel: t,
            conversation: o,
            actionsShifted: c,
            onFocusToggle: s,
            suppressBorder: !0,
        }),
    });
    return null != l ? (0, a.jsx)(tt, { flashKey: l, className: iN.j, children: h }) : h;
}
var iR = n(495273),
    iD = n(885071),
    ik = n(176781),
    iL = n(314307),
    iP = n(463930),
    iO = n(442433),
    iG = n(793574),
    iU = n(688810),
    iw = n(967144),
    iF = n(342296),
    iH = n(209516);
function iB(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = r.useRef(null),
        { analyticsLocations: o } = (0, iU.Ay)(iG.A.USERNAME),
        c = (0, u.bG)([lX.default], () => lX.default.getUser(t)),
        d = (0, u.bG)([n7.Ay], () => (null != t ? n7.Ay.getMember(l.guild_id, t) : null)),
        h = (0, iw.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function m(e) {
        if (null == c) return null;
        (0, iO.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e(926132),
                n.e(893190),
                n.e(146652),
                n.e(576432),
                n.e(451162),
                n.e(229787),
                n.e(576665),
                n.e(624198),
                n.e(715038),
                n.e(144472),
                n.e(823427),
                n.e(242204),
                n.e(343116),
                n.e(70515),
                n.e(666939),
                n.e(278544),
            ]).then(n.bind(n, 202643));
            return (t) => (0, a.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? n5.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, a.jsx)(iU.f5, {
              value: o,
              children: (0, a.jsx)(iF.A, {
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
                          children: (0, a.jsx)(eb.E, {
                              className: iH.e,
                              tag: "span",
                              variant: "body-md/semibold",
                              color: "text-strong",
                              children: (0, a.jsx)(iP.g, { name: g, colorString: p ?? null, colorStrings: h }),
                          }),
                      }),
              }),
          });
}
var iK = n(683825),
    iV = n(91172);
function iz(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t);
    return (0, a.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", {
                className: iV.P,
                children: (0, a.jsx)(ik.ClipsIcon, { size: "lg", color: W.A.colors.ICON_SUBTLE }),
            }),
            (0, a.jsx)(iL.cr, { children: n }),
            null != t.ownerId &&
                (0, a.jsx)(eb.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: eL.intl.format(iK.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, a.jsx)(iB, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iW = n(433380),
    i$ = n(95701),
    iq = n(808728),
    iZ = n(534890),
    iJ = n(713654),
    iX = n(691060),
    iY = n(376310),
    iQ = n(959717);
function i0(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, a.jsx)("div", {
        className: c()(iQ._, { [iQ.L]: l }),
        children: Array.from(t).map((e) =>
            (0, a.jsx)(iY.Ay, { tag: e, onRemove: i, size: null == i ? iY.Ay.Sizes.SMALL : iY.Ay.Sizes.MEDIUM }, e.id),
        ),
    });
}
var i1 = n(151582);
function i2(e) {
    let { channel: t } = e,
        n = (0, iX.kt)(t),
        { firstMessage: l } = (0, u.cf)([tJ.A], () => tJ.A.getMessage(t.id)),
        i = new Set((0, iX.zt)(t, n)),
        s = (0, iJ.gU)(t) ?? iZ.ChatIcon,
        r = (0, P.Ay)(t);
    return (0, a.jsxs)(iL.Ay, {
        channelId: t.id,
        className: i1.kL,
        children: [
            (0, a.jsx)("div", { className: i1.P0, children: (0, a.jsx)(s, { className: i1.Kk, strokeWidth: 1.75 }) }),
            (0, a.jsx)(iL.cr, { className: i1.wx, children: r }),
            null == l &&
                (0, a.jsx)(eb.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: eL.intl.string(eL.t.mE3KJN),
                }),
            (0, a.jsx)(i0, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var i3 = n(289873),
    i4 = n(682163),
    i7 = n(513461),
    i5 = n(654265),
    i8 = n(561446),
    i6 = n(881817);
function i9(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, u.bG)([lX.default], () => lX.default.getUser(t.userId));
    return (0, a.jsxs)("div", {
        className: i6.I8,
        children: [
            (0, a.jsxs)("div", {
                className: i6.Ov,
                children: [
                    null != n &&
                        (0, a.jsxs)("div", {
                            className: i6.yB,
                            children: [
                                (0, a.jsx)(i4.Ay, { guild: n, active: !0, size: i4.Ay.Sizes.SMOL, className: i6.$f }),
                                (0, a.jsx)(eO.D, {
                                    variant: "heading-xs/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, a.jsx)(eO.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: eL.intl.format(eL.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== i7.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === i7.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("hr", { className: i6.g2 }),
                            (0, a.jsxs)("div", {
                                className: i6.fs,
                                children: [
                                    (0, a.jsx)(eb.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, a.jsx)(eb.E, { variant: "body-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function se(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, i5.A)(t.id);
    return (0, a.jsx)(iL.Ay, {
        channelId: t.id,
        className: i6.kL,
        children:
            null != l && null != l.formResponses
                ? (0, a.jsxs)("div", {
                      className: i6.KJ,
                      children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(i9, { guild: i, joinRequest: l }) }),
                          (0, a.jsx)(i8.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, a.jsx)(i3.y, {})
                  : null,
    });
}
var st = n(825484),
    sn = n(241541),
    sl = n(571694),
    si = n(922301),
    ss = n(16371),
    sa = n(598104),
    sr = n(396787),
    so = n(117534);
function sc(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, a.jsx)(eE.m, {
              position: "bottom",
              text: eL.intl.string(eL.t["0qPSMV"]),
              children: (0, a.jsxs)(ex.D, {
                  className: c()(so.e, l),
                  onClick: () => (0, sr.jv)(t.id, s),
                  children: [
                      n,
                      (0, a.jsx)("div", {
                          className: so.Z,
                          children: (0, a.jsx)(tw.PencilIcon, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)("div", { className: l, children: n });
}
var sd = n(73028),
    su = n(753190),
    sh = n(151440);
function sm(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, u.bG)([j.Ay], () => j.Ay.useReducedMotion),
        o = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: h,
        } = (0, lN.A)({ userId: i?.id, size: lv._3.SIZE_80, animateOnHover: !0 }),
        [m, g] = r.useState(!1),
        p = r.useCallback(() => {
            (d.onMouseEnter(), g(!0));
        }, [d]),
        A = r.useCallback(() => {
            (d.onMouseLeave(), g(!1));
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, a.jsxs)(iL.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && h),
            n.isMultiUserDM()
                ? (0, a.jsx)(sc, {
                      channel: n,
                      editable: !0,
                      location: iG.A.EMPTY_GROUP_DM,
                      children: (0, a.jsx)(sa.A, { channel: n, size: lv._3.SIZE_80, animated: t, "aria-label": o }),
                  })
                : (0, a.jsx)(lT.eu, {
                      "aria-label": o,
                      size: lv._3.SIZE_80,
                      src: (0, sl.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, a.jsx)(iL.cr, {
                children: f
                    ? (0, a.jsx)(ss.A, {
                          userName: o,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: m ? si.G.ANIMATED : si.G.STATIC,
                          loop: !0,
                      })
                    : o,
            }),
            (0, a.jsx)(iL.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, a.jsxs)(st.e, {
                    className: sh.U,
                    children: [
                        (0, a.jsx)(su.NE, { channel: n, text: eL.intl.string(eL.t.NB5DFD), icon: sn.GroupPlusIcon }),
                        (0, a.jsx)(ew.$, {
                            icon: tw.PencilIcon,
                            variant: "secondary",
                            text: eL.intl.string(eL.t["5Q9+/L"]),
                            "aria-label": eL.intl.string(eL.t["5Q9+/L"]),
                            onClick: () => (0, sd.U)(n.id, iG.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var sg = n(136722),
    sp = n(342952),
    sA = n(177953),
    sf = n(725570),
    sC = n(435183),
    sE = n(155718),
    sx = n(685374),
    sI = n(63104),
    sS = n(597367);
function sy(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: r } = e;
    return (
        (t = i
            ? (0, a.jsx)(sI.A, { size: 12, color: s, className: sS.TS })
            : (0, a.jsx)("div", { className: sS.yY, style: { backgroundColor: s } })),
        (0, a.jsxs)("div", { className: c()(n, sS.JC), style: { "--custom-role-label-color": s }, children: [t, r, l] })
    );
}
var sb = n(727419),
    s_ = n(46054),
    sj = n(34457),
    sv = n(317525),
    sT = n(488926),
    sN = n(869685);
function sM(e) {
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
        className: c()(t, sN.x6, { [sN.r9]: r }),
        onClick: r ? void 0 : s,
        "aria-disabled": r,
        role: "button",
        children: (0, a.jsx)(sy, {
            className: sN.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, a.jsx)(eU.XSmallIcon, {
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
var sR = n(314040),
    sD = n(165648);
function sk(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        o = (0, u.bG)([sv.A], () => (null != s ? sv.A.getSortedRoles(s) : void 0)),
        d = (0, u.bG)([lX.default, t7.A], () => lX.default.getUser(t7.A.getGuild(s)?.ownerId)),
        h = r.useMemo(() => (null != o ? o.filter((e) => !(0, sj.Oy)(e)) : []), [o]),
        m = r.useMemo(
            () =>
                lr()(h)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sT.aH({ forceRoles: { [e.id]: e }, context: t });
                        return sg.X8(n, sg.kg(en.xBc.ADMINISTRATOR, en.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, h],
        ),
        g = (0, u.yK)(
            [lX.default],
            () => {
                let e = {};
                for (let n of (null != d && (e[d.id] = d), Object.values(t.permissionOverwrites))) {
                    if (n.type !== sE.r2.MEMBER || null != e[n.id]) continue;
                    let t = lX.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return lr()(e)
                    .filter((e) => {
                        let n = sT.$3({ permission: en.xBc.ADMINISTRATOR, user: e, context: t }),
                            l = t.permissionOverwrites[e.id] ?? sT.x3,
                            i = sg.zy(l.allow, en.xBc.VIEW_CHANNEL);
                        return n || i;
                    })
                    .value();
            },
            [t, d],
        ),
        p = tA.A.can(en.xBc.MANAGE_CHANNELS, t) || tA.A.can(en.xBc.MANAGE_ROLES, t),
        A = (0, u.bG)([t7.A, tA.A], () => {
            let e = t7.A.getGuild(s);
            return null != e && tA.A.canAccessGuildSettings(e) && tA.A.canAccessMemberSafetyPage(e);
        }),
        f = r.useCallback(() => l(!1), []);
    return (0, a.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iL.WK, { locked: !0, channelType: t.type }),
            (0, a.jsx)(iL.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: i }) }),
            (0, a.jsx)(iL.j1, {
                className: sD.PT,
                children: eL.intl.format(eL.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => s_.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, a.jsxs)("div", {
                      className: sR.$x,
                      children: [
                          (0, a.jsx)(ew.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eL.intl.string(eL.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sA.GroupIcon,
                          }),
                          (0, a.jsx)(ew.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eL.intl.string(eL.t["3gUsJb"]),
                              onClick: function () {
                                  sC.Ay.open(t.id);
                              },
                              icon: tw.PencilIcon,
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: sR.ol,
                children: [
                    (function () {
                        if (1 !== g.length || m.length > 0)
                            return (0, a.jsx)(sp.A, { guildId: t.guild_id, className: sR.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = n5.Ay.getName(e);
                        return (0, a.jsxs)("div", {
                            className: sR.HD,
                            children: [
                                (0, a.jsx)(lT.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lv._3.SIZE_24,
                                }),
                                (0, a.jsx)(eb.E, {
                                    tag: "span",
                                    className: sR.Jk,
                                    variant: "body-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, a.jsx)(eb.E, {
                                    tag: "span",
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    children: eL.intl.string(eL.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    m.map((e, n) => {
                        let l = e.colorString ?? en.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return A
                            ? (0, a.jsx)(
                                  sM,
                                  {
                                      className: c()(sR.JC, { [sR.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: i,
                                      onClick: () => {
                                          (sb.A.open(t.guild_id, en.BEX.MEMBERS), sb.A.selectRole(e.id));
                                      },
                                  },
                                  e.id,
                              )
                            : (0, a.jsx)(
                                  sy,
                                  {
                                      className: c()(sR.JC, { [sR.HV]: n === m.length - 1 }),
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
                ? (0, a.jsx)(sf.aF, {
                      renderModal: (e) =>
                          (0, a.jsx)(sx.default, { ...e, onClose: () => (f(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sL = n(270171);
function sP(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, u.bG)([tA.A], () => tA.A.can(en.xBc.MANAGE_CHANNELS, t) && i$.bk.has(t.type));
    return (0, a.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iL.WK, { channelType: t.type }),
            (0, a.jsx)(iL.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: n }) }),
            (0, a.jsx)(iL.j1, {
                className: sD.PT,
                children: eL.intl.format(eL.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => s_.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, a.jsx)("div", {
                      className: sL.U,
                      children: (0, a.jsx)(ew.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eL.intl.string(eL.t["3gUsJb"]),
                          onClick: () => {
                              sC.Ay.open(t.id);
                          },
                          icon: tw.PencilIcon,
                      }),
                  })
                : null,
        ],
    });
}
var sO = n(909833);
function sG(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, a.jsx)("div", { style: { marginTop: -8 } })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(eb.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      children: (0, a.jsx)("div", {
                          className: sO.VA,
                          children: eL.intl.format(eL.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, a.jsx)(
                                      iB,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, a.jsx)("span", {
                                              className: c()(sO.eM, sO.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === en.rbe.PRIVATE_THREAD
                      ? (0, a.jsx)(eb.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eL.intl.string(eL.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sU(e) {
    let { channel: t } = e,
        n = (0, iJ.gU)(t) ?? tG.ThreadIcon,
        l = (0, P.Ay)(t);
    return (0, a.jsxs)(iL.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", { className: sO.P0, children: (0, a.jsx)(n, { className: sO.Kk }) }),
            (0, a.jsx)(iL.cr, { children: l }),
            (0, a.jsx)(sG, { channel: t }),
        ],
    });
}
var sw = n(302125),
    sF = n(321404),
    sH = n(957283),
    sB = n(436726);
function sK() {
    return (0, a.jsx)("div", {
        className: sB.k,
        children: (0, a.jsx)(eb.E, {
            variant: "body-md/normal",
            color: "text-muted",
            className: sB.Q,
            children: eL.intl.string(eL.t.eeJvfA),
        }),
    });
}
var sV = n(959698),
    sz = n(189213),
    sW = n(933958),
    s$ = n(988534),
    sq = n(851767);
function sZ(e) {
    return (0, u.bG)([sq.A], () => (null !== e ? sq.A.getUserProfile(e ?? "")?.application : void 0)) ?? void 0;
}
var sJ = n(260498),
    sX = n(5960),
    sY = n(32639),
    sQ = n(712440),
    s0 = n(733110),
    s1 = n(543465),
    s2 = n(308528),
    s3 = n(928658),
    s4 = n(978914),
    s7 = n(977347);
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
                    (l = (0, u.bG)([nv.A], () => nv.A.getRelationshipType(t), [t])) === en.eA$.NONE ||
                    l === en.eA$.BLOCKED ||
                    l === en.eA$.PENDING_INCOMING,
                s = sZ(n ? t : null),
                a = !0 === (0, sX.A)(n ? (s?.id ?? t) : null, n),
                r = n ? !a : i,
                o = (0, s7.D)(e.id, t),
                { message: c, loaded: d, error: h } = (0, s4.I)(e, { enabled: r }),
                m = o ?? (c?.author?.id === t ? c : null);
            return { message: m, isReportable: r, isLoaded: null != m || d || h };
        })(t, n.id, l),
        { channelId: c } = (0, sH.N)(),
        d = t.id === c,
        h = !nn.Fr && !d,
        m = r.useCallback(() => {
            null != i &&
                (0, s3.b8)(i, () => {
                    s2.A.closePrivateChannel(t.id, h);
                });
        }, [t.id, i, h]);
    return !s || (null == i && o)
        ? null
        : (0, a.jsx)(ew.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: m,
              text: eL.intl.string(eL.t.HHZmDn),
          });
}
var s8 = n(191850);
function s6(e) {
    let { channel: t } = e,
        l = (0, u.bG)([s1.Ay], () => s1.Ay.isChannelMuted(null, t.id));
    return (0, a.jsx)(ew.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eL.intl.string(eL.t.YqAjXy) : eL.intl.string(eL.t.w4m945),
        onClick: function () {
            (0, iu.mM)(async () => {
                let { default: e } = await n.e(499312).then(n.bind(n, 259763));
                return (n) => (0, a.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function s9(e) {
    let { application: t, project: n } = e;
    return (0, a.jsx)(ew.$, {
        variant: "secondary",
        text: eL.intl.string(s8.default.jMMrDM),
        onClick: () => (0, sY.A)(n, t.id),
    });
}
function ae(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, u.bG)([sW.Ay], () => sW.Ay.getSelfEmbeddedActivities());
    function s() {
        sQ.A.delete(l.id);
        let e = i.get(n.id);
        null != e && (0, s$.d)({ location: e.location, applicationId: n.id });
    }
    return (0, a.jsx)(ew.$, {
        variant: "secondary",
        text: eL.intl.string(eL.t.xUqheM),
        onClick: () => {
            ((0, iu.qf)((e) =>
                (0, a.jsx)(sz.a, {
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
                t5.default.track(en.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                }));
        },
    });
}
function at(e) {
    var t, n;
    let l,
        i,
        { channel: s, user: o } = e,
        c = sZ(o?.id ?? ""),
        { authorizedAppToken: d, authorizedAppsFetchState: h } = (0, u.cf)([s0.A], () => ({
            authorizedAppToken: s0.A.getNewestTokenForApplication(c?.id),
            authorizedAppsFetchState: s0.A.getFetchState(),
        })),
        { isOwned: m, project: g } =
            ((t = c?.id),
            (n = o.bot),
            (l = (0, sX.A)(t, n)),
            (i = (0, u.bG)([sJ.Ay], () => (!0 === l && null != t ? sJ.Ay.findProjectByApplicationId(t) : null), [
                l,
                t,
            ])),
            { isOwned: l, project: i });
    return (r.useEffect(() => {
        o.bot && h === s0.FetchState.NOT_FETCHED && sQ.A.fetch();
    }, [o.bot, h]),
    o.bot && null != c && (null != d || null != g))
        ? (0, a.jsxs)(st.e, {
              size: "sm",
              children: [
                  (0, a.jsx)(s6, { channel: s }),
                  null != g
                      ? (0, a.jsx)(s9, { application: c, project: g })
                      : null != d && !1 === m
                        ? (0, a.jsx)(ae, { application: c, channel: s, oauth2Token: d })
                        : null,
                  (0, a.jsx)(s5, { channel: s, user: o }),
              ],
          })
        : (0, a.jsx)(st.e, { size: "sm", children: (0, a.jsx)(s5, { channel: s, user: o }) });
}
var an = n(692617),
    al = n(917445),
    ai = n(100663),
    as = n(518477),
    aa = n(976926);
function ar(e) {
    let { userId: t, channelId: n, showDivider: l = !1, compact: i = !1 } = e,
        s = (0, u.bG)([sq.A], () => sq.A.getMutualGuilds(t), [t]),
        o = lX.default.getUser(t);
    r.useEffect(() => {
        null == s && null != o && (0, al.A)(t, o.getAvatarURL(null, 80), { withMutualGuilds: !0 });
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
              className: c()(aa.kL, l ? aa.yF : null),
              children: (0, a.jsx)(eb.E, {
                  color: "text-default",
                  variant: "body-sm/normal",
                  children: eL.intl.string(eL.t.zjVh8h),
              }),
          })
        : (0, a.jsxs)(ex.D, {
              className: c()(aa.kL, aa.vk, { [aa.yF]: l }),
              onClick: function () {
                  (0, ai.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: as.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iG.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, a.jsx)(an.A, {
                      guilds: d,
                      maxGuilds: 3,
                      size: i ? i4.Ay.Sizes.SMOL : i4.Ay.Sizes.SMALLER,
                      hideOverflowCount: !0,
                  }),
                  (0, a.jsx)(eb.E, {
                      className: aa.NI,
                      variant: "body-sm/normal",
                      children: eL.intl.format(eL.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var ao = n(49229),
    ac = n(327166),
    ad = n(390848),
    au = n(156328);
function ah(e) {
    let { userId: t } = e;
    return (0, a.jsx)(ew.$, {
        size: "sm",
        variant: "secondary",
        onClick: async function () {
            (await ao.A.blockUser(t, { location: en.liQ.DM_CHANNEL }), ig.A.showBlockSuccessToast(t));
        },
        text: eL.intl.string(eL.t.l4Emac),
    });
}
function am(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, ac.D)(t, i),
        r = (0, u.bG)([nv.A], () => nv.A.getRelationshipType(t), [t]),
        o = (0, u.bG)([nv.A], () => nv.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, ad.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: en.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, a.jsx)(ew.$, {
              variant: l,
              onClick: function () {
                  r === en.eA$.PENDING_INCOMING
                      ? c()
                      : ao.A.addRelationship({ userId: t, context: { location: en.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function ag(e) {
    let { userId: t } = e;
    return (0, a.jsx)(ew.$, {
        variant: "secondary",
        onClick: function () {
            ao.A.removeFriend(t, { location: en.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.cvSt1J),
    });
}
function ap(e) {
    let { userId: t } = e;
    return (0, a.jsx)(ew.$, {
        variant: "secondary",
        onClick: function () {
            ao.A.unblockUser(t, { location: en.liQ.DM_CHANNEL });
        },
        text: eL.intl.string(eL.t.XyHpKH),
    });
}
function aA(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, u.bG)([nv.A], () => nv.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, ad.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: en.liQ.DM_CHANNEL,
        });
    return (0, a.jsxs)("div", {
        className: au.K,
        children: [
            (0, a.jsx)(eb.E, {
                color: "text-default",
                variant: "body-sm/normal",
                children: eL.intl.format(eL.t.uIomXw, { username: n5.Ay.getName(n) }),
            }),
            (0, a.jsxs)(st.e, {
                size: "sm",
                children: [
                    (0, a.jsx)(ew.$, { variant: "primary", onClick: s, text: eL.intl.string(eL.t["+WbSn5"]) }),
                    (0, a.jsx)(ew.$, {
                        variant: "secondary",
                        onClick: function () {
                            ao.A.cancelFriendRequest(n.id, { location: en.liQ.DM_CHANNEL });
                        },
                        text: eL.intl.string(eL.t.rQSndv),
                    }),
                    (0, a.jsx)(ah, { userId: n.id }),
                    l ? null : (0, a.jsx)(s5, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function af(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: r,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, u.bG)([nv.A], () => nv.A.getRelationshipType(l.id), [l.id]);
    if (c === en.eA$.PENDING_INCOMING && !o) return (0, a.jsx)(aA, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case en.eA$.NONE:
        case en.eA$.PENDING_INCOMING:
            l.bot || (t = (0, a.jsx)(am, { userId: l.id, showingBanner: i, variant: s, label: r }));
            break;
        case en.eA$.FRIEND:
            t = (0, a.jsx)(ag, { userId: l.id });
            break;
        case en.eA$.BLOCKED:
            t = (0, a.jsx)(ap, { userId: l.id });
            break;
        case en.eA$.PENDING_OUTGOING:
            t = (0, a.jsx)(ew.$, { variant: "primary", disabled: !0, text: eL.intl.string(eL.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== en.eA$.BLOCKED;
    return (0, a.jsxs)(st.e, {
        size: "sm",
        children: [t, d ? (0, a.jsx)(ah, { userId: l.id }) : null, i ? null : (0, a.jsx)(s5, { channel: n, user: l })],
    });
}
var aC = n(190857),
    aE = n(138298),
    ax = n(799704);
function aI(e) {
    let { channel: t, user: n } = e,
        l = r.useCallback(() => {
            (0, ej.P0)({ text: eL.intl.string(eL.t.a2j0hv), variant: "critical" });
        }, []),
        i = r.useCallback(() => {
            aE.A.closeChannelSidebar(ax.fe);
        }, []),
        s = r.useCallback(() => {
            aE.A.closeChannelSidebar(ax.fe);
        }, []),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, aC.t)({ user: lX.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, a.jsxs)(st.e, {
        size: "sm",
        children: [
            (0, a.jsx)(ew.$, {
                variant: "primary",
                disabled: g,
                onClick: () => o(t.id),
                loading: d,
                text: eL.intl.string(eL.t.Kz8Pwr),
            }),
            (0, a.jsx)(ew.$, {
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
var aS = n(693833);
function ay(e) {
    var t;
    let n,
        { channel: l, user: i, showingBanner: s } = e,
        { channelId: r } = (0, sH.N)(),
        o = (0, u.bG)([nv.A], () => nv.A.getRelationshipType(i.id), [i.id]),
        c = l.id === r,
        d = (0, sF.c)(l.id),
        h =
            ((t = l.id),
            (0, u.bG)(
                [ep.A],
                () => {
                    var e;
                    return (e = ep.A.getMessages(t)).ready && 0 === e.length && !e.hasMoreBefore && !e.hasMoreAfter;
                },
                [t],
            )),
        m = !0 === i.bot,
        g = i.isNonUserBot(),
        p = (0, sV.U)(),
        A = aS.n;
    return (
        g
            ? (n = null)
            : p
              ? ((n = (0, a.jsx)(af, {
                    channel: l,
                    user: i,
                    showingBanner: s,
                    addFriendVariant: "active",
                    addFriendLabel: eL.intl.string(eL.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (A = aS.O))
              : c && d
                ? (n = (0, a.jsx)(aI, { channel: l, user: i }))
                : m
                  ? (n = (0, a.jsx)(at, { channel: l, user: i }))
                  : ((n = (0, a.jsx)(af, { channel: l, user: i, showingBanner: s })),
                    o === en.eA$.PENDING_INCOMING && (A = aS.O)),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: A,
                    children: [
                        (0, a.jsx)(ar, { userId: i.id, channelId: l.id, showDivider: A !== aS.O, compact: p }),
                        n,
                    ],
                }),
                d && h ? (0, a.jsx)(sK, {}) : null,
            ],
        })
    );
}
var ab = n(746080),
    a_ = n(221851);
function aj(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iR.Ae)(n),
        i = (0, u.bG)([iq.A], () => null != n.guild_id && n === iq.A.getDefaultChannel(n.guild_id), [n]);
    if ((0, iD.A)(n.id)) return null;
    if (n.isForumPost()) return (0, a.jsx)(i2, { channel: n });
    if (n.isMediaThread()) return (0, a.jsx)(iz, { channel: n });
    if (i$.Le.has(n.type)) return (0, a.jsx)(sU, { channel: n });
    if (i) return (0, a.jsx)(sw.A, { channel: n });
    else if (l) return (0, a.jsx)(sk, { channel: n });
    return (0, a.jsx)(sP, { channel: n });
}
function av(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, u.bG)([lX.default], () => (t.isPrivate() ? lX.default.getUser(t.getRecipientId()) : null)),
        r = n5.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, u.cf)([tA.A], () => ({
            canManageRoles: tA.A.can(en.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: tA.A.can(en.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, a.jsx)(sm, { channel: t, children: eL.intl.string(eL.t.Rzvnig) });
    if (i === en.rbe.DM)
        return (0, a.jsxs)(sm, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, a.jsx)(eO.D, { variant: "heading-xl/medium", className: a_.SX, children: r }),
                eL.intl.format(eL.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, a.jsx)(iW.Y, { userId: s.id }) : null,
                null != s ? (0, a.jsx)(ay, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, a.jsxs)(iL.Ay, {
                channelId: t.id,
                children: [
                    (0, a.jsx)(iL.cr, { children: eL.intl.format(eL.t.I3R7Vn, { channelName: l }) }),
                    (0, a.jsx)(iL.j1, { children: eL.intl.string(eL.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(ab.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, a.jsx)(se, { channel: t });
        else return (0, a.jsx)(sm, { channel: t, children: eL.intl.format(eL.t.MFwcqO, { name: l }) });
    return c
        ? (0, a.jsx)(aj, { channel: t, canManageRoles: o })
        : (0, a.jsx)(iL.Ay, {
              channelId: t.id,
              children: (0, a.jsx)(iL.j1, { children: eL.intl.format(eL.t.hPVEQG, { channelName: l }) }),
          });
}
var aT = n(506774),
    aN = n(933832),
    aM = n(782603),
    aR = n(408278),
    aD = n(763175),
    ak = n(56562),
    aL = n(765671),
    aP = n(304072),
    aO = n(265072),
    aG = n(164636),
    aU = n(696986),
    aw = n(147036),
    aF = n(975571),
    aH = n(36491),
    aB = n(953727);
function aK(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, aB.A)(l),
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
var aV = n(201001);
function az(e) {
    let { threadId: t } = e,
        n = (0, aG.bG)([e4.A], () => e4.A.getChannel(t)),
        l = (0, aG.bG)([e4.A], () => e4.A.getChannel(n?.parent_id)),
        i = r.useCallback(() => {
            null != n &&
                null != l &&
                ((0, io.zV)(en.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, eR.C)((0, aw.af)(n, l)));
        }, [n, l]);
    return (0, a.jsxs)("div", {
        className: aV.BQ,
        children: [
            (0, a.jsx)(aK, {}),
            (0, a.jsxs)("div", {
                className: aV.BB,
                children: [
                    (0, a.jsx)(eb.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: eL.intl.string(eL.t["5uAO7d"]),
                    }),
                    (0, a.jsx)(eb.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t.WnfPV3, {
                            helpArticleUrl: aF.A.getCreatorSupportArticleURL(en.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, a.jsx)(aU.h, { size: 4 }),
                    (0, a.jsx)(ew.$, {
                        text: eL.intl.string(eL.t.C5UQC9),
                        variant: "primary",
                        icon: eN.LinkIcon,
                        onClick: i,
                    }),
                ],
            }),
            (0, a.jsx)(ex.D, {
                className: aV.b,
                onClick: function () {
                    (0, aH.sF)(t);
                },
                "aria-label": eL.intl.string(eL.t["0+xZH0"]),
                children: (0, a.jsx)(eU.XSmallIcon, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var aW = n(505527),
    a$ = n(467073),
    aq = n(960538),
    aZ = n(604121),
    aJ = n(31717),
    aX = n(988904);
function aY() {
    return n
        .e(515423)
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function aQ(e) {
    return (
        v.h.subscribe("DRAFT_CHANGE", e),
        v.h.subscribe("DRAFT_SAVE", e),
        v.h.subscribe("DRAFT_CLEAR", e),
        () => {
            (v.h.unsubscribe("DRAFT_CHANGE", e), v.h.unsubscribe("DRAFT_SAVE", e), v.h.unsubscribe("DRAFT_CLEAR", e));
        }
    );
}
let a0 = r.memo(function (e) {
    var t;
    let { channel: n, isLastItem: l } = e,
        i = (0, u.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, u.bG)([tA.A], () => tA.A.can(en.xBc.SEND_MESSAGES_IN_THREADS, n)),
        o = (0, tu.s5)(n),
        c = (0, u.bG)([ec.default], () => ec.default.getId()),
        d = ((t = n.id), r.useSyncExternalStore(aQ, () => "" !== aJ.A.getDraft(t, aJ.C.ChannelMessage)));
    return l
        ? !s || o || d || n.ownerId === c
            ? null
            : (0, a.jsxs)("div", {
                  className: aX.aP,
                  children: [
                      (0, a.jsx)(aZ.a, { importData: aY, shouldAnimate: !i, className: aX.lY, loop: 2 }),
                      (0, a.jsxs)("div", {
                          className: aX.FS,
                          children: [
                              (0, a.jsx)(eO.D, {
                                  variant: "heading-sm/semibold",
                                  children: eL.intl.string(eL.t.OmBThA),
                              }),
                              (0, a.jsx)(eb.E, {
                                  variant: "body-sm/normal",
                                  color: "text-default",
                                  children: eL.intl.string(eL.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
        : (0, a.jsx)("div", { className: aX.yF });
});
var a1 = n(367790),
    a2 = n(30492),
    a3 = n(226698),
    a4 = n(374710),
    a7 = n(715757),
    a5 = n(390897),
    a8 = n(862482),
    a6 = n(215026),
    a9 = n(778858),
    re = n(964486),
    rt = n(351001),
    rn = n(400528);
function rl(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, a.jsx)(eE.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, a.jsx)(aR.K, {
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
var ri = n(307805),
    rs = n(145530),
    ra = n(905499),
    rr = n(406810),
    ro = n(991982),
    rc = n(838111),
    rd = n(870136);
function ru(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        o = s?.reported_user_id,
        c = (0, u.bG)([lX.default], () => (null != o ? lX.default.getUser(o) : null)),
        d = (0, u.bG)([t7.A], () => t7.A.getGuild(t.guild_id));
    (0, a7.ml)(l);
    let h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, u.bG)([rn.A], () => null != l && rn.A.isUserBanned(l.id)),
                o = null != l && null == s,
                [c, d] = r.useState(o),
                h = (0, u.bG)([tA.A], () => null != l && null != i && (0, rt.fJ)(l, i, [tA.A]));
            if (
                ((0, re.Ay)(() => {
                    o && a9.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !h)
            )
                return null;
            let m = !0 === s ? eL.intl.string(ri.default.dpfwQ1) : eL.intl.string(ri.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, a.jsx)(
                rl,
                {
                    text: m,
                    icon: a6.HammerIcon,
                    onClick: function () {
                        null != l &&
                            (0, iu.mM)(async () => {
                                let { default: e } = await Promise.all([n.e(420282), n.e(802504)]).then(
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
                s = (0, u.bG)([tA.A], () => null != l && null != i && (0, rt.KX)(l, i, [tA.A])),
                r = (0, u.bG)([n7.Ay], () => null == l || null == n7.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = r ? eL.intl.string(ri.default.Ux67nW) : eL.intl.string(ri.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, a.jsx)(
                rl,
                {
                    text: o,
                    icon: ra.UserMinusIcon,
                    onClick: function () {
                        null != l &&
                            (0, iu.mM)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e(921596),
                                    n.e(253335),
                                    n.e(916758),
                                    n.e(947802),
                                    n.e(807476),
                                    n.e(967874),
                                    n.e(202622),
                                    n.e(479971),
                                    n.e(736621),
                                    n.e(376675),
                                    n.e(140243),
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
                    s = (0, u.bG)([tA.A], () => null != n && null != l && (0, rt.Kd)(n, l, [tA.A])),
                    { messageReference: r } = t,
                    o = (0, u.bG)([ep.A], () => (null != r ? ep.A.getMessage(r.channel_id, r.message_id) : null)),
                    c = (0, u.bG)([e4.A], () => (null != o ? e4.A.getChannel(o.channel_id) : null)),
                    d = (0, u.bG)([e4.A], () => e4.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let h = null == o ? eL.intl.string(ri.default["0IZbwC"]) : eL.intl.string(ri.default.Uj6oD4),
                    m = null == o,
                    g = `delete-message-${t.id}`;
                return (0, a.jsx)(
                    rl,
                    {
                        text: h,
                        icon: tK.TrashIcon,
                        onClick: function () {
                            null != c &&
                                null != o &&
                                rs.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
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
                        [lX.default, t7.A, tA.A],
                        () => null != n && null != l && (0, rc.b)(l.id, n.id, [lX.default, t7.A, tA.A]),
                    ),
                    [s, r] = (0, rd.Ay)(n?.id, t.guild_id),
                    o = (0, u.bG)([n7.Ay], () => null != l && null != n && null != n7.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, a.jsx)(
                    rl,
                    {
                        text: r ? eL.intl.string(ri.default["6uMZbv"]) : eL.intl.string(ri.default["Sgg/uI"]),
                        icon: rr.ClockIcon,
                        onClick: function () {
                            null != n && (0, ro.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
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
function rh(e) {
    let { message: t, channel: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, a.jsx)(ru, { channel: n, message: t, snapshot: e }, l)),
    });
}
var rm = n(152007),
    rg = n(7909),
    rp = n(435470),
    rA = n(473503),
    rf = n(853742),
    rC = n(371476),
    rE = n(356974),
    rx = n(65406);
function rI(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, a4.uW)(t),
        [s, o] = r.useState(!1);
    function c() {
        (o(!0),
            a3.A.resolveFlag(t.id).then(() => {
                o(!1);
            }));
    }
    return i
        ? (0, a.jsx)(ew.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eL.intl.string(ri.default["2Y4vkk"]) : eL.intl.string(ri.default.YIbR4r),
              onClick: function () {
                  !0 === aT.w.get(a5.f)
                      ? c()
                      : (0, iu.mM)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, a.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: aN.CheckmarkLargeIcon,
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
        { ref: m, width: g } = (0, aL.Ay)(),
        [p, A] = r.useState(3),
        [f, C] = r.useState(!n),
        [E, x] = (0, aP.A)(!1, 2e3),
        I = (0, u.bG)([e4.A], () => e4.A.getChannel(t), [t]),
        { firstMessage: S } = (0, rA.OA)(I),
        b = (0, u.bG)([rm.A], () => rm.A.hasJoined(t)),
        { disableReactionUpdates: _, disableReactionCreates: j, isLurking: v, isPendingMember: T } = (0, a$.A)(I),
        N = (0, a7.W1)(I),
        M = (0, u.bG)([e4.A], () => e4.A.getChannel(i)),
        R = (0, rp.Ck)(M),
        D = (0, u.bG)([aO.A], () => aO.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
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
        null == I)
    )
        return null;
    let L = null != S && S.reactions.length > 0;
    function P() {
        null != I &&
            ((0, rf.jC)({ postId: I.id, location: { section: en.JJy.CHANNEL_HEADER } }),
            (0, eR.C)((0, aw.af)(I, M), () => x(!0)));
    }
    let O = b ? aN.CheckmarkLargeIcon : aM.BellIcon;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: c()(rC.kL, { [rC.wx]: f }, h),
                ref: m,
                children: [
                    N
                        ? (0, a.jsx)("div", {
                              className: rC.kX,
                              children: null != S && (0, a.jsx)(rh, { message: S, channel: I }),
                          })
                        : (0, a.jsx)("div", {
                              className: rC.hY,
                              children:
                                  null != S &&
                                  (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          !L &&
                                              !j &&
                                              null != R &&
                                              (0, a.jsx)("div", {
                                                  className: rE.reactions,
                                                  children: (0, a.jsx)(a2.q, {
                                                      message: S,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: v,
                                                      isPendingMember: T,
                                                      emoji: R,
                                                      type: aW.v6.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, a.jsx)(a1.A, {
                                              message: S,
                                              channel: I,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: _,
                                              isLurking: v,
                                              isPendingMember: T,
                                              maxReactions: p,
                                              className: rC.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !j &&
                                              (0, a.jsx)(aq.t, {
                                                  message: S,
                                                  channel: I,
                                                  useChatFontScaling: !1,
                                                  className: c()(rx.secondary, rC.vU, rE.visible, { [rC.w$]: !L }),
                                                  isForumToolbar: !0,
                                                  children: !L && eL.intl.string(eL.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, a.jsxs)("div", {
                        className: rC.Uo,
                        children: [
                            N
                                ? (0, a.jsx)(rI, { channel: I })
                                : !v &&
                                  (!o || b) &&
                                  (!d || !b) &&
                                  (0, a.jsx)(eE.m, {
                                      text: eL.intl.string(eL.t.F7oeDv),
                                      children: (0, a.jsx)(ew.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: b ? eL.intl.string(eL.t["7OkUzs"]) : eL.intl.string(eL.t["3aOv+h"]),
                                          onClick: function () {
                                              null != I &&
                                                  (b
                                                      ? rg.A.leaveThread(I, "Forum Toolbar")
                                                      : rg.A.joinThread(I, "Forum Toolbar"));
                                          },
                                      }),
                                  }),
                            (0, a.jsx)(eE.m, {
                                text: eL.intl.string(eL.t.WqhZss),
                                children: E
                                    ? (0, a.jsx)(ew.$, {
                                          icon: aN.CheckmarkLargeIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eL.intl.string(eL.t.t5VZ88),
                                      })
                                    : (0, a.jsx)(aR.K, {
                                          icon: eN.LinkIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eL.intl.string(eL.t.WqhZss),
                                      }),
                            }),
                            f &&
                                (0, a.jsx)(eE.m, {
                                    text: eL.intl.string(eL.t.nFP4oa),
                                    children: (0, a.jsx)(aR.K, {
                                        icon: aD.ArrowLargeUpIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: function () {
                                            null != I &&
                                                y.A.jumpToMessage({
                                                    channelId: I.id,
                                                    messageId: I.id,
                                                    flash: !0,
                                                    jumpType: ak.vx.INSTANT,
                                                });
                                        },
                                        "aria-label": eL.intl.string(eL.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, a.jsx)(az, { threadId: t }),
            !s && (0, a.jsx)(a0, { channel: I, isLastItem: l }),
        ],
    });
}
var ry = n(95362),
    rb = n(80682),
    r_ = n(656941),
    rj = n(983851),
    rv = n(104171),
    rT = n(262763),
    rN = n(499211),
    rM = n(495867),
    rR = n(977997),
    rD = n(607567),
    rk = n(917592),
    rL = n(354817),
    rP = n(477569);
function rO(e) {
    let { channel: t, className: n } = e,
        l = (0, tu._M)(t),
        i = (0, tu.gZ)(t),
        s = (0, u.bG)([rR.A], () => rR.A.isInChannel(t.id)),
        o = (0, u.bG)([rD.Ay], () => rD.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: d } = (0, rN.A)(t.id),
        h = (0, u.bG)([rM.A], () => (rM.A.getChannelId() === t.id ? rM.A.getState() : en.S7L.RTC_DISCONNECTED), [t.id]),
        m = r.useCallback(() => {
            rT.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: d, locked: !1 });
        }, [t, s, d]),
        g = r.useMemo(() => o.map((e) => e.user.id), [o]),
        p = (0, rp.$I)(t, g),
        A = p.length > 0,
        { connectionStatusText: f } = rk.A.getStatus(h, !1);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(eE.m, {
                text: i ? (l ? void 0 : eL.intl.string(rL.default.yaoRu1)) : eL.intl.string(rL.default.yBjQ3q),
                caretConfig: { position: "bottom", align: "start" },
                align: "left",
                children: (0, a.jsxs)(ex.D, {
                    className: c()(rP.Xt, l ? null : rP.tW),
                    onClick: l ? m : void 0,
                    children: [
                        (0, a.jsx)(rj.VoiceNormalIcon, {
                            size: "refresh_sm",
                            color: s ? W.A.colors.STATUS_POSITIVE : W.A.colors.ICON_MUTED,
                        }),
                        (0, a.jsx)(eb.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            className: rP.Gp,
                            children: h === en.S7L.RTC_DISCONNECTED ? eL.intl.string(rL.default.ficpp7) : f,
                        }),
                    ],
                }),
            }),
            A
                ? (0, a.jsx)(rv.Ay, {
                      className: rP.L_,
                      guildId: t.guild_id,
                      users: p,
                      size: rv.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var rG = n(950490);
function rU(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, iX.kt)(l),
        o = (0, lB.IO)(l),
        c = t?.author.id,
        d = (0, r.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, rb.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, a.jsxs)("div", {
            className: rG.TX,
            children: [
                (0, a.jsxs)(ry.Ar, {
                    children: [
                        null != t
                            ? (0, a.jsx)("ol", {
                                  children: (0, a.jsx)(n$, {
                                      className: rG.iU,
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
                            className: rG.iQ,
                            children: [
                                null == t &&
                                    (0, a.jsx)(eb.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: eL.intl.string(eL.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, a.jsx)("div", {
                                        className: rG.GA,
                                        children: s.map((e) =>
                                            (0, a.jsx)(iY.Ay, { tag: e, size: iY.Ay.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, a.jsx)(r_.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, a.jsx)("div", { className: rG.b1 }),
                                (0, a.jsx)(rS, {
                                    className: rG.Jr,
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
                                            (0, a.jsx)("div", { className: rG.b1 }),
                                            (0, a.jsx)(rO, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: rG.ld }),
            ],
        })
    );
}
var rw = n(640708),
    rF = n(378570),
    rH = n(452082),
    rB = n(327337);
function rK(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = r.useCallback(() => {
            (0, iC.xi)(t, [l]);
        }, [t, l]),
        o = (0, u.bG)([nv.A], () => nv.A.isBlocked(i)),
        c = r.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: iE._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    r.useEffect(() => {
        ((0, ix.QF)({ ...c, viewName: ix.gN.SAFETY_WARNING_BANNER }),
            im.A.increment({ name: id.K.SAFETY_WARNING_VIEW }));
    }, [c]);
    let d = r.useCallback(
            (e) => {
                (0, ix._$)({ ...c, cta: e });
            },
            [c],
        ),
        h = r.useCallback(() => {
            ((0, iu.mM)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(456510),
                        n.e(506627),
                        n.e(770940),
                        n.e(302033),
                        n.e(882830),
                        n.e(120884),
                    ]).then(n.bind(n, 556127));
                    return (n) => {
                        let { transitionState: s, onClose: r } = n;
                        return (0, a.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: iE._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: r,
                        });
                    };
                },
                { modalKey: rB.V },
            ),
                d(ix.Wm.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, i, l, d]),
        m = r.useCallback(() => {
            (s(), d(ix.Wm.USER_BANNER_BLOCK_CONFIRM));
        }, [s, d]),
        g = r.useCallback(() => {
            (s(), d(ix.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [s, d]),
        p = r.useCallback(() => {
            (0, iu.mM)(async () => {
                let { default: e } = await Promise.all([n.e(770940), n.e(784938)]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, a.jsx)(e, {
                        transitionState: l,
                        onBlock: m,
                        onBlockAndReport: g,
                        onCancel: () => {
                            (s?.(), d(ix.Wm.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [m, g, i, t, d]);
    return (0, a.jsx)(i_, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: iE._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eL.intl.string(eL.t.ZzlB5p),
        description: eL.intl.string(eL.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eL.intl.string(eL.t.Qyu4UK), variant: "primary", onClick: h },
            ...(o ? [] : [{ text: eL.intl.string(eL.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var rV = n(74114);
function rz(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, u.cf)([nv.A], () => ({ isIgnored: nv.A.isIgnored(t) }), [t]),
        s = r.useCallback(() => {
            ((0, ix._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iE._j.STRANGER_DANGER,
                cta: ix.Wm.USER_MODAL_IGNORE,
            }),
                ao.A.ignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]),
        o = r.useCallback(() => {
            ((0, ix._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iE._j.STRANGER_DANGER,
                cta: ix.Wm.USER_MODAL_UNIGNORE,
            }),
                ao.A.unignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]);
    return (0, a.jsx)(iA.PQ, {
        title: eL.intl.string(eL.t.avyV7P),
        description: eL.intl.string(eL.t.naWE6W),
        buttonText: i ? eL.intl.string(eL.t["3SrzRT"]) : eL.intl.string(eL.t.avyV7P),
        onButtonPress: i ? o : s,
    });
}
function rW(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, u.cf)([nv.A], () => ({ isBlocked: nv.A.isBlocked(i) }), [i]),
        o = r.useCallback(() => {
            (0, iC.xi)(t, [l]);
        }, [t, l]),
        c = (0, rB.eT)(),
        d = r.useCallback(
            (e) => () => {
                (ao.A.blockUser(i, { location: rB.Rx }).then(() => {
                    (ig.A.showBlockSuccessToast(i, t), o());
                }),
                    (0, ix._$)({
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        warningType: iE._j.STRANGER_DANGER,
                        cta: e,
                    }));
            },
            [o, t, l, i],
        );
    function h(e, s, r) {
        (0, iu.mM)(async () => {
            let { default: o } = await Promise.all([n.e(283887), n.e(164501), n.e(826696), n.e(367554)]).then(
                n.bind(n, 219801),
            );
            return (n) =>
                (0, a.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        (r?.(),
                            (0, ix._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iE._j.STRANGER_DANGER,
                                cta: s,
                            }));
                    },
                });
        });
    }
    return (
        r.useEffect(() => {
            ((0, ix.mO)(en.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iE._j.STRANGER_DANGER,
            }),
                im.A.increment({ name: id.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(i_, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iE._j.STRANGER_DANGER,
            header: eL.intl.string(eL.t.iOkDpM),
            description: eL.intl.string(eL.t.ISUbcM),
            onDismiss: o,
            buttons: [
                {
                    text: eL.intl.string(eL.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        ((function e() {
                            (0, iu.mM)(async () => {
                                let { default: s } = await Promise.all([n.e(532648), n.e(482911), n.e(741029)]).then(
                                    n.bind(n, 198916),
                                );
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
                                            (0, a.jsx)(ip.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    rz,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, a.jsx)(
                                                    iA.PQ,
                                                    {
                                                        title: eL.intl.string(eL.t["5QYPO2"]),
                                                        description: eL.intl.string(eL.t.G08MKu),
                                                        buttonText: eL.intl.string(eL.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            (o(),
                                                                h(
                                                                    ix.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    ix.Wm.USER_MODAL_BLOCK_CANCEL,
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
                            (0, ix._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iE._j.STRANGER_DANGER,
                                cta: ix.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eL.intl.string(eL.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => h(ix.Wm.USER_BANNER_BLOCK_CONFIRM, ix.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var r$ = n(306788),
    rq = n(340833),
    rZ = n(913642),
    rJ = n(780061),
    rX = n(670455),
    rY = n(912104);
function rQ(e) {
    let { summary: t, channel: n } = e,
        l = (0, aG.bG)([lW.A], () => lW.A.summaryFeedback(t));
    function i(e, l) {
        (e.stopPropagation(), (0, rJ.A)({ summary: t, channel: n, rating: l }));
    }
    let s = (0, J.p)(
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
                      className: rY.RD,
                      children: (0, a.jsxs)(z.animated.div, {
                          style: e,
                          className: rY.GK,
                          children: [
                              (0, a.jsx)(eb.E, {
                                  variant: "body-xs/medium",
                                  color: "interactive-text-default",
                                  children: eL.intl.string(eL.t["5ZsiE9"]),
                              }),
                              (0, a.jsx)(ex.D, {
                                  onClick: (e) => i(e, rX.P0.GOOD),
                                  children: (0, a.jsx)(rZ.A, { className: rY.O1, width: 12, height: 12 }),
                              }),
                              (0, a.jsx)(ex.D, {
                                  onClick: (e) => i(e, rX.P0.BAD),
                                  children: (0, a.jsx)(rq.A, { className: rY.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function r0(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aG.bG)([lW.A], () => lW.A.selectedSummary(l.id));
    if (null == s) return null;
    let r = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(r$.TopicsIcon, { size: "xs", color: "currentColor", className: rY.cR }),
                      (0, a.jsx)(eb.E, { variant: "body-sm/medium", color: "none", tag: "span", children: n.content }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(rQ, { summary: s, channel: l }),
                      (0, a.jsx)(r$.TopicsIcon, { size: "xs", color: "currentColor", className: rY.Jq }),
                  ],
              })),
        (0, a.jsx)(
            nY.A,
            {
                className: c()(rY.aK, o ? rY.Ke : rY.hO),
                contentClassName: o ? rY.Ew : rY.rD,
                isUnread: r,
                id: r ? nV.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var r1 = n(383233),
    r2 = n(309010),
    r3 = n(675171),
    r4 = n(806621),
    r7 = n(636922),
    r5 = n(857740);
let r8 = r.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = r.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, a.jsx)(ex.D, {
        className: c()(r5.XI, { [r5.Lq]: t }),
        onClick: l,
        "aria-label": eL.intl.string(t ? eL.t.hC8KHg : eL.t.XBlaiC),
        children: (0, a.jsx)(eb.E, {
            variant: "body-sm/normal",
            color: "text-link",
            className: r5.Qq,
            children: t ? eL.intl.string(eL.t.hC8KHg) : eL.intl.string(eL.t.XBlaiC),
        }),
    });
});
var r6 = n(383055),
    r9 = n(330001),
    oe = n(631576),
    ot = n(898578),
    on = n(148355),
    ol = n(845321);
let oi = "749054660769218631";
function os(e) {
    let { channel: t } = e,
        [n, l] = r.useState("");
    r.useEffect(() => {
        (0, oe.zk)("847199849233514549", !0);
    }, []);
    let i = (0, u.bG)(
            [ep.A, ec.default],
            () =>
                !!lr()(ep.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== ec.default.getId() && e.state === en.cmJ.SENT && !(0, e6.A)(e)),
        ),
        s = (0, u.bG)([lX.default], () => lX.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        o = n5.Ay.useName(s) ?? eL.intl.string(eL.t.y1Wu2f),
        c = (0, u.bG)([ot.A], () => ot.A.getStickerById(oi)),
        d = r.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    ((0, r9.W)({ channelId: t.id, source: "In-channel greet" }), await y.A.sendGreetMessage(t.id, oi));
                } catch (e) {
                    e.ok || 429 !== e.status || l(eL.intl.string(eL.t.Whhv4w));
                }
        }, [t.id, n]),
        h = eL.intl.formatToPlainString(eL.t.m0zYbV, { username: o }),
        m =
            null != n && "" !== n
                ? (0, a.jsx)(eb.E, {
                      className: ol.z3,
                      color: "text-feedback-critical",
                      variant: "body-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, a.jsxs)("div", {
              className: ol.ft,
              children: [
                  (0, a.jsxs)(ex.D, {
                      className: null != n && "" !== n ? ol.AO : ol.Iq,
                      "aria-label": eL.intl.string(eL.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, a.jsx)(on.A, { sticker: c, size: 24 }),
                          (0, a.jsx)(eb.E, { className: ol.Qq, variant: "body-md/medium", children: h }),
                      ],
                  }),
                  m,
              ],
          })
        : (0, a.jsxs)("div", {
              className: ol.nj,
              children: [
                  (0, a.jsx)(on.A, { sticker: c, size: 160, className: ol.Xr }),
                  (0, a.jsx)(ew.$, {
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
var oa = n(900210),
    or = n(626360);
function oo(e) {
    return null != e && e.type === en.TZK.MESSAGE && e.content.id === e.groupId;
}
function oc(e) {
    return (
        e.type === en.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === en.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === en.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === en.TZK.MESSAGE_GROUP_SUSPENDED_USER ||
        e.type === en.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS
    );
}
let od = r.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, a.jsx)(r7.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new r1.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: en.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, a.jsx)(iT.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var ou = n(33176);
let oh = { bottom: 16 },
    om = (0, k.P)(x);
function og(e) {
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
            uploads: E,
            hasUnreads: x,
            editingMessageId: T,
            fontSize: N,
            keyboardModeEnabled: M,
            filterAfterTimestamp: R,
            showingQuarantineBanner: D,
            hideSummaries: k = !1,
            jumpBarClassName: L,
            typingGradient: G,
            isGameInvitesPost: U,
        } = e,
        [w, F] = r.useState(lq.A.isAtBottom(m.id) ?? !0),
        H = (0, P.Ay)(m),
        K = (0, l0.I)(f, N),
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
                    let r = s / en.hH7.FONT_SIZE_DEFAULT,
                        o = t ? 26 : 44,
                        c = t ? 26 : 22,
                        d = 0,
                        u = Array(n)
                            .fill(null)
                            .map(() => {
                                let e = lr().random(1, l);
                                return ((d += a * r), (d += o * r), (d += (e - 1) * c * r), e);
                            }),
                        h = u.map((e, t) => t),
                        m = [];
                    for (; m.length < i;) {
                        let e = { width: lr().random(140, 400), height: lr().random(100, 320) };
                        (m.push([h.splice(lr().random(0, h.length - 1), 1)[0], e]), (d += e.height + 6 * r));
                    }
                    return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                })({ compact: f, messageGroups: V, groupRange: 4, attachments: z, fontSize: N, groupSpacing: o }),
            [f, V, z, N, o],
        ),
        $ = (0, u.bG)([lV.A], () =>
            tA.A.can(en.xBc.READ_MESSAGE_HISTORY, m) ? null : lV.A.getViewingRolesTimestamp(m.getGuildId()),
        ),
        q = R ?? $,
        Z = g.hasMoreBefore && null == q,
        J = Z ? W.totalHeight : 0,
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
                { windowId: m } = r.useContext(l9.Ay),
                [g] = r.useState(
                    () =>
                        new ir({
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
            hasUnreads: x,
            focusId: T,
            topPlaceholderHeight: J,
            bottomPlaceholderHeight: X,
            canLoadMore: null == R,
            handleScrollToBottom: r.useCallback(() => F(!0), [F]),
            handleScrollFromBottom: r.useCallback(() => F(!1), [F]),
            additionalMessagePadding: 48,
        }),
        Q = (function (e) {
            let { scrollerRef: t, ...n } = e,
                l = (0, _.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                i = (0, _.A)(() => {
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
                            t.current?.scrollIntoViewNode({ node: i, padding: 64, callback: () => i?.focus() });
                    },
                    [n.keyboardModeEnabled, t],
                ),
                a = r.useCallback(() => {
                    n.hasMoreAfter || eA._.dispatchToLastSubscribed(en.jej.TEXTAREA_FOCUS);
                }, [n.hasMoreAfter]),
                o = (0, l4.Ay)({
                    id: e8.D,
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
            return ((0, lY.Vo)({ event: en.jej.FOCUS_MESSAGES, handler: c }), o);
        })({ scrollerRef: Y.ref, isEditing: null != T, keyboardModeEnabled: M, hasMoreAfter: g.hasMoreAfter }),
        {
            channelStreamMarkup: el,
            newMessagesBar: es,
            jumpToPresentBar: ea,
            forumPostActionBar: er,
            pinnedFirstMessage: eo,
            safetyWarningBanner: ec,
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
                    hasTopPlaceholders: E,
                    showingQuarantineBanner: x,
                    hideSummaries: I,
                    jumpBarClassName: S,
                    isGameInvitesPost: _,
                } = e,
                T = lX.default.getCurrentUser();
            function N() {
                return A.isInitialized() || o.ready;
            }
            let M = (0, r4.r)(s),
                R = m.some((e) => e.type === en.TZK.FORUM_POST_ACTION_BAR),
                D = (0, b.cI)(s),
                k = (0, u.bG)([lW.A], () => lW.A.shouldShowTopicsBar() && !I),
                L = (0, rV.l)(s.id),
                P = (0, rH.j)(s.id, rB.Rx),
                O = (0, ic.E)(s.id),
                G = (0, r3.A)(),
                U = (function (e, t) {
                    if (e.isDM() && null != t)
                        if (t.type === iE._j.STRANGER_DANGER)
                            return (0, a.jsx)(rW, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else if (t.type === iE._j.LIKELY_ATO)
                            return (0, a.jsx)(iv, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else return (0, a.jsx)(rK, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                    return null;
                })(s, L ?? P ?? O),
                w = !s.isForumPost() || R || _ ? null : (0, a.jsx)(rS, { postId: s.id }),
                { firstMessage: F, loaded: H } = (0, lB.n5)(s, _),
                B =
                    _ && H
                        ? (0, a.jsx)(
                              rU,
                              {
                                  compact: h,
                                  channel: s,
                                  message: F,
                                  id: null != F ? (0, e8.j)(s.id, F.id) : `deleted-${s.id}`,
                              },
                              F?.id ?? `deleted-${s.id}`,
                          )
                        : null,
                K = (0, iD.A)(s.id),
                V = (0, a7.W1)(s);
            ((t = e3.Sf.useSetting()),
                (n = (0, aG.bG)([j.Ay], () => j.Ay.useReducedMotion)),
                r.useEffect(() => {
                    function e(e) {
                        let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                        a ||
                            r !== aW.v6.BURST ||
                            !t ||
                            n ||
                            (0, t0.on)({ channelId: i, messageId: l, emoji: s, key: oa.W.EXTERNAL });
                    }
                    return (
                        v.h.subscribe("MESSAGE_REACTION_ADD", e),
                        () => {
                            v.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                        }
                    );
                }, [t, n]));
            let z = null,
                W = [],
                $ = m.map((e, t) => {
                    if (e.type === en.TZK.DIVIDER) {
                        let n = null != e.unreadId;
                        return null != C
                            ? null
                            : e.isConversationChannelHeader
                              ? (0, a.jsx)(
                                    iM,
                                    { channel: s, scrollManager: A, flashKey: e.flashKey },
                                    `conversation-${e.contentKey ?? t}`,
                                )
                              : e.isSummaryDivider
                                ? (0, a.jsx)(
                                      r0,
                                      {
                                          index: t,
                                          item: e,
                                          channel: s,
                                          isBeforeGroup: null == e.content && oo(m[t + 1]),
                                      },
                                      `summary-divider-${e.contentKey ?? t}`,
                                  )
                                : (0, a.jsx)(
                                      nY.A,
                                      {
                                          isUnread: n,
                                          isBeforeGroup: null == e.content && oo(m[t + 1]),
                                          id: n ? nV.q4 : void 0,
                                          itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                          children: e.content,
                                      },
                                      `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                  );
                    }
                    if (e.type === en.TZK.FORUM_POST_ACTION_BAR)
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
                    if (e.type === en.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS)
                        return (0, a.jsx)(n6, { unreadId: nV.q4, messages: e, channel: s, compact: h }, e.key);
                    if (oc(e)) {
                        let t,
                            n = !0;
                        return (
                            e.type === en.TZK.MESSAGE_GROUP_BLOCKED
                                ? (t = eL.t["+FcYM/"])
                                : e.type === en.TZK.MESSAGE_GROUP_IGNORED
                                  ? (t = eL.t["VFWjc+"])
                                  : e.type === en.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                    ? ((t = eL.t.rHRovo), (n = !1))
                                    : (t = eL.t.xfkfTK),
                            (0, a.jsx)(
                                n2,
                                {
                                    unreadId: nV.q4,
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
                    e.type === en.TZK.MESSAGE && null == z && (z = e);
                    let n = e.groupId === z?.groupId ? z.content.id : e.groupId,
                        l = V && e.content.isFirstMessageInForumPost(s),
                        i = e.type === en.TZK.THREAD_STARTER_MESSAGE ? nz : n$;
                    return (0, a.jsx)(
                        i,
                        {
                            compact: h && !l,
                            channel: s,
                            message: e.content,
                            groupId: n,
                            flashKey: e.flashKey,
                            id: (0, e8.j)(s.id, e.content.id),
                            isLastItem: t >= m.length - 1,
                            renderContentOnly: K || l,
                        },
                        e.content.id,
                    );
                });
            W.push(...$);
            let q = m[m.length - 1];
            if (
                (null != T &&
                    g.forEach((e, t) => {
                        let n = 0 === t && (0, ei.l)(s, q, new r1.Ay({ type: en.lAJ.DEFAULT, author: T }));
                        W.push(
                            (0, a.jsx)(
                                od,
                                { file: e, channel: s, user: T, isGroupStart: n, compact: h },
                                `upload-${e.id}`,
                            ),
                        );
                    }),
                E)
            ) {
                o.length > 0 &&
                    (o.length > 1 &&
                        o.length < 120 &&
                        (function (e) {
                            let t = 0,
                                n = 0;
                            for (let l of e)
                                l.type !== en.TZK.DIVIDER &&
                                    (oc(l)
                                        ? (t += l.content.filter((e) => e.type !== en.TZK.DIVIDER).length)
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
                    W.unshift((0, a.jsx)("div", { style: { height: 16, flex: "0 0 auto" } }, "buffer")));
                let { useReducedMotion: e } = j.Ay;
                ((e && N()) || !e) && W.unshift((0, a.jsx)(l2, { compact: h, ...f }, "has-more"));
            }
            if (
                (E || _ || W.unshift((0, a.jsx)(av, { channel: s, showingBanner: x }, "empty-message")),
                o.hasMoreAfter && W.push((0, a.jsx)(l2, { compact: h, ...f }, "has-more-after")),
                !x && M && N() && W.push((0, a.jsx)(os, { channel: s })),
                c > 0 && d && N())
            ) {
                let e,
                    t,
                    n = lZ.Ay.getOldestUnreadTimestamp(s.id),
                    i = 0 !== n ? n : et.default.extractTimestamp(s.id),
                    r = (0, ee.ro)(new Date(), new Date(i));
                if (
                    (lZ.Ay.isEstimated(s.id)
                        ? ((e = r ? eL.t.wvtbbG : eL.t.tHqbtg), (t = eL.t.vaPWFe))
                        : ((e = r ? eL.t["BctFH/"] : eL.t["3wXb9P"]), (t = eL.t["4H8ldG"])),
                    D && (0, b.Kc)(s) && G.includes(or.i.SUMMARIES))
                ) {
                    let n = lZ.Ay.ackMessageId(s.id),
                        r = (function (e, t) {
                            let n = lW.A.summaries(e) ?? [],
                                l = 0;
                            for (let e of n) et.default.compare(e.endId, t) > 0 && (l += 1);
                            return l;
                        })(s.id, lZ.Ay.getOldestUnreadMessageId(s.id));
                    if (
                        ((0, io.zV)(en.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                            num_unread_summaries: r,
                            num_unread_messages: c,
                            last_ack_message_id: n,
                            summaries_enabled_by_user: k,
                            summaries_enabled_for_channel: (0, b.pk)(s),
                        }),
                        (0, b.pk)(s))
                    ) {
                        let n = k ? eL.intl.format(t, { count: c }) : eL.intl.format(e, { count: c, timestamp: i });
                        if (k) {
                            let e =
                                r > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(eb.E, {
                                                  variant: "body-sm/medium",
                                                  color: "currentColor",
                                                  children: eL.intl.format(t, { count: c }),
                                              }),
                                              (0, a.jsx)(rw.A, {
                                                  style: { paddingLeft: 8, paddingRight: 8 },
                                                  height: 4,
                                                  width: 4,
                                              }),
                                              (0, a.jsx)(eb.E, {
                                                  variant: "body-sm/medium",
                                                  color: "currentColor",
                                                  children: eL.intl.format(eL.t.CBftDc, { count: r }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(eb.E, {
                                          variant: "body-sm/medium",
                                          color: "currentColor",
                                          children: n,
                                      });
                            l = (0, a.jsx)(r6.OZ, { scrollManager: A, content: e, channel: s });
                        } else {
                            let e = (0, a.jsx)("div", {
                                style: { display: "flex", textTransform: "none", alignItems: "center" },
                                children:
                                    r > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(eb.E, {
                                                      variant: "body-sm/medium",
                                                      color: "currentColor",
                                                      children: eL.intl.format(t, { count: c }),
                                                  }),
                                                  (0, a.jsx)(rw.A, {
                                                      style: { paddingLeft: 8, paddingRight: 8 },
                                                      height: 4,
                                                      width: 4,
                                                  }),
                                                  (0, a.jsx)(eb.E, {
                                                      variant: "body-sm/medium",
                                                      color: "currentColor",
                                                      children: eL.intl.format(eL.t.CBftDc, { count: r }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(eb.E, {
                                              variant: "body-sm/medium",
                                              color: "currentColor",
                                              children: n,
                                          }),
                            });
                            l = (0, a.jsx)(r6.GN, { content: e, channelId: s.id });
                        }
                    }
                } else
                    G.includes(or.i.NEW_MESSAGES) &&
                        (l = (0, a.jsx)(r6.GN, {
                            content: eL.intl.format(e, { count: c, timestamp: i }),
                            channelId: s.id,
                        }));
            }
            if (
                (null == l &&
                    (0, b.pk)(s) &&
                    k &&
                    G.includes(or.i.SUMMARIES) &&
                    (l = (0, a.jsx)(r6.UK, { channel: s, scrollManager: A })),
                o.error)
            )
                i = (0, a.jsx)(r6.Ez, {
                    loading: o.loadingMore,
                    onClick: () => {
                        var e;
                        return (
                            (e = s.id),
                            void y.A.fetchMessages({
                                channelId: e,
                                limit: (0, l0.h)("renderStream.reload"),
                                truncate: !0,
                            })
                        );
                    },
                    className: S,
                });
            else if (o.hasMoreAfter && N()) {
                let { jumpReturnTargetId: e } = o;
                i =
                    o.loadingMore && o.jumpedToPresent
                        ? (0, a.jsx)(r6.Ab, { className: S })
                        : null != e
                          ? (0, a.jsx)(r6.Ab, {
                                type: r6.ks.REPLY,
                                onClick: () => {
                                    y.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                },
                                className: S,
                            })
                          : (0, a.jsx)(r6.Ab, {
                                onClick: () => {
                                    let e;
                                    return (
                                        y.A.jumpToPresent(s.id, (0, l0.h)("renderStream.jumpToPresent")),
                                        (e = r2.Ay.getChannelId()),
                                        void (s.id === e && (0, rF.iN)(s.id))
                                    );
                                },
                                className: S,
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
            uploads: E,
            loadMore: Y.loadMore,
            scrollManager: Y,
            specs: W,
            hasTopPlaceholders: Z,
            filterAfterTimestamp: q,
            showingQuarantineBanner: D,
            hideSummaries: k,
            jumpToPresent: function () {
                g.hasPresent()
                    ? Y.ref.current?.scrollToBottom({ animate: !j.Ay.useReducedMotion })
                    : y.A.jumpToPresent(m.id, K);
            },
            jumpBarClassName: L,
            isGameInvitesPost: U,
        });
    ((t = Y.ref),
        (n = r.useCallback(() => t.current?.scrollToBottom(), [t])),
        (l = r.useCallback(() => {
            (Y.handleUserScrollGesture(), t.current?.scrollPageUp({ animate: !j.Ay.useReducedMotion }));
        }, [Y, t])),
        (i = r.useCallback(() => {
            (Y.handleUserScrollGesture(), t.current?.scrollPageDown({ animate: !j.Ay.useReducedMotion }));
        }, [Y, t])),
        (0, lY.Vo)({ event: en.jej.SCROLLTO_PRESENT, handler: n }),
        (0, lY.Vo)({ event: en.jej.SCROLL_PAGE_UP, handler: l }),
        (0, lY.Vo)({ event: en.jej.SCROLL_PAGE_DOWN, handler: i }));
    let ed = (0, I.R7)(),
        { ref: eu, ...eh } = (0, d.LT)(Q),
        em = r.useRef(null),
        eg = r.useMemo(() => ({ ref: em, padding: oh }), []),
        ep = (0, _.A)((e) => {
            let t = e?.getScrollerNode() ?? null;
            ((Y.ref.current = e), (eu.current = t), (em.current = t));
        }),
        ef = (0, u.bG)([O.A], () => O.A.gradientPreset),
        eC = e3.eh.useSetting().customUserThemeSettings,
        eE = (0, l$.V)(),
        ex = (0, lK.Q)(),
        eI = null != ef || (null != eC && !eE) || null != ex,
        eS = r.useMemo(() => (G ? (w ? ou.gA : ou.ru) : ou.Zd), [G, w]),
        ey = r.useMemo(() => (G ? (w ? ou.cz : ou.XF) : ou.U6), [G, w]);
    return (0, a.jsxs)(d.hD, {
        navigator: Q,
        children: [
            eo,
            null != ec && ec,
            (0, a.jsxs)("div", {
                className: c()(ou.Og, s, `group-spacing-${o}`),
                children: [
                    null == ec && es,
                    (0, a.jsxs)(B, {
                        channel: m,
                        scrollManager: Y,
                        children: [
                            (0, a.jsx)(om, {
                                ref: ep,
                                customTheme: !0,
                                className: c()(h, ou.XG, eI ? ey : void 0),
                                contentClassName: ou.gT,
                                onResize: Y.handleResize,
                                onScroll: Y.handleScroll,
                                onMouseDown: Y.handleMouseDown,
                                onMouseUp: Y.handleMouseUp,
                                onWheel: Y.handleUserScrollGesture,
                                onTouchMove: Y.handleUserScrollGesture,
                                onKeyDown: Y.handleKeyDown,
                                ...ed,
                                tabIndex: -1,
                                role: "group",
                                children: (0, a.jsxs)(S.W.Provider, {
                                    value: eg,
                                    children: [
                                        er,
                                        (0, a.jsxs)("ol", {
                                            className: ou.bv,
                                            "aria-label": eL.intl.formatToPlainString(eL.t.XarRiL, {
                                                channelName: H ?? "",
                                            }),
                                            ...eh,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: ou.$4,
                                                    id: "messagesNavigationDescription",
                                                    "aria-hidden": !0,
                                                    children: eL.intl.string(eL.t["Spb3s/"]),
                                                }),
                                                el,
                                                (0, a.jsx)("div", {
                                                    className: c()({
                                                        [ou.lB]: !D,
                                                        [ou.Ie]: 0 === g.length && !g.loadingMore,
                                                        [ou.Fb]:
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
                            eI ? null : (0, a.jsx)("div", { className: eS }),
                            ea,
                            (0, a.jsx)(lF, { channel: m, scrollManager: Y }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let op = r.memo(function (e) {
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
                n = (0, u.bG)([tp.A], () => null == t || tp.A.canChatInGuild(t), [t]),
                { canManageMessages: l, permissionVersion: i } = (0, u.cf)(
                    [tA.A],
                    () => ({
                        canManageMessages: tA.A.can(en.xBc.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? tA.A.getGuildVersion(t) : null,
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
            let e = e3.hH.useSetting(),
                t = e3.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: l,
                    keyboardModeEnabled: i,
                } = (0, u.cf)([j.Ay], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = j.Ay;
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
            messages: E,
            channelStream: x,
            oldestUnreadMessageId: I,
            editingMessageId: S,
            isGameInvitesPost: y,
        } = (function (e) {
            var t, n;
            let l,
                i = (0, u.bG)([ep.A], () => ep.A.getMessages(e.id), [e.id]),
                s = (0, u.bG)([lZ.Ay], () => lZ.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                { enabled: a } = Q.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                o = lX.default.getUser(ec.default.getId())?.hasFlag(en.nhx.SPAMMER) ?? !1,
                c = (0, b.cI)(e),
                d = (0, lH.A)("use_topic_dividers_in_chat"),
                h = (0, u.yK)([lW.A], () => (c && d ? (lW.A.summaries(e.id) ?? []) : []), [c, e.id, d]),
                m = (0, u.bG)([lW.A], () => (c ? lW.A.selectedSummary(e.id) : null), [c, e.id]),
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
                            [N.A],
                            () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            N.A.findActivity(
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
                        T.A.isSubscribed(e) || v.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                }, [l]);
            })(i, e);
            let A = (0, lB.YG)(e),
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
                                g = null != a ? et.default.extractTimestamp(a) : null,
                                p = null;
                            return (
                                !u &&
                                    i.isForumPost() &&
                                    !s.hasMoreBefore &&
                                    !s.first()?.isFirstMessageInForumPost(i) &&
                                    h.push({ type: en.TZK.FORUM_POST_ACTION_BAR }),
                                s.forEach((e) => {
                                    var A, f;
                                    let C, E, x;
                                    if (u && e.isFirstMessageInForumPost(i)) return;
                                    if (null != o && o.length > 0) {
                                        let t = et.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = et.default.extractTimestamp(o[e].startId),
                                                l = et.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (p === o[e].id) break;
                                                (h.push({
                                                    type: en.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (p = o[e].id));
                                                break;
                                            }
                                        }
                                    }
                                    let I = (0, ee.i$)(e.timestamp, "LL");
                                    I !== t &&
                                        null == p &&
                                        (h.push({ type: en.TZK.DIVIDER, content: I, contentKey: I }), (t = I));
                                    let S = h[h.length - 1],
                                        y = null,
                                        b = (0, es.kf)(e);
                                    m = m || b;
                                    let _ = eg(i, e, b && r);
                                    (null !== _ &&
                                        ([y, S] =
                                            ((E = A = S),
                                            null == A || A.type !== _
                                                ? ((C = { type: _, content: [], key: e.id }), h.push(C))
                                                : (E = (C = A).content[C.content.length - 1]),
                                            [C, E])),
                                    a === e.id && null != g)
                                        ? (null != S && S.type === en.TZK.DIVIDER
                                              ? (S.unreadId = e.id)
                                              : null !== y
                                                ? ((f = y),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      f.content.push({ type: en.TZK.DIVIDER, unreadId: e.id }),
                                                  (f.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  h.push({ type: en.TZK.DIVIDER, unreadId: e.id }),
                                          (g = null))
                                        : null != g &&
                                          et.default.extractTimestamp(e.id) > g &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              h.push({ type: en.TZK.DIVIDER, unreadId: e.id }),
                                          (g = null));
                                    let j =
                                        null !=
                                        (x = (function (e, t) {
                                            if (eh.get(t.id) === e.id) return em(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, er.Lt)(e.flags, en.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === ec.default.getId() ||
                                                null != e.activity ||
                                                (0, er.Lt)(t.recipientFlags ?? 0, ea.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
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
                                            return (eo.A.updatePrivateChannelRecipientFlags(t.id, l), n);
                                        })(e, i))
                                            ? { message: x, position: "before" }
                                            : null;
                                    null != j &&
                                        "before" === j.position &&
                                        h.push({ type: en.TZK.MESSAGE, content: j.message, groupId: j.message.id });
                                    let v = S?.type === en.TZK.MESSAGE ? l : S;
                                    (0, ei.l)(i, v, e) && (n = e.id);
                                    let T = {
                                        type:
                                            e.type === en.lAJ.THREAD_STARTER_MESSAGE
                                                ? en.TZK.THREAD_STARTER_MESSAGE
                                                : en.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = T);
                                    let { jumpSequenceId: N, jumpFlash: M, jumpTargetId: R } = s;
                                    (M && e.id === R && null != N && (T.flashKey = N),
                                        s.jumpTargetId === e.id && (T.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            h.push({
                                                type: en.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            (h.push({
                                                type: en.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationChannelHeader: !0,
                                                flashKey: T.flashKey,
                                            }),
                                            (T.flashKey = void 0)),
                                        null !== y
                                            ? (y.content.push(T), T.jumpTarget && (y.hasJumpTarget = !0))
                                            : h.push(T),
                                        e.isFirstMessageInForumPost(i) &&
                                            h.push({ type: en.TZK.FORUM_POST_ACTION_BAR }),
                                        null != j &&
                                            "after" === j.position &&
                                            h.push({ type: en.TZK.MESSAGE, content: j.message, groupId: j.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            h.push({
                                                type: en.TZK.DIVIDER,
                                                contentKey: c.endId,
                                                isSummaryDivider: !0,
                                            }));
                                }),
                                m && (0, es.iJ)(i) && Q.trackExposure({ location: "416cc9_1" }),
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
                editingMessageId: (0, u.bG)([e7.A], () => e7.A.getEditingMessage(e.id)?.id),
                isGameInvitesPost: A,
            };
        })(t),
        _ = (0, lQ.A)(f, d);
    return (0, a.jsx)(lz.Bs.Provider, {
        value: _,
        children: (0, a.jsx)(l3.t, {
            children: (0, a.jsx)(og, {
                ...c,
                messageGroupSpacing: g,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (i || A),
                messages: E,
                channelStream: x,
                permissionVersion: h,
                uploads: (0, u.bG)([lJ.A], () => lJ.A.getFiles(t.id), [t]),
                unreadCount: (0, u.bG)([lZ.Ay], () => lZ.Ay.getUnreadCount(t.id), [t]),
                hasUnreads: null != I,
                canChat: m,
                editingMessageId: S,
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
