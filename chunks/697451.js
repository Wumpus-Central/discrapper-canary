n.d(t, { Z: () => H });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    p = n(481060),
    m = n(911969),
    f = n(456100),
    g = n(595519),
    _ = n(566620),
    h = n(100527),
    b = n(906732),
    E = n(783097),
    C = n(397698),
    O = n(581364),
    v = n(592180),
    y = n(726033),
    x = n(598077),
    j = n(594174),
    I = n(768581),
    S = n(585483),
    T = n(55935),
    P = n(739566),
    N = n(421399),
    A = n(310423),
    w = n(223021),
    Z = n(981631),
    R = n(388032),
    D = n(724913);
function L(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let { width: t = 6, height: n = 10, color: i = "currentColor", className: l, foreground: o } = e;
    return (0, r.jsx)("svg", {
        className: l,
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
function U(e, t, n, i, l, a) {
    var s, c, u;
    let {
        message: d,
        compact: m,
        channel: f,
        isInteractionUserBlocked: g,
        isInteractionUserIgnored: _,
        showAvatarPopout: h,
        showTargetAvatarPopout: b,
        onClickAvatar: E,
        onUserContextMenu: C,
        onClickTargetAvatar: O,
        onTargetUserContextMenu: v,
        onPopoutRequestClose: y,
    } = e;
    if (m && 1 === n) return null;
    if ((m && null == d.activityInstance) || g || _)
        return (0, r.jsx)("div", {
            className: D.replyBadge,
            children: (0, r.jsx)(k, { className: D.commandIcon }),
        });
    let x =
            null !=
            (u = I.ZP.getGuildMemberAvatarURL({
                avatar: null != (s = i.guildMemberAvatar) ? s : void 0,
                userId: t.id,
                guildId: null != (c = null == f ? void 0 : f.guild_id) ? c : "",
            }))
                ? u
                : void 0,
        j = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: l, onContextMenu: a, onMouseDown: s, ref: c } = e;
                return (0, r.jsx)("img", {
                    alt: "",
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: l,
                    onContextMenu: a,
                    onMouseDown: s,
                    className: o()({
                        [D.executedCommandAvatar]: !0,
                        [D.clickable]: null != l,
                    }),
                    ref: c,
                });
            })({
                user: t,
                guildId: f.guild_id,
                guildAvatar: x,
                onClick: 1 === n ? O : E,
                onContextMenu: 1 === n ? v : C,
                ref: a,
            }),
        S = 1 === n ? b : h;
    return null != l && null != S && null != a
        ? (0, r.jsx)(p.yRy, {
              targetElementRef: a,
              renderPopout: l,
              shouldShow: S,
              position: "right",
              onRequestClose: y,
              children: j,
          })
        : j();
}
function F(e, t, n, i, l) {
    let {
        message: o,
        channel: a,
        showUsernamePopout: s,
        showTargetUsernamePopout: c,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: p,
        onTargetUserContextMenu: m,
        onPopoutRequestClose: f,
    } = e;
    return (0, r.jsx)(N.Z, {
        className: 1 === n ? D.targetUsername : "",
        compact: !0,
        author: i,
        message: o,
        channel: a,
        userOverride: t,
        showPopout: 1 === n ? c : s,
        renderPopout: l,
        onClick: 1 === n ? p : u,
        onContextMenu: 1 === n ? m : d,
        onPopoutRequestClose: f,
    });
}
let B = () =>
    (0, r.jsx)(p.Fbu, {
        size: "xxs",
        color: "currentColor",
        className: D.executedCommandSeparator,
    });
function G(e) {
    let { enabled: t } = f.c.useExperiment({ location: "ExecutedCommand" }, { autoTrackExposure: !0 }),
        n = t ? p.iWm : p.jje;
    return (0, r.jsx)(n, L({}, e));
}
function H(e) {
    var t;
    let n,
        { message: l, channel: a } = e,
        { analyticsLocations: c, newestAnalyticsLocation: f } = (0, b.ZP)(h.Z.EXECUTED_COMMAND),
        I = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
        N = i.useRef(null),
        k = i.useRef(null),
        H = i.useMemo(
            () => (e, t, n) => (
                s()(null != t, "ExecutedCommand: user cannot be undefined"),
                s()(null != I, "ExecutedCommand: currentUser cannot be undefined"),
                s()(null != a, "ExecutedCommand: channel cannot be undefined"),
                (0, r.jsx)(
                    y.Z,
                    M(L({}, e), {
                        user: t,
                        currentUser: I,
                        guildId: a.guild_id,
                        channelId: a.id,
                        messageId: l.id,
                        newAnalyticsLocations: n,
                    }),
                )
            ),
            [I, a, l.id],
        ),
        V = i.useMemo(
            () => (e) => (
                s()(null != a, "ExecutedCommand: channel cannot be null"),
                (0, r.jsx)(
                    A.Z,
                    M(L({}, e), {
                        channel: a,
                        messageId: l.id,
                        interactionData: l.interactionData,
                    }),
                )
            ),
            [a, l.id, l.interactionData],
        ),
        z = (0, O.t0)(l),
        W =
            (null == z ? void 0 : z.type) === m.B8.APPLICATION_COMMAND && null != z.target_user
                ? new x.Z(z.target_user)
                : null,
        Y =
            (null == z ? void 0 : z.type) === m.B8.APPLICATION_COMMAND &&
            null != l.messageReference &&
            null != e.renderTargetMessage,
        K = (0, P.Sw)(null == (t = l.interaction) ? void 0 : t.user, a),
        X = (0, P.Sw)(W, a),
        q = i.useMemo(() => (e.compact ? (0, w.Z)((0, T.vc)(u()(), "LT")) : null), [e.compact]),
        J = (0, g.NX)(a.id),
        Q = l.interaction;
    if (null == Q || null == K) return null;
    let $ = () => {
        let t = U(e, Q.user, 0, K, (e) => H(e, Q.user, [h.Z.AVATAR]), N),
            n = F(e, Q.user, 0, K, (e) => H(e, Q.user));
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [t, n],
            },
            "user",
        );
    };
    if ((null == l ? void 0 : l.activityInstance) === null || (0, v.g)(l))
        (n = R.intl.format(R.t["rg7U+P"], {
            userHook: $,
            commandHook: () => {
                let t = (function (e, t, n) {
                    let { showDataPopout: i, message: l, onClickCommand: a, onPopoutRequestClose: s } = e,
                        c = l.interaction.displayName;
                    return (0, r.jsx)(p.yRy, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: i,
                        position: "top",
                        align: "center",
                        onRequestClose: s,
                        animation: p.yRy.Animation.FADE,
                        positionKey: null != l.interactionData ? "ready" : "loading",
                        children: (e) => {
                            var { onClick: t } = e,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = {},
                                                l = Object.keys(e);
                                            for (r = 0; r < l.length; r++)
                                                (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                            return i;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < l.length; r++)
                                            (n = l[r]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (i[n] = e[n]);
                                    }
                                    return i;
                                })(e, ["onClick"]);
                            if (l.type === Z.uaV.CHAT_INPUT_COMMAND || l.type === Z.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, r.jsx)(
                                    p.P3F,
                                    M(L({}, i), {
                                        tag: "span",
                                        onClick: a,
                                        innerRef: n,
                                        children: (0, r.jsxs)("div", {
                                            className: o()(D.appLauncherOnboardingCommandName, D.clickable),
                                            children: [
                                                (0, r.jsx)(p.jje, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    height: 10,
                                                    width: 10,
                                                    className: D.appsIcon,
                                                }),
                                                c,
                                            ],
                                        }),
                                    }),
                                );
                            if (!(0, v.g)(l))
                                return (0, r.jsx)("div", {
                                    className: D.commandName,
                                    ref: n,
                                    children: c,
                                });
                            {
                                let e = (0, E.XZ)(c);
                                return (0, r.jsx)(
                                    p.P3F,
                                    M(L({}, i), {
                                        tag: "span",
                                        onClick: () => {
                                            S.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, {
                                                applicationId: l.applicationId,
                                            });
                                        },
                                        innerRef: n,
                                        children: (0, r.jsxs)("div", {
                                            className: o()(D.appLauncherOnboardingCommandName, D.clickable),
                                            children: [
                                                (0, r.jsx)(G, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    height: 10,
                                                    width: 10,
                                                    className: D.appsIcon,
                                                }),
                                                e,
                                            ],
                                        }),
                                    }),
                                );
                            }
                        },
                    });
                })(e, V, k);
                return (0, r.jsx)(i.Fragment, { children: t }, "command");
            },
        })),
            Y && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(B, {}), e.renderTargetMessage()],
                  }))
                : null != W &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [
                          n,
                          (0, r.jsx)(B, {}),
                          (0, r.jsx)(() => {
                              if (null == W) return null;
                              let t = U(e, W, 1, X, (e) => H(e, W, [h.Z.AVATAR]), N),
                                  n = F(e, W, 1, X, (e) => H(e, W));
                              return (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [t, n],
                                  },
                                  "target",
                              );
                          }, {}),
                      ],
                  }));
    else {
        let e = () => {
            (0, C.Z)({
                context:
                    null != a
                        ? {
                              type: "channel",
                              channel: a,
                          }
                        : { type: "contextless" },
                openInPopout: !1,
                analyticsLocation: f,
            }),
                (0, _.w1)({ guildId: a.guild_id });
        };
        n = J
            ? R.intl.format(R.t.kfV8WF, {
                  userHook: $,
                  activityHook: () =>
                      (0, r.jsx)(p.P3F, {
                          tag: "span",
                          onClick: e,
                          children: (0, r.jsx)("div", {
                              className: o()(D.commandName, D.clickable),
                              children: R.intl.string(R.t.YTgRvr),
                          }),
                      }),
              })
            : R.intl.format(R.t["6FeSyc"], { userHook: $ });
    }
    return (0, r.jsx)(b.Gt, {
        value: c,
        children: (0, r.jsx)("div", {
            className: o()(D.repliedMessage, D.messageSpine, D.executedCommand, q),
            "aria-hidden": !e.compact,
            children: n,
        }),
    });
}
