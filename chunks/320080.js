n.r(t), n.d(t, { SettingsButton: () => tA, default: () => th }), n(321073);
var s = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(534740),
    o = n(17928),
    c = n(661531),
    d = n(707554),
    u = n(834730),
    h = n(143838),
    g = n(866665),
    m = n(939249),
    x = n(625903),
    p = n(228366),
    A = n(334738),
    N = n(964486),
    f = n(793574),
    I = n(688810),
    j = n(599882),
    E = n(85109),
    y = n(734057),
    S = n(71393),
    O = n(232835),
    T = n(568548),
    b = n(935208),
    U = n(851109),
    v = n(706341),
    M = n(932883),
    C = n(599486),
    R = n(310031),
    L = n(394953),
    _ = n(196765);
let k = (0, _.v)((e, t) => ({
    hasNoUnreads: !1,
    shouldHide: () => !t().hasNoUnreads,
    setInboxReadState: (n) => {
        n !== t().hasNoUnreads && e({ hasNoUnreads: n });
    },
}));
var w = n(331322),
    D = n(775602),
    B = n(403477);
function G(e) {
    let { withHeader: t = !0, size: n = 15 } = e,
        i = (0, o.bG)([D.Ay], () => D.Ay.useReducedMotion);
    return (0, s.jsxs)(w.B, {
        gap: 4,
        children: [
            t &&
                (0, s.jsx)("div", {
                    className: l()(B.iE, { [B.cb]: i }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, s.jsx)(K, { className: l()(B.nq, B.NX) }),
                }),
            Array.from({ length: n }).map((e, t) => (0, s.jsx)(z, {}, t)),
        ],
    });
}
function K(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: l()(B.n8, t) });
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
var X = n(806163),
    Y = n(3026),
    P = n(890856),
    H = n(276293),
    $ = n(778712),
    F = n(259678),
    W = n(297264),
    V = n(812993),
    Z = n(191023),
    J = n(477262),
    q = n(642846),
    Q = n(797285),
    ee = n(983851),
    et = n(442433),
    en = n(47167),
    es = n(713654),
    ei = n(427930),
    ea = n(427209),
    el = n(763754),
    er = n(438729),
    eo = n(606049),
    ec = n(812299),
    ed = n(943220),
    eu = n(375199),
    eh = n(995273),
    eg = n(854627),
    em = n(95701),
    ex = n(260509),
    ep = n(860071);
let eA = (0, _.v)((e, t) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(t().openMenus).some((t) => null != e && t.startsWith(`${e}:`)),
    openMenu: (t, n) => {
        let s = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.add(s), { openMenus: t };
        });
    },
    closeMenu: (t, n) => {
        let s = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.delete(s), { openMenus: t };
        });
    },
}));
var eN = n(922016),
    ef = n(305866),
    eI = n(933832),
    ej = n(606096),
    eE = n(997146),
    ey = n(980707),
    eS = n(477782),
    eO = n(782603),
    eT = n(461678),
    eb = n(880457),
    eU = n(164684),
    ev = n(738125),
    eM = n(914703),
    eC = n(849077),
    eR = n(652215),
    eL = n(375708),
    e_ = n(418410);
let ek = {
    [eC.Th.MENTION]: [eC.kR.SETTINGS],
    [eC.Th.REPLY]: [eC.kR.SETTINGS],
    [eC.Th.REACTION]: [eC.kR.SETTINGS],
    [eC.Th.ANNOUNCEMENT]: [eC.kR.SETTINGS],
    [eC.Th.MESSAGE]: [eC.kR.SETTINGS],
};
function ew(e) {
    let { label: t, onClick: n, message: i, Icon: a, interactionType: l } = e,
        r = (0, M.op)();
    return (0, s.jsx)(g.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        children: (0, s.jsx)(m.D, {
            className: e_.XI,
            onClick: (e) => {
                (0, M.Ml)({ message: i, interactionType: l, viewId: r }), e.stopPropagation(), n(i);
            },
            children: (0, s.jsx)(a, { size: "xs", color: "currentColor", className: e_.gE }),
        }),
    });
}
function eD(e) {
    let { channel: t, message: n, label: a, Icon: l, Menu: r, interactionType: o, actionType: c } = e,
        d = (0, M.op)(),
        [u, h] = (0, i.useState)(!1),
        x = (0, i.useRef)(null),
        { openMenu: p, closeMenu: A } = eA();
    return (0, s.jsx)(eN.Y, {
        shouldShow: u,
        animation: eN.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: x,
        onRequestClose: function () {
            h(!1), A(n.id, c);
        },
        renderPopout: (e) =>
            (0, s.jsx)(ef.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: x,
                children: (0, s.jsx)(r, { "data-menu-migrated": !0, renderPopoutProps: e, channel: t, message: n }),
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
                        let t;
                        (0, M.Ml)({ message: n, interactionType: o, viewId: d }),
                            e.stopPropagation(),
                            h((t = !u)),
                            t ? p(n.id, c) : A(n.id, c);
                    },
                    children: (0, s.jsx)(l, {
                        ...e,
                        message: n,
                        "aria-label": a,
                        className: e_.gE,
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
        Icon: eI.A,
        label: eL.intl.string(eL.t.e6RscS),
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
        label: eL.intl.string(eL.t["9p3D9p"]),
        Icon: (e) =>
            null != E.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, s.jsx)(ej.c, { ...e })
                : (0, s.jsx)(eE.c, { ...e }),
        interactionType: M.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                i = (0, o.bG)([E.A], () => E.A.getSavedMessage(t.channel_id, t.id)),
                a = (0, eb.P)({ message: t, savedMessage: i, source: ev.r.NOTIFICATIONS_INBOX });
            return (0, s.jsxs)(ey.W, {
                "data-menu-migrated-auto": !0,
                ...n,
                navId: "message-reminder-create",
                "aria-label": eL.intl.string(eL.t.mJ3P0N),
                onClose: n.closePopout,
                onSelect: () => null,
                children: [
                    null != i
                        ? (0, s.jsx)(eS.Dr, {
                              id: "remove-from-for-later",
                              label: eL.intl.string(eL.t.SvXS1Z),
                              icon: ej.c,
                              leadingAccessory: { type: "icon", icon: ej.c },
                              action: () =>
                                  (0, eU.x)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: i.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, s.jsx)(eS.Dr, {
                              id: "create-bookmark",
                              label: eL.intl.string(eL.t["9p3D9p"]),
                              icon: eE.c,
                              leadingAccessory: { type: "icon", icon: eE.c },
                              action: () =>
                                  (0, eU.Y)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
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
        Icon: eO.X,
        label: eL.intl.string(eL.t.h850Ss),
        interactionType: M.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, s.jsx)(eM.A, { ...n, channel: t, navId: "thread-context", label: eL.intl.string(eL.t["1NBjqb"]) })
                : (0, s.jsx)(eT.A, {
                      ...n,
                      channel: t,
                      navId: "channel-context",
                      label: eL.intl.string(eL.t.Xm41aV),
                      includeGuildMute: !0,
                  });
        },
    },
};
function eG(e) {
    let t,
        { message: n, channel: a, isUnread: l } = e,
        r =
            ((t = (0, L.i3)()),
            (0, i.useMemo)(() => {
                let e = eC.Th.MENTION,
                    n = new Set();
                return l && n.add(eC.kR.ACK), t && n.add(eC.kR.BOOKMARK), ek[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, l, t]));
    return (0, s.jsx)(w.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: e_.o1,
        children: r.map((e) => {
            let t = eB[e];
            switch (t.type) {
                case "standard":
                    return (0, s.jsx)(ew, { ...t, actionType: e, message: n }, e);
                case "menu":
                    return (0, s.jsx)(eD, { ...t, actionType: e, channel: a, message: n }, e);
            }
        }),
    });
}
var eK = n(97808),
    ez = n(573435),
    eX = n(190460),
    eY = n(653403);
function eP(e) {
    let {
            children: t,
            size: n,
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
            ariaLabel: I,
        } = e,
        j = { width: (0, $.FT)(n), height: (0, $.FT)(n) },
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
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: a,
                                            width: l,
                                            x: r,
                                            y: o,
                                        } = (function (e, t, n, s) {
                                            let { height: i, width: a, x: l, y: r } = eW(e, n, s),
                                                o = (t - e.size) / 2;
                                            return { width: a, height: i, x: l + o, y: r + o };
                                        })(e, t, n, i);
                                    return (0, s.jsx)("rect", {
                                        mask: `url(#${ez.hW.SQUIRCLE})`,
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
              "aria-label": I ?? void 0,
              "aria-hidden": g,
              children: [t, S],
          })
        : (0, s.jsxs)("div", {
              className: l()(eY.iE, h),
              style: j,
              onContextMenu: c ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": I ?? void 0,
              "aria-hidden": g,
              children: [t, S],
          });
}
function eH(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": a = !1,
            "aria-label": r,
            imageClassName: o,
            cornerIconUrl: c,
            cornerIconOffsetX: d = 0,
            cornerIconOffsetY: u = 0,
        } = e,
        h = (0, $.Kj)(n),
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
                            (function (e, t, n) {
                                let { height: i, width: a, x: l, y: r } = eW(e, t, n);
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
                    children: (0, s.jsx)(eK.d9, { src: t, className: o, isSpeaking: !1 }),
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
            src: t,
            size: n,
            "aria-hidden": a = !1,
            "aria-label": r,
            cornerIconUrl: o,
            cornerIconOffsetX: c = 0,
            cornerIconOffsetY: d = 0,
        } = e,
        u = (0, i.useId)(),
        h = (0, i.useId)(),
        g = (0, $.Kj)(n),
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
                                src: t ?? void 0,
                                alt: " ",
                                className: eY.my,
                                "aria-hidden": !0,
                            }),
                        },
                        t,
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
function eF(e, t, n) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + t, y: e.size - 16 - e.offset + n };
}
function eW(e, t, n) {
    let s = eF(e, t, n),
        i = s.x - 2,
        a = s.y - 2;
    return { width: s.height + 4, height: s.width + 4, x: i, y: a };
}
function eV(e) {
    let { message: t, channel: n, focusProps: a, isSelected: r, isUnread: c, messageCount: d } = e,
        h = n.type === eR.rbe.UNKNOWN ? H.N : (0, es.gU)(n, null),
        g = (0, en.Ay)(n, !1),
        m = (0, o.bG)([S.A], () => S.A.getGuild(n.getGuildId())),
        { nick: x, colorString: p } = (0, el.Ay)(t),
        { avatarSrc: A, eventHandlers: N } = (0, eg.A)({
            userId: t.author.id,
            size: $._3.SIZE_32,
            guildId: m?.id,
            animateOnHover: !0,
        }),
        f = n.type !== eR.rbe.GUILD_ANNOUNCEMENT || null == m,
        I = n.isPrivate() ? d : +!!t.mentioned,
        j = c && I > 0,
        E = (0, ec.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        y = (0, s.jsx)("div", {
            className: e_.Ys,
            inert: !0,
            children: (0, s.jsx)(ed.A, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: e_.Xh,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != m && ep.A.requestMember(m.id, t.author.id);
        }, [m, t.author.id]),
        (0, s.jsx)(F.vN, {
            ...a,
            children: (0, s.jsxs)("div", {
                onMouseLeave: N.onMouseLeave,
                onMouseEnter: N.onMouseEnter,
                className: e_.zC,
                children: [
                    c && !r && (0, s.jsx)("div", { className: e_.Zm }),
                    (0, s.jsx)(w.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: f
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
                                  cornerIconUrl: t.author.getAvatarURL(m.id, 24),
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
                                    f
                                        ? (0, s.jsxs)("div", {
                                              className: e_.ZR,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: e_.Xh,
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
                                                  className: e_.Xh,
                                                  children: m.name,
                                              }),
                                          }),
                                    (0, s.jsxs)(w.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, s.jsx)(eG, { message: t, channel: n, isUnread: c }),
                                            j
                                                ? (0, s.jsx)(V.hV, { className: e_.WK, count: I })
                                                : (0, s.jsx)(eZ, { message: t }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(w.B, {
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
                                        children: [g, !f && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(eJ, { message: t, isUnread: c, isSelected: r, channel: n }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function eZ(e) {
    let { message: t } = e,
        n = (0, eh.jb)(t.timestamp.getTime());
    return (0, s.jsx)(eo.A, {
        timestamp: t.timestamp,
        className: e_.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function eJ(e) {
    let { message: t, channel: n, isUnread: a, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: a } = e,
                { content: r } = (0, eu.A)(t, {
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
                    o = t.embeds.some((e) => e.type === eR.Auw.GIFV),
                    c = ((e = t.embeds.some((e) => e.type === eR.Auw.GIFV)), t.attachments.length + +!!e),
                    d = (0, ei.A)(t),
                    u = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    g = t.type === eR.lAJ.POLL_RESULT,
                    m = t.hasFlag(eR.pr7.IS_VOICE_MESSAGE),
                    x = t.type === eR.lAJ.USER_JOIN,
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
                            ? (N = eL.intl.string(eL.t["9ddYKt"]))
                            : h
                              ? ((A = !1), (N = t.poll?.question.text))
                              : (N = g
                                    ? eL.intl.string(eL.t.sad2PH)
                                    : o
                                      ? eL.intl.string(eL.t.p0oZmy)
                                      : c > 1
                                        ? eL.intl.formatToPlainString(eL.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? eL.intl.string(eL.t.tCcq5p)
                                          : u
                                            ? eL.intl.format(eL.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : m
                                              ? eL.intl.string(eL.t.slFYgi)
                                              : x
                                                ? eL.intl.string(eL.t.Yvvfw9)
                                                : eL.intl.string(eL.t.sDqZHL))
                        : ((A = !1),
                          (N = (0, s.jsx)(er.Ay, {
                              content: r,
                              message: t,
                              compact: !1,
                              className: l()(e_.iU, { [e_.gy]: n, [e_.wH]: a }),
                          }))),
                    i &&
                        (N = (0, s.jsx)("div", {
                            className: l()(e_.iU, { [e_.gy]: n, [e_.wH]: a, [e_.QP]: A }),
                            children: N,
                        })),
                    { previewContent: N, Icon: p }
                );
            }, [t, r, n, a]);
        })({ message: t, channel: n, isUnread: a, isSelected: r });
    return (0, s.jsxs)(w.B, {
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
let eq = (0, i.memo)(
    function (e) {
        let { message: t, isUnread: a, messageCount: r = 1 } = e,
            c = t.message,
            d = (0, M.op)(),
            { params: u } = (0, X.W5)(),
            h = (0, o.bG)([y.A], () => {
                if (null == c) return null;
                let e = y.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new em.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: eR.rbe.UNKNOWN,
                          name: eL.intl.string(eL.t.J90oLW),
                      });
            }),
            g = eA((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: m } = (0, U.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = (0, en.Ay)(h),
            p = i.useMemo(() => `${c?.author.username}: ${x}`, [c?.author.username, x]);
        return null == c || null == h
            ? null
            : (0, s.jsx)(P.s, {
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
                      e.preventDefault(),
                          (0, M.Ml)({ interactionType: M.X8.CONTEXT_MENU, message: c, viewId: d }),
                          (0, et.L3)(
                              e,
                              async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("93336"),
                                      n.e("26250"),
                                      n.e("48118"),
                                  ]).then(n.bind(n, 594005));
                                  return (t) => (0, s.jsx)(e, { ...t, channel: h, message: c, isUnread: a });
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
    (e, t) => e.isUnread === t.isUnread && e.message.id === t.message.id && e.messageCount === t.messageCount,
);
var eQ = n(435558),
    e0 = n.n(eQ),
    e1 = n(837381),
    e3 = n(847374),
    e2 = n(912592),
    e4 = n(821609),
    e8 = n(475825),
    e6 = n(928039),
    e7 = n(625494);
let e9 = { [eC.Ur.UNREAD]: !0, [eC.Ur.TODAY]: !0, [eC.Ur.YESTERDAY]: !1, [eC.Ur.OLDER]: !1 },
    e5 = { [eC.Ur.UNREAD]: !0, [eC.Ur.TODAY]: !1, [eC.Ur.YESTERDAY]: !1, [eC.Ur.OLDER]: !1 },
    te = (0, _.v)((e, t) => ({
        messageCategoryOpenStates: e5,
        lastInitializedWithUnreads: null,
        hasUserToggledSection: !1,
        getOpenState: (e) => t().messageCategoryOpenStates[e],
        toggleOpenState: (t) => {
            e((e) => ({
                hasUserToggledSection: !0,
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [t]: !e.messageCategoryOpenStates[t] },
            }));
        },
        setOpenStateFromUnreads: (n) => {
            let s = t();
            s.hasUserToggledSection ||
                (s.lastInitializedWithUnreads !== n &&
                    e({ lastInitializedWithUnreads: n, messageCategoryOpenStates: n ? e5 : e9 }));
        },
    }));
var tt = n(756195),
    tn = n(136587);
function ts(e) {
    e.stopPropagation();
}
function ti(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, s.jsx)(m.D, {
        "aria-expanded": n,
        onClick: i,
        className: l()(tn.TP, { [tn.yZ]: !n }),
        children: (0, s.jsxs)(w.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, s.jsx)(W.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: tn.P7,
                    children: (0, eQ.capitalize)(eL.intl.string(eC.v7[t]).toLowerCase()),
                }),
                (0, s.jsx)(e3.a, { size: "xxs", className: tn.ai }),
            ],
        }),
    });
}
let ta = [eC.Ur.UNREAD, eC.Ur.TODAY, eC.Ur.YESTERDAY, eC.Ur.OLDER];
function tl() {
    let { analyticsLocations: e } = (0, I.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)("div", {
        className: tn.y7,
        children: (0, s.jsxs)(w.B, {
            gap: 24,
            align: "center",
            children: [
                (0, s.jsxs)(w.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, s.jsx)(e2.K, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: c.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, s.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: eL.intl.string(tt.default["O+racd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(e4.$, {
                    variant: "secondary",
                    onClick: () => (0, L.tZ)(e),
                    text: eL.intl.string(tt.default.klSpfs),
                }),
            ],
        }),
    });
}
function tr(e) {
    let t,
        {
            messages: n,
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
        N = (0, e6.A)(g, p),
        { entrypoint: f, notificationCenterVariant: I } = (0, U.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: j,
            isLoadingComplete: E,
            hasLoadedEver: y,
        } = (0, o.cf)([R.A], () => ({
            isLoading: R.A.isLoading,
            isLoadingComplete: R.A.isLoadingComplete,
            hasLoadedEver: R.A.hasLoadedEver,
        })),
        { messageCategoryOpenStates: S, toggleOpenState: O } = te(),
        v =
            ((t = (0, o.yK)([R.A], () => R.A.getNotifyingChannelIds() ?? [])),
            (0, o.bG)([R.A, T.Ay], () => {
                let e = R.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === eC.Ve.UNLOADED) && T.Ay.hasUnread(n)) return !0;
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
            e7._.subscribe(eR.jej.SCROLL_PAGE_DOWN, t),
            e7._.subscribe(eR.jej.SCROLL_PAGE_UP, e),
            () => {
                e7._.unsubscribe(eR.jej.SCROLL_PAGE_DOWN, t), e7._.unsubscribe(eR.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let _ = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && r?.(eC.VA.USER_SCROLL);
        }, [r]),
        w = i.useMemo(() => {
            let e = { [eC.Ur.UNREAD]: [], [eC.Ur.TODAY]: [], [eC.Ur.YESTERDAY]: [], [eC.Ur.OLDER]: [] },
                t = { [eC.Ur.UNREAD]: [], [eC.Ur.TODAY]: [], [eC.Ur.YESTERDAY]: [], [eC.Ur.OLDER]: [] },
                s = { [eC.Ur.UNREAD]: {}, [eC.Ur.TODAY]: {}, [eC.Ur.YESTERDAY]: {}, [eC.Ur.OLDER]: {} };
            function i(e, n) {
                e.kind === eC.yL.MENTION && null != e.guildId
                    ? t[n].push(e)
                    : e.channelId in s[n]
                      ? s[n][e.channelId].push(e)
                      : (s[n][e.channelId] = [e]);
            }
            return (
                (n.length > 0 || a.length > 0) &&
                    (e0().each(a, (e) => {
                        i(e, eC.Ur.UNREAD);
                    }),
                    e0().each(n, (e) => {
                        i(e, (0, L.i7)(e));
                    }),
                    e0().each(ta, (n) => {
                        [...Object.values(s[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => b.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, a]),
        D = 0 === n.length && 0 === a.length && E,
        B = !y,
        G = i.useMemo(() => ta.filter((e) => w[e].length > 0), [w]),
        K = i.useMemo(() => {
            if (m)
                return [
                    ...a.map((e) => ({ type: "message", messageGroup: [e], isUnread: !0 })),
                    ...n.map((e) => ({ type: "message", messageGroup: [e], isUnread: !1 })),
                ];
            let e = [];
            for (let t of G)
                if ((e.push({ type: "section-header", category: t }), S[t]))
                    for (let n of w[t]) e.push({ type: "message", messageGroup: n, isUnread: t === eC.Ur.UNREAD });
            return e;
        }, [m, a, n, G, S, w]),
        z = i.useMemo(() => [K.length], [K.length]),
        X = i.useCallback((e, t) => (K[t]?.type === "section-header" ? 32 : 64), [K]),
        Y = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = K[t];
                return "section-header" === n.type
                    ? (0, s.jsx)(
                          ti,
                          {
                              group: n.category,
                              isOpen: S[n.category],
                              toggleOpenedState: () => {
                                  let e = S[n.category];
                                  O(n.category), (0, M.Ut)({ section: n.category, enabled: !e, viewId: x });
                              },
                          },
                          n.category,
                      )
                    : d(n.messageGroup, n.isUnread);
            },
            [K, S, O, x, d],
        ),
        P = K[K.length - 1],
        H = P?.type === "section-header",
        $ = k((e) => e.setInboxReadState),
        { selectedFilter: F } = (0, C.A)();
    i.useEffect(() => {
        B || F !== eC.Io.ALL || $(0 === w.UNREAD.length);
    }, [w, B, $, F]),
        (function (e) {
            let { messagesByCategory: t } = e,
                n = i.useRef(!1),
                s = t.UNREAD.length > 0,
                { setOpenStateFromUnreads: a } = te(),
                l = (0, o.bG)([R.A], () => R.A.hasLoadedEver);
            i.useLayoutEffect(() => {
                l && !n.current && ((n.current = !0), a(s));
            }, [a, s, l]);
        })({ messagesByCategory: w }),
        i.useEffect(() => {
            A.current = 0;
        }, [F]);
    let W = i.useCallback(() => {
        let e = ta.filter((e) => S[e]).reduce((e, t) => e + w[t].length, 0),
            t = p.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [S, w]);
    return (
        i.useEffect(() => {
            B || j || A.current >= 2 || 0 >= W() || ((!H || v) && (A.current++, r?.(eC.VA.FILL_SCROLLER)));
        }, [W, r, B, j, H, v]),
        (0, M.Hi)({
            notificationCenterVariant: I,
            entrypoint: f,
            messages: n,
            unreadMessages: a,
            messagesByCategory: w,
            viewId: x,
        }),
        (0, s.jsx)("div", {
            className: l()(h, tn.KQ),
            onClick: ts,
            onDoubleClick: ts,
            "aria-label": e["aria-label"],
            children: B
                ? c()
                : D
                  ? (0, s.jsx)(tl, {})
                  : (0, s.jsx)(e1.hD, {
                        navigator: N,
                        children: (0, s.jsx)(e1.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, s.jsx)(e8.OZ, {
                                    ref: (e) => {
                                        (p.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: l()(tn.m4, u, { [tn.xc]: m }),
                                    onScroll: _,
                                    sections: z,
                                    sectionHeight: 0,
                                    rowHeight: X,
                                    renderRow: Y,
                                    fade: !0,
                                    ...n,
                                });
                            },
                        }),
                    }),
        })
    );
}
var to = n(764156);
let tc = [],
    td = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: eC.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function tu(e) {
    let { includePanelSpacing: t } = e,
        n = (0, M.op)(),
        { selectedFilter: a } = (0, C.A)(),
        { readMessages: r, unreadMessages: c } = (0, o.cf)([R.A, T.Ay, S.A], () => {
            let e = R.A.getInboxMessages(),
                t = R.A.oldestDisplayedMessageId,
                n = [],
                s = [];
            for (let i of e)
                (0, L.EJ)({
                    messageId: i.id,
                    channelId: i.channelId,
                    guildId: i.guildId,
                    ReadStateStore_: T.Ay,
                    GuildStore_: S.A,
                }) || (0, L.zo)(i, R.A.selectedItemInfo)
                    ? s.push(i)
                    : (b.default.compare(i.id, t) >= 0 || i.kind === eC.yL.MENTION) && n.push(i);
            return { readMessages: n, unreadMessages: s };
        }),
        u = i.useCallback(
            (e) => {
                a !== eC.Io.BOOKMARKS && a !== eC.Io.MENTIONS && v.A.loadMoreInbox({ viewId: n, loadingTrigger: e });
            },
            [a, n],
        ),
        { hasLoadedEver: h, canLoadMore: g } = (0, o.cf)([R.A], () => ({
            hasLoadedEver: R.A.hasLoadedEver,
            canLoadMore: R.A.canLoadMore({}),
        }));
    i.useEffect(() => {
        g && !h && u(eC.VA.ON_OPEN);
    }, [g, h, u]),
        (function (e) {
            let { unreadChannelIds: t } = (0, L.U4)();
            i.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        let t = O.A.getMessages(e),
                            n = t.last()?.id,
                            s = T.Ay.ackMessageId(e),
                            i = t.hasPresent() && t.ready && !t.cached;
                        null != n &&
                            null != s &&
                            i &&
                            b.default.compare(s, n) >= 0 &&
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
            }, [e, t]);
        })(h ? c : null);
    let m = (0, o.yK)([E.A], () => E.A.getSavedMessages()),
        x = i.useMemo(
            () =>
                m.flatMap((e) => {
                    let { message: t } = e;
                    return null == t
                        ? tc
                        : [
                              {
                                  id: t.id,
                                  channelId: t.channel_id,
                                  guildId: y.A.getBasicChannel(t.channel_id)?.guild_id,
                                  kind: eC.yL.BOOKMARK,
                                  message: t,
                              },
                          ];
                }),
            [m],
        ),
        f = tg(r, a),
        I = tg(c, a);
    (0, N.Ay)(() => {
        p.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, U.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            t = R.A.getDevOverrides().navOnClick ?? !0;
        if (e !== U.U5.SIDEBAR || !1 === t) return;
        let { message: s, isUnread: i } = (function (e, t) {
            let n = e[e.length - 1]?.message,
                s = t[t.length - 1]?.message,
                i = s ?? n;
            if (null != i) return { message: i, isUnread: null != s };
            let a = R.A.getNotifyingChannelIds();
            if (null == a || 0 === a.length) return { message: null, isUnread: !1 };
            let l = a[0],
                r = T.Ay.getTrackedAckMessageId(l);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: b.default.atNextMillisecond(r), channel_id: l }, isUnread: T.Ay.hasUnread(l) ?? !1 };
        })(f, I);
        null != s &&
            v.A.inboxItemClick({
                message: s,
                channel: { id: s.channel_id },
                isUnread: i,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: n,
            });
    }),
        (0, N.l0)(() => {
            p.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let _ = (0, eC.Yw)(a);
    return (0, s.jsx)("nav", {
        className: l()(to.kL, { [to.Yu]: t }),
        children: (0, s.jsxs)(d.F, {
            forceLevel: 1,
            component: (0, s.jsx)(j.Ay, { hasSubheader: !0, guild: _, ...td }),
            children: [
                a === eC.Io.ALL && (0, s.jsx)(tp, { hideBanner: !h }),
                (0, s.jsx)(tr, {
                    className: to.cl,
                    renderMessageGroup: tx,
                    messages: a === eC.Io.BOOKMARKS ? x : f,
                    unreadMessages: a === eC.Io.BOOKMARKS ? [] : I,
                    listName: "notifications-inbox",
                    renderLoadingState: tm,
                    ignoreGrouping: a === eC.Io.BOOKMARKS,
                    loadMore: u,
                }),
            ],
        }),
    });
}
function th(e) {
    return (0, s.jsx)(M.GM, { children: (0, s.jsx)(tu, { ...e }) });
}
function tg(e, t) {
    return i.useMemo(() => {
        if (0 === e.length) return tc;
        switch (t) {
            case eC.Io.BOOKMARKS:
                return tc;
            case eC.Io.MENTIONS:
                return e.filter((e) => {
                    let { id: t, kind: n } = e;
                    return !(b.default.age(t) > eC.V$) && n === eC.yL.MENTION;
                });
            case eC.Io.ALL:
                return e.filter((e) => {
                    let { id: t } = e;
                    return !(b.default.age(t) > eC.V$);
                });
            default:
                return tc;
        }
    }, [e, t]);
}
function tm() {
    return (0, s.jsx)(G, {});
}
function tx(e, t) {
    return (0, s.jsx)(eq, { message: e[0], isUnread: t, messageCount: e.length }, e[0].id);
}
function tp(e) {
    let { hideBanner: t } = e;
    return k((e) => e.shouldHide()) || t
        ? (0, s.jsx)("div", { className: l()(to.dl, to.jD) })
        : (0, s.jsx)("div", {
              className: to.dl,
              children: (0, s.jsxs)("div", {
                  className: to.XD,
                  children: [
                      (0, s.jsx)(u.E, {
                          variant: "text-sm/medium",
                          color: "text-feedback-positive",
                          className: to.vi,
                          children: eL.intl.string(eL.t["6XMM+D"]),
                      }),
                      (0, s.jsx)(h.i, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                  ],
              }),
          });
}
function tA() {
    let [e, t] = (0, i.useState)(!1),
        { analyticsLocations: n } = (0, I.Ay)(f.A.NOTIFICATIONS_INBOX);
    return (0, s.jsx)(g.m, {
        asContainer: !0,
        position: "bottom",
        text: eL.intl.string(eL.t.h850Ss),
        shouldShow: e,
        forceOpen: e,
        children: (0, s.jsx)(m.D, {
            className: to.aY,
            onMouseEnter: () => t(!0),
            onMouseLeave: () => t(!1),
            onClick: () => {
                (0, L.tZ)(n);
            },
            children: (0, s.jsx)(x.Z, {
                size: "xs",
                color: e ? c.A.colors.INTERACTIVE_TEXT_HOVER.css : c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
            }),
        }),
    });
}
