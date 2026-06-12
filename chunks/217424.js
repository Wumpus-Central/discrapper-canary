n.d(t, { A: () => ei });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(989349),
    d = n.n(c),
    u = n(17928),
    m = n(922016),
    x = n(939249),
    h = n(323384),
    g = n(320448),
    _ = n(155718),
    A = n(811024),
    f = n(795816),
    E = n(793574),
    C = n(688810),
    p = n(735991),
    I = n(975412),
    N = n(168186),
    j = n(597929),
    T = n(589022),
    v = n(889227),
    S = n(287809),
    O = n(486020),
    R = n(625494),
    M = n(58703),
    L = n(763754),
    y = n(635071),
    D = n(834730),
    U = n(289873),
    k = n(47167),
    b = n(842209),
    P = n(706727),
    G = n(332173),
    H = n(975732),
    w = n(734057),
    F = n(317525),
    V = n(71393),
    B = n(994500);
n(827669);
var J = n(375708),
    z = n(993560);
let Z = { tag: "span", variant: "text-md/normal", color: "text-default" },
    K = { className: a()("mention", z.lE) };
function X(e) {
    return (0, i.jsx)(D.E, { ...Z, color: "text-strong", children: e });
}
let W = s.memo(function (e) {
    var t;
    let n,
        l,
        a,
        { channel: r, messageId: o, interactionData: c } = e,
        { analyticsLocations: d } = (0, C.Ay)(),
        { onCopy: m, copyRef: x } =
            ((t = c?.application_command?.id),
            (n = s.useRef(null)),
            (l = s.useCallback((e, t) => {
                e.preventDefault(),
                    e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                    e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? "");
            }, [])),
            b.D3({ channel: r, type: "channel" }, t),
            { onCopy: l, copyRef: n }),
        h = (0, u.bG)([V.A], () => V.A.getGuild(r.guild_id), [r.guild_id]);
    if (
        (s.useEffect(() => {
            (null == c || (c.type === _.kc.CHAT && void 0 === c.application_command)) && P.S7(r.id, o);
        }, [r.id, o, c]),
        null == c)
    )
        a = (0, i.jsx)(U.y, { type: U.y.Type.SPINNING_CIRCLE, className: z.u1 });
    else {
        let e = [],
            t = Object.fromEntries((c.application_command?.options ?? []).map((e) => [e.name, e]));
        for (let n of c.options ?? [])
            e = e.concat(
                (function e(t) {
                    let n,
                        {
                            option: l,
                            channel: a,
                            guild: r,
                            messageId: o,
                            parentOptionKey: c,
                            commandOptionSpec: d,
                            sourceAnalyticsLocations: u,
                        } = t,
                        m = null != c ? c + " " + l.name : l.name;
                    if (l.type === _.n4.SUB_COMMAND || l.type === _.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(D.E, { ...Z, children: d?.name_localized ?? l.name }),
                                        ],
                                    },
                                    m,
                                ),
                            ],
                            n = Object.fromEntries((d?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of l.options ?? [])
                            t = t.concat(
                                e({
                                    option: i,
                                    channel: a,
                                    guild: r,
                                    messageId: o,
                                    parentOptionKey: m,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: u,
                                }),
                            );
                        return t;
                    }
                    let x = l.value;
                    if (null != l.value)
                        switch (l.type) {
                            case _.n4.USER: {
                                let e = l.value.toString(),
                                    t = S.default.getUser(e);
                                if (null != t) {
                                    let e = (0, L.FT)(t, a);
                                    n = (0, i.jsxs)(G.A, {
                                        ...K,
                                        onClick: () =>
                                            (0, H.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: a.guild_id,
                                                channelId: a.id,
                                                messageId: o,
                                                sourceAnalyticsLocations: u,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case _.n4.CHANNEL: {
                                let e = l.value.toString(),
                                    t = w.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(G.A, { ...K, children: ["#", (0, k.m1)(t, S.default, B.A)] }));
                                break;
                            }
                            case _.n4.ROLE: {
                                let e = l.value.toString(),
                                    t = null != r ? F.A.getRole(r.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(G.A, { ...K, children: ["@", t.name] }));
                                break;
                            }
                            case _.n4.MENTIONABLE: {
                                let e = l.value.toString(),
                                    t = null != r ? F.A.getRole(r.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(G.A, { children: ["@", t.name] });
                                else {
                                    let t = S.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, L.FT)(t, a);
                                        n = (0, i.jsxs)(G.A, {
                                            ...K,
                                            onClick: () =>
                                                (0, H.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: a.guild_id,
                                                    sourceAnalyticsLocations: u,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case _.n4.ATTACHMENT:
                                n = X(J.intl.string(J.t.nONJVc));
                                break;
                            default: {
                                let e = d?.choices?.find((e) => e.value === l.value);
                                null != e && (x = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = X(x?.toString())),
                        [
                            (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(D.E, { ...Z, children: [" ", d?.name_localized ?? l.name, ": "] }),
                                        n,
                                    ],
                                },
                                m,
                            ),
                        ]
                    );
                })({
                    option: n,
                    channel: r,
                    guild: h,
                    messageId: o,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: d,
                }),
            );
        a = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(D.E, { ...Z, children: ["/", c.application_command?.name_localized ?? c.name] }), e],
        });
    }
    return (0, i.jsxs)("div", {
        className: z.kL,
        onCopy: (e) => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && m(e, c);
        },
        children: [(0, i.jsx)("div", { className: z.YL, ref: x, children: a }), (0, i.jsx)("div", { className: z.xQ })],
    });
});
var Q = n(943815),
    Y = n(652215),
    q = n(334211);
function $(e) {
    let { width: t = 6, height: n = 10, color: s = "currentColor", className: l, foreground: a } = e;
    return (0, i.jsx)("svg", {
        className: l,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: a,
            fill: s,
        }),
    });
}
function ee(e, t, n, s, l, r) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: x,
        showAvatarPopout: h,
        showTargetAvatarPopout: g,
        onClickAvatar: _,
        onUserContextMenu: A,
        onClickTargetAvatar: f,
        onTargetUserContextMenu: E,
        onPopoutRequestClose: C,
    } = e;
    if (c && 1 === n) return null;
    if ((c && null == o.activityInstance) || u || x)
        return (0, i.jsx)("div", { className: q.Cz, children: (0, i.jsx)($, { className: q.Jx }) });
    let p =
            O.Ay.getGuildMemberAvatarURL({
                avatar: s.guildMemberAvatar ?? void 0,
                userId: t.id,
                guildId: d?.guild_id ?? "",
            }) ?? void 0,
        I = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: s, onClick: l, onContextMenu: r, onMouseDown: o, ref: c } = e;
                return (0, i.jsx)("img", {
                    alt: "",
                    src: s ?? t.getAvatarURL(n, 16),
                    onClick: l,
                    onContextMenu: r,
                    onMouseDown: o,
                    className: a()({ [q.WU]: !0, [q.vk]: null != l }),
                    ref: c,
                });
            })({
                user: t,
                guildId: d.guild_id,
                guildAvatar: p,
                onClick: 1 === n ? f : _,
                onContextMenu: 1 === n ? E : A,
                ref: r,
            }),
        N = 1 === n ? g : h;
    return null != l && null != N && null != r
        ? (0, i.jsx)(m.Y, {
              targetElementRef: r,
              renderPopout: l,
              shouldShow: N,
              position: "right",
              onRequestClose: C,
              children: I,
          })
        : I();
}
function et(e, t, n, s, l) {
    let {
        message: a,
        channel: r,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: d,
        onUserContextMenu: u,
        onClickTargetUsername: m,
        onTargetUserContextMenu: x,
        onPopoutRequestClose: h,
    } = e;
    return (0, i.jsx)(y.A, {
        className: 1 === n ? q.iu : "",
        compact: !0,
        author: s,
        message: a,
        channel: r,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: l,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? x : u,
        onPopoutRequestClose: h,
    });
}
let en = () => (0, i.jsx)(g._, { size: "xxs", color: "currentColor", className: q.M5 });
function ei(e) {
    let t,
        { message: n, channel: l } = e,
        { analyticsLocations: r, newestAnalyticsLocation: c } = (0, C.Ay)(E.A.EXECUTED_COMMAND),
        g = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        O = s.useRef(null),
        y = s.useRef(null),
        D = s.useMemo(
            () => (e, t, s) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != g, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != l, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(T.A, {
                    ...e,
                    user: t,
                    currentUser: g,
                    guildId: l.guild_id,
                    channelId: l.id,
                    messageId: n.id,
                    newAnalyticsLocations: s,
                })
            ),
            [g, l, n.id],
        ),
        U = s.useMemo(
            () => (e) => (
                o()(null != l, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(W, { ...e, channel: l, messageId: n.id, interactionData: n.interactionData })
            ),
            [l, n.id, n.interactionData],
        ),
        k = (0, N.Am)(n),
        b = k?.type === _.G4.APPLICATION_COMMAND && null != k.target_user ? new v.A(k.target_user) : null,
        P = k?.type === _.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        G = (0, L.d8)(n.interaction?.user, l),
        H = (0, L.d8)(b, l),
        w = s.useMemo(() => (e.compact ? (0, Q.A)((0, M.i$)(d()(), "LT")) : null), [e.compact]),
        F = (0, A.Gp)(l.id),
        V = n.interaction;
    if (null == V || null == G) return null;
    let B = () => {
        let t = ee(e, V.user, 0, G, (e) => D(e, V.user, [E.A.AVATAR]), O),
            n = et(e, V.user, 0, G, (e) => D(e, V.user));
        return (0, i.jsxs)(s.Fragment, { children: [t, n] }, "user");
    };
    if (n?.activityInstance === null || (0, j.V)(n))
        (t = J.intl.format(J.t["rg7U+C"], {
            userHook: B,
            commandHook: () => {
                let t = (function (e, t, n) {
                    let { showDataPopout: s, message: l, onClickCommand: r, onPopoutRequestClose: o } = e,
                        c = l.interaction.displayName;
                    return (0, i.jsx)(m.Y, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: s,
                        position: "top",
                        align: "center",
                        onRequestClose: o,
                        animation: m.Y.Animation.FADE,
                        positionKey: null != l.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t, ...s } = e;
                            if (l.type === Y.lAJ.CHAT_INPUT_COMMAND || l.type === Y.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(x.D, {
                                    ...s,
                                    tag: "span",
                                    onClick: r,
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: a()(q.lm, q.vk),
                                        children: [
                                            (0, i.jsx)(h.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: q.am,
                                            }),
                                            c,
                                        ],
                                    }),
                                });
                            if (!(0, j.V)(l)) return (0, i.jsx)("div", { className: q.p6, ref: n, children: c });
                            {
                                let e = (0, p.kF)(c);
                                return (0, i.jsx)(x.D, {
                                    ...s,
                                    tag: "span",
                                    onClick: () => {
                                        R._.dispatchToLastSubscribed(Y.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: l.applicationId,
                                        });
                                    },
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: a()(q.lm, q.vk),
                                        children: [
                                            (0, i.jsx)(h.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: q.am,
                                            }),
                                            e,
                                        ],
                                    }),
                                });
                            }
                        },
                    });
                })(e, U, y);
                return (0, i.jsx)(s.Fragment, { children: t }, "command");
            },
        })),
            P && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(en, {}), e.renderTargetMessage()] }))
                : null != b &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(en, {}),
                          (0, i.jsx)(() => {
                              if (null == b) return null;
                              let t = ee(e, b, 1, H, (e) => D(e, b, [E.A.AVATAR]), O),
                                  n = et(e, b, 1, H, (e) => D(e, b));
                              return (0, i.jsxs)(s.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  }));
    else {
        let e = () => {
            (0, I.A)({
                context: null != l ? { type: "channel", channel: l } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: c,
            }),
                (0, f.LV)({ guildId: l.guild_id });
        };
        t = F
            ? J.intl.format(J.t.kfV8WM, {
                  userHook: B,
                  activityHook: () =>
                      (0, i.jsx)(x.D, {
                          tag: "span",
                          onClick: e,
                          children: (0, i.jsx)("div", {
                              className: a()(q.p6, q.vk),
                              children: J.intl.string(J.t.YTgRvn),
                          }),
                      }),
              })
            : J.intl.format(J.t["6FeSyT"], { userHook: B });
    }
    return (0, i.jsx)(C.f5, {
        value: r,
        children: (0, i.jsx)("div", { className: a()(q.JZ, q.NB, q.JE, w), "aria-hidden": !e.compact, children: t }),
    });
}
