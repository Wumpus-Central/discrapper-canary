n.d(t, { A: () => ei });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(536637),
    d = n.n(c),
    u = n(17928),
    m = n(922016),
    x = n(939249),
    h = n(323384),
    g = n(320448),
    f = n(155718),
    A = n(811024),
    E = n(795816),
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
    U = n(289873),
    D = n(47167),
    b = n(842209),
    P = n(706727),
    G = n(332173),
    H = n(402860),
    w = n(734057),
    F = n(317525),
    V = n(71393),
    B = n(994500);
n(827669);
var J = n(375708),
    z = n(894625);
let Z = { tag: "span", variant: "text-md/normal", color: "text-default" },
    K = { className: a()("mention", z.lE) };
function X(e) {
    return (0, i.jsx)(k.E, { ...Z, color: "text-strong", children: e });
}
let W = l.memo(function (e) {
    var t;
    let n,
        s,
        a,
        { channel: r, messageId: o, interactionData: c } = e,
        { analyticsLocations: d } = (0, p.Ay)(),
        { onCopy: m, copyRef: x } =
            ((t = c?.application_command?.id),
            (n = l.useRef(null)),
            (s = l.useCallback((e, t) => {
                (e.preventDefault(),
                    e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                    e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? ""));
            }, [])),
            b.D3({ channel: r, type: "channel" }, t),
            { onCopy: s, copyRef: n }),
        h = (0, u.bG)([V.A], () => V.A.getGuild(r.guild_id), [r.guild_id]);
    if (
        (l.useEffect(() => {
            (null == c || (c.type === f.kc.CHAT && void 0 === c.application_command)) && P.S7(r.id, o);
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
                            option: s,
                            channel: a,
                            guild: r,
                            messageId: o,
                            parentOptionKey: c,
                            commandOptionSpec: d,
                            sourceAnalyticsLocations: u,
                        } = t,
                        m = null != c ? c + " " + s.name : s.name;
                    if (s.type === f.n4.SUB_COMMAND || s.type === f.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(k.E, { ...Z, children: d?.name_localized ?? s.name }),
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
                            case f.n4.USER: {
                                let e = s.value.toString(),
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
                            case f.n4.CHANNEL: {
                                let e = s.value.toString(),
                                    t = w.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(G.A, { ...K, children: ["#", (0, D.m1)(t, S.default, B.A)] }));
                                break;
                            }
                            case f.n4.ROLE: {
                                let e = s.value.toString(),
                                    t = null != r ? F.A.getRole(r.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(G.A, { ...K, children: ["@", t.name] }));
                                break;
                            }
                            case f.n4.MENTIONABLE: {
                                let e = s.value.toString(),
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
                            case f.n4.ATTACHMENT:
                                n = X(J.intl.string(J.t.nONJVc));
                                break;
                            default: {
                                let e = d?.choices?.find((e) => e.value === s.value);
                                null != e && (x = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = X(x?.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(k.E, { ...Z, children: [" ", d?.name_localized ?? s.name, ": "] }),
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
            children: [(0, i.jsxs)(k.E, { ...Z, children: ["/", c.application_command?.name_localized ?? c.name] }), e],
        });
    }
    return (0, i.jsxs)("div", {
        className: z.kL,
        onCopy: function (e) {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && m(e, c);
        },
        children: [(0, i.jsx)("div", { className: z.YL, ref: x, children: a }), (0, i.jsx)("div", { className: z.xQ })],
    });
});
var Y = n(943815),
    Q = n(652215),
    q = n(318626);
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
        isInteractionUserIgnored: x,
        showAvatarPopout: h,
        showTargetAvatarPopout: g,
        onClickAvatar: f,
        onUserContextMenu: A,
        onClickTargetAvatar: E,
        onTargetUserContextMenu: _,
        onPopoutRequestClose: p,
    } = e;
    if (c && 1 === n) return null;
    if ((c && null == o.activityInstance) || u || x)
        return (0, i.jsx)("div", { className: q.Cz, children: (0, i.jsx)($, { className: q.Jx }) });
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
                className: a()({ [q.WU]: !0, [q.vk]: null != s }),
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
    let N = 1 === n ? g : h;
    return null != s && null != N && null != r
        ? (0, i.jsx)(m.Y, {
              targetElementRef: r,
              renderPopout: s,
              shouldShow: N,
              position: "right",
              onRequestClose: p,
              children: I,
          })
        : I();
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
        onTargetUserContextMenu: x,
        onPopoutRequestClose: h,
    } = e;
    return (0, i.jsx)(y.A, {
        className: 1 === n ? q.iu : "",
        compact: !0,
        author: l,
        message: a,
        channel: r,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: s,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? x : u,
        onPopoutRequestClose: h,
    });
}
function en() {
    return (0, i.jsx)(g._, { size: "xxs", color: "currentColor", className: q.M5 });
}
function ei(e) {
    let t,
        { message: n, channel: s } = e,
        { analyticsLocations: r, newestAnalyticsLocation: c } = (0, p.Ay)(_.A.EXECUTED_COMMAND),
        g = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        O = l.useRef(null),
        y = l.useRef(null),
        k = l.useMemo(
            () => (e, t, l) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != g, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != s, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(T.A, {
                    ...e,
                    user: t,
                    currentUser: g,
                    guildId: s.guild_id,
                    channelId: s.id,
                    messageId: n.id,
                    newAnalyticsLocations: l,
                })
            ),
            [g, s, n.id],
        ),
        U = l.useMemo(
            () => (e) => (
                o()(null != s, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(W, { ...e, channel: s, messageId: n.id, interactionData: n.interactionData })
            ),
            [s, n.id, n.interactionData],
        ),
        D = (0, N.Am)(n),
        b = D?.type === f.G4.APPLICATION_COMMAND && null != D.target_user ? new v.A(D.target_user) : null,
        P = D?.type === f.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        G = (0, L.d8)(n.interaction?.user, s),
        H = (0, L.d8)(b, s),
        w = l.useMemo(() => (e.compact ? (0, Y.A)((0, M.i$)(d()(), "LT")) : null), [e.compact]),
        F = (0, A.Gp)(s.id),
        V = n.interaction;
    if (null == V || null == G) return null;
    function B() {
        if (null == V) return null;
        let t = ee(e, V.user, 0, G, (e) => k(e, V.user, [_.A.AVATAR]), O),
            n = et(e, V.user, 0, G, (e) => k(e, V.user));
        return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "user");
    }
    if (n?.activityInstance === null || (0, j.V)(n))
        ((t = J.intl.format(J.t["rg7U+C"], {
            userHook: B,
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
                            if (s.type === Q.lAJ.CHAT_INPUT_COMMAND || s.type === Q.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(x.D, {
                                    ...l,
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
                            if (!(0, j.V)(s)) return (0, i.jsx)("div", { className: q.p6, ref: n, children: c });
                            {
                                let e = (0, C.kF)(c);
                                return (0, i.jsx)(x.D, {
                                    ...l,
                                    tag: "span",
                                    onClick: function () {
                                        R._.dispatchToLastSubscribed(Q.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: s.applicationId,
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
                return (0, i.jsx)(l.Fragment, { children: t }, "command");
            },
        })),
            P && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(en, {}), e.renderTargetMessage()] }))
                : null != b &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(en, {}),
                          (0, i.jsx)(function () {
                              if (null == b) return null;
                              let t = ee(e, b, 1, H, (e) => k(e, b, [_.A.AVATAR]), O),
                                  n = et(e, b, 1, H, (e) => k(e, b));
                              return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  })));
    else {
        function z() {
            ((0, I.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: c,
            }),
                (0, E.LV)({ guildId: s.guild_id }));
        }
        t = F
            ? J.intl.format(J.t.kfV8WM, {
                  userHook: B,
                  activityHook: function () {
                      return (0, i.jsx)(x.D, {
                          tag: "span",
                          onClick: z,
                          children: (0, i.jsx)("div", {
                              className: a()(q.p6, q.vk),
                              children: J.intl.string(J.t.YTgRvn),
                          }),
                      });
                  },
              })
            : J.intl.format(J.t["6FeSyT"], { userHook: B });
    }
    return (0, i.jsx)(p.f5, {
        value: r,
        children: (0, i.jsx)("div", { className: a()(q.JZ, q.NB, q.JE, w), "aria-hidden": !e.compact, children: t }),
    });
}
