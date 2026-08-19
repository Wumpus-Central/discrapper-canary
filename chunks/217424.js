n.d(t, { A: () => ei });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(989349),
    d = n.n(c),
    u = n(17928),
    m = n(922016),
    h = n(939249),
    g = n(323384),
    p = n(320448),
    A = n(155718),
    x = n(811024),
    f = n(795816),
    E = n(793574),
    I = n(688810),
    C = n(735991),
    _ = n(975412),
    v = n(168186),
    N = n(597929),
    j = n(589022),
    T = n(889227),
    S = n(287809),
    y = n(486020),
    b = n(625494),
    R = n(58703),
    L = n(763754),
    M = n(799162),
    k = n(834730),
    O = n(289873),
    P = n(47167),
    D = n(842209),
    U = n(706727),
    G = n(332173),
    w = n(975732),
    H = n(734057),
    V = n(317525),
    B = n(71393),
    F = n(994500);
n(827669);
var z = n(375708),
    J = n(95424);
let Y = { tag: "span", variant: "text-md/normal", color: "text-default" },
    K = { className: a()("mention", J.lE) };
function W(e) {
    return (0, i.jsx)(k.E, { ...Y, color: "text-strong", children: e });
}
let X = l.memo(function (e) {
    var t;
    let n,
        s,
        a,
        { channel: r, messageId: o, interactionData: c } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        { onCopy: m, copyRef: h } =
            ((t = c?.application_command?.id),
            (n = l.useRef(null)),
            (s = l.useCallback((e, t) => {
                e.preventDefault(),
                    e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                    e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? "");
            }, [])),
            D.D3({ channel: r, type: "channel" }, t),
            { onCopy: s, copyRef: n }),
        g = (0, u.bG)([B.A], () => B.A.getGuild(r.guild_id), [r.guild_id]);
    if (
        (l.useEffect(() => {
            (null == c || (c.type === A.kc.CHAT && void 0 === c.application_command)) && U.S7(r.id, o);
        }, [r.id, o, c]),
        null == c)
    )
        a = (0, i.jsx)(O.y, { type: O.y.Type.SPINNING_CIRCLE, className: J.u1 });
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
                    if (s.type === A.n4.SUB_COMMAND || s.type === A.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(k.E, { ...Y, children: d?.name_localized ?? s.name }),
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
                    let h = s.value;
                    if (null != s.value)
                        switch (s.type) {
                            case A.n4.USER: {
                                let e = s.value.toString(),
                                    t = S.default.getUser(e);
                                if (null != t) {
                                    let e = (0, L.FT)(t, a);
                                    n = (0, i.jsxs)(G.A, {
                                        ...K,
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
                            case A.n4.CHANNEL: {
                                let e = s.value.toString(),
                                    t = H.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(G.A, { ...K, children: ["#", (0, P.m1)(t, S.default, F.A)] }));
                                break;
                            }
                            case A.n4.ROLE: {
                                let e = s.value.toString(),
                                    t = null != r ? V.A.getRole(r.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(G.A, { ...K, children: ["@", t.name] }));
                                break;
                            }
                            case A.n4.MENTIONABLE: {
                                let e = s.value.toString(),
                                    t = null != r ? V.A.getRole(r.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(G.A, { children: ["@", t.name] });
                                else {
                                    let t = S.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, L.FT)(t, a);
                                        n = (0, i.jsxs)(G.A, {
                                            ...K,
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
                            case A.n4.ATTACHMENT:
                                n = W(z.intl.string(z.t.nONJVc));
                                break;
                            default: {
                                let e = d?.choices?.find((e) => e.value === s.value);
                                null != e && (h = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = W(h?.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(k.E, { ...Y, children: [" ", d?.name_localized ?? s.name, ": "] }),
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
            children: [(0, i.jsxs)(k.E, { ...Y, children: ["/", c.application_command?.name_localized ?? c.name] }), e],
        });
    }
    return (0, i.jsxs)("div", {
        className: J.kL,
        onCopy: function (e) {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && m(e, c);
        },
        children: [(0, i.jsx)("div", { className: J.YL, ref: h, children: a }), (0, i.jsx)("div", { className: J.xQ })],
    });
});
var Z = n(943815),
    q = n(652215),
    Q = n(281867);
function $(e) {
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
function ee(e, t, n, l, s, r) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: h,
        showAvatarPopout: g,
        showTargetAvatarPopout: p,
        onClickAvatar: A,
        onUserContextMenu: x,
        onClickTargetAvatar: f,
        onTargetUserContextMenu: E,
        onPopoutRequestClose: I,
    } = e;
    if (c && 1 === n) return null;
    if ((c && null == o.activityInstance) || u || h)
        return (0, i.jsx)("div", { className: Q.Cz, children: (0, i.jsx)($, { className: Q.Jx }) });
    let C =
        y.Ay.getGuildMemberAvatarURL({
            avatar: l.guildMemberAvatar ?? void 0,
            userId: t.id,
            guildId: d?.guild_id ?? "",
        }) ?? void 0;
    function _() {
        return (function (e) {
            let { user: t, guildId: n, guildAvatar: l, onClick: s, onContextMenu: r, onMouseDown: o, ref: c } = e;
            return (0, i.jsx)("img", {
                alt: "",
                src: l ?? t.getAvatarURL(n, 16),
                onClick: s,
                onContextMenu: r,
                onMouseDown: o,
                className: a()({ [Q.WU]: !0, [Q.vk]: null != s }),
                ref: c,
            });
        })({
            user: t,
            guildId: d.guild_id,
            guildAvatar: C,
            onClick: 1 === n ? f : A,
            onContextMenu: 1 === n ? E : x,
            ref: r,
        });
    }
    let v = 1 === n ? p : g;
    return null != s && null != v && null != r
        ? (0, i.jsx)(m.Y, {
              targetElementRef: r,
              renderPopout: s,
              shouldShow: v,
              position: "right",
              onRequestClose: I,
              children: _,
          })
        : _();
}
function et(e, t, n, l, s) {
    let {
        message: a,
        channel: r,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: d,
        onUserContextMenu: u,
        onClickTargetUsername: m,
        onTargetUserContextMenu: h,
        onPopoutRequestClose: g,
    } = e;
    return (0, i.jsx)(M.A, {
        className: 1 === n ? Q.iu : "",
        compact: !0,
        author: l,
        message: a,
        channel: r,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: s,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? h : u,
        onPopoutRequestClose: g,
    });
}
function en() {
    return (0, i.jsx)(p._, { size: "xxs", color: "currentColor", className: Q.M5 });
}
function ei(e) {
    let t,
        { message: n, channel: s } = e,
        { analyticsLocations: r, newestAnalyticsLocation: c } = (0, I.Ay)(E.A.EXECUTED_COMMAND),
        p = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        y = l.useRef(null),
        M = l.useRef(null),
        k = l.useMemo(
            () => (e, t, l) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != p, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != s, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(j.A, {
                    ...e,
                    user: t,
                    currentUser: p,
                    guildId: s.guild_id,
                    channelId: s.id,
                    messageId: n.id,
                    newAnalyticsLocations: l,
                })
            ),
            [p, s, n.id],
        ),
        O = l.useMemo(
            () => (e) => (
                o()(null != s, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(X, { ...e, channel: s, messageId: n.id, interactionData: n.interactionData })
            ),
            [s, n.id, n.interactionData],
        ),
        P = (0, v.Am)(n),
        D = P?.type === A.G4.APPLICATION_COMMAND && null != P.target_user ? new T.A(P.target_user) : null,
        U = P?.type === A.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        G = (0, L.d8)(n.interaction?.user, s),
        w = (0, L.d8)(D, s),
        H = l.useMemo(() => (e.compact ? (0, Z.A)((0, R.i$)(d()(), "LT")) : null), [e.compact]),
        V = (0, x.Gp)(s.id),
        B = n.interaction;
    if (null == B || null == G) return null;
    function F() {
        if (null == B) return null;
        let t = ee(e, B.user, 0, G, (e) => k(e, B.user, [E.A.AVATAR]), y),
            n = et(e, B.user, 0, G, (e) => k(e, B.user));
        return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "user");
    }
    if (n?.activityInstance === null || (0, N.V)(n))
        (t = z.intl.format(z.t["rg7U+C"], {
            userHook: F,
            commandHook: function () {
                let t = (function (e, t, n) {
                    let { showDataPopout: l, message: s, onClickCommand: r, onPopoutRequestClose: o } = e,
                        c = s.interaction.displayName;
                    return (0, i.jsx)(m.Y, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: l,
                        position: "top",
                        align: "center",
                        onRequestClose: o,
                        animation: m.Y.Animation.FADE,
                        positionKey: null != s.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            if (s.type === q.lAJ.CHAT_INPUT_COMMAND || s.type === q.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(h.D, {
                                    ...l,
                                    tag: "span",
                                    onClick: r,
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: a()(Q.lm, Q.vk),
                                        children: [
                                            (0, i.jsx)(g.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: Q.am,
                                            }),
                                            c,
                                        ],
                                    }),
                                });
                            if (!(0, N.V)(s)) return (0, i.jsx)("div", { className: Q.p6, ref: n, children: c });
                            {
                                let e = (0, C.kF)(c);
                                return (0, i.jsx)(h.D, {
                                    ...l,
                                    tag: "span",
                                    onClick: function () {
                                        b._.dispatchToLastSubscribed(q.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: s.applicationId,
                                        });
                                    },
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: a()(Q.lm, Q.vk),
                                        children: [
                                            (0, i.jsx)(g.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: Q.am,
                                            }),
                                            e,
                                        ],
                                    }),
                                });
                            }
                        },
                    });
                })(e, O, M);
                return (0, i.jsx)(l.Fragment, { children: t }, "command");
            },
        })),
            U && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(en, {}), e.renderTargetMessage()] }))
                : null != D &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(en, {}),
                          (0, i.jsx)(function () {
                              if (null == D) return null;
                              let t = ee(e, D, 1, w, (e) => k(e, D, [E.A.AVATAR]), y),
                                  n = et(e, D, 1, w, (e) => k(e, D));
                              return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  }));
    else {
        function J() {
            (0, _.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: c,
            }),
                (0, f.LV)({ guildId: s.guild_id });
        }
        t = V
            ? z.intl.format(z.t.kfV8WM, {
                  userHook: F,
                  activityHook: function () {
                      return (0, i.jsx)(h.D, {
                          tag: "span",
                          onClick: J,
                          children: (0, i.jsx)("div", {
                              className: a()(Q.p6, Q.vk),
                              children: z.intl.string(z.t.YTgRvn),
                          }),
                      });
                  },
              })
            : z.intl.format(z.t["6FeSyT"], { userHook: F });
    }
    return (0, i.jsx)(I.f5, {
        value: r,
        children: (0, i.jsx)("div", { className: a()(Q.JZ, Q.NB, Q.JE, H), "aria-hidden": !e.compact, children: t }),
    });
}
