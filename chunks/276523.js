n.d(t, { A: () => tA });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(419354),
    o = n(17928),
    d = n(661531),
    c = n(707554),
    u = n(696986),
    h = n(834730),
    A = n(143838),
    _ = n(228366),
    g = n(334738),
    m = n(964486),
    p = n(793574),
    f = n(688810),
    E = n(420344),
    C = n(85109),
    x = n(734057),
    I = n(71393),
    b = n(232835),
    S = n(222823),
    N = n(935208),
    T = n(851109),
    v = n(706341),
    y = n(932883),
    R = n(599486),
    j = n(310031),
    L = n(394953),
    O = n(628325),
    G = n(331322),
    M = n(775602),
    D = n(826733);
function U(e) {
    let { withHeader: t = !0, size: n = 15 } = e,
        l = (0, o.bG)([M.A], () => M.A.useReducedMotion);
    return (0, i.jsxs)(G.B, {
        gap: 4,
        children: [
            t &&
                (0, i.jsx)("div", {
                    className: r()(D.iE, { [D.cb]: l }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, i.jsx)(P, { className: r()(D.nq, D.NX) }),
                }),
            Array.from({ length: n }).map((e, t) => (0, i.jsx)(w, {}, t)),
        ],
    });
}
function P(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: r()(D.n8, t) });
}
function w() {
    let e = (0, o.bG)([M.A], () => M.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: r()(D.iE, { [D.cb]: e }),
        children: [
            (0, i.jsx)("div", { className: r()(D.my, D.NX) }),
            (0, i.jsxs)("div", {
                className: D.U0,
                children: [
                    (0, i.jsx)(P, { className: r()(D.Md, D.NX) }),
                    (0, i.jsx)(P, { className: r()(D.nq, D.NX) }),
                    (0, i.jsx)(P, { className: r()(D.xs, D.NX) }),
                ],
            }),
        ],
    });
}
var k = n(735438),
    V = n.n(k),
    B = n(873263),
    H = n(3026),
    F = n(890856),
    W = n(276293),
    K = n(778712),
    Y = n(187322),
    z = n(534514),
    q = n(777666),
    X = n(191023),
    Q = n(477262),
    J = n(642846),
    Z = n(797285),
    $ = n(983851),
    ee = n(442433),
    et = n(104171),
    en = n(47167),
    ei = n(713654),
    el = n(427930),
    es = n(427209),
    er = n(763754),
    ea = n(291812),
    eo = n(606049),
    ed = n(812299),
    ec = n(943220),
    eu = n(375199),
    eh = n(995273),
    eA = n(854627),
    e_ = n(95701),
    eg = n(260509),
    em = n(860071),
    ep = n(353640);
let ef = (0, ep.v)((e, t) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(t().openMenus).some((t) => null != e && t.startsWith(`${e}:`)),
    openMenu: (t, n) => {
        let i = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.add(i), { openMenus: t };
        });
    },
    closeMenu: (t, n) => {
        let i = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.delete(i), { openMenus: t };
        });
    },
}));
var eE = n(990078),
    eC = n(939249),
    ex = n(922016),
    eI = n(305866),
    eb = n(933832),
    eS = n(606096),
    eN = n(997146),
    eT = n(550079),
    ev = n(477782),
    ey = n(782603),
    eR = n(461678),
    ej = n(880457),
    eL = n(164684),
    eO = n(914703),
    eG = n(849077),
    eM = n(652215),
    eD = n(985018),
    eU = n(285618);
let eP = {
    [eG.Th.MENTION]: [eG.kR.SETTINGS],
    [eG.Th.REPLY]: [eG.kR.SETTINGS],
    [eG.Th.REACTION]: [eG.kR.SETTINGS],
    [eG.Th.ANNOUNCEMENT]: [eG.kR.SETTINGS],
    [eG.Th.MESSAGE]: [eG.kR.SETTINGS],
};
function ew(e) {
    let { label: t, onClick: n, message: s, Icon: r, interactionType: a } = e,
        [o, d] = (0, l.useState)(!1),
        c = (0, y.op)();
    return (0, i.jsx)(eE.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => d(!0),
        onTooltipHide: () => d(!1),
        children: (0, i.jsx)(eC.D, {
            className: eU.XI,
            onClick: (e) => {
                (0, y.Ml)({ message: s, interactionType: a, viewId: c }), e.stopPropagation(), n(s);
            },
            children: (0, i.jsx)(r, { size: o ? "sm" : "xs", className: eU.gE }),
        }),
    });
}
function ek(e) {
    let { channel: t, message: n, label: s, Icon: r, Menu: a, interactionType: o, actionType: d } = e,
        c = (0, y.op)(),
        [u, h] = (0, l.useState)(!1),
        [A, _] = (0, l.useState)(!1),
        g = (0, l.useRef)(null),
        { openMenu: m, closeMenu: p } = ef();
    return (0, i.jsx)(ex.Y, {
        shouldShow: A,
        animation: ex.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: g,
        onRequestClose: () => {
            _(!1), p(n.id, d);
        },
        renderPopout: (e) =>
            (0, i.jsx)(eI.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: g,
                children: (0, i.jsx)(a, { "data-menu-migrated": !0, renderPopoutProps: e, channel: t, message: n }),
            }),
        children: (e) =>
            (0, i.jsx)(eE.m, {
                text: s,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => h(!0),
                onTooltipHide: () => h(!1),
                children: (0, i.jsx)(eC.D, {
                    innerRef: g,
                    className: eU.XI,
                    onClick: (e) => {
                        let t;
                        (0, y.Ml)({ message: n, interactionType: o, viewId: c }),
                            e.stopPropagation(),
                            _((t = !A)),
                            t ? m(n.id, d) : p(n.id, d);
                    },
                    children: (0, i.jsx)(r, {
                        ...e,
                        message: n,
                        "aria-label": s,
                        className: eU.gE,
                        size: u ? "sm" : "xs",
                    }),
                }),
            }),
    });
}
let eV = {
    [eG.kR.ACK]: {
        type: "standard",
        Icon: eb.A,
        label: eD.intl.string(eD.t.e6RscS),
        onClick: (e) => {
            _.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                g.ack(
                    e.channel_id,
                    { object: eM.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: eM.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: y.X8.ACK,
    },
    [eG.kR.BOOKMARK]: {
        type: "menu",
        label: eD.intl.string(eD.t["9p3D9p"]),
        Icon: (e) =>
            null != C.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, i.jsx)(eS.c, { ...e })
                : (0, i.jsx)(eN.c, { ...e }),
        interactionType: y.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                l = (0, o.bG)([C.A], () => C.A.getSavedMessage(t.channel_id, t.id)),
                s = (0, ej.P)({ message: t, savedMessage: l });
            return (0, i.jsxs)(eT.W, {
                "data-menu-migrated-auto": !0,
                ...n,
                navId: "message-reminder-create",
                "aria-label": eD.intl.string(eD.t.mJ3P0N),
                onClose: n.closePopout,
                onSelect: () => null,
                children: [
                    null != l
                        ? (0, i.jsx)(ev.Dr, {
                              id: "remove-from-for-later",
                              label: eD.intl.string(eD.t.SvXS1Z),
                              icon: eS.c,
                              leadingAccessory: { type: "icon", icon: eS.c },
                              action: () =>
                                  (0, eL.x)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: l.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, i.jsx)(ev.Dr, {
                              id: "create-bookmark",
                              label: eD.intl.string(eD.t["9p3D9p"]),
                              icon: eN.c,
                              leadingAccessory: { type: "icon", icon: eN.c },
                              action: () => (0, eL.Y)({ channelId: t.channel_id, messageId: t.id, displayToast: !0 }),
                          }),
                    (0, i.jsx)(ev.bX, {}),
                    s,
                ],
            });
        },
    },
    [eG.kR.SETTINGS]: {
        type: "menu",
        Icon: ey.X,
        label: eD.intl.string(eD.t.h850Ss),
        interactionType: y.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, i.jsx)(eO.A, { ...n, channel: t, navId: "thread-context", label: eD.intl.string(eD.t["1NBjqb"]) })
                : (0, i.jsx)(eR.A, { ...n, channel: t, navId: "channel-context", label: eD.intl.string(eD.t.Xm41aV) });
        },
    },
};
function eB(e) {
    let t,
        { message: n, channel: s, isUnread: r } = e,
        a =
            ((t = (0, L.i3)()),
            (0, l.useMemo)(() => {
                let e = eG.Th.MENTION,
                    n = new Set();
                return r && n.add(eG.kR.ACK), t && n.add(eG.kR.BOOKMARK), eP[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, r, t]));
    return (0, i.jsx)(G.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: eU.o1,
        children: a.map((e) => {
            let t = eV[e];
            switch (t.type) {
                case "standard":
                    return (0, i.jsx)(ew, { ...t, actionType: e, message: n }, e);
                case "menu":
                    return (0, i.jsx)(ek, { ...t, actionType: e, channel: s, message: n }, e);
            }
        }),
    });
}
var eH = n(97808),
    eF = n(573435),
    eW = n(190460),
    eK = n(282291);
function eY(e) {
    let {
            children: t,
            size: n,
            onClick: s,
            onMouseDown: a,
            onKeyDown: o,
            onContextMenu: d,
            onMouseEnter: c,
            onMouseLeave: u,
            className: h,
            ariaHidden: A,
            avatarDecoration: _,
            specs: g,
            cornerIconUrl: m,
            cornerIconOffsetX: p,
            cornerIconOffsetY: f,
            ariaLabel: E,
        } = e,
        C = { width: (0, K.FT)(n), height: (0, K.FT)(n) },
        x = (0, l.useId)(),
        I = g.size * eW.Xq,
        b =
            null != _ &&
            (0, i.jsxs)("svg", {
                width: I,
                height: I,
                viewBox: `0 0 ${I} ${I}`,
                className: eK.DX,
                "aria-hidden": !0,
                children: [
                    (0, i.jsxs)("mask", {
                        id: x,
                        children: [
                            (0, i.jsx)("rect", { x: 0, y: 0, width: I, height: I, fill: "white" }),
                            null != m &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: s,
                                            width: r,
                                            x: a,
                                            y: o,
                                        } = (function (e, t, n, i) {
                                            let { height: l, width: s, x: r, y: a } = eQ(e, n, i),
                                                o = (t - e.size) / 2;
                                            return { width: s, height: l, x: r + o, y: a + o };
                                        })(e, t, n, l);
                                    return (0, i.jsx)("rect", {
                                        mask: `url(#${eF.hW.SQUIRCLE})`,
                                        height: s,
                                        width: r,
                                        x: a,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(g, I, p, f),
                        ],
                    }),
                    (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: I,
                        height: I,
                        mask: `url(#${x})`,
                        children: (0, i.jsx)("img", { className: eK.M, src: _, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != s || null != a
        ? (0, i.jsxs)(eC.D, {
              className: r()(eK.iE, eK.Wn, h),
              style: C,
              onClick: s,
              onContextMenu: d,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: c ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": E ?? void 0,
              "aria-hidden": A,
              children: [t, b],
          })
        : (0, i.jsxs)("div", {
              className: r()(eK.iE, h),
              style: C,
              onContextMenu: d ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": E ?? void 0,
              "aria-hidden": A,
              children: [t, b],
          });
}
function ez(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": a,
            imageClassName: o,
            cornerIconUrl: d,
            cornerIconOffsetX: c = 0,
            cornerIconOffsetY: u = 0,
        } = e,
        h = (0, K.Kj)(n),
        A = h.size,
        _ = (0, l.useId)();
    return (0, i.jsx)(eY, {
        ...e,
        ariaLabel: a,
        ariaHidden: s,
        specs: h,
        children: (0, i.jsxs)("svg", {
            width: A + c,
            height: A + u,
            viewBox: `0 0 ${A + c} ${A + u}`,
            className: r()(eK.dK, eK.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: _,
                    children: [
                        (0, i.jsx)("circle", { cx: h.size / 2, cy: h.size / 2, r: h.size / 2, fill: "white" }),
                        null != d &&
                            (function (e, t, n) {
                                let { height: l, width: s, x: r, y: a } = eQ(e, t, n);
                                return (0, i.jsx)("rect", {
                                    mask: `url(#${eF.hW.SQUIRCLE})`,
                                    height: l,
                                    width: s,
                                    x: r,
                                    y: a,
                                    fill: "black",
                                });
                            })(h, c, u),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: h.size,
                    height: h.size,
                    mask: `url(#${_})`,
                    children: (0, i.jsx)(eH.d9, { src: t, className: o, isSpeaking: !1 }),
                }),
                null != d &&
                    (0, i.jsx)("foreignObject", {
                        ...eX(h, c, u),
                        mask: `url(#${eF.hW.SQUIRCLE})`,
                        children: (0, i.jsx)("img", { src: d, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eq(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": a,
            cornerIconUrl: o,
            cornerIconOffsetX: d = 0,
            cornerIconOffsetY: c = 0,
        } = e,
        u = (0, l.useId)(),
        h = (0, l.useId)(),
        A = (0, K.Kj)(n),
        _ = A.size + d,
        g = A.size + c,
        m = eQ(A, d, c),
        p = eX(A, d, c);
    return (0, i.jsx)(eY, {
        ...e,
        ariaLabel: a,
        ariaHidden: s,
        specs: A,
        children: (0, i.jsxs)("svg", {
            width: _,
            height: g,
            viewBox: `0 0 ${_} ${g}`,
            className: r()(eK.dK, eK.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: u,
                    children: [
                        (0, i.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: A.size,
                            height: A.size,
                            fill: "white",
                            mask: `url(#${eF.hW.SQUIRCLE})`,
                        }),
                        (0, i.jsx)("circle", {
                            cx: m.x + m.width / 2,
                            cy: m.y + m.height / 2,
                            r: m.width / 2,
                            fill: "black",
                        }),
                    ],
                }),
                (0, i.jsx)("mask", {
                    id: h,
                    children: (0, i.jsx)("circle", {
                        cx: p.x + p.width / 2,
                        cy: p.y + p.height / 2,
                        r: p.width / 2,
                        fill: "white",
                    }),
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: A.size,
                    height: A.size,
                    mask: `url(#${u})`,
                    children: (0, i.jsx)(
                        "div",
                        {
                            className: eK.yA,
                            children: (0, i.jsx)("img", {
                                src: t ?? void 0,
                                alt: " ",
                                className: eK.my,
                                "aria-hidden": !0,
                            }),
                        },
                        t,
                    ),
                }),
                null != o &&
                    (0, i.jsx)("foreignObject", {
                        ...p,
                        mask: `url(#${h})`,
                        children: (0, i.jsx)("img", { src: o, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function eX(e, t, n) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + t, y: e.size - 16 - e.offset + n };
}
function eQ(e, t, n) {
    let i = eX(e, t, n),
        l = i.x - 2,
        s = i.y - 2;
    return { width: i.height + 4, height: i.width + 4, x: l, y: s };
}
var eJ = n(756195);
function eZ(e) {
    let { message: t, channel: n, focusProps: s, isSelected: a, isUnread: d, groupedMessages: c } = e,
        u = n.type === eM.rbe.UNKNOWN ? W.N : (0, ei.gU)(n, null),
        A = (0, en.Ay)(n, !1),
        _ = (0, o.bG)([I.A], () => I.A.getGuild(n.getGuildId())),
        { nick: g, colorString: m } = (0, er.Ay)(t),
        { avatarSrc: p, eventHandlers: f } = (0, eA.A)({
            userId: t.author.id,
            size: K._3.SIZE_32,
            guildId: _?.id,
            animateOnHover: !0,
        }),
        E = n.type !== eM.rbe.GUILD_ANNOUNCEMENT || null == _,
        C = (0, ed.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        x = (0, i.jsx)("div", {
            className: eU.Ys,
            inert: !0,
            children: (0, i.jsx)(ec.A, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: eU.Xh,
            }),
        });
    return (
        (0, l.useEffect)(() => {
            null != _ && em.A.requestMember(_.id, t.author.id);
        }, [_, t.author.id]),
        (0, i.jsx)(Y.vN, {
            ...s,
            children: (0, i.jsxs)("div", {
                onMouseLeave: f.onMouseLeave,
                onMouseEnter: f.onMouseEnter,
                className: eU.zC,
                children: [
                    d && !a && (0, i.jsx)("div", { className: eU.Zm }),
                    (0, i.jsx)(G.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: E
                            ? (0, i.jsx)(ez, {
                                  "aria-label": "User Avatar",
                                  src: p,
                                  size: K._3.SIZE_32,
                                  cornerIconUrl: null != _ ? (0, eg.Iv)(_, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, i.jsx)(eq, {
                                  "aria-label": "Guild Icon",
                                  src: (0, eg.Iv)(_, 32),
                                  size: K._3.SIZE_32,
                                  cornerIconUrl: t.author.getAvatarURL(_.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, i.jsxs)(G.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, i.jsxs)(G.B, {
                                direction: "horizontal",
                                gap: 4,
                                style: { whiteSpace: "nowrap", minWidth: 0, justifyContent: "space-between" },
                                children: [
                                    E
                                        ? (0, i.jsxs)("div", {
                                              className: eU.ZR,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: eU.Xh,
                                                      style: { color: m ?? void 0 },
                                                      children: (0, i.jsx)(H.A, { children: x }),
                                                  }),
                                                  C,
                                              ],
                                          })
                                        : (0, i.jsx)(H.A, {
                                              children: (0, i.jsx)(z.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: m ?? void 0 },
                                                  className: eU.Xh,
                                                  children: _.name,
                                              }),
                                          }),
                                    (0, i.jsxs)(G.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, i.jsx)(eB, { message: t, channel: n, isUnread: d }),
                                            t.mentioned && d
                                                ? (0, i.jsx)(q.hV, { className: eU.WK, count: 1 })
                                                : (0, i.jsx)(e0, { message: t }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(G.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: r()(eU.HA, { [eU.gy]: d, [eU.wH]: a }),
                                children: [
                                    null !== u && (0, i.jsx)(u, { size: "xxs", className: eU.p4 }),
                                    (0, i.jsxs)(h.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: r()(eU.HA, { [eU.gy]: d, [eU.wH]: a }),
                                        children: [A, !E && ` \xb7 ${g}`],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(e1, { message: t, isUnread: d, isSelected: a, channel: n }),
                            c.length > 0 &&
                                (0, i.jsx)(G.B, {
                                    gap: 4,
                                    style: { minWidth: 0, marginTop: 4, marginBottom: 4 },
                                    children: (0, i.jsx)(e$, { overflowMessages: c }),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function e$(e) {
    let { overflowMessages: t } = e,
        n = (0, k.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, i.jsxs)(G.B, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, i.jsx)(et.Ay, { users: n, useFallbackUserForPopout: !0, size: et.DN.SIZE_16 }),
            (0, i.jsx)(h.E, {
                variant: "text-sm/medium",
                className: eU.gD,
                children: eD.intl.formatToPlainString(eJ.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function e0(e) {
    let { message: t } = e,
        n = (0, eh.jb)(t.timestamp.getTime());
    return (0, i.jsx)(eo.A, {
        timestamp: t.timestamp,
        className: eU.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function e1(e) {
    let { message: t, channel: n, isUnread: s, isSelected: a } = e,
        { previewContent: o, Icon: d } = (function (e) {
            let { message: t, isUnread: n, isSelected: s } = e,
                { content: a } = (0, eu.A)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, l.useMemo)(() => {
                let e,
                    l = "" === t.content,
                    o = t.embeds.some((e) => e.type === eM.Auw.GIFV),
                    d = ((e = t.embeds.some((e) => e.type === eM.Auw.GIFV)), t.attachments.length + +!!e),
                    c = (0, el.A)(t),
                    u = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    A = t.type === eM.lAJ.POLL_RESULT,
                    _ = t.hasFlag(eM.pr7.IS_VOICE_MESSAGE),
                    g = t.type === eM.lAJ.USER_JOIN,
                    m = null;
                1 === d
                    ? (m = X.x)
                    : d > 1
                      ? (m = Q.s)
                      : c
                        ? (m = es.A)
                        : h || A
                          ? (m = J.Y)
                          : u
                            ? (m = Z.t)
                            : _ && (m = $.H);
                let p = !0,
                    f = null;
                return (
                    l
                        ? c
                            ? (f = eD.intl.string(eD.t["9ddYKt"]))
                            : h
                              ? ((p = !1), (f = t.poll?.question.text))
                              : (f = A
                                    ? eD.intl.string(eD.t.sad2PH)
                                    : o
                                      ? eD.intl.string(eD.t.p0oZmy)
                                      : d > 1
                                        ? eD.intl.formatToPlainString(eD.t.rtfTKp, { count: d })
                                        : 1 === d
                                          ? eD.intl.string(eD.t.tCcq5p)
                                          : u
                                            ? eD.intl.format(eD.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : _
                                              ? eD.intl.string(eD.t.slFYgi)
                                              : g
                                                ? eD.intl.string(eD.t.Yvvfw9)
                                                : eD.intl.string(eD.t.sDqZHL))
                        : ((p = !1),
                          (f = (0, i.jsx)(ea.Ay, {
                              content: a,
                              message: t,
                              compact: !1,
                              className: r()(eU.iU, { [eU.gy]: n, [eU.wH]: s }),
                          }))),
                    l &&
                        (f = (0, i.jsx)("div", {
                            className: r()(eU.iU, { [eU.gy]: n, [eU.wH]: s, [eU.QP]: p }),
                            children: f,
                        })),
                    { previewContent: f, Icon: m }
                );
            }, [t, a, n, s]);
        })({ message: t, channel: n, isUnread: s, isSelected: a });
    return (0, i.jsxs)(G.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != d && (0, i.jsx)(d, { size: "xxs", className: eU.p4 }),
            (0, i.jsx)(h.E, { variant: "text-sm/normal", lineClamp: 1, className: eU.iU, children: o }),
        ],
    });
}
let e2 = (0, l.memo)(
    function (e) {
        let { message: t, groupedMessages: s, isUnread: a } = e,
            d = t.message,
            c = (0, y.op)(),
            { params: u } = (0, B.W5)(),
            h = (0, o.bG)([x.A], () => {
                if (null == d) return null;
                let e = x.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new e_.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: eM.rbe.UNKNOWN,
                          name: eD.intl.string(eD.t.J90oLW),
                      });
            }),
            A = ef((e) => e.isMenuOpenForMessage(d?.id ?? null)),
            { notificationCenterVariant: _ } = (0, T.X8)({ location: "NotificationsInboxMessageUnit" }),
            g = (0, en.Ay)(h),
            m = l.useMemo(() => `${d?.author.username}: ${g}`, [d?.author.username, g]),
            p = s?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == d || null == h
            ? null
            : (0, i.jsx)(F.s, {
                  "aria-label": m,
                  className: r()(eU.FJ, { [eU.wH]: d.id === u.messageId, [eU.Yj]: A }),
                  onClick: () => {
                      v.A.inboxItemClick({
                          message: d,
                          channel: h,
                          isUnread: a,
                          isSidebar: _ === T.U5.SIDEBAR,
                          viewId: c,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, y.Ml)({ interactionType: y.X8.CONTEXT_MENU, message: d, viewId: c }),
                          (0, ee.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: h });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, i.jsx)(eZ, {
                      message: d,
                      channel: h,
                      isSelected: d.id === u.messageId,
                      groupedMessages: p,
                      isUnread: a,
                  }),
              });
    },
    (e, t) =>
        e.isUnread === t.isUnread &&
        e.message.id === t.message.id &&
        e.groupedMessages?.length === t.groupedMessages?.length,
);
n(321073);
var e6 = n(837381),
    e9 = n(847374),
    e3 = n(912592),
    e7 = n(821609),
    e4 = n(689175),
    e5 = n(928039),
    e8 = n(625494);
let te = { [eG.Ur.UNREAD]: !0, [eG.Ur.TODAY]: !0, [eG.Ur.YESTERDAY]: !0, [eG.Ur.OLDER]: !0 },
    tt = { [eG.Ur.UNREAD]: !0, [eG.Ur.TODAY]: !1, [eG.Ur.YESTERDAY]: !1, [eG.Ur.OLDER]: !1 },
    tn = (0, ep.v)((e, t) => ({
        messageCategoryOpenStates: te,
        getOpenState: (e) => t().messageCategoryOpenStates[e],
        toggleOpenState: (t) => {
            e((e) => ({
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [t]: !e.messageCategoryOpenStates[t] },
            }));
        },
        setOpenStateFromUnreads: (t) => {
            e({ messageCategoryOpenStates: t ? tt : te });
        },
    }));
var ti = n(645875);
function tl(e) {
    e.stopPropagation();
}
function ts(e) {
    let { group: t, isOpen: n, toggleOpenedState: l } = e;
    return (0, i.jsx)(eC.D, {
        "aria-expanded": n,
        onClick: l,
        className: r()(ti.TP, { [ti.yZ]: !n }),
        children: (0, i.jsxs)(G.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(z.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: ti.P7,
                    children: (0, k.capitalize)(eD.intl.string(eG.v7[t]).toLowerCase()),
                }),
                (0, i.jsx)(e9.a, { size: "xxs", className: ti.ai }),
            ],
        }),
    });
}
let tr = [eG.Ur.UNREAD, eG.Ur.TODAY, eG.Ur.YESTERDAY, eG.Ur.OLDER];
function ta() {
    let { analyticsLocations: e } = (0, f.Ay)(p.A.NOTIFICATIONS_INBOX);
    return (0, i.jsx)("div", {
        className: ti.y7,
        children: (0, i.jsxs)(G.B, {
            gap: 24,
            align: "center",
            children: [
                (0, i.jsxs)(G.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, i.jsx)(e3.K, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: d.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, i.jsx)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: eD.intl.string(eJ.default["O+racd"]),
                        }),
                    ],
                }),
                (0, i.jsx)(e7.$, {
                    variant: "secondary",
                    onClick: () => (0, L.tZ)(e),
                    text: eD.intl.string(eJ.default.klSpfs),
                }),
            ],
        }),
    });
}
function to(e) {
    let t,
        {
            messages: n,
            unreadMessages: s,
            loadMore: a,
            renderLoadingState: d,
            renderMessageGroup: c,
            scrollerClassName: u,
            className: h,
            listName: A,
            ignoreGrouping: _ = !1,
        } = e,
        g = (0, y.op)(),
        m = l.useRef(null),
        p = (0, e5.A)(A, m),
        { entrypoint: f, notificationCenterVariant: E } = (0, T.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: C,
            isLoadingComplete: x,
            hasLoadedEver: I,
        } = (0, o.cf)([j.A], () => ({
            isLoading: j.A.isLoading,
            isLoadingComplete: j.A.isLoadingComplete,
            hasLoadedEver: j.A.hasLoadedEver,
        })),
        b = !I && C,
        { messageCategoryOpenStates: v, toggleOpenState: R } = tn(),
        G =
            ((t = (0, o.yK)([j.A], () => j.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)([j.A, S.Ay], () => {
                let e = j.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === eG.Ve.UNLOADED) && S.Ay.hasUnread(n)) return !0;
                }
                return !1;
            }, [t]));
    l.useEffect(() => {
        function e() {
            m.current?.scrollPageUp({ animate: !0 });
        }
        function t() {
            m.current?.scrollPageDown({ animate: !0 });
        }
        return (
            e8._.subscribe(eM.jej.SCROLL_PAGE_DOWN, t),
            e8._.subscribe(eM.jej.SCROLL_PAGE_UP, e),
            () => {
                e8._.unsubscribe(eM.jej.SCROLL_PAGE_DOWN, t), e8._.unsubscribe(eM.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let M = l.useCallback(() => {
            let e = m.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && a?.(eG.VA.USER_SCROLL);
        }, [a]),
        D = l.useMemo(() => {
            let e = { [eG.Ur.UNREAD]: [], [eG.Ur.TODAY]: [], [eG.Ur.YESTERDAY]: [], [eG.Ur.OLDER]: [] },
                t = { [eG.Ur.UNREAD]: [], [eG.Ur.TODAY]: [], [eG.Ur.YESTERDAY]: [], [eG.Ur.OLDER]: [] },
                i = { [eG.Ur.UNREAD]: {}, [eG.Ur.TODAY]: {}, [eG.Ur.YESTERDAY]: {}, [eG.Ur.OLDER]: {} };
            return (
                (n.length > 0 || s.length > 0) &&
                    (V().each(s, (e) => {
                        e.kind === eG.yL.MENTION
                            ? t[eG.Ur.UNREAD].push(e)
                            : e.channelId in i[eG.Ur.UNREAD]
                              ? i[eG.Ur.UNREAD][e.channelId].push(e)
                              : (i[eG.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    V().each(n, (e) => {
                        let n = (0, L.i7)(e);
                        e.kind === eG.yL.MENTION
                            ? t[n].push(e)
                            : e.channelId in i[n]
                              ? i[n][e.channelId].push(e)
                              : (i[n][e.channelId] = [e]);
                    }),
                    V().each(tr, (n) => {
                        [...Object.values(i[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => N.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, s]),
        P = 0 === n.length && 0 === s.length && x,
        w = 0 === n.length && 0 === s.length && !I && C,
        k = l.useMemo(() => {
            let e = [];
            return (
                w
                    ? e.push(d())
                    : P
                      ? e.push((0, i.jsx)(ta, {}, "empty-state"))
                      : _
                        ? (e.push(...s.map((e) => c([e], !0))), e.push(...n.map((e) => c([e], !1))))
                        : V().each(tr, (t) => {
                              0 !== D[t].length &&
                                  (e.push(
                                      (0, i.jsx)(
                                          ts,
                                          {
                                              group: t,
                                              isOpen: v[t],
                                              toggleOpenedState: () => {
                                                  let e = v[t];
                                                  R(t), (0, y.Ut)({ section: t, enabled: !e, viewId: g });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  v[t] && e.push(...D[t].map((e) => c(e, t === eG.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, s, d, v, R, D, _, c, P, w, g]),
        B = k[k.length - 1],
        H = l.isValidElement(B) && B.type === ts,
        F = (0, O.S)((e) => e.setInboxReadState);
    l.useEffect(() => {
        w || F(0 === D.UNREAD.length);
    }, [D, w, F]);
    let W = (n.length > 0 || s.length > 0) && null != a && C;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            i = l.useRef(!1),
            s = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: r } = tn();
        l.useEffect(() => {
            t || i.current || (r(s), (i.current = !0));
        }, [r, s, t]);
    })({ messagesByCategory: D, loadingInitial: b });
    let K = l.useCallback(() => {
        let e = tr.filter((e) => v[e]).reduce((e, t) => e + D[t].length, 0),
            t = m.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [v, D]);
    l.useEffect(() => {
        w || C || 0 >= K() || ((!H || G) && a?.(eG.VA.FILL_SCROLLER));
    }, [K, a, w, C, H, G]);
    let Y = l.useMemo(() => {
        let e = Math.min(Math.max(2, K()), 20);
        return (0, i.jsx)(U, { withHeader: !1, size: e });
    }, [K]);
    return (
        (0, y.Hi)({
            notificationCenterVariant: E,
            entrypoint: f,
            messages: n,
            unreadMessages: s,
            messagesByCategory: D,
            viewId: g,
        }),
        (0, i.jsx)("div", {
            className: r()(h, ti.KQ),
            onClick: tl,
            onDoubleClick: tl,
            "aria-label": e["aria-label"],
            children: (0, i.jsx)(e6.hD, {
                navigator: p,
                children: (0, i.jsx)(e6.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsxs)(e4.Ch, {
                            ref: (e) => {
                                (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            className: r()(ti.m4, u),
                            onScroll: M,
                            fade: !0,
                            ...n,
                            children: [k, W && !H ? Y : null],
                        });
                    },
                }),
            }),
        })
    );
}
var td = n(873111);
let tc = [],
    tu = {
        controller: new a.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: eG.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function th(e) {
    let { includePanelSpacing: t } = e,
        n = (0, y.op)(),
        { selectedFilter: s } = (0, R.A)(),
        a = (0, o.bG)([j.A], () => j.A.oldestDisplayedMessageId),
        d = (0, o.yK)([j.A], () => j.A.getInboxMessages()),
        h = (0, o.yK)([S.Ay, I.A, j.A], () =>
            d.filter(
                (e) =>
                    !(0, L.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: S.Ay,
                        GuildStore_: I.A,
                    }) && !(0, L.zo)(e, j.A.selectedItemInfo),
            ),
        ),
        A = (0, o.yK)([S.Ay, I.A, j.A], () =>
            d.filter(
                (e) =>
                    (0, L.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: S.Ay,
                        GuildStore_: I.A,
                    }) || (0, L.zo)(e, j.A.selectedItemInfo),
            ),
        ),
        p = l.useCallback(
            (e) => {
                s !== eG.Io.BOOKMARKS && v.A.loadMoreInbox({ viewId: n, loadingTrigger: e });
            },
            [s, n],
        ),
        { hasLoadedEver: f, canLoadMore: O } = (0, o.cf)([j.A], () => ({
            hasLoadedEver: j.A.hasLoadedEver,
            canLoadMore: j.A.canLoadMore({}),
        }));
    l.useEffect(() => {
        O && !f && p(eG.VA.ON_OPEN);
    }, [O, f, p]),
        (function (e) {
            let { unreadChannelIds: t } = (0, L.U4)();
            l.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        let t = b.A.getMessages(e),
                            n = t.last()?.id,
                            i = S.Ay.ackMessageId(e),
                            l = t.hasPresent() && t.ready && !t.cached;
                        null != n &&
                            null != i &&
                            l &&
                            N.default.compare(i, n) >= 0 &&
                            g.ack(
                                e,
                                {
                                    section: eM.JJy.NOTIFICATIONS_INBOX,
                                    object: eM.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: eM.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(f ? A : null);
    let G = (0, o.yK)([C.A], () => C.A.getSavedMessages()),
        M = l.useMemo(
            () =>
                G.flatMap((e) => {
                    let { message: t } = e;
                    return null == t
                        ? tc
                        : [
                              {
                                  id: t.id,
                                  channelId: t.channel_id,
                                  guildId: x.A.getBasicChannel(t.channel_id)?.guild_id,
                                  kind: eG.yL.BOOKMARK,
                                  message: t,
                              },
                          ];
                }),
            [G],
        ),
        D = t_(h, s, a),
        U = t_(A, s, null);
    (0, m.Ay)(() => {
        _.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, T.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            t = j.A.getDevOverrides().navOnClick ?? !0;
        if (e !== T.U5.SIDEBAR || !1 === t) return;
        let { message: i, isUnread: l } = (function (e, t) {
            let n = e[e.length - 1]?.message,
                i = t[t.length - 1]?.message,
                l = i ?? n;
            if (null != l) return { message: l, isUnread: null != i };
            let s = j.A.getNotifyingChannelIds();
            if (null == s || 0 === s.length) return { message: null, isUnread: !1 };
            let r = s[0],
                a = S.Ay.getTrackedAckMessageId(r);
            return null == a
                ? { message: null, isUnread: !1 }
                : { message: { id: N.default.atNextMillisecond(a), channel_id: r }, isUnread: S.Ay.hasUnread(r) ?? !1 };
        })(D, U);
        null != i &&
            v.A.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: l,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: n,
            });
    }),
        (0, m.l0)(() => {
            _.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: P } = (0, T.X8)({ location: "NotificationsInboxSidebar" }),
        w = P === T.yF.DROPDOWN && s !== eG.Io.ALL,
        k = (0, eG.Yw)(s);
    return (0, i.jsx)("nav", {
        className: r()(td.kL, { [td.Yu]: t }),
        children: (0, i.jsxs)(c.F, {
            forceLevel: 1,
            component: (0, i.jsx)(E.Ay, { hasSubheader: !0, guild: k, ...tu }),
            children: [
                s === eG.Io.ALL && (0, i.jsx)(tp, { hideBanner: !f || s !== eG.Io.ALL }),
                w && (0, i.jsx)(u.h, { size: 8 }),
                (0, i.jsx)(to, {
                    className: td.cl,
                    renderMessageGroup: tm,
                    messages: s === eG.Io.BOOKMARKS ? M : D,
                    unreadMessages: s === eG.Io.BOOKMARKS ? [] : U,
                    listName: "notifications-inbox",
                    renderLoadingState: tg,
                    ignoreGrouping: s === eG.Io.BOOKMARKS,
                    loadMore: p,
                }),
            ],
        }),
    });
}
function tA(e) {
    return (0, i.jsx)(y.GM, { children: (0, i.jsx)(th, { ...e }) });
}
function t_(e, t, n) {
    return l.useMemo(
        () =>
            0 === e.length || t === eG.Io.BOOKMARKS
                ? tc
                : e.filter((e) => {
                      let { id: i } = e;
                      return (
                          !(N.default.age(i) > eG.V$ || (null != n && 0 >= N.default.compare(i, n))) && t === eG.Io.ALL
                      );
                  }),
        [e, t, n],
    );
}
function tg() {
    return (0, i.jsx)(U, {});
}
function tm(e, t) {
    return (0, i.jsx)(e2, { message: e[0], groupedMessages: e.slice(1), isUnread: t }, e[0].id);
}
function tp(e) {
    let { hideBanner: t } = e,
        n = (0, O.S)((e) => e.shouldHide());
    return (0, i.jsx)("div", {
        className: r()(td.dl, { [td.jD]: n || t }),
        children: (0, i.jsxs)("div", {
            className: td.XD,
            children: [
                (0, i.jsx)(h.E, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: td.vi,
                    children: eD.intl.string(eD.t["6XMM+D"]),
                }),
                (0, i.jsx)(A.i, { size: "sm", color: d.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
            ],
        }),
    });
}
