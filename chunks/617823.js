(t.r(n), t.d(n, { SettingsButton: () => nN, default: () => nm }), t(321073));
var s = t(477900),
    a = t(582128),
    i = t(503698),
    l = t.n(i),
    r = t(736819),
    o = t(855986),
    c = t(646514),
    d = t(707554),
    u = t(834730),
    h = t(143838),
    g = t(866665),
    m = t(939249),
    x = t(625903),
    A = t(73153),
    p = t(334738),
    I = t(964486),
    N = t(793574),
    f = t(688810),
    j = t(182179),
    E = t(85109),
    y = t(756377),
    S = t(741097),
    O = t(734057),
    b = t(71393),
    M = t(596344),
    T = t(218461),
    v = t(811091),
    U = t(851109),
    C = t(706341),
    R = t(932883),
    k = t(599486),
    _ = t(398269),
    L = t(394953),
    D = t(989342),
    w = t(196765);
let B = (0, w.v)((e, n) => ({
    hasNoUnreads: !1,
    shouldHide: () => !n().hasNoUnreads,
    setInboxReadState: (t) => {
        t !== n().hasNoUnreads && e({ hasNoUnreads: t });
    },
}));
var K = t(331322),
    G = t(775602),
    z = t(645908);
function X(e) {
    let { withHeader: n = !0, size: t = 15 } = e,
        a = (0, o.bG)([G.Ay], () => G.Ay.useReducedMotion);
    return (0, s.jsxs)(K.B, {
        gap: 4,
        children: [
            n &&
                (0, s.jsx)("div", {
                    className: l()(z.iE, { [z.cb]: a }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, s.jsx)(P, { className: l()(z.nq, z.NX) }),
                }),
            Array.from({ length: t }).map((e, n) => (0, s.jsx)(Y, {}, n)),
        ],
    });
}
function P(e) {
    let { className: n } = e;
    return (0, s.jsx)("div", { className: l()(z.n8, n) });
}
function Y() {
    let e = (0, o.bG)([G.Ay], () => G.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: l()(z.iE, { [z.cb]: e }),
        children: [
            (0, s.jsx)("div", { className: l()(z.my, z.NX) }),
            (0, s.jsxs)("div", {
                className: z.U0,
                children: [
                    (0, s.jsx)(P, { className: l()(z.Md, z.NX) }),
                    (0, s.jsx)(P, { className: l()(z.nq, z.NX) }),
                    (0, s.jsx)(P, { className: l()(z.xs, z.NX) }),
                ],
            }),
        ],
    });
}
var H = t(806163),
    $ = t(3026),
    F = t(890856),
    W = t(276293),
    V = t(778712),
    Z = t(559106),
    J = t(534514),
    q = t(812993),
    Q = t(191023),
    ee = t(477262),
    en = t(642846),
    et = t(797285),
    es = t(983851),
    ea = t(442433),
    ei = t(47167),
    el = t(713654),
    er = t(427930),
    eo = t(427209),
    ec = t(763754),
    ed = t(74096),
    eu = t(776579),
    eh = t(812299),
    eg = t(943220),
    em = t(538355),
    ex = t(995273),
    eA = t(854627),
    ep = t(95701),
    eI = t(260509),
    eN = t(949744);
let ef = (0, w.v)((e, n) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(n().openMenus).some((n) => null != e && n.startsWith(`${e}:`)),
    openMenu: (n, t) => {
        let s = `${n}:${t}`;
        e((e) => {
            let n = new Set(e.openMenus);
            return (n.add(s), { openMenus: n });
        });
    },
    closeMenu: (n, t) => {
        let s = `${n}:${t}`;
        e((e) => {
            let n = new Set(e.openMenus);
            return (n.delete(s), { openMenus: n });
        });
    },
}));
var ej = t(265872),
    eE = t(305866),
    ey = t(933832),
    eS = t(606096),
    eO = t(997146),
    eb = t(165862),
    eM = t(477782),
    eT = t(782603),
    ev = t(461678),
    eU = t(880457),
    eC = t(81612),
    eR = t(738125),
    ek = t(914703),
    e_ = t(849077),
    eL = t(652215),
    eD = t(792996),
    ew = t(230049);
let eB = {
    [e_.Th.MENTION]: [e_.kR.SETTINGS],
    [e_.Th.REPLY]: [e_.kR.SETTINGS],
    [e_.Th.REACTION]: [e_.kR.SETTINGS],
    [e_.Th.ANNOUNCEMENT]: [e_.kR.SETTINGS],
    [e_.Th.MESSAGE]: [e_.kR.SETTINGS],
};
function eK(e) {
    let { label: n, onClick: t, message: a, Icon: i, interactionType: l } = e,
        r = (0, R.op)();
    return (0, s.jsx)(g.m, {
        text: n,
        position: "top",
        spacing: 4,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, s.jsx)(m.D, {
            className: ew.XI,
            "aria-label": n,
            onClick: (e) => {
                ((0, R.Ml)({ message: a, interactionType: l, viewId: r }), e.stopPropagation(), t(a));
            },
            children: (0, s.jsx)(i, { size: "xs", color: "currentColor", className: ew.gE }),
        }),
    });
}
function eG(e) {
    let { channel: n, message: t, label: i, Icon: l, Menu: r, interactionType: o, actionType: c } = e,
        d = (0, R.op)(),
        [u, h] = (0, a.useState)(!1),
        x = (0, a.useRef)(null),
        { openMenu: A, closeMenu: p } = ef();
    return (0, s.jsx)(ej.Y, {
        shouldShow: u,
        animation: ej.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: x,
        onRequestClose: function () {
            (h(!1), p(t.id, c));
        },
        renderPopout: (e) =>
            (0, s.jsx)(eE.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: x,
                children: (0, s.jsx)(r, { "data-menu-migrated": !0, renderPopoutProps: e, channel: n, message: t }),
            }),
        children: (e) =>
            (0, s.jsx)(g.m, {
                text: i,
                position: "top",
                spacing: 4,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, s.jsx)(m.D, {
                    innerRef: x,
                    className: ew.XI,
                    onClick: (e) => {
                        let n;
                        ((0, R.Ml)({ message: t, interactionType: o, viewId: d }),
                            e.stopPropagation(),
                            h((n = !u)),
                            n ? A(t.id, c) : p(t.id, c));
                    },
                    children: (0, s.jsx)(l, {
                        ...e,
                        message: t,
                        "aria-label": i,
                        className: ew.gE,
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
            }),
    });
}
let ez = {
    [e_.kR.ACK]: {
        type: "standard",
        Icon: ey.CheckmarkLargeIcon,
        label: eD.intl.string(eD.t.e6RscS),
        onClick: (e) => {
            (A.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                p.I_(
                    e.channel_id,
                    { object: eL.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: eL.btD.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                ));
        },
        interactionType: R.X8.ACK,
    },
    [e_.kR.BOOKMARK]: {
        type: "menu",
        label: eD.intl.string(eD.t["9p3D9p"]),
        Icon: (e) =>
            E.A.isMessageBookmarked(e.message.channel_id, e.message.id)
                ? (0, s.jsx)(eS.BookmarkIcon, { ...e })
                : (0, s.jsx)(eO.c, { ...e }),
        interactionType: R.X8.BOOKMARK,
        Menu: (e) => {
            let { message: n, renderPopoutProps: t } = e,
                { savedMessage: a, isBookmark: i } = (0, o.cf)([E.A], () => ({
                    savedMessage: E.A.getSavedMessage(n.channel_id, n.id),
                    isBookmark: E.A.isMessageBookmarked(n.channel_id, n.id),
                })),
                l = (0, eU.P)({ message: n, savedMessage: a, source: eR.r.NOTIFICATIONS_INBOX }),
                r = null != a && null != a.saveData.dueAt;
            return (0, s.jsxs)(eb.W, {
                "data-menu-migrated-auto": !0,
                ...t,
                navId: "message-reminder-create",
                "aria-label": eD.intl.string(eD.t.mJ3P0N),
                onClose: t.closePopout,
                onSelect: () => null,
                children: [
                    r
                        ? null
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  i
                                      ? (0, s.jsx)(eM.Dr, {
                                            id: "remove-from-for-later",
                                            label: eD.intl.string(eD.t.SvXS1Z),
                                            icon: eS.BookmarkIcon,
                                            leadingAccessory: { type: "icon", icon: eS.BookmarkIcon },
                                            action: () =>
                                                (0, eC.x)({
                                                    channelId: n.channel_id,
                                                    messageId: n.id,
                                                    displayToast: !0,
                                                }),
                                        })
                                      : (0, s.jsx)(eM.Dr, {
                                            id: "create-bookmark",
                                            label: eD.intl.string(eD.t["9p3D9p"]),
                                            icon: eO.c,
                                            leadingAccessory: { type: "icon", icon: eO.c },
                                            action: () =>
                                                (0, eC.Y)({
                                                    channelId: n.channel_id,
                                                    messageId: n.id,
                                                    displayToast: !0,
                                                    source: eR.r.NOTIFICATIONS_INBOX,
                                                }),
                                        }),
                                  (0, s.jsx)(eM.bX, {}),
                              ],
                          }),
                    l,
                ],
            });
        },
    },
    [e_.kR.SETTINGS]: {
        type: "menu",
        Icon: eT.BellIcon,
        label: eD.intl.string(eD.t.h850Ss),
        interactionType: R.X8.SETTINGS,
        Menu: (e) => {
            let { channel: n, renderPopoutProps: t } = e;
            return n.isThread()
                ? (0, s.jsx)(ek.A, { ...t, channel: n, navId: "thread-context", label: eD.intl.string(eD.t["1NBjqb"]) })
                : (0, s.jsx)(ev.A, {
                      ...t,
                      channel: n,
                      navId: "channel-context",
                      label: eD.intl.string(eD.t.Xm41aV),
                      includeGuildMute: !0,
                  });
        },
    },
};
function eX(e) {
    let { message: n, channel: t, isUnread: i } = e,
        l = (0, a.useMemo)(() => {
            let e = e_.Th.MENTION,
                n = new Set();
            return (i && n.add(e_.kR.ACK), n.add(e_.kR.BOOKMARK), eB[e].forEach((e) => n.add(e)), Array.from(n));
        }, [n, i]);
    return (0, s.jsx)(K.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: ew.o1,
        children: l.map((e) => {
            let a = ez[e];
            switch (a.type) {
                case "standard":
                    return (0, s.jsx)(eK, { ...a, actionType: e, message: n }, e);
                case "menu":
                    return (0, s.jsx)(eG, { ...a, actionType: e, channel: t, message: n }, e);
            }
        }),
    });
}
var eP = t(97808),
    eY = t(573435);
t(190460);
var eH = t(185864);
function e$(e) {
    let {
            children: n,
            size: t,
            onClick: i,
            onMouseDown: r,
            onKeyDown: o,
            onContextMenu: c,
            onMouseEnter: d,
            onMouseLeave: u,
            className: h,
            ariaHidden: g,
            avatarDecoration: x,
            specs: A,
            cornerIconUrl: p,
            cornerIconOffsetX: I,
            cornerIconOffsetY: N,
            ariaLabel: f,
        } = e,
        j = { width: (0, V.FT)(t), height: (0, V.FT)(t) },
        E = (0, a.useId)(),
        y = 1.2 * A.size,
        S =
            null != x &&
            (0, s.jsxs)("svg", {
                width: y,
                height: y,
                viewBox: `0 0 ${y} ${y}`,
                className: eH.DX,
                "aria-hidden": !0,
                children: [
                    (0, s.jsxs)("mask", {
                        id: E,
                        children: [
                            (0, s.jsx)("rect", { x: 0, y: 0, width: y, height: y, fill: "white" }),
                            null != p &&
                                (function (e, n) {
                                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: i,
                                            width: l,
                                            x: r,
                                            y: o,
                                        } = (function (e, n, t, s) {
                                            let { height: a, width: i, x: l, y: r } = eZ(e, t, s),
                                                o = (n - e.size) / 2;
                                            return { width: i, height: a, x: l + o, y: r + o };
                                        })(e, n, t, a);
                                    return (0, s.jsx)("rect", {
                                        mask: `url(#${eY.hW.SQUIRCLE})`,
                                        height: i,
                                        width: l,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(A, y, I, N),
                        ],
                    }),
                    (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: y,
                        height: y,
                        mask: `url(#${E})`,
                        children: (0, s.jsx)("img", { className: eH.M, src: x, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != i || null != r
        ? (0, s.jsxs)(m.D, {
              className: l()(eH.iE, eH.Wn, h),
              style: j,
              onClick: i,
              onContextMenu: c,
              onMouseDown: r,
              onKeyDown: o,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": f ?? void 0,
              "aria-hidden": g,
              children: [n, S],
          })
        : (0, s.jsxs)("div", {
              className: l()(eH.iE, h),
              style: j,
              onContextMenu: c ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": f ?? void 0,
              "aria-hidden": g,
              children: [n, S],
          });
}
function eF(e) {
    let {
            src: n,
            size: t,
            "aria-hidden": i = !1,
            "aria-label": r,
            imageClassName: o,
            cornerIconUrl: c,
            cornerIconOffsetX: d = 0,
            cornerIconOffsetY: u = 0,
        } = e,
        h = (0, V.Kj)(t),
        g = h.size,
        m = (0, a.useId)();
    return (0, s.jsx)(e$, {
        ...e,
        ariaLabel: r,
        ariaHidden: i,
        specs: h,
        children: (0, s.jsxs)("svg", {
            width: g + d,
            height: g + u,
            viewBox: `0 0 ${g + d} ${g + u}`,
            className: l()(eH.dK, eH.JW),
            "aria-hidden": !0,
            children: [
                (0, s.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, s.jsx)("circle", { cx: h.size / 2, cy: h.size / 2, r: h.size / 2, fill: "white" }),
                        null != c &&
                            (function (e, n, t) {
                                let { height: a, width: i, x: l, y: r } = eZ(e, n, t);
                                return (0, s.jsx)("rect", {
                                    mask: `url(#${eY.hW.SQUIRCLE})`,
                                    height: a,
                                    width: i,
                                    x: l,
                                    y: r,
                                    fill: "black",
                                });
                            })(h, d, u),
                    ],
                }),
                (0, s.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: h.size,
                    height: h.size,
                    mask: `url(#${m})`,
                    children: (0, s.jsx)(eP.d9, { src: n, className: o }),
                }),
                null != c &&
                    (0, s.jsx)("foreignObject", {
                        ...eV(h, d, u),
                        mask: `url(#${eY.hW.SQUIRCLE})`,
                        children: (0, s.jsx)("img", { src: c, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eW(e) {
    let {
            src: n,
            size: t,
            "aria-hidden": i = !1,
            "aria-label": r,
            cornerIconUrl: o,
            cornerIconOffsetX: c = 0,
            cornerIconOffsetY: d = 0,
        } = e,
        u = (0, a.useId)(),
        h = (0, a.useId)(),
        g = (0, V.Kj)(t),
        m = g.size + c,
        x = g.size + d,
        A = eZ(g, c, d),
        p = eV(g, c, d);
    return (0, s.jsx)(e$, {
        ...e,
        ariaLabel: r,
        ariaHidden: i,
        specs: g,
        children: (0, s.jsxs)("svg", {
            width: m,
            height: x,
            viewBox: `0 0 ${m} ${x}`,
            className: l()(eH.dK, eH.JW),
            "aria-hidden": !0,
            children: [
                (0, s.jsxs)("mask", {
                    id: u,
                    children: [
                        (0, s.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: g.size,
                            height: g.size,
                            fill: "white",
                            mask: `url(#${eY.hW.SQUIRCLE})`,
                        }),
                        (0, s.jsx)("circle", {
                            cx: A.x + A.width / 2,
                            cy: A.y + A.height / 2,
                            r: A.width / 2,
                            fill: "black",
                        }),
                    ],
                }),
                (0, s.jsx)("mask", {
                    id: h,
                    children: (0, s.jsx)("circle", {
                        cx: p.x + p.width / 2,
                        cy: p.y + p.height / 2,
                        r: p.width / 2,
                        fill: "white",
                    }),
                }),
                (0, s.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: g.size,
                    height: g.size,
                    mask: `url(#${u})`,
                    children: (0, s.jsx)(
                        "div",
                        {
                            className: eH.yA,
                            children: (0, s.jsx)("img", {
                                src: n ?? void 0,
                                alt: " ",
                                className: eH.my,
                                "aria-hidden": !0,
                            }),
                        },
                        n,
                    ),
                }),
                null != o &&
                    (0, s.jsx)("foreignObject", {
                        ...p,
                        mask: `url(#${h})`,
                        children: (0, s.jsx)("img", { src: o, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eV(e, n, t) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + n, y: e.size - 16 - e.offset + t };
}
function eZ(e, n, t) {
    let s = eV(e, n, t),
        a = s.x - 2,
        i = s.y - 2;
    return { width: s.height + 4, height: s.width + 4, x: a, y: i };
}
function eJ(e) {
    let { message: n, channel: t, focusProps: i, isSelected: r, isUnread: c, messageCount: d } = e,
        h = t.type === eL.rbe.UNKNOWN ? W.N : (0, el.gU)(t, null),
        g = (0, ei.Ay)(t, !1),
        m = (0, o.bG)([b.A], () => b.A.getGuild(t.getGuildId())),
        { nick: x, colorString: A } = (0, ec.Ay)(n),
        { avatarSrc: p, eventHandlers: I } = (0, eA.A)({
            userId: n.author.id,
            size: V._3.SIZE_32,
            guildId: m?.id,
            animateOnHover: !0,
        }),
        N = t.type !== eL.rbe.GUILD_ANNOUNCEMENT || null == m,
        f = t.isPrivate() ? d : +!!n.mentioned,
        j = c && f > 0,
        E = (0, eh.y)({ channel: t, message: n, user: n.author, compact: !0, isRepliedMessage: !0 }),
        y = (0, s.jsx)("div", {
            className: ew.Ys,
            inert: !0,
            children: (0, s.jsx)(eg.A, {
                channel: t,
                message: n,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: ew.Xh,
            }),
        });
    return (
        (0, a.useEffect)(() => {
            null != m && eN.A.requestMember(m.id, n.author.id);
        }, [m, n.author.id]),
        (0, s.jsx)(Z.vN, {
            ...i,
            children: (0, s.jsxs)("div", {
                onMouseLeave: I.onMouseLeave,
                onMouseEnter: I.onMouseEnter,
                className: ew.zC,
                children: [
                    c && !r && (0, s.jsx)("div", { className: ew.Zm }),
                    (0, s.jsx)(K.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: N
                            ? (0, s.jsx)(eF, {
                                  "aria-label": "User Avatar",
                                  src: p,
                                  size: V._3.SIZE_32,
                                  cornerIconUrl: null != m ? (0, eI.Iv)(m, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, s.jsx)(eW, {
                                  "aria-label": "Guild Icon",
                                  src: (0, eI.Iv)(m, 32),
                                  size: V._3.SIZE_32,
                                  cornerIconUrl: n.author.getAvatarURL(m.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, s.jsxs)(K.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, s.jsxs)(K.B, {
                                direction: "horizontal",
                                gap: 4,
                                style: { whiteSpace: "nowrap", minWidth: 0, justifyContent: "space-between" },
                                children: [
                                    N
                                        ? (0, s.jsxs)("div", {
                                              className: ew.ZR,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: ew.Xh,
                                                      style: { color: A ?? void 0 },
                                                      children: (0, s.jsx)($.A, { children: y }),
                                                  }),
                                                  E,
                                              ],
                                          })
                                        : (0, s.jsx)($.A, {
                                              children: (0, s.jsx)(J.D, {
                                                  variant: "body-md/semibold",
                                                  style: { color: A ?? void 0 },
                                                  className: ew.Xh,
                                                  children: m.name,
                                              }),
                                          }),
                                    (0, s.jsxs)(K.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, s.jsx)(eX, { message: n, channel: t, isUnread: c }),
                                            j
                                                ? (0, s.jsx)(q.hV, { className: ew.WK, count: f })
                                                : (0, s.jsx)(eq, { message: n }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(K.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: l()(ew.HA, { [ew.gy]: c, [ew.wH]: r }),
                                children: [
                                    null !== h && (0, s.jsx)(h, { size: "xxs", className: ew.p4 }),
                                    (0, s.jsxs)(u.E, {
                                        variant: "body-sm/medium",
                                        lineClamp: 1,
                                        className: l()(ew.HA, { [ew.gy]: c, [ew.wH]: r }),
                                        children: [g, !N && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(eQ, { message: n, isUnread: c, isSelected: r, channel: t }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function eq(e) {
    let { message: n } = e,
        t = (0, ex.jb)(n.timestamp.getTime());
    return (0, s.jsx)(eu.A, {
        timestamp: n.timestamp,
        className: ew.vE,
        isEdited: n.isEdited(),
        isInline: !0,
        children: t,
    });
}
function eQ(e) {
    let { message: n, channel: t, isUnread: i, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: n, isUnread: t, isSelected: i } = e,
                { content: r } = (0, em.A)(n, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, a.useMemo)(() => {
                let e,
                    a = "" === n.content,
                    o = n.embeds.some((e) => e.type === eL.Auw.GIFV),
                    c = ((e = n.embeds.some((e) => e.type === eL.Auw.GIFV)), n.attachments.length + +!!e),
                    d = (0, er.A)(n),
                    u = n.stickerItems.length > 0,
                    h = n.isPoll(),
                    g = n.type === eL.lAJ.POLL_RESULT,
                    m = n.hasFlag(eL.pr7.IS_VOICE_MESSAGE),
                    x = n.type === eL.lAJ.USER_JOIN,
                    A = null;
                1 === c
                    ? (A = Q.ImageIcon)
                    : c > 1
                      ? (A = ee.s)
                      : d
                        ? (A = eo.A)
                        : h || g
                          ? (A = en.Y)
                          : u
                            ? (A = et.t)
                            : m && (A = es.H);
                let p = !0,
                    I = null;
                return (
                    a
                        ? d
                            ? (I = eD.intl.string(eD.t["9ddYKt"]))
                            : h
                              ? ((p = !1), (I = n.poll?.question.text))
                              : (I = g
                                    ? eD.intl.string(eD.t.sad2PH)
                                    : o
                                      ? eD.intl.string(eD.t.p0oZmy)
                                      : c > 1
                                        ? eD.intl.formatToPlainString(eD.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? eD.intl.string(eD.t.tCcq5p)
                                          : u
                                            ? eD.intl.format(eD.t.zY4v1B, { stickerName: n.stickerItems[0].name })
                                            : m
                                              ? eD.intl.string(eD.t.slFYgi)
                                              : x
                                                ? eD.intl.string(eD.t.Yvvfw9)
                                                : eD.intl.string(eD.t.sDqZHL))
                        : ((p = !1),
                          (I = (0, s.jsx)(ed.Ay, {
                              content: r,
                              message: n,
                              compact: !1,
                              className: l()(ew.iU, { [ew.gy]: t, [ew.wH]: i }),
                          }))),
                    a &&
                        (I = (0, s.jsx)("div", {
                            className: l()(ew.iU, { [ew.gy]: t, [ew.wH]: i, [ew.QP]: p }),
                            children: I,
                        })),
                    { previewContent: I, Icon: A }
                );
            }, [n, r, t, i]);
        })({ message: n, channel: t, isUnread: i, isSelected: r });
    return (0, s.jsxs)(K.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, s.jsx)(c, { size: "xxs", className: ew.p4 }),
            (0, s.jsx)(u.E, { variant: "body-sm/normal", lineClamp: 1, className: ew.iU, children: o }),
        ],
    });
}
let e0 = (0, a.memo)(
    function (e) {
        let { message: n, isUnread: i, messageCount: r = 1 } = e,
            c = n.message,
            d = (0, R.op)(),
            { params: u } = (0, H.W5)(),
            h = (0, o.bG)([O.A], () => {
                if (null == c) return null;
                let e = O.A.getChannel(n.channelId);
                return null != e
                    ? e
                    : new ep.jb({
                          id: n.channelId,
                          guild_id: n.guildId,
                          type: eL.rbe.UNKNOWN,
                          name: eD.intl.string(eD.t.J90oLW),
                      });
            }),
            g = ef((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: m } = (0, U.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = (0, ei.Ay)(h),
            A = a.useMemo(() => `${c?.author.username}: ${x}`, [c?.author.username, x]);
        return null == c || null == h
            ? null
            : (0, s.jsx)(F.s, {
                  "aria-label": A,
                  className: l()(ew.FJ, { [ew.wH]: c.id === u.messageId, [ew.Yj]: g }),
                  onClick: () => {
                      C.A.inboxItemClick({
                          message: c,
                          channel: h,
                          isUnread: i,
                          isSidebar: m === U.U5.SIDEBAR,
                          viewId: d,
                      });
                  },
                  onContextMenu: (e) => {
                      (e.preventDefault(),
                          (0, R.Ml)({ interactionType: R.X8.CONTEXT_MENU, message: c, viewId: d }),
                          (0, ea.L3)(
                              e,
                              async () => {
                                  let { default: e } = await Promise.all([t.e(393336), t.e(703869), t.e(648118)]).then(
                                      t.bind(t, 594005),
                                  );
                                  return (n) => (0, s.jsx)(e, { ...n, channel: h, message: c, isUnread: i });
                              },
                              { disableClickTrap: !0 },
                          ));
                  },
                  children: (0, s.jsx)(eJ, {
                      message: c,
                      channel: h,
                      isSelected: c.id === u.messageId,
                      isUnread: i,
                      messageCount: r,
                  }),
              });
    },
    (e, n) => e.isUnread === n.isUnread && e.message.id === n.message.id && e.messageCount === n.messageCount,
);
var e1 = t(435558),
    e3 = t.n(e1),
    e4 = t(837381),
    e8 = t(847374),
    e2 = t(912592),
    e6 = t(821609),
    e7 = t(475825),
    e9 = t(928039),
    e5 = t(188567);
let ne = { [e_.Ur.UNREAD]: !0, [e_.Ur.TODAY]: !0, [e_.Ur.YESTERDAY]: !1, [e_.Ur.OLDER]: !1 },
    nn = { [e_.Ur.UNREAD]: !0, [e_.Ur.TODAY]: !1, [e_.Ur.YESTERDAY]: !1, [e_.Ur.OLDER]: !1 },
    nt = (0, w.v)((e, n) => ({
        messageCategoryOpenStates: nn,
        lastInitializedWithUnreads: null,
        hasUserToggledSection: !1,
        getOpenState: (e) => n().messageCategoryOpenStates[e],
        toggleOpenState: (n) => {
            e((e) => ({
                hasUserToggledSection: !0,
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [n]: !e.messageCategoryOpenStates[n] },
            }));
        },
        setOpenStateFromUnreads: (t) => {
            let s = n();
            s.hasUserToggledSection ||
                (s.lastInitializedWithUnreads !== t &&
                    e({ lastInitializedWithUnreads: t, messageCategoryOpenStates: t ? nn : ne }));
        },
    }));
var ns = t(642466),
    na = t(875436);
function ni(e) {
    e.stopPropagation();
}
function nl(e) {
    let { group: n, isOpen: t, toggleOpenedState: a } = e;
    return (0, s.jsx)(m.D, {
        "aria-expanded": t,
        onClick: a,
        className: l()(na.TP, { [na.yZ]: !t }),
        children: (0, s.jsxs)(K.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, s.jsx)(J.D, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    className: na.P7,
                    children: (0, e1.capitalize)(eD.intl.string(e_.v7[n]).toLowerCase()),
                }),
                (0, s.jsx)(e8.a, { size: "xxs", className: na.ai }),
            ],
        }),
    });
}
let nr = [e_.Ur.UNREAD, e_.Ur.TODAY, e_.Ur.YESTERDAY, e_.Ur.OLDER];
function no() {
    let { analyticsLocations: e } = (0, f.Ay)(N.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)("div", {
        className: na.y7,
        children: (0, s.jsxs)(K.B, {
            gap: 24,
            align: "center",
            children: [
                (0, s.jsxs)(K.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, s.jsx)(e2.InboxIcon, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: c.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, s.jsx)(u.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: eD.intl.string(ns.default["O+racd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(e6.$, {
                    variant: "secondary",
                    onClick: () => (0, L.tZ)(e),
                    text: eD.intl.string(ns.default.klSpfs),
                }),
            ],
        }),
    });
}
function nc(e) {
    let n,
        {
            messages: t,
            unreadMessages: i,
            isLoadingMessages: r = !1,
            loadMore: c,
            renderLoadingState: d,
            renderMessageGroup: u,
            scrollerClassName: h,
            className: g,
            listName: m,
            ignoreGrouping: x = !1,
        } = e,
        A = (0, R.op)(),
        p = a.useRef(null),
        I = a.useRef(0),
        N = (0, e9.A)(m, p),
        { entrypoint: f, notificationCenterVariant: j } = (0, U.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: E,
            isLoadingComplete: y,
            hasLoadedEver: S,
        } = (0, o.cf)([_.A], () => ({
            isLoading: _.A.isLoading,
            isLoadingComplete: _.A.isLoadingComplete,
            hasLoadedEver: _.A.hasLoadedEver,
        })),
        { messageCategoryOpenStates: O, toggleOpenState: b } = nt(),
        M =
            ((n = (0, o.yK)([_.A], () => _.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)(
                [_.A, T.Ay],
                () => {
                    let e = _.A.getChannelInfoMap();
                    for (let t of n) {
                        let n = e[t];
                        if ((null == n || n.loadState === e_.Ve.UNLOADED) && T.Ay.hasUnread(t)) return !0;
                    }
                    return !1;
                },
                [n],
            ));
    a.useEffect(() => {
        function e() {
            p.current?.scrollPageUp({ animate: !G.Ay.useReducedMotion });
        }
        function n() {
            p.current?.scrollPageDown({ animate: !G.Ay.useReducedMotion });
        }
        return (
            e5._.subscribe(eL.jej.SCROLL_PAGE_DOWN, n),
            e5._.subscribe(eL.jej.SCROLL_PAGE_UP, e),
            () => {
                (e5._.unsubscribe(eL.jej.SCROLL_PAGE_DOWN, n), e5._.unsubscribe(eL.jej.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let C = a.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let n = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= n && c?.(e_.VA.USER_SCROLL);
        }, [c]),
        D = a.useMemo(() => {
            let e = { [e_.Ur.UNREAD]: [], [e_.Ur.TODAY]: [], [e_.Ur.YESTERDAY]: [], [e_.Ur.OLDER]: [] },
                n = { [e_.Ur.UNREAD]: [], [e_.Ur.TODAY]: [], [e_.Ur.YESTERDAY]: [], [e_.Ur.OLDER]: [] },
                s = { [e_.Ur.UNREAD]: {}, [e_.Ur.TODAY]: {}, [e_.Ur.YESTERDAY]: {}, [e_.Ur.OLDER]: {} };
            function a(e, t) {
                e.kind === e_.yL.MENTION && null != e.guildId
                    ? n[t].push(e)
                    : e.channelId in s[t]
                      ? s[t][e.channelId].push(e)
                      : (s[t][e.channelId] = [e]);
            }
            return (
                (t.length > 0 || i.length > 0) &&
                    (e3().each(i, (e) => {
                        a(e, e_.Ur.UNREAD);
                    }),
                    e3().each(t, (e) => {
                        a(e, (0, L.i7)(e));
                    }),
                    e3().each(nr, (t) => {
                        [...Object.values(s[t]).map((e) => e.reverse()), ...n[t].map((e) => [e])]
                            .sort((e, n) => v.default.compare(n[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, i]),
        w = 0 === t.length && 0 === i.length,
        K = w && y,
        z = !S || (r && w),
        X = a.useMemo(() => nr.filter((e) => D[e].length > 0), [D]),
        P = a.useMemo(() => {
            if (x)
                return [
                    ...i.map((e) => ({ type: "message", messageGroup: [e], isUnread: !0 })),
                    ...t.map((e) => ({ type: "message", messageGroup: [e], isUnread: !1 })),
                ];
            let e = [];
            for (let n of X)
                if ((e.push({ type: "section-header", category: n }), O[n]))
                    for (let t of D[n]) e.push({ type: "message", messageGroup: t, isUnread: n === e_.Ur.UNREAD });
            return e;
        }, [x, i, t, X, O, D]),
        Y = a.useMemo(() => [P.length], [P.length]),
        H = a.useCallback((e, n) => (P[n]?.type === "section-header" ? 32 : 64), [P]),
        $ = a.useCallback(
            (e) => {
                let { row: n } = e,
                    t = P[n];
                return "section-header" === t.type
                    ? (0, s.jsx)(
                          nl,
                          {
                              group: t.category,
                              isOpen: O[t.category],
                              toggleOpenedState: () => {
                                  let e = O[t.category];
                                  (b(t.category), (0, R.Ut)({ section: t.category, enabled: !e, viewId: A }));
                              },
                          },
                          t.category,
                      )
                    : u(t.messageGroup, t.isUnread);
            },
            [P, O, b, A, u],
        ),
        F = P[P.length - 1],
        W = F?.type === "section-header",
        V = B((e) => e.setInboxReadState),
        { selectedFilter: Z } = (0, k.A)();
    (a.useEffect(() => {
        z || Z !== e_.Io.ALL || V(0 === D.UNREAD.length);
    }, [D, z, V, Z]),
        (function (e) {
            let { messagesByCategory: n } = e,
                t = a.useRef(!1),
                s = n.UNREAD.length > 0,
                { setOpenStateFromUnreads: i } = nt(),
                l = (0, o.bG)([_.A], () => _.A.hasLoadedEver);
            a.useLayoutEffect(() => {
                l && !t.current && ((t.current = !0), i(s));
            }, [i, s, l]);
        })({ messagesByCategory: D }),
        a.useEffect(() => {
            I.current = 0;
        }, [Z]));
    let J = a.useCallback(() => {
        let e = nr.filter((e) => O[e]).reduce((e, n) => e + D[n].length, 0),
            n = p.current?.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - e);
    }, [O, D]);
    return (
        a.useEffect(() => {
            z || E || I.current >= 2 || 0 >= J() || ((!W || M) && (I.current++, c?.(e_.VA.FILL_SCROLLER)));
        }, [J, c, z, E, W, M]),
        (0, R.Hi)({
            notificationCenterVariant: j,
            entrypoint: f,
            messages: t,
            unreadMessages: i,
            messagesByCategory: D,
            viewId: A,
        }),
        (0, s.jsx)("div", {
            className: l()(g, na.KQ),
            onClick: ni,
            onDoubleClick: ni,
            "aria-label": e["aria-label"],
            children: z
                ? d()
                : K
                  ? (0, s.jsx)(no, {})
                  : (0, s.jsx)(e4.hD, {
                        navigator: N,
                        children: (0, s.jsx)(e4.PR, {
                            children: (e) => {
                                let { ref: n, ...t } = e;
                                return (0, s.jsx)(e7.OZ, {
                                    ref: (e) => {
                                        ((p.current = e), (n.current = e?.getScrollerNode() ?? null));
                                    },
                                    className: l()(na.m4, h, { [na.xc]: x }),
                                    onScroll: C,
                                    sections: Y,
                                    sectionHeight: 0,
                                    rowHeight: H,
                                    renderRow: $,
                                    fade: !0,
                                    ...t,
                                });
                            },
                        }),
                    }),
        })
    );
}
var nd = t(823296);
let nu = [],
    nh = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: 88,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function ng(e) {
    let { includePanelSpacing: n } = e,
        t = (0, R.op)(),
        { selectedFilter: i } = (0, k.A)(),
        { readMessages: r, unreadMessages: c } = (0, o.cf)([_.A, T.Ay, b.A], () => {
            let e = _.A.getInboxMessages(),
                n = _.A.oldestDisplayedMessageId,
                t = [],
                s = [];
            for (let a of e)
                (0, L.EJ)({
                    messageId: a.id,
                    channelId: a.channelId,
                    guildId: a.guildId,
                    ReadStateStore_: T.Ay,
                    GuildStore_: b.A,
                }) || (0, D.z)(a, _.A.selectedItemInfo)
                    ? s.push(a)
                    : (v.default.compare(a.id, n) >= 0 || a.kind === e_.yL.MENTION) && t.push(a);
            return { readMessages: t, unreadMessages: s };
        }),
        { fetchState: u, loadMore: h } = (0, S.A)(i === e_.Io.BOOKMARKS),
        g = a.useCallback(
            (e) => {
                if (i === e_.Io.BOOKMARKS) {
                    e !== e_.VA.ON_OPEN && E.A.getBookmarksFetchState() === y.Z7.LOADED_HAS_MORE && h();
                    return;
                }
                i !== e_.Io.MENTIONS && C.A.loadMoreInbox({ viewId: t, loadingTrigger: e });
            },
            [i, t, h],
        ),
        { hasLoadedEver: m, canLoadMore: x } = (0, o.cf)([_.A], () => ({
            hasLoadedEver: _.A.hasLoadedEver,
            canLoadMore: _.A.canLoadMore({}),
        }));
    (a.useEffect(() => {
        x && !m && g(e_.VA.ON_OPEN);
    }, [x, m, g]),
        (function (e) {
            let { unreadChannelIds: n } = (0, L.U4)();
            a.useEffect(() => {
                null != e &&
                    n.forEach((e) => {
                        let n = M.A.getMessages(e),
                            t = n.last()?.id,
                            s = T.Ay.ackMessageId(e),
                            a = n.hasPresent() && n.ready && !n.cached;
                        null != t &&
                            null != s &&
                            a &&
                            v.default.compare(s, t) >= 0 &&
                            p.I_(
                                e,
                                {
                                    section: eL.JJy.NOTIFICATIONS_INBOX,
                                    object: eL.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: eL.btD.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, n]);
        })(m ? c : null));
    let N = (0, o.yK)([E.A], () => E.A.getSavedMessages()),
        f = a.useMemo(
            () =>
                N.flatMap((e) => {
                    let { message: n } = e;
                    return null == n
                        ? nu
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: O.A.getBasicChannel(n.channel_id)?.guild_id,
                                  kind: e_.yL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [N],
        ),
        w = nx(r, i),
        B = nx(c, i);
    ((0, I.Ay)(() => {
        A.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, U.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            n = _.A.getDevOverrides().navOnClick ?? !0;
        if (e !== U.U5.SIDEBAR || !1 === n) return;
        let { message: s, isUnread: a } = (function (e, n) {
            let t = e[e.length - 1]?.message,
                s = n[n.length - 1]?.message,
                a = s ?? t;
            if (null != a) return { message: a, isUnread: null != s };
            let i = _.A.getNotifyingChannelIds();
            if (null == i || 0 === i.length) return { message: null, isUnread: !1 };
            let l = i[0],
                r = T.Ay.getTrackedAckMessageId(l);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: v.default.atNextMillisecond(r), channel_id: l }, isUnread: T.Ay.hasUnread(l) ?? !1 };
        })(w, B);
        null != s &&
            C.A.inboxItemClick({
                message: s,
                channel: { id: s.channel_id },
                isUnread: a,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: t,
            });
    }),
        (0, I.l0)(() => {
            A.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        }));
    let K = (0, e_.Yw)(i);
    return (0, s.jsx)("nav", {
        className: l()(nd.kL, { [nd.Yu]: n }),
        children: (0, s.jsxs)(d.F, {
            forceLevel: 1,
            component: (0, s.jsx)(j.Ay, { hasSubheader: !0, guild: K, ...nh }),
            children: [
                i === e_.Io.ALL && (0, s.jsx)(nI, { hideBanner: !m }),
                (0, s.jsx)(nc, {
                    className: nd.cl,
                    renderMessageGroup: np,
                    messages: i === e_.Io.BOOKMARKS ? f : w,
                    unreadMessages: i === e_.Io.BOOKMARKS ? [] : B,
                    isLoadingMessages: i === e_.Io.BOOKMARKS && (u === y.Z7.LOADING || u === y.Z7.LOADED_HAS_MORE),
                    listName: "notifications-inbox",
                    renderLoadingState: nA,
                    ignoreGrouping: i === e_.Io.BOOKMARKS,
                    loadMore: g,
                }),
            ],
        }),
    });
}
function nm(e) {
    return (0, s.jsx)(R.GM, { children: (0, s.jsx)(ng, { ...e }) });
}
function nx(e, n) {
    return a.useMemo(() => {
        if (0 === e.length) return nu;
        switch (n) {
            case e_.Io.BOOKMARKS:
                return nu;
            case e_.Io.MENTIONS:
                return e.filter((e) => {
                    let { id: n, kind: t } = e;
                    return !(v.default.age(n) > e_.V$) && t === e_.yL.MENTION;
                });
            case e_.Io.ALL:
                return e.filter((e) => {
                    let { id: n } = e;
                    return !(v.default.age(n) > e_.V$);
                });
            default:
                return nu;
        }
    }, [e, n]);
}
function nA() {
    return (0, s.jsx)(X, {});
}
function np(e, n) {
    return (0, s.jsx)(e0, { message: e[0], isUnread: n, messageCount: e.length }, e[0].id);
}
function nI(e) {
    let { hideBanner: n } = e;
    return B((e) => e.shouldHide()) || n
        ? (0, s.jsx)("div", { className: l()(nd.dl, nd.jD) })
        : (0, s.jsx)("div", {
              className: nd.dl,
              children: (0, s.jsxs)("div", {
                  className: nd.XD,
                  children: [
                      (0, s.jsx)(u.E, {
                          variant: "body-sm/medium",
                          color: "text-feedback-positive",
                          className: nd.vi,
                          children: eD.intl.string(eD.t["6XMM+D"]),
                      }),
                      (0, s.jsx)(h.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                  ],
              }),
          });
}
function nN() {
    let [e, n] = (0, a.useState)(!1),
        { analyticsLocations: t } = (0, f.Ay)(N.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)(g.m, {
        asContainer: !0,
        position: "bottom",
        text: eD.intl.string(eD.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, s.jsx)(m.D, {
            className: nd.aY,
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            onClick: () => {
                (0, L.tZ)(t);
            },
            children: (0, s.jsx)(x.SettingsIcon, {
                size: "xs",
                color: e ? c.A.colors.INTERACTIVE_TEXT_HOVER.css : c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
            }),
        }),
    });
}
