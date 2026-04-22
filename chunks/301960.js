"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    u = n.n(c),
    d = n(311907),
    _ = n(265872),
    E = n(939249),
    A = n(323384),
    m = n(320448),
    I = n(155718),
    T = n(811024),
    N = n(795816),
    g = n(793574),
    p = n(688810),
    C = n(735991),
    f = n(975412),
    h = n(168186),
    R = n(597929),
    S = n(589022),
    O = n(427157),
    x = n(287809),
    M = n(486020),
    D = n(203982),
    P = n(405269),
    U = n(763754),
    y = n(635071),
    L = n(728963),
    v = n(943815),
    j = n(652215),
    k = n(985018),
    b = n(334211);
function G(e) {
    let { width: t = 6, height: n = 10, color: r = "currentColor", className: l, foreground: s } = e;
    return (0, i.jsx)("svg", {
        className: l,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: s,
            fill: r,
        }),
    });
}
function w(e, t, n, r, l, a) {
    let {
        message: o,
        compact: c,
        channel: u,
        isInteractionUserBlocked: d,
        isInteractionUserIgnored: E,
        showAvatarPopout: A,
        showTargetAvatarPopout: m,
        onClickAvatar: I,
        onUserContextMenu: T,
        onClickTargetAvatar: N,
        onTargetUserContextMenu: g,
        onPopoutRequestClose: p,
    } = e;
    if (c && 1 === n) return null;
    if ((c && null == o.activityInstance) || d || E)
        return (0, i.jsx)("div", { className: b.Cz, children: (0, i.jsx)(G, { className: b.Jx }) });
    let C =
            M.Ay.getGuildMemberAvatarURL({
                avatar: r.guildMemberAvatar ?? void 0,
                userId: t.id,
                guildId: u?.guild_id ?? "",
            }) ?? void 0,
        f = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: r, onClick: l, onContextMenu: a, onMouseDown: o, ref: c } = e;
                return (0, i.jsx)("img", {
                    alt: "",
                    src: r ?? t.getAvatarURL(n, 16),
                    onClick: l,
                    onContextMenu: a,
                    onMouseDown: o,
                    className: s()({ [b.WU]: !0, [b.vk]: null != l }),
                    ref: c,
                });
            })({
                user: t,
                guildId: u.guild_id,
                guildAvatar: C,
                onClick: 1 === n ? N : I,
                onContextMenu: 1 === n ? g : T,
                ref: a,
            }),
        h = 1 === n ? m : A;
    return null != l && null != h && null != a
        ? (0, i.jsx)(_.Y, {
              targetElementRef: a,
              renderPopout: l,
              shouldShow: h,
              position: "right",
              onRequestClose: p,
              children: f,
          })
        : f();
}
function B(e, t, n, r, l) {
    let {
        message: s,
        channel: a,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: _,
        onTargetUserContextMenu: E,
        onPopoutRequestClose: A,
    } = e;
    return (0, i.jsx)(y.A, {
        className: 1 === n ? b.iu : "",
        compact: !0,
        author: r,
        message: s,
        channel: a,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: l,
        onClick: 1 === n ? _ : u,
        onContextMenu: 1 === n ? E : d,
        onPopoutRequestClose: A,
    });
}
let H = () => (0, i.jsx)(m._, { size: "xxs", color: "currentColor", className: b.M5 });
function F(e) {
    let t,
        { message: n, channel: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: c } = (0, p.Ay)(g.A.EXECUTED_COMMAND),
        m = (0, d.bG)([x.default], () => x.default.getCurrentUser()),
        M = r.useRef(null),
        y = r.useRef(null),
        G = r.useMemo(
            () => (e, t, r) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != m, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != l, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(S.A, {
                    ...e,
                    user: t,
                    currentUser: m,
                    guildId: l.guild_id,
                    channelId: l.id,
                    messageId: n.id,
                    newAnalyticsLocations: r,
                })
            ),
            [m, l, n.id],
        ),
        F = r.useMemo(
            () => (e) => (
                o()(null != l, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(L.A, { ...e, channel: l, messageId: n.id, interactionData: n.interactionData })
            ),
            [l, n.id, n.interactionData],
        ),
        X = (0, h.Am)(n),
        q = X?.type === I.G4.APPLICATION_COMMAND && null != X.target_user ? new O.A(X.target_user) : null,
        V = X?.type === I.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        K = (0, U.d8)(n.interaction?.user, l),
        W = (0, U.d8)(q, l),
        Y = r.useMemo(() => (e.compact ? (0, v.A)((0, P.i$)(u()(), "LT")) : null), [e.compact]),
        z = (0, T.Gp)(l.id),
        J = n.interaction;
    if (null == J || null == K) return null;
    let Q = () => {
        let t = w(e, J.user, 0, K, (e) => G(e, J.user, [g.A.AVATAR]), M),
            n = B(e, J.user, 0, K, (e) => G(e, J.user));
        return (0, i.jsxs)(r.Fragment, { children: [t, n] }, "user");
    };
    if (n?.activityInstance === null || (0, R.V)(n))
        (t = k.intl.format(k.t["rg7U+C"], {
            userHook: Q,
            commandHook: () => {
                let t = (function (e, t, n) {
                    let { showDataPopout: r, message: l, onClickCommand: a, onPopoutRequestClose: o } = e,
                        c = l.interaction.displayName;
                    return (0, i.jsx)(_.Y, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: r,
                        position: "top",
                        align: "center",
                        onRequestClose: o,
                        animation: _.Y.Animation.FADE,
                        positionKey: null != l.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t, ...r } = e;
                            if (l.type === j.lAJ.CHAT_INPUT_COMMAND || l.type === j.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(E.D, {
                                    ...r,
                                    tag: "span",
                                    onClick: a,
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: s()(b.lm, b.vk),
                                        children: [
                                            (0, i.jsx)(A.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: b.am,
                                            }),
                                            c,
                                        ],
                                    }),
                                });
                            if (!(0, R.V)(l)) return (0, i.jsx)("div", { className: b.p6, ref: n, children: c });
                            {
                                let e = (0, C.kF)(c);
                                return (0, i.jsx)(E.D, {
                                    ...r,
                                    tag: "span",
                                    onClick: () => {
                                        D._.dispatchToLastSubscribed(j.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: l.applicationId,
                                        });
                                    },
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: s()(b.lm, b.vk),
                                        children: [
                                            (0, i.jsx)(A.k, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: b.am,
                                            }),
                                            e,
                                        ],
                                    }),
                                });
                            }
                        },
                    });
                })(e, F, y);
                return (0, i.jsx)(r.Fragment, { children: t }, "command");
            },
        })),
            V && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(H, {}), e.renderTargetMessage()] }))
                : null != q &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(H, {}),
                          (0, i.jsx)(() => {
                              if (null == q) return null;
                              let t = w(e, q, 1, W, (e) => G(e, q, [g.A.AVATAR]), M),
                                  n = B(e, q, 1, W, (e) => G(e, q));
                              return (0, i.jsxs)(r.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  }));
    else {
        let e = () => {
            (0, f.A)({
                context: null != l ? { type: "channel", channel: l } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: c,
            }),
                (0, N.LV)({ guildId: l.guild_id });
        };
        t = z
            ? k.intl.format(k.t.kfV8WM, {
                  userHook: Q,
                  activityHook: () =>
                      (0, i.jsx)(E.D, {
                          tag: "span",
                          onClick: e,
                          children: (0, i.jsx)("div", {
                              className: s()(b.p6, b.vk),
                              children: k.intl.string(k.t.YTgRvn),
                          }),
                      }),
              })
            : k.intl.format(k.t["6FeSyT"], { userHook: Q });
    }
    return (0, i.jsx)(p.f5, {
        value: a,
        children: (0, i.jsx)("div", { className: s()(b.JZ, b.NB, b.JE, Y), "aria-hidden": !e.compact, children: t }),
    });
}
