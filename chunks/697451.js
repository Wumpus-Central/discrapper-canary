n.d(t, {
    Z: function () {
        return U;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(512722),
    d = n.n(c),
    u = n(913527),
    m = n.n(u),
    h = n(481060),
    f = n(911969),
    p = n(595519),
    _ = n(566620),
    g = n(403404),
    E = n(100527),
    C = n(906732),
    I = n(783097),
    x = n(581364),
    N = n(592180),
    v = n(347475),
    T = n(598077),
    S = n(768581),
    A = n(585483),
    b = n(55935),
    j = n(739566),
    R = n(421399),
    Z = n(310423),
    P = n(223021),
    L = n(981631),
    y = n(388032),
    O = n(507304);
function M(e) {
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: r, foreground: a } = e;
    return (0, l.jsx)('svg', {
        className: r,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, l.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: a,
            fill: i
        })
    });
}
((i = r || (r = {}))[(i.InteractionUser = 0)] = 'InteractionUser'), (i[(i.InteractionTarget = 1)] = 'InteractionTarget');
function k(e, t, n, i, r) {
    var a, o, c;
    let { message: d, compact: u, channel: m, isInteractionUserBlocked: f, isInteractionUserIgnored: p, showAvatarPopout: _, showTargetAvatarPopout: g, onClickAvatar: E, onUserContextMenu: C, onClickTargetAvatar: I, onTargetUserContextMenu: x, onPopoutRequestClose: N } = e;
    if (u && 1 === n) return null;
    if ((u && null == d.activityInstance) || f || p)
        return (0, l.jsx)('div', {
            className: O.replyBadge,
            children: (0, l.jsx)(M, { className: O.commandIcon })
        });
    let v =
            null !==
                (c = S.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (a = i.guildMemberAvatar) && void 0 !== a ? a : void 0,
                    userId: t.id,
                    guildId: null !== (o = null == m ? void 0 : m.guild_id) && void 0 !== o ? o : ''
                })) && void 0 !== c
                ? c
                : void 0,
        T = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: r, onContextMenu: a, onMouseDown: o } = e;
                return (0, l.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: r,
                    onContextMenu: a,
                    onMouseDown: o,
                    className: s()({
                        [O.executedCommandAvatar]: !0,
                        [O.clickable]: null != r
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: v,
                onClick: 1 === n ? I : E,
                onContextMenu: 1 === n ? x : C
            }),
        A = 1 === n ? g : _;
    return null != r && null != A
        ? (0, l.jsx)(h.Popout, {
              renderPopout: r,
              shouldShow: A,
              position: 'right',
              onRequestClose: N,
              children: T
          })
        : T();
}
function D(e, t, n, i, r) {
    let { message: a, channel: o, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: d, onUserContextMenu: u, onClickTargetUsername: m, onTargetUserContextMenu: h, onPopoutRequestClose: f } = e;
    return (0, l.jsx)(R.Z, {
        className: 1 === n ? O.targetUsername : '',
        compact: !0,
        author: i,
        message: a,
        channel: o,
        userOverride: t,
        showPopout: 1 === n ? c : s,
        renderPopout: r,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? h : u,
        onPopoutRequestClose: f
    });
}
let B = () =>
    (0, l.jsx)(h.ChevronSmallRightIcon, {
        size: 'xxs',
        color: 'currentColor',
        className: O.executedCommandSeparator
    });
function U(e) {
    var t;
    let n;
    let { message: i, channel: r } = e,
        { analyticsLocations: o } = (0, C.ZP)(E.Z.EXECUTED_COMMAND),
        c = a.useMemo(
            () => (e, t, n) => (
                d()(null != r && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, l.jsx)(v.Z, {
                    ...e,
                    channelId: r.id,
                    messageId: i.id,
                    guildId: r.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [r, i.id]
        ),
        u = a.useMemo(
            () => (e) => (
                d()(null != r, 'ExecutedCommand: channel cannot be null'),
                (0, l.jsx)(Z.Z, {
                    ...e,
                    channel: r,
                    messageId: i.id,
                    interactionData: i.interactionData
                })
            ),
            [r, i.id, i.interactionData]
        ),
        S = (0, x.t0)(i),
        R = (null == S ? void 0 : S.type) === f.B8.APPLICATION_COMMAND && null != S.target_user ? new T.Z(S.target_user) : null,
        M = (null == S ? void 0 : S.type) === f.B8.APPLICATION_COMMAND && null != i.messageReference && null != e.renderTargetMessage,
        U = (0, j.Sw)(null === (t = i.interaction) || void 0 === t ? void 0 : t.user, r),
        w = (0, j.Sw)(R, r),
        F = a.useMemo(() => (e.compact ? (0, P.Z)((0, b.vc)(m()(), 'LT')) : null), [e.compact]),
        G = (0, p.NX)(r.id),
        V = i.interaction;
    if (null == V || null == U) return null;
    let H = () => {
        let t = k(e, V.user, 0, U, (e) => c(e, V.user, [E.Z.AVATAR])),
            n = D(e, V.user, 0, U, (e) => c(e, V.user));
        return (0, l.jsxs)(
            a.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == i ? void 0 : i.activityInstance) === null || (0, N.g)(i))
        (n = y.intl.format(y.t['rg7U+P'], {
            userHook: H,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: r, onPopoutRequestClose: a } = e,
                        o = i.interaction.displayName;
                    return (0, l.jsx)(h.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: a,
                        animation: h.Popout.Animation.FADE,
                        positionKey: null != i.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            if (i.type === L.uaV.CHAT_INPUT_COMMAND || i.type === L.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, l.jsx)(h.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: r,
                                    children: (0, l.jsxs)('div', {
                                        className: s()(O.appLauncherOnboardingCommandName, O.clickable),
                                        children: [
                                            (0, l.jsx)(h.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: O.appsIcon
                                            }),
                                            o
                                        ]
                                    })
                                });
                            if (!(0, N.g)(i))
                                return (0, l.jsx)('div', {
                                    className: O.commandName,
                                    children: o
                                });
                            {
                                let e = (0, I.XZ)(o);
                                return (0, l.jsx)(h.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: () => {
                                        A.S.dispatchToLastSubscribed(L.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                    },
                                    children: (0, l.jsxs)('div', {
                                        className: s()(O.appLauncherOnboardingCommandName, O.clickable),
                                        children: [
                                            (0, l.jsx)(h.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: O.appsIcon
                                            }),
                                            e
                                        ]
                                    })
                                });
                            }
                        }
                    });
                })(e, u);
                return (0, l.jsx)(a.Fragment, { children: t }, 'command');
            }
        })),
            M && null != e.renderTargetMessage
                ? (n = (0, l.jsxs)(l.Fragment, {
                      children: [n, (0, l.jsx)(B, {}), e.renderTargetMessage()]
                  }))
                : null != R &&
                  (n = (0, l.jsxs)(l.Fragment, {
                      children: [
                          n,
                          (0, l.jsx)(B, {}),
                          (0, l.jsx)(() => {
                              if (null == R) return null;
                              let t = k(e, R, 1, w, (e) => c(e, R, [E.Z.AVATAR])),
                                  n = D(e, R, 1, w, (e) => c(e, R));
                              return (0, l.jsxs)(
                                  a.Fragment,
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
                channel: r,
                guildId: r.guild_id,
                locationObject: {
                    page: r.isPrivate() ? L.ZY5.DM_CHANNEL : L.ZY5.GUILD_CHANNEL,
                    section: L.jXE.CHANNEL_TEXT_AREA,
                    object: L.qAy.APP_COMMAND,
                    objectType: L.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: o
            }),
                (0, _.w1)({ guildId: r.guild_id });
        };
        n = G
            ? y.intl.format(y.t.kfV8WF, {
                  userHook: H,
                  activityHook: () =>
                      (0, l.jsx)(h.Clickable, {
                          tag: 'span',
                          onClick: e,
                          children: (0, l.jsx)('div', {
                              className: s()(O.commandName, O.clickable),
                              children: y.intl.string(y.t.YTgRvr)
                          })
                      })
              })
            : y.intl.format(y.t['6FeSyc'], { userHook: H });
    }
    return (0, l.jsx)(C.Gt, {
        value: o,
        children: (0, l.jsx)('div', {
            className: s()(O.repliedMessage, O.messageSpine, O.executedCommand, F),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
