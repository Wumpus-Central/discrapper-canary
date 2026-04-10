"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(284009),
    c = n.n(a),
    o = n(989349),
    u = n.n(o),
    d = n(311907),
    _ = n(397927),
    E = n(155718),
    A = n(811024),
    m = n(795816),
    I = n(793574),
    T = n(688810),
    g = n(735991),
    N = n(975412),
    f = n(168186),
    p = n(597929),
    C = n(589022),
    h = n(427157),
    S = n(287809),
    R = n(486020),
    x = n(203982),
    O = n(405269),
    M = n(763754),
    D = n(635071),
    U = n(728963),
    P = n(943815),
    L = n(652215),
    v = n(985018),
    y = n(767283);
function j(e) {
    let { width: t = 6, height: n = 10, color: r = "currentColor", className: s, foreground: l } = e;
    return (0, i.jsx)("svg", {
        className: s,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: l,
            fill: r,
        }),
    });
}
function k(e, t, n, r, s, a) {
    let {
        message: c,
        compact: o,
        channel: u,
        isInteractionUserBlocked: d,
        isInteractionUserIgnored: E,
        showAvatarPopout: A,
        showTargetAvatarPopout: m,
        onClickAvatar: I,
        onUserContextMenu: T,
        onClickTargetAvatar: g,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: f,
    } = e;
    if (o && 1 === n) return null;
    if ((o && null == c.activityInstance) || d || E)
        return (0, i.jsx)("div", { className: y.Cz, children: (0, i.jsx)(j, { className: y.Jx }) });
    let p =
            R.Ay.getGuildMemberAvatarURL({
                avatar: r.guildMemberAvatar ?? void 0,
                userId: t.id,
                guildId: u?.guild_id ?? "",
            }) ?? void 0,
        C = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: r, onClick: s, onContextMenu: a, onMouseDown: c, ref: o } = e;
                return (0, i.jsx)("img", {
                    alt: "",
                    src: r ?? t.getAvatarURL(n, 16),
                    onClick: s,
                    onContextMenu: a,
                    onMouseDown: c,
                    className: l()({ [y.WU]: !0, [y.vk]: null != s }),
                    ref: o,
                });
            })({
                user: t,
                guildId: u.guild_id,
                guildAvatar: p,
                onClick: 1 === n ? g : I,
                onContextMenu: 1 === n ? N : T,
                ref: a,
            }),
        h = 1 === n ? m : A;
    return null != s && null != h && null != a
        ? (0, i.jsx)(_.YNO, {
              targetElementRef: a,
              renderPopout: s,
              shouldShow: h,
              position: "right",
              onRequestClose: f,
              children: C,
          })
        : C();
}
function b(e, t, n, r, s) {
    let {
        message: l,
        channel: a,
        showUsernamePopout: c,
        showTargetUsernamePopout: o,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: _,
        onTargetUserContextMenu: E,
        onPopoutRequestClose: A,
    } = e;
    return (0, i.jsx)(D.A, {
        className: 1 === n ? y.iu : "",
        compact: !0,
        author: r,
        message: l,
        channel: a,
        userOverride: t,
        showPopout: 1 === n ? o : c,
        renderPopout: s,
        onClick: 1 === n ? _ : u,
        onContextMenu: 1 === n ? E : d,
        onPopoutRequestClose: A,
    });
}
let G = () => (0, i.jsx)(_._BQ, { size: "xxs", color: "currentColor", className: y.M5 });
function H(e) {
    let t,
        { message: n, channel: s } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, T.Ay)(I.A.EXECUTED_COMMAND),
        R = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        D = r.useRef(null),
        j = r.useRef(null),
        H = r.useMemo(
            () => (e, t, r) => (
                c()(null != t, "ExecutedCommand: user cannot be undefined"),
                c()(null != R, "ExecutedCommand: currentUser cannot be undefined"),
                c()(null != s, "ExecutedCommand: channel cannot be undefined"),
                (0, i.jsx)(C.A, {
                    ...e,
                    user: t,
                    currentUser: R,
                    guildId: s.guild_id,
                    channelId: s.id,
                    messageId: n.id,
                    newAnalyticsLocations: r,
                })
            ),
            [R, s, n.id],
        ),
        F = r.useMemo(
            () => (e) => (
                c()(null != s, "ExecutedCommand: channel cannot be null"),
                (0, i.jsx)(U.A, { ...e, channel: s, messageId: n.id, interactionData: n.interactionData })
            ),
            [s, n.id, n.interactionData],
        ),
        w = (0, f.Am)(n),
        B = w?.type === E.G4.APPLICATION_COMMAND && null != w.target_user ? new h.A(w.target_user) : null,
        V = w?.type === E.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        X = (0, M.d8)(n.interaction?.user, s),
        q = (0, M.d8)(B, s),
        K = r.useMemo(() => (e.compact ? (0, P.A)((0, O.i$)(u()(), "LT")) : null), [e.compact]),
        Y = (0, A.Gp)(s.id),
        W = n.interaction;
    if (null == W || null == X) return null;
    let J = () => {
        let t = k(e, W.user, 0, X, (e) => H(e, W.user, [I.A.AVATAR]), D),
            n = b(e, W.user, 0, X, (e) => H(e, W.user));
        return (0, i.jsxs)(r.Fragment, { children: [t, n] }, "user");
    };
    if (n?.activityInstance === null || (0, p.V)(n))
        (t = v.intl.format(v.t["rg7U+C"], {
            userHook: J,
            commandHook: () => {
                let t = (function (e, t, n) {
                    let { showDataPopout: r, message: s, onClickCommand: a, onPopoutRequestClose: c } = e,
                        o = s.interaction.displayName;
                    return (0, i.jsx)(_.YNO, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: r,
                        position: "top",
                        align: "center",
                        onRequestClose: c,
                        animation: _.YNO.Animation.FADE,
                        positionKey: null != s.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t, ...r } = e;
                            if (s.type === L.lAJ.CHAT_INPUT_COMMAND || s.type === L.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(_.DUT, {
                                    ...r,
                                    tag: "span",
                                    onClick: a,
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: l()(y.lm, y.vk),
                                        children: [
                                            (0, i.jsx)(_.k9F, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: y.am,
                                            }),
                                            o,
                                        ],
                                    }),
                                });
                            if (!(0, p.V)(s)) return (0, i.jsx)("div", { className: y.p6, ref: n, children: o });
                            {
                                let e = (0, g.kF)(o);
                                return (0, i.jsx)(_.DUT, {
                                    ...r,
                                    tag: "span",
                                    onClick: () => {
                                        x._.dispatchToLastSubscribed(L.jej.OPEN_APP_LAUNCHER, {
                                            applicationId: s.applicationId,
                                        });
                                    },
                                    innerRef: n,
                                    children: (0, i.jsxs)("div", {
                                        className: l()(y.lm, y.vk),
                                        children: [
                                            (0, i.jsx)(_.k9F, {
                                                size: "custom",
                                                color: "currentColor",
                                                height: 10,
                                                width: 10,
                                                className: y.am,
                                            }),
                                            e,
                                        ],
                                    }),
                                });
                            }
                        },
                    });
                })(e, F, j);
                return (0, i.jsx)(r.Fragment, { children: t }, "command");
            },
        })),
            V && null != e.renderTargetMessage
                ? (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(G, {}), e.renderTargetMessage()] }))
                : null != B &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [
                          t,
                          (0, i.jsx)(G, {}),
                          (0, i.jsx)(() => {
                              if (null == B) return null;
                              let t = k(e, B, 1, q, (e) => H(e, B, [I.A.AVATAR]), D),
                                  n = b(e, B, 1, q, (e) => H(e, B));
                              return (0, i.jsxs)(r.Fragment, { children: [t, n] }, "target");
                          }, {}),
                      ],
                  }));
    else {
        let e = () => {
            (0, N.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: o,
            }),
                (0, m.LV)({ guildId: s.guild_id });
        };
        t = Y
            ? v.intl.format(v.t.kfV8WM, {
                  userHook: J,
                  activityHook: () =>
                      (0, i.jsx)(_.DUT, {
                          tag: "span",
                          onClick: e,
                          children: (0, i.jsx)("div", {
                              className: l()(y.p6, y.vk),
                              children: v.intl.string(v.t.YTgRvn),
                          }),
                      }),
              })
            : v.intl.format(v.t["6FeSyT"], { userHook: J });
    }
    return (0, i.jsx)(T.f5, {
        value: a,
        children: (0, i.jsx)("div", { className: l()(y.JZ, y.NB, y.JE, K), "aria-hidden": !e.compact, children: t }),
    });
}
