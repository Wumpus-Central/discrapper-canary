n.d(t, { Z: () => G });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    p = n(481060),
    m = n(911969),
    f = n(456100),
    h = n(595519),
    g = n(566620),
    _ = n(403404),
    b = n(100527),
    x = n(906732),
    y = n(783097),
    v = n(581364),
    E = n(592180),
    O = n(726033),
    N = n(598077),
    j = n(594174),
    C = n(768581),
    S = n(585483),
    I = n(55935),
    T = n(739566),
    P = n(421399),
    A = n(310423),
    w = n(223021),
    Z = n(981631),
    R = n(388032),
    k = n(848697);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
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
function M(e) {
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: a, foreground: l } = e;
    return (0, r.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: l,
            fill: i
        })
    });
}
function W(e, t, n, i, a) {
    var o, s, c;
    let { message: u, compact: d, channel: m, isInteractionUserBlocked: f, isInteractionUserIgnored: h, showAvatarPopout: g, showTargetAvatarPopout: _, onClickAvatar: b, onUserContextMenu: x, onClickTargetAvatar: y, onTargetUserContextMenu: v, onPopoutRequestClose: E } = e;
    if (d && 1 === n) return null;
    if ((d && null == u.activityInstance) || f || h)
        return (0, r.jsx)('div', {
            className: k.replyBadge,
            children: (0, r.jsx)(M, { className: k.commandIcon })
        });
    let O =
            null !=
            (c = C.ZP.getGuildMemberAvatarURL({
                avatar: null != (o = i.guildMemberAvatar) ? o : void 0,
                userId: t.id,
                guildId: null != (s = null == m ? void 0 : m.guild_id) ? s : ''
            }))
                ? c
                : void 0,
        N = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: o, onMouseDown: s } = e;
                return (0, r.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: o,
                    onMouseDown: s,
                    className: l()({
                        [k.executedCommandAvatar]: !0,
                        [k.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: O,
                onClick: 1 === n ? y : b,
                onContextMenu: 1 === n ? v : x
            }),
        j = 1 === n ? _ : g;
    return null != a && null != j
        ? (0, r.jsx)(p.yRy, {
              renderPopout: a,
              shouldShow: j,
              position: 'right',
              onRequestClose: E,
              children: N
          })
        : N();
}
function U(e, t, n, i, a) {
    let { message: l, channel: o, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: u, onUserContextMenu: d, onClickTargetUsername: p, onTargetUserContextMenu: m, onPopoutRequestClose: f } = e;
    return (0, r.jsx)(P.Z, {
        className: 1 === n ? k.targetUsername : '',
        compact: !0,
        author: i,
        message: l,
        channel: o,
        userOverride: t,
        showPopout: 1 === n ? c : s,
        renderPopout: a,
        onClick: 1 === n ? p : u,
        onContextMenu: 1 === n ? m : d,
        onPopoutRequestClose: f
    });
}
let F = () =>
    (0, r.jsx)(p.Fbu, {
        size: 'xxs',
        color: 'currentColor',
        className: k.executedCommandSeparator
    });
function B(e) {
    let { enabled: t } = f.c.useExperiment({ location: 'ExecutedCommand' }, { autoTrackExposure: !0 }),
        n = t ? p.iWm : p.jje;
    return (0, r.jsx)(n, D({}, e));
}
function G(e) {
    var t;
    let n,
        { message: a, channel: o } = e,
        { analyticsLocations: c } = (0, x.ZP)(b.Z.EXECUTED_COMMAND),
        f = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
        C = i.useMemo(
            () => (e, t, n) => (
                s()(null != t, 'ExecutedCommand: user cannot be undefined'),
                s()(null != f, 'ExecutedCommand: currentUser cannot be undefined'),
                s()(null != o, 'ExecutedCommand: channel cannot be undefined'),
                (0, r.jsx)(
                    O.Z,
                    L(D({}, e), {
                        user: t,
                        currentUser: f,
                        guildId: o.guild_id,
                        channelId: o.id,
                        messageId: a.id,
                        newAnalyticsLocations: n
                    })
                )
            ),
            [f, o, a.id]
        ),
        P = i.useMemo(
            () => (e) => (
                s()(null != o, 'ExecutedCommand: channel cannot be null'),
                (0, r.jsx)(
                    A.Z,
                    L(D({}, e), {
                        channel: o,
                        messageId: a.id,
                        interactionData: a.interactionData
                    })
                )
            ),
            [o, a.id, a.interactionData]
        ),
        M = (0, v.t0)(a),
        G = (null == M ? void 0 : M.type) === m.B8.APPLICATION_COMMAND && null != M.target_user ? new N.Z(M.target_user) : null,
        H = (null == M ? void 0 : M.type) === m.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
        V = (0, T.Sw)(null == (t = a.interaction) ? void 0 : t.user, o),
        z = (0, T.Sw)(G, o),
        K = i.useMemo(() => (e.compact ? (0, w.Z)((0, I.vc)(u()(), 'LT')) : null), [e.compact]),
        Y = (0, h.NX)(o.id),
        X = a.interaction;
    if (null == X || null == V) return null;
    let q = () => {
        let t = W(e, X.user, 0, V, (e) => C(e, X.user, [b.Z.AVATAR])),
            n = U(e, X.user, 0, V, (e) => C(e, X.user));
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == a ? void 0 : a.activityInstance) === null || (0, E.g)(a))
        (n = R.NW.format(R.t['rg7U+P'], {
            userHook: q,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: a, onPopoutRequestClose: o } = e,
                        s = i.interaction.displayName;
                    return (0, r.jsx)(p.yRy, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: o,
                        animation: p.yRy.Animation.FADE,
                        positionKey: null != i.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            var { onClick: t } = e,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = {},
                                                a = Object.keys(e);
                                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                            return i;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var a = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                    }
                                    return i;
                                })(e, ['onClick']);
                            if (i.type === Z.uaV.CHAT_INPUT_COMMAND || i.type === Z.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, r.jsx)(
                                    p.P3F,
                                    L(D({}, n), {
                                        tag: 'span',
                                        onClick: a,
                                        children: (0, r.jsxs)('div', {
                                            className: l()(k.appLauncherOnboardingCommandName, k.clickable),
                                            children: [
                                                (0, r.jsx)(p.jje, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    height: 10,
                                                    width: 10,
                                                    className: k.appsIcon
                                                }),
                                                s
                                            ]
                                        })
                                    })
                                );
                            if (!(0, E.g)(i))
                                return (0, r.jsx)('div', {
                                    className: k.commandName,
                                    children: s
                                });
                            {
                                let e = (0, y.XZ)(s);
                                return (0, r.jsx)(
                                    p.P3F,
                                    L(D({}, n), {
                                        tag: 'span',
                                        onClick: () => {
                                            S.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                        },
                                        children: (0, r.jsxs)('div', {
                                            className: l()(k.appLauncherOnboardingCommandName, k.clickable),
                                            children: [
                                                (0, r.jsx)(B, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    height: 10,
                                                    width: 10,
                                                    className: k.appsIcon
                                                }),
                                                e
                                            ]
                                        })
                                    })
                                );
                            }
                        }
                    });
                })(e, P);
                return (0, r.jsx)(i.Fragment, { children: t }, 'command');
            }
        })),
            H && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(F, {}), e.renderTargetMessage()]
                  }))
                : null != G &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [
                          n,
                          (0, r.jsx)(F, {}),
                          (0, r.jsx)(() => {
                              if (null == G) return null;
                              let t = W(e, G, 1, z, (e) => C(e, G, [b.Z.AVATAR])),
                                  n = U(e, G, 1, z, (e) => C(e, G));
                              return (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [t, n]
                                  },
                                  'target'
                              );
                          }, {})
                      ]
                  }));
    else {
        let e = () => {
            (0, _.Z)({
                channel: o,
                openInPopout: !1,
                analyticsLocations: c
            }),
                (0, g.w1)({ guildId: o.guild_id });
        };
        n = Y
            ? R.NW.format(R.t.kfV8WF, {
                  userHook: q,
                  activityHook: () =>
                      (0, r.jsx)(p.P3F, {
                          tag: 'span',
                          onClick: e,
                          children: (0, r.jsx)('div', {
                              className: l()(k.commandName, k.clickable),
                              children: R.NW.string(R.t.YTgRvr)
                          })
                      })
              })
            : R.NW.format(R.t['6FeSyc'], { userHook: q });
    }
    return (0, r.jsx)(x.Gt, {
        value: c,
        children: (0, r.jsx)('div', {
            className: l()(k.repliedMessage, k.messageSpine, k.executedCommand, K),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
