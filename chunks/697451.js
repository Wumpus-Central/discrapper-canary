n.d(t, { Z: () => K });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(481060),
    p = n(911969),
    _ = n(595519),
    m = n(566620),
    h = n(100527),
    g = n(906732),
    E = n(783097),
    b = n(397698),
    y = n(581364),
    O = n(592180),
    v = n(726033),
    S = n(598077),
    I = n(594174),
    T = n(768581),
    A = n(585483),
    C = n(55935),
    N = n(739566),
    P = n(421399),
    R = n(310423),
    w = n(223021),
    D = n(981631),
    x = n(388032),
    L = n(724913);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function B(e) {
    let { width: t = 6, height: n = 10, color: i = "currentColor", className: a, foreground: o } = e;
    return (0, r.jsx)("svg", {
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: o,
            fill: i,
        }),
    });
}
function F(e) {
    let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: s, onMouseDown: l, ref: c } = e;
    return (0, r.jsx)("img", {
        alt: "",
        src: null != i ? i : t.getAvatarURL(n, 16),
        onClick: a,
        onContextMenu: s,
        onMouseDown: l,
        className: o()({
            [L.executedCommandAvatar]: !0,
            [L.clickable]: null != a,
        }),
        ref: c,
    });
}
function V(e, t, n, i, a, o) {
    var s, l, c;
    let {
        message: u,
        compact: d,
        channel: p,
        isInteractionUserBlocked: _,
        isInteractionUserIgnored: m,
        showAvatarPopout: h,
        showTargetAvatarPopout: g,
        onClickAvatar: E,
        onUserContextMenu: b,
        onClickTargetAvatar: y,
        onTargetUserContextMenu: O,
        onPopoutRequestClose: v,
    } = e;
    if (d && 1 === n) return null;
    if ((d && null == u.activityInstance) || _ || m)
        return (0, r.jsx)("div", {
            className: L.replyBadge,
            children: (0, r.jsx)(B, { className: L.commandIcon }),
        });
    let S =
            null !=
            (c = T.ZP.getGuildMemberAvatarURL({
                avatar: null != (s = i.guildMemberAvatar) ? s : void 0,
                userId: t.id,
                guildId: null != (l = null == p ? void 0 : p.guild_id) ? l : "",
            }))
                ? c
                : void 0,
        I = () =>
            F({
                user: t,
                guildId: p.guild_id,
                guildAvatar: S,
                onClick: 1 === n ? y : E,
                onContextMenu: 1 === n ? O : b,
                ref: o,
            }),
        A = 1 === n ? g : h;
    return null != a && null != A && null != o
        ? (0, r.jsx)(f.yRy, {
              targetElementRef: o,
              renderPopout: a,
              shouldShow: A,
              position: "right",
              onRequestClose: v,
              children: I,
          })
        : I();
}
function H(e, t, n, i, a) {
    let {
        message: o,
        channel: s,
        showUsernamePopout: l,
        showTargetUsernamePopout: c,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: f,
        onTargetUserContextMenu: p,
        onPopoutRequestClose: _,
    } = e;
    return (0, r.jsx)(P.Z, {
        className: 1 === n ? L.targetUsername : "",
        compact: !0,
        author: i,
        message: o,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? c : l,
        renderPopout: a,
        onClick: 1 === n ? f : u,
        onContextMenu: 1 === n ? p : d,
        onPopoutRequestClose: _,
    });
}
function Y(e, t, n) {
    let { showDataPopout: i, message: a, onClickCommand: s, onPopoutRequestClose: l } = e,
        c = a.interaction.displayName;
    return (0, r.jsx)(f.yRy, {
        targetElementRef: n,
        renderPopout: t,
        shouldShow: i,
        position: "top",
        align: "center",
        onRequestClose: l,
        animation: f.yRy.Animation.FADE,
        positionKey: null != a.interactionData ? "ready" : "loading",
        children: (e) => {
            var { onClick: t } = e,
                i = G(e, ["onClick"]);
            if (a.type === D.uaV.CHAT_INPUT_COMMAND || a.type === D.uaV.INTERACTION_PREMIUM_UPSELL)
                return (0, r.jsx)(
                    f.P3F,
                    U(M({}, i), {
                        tag: "span",
                        onClick: s,
                        innerRef: n,
                        children: (0, r.jsxs)("div", {
                            className: o()(L.appLauncherOnboardingCommandName, L.clickable),
                            children: [
                                (0, r.jsx)(f.jje, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: L.appsIcon,
                                }),
                                c,
                            ],
                        }),
                    }),
                );
            if (!(0, O.g)(a))
                return (0, r.jsx)("div", {
                    className: L.commandName,
                    ref: n,
                    children: c,
                });
            {
                let e = () => {
                        A.S.dispatchToLastSubscribed(D.CkL.OPEN_APP_LAUNCHER, { applicationId: a.applicationId });
                    },
                    t = (0, E.XZ)(c);
                return (0, r.jsx)(
                    f.P3F,
                    U(M({}, i), {
                        tag: "span",
                        onClick: e,
                        innerRef: n,
                        children: (0, r.jsxs)("div", {
                            className: o()(L.appLauncherOnboardingCommandName, L.clickable),
                            children: [
                                (0, r.jsx)(f.jje, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: L.appsIcon,
                                }),
                                t,
                            ],
                        }),
                    }),
                );
            }
        },
    });
}
let W = () =>
    (0, r.jsx)(f.Fbu, {
        size: "xxs",
        color: "currentColor",
        className: L.executedCommandSeparator,
    });
function K(e) {
    var t;
    let n,
        { message: a, channel: s } = e,
        { analyticsLocations: c, newestAnalyticsLocation: E } = (0, g.ZP)(h.Z.EXECUTED_COMMAND),
        T = (0, d.e7)([I.default], () => I.default.getCurrentUser()),
        A = i.useRef(null),
        P = i.useRef(null),
        D = i.useMemo(
            () => (e, t, n) => (
                l()(null != t, "ExecutedCommand: user cannot be undefined"),
                l()(null != T, "ExecutedCommand: currentUser cannot be undefined"),
                l()(null != s, "ExecutedCommand: channel cannot be undefined"),
                (0, r.jsx)(
                    v.Z,
                    U(M({}, e), {
                        user: t,
                        currentUser: T,
                        guildId: s.guild_id,
                        channelId: s.id,
                        messageId: a.id,
                        newAnalyticsLocations: n,
                    }),
                )
            ),
            [T, s, a.id],
        ),
        j = i.useMemo(
            () => (e) => (
                l()(null != s, "ExecutedCommand: channel cannot be null"),
                (0, r.jsx)(
                    R.Z,
                    U(M({}, e), {
                        channel: s,
                        messageId: a.id,
                        interactionData: a.interactionData,
                    }),
                )
            ),
            [s, a.id, a.interactionData],
        ),
        k = (0, y.t0)(a),
        G =
            (null == k ? void 0 : k.type) === p.B8.APPLICATION_COMMAND && null != k.target_user
                ? new S.Z(k.target_user)
                : null,
        Z =
            (null == k ? void 0 : k.type) === p.B8.APPLICATION_COMMAND &&
            null != a.messageReference &&
            null != e.renderTargetMessage,
        B = (0, N.Sw)(null == (t = a.interaction) ? void 0 : t.user, s),
        F = (0, N.Sw)(G, s),
        K = i.useMemo(() => (e.compact ? (0, w.Z)((0, C.vc)(u()(), "LT")) : null), [e.compact]),
        z = (0, _.NX)(s.id),
        q = a.interaction;
    if (null == q || null == B) return null;
    let Q = () => {
            let t = V(e, q.user, 0, B, (e) => D(e, q.user, [h.Z.AVATAR]), A),
                n = H(e, q.user, 0, B, (e) => D(e, q.user));
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [t, n],
                },
                "user",
            );
        },
        X = () => {
            if (null == G) return null;
            let t = V(e, G, 1, F, (e) => D(e, G, [h.Z.AVATAR]), A),
                n = H(e, G, 1, F, (e) => D(e, G));
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [t, n],
                },
                "target",
            );
        };
    if ((null == a ? void 0 : a.activityInstance) === null || (0, O.g)(a)) {
        let t = () => {
            let t = Y(e, j, P);
            return (0, r.jsx)(i.Fragment, { children: t }, "command");
        };
        (n = x.intl.format(x.t["rg7U+C"], {
            userHook: Q,
            commandHook: t,
        })),
            Z && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(W, {}), e.renderTargetMessage()],
                  }))
                : null != G &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(W, {}), (0, r.jsx)(X, {})],
                  }));
    } else {
        let e = () => {
                (0, b.Z)({
                    context:
                        null != s
                            ? {
                                  type: "channel",
                                  channel: s,
                              }
                            : { type: "contextless" },
                    openInPopout: !1,
                    analyticsLocation: E,
                }),
                    (0, m.w1)({ guildId: s.guild_id });
            },
            t = () =>
                (0, r.jsx)(f.P3F, {
                    tag: "span",
                    onClick: e,
                    children: (0, r.jsx)("div", {
                        className: o()(L.commandName, L.clickable),
                        children: x.intl.string(x.t.YTgRvn),
                    }),
                });
        n = z
            ? x.intl.format(x.t.kfV8WM, {
                  userHook: Q,
                  activityHook: t,
              })
            : x.intl.format(x.t["6FeSyT"], { userHook: Q });
    }
    return (0, r.jsx)(g.Gt, {
        value: c,
        children: (0, r.jsx)("div", {
            className: o()(L.repliedMessage, L.messageSpine, L.executedCommand, K),
            "aria-hidden": !e.compact,
            children: n,
        }),
    });
}
