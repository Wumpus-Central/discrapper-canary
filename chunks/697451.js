n.d(t, { Z: () => F });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(913527),
    u = n.n(c),
    d = n(481060),
    p = n(911969),
    m = n(456100),
    f = n(595519),
    h = n(566620),
    g = n(403404),
    _ = n(100527),
    b = n(906732),
    x = n(783097),
    y = n(581364),
    E = n(592180),
    v = n(347475),
    O = n(598077),
    N = n(768581),
    j = n(585483),
    C = n(55935),
    I = n(739566),
    S = n(421399),
    T = n(310423),
    P = n(223021),
    A = n(981631),
    w = n(388032),
    Z = n(848697);
function k(e) {
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
function R(e, t) {
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
function D(e) {
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
function L(e, t, n, i, a) {
    var o, s, c;
    let { message: u, compact: p, channel: m, isInteractionUserBlocked: f, isInteractionUserIgnored: h, showAvatarPopout: g, showTargetAvatarPopout: _, onClickAvatar: b, onUserContextMenu: x, onClickTargetAvatar: y, onTargetUserContextMenu: E, onPopoutRequestClose: v } = e;
    if (p && 1 === n) return null;
    if ((p && null == u.activityInstance) || f || h)
        return (0, r.jsx)('div', {
            className: Z.replyBadge,
            children: (0, r.jsx)(D, { className: Z.commandIcon })
        });
    let O =
            null !=
            (c = N.ZP.getGuildMemberAvatarURL({
                avatar: null != (o = i.guildMemberAvatar) ? o : void 0,
                userId: t.id,
                guildId: null != (s = null == m ? void 0 : m.guild_id) ? s : ''
            }))
                ? c
                : void 0,
        j = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: o, onMouseDown: s } = e;
                return (0, r.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: o,
                    onMouseDown: s,
                    className: l()({
                        [Z.executedCommandAvatar]: !0,
                        [Z.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: O,
                onClick: 1 === n ? y : b,
                onContextMenu: 1 === n ? E : x
            }),
        C = 1 === n ? _ : g;
    return null != a && null != C
        ? (0, r.jsx)(d.yRy, {
              renderPopout: a,
              shouldShow: C,
              position: 'right',
              onRequestClose: v,
              children: j
          })
        : j();
}
function M(e, t, n, i, a) {
    let { message: l, channel: o, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: u, onUserContextMenu: d, onClickTargetUsername: p, onTargetUserContextMenu: m, onPopoutRequestClose: f } = e;
    return (0, r.jsx)(S.Z, {
        className: 1 === n ? Z.targetUsername : '',
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
let W = () =>
    (0, r.jsx)(d.Fbu, {
        size: 'xxs',
        color: 'currentColor',
        className: Z.executedCommandSeparator
    });
function U(e) {
    let { enabled: t } = m.c.useExperiment({ location: 'ExecutedCommand' }, { autoTrackExposure: !0 }),
        n = t ? d.iWm : d.jje;
    return (0, r.jsx)(n, k({}, e));
}
function F(e) {
    var t;
    let n,
        { message: a, channel: o } = e,
        { analyticsLocations: c } = (0, b.ZP)(_.Z.EXECUTED_COMMAND),
        m = i.useMemo(
            () => (e, t, n) => (
                s()(null != o && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, r.jsx)(
                    v.Z,
                    R(k({}, e), {
                        channelId: o.id,
                        messageId: a.id,
                        guildId: o.guild_id,
                        userId: t.id,
                        newAnalyticsLocations: n
                    })
                )
            ),
            [o, a.id]
        ),
        N = i.useMemo(
            () => (e) => (
                s()(null != o, 'ExecutedCommand: channel cannot be null'),
                (0, r.jsx)(
                    T.Z,
                    R(k({}, e), {
                        channel: o,
                        messageId: a.id,
                        interactionData: a.interactionData
                    })
                )
            ),
            [o, a.id, a.interactionData]
        ),
        S = (0, y.t0)(a),
        D = (null == S ? void 0 : S.type) === p.B8.APPLICATION_COMMAND && null != S.target_user ? new O.Z(S.target_user) : null,
        F = (null == S ? void 0 : S.type) === p.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
        B = (0, I.Sw)(null == (t = a.interaction) ? void 0 : t.user, o),
        G = (0, I.Sw)(D, o),
        H = i.useMemo(() => (e.compact ? (0, P.Z)((0, C.vc)(u()(), 'LT')) : null), [e.compact]),
        V = (0, f.NX)(o.id),
        z = a.interaction;
    if (null == z || null == B) return null;
    let K = () => {
        let t = L(e, z.user, 0, B, (e) => m(e, z.user, [_.Z.AVATAR])),
            n = M(e, z.user, 0, B, (e) => m(e, z.user));
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == a ? void 0 : a.activityInstance) === null || (0, E.g)(a))
        (n = w.NW.format(w.t['rg7U+P'], {
            userHook: K,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: a, onPopoutRequestClose: o } = e,
                        s = i.interaction.displayName;
                    return (0, r.jsx)(d.yRy, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: o,
                        animation: d.yRy.Animation.FADE,
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
                            if (i.type === A.uaV.CHAT_INPUT_COMMAND || i.type === A.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, r.jsx)(
                                    d.P3F,
                                    R(k({}, n), {
                                        tag: 'span',
                                        onClick: a,
                                        children: (0, r.jsxs)('div', {
                                            className: l()(Z.appLauncherOnboardingCommandName, Z.clickable),
                                            children: [
                                                (0, r.jsx)(d.jje, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    height: 10,
                                                    width: 10,
                                                    className: Z.appsIcon
                                                }),
                                                s
                                            ]
                                        })
                                    })
                                );
                            if (!(0, E.g)(i))
                                return (0, r.jsx)('div', {
                                    className: Z.commandName,
                                    children: s
                                });
                            {
                                let e = (0, x.XZ)(s);
                                return (0, r.jsx)(
                                    d.P3F,
                                    R(k({}, n), {
                                        tag: 'span',
                                        onClick: () => {
                                            j.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                        },
                                        children: (0, r.jsxs)('div', {
                                            className: l()(Z.appLauncherOnboardingCommandName, Z.clickable),
                                            children: [
                                                (0, r.jsx)(U, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    height: 10,
                                                    width: 10,
                                                    className: Z.appsIcon
                                                }),
                                                e
                                            ]
                                        })
                                    })
                                );
                            }
                        }
                    });
                })(e, N);
                return (0, r.jsx)(i.Fragment, { children: t }, 'command');
            }
        })),
            F && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(W, {}), e.renderTargetMessage()]
                  }))
                : null != D &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [
                          n,
                          (0, r.jsx)(W, {}),
                          (0, r.jsx)(() => {
                              if (null == D) return null;
                              let t = L(e, D, 1, G, (e) => m(e, D, [_.Z.AVATAR])),
                                  n = M(e, D, 1, G, (e) => m(e, D));
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
            (0, g.Z)({
                channel: o,
                openInPopout: !1,
                analyticsLocations: c
            }),
                (0, h.w1)({ guildId: o.guild_id });
        };
        n = V
            ? w.NW.format(w.t.kfV8WF, {
                  userHook: K,
                  activityHook: () =>
                      (0, r.jsx)(d.P3F, {
                          tag: 'span',
                          onClick: e,
                          children: (0, r.jsx)('div', {
                              className: l()(Z.commandName, Z.clickable),
                              children: w.NW.string(w.t.YTgRvr)
                          })
                      })
              })
            : w.NW.format(w.t['6FeSyc'], { userHook: K });
    }
    return (0, r.jsx)(b.Gt, {
        value: c,
        children: (0, r.jsx)('div', {
            className: l()(Z.repliedMessage, Z.messageSpine, Z.executedCommand, H),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
