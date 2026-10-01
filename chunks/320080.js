(t.r(n), t.d(n, { SettingsButton: () => nI, default: () => ng }), t(321073));
var s = t(477900),
    i = t(582128),
    a = t(503698),
    l = t.n(a),
    r = t(202091),
    o = t(17928),
    c = t(661531),
    d = t(707554),
    u = t(834730),
    h = t(143838),
    g = t(866665),
    m = t(939249),
    x = t(625903),
    p = t(73153),
    A = t(334738),
    I = t(964486),
    N = t(793574),
    f = t(688810),
    j = t(960628),
    E = t(85109),
    y = t(734057),
    S = t(71393),
    O = t(232835),
    T = t(573163),
    b = t(935208),
    U = t(851109),
    v = t(706341),
    M = t(932883),
    C = t(599486),
    R = t(310031),
    k = t(394953),
    L = t(989342),
    _ = t(196765);
let w = (0, _.v)((e, n) => ({
    hasNoUnreads: !1,
    shouldHide: () => !n().hasNoUnreads,
    setInboxReadState: (t) => {
        t !== n().hasNoUnreads && e({ hasNoUnreads: t });
    },
}));
var D = t(331322),
    B = t(775602),
    G = t(645908);
function K(e) {
    let { withHeader: n = !0, size: t = 15 } = e,
        i = (0, o.bG)([B.Ay], () => B.Ay.useReducedMotion);
    return (0, s.jsxs)(D.B, {
        gap: 4,
        children: [
            n &&
                (0, s.jsx)("div", {
                    className: l()(G.iE, { [G.cb]: i }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, s.jsx)(z, { className: l()(G.nq, G.NX) }),
                }),
            Array.from({ length: t }).map((e, n) => (0, s.jsx)(X, {}, n)),
        ],
    });
}
function z(e) {
    let { className: n } = e;
    return (0, s.jsx)("div", { className: l()(G.n8, n) });
}
function X() {
    let e = (0, o.bG)([B.Ay], () => B.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: l()(G.iE, { [G.cb]: e }),
        children: [
            (0, s.jsx)("div", { className: l()(G.my, G.NX) }),
            (0, s.jsxs)("div", {
                className: G.U0,
                children: [
                    (0, s.jsx)(z, { className: l()(G.Md, G.NX) }),
                    (0, s.jsx)(z, { className: l()(G.nq, G.NX) }),
                    (0, s.jsx)(z, { className: l()(G.xs, G.NX) }),
                ],
            }),
        ],
    });
}
var Y = t(806163),
    P = t(3026),
    H = t(890856),
    $ = t(276293),
    F = t(778712),
    W = t(559106),
    V = t(297264),
    Z = t(812993),
    J = t(191023),
    q = t(477262),
    Q = t(642846),
    ee = t(797285),
    en = t(983851),
    et = t(442433),
    es = t(47167),
    ei = t(713654),
    ea = t(427930),
    el = t(427209),
    er = t(763754),
    eo = t(438729),
    ec = t(606049),
    ed = t(812299),
    eu = t(943220),
    eh = t(439762),
    eg = t(995273),
    em = t(854627),
    ex = t(95701),
    ep = t(260509),
    eA = t(860071);
let eI = (0, _.v)((e, n) => ({
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
var eN = t(922016),
    ef = t(305866),
    ej = t(933832),
    eE = t(606096),
    ey = t(997146),
    eS = t(980707),
    eO = t(477782),
    eT = t(782603),
    eb = t(461678),
    eU = t(880457),
    ev = t(164684),
    eM = t(738125),
    eC = t(914703),
    eR = t(849077),
    ek = t(652215),
    eL = t(375708),
    e_ = t(230049);
let ew = {
    [eR.Th.MENTION]: [eR.kR.SETTINGS],
    [eR.Th.REPLY]: [eR.kR.SETTINGS],
    [eR.Th.REACTION]: [eR.kR.SETTINGS],
    [eR.Th.ANNOUNCEMENT]: [eR.kR.SETTINGS],
    [eR.Th.MESSAGE]: [eR.kR.SETTINGS],
};
function eD(e) {
    let { label: n, onClick: t, message: i, Icon: a, interactionType: l } = e,
        r = (0, M.op)();
    return (0, s.jsx)(g.m, {
        text: n,
        position: "top",
        spacing: 4,
        asContainer: !0,
        children: (0, s.jsx)(m.D, {
            className: e_.XI,
            onClick: (e) => {
                ((0, M.Ml)({ message: i, interactionType: l, viewId: r }), e.stopPropagation(), t(i));
            },
            children: (0, s.jsx)(a, { size: "xs", color: "currentColor", className: e_.gE }),
        }),
    });
}
function eB(e) {
    let { channel: n, message: t, label: a, Icon: l, Menu: r, interactionType: o, actionType: c } = e,
        d = (0, M.op)(),
        [u, h] = (0, i.useState)(!1),
        x = (0, i.useRef)(null),
        { openMenu: p, closeMenu: A } = eI();
    return (0, s.jsx)(eN.Y, {
        shouldShow: u,
        animation: eN.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: x,
        onRequestClose: function () {
            (h(!1), A(t.id, c));
        },
        renderPopout: (e) =>
            (0, s.jsx)(ef.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: x,
                children: (0, s.jsx)(r, { "data-menu-migrated": !0, renderPopoutProps: e, channel: n, message: t }),
            }),
        children: (e) =>
            (0, s.jsx)(g.m, {
                text: a,
                position: "top",
                spacing: 4,
                asContainer: !0,
                children: (0, s.jsx)(m.D, {
                    innerRef: x,
                    className: e_.XI,
                    onClick: (e) => {
                        let n;
                        ((0, M.Ml)({ message: t, interactionType: o, viewId: d }),
                            e.stopPropagation(),
                            h((n = !u)),
                            n ? p(t.id, c) : A(t.id, c));
                    },
                    children: (0, s.jsx)(l, {
                        ...e,
                        message: t,
                        "aria-label": a,
                        className: e_.gE,
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
            }),
    });
}
let eG = {
    [eR.kR.ACK]: {
        type: "standard",
        Icon: ej.CheckmarkLargeIcon,
        label: eL.intl.string(eL.t.e6RscS),
        onClick: (e) => {
            (p.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                A.ack(
                    e.channel_id,
                    { object: ek.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: ek.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                ));
        },
        interactionType: M.X8.ACK,
    },
    [eR.kR.BOOKMARK]: {
        type: "menu",
        label: eL.intl.string(eL.t["9p3D9p"]),
        Icon: (e) =>
            null != E.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, s.jsx)(eE.BookmarkIcon, { ...e })
                : (0, s.jsx)(ey.c, { ...e }),
        interactionType: M.X8.BOOKMARK,
        Menu: (e) => {
            let { message: n, renderPopoutProps: t } = e,
                i = (0, o.bG)([E.A], () => E.A.getSavedMessage(n.channel_id, n.id)),
                a = (0, eU.P)({ message: n, savedMessage: i, source: eM.r.NOTIFICATIONS_INBOX });
            return (0, s.jsxs)(eS.W, {
                "data-menu-migrated-auto": !0,
                ...t,
                navId: "message-reminder-create",
                "aria-label": eL.intl.string(eL.t.mJ3P0N),
                onClose: t.closePopout,
                onSelect: () => null,
                children: [
                    null != i
                        ? (0, s.jsx)(eO.Dr, {
                              id: "remove-from-for-later",
                              label: eL.intl.string(eL.t.SvXS1Z),
                              icon: eE.BookmarkIcon,
                              leadingAccessory: { type: "icon", icon: eE.BookmarkIcon },
                              action: () =>
                                  (0, ev.x)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: i.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, s.jsx)(eO.Dr, {
                              id: "create-bookmark",
                              label: eL.intl.string(eL.t["9p3D9p"]),
                              icon: ey.c,
                              leadingAccessory: { type: "icon", icon: ey.c },
                              action: () =>
                                  (0, ev.Y)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      displayToast: !0,
                                      source: eM.r.NOTIFICATIONS_INBOX,
                                  }),
                          }),
                    (0, s.jsx)(eO.bX, {}),
                    a,
                ],
            });
        },
    },
    [eR.kR.SETTINGS]: {
        type: "menu",
        Icon: eT.BellIcon,
        label: eL.intl.string(eL.t.h850Ss),
        interactionType: M.X8.SETTINGS,
        Menu: (e) => {
            let { channel: n, renderPopoutProps: t } = e;
            return n.isThread()
                ? (0, s.jsx)(eC.A, { ...t, channel: n, navId: "thread-context", label: eL.intl.string(eL.t["1NBjqb"]) })
                : (0, s.jsx)(eb.A, {
                      ...t,
                      channel: n,
                      navId: "channel-context",
                      label: eL.intl.string(eL.t.Xm41aV),
                      includeGuildMute: !0,
                  });
        },
    },
};
function eK(e) {
    let n,
        { message: t, channel: a, isUnread: l } = e,
        r =
            ((n = (0, k.i3)()),
            (0, i.useMemo)(() => {
                let e = eR.Th.MENTION,
                    t = new Set();
                return (
                    l && t.add(eR.kR.ACK), n && t.add(eR.kR.BOOKMARK), ew[e].forEach((e) => t.add(e)), Array.from(t)
                );
            }, [t, l, n]));
    return (0, s.jsx)(D.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: e_.o1,
        children: r.map((e) => {
            let n = eG[e];
            switch (n.type) {
                case "standard":
                    return (0, s.jsx)(eD, { ...n, actionType: e, message: t }, e);
                case "menu":
                    return (0, s.jsx)(eB, { ...n, actionType: e, channel: a, message: t }, e);
            }
        }),
    });
}
var ez = t(97808),
    eX = t(573435),
    eY = t(190460),
    eP = t(185864);
function eH(e) {
    let {
            children: n,
            size: t,
            onClick: a,
            onMouseDown: r,
            onKeyDown: o,
            onContextMenu: c,
            onMouseEnter: d,
            onMouseLeave: u,
            className: h,
            ariaHidden: g,
            avatarDecoration: x,
            specs: p,
            cornerIconUrl: A,
            cornerIconOffsetX: I,
            cornerIconOffsetY: N,
            ariaLabel: f,
        } = e,
        j = { width: (0, F.FT)(t), height: (0, F.FT)(t) },
        E = (0, i.useId)(),
        y = p.size * eY.Xq,
        S =
            null != x &&
            (0, s.jsxs)("svg", {
                width: y,
                height: y,
                viewBox: `0 0 ${y} ${y}`,
                className: eP.DX,
                "aria-hidden": !0,
                children: [
                    (0, s.jsxs)("mask", {
                        id: E,
                        children: [
                            (0, s.jsx)("rect", { x: 0, y: 0, width: y, height: y, fill: "white" }),
                            null != A &&
                                (function (e, n) {
                                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: a,
                                            width: l,
                                            x: r,
                                            y: o,
                                        } = (function (e, n, t, s) {
                                            let { height: i, width: a, x: l, y: r } = eV(e, t, s),
                                                o = (n - e.size) / 2;
                                            return { width: a, height: i, x: l + o, y: r + o };
                                        })(e, n, t, i);
                                    return (0, s.jsx)("rect", {
                                        mask: `url(#${eX.hW.SQUIRCLE})`,
                                        height: a,
                                        width: l,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(p, y, I, N),
                        ],
                    }),
                    (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: y,
                        height: y,
                        mask: `url(#${E})`,
                        children: (0, s.jsx)("img", { className: eP.M, src: x, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != a || null != r
        ? (0, s.jsxs)(m.D, {
              className: l()(eP.iE, eP.Wn, h),
              style: j,
              onClick: a,
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
              className: l()(eP.iE, h),
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
function e$(e) {
    let {
            src: n,
            size: t,
            "aria-hidden": a = !1,
            "aria-label": r,
            imageClassName: o,
            cornerIconUrl: c,
            cornerIconOffsetX: d = 0,
            cornerIconOffsetY: u = 0,
        } = e,
        h = (0, F.Kj)(t),
        g = h.size,
        m = (0, i.useId)();
    return (0, s.jsx)(eH, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: h,
        children: (0, s.jsxs)("svg", {
            width: g + d,
            height: g + u,
            viewBox: `0 0 ${g + d} ${g + u}`,
            className: l()(eP.dK, eP.JW),
            "aria-hidden": !0,
            children: [
                (0, s.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, s.jsx)("circle", { cx: h.size / 2, cy: h.size / 2, r: h.size / 2, fill: "white" }),
                        null != c &&
                            (function (e, n, t) {
                                let { height: i, width: a, x: l, y: r } = eV(e, n, t);
                                return (0, s.jsx)("rect", {
                                    mask: `url(#${eX.hW.SQUIRCLE})`,
                                    height: i,
                                    width: a,
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
                    children: (0, s.jsx)(ez.d9, { src: n, className: o, isSpeaking: !1 }),
                }),
                null != c &&
                    (0, s.jsx)("foreignObject", {
                        ...eW(h, d, u),
                        mask: `url(#${eX.hW.SQUIRCLE})`,
                        children: (0, s.jsx)("img", { src: c, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eF(e) {
    let {
            src: n,
            size: t,
            "aria-hidden": a = !1,
            "aria-label": r,
            cornerIconUrl: o,
            cornerIconOffsetX: c = 0,
            cornerIconOffsetY: d = 0,
        } = e,
        u = (0, i.useId)(),
        h = (0, i.useId)(),
        g = (0, F.Kj)(t),
        m = g.size + c,
        x = g.size + d,
        p = eV(g, c, d),
        A = eW(g, c, d);
    return (0, s.jsx)(eH, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: g,
        children: (0, s.jsxs)("svg", {
            width: m,
            height: x,
            viewBox: `0 0 ${m} ${x}`,
            className: l()(eP.dK, eP.JW),
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
                            mask: `url(#${eX.hW.SQUIRCLE})`,
                        }),
                        (0, s.jsx)("circle", {
                            cx: p.x + p.width / 2,
                            cy: p.y + p.height / 2,
                            r: p.width / 2,
                            fill: "black",
                        }),
                    ],
                }),
                (0, s.jsx)("mask", {
                    id: h,
                    children: (0, s.jsx)("circle", {
                        cx: A.x + A.width / 2,
                        cy: A.y + A.height / 2,
                        r: A.width / 2,
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
                            className: eP.yA,
                            children: (0, s.jsx)("img", {
                                src: n ?? void 0,
                                alt: " ",
                                className: eP.my,
                                "aria-hidden": !0,
                            }),
                        },
                        n,
                    ),
                }),
                null != o &&
                    (0, s.jsx)("foreignObject", {
                        ...A,
                        mask: `url(#${h})`,
                        children: (0, s.jsx)("img", { src: o, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eW(e, n, t) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + n, y: e.size - 16 - e.offset + t };
}
function eV(e, n, t) {
    let s = eW(e, n, t),
        i = s.x - 2,
        a = s.y - 2;
    return { width: s.height + 4, height: s.width + 4, x: i, y: a };
}
function eZ(e) {
    let { message: n, channel: t, focusProps: a, isSelected: r, isUnread: c, messageCount: d } = e,
        h = t.type === ek.rbe.UNKNOWN ? $.N : (0, ei.gU)(t, null),
        g = (0, es.Ay)(t, !1),
        m = (0, o.bG)([S.A], () => S.A.getGuild(t.getGuildId())),
        { nick: x, colorString: p } = (0, er.Ay)(n),
        { avatarSrc: A, eventHandlers: I } = (0, em.A)({
            userId: n.author.id,
            size: F._3.SIZE_32,
            guildId: m?.id,
            animateOnHover: !0,
        }),
        N = t.type !== ek.rbe.GUILD_ANNOUNCEMENT || null == m,
        f = t.isPrivate() ? d : +!!n.mentioned,
        j = c && f > 0,
        E = (0, ed.y)({ channel: t, message: n, user: n.author, compact: !0, isRepliedMessage: !0 }),
        y = (0, s.jsx)("div", {
            className: e_.Ys,
            inert: !0,
            children: (0, s.jsx)(eu.A, {
                channel: t,
                message: n,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: e_.Xh,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != m && eA.A.requestMember(m.id, n.author.id);
        }, [m, n.author.id]),
        (0, s.jsx)(W.vN, {
            ...a,
            children: (0, s.jsxs)("div", {
                onMouseLeave: I.onMouseLeave,
                onMouseEnter: I.onMouseEnter,
                className: e_.zC,
                children: [
                    c && !r && (0, s.jsx)("div", { className: e_.Zm }),
                    (0, s.jsx)(D.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: N
                            ? (0, s.jsx)(e$, {
                                  "aria-label": "User Avatar",
                                  src: A,
                                  size: F._3.SIZE_32,
                                  cornerIconUrl: null != m ? (0, ep.Iv)(m, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, s.jsx)(eF, {
                                  "aria-label": "Guild Icon",
                                  src: (0, ep.Iv)(m, 32),
                                  size: F._3.SIZE_32,
                                  cornerIconUrl: n.author.getAvatarURL(m.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, s.jsxs)(D.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, s.jsxs)(D.B, {
                                direction: "horizontal",
                                gap: 4,
                                style: { whiteSpace: "nowrap", minWidth: 0, justifyContent: "space-between" },
                                children: [
                                    N
                                        ? (0, s.jsxs)("div", {
                                              className: e_.ZR,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: e_.Xh,
                                                      style: { color: p ?? void 0 },
                                                      children: (0, s.jsx)(P.A, { children: y }),
                                                  }),
                                                  E,
                                              ],
                                          })
                                        : (0, s.jsx)(P.A, {
                                              children: (0, s.jsx)(V.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: p ?? void 0 },
                                                  className: e_.Xh,
                                                  children: m.name,
                                              }),
                                          }),
                                    (0, s.jsxs)(D.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, s.jsx)(eK, { message: n, channel: t, isUnread: c }),
                                            j
                                                ? (0, s.jsx)(Z.hV, { className: e_.WK, count: f })
                                                : (0, s.jsx)(eJ, { message: n }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(D.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: l()(e_.HA, { [e_.gy]: c, [e_.wH]: r }),
                                children: [
                                    null !== h && (0, s.jsx)(h, { size: "xxs", className: e_.p4 }),
                                    (0, s.jsxs)(u.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: l()(e_.HA, { [e_.gy]: c, [e_.wH]: r }),
                                        children: [g, !N && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(eq, { message: n, isUnread: c, isSelected: r, channel: t }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function eJ(e) {
    let { message: n } = e,
        t = (0, eg.jb)(n.timestamp.getTime());
    return (0, s.jsx)(ec.A, {
        timestamp: n.timestamp,
        className: e_.vE,
        isEdited: n.isEdited(),
        isInline: !0,
        children: t,
    });
}
function eq(e) {
    let { message: n, channel: t, isUnread: a, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: n, isUnread: t, isSelected: a } = e,
                { content: r } = (0, eh.A)(n, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, i.useMemo)(() => {
                let e,
                    i = "" === n.content,
                    o = n.embeds.some((e) => e.type === ek.Auw.GIFV),
                    c = ((e = n.embeds.some((e) => e.type === ek.Auw.GIFV)), n.attachments.length + +!!e),
                    d = (0, ea.A)(n),
                    u = n.stickerItems.length > 0,
                    h = n.isPoll(),
                    g = n.type === ek.lAJ.POLL_RESULT,
                    m = n.hasFlag(ek.pr7.IS_VOICE_MESSAGE),
                    x = n.type === ek.lAJ.USER_JOIN,
                    p = null;
                1 === c
                    ? (p = J.ImageIcon)
                    : c > 1
                      ? (p = q.s)
                      : d
                        ? (p = el.A)
                        : h || g
                          ? (p = Q.Y)
                          : u
                            ? (p = ee.t)
                            : m && (p = en.H);
                let A = !0,
                    I = null;
                return (
                    i
                        ? d
                            ? (I = eL.intl.string(eL.t["9ddYKt"]))
                            : h
                              ? ((A = !1), (I = n.poll?.question.text))
                              : (I = g
                                    ? eL.intl.string(eL.t.sad2PH)
                                    : o
                                      ? eL.intl.string(eL.t.p0oZmy)
                                      : c > 1
                                        ? eL.intl.formatToPlainString(eL.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? eL.intl.string(eL.t.tCcq5p)
                                          : u
                                            ? eL.intl.format(eL.t.zY4v1B, { stickerName: n.stickerItems[0].name })
                                            : m
                                              ? eL.intl.string(eL.t.slFYgi)
                                              : x
                                                ? eL.intl.string(eL.t.Yvvfw9)
                                                : eL.intl.string(eL.t.sDqZHL))
                        : ((A = !1),
                          (I = (0, s.jsx)(eo.Ay, {
                              content: r,
                              message: n,
                              compact: !1,
                              className: l()(e_.iU, { [e_.gy]: t, [e_.wH]: a }),
                          }))),
                    i &&
                        (I = (0, s.jsx)("div", {
                            className: l()(e_.iU, { [e_.gy]: t, [e_.wH]: a, [e_.QP]: A }),
                            children: I,
                        })),
                    { previewContent: I, Icon: p }
                );
            }, [n, r, t, a]);
        })({ message: n, channel: t, isUnread: a, isSelected: r });
    return (0, s.jsxs)(D.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, s.jsx)(c, { size: "xxs", className: e_.p4 }),
            (0, s.jsx)(u.E, { variant: "text-sm/normal", lineClamp: 1, className: e_.iU, children: o }),
        ],
    });
}
let eQ = (0, i.memo)(
    function (e) {
        let { message: n, isUnread: a, messageCount: r = 1 } = e,
            c = n.message,
            d = (0, M.op)(),
            { params: u } = (0, Y.W5)(),
            h = (0, o.bG)([y.A], () => {
                if (null == c) return null;
                let e = y.A.getChannel(n.channelId);
                return null != e
                    ? e
                    : new ex.jb({
                          id: n.channelId,
                          guild_id: n.guildId,
                          type: ek.rbe.UNKNOWN,
                          name: eL.intl.string(eL.t.J90oLW),
                      });
            }),
            g = eI((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: m } = (0, U.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = (0, es.Ay)(h),
            p = i.useMemo(() => `${c?.author.username}: ${x}`, [c?.author.username, x]);
        return null == c || null == h
            ? null
            : (0, s.jsx)(H.s, {
                  "aria-label": p,
                  className: l()(e_.FJ, { [e_.wH]: c.id === u.messageId, [e_.Yj]: g }),
                  onClick: () => {
                      v.A.inboxItemClick({
                          message: c,
                          channel: h,
                          isUnread: a,
                          isSidebar: m === U.U5.SIDEBAR,
                          viewId: d,
                      });
                  },
                  onContextMenu: (e) => {
                      (e.preventDefault(),
                          (0, M.Ml)({ interactionType: M.X8.CONTEXT_MENU, message: c, viewId: d }),
                          (0, et.L3)(
                              e,
                              async () => {
                                  let { default: e } = await Promise.all([
                                      t.e("393336"),
                                      t.e("703869"),
                                      t.e("648118"),
                                  ]).then(t.bind(t, 594005));
                                  return (n) => (0, s.jsx)(e, { ...n, channel: h, message: c, isUnread: a });
                              },
                              { disableClickTrap: !0 },
                          ));
                  },
                  children: (0, s.jsx)(eZ, {
                      message: c,
                      channel: h,
                      isSelected: c.id === u.messageId,
                      isUnread: a,
                      messageCount: r,
                  }),
              });
    },
    (e, n) => e.isUnread === n.isUnread && e.message.id === n.message.id && e.messageCount === n.messageCount,
);
var e0 = t(435558),
    e1 = t.n(e0),
    e3 = t(837381),
    e2 = t(847374),
    e4 = t(912592),
    e8 = t(821609),
    e6 = t(475825),
    e9 = t(928039),
    e7 = t(625494);
let e5 = { [eR.Ur.UNREAD]: !0, [eR.Ur.TODAY]: !0, [eR.Ur.YESTERDAY]: !1, [eR.Ur.OLDER]: !1 },
    ne = { [eR.Ur.UNREAD]: !0, [eR.Ur.TODAY]: !1, [eR.Ur.YESTERDAY]: !1, [eR.Ur.OLDER]: !1 },
    nn = (0, _.v)((e, n) => ({
        messageCategoryOpenStates: ne,
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
                    e({ lastInitializedWithUnreads: t, messageCategoryOpenStates: t ? ne : e5 }));
        },
    }));
var nt = t(871423),
    ns = t(875436);
function ni(e) {
    e.stopPropagation();
}
function na(e) {
    let { group: n, isOpen: t, toggleOpenedState: i } = e;
    return (0, s.jsx)(m.D, {
        "aria-expanded": t,
        onClick: i,
        className: l()(ns.TP, { [ns.yZ]: !t }),
        children: (0, s.jsxs)(D.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, s.jsx)(V.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: ns.P7,
                    children: (0, e0.capitalize)(eL.intl.string(eR.v7[n]).toLowerCase()),
                }),
                (0, s.jsx)(e2.a, { size: "xxs", className: ns.ai }),
            ],
        }),
    });
}
let nl = [eR.Ur.UNREAD, eR.Ur.TODAY, eR.Ur.YESTERDAY, eR.Ur.OLDER];
function nr() {
    let { analyticsLocations: e } = (0, f.Ay)(N.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)("div", {
        className: ns.y7,
        children: (0, s.jsxs)(D.B, {
            gap: 24,
            align: "center",
            children: [
                (0, s.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, s.jsx)(e4.InboxIcon, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: c.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, s.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: eL.intl.string(nt.default["O+racd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(e8.$, {
                    variant: "secondary",
                    onClick: () => (0, k.tZ)(e),
                    text: eL.intl.string(nt.default.klSpfs),
                }),
            ],
        }),
    });
}
function no(e) {
    let n,
        {
            messages: t,
            unreadMessages: a,
            loadMore: r,
            renderLoadingState: c,
            renderMessageGroup: d,
            scrollerClassName: u,
            className: h,
            listName: g,
            ignoreGrouping: m = !1,
        } = e,
        x = (0, M.op)(),
        p = i.useRef(null),
        A = i.useRef(0),
        I = (0, e9.A)(g, p),
        { entrypoint: N, notificationCenterVariant: f } = (0, U.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: j,
            isLoadingComplete: E,
            hasLoadedEver: y,
        } = (0, o.cf)([R.A], () => ({
            isLoading: R.A.isLoading,
            isLoadingComplete: R.A.isLoadingComplete,
            hasLoadedEver: R.A.hasLoadedEver,
        })),
        { messageCategoryOpenStates: S, toggleOpenState: O } = nn(),
        v =
            ((n = (0, o.yK)([R.A], () => R.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)(
                [R.A, T.Ay],
                () => {
                    let e = R.A.getChannelInfoMap();
                    for (let t of n) {
                        let n = e[t];
                        if ((null == n || n.loadState === eR.Ve.UNLOADED) && T.Ay.hasUnread(t)) return !0;
                    }
                    return !1;
                },
                [n],
            ));
    i.useEffect(() => {
        function e() {
            p.current?.scrollPageUp({ animate: !0 });
        }
        function n() {
            p.current?.scrollPageDown({ animate: !0 });
        }
        return (
            e7._.subscribe(ek.jej.SCROLL_PAGE_DOWN, n),
            e7._.subscribe(ek.jej.SCROLL_PAGE_UP, e),
            () => {
                (e7._.unsubscribe(ek.jej.SCROLL_PAGE_DOWN, n), e7._.unsubscribe(ek.jej.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let L = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let n = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= n && r?.(eR.VA.USER_SCROLL);
        }, [r]),
        _ = i.useMemo(() => {
            let e = { [eR.Ur.UNREAD]: [], [eR.Ur.TODAY]: [], [eR.Ur.YESTERDAY]: [], [eR.Ur.OLDER]: [] },
                n = { [eR.Ur.UNREAD]: [], [eR.Ur.TODAY]: [], [eR.Ur.YESTERDAY]: [], [eR.Ur.OLDER]: [] },
                s = { [eR.Ur.UNREAD]: {}, [eR.Ur.TODAY]: {}, [eR.Ur.YESTERDAY]: {}, [eR.Ur.OLDER]: {} };
            function i(e, t) {
                e.kind === eR.yL.MENTION && null != e.guildId
                    ? n[t].push(e)
                    : e.channelId in s[t]
                      ? s[t][e.channelId].push(e)
                      : (s[t][e.channelId] = [e]);
            }
            return (
                (t.length > 0 || a.length > 0) &&
                    (e1().each(a, (e) => {
                        i(e, eR.Ur.UNREAD);
                    }),
                    e1().each(t, (e) => {
                        i(e, (0, k.i7)(e));
                    }),
                    e1().each(nl, (t) => {
                        [...Object.values(s[t]).map((e) => e.reverse()), ...n[t].map((e) => [e])]
                            .sort((e, n) => b.default.compare(n[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, a]),
        D = 0 === t.length && 0 === a.length && E,
        B = !y,
        G = i.useMemo(() => nl.filter((e) => _[e].length > 0), [_]),
        K = i.useMemo(() => {
            if (m)
                return [
                    ...a.map((e) => ({ type: "message", messageGroup: [e], isUnread: !0 })),
                    ...t.map((e) => ({ type: "message", messageGroup: [e], isUnread: !1 })),
                ];
            let e = [];
            for (let n of G)
                if ((e.push({ type: "section-header", category: n }), S[n]))
                    for (let t of _[n]) e.push({ type: "message", messageGroup: t, isUnread: n === eR.Ur.UNREAD });
            return e;
        }, [m, a, t, G, S, _]),
        z = i.useMemo(() => [K.length], [K.length]),
        X = i.useCallback((e, n) => (K[n]?.type === "section-header" ? 32 : 64), [K]),
        Y = i.useCallback(
            (e) => {
                let { row: n } = e,
                    t = K[n];
                return "section-header" === t.type
                    ? (0, s.jsx)(
                          na,
                          {
                              group: t.category,
                              isOpen: S[t.category],
                              toggleOpenedState: () => {
                                  let e = S[t.category];
                                  (O(t.category), (0, M.Ut)({ section: t.category, enabled: !e, viewId: x }));
                              },
                          },
                          t.category,
                      )
                    : d(t.messageGroup, t.isUnread);
            },
            [K, S, O, x, d],
        ),
        P = K[K.length - 1],
        H = P?.type === "section-header",
        $ = w((e) => e.setInboxReadState),
        { selectedFilter: F } = (0, C.A)();
    (i.useEffect(() => {
        B || F !== eR.Io.ALL || $(0 === _.UNREAD.length);
    }, [_, B, $, F]),
        (function (e) {
            let { messagesByCategory: n } = e,
                t = i.useRef(!1),
                s = n.UNREAD.length > 0,
                { setOpenStateFromUnreads: a } = nn(),
                l = (0, o.bG)([R.A], () => R.A.hasLoadedEver);
            i.useLayoutEffect(() => {
                l && !t.current && ((t.current = !0), a(s));
            }, [a, s, l]);
        })({ messagesByCategory: _ }),
        i.useEffect(() => {
            A.current = 0;
        }, [F]));
    let W = i.useCallback(() => {
        let e = nl.filter((e) => S[e]).reduce((e, n) => e + _[n].length, 0),
            n = p.current?.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - e);
    }, [S, _]);
    return (
        i.useEffect(() => {
            B || j || A.current >= 2 || 0 >= W() || ((!H || v) && (A.current++, r?.(eR.VA.FILL_SCROLLER)));
        }, [W, r, B, j, H, v]),
        (0, M.Hi)({
            notificationCenterVariant: f,
            entrypoint: N,
            messages: t,
            unreadMessages: a,
            messagesByCategory: _,
            viewId: x,
        }),
        (0, s.jsx)("div", {
            className: l()(h, ns.KQ),
            onClick: ni,
            onDoubleClick: ni,
            "aria-label": e["aria-label"],
            children: B
                ? c()
                : D
                  ? (0, s.jsx)(nr, {})
                  : (0, s.jsx)(e3.hD, {
                        navigator: I,
                        children: (0, s.jsx)(e3.PR, {
                            children: (e) => {
                                let { ref: n, ...t } = e;
                                return (0, s.jsx)(e6.OZ, {
                                    ref: (e) => {
                                        ((p.current = e), (n.current = e?.getScrollerNode() ?? null));
                                    },
                                    className: l()(ns.m4, u, { [ns.xc]: m }),
                                    onScroll: L,
                                    sections: z,
                                    sectionHeight: 0,
                                    rowHeight: X,
                                    renderRow: Y,
                                    fade: !0,
                                    ...t,
                                });
                            },
                        }),
                    }),
        })
    );
}
var nc = t(823296);
let nd = [],
    nu = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: eR.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function nh(e) {
    let { includePanelSpacing: n } = e,
        t = (0, M.op)(),
        { selectedFilter: a } = (0, C.A)(),
        { readMessages: r, unreadMessages: c } = (0, o.cf)([R.A, T.Ay, S.A], () => {
            let e = R.A.getInboxMessages(),
                n = R.A.oldestDisplayedMessageId,
                t = [],
                s = [];
            for (let i of e)
                (0, k.EJ)({
                    messageId: i.id,
                    channelId: i.channelId,
                    guildId: i.guildId,
                    ReadStateStore_: T.Ay,
                    GuildStore_: S.A,
                }) || (0, L.z)(i, R.A.selectedItemInfo)
                    ? s.push(i)
                    : (b.default.compare(i.id, n) >= 0 || i.kind === eR.yL.MENTION) && t.push(i);
            return { readMessages: t, unreadMessages: s };
        }),
        u = i.useCallback(
            (e) => {
                a !== eR.Io.BOOKMARKS && a !== eR.Io.MENTIONS && v.A.loadMoreInbox({ viewId: t, loadingTrigger: e });
            },
            [a, t],
        ),
        { hasLoadedEver: h, canLoadMore: g } = (0, o.cf)([R.A], () => ({
            hasLoadedEver: R.A.hasLoadedEver,
            canLoadMore: R.A.canLoadMore({}),
        }));
    (i.useEffect(() => {
        g && !h && u(eR.VA.ON_OPEN);
    }, [g, h, u]),
        (function (e) {
            let { unreadChannelIds: n } = (0, k.U4)();
            i.useEffect(() => {
                null != e &&
                    n.forEach((e) => {
                        let n = O.A.getMessages(e),
                            t = n.last()?.id,
                            s = T.Ay.ackMessageId(e),
                            i = n.hasPresent() && n.ready && !n.cached;
                        null != t &&
                            null != s &&
                            i &&
                            b.default.compare(s, t) >= 0 &&
                            A.ack(
                                e,
                                {
                                    section: ek.JJy.NOTIFICATIONS_INBOX,
                                    object: ek.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: ek.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, n]);
        })(h ? c : null));
    let m = (0, o.yK)([E.A], () => E.A.getSavedMessages()),
        x = i.useMemo(
            () =>
                m.flatMap((e) => {
                    let { message: n } = e;
                    return null == n
                        ? nd
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: y.A.getBasicChannel(n.channel_id)?.guild_id,
                                  kind: eR.yL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [m],
        ),
        N = nm(r, a),
        f = nm(c, a);
    ((0, I.Ay)(() => {
        p.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, U.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            n = R.A.getDevOverrides().navOnClick ?? !0;
        if (e !== U.U5.SIDEBAR || !1 === n) return;
        let { message: s, isUnread: i } = (function (e, n) {
            let t = e[e.length - 1]?.message,
                s = n[n.length - 1]?.message,
                i = s ?? t;
            if (null != i) return { message: i, isUnread: null != s };
            let a = R.A.getNotifyingChannelIds();
            if (null == a || 0 === a.length) return { message: null, isUnread: !1 };
            let l = a[0],
                r = T.Ay.getTrackedAckMessageId(l);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: b.default.atNextMillisecond(r), channel_id: l }, isUnread: T.Ay.hasUnread(l) ?? !1 };
        })(N, f);
        null != s &&
            v.A.inboxItemClick({
                message: s,
                channel: { id: s.channel_id },
                isUnread: i,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: t,
            });
    }),
        (0, I.l0)(() => {
            p.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        }));
    let _ = (0, eR.Yw)(a);
    return (0, s.jsx)("nav", {
        className: l()(nc.kL, { [nc.Yu]: n }),
        children: (0, s.jsxs)(d.F, {
            forceLevel: 1,
            component: (0, s.jsx)(j.Ay, { hasSubheader: !0, guild: _, ...nu }),
            children: [
                a === eR.Io.ALL && (0, s.jsx)(nA, { hideBanner: !h }),
                (0, s.jsx)(no, {
                    className: nc.cl,
                    renderMessageGroup: np,
                    messages: a === eR.Io.BOOKMARKS ? x : N,
                    unreadMessages: a === eR.Io.BOOKMARKS ? [] : f,
                    listName: "notifications-inbox",
                    renderLoadingState: nx,
                    ignoreGrouping: a === eR.Io.BOOKMARKS,
                    loadMore: u,
                }),
            ],
        }),
    });
}
function ng(e) {
    return (0, s.jsx)(M.GM, { children: (0, s.jsx)(nh, { ...e }) });
}
function nm(e, n) {
    return i.useMemo(() => {
        if (0 === e.length) return nd;
        switch (n) {
            case eR.Io.BOOKMARKS:
                return nd;
            case eR.Io.MENTIONS:
                return e.filter((e) => {
                    let { id: n, kind: t } = e;
                    return !(b.default.age(n) > eR.V$) && t === eR.yL.MENTION;
                });
            case eR.Io.ALL:
                return e.filter((e) => {
                    let { id: n } = e;
                    return !(b.default.age(n) > eR.V$);
                });
            default:
                return nd;
        }
    }, [e, n]);
}
function nx() {
    return (0, s.jsx)(K, {});
}
function np(e, n) {
    return (0, s.jsx)(eQ, { message: e[0], isUnread: n, messageCount: e.length }, e[0].id);
}
function nA(e) {
    let { hideBanner: n } = e;
    return w((e) => e.shouldHide()) || n
        ? (0, s.jsx)("div", { className: l()(nc.dl, nc.jD) })
        : (0, s.jsx)("div", {
              className: nc.dl,
              children: (0, s.jsxs)("div", {
                  className: nc.XD,
                  children: [
                      (0, s.jsx)(u.E, {
                          variant: "text-sm/medium",
                          color: "text-feedback-positive",
                          className: nc.vi,
                          children: eL.intl.string(eL.t["6XMM+D"]),
                      }),
                      (0, s.jsx)(h.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                  ],
              }),
          });
}
function nI() {
    let [e, n] = (0, i.useState)(!1),
        { analyticsLocations: t } = (0, f.Ay)(N.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)(g.m, {
        asContainer: !0,
        position: "bottom",
        text: eL.intl.string(eL.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, s.jsx)(m.D, {
            className: nc.aY,
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            onClick: () => {
                (0, k.tZ)(t);
            },
            children: (0, s.jsx)(x.SettingsIcon, {
                size: "xs",
                color: e ? c.A.colors.INTERACTIVE_TEXT_HOVER.css : c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
            }),
        }),
    });
}
