n.d(t, { Z: () => W });
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
    m = n(595519),
    f = n(566620),
    h = n(403404),
    g = n(100527),
    _ = n(906732),
    b = n(783097),
    v = n(581364),
    y = n(592180),
    x = n(347475),
    O = n(598077),
    E = n(768581),
    j = n(585483),
    N = n(55935),
    C = n(739566),
    I = n(421399),
    S = n(310423),
    P = n(223021),
    T = n(981631),
    A = n(388032),
    w = n(456536);
function Z(e) {
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
function k(e, t) {
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
function R(e) {
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
    let { message: d, compact: p, channel: m, isInteractionUserBlocked: f, isInteractionUserIgnored: h, showAvatarPopout: g, showTargetAvatarPopout: _, onClickAvatar: b, onUserContextMenu: v, onClickTargetAvatar: y, onTargetUserContextMenu: x, onPopoutRequestClose: O } = e;
    if (p && 1 === n) return null;
    if ((p && null == d.activityInstance) || f || h)
        return (0, r.jsx)('div', {
            className: w.replyBadge,
            children: (0, r.jsx)(R, { className: w.commandIcon })
        });
    let j =
            null !==
                (c = E.ZP.getGuildMemberAvatarURL({
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
                        [w.executedCommandAvatar]: !0,
                        [w.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: j,
                onClick: 1 === n ? y : b,
                onContextMenu: 1 === n ? x : v
            }),
        C = 1 === n ? _ : g;
    return null != a && null != C
        ? (0, r.jsx)(u.yRy, {
              renderPopout: a,
              shouldShow: C,
              position: 'right',
              onRequestClose: O,
              children: N
          })
        : N();
}
function D(e, t, n, i, a) {
    let { message: o, channel: l, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: d, onUserContextMenu: u, onClickTargetUsername: p, onTargetUserContextMenu: m, onPopoutRequestClose: f } = e;
    return (0, r.jsx)(I.Z, {
        className: 1 === n ? w.targetUsername : '',
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
let M = () =>
    (0, r.jsx)(u.Fbu, {
        size: 'xxs',
        color: 'currentColor',
        className: w.executedCommandSeparator
    });
function W(e) {
    var t;
    let n;
    let { message: a, channel: l } = e,
        { analyticsLocations: c } = (0, _.ZP)(g.Z.EXECUTED_COMMAND),
        E = i.useMemo(
            () => (e, t, n) => (
                s()(null != l && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, r.jsx)(
                    x.Z,
                    k(Z({}, e), {
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
        I = i.useMemo(
            () => (e) => (
                s()(null != l, 'ExecutedCommand: channel cannot be null'),
                (0, r.jsx)(
                    S.Z,
                    k(Z({}, e), {
                        channel: l,
                        messageId: a.id,
                        interactionData: a.interactionData
                    })
                )
            ),
            [l, a.id, a.interactionData]
        ),
        R = (0, v.t0)(a),
        W = (null == R ? void 0 : R.type) === p.B8.APPLICATION_COMMAND && null != R.target_user ? new O.Z(R.target_user) : null,
        F = (null == R ? void 0 : R.type) === p.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
        U = (0, C.Sw)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, l),
        B = (0, C.Sw)(W, l),
        G = i.useMemo(() => (e.compact ? (0, P.Z)((0, N.vc)(d()(), 'LT')) : null), [e.compact]),
        H = (0, m.NX)(l.id),
        V = a.interaction;
    if (null == V || null == U) return null;
    let z = () => {
        let t = L(e, V.user, 0, U, (e) => E(e, V.user, [g.Z.AVATAR])),
            n = D(e, V.user, 0, U, (e) => E(e, V.user));
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == a ? void 0 : a.activityInstance) === null || (0, y.g)(a))
        (n = A.NW.format(A.t['rg7U+P'], {
            userHook: z,
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
                            if (i.type === T.uaV.CHAT_INPUT_COMMAND || i.type === T.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, r.jsx)(
                                    u.P3F,
                                    k(Z({}, n), {
                                        tag: 'span',
                                        onClick: a,
                                        children: (0, r.jsxs)('div', {
                                            className: o()(w.appLauncherOnboardingCommandName, w.clickable),
                                            children: [
                                                (0, r.jsx)(u.jje, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    height: 10,
                                                    width: 10,
                                                    className: w.appsIcon
                                                }),
                                                s
                                            ]
                                        })
                                    })
                                );
                            if (!(0, y.g)(i))
                                return (0, r.jsx)('div', {
                                    className: w.commandName,
                                    children: s
                                });
                            {
                                let e = (0, b.XZ)(s);
                                return (0, r.jsx)(
                                    u.P3F,
                                    k(Z({}, n), {
                                        tag: 'span',
                                        onClick: () => {
                                            j.S.dispatchToLastSubscribed(T.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                        },
                                        children: (0, r.jsxs)('div', {
                                            className: o()(w.appLauncherOnboardingCommandName, w.clickable),
                                            children: [
                                                (0, r.jsx)(u.jje, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    height: 10,
                                                    width: 10,
                                                    className: w.appsIcon
                                                }),
                                                e
                                            ]
                                        })
                                    })
                                );
                            }
                        }
                    });
                })(e, I);
                return (0, r.jsx)(i.Fragment, { children: t }, 'command');
            }
        })),
            F && null != e.renderTargetMessage
                ? (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(M, {}), e.renderTargetMessage()]
                  }))
                : null != W &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [
                          n,
                          (0, r.jsx)(M, {}),
                          (0, r.jsx)(() => {
                              if (null == W) return null;
                              let t = L(e, W, 1, B, (e) => E(e, W, [g.Z.AVATAR])),
                                  n = D(e, W, 1, B, (e) => E(e, W));
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
            (0, h.Z)({
                channel: l,
                guildId: l.guild_id,
                locationObject: {
                    page: l.isPrivate() ? T.ZY5.DM_CHANNEL : T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.CHANNEL_TEXT_AREA,
                    object: T.qAy.APP_COMMAND,
                    objectType: T.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: c
            }),
                (0, f.w1)({ guildId: l.guild_id });
        };
        n = H
            ? A.NW.format(A.t.kfV8WF, {
                  userHook: z,
                  activityHook: () =>
                      (0, r.jsx)(u.P3F, {
                          tag: 'span',
                          onClick: e,
                          children: (0, r.jsx)('div', {
                              className: o()(w.commandName, w.clickable),
                              children: A.NW.string(A.t.YTgRvr)
                          })
                      })
              })
            : A.NW.format(A.t['6FeSyc'], { userHook: z });
    }
    return (0, r.jsx)(_.Gt, {
        value: c,
        children: (0, r.jsx)('div', {
            className: o()(w.repliedMessage, w.messageSpine, w.executedCommand, G),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
