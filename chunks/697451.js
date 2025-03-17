n.d(t, { Z: () => U });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(512722),
    s = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(481060),
    p = n(911969),
    m = n(456100),
    f = n(595519),
    h = n(566620),
    g = n(403404),
    _ = n(100527),
    b = n(906732),
    v = n(783097),
    y = n(581364),
    x = n(592180),
    E = n(347475),
    O = n(598077),
    j = n(768581),
    N = n(585483),
    C = n(55935),
    I = n(739566),
    S = n(421399),
    T = n(310423),
    P = n(223021),
    A = n(981631),
    w = n(388032),
    Z = n(432957);
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
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: a, foreground: o } = e;
    return (0, r.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: o,
            fill: i
        })
    });
}
function L(e, t, n, i, a) {
    var l, s, c;
    let { message: d, compact: p, channel: m, isInteractionUserBlocked: f, isInteractionUserIgnored: h, showAvatarPopout: g, showTargetAvatarPopout: _, onClickAvatar: b, onUserContextMenu: v, onClickTargetAvatar: y, onTargetUserContextMenu: x, onPopoutRequestClose: E } = e;
    if (p && 1 === n) return null;
    if ((p && null == d.activityInstance) || f || h)
        return (0, r.jsx)('div', {
            className: Z.replyBadge,
            children: (0, r.jsx)(D, { className: Z.commandIcon })
        });
    let O =
            null !==
                (c = j.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (l = i.guildMemberAvatar) && void 0 !== l ? l : void 0,
                    userId: t.id,
                    guildId: null !== (s = null == m ? void 0 : m.guild_id) && void 0 !== s ? s : ''
                })) && void 0 !== c
                ? c
                : void 0,
        N = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: l, onMouseDown: s } = e;
                return (0, r.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: l,
                    onMouseDown: s,
                    className: o()({
                        [Z.executedCommandAvatar]: !0,
                        [Z.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: O,
                onClick: 1 === n ? y : b,
                onContextMenu: 1 === n ? x : v
            }),
        C = 1 === n ? _ : g;
    return null != a && null != C
        ? (0, r.jsx)(u.yRy, {
              renderPopout: a,
              shouldShow: C,
              position: 'right',
              onRequestClose: E,
              children: N
          })
        : N();
}
function M(e, t, n, i, a) {
    let { message: o, channel: l, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: d, onUserContextMenu: u, onClickTargetUsername: p, onTargetUserContextMenu: m, onPopoutRequestClose: f } = e;
    return (0, r.jsx)(S.Z, {
        className: 1 === n ? Z.targetUsername : '',
        compact: !0,
        author: i,
        message: o,
        channel: l,
        userOverride: t,
        showPopout: 1 === n ? c : s,
        renderPopout: a,
        onClick: 1 === n ? p : d,
        onContextMenu: 1 === n ? m : u,
        onPopoutRequestClose: f
    });
}
let W = () =>
    (0, r.jsx)(u.Fbu, {
        size: 'xxs',
        color: 'currentColor',
        className: Z.executedCommandSeparator
    });
function F(e) {
    let { enabled: t } = m.c.useExperiment({ location: 'ExecutedCommand' }, { autoTrackExposure: !0 }),
        n = t ? u.iWm : u.jje;
    return (0, r.jsx)(n, k({}, e));
}
function U(e) {
    var t;
    let n;
    let { message: a, channel: l } = e,
        { analyticsLocations: c } = (0, b.ZP)(_.Z.EXECUTED_COMMAND),
        m = i.useMemo(
            () => (e, t, n) => (
                s()(null != l && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, r.jsx)(
                    E.Z,
                    R(k({}, e), {
                        channelId: l.id,
                        messageId: a.id,
                        guildId: l.guild_id,
                        userId: t.id,
                        newAnalyticsLocations: n
                    })
                )
            ),
            [l, a.id]
        ),
        j = i.useMemo(
            () => (e) => (
                s()(null != l, 'ExecutedCommand: channel cannot be null'),
                (0, r.jsx)(
                    T.Z,
                    R(k({}, e), {
                        channel: l,
                        messageId: a.id,
                        interactionData: a.interactionData
                    })
                )
            ),
            [l, a.id, a.interactionData]
        ),
        S = (0, y.t0)(a),
        D = (null == S ? void 0 : S.type) === p.B8.APPLICATION_COMMAND && null != S.target_user ? new O.Z(S.target_user) : null,
        U = (null == S ? void 0 : S.type) === p.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
        B = (0, I.Sw)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, l),
        G = (0, I.Sw)(D, l),
        H = i.useMemo(() => (e.compact ? (0, P.Z)((0, C.vc)(d()(), 'LT')) : null), [e.compact]),
        V = (0, f.NX)(l.id),
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
    if ((null == a ? void 0 : a.activityInstance) === null || (0, x.g)(a))
        (n = w.NW.format(w.t['rg7U+P'], {
            userHook: K,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: a, onPopoutRequestClose: l } = e,
                        s = i.interaction.displayName;
                    return (0, r.jsx)(u.yRy, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: l,
                        animation: u.yRy.Animation.FADE,
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
                                    u.P3F,
                                    R(k({}, n), {
                                        tag: 'span',
                                        onClick: a,
                                        children: (0, r.jsxs)('div', {
                                            className: o()(Z.appLauncherOnboardingCommandName, Z.clickable),
                                            children: [
                                                (0, r.jsx)(u.jje, {
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
                            if (!(0, x.g)(i))
                                return (0, r.jsx)('div', {
                                    className: Z.commandName,
                                    children: s
                                });
                            {
                                let e = (0, v.XZ)(s);
                                return (0, r.jsx)(
                                    u.P3F,
                                    R(k({}, n), {
                                        tag: 'span',
                                        onClick: () => {
                                            N.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                        },
                                        children: (0, r.jsxs)('div', {
                                            className: o()(Z.appLauncherOnboardingCommandName, Z.clickable),
                                            children: [
                                                (0, r.jsx)(F, {
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
                })(e, j);
                return (0, r.jsx)(i.Fragment, { children: t }, 'command');
            }
        })),
            U && null != e.renderTargetMessage
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
                channel: l,
                guildId: l.guild_id,
                locationObject: {
                    page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHANNEL_TEXT_AREA,
                    object: A.qAy.APP_COMMAND,
                    objectType: A.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: c
            }),
                (0, h.w1)({ guildId: l.guild_id });
        };
        n = V
            ? w.NW.format(w.t.kfV8WF, {
                  userHook: K,
                  activityHook: () =>
                      (0, r.jsx)(u.P3F, {
                          tag: 'span',
                          onClick: e,
                          children: (0, r.jsx)('div', {
                              className: o()(Z.commandName, Z.clickable),
                              children: w.NW.string(w.t.YTgRvr)
                          })
                      })
              })
            : w.NW.format(w.t['6FeSyc'], { userHook: K });
    }
    return (0, r.jsx)(b.Gt, {
        value: c,
        children: (0, r.jsx)('div', {
            className: o()(Z.repliedMessage, Z.messageSpine, Z.executedCommand, H),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
