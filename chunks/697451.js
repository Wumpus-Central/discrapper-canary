n.d(t, { Z: () => H });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
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
    j = n(598077),
    C = n(594174),
    S = n(768581),
    I = n(585483),
    N = n(55935),
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
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: l, foreground: a } = e;
    return (0, r.jsx)('svg', {
        className: l,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: a,
            fill: i
        })
    });
}
function U(e, t, n, i, l) {
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
            (c = S.ZP.getGuildMemberAvatarURL({
                avatar: null != (o = i.guildMemberAvatar) ? o : void 0,
                userId: t.id,
                guildId: null != (s = null == m ? void 0 : m.guild_id) ? s : ''
            }))
                ? c
                : void 0,
        j = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: l, onContextMenu: o, onMouseDown: s } = e;
                return (0, r.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: l,
                    onContextMenu: o,
                    onMouseDown: s,
                    className: a()({
                        [k.executedCommandAvatar]: !0,
                        [k.clickable]: null != l
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: O,
                onClick: 1 === n ? y : b,
                onContextMenu: 1 === n ? v : x
            }),
        C = 1 === n ? _ : g;
    return null != l && null != C
        ? (0, r.jsx)(p.yRy, {
              renderPopout: l,
              shouldShow: C,
              position: 'right',
              onRequestClose: E,
              children: j
          })
        : j();
}
function F(e, t, n, i, l) {
    let { message: a, channel: o, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: u, onUserContextMenu: d, onClickTargetUsername: p, onTargetUserContextMenu: m, onPopoutRequestClose: f } = e;
    return (0, r.jsx)(P.Z, {
        className: 1 === n ? k.targetUsername : '',
        compact: !0,
        author: i,
        message: a,
        channel: o,
        userOverride: t,
        showPopout: 1 === n ? c : s,
        renderPopout: l,
        onClick: 1 === n ? p : u,
        onContextMenu: 1 === n ? m : d,
        onPopoutRequestClose: f
    });
}
let B = () =>
    (0, r.jsx)(p.Fbu, {
        size: 'xxs',
        color: 'currentColor',
        className: k.executedCommandSeparator
    });
function G(e) {
    let { enabled: t } = f.c.useExperiment({ location: 'ExecutedCommand' }, { autoTrackExposure: !0 }),
        n = t ? p.iWm : p.jje;
    return (0, r.jsx)(n, D({}, e));
}
function H(e) {
    var t;
    let n,
        { message: l, channel: o } = e,
        { analyticsLocations: c } = (0, x.ZP)(b.Z.EXECUTED_COMMAND),
        f = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        S = i.useMemo(
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
                        messageId: l.id,
                        newAnalyticsLocations: n
                    })
                )
            ),
            [f, o, l.id]
        ),
        P = i.useMemo(
            () => (e) => (
                s()(null != o, 'ExecutedCommand: channel cannot be null'),
                (0, r.jsx)(
                    A.Z,
                    L(D({}, e), {
                        channel: o,
                        messageId: l.id,
                        interactionData: l.interactionData
                    })
                )
            ),
            [o, l.id, l.interactionData]
        ),
        M = (0, v.t0)(l),
        H = (null == M ? void 0 : M.type) === m.B8.APPLICATION_COMMAND && null != M.target_user ? new j.Z(M.target_user) : null,
        V = (null == M ? void 0 : M.type) === m.B8.APPLICATION_COMMAND && null != l.messageReference && null != e.renderTargetMessage,
        z = (0, T.Sw)(null == (t = l.interaction) ? void 0 : t.user, o),
        W = (0, T.Sw)(H, o),
        K = i.useMemo(() => (e.compact ? (0, w.Z)((0, N.vc)(u()(), 'LT')) : null), [e.compact]),
        Y = (0, h.NX)(o.id),
        X = l.interaction;
    if (null == X || null == z) return null;
    let q = () => {
        let t = U(e, X.user, 0, z, (e) => S(e, X.user, [b.Z.AVATAR])),
            n = F(e, X.user, 0, z, (e) => S(e, X.user));
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == l ? void 0 : l.activityInstance) === null || (0, E.g)(l))
        (n = R.intl.format(R.t['rg7U+P'], {
            userHook: q,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: l, onPopoutRequestClose: o } = e,
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
                                                l = Object.keys(e);
                                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                            return i;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                    }
                                    return i;
                                })(e, ['onClick']);
                            if (i.type === Z.uaV.CHAT_INPUT_COMMAND || i.type === Z.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, r.jsx)(
                                    p.P3F,
                                    L(D({}, n), {
                                        tag: 'span',
                                        onClick: l,
                                        children: (0, r.jsxs)('div', {
                                            className: a()(k.appLauncherOnboardingCommandName, k.clickable),
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
                                            I.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                        },
                                        children: (0, r.jsxs)('div', {
                                            className: a()(k.appLauncherOnboardingCommandName, k.clickable),
                                            children: [
                                                (0, r.jsx)(G, {
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
            V && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(B, {}), e.renderTargetMessage()]
                  }))
                : null != H &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [
                          n,
                          (0, r.jsx)(B, {}),
                          (0, r.jsx)(() => {
                              if (null == H) return null;
                              let t = U(e, H, 1, W, (e) => S(e, H, [b.Z.AVATAR])),
                                  n = F(e, H, 1, W, (e) => S(e, H));
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
            ? R.intl.format(R.t.kfV8WF, {
                  userHook: q,
                  activityHook: () =>
                      (0, r.jsx)(p.P3F, {
                          tag: 'span',
                          onClick: e,
                          children: (0, r.jsx)('div', {
                              className: a()(k.commandName, k.clickable),
                              children: R.intl.string(R.t.YTgRvr)
                          })
                      })
              })
            : R.intl.format(R.t['6FeSyc'], { userHook: q });
    }
    return (0, r.jsx)(x.Gt, {
        value: c,
        children: (0, r.jsx)('div', {
            className: a()(k.repliedMessage, k.messageSpine, k.executedCommand, K),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
