n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(989349),
    c = n.n(d),
    u = n(311907),
    m = n(397927),
    _ = n(155718),
    h = n(811024),
    p = n(795816),
    g = n(793574),
    A = n(688810),
    f = n(735991),
    x = n(975412),
    E = n(168186),
    C = n(597929),
    I = n(589022),
    T = n(427157),
    v = n(287809),
    N = n(486020),
    S = n(203982),
    b = n(405269),
    y = n(763754),
    j = n(635071),
    R = n(728963),
    L = n(943815),
    M = n(652215),
    O = n(985018),
    P = n(679740);
function D(e) {
    let { width: t = 6, height: n = 10, color: l = "currentColor", className: a, foreground: r } = e;
    return (0, i.jsx)("svg", {
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: r,
            fill: l,
        }),
    });
}
function k(e, t, n, l, a, s) {
    let {
        message: o,
        compact: d,
        channel: c,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: _,
        showAvatarPopout: h,
        showTargetAvatarPopout: p,
        onClickAvatar: g,
        onUserContextMenu: A,
        onClickTargetAvatar: f,
        onTargetUserContextMenu: x,
        onPopoutRequestClose: E,
    } = e;
    if (d && 1 === n) return null;
    if ((d && null == o.activityInstance) || u || _)
        return (0, i.jsx)("div", { className: P.Cz, children: (0, i.jsx)(D, { className: P.Jx }) });
    let C =
            N.Ay.getGuildMemberAvatarURL({
                avatar: l.guildMemberAvatar ?? void 0,
                userId: t.id,
                guildId: c?.guild_id ?? "",
            }) ?? void 0,
        I = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: l, onClick: a, onContextMenu: s, onMouseDown: o, ref: d } = e;
                return (0, i.jsx)("img", {
                    alt: "",
                    src: l ?? t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: s,
                    onMouseDown: o,
                    className: r()({ [P.WU]: !0, [P.vk]: null != a }),
                    ref: d,
                });
            })({
                user: t,
                guildId: c.guild_id,
                guildAvatar: C,
                onClick: 1 === n ? f : g,
                onContextMenu: 1 === n ? x : A,
                ref: s,
            }),
        T = 1 === n ? p : h;
    return null != a && null != T && null != s
        ? (0, i.jsx)(m.YNO, {
              targetElementRef: s,
              renderPopout: a,
              shouldShow: T,
              position: "right",
              onRequestClose: E,
              children: I,
          })
        : I();
}
function U(e, t, n, l, a) {
    let {
        message: r,
        channel: s,
        showUsernamePopout: o,
        showTargetUsernamePopout: d,
        onClickUsername: c,
        onUserContextMenu: u,
        onClickTargetUsername: m,
        onTargetUserContextMenu: _,
        onPopoutRequestClose: h,
    } = e;
    return (0, i.jsx)(j.A, {
        className: 1 === n ? P.iu : "",
        compact: !0,
        author: l,
        message: r,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? d : o,
        renderPopout: a,
        onClick: 1 === n ? m : c,
        onContextMenu: 1 === n ? _ : u,
        onPopoutRequestClose: h,
    });
}
let w = () => (0, i.jsx)(m._BQ, { size: "xxs", color: "currentColor", className: P.M5 });
function G(e) {
    let t,
        { message: n, channel: a } = e,
        { analyticsLocations: s, newestAnalyticsLocation: d } = (0, A.Ay)(g.A.EXECUTED_COMMAND),
        N = (0, u.bG)([v.default], () => v.default.getCurrentUser()),
        j = l.useRef(null),
        D = l.useRef(null),
        G = l.useMemo(
            () => (e, t, l) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != N, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != a, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(I.A, {
                    ...e,
                    user: t,
                    currentUser: N,
                    guildId: a.guild_id,
                    channelId: a.id,
                    messageId: n.id,
                    newAnalyticsLocations: l,
                })
            ),
            [N, a, n.id],
        ),
        B = l.useMemo(
            () => (e) => (
                o()(null != a, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(R.A, { ...e, channel: a, messageId: n.id, interactionData: n.interactionData })
            ),
            [a, n.id, n.interactionData],
        ),
        F = (0, E.Am)(n),
        H = F?.type === _.G4.APPLICATION_COMMAND && null != F.target_user ? new T.A(F.target_user) : null,
        V = F?.type === _.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        z = (0, y.d8)(n.interaction?.user, a),
        W = (0, y.d8)(H, a),
        Y = l.useMemo(() => (e.compact ? (0, L.A)((0, b.i$)(c()(), "LT")) : null), [e.compact]),
        q = (0, h.Gp)(a.id),
        K = n.interaction;
    if (null == K || null == z) return null;
    let Q = () => {
        let t = k(e, K.user, 0, z, (e) => G(e, K.user, [g.A.AVATAR]), j),
            n = U(e, K.user, 0, z, (e) => G(e, K.user));
        return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "user");
    };
    if (n?.activityInstance === null || (0, C.V)(n))
        (t = O.intl.format(O.t["rg7U+C"], {
            userHook: Q,
            commandHook: () => {
                let t = (function (e, t, n) {
                    let { showDataPopout: l, message: a, onClickCommand: s, onPopoutRequestClose: o } = e,
                        d = a.interaction.displayName;
                    return (0, i.jsx)(m.YNO, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: l,
                        position: "top",
                        align: "center",
                        onRequestClose: o,
                        animation: m.YNO.Animation.FADE,
                        positionKey: null != a.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            if (a.type === M.lAJ.CHAT_INPUT_COMMAND || a.type === M.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(m.DUT, {
                                    ...l,
                                    tag: "span",
                                    onClick: s,
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: r()(P.lm, P.vk),
                                        children: [
                                            (0, i.jsx)(m.k9F, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: P.am,
                                            }),
                                            d,
                                        ],
                                    }),
                                });
                            if (!(0, C.V)(a)) return (0, i.jsx)("div", { className: P.p6, ref: n, children: d });
                            {
                                let e = (0, f.kF)(d);
                                return (0, i.jsx)(m.DUT, {
                                    ...l,
                                    tag: "span",
                                    onClick: () => {
                                        S._.dispatchToLastSubscribed(M.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: a.applicationId,
                                        });
                                    },
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: r()(P.lm, P.vk),
                                        children: [
                                            (0, i.jsx)(m.k9F, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: P.am,
                                            }),
                                            e,
                                        ],
                                    }),
                                });
                            }
                        },
                    });
                })(e, B, D);
                return (0, i.jsx)(l.Fragment, { children: t }, "command");
            },
        })),
            V && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(w, {}), e.renderTargetMessage()] }))
                : null != H &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(w, {}),
                          (0, i.jsx)(() => {
                              if (null == H) return null;
                              let t = k(e, H, 1, W, (e) => G(e, H, [g.A.AVATAR]), j),
                                  n = U(e, H, 1, W, (e) => G(e, H));
                              return (0, i.jsxs)(l.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  }));
    else {
        let e = () => {
            (0, x.A)({
                context: null != a ? { type: "channel", channel: a } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: d,
            }),
                (0, p.LV)({ guildId: a.guild_id });
        };
        t = q
            ? O.intl.format(O.t.kfV8WM, {
                  userHook: Q,
                  activityHook: () =>
                      (0, i.jsx)(m.DUT, {
                          tag: "span",
                          onClick: e,
                          children: (0, i.jsx)("div", {
                              className: r()(P.p6, P.vk),
                              children: O.intl.string(O.t.YTgRvn),
                          }),
                      }),
              })
            : O.intl.format(O.t["6FeSyT"], { userHook: Q });
    }
    return (0, i.jsx)(A.f5, {
        value: s,
        children: (0, i.jsx)("div", { className: r()(P.JZ, P.NB, P.JE, Y), "aria-hidden": !e.compact, children: t }),
    });
}
