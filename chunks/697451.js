n.d(t, { Z: () => D });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(481060),
    m = n(911969),
    _ = n(595519),
    h = n(566620),
    p = n(403404),
    g = n(100527),
    f = n(906732),
    x = n(783097),
    C = n(581364),
    v = n(592180),
    E = n(347475),
    I = n(598077),
    N = n(768581),
    S = n(585483),
    T = n(55935),
    b = n(739566),
    A = n(421399),
    j = n(310423),
    y = n(223021),
    Z = n(981631),
    R = n(388032),
    L = n(732175);
function P(e) {
    let { width: t = 6, height: n = 10, color: l = 'currentColor', className: a, foreground: r } = e;
    return (0, i.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: r,
            fill: l
        })
    });
}
function k(e, t, n, l, a) {
    var s, o, c;
    let { message: d, compact: m, channel: _, isInteractionUserBlocked: h, isInteractionUserIgnored: p, showAvatarPopout: g, showTargetAvatarPopout: f, onClickAvatar: x, onUserContextMenu: C, onClickTargetAvatar: v, onTargetUserContextMenu: E, onPopoutRequestClose: I } = e;
    if (m && 1 === n) return null;
    if ((m && null == d.activityInstance) || h || p)
        return (0, i.jsx)('div', {
            className: L.replyBadge,
            children: (0, i.jsx)(P, { className: L.commandIcon })
        });
    let S =
            null !==
                (c = N.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (s = l.guildMemberAvatar) && void 0 !== s ? s : void 0,
                    userId: t.id,
                    guildId: null !== (o = null == _ ? void 0 : _.guild_id) && void 0 !== o ? o : ''
                })) && void 0 !== c
                ? c
                : void 0,
        T = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: l, onClick: a, onContextMenu: s, onMouseDown: o } = e;
                return (0, i.jsx)('img', {
                    alt: '',
                    src: null != l ? l : t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: s,
                    onMouseDown: o,
                    className: r()({
                        [L.executedCommandAvatar]: !0,
                        [L.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: _.guild_id,
                guildAvatar: S,
                onClick: 1 === n ? v : x,
                onContextMenu: 1 === n ? E : C
            }),
        b = 1 === n ? f : g;
    return null != a && null != b
        ? (0, i.jsx)(u.yRy, {
              renderPopout: a,
              shouldShow: b,
              position: 'right',
              onRequestClose: I,
              children: T
          })
        : T();
}
function M(e, t, n, l, a) {
    let { message: r, channel: s, showUsernamePopout: o, showTargetUsernamePopout: c, onClickUsername: d, onUserContextMenu: u, onClickTargetUsername: m, onTargetUserContextMenu: _, onPopoutRequestClose: h } = e;
    return (0, i.jsx)(A.Z, {
        className: 1 === n ? L.targetUsername : '',
        compact: !0,
        author: l,
        message: r,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: a,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? _ : u,
        onPopoutRequestClose: h
    });
}
let O = () =>
    (0, i.jsx)(u.Fbu, {
        size: 'xxs',
        color: 'currentColor',
        className: L.executedCommandSeparator
    });
function D(e) {
    var t;
    let n;
    let { message: a, channel: s } = e,
        { analyticsLocations: c } = (0, f.ZP)(g.Z.EXECUTED_COMMAND),
        N = l.useMemo(
            () => (e, t, n) => (
                o()(null != s && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, i.jsx)(E.Z, {
                    ...e,
                    channelId: s.id,
                    messageId: a.id,
                    guildId: s.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [s, a.id]
        ),
        A = l.useMemo(
            () => (e) => (
                o()(null != s, 'ExecutedCommand: channel cannot be null'),
                (0, i.jsx)(j.Z, {
                    ...e,
                    channel: s,
                    messageId: a.id,
                    interactionData: a.interactionData
                })
            ),
            [s, a.id, a.interactionData]
        ),
        P = (0, C.t0)(a),
        D = (null == P ? void 0 : P.type) === m.B8.APPLICATION_COMMAND && null != P.target_user ? new I.Z(P.target_user) : null,
        w = (null == P ? void 0 : P.type) === m.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
        F = (0, b.Sw)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, s),
        U = (0, b.Sw)(D, s),
        B = l.useMemo(() => (e.compact ? (0, y.Z)((0, T.vc)(d()(), 'LT')) : null), [e.compact]),
        G = (0, _.NX)(s.id),
        H = a.interaction;
    if (null == H || null == F) return null;
    let V = () => {
        let t = k(e, H.user, 0, F, (e) => N(e, H.user, [g.Z.AVATAR])),
            n = M(e, H.user, 0, F, (e) => N(e, H.user));
        return (0, i.jsxs)(
            l.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == a ? void 0 : a.activityInstance) === null || (0, v.g)(a))
        (n = R.intl.format(R.t['rg7U+P'], {
            userHook: V,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: l, onClickCommand: a, onPopoutRequestClose: s } = e,
                        o = l.interaction.displayName;
                    return (0, i.jsx)(u.yRy, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: s,
                        animation: u.yRy.Animation.FADE,
                        positionKey: null != l.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            if (l.type === Z.uaV.CHAT_INPUT_COMMAND || l.type === Z.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(u.P3F, {
                                    ...n,
                                    tag: 'span',
                                    onClick: a,
                                    children: (0, i.jsxs)('div', {
                                        className: r()(L.appLauncherOnboardingCommandName, L.clickable),
                                        children: [
                                            (0, i.jsx)(u.jje, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: L.appsIcon
                                            }),
                                            o
                                        ]
                                    })
                                });
                            if (!(0, v.g)(l))
                                return (0, i.jsx)('div', {
                                    className: L.commandName,
                                    children: o
                                });
                            {
                                let e = (0, x.XZ)(o);
                                return (0, i.jsx)(u.P3F, {
                                    ...n,
                                    tag: 'span',
                                    onClick: () => {
                                        S.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, { applicationId: l.applicationId });
                                    },
                                    children: (0, i.jsxs)('div', {
                                        className: r()(L.appLauncherOnboardingCommandName, L.clickable),
                                        children: [
                                            (0, i.jsx)(u.jje, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: L.appsIcon
                                            }),
                                            e
                                        ]
                                    })
                                });
                            }
                        }
                    });
                })(e, A);
                return (0, i.jsx)(l.Fragment, { children: t }, 'command');
            }
        })),
            w && null != e.renderTargetMessage
                ? (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(O, {}), e.renderTargetMessage()]
                  }))
                : null != D &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [
                          n,
                          (0, i.jsx)(O, {}),
                          (0, i.jsx)(() => {
                              if (null == D) return null;
                              let t = k(e, D, 1, U, (e) => N(e, D, [g.Z.AVATAR])),
                                  n = M(e, D, 1, U, (e) => N(e, D));
                              return (0, i.jsxs)(
                                  l.Fragment,
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
            (0, p.Z)({
                channel: s,
                guildId: s.guild_id,
                locationObject: {
                    page: s.isPrivate() ? Z.ZY5.DM_CHANNEL : Z.ZY5.GUILD_CHANNEL,
                    section: Z.jXE.CHANNEL_TEXT_AREA,
                    object: Z.qAy.APP_COMMAND,
                    objectType: Z.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: c
            }),
                (0, h.w1)({ guildId: s.guild_id });
        };
        n = G
            ? R.intl.format(R.t.kfV8WF, {
                  userHook: V,
                  activityHook: () =>
                      (0, i.jsx)(u.P3F, {
                          tag: 'span',
                          onClick: e,
                          children: (0, i.jsx)('div', {
                              className: r()(L.commandName, L.clickable),
                              children: R.intl.string(R.t.YTgRvr)
                          })
                      })
              })
            : R.intl.format(R.t['6FeSyc'], { userHook: V });
    }
    return (0, i.jsx)(f.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: r()(L.repliedMessage, L.messageSpine, L.executedCommand, B),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
