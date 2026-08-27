t.r(n), t.d(n, { SettingsButton: () => nA, default: () => nh }), t(321073);
var s = t(477900),
    i = t(582128),
    a = t(503698),
    l = t.n(a),
    r = t(221877),
    o = t(17928),
    c = t(661531),
    d = t(707554),
    u = t(834730),
    h = t(143838),
    g = t(866665),
    m = t(939249),
    x = t(625903),
    p = t(228366),
    A = t(334738),
    I = t(964486),
    N = t(793574),
    f = t(688810),
    j = t(599882),
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
    L = t(196765);
let _ = (0, L.v)((e, n) => ({
    hasNoUnreads: !1,
    shouldHide: () => !n().hasNoUnreads,
    setInboxReadState: (t) => {
        t !== n().hasNoUnreads && e({ hasNoUnreads: t });
    },
}));
var w = t(331322),
    D = t(775602),
    B = t(645908);
function G(e) {
    let { withHeader: n = !0, size: t = 15 } = e,
        i = (0, o.bG)([D.Ay], () => D.Ay.useReducedMotion);
    return (0, s.jsxs)(w.B, {
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
    let e = (0, o.bG)([D.Ay], () => D.Ay.useReducedMotion);
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
var X = t(806163),
    Y = t(3026),
    P = t(890856),
    H = t(276293),
    $ = t(778712),
    F = t(259678),
    W = t(297264),
    V = t(812993),
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
    er = t(438729),
    eo = t(606049),
    ec = t(812299),
    ed = t(943220),
    eu = t(375199),
    eh = t(995273),
    eg = t(854627),
    em = t(95701),
    ex = t(260509),
    ep = t(860071);
let eA = (0, L.v)((e, n) => ({
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
var eI = t(922016),
    eN = t(305866),
    ef = t(933832),
    ej = t(606096),
    eE = t(997146),
    ey = t(980707),
    eS = t(477782),
    eO = t(782603),
    eT = t(461678),
    eb = t(880457),
    eU = t(164684),
    ev = t(738125),
    eM = t(914703),
    eC = t(849077),
    eR = t(652215),
    ek = t(375708),
    eL = t(230049);
let e_ = {
    [eC.Th.MENTION]: [eC.kR.SETTINGS],
    [eC.Th.REPLY]: [eC.kR.SETTINGS],
    [eC.Th.REACTION]: [eC.kR.SETTINGS],
    [eC.Th.ANNOUNCEMENT]: [eC.kR.SETTINGS],
    [eC.Th.MESSAGE]: [eC.kR.SETTINGS],
};
function ew(e) {
    let { label: n, onClick: t, message: i, Icon: a, interactionType: l } = e,
        r = (0, M.op)();
    return (0, s.jsx)(g.m, {
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
        d = (0, M.op)(),
        [u, h] = (0, i.useState)(!1),
        x = (0, i.useRef)(null),
        { openMenu: p, closeMenu: A } = eA();
    return (0, s.jsx)(eI.Y, {
        shouldShow: u,
        animation: eI.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: x,
        onRequestClose: function () {
            h(!1), A(t.id, c);
        },
        renderPopout: (e) =>
            (0, s.jsx)(eN.l, {
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
                    className: eL.XI,
                    onClick: (e) => {
                        let n;
                        (0, M.Ml)({ message: t, interactionType: o, viewId: d }),
                            e.stopPropagation(),
                            h((n = !u)),
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
let eB = {
    [eC.kR.ACK]: {
        type: "standard",
        Icon: ef.CheckmarkLargeIcon,
        label: ek.intl.string(ek.t.e6RscS),
        onClick: (e) => {
            p.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                A.ack(
                    e.channel_id,
                    { object: eR.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: eR.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: M.X8.ACK,
    },
    [eC.kR.BOOKMARK]: {
        type: "menu",
        label: ek.intl.string(ek.t["9p3D9p"]),
        Icon: (e) =>
            null != E.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, s.jsx)(ej.BookmarkIcon, { ...e })
                : (0, s.jsx)(eE.c, { ...e }),
        interactionType: M.X8.BOOKMARK,
        Menu: (e) => {
            let { message: n, renderPopoutProps: t } = e,
                i = (0, o.bG)([E.A], () => E.A.getSavedMessage(n.channel_id, n.id)),
                a = (0, eb.P)({ message: n, savedMessage: i, source: ev.r.NOTIFICATIONS_INBOX });
            return (0, s.jsxs)(ey.W, {
                "data-menu-migrated-auto": !0,
                ...t,
                navId: "message-reminder-create",
                "aria-label": ek.intl.string(ek.t.mJ3P0N),
                onClose: t.closePopout,
                onSelect: () => null,
                children: [
                    null != i
                        ? (0, s.jsx)(eS.Dr, {
                              id: "remove-from-for-later",
                              label: ek.intl.string(ek.t.SvXS1Z),
                              icon: ej.BookmarkIcon,
                              leadingAccessory: { type: "icon", icon: ej.BookmarkIcon },
                              action: () =>
                                  (0, eU.x)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: i.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, s.jsx)(eS.Dr, {
                              id: "create-bookmark",
                              label: ek.intl.string(ek.t["9p3D9p"]),
                              icon: eE.c,
                              leadingAccessory: { type: "icon", icon: eE.c },
                              action: () =>
                                  (0, eU.Y)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      displayToast: !0,
                                      source: ev.r.NOTIFICATIONS_INBOX,
                                  }),
                          }),
                    (0, s.jsx)(eS.bX, {}),
                    a,
                ],
            });
        },
    },
    [eC.kR.SETTINGS]: {
        type: "menu",
        Icon: eO.BellIcon,
        label: ek.intl.string(ek.t.h850Ss),
        interactionType: M.X8.SETTINGS,
        Menu: (e) => {
            let { channel: n, renderPopoutProps: t } = e;
            return n.isThread()
                ? (0, s.jsx)(eM.A, { ...t, channel: n, navId: "thread-context", label: ek.intl.string(ek.t["1NBjqb"]) })
                : (0, s.jsx)(eT.A, {
                      ...t,
                      channel: n,
                      navId: "channel-context",
                      label: ek.intl.string(ek.t.Xm41aV),
                      includeGuildMute: !0,
                  });
        },
    },
};
function eG(e) {
    let n,
        { message: t, channel: a, isUnread: l } = e,
        r =
            ((n = (0, k.i3)()),
            (0, i.useMemo)(() => {
                let e = eC.Th.MENTION,
                    t = new Set();
                return l && t.add(eC.kR.ACK), n && t.add(eC.kR.BOOKMARK), e_[e].forEach((e) => t.add(e)), Array.from(t);
            }, [t, l, n]));
    return (0, s.jsx)(w.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: eL.o1,
        children: r.map((e) => {
            let n = eB[e];
            switch (n.type) {
                case "standard":
                    return (0, s.jsx)(ew, { ...n, actionType: e, message: t }, e);
                case "menu":
                    return (0, s.jsx)(eD, { ...n, actionType: e, channel: a, message: t }, e);
            }
        }),
    });
}
var eK = t(97808),
    ez = t(573435),
    eX = t(190460),
    eY = t(185864);
function eP(e) {
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
        j = { width: (0, $.FT)(t), height: (0, $.FT)(t) },
        E = (0, i.useId)(),
        y = p.size * eX.Xq,
        S =
            null != x &&
            (0, s.jsxs)("svg", {
                width: y,
                height: y,
                viewBox: `0 0 ${y} ${y}`,
                className: eY.DX,
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
                                        mask: `url(#${ez.hW.SQUIRCLE})`,
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
                        children: (0, s.jsx)("img", { className: eY.M, src: x, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != a || null != r
        ? (0, s.jsxs)(m.D, {
              className: l()(eY.iE, eY.Wn, h),
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
              className: l()(eY.iE, h),
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
function eH(e) {
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
    return (0, s.jsx)(eP, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: h,
        children: (0, s.jsxs)("svg", {
            width: g + d,
            height: g + u,
            viewBox: `0 0 ${g + d} ${g + u}`,
            className: l()(eY.dK, eY.JW),
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
                                    mask: `url(#${ez.hW.SQUIRCLE})`,
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
                    children: (0, s.jsx)(eK.d9, { src: n, className: o, isSpeaking: !1 }),
                }),
                null != c &&
                    (0, s.jsx)("foreignObject", {
                        ...eF(h, d, u),
                        mask: `url(#${ez.hW.SQUIRCLE})`,
                        children: (0, s.jsx)("img", { src: c, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function e$(e) {
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
        A = eF(g, c, d);
    return (0, s.jsx)(eP, {
        ...e,
        ariaLabel: r,
        ariaHidden: a,
        specs: g,
        children: (0, s.jsxs)("svg", {
            width: m,
            height: x,
            viewBox: `0 0 ${m} ${x}`,
            className: l()(eY.dK, eY.JW),
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
                            mask: `url(#${ez.hW.SQUIRCLE})`,
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
                            className: eY.yA,
                            children: (0, s.jsx)("img", {
                                src: n ?? void 0,
                                alt: " ",
                                className: eY.my,
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
function eF(e, n, t) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + n, y: e.size - 16 - e.offset + t };
}
function eW(e, n, t) {
    let s = eF(e, n, t),
        i = s.x - 2,
        a = s.y - 2;
    return { width: s.height + 4, height: s.width + 4, x: i, y: a };
}
function eV(e) {
    let { message: n, channel: t, focusProps: a, isSelected: r, isUnread: c, messageCount: d } = e,
        h = t.type === eR.rbe.UNKNOWN ? H.N : (0, es.gU)(t, null),
        g = (0, et.Ay)(t, !1),
        m = (0, o.bG)([S.A], () => S.A.getGuild(t.getGuildId())),
        { nick: x, colorString: p } = (0, el.Ay)(n),
        { avatarSrc: A, eventHandlers: I } = (0, eg.A)({
            userId: n.author.id,
            size: $._3.SIZE_32,
            guildId: m?.id,
            animateOnHover: !0,
        }),
        N = t.type !== eR.rbe.GUILD_ANNOUNCEMENT || null == m,
        f = t.isPrivate() ? d : +!!n.mentioned,
        j = c && f > 0,
        E = (0, ec.y)({ channel: t, message: n, user: n.author, compact: !0, isRepliedMessage: !0 }),
        y = (0, s.jsx)("div", {
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
            null != m && ep.A.requestMember(m.id, n.author.id);
        }, [m, n.author.id]),
        (0, s.jsx)(F.vN, {
            ...a,
            children: (0, s.jsxs)("div", {
                onMouseLeave: I.onMouseLeave,
                onMouseEnter: I.onMouseEnter,
                className: eL.zC,
                children: [
                    c && !r && (0, s.jsx)("div", { className: eL.Zm }),
                    (0, s.jsx)(w.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: N
                            ? (0, s.jsx)(eH, {
                                  "aria-label": "User Avatar",
                                  src: A,
                                  size: $._3.SIZE_32,
                                  cornerIconUrl: null != m ? (0, ex.Iv)(m, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, s.jsx)(e$, {
                                  "aria-label": "Guild Icon",
                                  src: (0, ex.Iv)(m, 32),
                                  size: $._3.SIZE_32,
                                  cornerIconUrl: n.author.getAvatarURL(m.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, s.jsxs)(w.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, s.jsxs)(w.B, {
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
                                                      style: { color: p ?? void 0 },
                                                      children: (0, s.jsx)(Y.A, { children: y }),
                                                  }),
                                                  E,
                                              ],
                                          })
                                        : (0, s.jsx)(Y.A, {
                                              children: (0, s.jsx)(W.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: p ?? void 0 },
                                                  className: eL.Xh,
                                                  children: m.name,
                                              }),
                                          }),
                                    (0, s.jsxs)(w.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, s.jsx)(eG, { message: n, channel: t, isUnread: c }),
                                            j
                                                ? (0, s.jsx)(V.hV, { className: eL.WK, count: f })
                                                : (0, s.jsx)(eZ, { message: n }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(w.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: l()(eL.HA, { [eL.gy]: c, [eL.wH]: r }),
                                children: [
                                    null !== h && (0, s.jsx)(h, { size: "xxs", className: eL.p4 }),
                                    (0, s.jsxs)(u.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: l()(eL.HA, { [eL.gy]: c, [eL.wH]: r }),
                                        children: [g, !N && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(eJ, { message: n, isUnread: c, isSelected: r, channel: t }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function eZ(e) {
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
function eJ(e) {
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
                    o = n.embeds.some((e) => e.type === eR.Auw.GIFV),
                    c = ((e = n.embeds.some((e) => e.type === eR.Auw.GIFV)), n.attachments.length + +!!e),
                    d = (0, ei.A)(n),
                    u = n.stickerItems.length > 0,
                    h = n.isPoll(),
                    g = n.type === eR.lAJ.POLL_RESULT,
                    m = n.hasFlag(eR.pr7.IS_VOICE_MESSAGE),
                    x = n.type === eR.lAJ.USER_JOIN,
                    p = null;
                1 === c
                    ? (p = Z.ImageIcon)
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
                    I = null;
                return (
                    i
                        ? d
                            ? (I = ek.intl.string(ek.t["9ddYKt"]))
                            : h
                              ? ((A = !1), (I = n.poll?.question.text))
                              : (I = g
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
                          (I = (0, s.jsx)(er.Ay, {
                              content: r,
                              message: n,
                              compact: !1,
                              className: l()(eL.iU, { [eL.gy]: t, [eL.wH]: a }),
                          }))),
                    i &&
                        (I = (0, s.jsx)("div", {
                            className: l()(eL.iU, { [eL.gy]: t, [eL.wH]: a, [eL.QP]: A }),
                            children: I,
                        })),
                    { previewContent: I, Icon: p }
                );
            }, [n, r, t, a]);
        })({ message: n, channel: t, isUnread: a, isSelected: r });
    return (0, s.jsxs)(w.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, s.jsx)(c, { size: "xxs", className: eL.p4 }),
            (0, s.jsx)(u.E, { variant: "text-sm/normal", lineClamp: 1, className: eL.iU, children: o }),
        ],
    });
}
let eq = (0, i.memo)(
    function (e) {
        let { message: n, isUnread: a, messageCount: r = 1 } = e,
            c = n.message,
            d = (0, M.op)(),
            { params: u } = (0, X.W5)(),
            h = (0, o.bG)([y.A], () => {
                if (null == c) return null;
                let e = y.A.getChannel(n.channelId);
                return null != e
                    ? e
                    : new em.jb({
                          id: n.channelId,
                          guild_id: n.guildId,
                          type: eR.rbe.UNKNOWN,
                          name: ek.intl.string(ek.t.J90oLW),
                      });
            }),
            g = eA((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: m } = (0, U.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = (0, et.Ay)(h),
            p = i.useMemo(() => `${c?.author.username}: ${x}`, [c?.author.username, x]);
        return null == c || null == h
            ? null
            : (0, s.jsx)(P.s, {
                  "aria-label": p,
                  className: l()(eL.FJ, { [eL.wH]: c.id === u.messageId, [eL.Yj]: g }),
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
                      e.preventDefault(),
                          (0, M.Ml)({ interactionType: M.X8.CONTEXT_MENU, message: c, viewId: d }),
                          (0, en.L3)(
                              e,
                              async () => {
                                  let { default: e } = await Promise.all([
                                      t.e("170955"),
                                      t.e("703869"),
                                      t.e("648118"),
                                  ]).then(t.bind(t, 594005));
                                  return (n) => (0, s.jsx)(e, { ...n, channel: h, message: c, isUnread: a });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, s.jsx)(eV, {
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
var eQ = t(435558),
    e0 = t.n(eQ),
    e1 = t(837381),
    e3 = t(847374),
    e2 = t(912592),
    e8 = t(821609),
    e4 = t(475825),
    e7 = t(928039),
    e6 = t(625494);
let e9 = { [eC.Ur.UNREAD]: !0, [eC.Ur.TODAY]: !0, [eC.Ur.YESTERDAY]: !1, [eC.Ur.OLDER]: !1 },
    e5 = { [eC.Ur.UNREAD]: !0, [eC.Ur.TODAY]: !1, [eC.Ur.YESTERDAY]: !1, [eC.Ur.OLDER]: !1 },
    ne = (0, L.v)((e, n) => ({
        messageCategoryOpenStates: e5,
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
                    e({ lastInitializedWithUnreads: t, messageCategoryOpenStates: t ? e5 : e9 }));
        },
    }));
var nn = t(776131),
    nt = t(875436);
function ns(e) {
    e.stopPropagation();
}
function ni(e) {
    let { group: n, isOpen: t, toggleOpenedState: i } = e;
    return (0, s.jsx)(m.D, {
        "aria-expanded": t,
        onClick: i,
        className: l()(nt.TP, { [nt.yZ]: !t }),
        children: (0, s.jsxs)(w.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, s.jsx)(W.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: nt.P7,
                    children: (0, eQ.capitalize)(ek.intl.string(eC.v7[n]).toLowerCase()),
                }),
                (0, s.jsx)(e3.a, { size: "xxs", className: nt.ai }),
            ],
        }),
    });
}
let na = [eC.Ur.UNREAD, eC.Ur.TODAY, eC.Ur.YESTERDAY, eC.Ur.OLDER];
function nl() {
    let { analyticsLocations: e } = (0, f.Ay)(N.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)("div", {
        className: nt.y7,
        children: (0, s.jsxs)(w.B, {
            gap: 24,
            align: "center",
            children: [
                (0, s.jsxs)(w.B, {
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
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: ek.intl.string(nn.default["O+racd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(e8.$, {
                    variant: "secondary",
                    onClick: () => (0, k.tZ)(e),
                    text: ek.intl.string(nn.default.klSpfs),
                }),
            ],
        }),
    });
}
function nr(e) {
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
        I = (0, e7.A)(g, p),
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
        { messageCategoryOpenStates: S, toggleOpenState: O } = ne(),
        v =
            ((n = (0, o.yK)([R.A], () => R.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)([R.A, T.Ay], () => {
                let e = R.A.getChannelInfoMap();
                for (let t of n) {
                    let n = e[t];
                    if ((null == n || n.loadState === eC.Ve.UNLOADED) && T.Ay.hasUnread(t)) return !0;
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
            e6._.subscribe(eR.jej.SCROLL_PAGE_DOWN, n),
            e6._.subscribe(eR.jej.SCROLL_PAGE_UP, e),
            () => {
                e6._.unsubscribe(eR.jej.SCROLL_PAGE_DOWN, n), e6._.unsubscribe(eR.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let L = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let n = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= n && r?.(eC.VA.USER_SCROLL);
        }, [r]),
        w = i.useMemo(() => {
            let e = { [eC.Ur.UNREAD]: [], [eC.Ur.TODAY]: [], [eC.Ur.YESTERDAY]: [], [eC.Ur.OLDER]: [] },
                n = { [eC.Ur.UNREAD]: [], [eC.Ur.TODAY]: [], [eC.Ur.YESTERDAY]: [], [eC.Ur.OLDER]: [] },
                s = { [eC.Ur.UNREAD]: {}, [eC.Ur.TODAY]: {}, [eC.Ur.YESTERDAY]: {}, [eC.Ur.OLDER]: {} };
            function i(e, t) {
                e.kind === eC.yL.MENTION && null != e.guildId
                    ? n[t].push(e)
                    : e.channelId in s[t]
                      ? s[t][e.channelId].push(e)
                      : (s[t][e.channelId] = [e]);
            }
            return (
                (t.length > 0 || a.length > 0) &&
                    (e0().each(a, (e) => {
                        i(e, eC.Ur.UNREAD);
                    }),
                    e0().each(t, (e) => {
                        i(e, (0, k.i7)(e));
                    }),
                    e0().each(na, (t) => {
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
        G = i.useMemo(() => na.filter((e) => w[e].length > 0), [w]),
        K = i.useMemo(() => {
            if (m)
                return [
                    ...a.map((e) => ({ type: "message", messageGroup: [e], isUnread: !0 })),
                    ...t.map((e) => ({ type: "message", messageGroup: [e], isUnread: !1 })),
                ];
            let e = [];
            for (let n of G)
                if ((e.push({ type: "section-header", category: n }), S[n]))
                    for (let t of w[n]) e.push({ type: "message", messageGroup: t, isUnread: n === eC.Ur.UNREAD });
            return e;
        }, [m, a, t, G, S, w]),
        z = i.useMemo(() => [K.length], [K.length]),
        X = i.useCallback((e, n) => (K[n]?.type === "section-header" ? 32 : 64), [K]),
        Y = i.useCallback(
            (e) => {
                let { row: n } = e,
                    t = K[n];
                return "section-header" === t.type
                    ? (0, s.jsx)(
                          ni,
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
        { selectedFilter: F } = (0, C.A)();
    i.useEffect(() => {
        B || F !== eC.Io.ALL || $(0 === w.UNREAD.length);
    }, [w, B, $, F]),
        (function (e) {
            let { messagesByCategory: n } = e,
                t = i.useRef(!1),
                s = n.UNREAD.length > 0,
                { setOpenStateFromUnreads: a } = ne(),
                l = (0, o.bG)([R.A], () => R.A.hasLoadedEver);
            i.useLayoutEffect(() => {
                l && !t.current && ((t.current = !0), a(s));
            }, [a, s, l]);
        })({ messagesByCategory: w }),
        i.useEffect(() => {
            A.current = 0;
        }, [F]);
    let W = i.useCallback(() => {
        let e = na.filter((e) => S[e]).reduce((e, n) => e + w[n].length, 0),
            n = p.current?.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - e);
    }, [S, w]);
    return (
        i.useEffect(() => {
            B || j || A.current >= 2 || 0 >= W() || ((!H || v) && (A.current++, r?.(eC.VA.FILL_SCROLLER)));
        }, [W, r, B, j, H, v]),
        (0, M.Hi)({
            notificationCenterVariant: f,
            entrypoint: N,
            messages: t,
            unreadMessages: a,
            messagesByCategory: w,
            viewId: x,
        }),
        (0, s.jsx)("div", {
            className: l()(h, nt.KQ),
            onClick: ns,
            onDoubleClick: ns,
            "aria-label": e["aria-label"],
            children: B
                ? c()
                : D
                  ? (0, s.jsx)(nl, {})
                  : (0, s.jsx)(e1.hD, {
                        navigator: I,
                        children: (0, s.jsx)(e1.PR, {
                            children: (e) => {
                                let { ref: n, ...t } = e;
                                return (0, s.jsx)(e4.OZ, {
                                    ref: (e) => {
                                        (p.current = e), (n.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: l()(nt.m4, u, { [nt.xc]: m }),
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
var no = t(823296);
let nc = [],
    nd = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: eC.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function nu(e) {
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
                }) || (0, k.zo)(i, R.A.selectedItemInfo)
                    ? s.push(i)
                    : (b.default.compare(i.id, n) >= 0 || i.kind === eC.yL.MENTION) && t.push(i);
            return { readMessages: t, unreadMessages: s };
        }),
        u = i.useCallback(
            (e) => {
                a !== eC.Io.BOOKMARKS && a !== eC.Io.MENTIONS && v.A.loadMoreInbox({ viewId: t, loadingTrigger: e });
            },
            [a, t],
        ),
        { hasLoadedEver: h, canLoadMore: g } = (0, o.cf)([R.A], () => ({
            hasLoadedEver: R.A.hasLoadedEver,
            canLoadMore: R.A.canLoadMore({}),
        }));
    i.useEffect(() => {
        g && !h && u(eC.VA.ON_OPEN);
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
                                    section: eR.JJy.NOTIFICATIONS_INBOX,
                                    object: eR.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: eR.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
                        ? nc
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: y.A.getBasicChannel(n.channel_id)?.guild_id,
                                  kind: eC.yL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [m],
        ),
        N = ng(r, a),
        f = ng(c, a);
    (0, I.Ay)(() => {
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
        });
    let L = (0, eC.Yw)(a);
    return (0, s.jsx)("nav", {
        className: l()(no.kL, { [no.Yu]: n }),
        children: (0, s.jsxs)(d.F, {
            forceLevel: 1,
            component: (0, s.jsx)(j.Ay, { hasSubheader: !0, guild: L, ...nd }),
            children: [
                a === eC.Io.ALL && (0, s.jsx)(np, { hideBanner: !h }),
                (0, s.jsx)(nr, {
                    className: no.cl,
                    renderMessageGroup: nx,
                    messages: a === eC.Io.BOOKMARKS ? x : N,
                    unreadMessages: a === eC.Io.BOOKMARKS ? [] : f,
                    listName: "notifications-inbox",
                    renderLoadingState: nm,
                    ignoreGrouping: a === eC.Io.BOOKMARKS,
                    loadMore: u,
                }),
            ],
        }),
    });
}
function nh(e) {
    return (0, s.jsx)(M.GM, { children: (0, s.jsx)(nu, { ...e }) });
}
function ng(e, n) {
    return i.useMemo(() => {
        if (0 === e.length) return nc;
        switch (n) {
            case eC.Io.BOOKMARKS:
                return nc;
            case eC.Io.MENTIONS:
                return e.filter((e) => {
                    let { id: n, kind: t } = e;
                    return !(b.default.age(n) > eC.V$) && t === eC.yL.MENTION;
                });
            case eC.Io.ALL:
                return e.filter((e) => {
                    let { id: n } = e;
                    return !(b.default.age(n) > eC.V$);
                });
            default:
                return nc;
        }
    }, [e, n]);
}
function nm() {
    return (0, s.jsx)(G, {});
}
function nx(e, n) {
    return (0, s.jsx)(eq, { message: e[0], isUnread: n, messageCount: e.length }, e[0].id);
}
function np(e) {
    let { hideBanner: n } = e;
    return _((e) => e.shouldHide()) || n
        ? (0, s.jsx)("div", { className: l()(no.dl, no.jD) })
        : (0, s.jsx)("div", {
              className: no.dl,
              children: (0, s.jsxs)("div", {
                  className: no.XD,
                  children: [
                      (0, s.jsx)(u.E, {
                          variant: "text-sm/medium",
                          color: "text-feedback-positive",
                          className: no.vi,
                          children: ek.intl.string(ek.t["6XMM+D"]),
                      }),
                      (0, s.jsx)(h.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                  ],
              }),
          });
}
function nA() {
    let [e, n] = (0, i.useState)(!1),
        { analyticsLocations: t } = (0, f.Ay)(N.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)(g.m, {
        asContainer: !0,
        position: "bottom",
        text: ek.intl.string(ek.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, s.jsx)(m.D, {
            className: no.aY,
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
