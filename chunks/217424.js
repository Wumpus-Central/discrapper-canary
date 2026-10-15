n.d(t, { A: () => el });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(536637),
    d = n.n(c),
    u = n(127258),
    m = n(17928),
    x = n(922016),
    g = n(939249),
    h = n(323384),
    f = n(320448),
    A = n(811024),
    E = n(445672),
    _ = n(793574),
    p = n(688810),
    C = n(735991),
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
    y = n(799162),
    k = n(834730),
    D = n(289873),
    U = n(155718),
    b = n(47167),
    P = n(842209),
    G = n(706727),
    H = n(332173),
    w = n(402860),
    F = n(734057),
    V = n(317525),
    B = n(71393),
    J = n(994500);
n(827669);
var z = n(105292),
    Z = n(894625);
let K = { tag: "span", variant: "text-md/normal", color: "text-default" },
    X = { className: a()("mention", Z.lE) };
function W(e) {
    return (0, i.jsx)(k.E, { ...K, color: "text-strong", children: e });
}
let Y = l.memo(function (e) {
    var t;
    let n,
        s,
        a,
        { channel: r, messageId: o, interactionData: c } = e,
        { analyticsLocations: d } = (0, p.Ay)(),
        { onCopy: u, copyRef: x } =
            ((t = c?.application_command?.id),
            (n = l.useRef(null)),
            (s = l.useCallback((e, t) => {
                (e.preventDefault(),
                    e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                    e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? ""));
            }, [])),
            P.D3({ channel: r, type: "channel" }, t),
            { onCopy: s, copyRef: n }),
        g = (0, m.bG)([B.A], () => B.A.getGuild(r.guild_id), [r.guild_id]);
    if (
        (l.useEffect(() => {
            (null == c || (c.type === U.kc.CHAT && void 0 === c.application_command)) && G.S7(r.id, o);
        }, [r.id, o, c]),
        null == c)
    )
        a = (0, i.jsx)(D.y, { type: D.y.Type.SPINNING_CIRCLE, className: Z.u1 });
    else {
        let e = [],
            t = Object.fromEntries((c.application_command?.options ?? []).map((e) => [e.name, e]));
        for (let n of c.options ?? [])
            e = e.concat(
                (function e(t) {
                    let n,
                        {
                            option: s,
                            channel: a,
                            guild: r,
                            messageId: o,
                            parentOptionKey: c,
                            commandOptionSpec: d,
                            sourceAnalyticsLocations: u,
                        } = t,
                        m = null != c ? c + " " + s.name : s.name;
                    if (s.type === U.n4.SUB_COMMAND || s.type === U.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(k.E, { ...K, children: d?.name_localized ?? s.name }),
                                        ],
                                    },
                                    m,
                                ),
                            ],
                            n = Object.fromEntries((d?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of s.options ?? [])
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
                    let x = s.value;
                    if (null != s.value)
                        switch (s.type) {
                            case U.n4.USER: {
                                let e = s.value.toString(),
                                    t = S.default.getUser(e);
                                if (null != t) {
                                    let e = (0, L.FT)(t, a);
                                    n = (0, i.jsxs)(H.A, {
                                        ...X,
                                        onClick: () =>
                                            (0, w.openUserProfileModal)({
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
                            case U.n4.CHANNEL: {
                                let e = s.value.toString(),
                                    t = F.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(H.A, { ...X, children: ["#", (0, b.m1)(t, S.default, J.A)] }));
                                break;
                            }
                            case U.n4.ROLE: {
                                let e = s.value.toString(),
                                    t = null != r ? V.A.getRole(r.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(H.A, { ...X, children: ["@", t.name] }));
                                break;
                            }
                            case U.n4.MENTIONABLE: {
                                let e = s.value.toString(),
                                    t = null != r ? V.A.getRole(r.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(H.A, { children: ["@", t.name] });
                                else {
                                    let t = S.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, L.FT)(t, a);
                                        n = (0, i.jsxs)(H.A, {
                                            ...X,
                                            onClick: () =>
                                                (0, w.openUserProfileModal)({
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
                            case U.n4.ATTACHMENT:
                                n = W(z.intl.string(z.t.nONJVc));
                                break;
                            default: {
                                let e = d?.choices?.find((e) => e.value === s.value);
                                null != e && (x = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = W(x?.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(k.E, { ...K, children: [" ", d?.name_localized ?? s.name, ": "] }),
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
                    guild: g,
                    messageId: o,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: d,
                }),
            );
        a = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(k.E, { ...K, children: ["/", c.application_command?.name_localized ?? c.name] }), e],
        });
    }
    return (0, i.jsxs)("div", {
        className: Z.kL,
        onCopy: function (e) {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && u(e, c);
        },
        children: [(0, i.jsx)("div", { className: Z.YL, ref: x, children: a }), (0, i.jsx)("div", { className: Z.xQ })],
    });
});
var Q = n(943815),
    q = n(652215),
    $ = n(318626);
function ee(e) {
    let { width: t = 6, height: n = 10, color: l = "currentColor", className: s, foreground: a } = e;
    return (0, i.jsx)("svg", {
        className: s,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: a,
            fill: l,
        }),
    });
}
function et(e, t, n, l, s, r) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: m,
        showAvatarPopout: g,
        showTargetAvatarPopout: h,
        onClickAvatar: f,
        onUserContextMenu: A,
        onClickTargetAvatar: E,
        onTargetUserContextMenu: _,
        onPopoutRequestClose: p,
    } = e;
    if (c && 1 === n) return null;
    if ((c && null == o.activityInstance) || u || m)
        return (0, i.jsx)("div", { className: $.Cz, children: (0, i.jsx)(ee, { className: $.Jx }) });
    let C =
        O.Ay.getGuildMemberAvatarURL({
            avatar: l.guildMemberAvatar ?? void 0,
            userId: t.id,
            guildId: d?.guild_id ?? "",
        }) ?? void 0;
    function I() {
        return (function (e) {
            let { user: t, guildId: n, guildAvatar: l, onClick: s, onContextMenu: r, onMouseDown: o, ref: c } = e;
            return (0, i.jsx)("img", {
                alt: "",
                src: l ?? t.getAvatarURL(n, 16),
                onClick: s,
                onContextMenu: r,
                onMouseDown: o,
                className: a()({ [$.WU]: !0, [$.vk]: null != s }),
                ref: c,
            });
        })({
            user: t,
            guildId: d.guild_id,
            guildAvatar: C,
            onClick: 1 === n ? E : f,
            onContextMenu: 1 === n ? _ : A,
            ref: r,
        });
    }
    let N = 1 === n ? h : g;
    return null != s && null != N && null != r
        ? (0, i.jsx)(x.Y, {
              targetElementRef: r,
              renderPopout: s,
              shouldShow: N,
              position: "right",
              onRequestClose: p,
              children: I,
          })
        : I();
}
function en(e, t, n, l, s) {
    let {
        message: a,
        channel: r,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: d,
        onUserContextMenu: u,
        onClickTargetUsername: m,
        onTargetUserContextMenu: x,
        onPopoutRequestClose: g,
    } = e;
    return (0, i.jsx)(y.A, {
        className: 1 === n ? $.iu : "",
        compact: !0,
        author: l,
        message: a,
        channel: r,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: s,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? x : u,
        onPopoutRequestClose: g,
    });
}
function ei() {
    return (0, i.jsx)(f._, { size: "xxs", color: "currentColor", className: $.M5 });
}
function el(e) {
    let t,
        { message: n, channel: s } = e,
        { analyticsLocations: r, newestAnalyticsLocation: c } = (0, p.Ay)(_.A.EXECUTED_COMMAND),
        f = (0, m.bG)([S.default], () => S.default.getCurrentUser()),
        O = l.useRef(null),
        y = l.useRef(null),
        k = l.useMemo(
            () => (e, t, l) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != f, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != s, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(T.A, {
                    ...e,
                    user: t,
                    currentUser: f,
                    guildId: s.guild_id,
                    channelId: s.id,
                    messageId: n.id,
                    newAnalyticsLocations: l,
                })
            ),
            [f, s, n.id],
        ),
        D = l.useMemo(
            () => (e) => (
                o()(null != s, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(Y, { ...e, channel: s, messageId: n.id, interactionData: n.interactionData })
            ),
            [s, n.id, n.interactionData],
        ),
        U = (0, N.Am)(n),
        b = U?.type === u.G.APPLICATION_COMMAND && null != U.target_user ? new v.A(U.target_user) : null,
        P = U?.type === u.G.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        G = (0, L.d8)(n.interaction?.user, s),
        H = (0, L.d8)(b, s),
        w = l.useMemo(() => (e.compact ? (0, Q.A)((0, M.i$)(d()(), "LT")) : null), [e.compact]),
        F = (0, A.Gp)(s.id),
        V = n.interaction;
    if (null == V || null == G) return null;
    function B() {
        if (null == V) return null;
        let t = et(e, V.user, 0, G, (e) => k(e, V.user, [_.A.AVATAR]), O),
            n = en(e, V.user, 0, G, (e) => k(e, V.user));
        return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "user");
    }
    if (n?.activityInstance === null || (0, j.V)(n))
        ((t = z.intl.format(z.t["rg7U+C"], {
            userHook: B,
            commandHook: function () {
                let t = (function (e, t, n) {
                    let { showDataPopout: l, message: s, onClickCommand: r, onPopoutRequestClose: o } = e,
                        c = s.interaction.displayName;
                    return (0, i.jsx)(x.Y, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: l,
                        position: "top",
                        align: "center",
                        onRequestClose: o,
                        animation: x.Y.Animation.FADE,
                        positionKey: null != s.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            if (s.type === q.lAJ.CHAT_INPUT_COMMAND || s.type === q.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(g.D, {
                                    ...l,
                                    tag: "span",
                                    onClick: r,
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: a()($.lm, $.vk),
                                        children: [
                                            (0, i.jsx)(h.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: $.am,
                                            }),
                                            c,
                                        ],
                                    }),
                                });
                            if (!(0, j.V)(s)) return (0, i.jsx)("div", { className: $.p6, ref: n, children: c });
                            {
                                let e = (0, C.kF)(c);
                                return (0, i.jsx)(g.D, {
                                    ...l,
                                    tag: "span",
                                    onClick: function () {
                                        R._.dispatchToLastSubscribed(q.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: s.applicationId,
                                        });
                                    },
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: a()($.lm, $.vk),
                                        children: [
                                            (0, i.jsx)(h.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: $.am,
                                            }),
                                            e,
                                        ],
                                    }),
                                });
                            }
                        },
                    });
                })(e, D, y);
                return (0, i.jsx)(l.Fragment, { children: t }, "command");
            },
        })),
            P && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(ei, {}), e.renderTargetMessage()] }))
                : null != b &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(ei, {}),
                          (0, i.jsx)(function () {
                              if (null == b) return null;
                              let t = et(e, b, 1, H, (e) => k(e, b, [_.A.AVATAR]), O),
                                  n = en(e, b, 1, H, (e) => k(e, b));
                              return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  })));
    else {
        function J() {
            ((0, I.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: c,
            }),
                (0, E.L)({ guildId: s.guild_id }));
        }
        t = F
            ? z.intl.format(z.t.kfV8WM, {
                  userHook: B,
                  activityHook: function () {
                      return (0, i.jsx)(g.D, {
                          tag: "span",
                          onClick: J,
                          children: (0, i.jsx)("div", {
                              className: a()($.p6, $.vk),
                              children: z.intl.string(z.t.YTgRvn),
                          }),
                      });
                  },
              })
            : z.intl.format(z.t["6FeSyT"], { userHook: B });
    }
    return (0, i.jsx)(p.f5, {
        value: r,
        children: (0, i.jsx)("div", { className: a()($.JZ, $.NB, $.JE, w), "aria-hidden": !e.compact, children: t }),
    });
}
