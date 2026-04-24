n.r(t), n.d(t, { SettingsButton: () => tx, default: () => tg });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(419354),
    o = n(17928),
    c = n(661531),
    d = n(990078),
    u = n(707554),
    h = n(696986),
    m = n(834730),
    g = n(143838),
    _ = n(939249),
    p = n(625903),
    A = n(228366),
    b = n(334738),
    x = n(964486),
    f = n(793574),
    I = n(688810),
    T = n(420344),
    N = n(85109),
    j = n(734057),
    v = n(71393),
    y = n(232835),
    E = n(222823),
    S = n(935208),
    C = n(851109),
    M = n(706341),
    O = n(932883),
    R = n(599486),
    D = n(310031),
    w = n(394953),
    U = n(628325),
    k = n(331322),
    L = n(775602),
    B = n(826733);
function P(e) {
    let { withHeader: t = !0, size: n = 15 } = e,
        i = (0, o.bG)([L.A], () => L.A.useReducedMotion);
    return (0, a.jsxs)(k.B, {
        gap: 4,
        children: [
            t &&
                (0, a.jsx)("div", {
                    className: l()(B.iE, { [B.cb]: i }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, a.jsx)(G, { className: l()(B.nq, B.NX) }),
                }),
            Array.from({ length: n }).map((e, t) => (0, a.jsx)(V, {}, t)),
        ],
    });
}
function G(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", { className: l()(B.n8, t) });
}
function V() {
    let e = (0, o.bG)([L.A], () => L.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: l()(B.iE, { [B.cb]: e }),
        children: [
            (0, a.jsx)("div", { className: l()(B.my, B.NX) }),
            (0, a.jsxs)("div", {
                className: B.U0,
                children: [
                    (0, a.jsx)(G, { className: l()(B.Md, B.NX) }),
                    (0, a.jsx)(G, { className: l()(B.nq, B.NX) }),
                    (0, a.jsx)(G, { className: l()(B.xs, B.NX) }),
                ],
            }),
        ],
    });
}
var z = n(735438),
    F = n.n(z),
    K = n(873263),
    Y = n(3026),
    X = n(890856),
    H = n(276293),
    W = n(778712),
    Z = n(187322),
    $ = n(534514),
    J = n(777666),
    q = n(191023),
    Q = n(477262),
    ee = n(642846),
    et = n(797285),
    en = n(983851),
    ea = n(442433),
    ei = n(104171),
    es = n(47167),
    el = n(713654),
    er = n(427930),
    eo = n(427209),
    ec = n(763754),
    ed = n(291812),
    eu = n(606049),
    eh = n(812299),
    em = n(943220),
    eg = n(375199),
    e_ = n(995273),
    ep = n(854627),
    eA = n(95701),
    eb = n(260509),
    ex = n(860071),
    ef = n(353640);
let eI = (0, ef.v)((e, t) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(t().openMenus).some((t) => null != e && t.startsWith(`${e}:`)),
    openMenu: (t, n) => {
        let a = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.add(a), { openMenus: t };
        });
    },
    closeMenu: (t, n) => {
        let a = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.delete(a), { openMenus: t };
        });
    },
}));
var eT = n(922016),
    eN = n(305866),
    ej = n(933832),
    ev = n(606096),
    ey = n(997146),
    eE = n(550079),
    eS = n(477782),
    eC = n(782603),
    eM = n(461678),
    eO = n(880457),
    eR = n(164684),
    eD = n(914703),
    ew = n(849077),
    eU = n(652215),
    ek = n(985018),
    eL = n(285618);
let eB = {
    [ew.Th.MENTION]: [ew.kR.SETTINGS],
    [ew.Th.REPLY]: [ew.kR.SETTINGS],
    [ew.Th.REACTION]: [ew.kR.SETTINGS],
    [ew.Th.ANNOUNCEMENT]: [ew.kR.SETTINGS],
    [ew.Th.MESSAGE]: [ew.kR.SETTINGS],
};
function eP(e) {
    let { label: t, onClick: n, message: s, Icon: l, interactionType: r } = e,
        [o, c] = (0, i.useState)(!1),
        u = (0, O.op)();
    return (0, a.jsx)(d.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => c(!0),
        onTooltipHide: () => c(!1),
        children: (0, a.jsx)(_.D, {
            className: eL.XI,
            onClick: (e) => {
                (0, O.Ml)({ message: s, interactionType: r, viewId: u }), e.stopPropagation(), n(s);
            },
            children: (0, a.jsx)(l, { size: o ? "sm" : "xs", className: eL.gE }),
        }),
    });
}
function eG(e) {
    let { channel: t, message: n, label: s, Icon: l, Menu: r, interactionType: o, actionType: c } = e,
        u = (0, O.op)(),
        [h, m] = (0, i.useState)(!1),
        [g, p] = (0, i.useState)(!1),
        A = (0, i.useRef)(null),
        { openMenu: b, closeMenu: x } = eI();
    return (0, a.jsx)(eT.Y, {
        shouldShow: g,
        animation: eT.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: A,
        onRequestClose: () => {
            p(!1), x(n.id, c);
        },
        renderPopout: (e) =>
            (0, a.jsx)(eN.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: A,
                children: (0, a.jsx)(r, { "data-menu-migrated": !0, renderPopoutProps: e, channel: t, message: n }),
            }),
        children: (e) =>
            (0, a.jsx)(d.m, {
                text: s,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => m(!0),
                onTooltipHide: () => m(!1),
                children: (0, a.jsx)(_.D, {
                    innerRef: A,
                    className: eL.XI,
                    onClick: (e) => {
                        let t;
                        (0, O.Ml)({ message: n, interactionType: o, viewId: u }),
                            e.stopPropagation(),
                            p((t = !g)),
                            t ? b(n.id, c) : x(n.id, c);
                    },
                    children: (0, a.jsx)(l, {
                        ...e,
                        message: n,
                        "aria-label": s,
                        className: eL.gE,
                        size: h ? "sm" : "xs",
                    }),
                }),
            }),
    });
}
let eV = {
    [ew.kR.ACK]: {
        type: "standard",
        Icon: ej.A,
        label: ek.intl.string(ek.t.e6RscS),
        onClick: (e) => {
            A.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                b.ack(
                    e.channel_id,
                    { object: eU.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: eU.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: O.X8.ACK,
    },
    [ew.kR.BOOKMARK]: {
        type: "menu",
        label: ek.intl.string(ek.t["9p3D9p"]),
        Icon: (e) =>
            null != N.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, a.jsx)(ev.c, { ...e })
                : (0, a.jsx)(ey.c, { ...e }),
        interactionType: O.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                i = (0, o.bG)([N.A], () => N.A.getSavedMessage(t.channel_id, t.id)),
                s = (0, eO.P)({ message: t, savedMessage: i });
            return (0, a.jsxs)(eE.W, {
                "data-menu-migrated-auto": !0,
                ...n,
                navId: "message-reminder-create",
                "aria-label": ek.intl.string(ek.t.mJ3P0N),
                onClose: n.closePopout,
                onSelect: () => null,
                children: [
                    null != i
                        ? (0, a.jsx)(eS.Dr, {
                              id: "remove-from-for-later",
                              label: ek.intl.string(ek.t.SvXS1Z),
                              icon: ev.c,
                              leadingAccessory: { type: "icon", icon: ev.c },
                              action: () =>
                                  (0, eR.x)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: i.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, a.jsx)(eS.Dr, {
                              id: "create-bookmark",
                              label: ek.intl.string(ek.t["9p3D9p"]),
                              icon: ey.c,
                              leadingAccessory: { type: "icon", icon: ey.c },
                              action: () => (0, eR.Y)({ channelId: t.channel_id, messageId: t.id, displayToast: !0 }),
                          }),
                    (0, a.jsx)(eS.bX, {}),
                    s,
                ],
            });
        },
    },
    [ew.kR.SETTINGS]: {
        type: "menu",
        Icon: eC.X,
        label: ek.intl.string(ek.t.h850Ss),
        interactionType: O.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, a.jsx)(eD.A, { ...n, channel: t, navId: "thread-context", label: ek.intl.string(ek.t["1NBjqb"]) })
                : (0, a.jsx)(eM.A, { ...n, channel: t, navId: "channel-context", label: ek.intl.string(ek.t.Xm41aV) });
        },
    },
};
function ez(e) {
    let t,
        { message: n, channel: s, isUnread: l } = e,
        r =
            ((t = (0, w.i3)()),
            (0, i.useMemo)(() => {
                let e = ew.Th.MENTION,
                    n = new Set();
                return l && n.add(ew.kR.ACK), t && n.add(ew.kR.BOOKMARK), eB[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, l, t]));
    return (0, a.jsx)(k.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: eL.o1,
        children: r.map((e) => {
            let t = eV[e];
            switch (t.type) {
                case "standard":
                    return (0, a.jsx)(eP, { ...t, actionType: e, message: n }, e);
                case "menu":
                    return (0, a.jsx)(eG, { ...t, actionType: e, channel: s, message: n }, e);
            }
        }),
    });
}
var eF = n(97808),
    eK = n(573435),
    eY = n(190460),
    eX = n(282291);
function eH(e) {
    let {
            children: t,
            size: n,
            onClick: s,
            onMouseDown: r,
            onKeyDown: o,
            onContextMenu: c,
            onMouseEnter: d,
            onMouseLeave: u,
            className: h,
            ariaHidden: m,
            avatarDecoration: g,
            specs: p,
            cornerIconUrl: A,
            cornerIconOffsetX: b,
            cornerIconOffsetY: x,
            ariaLabel: f,
        } = e,
        I = { width: (0, W.FT)(n), height: (0, W.FT)(n) },
        T = (0, i.useId)(),
        N = p.size * eY.Xq,
        j =
            null != g &&
            (0, a.jsxs)("svg", {
                width: N,
                height: N,
                viewBox: `0 0 ${N} ${N}`,
                className: eX.DX,
                "aria-hidden": !0,
                children: [
                    (0, a.jsxs)("mask", {
                        id: T,
                        children: [
                            (0, a.jsx)("rect", { x: 0, y: 0, width: N, height: N, fill: "white" }),
                            null != A &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: s,
                                            width: l,
                                            x: r,
                                            y: o,
                                        } = (function (e, t, n, a) {
                                            let { height: i, width: s, x: l, y: r } = eJ(e, n, a),
                                                o = (t - e.size) / 2;
                                            return { width: s, height: i, x: l + o, y: r + o };
                                        })(e, t, n, i);
                                    return (0, a.jsx)("rect", {
                                        mask: `url(#${eK.hW.SQUIRCLE})`,
                                        height: s,
                                        width: l,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(p, N, b, x),
                        ],
                    }),
                    (0, a.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: N,
                        height: N,
                        mask: `url(#${T})`,
                        children: (0, a.jsx)("img", { className: eX.M, src: g, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != s || null != r
        ? (0, a.jsxs)(_.D, {
              className: l()(eX.iE, eX.Wn, h),
              style: I,
              onClick: s,
              onContextMenu: c,
              onMouseDown: r,
              onKeyDown: o,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": f ?? void 0,
              "aria-hidden": m,
              children: [t, j],
          })
        : (0, a.jsxs)("div", {
              className: l()(eX.iE, h),
              style: I,
              onContextMenu: c ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": f ?? void 0,
              "aria-hidden": m,
              children: [t, j],
          });
}
function eW(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": r,
            imageClassName: o,
            cornerIconUrl: c,
            cornerIconOffsetX: d = 0,
            cornerIconOffsetY: u = 0,
        } = e,
        h = (0, W.Kj)(n),
        m = h.size,
        g = (0, i.useId)();
    return (0, a.jsx)(eH, {
        ...e,
        ariaLabel: r,
        ariaHidden: s,
        specs: h,
        children: (0, a.jsxs)("svg", {
            width: m + d,
            height: m + u,
            viewBox: `0 0 ${m + d} ${m + u}`,
            className: l()(eX.dK, eX.JW),
            "aria-hidden": !0,
            children: [
                (0, a.jsxs)("mask", {
                    id: g,
                    children: [
                        (0, a.jsx)("circle", { cx: h.size / 2, cy: h.size / 2, r: h.size / 2, fill: "white" }),
                        null != c &&
                            (function (e, t, n) {
                                let { height: i, width: s, x: l, y: r } = eJ(e, t, n);
                                return (0, a.jsx)("rect", {
                                    mask: `url(#${eK.hW.SQUIRCLE})`,
                                    height: i,
                                    width: s,
                                    x: l,
                                    y: r,
                                    fill: "black",
                                });
                            })(h, d, u),
                    ],
                }),
                (0, a.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: h.size,
                    height: h.size,
                    mask: `url(#${g})`,
                    children: (0, a.jsx)(eF.d9, { src: t, className: o, isSpeaking: !1 }),
                }),
                null != c &&
                    (0, a.jsx)("foreignObject", {
                        ...e$(h, d, u),
                        mask: `url(#${eK.hW.SQUIRCLE})`,
                        children: (0, a.jsx)("img", { src: c, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eZ(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": r,
            cornerIconUrl: o,
            cornerIconOffsetX: c = 0,
            cornerIconOffsetY: d = 0,
        } = e,
        u = (0, i.useId)(),
        h = (0, i.useId)(),
        m = (0, W.Kj)(n),
        g = m.size + c,
        _ = m.size + d,
        p = eJ(m, c, d),
        A = e$(m, c, d);
    return (0, a.jsx)(eH, {
        ...e,
        ariaLabel: r,
        ariaHidden: s,
        specs: m,
        children: (0, a.jsxs)("svg", {
            width: g,
            height: _,
            viewBox: `0 0 ${g} ${_}`,
            className: l()(eX.dK, eX.JW),
            "aria-hidden": !0,
            children: [
                (0, a.jsxs)("mask", {
                    id: u,
                    children: [
                        (0, a.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: m.size,
                            height: m.size,
                            fill: "white",
                            mask: `url(#${eK.hW.SQUIRCLE})`,
                        }),
                        (0, a.jsx)("circle", {
                            cx: p.x + p.width / 2,
                            cy: p.y + p.height / 2,
                            r: p.width / 2,
                            fill: "black",
                        }),
                    ],
                }),
                (0, a.jsx)("mask", {
                    id: h,
                    children: (0, a.jsx)("circle", {
                        cx: A.x + A.width / 2,
                        cy: A.y + A.height / 2,
                        r: A.width / 2,
                        fill: "white",
                    }),
                }),
                (0, a.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: m.size,
                    height: m.size,
                    mask: `url(#${u})`,
                    children: (0, a.jsx)(
                        "div",
                        {
                            className: eX.yA,
                            children: (0, a.jsx)("img", {
                                src: t ?? void 0,
                                alt: " ",
                                className: eX.my,
                                "aria-hidden": !0,
                            }),
                        },
                        t,
                    ),
                }),
                null != o &&
                    (0, a.jsx)("foreignObject", {
                        ...A,
                        mask: `url(#${h})`,
                        children: (0, a.jsx)("img", { src: o, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function e$(e, t, n) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + t, y: e.size - 16 - e.offset + n };
}
function eJ(e, t, n) {
    let a = e$(e, t, n),
        i = a.x - 2,
        s = a.y - 2;
    return { width: a.height + 4, height: a.width + 4, x: i, y: s };
}
var eq = n(756195);
function eQ(e) {
    let { message: t, channel: n, focusProps: s, isSelected: r, isUnread: c, groupedMessages: d } = e,
        u = n.type === eU.rbe.UNKNOWN ? H.N : (0, el.gU)(n, null),
        h = (0, es.Ay)(n, !1),
        g = (0, o.bG)([v.A], () => v.A.getGuild(n.getGuildId())),
        { nick: _, colorString: p } = (0, ec.Ay)(t),
        { avatarSrc: A, eventHandlers: b } = (0, ep.A)({
            userId: t.author.id,
            size: W._3.SIZE_32,
            guildId: g?.id,
            animateOnHover: !0,
        }),
        x = n.type !== eU.rbe.GUILD_ANNOUNCEMENT || null == g,
        f = (0, eh.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        I = (0, a.jsx)("div", {
            className: eL.Ys,
            inert: !0,
            children: (0, a.jsx)(em.A, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: eL.Xh,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != g && ex.A.requestMember(g.id, t.author.id);
        }, [g, t.author.id]),
        (0, a.jsx)(Z.vN, {
            ...s,
            children: (0, a.jsxs)("div", {
                onMouseLeave: b.onMouseLeave,
                onMouseEnter: b.onMouseEnter,
                className: eL.zC,
                children: [
                    c && !r && (0, a.jsx)("div", { className: eL.Zm }),
                    (0, a.jsx)(k.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: x
                            ? (0, a.jsx)(eW, {
                                  "aria-label": "User Avatar",
                                  src: A,
                                  size: W._3.SIZE_32,
                                  cornerIconUrl: null != g ? (0, eb.Iv)(g, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, a.jsx)(eZ, {
                                  "aria-label": "Guild Icon",
                                  src: (0, eb.Iv)(g, 32),
                                  size: W._3.SIZE_32,
                                  cornerIconUrl: t.author.getAvatarURL(g.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, a.jsxs)(k.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, a.jsxs)(k.B, {
                                direction: "horizontal",
                                gap: 4,
                                style: { whiteSpace: "nowrap", minWidth: 0, justifyContent: "space-between" },
                                children: [
                                    x
                                        ? (0, a.jsxs)("div", {
                                              className: eL.ZR,
                                              children: [
                                                  (0, a.jsx)("div", {
                                                      className: eL.Xh,
                                                      style: { color: p ?? void 0 },
                                                      children: (0, a.jsx)(Y.A, { children: I }),
                                                  }),
                                                  f,
                                              ],
                                          })
                                        : (0, a.jsx)(Y.A, {
                                              children: (0, a.jsx)($.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: p ?? void 0 },
                                                  className: eL.Xh,
                                                  children: g.name,
                                              }),
                                          }),
                                    (0, a.jsxs)(k.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, a.jsx)(ez, { message: t, channel: n, isUnread: c }),
                                            t.mentioned && c
                                                ? (0, a.jsx)(J.hV, { className: eL.WK, count: 1 })
                                                : (0, a.jsx)(e1, { message: t }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(k.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: l()(eL.HA, { [eL.gy]: c, [eL.wH]: r }),
                                children: [
                                    null !== u && (0, a.jsx)(u, { size: "xxs", className: eL.p4 }),
                                    (0, a.jsxs)(m.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: l()(eL.HA, { [eL.gy]: c, [eL.wH]: r }),
                                        children: [h, !x && ` \xb7 ${_}`],
                                    }),
                                ],
                            }),
                            (0, a.jsx)(e5, { message: t, isUnread: c, isSelected: r, channel: n }),
                            d.length > 0 &&
                                (0, a.jsx)(k.B, {
                                    gap: 4,
                                    style: { minWidth: 0, marginTop: 4, marginBottom: 4 },
                                    children: (0, a.jsx)(e0, { overflowMessages: d }),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function e0(e) {
    let { overflowMessages: t } = e,
        n = (0, z.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, a.jsxs)(k.B, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, a.jsx)(ei.Ay, { users: n, useFallbackUserForPopout: !0, size: ei.DN.SIZE_16 }),
            (0, a.jsx)(m.E, {
                variant: "text-sm/medium",
                className: eL.gD,
                children: ek.intl.formatToPlainString(eq.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function e1(e) {
    let { message: t } = e,
        n = (0, e_.jb)(t.timestamp.getTime());
    return (0, a.jsx)(eu.A, {
        timestamp: t.timestamp,
        className: eL.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function e5(e) {
    let { message: t, channel: n, isUnread: s, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: s } = e,
                { content: r } = (0, eg.A)(t, {
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
                    i = "" === t.content,
                    o = t.embeds.some((e) => e.type === eU.Auw.GIFV),
                    c = ((e = t.embeds.some((e) => e.type === eU.Auw.GIFV)), t.attachments.length + +!!e),
                    d = (0, er.A)(t),
                    u = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    m = t.type === eU.lAJ.POLL_RESULT,
                    g = t.hasFlag(eU.pr7.IS_VOICE_MESSAGE),
                    _ = t.type === eU.lAJ.USER_JOIN,
                    p = null;
                1 === c
                    ? (p = q.x)
                    : c > 1
                      ? (p = Q.s)
                      : d
                        ? (p = eo.A)
                        : h || m
                          ? (p = ee.Y)
                          : u
                            ? (p = et.t)
                            : g && (p = en.H);
                let A = !0,
                    b = null;
                return (
                    i
                        ? d
                            ? (b = ek.intl.string(ek.t["9ddYKt"]))
                            : h
                              ? ((A = !1), (b = t.poll?.question.text))
                              : (b = m
                                    ? ek.intl.string(ek.t.sad2PH)
                                    : o
                                      ? ek.intl.string(ek.t.p0oZmy)
                                      : c > 1
                                        ? ek.intl.formatToPlainString(ek.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? ek.intl.string(ek.t.tCcq5p)
                                          : u
                                            ? ek.intl.format(ek.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : g
                                              ? ek.intl.string(ek.t.slFYgi)
                                              : _
                                                ? ek.intl.string(ek.t.Yvvfw9)
                                                : ek.intl.string(ek.t.sDqZHL))
                        : ((A = !1),
                          (b = (0, a.jsx)(ed.Ay, {
                              content: r,
                              message: t,
                              compact: !1,
                              className: l()(eL.iU, { [eL.gy]: n, [eL.wH]: s }),
                          }))),
                    i &&
                        (b = (0, a.jsx)("div", {
                            className: l()(eL.iU, { [eL.gy]: n, [eL.wH]: s, [eL.QP]: A }),
                            children: b,
                        })),
                    { previewContent: b, Icon: p }
                );
            }, [t, r, n, s]);
        })({ message: t, channel: n, isUnread: s, isSelected: r });
    return (0, a.jsxs)(k.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, a.jsx)(c, { size: "xxs", className: eL.p4 }),
            (0, a.jsx)(m.E, { variant: "text-sm/normal", lineClamp: 1, className: eL.iU, children: o }),
        ],
    });
}
let e9 = (0, i.memo)(
    function (e) {
        let { message: t, groupedMessages: s, isUnread: r } = e,
            c = t.message,
            d = (0, O.op)(),
            { params: u } = (0, K.W5)(),
            h = (0, o.bG)([j.A], () => {
                if (null == c) return null;
                let e = j.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new eA.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: eU.rbe.UNKNOWN,
                          name: ek.intl.string(ek.t.J90oLW),
                      });
            }),
            m = eI((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: g } = (0, C.X8)({ location: "NotificationsInboxMessageUnit" }),
            _ = (0, es.Ay)(h),
            p = i.useMemo(() => `${c?.author.username}: ${_}`, [c?.author.username, _]),
            A = s?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == c || null == h
            ? null
            : (0, a.jsx)(X.s, {
                  "aria-label": p,
                  className: l()(eL.FJ, { [eL.wH]: c.id === u.messageId, [eL.Yj]: m }),
                  onClick: () => {
                      M.A.inboxItemClick({
                          message: c,
                          channel: h,
                          isUnread: r,
                          isSidebar: g === C.U5.SIDEBAR,
                          viewId: d,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, O.Ml)({ interactionType: O.X8.CONTEXT_MENU, message: c, viewId: d }),
                          (0, ea.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, a.jsx)(e, { ...t, channel: h });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, a.jsx)(eQ, {
                      message: c,
                      channel: h,
                      isSelected: c.id === u.messageId,
                      groupedMessages: A,
                      isUnread: r,
                  }),
              });
    },
    (e, t) =>
        e.isUnread === t.isUnread &&
        e.message.id === t.message.id &&
        e.groupedMessages?.length === t.groupedMessages?.length,
);
n(321073);
var e7 = n(837381),
    e2 = n(847374),
    e6 = n(912592),
    e3 = n(821609),
    e8 = n(689175),
    e4 = n(928039),
    te = n(625494);
let tt = { [ew.Ur.UNREAD]: !0, [ew.Ur.TODAY]: !0, [ew.Ur.YESTERDAY]: !0, [ew.Ur.OLDER]: !0 },
    tn = { [ew.Ur.UNREAD]: !0, [ew.Ur.TODAY]: !1, [ew.Ur.YESTERDAY]: !1, [ew.Ur.OLDER]: !1 },
    ta = (0, ef.v)((e, t) => ({
        messageCategoryOpenStates: tt,
        getOpenState: (e) => t().messageCategoryOpenStates[e],
        toggleOpenState: (t) => {
            e((e) => ({
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [t]: !e.messageCategoryOpenStates[t] },
            }));
        },
        setOpenStateFromUnreads: (t) => {
            e({ messageCategoryOpenStates: t ? tn : tt });
        },
    }));
var ti = n(645875);
function ts(e) {
    e.stopPropagation();
}
function tl(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, a.jsx)(_.D, {
        "aria-expanded": n,
        onClick: i,
        className: l()(ti.TP, { [ti.yZ]: !n }),
        children: (0, a.jsxs)(k.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, a.jsx)($.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: ti.P7,
                    children: (0, z.capitalize)(ek.intl.string(ew.v7[t]).toLowerCase()),
                }),
                (0, a.jsx)(e2.a, { size: "xxs", className: ti.ai }),
            ],
        }),
    });
}
let tr = [ew.Ur.UNREAD, ew.Ur.TODAY, ew.Ur.YESTERDAY, ew.Ur.OLDER];
function to() {
    let { analyticsLocations: e } = (0, I.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, a.jsx)("div", {
        className: ti.y7,
        children: (0, a.jsxs)(k.B, {
            gap: 24,
            align: "center",
            children: [
                (0, a.jsxs)(k.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, a.jsx)(e6.K, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: c.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, a.jsx)(m.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: ek.intl.string(eq.default["O+racd"]),
                        }),
                    ],
                }),
                (0, a.jsx)(e3.$, {
                    variant: "secondary",
                    onClick: () => (0, w.tZ)(e),
                    text: ek.intl.string(eq.default.klSpfs),
                }),
            ],
        }),
    });
}
function tc(e) {
    let t,
        {
            messages: n,
            unreadMessages: s,
            loadMore: r,
            renderLoadingState: c,
            renderMessageGroup: d,
            scrollerClassName: u,
            className: h,
            listName: m,
            ignoreGrouping: g = !1,
        } = e,
        _ = (0, O.op)(),
        p = i.useRef(null),
        A = (0, e4.A)(m, p),
        { entrypoint: b, notificationCenterVariant: x } = (0, C.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: f,
            isLoadingComplete: I,
            hasLoadedEver: T,
        } = (0, o.cf)([D.A], () => ({
            isLoading: D.A.isLoading,
            isLoadingComplete: D.A.isLoadingComplete,
            hasLoadedEver: D.A.hasLoadedEver,
        })),
        N = !T && f,
        { messageCategoryOpenStates: j, toggleOpenState: v } = ta(),
        y =
            ((t = (0, o.yK)([D.A], () => D.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)([D.A, E.Ay], () => {
                let e = D.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === ew.Ve.UNLOADED) && E.Ay.hasUnread(n)) return !0;
                }
                return !1;
            }, [t]));
    i.useEffect(() => {
        function e() {
            p.current?.scrollPageUp({ animate: !0 });
        }
        function t() {
            p.current?.scrollPageDown({ animate: !0 });
        }
        return (
            te._.subscribe(eU.jej.SCROLL_PAGE_DOWN, t),
            te._.subscribe(eU.jej.SCROLL_PAGE_UP, e),
            () => {
                te._.unsubscribe(eU.jej.SCROLL_PAGE_DOWN, t), te._.unsubscribe(eU.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let M = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && r?.(ew.VA.USER_SCROLL);
        }, [r]),
        R = i.useMemo(() => {
            let e = { [ew.Ur.UNREAD]: [], [ew.Ur.TODAY]: [], [ew.Ur.YESTERDAY]: [], [ew.Ur.OLDER]: [] },
                t = { [ew.Ur.UNREAD]: [], [ew.Ur.TODAY]: [], [ew.Ur.YESTERDAY]: [], [ew.Ur.OLDER]: [] },
                a = { [ew.Ur.UNREAD]: {}, [ew.Ur.TODAY]: {}, [ew.Ur.YESTERDAY]: {}, [ew.Ur.OLDER]: {} };
            return (
                (n.length > 0 || s.length > 0) &&
                    (F().each(s, (e) => {
                        e.kind === ew.yL.MENTION
                            ? t[ew.Ur.UNREAD].push(e)
                            : e.channelId in a[ew.Ur.UNREAD]
                              ? a[ew.Ur.UNREAD][e.channelId].push(e)
                              : (a[ew.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    F().each(n, (e) => {
                        let n = (0, w.i7)(e);
                        e.kind === ew.yL.MENTION
                            ? t[n].push(e)
                            : e.channelId in a[n]
                              ? a[n][e.channelId].push(e)
                              : (a[n][e.channelId] = [e]);
                    }),
                    F().each(tr, (n) => {
                        [...Object.values(a[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => S.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, s]),
        k = 0 === n.length && 0 === s.length && I,
        L = 0 === n.length && 0 === s.length && !T && f,
        B = i.useMemo(() => {
            let e = [];
            return (
                L
                    ? e.push(c())
                    : k
                      ? e.push((0, a.jsx)(to, {}, "empty-state"))
                      : g
                        ? (e.push(...s.map((e) => d([e], !0))), e.push(...n.map((e) => d([e], !1))))
                        : F().each(tr, (t) => {
                              0 !== R[t].length &&
                                  (e.push(
                                      (0, a.jsx)(
                                          tl,
                                          {
                                              group: t,
                                              isOpen: j[t],
                                              toggleOpenedState: () => {
                                                  let e = j[t];
                                                  v(t), (0, O.Ut)({ section: t, enabled: !e, viewId: _ });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  j[t] && e.push(...R[t].map((e) => d(e, t === ew.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, s, c, j, v, R, g, d, k, L, _]),
        G = B[B.length - 1],
        V = i.isValidElement(G) && G.type === tl,
        z = (0, U.S)((e) => e.setInboxReadState);
    i.useEffect(() => {
        L || z(0 === R.UNREAD.length);
    }, [R, L, z]);
    let K = (n.length > 0 || s.length > 0) && null != r && f;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            a = i.useRef(!1),
            s = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: l } = ta();
        i.useEffect(() => {
            t || a.current || (l(s), (a.current = !0));
        }, [l, s, t]);
    })({ messagesByCategory: R, loadingInitial: N });
    let Y = i.useCallback(() => {
        let e = tr.filter((e) => j[e]).reduce((e, t) => e + R[t].length, 0),
            t = p.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [j, R]);
    i.useEffect(() => {
        L || f || 0 >= Y() || ((!V || y) && r?.(ew.VA.FILL_SCROLLER));
    }, [Y, r, L, f, V, y]);
    let X = i.useMemo(() => {
        let e = Math.min(Math.max(2, Y()), 20);
        return (0, a.jsx)(P, { withHeader: !1, size: e });
    }, [Y]);
    return (
        (0, O.Hi)({
            notificationCenterVariant: x,
            entrypoint: b,
            messages: n,
            unreadMessages: s,
            messagesByCategory: R,
            viewId: _,
        }),
        (0, a.jsx)("div", {
            className: l()(h, ti.KQ),
            onClick: ts,
            onDoubleClick: ts,
            "aria-label": e["aria-label"],
            children: (0, a.jsx)(e7.hD, {
                navigator: A,
                children: (0, a.jsx)(e7.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, a.jsxs)(e8.Ch, {
                            ref: (e) => {
                                (p.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            className: l()(ti.m4, u),
                            onScroll: M,
                            fade: !0,
                            ...n,
                            children: [B, K && !V ? X : null],
                        });
                    },
                }),
            }),
        })
    );
}
var td = n(873111);
let tu = [],
    th = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: ew.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function tm(e) {
    let { includePanelSpacing: t } = e,
        n = (0, O.op)(),
        { selectedFilter: s } = (0, R.A)(),
        r = (0, o.bG)([D.A], () => D.A.oldestDisplayedMessageId),
        c = (0, o.yK)([D.A], () => D.A.getInboxMessages()),
        d = (0, o.yK)([E.Ay, v.A, D.A], () =>
            c.filter(
                (e) =>
                    !(0, w.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: E.Ay,
                        GuildStore_: v.A,
                    }) && !(0, w.zo)(e, D.A.selectedItemInfo),
            ),
        ),
        m = (0, o.yK)([E.Ay, v.A, D.A], () =>
            c.filter(
                (e) =>
                    (0, w.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: E.Ay,
                        GuildStore_: v.A,
                    }) || (0, w.zo)(e, D.A.selectedItemInfo),
            ),
        ),
        g = i.useCallback(
            (e) => {
                s !== ew.Io.BOOKMARKS && M.A.loadMoreInbox({ viewId: n, loadingTrigger: e });
            },
            [s, n],
        ),
        { hasLoadedEver: _, canLoadMore: p } = (0, o.cf)([D.A], () => ({
            hasLoadedEver: D.A.hasLoadedEver,
            canLoadMore: D.A.canLoadMore({}),
        }));
    i.useEffect(() => {
        p && !_ && g(ew.VA.ON_OPEN);
    }, [p, _, g]),
        (function (e) {
            let { unreadChannelIds: t } = (0, w.U4)();
            i.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        let t = y.A.getMessages(e),
                            n = t.last()?.id,
                            a = E.Ay.ackMessageId(e),
                            i = t.hasPresent() && t.ready && !t.cached;
                        null != n &&
                            null != a &&
                            i &&
                            S.default.compare(a, n) >= 0 &&
                            b.ack(
                                e,
                                {
                                    section: eU.JJy.NOTIFICATIONS_INBOX,
                                    object: eU.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: eU.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(_ ? m : null);
    let f = (0, o.yK)([N.A], () => N.A.getSavedMessages()),
        I = i.useMemo(
            () =>
                f.flatMap((e) => {
                    let { message: t } = e;
                    return null == t
                        ? tu
                        : [
                              {
                                  id: t.id,
                                  channelId: t.channel_id,
                                  guildId: j.A.getBasicChannel(t.channel_id)?.guild_id,
                                  kind: ew.yL.BOOKMARK,
                                  message: t,
                              },
                          ];
                }),
            [f],
        ),
        U = t_(d, s, r),
        k = t_(m, s, null);
    (0, x.Ay)(() => {
        A.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, C.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            t = D.A.getDevOverrides().navOnClick ?? !0;
        if (e !== C.U5.SIDEBAR || !1 === t) return;
        let { message: a, isUnread: i } = (function (e, t) {
            let n = e[e.length - 1]?.message,
                a = t[t.length - 1]?.message,
                i = a ?? n;
            if (null != i) return { message: i, isUnread: null != a };
            let s = D.A.getNotifyingChannelIds();
            if (null == s || 0 === s.length) return { message: null, isUnread: !1 };
            let l = s[0],
                r = E.Ay.getTrackedAckMessageId(l);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: S.default.atNextMillisecond(r), channel_id: l }, isUnread: E.Ay.hasUnread(l) ?? !1 };
        })(U, k);
        null != a &&
            M.A.inboxItemClick({
                message: a,
                channel: { id: a.channel_id },
                isUnread: i,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: n,
            });
    }),
        (0, x.l0)(() => {
            A.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: L } = (0, C.X8)({ location: "NotificationsInboxSidebar" }),
        B = L === C.yF.DROPDOWN && s !== ew.Io.ALL,
        P = (0, ew.Yw)(s);
    return (0, a.jsx)("nav", {
        className: l()(td.kL, { [td.Yu]: t }),
        children: (0, a.jsxs)(u.F, {
            forceLevel: 1,
            component: (0, a.jsx)(T.Ay, { hasSubheader: !0, guild: P, ...th }),
            children: [
                s === ew.Io.ALL && (0, a.jsx)(tb, { hideBanner: !_ || s !== ew.Io.ALL }),
                B && (0, a.jsx)(h.h, { size: 8 }),
                (0, a.jsx)(tc, {
                    className: td.cl,
                    renderMessageGroup: tA,
                    messages: s === ew.Io.BOOKMARKS ? I : U,
                    unreadMessages: s === ew.Io.BOOKMARKS ? [] : k,
                    listName: "notifications-inbox",
                    renderLoadingState: tp,
                    ignoreGrouping: s === ew.Io.BOOKMARKS,
                    loadMore: g,
                }),
            ],
        }),
    });
}
function tg(e) {
    return (0, a.jsx)(O.GM, { children: (0, a.jsx)(tm, { ...e }) });
}
function t_(e, t, n) {
    return i.useMemo(
        () =>
            0 === e.length || t === ew.Io.BOOKMARKS
                ? tu
                : e.filter((e) => {
                      let { id: a } = e;
                      return (
                          !(S.default.age(a) > ew.V$ || (null != n && 0 >= S.default.compare(a, n))) && t === ew.Io.ALL
                      );
                  }),
        [e, t, n],
    );
}
function tp() {
    return (0, a.jsx)(P, {});
}
function tA(e, t) {
    return (0, a.jsx)(e9, { message: e[0], groupedMessages: e.slice(1), isUnread: t }, e[0].id);
}
function tb(e) {
    let { hideBanner: t } = e,
        n = (0, U.S)((e) => e.shouldHide());
    return (0, a.jsx)("div", {
        className: l()(td.dl, { [td.jD]: n || t }),
        children: (0, a.jsxs)("div", {
            className: td.XD,
            children: [
                (0, a.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: td.vi,
                    children: ek.intl.string(ek.t["6XMM+D"]),
                }),
                (0, a.jsx)(g.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
            ],
        }),
    });
}
function tx() {
    let [e, t] = (0, i.useState)(!1),
        { analyticsLocations: n } = (0, I.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, a.jsx)(d.m, {
        asContainer: !0,
        position: "bottom",
        text: ek.intl.string(ek.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, a.jsx)(_.D, {
            className: td.aY,
            onMouseEnter: () => t(!0),
            onMouseLeave: () => t(!1),
            onClick: () => {
                (0, w.tZ)(n);
            },
            children: (0, a.jsx)(p.Z, {
                size: "xs",
                color: e ? c.A.colors.INTERACTIVE_TEXT_HOVER.css : c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
            }),
        }),
    });
}
