t.r(n), t.d(n, { SettingsButton: () => nN, default: () => nm });
var s = t(627968),
    i = t(64700),
    a = t(503698),
    l = t.n(a),
    r = t(123924),
    o = t(17928),
    c = t(661531),
    d = t(990078),
    u = t(707554),
    h = t(696986),
    g = t(834730),
    m = t(143838),
    x = t(939249),
    p = t(625903),
    A = t(228366),
    j = t(334738),
    N = t(964486),
    f = t(793574),
    I = t(688810),
    E = t(420344),
    S = t(85109),
    y = t(734057),
    O = t(71393),
    T = t(232835),
    b = t(222823),
    M = t(935208),
    v = t(851109),
    U = t(706341),
    R = t(932883),
    C = t(599486),
    D = t(310031),
    L = t(394953),
    _ = t(628325),
    k = t(331322),
    w = t(775602),
    B = t(826733);
function K(e) {
    let { withHeader: n = !0, size: t = 15 } = e,
        i = (0, o.bG)([w.A], () => w.A.useReducedMotion);
    return (0, s.jsxs)(k.B, {
        gap: 4,
        children: [
            n &&
                (0, s.jsx)("div", {
                    className: l()(B.iE, { [B.cb]: i }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, s.jsx)(z, { className: l()(B.nq, B.NX) }),
                }),
            Array.from({ length: t }).map((e, n) => (0, s.jsx)(G, {}, n)),
        ],
    });
}
function z(e) {
    let { className: n } = e;
    return (0, s.jsx)("div", { className: l()(B.n8, n) });
}
function G() {
    let e = (0, o.bG)([w.A], () => w.A.useReducedMotion);
    return (0, s.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: l()(B.iE, { [B.cb]: e }),
        children: [
            (0, s.jsx)("div", { className: l()(B.my, B.NX) }),
            (0, s.jsxs)("div", {
                className: B.U0,
                children: [
                    (0, s.jsx)(z, { className: l()(B.Md, B.NX) }),
                    (0, s.jsx)(z, { className: l()(B.nq, B.NX) }),
                    (0, s.jsx)(z, { className: l()(B.xs, B.NX) }),
                ],
            }),
        ],
    });
}
var X = t(735438),
    P = t.n(X),
    Y = t(873263),
    H = t(3026),
    $ = t(890856),
    F = t(276293),
    W = t(778712),
    V = t(187322),
    Z = t(534514),
    J = t(777666),
    q = t(191023),
    Q = t(477262),
    ee = t(642846),
    en = t(797285),
    et = t(983851),
    es = t(442433),
    ei = t(104171),
    ea = t(47167),
    el = t(713654),
    er = t(427930),
    eo = t(427209),
    ec = t(763754),
    ed = t(291812),
    eu = t(606049),
    eh = t(812299),
    eg = t(943220),
    em = t(375199),
    ex = t(995273),
    ep = t(854627),
    eA = t(95701),
    ej = t(260509),
    eN = t(860071),
    ef = t(353640);
let eI = (0, ef.v)((e, n) => ({
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
var eE = t(922016),
    eS = t(305866),
    ey = t(933832),
    eO = t(606096),
    eT = t(997146),
    eb = t(550079),
    eM = t(477782),
    ev = t(782603),
    eU = t(461678),
    eR = t(880457),
    eC = t(164684),
    eD = t(914703),
    eL = t(849077),
    e_ = t(652215),
    ek = t(985018),
    ew = t(285618);
let eB = {
    [eL.Th.MENTION]: [eL.kR.SETTINGS],
    [eL.Th.REPLY]: [eL.kR.SETTINGS],
    [eL.Th.REACTION]: [eL.kR.SETTINGS],
    [eL.Th.ANNOUNCEMENT]: [eL.kR.SETTINGS],
    [eL.Th.MESSAGE]: [eL.kR.SETTINGS],
};
function eK(e) {
    let { label: n, onClick: t, message: a, Icon: l, interactionType: r } = e,
        [o, c] = (0, i.useState)(!1),
        u = (0, R.op)();
    return (0, s.jsx)(d.m, {
        text: n,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => c(!0),
        onTooltipHide: () => c(!1),
        children: (0, s.jsx)(x.D, {
            className: ew.XI,
            onClick: (e) => {
                (0, R.Ml)({ message: a, interactionType: r, viewId: u }), e.stopPropagation(), t(a);
            },
            children: (0, s.jsx)(l, { size: o ? "sm" : "xs", className: ew.gE }),
        }),
    });
}
function ez(e) {
    let { channel: n, message: t, label: a, Icon: l, Menu: r, interactionType: o, actionType: c } = e,
        u = (0, R.op)(),
        [h, g] = (0, i.useState)(!1),
        [m, p] = (0, i.useState)(!1),
        A = (0, i.useRef)(null),
        { openMenu: j, closeMenu: N } = eI();
    return (0, s.jsx)(eE.Y, {
        shouldShow: m,
        animation: eE.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: A,
        onRequestClose: () => {
            p(!1), N(t.id, c);
        },
        renderPopout: (e) =>
            (0, s.jsx)(eS.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: A,
                children: (0, s.jsx)(r, { "data-menu-migrated": !0, renderPopoutProps: e, channel: n, message: t }),
            }),
        children: (e) =>
            (0, s.jsx)(d.m, {
                text: a,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => g(!0),
                onTooltipHide: () => g(!1),
                children: (0, s.jsx)(x.D, {
                    innerRef: A,
                    className: ew.XI,
                    onClick: (e) => {
                        let n;
                        (0, R.Ml)({ message: t, interactionType: o, viewId: u }),
                            e.stopPropagation(),
                            p((n = !m)),
                            n ? j(t.id, c) : N(t.id, c);
                    },
                    children: (0, s.jsx)(l, {
                        ...e,
                        message: t,
                        "aria-label": a,
                        className: ew.gE,
                        size: h ? "sm" : "xs",
                    }),
                }),
            }),
    });
}
let eG = {
    [eL.kR.ACK]: {
        type: "standard",
        Icon: ey.A,
        label: ek.intl.string(ek.t.e6RscS),
        onClick: (e) => {
            A.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                j.ack(
                    e.channel_id,
                    { object: e_.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: e_.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: R.X8.ACK,
    },
    [eL.kR.BOOKMARK]: {
        type: "menu",
        label: ek.intl.string(ek.t["9p3D9p"]),
        Icon: (e) =>
            null != S.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, s.jsx)(eO.c, { ...e })
                : (0, s.jsx)(eT.c, { ...e }),
        interactionType: R.X8.BOOKMARK,
        Menu: (e) => {
            let { message: n, renderPopoutProps: t } = e,
                i = (0, o.bG)([S.A], () => S.A.getSavedMessage(n.channel_id, n.id)),
                a = (0, eR.P)({ message: n, savedMessage: i });
            return (0, s.jsxs)(eb.W, {
                "data-menu-migrated-auto": !0,
                ...t,
                navId: "message-reminder-create",
                "aria-label": ek.intl.string(ek.t.mJ3P0N),
                onClose: t.closePopout,
                onSelect: () => null,
                children: [
                    null != i
                        ? (0, s.jsx)(eM.Dr, {
                              id: "remove-from-for-later",
                              label: ek.intl.string(ek.t.SvXS1Z),
                              icon: eO.c,
                              leadingAccessory: { type: "icon", icon: eO.c },
                              action: () =>
                                  (0, eC.x)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: i.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, s.jsx)(eM.Dr, {
                              id: "create-bookmark",
                              label: ek.intl.string(ek.t["9p3D9p"]),
                              icon: eT.c,
                              leadingAccessory: { type: "icon", icon: eT.c },
                              action: () => (0, eC.Y)({ channelId: n.channel_id, messageId: n.id, displayToast: !0 }),
                          }),
                    (0, s.jsx)(eM.bX, {}),
                    a,
                ],
            });
        },
    },
    [eL.kR.SETTINGS]: {
        type: "menu",
        Icon: ev.X,
        label: ek.intl.string(ek.t.h850Ss),
        interactionType: R.X8.SETTINGS,
        Menu: (e) => {
            let { channel: n, renderPopoutProps: t } = e;
            return n.isThread()
                ? (0, s.jsx)(eD.A, { ...t, channel: n, navId: "thread-context", label: ek.intl.string(ek.t["1NBjqb"]) })
                : (0, s.jsx)(eU.A, { ...t, channel: n, navId: "channel-context", label: ek.intl.string(ek.t.Xm41aV) });
        },
    },
};
function eX(e) {
    let n,
        { message: t, channel: a, isUnread: l } = e,
        r =
            ((n = (0, L.i3)()),
            (0, i.useMemo)(() => {
                let e = eL.Th.MENTION,
                    t = new Set();
                return l && t.add(eL.kR.ACK), n && t.add(eL.kR.BOOKMARK), eB[e].forEach((e) => t.add(e)), Array.from(t);
            }, [t, l, n]));
    return (0, s.jsx)(k.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: ew.o1,
        children: r.map((e) => {
            let n = eG[e];
            switch (n.type) {
                case "standard":
                    return (0, s.jsx)(eK, { ...n, actionType: e, message: t }, e);
                case "menu":
                    return (0, s.jsx)(ez, { ...n, actionType: e, channel: a, message: t }, e);
            }
        }),
    });
}
var eP = t(97808),
    eY = t(573435),
    eH = t(190460),
    e$ = t(282291);
function eF(e) {
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
            avatarDecoration: m,
            specs: p,
            cornerIconUrl: A,
            cornerIconOffsetX: j,
            cornerIconOffsetY: N,
            ariaLabel: f,
        } = e,
        I = { width: (0, W.FT)(t), height: (0, W.FT)(t) },
        E = (0, i.useId)(),
        S = p.size * eH.Xq,
        y =
            null != m &&
            (0, s.jsxs)("svg", {
                width: S,
                height: S,
                viewBox: `0 0 ${S} ${S}`,
                className: e$.DX,
                "aria-hidden": !0,
                children: [
                    (0, s.jsxs)("mask", {
                        id: E,
                        children: [
                            (0, s.jsx)("rect", { x: 0, y: 0, width: S, height: S, fill: "white" }),
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
                                            let { height: i, width: a, x: l, y: r } = eJ(e, t, s),
                                                o = (n - e.size) / 2;
                                            return { width: a, height: i, x: l + o, y: r + o };
                                        })(e, n, t, i);
                                    return (0, s.jsx)("rect", {
                                        mask: `url(#${eY.hW.SQUIRCLE})`,
                                        height: a,
                                        width: l,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(p, S, j, N),
                        ],
                    }),
                    (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: S,
                        height: S,
                        mask: `url(#${E})`,
                        children: (0, s.jsx)("img", { className: e$.M, src: m, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != a || null != r
        ? (0, s.jsxs)(x.D, {
              className: l()(e$.iE, e$.Wn, h),
              style: I,
              onClick: a,
              onContextMenu: c,
              onMouseDown: r,
              onKeyDown: o,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": f ?? void 0,
              "aria-hidden": g,
              children: [n, y],
          })
        : (0, s.jsxs)("div", {
              className: l()(e$.iE, h),
              style: I,
              onContextMenu: c ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": f ?? void 0,
              "aria-hidden": g,
              children: [n, y],
          });
}
function eW(e) {
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
        h = (0, W.Kj)(t),
        g = h.size,
        m = (0, i.useId)();
    return (0, s.jsx)(eF, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: h,
        children: (0, s.jsxs)("svg", {
            width: g + d,
            height: g + u,
            viewBox: `0 0 ${g + d} ${g + u}`,
            className: l()(e$.dK, e$.JW),
            "aria-hidden": !0,
            children: [
                (0, s.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, s.jsx)("circle", { cx: h.size / 2, cy: h.size / 2, r: h.size / 2, fill: "white" }),
                        null != c &&
                            (function (e, n, t) {
                                let { height: i, width: a, x: l, y: r } = eJ(e, n, t);
                                return (0, s.jsx)("rect", {
                                    mask: `url(#${eY.hW.SQUIRCLE})`,
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
                    children: (0, s.jsx)(eP.d9, { src: n, className: o, isSpeaking: !1 }),
                }),
                null != c &&
                    (0, s.jsx)("foreignObject", {
                        ...eZ(h, d, u),
                        mask: `url(#${eY.hW.SQUIRCLE})`,
                        children: (0, s.jsx)("img", { src: c, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eV(e) {
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
        g = (0, W.Kj)(t),
        m = g.size + c,
        x = g.size + d,
        p = eJ(g, c, d),
        A = eZ(g, c, d);
    return (0, s.jsx)(eF, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: g,
        children: (0, s.jsxs)("svg", {
            width: m,
            height: x,
            viewBox: `0 0 ${m} ${x}`,
            className: l()(e$.dK, e$.JW),
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
                            className: e$.yA,
                            children: (0, s.jsx)("img", {
                                src: n ?? void 0,
                                alt: " ",
                                className: e$.my,
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
function eZ(e, n, t) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + n, y: e.size - 16 - e.offset + t };
}
function eJ(e, n, t) {
    let s = eZ(e, n, t),
        i = s.x - 2,
        a = s.y - 2;
    return { width: s.height + 4, height: s.width + 4, x: i, y: a };
}
var eq = t(756195);
function eQ(e) {
    let { message: n, channel: t, focusProps: a, isSelected: r, isUnread: c, groupedMessages: d } = e,
        u = t.type === e_.rbe.UNKNOWN ? F.N : (0, el.gU)(t, null),
        h = (0, ea.Ay)(t, !1),
        m = (0, o.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        { nick: x, colorString: p } = (0, ec.Ay)(n),
        { avatarSrc: A, eventHandlers: j } = (0, ep.A)({
            userId: n.author.id,
            size: W._3.SIZE_32,
            guildId: m?.id,
            animateOnHover: !0,
        }),
        N = t.type !== e_.rbe.GUILD_ANNOUNCEMENT || null == m,
        f = (0, eh.y)({ channel: t, message: n, user: n.author, compact: !0, isRepliedMessage: !0 }),
        I = (0, s.jsx)("div", {
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
        (0, i.useEffect)(() => {
            null != m && eN.A.requestMember(m.id, n.author.id);
        }, [m, n.author.id]),
        (0, s.jsx)(V.vN, {
            ...a,
            children: (0, s.jsxs)("div", {
                onMouseLeave: j.onMouseLeave,
                onMouseEnter: j.onMouseEnter,
                className: ew.zC,
                children: [
                    c && !r && (0, s.jsx)("div", { className: ew.Zm }),
                    (0, s.jsx)(k.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: N
                            ? (0, s.jsx)(eW, {
                                  "aria-label": "User Avatar",
                                  src: A,
                                  size: W._3.SIZE_32,
                                  cornerIconUrl: null != m ? (0, ej.Iv)(m, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, s.jsx)(eV, {
                                  "aria-label": "Guild Icon",
                                  src: (0, ej.Iv)(m, 32),
                                  size: W._3.SIZE_32,
                                  cornerIconUrl: n.author.getAvatarURL(m.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, s.jsxs)(k.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, s.jsxs)(k.B, {
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
                                                      style: { color: p ?? void 0 },
                                                      children: (0, s.jsx)(H.A, { children: I }),
                                                  }),
                                                  f,
                                              ],
                                          })
                                        : (0, s.jsx)(H.A, {
                                              children: (0, s.jsx)(Z.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: p ?? void 0 },
                                                  className: ew.Xh,
                                                  children: m.name,
                                              }),
                                          }),
                                    (0, s.jsxs)(k.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, s.jsx)(eX, { message: n, channel: t, isUnread: c }),
                                            n.mentioned && c
                                                ? (0, s.jsx)(J.hV, { className: ew.WK, count: 1 })
                                                : (0, s.jsx)(e1, { message: n }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(k.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: l()(ew.HA, { [ew.gy]: c, [ew.wH]: r }),
                                children: [
                                    null !== u && (0, s.jsx)(u, { size: "xxs", className: ew.p4 }),
                                    (0, s.jsxs)(g.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: l()(ew.HA, { [ew.gy]: c, [ew.wH]: r }),
                                        children: [h, !N && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(e2, { message: n, isUnread: c, isSelected: r, channel: t }),
                            d.length > 0 &&
                                (0, s.jsx)(k.B, {
                                    gap: 4,
                                    style: { minWidth: 0, marginTop: 4, marginBottom: 4 },
                                    children: (0, s.jsx)(e0, { overflowMessages: d }),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function e0(e) {
    let { overflowMessages: n } = e,
        t = (0, X.uniqBy)(
            n.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, s.jsxs)(k.B, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, s.jsx)(ei.Ay, { users: t, useFallbackUserForPopout: !0, size: ei.DN.SIZE_16 }),
            (0, s.jsx)(g.E, {
                variant: "text-sm/medium",
                className: ew.gD,
                children: ek.intl.formatToPlainString(eq.default.NzUuLD, { count: n.length }),
            }),
        ],
    });
}
function e1(e) {
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
function e2(e) {
    let { message: n, channel: t, isUnread: a, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: n, isUnread: t, isSelected: a } = e,
                { content: r } = (0, em.A)(n, {
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
                    o = n.embeds.some((e) => e.type === e_.Auw.GIFV),
                    c = ((e = n.embeds.some((e) => e.type === e_.Auw.GIFV)), n.attachments.length + +!!e),
                    d = (0, er.A)(n),
                    u = n.stickerItems.length > 0,
                    h = n.isPoll(),
                    g = n.type === e_.lAJ.POLL_RESULT,
                    m = n.hasFlag(e_.pr7.IS_VOICE_MESSAGE),
                    x = n.type === e_.lAJ.USER_JOIN,
                    p = null;
                1 === c
                    ? (p = q.x)
                    : c > 1
                      ? (p = Q.s)
                      : d
                        ? (p = eo.A)
                        : h || g
                          ? (p = ee.Y)
                          : u
                            ? (p = en.t)
                            : m && (p = et.H);
                let A = !0,
                    j = null;
                return (
                    i
                        ? d
                            ? (j = ek.intl.string(ek.t["9ddYKt"]))
                            : h
                              ? ((A = !1), (j = n.poll?.question.text))
                              : (j = g
                                    ? ek.intl.string(ek.t.sad2PH)
                                    : o
                                      ? ek.intl.string(ek.t.p0oZmy)
                                      : c > 1
                                        ? ek.intl.formatToPlainString(ek.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? ek.intl.string(ek.t.tCcq5p)
                                          : u
                                            ? ek.intl.format(ek.t.zY4v1B, { stickerName: n.stickerItems[0].name })
                                            : m
                                              ? ek.intl.string(ek.t.slFYgi)
                                              : x
                                                ? ek.intl.string(ek.t.Yvvfw9)
                                                : ek.intl.string(ek.t.sDqZHL))
                        : ((A = !1),
                          (j = (0, s.jsx)(ed.Ay, {
                              content: r,
                              message: n,
                              compact: !1,
                              className: l()(ew.iU, { [ew.gy]: t, [ew.wH]: a }),
                          }))),
                    i &&
                        (j = (0, s.jsx)("div", {
                            className: l()(ew.iU, { [ew.gy]: t, [ew.wH]: a, [ew.QP]: A }),
                            children: j,
                        })),
                    { previewContent: j, Icon: p }
                );
            }, [n, r, t, a]);
        })({ message: n, channel: t, isUnread: a, isSelected: r });
    return (0, s.jsxs)(k.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, s.jsx)(c, { size: "xxs", className: ew.p4 }),
            (0, s.jsx)(g.E, { variant: "text-sm/normal", lineClamp: 1, className: ew.iU, children: o }),
        ],
    });
}
let e3 = (0, i.memo)(
    function (e) {
        let { message: n, groupedMessages: a, isUnread: r } = e,
            c = n.message,
            d = (0, R.op)(),
            { params: u } = (0, Y.W5)(),
            h = (0, o.bG)([y.A], () => {
                if (null == c) return null;
                let e = y.A.getChannel(n.channelId);
                return null != e
                    ? e
                    : new eA.jb({
                          id: n.channelId,
                          guild_id: n.guildId,
                          type: e_.rbe.UNKNOWN,
                          name: ek.intl.string(ek.t.J90oLW),
                      });
            }),
            g = eI((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: m } = (0, v.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = (0, ea.Ay)(h),
            p = i.useMemo(() => `${c?.author.username}: ${x}`, [c?.author.username, x]),
            A = a?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == c || null == h
            ? null
            : (0, s.jsx)($.s, {
                  "aria-label": p,
                  className: l()(ew.FJ, { [ew.wH]: c.id === u.messageId, [ew.Yj]: g }),
                  onClick: () => {
                      U.A.inboxItemClick({
                          message: c,
                          channel: h,
                          isUnread: r,
                          isSidebar: m === v.U5.SIDEBAR,
                          viewId: d,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, R.Ml)({ interactionType: R.X8.CONTEXT_MENU, message: c, viewId: d }),
                          (0, es.L3)(
                              e,
                              async () => {
                                  let { default: e } = await Promise.all([t.e("26250"), t.e("48118")]).then(
                                      t.bind(t, 594005),
                                  );
                                  return (n) => (0, s.jsx)(e, { ...n, channel: h });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, s.jsx)(eQ, {
                      message: c,
                      channel: h,
                      isSelected: c.id === u.messageId,
                      groupedMessages: A,
                      isUnread: r,
                  }),
              });
    },
    (e, n) =>
        e.isUnread === n.isUnread &&
        e.message.id === n.message.id &&
        e.groupedMessages?.length === n.groupedMessages?.length,
);
t(321073);
var e4 = t(837381),
    e8 = t(847374),
    e6 = t(912592),
    e7 = t(821609),
    e9 = t(689175),
    e5 = t(928039),
    ne = t(625494);
let nn = { [eL.Ur.UNREAD]: !0, [eL.Ur.TODAY]: !0, [eL.Ur.YESTERDAY]: !0, [eL.Ur.OLDER]: !0 },
    nt = { [eL.Ur.UNREAD]: !0, [eL.Ur.TODAY]: !1, [eL.Ur.YESTERDAY]: !1, [eL.Ur.OLDER]: !1 },
    ns = (0, ef.v)((e, n) => ({
        messageCategoryOpenStates: nn,
        getOpenState: (e) => n().messageCategoryOpenStates[e],
        toggleOpenState: (n) => {
            e((e) => ({
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [n]: !e.messageCategoryOpenStates[n] },
            }));
        },
        setOpenStateFromUnreads: (n) => {
            e({ messageCategoryOpenStates: n ? nt : nn });
        },
    }));
var ni = t(645875);
function na(e) {
    e.stopPropagation();
}
function nl(e) {
    let { group: n, isOpen: t, toggleOpenedState: i } = e;
    return (0, s.jsx)(x.D, {
        "aria-expanded": t,
        onClick: i,
        className: l()(ni.TP, { [ni.yZ]: !t }),
        children: (0, s.jsxs)(k.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, s.jsx)(Z.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: ni.P7,
                    children: (0, X.capitalize)(ek.intl.string(eL.v7[n]).toLowerCase()),
                }),
                (0, s.jsx)(e8.a, { size: "xxs", className: ni.ai }),
            ],
        }),
    });
}
let nr = [eL.Ur.UNREAD, eL.Ur.TODAY, eL.Ur.YESTERDAY, eL.Ur.OLDER];
function no() {
    let { analyticsLocations: e } = (0, I.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)("div", {
        className: ni.y7,
        children: (0, s.jsxs)(k.B, {
            gap: 24,
            align: "center",
            children: [
                (0, s.jsxs)(k.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, s.jsx)(e6.K, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: c.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, s.jsx)(g.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: ek.intl.string(eq.default["O+racd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(e7.$, {
                    variant: "secondary",
                    onClick: () => (0, L.tZ)(e),
                    text: ek.intl.string(eq.default.klSpfs),
                }),
            ],
        }),
    });
}
function nc(e) {
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
        x = (0, R.op)(),
        p = i.useRef(null),
        A = (0, e5.A)(g, p),
        { entrypoint: j, notificationCenterVariant: N } = (0, v.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: f,
            isLoadingComplete: I,
            hasLoadedEver: E,
        } = (0, o.cf)([D.A], () => ({
            isLoading: D.A.isLoading,
            isLoadingComplete: D.A.isLoadingComplete,
            hasLoadedEver: D.A.hasLoadedEver,
        })),
        S = !E && f,
        { messageCategoryOpenStates: y, toggleOpenState: O } = ns(),
        T =
            ((n = (0, o.yK)([D.A], () => D.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)([D.A, b.Ay], () => {
                let e = D.A.getChannelInfoMap();
                for (let t of n) {
                    let n = e[t];
                    if ((null == n || n.loadState === eL.Ve.UNLOADED) && b.Ay.hasUnread(t)) return !0;
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
            ne._.subscribe(e_.jej.SCROLL_PAGE_DOWN, n),
            ne._.subscribe(e_.jej.SCROLL_PAGE_UP, e),
            () => {
                ne._.unsubscribe(e_.jej.SCROLL_PAGE_DOWN, n), ne._.unsubscribe(e_.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let U = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let n = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= n && r?.(eL.VA.USER_SCROLL);
        }, [r]),
        C = i.useMemo(() => {
            let e = { [eL.Ur.UNREAD]: [], [eL.Ur.TODAY]: [], [eL.Ur.YESTERDAY]: [], [eL.Ur.OLDER]: [] },
                n = { [eL.Ur.UNREAD]: [], [eL.Ur.TODAY]: [], [eL.Ur.YESTERDAY]: [], [eL.Ur.OLDER]: [] },
                s = { [eL.Ur.UNREAD]: {}, [eL.Ur.TODAY]: {}, [eL.Ur.YESTERDAY]: {}, [eL.Ur.OLDER]: {} };
            return (
                (t.length > 0 || a.length > 0) &&
                    (P().each(a, (e) => {
                        e.kind === eL.yL.MENTION
                            ? n[eL.Ur.UNREAD].push(e)
                            : e.channelId in s[eL.Ur.UNREAD]
                              ? s[eL.Ur.UNREAD][e.channelId].push(e)
                              : (s[eL.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    P().each(t, (e) => {
                        let t = (0, L.i7)(e);
                        e.kind === eL.yL.MENTION
                            ? n[t].push(e)
                            : e.channelId in s[t]
                              ? s[t][e.channelId].push(e)
                              : (s[t][e.channelId] = [e]);
                    }),
                    P().each(nr, (t) => {
                        [...Object.values(s[t]).map((e) => e.reverse()), ...n[t].map((e) => [e])]
                            .sort((e, n) => M.default.compare(n[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, a]),
        k = 0 === t.length && 0 === a.length && I,
        w = 0 === t.length && 0 === a.length && !E && f,
        B = i.useMemo(() => {
            let e = [];
            return (
                w
                    ? e.push(c())
                    : k
                      ? e.push((0, s.jsx)(no, {}, "empty-state"))
                      : m
                        ? (e.push(...a.map((e) => d([e], !0))), e.push(...t.map((e) => d([e], !1))))
                        : P().each(nr, (n) => {
                              0 !== C[n].length &&
                                  (e.push(
                                      (0, s.jsx)(
                                          nl,
                                          {
                                              group: n,
                                              isOpen: y[n],
                                              toggleOpenedState: () => {
                                                  let e = y[n];
                                                  O(n), (0, R.Ut)({ section: n, enabled: !e, viewId: x });
                                              },
                                          },
                                          n,
                                      ),
                                  ),
                                  y[n] && e.push(...C[n].map((e) => d(e, n === eL.Ur.UNREAD))));
                          }),
                e
            );
        }, [t, a, c, y, O, C, m, d, k, w, x]),
        z = B[B.length - 1],
        G = i.isValidElement(z) && z.type === nl,
        X = (0, _.S)((e) => e.setInboxReadState);
    i.useEffect(() => {
        w || X(0 === C.UNREAD.length);
    }, [C, w, X]);
    let Y = (t.length > 0 || a.length > 0) && null != r && f;
    !(function (e) {
        let { loadingInitial: n, messagesByCategory: t } = e,
            s = i.useRef(!1),
            a = t.UNREAD.length > 0,
            { setOpenStateFromUnreads: l } = ns();
        i.useEffect(() => {
            n || s.current || (l(a), (s.current = !0));
        }, [l, a, n]);
    })({ messagesByCategory: C, loadingInitial: S });
    let H = i.useCallback(() => {
        let e = nr.filter((e) => y[e]).reduce((e, n) => e + C[n].length, 0),
            n = p.current?.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - e);
    }, [y, C]);
    i.useEffect(() => {
        w || f || 0 >= H() || ((!G || T) && r?.(eL.VA.FILL_SCROLLER));
    }, [H, r, w, f, G, T]);
    let $ = i.useMemo(() => {
        let e = Math.min(Math.max(2, H()), 20);
        return (0, s.jsx)(K, { withHeader: !1, size: e });
    }, [H]);
    return (
        (0, R.Hi)({
            notificationCenterVariant: N,
            entrypoint: j,
            messages: t,
            unreadMessages: a,
            messagesByCategory: C,
            viewId: x,
        }),
        (0, s.jsx)("div", {
            className: l()(h, ni.KQ),
            onClick: na,
            onDoubleClick: na,
            "aria-label": e["aria-label"],
            children: (0, s.jsx)(e4.hD, {
                navigator: A,
                children: (0, s.jsx)(e4.PR, {
                    children: (e) => {
                        let { ref: n, ...t } = e;
                        return (0, s.jsxs)(e9.Ch, {
                            ref: (e) => {
                                (p.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            className: l()(ni.m4, u),
                            onScroll: U,
                            fade: !0,
                            ...t,
                            children: [B, Y && !G ? $ : null],
                        });
                    },
                }),
            }),
        })
    );
}
var nd = t(873111);
let nu = [],
    nh = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: eL.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function ng(e) {
    let { includePanelSpacing: n } = e,
        t = (0, R.op)(),
        { selectedFilter: a } = (0, C.A)(),
        r = (0, o.bG)([D.A], () => D.A.oldestDisplayedMessageId),
        c = (0, o.yK)([D.A], () => D.A.getInboxMessages()),
        d = (0, o.yK)([b.Ay, O.A, D.A], () =>
            c.filter(
                (e) =>
                    !(0, L.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: b.Ay,
                        GuildStore_: O.A,
                    }) && !(0, L.zo)(e, D.A.selectedItemInfo),
            ),
        ),
        g = (0, o.yK)([b.Ay, O.A, D.A], () =>
            c.filter(
                (e) =>
                    (0, L.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: b.Ay,
                        GuildStore_: O.A,
                    }) || (0, L.zo)(e, D.A.selectedItemInfo),
            ),
        ),
        m = i.useCallback(
            (e) => {
                a !== eL.Io.BOOKMARKS && U.A.loadMoreInbox({ viewId: t, loadingTrigger: e });
            },
            [a, t],
        ),
        { hasLoadedEver: x, canLoadMore: p } = (0, o.cf)([D.A], () => ({
            hasLoadedEver: D.A.hasLoadedEver,
            canLoadMore: D.A.canLoadMore({}),
        }));
    i.useEffect(() => {
        p && !x && m(eL.VA.ON_OPEN);
    }, [p, x, m]),
        (function (e) {
            let { unreadChannelIds: n } = (0, L.U4)();
            i.useEffect(() => {
                null != e &&
                    n.forEach((e) => {
                        let n = T.A.getMessages(e),
                            t = n.last()?.id,
                            s = b.Ay.ackMessageId(e),
                            i = n.hasPresent() && n.ready && !n.cached;
                        null != t &&
                            null != s &&
                            i &&
                            M.default.compare(s, t) >= 0 &&
                            j.ack(
                                e,
                                {
                                    section: e_.JJy.NOTIFICATIONS_INBOX,
                                    object: e_.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: e_.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, n]);
        })(x ? g : null);
    let f = (0, o.yK)([S.A], () => S.A.getSavedMessages()),
        I = i.useMemo(
            () =>
                f.flatMap((e) => {
                    let { message: n } = e;
                    return null == n
                        ? nu
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: y.A.getBasicChannel(n.channel_id)?.guild_id,
                                  kind: eL.yL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [f],
        ),
        _ = nx(d, a, r),
        k = nx(g, a, null);
    (0, N.Ay)(() => {
        A.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, v.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            n = D.A.getDevOverrides().navOnClick ?? !0;
        if (e !== v.U5.SIDEBAR || !1 === n) return;
        let { message: s, isUnread: i } = (function (e, n) {
            let t = e[e.length - 1]?.message,
                s = n[n.length - 1]?.message,
                i = s ?? t;
            if (null != i) return { message: i, isUnread: null != s };
            let a = D.A.getNotifyingChannelIds();
            if (null == a || 0 === a.length) return { message: null, isUnread: !1 };
            let l = a[0],
                r = b.Ay.getTrackedAckMessageId(l);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: M.default.atNextMillisecond(r), channel_id: l }, isUnread: b.Ay.hasUnread(l) ?? !1 };
        })(_, k);
        null != s &&
            U.A.inboxItemClick({
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
            A.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: w } = (0, v.X8)({ location: "NotificationsInboxSidebar" }),
        B = w === v.yF.DROPDOWN && a !== eL.Io.ALL,
        K = (0, eL.Yw)(a);
    return (0, s.jsx)("nav", {
        className: l()(nd.kL, { [nd.Yu]: n }),
        children: (0, s.jsxs)(u.F, {
            forceLevel: 1,
            component: (0, s.jsx)(E.Ay, { hasSubheader: !0, guild: K, ...nh }),
            children: [
                a === eL.Io.ALL && (0, s.jsx)(nj, { hideBanner: !x || a !== eL.Io.ALL }),
                B && (0, s.jsx)(h.h, { size: 8 }),
                (0, s.jsx)(nc, {
                    className: nd.cl,
                    renderMessageGroup: nA,
                    messages: a === eL.Io.BOOKMARKS ? I : _,
                    unreadMessages: a === eL.Io.BOOKMARKS ? [] : k,
                    listName: "notifications-inbox",
                    renderLoadingState: np,
                    ignoreGrouping: a === eL.Io.BOOKMARKS,
                    loadMore: m,
                }),
            ],
        }),
    });
}
function nm(e) {
    return (0, s.jsx)(R.GM, { children: (0, s.jsx)(ng, { ...e }) });
}
function nx(e, n, t) {
    return i.useMemo(
        () =>
            0 === e.length || n === eL.Io.BOOKMARKS
                ? nu
                : e.filter((e) => {
                      let { id: s } = e;
                      return (
                          !(M.default.age(s) > eL.V$ || (null != t && 0 >= M.default.compare(s, t))) && n === eL.Io.ALL
                      );
                  }),
        [e, n, t],
    );
}
function np() {
    return (0, s.jsx)(K, {});
}
function nA(e, n) {
    return (0, s.jsx)(e3, { message: e[0], groupedMessages: e.slice(1), isUnread: n }, e[0].id);
}
function nj(e) {
    let { hideBanner: n } = e,
        t = (0, _.S)((e) => e.shouldHide());
    return (0, s.jsx)("div", {
        className: l()(nd.dl, { [nd.jD]: t || n }),
        children: (0, s.jsxs)("div", {
            className: nd.XD,
            children: [
                (0, s.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: nd.vi,
                    children: ek.intl.string(ek.t["6XMM+D"]),
                }),
                (0, s.jsx)(m.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
            ],
        }),
    });
}
function nN() {
    let [e, n] = (0, i.useState)(!1),
        { analyticsLocations: t } = (0, I.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)(d.m, {
        asContainer: !0,
        position: "bottom",
        text: ek.intl.string(ek.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, s.jsx)(x.D, {
            className: nd.aY,
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            onClick: () => {
                (0, L.tZ)(t);
            },
            children: (0, s.jsx)(p.Z, {
                size: "xs",
                color: e ? c.A.colors.INTERACTIVE_TEXT_HOVER.css : c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
            }),
        }),
    });
}
