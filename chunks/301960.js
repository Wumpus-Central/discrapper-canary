n.d(t, {
    A: () => F,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(989349),
    u = n.n(c),
    d = n(311907),
    p = n(397927),
    m = n(155718),
    f = n(811024),
    g = n(795816),
    h = n(793574),
    _ = n(688810),
    b = n(735991),
    A = n(975412),
    y = n(168186),
    v = n(597929),
    x = n(589022),
    O = n(427157),
    E = n(287809),
    j = n(486020),
    C = n(203982),
    I = n(405269),
    S = n(763754),
    T = n(635071),
    N = n(728963),
    P = n(943815),
    w = n(652215),
    R = n(985018),
    D = n(679740);

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
    let { width: t = 6, height: n = 10, color: i = "currentColor", className: l, foreground: a } = e;
    return (0, r.jsx)("svg", {
        className: l,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: a,
            fill: i,
        }),
    });
}

function U(e, t, n, i, l, s) {
    var o, c, u;
    let {
        message: d,
        compact: m,
        channel: f,
        isInteractionUserBlocked: g,
        isInteractionUserIgnored: h,
        showAvatarPopout: _,
        showTargetAvatarPopout: b,
        onClickAvatar: A,
        onUserContextMenu: y,
        onClickTargetAvatar: v,
        onTargetUserContextMenu: x,
        onPopoutRequestClose: O,
    } = e;
    if (m && 1 === n) return null;
    if ((m && null == d.activityInstance) || g || h)
        return (0, r.jsx)("div", {
            className: D.Cz,
            children: (0, r.jsx)(k, {
                className: D.Jx,
            }),
        });
    let E =
            null !=
            (o = j.Ay.getGuildMemberAvatarURL({
                avatar: null != (c = i.guildMemberAvatar) ? c : void 0,
                userId: t.id,
                guildId: null != (u = null == f ? void 0 : f.guild_id) ? u : "",
            }))
                ? o
                : void 0,
        C = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: l, onContextMenu: s, onMouseDown: o, ref: c } = e;
                return (0, r.jsx)("img", {
                    alt: "",
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: l,
                    onContextMenu: s,
                    onMouseDown: o,
                    className: a()({
                        [D.WU]: !0,
                        [D.vk]: null != l,
                    }),
                    ref: c,
                });
            })({
                user: t,
                guildId: f.guild_id,
                guildAvatar: E,
                onClick: 1 === n ? v : A,
                onContextMenu: 1 === n ? x : y,
                ref: s,
            }),
        I = 1 === n ? b : _;
    return null != l && null != I && null != s
        ? (0, r.jsx)(p.YNO, {
              targetElementRef: s,
              renderPopout: l,
              shouldShow: I,
              position: "right",
              onRequestClose: O,
              children: C,
          })
        : C();
}

function G(e, t, n, i, l) {
    let {
        message: a,
        channel: s,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: p,
        onTargetUserContextMenu: m,
        onPopoutRequestClose: f,
    } = e;
    return (0, r.jsx)(T.A, {
        className: 1 === n ? D.iu : "",
        compact: !0,
        author: i,
        message: a,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: l,
        onClick: 1 === n ? p : u,
        onContextMenu: 1 === n ? m : d,
        onPopoutRequestClose: f,
    });
}
let B = () =>
    (0, r.jsx)(p._BQ, {
        size: "xxs",
        color: "currentColor",
        className: D.M5,
    });

function F(e) {
    var t;
    let n,
        { message: l, channel: s } = e,
        { analyticsLocations: c, newestAnalyticsLocation: j } = (0, _.Ay)(h.A.EXECUTED_COMMAND),
        T = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        k = i.useRef(null),
        F = i.useRef(null),
        H = i.useMemo(
            () => (e, t, n) => (
                o()(null != t, "ExecutedCommand: user cannot be undefined"),
                o()(null != T, "ExecutedCommand: currentUser cannot be undefined"),
                o()(null != s, "ExecutedCommand: channel cannot be undefined"),
                (0, r.jsx)(
                    x.A,
                    M(L({}, e), {
                        user: t,
                        currentUser: T,
                        guildId: s.guild_id,
                        channelId: s.id,
                        messageId: l.id,
                        newAnalyticsLocations: n,
                    }),
                )
            ),
            [T, s, l.id],
        ),
        V = i.useMemo(
            () => (e) => (
                o()(null != s, "ExecutedCommand: channel cannot be null"),
                (0, r.jsx)(
                    N.A,
                    M(L({}, e), {
                        channel: s,
                        messageId: l.id,
                        interactionData: l.interactionData,
                    }),
                )
            ),
            [s, l.id, l.interactionData],
        ),
        z = (0, y.Am)(l),
        W =
            (null == z ? void 0 : z.type) === m.G4.APPLICATION_COMMAND && null != z.target_user
                ? new O.A(z.target_user)
                : null,
        K =
            (null == z ? void 0 : z.type) === m.G4.APPLICATION_COMMAND &&
            null != l.messageReference &&
            null != e.renderTargetMessage,
        Y = (0, S.d8)(null == (t = l.interaction) ? void 0 : t.user, s),
        q = (0, S.d8)(W, s),
        J = i.useMemo(() => (e.compact ? (0, P.A)((0, I.i$)(u()(), "LT")) : null), [e.compact]),
        Q = (0, f.Gp)(s.id),
        Z = l.interaction;
    if (null == Z || null == Y) return null;
    let X = () => {
        let t = U(e, Z.user, 0, Y, (e) => H(e, Z.user, [h.A.AVATAR]), k),
            n = G(e, Z.user, 0, Y, (e) => H(e, Z.user));
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [t, n],
            },
            "user",
        );
    };
    if ((null == l ? void 0 : l.activityInstance) === null || (0, v.V)(l))
        (n = R.intl.format(R.t["rg7U+C"], {
            userHook: X,
            commandHook: () => {
                let t = (function (e, t, n) {
                    let { showDataPopout: i, message: l, onClickCommand: s, onPopoutRequestClose: o } = e,
                        c = l.interaction.displayName;
                    return (0, r.jsx)(p.YNO, {
                        targetElementRef: n,
                        renderPopout: t,
                        shouldShow: i,
                        position: "top",
                        align: "center",
                        onRequestClose: o,
                        animation: p.YNO.Animation.FADE,
                        positionKey: null != l.interactionData ? "ready" : "loading",
                        children: (e) => {
                            let { onClick: t } = e,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i,
                                        l = {};
                                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                            (r = n[i]),
                                                !(t.indexOf(r) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                    (l[r] = e[r]);
                                        return l;
                                    }
                                    if (
                                        ((l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = {},
                                                l = Object.getOwnPropertyNames(e);
                                            for (r = 0; r < l.length; r++)
                                                (n = l[r]),
                                                    !(t.indexOf(n) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                        (i[n] = e[n]);
                                            return i;
                                        })(e, t)),
                                        Object.getOwnPropertySymbols)
                                    )
                                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                            (r = n[i]),
                                                !(t.indexOf(r) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                    (l[r] = e[r]);
                                    return l;
                                })(e, ["onClick"]);
                            if (l.type === w.lAJ.CHAT_INPUT_COMMAND || l.type === w.lAJ.INTERACTION_PREMIUM_UPSELL)
                                return (0, r.jsx)(
                                    p.DUT,
                                    M(L({}, i), {
                                        tag: "span",
                                        onClick: s,
                                        innerRef: n,
                                        children: (0, r.jsxs)("div", {
                                            className: a()(D.lm, D.vk),
                                            children: [
                                                (0, r.jsx)(p.k9F, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    height: 10,
                                                    width: 10,
                                                    className: D.am,
                                                }),
                                                c,
                                            ],
                                        }),
                                    }),
                                );
                            if (!(0, v.V)(l))
                                return (0, r.jsx)("div", {
                                    className: D.p6,
                                    ref: n,
                                    children: c,
                                });
                            {
                                let e = (0, b.kF)(c);
                                return (0, r.jsx)(
                                    p.DUT,
                                    M(L({}, i), {
                                        tag: "span",
                                        onClick: () => {
                                            C._.dispatchToLastSubscribed(w.jej.OPEN_APP_LAUNCHER, {
                                                applicationId: l.applicationId,
                                            });
                                        },
                                        innerRef: n,
                                        children: (0, r.jsxs)("div", {
                                            className: a()(D.lm, D.vk),
                                            children: [
                                                (0, r.jsx)(p.k9F, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    height: 10,
                                                    width: 10,
                                                    className: D.am,
                                                }),
                                                e,
                                            ],
                                        }),
                                    }),
                                );
                            }
                        },
                    });
                })(e, V, F);
                return (0, r.jsx)(
                    i.Fragment,
                    {
                        children: t,
                    },
                    "command",
                );
            },
        })),
            K && null != e.renderTargetMessage
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
                              let t = U(e, W, 1, q, (e) => H(e, W, [h.A.AVATAR]), k),
                                  n = G(e, W, 1, q, (e) => H(e, W));
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
            (0, A.A)({
                context:
                    null != s
                        ? {
                              type: "channel",
                              channel: s,
                          }
                        : {
                              type: "contextless",
                          },
                openInPopout: !1,
                analyticsLocation: j,
            }),
                (0, g.LV)({
                    guildId: s.guild_id,
                });
        };
        n = Q
            ? R.intl.format(R.t.kfV8WM, {
                  userHook: X,
                  activityHook: () =>
                      (0, r.jsx)(p.DUT, {
                          tag: "span",
                          onClick: e,
                          children: (0, r.jsx)("div", {
                              className: a()(D.p6, D.vk),
                              children: R.intl.string(R.t.YTgRvn),
                          }),
                      }),
              })
            : R.intl.format(R.t["6FeSyT"], {
                  userHook: X,
              });
    }
    return (0, r.jsx)(_.f5, {
        value: c,
        children: (0, r.jsx)("div", {
            className: a()(D.JZ, D.NB, D.JE, J),
            "aria-hidden": !e.compact,
            children: n,
        }),
    });
}
