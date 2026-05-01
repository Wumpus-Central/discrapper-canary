t.r(n), t.d(n, { SettingsButton: () => np, default: () => nu }), t(321073);
var s = t(627968),
    i = t(64700),
    a = t(503698),
    l = t.n(a),
    r = t(785651),
    o = t(17928),
    c = t(661531),
    d = t(990078),
    u = t(707554),
    h = t(834730),
    g = t(143838),
    m = t(939249),
    x = t(625903),
    p = t(228366),
    A = t(334738),
    N = t(964486),
    f = t(793574),
    j = t(688810),
    I = t(83297),
    E = t(85109),
    y = t(734057),
    S = t(71393),
    O = t(232835),
    U = t(222823),
    T = t(935208),
    b = t(851109),
    v = t(706341),
    M = t(932883),
    C = t(599486),
    R = t(310031),
    L = t(394953),
    k = t(353640);
let _ = (0, k.v)((e, n) => ({
    hasNoUnreads: !1,
    shouldHide: () => !n().hasNoUnreads,
    setInboxReadState: (t) => {
        t !== n().hasNoUnreads && e({ hasNoUnreads: t });
    },
}));
var D = t(331322),
    w = t(775602),
    B = t(826733);
function G(e) {
    let { withHeader: n = !0, size: t = 15 } = e,
        i = (0, o.bG)([w.A], () => w.A.useReducedMotion);
    return (0, s.jsxs)(D.B, {
        gap: 4,
        children: [
            n &&
                (0, s.jsx)("div", {
                    className: l()(B.iE, { [B.cb]: i }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, s.jsx)(K, { className: l()(B.nq, B.NX) }),
                }),
            Array.from({ length: t }).map((e, n) => (0, s.jsx)(z, {}, n)),
        ],
    });
}
function K(e) {
    let { className: n } = e;
    return (0, s.jsx)("div", { className: l()(B.n8, n) });
}
function z() {
    let e = (0, o.bG)([w.A], () => w.A.useReducedMotion);
    return (0, s.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: l()(B.iE, { [B.cb]: e }),
        children: [
            (0, s.jsx)("div", { className: l()(B.my, B.NX) }),
            (0, s.jsxs)("div", {
                className: B.U0,
                children: [
                    (0, s.jsx)(K, { className: l()(B.Md, B.NX) }),
                    (0, s.jsx)(K, { className: l()(B.nq, B.NX) }),
                    (0, s.jsx)(K, { className: l()(B.xs, B.NX) }),
                ],
            }),
        ],
    });
}
var X = t(873263),
    Y = t(780645),
    P = t(890856),
    H = t(276293),
    $ = t(778712),
    W = t(187322),
    F = t(534514),
    V = t(777666),
    Z = t(191023),
    J = t(477262),
    q = t(642846),
    Q = t(797285),
    ee = t(983851),
    en = t(442433),
    et = t(47167),
    es = t(713654),
    ei = t(427930),
    ea = t(427209),
    el = t(763754),
    er = t(291812),
    eo = t(606049),
    ec = t(812299),
    ed = t(943220),
    eu = t(375199),
    eh = t(995273),
    eg = t(854627),
    em = t(95701),
    ex = t(260509),
    ep = t(860071);
let eA = (0, k.v)((e, n) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(n().openMenus).some((n) => null != e && n.startsWith(`${e}:`)),
    openMenu: (n, t) => {
        let s = `${n}:${t}`;
        e((e) => {
            let n = new Set(e.openMenus);
            return n.add(s), { openMenus: n };
        });
    },
    closeMenu: (n, t) => {
        let s = `${n}:${t}`;
        e((e) => {
            let n = new Set(e.openMenus);
            return n.delete(s), { openMenus: n };
        });
    },
}));
var eN = t(922016),
    ef = t(305866),
    ej = t(933832),
    eI = t(606096),
    eE = t(997146),
    ey = t(980707),
    eS = t(477782),
    eO = t(782603),
    eU = t(461678),
    eT = t(880457),
    eb = t(164684),
    ev = t(914703),
    eM = t(849077),
    eC = t(652215),
    eR = t(375708),
    eL = t(285618);
let ek = {
    [eM.Th.MENTION]: [eM.kR.SETTINGS],
    [eM.Th.REPLY]: [eM.kR.SETTINGS],
    [eM.Th.REACTION]: [eM.kR.SETTINGS],
    [eM.Th.ANNOUNCEMENT]: [eM.kR.SETTINGS],
    [eM.Th.MESSAGE]: [eM.kR.SETTINGS],
};
function e_(e) {
    let { label: n, onClick: t, message: i, Icon: a, interactionType: l } = e,
        r = (0, M.op)();
    return (0, s.jsx)(d.m, {
        text: n,
        position: "top",
        spacing: 4,
        asContainer: !0,
        children: (0, s.jsx)(m.D, {
            className: eL.XI,
            onClick: (e) => {
                (0, M.Ml)({ message: i, interactionType: l, viewId: r }), e.stopPropagation(), t(i);
            },
            children: (0, s.jsx)(a, { size: "xs", color: "currentColor", className: eL.gE }),
        }),
    });
}
function eD(e) {
    let { channel: n, message: t, label: a, Icon: l, Menu: r, interactionType: o, actionType: c } = e,
        u = (0, M.op)(),
        [h, g] = (0, i.useState)(!1),
        x = (0, i.useRef)(null),
        { openMenu: p, closeMenu: A } = eA();
    return (0, s.jsx)(eN.Y, {
        shouldShow: h,
        animation: eN.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: x,
        onRequestClose: () => {
            g(!1), A(t.id, c);
        },
        renderPopout: (e) =>
            (0, s.jsx)(ef.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: x,
                children: (0, s.jsx)(r, { "data-menu-migrated": !0, renderPopoutProps: e, channel: n, message: t }),
            }),
        children: (e) =>
            (0, s.jsx)(d.m, {
                text: a,
                position: "top",
                spacing: 4,
                asContainer: !0,
                children: (0, s.jsx)(m.D, {
                    innerRef: x,
                    className: eL.XI,
                    onClick: (e) => {
                        let n;
                        (0, M.Ml)({ message: t, interactionType: o, viewId: u }),
                            e.stopPropagation(),
                            g((n = !h)),
                            n ? p(t.id, c) : A(t.id, c);
                    },
                    children: (0, s.jsx)(l, {
                        ...e,
                        message: t,
                        "aria-label": a,
                        className: eL.gE,
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
            }),
    });
}
let ew = {
    [eM.kR.ACK]: {
        type: "standard",
        Icon: ej.A,
        label: eR.intl.string(eR.t.e6RscS),
        onClick: (e) => {
            p.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                A.ack(
                    e.channel_id,
                    { object: eC.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: eC.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: M.X8.ACK,
    },
    [eM.kR.BOOKMARK]: {
        type: "menu",
        label: eR.intl.string(eR.t["9p3D9p"]),
        Icon: (e) =>
            null != E.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, s.jsx)(eI.c, { ...e })
                : (0, s.jsx)(eE.c, { ...e }),
        interactionType: M.X8.BOOKMARK,
        Menu: (e) => {
            let { message: n, renderPopoutProps: t } = e,
                i = (0, o.bG)([E.A], () => E.A.getSavedMessage(n.channel_id, n.id)),
                a = (0, eT.P)({ message: n, savedMessage: i });
            return (0, s.jsxs)(ey.W, {
                "data-menu-migrated-auto": !0,
                ...t,
                navId: "message-reminder-create",
                "aria-label": eR.intl.string(eR.t.mJ3P0N),
                onClose: t.closePopout,
                onSelect: () => null,
                children: [
                    null != i
                        ? (0, s.jsx)(eS.Dr, {
                              id: "remove-from-for-later",
                              label: eR.intl.string(eR.t.SvXS1Z),
                              icon: eI.c,
                              leadingAccessory: { type: "icon", icon: eI.c },
                              action: () =>
                                  (0, eb.x)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: i.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, s.jsx)(eS.Dr, {
                              id: "create-bookmark",
                              label: eR.intl.string(eR.t["9p3D9p"]),
                              icon: eE.c,
                              leadingAccessory: { type: "icon", icon: eE.c },
                              action: () => (0, eb.Y)({ channelId: n.channel_id, messageId: n.id, displayToast: !0 }),
                          }),
                    (0, s.jsx)(eS.bX, {}),
                    a,
                ],
            });
        },
    },
    [eM.kR.SETTINGS]: {
        type: "menu",
        Icon: eO.X,
        label: eR.intl.string(eR.t.h850Ss),
        interactionType: M.X8.SETTINGS,
        Menu: (e) => {
            let { channel: n, renderPopoutProps: t } = e;
            return n.isThread()
                ? (0, s.jsx)(ev.A, { ...t, channel: n, navId: "thread-context", label: eR.intl.string(eR.t["1NBjqb"]) })
                : (0, s.jsx)(eU.A, {
                      ...t,
                      channel: n,
                      navId: "channel-context",
                      label: eR.intl.string(eR.t.Xm41aV),
                      includeGuildMute: !0,
                  });
        },
    },
};
function eB(e) {
    let n,
        { message: t, channel: a, isUnread: l } = e,
        r =
            ((n = (0, L.i3)()),
            (0, i.useMemo)(() => {
                let e = eM.Th.MENTION,
                    t = new Set();
                return l && t.add(eM.kR.ACK), n && t.add(eM.kR.BOOKMARK), ek[e].forEach((e) => t.add(e)), Array.from(t);
            }, [t, l, n]));
    return (0, s.jsx)(D.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: eL.o1,
        children: r.map((e) => {
            let n = ew[e];
            switch (n.type) {
                case "standard":
                    return (0, s.jsx)(e_, { ...n, actionType: e, message: t }, e);
                case "menu":
                    return (0, s.jsx)(eD, { ...n, actionType: e, channel: a, message: t }, e);
            }
        }),
    });
}
var eG = t(97808),
    eK = t(573435),
    ez = t(190460),
    eX = t(282291);
function eY(e) {
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
            cornerIconOffsetX: N,
            cornerIconOffsetY: f,
            ariaLabel: j,
        } = e,
        I = { width: (0, $.FT)(t), height: (0, $.FT)(t) },
        E = (0, i.useId)(),
        y = p.size * ez.Xq,
        S =
            null != x &&
            (0, s.jsxs)("svg", {
                width: y,
                height: y,
                viewBox: `0 0 ${y} ${y}`,
                className: eX.DX,
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
                                            let { height: i, width: a, x: l, y: r } = eW(e, t, s),
                                                o = (n - e.size) / 2;
                                            return { width: a, height: i, x: l + o, y: r + o };
                                        })(e, n, t, i);
                                    return (0, s.jsx)("rect", {
                                        mask: `url(#${eK.hW.SQUIRCLE})`,
                                        height: a,
                                        width: l,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(p, y, N, f),
                        ],
                    }),
                    (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: y,
                        height: y,
                        mask: `url(#${E})`,
                        children: (0, s.jsx)("img", { className: eX.M, src: x, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != a || null != r
        ? (0, s.jsxs)(m.D, {
              className: l()(eX.iE, eX.Wn, h),
              style: I,
              onClick: a,
              onContextMenu: c,
              onMouseDown: r,
              onKeyDown: o,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": j ?? void 0,
              "aria-hidden": g,
              children: [n, S],
          })
        : (0, s.jsxs)("div", {
              className: l()(eX.iE, h),
              style: I,
              onContextMenu: c ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": j ?? void 0,
              "aria-hidden": g,
              children: [n, S],
          });
}
function eP(e) {
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
        h = (0, $.Kj)(t),
        g = h.size,
        m = (0, i.useId)();
    return (0, s.jsx)(eY, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: h,
        children: (0, s.jsxs)("svg", {
            width: g + d,
            height: g + u,
            viewBox: `0 0 ${g + d} ${g + u}`,
            className: l()(eX.dK, eX.JW),
            "aria-hidden": !0,
            children: [
                (0, s.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, s.jsx)("circle", { cx: h.size / 2, cy: h.size / 2, r: h.size / 2, fill: "white" }),
                        null != c &&
                            (function (e, n, t) {
                                let { height: i, width: a, x: l, y: r } = eW(e, n, t);
                                return (0, s.jsx)("rect", {
                                    mask: `url(#${eK.hW.SQUIRCLE})`,
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
                    children: (0, s.jsx)(eG.d9, { src: n, className: o, isSpeaking: !1 }),
                }),
                null != c &&
                    (0, s.jsx)("foreignObject", {
                        ...e$(h, d, u),
                        mask: `url(#${eK.hW.SQUIRCLE})`,
                        children: (0, s.jsx)("img", { src: c, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eH(e) {
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
        g = (0, $.Kj)(t),
        m = g.size + c,
        x = g.size + d,
        p = eW(g, c, d),
        A = e$(g, c, d);
    return (0, s.jsx)(eY, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: g,
        children: (0, s.jsxs)("svg", {
            width: m,
            height: x,
            viewBox: `0 0 ${m} ${x}`,
            className: l()(eX.dK, eX.JW),
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
                            mask: `url(#${eK.hW.SQUIRCLE})`,
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
                            className: eX.yA,
                            children: (0, s.jsx)("img", {
                                src: n ?? void 0,
                                alt: " ",
                                className: eX.my,
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
function e$(e, n, t) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + n, y: e.size - 16 - e.offset + t };
}
function eW(e, n, t) {
    let s = e$(e, n, t),
        i = s.x - 2,
        a = s.y - 2;
    return { width: s.height + 4, height: s.width + 4, x: i, y: a };
}
function eF(e) {
    let { message: n, channel: t, focusProps: a, isSelected: r, isUnread: c } = e,
        d = t.type === eC.rbe.UNKNOWN ? H.N : (0, es.gU)(t, null),
        u = (0, et.Ay)(t, !1),
        g = (0, o.bG)([S.A], () => S.A.getGuild(t.getGuildId())),
        { nick: m, colorString: x } = (0, el.Ay)(n),
        { avatarSrc: p, eventHandlers: A } = (0, eg.A)({
            userId: n.author.id,
            size: $._3.SIZE_32,
            guildId: g?.id,
            animateOnHover: !0,
        }),
        N = t.type !== eC.rbe.GUILD_ANNOUNCEMENT || null == g,
        f = (0, ec.y)({ channel: t, message: n, user: n.author, compact: !0, isRepliedMessage: !0 }),
        j = (0, s.jsx)("div", {
            className: eL.Ys,
            inert: !0,
            children: (0, s.jsx)(ed.A, {
                channel: t,
                message: n,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: eL.Xh,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != g && ep.A.requestMember(g.id, n.author.id);
        }, [g, n.author.id]),
        (0, s.jsx)(W.vN, {
            ...a,
            children: (0, s.jsxs)("div", {
                onMouseLeave: A.onMouseLeave,
                onMouseEnter: A.onMouseEnter,
                className: eL.zC,
                children: [
                    c && !r && (0, s.jsx)("div", { className: eL.Zm }),
                    (0, s.jsx)(D.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: N
                            ? (0, s.jsx)(eP, {
                                  "aria-label": "User Avatar",
                                  src: p,
                                  size: $._3.SIZE_32,
                                  cornerIconUrl: null != g ? (0, ex.Iv)(g, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, s.jsx)(eH, {
                                  "aria-label": "Guild Icon",
                                  src: (0, ex.Iv)(g, 32),
                                  size: $._3.SIZE_32,
                                  cornerIconUrl: n.author.getAvatarURL(g.id, 24),
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
                                              className: eL.ZR,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: eL.Xh,
                                                      style: { color: x ?? void 0 },
                                                      children: (0, s.jsx)(Y.A, { children: j }),
                                                  }),
                                                  f,
                                              ],
                                          })
                                        : (0, s.jsx)(Y.A, {
                                              children: (0, s.jsx)(F.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: x ?? void 0 },
                                                  className: eL.Xh,
                                                  children: g.name,
                                              }),
                                          }),
                                    (0, s.jsxs)(D.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, s.jsx)(eB, { message: n, channel: t, isUnread: c }),
                                            n.mentioned && c
                                                ? (0, s.jsx)(V.hV, { className: eL.WK, count: 1 })
                                                : (0, s.jsx)(eV, { message: n }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(D.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: l()(eL.HA, { [eL.gy]: c, [eL.wH]: r }),
                                children: [
                                    null !== d && (0, s.jsx)(d, { size: "xxs", className: eL.p4 }),
                                    (0, s.jsxs)(h.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: l()(eL.HA, { [eL.gy]: c, [eL.wH]: r }),
                                        children: [u, !N && ` \xb7 ${m}`],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(eZ, { message: n, isUnread: c, isSelected: r, channel: t }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function eV(e) {
    let { message: n } = e,
        t = (0, eh.jb)(n.timestamp.getTime());
    return (0, s.jsx)(eo.A, {
        timestamp: n.timestamp,
        className: eL.vE,
        isEdited: n.isEdited(),
        isInline: !0,
        children: t,
    });
}
function eZ(e) {
    let { message: n, channel: t, isUnread: a, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: n, isUnread: t, isSelected: a } = e,
                { content: r } = (0, eu.A)(n, {
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
                    o = n.embeds.some((e) => e.type === eC.Auw.GIFV),
                    c = ((e = n.embeds.some((e) => e.type === eC.Auw.GIFV)), n.attachments.length + +!!e),
                    d = (0, ei.A)(n),
                    u = n.stickerItems.length > 0,
                    h = n.isPoll(),
                    g = n.type === eC.lAJ.POLL_RESULT,
                    m = n.hasFlag(eC.pr7.IS_VOICE_MESSAGE),
                    x = n.type === eC.lAJ.USER_JOIN,
                    p = null;
                1 === c
                    ? (p = Z.x)
                    : c > 1
                      ? (p = J.s)
                      : d
                        ? (p = ea.A)
                        : h || g
                          ? (p = q.Y)
                          : u
                            ? (p = Q.t)
                            : m && (p = ee.H);
                let A = !0,
                    N = null;
                return (
                    i
                        ? d
                            ? (N = eR.intl.string(eR.t["9ddYKt"]))
                            : h
                              ? ((A = !1), (N = n.poll?.question.text))
                              : (N = g
                                    ? eR.intl.string(eR.t.sad2PH)
                                    : o
                                      ? eR.intl.string(eR.t.p0oZmy)
                                      : c > 1
                                        ? eR.intl.formatToPlainString(eR.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? eR.intl.string(eR.t.tCcq5p)
                                          : u
                                            ? eR.intl.format(eR.t.zY4v1B, { stickerName: n.stickerItems[0].name })
                                            : m
                                              ? eR.intl.string(eR.t.slFYgi)
                                              : x
                                                ? eR.intl.string(eR.t.Yvvfw9)
                                                : eR.intl.string(eR.t.sDqZHL))
                        : ((A = !1),
                          (N = (0, s.jsx)(er.Ay, {
                              content: r,
                              message: n,
                              compact: !1,
                              className: l()(eL.iU, { [eL.gy]: t, [eL.wH]: a }),
                          }))),
                    i &&
                        (N = (0, s.jsx)("div", {
                            className: l()(eL.iU, { [eL.gy]: t, [eL.wH]: a, [eL.QP]: A }),
                            children: N,
                        })),
                    { previewContent: N, Icon: p }
                );
            }, [n, r, t, a]);
        })({ message: n, channel: t, isUnread: a, isSelected: r });
    return (0, s.jsxs)(D.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, s.jsx)(c, { size: "xxs", className: eL.p4 }),
            (0, s.jsx)(h.E, { variant: "text-sm/normal", lineClamp: 1, className: eL.iU, children: o }),
        ],
    });
}
let eJ = (0, i.memo)(
    function (e) {
        let { message: n, isUnread: a } = e,
            r = n.message,
            c = (0, M.op)(),
            { params: d } = (0, X.W5)(),
            u = (0, o.bG)([y.A], () => {
                if (null == r) return null;
                let e = y.A.getChannel(n.channelId);
                return null != e
                    ? e
                    : new em.jb({
                          id: n.channelId,
                          guild_id: n.guildId,
                          type: eC.rbe.UNKNOWN,
                          name: eR.intl.string(eR.t.J90oLW),
                      });
            }),
            h = eA((e) => e.isMenuOpenForMessage(r?.id ?? null)),
            { notificationCenterVariant: g } = (0, b.X8)({ location: "NotificationsInboxMessageUnit" }),
            m = (0, et.Ay)(u),
            x = i.useMemo(() => `${r?.author.username}: ${m}`, [r?.author.username, m]);
        return null == r || null == u
            ? null
            : (0, s.jsx)(P.s, {
                  "aria-label": x,
                  className: l()(eL.FJ, { [eL.wH]: r.id === d.messageId, [eL.Yj]: h }),
                  onClick: () => {
                      v.A.inboxItemClick({
                          message: r,
                          channel: u,
                          isUnread: a,
                          isSidebar: g === b.U5.SIDEBAR,
                          viewId: c,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, M.Ml)({ interactionType: M.X8.CONTEXT_MENU, message: r, viewId: c }),
                          (0, en.L3)(
                              e,
                              async () => {
                                  let { default: e } = await Promise.all([
                                      t.e("93336"),
                                      t.e("26250"),
                                      t.e("48118"),
                                  ]).then(t.bind(t, 594005));
                                  return (n) => (0, s.jsx)(e, { ...n, channel: u, message: r, isUnread: a });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, s.jsx)(eF, { message: r, channel: u, isSelected: r.id === d.messageId, isUnread: a }),
              });
    },
    (e, n) => e.isUnread === n.isUnread && e.message.id === n.message.id,
);
var eq = t(735438),
    eQ = t.n(eq),
    e0 = t(837381),
    e1 = t(847374),
    e2 = t(912592),
    e3 = t(821609),
    e4 = t(475825),
    e8 = t(928039),
    e7 = t(625494);
let e6 = { [eM.Ur.UNREAD]: !0, [eM.Ur.TODAY]: !0, [eM.Ur.YESTERDAY]: !1, [eM.Ur.OLDER]: !1 },
    e9 = { [eM.Ur.UNREAD]: !0, [eM.Ur.TODAY]: !1, [eM.Ur.YESTERDAY]: !1, [eM.Ur.OLDER]: !1 },
    e5 = (0, k.v)((e, n) => ({
        messageCategoryOpenStates: e9,
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
                    e({ lastInitializedWithUnreads: t, messageCategoryOpenStates: t ? e9 : e6 }));
        },
    }));
var ne = t(756195),
    nn = t(645875);
function nt(e) {
    e.stopPropagation();
}
function ns(e) {
    let { group: n, isOpen: t, toggleOpenedState: i } = e;
    return (0, s.jsx)(m.D, {
        "aria-expanded": t,
        onClick: i,
        className: l()(nn.TP, { [nn.yZ]: !t }),
        children: (0, s.jsxs)(D.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, s.jsx)(F.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: nn.P7,
                    children: (0, eq.capitalize)(eR.intl.string(eM.v7[n]).toLowerCase()),
                }),
                (0, s.jsx)(e1.a, { size: "xxs", className: nn.ai }),
            ],
        }),
    });
}
let ni = [eM.Ur.UNREAD, eM.Ur.TODAY, eM.Ur.YESTERDAY, eM.Ur.OLDER];
function na() {
    let { analyticsLocations: e } = (0, j.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)("div", {
        className: nn.y7,
        children: (0, s.jsxs)(D.B, {
            gap: 24,
            align: "center",
            children: [
                (0, s.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, s.jsx)(e2.K, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: c.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, s.jsx)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: eR.intl.string(ne.default["O+racd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(e3.$, {
                    variant: "secondary",
                    onClick: () => (0, L.tZ)(e),
                    text: eR.intl.string(ne.default.klSpfs),
                }),
            ],
        }),
    });
}
function nl(e) {
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
        N = (0, e8.A)(g, p),
        { entrypoint: f, notificationCenterVariant: j } = (0, b.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: I,
            isLoadingComplete: E,
            hasLoadedEver: y,
        } = (0, o.cf)([R.A], () => ({
            isLoading: R.A.isLoading,
            isLoadingComplete: R.A.isLoadingComplete,
            hasLoadedEver: R.A.hasLoadedEver,
        })),
        { messageCategoryOpenStates: S, toggleOpenState: O } = e5(),
        v =
            ((n = (0, o.yK)([R.A], () => R.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)([R.A, U.Ay], () => {
                let e = R.A.getChannelInfoMap();
                for (let t of n) {
                    let n = e[t];
                    if ((null == n || n.loadState === eM.Ve.UNLOADED) && U.Ay.hasUnread(t)) return !0;
                }
                return !1;
            }, [n]));
    i.useEffect(() => {
        function e() {
            p.current?.scrollPageUp({ animate: !0 });
        }
        function n() {
            p.current?.scrollPageDown({ animate: !0 });
        }
        return (
            e7._.subscribe(eC.jej.SCROLL_PAGE_DOWN, n),
            e7._.subscribe(eC.jej.SCROLL_PAGE_UP, e),
            () => {
                e7._.unsubscribe(eC.jej.SCROLL_PAGE_DOWN, n), e7._.unsubscribe(eC.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let k = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let n = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= n && r?.(eM.VA.USER_SCROLL);
        }, [r]),
        D = i.useMemo(() => {
            let e = { [eM.Ur.UNREAD]: [], [eM.Ur.TODAY]: [], [eM.Ur.YESTERDAY]: [], [eM.Ur.OLDER]: [] },
                n = { [eM.Ur.UNREAD]: [], [eM.Ur.TODAY]: [], [eM.Ur.YESTERDAY]: [], [eM.Ur.OLDER]: [] },
                s = { [eM.Ur.UNREAD]: {}, [eM.Ur.TODAY]: {}, [eM.Ur.YESTERDAY]: {}, [eM.Ur.OLDER]: {} };
            return (
                (t.length > 0 || a.length > 0) &&
                    (eQ().each(a, (e) => {
                        e.kind === eM.yL.MENTION
                            ? n[eM.Ur.UNREAD].push(e)
                            : e.channelId in s[eM.Ur.UNREAD]
                              ? s[eM.Ur.UNREAD][e.channelId].push(e)
                              : (s[eM.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    eQ().each(t, (e) => {
                        let t = (0, L.i7)(e);
                        e.kind === eM.yL.MENTION
                            ? n[t].push(e)
                            : e.channelId in s[t]
                              ? s[t][e.channelId].push(e)
                              : (s[t][e.channelId] = [e]);
                    }),
                    eQ().each(ni, (t) => {
                        [...Object.values(s[t]).map((e) => e.reverse()), ...n[t].map((e) => [e])]
                            .sort((e, n) => T.default.compare(n[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, a]),
        w = 0 === t.length && 0 === a.length && E,
        B = !y,
        G = i.useMemo(() => ni.filter((e) => D[e].length > 0), [D]),
        K = i.useMemo(() => {
            if (m)
                return [
                    ...a.map((e) => ({ type: "message", messageGroup: [e], isUnread: !0 })),
                    ...t.map((e) => ({ type: "message", messageGroup: [e], isUnread: !1 })),
                ];
            let e = [];
            for (let n of G)
                if ((e.push({ type: "section-header", category: n }), S[n]))
                    for (let t of D[n]) e.push({ type: "message", messageGroup: t, isUnread: n === eM.Ur.UNREAD });
            return e;
        }, [m, a, t, G, S, D]),
        z = i.useMemo(() => [K.length], [K.length]),
        X = i.useCallback((e, n) => (K[n]?.type === "section-header" ? 32 : 64), [K]),
        Y = i.useCallback(
            (e) => {
                let { row: n } = e,
                    t = K[n];
                return "section-header" === t.type
                    ? (0, s.jsx)(
                          ns,
                          {
                              group: t.category,
                              isOpen: S[t.category],
                              toggleOpenedState: () => {
                                  let e = S[t.category];
                                  O(t.category), (0, M.Ut)({ section: t.category, enabled: !e, viewId: x });
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
        $ = _((e) => e.setInboxReadState),
        { selectedFilter: W } = (0, C.A)();
    i.useEffect(() => {
        B || W !== eM.Io.ALL || $(0 === D.UNREAD.length);
    }, [D, B, $, W]),
        (function (e) {
            let { messagesByCategory: n } = e,
                t = i.useRef(!1),
                s = n.UNREAD.length > 0,
                { setOpenStateFromUnreads: a } = e5(),
                l = (0, o.bG)([R.A], () => R.A.hasLoadedEver);
            i.useLayoutEffect(() => {
                l && !t.current && ((t.current = !0), a(s));
            }, [a, s, l]);
        })({ messagesByCategory: D }),
        i.useEffect(() => {
            A.current = 0;
        }, [W]);
    let F = i.useCallback(() => {
        let e = ni.filter((e) => S[e]).reduce((e, n) => e + D[n].length, 0),
            n = p.current?.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - e);
    }, [S, D]);
    return (
        i.useEffect(() => {
            B || I || A.current >= 2 || 0 >= F() || ((!H || v) && (A.current++, r?.(eM.VA.FILL_SCROLLER)));
        }, [F, r, B, I, H, v]),
        (0, M.Hi)({
            notificationCenterVariant: j,
            entrypoint: f,
            messages: t,
            unreadMessages: a,
            messagesByCategory: D,
            viewId: x,
        }),
        (0, s.jsx)("div", {
            className: l()(h, nn.KQ),
            onClick: nt,
            onDoubleClick: nt,
            "aria-label": e["aria-label"],
            children: B
                ? c()
                : w
                  ? (0, s.jsx)(na, {})
                  : (0, s.jsx)(e0.hD, {
                        navigator: N,
                        children: (0, s.jsx)(e0.PR, {
                            children: (e) => {
                                let { ref: n, ...t } = e;
                                return (0, s.jsx)(e4.OZ, {
                                    ref: (e) => {
                                        (p.current = e), (n.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: l()(nn.m4, u, { [nn.xc]: m }),
                                    onScroll: k,
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
var nr = t(873111);
let no = [],
    nc = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: eM.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function nd(e) {
    let { includePanelSpacing: n } = e,
        t = (0, M.op)(),
        { selectedFilter: a } = (0, C.A)(),
        { readMessages: r, unreadMessages: c } = (0, o.cf)([R.A, U.Ay, S.A], () => {
            let e = R.A.getInboxMessages(),
                n = R.A.oldestDisplayedMessageId,
                t = [],
                s = [];
            for (let i of e)
                (0, L.EJ)({
                    messageId: i.id,
                    channelId: i.channelId,
                    guildId: i.guildId,
                    ReadStateStore_: U.Ay,
                    GuildStore_: S.A,
                }) || (0, L.zo)(i, R.A.selectedItemInfo)
                    ? s.push(i)
                    : (T.default.compare(i.id, n) >= 0 || i.kind === eM.yL.MENTION) && t.push(i);
            return { readMessages: t, unreadMessages: s };
        }),
        d = i.useCallback(
            (e) => {
                a !== eM.Io.BOOKMARKS && a !== eM.Io.MENTIONS && v.A.loadMoreInbox({ viewId: t, loadingTrigger: e });
            },
            [a, t],
        ),
        { hasLoadedEver: h, canLoadMore: g } = (0, o.cf)([R.A], () => ({
            hasLoadedEver: R.A.hasLoadedEver,
            canLoadMore: R.A.canLoadMore({}),
        }));
    i.useEffect(() => {
        g && !h && d(eM.VA.ON_OPEN);
    }, [g, h, d]),
        (function (e) {
            let { unreadChannelIds: n } = (0, L.U4)();
            i.useEffect(() => {
                null != e &&
                    n.forEach((e) => {
                        let n = O.A.getMessages(e),
                            t = n.last()?.id,
                            s = U.Ay.ackMessageId(e),
                            i = n.hasPresent() && n.ready && !n.cached;
                        null != t &&
                            null != s &&
                            i &&
                            T.default.compare(s, t) >= 0 &&
                            A.ack(
                                e,
                                {
                                    section: eC.JJy.NOTIFICATIONS_INBOX,
                                    object: eC.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: eC.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, n]);
        })(h ? c : null);
    let m = (0, o.yK)([E.A], () => E.A.getSavedMessages()),
        x = i.useMemo(
            () =>
                m.flatMap((e) => {
                    let { message: n } = e;
                    return null == n
                        ? no
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: y.A.getBasicChannel(n.channel_id)?.guild_id,
                                  kind: eM.yL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [m],
        ),
        f = nh(r, a),
        j = nh(c, a);
    (0, N.Ay)(() => {
        p.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, b.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            n = R.A.getDevOverrides().navOnClick ?? !0;
        if (e !== b.U5.SIDEBAR || !1 === n) return;
        let { message: s, isUnread: i } = (function (e, n) {
            let t = e[e.length - 1]?.message,
                s = n[n.length - 1]?.message,
                i = s ?? t;
            if (null != i) return { message: i, isUnread: null != s };
            let a = R.A.getNotifyingChannelIds();
            if (null == a || 0 === a.length) return { message: null, isUnread: !1 };
            let l = a[0],
                r = U.Ay.getTrackedAckMessageId(l);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: T.default.atNextMillisecond(r), channel_id: l }, isUnread: U.Ay.hasUnread(l) ?? !1 };
        })(f, j);
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
        (0, N.l0)(() => {
            p.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let k = (0, eM.Yw)(a);
    return (0, s.jsx)("nav", {
        className: l()(nr.kL, { [nr.Yu]: n }),
        children: (0, s.jsxs)(u.F, {
            forceLevel: 1,
            component: (0, s.jsx)(I.Ay, { hasSubheader: !0, guild: k, ...nc }),
            children: [
                a === eM.Io.ALL && (0, s.jsx)(nx, { hideBanner: !h }),
                (0, s.jsx)(nl, {
                    className: nr.cl,
                    renderMessageGroup: nm,
                    messages: a === eM.Io.BOOKMARKS ? x : f,
                    unreadMessages: a === eM.Io.BOOKMARKS ? [] : j,
                    listName: "notifications-inbox",
                    renderLoadingState: ng,
                    ignoreGrouping: a === eM.Io.BOOKMARKS,
                    loadMore: d,
                }),
            ],
        }),
    });
}
function nu(e) {
    return (0, s.jsx)(M.GM, { children: (0, s.jsx)(nd, { ...e }) });
}
function nh(e, n) {
    return i.useMemo(
        () =>
            0 === e.length || n === eM.Io.BOOKMARKS
                ? no
                : e.filter((e) => {
                      let { id: t, kind: s } = e;
                      return (
                          !(T.default.age(t) > eM.V$) && (n === eM.Io.MENTIONS ? s === eM.yL.MENTION : n === eM.Io.ALL)
                      );
                  }),
        [e, n],
    );
}
function ng() {
    return (0, s.jsx)(G, {});
}
function nm(e, n) {
    return (0, s.jsx)(eJ, { message: e[0], isUnread: n }, e[0].id);
}
function nx(e) {
    let { hideBanner: n } = e;
    return _((e) => e.shouldHide()) || n
        ? (0, s.jsx)("div", { className: l()(nr.dl, nr.jD) })
        : (0, s.jsx)("div", {
              className: nr.dl,
              children: (0, s.jsxs)("div", {
                  className: nr.XD,
                  children: [
                      (0, s.jsx)(h.E, {
                          variant: "text-sm/medium",
                          color: "text-feedback-positive",
                          className: nr.vi,
                          children: eR.intl.string(eR.t["6XMM+D"]),
                      }),
                      (0, s.jsx)(g.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                  ],
              }),
          });
}
function np() {
    let [e, n] = (0, i.useState)(!1),
        { analyticsLocations: t } = (0, j.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)(d.m, {
        asContainer: !0,
        position: "bottom",
        text: eR.intl.string(eR.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, s.jsx)(m.D, {
            className: nr.aY,
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            onClick: () => {
                (0, L.tZ)(t);
            },
            children: (0, s.jsx)(x.Z, {
                size: "xs",
                color: e ? c.A.colors.INTERACTIVE_TEXT_HOVER.css : c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
            }),
        }),
    });
}
