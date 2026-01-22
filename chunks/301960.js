n.d(t, { A: () => z });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(989349),
    u = n.n(c),
    d = n(311907),
    f = n(397927),
    p = n(155718),
    _ = n(811024),
    h = n(795816),
    m = n(793574),
    g = n(688810),
    E = n(735991),
    b = n(975412),
    y = n(168186),
    O = n(597929),
    A = n(589022),
    v = n(427157),
    S = n(287809),
    I = n(486020),
    T = n(203982),
    C = n(405269),
    N = n(763754),
    R = n(635071),
    w = n(728963),
    P = n(943815),
    D = n(652215),
    x = n(985018),
    L = n(679740);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = V(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function F(e) {
    let { width: t = 6, height: n = 10, color: i = "currentColor", className: a, foreground: s } = e;
    return (0, r.jsx)("svg", {
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: s,
            fill: i,
        }),
    });
}
function B(e) {
    let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: o, onMouseDown: l, ref: c } = e;
    return (0, r.jsx)("img", {
        alt: "",
        src: null != i ? i : t.getAvatarURL(n, 16),
        onClick: a,
        onContextMenu: o,
        onMouseDown: l,
        className: s()({
            [L.WU]: !0,
            [L.vk]: null != a,
        }),
        ref: c,
    });
}
function H(e, t, n, i, a, s) {
    var o, l, c;
    let {
        message: u,
        compact: d,
        channel: p,
        isInteractionUserBlocked: _,
        isInteractionUserIgnored: h,
        showAvatarPopout: m,
        showTargetAvatarPopout: g,
        onClickAvatar: E,
        onUserContextMenu: b,
        onClickTargetAvatar: y,
        onTargetUserContextMenu: O,
        onPopoutRequestClose: A,
    } = e;
    if (d && 1 === n) return null;
    if ((d && null == u.activityInstance) || _ || h)
        return (0, r.jsx)("div", {
            className: L.Cz,
            children: (0, r.jsx)(F, { className: L.Jx }),
        });
    let v =
            null !=
            (o = I.Ay.getGuildMemberAvatarURL({
                avatar: null != (l = i.guildMemberAvatar) ? l : void 0,
                userId: t.id,
                guildId: null != (c = null == p ? void 0 : p.guild_id) ? c : "",
            }))
                ? o
                : void 0,
        S = () =>
            B({
                user: t,
                guildId: p.guild_id,
                guildAvatar: v,
                onClick: 1 === n ? y : E,
                onContextMenu: 1 === n ? O : b,
                ref: s,
            }),
        T = 1 === n ? g : m;
    return null != a && null != T && null != s
        ? (0, r.jsx)(f.YNO, {
              targetElementRef: s,
              renderPopout: a,
              shouldShow: T,
              position: "right",
              onRequestClose: A,
              children: S,
          })
        : S();
}
function Y(e, t, n, i, a) {
    let {
        message: s,
        channel: o,
        showUsernamePopout: l,
        showTargetUsernamePopout: c,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: f,
        onTargetUserContextMenu: p,
        onPopoutRequestClose: _,
    } = e;
    return (0, r.jsx)(R.A, {
        className: 1 === n ? L.iu : "",
        compact: !0,
        author: i,
        message: s,
        channel: o,
        userOverride: t,
        showPopout: 1 === n ? c : l,
        renderPopout: a,
        onClick: 1 === n ? f : u,
        onContextMenu: 1 === n ? p : d,
        onPopoutRequestClose: _,
    });
}
function W(e, t, n) {
    let { showDataPopout: i, message: a, onClickCommand: o, onPopoutRequestClose: l } = e,
        c = a.interaction.displayName;
    return (0, r.jsx)(f.YNO, {
        targetElementRef: n,
        renderPopout: t,
        shouldShow: i,
        position: "top",
        align: "center",
        onRequestClose: l,
        animation: f.YNO.Animation.FADE,
        positionKey: null != a.interactionData ? "ready" : "loading",
        children: (e) => {
            let { onClick: t } = e,
                i = G(e, ["onClick"]);
            if (a.type === D.lAJ.CHAT_INPUT_COMMAND || a.type === D.lAJ.INTERACTION_PREMIUM_UPSELL)
                return (0, r.jsx)(
                    f.DUT,
                    U(M({}, i), {
                        tag: "span",
                        onClick: o,
                        innerRef: n,
                        children: (0, r.jsxs)("div", {
                            className: s()(L.lm, L.vk),
                            children: [
                                (0, r.jsx)(f.k9F, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: L.am,
                                }),
                                c,
                            ],
                        }),
                    }),
                );
            if (!(0, O.V)(a))
                return (0, r.jsx)("div", {
                    className: L.p6,
                    ref: n,
                    children: c,
                });
            {
                let e = () => {
                        T._.dispatchToLastSubscribed(D.jej.OPEN_APP_LAUNCHER, { applicationId: a.applicationId });
                    },
                    t = (0, E.kF)(c);
                return (0, r.jsx)(
                    f.DUT,
                    U(M({}, i), {
                        tag: "span",
                        onClick: e,
                        innerRef: n,
                        children: (0, r.jsxs)("div", {
                            className: s()(L.lm, L.vk),
                            children: [
                                (0, r.jsx)(f.k9F, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: L.am,
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
let K = () =>
    (0, r.jsx)(f._BQ, {
        size: "xxs",
        color: "currentColor",
        className: L.M5,
    });
function z(e) {
    var t;
    let n,
        { message: a, channel: o } = e,
        { analyticsLocations: c, newestAnalyticsLocation: E } = (0, g.Ay)(m.A.EXECUTED_COMMAND),
        I = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        T = i.useRef(null),
        R = i.useRef(null),
        D = i.useMemo(
            () => (e, t, n) => (
                l()(null != t, "ExecutedCommand: user cannot be undefined"),
                l()(null != I, "ExecutedCommand: currentUser cannot be undefined"),
                l()(null != o, "ExecutedCommand: channel cannot be undefined"),
                (0, r.jsx)(
                    A.A,
                    U(M({}, e), {
                        user: t,
                        currentUser: I,
                        guildId: o.guild_id,
                        channelId: o.id,
                        messageId: a.id,
                        newAnalyticsLocations: n,
                    }),
                )
            ),
            [I, o, a.id],
        ),
        j = i.useMemo(
            () => (e) => (
                l()(null != o, "ExecutedCommand: channel cannot be null"),
                (0, r.jsx)(
                    w.A,
                    U(M({}, e), {
                        channel: o,
                        messageId: a.id,
                        interactionData: a.interactionData,
                    }),
                )
            ),
            [o, a.id, a.interactionData],
        ),
        k = (0, y.Am)(a),
        G =
            (null == k ? void 0 : k.type) === p.G4.APPLICATION_COMMAND && null != k.target_user
                ? new v.A(k.target_user)
                : null,
        V =
            (null == k ? void 0 : k.type) === p.G4.APPLICATION_COMMAND &&
            null != a.messageReference &&
            null != e.renderTargetMessage,
        F = (0, N.d8)(null == (t = a.interaction) ? void 0 : t.user, o),
        B = (0, N.d8)(G, o),
        z = i.useMemo(() => (e.compact ? (0, P.A)((0, C.i$)(u()(), "LT")) : null), [e.compact]),
        q = (0, _.Gp)(o.id),
        X = a.interaction;
    if (null == X || null == F) return null;
    let Z = () => {
            let t = H(e, X.user, 0, F, (e) => D(e, X.user, [m.A.AVATAR]), T),
                n = Y(e, X.user, 0, F, (e) => D(e, X.user));
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [t, n],
                },
                "user",
            );
        },
        Q = () => {
            if (null == G) return null;
            let t = H(e, G, 1, B, (e) => D(e, G, [m.A.AVATAR]), T),
                n = Y(e, G, 1, B, (e) => D(e, G));
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [t, n],
                },
                "target",
            );
        };
    if ((null == a ? void 0 : a.activityInstance) === null || (0, O.V)(a)) {
        let t = () => {
            let t = W(e, j, R);
            return (0, r.jsx)(i.Fragment, { children: t }, "command");
        };
        (n = x.intl.format(x.t["rg7U+C"], {
            userHook: Z,
            commandHook: t,
        })),
            V && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(K, {}), e.renderTargetMessage()],
                  }))
                : null != G &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(K, {}), (0, r.jsx)(Q, {})],
                  }));
    } else {
        let e = () => {
                (0, b.A)({
                    context:
                        null != o
                            ? {
                                  type: "channel",
                                  channel: o,
                              }
                            : { type: "contextless" },
                    openInPopout: !1,
                    analyticsLocation: E,
                }),
                    (0, h.LV)({ guildId: o.guild_id });
            },
            t = () =>
                (0, r.jsx)(f.DUT, {
                    tag: "span",
                    onClick: e,
                    children: (0, r.jsx)("div", {
                        className: s()(L.p6, L.vk),
                        children: x.intl.string(x.t.YTgRvn),
                    }),
                });
        n = q
            ? x.intl.format(x.t.kfV8WM, {
                  userHook: Z,
                  activityHook: t,
              })
            : x.intl.format(x.t["6FeSyT"], { userHook: Z });
    }
    return (0, r.jsx)(g.f5, {
        value: c,
        children: (0, r.jsx)("div", {
            className: s()(L.JZ, L.NB, L.JE, z),
            "aria-hidden": !e.compact,
            children: n,
        }),
    });
}
