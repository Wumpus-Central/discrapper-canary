let i, l;
n.d(t, { A: () => aD });
var s,
    a,
    r = n(627968),
    o = n(64700),
    c = n(503698),
    d = n.n(c),
    u = n(487514),
    h = n(837381),
    m = n(17928),
    p = n(446837),
    g = n(187322),
    A = n(536804),
    f = n(789279),
    _ = n(584648),
    E = n(448539),
    C = n(45596);
let x =
    ((s = d()(C.qZ, C.Vl)),
    (a = window.ResizeObserver ?? p.t),
    (i = new Map()),
    (l = new a((e) => {
        e.forEach((e) => {
            let { target: t } = e;
            i.get(t)?.(e);
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
                fade: p = !1,
                customTheme: x = !1,
                style: b,
                ...S
            } = e,
            I = o.useRef(null),
            y = o.useRef(null),
            [T, v] = o.useState(!1),
            { scrollerRef: N, getScrollerState: j } = (0, A.A)(),
            M = (0, f.A)(N);
        o.useImperativeHandle(
            t,
            () => ({
                getScrollerNode: () => N.current,
                isScrolling: () => null != I.current,
                getScrollerState: j,
                ...(0, _.A)(N, j, M),
            }),
            [N, j, M],
        );
        let R = o.useCallback(
            (e) => {
                null == I.current ? v(!0) : clearTimeout(I.current),
                    (I.current = setTimeout(() => {
                        (I.current = null), v(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h],
        );
        return (
            o.useEffect(() => () => clearTimeout(I.current), []),
            (0, E.A)({ ref: N, key: "container", onUpdate: c, resizeObserver: l, listenerMap: i }),
            (0, E.A)({ ref: y, key: "content", onUpdate: c, resizeObserver: l, listenerMap: i }),
            (0, r.jsx)("div", {
                ref: N,
                className: d()(a, { [C.Rv]: p, [C.D8]: x, [s]: !0, [C.fs]: !0, [C.qw]: T && p }),
                style: b,
                dir: m,
                onScroll: R,
                ...S,
                children: (0, r.jsx)(g.xp, {
                    containerRef: y,
                    children: (0, r.jsxs)("div", {
                        ref: y,
                        className: d()(u, C.Qs),
                        children: [n, T && (0, r.jsx)("div", { className: C.X3 })],
                    }),
                }),
            })
        );
    }));
var b = n(312138),
    S = n(720149),
    I = n(432371),
    y = n(765548),
    T = n(775602);
n(321073);
var v = n(228366),
    N = n(911411),
    j = n(290863);
let M = [],
    R = [],
    L = [];
var D = n(429913),
    k = n(47167),
    P = n(17447),
    G = n(736339),
    O = n(354328),
    w = n(559149),
    U = n(164956),
    F = n(302031),
    B = n(822074),
    H = n(253932),
    K = n(617617),
    V = n(495544),
    z = n(72314),
    W = n(580745),
    q = n(834942),
    $ = n(232835),
    J = n(576705),
    Z = n(222823),
    Y = n(399263),
    X = n(287809),
    Q = n(234320),
    ee = n(863439),
    et = n(448761),
    en = n(701952),
    ei = n(58703),
    el = n(935208),
    es = n(857069),
    ea = n(694318);
n(938796);
var er = n(253506),
    eo = n(665260),
    ec = n(704844),
    ed = n(320095),
    eu = n(963852),
    eh = n(652215);
let em = new Map();
function ep(e, t) {
    let n = (0, eu.Ay)({
            channelId: t,
            type: eh.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: eh.pr7.EPHEMERAL,
            state: eh.cmJ.SENT,
        }),
        i = (0, ed.rh)(n);
    return (i.applicationId = e.applicationId), (i.timestamp = e.timestamp), i;
}
var eg = n(326337),
    eA = n(735438),
    ef = n.n(eA),
    e_ = n(114212),
    eE = n(615170);
function eC(e) {
    let { compact: t, messages: n, attachmentSpecs: i, totalHeight: l, groupSpacing: s } = e;
    return o.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of i) e[t] = n;
        return (0, r.jsx)("div", {
            className: eE.i,
            style: { height: l },
            children: n.map((n, i) =>
                (0, r.jsx)(e_.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[i] }, i),
            ),
        });
    }, [t, n, i, l, s]);
}
var ex = n(830178),
    eb = n(887129),
    eS = n(625494),
    eI = n(375901),
    ey = n(381941),
    eT = n(621466),
    ev = n(951001),
    eN = n(334738),
    ej = n(267102),
    eM = n(976860),
    eR = n(863922),
    eL = n(284009),
    eD = n.n(eL),
    ek = n(939249),
    eP = n(807884),
    eG = n(93474),
    eO = n(201275),
    ew = n(384231),
    eU = n(853145),
    eF = n(9842),
    eB = n(734057),
    eH = n(540999),
    eK = n(780574),
    eV = n(143413),
    ez = n(763754),
    eW = n(33453);
function eq(e) {
    let { children: t, className: n, flashKey: i } = e,
        [l, s] = o.useState(!1),
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
            [i],
        ),
        (0, r.jsx)("div", { "data-flash": l, className: d()(eW.j, n), children: t })
    );
}
var e$ = n(491182),
    eJ = n(860227),
    eZ = n(112758),
    eY = n(516287),
    eX = n(843626),
    eQ = n(294454),
    e0 = n(857071),
    e1 = n(517997),
    e2 = n(406704),
    e3 = n(747926),
    e4 = n(54570),
    e7 = n(8880),
    e6 = n(957565),
    e5 = n(723702),
    e8 = n(697470),
    e9 = n(492841),
    te = n(707985),
    tt = n(519222);
let tn = function (e, t, n) {
    let i = o.useRef(n);
    return (
        (i.current = n),
        o.useCallback(
            (n) => {
                if (!i.current || n.target !== n.currentTarget) return;
                let l = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    s = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    a = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    r = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    o = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    c = $.A.getMessage(t, e),
                    d = eB.A.getChannel(t);
                if (null == c || null == d) return;
                let u = V.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        l &&
                            (J.A.can(eh.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tt.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, e5.isMac)() ? r : a) && e6.p5 && (n.preventDefault(), (0, e6.C)(c.content));
                        break;
                    case "e":
                        l && !d.isSystemDM() && (0, e8.A)(c, u) && (n.preventDefault(), (0, tt.u_)(d, c));
                        break;
                    case "p":
                        (l || o) && (0, e9.A)(c, d) && (n.preventDefault(), (0, tt.rS)(d, c, n));
                        break;
                    case "+":
                        (l || o) &&
                            (function (e) {
                                let t = null == e.guild_id || q.A.canChatInGuild(e.guild_id),
                                    n = H.jW.getSetting(),
                                    { disableReactionCreates: i } = (0, te.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && J.A.can(eh.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && e0.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, e2.jr)(e),
                                    });
                                return !i && n;
                            })(d) &&
                            (n.preventDefault(),
                            eS._.dispatchKeyed(eh.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (l || o) && (0, e1.r)(d, c) && (n.preventDefault(), (0, tt.$b)(d, c, n));
                        break;
                    case "f":
                        (l || o) &&
                            (0, eX.p)(c) &&
                            (n.preventDefault(), (0, eQ.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        l &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            e7.A.isSpeakingMessage(t, e) ? (0, e4.pr)() : (0, e4.kP)(d, c));
                        break;
                    case "t":
                        if (l && (0, e2.D1)(d, c)) n.preventDefault(), (0, e3.Tv)(d, c, "Message Shortcut");
                        else if (c.hasFlag(eh.pr7.HAS_THREAD)) {
                            let e = eB.A.getChannel(el.default.castMessageIdAsChannelId(c.id));
                            null != e && (l || o) && (n.preventDefault(), (0, e3.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tt.cl)(d, c));
                        break;
                    case "escape":
                        W.A.isEditing(d.id, c.id) ? S.A.endEditMessage(d.id) : eS._.dispatch(eh.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var ti = n(754459),
    tl = n(375199),
    ts = n(522871),
    ta = n(699352),
    tr = n(877413),
    to = n.n(tr),
    tc = n(231483),
    td = n(834730),
    tu = n(975571),
    th = n(465364),
    tm = n(164664),
    tp = n(291812),
    tg = n(606049),
    tA = n(985018),
    tf = n(147860),
    t_ = n(334211),
    tE = n(992595);
let tC = o.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: d()(tf.K1, { [tf.oE]: i }),
                    children: [
                        (0, r.jsx)("div", {
                            className: tf.Oz,
                            children: (0, r.jsx)(tc.l, { size: "xs", color: "currentColor", className: tf.F_ }),
                        }),
                        (0, r.jsx)("div", {
                            className: tf.jC,
                            children: (0, r.jsx)(td.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, th.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d()(tf.ah, { [tf.oE]: i }),
                    children: (0, r.jsx)(tm.A, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(td.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: tf.C2,
                            children: tA.intl.format(tA.t["Nd3Gh+"], {
                                helpUrl: tu.A.getArticleURL(eh.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    tx = o.memo(function (e) {
        let { className: t, compact: n, message: i, children: l, content: s, onUpdate: a } = e,
            c = i.editedTimestamp?.toString(),
            u = o.useRef(!1),
            h = (0, m.bG)([eG.A], () => eG.A.getMessage(i.id), [i.id]),
            p = o.useCallback(() => {
                if (h?.isBlockedEdit) {
                    var e;
                    (e = i.id), v.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e });
                } else S.A.deleteMessage(i.channel_id, i.id, !0);
            }, [i, h]);
        return (
            o.useLayoutEffect(() => {
                u.current ? null != a && a() : (u.current = !0);
            }, [a, i.content, s, c, l]),
            (0, r.jsxs)("div", {
                id: (0, eJ.CJ)(i),
                className: d()(t, tE.PT, {
                    [t_.BK]: !0,
                    [t_.nB]: "rtl" === to()(i.content),
                    [tf.Dy]: h?.isBlockedEdit,
                    [tf.bv]: !h?.isBlockedEdit,
                }),
                children: [
                    l ?? (0, tp._A)(i, s),
                    h?.isBlockedEdit &&
                        null != i.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(tg.A, {
                                    timestamp: i.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: t_.oh,
                                        children: ["(", tA.intl.string(tA.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tC, {
                        notice: h?.errorMessage ?? tA.intl.string(tA.t.zQ69pv),
                        message: i,
                        compact: n,
                        onDismiss: p,
                    }),
                ],
            })
        );
    }, tp.sP);
var tb = n(111956),
    tS = n.n(tb),
    tI = n(311283),
    ty = n(473935),
    tT = n(173936),
    tv = n(290136),
    tN = n(666492),
    tj = n(606096),
    tM = n(997146),
    tR = n(366605),
    tL = n(163328),
    tD = n(110384),
    tk = n(22231),
    tP = n(563119),
    tG = n(581925),
    tO = n(778492),
    tw = n(241326),
    tU = n(922016),
    tF = n(365199),
    tB = n(417270),
    tH = n(565645),
    tK = n(812930),
    tV = n(822123),
    tz = n(7584),
    tW = n(635222),
    tq = n(969043),
    t$ = n(427209),
    tJ = n(296043),
    tZ = n(649963),
    tY = n(815807),
    tX = n(429433),
    tQ = n(966597),
    t0 = n(85109),
    t1 = n(71393),
    t2 = n(954571),
    t3 = n(690521),
    t4 = n(403362),
    t7 = n(628691),
    t6 = n(194085),
    t5 = n(607399),
    t8 = n(460905);
function t9(e) {
    let { channel: t, message: n, togglePopout: i, renderEmojiPicker: l, shouldShow: s } = e,
        a = o.useRef(null);
    return (0, r.jsx)(tU.Y, {
        targetElementRef: a,
        animation: tU.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return l(t, n, i, !1);
        },
        shouldShow: s,
        onRequestClose: i,
        position: t5.Fr ? "top" : "left",
        align: t5.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(t6.qv, { ref: a, label: tA.intl.string(tA.t.lfIHs4), icon: t8.n, onClick: i }, "add-reaction"),
    });
}
var ne = n(783144),
    nt = n(307731),
    nn = n(15393);
let ni = [tz.Ay.getByName("100"), tz.Ay.getByName("laughing"), tz.Ay.getByName("sparkling_heart")].filter(t4.Vq);
function nl(e) {
    e.stopPropagation();
}
function ns(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: s } = e;
    return (0, ne.c)({
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
        canReport: i,
        onHeightUpdate: s,
        onClose: l,
        navId: "message-actions",
        ariaLabel: tA.intl.string(tA.t.Lv7LxN),
    });
}
let na = o.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, tV.QZ)(t.guild_id).filter(
            (e) =>
                !t3.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: nt.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        l = (i.length >= 3 ? i : [...(0, tW.A)(i.concat(ni)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            let i = s.find((t) => (0, tY.i6)(t.emoji, (0, tY.jq)(e))),
                l = null != i ? tA.intl.string(tA.t.wunKKA) : tA.intl.string(tA.t.XVx5BN),
                a = null == e.id ? e.uniqueName : e.name,
                o =
                    null != i
                        ? tA.intl.formatToPlainString(tA.t.vjeruO, { emojiName: a })
                        : tA.intl.formatToPlainString(tA.t.L1JQwE, { emojiName: a });
            return (0, r.jsx)(
                t6.qv,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(td.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nn.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, r.jsx)(td.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: nn.zM,
                                children: l,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        nc({
                            type: null != i ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: tZ.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(tH.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nn.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function nr(e) {
    let {
            channel: t,
            message: n,
            canCopy: i,
            canPin: l,
            canDelete: s,
            canReport: a,
            canEdit: c,
            canPublish: d,
            canReact: u,
            canConfigureJoin: h,
            canReply: p,
            canStartThread: g,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: _,
            isGuildOfficial: E,
            isExpanded: C,
            showMoreUtilities: x,
            showEmojiPicker: b,
            showMessageBookmarksActions: I,
            isMessageBookmark: y,
            setPopout: v,
            hasDeveloperMode: N,
            isFocused: j,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: i,
                    showEmojiBurstPicker: l,
                    showMoreUtilities: s,
                    messageWindow: a,
                    setPopout: r,
                    isFocused: o,
                } = e,
                { author: c } = n,
                d = (0, m.bG)([t1.A], () => t1.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, m.bG)([V.default], () => V.default.getId()),
                h = (0, e2.Id)(t),
                p = (0, e2.s5)(t),
                { firstMessage: g } = (0, m.bG)([tq.A], () => tq.A.getMessage(t.id), [t.id]),
                A = H.jW.useSetting(),
                f = H.Q_.useSetting(),
                _ = (0, m.bG)([q.A], () => null == t.guild_id || q.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: E, canAddNewReactions: C } = (0, m.cf)(
                    [J.A],
                    () => ({
                        canAddNewReactions: _ && J.A.can(eh.xBc.ADD_REACTIONS, t),
                        canManageMessages: J.A.can(eh.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, _],
                ),
                x = (0, e1.u)(t, n),
                b = (0, e2.n)(t, n),
                S = (0, e2.R)(n),
                I = (0, m.bG)([e0.A], () => null != t.guild_id && e0.A.isLurking(t.guild_id), [t]),
                y = c.id === u,
                v = (E || n.canDeleteOwnMessage(u)) && h && !eh.MRS.UNDELETABLE.has(n.type);
            n.type === eh.lAJ.AUTO_MODERATION_ACTION && (v = v && E),
                t.isModeratorReportChannel() && (v = v && n.id !== g?.id && !(0, eV.A)(n));
            let N = (0, t7.ul)(n),
                j = (0, e9.A)(n, t),
                M = !t.isSystemDM() && (0, e8.A)(n, u) && h && !p,
                { disableReactionCreates: R } = (0, te.A)({
                    channel: t,
                    canChat: _,
                    renderReactions: A,
                    canAddNewReactions: C,
                    isLurking: I,
                    isActiveChannelOrUnarchivableThread: h,
                }),
                L =
                    t.type === eh.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(eh.GuildFeatures.NEWS) &&
                    (y || E) &&
                    (0, tK.A)(n),
                D = t.getGuildId(),
                k =
                    null != D &&
                    n.type === eh.lAJ.USER_JOIN &&
                    J.A.canWithPartialContext(eh.xBc.MANAGE_GUILD, { guildId: D }),
                P = (0, eX.m)(n),
                G = (0, eK.Vc)(t.guild_id, t, "MessageHoverBar"),
                O = n.hasFlag(eh.pr7.IS_GUILD_OFFICIAL),
                { enabled: w } = tQ.A.useConfig({ location: "message_utilities" }),
                U = (0, m.bG)([t0.A], () => null != t0.A.getSavedMessage(t.id, n.id)),
                F = (0, tI.A)(a),
                B = (0, m.bG)([T.A], () => T.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: j,
                canEdit: M,
                canDelete: v,
                canReport: N,
                canReply: x,
                canStartThread: b,
                canViewThread: S,
                canForward: P,
                canManageOfficialMessages: G,
                isGuildOfficial: O,
                canCopy: e6.p5,
                hasDeveloperMode: f,
                canReact: !R && A,
                canPublish: L,
                canConfigureJoin: k,
                isExpanded: F && !B && !i && !l && !s,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: s,
                showMessageBookmarksActions: w,
                isMessageBookmark: U,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = o.useRef(null),
        R = o.useCallback(() => {
            x ||
                t2.default.track(eh.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                v({ moreUtilities: !x });
        }, [x, v, n]),
        L = o.useCallback(() => {
            v({ emojiPicker: !b });
        }, [b, v]),
        D = (0, e2.Id)(t),
        k = n.hasFlag(eh.pr7.CROSSPOSTED);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          i && N
                              ? (0, r.jsx)(
                                    t6.qv,
                                    {
                                        label: tA.intl.string(tA.t.zBoHlf),
                                        icon: ty.L,
                                        onClick: (e) => (0, tt.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          i
                              ? (0, r.jsx)(
                                    t6.qv,
                                    { label: tA.intl.string(tA.t.WqhZss), icon: tT.q, onClick: () => (0, tt.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          h
                              ? (0, r.jsx)(
                                    t6.qv,
                                    { label: tA.intl.string(tA.t.NpHUi1), icon: tv.c, onClick: () => (0, tt.vc)(t) },
                                    "configure",
                                )
                              : null,
                          D
                              ? (0, r.jsx)(
                                    t6.qv,
                                    { label: tA.intl.string(tA.t.RpE9k7), icon: tN.Q, onClick: () => (0, tt.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          I
                              ? (0, r.jsx)(
                                    t6.qv,
                                    {
                                        label: y ? tA.intl.string(tA.t.LHUP9D) : tA.intl.string(tA.t["9p3D9p"]),
                                        icon: y ? tj.c : tM.c,
                                        onClick: () => (y ? (0, tt.r7)(t, n) : (0, tt.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    t6.qv,
                                    {
                                        label: n.pinned ? tA.intl.string(tA.t["Bse+F/"]) : tA.intl.string(tA.t.CvQ18w),
                                        icon: tR.t,
                                        onClick: (e) => (0, tt.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          g && f
                              ? (0, r.jsx)(
                                    t6.qv,
                                    { label: tA.intl.string(tA.t.rBIGBL), icon: tL.y, onClick: () => (0, tt.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          p && c
                              ? (0, r.jsx)(
                                    t6.qv,
                                    {
                                        label: tA.intl.string(tA.t["5IEsGx"]),
                                        icon: tD.W,
                                        onClick: (e) => (0, tt.$b)(t, n, e),
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
                          C
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(na, { channel: t, message: n }), (0, r.jsx)(t6.$$, {})],
                                }),
                          (0, r.jsx)(t9, {
                              togglePopout: L,
                              renderEmojiPicker: nd,
                              shouldShow: b,
                              isFocused: j,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            p && !c
                ? (0, r.jsx)(
                      t6.qv,
                      { label: tA.intl.string(tA.t["5IEsGx"]), icon: tD.W, onClick: (e) => (0, tt.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, r.jsx)(
                      t6.qv,
                      { label: tA.intl.string(tA.t.bt75uw), icon: tk.R, onClick: () => (0, tt.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, r.jsx)(
                      t6.qv,
                      { label: tA.intl.string(tA.t.I3ltXO), icon: t$.A, onClick: () => (0, tt.Z4)(t, n) },
                      "forward",
                  )
                : null,
            g && !f
                ? (0, r.jsx)(
                      t6.qv,
                      { label: tA.intl.string(tA.t.rBIGBL), icon: tL.y, onClick: () => (0, tt.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !g && A
                ? (0, r.jsx)(
                      t6.qv,
                      { label: tA.intl.string(tA.t["39d0Wj"]), icon: tL.y, onClick: () => (0, tt.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            _
                ? (0, r.jsx)(
                      t6.qv,
                      {
                          label: E ? tA.intl.string(tA.t["2km5Gf"]) : tA.intl.string(tA.t["lE/PG3"]),
                          icon: E ? tP.$ : tG.L,
                          onClick: () => S.A.patchMessageGuildOfficial(t.id, n.id, !E),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, r.jsx)(
                      t6.qv,
                      {
                          label: k ? tA.intl.string(tA.t["1kWJAr"]) : tA.intl.string(tA.t.MFGE51),
                          icon: tO.k,
                          onClick: () => (0, tt.Le)(t, n),
                          disabled: k,
                      },
                      "publish",
                  )
                : null,
            s && C
                ? (0, r.jsx)(
                      t6.qv,
                      {
                          label: tA.intl.string(tA.t.oyYWHE),
                          icon: tw.u,
                          onClick: (e) => (0, tt.RC)(t, n, e),
                          dangerous: !0,
                          separator: !C,
                      },
                      "delete",
                  )
                : null,
            C && s
                ? null
                : (0, r.jsx)(tU.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: i, closePopout: l } = e;
                          return (0, r.jsx)(ns, {
                              channel: t,
                              message: n,
                              canReport: a,
                              onClose: l,
                              updatePosition: i,
                          });
                      },
                      shouldShow: x,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: tU.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...i } = e,
                              { isShown: l } = t;
                          return (0, r.jsx)(
                              t6.qv,
                              {
                                  ref: M,
                                  label: tA.intl.string(tA.t["UKOtz+"]),
                                  icon: tF.j,
                                  selected: l,
                                  onClick: R,
                                  ...i,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function no(e) {
    let { channel: t, message: n } = e,
        i = (0, m.bG)([eG.A], () => null != eG.A.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, tJ.Bl)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    t6.qv,
                    { label: tA.intl.string(tA.t["5911Lb"]), icon: tB.m, onClick: () => (0, tt.Io)(t, n) },
                    "retry",
                ),
            (0, r.jsx)(
                t6.qv,
                { label: tA.intl.string(tA.t.oyYWHE), icon: tw.u, onClick: (e) => (0, tt.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function nc(e) {
    let { type: t, emoji: n, channel: i, message: l, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, tY.jq)(n);
    "add" === t
        ? (0, tZ.BB)(i.id, l.id, r, s, { burst: a })
        : (0, tZ.et)({ channelId: i.id, messageId: l.id, emoji: r, location: s, options: { burst: a } });
}
function nd(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(i && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? eh.liQ.GUILD_CHANNEL : eh.liQ.DM_CHANNEL,
                section: (0, tY.sn)(e),
                object: eh.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, r.jsx)(tX.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: l, willClose: s, isBurst: a } = i;
            nc({ type: "add", emoji: l, channel: e, message: t, location: tZ.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tS()(n, 150)() : n());
        },
        analyticsOverride: l,
        messageId: t.id,
    });
}
let nu = o.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: l } = e,
        s = (0, m.bG)([W.A], () => W.A.isEditing(t.id, n.id), [t.id, n.id]),
        a = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === eh.cmJ.SEND_FAILED ? (0, r.jsx)(no, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== eh.cmJ.SEND_FAILED ? (0, r.jsx)(nr, { ...e }) : null;
        })(e);
    return s || (null == a && null == o)
        ? null
        : (0, r.jsx)("div", {
              className: d()(e.className, { [nn.kL]: !0, [nn.gN]: i, [nn.nK]: l }),
              onClick: nl,
              onContextMenu: nl,
              role: "group",
              "aria-label": tA.intl.string(tA.t.Lv7LxN),
              children: (0, r.jsxs)(t6.Ay, { className: e.innerClassName, children: [a, o] }),
          });
});
var nh = n(701628),
    nm = n(639288),
    np = n(10364);
let ng = o.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: i = !1,
                groupId: l,
                isGroupStart: s,
                usernameProfile: a,
                avatarProfile: c,
                setPopout: d,
                author: u,
                repliedMessage: h,
                roleIcon: m,
            } = e,
            p = (0, eZ.r4)(t.author.id, n.id),
            g = (0, eZ.m)(t, n, a, d),
            A = (0, eZ.Jo)(c, d),
            f = o.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, r.jsx)(nm.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: i,
            subscribeToGroupId: l,
            showTimestampOnHover: !s && i && t.type !== eh.lAJ.REPLY,
            renderPopout: np.A,
            showAvatarPopout: c,
            showUsernamePopout: a,
            onClickAvatar: A,
            onClickUsername: g,
            onContextMenu: p,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    nA = o.memo(tg.A);
function nf(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: i,
            replyReference: l,
            author: s,
            repliedMessage: a,
            roleIcon: o,
        } = e,
        { message: c, compact: d, channel: u, groupId: h } = t,
        { usernameProfile: m, avatarProfile: p } = i;
    if ((0, eV.A)(c)) return null;
    let g = c.id === h;
    return g || d || null != l
        ? (0, r.jsx)(ng, {
              message: c,
              channel: u,
              compact: d,
              subscribeToGroupId: h,
              isGroupStart: g,
              groupId: h,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: p,
              author: s,
              repliedMessage: a,
              roleIcon: o,
          })
        : (0, r.jsx)(nA, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, eJ.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var n_ = n(141268),
    nE = n(155718),
    nC = n(168186),
    nx = n(994500),
    nb = n(217424),
    nS = n(436857),
    nI = n(387408),
    ny = n(942075),
    nT = n(808829),
    nv = n(552691),
    nN = n(861464),
    nj = n(805964);
let nM = o.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: i,
            compact: l = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: u,
        } = e,
        h = n.state === eF.a.LOADED ? n.message : void 0,
        p = (0, ez.X4)(h),
        g = (0, ew.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = o.useMemo(() => {
            if (null == h) return null;
            let e = (0, nI.A)(h);
            if (e.type === eh.lAJ.USER_JOIN)
                return (0, nS.$)(
                    tA.intl.formatToParts(nN.A.getSystemMessageUserJoin(e.id), {
                        username: null != p ? p.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === eh.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nS.$)(
                    (0, ny.WC)({
                        username: null != p ? p.nick : e.author.username,
                        guildId: i?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === eh.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nS.$)((0, nT.P)({ application: e?.application, username: p?.nick }));
            if (e.type === eh.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nS.$)((0, nv.g6)({ application: e?.application, username: p?.nick }));
            if (e.type === eh.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nS.$)((0, nv.uk)({ application: e?.application, username: p?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0 },
                    n = e.isFirstMessageInForumPost(i)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0 }
                        : { ...t, formatInline: !0, allowHeading: g, allowList: g };
                return (0, th.Ay)(e, n).content;
            }
            return null;
        }, [h, p, i, g]),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: _ } = (0, m.cf)(
            [nx.A],
            () => ({
                isReplyAuthorBlocked: null != h && nx.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && nx.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        E = (0, eZ.r4)(h?.author.id, i.id),
        C = (0, eZ.Ck)(t, h),
        x = (0, eZ.H9)(h, i, s, c),
        b = (0, eZ.Ge)(a, c),
        S = o.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        I = (0, ez.X4)(t);
    return (0, r.jsx)(nj.A, {
        repliedAuthor: p,
        baseMessage: t,
        channel: i,
        baseAuthor: I,
        referencedMessage: n,
        content: A,
        compact: l,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: _,
        showAvatarPopout: a,
        showUsernamePopout: s,
        renderPopout: np.A,
        onClickAvatar: b,
        onClickUsername: x,
        onClickReply: C,
        onContextMenu: E,
        onPopoutRequestClose: S,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nR(e) {
    let {
        message: t,
        channel: n,
        compact: i,
        setPopout: l,
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
            compact: i,
            setPopout: l,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
let nL = o.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: i = !1,
            interactionUsernameProfile: l,
            interactionAvatarProfile: s,
            interactionData: a,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: u,
        } = e,
        { isInteractionUserBlocked: h, isInteractionUserIgnored: p } = (0, m.cf)(
            [nx.A],
            () => ({
                isInteractionUserBlocked: nx.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nx.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        g = (0, m.bG)([eF.A], () => eF.A.getMessageByReference(t?.messageReference)),
        A = (0, eZ.r4)(t.interaction?.user.id, n.id),
        f = (0, eZ.T0)(t.interaction, n, l, u),
        _ = (0, eZ.Yq)(s, u),
        E = (0, nC.Am)(t),
        C = E?.type === nE.G4.APPLICATION_COMMAND ? E.target_user?.id : void 0,
        x = (0, eZ.r4)(C, n.id),
        b = (0, eZ.I)(C, n, c, u),
        S = (0, eZ.Ge)(d, u),
        I = (0, eZ.U_)(a, u),
        y = o.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        T = o.useCallback(
            () =>
                nR({
                    message: t,
                    channel: n,
                    compact: i,
                    setPopout: u,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: g,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, i, t, d, g, c, u],
        );
    return (0, r.jsx)(nb.A, {
        message: t,
        channel: n,
        compact: i,
        isInteractionUserBlocked: h,
        isInteractionUserIgnored: p,
        showAvatarPopout: s,
        showUsernamePopout: l,
        showDataPopout: a,
        showTargetAvatarPopout: d,
        showTargetUsernamePopout: c,
        onClickAvatar: _,
        onClickUsername: f,
        onClickCommand: I,
        onUserContextMenu: A,
        onClickTargetAvatar: S,
        onClickTargetUsername: b,
        onTargetUserContextMenu: x,
        onPopoutRequestClose: y,
        renderTargetMessage: T,
    });
});
var nD = n(352043);
function nk(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: i },
        compact: l = !1,
        className: s,
    } = e;
    eD()(n.type === eh.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...a } = (0, h.rm)(e.id ?? ""),
        o = (0, m.bG)([eF.A], () => eF.A.getMessageByReference(i)),
        { popouts: c, setPopout: u } = (0, ti.A)(n.id, ey.Fd),
        p = (0, ez.Ay)(n),
        g = (0, eJ.fF)(n),
        A = (0, eJ.ZD)(n);
    return n.type === eh.lAJ.THREAD_STARTER_MESSAGE && null != o && o.state === eF.a.LOADED
        ? (0, r.jsx)(nP, { ...e, viewingChannelId: n.channel_id, message: o.message, groupId: o.message.id })
        : (0, r.jsx)(e$.A, {
              ...a,
              id: t,
              compact: l,
              className: d()(s, { [nh.iU]: !0, [nh.HJ]: !l, [nh.H4]: !0, [nh._A]: !0 }),
              childrenHeader: nf({ messageProps: e, setPopout: u, messagePopouts: c, replyReference: i, author: p }),
              childrenSystemMessage: (0, nD.A)(e),
              childrenMessageContent: null,
              "aria-labelledby": g,
              "aria-describedby": A,
              hasThread: !1,
              author: p,
          });
}
function nP(e) {
    let {
            id: t,
            message: n,
            message: { id: i, channel_id: l },
            channel: { guild_id: s },
            compact: a = !1,
            className: c,
            groupId: u,
            viewingChannelId: p,
        } = e,
        g = n.type === eh.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, h.rm)(e.id ?? ""),
        { isFocused: _, handleFocus: E, handleBlur: C } = (0, eZ.G8)(A),
        { popouts: x, selected: b, setPopout: S } = (0, ti.A)(n.id, ey.Fd),
        I = H.hD.useSetting(),
        y = H.rs.useSetting(),
        v = (0, m.bG)([eF.A], () => eF.A.getMessageByReference(g)),
        N = (0, ew.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: j,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, eZ.yp)({ groupId: u, message: n, defaultValue: b }),
        L = (0, m.bG)([T.A], () => T.A.keyboardModeEnabled),
        D = b || (L && _),
        k = D || R,
        P = (0, m.bG)([eH.A], () => eH.A.isDeveloper),
        {
            content: G,
            hasSpoilerEmbeds: O,
            hasBailedAst: w,
        } = (0, tl.A)(n, {
            hideSimpleEmbedContent: I && y,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: P,
            previewLinkTarget: !0,
            viewingChannelId: p,
        }),
        U = tn(i, l, L),
        F = (0, ez.Ay)(n),
        B = (0, eJ.fF)(n, u),
        K = (0, eJ.ZD)(n),
        V = (0, r.jsx)(eY.x, { value: k, children: (0, n_.A)(e, G, !1) }),
        z = o.useCallback(() => (0, eM.uh)(s, l, i), [s, l, i]),
        W = (0, eO.$7)({ guildId: s, roleId: F.iconRoleId });
    return (0, r.jsxs)("div", {
        className: nh.m5,
        children: [
            (0, r.jsx)(ek.D, {
                className: nh.lA,
                onClick: z,
                "aria-label": tA.intl.string(tA.t.k5WiPf),
                children: tA.intl.string(tA.t.k5WiPf),
            }),
            (0, r.jsx)(e$.A, {
                ...f,
                id: t,
                compact: a,
                className: d()(c, {
                    [nh.iU]: !0,
                    [nh.HJ]: !a,
                    [nh.mK]: n.mentioned,
                    [nh.M1]: (0, ed.ec)(n),
                    [nh.H4]: (0, eV.A)(n),
                    [nh._A]: n.id === u || n.type === eh.lAJ.REPLY,
                    [nh.wH]: D,
                }),
                zalgo: !0,
                onKeyDown: U,
                onFocus: E,
                onBlur: C,
                childrenRepliedMessage:
                    n.type === eh.lAJ.REPLY &&
                    nR({
                        ...e,
                        setPopout: S,
                        referencedUsernameProfile: x.referencedUsernameProfile,
                        referencedAvatarProfile: x.referencedAvatarProfile,
                        replyReference: g,
                        replyMessage: v,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nf({
                    messageProps: e,
                    setPopout: S,
                    messagePopouts: x,
                    replyReference: g,
                    author: F,
                    repliedMessage: v,
                    roleIcon: W,
                }),
                childrenAccessories: (0, ta.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: O,
                    hasBailedAst: w,
                    isInteracting: k,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nD.A)(e),
                childrenMessageContent: V,
                onMouseMove: j,
                onMouseLeave: M,
                "aria-labelledby": B,
                "aria-describedby": K,
                hasThread: !1,
                author: F,
            }),
        ],
    });
}
let nG = o.memo(function (e) {
    let t,
        n,
        {
            id: i,
            message: l,
            message: { id: s },
            channel: a,
            channel: { id: c },
            compact: u = !1,
            className: p,
            flashKey: A,
            groupId: f,
            renderContentOnly: _,
        } = e;
    eD()(l.type !== eh.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let E = eh.sl8.has(l.type) ? l.messageReference : void 0,
        { onFocus: C, ...x } = (0, h.rm)(e.id ?? ""),
        b = H.hD.useSetting(),
        S = H.rs.useSetting(),
        I = (0, m.bG)([eF.A], () => eF.A.getMessageByReference(E)),
        { popouts: y, selected: v, setPopout: N } = (0, ti.A)(l.id, ey.Fd),
        j = (0, eZ.VL)(l, a, N),
        M = (0, eZ.ri)(l, a),
        {
            handleMouseEnter: R,
            handleMouseLeave: L,
            hasHovered: D,
            isHovered: k,
        } = (0, eZ.yp)({ groupId: f, message: l, defaultValue: v }),
        { isFocused: P, hasFocused: G, handleFocus: O, handleBlur: w } = (0, eZ.G8)(C),
        U = o.useCallback(
            (e) => {
                O(e), R(e);
            },
            [O, R],
        ),
        F = o.useCallback(
            (e) => {
                w(e), L();
            },
            [w, L],
        ),
        B = (0, m.bG)([W.A], () => W.A.isEditing(c, s), [c, s]),
        K = (0, m.bG)([T.A], () => T.A.keyboardModeEnabled),
        V = v || B || (K && P),
        z = V || k,
        q = (0, m.bG)(
            [eB.A],
            () => l.hasFlag(eh.pr7.HAS_THREAD) && eB.A.getChannel(el.default.castMessageIdAsChannelId(l.id)),
        ),
        $ = l.isFirstMessageInForumPost(a),
        J = (0, ew.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        Z = (0, m.bG)([eH.A], () => eH.A.isDeveloper),
        {
            content: Y,
            hasSpoilerEmbeds: X,
            hasBailedAst: Q,
        } = (0, tl.A)(l, {
            hideSimpleEmbedContent: b && S,
            formatInline: !1,
            allowList: $ || J,
            allowHeading: $ || J,
            allowLinks: !0,
            allowDevLinks: Z,
            previewLinkTarget: !0,
        }),
        ee = tn(s, c, K),
        et = (0, ez.Ay)(l),
        en = (0, m.bG)([eU.A], () => eU.A.getPendingReply(c)),
        ei =
            ((t = o.useRef(A)),
            o.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        es = (0, eO.$7)({ guildId: a.guild_id, roleId: et.iconRoleId }),
        ea = (0, eP.A)(c, s)?.color ?? null,
        er = (0, eJ.fF)(l, f),
        ec = (0, eJ.ZD)(l),
        eu = (0, m.bG)([eG.A], () => eG.A.getMessage(s), [s]),
        em = (0, ts.A)({ message: l, channel: a }),
        ep = o.useRef(window),
        eg = null != eu,
        eA = (0, eK.Nd)(a.guild_id, a, "ChatMessage");
    (n =
        l.type === eh.lAJ.CUSTOM_GIFT
            ? ""
            : !B && eg
              ? (function (e, t) {
                    let { message: n, compact: i } = e;
                    return (0, r.jsx)(tx, { message: n, content: t, compact: i ?? !1 });
                })(e, Y)
              : (0, n_.A)(e, Y, B)),
        (n = (0, r.jsx)(eY.x, { value: z, children: n }));
    let ef = l.id === f,
        e_ = (0, r.jsx)(g.vN, {
            offset: { left: 4, right: 4 },
            children: (0, r.jsx)("li", {
                id: i,
                className: nh.Nt,
                "aria-setsize": -1,
                style: null != ea ? { backgroundColor: ea } : void 0,
                children: (0, r.jsx)(e$.A, {
                    ...x,
                    "aria-setsize": -1,
                    "aria-roledescription": tA.intl.string(tA.t.BAB0yK),
                    "aria-labelledby": er,
                    "aria-describedby": ec,
                    onFocus: U,
                    onBlur: F,
                    onContextMenu: j,
                    onKeyDown: ee,
                    onClick: M,
                    compact: u,
                    contentOnly: _,
                    className: d()(p, {
                        [nh.iU]: !0,
                        [nh.HJ]: !u,
                        [nh.mK]: l.mentioned,
                        [nh.M1]: (0, ed.ec)(l),
                        [nh.SH]: l.type === eh.lAJ.NITRO_NOTIFICATION,
                        [nh.Sg]: l.hasFlag(eh.pr7.IS_GUILD_OFFICIAL) && eA,
                        [nh.H4]: (0, eV.A)(l),
                        [nh._A]: !_ && (ef || l.type === eh.lAJ.REPLY),
                        [nh.wH]: V,
                        [nh.$n]: en?.message.id === l.id,
                        [nh.$w]: l.isCommandType() && l.state === eh.cmJ.SENDING,
                        [nh.DX]: eg,
                    }),
                    zalgo: !B,
                    childrenRepliedMessage:
                        _ || l.type !== eh.lAJ.REPLY
                            ? void 0
                            : nR({
                                  ...e,
                                  setPopout: N,
                                  referencedUsernameProfile: y.referencedUsernameProfile,
                                  referencedAvatarProfile: y.referencedAvatarProfile,
                                  replyReference: E,
                                  replyMessage: I,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: i, channel: l, compact: s } = e;
                        return null != i.interaction && "" !== i.interaction.displayName
                            ? (0, r.jsx)(nL, { message: i, channel: l, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, N, y),
                    childrenHeader: _
                        ? void 0
                        : nf({
                              messageProps: e,
                              setPopout: N,
                              messagePopouts: y,
                              replyReference: E,
                              author: et,
                              repliedMessage: I,
                              roleIcon: es,
                          }),
                    childrenAccessories: (0, ta.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: X,
                        hasBailedAst: Q,
                        handleContextMenu: j,
                        isInteracting: z,
                        isAutomodBlockedMessage: eg,
                        forceAddReactions: l.type === eh.lAJ.EMOJI_ADDED,
                    }),
                    childrenButtons:
                        D || G
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: i, moreUtilities: l },
                                          isFocused: s,
                                          buttonProps: { message: a, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = a.state === eh.cmJ.SENDING,
                                      m = a.id === c,
                                      p = (0, eo.Lt)(a.flags, eh.pr7.EPHEMERAL),
                                      g = a.state === eh.cmJ.SEND_FAILED;
                                  return h || (p && !g)
                                      ? null
                                      : (0, r.jsx)(nu, {
                                            className: nh.Uo,
                                            innerClassName: nh.Mc,
                                            isHeader: !d && m && !(0, eV.A)(a),
                                            isReply: !d && a.type === eh.lAJ.REPLY && null != a.messageReference,
                                            channel: o,
                                            message: a,
                                            messageWindow: u,
                                            setPopout: t,
                                            showEmojiPicker: n,
                                            showEmojiBurstPicker: i,
                                            showMoreUtilities: l,
                                            isFocused: s,
                                        });
                              })({
                                  buttonProps: e,
                                  setPopout: N,
                                  messagePopouts: y,
                                  isFocused: k || P,
                                  messageWindow: ep.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nD.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: R,
                    onMouseLeave: L,
                    hasThread: !_ && l.hasFlag(eh.pr7.HAS_THREAD) && null != q,
                    isSystemMessage: (0, eV.A)(l),
                    hasReply: l.type === eh.lAJ.REPLY,
                    messageRef: (e) => {
                        (em.current = e), (ep.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: et,
                }),
            }),
        });
    return null != ei
        ? (0, r.jsx)(
              eq,
              { flashKey: ei, className: d()({ [nh.bB]: !0, [nh._A]: !u && l.id === f }), children: e_ },
              `bg-flash-${i}`,
          )
        : e_;
});
function nO(e, t) {
    let n = e.offsetTop,
        i = e.offsetParent;
    for (; null != i && i !== t && (0, eT.vq)(i, HTMLElement); ) (n += i.offsetTop ?? 0), (i = i.offsetParent);
    return n;
}
function nw(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === el.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === n) return t;
        let i = e.getByIndex(e.indexOf(t) + n);
        return i?.id ?? t;
    }
    let i = [
            t,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(el.default.compare),
        l = i.indexOf(t),
        s = i[l + (Math.abs(n) > 0 ? n : 1)] ?? i[l - 1];
    return null != s ? s : null;
}
let nU = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class nF {
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
        let { offsetHeight: i, scrollHeight: l } = this.getScrollerState(),
            s = this.isHeightChange(i, l);
        if (
            ((this.offsetHeightCache = i),
            (this.scrollHeightCache = l),
            (this.loading = e.messages.loadingMore),
            t.channelId !== e.messages.channelId)
        )
            this.loadMorePausedUntilUserScroll = !1;
        else if (t.loadingMore && !e.messages.loadingMore) {
            let e = Math.abs(l - this.scrollHeightBeforeLoad);
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
            let n = nw(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping())
                    return void (null != n
                        ? this.scrollToMessage({ jumpTargetId: n, animate: !0 })
                        : (this.jumping = !1));
            } else {
                let i,
                    l = t.first();
                null != l &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (i = el.default.extractTimestamp(l.id)),
                    this.scrollToMessage({ jumpTargetId: n, animate: !0, fromTimestamp: i });
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            r = t.last();
        if (null != a && a.state === eh.cmJ.SENDING && r?.id !== a.id) return void this.setScrollToBottom();
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: ey.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(i, l);
    }
    getAnchorData(e, t, n) {
        let i = this.getElementFromMessageId(e),
            l = this.ref.current?.getScrollerNode();
        if (!(0, eT.vq)(i) || null == l) return null;
        let { offsetHeight: s } = i,
            a = nO(i, l),
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
        return this.props.channel.isForumPost() ? ey.Gt : ey.k8;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            i = this.getScrollerState(),
            { scrollTop: l } = i,
            s = t && l >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            r = (t) => (-1 === t ? el.default.castChannelIdAsMessageId(n.id) : e._array[t]?.id),
            o = -1,
            c = !1;
        for (;;) {
            let t = r(o);
            if (null == t) break;
            let n = this.getAnchorData(t, l);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > l + s + i.offsetHeight)) break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= l + s || o === e.length - 1) && ((a = n), (c = !0)), o++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            i = e ? -1 : 1,
            l = null,
            s = t._array.length - 1;
        for (let a = e ? s : 0; null != t._array[a]; a += i) {
            let e = t._array[a],
                i = this.getAnchorData(e.id, n);
            if (null != i) {
                l = i;
                break;
            }
        }
        return l;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, eT.vq)(t)) continue;
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
                  padding: ey.mZ + this.props.additionalMessagePadding,
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
        let i = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != i && (i.offsetFromTop >= n || t > i.offsetTop + i.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        this.updateFocusAnchor(this.focusAnchor?.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        let i = this.ref.current?.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != i &&
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
        let i = this.getAnchorData(this.automaticAnchor.id, e);
        t && null != i && null != this.automaticAnchor && (i.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(i);
    }
    updateVisibleMessagesDebounced = ef().debounce(eR.s_, 300);
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
        let i = this.isInScrollTriggerLoadingRegion(t);
        1 === i ? this.loadMore() : 2 === i ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(t);
    };
    handleResize = (e, t) => {
        let { offsetHeightCache: n, scrollHeightCache: i } = this;
        "container" === t ? (n = e.contentRect.height) : "content" === t && (i = e.contentRect.height),
            this.isHeightChange(n, i) && this.fixScrollPosition(n, i);
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
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            { messages: l, placeholderHeight: s } = this.props;
        return l.hasMoreBefore && t < s && i > n ? 1 : l.hasMoreAfter && t >= i - n - s ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            { messages: l } = this.props;
        return l.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && i > n
            ? 1
            : l.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            {
                prevScrollTop: l,
                props: { placeholderHeight: s },
            } = this;
        if (((this.prevScrollTop = t), null == l)) return;
        let a = this.isInPlaceholderRegion(e),
            r = t - l;
        0 !== a &&
            0 !== r &&
            (1 === a && t + r <= 0
                ? (this.mergeTo(s - n), (this.prevScrollTop = s - n))
                : 2 === a && t + r >= i - n && (this.mergeTo(i - s), (this.prevScrollTop = i - s)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, eN._9)(this.props.channel.id, this.props.windowId);
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
            let n = nw(e);
            if (null == n) return;
            let i = this.getElementFromMessageId(n);
            (0, eT.vq)(i)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(i, "middle", t ? this.newMessageBarBuffer() : ey.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = this.getDocument()?.getElementById(ey.q4),
            l = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != n && n(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = e),
            null != i
                ? this.scrollTo(this.getOffsetOrientationFromNode(i, t, this.newMessageBarBuffer()), e, l)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), e, l);
    }
    getOffsetOrientationFromNode(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = this.ref.current?.getScrollerNode();
        if (null == i) return 0;
        let l = this.getScrollerState(),
            s = nO(e, i);
        return "middle" === t ? Math.min(s - 0.5 * l.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = nw(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1 })
            : this.props.hasUnreads &&
                this.props.channel.type !== eh.rbe.GUILD_VOICE &&
                this.props.channel.type !== eh.rbe.GUILD_STAGE_VOICE
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
                i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { messages: l } = e.props;
            if (i) {
                let e = l.last();
                null != e && (n = e.id);
            } else {
                let e = l.first();
                null != e && (t = e.id);
            }
            (e.messageFetchAnchor = e.findFetchAnchor(i)),
                (e.scrollHeightBeforeLoad = e.scrollHeightCache),
                (e.loading = !0),
                S.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(eh.EMb, 2 * (0, eg.h)("scrollManager.loadMore")),
                    truncate: !0,
                });
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.ref.current?.scrollTo({ to: e, animate: !T.A.useReducedMotion && t, callback: n }),
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
            S.A.jumpToPresent(n.id, (0, eg.h)("scrollManager.jumpToPresent")),
                (0, eM.uh)(n.getGuildId() ?? eh.ME, n.id);
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensionsDebounced = ef().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) ev.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: i, scrollHeight: l, offsetHeight: s } = this.getScrollerState();
            ev.A.updateChannelDimensions(t.id, Date.now(), i - n, l - n, s, e);
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
        let { jumpTargetId: t, animate: n = !1, fromTimestamp: i } = e;
        if (null == this.ref.current) return;
        if (t === this.props.channel.id) return void this.scrollTo(0);
        let l = this.getElementFromMessageId(t);
        this.isJumping() ||
            !n ||
            null == i ||
            T.A.useReducedMotion ||
            (el.default.extractTimestamp(t) > i ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let s = () => {
            (this.jumping = !1),
                (0, eT.vq)(l) && ((l.tabIndex = -1), l.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, eT.vq)(l)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      l,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : ey.mZ,
                  ),
                  n,
                  s,
              )
            : this.scrollToNewMessages(n, "middle", s);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: i } = t,
            { messages: l, hasUnreads: s, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!l.hasMoreBefore) return 0;
            else return s ? a - ey.N0 - 2 : a + 500;
        return l.hasMoreAfter ? n - i - a - 500 : n - i;
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
            let { scrollTop: t, offsetHeight: n, scrollHeight: i } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, i), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = ef().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ef().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ef().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ef().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, eN.Z5)(this.props.channel.id, this.props.windowId);
    }
}
n(667532);
var nB = n(58149),
    nH = n(486227),
    nK = n(731738),
    nV = n(192308),
    nz = n(534514),
    nW = n(832712),
    nq = n(831062),
    n$ = n(381689),
    nJ = n(754302),
    nZ = n(632738),
    nY = n(544231),
    nX = n(349435),
    nQ = n(665909);
function n0(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/41b06cc820452b3b01d2a90f76b9ba4007cf4c795b2647fc3f0ff7d6a0632785.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var n1 = n(821609),
    n2 = n(789645),
    n3 = n(834581);
function n4(e) {
    let { header: t, description: n, onDismiss: i, buttons: l, dismissible: s = !0 } = e,
        a = o.useCallback(() => {
            i?.();
        }, [i]);
    return (0, r.jsxs)("div", {
        className: n3.HZ,
        children: [
            (0, r.jsxs)("div", {
                className: n3.Be,
                children: [
                    (0, r.jsx)(n0, { alt: "", size: 32 }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(nz.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, r.jsx)(td.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n3.Uo,
                children: l?.map((e, t) =>
                    (0, r.jsx)(
                        n1.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, r.jsx)(ek.D, {
                      className: n3.b,
                      onClick: a,
                      role: "button",
                      "aria-label": tA.intl.string(tA.t.WAI6xu),
                      children: (0, r.jsx)(n2.P, { size: "md", color: "currentColor", className: n3.b }),
                  })
                : null,
        ],
    });
}
function n7(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: i,
        warningType: l,
        header: s,
        description: a,
        onDismiss: c,
        buttons: d,
    } = e;
    o.useEffect(() => {
        nq.A.increment({ name: nK.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = o.useCallback(() => {
        c?.(), (0, nQ._$)({ channelId: t, warningId: n, senderId: i, warningType: l, cta: nQ.Wm.USER_BANNER_DISMISS });
    }, [c, t, n, i, l]);
    return (0, r.jsx)(n4, { buttons: d, description: a, header: s, onDismiss: u });
}
var n6 = n(477427);
function n5(e) {
    let { channelId: t, warningId: i, senderId: l } = e,
        s = [
            { title: tA.intl.string(tA.t.wSZfJR), description: tA.intl.string(tA.t.CRwzW5) },
            { title: tA.intl.string(tA.t.cmMUaB), description: tA.intl.string(tA.t.n6G1ue) },
            { title: tA.intl.string(tA.t["5SPKSy"]), description: tA.intl.string(tA.t.eyjeJQ) },
        ],
        a = o.useCallback(() => {
            (0, nY.xi)(t, [i]);
        }, [t, i]),
        c = (e) => {
            nW.A.updateChannelOverrideSettings(null, t, { muted: !0 }, n6.fd.Muted),
                n$.A.showMuteSuccessToast(l, t),
                (0, nQ._$)({ channelId: t, warningId: i, senderId: l, warningType: nX._j.LIKELY_ATO, cta: e }),
                a();
        };
    return (
        o.useEffect(() => {
            (0, nQ.mO)(eh.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: i,
                senderId: l,
                warningType: nX._j.LIKELY_ATO,
            }),
                nq.A.increment({ name: nK.K.SAFETY_WARNING_VIEW });
        }, [t, i, l]),
        (0, r.jsx)(n7, {
            channelId: t,
            warningId: i,
            senderId: l,
            warningType: nX._j.LIKELY_ATO,
            header: tA.intl.string(tA.t.R8UsiI),
            description: tA.intl.string(tA.t.lI8nQl),
            onDismiss: a,
            buttons: [
                {
                    text: tA.intl.string(tA.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, nV.openModalLazy)(async () => {
                            let { default: e } = await n.e("47894").then(n.bind(n, 129493));
                            return (n) => {
                                let { transitionState: a, onClose: o } = n;
                                return (0, r.jsx)(e, {
                                    transitionState: a,
                                    onClose: o,
                                    channelId: t,
                                    warningId: i,
                                    senderId: l,
                                    description: tA.intl.string(tA.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, r.jsx)(
                                            nJ.B,
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
                                            nZ.PQ,
                                            {
                                                title: tA.intl.string(tA.t.ftIK2A),
                                                description: tA.intl.string(tA.t.w2ve0t),
                                                buttonText: tA.intl.string(tA.t.ftIK2A),
                                                onButtonPress: () => {
                                                    c(nQ.Wm.USER_MODAL_MUTE), o();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, r.jsx)(ek.D, {
                                        onClick: () =>
                                            (0, nQ._$)({
                                                channelId: t,
                                                warningId: i,
                                                senderId: l,
                                                warningType: nX._j.LIKELY_ATO,
                                                cta: nQ.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, r.jsx)(nz.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: tA.intl.format(tA.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, nQ._$)({
                                channelId: t,
                                warningId: i,
                                senderId: l,
                                warningType: nX._j.LIKELY_ATO,
                                cta: nQ.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: tA.intl.string(tA.t.ftIK2A), onClick: () => c(nQ.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var n8 = n(564771),
    n9 = n(310784),
    ie = n.n(n9),
    it = n(534890),
    ii = n(922529),
    il = n(507610);
function is(e) {
    let { item: t, channel: n, index: i } = e,
        l = (0, m.bG)([G.A], () => G.A.getSelectedConversation(n.id)),
        s = (0, m.bG)([G.A], () => G.A.getSelectedConversationColor(n.id));
    if (null == l) return null;
    let a = null != t.content,
        o = null != s ? ie()(s).alpha(1).css() : void 0;
    return (0, r.jsx)("div", {
        style: null != o ? { "--conversation-color": o } : void 0,
        children: (0, r.jsx)(
            ii.A,
            {
                className: d()(il.yF, a ? il.AC : il.xR),
                contentClassName: a ? il.Ij : il.Xe,
                children: a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(it.o, { size: "xs", color: "currentColor", className: il.Kk }),
                              t.content,
                          ],
                      })
                    : (0, r.jsx)(it.o, { size: "xs", color: "currentColor", className: il.Kk }),
            },
            `conv-divider-${t.contentKey ?? i}`,
        ),
    });
}
var ia = n(495273),
    ir = n(429933),
    io = n(93246),
    ic = n(95701),
    id = n(808728),
    iu = n(427262),
    ih = n(314307),
    im = n(713654),
    ip = n(435470),
    ig = n(376310),
    iA = n(42362);
function i_(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: i } = e,
        l =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)("div", {
        className: d()(iA._, { [iA.L]: i }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(ig.A, { tag: e, onRemove: l, size: null == l ? ig.A.Sizes.SMALL : ig.A.Sizes.MEDIUM }, e.id),
        ),
    });
}
var iE = n(873185);
function iC(e) {
    let { channel: t } = e,
        n = (0, ip.kt)(t),
        { firstMessage: i } = (0, m.cf)([tq.A], () => tq.A.getMessage(t.id)),
        l = new Set((0, ip.zt)(t, n)),
        s = (0, im.gU)(t) ?? it.o,
        a = (0, k.Ay)(t);
    return (0, r.jsxs)(ih.Ay, {
        channelId: t.id,
        className: iE.kL,
        children: [
            (0, r.jsx)("div", { className: iE.P0, children: (0, r.jsx)(s, { className: iE.Kk, strokeWidth: 1.75 }) }),
            (0, r.jsx)(ih.cr, { className: iE.wx, children: a }),
            null == i &&
                (0, r.jsx)(td.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: tA.intl.string(tA.t.mE3KJN),
                }),
            (0, r.jsx)(i_, { appliedTags: l, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var ix = n(289873),
    ib = n(548118),
    iS = n(513461),
    iI = n(654265),
    iy = n(561446),
    iT = n(806700);
function iv(e) {
    let { joinRequest: t, guild: n } = e,
        i = (0, m.bG)([X.default], () => X.default.getUser(t.userId));
    return (0, r.jsxs)("div", {
        className: iT.I8,
        children: [
            (0, r.jsxs)("div", {
                className: iT.Ov,
                children: [
                    null != n &&
                        (0, r.jsxs)("div", {
                            className: iT.yB,
                            children: [
                                (0, r.jsx)(ib.Ay, { guild: n, active: !0, size: ib.Ay.Sizes.SMOL, className: iT.$f }),
                                (0, r.jsx)(nz.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != i &&
                        (0, r.jsx)(nz.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: tA.intl.format(tA.t.jDV3i6, { username: i.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== iS.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === iS.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("hr", { className: iT.g2 }),
                            (0, r.jsxs)("div", {
                                className: iT.fs,
                                children: [
                                    (0, r.jsx)(td.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, r.jsx)(td.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function iN(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: i, joinRequestGuild: l } = (0, iI.A)(t.id);
    return (0, r.jsx)(ih.Ay, {
        channelId: t.id,
        className: iT.kL,
        children:
            null != i && null != i.formResponses
                ? (0, r.jsxs)("div", {
                      className: iT.KJ,
                      children: [
                          (0, r.jsx)("div", { children: (0, r.jsx)(iv, { guild: l, joinRequest: i }) }),
                          (0, r.jsx)(iy.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, r.jsx)(ix.y, {})
                  : null,
    });
}
var ij = n(825484),
    iM = n(778712),
    iR = n(97808),
    iL = n(241541),
    iD = n(793574),
    ik = n(571694),
    iP = n(922301),
    iG = n(368919),
    iO = n(598104),
    iw = n(990078),
    iU = n(396787),
    iF = n(817789);
function iB(e) {
    let { channel: t, children: n, className: i, editable: l, location: s } = e;
    return l
        ? (0, r.jsx)(iw.m, {
              position: "bottom",
              text: tA.intl.string(tA.t["0qPSMV"]),
              children: (0, r.jsxs)(ek.D, {
                  className: d()(iF.e, i),
                  onClick: () => (0, iU.jv)(t.id, s),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: iF.Z,
                          children: (0, r.jsx)(tk.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", { className: i, children: n });
}
var iH = n(73028),
    iK = n(95550),
    iV = n(854627),
    iz = n(322923);
function iW(e) {
    let t,
        { channel: n, children: i, user: l } = e,
        s = (0, m.bG)([T.A], () => T.A.useReducedMotion),
        a = (0, k.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, iV.A)({ userId: l?.id, size: iM._3.SIZE_80, animateOnHover: !0 }),
        [h, p] = o.useState(!1),
        g = o.useCallback(() => {
            d.onMouseEnter(), p(!0);
        }, [d]),
        A = o.useCallback(() => {
            d.onMouseLeave(), p(!1);
        }, [d]),
        f = !n.isMultiUserDM() && l?.displayNameStyles != null;
    return (0, r.jsxs)(ih.Ay, {
        channelId: n.id,
        onMouseEnter: g,
        onMouseLeave: A,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, r.jsx)(iB, {
                      channel: n,
                      editable: !0,
                      location: iD.A.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(iO.A, { channel: n, size: iM._3.SIZE_80, animated: t, "aria-label": a }),
                  })
                : (0, r.jsx)(iR.eu, {
                      "aria-label": a,
                      size: iM._3.SIZE_80,
                      src: (0, ik.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, r.jsx)(ih.cr, {
                children: f
                    ? (0, r.jsx)(iG.A, {
                          userName: a,
                          displayNameStyles: l?.displayNameStyles,
                          effectDisplayType: h ? iP.G.ANIMATED : iP.G.STATIC,
                          loop: !0,
                      })
                    : a,
            }),
            (0, r.jsx)(ih.j1, { children: i }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(ij.e, {
                    className: iz.U,
                    children: [
                        (0, r.jsx)(iK.NE, { channel: n, text: tA.intl.string(tA.t["6Qgrev"]), icon: iL.D }),
                        (0, r.jsx)(n1.$, {
                            icon: tk.R,
                            variant: "secondary",
                            text: tA.intl.string(tA.t["5Q9+/L"]),
                            "aria-label": tA.intl.string(tA.t["5Q9+/L"]),
                            onClick: () => (0, iH.U)(n.id, iD.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var iq = n(136722),
    i$ = n(342952),
    iJ = n(177953),
    iZ = n(725570),
    iY = n(435183),
    iX = n(685374),
    iQ = n(87e3),
    i0 = n(474462);
function i1(e) {
    let t,
        { className: n, children: i, verified: l, roleColor: s, roleName: a } = e;
    return (
        (t = l
            ? (0, r.jsx)(iQ.A, { size: 12, color: s, className: i0.TS })
            : (0, r.jsx)("div", { className: i0.yY, style: { backgroundColor: s } })),
        (0, r.jsxs)("div", { className: d()(n, i0.JC), style: { "--custom-role-label-color": s }, children: [t, a, i] })
    );
}
var i2 = n(997509),
    i3 = n(46054),
    i4 = n(34457),
    i7 = n(317525),
    i6 = n(488926),
    i5 = n(84476);
function i8(e) {
    let {
        className: t,
        roleColor: n,
        roleName: i,
        hasRemoveIcon: l = !1,
        onClick: s,
        disabled: a = !1,
        verified: o = !1,
    } = e;
    return (0, r.jsx)(ek.D, {
        className: d()(t, i5.x6, { [i5.r9]: a }),
        onClick: a ? void 0 : s,
        "aria-disabled": a,
        role: "button",
        children: (0, r.jsx)(i1, {
            className: i5.JC,
            roleColor: n,
            roleName: i,
            verified: o,
            children:
                l &&
                (0, r.jsx)(n2.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: i5.Tj,
                    colorClass: i5.eG,
                }),
        }),
    });
}
var i9 = n(516757);
function le(e) {
    let { channel: t } = e,
        [n, i] = o.useState(!1),
        l = (0, k.Ay)(t, !0),
        s = t.guild_id,
        a = (0, m.bG)([i7.A], () => (null != s ? i7.A.getSortedRoles(s) : void 0)),
        c = (0, m.bG)([X.default, t1.A], () => X.default.getUser(t1.A.getGuild(s)?.ownerId)),
        u = o.useMemo(() => (null != a ? a.filter((e) => !(0, i4.Oy)(e)) : []), [a]),
        h = o.useMemo(
            () =>
                ef()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = i6.aH({ forceRoles: { [e.id]: e }, context: t });
                        return iq.X8(n, iq.kg(eh.xBc.ADMINISTRATOR, eh.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        p = (0, m.yK)([X.default], () => {
            let e = {};
            for (let n of (null != c && (e[c.id] = c), Object.values(t.permissionOverwrites))) {
                if (n.type !== nE.r2.MEMBER || null != e[n.id]) continue;
                let t = X.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return ef()(e)
                .filter((e) => {
                    let n = i6.$3({ permission: eh.xBc.ADMINISTRATOR, user: e, context: t }),
                        i = t.permissionOverwrites[e.id] ?? i6.x3,
                        l = iq.zy(i.allow, eh.xBc.VIEW_CHANNEL);
                    return n || l;
                })
                .value();
        }, [t, c]),
        g = J.A.can(eh.xBc.MANAGE_CHANNELS, t) || J.A.can(eh.xBc.MANAGE_ROLES, t),
        A = o.useCallback(() => i(!1), []);
    return (0, r.jsxs)(ih.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(ih.WK, { locked: !0, channelType: t.type }),
            (0, r.jsx)(ih.cr, { children: tA.intl.format(tA.t.I3R7Vn, { channelName: l }) }),
            (0, r.jsx)(ih.j1, {
                className: tE.PT,
                children: tA.intl.format(tA.t.QuwqjG, {
                    channelName: l,
                    topicHook: () => i3.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, r.jsxs)("div", {
                      className: i9.$x,
                      children: [
                          (0, r.jsx)(n1.$, {
                              size: "sm",
                              variant: "secondary",
                              text: tA.intl.string(tA.t.dMJ3Y6),
                              onClick: () => i(!0),
                              icon: iJ.n,
                          }),
                          (0, r.jsx)(n1.$, {
                              size: "sm",
                              variant: "secondary",
                              text: tA.intl.string(tA.t["3gUsJb"]),
                              onClick: function () {
                                  iY.Ay.open(t.id);
                              },
                              icon: tk.R,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: i9.ol,
                children: [
                    (function () {
                        if (1 !== p.length || h.length > 0)
                            return (0, r.jsx)(i$.A, { guildId: t.guild_id, className: i9.HD, maxUsers: 5, users: p });
                        let e = p[0],
                            n = iu.Ay.getName(e);
                        return (0, r.jsxs)("div", {
                            className: i9.HD,
                            children: [
                                (0, r.jsx)(iR.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: iM._3.SIZE_24,
                                }),
                                (0, r.jsx)(td.E, {
                                    tag: "span",
                                    className: i9.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, r.jsx)(td.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: tA.intl.string(tA.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    h.map((e, n) => {
                        let i = e.colorString ?? eh.TpD,
                            l = e.tags?.guild_connections !== void 0;
                        return g
                            ? (0, r.jsx)(
                                  i8,
                                  {
                                      className: d()(i9.JC, { [i9.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: i,
                                      disabled: !g,
                                      verified: l,
                                      onClick: () => {
                                          i2.A.open(t.guild_id, eh.BEX.MEMBERS), i2.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  i1,
                                  {
                                      className: d()(i9.JC, { [i9.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: i,
                                      verified: l,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, r.jsx)(iZ.aF, {
                      renderModal: (e) =>
                          (0, r.jsx)(iX.default, { ...e, onClose: () => (A(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => i(!1),
                  })
                : null,
        ],
    });
}
var lt = n(329856);
function ln(e) {
    let { channel: t } = e,
        n = (0, k.Ay)(t, !0),
        i = (0, m.bG)([J.A], () => J.A.can(eh.xBc.MANAGE_CHANNELS, t) && ic.bk.has(t.type));
    return (0, r.jsxs)(ih.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(ih.WK, { channelType: t.type }),
            (0, r.jsx)(ih.cr, { children: tA.intl.format(tA.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(ih.j1, {
                className: tE.PT,
                children: tA.intl.format(tA.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => i3.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            i
                ? (0, r.jsx)("div", {
                      className: lt.U,
                      children: (0, r.jsx)(n1.$, {
                          size: "sm",
                          variant: "secondary",
                          text: tA.intl.string(tA.t["3gUsJb"]),
                          onClick: () => {
                              iY.Ay.open(t.id);
                          },
                          icon: tk.R,
                      }),
                  })
                : null,
        ],
    });
}
var li = n(463930),
    ll = n(442433),
    ls = n(688810),
    la = n(967144),
    lr = n(342296),
    lo = n(696451),
    lc = n(415296);
function ld(e) {
    let { userId: t, channel: i } = e,
        l = o.useRef(null),
        { analyticsLocations: s } = (0, ls.Ay)(iD.A.USERNAME),
        a = (0, m.bG)([X.default], () => X.default.getUser(t)),
        c = (0, m.bG)([lo.Ay], () => (null != t ? lo.Ay.getMember(i.guild_id, t) : null)),
        u = (0, la.gn)(i.guild_id, t ?? void 0, c?.colorStrings ?? null);
    function h(e) {
        if (null == a) return null;
        (0, ll.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("24966"), n.e("40933")]).then(n.bind(n, 175269));
            return (t) => (0, r.jsx)(e, { ...t, user: a, guildId: i.guild_id, channel: i });
        });
    }
    let p = c?.nick ?? iu.Ay.getName(a) ?? "???",
        g = c?.colorString;
    return null == a
        ? (0, r.jsx)("span", { className: d()(lc.eM, lc.sL), children: p })
        : (0, r.jsx)(ls.f5, {
              value: s,
              children: (0, r.jsx)(lr.A, {
                  targetElementRef: l,
                  user: a,
                  guildId: i.guild_id,
                  channelId: i.id,
                  roleId: c?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(ek.D, {
                          ...e,
                          innerRef: l,
                          tag: "span",
                          className: lc.eM,
                          onContextMenu: h,
                          children: (0, r.jsx)(li.g, { name: p, colorString: g ?? null, colorStrings: u }),
                      }),
              }),
          });
}
function lu(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(td.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: lc.VA,
                          children: tA.intl.format(tA.t.imPXd5, {
                              usernameHook: (e, n) => (0, r.jsx)(ld, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === eh.rbe.PRIVATE_THREAD
                      ? (0, r.jsx)(td.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: tA.intl.string(tA.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function lh(e) {
    let { channel: t } = e,
        n = (0, im.gU)(t) ?? tL.y,
        i = (0, k.Ay)(t);
    return (0, r.jsxs)(ih.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)("div", { className: lc.P0, children: (0, r.jsx)(n, { className: lc.Kk }) }),
            (0, r.jsx)(ih.cr, { children: i }),
            (0, r.jsx)(lu, { channel: t }),
        ],
    });
}
var lm = n(603968),
    lp = n(157550),
    lg = n(957283),
    lA = n(189213),
    lf = n(824552),
    l_ = n(933958),
    lE = n(869003),
    lC = n(841595),
    lx = n(546183),
    lb = n(543465),
    lS = n(308528),
    lI = n(928658),
    ly = n(978914),
    lT = n(977347);
function lv(e) {
    let { channel: t, user: n } = e,
        i = !0 === n.bot,
        {
            message: l,
            isReportable: s,
            isLoaded: a,
        } = (function (e, t, n) {
            let i,
                l =
                    (i = (0, m.bG)([nx.A], () => nx.A.getRelationshipType(t), [t])) === eh.eA$.NONE ||
                    i === eh.eA$.BLOCKED ||
                    i === eh.eA$.PENDING_INCOMING,
                s = n || l,
                a = (0, lT.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, ly.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, i),
        { channelId: c } = (0, lg.N)(),
        d = t.id === c,
        u = !t5.Fr && !d,
        h = o.useCallback(() => {
            null != l &&
                (0, lI.b8)(l, () => {
                    lS.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, l, u]);
    return !s || (null == l && a)
        ? null
        : (0, r.jsx)(n1.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == l,
              onClick: h,
              text: tA.intl.string(tA.t.HHZmDn),
          });
}
function lN(e) {
    let { channel: t } = e,
        i = (0, m.bG)([lb.Ay], () => lb.Ay.isChannelMuted(null, t.id));
    return (0, r.jsx)(n1.$, {
        variant: i ? "secondary" : "critical-primary",
        text: i ? tA.intl.string(tA.t.YqAjXy) : tA.intl.string(tA.t.w4m945),
        onClick: function () {
            (0, nV.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function lj(e) {
    let { channel: t, application: n, oauth2Token: i } = e,
        l = (0, m.bG)([l_.Ay], () => l_.Ay.getSelfEmbeddedActivities());
    function s() {
        lf.A.delete(i.id);
        let e = l.get(n.id);
        null != e && lE.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, r.jsx)(n1.$, {
        variant: "secondary",
        text: tA.intl.string(tA.t["5S3sQF"]),
        onClick: () => {
            (0, nV.openModal)((e) =>
                (0, r.jsx)(lA.Modal, {
                    title: tA.intl.string(tA.t["DT39A+"]),
                    subtitle: tA.intl.formatToPlainString(tA.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: tA.intl.string(tA.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: tA.intl.string(tA.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                s(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                t2.default.track(eh.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function lM(e) {
    var t;
    let { channel: n, user: i } = e,
        l =
            ((t = i?.id ?? eh.dJq),
            (0, m.bG)([lC.A], () => (null !== t ? lC.A.getUserProfile(t ?? eh.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: a } = (0, m.cf)([lx.default], () => ({
            authorizedAppToken: lx.default.getNewestTokenForApplication(l?.id),
            authorizedAppsFetchState: lx.default.getFetchState(),
        }));
    return (o.useEffect(() => {
        i.bot && a === lx.FetchState.NOT_FETCHED && lf.A.fetch();
    }, [i.bot, a]),
    i.bot && null != l && null != s)
        ? (0, r.jsxs)(ij.e, {
              size: "sm",
              children: [
                  (0, r.jsx)(lN, { channel: n }),
                  (0, r.jsx)(lj, { application: l, channel: n, oauth2Token: s }),
                  (0, r.jsx)(lv, { channel: n, user: i }),
              ],
          })
        : (0, r.jsx)(ij.e, { size: "sm", children: (0, r.jsx)(lv, { channel: n, user: i }) });
}
var lR = n(573435),
    lL = n(576622),
    lD = n(975732),
    lk = n(486020),
    lP = n(518477),
    lG = n(864401);
function lO(e) {
    let { userId: t, channelId: n, showDivider: i = !1 } = e,
        l = (0, m.bG)([lC.A], () => lC.A.getMutualGuilds(t), [t]),
        s = X.default.getUser(t);
    o.useEffect(() => {
        null == l && null != s && (0, lL.A)(t, s.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [l, t, s]);
    let a = o.useMemo(() => {
        if (null == l) return [];
        let e = l.slice(0, 3),
            t = e.length - 1;
        return e
            .map((e, n) => {
                let { guild: i } = e,
                    l = lk.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 24 });
                if (null == l) return null;
                let s = (0, r.jsx)("img", { src: l, alt: "", className: lG.my }, i.id);
                return n === t
                    ? s
                    : (0, r.jsx)(
                          lR.Ay,
                          {
                              className: lG.cp,
                              mask: lR.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              width: 24,
                              height: 24,
                              children: s,
                          },
                          i.id,
                      );
            })
            .filter(t4.Vq);
    }, [l]);
    return null == l || 0 === l.length
        ? (0, r.jsx)("div", {
              className: d()(lG.kL, i ? lG.yF : null),
              children: (0, r.jsx)(td.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: tA.intl.string(tA.t.zjVh8h),
              }),
          })
        : (0, r.jsxs)(ek.D, {
              className: d()(lG.kL, lG.vk, { [lG.yF]: i }),
              onClick: () => {
                  (0, lD.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: lP.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iD.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, r.jsx)("div", { className: lG.H, children: a }),
                  (0, r.jsx)(td.E, {
                      className: lG.NI,
                      variant: "text-sm/normal",
                      children: tA.intl.format(tA.t.eE3oep, { count: l.length }),
                  }),
              ],
          });
}
var lw = n(49229),
    lU = n(327166),
    lF = n(390848),
    lB = n(175709);
function lH(e) {
    let { userId: t } = e;
    return (0, r.jsx)(n1.$, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
            lw.A.blockUser(t, { location: eh.liQ.DM_CHANNEL });
        },
        text: tA.intl.string(tA.t.l4Emac),
    });
}
function lK(e) {
    let { userId: t, showingBanner: n } = e,
        i = (0, lU.D)(t);
    return n
        ? null
        : (0, r.jsx)(n1.$, {
              variant: "primary",
              onClick: () => {
                  lw.A.addRelationship({ userId: t, context: { location: eh.liQ.DM_CHANNEL } });
              },
              text: i,
          });
}
function lV(e) {
    let { userId: t } = e;
    return (0, r.jsx)(n1.$, {
        variant: "secondary",
        onClick: () => {
            lw.A.removeFriend(t, { location: eh.liQ.DM_CHANNEL });
        },
        text: tA.intl.string(tA.t.cvSt1J),
    });
}
function lz(e) {
    let { userId: t } = e;
    return (0, r.jsx)(n1.$, {
        variant: "secondary",
        onClick: () => {
            lw.A.unblockUser(t, { location: eh.liQ.DM_CHANNEL });
        },
        text: tA.intl.string(tA.t.XyHpKH),
    });
}
function lW(e) {
    let { channel: t, user: n, showingBanner: i } = e,
        l = (0, m.bG)([nx.A], () => nx.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, lF.I)({
            userId: n.id,
            applicationId: l,
            isGameRelationship: !1,
            location: eh.liQ.DM_CHANNEL,
        });
    return (0, r.jsxs)("div", {
        className: lB.K,
        children: [
            (0, r.jsx)(td.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: tA.intl.format(tA.t.uIomXw, { username: iu.Ay.getName(n) }),
            }),
            (0, r.jsxs)(ij.e, {
                size: "sm",
                children: [
                    (0, r.jsx)(n1.$, { variant: "primary", onClick: s, text: tA.intl.string(tA.t["+WbSn5"]) }),
                    (0, r.jsx)(n1.$, {
                        variant: "secondary",
                        onClick: () => {
                            lw.A.cancelFriendRequest(n.id, { location: eh.liQ.DM_CHANNEL });
                        },
                        text: tA.intl.string(tA.t.rQSndv),
                    }),
                    (0, r.jsx)(lH, { userId: n.id }),
                    i ? null : (0, r.jsx)(lv, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function lq(e) {
    let t,
        { channel: n, user: i, showingBanner: l } = e,
        s = (0, m.bG)([nx.A], () => nx.A.getRelationshipType(i.id), [i.id]);
    if (s === eh.eA$.PENDING_INCOMING) return (0, r.jsx)(lW, { channel: n, user: i, showingBanner: l });
    switch (s) {
        case eh.eA$.NONE:
            i.bot || (t = (0, r.jsx)(lK, { userId: i.id, showingBanner: l }));
            break;
        case eh.eA$.FRIEND:
            t = (0, r.jsx)(lV, { userId: i.id });
            break;
        case eh.eA$.BLOCKED:
            t = (0, r.jsx)(lz, { userId: i.id });
            break;
        case eh.eA$.PENDING_OUTGOING:
            t = (0, r.jsx)(n1.$, { variant: "primary", disabled: !0, text: tA.intl.string(tA.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let a = s !== eh.eA$.BLOCKED;
    return (0, r.jsxs)(ij.e, {
        size: "sm",
        children: [t, a ? (0, r.jsx)(lH, { userId: i.id }) : null, l ? null : (0, r.jsx)(lv, { channel: n, user: i })],
    });
}
var l$ = n(691540),
    lJ = n(857250),
    lZ = n(97483),
    lY = n(92650),
    lX = n(138298),
    lQ = n(761640);
function l0(e) {
    let { channel: t, user: n } = e,
        i = o.useCallback(() => {
            (0, l$.P0)((0, lJ.o)(tA.intl.string(tA.t.a2j0hv), lZ.Ck.FAILURE));
        }, []),
        l = o.useCallback(() => {
            lX.A.closeChannelSidebar(lQ.fe);
        }, []),
        s = o.useCallback(() => {
            lX.A.closeChannelSidebar(lQ.fe);
        }, []),
        {
            acceptMessageRequest: a,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, lY.t)({ user: X.default.getUser(n.id), onError: i, onAcceptSuccess: s, onRejectSuccess: l }),
        p = d || u || h || m;
    return (0, r.jsxs)(ij.e, {
        size: "sm",
        children: [
            (0, r.jsx)(n1.$, {
                variant: "primary",
                disabled: p,
                onClick: () => a(t.id),
                loading: d,
                text: tA.intl.string(tA.t.Kz8Pwr),
            }),
            (0, r.jsx)(n1.$, {
                variant: "secondary",
                disabled: p,
                onClick: () => c(t.id),
                loading: u,
                text: tA.intl.string(tA.t.B2nygW),
            }),
            (0, r.jsx)(lv, { channel: t, user: n }),
        ],
    });
}
var l1 = n(331674);
function l2(e) {
    let t,
        { channel: n, user: i, showingBanner: l } = e,
        { channelId: s } = (0, lg.N)(),
        a = (0, m.bG)([lp.A], () => null != s && lp.A.isSpam(s), [s]),
        o = (0, m.bG)([nx.A], () => nx.A.getRelationshipType(i.id), [i.id]),
        c = n.id === s,
        d = !0 === i.bot,
        u = l1.n;
    return (
        a || c
            ? (t = (0, r.jsx)(l0, { channel: n, user: i }))
            : d
              ? (t = (0, r.jsx)(lM, { channel: n, user: i }))
              : ((t = (0, r.jsx)(lq, { channel: n, user: i, showingBanner: l })),
                o === eh.eA$.PENDING_INCOMING && (u = l1.O)),
        (0, r.jsxs)("div", {
            className: u,
            children: [(0, r.jsx)(lO, { userId: i.id, channelId: n.id, showDivider: u !== l1.O }), t],
        })
    );
}
var l3 = n(746080),
    l4 = n(818050);
function l7(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, ia.Ae)(n),
        l = (0, m.bG)([id.Ay], () => null != n.guild_id && n === id.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, ir.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(iC, { channel: n });
    if (ic.Le.has(n.type)) return (0, r.jsx)(lh, { channel: n });
    if (l) return (0, r.jsx)(lm.A, { channel: n });
    if (i) return (0, r.jsx)(le, { channel: n });
    return (0, r.jsx)(ln, { channel: n });
}
function l6(e) {
    let { channel: t, showingBanner: n } = e,
        i = (0, k.Ay)(t),
        { type: l } = t,
        s = (0, m.bG)([X.default], () => (t.isPrivate() ? X.default.getUser(t.getRecipientId()) : null)),
        a = iu.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, m.cf)([J.A], () => ({
            canManageRoles: J.A.can(eh.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: J.A.can(eh.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, r.jsx)(iW, { channel: t, children: tA.intl.string(tA.t.Rzvnig) });
    if (l === eh.rbe.DM)
        return (0, r.jsxs)(iW, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, r.jsx)(nz.D, { variant: "heading-xl/medium", className: l4.SX, children: a }),
                tA.intl.format(tA.t["Qvg+6+"], { username: i }),
                s?.isProvisional ? (0, r.jsx)(io.Y, { userId: s.id }) : null,
                null != s ? (0, r.jsx)(l2, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, r.jsxs)(ih.Ay, {
                channelId: t.id,
                children: [
                    (0, r.jsx)(ih.cr, { children: tA.intl.format(tA.t.I3R7Vn, { channelName: i }) }),
                    (0, r.jsx)(ih.j1, { children: tA.intl.string(tA.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(l3.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(iN, { channel: t });
        else return (0, r.jsx)(iW, { channel: t, children: tA.intl.format(tA.t.MFwcqO, { name: i }) });
    return c
        ? (0, r.jsx)(l7, { channel: t, canManageRoles: o })
        : (0, r.jsx)(ih.Ay, {
              channelId: t.id,
              children: (0, r.jsx)(ih.j1, { children: tA.intl.format(tA.t.hPVEQG, { channelName: i }) }),
          });
}
var l5 = n(506774),
    l8 = n(933832),
    l9 = n(782603),
    se = n(408278),
    st = n(763175),
    sn = n(56562),
    si = n(765671),
    sl = n(304072),
    ss = n(578623),
    sa = n(702841),
    sr = n(696986),
    so = n(147036),
    sc = n(36491),
    sd = n(953727);
function su(e) {
    let { width: t = 45, height: n = 46, ...i } = e;
    return (0, r.jsxs)("svg", {
        ...(0, sd.A)(i),
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
var sh = n(788780);
function sm(e) {
    let { threadId: t } = e,
        n = (0, sa.bG)([eB.A], () => eB.A.getChannel(t)),
        i = (0, sa.bG)([eB.A], () => eB.A.getChannel(n?.parent_id)),
        l = o.useCallback(() => {
            null != n &&
                null != i &&
                ((0, nB.zV)(eh.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, e6.C)((0, so.af)(n, i)));
        }, [n, i]);
    return (0, r.jsxs)("div", {
        className: sh.BQ,
        children: [
            (0, r.jsx)(su, {}),
            (0, r.jsxs)("div", {
                className: sh.BB,
                children: [
                    (0, r.jsx)(td.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: tA.intl.string(tA.t["5uAO7d"]),
                    }),
                    (0, r.jsx)(td.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: tA.intl.format(tA.t.WnfPV3, {
                            helpArticleUrl: tu.A.getCreatorSupportArticleURL(eh.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(sr.h, { size: 4 }),
                    (0, r.jsx)(n1.$, { text: tA.intl.string(tA.t.C5UQC9), variant: "primary", icon: tT.q, onClick: l }),
                ],
            }),
            (0, r.jsx)(ek.D, {
                className: sh.b,
                onClick: () => {
                    (0, sc.sF)(t);
                },
                "aria-label": tA.intl.string(tA.t["0+xZH0"]),
                children: (0, r.jsx)(n2.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var sp = n(505527),
    sg = n(467073),
    sA = n(960538),
    sf = n(604121),
    s_ = n(238301);
let sE = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    sC = o.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            i = (0, m.bG)([T.A], () => T.A.useReducedMotion),
            l = (0, m.bG)([J.A], () => J.A.can(eh.xBc.SEND_MESSAGES_IN_THREADS, t)),
            s = (0, e2.s5)(t),
            a = (0, m.bG)([V.default], () => V.default.getId());
        return n
            ? l && !s && t.ownerId !== a
                ? (0, r.jsxs)("div", {
                      className: s_.aP,
                      children: [
                          (0, r.jsx)(sf.a, { importData: sE, shouldAnimate: !i, className: s_.lY }),
                          (0, r.jsxs)("div", {
                              className: s_.FS,
                              children: [
                                  (0, r.jsx)(nz.D, {
                                      variant: "heading-md/semibold",
                                      children: tA.intl.string(tA.t.OmBThA),
                                  }),
                                  (0, r.jsx)(td.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: tA.intl.string(tA.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, r.jsx)("div", { className: s_.yF });
    });
var sx = n(930390),
    sb = n(93032),
    sS = n(226698),
    sI = n(376708),
    sy = n(715757),
    sT = n(390897),
    sv = n(862482),
    sN = n(215026),
    sj = n(686956),
    sM = n(964486),
    sR = n(351001),
    sL = n(400528);
function sD(e) {
    let { text: t, icon: n, onClick: i, disabled: l, submitting: s } = e;
    return (0, r.jsx)(iw.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, r.jsx)(se.K, {
            icon: n,
            variant: "secondary",
            onClick: i,
            disabled: l,
            loading: s,
            "aria-label": t,
            size: "sm",
        }),
    });
}
var sk = n(221314),
    sP = n(145530),
    sG = n(905499),
    sO = n(406810),
    sw = n(991982),
    sU = n(838111),
    sF = n(870136);
function sB(e) {
    let { channel: t, message: i, snapshot: l } = e,
        { moderatorReport: s } = l,
        a = s?.reported_user_id,
        c = (0, m.bG)([X.default], () => (null != a ? X.default.getUser(a) : null)),
        d = (0, m.bG)([t1.A], () => t1.A.getGuild(t.guild_id));
    (0, sy.ml)(i);
    let u = (function (e) {
            let { channel: t, user: i, guild: l } = e,
                s = (0, m.bG)([sL.A], () => null != i && sL.A.isUserBanned(i.id)),
                a = null != i && null == s,
                [c, d] = o.useState(a),
                u = (0, m.bG)([J.A], () => null != i && null != l && (0, sR.fJ)(i, l, [J.A]));
            if (
                ((0, sM.Ay)(() => {
                    a && sj.A.searchGuildBans(t.guild_id, void 0, [i?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let h = !0 === s ? tA.intl.string(sk.default.dpfwQ1) : tA.intl.string(sk.default.ASv23S),
                p = `ban-user-${i?.id}`;
            return (0, r.jsx)(
                sD,
                {
                    text: h,
                    icon: sN.w,
                    onClick: () => {
                        null != i &&
                            (0, nV.openModalLazy)(async () => {
                                let { default: e } = await n.e("57742").then(n.bind(n, 333179));
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: i, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: sv.$n.Colors.RED,
                },
                p,
            );
        })({ channel: t, user: c, guild: d }),
        h = (function (e) {
            let { channel: t, user: i, guild: l } = e,
                s = (0, m.bG)([J.A], () => null != i && null != l && (0, sR.KX)(i, l, [J.A])),
                a = (0, m.bG)([lo.Ay], () => null == i || null == lo.Ay.getMember(t.guild_id, i.id));
            if (!s) return null;
            let o = a ? tA.intl.string(sk.default.Ux67nW) : tA.intl.string(sk.default["snp/lJ"]),
                c = `kick-user-${i?.id}`;
            return (0, r.jsx)(
                sD,
                {
                    text: o,
                    icon: sG.N,
                    onClick: () => {
                        null != i &&
                            (0, nV.openModalLazy)(async () => {
                                let { default: e } = await n.e("95481").then(n.bind(n, 547166));
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: i, modReportId: t.id });
                            });
                    },
                    disabled: a,
                },
                c,
            );
        })({ channel: t, user: c, guild: d }),
        p = [
            (function (e) {
                let { message: t, user: n, guild: i, channel: l } = e,
                    s = (0, m.bG)([J.A], () => null != n && null != i && (0, sR.Kd)(n, i, [J.A])),
                    { messageReference: a } = t,
                    o = (0, m.bG)([$.A], () => (null != a ? $.A.getMessage(a.channel_id, a.message_id) : null)),
                    c = (0, m.bG)([eB.A], () => (null != o ? eB.A.getChannel(o.channel_id) : null)),
                    d = (0, m.bG)([eB.A], () => eB.A.getChannel(l.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? tA.intl.string(sk.default["0IZbwC"]) : tA.intl.string(sk.default.Uj6oD4),
                    h = null == o,
                    p = `delete-message-${t.id}`;
                return (0, r.jsx)(
                    sD,
                    {
                        text: u,
                        icon: tw.u,
                        onClick: () => {
                            null != c &&
                                null != o &&
                                sP.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: l.id });
                        },
                        disabled: h,
                        color: sv.$n.Colors.RED,
                    },
                    p,
                );
            })({ channel: t, message: i, user: c, guild: d }),
            u,
            h,
            (function (e) {
                let { channel: t, user: n, guild: i } = e,
                    l = (0, m.bG)(
                        [X.default, t1.A, J.A],
                        () => null != n && null != i && (0, sU.b)(i.id, n.id, [X.default, t1.A, J.A]),
                    ),
                    [s, a] = (0, sF.Ay)(n?.id, t.guild_id),
                    o = (0, m.bG)([lo.Ay], () => null != i && null != n && null != lo.Ay.getMember(i.id, n.id));
                if (!l || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, r.jsx)(
                    sD,
                    {
                        text: a ? tA.intl.string(sk.default["6uMZbv"]) : tA.intl.string(sk.default["Sgg/uI"]),
                        icon: sO.O,
                        onClick: () => {
                            null != n && (0, sw.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: a,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== p.length
        ? (0, r.jsx)(r.Fragment, { children: p.map((e, t) => (0, r.jsx)(o.Fragment, { children: e }, t)) })
        : null;
}
function sH(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, i) => (0, r.jsx)(sB, { channel: n, message: t, snapshot: e }, i)),
    });
}
var sK = n(152007),
    sV = n(867455),
    sz = n(473503),
    sW = n(853742),
    sq = n(189971),
    s$ = n(347353),
    sJ = n(518229);
function sZ(e) {
    let { channel: t } = e,
        i = t.isArchivedThread(),
        l = (0, sI.uW)(t),
        [s, a] = o.useState(!1),
        c = () => {
            a(!0),
                sS.A.resolveFlag(t.id).then(() => {
                    a(!1);
                });
        };
    return l
        ? (0, r.jsx)(n1.$, {
              size: "sm",
              variant: "secondary",
              text: i ? tA.intl.string(sk.default["2Y4vkk"]) : tA.intl.string(sk.default.YIbR4r),
              onClick: () => {
                  !0 === l5.w.get(sT.f)
                      ? c()
                      : (0, nV.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: i } = t;
                                return (0, r.jsx)(e, { transitionState: n, onClose: i, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: l8.A,
              disabled: i,
          })
        : null;
}
function sY(e) {
    let { postId: t, isFirstMessage: n, isLastItem: i = !1, parentChannelId: l } = e,
        { ref: s, width: a } = (0, si.Ay)(),
        [c, u] = o.useState(3),
        [h, p] = o.useState(!n),
        [g, A] = (0, sl.A)(!1, 2e3),
        f = (0, m.bG)([eB.A], () => eB.A.getChannel(t), [t]),
        { firstMessage: _ } = (0, sz.OA)(f),
        E = (0, m.bG)([sK.A], () => sK.A.hasJoined(t)),
        { disableReactionUpdates: C, disableReactionCreates: x, isLurking: b, isPendingMember: I } = (0, sg.A)(f),
        y = (0, sy.W1)(f),
        T = (0, m.bG)([eB.A], () => eB.A.getChannel(l)),
        v = (0, ip.Ck)(T),
        N = (0, m.bG)([ss.A], () => ss.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        j = o.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    p((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    o.useLayoutEffect(() => {
        let e = s.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(j, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [M, R] = o.useState(!0);
    if (
        (o.useEffect(() => {
            null == a || (u(Math.floor((a - 280) / 58)), R(!1));
        }, [a]),
        null == f || null == _)
    )
        return null;
    let L = _.reactions.length > 0,
        D = () => {
            (0, sW.jC)({ postId: f.id, location: { section: eh.JJy.CHANNEL_HEADER } }),
                (0, e6.C)((0, so.af)(f, T), () => A(!0));
        },
        k = E ? l8.A : l9.X;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: d()(sq.kL, { [sq.wx]: h }),
                ref: s,
                children: [
                    y
                        ? (0, r.jsx)("div", { className: sq.kX, children: (0, r.jsx)(sH, { message: _, channel: f }) })
                        : (0, r.jsxs)("div", {
                              className: d()(sq.hY, { [sq.Lq]: M }),
                              children: [
                                  !L &&
                                      !x &&
                                      null != v &&
                                      (0, r.jsx)("div", {
                                          className: s$.reactions,
                                          children: (0, r.jsx)(sb.qT, {
                                              message: _,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: b,
                                              isPendingMember: I,
                                              emoji: v,
                                              type: sp.v.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(sx.A, {
                                      message: _,
                                      channel: f,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: C,
                                      isLurking: b,
                                      isPendingMember: I,
                                      maxReactions: c,
                                      className: sq.Br,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !x &&
                                      (0, r.jsx)(sA.t, {
                                          message: _,
                                          channel: f,
                                          useChatFontScaling: !1,
                                          className: d()(sJ.secondary, sq.vU, { [sq.w$]: !L }),
                                          isForumToolbar: !0,
                                          children: !L && tA.intl.string(tA.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: sq.Uo,
                        children: [
                            y
                                ? (0, r.jsx)(sZ, { channel: f })
                                : !b &&
                                  (0, r.jsx)(iw.m, {
                                      text: tA.intl.string(tA.t.F7oeDv),
                                      children: (0, r.jsx)(n1.$, {
                                          icon: k,
                                          size: "sm",
                                          variant: "secondary",
                                          text: E ? tA.intl.string(tA.t["7OkUzs"]) : tA.intl.string(tA.t["3aOv+h"]),
                                          onClick: () => {
                                              E
                                                  ? sV.A.leaveThread(f, "Forum Toolbar")
                                                  : sV.A.joinThread(f, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(iw.m, {
                                text: tA.intl.string(tA.t.WqhZss),
                                children: g
                                    ? (0, r.jsx)(n1.$, {
                                          icon: l8.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: D,
                                          text: tA.intl.string(tA.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(se.K, {
                                          icon: tT.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: D,
                                          "aria-label": tA.intl.string(tA.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(iw.m, {
                                    text: tA.intl.string(tA.t.nFP4oa),
                                    children: (0, r.jsx)(se.K, {
                                        icon: st.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            S.A.jumpToMessage({
                                                channelId: f.id,
                                                messageId: f.id,
                                                flash: !0,
                                                jumpType: sn.US.INSTANT,
                                            });
                                        },
                                        "aria-label": tA.intl.string(tA.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            N && (0, r.jsx)(sm, { threadId: t }),
            (0, r.jsx)(sC, { channel: f, isLastItem: i }),
        ],
    });
}
var sX = n(640708),
    sQ = n(378570),
    s0 = n(452082),
    s1 = n(327337);
function s2(e) {
    let { channelId: t, warningId: i, senderId: l } = e,
        s = o.useCallback(() => {
            (0, nY.xi)(t, [i]);
        }, [t, i]),
        a = (0, m.bG)([nx.A], () => nx.A.isBlocked(l)),
        c = o.useMemo(
            () => ({ channelId: t, warningId: i, senderId: l, warningType: nX._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, i, l],
        );
    o.useEffect(() => {
        (0, nQ.QF)({ ...c, viewName: nQ.gN.SAFETY_WARNING_BANNER }), nq.A.increment({ name: nK.K.SAFETY_WARNING_VIEW });
    }, [c]);
    let d = o.useCallback(
            (e) => {
                (0, nQ._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = o.useCallback(() => {
            (0, nV.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("45033"), n.e("19959"), n.e("64121")]).then(
                        n.bind(n, 131882),
                    );
                    return (n) => {
                        let { transitionState: s, onClose: a } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: l,
                            channelId: t,
                            warningId: i,
                            warningType: nX._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: a,
                        });
                    };
                },
                { modalKey: s1.V },
            ),
                d(nQ.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, l, i, d]),
        h = o.useCallback(() => {
            s(), d(nQ.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [s, d]),
        p = o.useCallback(() => {
            s(), d(nQ.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [s, d]),
        g = o.useCallback(() => {
            (0, nV.openModalLazy)(async () => {
                let { default: e } = await n.e("84938").then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: i, onClose: s } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onBlock: h,
                        onBlockAndReport: p,
                        onCancel: () => {
                            s?.(), d(nQ.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: s,
                        userId: l,
                        channelId: t,
                    });
                };
            });
        }, [h, p, l, t, d]);
    return (0, r.jsx)(n7, {
        channelId: t,
        warningId: i,
        senderId: l,
        warningType: nX._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: tA.intl.string(tA.t.ZzlB5p),
        description: tA.intl.string(tA.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: tA.intl.string(tA.t.Qyu4UK), variant: "primary", onClick: u },
            ...(a ? [] : [{ text: tA.intl.string(tA.t["7q0bNY"]), variant: "secondary", onClick: g }]),
        ],
    });
}
var s3 = n(74114);
function s4(e) {
    let { senderId: t, channelId: n, warningId: i } = e,
        { isIgnored: l } = (0, m.cf)([nx.A], () => ({ isIgnored: nx.A.isIgnored(t) }), [t]),
        s = o.useCallback(() => {
            (0, nQ._$)({
                channelId: n,
                warningId: i,
                senderId: t,
                warningType: nX._j.STRANGER_DANGER,
                cta: nQ.Wm.USER_MODAL_IGNORE,
            }),
                lw.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, i, t]),
        a = o.useCallback(() => {
            (0, nQ._$)({
                channelId: n,
                warningId: i,
                senderId: t,
                warningType: nX._j.STRANGER_DANGER,
                cta: nQ.Wm.USER_MODAL_UNIGNORE,
            }),
                lw.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, i, t]);
    return (0, r.jsx)(nZ.PQ, {
        title: tA.intl.string(tA.t.avyV7P),
        description: tA.intl.string(tA.t.naWE6W),
        buttonText: l ? tA.intl.string(tA.t["3SrzRT"]) : tA.intl.string(tA.t.avyV7P),
        onButtonPress: l ? a : s,
    });
}
function s7(e) {
    let { channelId: t, warningId: i, senderId: l } = e,
        { isBlocked: s } = (0, m.cf)([nx.A], () => ({ isBlocked: nx.A.isBlocked(l) }), [l]),
        a = o.useCallback(() => {
            (0, nY.xi)(t, [i]);
        }, [t, i]),
        c = (0, s1.eT)(),
        d = o.useCallback(
            (e) => () => {
                lw.A.blockUser(l, { location: s1.Rx }).then(() => {
                    a();
                }),
                    (0, nQ._$)({ channelId: t, warningId: i, senderId: l, warningType: nX._j.STRANGER_DANGER, cta: e });
            },
            [a, t, i, l],
        );
    o.useEffect(() => {
        (0, nQ.mO)(eh.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: i,
            senderId: l,
            warningType: nX._j.STRANGER_DANGER,
        }),
            nq.A.increment({ name: nK.K.SAFETY_WARNING_VIEW });
    }, [t, i, l]);
    let u = () => {
            (0, nV.openModalLazy)(async () => {
                let { default: e } = await n.e("47894").then(n.bind(n, 129493));
                return (n) => {
                    let { transitionState: s, onClose: a } = n;
                    return (0, r.jsx)(e, {
                        transitionState: s,
                        onClose: a,
                        channelId: t,
                        warningId: i,
                        senderId: l,
                        description: tA.intl.string(tA.t.DJMZX6),
                        safetyTipRows: c.map((e, t) =>
                            (0, r.jsx)(nJ.B, { index: t, listType: "numbered", title: e }, t),
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s4, { senderId: l, channelId: t, warningId: i }, "more-tips-button"),
                                (0, r.jsx)(
                                    nZ.PQ,
                                    {
                                        title: tA.intl.string(tA.t["5QYPO2"]),
                                        description: tA.intl.string(tA.t.G08MKu),
                                        buttonText: tA.intl.string(tA.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            a(), h(nQ.Wm.USER_MODAL_BLOCK_CONFIRM, nQ.Wm.USER_MODAL_BLOCK_CANCEL, u);
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
                let { default: o } = await n.e("67554").then(n.bind(n, 219801));
                return (n) =>
                    (0, r.jsx)(o, {
                        ...n,
                        userId: l,
                        confirmBlock: d(e),
                        onCancel: () => {
                            a?.(),
                                (0, nQ._$)({
                                    channelId: t,
                                    warningId: i,
                                    senderId: l,
                                    warningType: nX._j.STRANGER_DANGER,
                                    cta: s,
                                });
                        },
                    });
            });
        };
    return (0, r.jsx)(n7, {
        channelId: t,
        warningId: i,
        senderId: l,
        warningType: nX._j.STRANGER_DANGER,
        header: tA.intl.string(tA.t.iOkDpM),
        description: tA.intl.string(tA.t.ISUbcM),
        onDismiss: a,
        buttons: [
            {
                text: tA.intl.string(tA.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    u(),
                        (0, nQ._$)({
                            channelId: t,
                            warningId: i,
                            senderId: l,
                            warningType: nX._j.STRANGER_DANGER,
                            cta: nQ.Wm.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(s
                ? []
                : [
                      {
                          text: tA.intl.string(tA.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => h(nQ.Wm.USER_BANNER_BLOCK_CONFIRM, nQ.Wm.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
var s6 = n(866323),
    s5 = n(306788),
    s8 = n(340833),
    s9 = n(913642),
    ae = n(798505),
    at = n(670455),
    an = n(182147);
function ai(e) {
    let { summary: t, channel: n } = e,
        i = (0, sa.bG)([B.A], () => B.A.summaryFeedback(t)),
        l = (e, i) => {
            e.stopPropagation(), (0, ae.A)({ summary: t, channel: n, rating: i });
        },
        s = (0, s6.p)(
            null == i,
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
                      className: an.RD,
                      children: (0, r.jsxs)(u.animated.div, {
                          style: e,
                          className: an.GK,
                          children: [
                              (0, r.jsx)(td.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: tA.intl.string(tA.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(ek.D, {
                                  onClick: (e) => l(e, at.P0.GOOD),
                                  children: (0, r.jsx)(s9.A, { className: an.O1, width: 12, height: 12 }),
                              }),
                              (0, r.jsx)(ek.D, {
                                  onClick: (e) => l(e, at.P0.BAD),
                                  children: (0, r.jsx)(s8.A, { className: an.O1, width: 12, height: 12 }),
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
        { item: n, channel: i, index: l } = e,
        s = (0, sa.bG)([B.A], () => B.A.selectedSummary(i.id));
    if (null == s) return null;
    let a = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(s5.K, { size: "xs", color: "currentColor", className: an.cR }), n.content],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ai, { summary: s, channel: i }),
                      (0, r.jsx)(s5.K, { size: "xs", color: "currentColor", className: an.Jq }),
                  ],
              })),
        (0, r.jsx)(
            ii.A,
            {
                className: d()(an.aK, o ? an.Ke : an.hO),
                contentClassName: o ? an.Ew : an.rD,
                isUnread: a,
                id: a ? ey.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? l}`,
        )
    );
}
var as = n(383233),
    aa = n(309010),
    ar = n(927813),
    ao = n(675171),
    ac = n(806621),
    ad = n(636922);
n(801541);
var au = n(889137),
    ah = n(952270),
    am = n(428678),
    ap = n(353182),
    ag = n(888675),
    aA = n(21623);
function af(e) {
    let { expanded: t, onClick: n, count: i, compact: l, collapsedReason: s, canUncollapse: a = !0 } = e,
        o = (0, au.YW)({ collapsedReason: s })
            .with({ collapsedReason: tA.t["VFWjc+"] }, () =>
                (0, r.jsx)(ah.G, { size: "md", color: "currentColor", className: aA.Q6 }),
            )
            .with({ collapsedReason: tA.t["+FcYM/"] }, () =>
                (0, r.jsx)(am.K, { size: "md", color: "currentColor", className: aA.Q6 }),
            )
            .with({ collapsedReason: tA.t.rHRovo }, () =>
                (0, r.jsx)(ap._, { size: "md", color: "currentColor", className: aA.TG }),
            )
            .otherwise(() => (0, r.jsx)(n2.P, { size: "md", color: "currentColor", className: aA.Q6 }));
    return (0, r.jsx)(e$.A, {
        compact: l,
        role: "group",
        childrenMessageContent: (0, r.jsx)(ag.A, {
            compact: l,
            className: aA.L9,
            iconNode: o,
            children: (0, r.jsxs)("div", {
                className: a ? aA.Fo : aA.GU,
                children: [
                    tA.intl.format(s, { count: i }),
                    a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " — ",
                                (0, r.jsx)(ek.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: aA.rB,
                                    children: t ? tA.intl.string(tA.t.fgq1gs) : tA.intl.string(tA.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let a_ = o.memo(function (e) {
    let { messages: t, channel: n, compact: i = !1, unreadId: l, collapsedReason: s, canUncollapse: a = !0 } = e,
        { hasJumpTarget: c = !1 } = t,
        [u, h] = o.useState(c && a),
        m = o.useCallback(() => {
            a && h((e) => !e);
        }, [a]);
    o.useEffect(() => {
        c && a && h(!0);
    }, [c, a]);
    let p = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, r.jsxs)("div", {
        className: d()({ [nh._A]: !0, [aA.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === eh.TZK.DIVIDER)
                ? (0, r.jsx)(ii.A, { isUnread: !0, id: l }, "divider")
                : null,
            (0, r.jsx)(
                af,
                { count: p, compact: i, expanded: u, onClick: m, collapsedReason: s, canUncollapse: a },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === eh.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, r.jsx)(ii.A, { isUnread: !0, isBeforeGroup: e, id: l }, "divider");
                      }
                      if (e.type === eh.TZK.MESSAGE || e.type === eh.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === eh.TZK.THREAD_STARTER_MESSAGE ? nk : nG;
                          return (0, r.jsx)(
                              t,
                              {
                                  id: (0, eI.j)(n.id, e.content.id),
                                  className: aA.__invalid_blocked,
                                  compact: i,
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
var aE = n(34337),
    aC = n(631576),
    ax = n(750385),
    ab = n(148355),
    aS = n(310876);
let aI = "749054660769218631";
function ay(e) {
    let { channel: t } = e,
        [n, i] = o.useState("");
    o.useEffect(() => {
        (0, aC.zk)("847199849233514549", !0);
    }, []);
    let l = (0, m.bG)(
            [$.A, V.default],
            () =>
                !!ef()($.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== V.default.getId() && e.state === eh.cmJ.SENT && !(0, eV.A)(e)),
        ),
        s = (0, m.bG)([X.default], () => X.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        a = iu.Ay.useName(s) ?? tA.intl.string(tA.t.y1Wu2f),
        c = (0, m.bG)([ax.A], () => ax.A.getStickerById(aI)),
        d = o.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    await S.A.sendGreetMessage(t.id, aI),
                        t2.default.track(eh.HAw.DM_EMPTY_ACTION, {
                            channel_id: t.id,
                            channel_type: t.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || i(tA.intl.string(tA.t.Whhv4w));
                }
        }, [t.id, t.type, n]),
        u = tA.intl.formatToPlainString(tA.t.m0zYbV, { username: a }),
        h =
            null != n && "" !== n
                ? (0, r.jsx)(td.E, {
                      className: aS.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return l
        ? (0, r.jsxs)("div", {
              className: aS.ft,
              children: [
                  (0, r.jsxs)(ek.D, {
                      className: null != n && "" !== n ? aS.AO : aS.Iq,
                      "aria-label": tA.intl.string(tA.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, r.jsx)(ab.A, { sticker: c, size: 24 }),
                          (0, r.jsx)(td.E, { className: aS.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  h,
              ],
          })
        : (0, r.jsxs)("div", {
              className: aS.nj,
              children: [
                  (0, r.jsx)(ab.A, { sticker: c, size: 160, className: aS.Xr }),
                  (0, r.jsx)(n1.$, {
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
var aT = n(900210),
    av = n(626360);
function aN(e) {
    return null != e && e.type === eh.TZK.MESSAGE && e.content.id === e.groupId;
}
let aj = o.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: l, compact: s } = e;
    return (0, r.jsx)(ad.A, {
        compact: s,
        isGroupStart: l,
        channel: n,
        message: new as.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: eh.lAJ.DEFAULT,
            author: i,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, r.jsx)(n8.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var aM = n(408899);
let aR = (0, u.animated)(x),
    aL = o.memo(
        function (e) {
            var t;
            let n,
                i,
                l,
                {
                    className: s,
                    messageGroupSpacing: a,
                    scrollerClassName: c,
                    channel: u,
                    messages: p,
                    unreadCount: g,
                    showNewMessagesBar: A,
                    messageDisplayCompact: f,
                    channelStream: _,
                    uploads: E,
                    hasUnreads: C,
                    editingMessageId: x,
                    fontSize: N,
                    keyboardModeEnabled: j,
                    filterAfterTimestamp: M,
                    showingQuarantineBanner: R,
                    hideSummaries: L = !1,
                    jumpBarClassName: D,
                    typingGradient: P,
                } = e,
                [G, O] = o.useState(z.A.isAtBottom(u.id) ?? !1),
                w = (0, k.Ay)(u),
                F = (0, eg.I)(f, N),
                V = f ? F : Math.round(0.87 * F),
                W = Math.max(1, Math.round((V / 30) * 8)),
                q = o.useMemo(
                    () =>
                        (function (e) {
                            let {
                                compact: t,
                                messageGroups: n,
                                groupRange: i,
                                attachments: l,
                                fontSize: s,
                                groupSpacing: a,
                            } = e;
                            if (l > n)
                                throw Error(
                                    `generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${l}`,
                                );
                            let r = s / eh.hH7.FONT_SIZE_DEFAULT,
                                o = t ? e_.BP : e_.B5,
                                c = t ? e_.Uj : e_._G,
                                d = 0,
                                u = Array(n)
                                    .fill(null)
                                    .map(() => {
                                        let e = ef().random(1, i);
                                        return (d += a * r), (d += o * r), (d += (e - 1) * c * r), e;
                                    }),
                                h = u.map((e, t) => t),
                                m = [];
                            for (; m.length < l; ) {
                                let e = { width: ef().random(140, 400), height: ef().random(100, 320) };
                                m.push([h.splice(ef().random(0, h.length - 1), 1)[0], e]), (d += e.height + e_.VF * r);
                            }
                            return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                        })({
                            compact: f,
                            messageGroups: V,
                            groupRange: 4,
                            attachments: W,
                            fontSize: N,
                            groupSpacing: a,
                        }),
                    [f, V, W, N, a],
                ),
                $ = (function (e) {
                    let {
                            messages: t,
                            channel: n,
                            compact: i,
                            hasUnreads: l,
                            focusId: s,
                            placeholderHeight: a,
                            canLoadMore: r = !0,
                            handleScrollToBottom: c,
                            handleScrollFromBottom: d,
                            additionalMessagePadding: u = 0,
                        } = e,
                        { windowId: h } = o.useContext(ej.Ay),
                        [m] = o.useState(
                            () =>
                                new nF({
                                    messages: t,
                                    channel: n,
                                    compact: i,
                                    hasUnreads: l,
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
                                compact: i,
                                hasUnreads: l,
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
                    messages: p,
                    channel: u,
                    compact: f,
                    hasUnreads: C,
                    focusId: x,
                    placeholderHeight: q.totalHeight,
                    canLoadMore: null == M,
                    handleScrollToBottom: o.useCallback(() => O(!0), [O]),
                    handleScrollFromBottom: o.useCallback(() => O(!1), [O]),
                    additionalMessagePadding: 48,
                }),
                Y = (function (e) {
                    let { scrollerRef: t, ...n } = e,
                        i = (0, y.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        l = (0, y.A)(() => {
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
                                let i = t.current?.getScrollerNode()?.ownerDocument,
                                    l = i?.querySelector(e);
                                null != l &&
                                    t.current?.scrollIntoViewNode({
                                        node: l,
                                        padding: 4 * ey.mZ,
                                        callback: () => l?.focus(),
                                    });
                            },
                            [n.keyboardModeEnabled, t],
                        ),
                        a = o.useCallback(() => {
                            n.hasMoreAfter || eS._.dispatchToLastSubscribed(eh.jej.TEXTAREA_FOCUS);
                        }, [n.hasMoreAfter]),
                        r = (0, eb.Ay)({
                            id: eI.D,
                            preserveFocusPosition: !1,
                            setFocus: s,
                            isEnabled: n.keyboardModeEnabled && !n.isEditing,
                            scrollToStart: l,
                            scrollToEnd: i,
                            onNavigateNextAtEnd: a,
                        }),
                        c = o.useCallback(
                            (e) => {
                                let { atEnd: t = !1 } = e;
                                t ? r.focusLastVisibleItem() : r.focusFirstVisibleItem();
                            },
                            [r],
                        );
                    return (0, Q.Vo)({ event: eh.jej.FOCUS_MESSAGES, handler: c }), r;
                })({ scrollerRef: $.ref, isEditing: null != x, keyboardModeEnabled: j, hasMoreAfter: p.hasMoreAfter }),
                ee = (0, m.bG)([U.A], () =>
                    J.A.can(eh.xBc.READ_MESSAGE_HISTORY, u) ? null : U.A.getViewingRolesTimestamp(u.getGuildId()),
                ),
                {
                    channelStreamMarkup: et,
                    newMessagesBar: en,
                    jumpToPresentBar: ea,
                    forumPostActionBar: er,
                    safetyWarningBanner: eo,
                } = (function (e) {
                    let t,
                        n,
                        i,
                        l,
                        {
                            channel: s,
                            messages: a,
                            unreadCount: c,
                            showNewMessagesBar: d,
                            messageDisplayCompact: u,
                            channelStream: h,
                            uploads: p,
                            scrollManager: g,
                            specs: A,
                            filterAfterTimestamp: f,
                            showingQuarantineBanner: _,
                            hideSummaries: E,
                            jumpBarClassName: C,
                        } = e,
                        x = X.default.getCurrentUser(),
                        b = () => g.isInitialized() || a.ready,
                        y = (0, ac.r)(s),
                        N = a.length > 0 && a.first()?.isFirstMessageInForumPost(s),
                        j = (0, I.cI)(s),
                        M = (0, m.bG)([B.A], () => B.A.shouldShowTopicsBar() && !E),
                        R = (0, s3.l)(s.id),
                        L = (0, s0.j)(s.id, s1.Rx),
                        D = (0, nH.E)(s.id),
                        k = (0, ao.A)(),
                        P = (function (e, t) {
                            if (e.isDM() && null != t)
                                if (t.type === nX._j.STRANGER_DANGER)
                                    return (0, r.jsx)(s7, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else if (t.type === nX._j.LIKELY_ATO)
                                    return (0, r.jsx)(n5, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else
                                    return (0, r.jsx)(s2, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                            return null;
                        })(s, R ?? L ?? D),
                        G = s.isForumPost() && !N ? (0, r.jsx)(sY, { postId: s.id }) : null,
                        O = (0, ir.A)(s.id),
                        w = (0, sy.W1)(s);
                    (t = H.Sf.useSetting()),
                        (n = (0, sa.bG)([T.A], () => T.A.useReducedMotion)),
                        o.useEffect(() => {
                            function e(e) {
                                let { messageId: i, channelId: l, emoji: s, optimistic: a, reactionType: r } = e;
                                a ||
                                    r !== sp.v.BURST ||
                                    !t ||
                                    n ||
                                    (0, tZ.on)({ channelId: l, messageId: i, emoji: s, key: aT.W.EXTERNAL });
                            }
                            return (
                                v.h.subscribe("MESSAGE_REACTION_ADD", e),
                                () => {
                                    v.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                                }
                            );
                        }, [t, n]);
                    let U = null,
                        F = [],
                        K = h.map((e, t) => {
                            if (e.type === eh.TZK.DIVIDER) {
                                let n = null != e.unreadId;
                                return null != f
                                    ? null
                                    : e.isConversationDivider
                                      ? (0, r.jsx)(
                                            is,
                                            { index: t, item: e, channel: s },
                                            `conv-divider-${e.contentKey ?? t}`,
                                        )
                                      : e.isSummaryDivider
                                        ? (0, r.jsx)(al, {
                                              index: t,
                                              item: e,
                                              channel: s,
                                              isBeforeGroup: null == e.content && aN(h[t + 1]),
                                          })
                                        : (0, r.jsx)(
                                              ii.A,
                                              {
                                                  isUnread: n,
                                                  isBeforeGroup: null == e.content && aN(h[t + 1]),
                                                  id: n ? ey.q4 : void 0,
                                                  itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                                  children: e.content,
                                              },
                                              `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                          );
                            }
                            if (e.type === eh.TZK.FORUM_POST_ACTION_BAR)
                                return (0, r.jsx)(
                                    sY,
                                    {
                                        parentChannelId: s.parent_id,
                                        postId: s.id,
                                        isLastItem: t + 1 === h.length,
                                        isFirstMessage: !0,
                                    },
                                    `forum-post-action-bar-${s.id}`,
                                );
                            if (
                                e.type === eh.TZK.MESSAGE_GROUP_BLOCKED ||
                                e.type === eh.TZK.MESSAGE_GROUP_IGNORED ||
                                e.type === eh.TZK.MESSAGE_GROUP_SPAMMER ||
                                e.type === eh.TZK.MESSAGE_GROUP_SUSPENDED_USER
                            ) {
                                let t,
                                    n = !0;
                                return (
                                    e.type === eh.TZK.MESSAGE_GROUP_BLOCKED
                                        ? (t = tA.t["+FcYM/"])
                                        : e.type === eh.TZK.MESSAGE_GROUP_IGNORED
                                          ? (t = tA.t["VFWjc+"])
                                          : e.type === eh.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                            ? ((t = tA.t.rHRovo), (n = !1))
                                            : (t = tA.t.xfkfTK),
                                    (0, r.jsx)(
                                        a_,
                                        {
                                            unreadId: ey.q4,
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
                            if (null != f && f > e.content.timestamp.getTime() * ar.A.Millis.SECOND) return;
                            e.type === eh.TZK.MESSAGE && null == U && (U = e);
                            let n = e.groupId === U?.groupId ? U.content.id : e.groupId,
                                i = w && e.content.isFirstMessageInForumPost(s),
                                l = e.type === eh.TZK.THREAD_STARTER_MESSAGE ? nk : nG;
                            return (0, r.jsx)(
                                l,
                                {
                                    compact: u && !i,
                                    channel: s,
                                    message: e.content,
                                    groupId: n,
                                    flashKey: e.flashKey,
                                    id: (0, eI.j)(s.id, e.content.id),
                                    isLastItem: t >= h.length - 1,
                                    renderContentOnly: O || i,
                                },
                                e.content.id,
                            );
                        });
                    F.push(...K);
                    let V = h[h.length - 1];
                    if (
                        (null != x &&
                            p.forEach((e, t) => {
                                let n = 0 === t && (0, es.l)(s, V, new as.Ay({ type: eh.lAJ.DEFAULT, author: x }));
                                F.push(
                                    (0, r.jsx)(
                                        aj,
                                        { file: e, channel: s, user: x, isGroupStart: n, compact: u },
                                        `upload-${e.id}`,
                                    ),
                                );
                            }),
                        a.hasMoreBefore && null == f)
                    ) {
                        a.length > 0 &&
                            F.unshift((0, r.jsx)("div", { style: { height: ey.N0, flex: "0 0 auto" } }, "buffer"));
                        let { useReducedMotion: e } = T.A;
                        ((e && b()) || !e) && F.unshift((0, r.jsx)(eC, { compact: u, ...A }, "has-more"));
                    }
                    if (
                        ((a.hasMoreBefore && null == f) ||
                            F.unshift((0, r.jsx)(l6, { channel: s, showingBanner: _ }, "empty-message")),
                        a.hasMoreAfter && F.push((0, r.jsx)(eC, { compact: u, ...A }, "has-more-after")),
                        !_ && y && b() && F.push((0, r.jsx)(ay, { channel: s })),
                        c > 0 && d && b())
                    ) {
                        let e,
                            t,
                            n = Z.Ay.getOldestUnreadTimestamp(s.id),
                            l = 0 !== n ? n : el.default.extractTimestamp(s.id),
                            a = (0, ei.ro)(new Date(), new Date(l));
                        if (
                            (Z.Ay.isEstimated(s.id)
                                ? ((e = a ? tA.t.wvtbbG : tA.t.tHqbtg), (t = tA.t.vaPWFe))
                                : ((e = a ? tA.t["BctFH/"] : tA.t["3wXb9P"]), (t = tA.t["4H8ldG"])),
                            j && (0, I.Kc)(s) && k.includes(av.i.SUMMARIES))
                        ) {
                            let n = Z.Ay.ackMessageId(s.id),
                                a = (function (e, t) {
                                    let n = B.A.summaries(e) ?? [],
                                        i = 0;
                                    for (let e of n) el.default.compare(e.endId, t) > 0 && (i += 1);
                                    return i;
                                })(s.id, Z.Ay.getOldestUnreadMessageId(s.id));
                            if (
                                ((0, nB.zV)(eh.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                                    num_unread_summaries: a,
                                    num_unread_messages: c,
                                    last_ack_message_id: n,
                                    summaries_enabled_by_user: M,
                                    summaries_enabled_for_channel: (0, I.pk)(s),
                                }),
                                (0, I.pk)(s))
                            ) {
                                let n = M
                                    ? tA.intl.format(t, { count: c })
                                    : tA.intl.format(e, { count: c, timestamp: l });
                                if (M) {
                                    let e =
                                        a > 0
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(td.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: tA.intl.format(t, { count: c }),
                                                      }),
                                                      (0, r.jsx)(sX.A, {
                                                          style: { paddingLeft: 8, paddingRight: 8 },
                                                          height: 4,
                                                          width: 4,
                                                      }),
                                                      (0, r.jsx)(td.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: tA.intl.format(tA.t.CBftDc, { count: a }),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(td.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: n,
                                              });
                                    i = (0, r.jsx)(aE.OZ, { scrollManager: g, content: e, channel: s });
                                } else {
                                    let e = (0, r.jsx)("div", {
                                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                                        children:
                                            a > 0
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(td.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: tA.intl.format(t, { count: c }),
                                                          }),
                                                          (0, r.jsx)(sX.A, {
                                                              style: { paddingLeft: 8, paddingRight: 8 },
                                                              height: 4,
                                                              width: 4,
                                                          }),
                                                          (0, r.jsx)(td.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: tA.intl.format(tA.t.CBftDc, { count: a }),
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(td.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: n,
                                                  }),
                                    });
                                    i = (0, r.jsx)(aE.GN, { content: e, channelId: s.id });
                                }
                            }
                        } else
                            k.includes(av.i.NEW_MESSAGES) &&
                                (i = (0, r.jsx)(aE.GN, {
                                    content: tA.intl.format(e, { count: c, timestamp: l }),
                                    channelId: s.id,
                                }));
                    }
                    if (
                        (null == i &&
                            (0, I.pk)(s) &&
                            M &&
                            k.includes(av.i.SUMMARIES) &&
                            (i = (0, r.jsx)(aE.UK, { channel: s, scrollManager: g })),
                        a.error)
                    )
                        l = (0, r.jsx)(aE.Ez, {
                            loading: a.loadingMore,
                            onClick: () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void S.A.fetchMessages({
                                        channelId: e,
                                        limit: (0, eg.h)("renderStream.reload"),
                                        truncate: !0,
                                    })
                                );
                            },
                            className: C,
                        });
                    else if (a.hasMoreAfter && b()) {
                        let { jumpReturnTargetId: e } = a;
                        l =
                            a.loadingMore && a.jumpedToPresent
                                ? (0, r.jsx)(aE.Ab, { className: C })
                                : null != e
                                  ? (0, r.jsx)(aE.Ab, {
                                        type: aE.ks.REPLY,
                                        onClick: () => {
                                            S.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                        },
                                        className: C,
                                    })
                                  : (0, r.jsx)(aE.Ab, {
                                        onClick: () => {
                                            let e;
                                            return (
                                                S.A.jumpToPresent(s.id, (0, eg.h)("renderStream.jumpToPresent")),
                                                (e = aa.A.getChannelId()),
                                                void (s.id === e && (0, sQ.iN)(s.id))
                                            );
                                        },
                                        className: C,
                                    });
                    }
                    return {
                        channelStreamMarkup: F,
                        newMessagesBar: i,
                        jumpToPresentBar: l,
                        forumPostActionBar: G,
                        safetyWarningBanner: P,
                    };
                })({
                    channel: u,
                    messages: p,
                    unreadCount: g,
                    showNewMessagesBar: A,
                    messageDisplayCompact: f,
                    channelStream: _,
                    uploads: E,
                    loadMore: $.loadMore,
                    scrollManager: $,
                    specs: q,
                    filterAfterTimestamp: M ?? ee,
                    showingQuarantineBanner: R,
                    hideSummaries: L,
                    jumpToPresent: () => {
                        p.hasPresent()
                            ? $.ref.current?.scrollToBottom({ animate: !T.A.useReducedMotion })
                            : S.A.jumpToPresent(u.id, F);
                    },
                    jumpBarClassName: D,
                });
            (t = $.ref),
                (n = o.useCallback(() => t.current?.scrollToBottom(), [t])),
                (i = o.useCallback(() => t.current?.scrollPageUp({ animate: !T.A.useReducedMotion }), [t])),
                (l = o.useCallback(() => t.current?.scrollPageDown({ animate: !T.A.useReducedMotion }), [t])),
                (0, Q.Vo)({ event: eh.jej.SCROLLTO_PRESENT, handler: n }),
                (0, Q.Vo)({ event: eh.jej.SCROLL_PAGE_UP, handler: i }),
                (0, Q.Vo)({ event: eh.jej.SCROLL_PAGE_DOWN, handler: l });
            let ec = (0, b.R7)(),
                { ref: ed, ...eu } = (0, h.LT)(Y),
                em = (0, y.A)((e) => {
                    ($.ref.current = e), (ed.current = e?.getScrollerNode() ?? null);
                }),
                ep = (0, m.bG)([K.A], () => {
                    let e = K.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eA = o.useMemo(() => (P ? (G ? aM.gA : aM.ru) : aM.Zd), [P, G]),
                eE = o.useMemo(() => (P ? (G ? aM.cz : aM.XF) : aM.U6), [P, G]);
            return (0, r.jsxs)(h.hD, {
                navigator: Y,
                children: [
                    null != eo && eo,
                    (0, r.jsxs)("div", {
                        className: d()(aM.Og, s, `group-spacing-${a}`),
                        children: [
                            null == eo && en,
                            (0, r.jsxs)(aR, {
                                ref: em,
                                customTheme: !0,
                                className: d()(c, aM.XG, ep ? eE : void 0),
                                contentClassName: aM.gT,
                                onResize: $.handleResize,
                                onScroll: $.handleScroll,
                                onMouseDown: $.handleMouseDown,
                                onMouseUp: $.handleMouseUp,
                                ...ec,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    er,
                                    (0, r.jsxs)("ol", {
                                        className: d()(aM.bv, { [aM.FD]: u.isModeratorReportChannel() }),
                                        "aria-label": tA.intl.formatToPlainString(tA.t.XarRiL, {
                                            channelName: w ?? "",
                                        }),
                                        ...eu,
                                        children: [
                                            (0, r.jsx)("span", {
                                                className: aM.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: tA.intl.string(tA.t["Spb3s/"]),
                                            }),
                                            et,
                                            (0, r.jsx)("div", {
                                                className: d()({
                                                    [aM.lB]: !R,
                                                    [aM.Ie]: 0 === p.length && !p.loadingMore,
                                                    [aM.Fb]:
                                                        1 === p.length &&
                                                        !p.loadingMore &&
                                                        u.isForumPost() &&
                                                        p.first()?.isFirstMessageInForumPost(u),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            ep ? null : (0, r.jsx)("div", { className: eA }),
                            ea,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    aD = o.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: i = !1,
                forceCompact: l = !1,
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
                    n = (0, m.bG)([q.A], () => null == t || q.A.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: l } = (0, m.cf)(
                        [J.A],
                        () => ({
                            canManageMessages: J.A.can(eh.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? J.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: l, canManageMessages: i };
            })(t),
            {
                messageGroupSpacing: p,
                fontSize: g,
                messageDisplayCompact: A,
                renderSpoilers: f,
                keyboardModeEnabled: _,
            } = (function () {
                let e = H.hH.useSetting(),
                    t = H.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: i,
                        keyboardModeEnabled: l,
                    } = (0, m.cf)([T.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = T.A;
                        return { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n };
                    });
                return {
                    messageGroupSpacing: n,
                    messageDisplayCompact: e,
                    renderSpoilers: t,
                    fontSize: i,
                    keyboardModeEnabled: l,
                };
            })(),
            {
                messages: E,
                channelStream: C,
                oldestUnreadMessageId: x,
                editingMessageId: b,
            } = (function (e) {
                var t;
                let n,
                    i = (0, m.bG)([$.A], () => $.A.getMessages(e.id), [e.id]),
                    l = (0, m.bG)([Z.Ay], () => Z.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = w.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    a = X.default.getUser(V.default.getId())?.hasFlag(eh.nhx.SPAMMER) ?? !1,
                    r = (0, I.cI)(e),
                    c = (0, O.A)("use_topic_dividers_in_chat"),
                    d = (0, m.yK)([B.A], () => (r && c ? (B.A.summaries(e.id) ?? []) : []), [r, e.id, c]),
                    u = (0, m.bG)([B.A], () => (r ? B.A.selectedSummary(e.id) : null), [r, e.id]),
                    h = (0, P.f)("message_stream"),
                    p = (0, m.bG)([G.A], () => (h ? G.A.getSelectedConversation(e.id) : null), [h, e.id]),
                    g =
                        ((t = i),
                        (n = o.useMemo(() => {
                            let e = new Set();
                            return (
                                t.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [t])),
                        (0, D.A)(n));
                !(function (e, t) {
                    let [n, i] = (function (e, t) {
                        let [n, i] = o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (!t.isPrivate()) return [L, R];
                                        let n = e.filter(
                                                (e) => e.application?.id != null && e.activity?.party_id != null,
                                            ),
                                            i = n.map((e) => e.id);
                                        return [n, i];
                                    })(e, t),
                                [e, t],
                            ),
                            l = (0, m.yK)([j.A], () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            j.A.findActivity(
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
                            i,
                            o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (0 === e.length) return M;
                                        let n = [];
                                        return (
                                            e.forEach((e) => {
                                                let i = e.application?.id,
                                                    l = e.activity?.party_id;
                                                if (e.id in t || null == i || null == l) return;
                                                let s = e.timestamp.getTime(),
                                                    a = {
                                                        userId: e.author.id,
                                                        applicationId: i,
                                                        partyId: l,
                                                        messageId: e.id,
                                                        channelId: e.channel_id,
                                                        inviteTime: s,
                                                    };
                                                n.push(a);
                                            }),
                                            n
                                        );
                                    })(n, l),
                                [n, l],
                            ),
                        ];
                    })(e, t);
                    o.useEffect(() => {
                        for (let e of i)
                            N.A.isSubscribed(e) ||
                                v.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                    }, [i]);
                })(i, e);
                let A = o.useMemo(
                    () =>
                        (function (e) {
                            let t,
                                n,
                                i,
                                {
                                    channel: l,
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
                                p = null;
                            return (
                                s.forEach((e) => {
                                    var g, A;
                                    let f, _, E;
                                    if (null != o && o.length > 0) {
                                        let t = el.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o?.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = el.default.extractTimestamp(o[e].startId),
                                                i = el.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= i) {
                                                if (p === o[e].id) break;
                                                u.push({
                                                    type: eh.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (p = o[e].id);
                                                break;
                                            }
                                        }
                                    }
                                    let C = (0, ei.i$)(e.timestamp, "LL");
                                    C !== t &&
                                        null == p &&
                                        (u.push({ type: eh.TZK.DIVIDER, content: C, contentKey: C }), (t = C));
                                    let x = u[u.length - 1],
                                        b = null,
                                        S = (0, ea.kf)(e);
                                    h = h || S;
                                    let I = (function (e, t, n) {
                                        if (et.M.NON_COLLAPSIBLE.has(t.type));
                                        else if (t.hasFlag(eh.pr7.HIDDEN_SUSPENDED_USER))
                                            return eh.TZK.MESSAGE_GROUP_SUSPENDED_USER;
                                        else if (t.blocked) return eh.TZK.MESSAGE_GROUP_BLOCKED;
                                        else if (t.ignored) return eh.TZK.MESSAGE_GROUP_IGNORED;
                                        else if ((0, ea.iJ)(e) && n) return eh.TZK.MESSAGE_GROUP_SPAMMER;
                                        return null;
                                    })(l, e, S && r);
                                    (null !== I &&
                                        ([b, x] =
                                            ((_ = g = x),
                                            null == g || g.type !== I
                                                ? ((f = { type: I, content: [], key: e.id }), u.push(f))
                                                : (_ = (f = g).content[f.content.length - 1]),
                                            [f, _])),
                                    a === e.id && null != m)
                                        ? (null != x && x.type === eh.TZK.DIVIDER
                                              ? (x.unreadId = e.id)
                                              : null !== b
                                                ? ((A = b),
                                                  e.isFirstMessageInForumPost(l) ||
                                                      A.content.push({ type: eh.TZK.DIVIDER, unreadId: e.id }),
                                                  (A.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(l) ||
                                                  u.push({ type: eh.TZK.DIVIDER, unreadId: e.id }),
                                          (m = null))
                                        : null != m &&
                                          el.default.extractTimestamp(e.id) > m &&
                                          (e.isFirstMessageInForumPost(l) ||
                                              u.push({ type: eh.TZK.DIVIDER, unreadId: e.id }),
                                          (m = null));
                                    let y =
                                        null !=
                                        (E = (function (e, t) {
                                            if (em.get(t.id) === e.id) return ep(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, eo.Lt)(e.flags, eh.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === V.default.getId() ||
                                                null != e.activity ||
                                                (0, eo.Lt)(t.recipientFlags ?? 0, er.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                em.has(t.id)
                                            )
                                                return null;
                                            let n = ep(e, t.id);
                                            em.set(t.id, e.id);
                                            let i = (0, eo.lA)(
                                                t.recipientFlags ?? 0,
                                                er.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return ec.A.updatePrivateChannelRecipientFlags(t.id, i), n;
                                        })(e, l))
                                            ? { message: E, position: "before" }
                                            : null;
                                    null != y &&
                                        "before" === y.position &&
                                        u.push({ type: eh.TZK.MESSAGE, content: y.message, groupId: y.message.id });
                                    let T = x?.type === eh.TZK.MESSAGE ? i : x;
                                    (0, es.l)(l, T, e) && (n = e.id);
                                    let v = {
                                        type:
                                            e.type === eh.lAJ.THREAD_STARTER_MESSAGE
                                                ? eh.TZK.THREAD_STARTER_MESSAGE
                                                : eh.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (i = v);
                                    let { jumpSequenceId: N, jumpFlash: j, jumpTargetId: M } = s;
                                    j && e.id === M && null != N && (v.flashKey = N),
                                        s.jumpTargetId === e.id && (v.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            u.push({
                                                type: eh.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        null != d &&
                                            e.id === d.start_message_id &&
                                            d.message_count > 1 &&
                                            u.push({
                                                type: eh.TZK.DIVIDER,
                                                content: (function (e) {
                                                    let t = e.summary_map?.entries.find(
                                                        (e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type,
                                                    );
                                                    if (null != t) {
                                                        let e = (0, en.i)(t.content_json);
                                                        if (e?.title != null && "" !== e.title) return e.title;
                                                    }
                                                    return e.keywords.length > 0
                                                        ? e.keywords.slice(0, 3).join(", ")
                                                        : `${e.message_count} messages`;
                                                })(d),
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationDivider: !0,
                                            }),
                                        null !== b
                                            ? (b.content.push(v), v.jumpTarget && (b.hasJumpTarget = !0))
                                            : u.push(v),
                                        e.isFirstMessageInForumPost(l) &&
                                            u.push({ type: eh.TZK.FORUM_POST_ACTION_BAR }),
                                        null != y &&
                                            "after" === y.position &&
                                            u.push({ type: eh.TZK.MESSAGE, content: y.message, groupId: y.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            u.push({ type: eh.TZK.DIVIDER, contentKey: c.endId, isSummaryDivider: !0 }),
                                        null != d &&
                                            e.id === d.end_message_id &&
                                            d.message_count > 1 &&
                                            u.push({
                                                type: eh.TZK.DIVIDER,
                                                contentKey: `conv-end-${d.id}`,
                                                isConversationDivider: !0,
                                            });
                                }),
                                h && (0, ea.iJ)(l) && w.A.trackExposure({ location: "416cc9_1" }),
                                u
                            );
                        })({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: l,
                            treatSpam: s && !a,
                            summaries: d,
                            selectedSummary: u,
                            selectedConversation: p,
                        }),
                    [i, e, l, s, d, u, p, g, a],
                );
                return {
                    messages: i,
                    channelStream: A,
                    oldestUnreadMessageId: l,
                    editingMessageId: (0, m.bG)([W.A], () => W.A.getEditingMessage(e.id)?.id),
                };
            })(t);
        return (0, r.jsx)(F.Bs.Provider, {
            value: (0, ee.A)(f, d),
            children: (0, r.jsx)(ex.t, {
                children: (0, r.jsx)(aL, {
                    ...c,
                    messageGroupSpacing: p,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !s && (l || A),
                    messages: E,
                    channelStream: C,
                    permissionVersion: u,
                    uploads: (0, m.bG)([Y.A], () => Y.A.getFiles(t.id), [t]),
                    unreadCount: (0, m.bG)([Z.Ay], () => Z.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != x,
                    canChat: h,
                    editingMessageId: b,
                    fontSize: g,
                    keyboardModeEnabled: _,
                    showingQuarantineBanner: n,
                    hideSummaries: i,
                    typingGradient: a,
                }),
            }),
        });
    });
