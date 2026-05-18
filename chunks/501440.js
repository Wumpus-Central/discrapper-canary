let l, i;
n.d(t, { A: () => aL });
var s,
    a,
    r = n(627968),
    o = n(64700),
    c = n(503698),
    d = n.n(c),
    u = n(873174),
    h = n(837381),
    m = n(17928),
    A = n(446837),
    g = n(187322),
    p = n(536804),
    f = n(789279),
    C = n(584648),
    E = n(448539),
    x = n(45596);
let S =
    ((s = d()(x.qZ, x.Vl)),
    (a = window.ResizeObserver ?? A.t),
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
                fade: A = !1,
                customTheme: S = !1,
                style: _,
                ...I
            } = e,
            T = o.useRef(null),
            y = o.useRef(null),
            [N, j] = o.useState(!1),
            { scrollerRef: b, getScrollerState: M } = (0, p.A)(),
            v = (0, f.A)(b);
        o.useImperativeHandle(
            t,
            () => ({
                getScrollerNode: () => b.current,
                isScrolling: () => null != T.current,
                getScrollerState: M,
                ...(0, C.A)(b, M, v),
            }),
            [b, M, v],
        );
        let R = o.useCallback(
            (e) => {
                null == T.current ? j(!0) : clearTimeout(T.current),
                    (T.current = setTimeout(() => {
                        (T.current = null), j(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h],
        );
        return (
            o.useEffect(() => () => clearTimeout(T.current), []),
            (0, E.A)({ ref: b, key: "container", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, E.A)({ ref: y, key: "content", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, r.jsx)("div", {
                ref: b,
                className: d()(a, { [x.Rv]: A, [x.D8]: S, [s]: !0, [x.fs]: !0, [x.qw]: N && A }),
                style: _,
                dir: m,
                onScroll: R,
                ...I,
                children: (0, r.jsx)(g.xp, {
                    containerRef: y,
                    children: (0, r.jsxs)("div", {
                        ref: y,
                        className: d()(u, x.Qs),
                        children: [n, N && (0, r.jsx)("div", { className: x.X3 })],
                    }),
                }),
            })
        );
    }));
var _ = n(312138),
    I = n(720149),
    T = n(432371),
    y = n(765548),
    N = n(775602);
n(321073);
var j = n(228366),
    b = n(911411),
    M = n(290863);
let v = [],
    R = [],
    D = [];
var L = n(429913),
    P = n(47167),
    k = n(828488),
    G = n(958720),
    O = n(354328),
    U = n(559149),
    w = n(164956),
    F = n(302031),
    H = n(822074),
    B = n(885386),
    V = n(617617),
    K = n(495544),
    z = n(72314),
    W = n(580745),
    $ = n(834942),
    q = n(232835),
    J = n(576705),
    Z = n(222823),
    Y = n(399263),
    X = n(287809),
    Q = n(234320),
    ee = n(863439),
    et = n(448761),
    en = n(58703),
    el = n(935208),
    ei = n(857069),
    es = n(694318);
n(938796);
var ea = n(253506),
    er = n(665260),
    eo = n(704844),
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
    return (l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l;
}
var eA = n(326337),
    eg = n(735438),
    ep = n.n(eg),
    ef = n(114212),
    eC = n(615170);
function eE(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return o.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, r.jsx)("div", {
            className: eC.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, r.jsx)(ef.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var ex = n(830178),
    eS = n(887129),
    e_ = n(625494),
    eI = n(375901),
    eT = n(381941),
    ey = n(621466),
    eN = n(951001),
    ej = n(334738),
    eb = n(267102),
    eM = n(976860),
    ev = n(863922),
    eR = n(284009),
    eD = n.n(eR),
    eL = n(939249),
    eP = n(807884),
    ek = n(93474),
    eG = n(201275),
    eO = n(384231),
    eU = n(853145),
    ew = n(9842),
    eF = n(734057),
    eH = n(540999),
    eB = n(521427),
    eV = n(143413),
    eK = n(763754),
    ez = n(33453);
function eW(e) {
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
        (0, r.jsx)("div", { "data-flash": i, className: d()(ez.j, n), children: t })
    );
}
var e$ = n(491182),
    eq = n(860227),
    eJ = n(112758),
    eZ = n(516287),
    eY = n(843626),
    eX = n(294454),
    eQ = n(857071),
    e0 = n(517997),
    e1 = n(406704),
    e2 = n(747926),
    e3 = n(54570),
    e4 = n(8880),
    e7 = n(957565),
    e5 = n(723702),
    e8 = n(697470),
    e9 = n(492841),
    e6 = n(707985),
    te = n(519222);
let tt = function (e, t, n) {
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
                    c = q.A.getMessage(t, e),
                    d = eF.A.getChannel(t);
                if (null == c || null == d) return;
                let u = K.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (J.A.can(eu.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, te.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, e5.isMac)() ? r : a) && e7.p5 && (n.preventDefault(), (0, e7.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, e8.A)(c, u) && (n.preventDefault(), (0, te.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, e9.A)(c, d) && (n.preventDefault(), (0, te.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || $.A.canChatInGuild(e.guild_id),
                                    n = B.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, e6.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && J.A.can(eu.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && eQ.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, e1.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            e_._.dispatchKeyed(eu.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, e0.r)(d, c) && (n.preventDefault(), (0, te.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, eY.p)(c) &&
                            (n.preventDefault(), (0, eX.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            e4.A.isSpeakingMessage(t, e) ? (0, e3.pr)() : (0, e3.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, e1.D1)(d, c)) n.preventDefault(), (0, e2.Tv)(d, c, "Message Shortcut");
                        else if (c.hasFlag(eu.pr7.HAS_THREAD)) {
                            let e = eF.A.getChannel(el.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, e2.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, te.cl)(d, c));
                        break;
                    case "escape":
                        W.A.isEditing(d.id, c.id) ? I.A.endEditMessage(d.id) : e_._.dispatch(eu.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tn = n(754459),
    tl = n(375199),
    ti = n(824556),
    ts = n(699352),
    ta = n(877413),
    tr = n.n(ta),
    to = n(231483),
    tc = n(834730),
    td = n(975571),
    tu = n(465364),
    th = n(164664),
    tm = n(291812),
    tA = n(606049),
    tg = n(375708),
    tp = n(147860),
    tf = n(334211),
    tC = n(992595);
let tE = o.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: d()(tp.K1, { [tp.oE]: l }),
                    children: [
                        (0, r.jsx)("div", {
                            className: tp.Oz,
                            children: (0, r.jsx)(to.l, { size: "xs", color: "currentColor", className: tp.F_ }),
                        }),
                        (0, r.jsx)("div", {
                            className: tp.jC,
                            children: (0, r.jsx)(tc.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, tu.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d()(tp.ah, { [tp.oE]: l }),
                    children: (0, r.jsx)(th.A, {
                        message: t,
                        onDeleteMessage: i,
                        children: (0, r.jsx)(tc.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: tp.C2,
                            children: tg.intl.format(tg.t["Nd3Gh+"], {
                                helpUrl: td.A.getArticleURL(eu.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    tx = o.memo(function (e) {
        let { className: t, compact: n, message: l, children: i, content: s, onUpdate: a } = e,
            c = l.editedTimestamp?.toString(),
            u = o.useRef(!1),
            h = (0, m.bG)([ek.A], () => ek.A.getMessage(l.id), [l.id]),
            A = o.useCallback(() => {
                if (h?.isBlockedEdit) {
                    var e;
                    (e = l.id), j.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e });
                } else I.A.deleteMessage(l.channel_id, l.id, !0);
            }, [l, h]);
        return (
            o.useLayoutEffect(() => {
                u.current ? null != a && a() : (u.current = !0);
            }, [a, l.content, s, c, i]),
            (0, r.jsxs)("div", {
                id: (0, eq.CJ)(l),
                className: d()(t, tC.PT, {
                    [tf.BK]: !0,
                    [tf.nB]: "rtl" === tr()(l.content),
                    [tp.Dy]: h?.isBlockedEdit,
                    [tp.bv]: !h?.isBlockedEdit,
                }),
                children: [
                    i ?? (0, tm._A)(l, s),
                    h?.isBlockedEdit &&
                        null != l.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(tA.A, {
                                    timestamp: l.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: tf.oh,
                                        children: ["(", tg.intl.string(tg.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tE, {
                        notice: h?.errorMessage ?? tg.intl.string(tg.t.zQ69pv),
                        message: l,
                        compact: n,
                        onDismiss: A,
                    }),
                ],
            })
        );
    }, tm.sP);
var tS = n(111956),
    t_ = n.n(tS),
    tI = n(311283),
    tT = n(473935),
    ty = n(173936),
    tN = n(290136),
    tj = n(666492),
    tb = n(606096),
    tM = n(997146),
    tv = n(366605),
    tR = n(163328),
    tD = n(110384),
    tL = n(22231),
    tP = n(563119),
    tk = n(581925),
    tG = n(778492),
    tO = n(241326),
    tU = n(922016),
    tw = n(365199),
    tF = n(417270),
    tH = n(565645),
    tB = n(812930),
    tV = n(822123),
    tK = n(7584),
    tz = n(635222),
    tW = n(969043),
    t$ = n(427209),
    tq = n(743738),
    tJ = n(649963),
    tZ = n(815807),
    tY = n(429433),
    tX = n(966597),
    tQ = n(85109),
    t0 = n(71393),
    t1 = n(174459),
    t2 = n(690521),
    t3 = n(403362),
    t4 = n(628691),
    t7 = n(194085),
    t5 = n(607399),
    t8 = n(460905);
function t9(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        a = o.useRef(null);
    return (0, r.jsx)(tU.Y, {
        targetElementRef: a,
        animation: tU.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: t5.Fr ? "top" : "left",
        align: t5.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(t7.qv, { ref: a, label: tg.intl.string(tg.t.lfIHs4), icon: t8.n, onClick: l }, "add-reaction"),
    });
}
var t6 = n(720882),
    ne = n(307731),
    nt = n(237774);
let nn = [tK.Ay.getByName("100"), tK.Ay.getByName("laughing"), tK.Ay.getByName("sparkling_heart")].filter(t3.Vq);
function nl(e) {
    e.stopPropagation();
}
function ni(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, t6.c)({
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
        ariaLabel: tg.intl.string(tg.t.Lv7LxN),
    });
}
let ns = o.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, tV.QZ)(t.guild_id).filter(
            (e) =>
                !t2.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ne.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, tz.A)(l.concat(nn)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, tZ.i6)(t.emoji, (0, tZ.jq)(e))),
                i = null != l ? tg.intl.string(tg.t.wunKKA) : tg.intl.string(tg.t.XVx5BN),
                a = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? tg.intl.formatToPlainString(tg.t.vjeruO, { emojiName: a })
                        : tg.intl.formatToPlainString(tg.t.L1JQwE, { emojiName: a });
            return (0, r.jsx)(
                t7.qv,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tc.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nt.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, r.jsx)(tc.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: nt.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        no({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: tJ.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(tH.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nt.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function na(e) {
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
            canReply: A,
            canStartThread: g,
            canViewThread: p,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: E,
            isExpanded: x,
            showMoreUtilities: S,
            showEmojiPicker: _,
            showMessageBookmarksActions: T,
            isMessageBookmark: y,
            setPopout: j,
            hasDeveloperMode: b,
            isFocused: M,
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
                d = (0, m.bG)([t0.A], () => t0.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, m.bG)([K.default], () => K.default.getId()),
                h = (0, e1.Id)(t),
                A = (0, e1.s5)(t),
                { firstMessage: g } = (0, m.bG)([tW.A], () => tW.A.getMessage(t.id), [t.id]),
                p = B.jW.useSetting(),
                f = B.Q_.useSetting(),
                C = (0, m.bG)([$.A], () => null == t.guild_id || $.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: E, canAddNewReactions: x } = (0, m.cf)(
                    [J.A],
                    () => ({
                        canAddNewReactions: C && J.A.can(eu.xBc.ADD_REACTIONS, t),
                        canManageMessages: J.A.can(eu.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, C],
                ),
                S = (0, e0.u)(t, n),
                _ = (0, e1.n)(t, n),
                I = (0, e1.R)(n),
                T = (0, m.bG)([eQ.A], () => null != t.guild_id && eQ.A.isLurking(t.guild_id), [t]),
                y = c.id === u,
                j = (E || n.canDeleteOwnMessage(u)) && h && !eu.MRS.UNDELETABLE.has(n.type);
            n.type === eu.lAJ.AUTO_MODERATION_ACTION && (j = j && E),
                t.isModeratorReportChannel() && (j = j && n.id !== g?.id && !(0, eV.A)(n));
            let b = (0, t4.ul)(n),
                M = (0, e9.A)(n, t),
                v = !t.isSystemDM() && (0, e8.A)(n, u) && h && !A,
                { disableReactionCreates: R } = (0, e6.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: p,
                    canAddNewReactions: x,
                    isLurking: T,
                    isActiveChannelOrUnarchivableThread: h,
                }),
                D =
                    t.type === eu.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(eu.GuildFeatures.NEWS) &&
                    (y || E) &&
                    (0, tB.A)(n),
                L = t.getGuildId(),
                P =
                    null != L &&
                    n.type === eu.lAJ.USER_JOIN &&
                    J.A.canWithPartialContext(eu.xBc.MANAGE_GUILD, { guildId: L }),
                k = (0, eY.m)(n),
                G = (0, eB.Vc)(t.guild_id, t, "MessageHoverBar"),
                O = n.hasFlag(eu.pr7.IS_GUILD_OFFICIAL),
                { enabled: U } = tX.A.useConfig({ location: "message_utilities" }),
                w = (0, m.bG)([tQ.A], () => null != tQ.A.getSavedMessage(t.id, n.id)),
                F = (0, tI.A)(a),
                H = (0, m.bG)([N.A], () => N.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: M,
                canEdit: v,
                canDelete: j,
                canReport: b,
                canReply: S,
                canStartThread: _,
                canViewThread: I,
                canForward: k,
                canManageOfficialMessages: G,
                isGuildOfficial: O,
                canCopy: e7.p5,
                hasDeveloperMode: f,
                canReact: !R && p,
                canPublish: D,
                canConfigureJoin: P,
                isExpanded: F && !H && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: U,
                isMessageBookmark: w,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        v = o.useRef(null),
        R = o.useCallback(() => {
            S ||
                t1.default.track(eu.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                j({ moreUtilities: !S });
        }, [S, j, n]),
        D = o.useCallback(() => {
            j({ emojiPicker: !_ });
        }, [_, j]),
        L = (0, e1.Id)(t),
        P = n.hasFlag(eu.pr7.CROSSPOSTED);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && b
                              ? (0, r.jsx)(
                                    t7.qv,
                                    {
                                        label: tg.intl.string(tg.t.zBoHlf),
                                        icon: tT.L,
                                        onClick: (e) => (0, te.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    t7.qv,
                                    { label: tg.intl.string(tg.t.WqhZss), icon: ty.q, onClick: () => (0, te.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          h
                              ? (0, r.jsx)(
                                    t7.qv,
                                    { label: tg.intl.string(tg.t.NpHUi1), icon: tN.c, onClick: () => (0, te.vc)(t) },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, r.jsx)(
                                    t7.qv,
                                    { label: tg.intl.string(tg.t.RpE9k7), icon: tj.Q, onClick: () => (0, te.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          T
                              ? (0, r.jsx)(
                                    t7.qv,
                                    {
                                        label: y ? tg.intl.string(tg.t.LHUP9D) : tg.intl.string(tg.t["9p3D9p"]),
                                        icon: y ? tb.c : tM.c,
                                        onClick: () => (y ? (0, te.r7)(t, n) : (0, te.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, r.jsx)(
                                    t7.qv,
                                    {
                                        label: n.pinned ? tg.intl.string(tg.t["Bse+F/"]) : tg.intl.string(tg.t.CvQ18w),
                                        icon: tv.t,
                                        onClick: (e) => (0, te.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          g && f
                              ? (0, r.jsx)(
                                    t7.qv,
                                    { label: tg.intl.string(tg.t.rBIGBL), icon: tR.y, onClick: () => (0, te.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          A && c
                              ? (0, r.jsx)(
                                    t7.qv,
                                    {
                                        label: tg.intl.string(tg.t["5IEsGx"]),
                                        icon: tD.W,
                                        onClick: (e) => (0, te.$b)(t, n, e),
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
                          x
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(ns, { channel: t, message: n }), (0, r.jsx)(t7.$$, {})],
                                }),
                          (0, r.jsx)(t9, {
                              togglePopout: D,
                              renderEmojiPicker: nc,
                              shouldShow: _,
                              isFocused: M,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            A && !c
                ? (0, r.jsx)(
                      t7.qv,
                      { label: tg.intl.string(tg.t["5IEsGx"]), icon: tD.W, onClick: (e) => (0, te.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, r.jsx)(
                      t7.qv,
                      { label: tg.intl.string(tg.t.bt75uw), icon: tL.R, onClick: () => (0, te.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, r.jsx)(
                      t7.qv,
                      { label: tg.intl.string(tg.t.I3ltXO), icon: t$.A, onClick: () => (0, te.Z4)(t, n) },
                      "forward",
                  )
                : null,
            g && !f
                ? (0, r.jsx)(
                      t7.qv,
                      { label: tg.intl.string(tg.t.rBIGBL), icon: tR.y, onClick: () => (0, te.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !g && p
                ? (0, r.jsx)(
                      t7.qv,
                      { label: tg.intl.string(tg.t["39d0Wj"]), icon: tR.y, onClick: () => (0, te.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, r.jsx)(
                      t7.qv,
                      {
                          label: E ? tg.intl.string(tg.t["2km5Gf"]) : tg.intl.string(tg.t["lE/PG3"]),
                          icon: E ? tP.$ : tk.L,
                          onClick: () => I.A.patchMessageGuildOfficial(t.id, n.id, !E),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, r.jsx)(
                      t7.qv,
                      {
                          label: P ? tg.intl.string(tg.t["1kWJAr"]) : tg.intl.string(tg.t.MFGE51),
                          icon: tG.k,
                          onClick: () => (0, te.Le)(t, n),
                          disabled: P,
                      },
                      "publish",
                  )
                : null,
            s && x
                ? (0, r.jsx)(
                      t7.qv,
                      {
                          label: tg.intl.string(tg.t.oyYWHE),
                          icon: tO.u,
                          onClick: (e) => (0, te.RC)(t, n, e),
                          dangerous: !0,
                          separator: !x,
                      },
                      "delete",
                  )
                : null,
            x && s
                ? null
                : (0, r.jsx)(tU.Y, {
                      targetElementRef: v,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, r.jsx)(ni, {
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
                      animation: tU.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, r.jsx)(
                              t7.qv,
                              {
                                  ref: v,
                                  label: tg.intl.string(tg.t["UKOtz+"]),
                                  icon: tw.j,
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
function nr(e) {
    let { channel: t, message: n } = e,
        l = (0, m.bG)([ek.A], () => null != ek.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, tq.Bl)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l &&
                i &&
                (0, r.jsx)(
                    t7.qv,
                    { label: tg.intl.string(tg.t["5911Lb"]), icon: tF.m, onClick: () => (0, te.Io)(t, n) },
                    "retry",
                ),
            (0, r.jsx)(
                t7.qv,
                { label: tg.intl.string(tg.t.oyYWHE), icon: tO.u, onClick: (e) => (0, te.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function no(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, tZ.jq)(n);
    "add" === t
        ? (0, tJ.BB)(l.id, i.id, r, s, { burst: a })
        : (0, tJ.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nc(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? eu.liQ.GUILD_CHANNEL : eu.liQ.DM_CHANNEL,
                section: (0, tZ.sn)(e),
                object: eu.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, r.jsx)(tY.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            no({ type: "add", emoji: i, channel: e, message: t, location: tJ.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? t_()(n, 150)() : n());
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nd = o.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, m.bG)([W.A], () => W.A.isEditing(t.id, n.id), [t.id, n.id]),
        a = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === eu.cmJ.SEND_FAILED ? (0, r.jsx)(nr, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== eu.cmJ.SEND_FAILED ? (0, r.jsx)(na, { ...e }) : null;
        })(e);
    return s || (null == a && null == o)
        ? null
        : (0, r.jsx)("div", {
              className: d()(e.className, { [nt.kL]: !0, [nt.gN]: l, [nt.nK]: i }),
              onClick: nl,
              onContextMenu: nl,
              role: "group",
              "aria-label": tg.intl.string(tg.t.Lv7LxN),
              children: (0, r.jsxs)(t7.Ay, { className: e.innerClassName, children: [a, o] }),
          });
});
var nu = n(701628),
    nh = n(639288),
    nm = n(10364);
let nA = o.memo(function (e) {
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
            A = (0, eJ.r4)(t.author.id, n.id),
            g = (0, eJ.m)(t, n, a, d),
            p = (0, eJ.Jo)(c, d),
            f = o.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, r.jsx)(nh.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== eu.lAJ.REPLY,
            renderPopout: nm.A,
            showAvatarPopout: c,
            showUsernamePopout: a,
            onClickAvatar: p,
            onClickUsername: g,
            onContextMenu: A,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    ng = o.memo(tA.A);
function np(e) {
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
        { usernameProfile: m, avatarProfile: A } = l;
    if ((0, eV.A)(c)) return null;
    let g = c.id === h;
    return g || d || null != i
        ? (0, r.jsx)(nA, {
              message: c,
              channel: u,
              compact: d,
              subscribeToGroupId: h,
              isGroupStart: g,
              groupId: h,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: A,
              author: s,
              repliedMessage: a,
              roleIcon: o,
          })
        : (0, r.jsx)(ng, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, eq.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nf = n(141268),
    nC = n(155718),
    nE = n(168186),
    nx = n(994500),
    nS = n(217424),
    n_ = n(807081),
    nI = n(387408),
    nT = n(942075),
    ny = n(808829),
    nN = n(552691),
    nj = n(861464),
    nb = n(805964);
let nM = o.memo(function (e) {
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
        h = n.state === ew.a.LOADED ? n.message : void 0,
        A = (0, eK.X4)(h),
        g = (0, eO.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = o.useMemo(() => {
            if (null == h) return null;
            let e = (0, nI.A)(h);
            if (e.type === eu.lAJ.USER_JOIN)
                return (0, n_.$)(
                    tg.intl.formatToParts(nj.A.getSystemMessageUserJoin(e.id), {
                        username: null != A ? A.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === eu.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, n_.$)(
                    (0, nT.WC)({
                        username: null != A ? A.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === eu.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, n_.$)((0, ny.P)({ application: e?.application, username: A?.nick }));
            if (e.type === eu.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, n_.$)((0, nN.g6)({ application: e?.application, username: A?.nick }));
            if (e.type === eu.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, n_.$)((0, nN.uk)({ application: e?.application, username: A?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0 }
                        : { ...t, formatInline: !0, allowHeading: g, allowList: g };
                return (0, tu.Ay)(e, n).content;
            }
            return null;
        }, [h, A, l, g]),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: C } = (0, m.cf)(
            [nx.A],
            () => ({
                isReplyAuthorBlocked: null != h && nx.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && nx.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        E = (0, eJ.r4)(h?.author.id, l.id),
        x = (0, eJ.Ck)(t, h),
        S = (0, eJ.H9)(h, l, s, c),
        _ = (0, eJ.Ge)(a, c),
        I = o.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        T = (0, eK.X4)(t);
    return (0, r.jsx)(nb.A, {
        repliedAuthor: A,
        baseMessage: t,
        channel: l,
        baseAuthor: T,
        referencedMessage: n,
        content: p,
        compact: i,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: C,
        showAvatarPopout: a,
        showUsernamePopout: s,
        renderPopout: nm.A,
        onClickAvatar: _,
        onClickUsername: S,
        onClickReply: x,
        onContextMenu: E,
        onPopoutRequestClose: I,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nv(e) {
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
        (0, r.jsx)(nM, {
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
let nR = o.memo(function (e) {
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
        { isInteractionUserBlocked: h, isInteractionUserIgnored: A } = (0, m.cf)(
            [nx.A],
            () => ({
                isInteractionUserBlocked: nx.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nx.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        g = (0, m.bG)([ew.A], () => ew.A.getMessageByReference(t?.messageReference)),
        p = (0, eJ.r4)(t.interaction?.user.id, n.id),
        f = (0, eJ.T0)(t.interaction, n, i, u),
        C = (0, eJ.Yq)(s, u),
        E = (0, nE.Am)(t),
        x = E?.type === nC.G4.APPLICATION_COMMAND ? E.target_user?.id : void 0,
        S = (0, eJ.r4)(x, n.id),
        _ = (0, eJ.I)(x, n, c, u),
        I = (0, eJ.Ge)(d, u),
        T = (0, eJ.U_)(a, u),
        y = o.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        N = o.useCallback(
            () =>
                nv({
                    message: t,
                    channel: n,
                    compact: l,
                    setPopout: u,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: g,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, l, t, d, g, c, u],
        );
    return (0, r.jsx)(nS.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: h,
        isInteractionUserIgnored: A,
        showAvatarPopout: s,
        showUsernamePopout: i,
        showDataPopout: a,
        showTargetAvatarPopout: d,
        showTargetUsernamePopout: c,
        onClickAvatar: C,
        onClickUsername: f,
        onClickCommand: T,
        onUserContextMenu: p,
        onClickTargetAvatar: I,
        onClickTargetUsername: _,
        onTargetUserContextMenu: S,
        onPopoutRequestClose: y,
        renderTargetMessage: N,
    });
});
var nD = n(352043);
function nL(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eD()(n.type === eu.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...a } = (0, h.rm)(e.id ?? ""),
        o = (0, m.bG)([ew.A], () => ew.A.getMessageByReference(l)),
        { popouts: c, setPopout: u } = (0, tn.A)(n.id, eT.Fd),
        A = (0, eK.Ay)(n),
        g = (0, eq.fF)(n),
        p = (0, eq.ZD)(n);
    return n.type === eu.lAJ.THREAD_STARTER_MESSAGE && null != o && o.state === ew.a.LOADED
        ? (0, r.jsx)(nP, { ...e, viewingChannelId: n.channel_id, message: o.message, groupId: o.message.id })
        : (0, r.jsx)(e$.A, {
              ...a,
              id: t,
              compact: i,
              className: d()(s, { [nu.iU]: !0, [nu.HJ]: !i, [nu.H4]: !0, [nu._A]: !0 }),
              childrenHeader: np({ messageProps: e, setPopout: u, messagePopouts: c, replyReference: l, author: A }),
              childrenSystemMessage: (0, nD.A)(e),
              childrenMessageContent: null,
              "aria-labelledby": g,
              "aria-describedby": p,
              hasThread: !1,
              author: A,
          });
}
function nP(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: a = !1,
            className: c,
            groupId: u,
            viewingChannelId: A,
        } = e,
        g = n.type === eu.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: p, ...f } = (0, h.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: E, handleBlur: x } = (0, eJ.G8)(p),
        { popouts: S, selected: _, setPopout: I } = (0, tn.A)(n.id, eT.Fd),
        T = B.hD.useSetting(),
        y = B.rs.useSetting(),
        j = (0, m.bG)([ew.A], () => ew.A.getMessageByReference(g)),
        b = (0, eO.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: M,
            handleMouseLeave: v,
            isHovered: R,
        } = (0, eJ.yp)({ groupId: u, message: n, defaultValue: _ }),
        D = (0, m.bG)([N.A], () => N.A.keyboardModeEnabled),
        L = _ || (D && C),
        P = L || R,
        k = (0, m.bG)([eH.A], () => eH.A.isDeveloper),
        {
            content: G,
            hasSpoilerEmbeds: O,
            hasBailedAst: U,
        } = (0, tl.A)(n, {
            hideSimpleEmbedContent: T && y,
            formatInline: !1,
            allowList: b,
            allowHeading: b,
            allowLinks: !0,
            allowDevLinks: k,
            previewLinkTarget: !0,
            viewingChannelId: A,
        }),
        w = tt(l, i, D),
        F = (0, eK.Ay)(n),
        H = (0, eq.fF)(n, u),
        V = (0, eq.ZD)(n),
        K = (0, r.jsx)(eZ.x, { value: P, children: (0, nf.A)(e, G, !1) }),
        z = o.useCallback(() => (0, eM.uh)(s, i, l), [s, i, l]),
        W = (0, eG.$7)({ guildId: s, roleId: F.iconRoleId });
    return (0, r.jsxs)("div", {
        className: nu.m5,
        children: [
            (0, r.jsx)(eL.D, {
                className: nu.lA,
                onClick: z,
                "aria-label": tg.intl.string(tg.t.k5WiPf),
                children: tg.intl.string(tg.t.k5WiPf),
            }),
            (0, r.jsx)(e$.A, {
                ...f,
                id: t,
                compact: a,
                className: d()(c, {
                    [nu.iU]: !0,
                    [nu.HJ]: !a,
                    [nu.mK]: n.mentioned,
                    [nu.M1]: (0, ec.ec)(n),
                    [nu.H4]: (0, eV.A)(n),
                    [nu._A]: n.id === u || n.type === eu.lAJ.REPLY,
                    [nu.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: E,
                onBlur: x,
                childrenRepliedMessage:
                    n.type === eu.lAJ.REPLY &&
                    nv({
                        ...e,
                        setPopout: I,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: g,
                        replyMessage: j,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: np({
                    messageProps: e,
                    setPopout: I,
                    messagePopouts: S,
                    replyReference: g,
                    author: F,
                    repliedMessage: j,
                    roleIcon: W,
                }),
                childrenAccessories: (0, ts.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: O,
                    hasBailedAst: U,
                    isInteracting: P,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nD.A)(e),
                childrenMessageContent: K,
                onMouseMove: M,
                onMouseLeave: v,
                "aria-labelledby": H,
                "aria-describedby": V,
                hasThread: !1,
                author: F,
            }),
        ],
    });
}
let nk = o.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: a,
            channel: { id: c },
            compact: u = !1,
            className: A,
            flashKey: p,
            groupId: f,
            renderContentOnly: C,
        } = e;
    eD()(i.type !== eu.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let E = eu.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: x, ...S } = (0, h.rm)(e.id ?? ""),
        _ = B.hD.useSetting(),
        I = B.rs.useSetting(),
        T = (0, m.bG)([ew.A], () => ew.A.getMessageByReference(E)),
        { popouts: y, selected: j, setPopout: b } = (0, tn.A)(i.id, eT.Fd),
        M = (0, eJ.VL)(i, a, b),
        v = (0, eJ.ri)(i, a),
        {
            handleMouseEnter: R,
            handleMouseLeave: D,
            hasHovered: L,
            isHovered: P,
        } = (0, eJ.yp)({ groupId: f, message: i, defaultValue: j }),
        { isFocused: k, hasFocused: G, handleFocus: O, handleBlur: U } = (0, eJ.G8)(x),
        w = o.useCallback(
            (e) => {
                O(e), R(e);
            },
            [O, R],
        ),
        F = o.useCallback(
            (e) => {
                U(e), D();
            },
            [U, D],
        ),
        H = (0, m.bG)([W.A], () => W.A.isEditing(c, s), [c, s]),
        V = (0, m.bG)([N.A], () => N.A.keyboardModeEnabled),
        K = j || H || (V && k),
        z = K || P,
        $ = (0, m.bG)(
            [eF.A],
            () => i.hasFlag(eu.pr7.HAS_THREAD) && eF.A.getChannel(el.default.castMessageIdAsChannelId(i.id)),
        ),
        q = i.isFirstMessageInForumPost(a),
        J = (0, eO.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        Z = (0, m.bG)([eH.A], () => eH.A.isDeveloper),
        {
            content: Y,
            hasSpoilerEmbeds: X,
            hasBailedAst: Q,
        } = (0, tl.A)(i, {
            hideSimpleEmbedContent: _ && I,
            formatInline: !1,
            allowList: q || J,
            allowHeading: q || J,
            allowLinks: !0,
            allowDevLinks: Z,
            previewLinkTarget: !0,
        }),
        ee = tt(s, c, V),
        et = (0, eK.Ay)(i),
        en = (0, m.bG)([eU.A], () => eU.A.getPendingReply(c)),
        ei =
            ((t = o.useRef(p)),
            o.useEffect(() => {
                t.current = p ?? t.current;
            }),
            p ?? t.current),
        es = (0, eG.$7)({ guildId: a.guild_id, roleId: et.iconRoleId }),
        ea = (0, eP.A)(c, s)?.color ?? null,
        eo = (0, eq.fF)(i, f),
        ed = (0, eq.ZD)(i),
        eh = (0, m.bG)([ek.A], () => ek.A.getMessage(s), [s]),
        em = (0, eB.bW)(a.guild_id, "ChatMessage"),
        eA = (0, ti.A)({ message: i, channel: a, officialMessagesEnabled: em }),
        eg = o.useRef(window),
        ep = null != eh;
    (n =
        i.type === eu.lAJ.CUSTOM_GIFT
            ? ""
            : !H && ep
              ? (function (e, t) {
                    let { message: n, compact: l } = e;
                    return (0, r.jsx)(tx, { message: n, content: t, compact: l ?? !1 });
                })(e, Y)
              : (0, nf.A)(e, Y, H)),
        (n = (0, r.jsx)(eZ.x, { value: z, children: n }));
    let ef = i.id === f,
        eC = (0, r.jsx)(g.vN, {
            offset: { left: 4, right: 4 },
            children: (0, r.jsx)("li", {
                id: l,
                className: nu.Nt,
                "aria-setsize": -1,
                style: null != ea ? { backgroundColor: ea } : void 0,
                children: (0, r.jsx)(e$.A, {
                    ...S,
                    "aria-setsize": -1,
                    "aria-roledescription": tg.intl.string(tg.t.BAB0yK),
                    "aria-labelledby": eo,
                    "aria-describedby": ed,
                    onFocus: w,
                    onBlur: F,
                    onContextMenu: M,
                    onKeyDown: ee,
                    onClick: v,
                    compact: u,
                    contentOnly: C,
                    className: d()(A, {
                        [nu.iU]: !0,
                        [nu.HJ]: !u,
                        [nu.mK]: i.mentioned,
                        [nu.M1]: (0, ec.ec)(i),
                        [nu.SH]: i.type === eu.lAJ.NITRO_NOTIFICATION,
                        [nu.Sg]: i.hasFlag(eu.pr7.IS_GUILD_OFFICIAL) && em,
                        [nu.H4]: (0, eV.A)(i),
                        [nu._A]: !C && (ef || i.type === eu.lAJ.REPLY),
                        [nu.wH]: K,
                        [nu.$n]: en?.message.id === i.id,
                        [nu.$w]: i.isCommandType() && i.state === eu.cmJ.SENDING,
                        [nu.DX]: ep,
                    }),
                    zalgo: !H,
                    childrenRepliedMessage:
                        C || i.type !== eu.lAJ.REPLY
                            ? void 0
                            : nv({
                                  ...e,
                                  setPopout: b,
                                  referencedUsernameProfile: y.referencedUsernameProfile,
                                  referencedAvatarProfile: y.referencedAvatarProfile,
                                  replyReference: E,
                                  replyMessage: T,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, r.jsx)(nR, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, b, y),
                    childrenHeader: C
                        ? void 0
                        : np({
                              messageProps: e,
                              setPopout: b,
                              messagePopouts: y,
                              replyReference: E,
                              author: et,
                              repliedMessage: T,
                              roleIcon: es,
                          }),
                    childrenAccessories: (0, ts.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: X,
                        hasBailedAst: Q,
                        handleContextMenu: M,
                        isInteracting: z,
                        isAutomodBlockedMessage: ep,
                        forceAddReactions: i.type === eu.lAJ.EMOJI_ADDED,
                    }),
                    childrenButtons:
                        L || G
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: l, moreUtilities: i },
                                          isFocused: s,
                                          buttonProps: { message: a, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = a.state === eu.cmJ.SENDING,
                                      m = a.id === c,
                                      A = (0, er.Lt)(a.flags, eu.pr7.EPHEMERAL),
                                      g = a.state === eu.cmJ.SEND_FAILED;
                                  return h || (A && !g)
                                      ? null
                                      : (0, r.jsx)(nd, {
                                            className: nu.Uo,
                                            innerClassName: nu.Mc,
                                            isHeader: !d && m && !(0, eV.A)(a),
                                            isReply: !d && a.type === eu.lAJ.REPLY && null != a.messageReference,
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
                                  setPopout: b,
                                  messagePopouts: y,
                                  isFocused: P || k,
                                  messageWindow: eg.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nD.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: R,
                    onMouseLeave: D,
                    hasThread: !C && i.hasFlag(eu.pr7.HAS_THREAD) && null != $,
                    isSystemMessage: (0, eV.A)(i),
                    hasReply: i.type === eu.lAJ.REPLY,
                    messageRef: (e) => {
                        (eA.current = e), (eg.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: et,
                }),
            }),
        });
    return null != ei
        ? (0, r.jsx)(
              eW,
              { flashKey: ei, className: d()({ [nu.bB]: !0, [nu._A]: !u && i.id === f }), children: eC },
              `bg-flash-${l}`,
          )
        : eC;
});
function nG(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, ey.vq)(l, HTMLElement); ) (n += l.offsetTop ?? 0), (l = l.offsetParent);
    return n;
}
function nO(e) {
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
let nU = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class nw {
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
            const t = z.A.isAtBottom(e.channel.id);
            (this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (z.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null));
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
        return null == t ? null : t.getElementById((0, eI.j)(n, e));
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
            let n = nO(e.messages);
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
        if (null != a && a.state === eu.cmJ.SENDING && r?.id !== a.id) return void this.setScrollToBottom();
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: eT.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, ey.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = nG(l, i),
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
        return this.props.channel.isForumPost() ? eT.Gt : eT.k8;
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
            if (!(0, ey.vq)(t)) continue;
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
                  padding: eT.mZ + this.props.additionalMessagePadding,
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
    updateVisibleMessagesDebounced = ep().debounce(ev.s_, 300);
    setAutomaticAnchor(e) {
        (this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id);
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? nU;
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
                (0, ej._9)(this.props.channel.id, this.props.windowId);
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
            let n = nO(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, ey.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : eT.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(eT.q4),
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
            s = nG(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = nO(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1 })
            : this.props.hasUnreads &&
                this.props.channel.type !== eu.rbe.GUILD_VOICE &&
                this.props.channel.type !== eu.rbe.GUILD_STAGE_VOICE
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
                    limit: Math.min(eu.EMb, 2 * (0, eA.h)("scrollManager.loadMore")),
                    truncate: !0,
                });
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.ref.current?.scrollTo({ to: e, animate: !N.A.useReducedMotion && t, callback: n }),
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
            I.A.jumpToPresent(n.id, (0, eA.h)("scrollManager.jumpToPresent")),
                (0, eM.uh)(n.getGuildId() ?? eu.ME, n.id);
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensionsDebounced = ep().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) eN.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            eN.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
            N.A.useReducedMotion ||
            (el.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let s = () => {
            (this.jumping = !1),
                (0, ey.vq)(i) && ((i.tabIndex = -1), i.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, ey.vq)(i)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      i,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : eT.mZ,
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
            else return s ? a - eT.N0 - 2 : a + 500;
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
            (this._automaticAnchorCallbacks = ep().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ep().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ep().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ep().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, ej.Z5)(this.props.channel.id, this.props.windowId);
    }
}
n(667532);
var nF = n(95561),
    nH = n(486227),
    nB = n(731738),
    nV = n(192308),
    nK = n(534514),
    nz = n(832712),
    nW = n(807393),
    n$ = n(381689),
    nq = n(754302),
    nJ = n(632738),
    nZ = n(544231),
    nY = n(349435),
    nX = n(665909);
function nQ(e) {
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
var n0 = n(821609),
    n1 = n(789645),
    n2 = n(834581);
function n3(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        a = o.useCallback(() => {
            l?.();
        }, [l]);
    return (0, r.jsxs)("div", {
        className: n2.HZ,
        children: [
            (0, r.jsxs)("div", {
                className: n2.Be,
                children: [
                    (0, r.jsx)(nQ, { alt: "", size: 32 }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(nK.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, r.jsx)(tc.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n2.Uo,
                children: i?.map((e, t) =>
                    (0, r.jsx)(
                        n0.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, r.jsx)(eL.D, {
                      className: n2.b,
                      onClick: a,
                      role: "button",
                      "aria-label": tg.intl.string(tg.t.WAI6xu),
                      children: (0, r.jsx)(n1.P, { size: "md", color: "currentColor", className: n2.b }),
                  })
                : null,
        ],
    });
}
function n4(e) {
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
        nW.A.increment({ name: nB.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = o.useCallback(() => {
        c?.(), (0, nX._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: nX.Wm.USER_BANNER_DISMISS });
    }, [c, t, n, l, i]);
    return (0, r.jsx)(n3, { buttons: d, description: a, header: s, onDismiss: u });
}
var n7 = n(477427);
function n5(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: tg.intl.string(tg.t.wSZfJR), description: tg.intl.string(tg.t.CRwzW5) },
            { title: tg.intl.string(tg.t.cmMUaB), description: tg.intl.string(tg.t.n6G1ue) },
            { title: tg.intl.string(tg.t["5SPKSy"]), description: tg.intl.string(tg.t.eyjeJQ) },
        ],
        a = o.useCallback(() => {
            (0, nZ.xi)(t, [l]);
        }, [t, l]),
        c = (e) => {
            nz.A.updateChannelOverrideSettings(null, t, { muted: !0 }, n7.fd.Muted),
                n$.A.showMuteSuccessToast(i, t),
                (0, nX._$)({ channelId: t, warningId: l, senderId: i, warningType: nY._j.LIKELY_ATO, cta: e }),
                a();
        };
    return (
        o.useEffect(() => {
            (0, nX.mO)(eu.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: nY._j.LIKELY_ATO,
            }),
                nW.A.increment({ name: nB.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, r.jsx)(n4, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: nY._j.LIKELY_ATO,
            header: tg.intl.string(tg.t.R8UsiI),
            description: tg.intl.string(tg.t.lI8nQl),
            onDismiss: a,
            buttons: [
                {
                    text: tg.intl.string(tg.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, nV.openModalLazy)(async () => {
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
                                    description: tg.intl.string(tg.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, r.jsx)(
                                            nq.B,
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
                                            nJ.PQ,
                                            {
                                                title: tg.intl.string(tg.t.ftIK2A),
                                                description: tg.intl.string(tg.t.w2ve0t),
                                                buttonText: tg.intl.string(tg.t.ftIK2A),
                                                onButtonPress: () => {
                                                    c(nX.Wm.USER_MODAL_MUTE), o();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, r.jsx)(eL.D, {
                                        onClick: () =>
                                            (0, nX._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: nY._j.LIKELY_ATO,
                                                cta: nX.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, r.jsx)(nK.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: tg.intl.format(tg.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, nX._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: nY._j.LIKELY_ATO,
                                cta: nX.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: tg.intl.string(tg.t.ftIK2A), onClick: () => c(nX.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var n8 = n(564771),
    n9 = n(310784),
    n6 = n.n(n9),
    le = n(534890),
    lt = n(922529),
    ln = n(507610);
function ll(e) {
    let { item: t, channel: n, index: l } = e,
        i = (0, m.bG)([G.A], () => G.A.getSelectedConversation(n.id)),
        s = (0, m.bG)([G.A], () => G.A.getSelectedConversationColor(n.id));
    if (null == i) return null;
    let a = null != t.content,
        o = null != s ? n6()(s).alpha(1).css() : void 0;
    return (0, r.jsx)("div", {
        style: null != o ? { "--conversation-color": o } : void 0,
        children: (0, r.jsx)(
            lt.A,
            {
                className: d()(ln.yF, a ? ln.AC : ln.xR),
                contentClassName: a ? ln.Ij : ln.Xe,
                children: a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(le.o, { size: "xs", color: "currentColor", className: ln.Kk }),
                              t.content,
                          ],
                      })
                    : (0, r.jsx)(le.o, { size: "xs", color: "currentColor", className: ln.Kk }),
            },
            `conv-divider-${t.contentKey ?? l}`,
        ),
    });
}
var li = n(495273),
    ls = n(429933),
    la = n(93246),
    lr = n(95701),
    lo = n(808728),
    lc = n(427262),
    ld = n(314307),
    lu = n(713654),
    lh = n(435470),
    lm = n(376310),
    lA = n(42362);
function lg(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)("div", {
        className: d()(lA._, { [lA.L]: l }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(lm.A, { tag: e, onRemove: i, size: null == i ? lm.A.Sizes.SMALL : lm.A.Sizes.MEDIUM }, e.id),
        ),
    });
}
var lp = n(873185);
function lf(e) {
    let { channel: t } = e,
        n = (0, lh.kt)(t),
        { firstMessage: l } = (0, m.cf)([tW.A], () => tW.A.getMessage(t.id)),
        i = new Set((0, lh.zt)(t, n)),
        s = (0, lu.gU)(t) ?? le.o,
        a = (0, P.Ay)(t);
    return (0, r.jsxs)(ld.Ay, {
        channelId: t.id,
        className: lp.kL,
        children: [
            (0, r.jsx)("div", { className: lp.P0, children: (0, r.jsx)(s, { className: lp.Kk, strokeWidth: 1.75 }) }),
            (0, r.jsx)(ld.cr, { className: lp.wx, children: a }),
            null == l &&
                (0, r.jsx)(tc.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: tg.intl.string(tg.t.mE3KJN),
                }),
            (0, r.jsx)(lg, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var lC = n(289873),
    lE = n(548118),
    lx = n(513461),
    lS = n(654265),
    l_ = n(561446),
    lI = n(806700);
function lT(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, m.bG)([X.default], () => X.default.getUser(t.userId));
    return (0, r.jsxs)("div", {
        className: lI.I8,
        children: [
            (0, r.jsxs)("div", {
                className: lI.Ov,
                children: [
                    null != n &&
                        (0, r.jsxs)("div", {
                            className: lI.yB,
                            children: [
                                (0, r.jsx)(lE.Ay, { guild: n, active: !0, size: lE.Ay.Sizes.SMOL, className: lI.$f }),
                                (0, r.jsx)(nK.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, r.jsx)(nK.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: tg.intl.format(tg.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== lx.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === lx.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("hr", { className: lI.g2 }),
                            (0, r.jsxs)("div", {
                                className: lI.fs,
                                children: [
                                    (0, r.jsx)(tc.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, r.jsx)(tc.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function ly(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, lS.A)(t.id);
    return (0, r.jsx)(ld.Ay, {
        channelId: t.id,
        className: lI.kL,
        children:
            null != l && null != l.formResponses
                ? (0, r.jsxs)("div", {
                      className: lI.KJ,
                      children: [
                          (0, r.jsx)("div", { children: (0, r.jsx)(lT, { guild: i, joinRequest: l }) }),
                          (0, r.jsx)(l_.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, r.jsx)(lC.y, {})
                  : null,
    });
}
var lN = n(825484),
    lj = n(778712),
    lb = n(97808),
    lM = n(241541),
    lv = n(793574),
    lR = n(571694),
    lD = n(922301),
    lL = n(368919),
    lP = n(598104),
    lk = n(990078),
    lG = n(396787),
    lO = n(817789);
function lU(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, r.jsx)(lk.m, {
              position: "bottom",
              text: tg.intl.string(tg.t["0qPSMV"]),
              children: (0, r.jsxs)(eL.D, {
                  className: d()(lO.e, l),
                  onClick: () => (0, lG.jv)(t.id, s),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: lO.Z,
                          children: (0, r.jsx)(tL.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", { className: l, children: n });
}
var lw = n(73028),
    lF = n(880682),
    lH = n(854627),
    lB = n(322923);
function lV(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, m.bG)([N.A], () => N.A.useReducedMotion),
        a = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, lH.A)({ userId: i?.id, size: lj._3.SIZE_80, animateOnHover: !0 }),
        [h, A] = o.useState(!1),
        g = o.useCallback(() => {
            d.onMouseEnter(), A(!0);
        }, [d]),
        p = o.useCallback(() => {
            d.onMouseLeave(), A(!1);
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, r.jsxs)(ld.Ay, {
        channelId: n.id,
        onMouseEnter: g,
        onMouseLeave: p,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, r.jsx)(lU, {
                      channel: n,
                      editable: !0,
                      location: lv.A.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(lP.A, { channel: n, size: lj._3.SIZE_80, animated: t, "aria-label": a }),
                  })
                : (0, r.jsx)(lb.eu, {
                      "aria-label": a,
                      size: lj._3.SIZE_80,
                      src: (0, lR.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, r.jsx)(ld.cr, {
                children: f
                    ? (0, r.jsx)(lL.A, {
                          userName: a,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: h ? lD.G.ANIMATED : lD.G.STATIC,
                          loop: !0,
                      })
                    : a,
            }),
            (0, r.jsx)(ld.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(lN.e, {
                    className: lB.U,
                    children: [
                        (0, r.jsx)(lF.NE, { channel: n, text: tg.intl.string(tg.t["6Qgrev"]), icon: lM.D }),
                        (0, r.jsx)(n0.$, {
                            icon: tL.R,
                            variant: "secondary",
                            text: tg.intl.string(tg.t["5Q9+/L"]),
                            "aria-label": tg.intl.string(tg.t["5Q9+/L"]),
                            onClick: () => (0, lw.U)(n.id, lv.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var lK = n(136722),
    lz = n(342952),
    lW = n(177953),
    l$ = n(725570),
    lq = n(435183),
    lJ = n(685374),
    lZ = n(87e3),
    lY = n(474462);
function lX(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: a } = e;
    return (
        (t = i
            ? (0, r.jsx)(lZ.A, { size: 12, color: s, className: lY.TS })
            : (0, r.jsx)("div", { className: lY.yY, style: { backgroundColor: s } })),
        (0, r.jsxs)("div", { className: d()(n, lY.JC), style: { "--custom-role-label-color": s }, children: [t, a, l] })
    );
}
var lQ = n(468689),
    l0 = n(46054),
    l1 = n(34457),
    l2 = n(317525),
    l3 = n(488926),
    l4 = n(84476);
function l7(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: a = !1,
        verified: o = !1,
    } = e;
    return (0, r.jsx)(eL.D, {
        className: d()(t, l4.x6, { [l4.r9]: a }),
        onClick: a ? void 0 : s,
        "aria-disabled": a,
        role: "button",
        children: (0, r.jsx)(lX, {
            className: l4.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, r.jsx)(n1.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: l4.Tj,
                    colorClass: l4.eG,
                }),
        }),
    });
}
var l5 = n(516757);
function l8(e) {
    let { channel: t } = e,
        [n, l] = o.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        a = (0, m.bG)([l2.A], () => (null != s ? l2.A.getSortedRoles(s) : void 0)),
        c = (0, m.bG)([X.default, t0.A], () => X.default.getUser(t0.A.getGuild(s)?.ownerId)),
        u = o.useMemo(() => (null != a ? a.filter((e) => !(0, l1.Oy)(e)) : []), [a]),
        h = o.useMemo(
            () =>
                ep()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = l3.aH({ forceRoles: { [e.id]: e }, context: t });
                        return lK.X8(n, lK.kg(eu.xBc.ADMINISTRATOR, eu.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        A = (0, m.yK)([X.default], () => {
            let e = {};
            for (let n of (null != c && (e[c.id] = c), Object.values(t.permissionOverwrites))) {
                if (n.type !== nC.r2.MEMBER || null != e[n.id]) continue;
                let t = X.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return ep()(e)
                .filter((e) => {
                    let n = l3.$3({ permission: eu.xBc.ADMINISTRATOR, user: e, context: t }),
                        l = t.permissionOverwrites[e.id] ?? l3.x3,
                        i = lK.zy(l.allow, eu.xBc.VIEW_CHANNEL);
                    return n || i;
                })
                .value();
        }, [t, c]),
        g = J.A.can(eu.xBc.MANAGE_CHANNELS, t) || J.A.can(eu.xBc.MANAGE_ROLES, t),
        p = o.useCallback(() => l(!1), []);
    return (0, r.jsxs)(ld.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(ld.WK, { locked: !0, channelType: t.type }),
            (0, r.jsx)(ld.cr, { children: tg.intl.format(tg.t.I3R7Vn, { channelName: i }) }),
            (0, r.jsx)(ld.j1, {
                className: tC.PT,
                children: tg.intl.format(tg.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => l0.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, r.jsxs)("div", {
                      className: l5.$x,
                      children: [
                          (0, r.jsx)(n0.$, {
                              size: "sm",
                              variant: "secondary",
                              text: tg.intl.string(tg.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: lW.n,
                          }),
                          (0, r.jsx)(n0.$, {
                              size: "sm",
                              variant: "secondary",
                              text: tg.intl.string(tg.t["3gUsJb"]),
                              onClick: function () {
                                  lq.Ay.open(t.id);
                              },
                              icon: tL.R,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: l5.ol,
                children: [
                    (function () {
                        if (1 !== A.length || h.length > 0)
                            return (0, r.jsx)(lz.A, { guildId: t.guild_id, className: l5.HD, maxUsers: 5, users: A });
                        let e = A[0],
                            n = lc.Ay.getName(e);
                        return (0, r.jsxs)("div", {
                            className: l5.HD,
                            children: [
                                (0, r.jsx)(lb.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lj._3.SIZE_24,
                                }),
                                (0, r.jsx)(tc.E, {
                                    tag: "span",
                                    className: l5.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, r.jsx)(tc.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: tg.intl.string(tg.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    h.map((e, n) => {
                        let l = e.colorString ?? eu.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return g
                            ? (0, r.jsx)(
                                  l7,
                                  {
                                      className: d()(l5.JC, { [l5.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !g,
                                      verified: i,
                                      onClick: () => {
                                          lQ.A.open(t.guild_id, eu.BEX.MEMBERS), lQ.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  lX,
                                  {
                                      className: d()(l5.JC, { [l5.HV]: n === h.length - 1 }),
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
                ? (0, r.jsx)(l$.aF, {
                      renderModal: (e) =>
                          (0, r.jsx)(lJ.default, { ...e, onClose: () => (p(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var l9 = n(329856);
function l6(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, m.bG)([J.A], () => J.A.can(eu.xBc.MANAGE_CHANNELS, t) && lr.bk.has(t.type));
    return (0, r.jsxs)(ld.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(ld.WK, { channelType: t.type }),
            (0, r.jsx)(ld.cr, { children: tg.intl.format(tg.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(ld.j1, {
                className: tC.PT,
                children: tg.intl.format(tg.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => l0.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, r.jsx)("div", {
                      className: l9.U,
                      children: (0, r.jsx)(n0.$, {
                          size: "sm",
                          variant: "secondary",
                          text: tg.intl.string(tg.t["3gUsJb"]),
                          onClick: () => {
                              lq.Ay.open(t.id);
                          },
                          icon: tL.R,
                      }),
                  })
                : null,
        ],
    });
}
var ie = n(463930),
    it = n(442433),
    il = n(688810),
    ii = n(967144),
    is = n(342296),
    ia = n(696451),
    ir = n(415296);
function io(e) {
    let { userId: t, channel: l } = e,
        i = o.useRef(null),
        { analyticsLocations: s } = (0, il.Ay)(lv.A.USERNAME),
        a = (0, m.bG)([X.default], () => X.default.getUser(t)),
        c = (0, m.bG)([ia.Ay], () => (null != t ? ia.Ay.getMember(l.guild_id, t) : null)),
        u = (0, ii.gn)(l.guild_id, t ?? void 0, c?.colorStrings ?? null);
    function h(e) {
        if (null == a) return null;
        (0, it.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("99830"),
                n.e("94881"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("8757"),
                n.e("85968"),
                n.e("60195"),
                n.e("29787"),
                n.e("94000"),
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
    let A = c?.nick ?? lc.Ay.getName(a) ?? "???",
        g = c?.colorString;
    return null == a
        ? (0, r.jsx)("span", { className: d()(ir.eM, ir.sL), children: A })
        : (0, r.jsx)(il.f5, {
              value: s,
              children: (0, r.jsx)(is.A, {
                  targetElementRef: i,
                  user: a,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: c?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(eL.D, {
                          ...e,
                          innerRef: i,
                          tag: "span",
                          className: ir.eM,
                          onContextMenu: h,
                          children: (0, r.jsx)(ie.g, { name: A, colorString: g ?? null, colorStrings: u }),
                      }),
              }),
          });
}
function ic(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(tc.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: ir.VA,
                          children: tg.intl.format(tg.t.imPXd5, {
                              usernameHook: (e, n) => (0, r.jsx)(io, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === eu.rbe.PRIVATE_THREAD
                      ? (0, r.jsx)(tc.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: tg.intl.string(tg.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function id(e) {
    let { channel: t } = e,
        n = (0, lu.gU)(t) ?? tR.y,
        l = (0, P.Ay)(t);
    return (0, r.jsxs)(ld.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)("div", { className: ir.P0, children: (0, r.jsx)(n, { className: ir.Kk }) }),
            (0, r.jsx)(ld.cr, { children: l }),
            (0, r.jsx)(ic, { channel: t }),
        ],
    });
}
var iu = n(222983),
    ih = n(157550),
    im = n(957283),
    iA = n(189213),
    ig = n(824552),
    ip = n(933958),
    iC = n(869003),
    iE = n(841595),
    ix = n(546183),
    iS = n(543465),
    i_ = n(308528),
    iI = n(928658),
    iT = n(978914),
    iy = n(977347);
function iN(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: a,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, m.bG)([nx.A], () => nx.A.getRelationshipType(t), [t])) === eu.eA$.NONE ||
                    l === eu.eA$.BLOCKED ||
                    l === eu.eA$.PENDING_INCOMING,
                s = n || i,
                a = (0, iy.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, iT.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, l),
        { channelId: c } = (0, im.N)(),
        d = t.id === c,
        u = !t5.Fr && !d,
        h = o.useCallback(() => {
            null != i &&
                (0, iI.b8)(i, () => {
                    i_.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && a)
        ? null
        : (0, r.jsx)(n0.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: h,
              text: tg.intl.string(tg.t.HHZmDn),
          });
}
function ij(e) {
    let { channel: t } = e,
        l = (0, m.bG)([iS.Ay], () => iS.Ay.isChannelMuted(null, t.id));
    return (0, r.jsx)(n0.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? tg.intl.string(tg.t.YqAjXy) : tg.intl.string(tg.t.w4m945),
        onClick: function () {
            (0, nV.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function ib(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, m.bG)([ip.Ay], () => ip.Ay.getSelfEmbeddedActivities());
    function s() {
        ig.A.delete(l.id);
        let e = i.get(n.id);
        null != e && iC.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, r.jsx)(n0.$, {
        variant: "secondary",
        text: tg.intl.string(tg.t["5S3sQF"]),
        onClick: () => {
            (0, nV.openModal)((e) =>
                (0, r.jsx)(iA.Modal, {
                    title: tg.intl.string(tg.t["DT39A+"]),
                    subtitle: tg.intl.formatToPlainString(tg.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: tg.intl.string(tg.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: tg.intl.string(tg.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                s(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                t1.default.track(eu.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function iM(e) {
    var t;
    let { channel: n, user: l } = e,
        i =
            ((t = l?.id ?? eu.dJq),
            (0, m.bG)([iE.A], () => (null !== t ? iE.A.getUserProfile(t ?? eu.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: a } = (0, m.cf)([ix.default], () => ({
            authorizedAppToken: ix.default.getNewestTokenForApplication(i?.id),
            authorizedAppsFetchState: ix.default.getFetchState(),
        }));
    return (o.useEffect(() => {
        l.bot && a === ix.FetchState.NOT_FETCHED && ig.A.fetch();
    }, [l.bot, a]),
    l.bot && null != i && null != s)
        ? (0, r.jsxs)(lN.e, {
              size: "sm",
              children: [
                  (0, r.jsx)(ij, { channel: n }),
                  (0, r.jsx)(ib, { application: i, channel: n, oauth2Token: s }),
                  (0, r.jsx)(iN, { channel: n, user: l }),
              ],
          })
        : (0, r.jsx)(lN.e, { size: "sm", children: (0, r.jsx)(iN, { channel: n, user: l }) });
}
var iv = n(573435),
    iR = n(903209),
    iD = n(975732),
    iL = n(486020),
    iP = n(518477),
    ik = n(864401);
function iG(e) {
    let { userId: t, channelId: n, showDivider: l = !1 } = e,
        i = (0, m.bG)([iE.A], () => iE.A.getMutualGuilds(t), [t]),
        s = X.default.getUser(t);
    o.useEffect(() => {
        null == i && null != s && (0, iR.A)(t, s.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [i, t, s]);
    let a = o.useMemo(() => {
        if (null == i) return [];
        let e = i.slice(0, 3),
            t = e.length - 1;
        return e
            .map((e, n) => {
                let { guild: l } = e,
                    i = iL.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 24 });
                if (null == i) return null;
                let s = (0, r.jsx)("img", { src: i, alt: "", className: ik.my }, l.id);
                return n === t
                    ? s
                    : (0, r.jsx)(
                          iv.Ay,
                          {
                              className: ik.cp,
                              mask: iv.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              width: 24,
                              height: 24,
                              children: s,
                          },
                          l.id,
                      );
            })
            .filter(t3.Vq);
    }, [i]);
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: d()(ik.kL, l ? ik.yF : null),
              children: (0, r.jsx)(tc.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: tg.intl.string(tg.t.zjVh8h),
              }),
          })
        : (0, r.jsxs)(eL.D, {
              className: d()(ik.kL, ik.vk, { [ik.yF]: l }),
              onClick: () => {
                  (0, iD.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: iP.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [lv.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, r.jsx)("div", { className: ik.H, children: a }),
                  (0, r.jsx)(tc.E, {
                      className: ik.NI,
                      variant: "text-sm/normal",
                      children: tg.intl.format(tg.t.eE3oep, { count: i.length }),
                  }),
              ],
          });
}
var iO = n(717398),
    iU = n(327166),
    iw = n(390848),
    iF = n(175709);
function iH(e) {
    let { userId: t } = e;
    return (0, r.jsx)(n0.$, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
            iO.A.blockUser(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: tg.intl.string(tg.t.l4Emac),
    });
}
function iB(e) {
    let { userId: t, showingBanner: n } = e,
        l = (0, iU.D)(t);
    return n
        ? null
        : (0, r.jsx)(n0.$, {
              variant: "primary",
              onClick: () => {
                  iO.A.addRelationship({ userId: t, context: { location: eu.liQ.DM_CHANNEL } });
              },
              text: l,
          });
}
function iV(e) {
    let { userId: t } = e;
    return (0, r.jsx)(n0.$, {
        variant: "secondary",
        onClick: () => {
            iO.A.removeFriend(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: tg.intl.string(tg.t.cvSt1J),
    });
}
function iK(e) {
    let { userId: t } = e;
    return (0, r.jsx)(n0.$, {
        variant: "secondary",
        onClick: () => {
            iO.A.unblockUser(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: tg.intl.string(tg.t.XyHpKH),
    });
}
function iz(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, m.bG)([nx.A], () => nx.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, iw.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: eu.liQ.DM_CHANNEL,
        });
    return (0, r.jsxs)("div", {
        className: iF.K,
        children: [
            (0, r.jsx)(tc.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: tg.intl.format(tg.t.uIomXw, { username: lc.Ay.getName(n) }),
            }),
            (0, r.jsxs)(lN.e, {
                size: "sm",
                children: [
                    (0, r.jsx)(n0.$, { variant: "primary", onClick: s, text: tg.intl.string(tg.t["+WbSn5"]) }),
                    (0, r.jsx)(n0.$, {
                        variant: "secondary",
                        onClick: () => {
                            iO.A.cancelFriendRequest(n.id, { location: eu.liQ.DM_CHANNEL });
                        },
                        text: tg.intl.string(tg.t.rQSndv),
                    }),
                    (0, r.jsx)(iH, { userId: n.id }),
                    l ? null : (0, r.jsx)(iN, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function iW(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        s = (0, m.bG)([nx.A], () => nx.A.getRelationshipType(l.id), [l.id]);
    if (s === eu.eA$.PENDING_INCOMING) return (0, r.jsx)(iz, { channel: n, user: l, showingBanner: i });
    switch (s) {
        case eu.eA$.NONE:
            l.bot || (t = (0, r.jsx)(iB, { userId: l.id, showingBanner: i }));
            break;
        case eu.eA$.FRIEND:
            t = (0, r.jsx)(iV, { userId: l.id });
            break;
        case eu.eA$.BLOCKED:
            t = (0, r.jsx)(iK, { userId: l.id });
            break;
        case eu.eA$.PENDING_OUTGOING:
            t = (0, r.jsx)(n0.$, { variant: "primary", disabled: !0, text: tg.intl.string(tg.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let a = s !== eu.eA$.BLOCKED;
    return (0, r.jsxs)(lN.e, {
        size: "sm",
        children: [t, a ? (0, r.jsx)(iH, { userId: l.id }) : null, i ? null : (0, r.jsx)(iN, { channel: n, user: l })],
    });
}
var i$ = n(691540),
    iq = n(857250),
    iJ = n(97483),
    iZ = n(92650),
    iY = n(138298),
    iX = n(761640);
function iQ(e) {
    let { channel: t, user: n } = e,
        l = o.useCallback(() => {
            (0, i$.P0)((0, iq.o)(tg.intl.string(tg.t.a2j0hv), iJ.Ck.FAILURE));
        }, []),
        i = o.useCallback(() => {
            iY.A.closeChannelSidebar(iX.fe);
        }, []),
        s = o.useCallback(() => {
            iY.A.closeChannelSidebar(iX.fe);
        }, []),
        {
            acceptMessageRequest: a,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, iZ.t)({ user: X.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        A = d || u || h || m;
    return (0, r.jsxs)(lN.e, {
        size: "sm",
        children: [
            (0, r.jsx)(n0.$, {
                variant: "primary",
                disabled: A,
                onClick: () => a(t.id),
                loading: d,
                text: tg.intl.string(tg.t.Kz8Pwr),
            }),
            (0, r.jsx)(n0.$, {
                variant: "secondary",
                disabled: A,
                onClick: () => c(t.id),
                loading: u,
                text: tg.intl.string(tg.t.B2nygW),
            }),
            (0, r.jsx)(iN, { channel: t, user: n }),
        ],
    });
}
var i0 = n(331674);
function i1(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, im.N)(),
        a = (0, m.bG)([ih.A], () => null != s && ih.A.isSpam(s), [s]),
        o = (0, m.bG)([nx.A], () => nx.A.getRelationshipType(l.id), [l.id]),
        c = n.id === s,
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        h = i0.n;
    return (
        u
            ? (t = null)
            : a || c
              ? (t = (0, r.jsx)(iQ, { channel: n, user: l }))
              : d
                ? (t = (0, r.jsx)(iM, { channel: n, user: l }))
                : ((t = (0, r.jsx)(iW, { channel: n, user: l, showingBanner: i })),
                  o === eu.eA$.PENDING_INCOMING && (h = i0.O)),
        (0, r.jsxs)("div", {
            className: h,
            children: [(0, r.jsx)(iG, { userId: l.id, channelId: n.id, showDivider: h !== i0.O }), t],
        })
    );
}
var i2 = n(746080),
    i3 = n(818050);
function i4(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, li.Ae)(n),
        i = (0, m.bG)([lo.Ay], () => null != n.guild_id && n === lo.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, ls.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(lf, { channel: n });
    if (lr.Le.has(n.type)) return (0, r.jsx)(id, { channel: n });
    if (i) return (0, r.jsx)(iu.A, { channel: n });
    if (l) return (0, r.jsx)(l8, { channel: n });
    return (0, r.jsx)(l6, { channel: n });
}
function i7(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, m.bG)([X.default], () => (t.isPrivate() ? X.default.getUser(t.getRecipientId()) : null)),
        a = lc.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, m.cf)([J.A], () => ({
            canManageRoles: J.A.can(eu.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: J.A.can(eu.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, r.jsx)(lV, { channel: t, children: tg.intl.string(tg.t.Rzvnig) });
    if (i === eu.rbe.DM)
        return (0, r.jsxs)(lV, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, r.jsx)(nK.D, { variant: "heading-xl/medium", className: i3.SX, children: a }),
                tg.intl.format(tg.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, r.jsx)(la.Y, { userId: s.id }) : null,
                null != s ? (0, r.jsx)(i1, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, r.jsxs)(ld.Ay, {
                channelId: t.id,
                children: [
                    (0, r.jsx)(ld.cr, { children: tg.intl.format(tg.t.I3R7Vn, { channelName: l }) }),
                    (0, r.jsx)(ld.j1, { children: tg.intl.string(tg.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(i2.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(ly, { channel: t });
        else return (0, r.jsx)(lV, { channel: t, children: tg.intl.format(tg.t.MFwcqO, { name: l }) });
    return c
        ? (0, r.jsx)(i4, { channel: t, canManageRoles: o })
        : (0, r.jsx)(ld.Ay, {
              channelId: t.id,
              children: (0, r.jsx)(ld.j1, { children: tg.intl.format(tg.t.hPVEQG, { channelName: l }) }),
          });
}
var i5 = n(506774),
    i8 = n(933832),
    i9 = n(782603),
    i6 = n(408278),
    se = n(763175),
    st = n(56562),
    sn = n(765671),
    sl = n(304072),
    si = n(578623),
    ss = n(702841),
    sa = n(696986),
    sr = n(871237),
    so = n(36491),
    sc = n(953727);
function sd(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, r.jsxs)("svg", {
        ...(0, sc.A)(l),
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
var su = n(788780);
function sh(e) {
    let { threadId: t } = e,
        n = (0, ss.bG)([eF.A], () => eF.A.getChannel(t)),
        l = (0, ss.bG)([eF.A], () => eF.A.getChannel(n?.parent_id)),
        i = o.useCallback(() => {
            null != n &&
                null != l &&
                ((0, nF.zV)(eu.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, e7.C)((0, sr.af)(n, l)));
        }, [n, l]);
    return (0, r.jsxs)("div", {
        className: su.BQ,
        children: [
            (0, r.jsx)(sd, {}),
            (0, r.jsxs)("div", {
                className: su.BB,
                children: [
                    (0, r.jsx)(tc.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: tg.intl.string(tg.t["5uAO7d"]),
                    }),
                    (0, r.jsx)(tc.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: tg.intl.format(tg.t.WnfPV3, {
                            helpArticleUrl: td.A.getCreatorSupportArticleURL(eu.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(sa.h, { size: 4 }),
                    (0, r.jsx)(n0.$, { text: tg.intl.string(tg.t.C5UQC9), variant: "primary", icon: ty.q, onClick: i }),
                ],
            }),
            (0, r.jsx)(eL.D, {
                className: su.b,
                onClick: () => {
                    (0, so.sF)(t);
                },
                "aria-label": tg.intl.string(tg.t["0+xZH0"]),
                children: (0, r.jsx)(n1.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var sm = n(505527),
    sA = n(467073),
    sg = n(960538),
    sp = n(604121),
    sf = n(238301);
let sC = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    sE = o.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            l = (0, m.bG)([N.A], () => N.A.useReducedMotion),
            i = (0, m.bG)([J.A], () => J.A.can(eu.xBc.SEND_MESSAGES_IN_THREADS, t)),
            s = (0, e1.s5)(t),
            a = (0, m.bG)([K.default], () => K.default.getId());
        return n
            ? i && !s && t.ownerId !== a
                ? (0, r.jsxs)("div", {
                      className: sf.aP,
                      children: [
                          (0, r.jsx)(sp.a, { importData: sC, shouldAnimate: !l, className: sf.lY }),
                          (0, r.jsxs)("div", {
                              className: sf.FS,
                              children: [
                                  (0, r.jsx)(nK.D, {
                                      variant: "heading-md/semibold",
                                      children: tg.intl.string(tg.t.OmBThA),
                                  }),
                                  (0, r.jsx)(tc.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: tg.intl.string(tg.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, r.jsx)("div", { className: sf.yF });
    });
var sx = n(930390),
    sS = n(831688),
    s_ = n(226698),
    sI = n(892340),
    sT = n(715757),
    sy = n(390897),
    sN = n(862482),
    sj = n(215026),
    sb = n(66834),
    sM = n(964486),
    sv = n(351001),
    sR = n(400528);
function sD(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, r.jsx)(lk.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, r.jsx)(i6.K, {
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
var sL = n(221314),
    sP = n(145530),
    sk = n(905499),
    sG = n(406810),
    sO = n(991982),
    sU = n(838111),
    sw = n(870136);
function sF(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        a = s?.reported_user_id,
        c = (0, m.bG)([X.default], () => (null != a ? X.default.getUser(a) : null)),
        d = (0, m.bG)([t0.A], () => t0.A.getGuild(t.guild_id));
    (0, sT.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([sR.A], () => null != l && sR.A.isUserBanned(l.id)),
                a = null != l && null == s,
                [c, d] = o.useState(a),
                u = (0, m.bG)([J.A], () => null != l && null != i && (0, sv.fJ)(l, i, [J.A]));
            if (
                ((0, sM.Ay)(() => {
                    a && sb.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let h = !0 === s ? tg.intl.string(sL.default.dpfwQ1) : tg.intl.string(sL.default.ASv23S),
                A = `ban-user-${l?.id}`;
            return (0, r.jsx)(
                sD,
                {
                    text: h,
                    icon: sj.w,
                    onClick: () => {
                        null != l &&
                            (0, nV.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("33847"), n.e("2504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: sN.$n.Colors.RED,
                },
                A,
            );
        })({ channel: t, user: c, guild: d }),
        h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([J.A], () => null != l && null != i && (0, sv.KX)(l, i, [J.A])),
                a = (0, m.bG)([ia.Ay], () => null == l || null == ia.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = a ? tg.intl.string(sL.default.Ux67nW) : tg.intl.string(sL.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, r.jsx)(
                sD,
                {
                    text: o,
                    icon: sk.N,
                    onClick: () => {
                        null != l &&
                            (0, nV.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("79936"), n.e("40243")]).then(
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
        A = [
            (function (e) {
                let { message: t, user: n, guild: l, channel: i } = e,
                    s = (0, m.bG)([J.A], () => null != n && null != l && (0, sv.Kd)(n, l, [J.A])),
                    { messageReference: a } = t,
                    o = (0, m.bG)([q.A], () => (null != a ? q.A.getMessage(a.channel_id, a.message_id) : null)),
                    c = (0, m.bG)([eF.A], () => (null != o ? eF.A.getChannel(o.channel_id) : null)),
                    d = (0, m.bG)([eF.A], () => eF.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? tg.intl.string(sL.default["0IZbwC"]) : tg.intl.string(sL.default.Uj6oD4),
                    h = null == o,
                    A = `delete-message-${t.id}`;
                return (0, r.jsx)(
                    sD,
                    {
                        text: u,
                        icon: tO.u,
                        onClick: () => {
                            null != c &&
                                null != o &&
                                sP.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: h,
                        color: sN.$n.Colors.RED,
                    },
                    A,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            h,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, m.bG)(
                        [X.default, t0.A, J.A],
                        () => null != n && null != l && (0, sU.b)(l.id, n.id, [X.default, t0.A, J.A]),
                    ),
                    [s, a] = (0, sw.Ay)(n?.id, t.guild_id),
                    o = (0, m.bG)([ia.Ay], () => null != l && null != n && null != ia.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, r.jsx)(
                    sD,
                    {
                        text: a ? tg.intl.string(sL.default["6uMZbv"]) : tg.intl.string(sL.default["Sgg/uI"]),
                        icon: sG.O,
                        onClick: () => {
                            null != n && (0, sO.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: a,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== A.length
        ? (0, r.jsx)(r.Fragment, { children: A.map((e, t) => (0, r.jsx)(o.Fragment, { children: e }, t)) })
        : null;
}
function sH(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, r.jsx)(sF, { channel: n, message: t, snapshot: e }, l)),
    });
}
var sB = n(152007),
    sV = n(867455),
    sK = n(473503),
    sz = n(853742),
    sW = n(189971),
    s$ = n(347353),
    sq = n(518229);
function sJ(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, sI.uW)(t),
        [s, a] = o.useState(!1),
        c = () => {
            a(!0),
                s_.A.resolveFlag(t.id).then(() => {
                    a(!1);
                });
        };
    return i
        ? (0, r.jsx)(n0.$, {
              size: "sm",
              variant: "secondary",
              text: l ? tg.intl.string(sL.default["2Y4vkk"]) : tg.intl.string(sL.default.YIbR4r),
              onClick: () => {
                  !0 === i5.w.get(sy.f)
                      ? c()
                      : (0, nV.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, r.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: i8.A,
              disabled: l,
          })
        : null;
}
function sZ(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: i } = e,
        { ref: s, width: a } = (0, sn.Ay)(),
        [c, u] = o.useState(3),
        [h, A] = o.useState(!n),
        [g, p] = (0, sl.A)(!1, 2e3),
        f = (0, m.bG)([eF.A], () => eF.A.getChannel(t), [t]),
        { firstMessage: C } = (0, sK.OA)(f),
        E = (0, m.bG)([sB.A], () => sB.A.hasJoined(t)),
        { disableReactionUpdates: x, disableReactionCreates: S, isLurking: _, isPendingMember: T } = (0, sA.A)(f),
        y = (0, sT.W1)(f),
        N = (0, m.bG)([eF.A], () => eF.A.getChannel(i)),
        j = (0, lh.Ck)(N),
        b = (0, m.bG)([si.A], () => si.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        M = o.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    A((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    if (
        (o.useLayoutEffect(() => {
            let e = s.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(M, { threshold: 1 });
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
    let v = null != C && C.reactions.length > 0,
        R = () => {
            (0, sz.jC)({ postId: f.id, location: { section: eu.JJy.CHANNEL_HEADER } }),
                (0, e7.C)((0, sr.af)(f, N), () => p(!0));
        },
        D = E ? i8.A : i9.X;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: d()(sW.kL, { [sW.wx]: h }),
                ref: s,
                children: [
                    y
                        ? (0, r.jsx)("div", {
                              className: sW.kX,
                              children: null != C && (0, r.jsx)(sH, { message: C, channel: f }),
                          })
                        : (0, r.jsx)("div", {
                              className: sW.hY,
                              children:
                                  null != C &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          !v &&
                                              !S &&
                                              null != j &&
                                              (0, r.jsx)("div", {
                                                  className: s$.reactions,
                                                  children: (0, r.jsx)(sS.qT, {
                                                      message: C,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: _,
                                                      isPendingMember: T,
                                                      emoji: j,
                                                      type: sm.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, r.jsx)(sx.A, {
                                              message: C,
                                              channel: f,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: x,
                                              isLurking: _,
                                              isPendingMember: T,
                                              maxReactions: c,
                                              className: sW.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !S &&
                                              (0, r.jsx)(sg.t, {
                                                  message: C,
                                                  channel: f,
                                                  useChatFontScaling: !1,
                                                  className: d()(sq.secondary, sW.vU, { [sW.w$]: !v }),
                                                  isForumToolbar: !0,
                                                  children: !v && tg.intl.string(tg.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, r.jsxs)("div", {
                        className: sW.Uo,
                        children: [
                            y
                                ? (0, r.jsx)(sJ, { channel: f })
                                : !_ &&
                                  (0, r.jsx)(lk.m, {
                                      text: tg.intl.string(tg.t.F7oeDv),
                                      children: (0, r.jsx)(n0.$, {
                                          icon: D,
                                          size: "sm",
                                          variant: "secondary",
                                          text: E ? tg.intl.string(tg.t["7OkUzs"]) : tg.intl.string(tg.t["3aOv+h"]),
                                          onClick: () => {
                                              E
                                                  ? sV.A.leaveThread(f, "Forum Toolbar")
                                                  : sV.A.joinThread(f, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(lk.m, {
                                text: tg.intl.string(tg.t.WqhZss),
                                children: g
                                    ? (0, r.jsx)(n0.$, {
                                          icon: i8.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: R,
                                          text: tg.intl.string(tg.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(i6.K, {
                                          icon: ty.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: R,
                                          "aria-label": tg.intl.string(tg.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(lk.m, {
                                    text: tg.intl.string(tg.t.nFP4oa),
                                    children: (0, r.jsx)(i6.K, {
                                        icon: se.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            I.A.jumpToMessage({
                                                channelId: f.id,
                                                messageId: f.id,
                                                flash: !0,
                                                jumpType: st.US.INSTANT,
                                            });
                                        },
                                        "aria-label": tg.intl.string(tg.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            b && (0, r.jsx)(sh, { threadId: t }),
            (0, r.jsx)(sE, { channel: f, isLastItem: l }),
        ],
    });
}
var sY = n(640708),
    sX = n(378570),
    sQ = n(452082),
    s0 = n(327337);
function s1(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = o.useCallback(() => {
            (0, nZ.xi)(t, [l]);
        }, [t, l]),
        a = (0, m.bG)([nx.A], () => nx.A.isBlocked(i)),
        c = o.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: nY._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    o.useEffect(() => {
        (0, nX.QF)({ ...c, viewName: nX.gN.SAFETY_WARNING_BANNER }), nW.A.increment({ name: nB.K.SAFETY_WARNING_VIEW });
    }, [c]);
    let d = o.useCallback(
            (e) => {
                (0, nX._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = o.useCallback(() => {
            (0, nV.openModalLazy)(
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
                            warningType: nY._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: a,
                        });
                    };
                },
                { modalKey: s0.V },
            ),
                d(nX.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, i, l, d]),
        h = o.useCallback(() => {
            s(), d(nX.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [s, d]),
        A = o.useCallback(() => {
            s(), d(nX.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [s, d]),
        g = o.useCallback(() => {
            (0, nV.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70940"), n.e("84938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onBlock: h,
                        onBlockAndReport: A,
                        onCancel: () => {
                            s?.(), d(nX.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [h, A, i, t, d]);
    return (0, r.jsx)(n4, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: nY._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: tg.intl.string(tg.t.ZzlB5p),
        description: tg.intl.string(tg.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: tg.intl.string(tg.t.Qyu4UK), variant: "primary", onClick: u },
            ...(a ? [] : [{ text: tg.intl.string(tg.t["7q0bNY"]), variant: "secondary", onClick: g }]),
        ],
    });
}
var s2 = n(74114);
function s3(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, m.cf)([nx.A], () => ({ isIgnored: nx.A.isIgnored(t) }), [t]),
        s = o.useCallback(() => {
            (0, nX._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: nY._j.STRANGER_DANGER,
                cta: nX.Wm.USER_MODAL_IGNORE,
            }),
                iO.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]),
        a = o.useCallback(() => {
            (0, nX._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: nY._j.STRANGER_DANGER,
                cta: nX.Wm.USER_MODAL_UNIGNORE,
            }),
                iO.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]);
    return (0, r.jsx)(nJ.PQ, {
        title: tg.intl.string(tg.t.avyV7P),
        description: tg.intl.string(tg.t.naWE6W),
        buttonText: i ? tg.intl.string(tg.t["3SrzRT"]) : tg.intl.string(tg.t.avyV7P),
        onButtonPress: i ? a : s,
    });
}
function s4(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, m.cf)([nx.A], () => ({ isBlocked: nx.A.isBlocked(i) }), [i]),
        a = o.useCallback(() => {
            (0, nZ.xi)(t, [l]);
        }, [t, l]),
        c = (0, s0.eT)(),
        d = o.useCallback(
            (e) => () => {
                iO.A.blockUser(i, { location: s0.Rx }).then(() => {
                    a();
                }),
                    (0, nX._$)({ channelId: t, warningId: l, senderId: i, warningType: nY._j.STRANGER_DANGER, cta: e });
            },
            [a, t, l, i],
        );
    o.useEffect(() => {
        (0, nX.mO)(eu.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: nY._j.STRANGER_DANGER,
        }),
            nW.A.increment({ name: nB.K.SAFETY_WARNING_VIEW });
    }, [t, l, i]);
    let u = () => {
            (0, nV.openModalLazy)(async () => {
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
                        description: tg.intl.string(tg.t.DJMZX6),
                        safetyTipRows: c.map((e, t) =>
                            (0, r.jsx)(nq.B, { index: t, listType: "numbered", title: e }, t),
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s3, { senderId: i, channelId: t, warningId: l }, "more-tips-button"),
                                (0, r.jsx)(
                                    nJ.PQ,
                                    {
                                        title: tg.intl.string(tg.t["5QYPO2"]),
                                        description: tg.intl.string(tg.t.G08MKu),
                                        buttonText: tg.intl.string(tg.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            a(), h(nX.Wm.USER_MODAL_BLOCK_CONFIRM, nX.Wm.USER_MODAL_BLOCK_CANCEL, u);
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
            (0, nV.openModalLazy)(async () => {
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
                                (0, nX._$)({
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    warningType: nY._j.STRANGER_DANGER,
                                    cta: s,
                                });
                        },
                    });
            });
        };
    return (0, r.jsx)(n4, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: nY._j.STRANGER_DANGER,
        header: tg.intl.string(tg.t.iOkDpM),
        description: tg.intl.string(tg.t.ISUbcM),
        onDismiss: a,
        buttons: [
            {
                text: tg.intl.string(tg.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    u(),
                        (0, nX._$)({
                            channelId: t,
                            warningId: l,
                            senderId: i,
                            warningType: nY._j.STRANGER_DANGER,
                            cta: nX.Wm.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(s
                ? []
                : [
                      {
                          text: tg.intl.string(tg.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => h(nX.Wm.USER_BANNER_BLOCK_CONFIRM, nX.Wm.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
var s7 = n(866323),
    s5 = n(306788),
    s8 = n(340833),
    s9 = n(913642),
    s6 = n(453302),
    ae = n(670455),
    at = n(182147);
function an(e) {
    let { summary: t, channel: n } = e,
        l = (0, ss.bG)([H.A], () => H.A.summaryFeedback(t)),
        i = (e, l) => {
            e.stopPropagation(), (0, s6.A)({ summary: t, channel: n, rating: l });
        },
        s = (0, s7.p)(
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
                      className: at.RD,
                      children: (0, r.jsxs)(u.animated.div, {
                          style: e,
                          className: at.GK,
                          children: [
                              (0, r.jsx)(tc.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: tg.intl.string(tg.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(eL.D, {
                                  onClick: (e) => i(e, ae.P0.GOOD),
                                  children: (0, r.jsx)(s9.A, { className: at.O1, width: 12, height: 12 }),
                              }),
                              (0, r.jsx)(eL.D, {
                                  onClick: (e) => i(e, ae.P0.BAD),
                                  children: (0, r.jsx)(s8.A, { className: at.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function al(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, ss.bG)([H.A], () => H.A.selectedSummary(l.id));
    if (null == s) return null;
    let a = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(s5.K, { size: "xs", color: "currentColor", className: at.cR }), n.content],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(an, { summary: s, channel: l }),
                      (0, r.jsx)(s5.K, { size: "xs", color: "currentColor", className: at.Jq }),
                  ],
              })),
        (0, r.jsx)(
            lt.A,
            {
                className: d()(at.aK, o ? at.Ke : at.hO),
                contentClassName: o ? at.Ew : at.rD,
                isUnread: a,
                id: a ? eT.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var ai = n(383233),
    as = n(309010),
    aa = n(927813),
    ar = n(675171),
    ao = n(806621),
    ac = n(636922);
n(801541);
var ad = n(889137),
    au = n(952270),
    ah = n(428678),
    am = n(353182),
    aA = n(888675),
    ag = n(21623);
function ap(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        o = (0, ad.YW)({ collapsedReason: s })
            .with({ collapsedReason: tg.t["VFWjc+"] }, () =>
                (0, r.jsx)(au.G, { size: "md", color: "currentColor", className: ag.Q6 }),
            )
            .with({ collapsedReason: tg.t["+FcYM/"] }, () =>
                (0, r.jsx)(ah.K, { size: "md", color: "currentColor", className: ag.Q6 }),
            )
            .with({ collapsedReason: tg.t.rHRovo }, () =>
                (0, r.jsx)(am._, { size: "md", color: "currentColor", className: ag.TG }),
            )
            .otherwise(() => (0, r.jsx)(n1.P, { size: "md", color: "currentColor", className: ag.Q6 }));
    return (0, r.jsx)(e$.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(aA.A, {
            compact: i,
            className: ag.L9,
            iconNode: o,
            children: (0, r.jsxs)("div", {
                className: a ? ag.Fo : ag.GU,
                children: [
                    tg.intl.format(s, { count: l }),
                    a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, r.jsx)(eL.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: ag.rB,
                                    children: t ? tg.intl.string(tg.t.fgq1gs) : tg.intl.string(tg.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let af = o.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        { hasJumpTarget: c = !1 } = t,
        [u, h] = o.useState(c && a),
        m = o.useCallback(() => {
            a && h((e) => !e);
        }, [a]);
    o.useEffect(() => {
        c && a && h(!0);
    }, [c, a]);
    let A = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, r.jsxs)("div", {
        className: d()({ [nu._A]: !0, [ag.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === eu.TZK.DIVIDER)
                ? (0, r.jsx)(lt.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, r.jsx)(
                ap,
                { count: A, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: a },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === eu.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, r.jsx)(lt.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === eu.TZK.MESSAGE || e.type === eu.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === eu.TZK.THREAD_STARTER_MESSAGE ? nL : nk;
                          return (0, r.jsx)(
                              t,
                              {
                                  id: (0, eI.j)(n.id, e.content.id),
                                  className: ag.__invalid_blocked,
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
var aC = n(34337),
    aE = n(330001),
    ax = n(631576),
    aS = n(750385),
    a_ = n(148355),
    aI = n(310876);
let aT = "749054660769218631";
function ay(e) {
    let { channel: t } = e,
        [n, l] = o.useState("");
    o.useEffect(() => {
        (0, ax.zk)("847199849233514549", !0);
    }, []);
    let i = (0, m.bG)(
            [q.A, K.default],
            () =>
                !!ep()(q.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== K.default.getId() && e.state === eu.cmJ.SENT && !(0, eV.A)(e)),
        ),
        s = (0, m.bG)([X.default], () => X.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        a = lc.Ay.useName(s) ?? tg.intl.string(tg.t.y1Wu2f),
        c = (0, m.bG)([aS.A], () => aS.A.getStickerById(aT)),
        d = o.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    (0, aE.W)({ channelId: t.id, source: "In-channel greet" }), await I.A.sendGreetMessage(t.id, aT);
                } catch (e) {
                    e.ok || 429 !== e.status || l(tg.intl.string(tg.t.Whhv4w));
                }
        }, [t.id, n]),
        u = tg.intl.formatToPlainString(tg.t.m0zYbV, { username: a }),
        h =
            null != n && "" !== n
                ? (0, r.jsx)(tc.E, {
                      className: aI.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, r.jsxs)("div", {
              className: aI.ft,
              children: [
                  (0, r.jsxs)(eL.D, {
                      className: null != n && "" !== n ? aI.AO : aI.Iq,
                      "aria-label": tg.intl.string(tg.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, r.jsx)(a_.A, { sticker: c, size: 24 }),
                          (0, r.jsx)(tc.E, { className: aI.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  h,
              ],
          })
        : (0, r.jsxs)("div", {
              className: aI.nj,
              children: [
                  (0, r.jsx)(a_.A, { sticker: c, size: 160, className: aI.Xr }),
                  (0, r.jsx)(n0.$, {
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
var aN = n(900210),
    aj = n(626360);
function ab(e) {
    return null != e && e.type === eu.TZK.MESSAGE && e.content.id === e.groupId;
}
let aM = o.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, r.jsx)(ac.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new ai.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: eu.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, r.jsx)(n8.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var av = n(408899);
let aR = (0, u.animated)(S),
    aD = o.memo(
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
                    messages: A,
                    unreadCount: g,
                    showNewMessagesBar: p,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: E,
                    hasUnreads: x,
                    editingMessageId: S,
                    fontSize: b,
                    keyboardModeEnabled: M,
                    filterAfterTimestamp: v,
                    showingQuarantineBanner: R,
                    hideSummaries: D = !1,
                    jumpBarClassName: L,
                    typingGradient: k,
                } = e,
                [G, O] = o.useState(z.A.isAtBottom(u.id) ?? !1),
                U = (0, P.Ay)(u),
                F = (0, eA.I)(f, b),
                K = f ? F : Math.round(0.87 * F),
                W = Math.max(1, Math.round((K / 30) * 8)),
                $ = o.useMemo(
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
                            let r = s / eu.hH7.FONT_SIZE_DEFAULT,
                                o = t ? ef.BP : ef.B5,
                                c = t ? ef.Uj : ef._G,
                                d = 0,
                                u = Array(n)
                                    .fill(null)
                                    .map(() => {
                                        let e = ep().random(1, l);
                                        return (d += a * r), (d += o * r), (d += (e - 1) * c * r), e;
                                    }),
                                h = u.map((e, t) => t),
                                m = [];
                            for (; m.length < i; ) {
                                let e = { width: ep().random(140, 400), height: ep().random(100, 320) };
                                m.push([h.splice(ep().random(0, h.length - 1), 1)[0], e]), (d += e.height + ef.VF * r);
                            }
                            return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                        })({
                            compact: f,
                            messageGroups: K,
                            groupRange: 4,
                            attachments: W,
                            fontSize: b,
                            groupSpacing: a,
                        }),
                    [f, K, W, b, a],
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
                        { windowId: h } = o.useContext(eb.Ay),
                        [m] = o.useState(
                            () =>
                                new nw({
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
                    messages: A,
                    channel: u,
                    compact: f,
                    hasUnreads: x,
                    focusId: S,
                    placeholderHeight: $.totalHeight,
                    canLoadMore: null == v,
                    handleScrollToBottom: o.useCallback(() => O(!0), [O]),
                    handleScrollFromBottom: o.useCallback(() => O(!1), [O]),
                    additionalMessagePadding: 48,
                }),
                Y = (function (e) {
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
                                        padding: 4 * eT.mZ,
                                        callback: () => i?.focus(),
                                    });
                            },
                            [n.keyboardModeEnabled, t],
                        ),
                        a = o.useCallback(() => {
                            n.hasMoreAfter || e_._.dispatchToLastSubscribed(eu.jej.TEXTAREA_FOCUS);
                        }, [n.hasMoreAfter]),
                        r = (0, eS.Ay)({
                            id: eI.D,
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
                    return (0, Q.Vo)({ event: eu.jej.FOCUS_MESSAGES, handler: c }), r;
                })({ scrollerRef: q.ref, isEditing: null != S, keyboardModeEnabled: M, hasMoreAfter: A.hasMoreAfter }),
                ee = (0, m.bG)([w.A], () =>
                    J.A.can(eu.xBc.READ_MESSAGE_HISTORY, u) ? null : w.A.getViewingRolesTimestamp(u.getGuildId()),
                ),
                {
                    channelStreamMarkup: et,
                    newMessagesBar: es,
                    jumpToPresentBar: ea,
                    forumPostActionBar: er,
                    safetyWarningBanner: eo,
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
                            uploads: A,
                            scrollManager: g,
                            specs: p,
                            filterAfterTimestamp: f,
                            showingQuarantineBanner: C,
                            hideSummaries: E,
                            jumpBarClassName: x,
                        } = e,
                        S = X.default.getCurrentUser(),
                        _ = () => g.isInitialized() || a.ready,
                        y = (0, ao.r)(s),
                        b = a.length > 0 && a.first()?.isFirstMessageInForumPost(s),
                        M = (0, T.cI)(s),
                        v = (0, m.bG)([H.A], () => H.A.shouldShowTopicsBar() && !E),
                        R = (0, s2.l)(s.id),
                        D = (0, sQ.j)(s.id, s0.Rx),
                        L = (0, nH.E)(s.id),
                        P = (0, ar.A)(),
                        k = (function (e, t) {
                            if (e.isDM() && null != t)
                                if (t.type === nY._j.STRANGER_DANGER)
                                    return (0, r.jsx)(s4, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else if (t.type === nY._j.LIKELY_ATO)
                                    return (0, r.jsx)(n5, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else
                                    return (0, r.jsx)(s1, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                            return null;
                        })(s, R ?? D ?? L),
                        G = s.isForumPost() && !b ? (0, r.jsx)(sZ, { postId: s.id }) : null,
                        O = (0, ls.A)(s.id),
                        U = (0, sT.W1)(s);
                    (t = B.Sf.useSetting()),
                        (n = (0, ss.bG)([N.A], () => N.A.useReducedMotion)),
                        o.useEffect(() => {
                            function e(e) {
                                let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                                a ||
                                    r !== sm.v.BURST ||
                                    !t ||
                                    n ||
                                    (0, tJ.on)({ channelId: i, messageId: l, emoji: s, key: aN.W.EXTERNAL });
                            }
                            return (
                                j.h.subscribe("MESSAGE_REACTION_ADD", e),
                                () => {
                                    j.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                                }
                            );
                        }, [t, n]);
                    let w = null,
                        F = [],
                        V = h.map((e, t) => {
                            if (e.type === eu.TZK.DIVIDER) {
                                let n = null != e.unreadId;
                                return null != f
                                    ? null
                                    : e.isConversationDivider
                                      ? (0, r.jsx)(
                                            ll,
                                            { index: t, item: e, channel: s },
                                            `conv-divider-${e.contentKey ?? t}`,
                                        )
                                      : e.isSummaryDivider
                                        ? (0, r.jsx)(al, {
                                              index: t,
                                              item: e,
                                              channel: s,
                                              isBeforeGroup: null == e.content && ab(h[t + 1]),
                                          })
                                        : (0, r.jsx)(
                                              lt.A,
                                              {
                                                  isUnread: n,
                                                  isBeforeGroup: null == e.content && ab(h[t + 1]),
                                                  id: n ? eT.q4 : void 0,
                                                  itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                                  children: e.content,
                                              },
                                              `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                          );
                            }
                            if (e.type === eu.TZK.FORUM_POST_ACTION_BAR)
                                return (0, r.jsx)(
                                    sZ,
                                    {
                                        parentChannelId: s.parent_id,
                                        postId: s.id,
                                        isLastItem: t + 1 === h.length,
                                        isFirstMessage: !0,
                                    },
                                    `forum-post-action-bar-${s.id}`,
                                );
                            if (
                                e.type === eu.TZK.MESSAGE_GROUP_BLOCKED ||
                                e.type === eu.TZK.MESSAGE_GROUP_IGNORED ||
                                e.type === eu.TZK.MESSAGE_GROUP_SPAMMER ||
                                e.type === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
                            ) {
                                let t,
                                    n = !0;
                                return (
                                    e.type === eu.TZK.MESSAGE_GROUP_BLOCKED
                                        ? (t = tg.t["+FcYM/"])
                                        : e.type === eu.TZK.MESSAGE_GROUP_IGNORED
                                          ? (t = tg.t["VFWjc+"])
                                          : e.type === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                            ? ((t = tg.t.rHRovo), (n = !1))
                                            : (t = tg.t.xfkfTK),
                                    (0, r.jsx)(
                                        af,
                                        {
                                            unreadId: eT.q4,
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
                            if (null != f && f > e.content.timestamp.getTime() * aa.A.Millis.SECOND) return;
                            e.type === eu.TZK.MESSAGE && null == w && (w = e);
                            let n = e.groupId === w?.groupId ? w.content.id : e.groupId,
                                l = U && e.content.isFirstMessageInForumPost(s),
                                i = e.type === eu.TZK.THREAD_STARTER_MESSAGE ? nL : nk;
                            return (0, r.jsx)(
                                i,
                                {
                                    compact: u && !l,
                                    channel: s,
                                    message: e.content,
                                    groupId: n,
                                    flashKey: e.flashKey,
                                    id: (0, eI.j)(s.id, e.content.id),
                                    isLastItem: t >= h.length - 1,
                                    renderContentOnly: O || l,
                                },
                                e.content.id,
                            );
                        });
                    F.push(...V);
                    let K = h[h.length - 1];
                    if (
                        (null != S &&
                            A.forEach((e, t) => {
                                let n = 0 === t && (0, ei.l)(s, K, new ai.Ay({ type: eu.lAJ.DEFAULT, author: S }));
                                F.push(
                                    (0, r.jsx)(
                                        aM,
                                        { file: e, channel: s, user: S, isGroupStart: n, compact: u },
                                        `upload-${e.id}`,
                                    ),
                                );
                            }),
                        a.hasMoreBefore && null == f)
                    ) {
                        a.length > 0 &&
                            F.unshift((0, r.jsx)("div", { style: { height: eT.N0, flex: "0 0 auto" } }, "buffer"));
                        let { useReducedMotion: e } = N.A;
                        ((e && _()) || !e) && F.unshift((0, r.jsx)(eE, { compact: u, ...p }, "has-more"));
                    }
                    if (
                        ((a.hasMoreBefore && null == f) ||
                            F.unshift((0, r.jsx)(i7, { channel: s, showingBanner: C }, "empty-message")),
                        a.hasMoreAfter && F.push((0, r.jsx)(eE, { compact: u, ...p }, "has-more-after")),
                        !C && y && _() && F.push((0, r.jsx)(ay, { channel: s })),
                        c > 0 && d && _())
                    ) {
                        let e,
                            t,
                            n = Z.Ay.getOldestUnreadTimestamp(s.id),
                            i = 0 !== n ? n : el.default.extractTimestamp(s.id),
                            a = (0, en.ro)(new Date(), new Date(i));
                        if (
                            (Z.Ay.isEstimated(s.id)
                                ? ((e = a ? tg.t.wvtbbG : tg.t.tHqbtg), (t = tg.t.vaPWFe))
                                : ((e = a ? tg.t["BctFH/"] : tg.t["3wXb9P"]), (t = tg.t["4H8ldG"])),
                            M && (0, T.Kc)(s) && P.includes(aj.i.SUMMARIES))
                        ) {
                            let n = Z.Ay.ackMessageId(s.id),
                                a = (function (e, t) {
                                    let n = H.A.summaries(e) ?? [],
                                        l = 0;
                                    for (let e of n) el.default.compare(e.endId, t) > 0 && (l += 1);
                                    return l;
                                })(s.id, Z.Ay.getOldestUnreadMessageId(s.id));
                            if (
                                ((0, nF.zV)(eu.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                                    num_unread_summaries: a,
                                    num_unread_messages: c,
                                    last_ack_message_id: n,
                                    summaries_enabled_by_user: v,
                                    summaries_enabled_for_channel: (0, T.pk)(s),
                                }),
                                (0, T.pk)(s))
                            ) {
                                let n = v
                                    ? tg.intl.format(t, { count: c })
                                    : tg.intl.format(e, { count: c, timestamp: i });
                                if (v) {
                                    let e =
                                        a > 0
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(tc.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: tg.intl.format(t, { count: c }),
                                                      }),
                                                      (0, r.jsx)(sY.A, {
                                                          style: { paddingLeft: 8, paddingRight: 8 },
                                                          height: 4,
                                                          width: 4,
                                                      }),
                                                      (0, r.jsx)(tc.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: tg.intl.format(tg.t.CBftDc, { count: a }),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(tc.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: n,
                                              });
                                    l = (0, r.jsx)(aC.OZ, { scrollManager: g, content: e, channel: s });
                                } else {
                                    let e = (0, r.jsx)("div", {
                                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                                        children:
                                            a > 0
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(tc.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: tg.intl.format(t, { count: c }),
                                                          }),
                                                          (0, r.jsx)(sY.A, {
                                                              style: { paddingLeft: 8, paddingRight: 8 },
                                                              height: 4,
                                                              width: 4,
                                                          }),
                                                          (0, r.jsx)(tc.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: tg.intl.format(tg.t.CBftDc, { count: a }),
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(tc.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: n,
                                                  }),
                                    });
                                    l = (0, r.jsx)(aC.GN, { content: e, channelId: s.id });
                                }
                            }
                        } else
                            P.includes(aj.i.NEW_MESSAGES) &&
                                (l = (0, r.jsx)(aC.GN, {
                                    content: tg.intl.format(e, { count: c, timestamp: i }),
                                    channelId: s.id,
                                }));
                    }
                    if (
                        (null == l &&
                            (0, T.pk)(s) &&
                            v &&
                            P.includes(aj.i.SUMMARIES) &&
                            (l = (0, r.jsx)(aC.UK, { channel: s, scrollManager: g })),
                        a.error)
                    )
                        i = (0, r.jsx)(aC.Ez, {
                            loading: a.loadingMore,
                            onClick: () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void I.A.fetchMessages({
                                        channelId: e,
                                        limit: (0, eA.h)("renderStream.reload"),
                                        truncate: !0,
                                    })
                                );
                            },
                            className: x,
                        });
                    else if (a.hasMoreAfter && _()) {
                        let { jumpReturnTargetId: e } = a;
                        i =
                            a.loadingMore && a.jumpedToPresent
                                ? (0, r.jsx)(aC.Ab, { className: x })
                                : null != e
                                  ? (0, r.jsx)(aC.Ab, {
                                        type: aC.ks.REPLY,
                                        onClick: () => {
                                            I.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                        },
                                        className: x,
                                    })
                                  : (0, r.jsx)(aC.Ab, {
                                        onClick: () => {
                                            let e;
                                            return (
                                                I.A.jumpToPresent(s.id, (0, eA.h)("renderStream.jumpToPresent")),
                                                (e = as.A.getChannelId()),
                                                void (s.id === e && (0, sX.iN)(s.id))
                                            );
                                        },
                                        className: x,
                                    });
                    }
                    return {
                        channelStreamMarkup: F,
                        newMessagesBar: l,
                        jumpToPresentBar: i,
                        forumPostActionBar: G,
                        safetyWarningBanner: k,
                    };
                })({
                    channel: u,
                    messages: A,
                    unreadCount: g,
                    showNewMessagesBar: p,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: E,
                    loadMore: q.loadMore,
                    scrollManager: q,
                    specs: $,
                    filterAfterTimestamp: v ?? ee,
                    showingQuarantineBanner: R,
                    hideSummaries: D,
                    jumpToPresent: () => {
                        A.hasPresent()
                            ? q.ref.current?.scrollToBottom({ animate: !N.A.useReducedMotion })
                            : I.A.jumpToPresent(u.id, F);
                    },
                    jumpBarClassName: L,
                });
            (t = q.ref),
                (n = o.useCallback(() => t.current?.scrollToBottom(), [t])),
                (l = o.useCallback(() => t.current?.scrollPageUp({ animate: !N.A.useReducedMotion }), [t])),
                (i = o.useCallback(() => t.current?.scrollPageDown({ animate: !N.A.useReducedMotion }), [t])),
                (0, Q.Vo)({ event: eu.jej.SCROLLTO_PRESENT, handler: n }),
                (0, Q.Vo)({ event: eu.jej.SCROLL_PAGE_UP, handler: l }),
                (0, Q.Vo)({ event: eu.jej.SCROLL_PAGE_DOWN, handler: i });
            let ec = (0, _.R7)(),
                { ref: ed, ...eh } = (0, h.LT)(Y),
                em = (0, y.A)((e) => {
                    (q.ref.current = e), (ed.current = e?.getScrollerNode() ?? null);
                }),
                eg = (0, m.bG)([V.A], () => {
                    let e = V.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eC = o.useMemo(() => (k ? (G ? av.gA : av.ru) : av.Zd), [k, G]),
                ex = o.useMemo(() => (k ? (G ? av.cz : av.XF) : av.U6), [k, G]);
            return (0, r.jsxs)(h.hD, {
                navigator: Y,
                children: [
                    null != eo && eo,
                    (0, r.jsxs)("div", {
                        className: d()(av.Og, s, `group-spacing-${a}`),
                        children: [
                            null == eo && es,
                            (0, r.jsxs)(aR, {
                                ref: em,
                                customTheme: !0,
                                className: d()(c, av.XG, eg ? ex : void 0),
                                contentClassName: av.gT,
                                onResize: q.handleResize,
                                onScroll: q.handleScroll,
                                onMouseDown: q.handleMouseDown,
                                onMouseUp: q.handleMouseUp,
                                ...ec,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    er,
                                    (0, r.jsxs)("ol", {
                                        className: av.bv,
                                        "aria-label": tg.intl.formatToPlainString(tg.t.XarRiL, {
                                            channelName: U ?? "",
                                        }),
                                        ...eh,
                                        children: [
                                            (0, r.jsx)("span", {
                                                className: av.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: tg.intl.string(tg.t["Spb3s/"]),
                                            }),
                                            et,
                                            (0, r.jsx)("div", {
                                                className: d()({
                                                    [av.lB]: !R,
                                                    [av.Ie]: 0 === A.length && !A.loadingMore,
                                                    [av.Fb]:
                                                        1 === A.length &&
                                                        !A.loadingMore &&
                                                        u.isForumPost() &&
                                                        A.first()?.isFirstMessageInForumPost(u),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            eg ? null : (0, r.jsx)("div", { className: eC }),
                            ea,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    aL = o.memo(function (e) {
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
                    n = (0, m.bG)([$.A], () => null == t || $.A.canChatInGuild(t), [t]),
                    { canManageMessages: l, permissionVersion: i } = (0, m.cf)(
                        [J.A],
                        () => ({
                            canManageMessages: J.A.can(eu.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? J.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: i, canManageMessages: l };
            })(t),
            {
                messageGroupSpacing: A,
                fontSize: g,
                messageDisplayCompact: p,
                renderSpoilers: f,
                keyboardModeEnabled: C,
            } = (function () {
                let e = B.hH.useSetting(),
                    t = B.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: l,
                        keyboardModeEnabled: i,
                    } = (0, m.cf)([N.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = N.A;
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
                oldestUnreadMessageId: S,
                editingMessageId: _,
            } = (function (e) {
                var t;
                let n,
                    l = (0, m.bG)([q.A], () => q.A.getMessages(e.id), [e.id]),
                    i = (0, m.bG)([Z.Ay], () => Z.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = U.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    a = X.default.getUser(K.default.getId())?.hasFlag(eu.nhx.SPAMMER) ?? !1,
                    r = (0, T.cI)(e),
                    c = (0, O.A)("use_topic_dividers_in_chat"),
                    d = (0, m.yK)([H.A], () => (r && c ? (H.A.summaries(e.id) ?? []) : []), [r, e.id, c]),
                    u = (0, m.bG)([H.A], () => (r ? H.A.selectedSummary(e.id) : null), [r, e.id]),
                    h = (0, k.fw)("message_stream"),
                    A = (0, m.bG)([G.A], () => (h ? G.A.getSelectedConversation(e.id) : null), [h, e.id]),
                    g =
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
                            i = (0, m.yK)([M.A], () => {
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
                            o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (0 === e.length) return v;
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
                            b.A.isSubscribed(e) ||
                                j.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                    }, [l]);
                })(l, e);
                let p = o.useMemo(
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
                                } = e,
                                u = [],
                                h = !1,
                                m = null != a ? el.default.extractTimestamp(a) : null,
                                A = null;
                            return (
                                s.forEach((e) => {
                                    var g, p;
                                    let f, C, E;
                                    if (null != o && o.length > 0) {
                                        let t = el.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o?.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = el.default.extractTimestamp(o[e].startId),
                                                l = el.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (A === o[e].id) break;
                                                u.push({
                                                    type: eu.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (A = o[e].id);
                                                break;
                                            }
                                        }
                                    }
                                    let x = (0, en.i$)(e.timestamp, "LL");
                                    x !== t &&
                                        null == A &&
                                        (u.push({ type: eu.TZK.DIVIDER, content: x, contentKey: x }), (t = x));
                                    let S = u[u.length - 1],
                                        _ = null,
                                        I = (0, es.kf)(e);
                                    h = h || I;
                                    let T = (function (e, t, n) {
                                        if (et.M.NON_COLLAPSIBLE.has(t.type));
                                        else if (t.hasFlag(eu.pr7.HIDDEN_SUSPENDED_USER))
                                            return eu.TZK.MESSAGE_GROUP_SUSPENDED_USER;
                                        else if (t.blocked) return eu.TZK.MESSAGE_GROUP_BLOCKED;
                                        else if (t.ignored) return eu.TZK.MESSAGE_GROUP_IGNORED;
                                        else if ((0, es.iJ)(e) && n) return eu.TZK.MESSAGE_GROUP_SPAMMER;
                                        return null;
                                    })(i, e, I && r);
                                    (null !== T &&
                                        ([_, S] =
                                            ((C = g = S),
                                            null == g || g.type !== T
                                                ? ((f = { type: T, content: [], key: e.id }), u.push(f))
                                                : (C = (f = g).content[f.content.length - 1]),
                                            [f, C])),
                                    a === e.id && null != m)
                                        ? (null != S && S.type === eu.TZK.DIVIDER
                                              ? (S.unreadId = e.id)
                                              : null !== _
                                                ? ((p = _),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      p.content.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                                  (p.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  u.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                          (m = null))
                                        : null != m &&
                                          el.default.extractTimestamp(e.id) > m &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              u.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                          (m = null));
                                    let y =
                                        null !=
                                        (E = (function (e, t) {
                                            if (eh.get(t.id) === e.id) return em(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, er.Lt)(e.flags, eu.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === K.default.getId() ||
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
                                            return eo.A.updatePrivateChannelRecipientFlags(t.id, l), n;
                                        })(e, i))
                                            ? { message: E, position: "before" }
                                            : null;
                                    null != y &&
                                        "before" === y.position &&
                                        u.push({ type: eu.TZK.MESSAGE, content: y.message, groupId: y.message.id });
                                    let N = S?.type === eu.TZK.MESSAGE ? l : S;
                                    (0, ei.l)(i, N, e) && (n = e.id);
                                    let j = {
                                        type:
                                            e.type === eu.lAJ.THREAD_STARTER_MESSAGE
                                                ? eu.TZK.THREAD_STARTER_MESSAGE
                                                : eu.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = j);
                                    let { jumpSequenceId: b, jumpFlash: M, jumpTargetId: v } = s;
                                    M && e.id === v && null != b && (j.flashKey = b),
                                        s.jumpTargetId === e.id && (j.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            u.push({
                                                type: eu.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            u.push({
                                                type: eu.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationDivider: !0,
                                            }),
                                        null !== _
                                            ? (_.content.push(j), j.jumpTarget && (_.hasJumpTarget = !0))
                                            : u.push(j),
                                        e.isFirstMessageInForumPost(i) &&
                                            u.push({ type: eu.TZK.FORUM_POST_ACTION_BAR }),
                                        null != y &&
                                            "after" === y.position &&
                                            u.push({ type: eu.TZK.MESSAGE, content: y.message, groupId: y.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            u.push({ type: eu.TZK.DIVIDER, contentKey: c.endId, isSummaryDivider: !0 }),
                                        null != d &&
                                            e.id === d.endMessageId &&
                                            d.messageCount > 1 &&
                                            u.push({
                                                type: eu.TZK.DIVIDER,
                                                contentKey: `conv-end-${d.id}`,
                                                isConversationDivider: !0,
                                            });
                                }),
                                h && (0, es.iJ)(i) && U.A.trackExposure({ location: "416cc9_1" }),
                                u
                            );
                        })({
                            channel: e,
                            messages: l,
                            oldestUnreadMessageId: i,
                            treatSpam: s && !a,
                            summaries: d,
                            selectedSummary: u,
                            selectedConversation: A,
                        }),
                    [l, e, i, s, d, u, A, g, a],
                );
                return {
                    messages: l,
                    channelStream: p,
                    oldestUnreadMessageId: i,
                    editingMessageId: (0, m.bG)([W.A], () => W.A.getEditingMessage(e.id)?.id),
                };
            })(t),
            I = t.getGuildId();
        return (
            o.useEffect(() => {
                null != I && k.W$.trackExposure({ guildId: I, location: "guild_entry" });
            }, [I]),
            (0, r.jsx)(F.Bs.Provider, {
                value: (0, ee.A)(f, d),
                children: (0, r.jsx)(ex.t, {
                    children: (0, r.jsx)(aD, {
                        ...c,
                        messageGroupSpacing: A,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !s && (i || p),
                        messages: E,
                        channelStream: x,
                        permissionVersion: u,
                        uploads: (0, m.bG)([Y.A], () => Y.A.getFiles(t.id), [t]),
                        unreadCount: (0, m.bG)([Z.Ay], () => Z.Ay.getUnreadCount(t.id), [t]),
                        hasUnreads: null != S,
                        canChat: h,
                        editingMessageId: _,
                        fontSize: g,
                        keyboardModeEnabled: C,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: a,
                    }),
                }),
            })
        );
    });
