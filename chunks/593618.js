n.d(t, {
    K: () => z,
    Z: () => q
}),
    n(361932),
    n(187205),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(456100),
    f = n(317381),
    _ = n(884338),
    p = n(470883),
    h = n(666188),
    m = n(372769),
    g = n(523751),
    E = n(246364),
    b = n(746916),
    y = n(965638),
    O = n(160404),
    v = n(777861),
    I = n(565799),
    T = n(501655),
    S = n(517334),
    A = n(344185),
    N = n(199902),
    C = n(984933),
    R = n(699516),
    P = n(9156),
    w = n(594174),
    D = n(938475),
    L = n(981631),
    x = n(388032),
    k = n(714509),
    M = n(375613);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function V(e) {
    let t = e.id,
        n = (0, c.Wu)(
            [C.ZP, A.Z],
            () => [
                ...C.ZP.getChannels(t)
                    [C.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === L.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(A.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))
            ],
            [t]
        ),
        r = (0, S.ZP)(t),
        a = i.useMemo(() => r.map((e) => e.id), [r]),
        o = (0, c.e7)([D.ZP], () => D.ZP.getVoiceStates(t), [t]),
        s = (0, c.Wu)([R.Z], () => R.Z.getBlockedOrIgnoredIDs()),
        u = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null != (n = o[t]) ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, p.dq)(r, s);
        }),
        d = (0, c.Wu)([I.Z], () =>
            l().flatMap(a, (t) => {
                if (t === e.afkChannelId) return [];
                let n = I.Z.getMutableParticipants(t, T.pV.SPEAKER)
                    .filter((e) => e.type === T.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, p.dq)(n, s);
            })
        ),
        _ = (0, c.e7)([I.Z], () => {
            let e = 0;
            for (let t of a) e += I.Z.getParticipantCount(t, T.pV.AUDIENCE);
            return e;
        }),
        h = (0, c.Wu)(
            [N.Z],
            () => {
                let e = N.Z.getAllApplicationStreams()
                    .filter((e) => e.guildId === t)
                    .map((e) => e.ownerId);
                return (0, p._j)(e, s);
            },
            [s, t]
        ),
        m = (0, c.Wu)(
            [f.ZP],
            () => {
                let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                return (0, p._j)(e, s);
            },
            [t, s]
        ),
        g = (0, c.Wu)(
            [w.default],
            () => {
                let e = m.map((e) => w.default.getUser(e));
                return (0, p.dq)(e);
            },
            [m]
        ),
        E = (0, c.Wu)([w.default], () => h.map((e) => w.default.getUser(e)), [h]),
        b = u.filter((e) => !h.includes(e.id) && !m.includes(e.id)),
        y = (0, p.dq)(b),
        O = E.filter((e) => null != e && !m.includes(e.id)),
        v = d.length > 0 || b.length > 0 || O.length > 0 || g.length > 0;
    return {
        voiceUsersToShow: y,
        stageSpeakers: d,
        numStageListeners: _,
        streamUsersToShow: O,
        embeddedActivitiesUsers: g,
        hasActivity: v
    };
}
function F(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: k.row,
              children: [
                  (0, r.jsx)(e, {
                      className: k.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(_.Z, {
                      guildId: n,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function Z(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: k.row,
              children: [
                  (0, r.jsx)(u.ewx, {
                      size: 'lg',
                      color: 'currentColor',
                      className: k.activityIcon
                  }),
                  (0, r.jsx)(_.Z, {
                      guildId: e,
                      users: t,
                      max: 3
                  }),
                  (0, r.jsxs)('div', {
                      className: k.stageListenerPill,
                      children: [
                          (0, r.jsx)(u.VWR, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(u.Text, {
                              className: k.stageListenerCount,
                              color: 'text-default',
                              variant: 'text-xs/normal',
                              children: n
                          })
                      ]
                  })
              ]
          });
}
function H(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(u.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: x.intl.string(x.t.fpKdS0)
          })
        : (0, r.jsx)(v.Z, {
              muteConfig: t,
              className: n
          });
}
function Y(e) {
    let { guild: t } = e,
        n = t.id,
        { enabled: i } = d.c.useExperiment({ location: 'GuildTooltip' }, { autoTrackExposure: !0 }),
        { voiceUsersToShow: a, stageSpeakers: s, numStageListeners: l, streamUsersToShow: f, embeddedActivitiesUsers: _ } = V(t),
        p = F(u.gj8, a, n),
        h = Z(n, s, l),
        m = F(u.hGI, f, n),
        g = F(i ? u.iWm : u.nG3, _, n),
        { isMuted: E, muteConfig: b } = (0, c.cj)(
            [P.ZP],
            () => ({
                isMuted: P.ZP.isMuted(n),
                muteConfig: P.ZP.getMuteConfig(n)
            }),
            [n]
        ),
        y = null != p || null != m;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h,
            p,
            m,
            g,
            E
                ? (0, r.jsx)(H, {
                      muteConfig: b,
                      className: o()(k.muteText, { [k.muteTextWithActivity]: y })
                  })
                : null
        ]
    });
}
function W(e) {
    switch (e) {
        case E.wB.SUBMITTED:
            return x.intl.string(x.t['9KFC9/']);
        case E.wB.REJECTED:
            return x.intl.string(x.t['TQY/RU']);
        case E.wB.APPROVED:
            return x.intl.string(x.t.WXHcq6);
        default:
            return x.intl.string(x.t.fjHFCw);
    }
}
function K(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: k.viewAsRolesWarning,
        color: 'text-default',
        variant: 'text-xs/normal',
        children: W(t)
    });
}
function z(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, h.Z)(t),
        a = (0, b.E)(t),
        s = null != a ? (0, r.jsx)(K, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(Y, { guild: t }) : null,
        d = (0, c.e7)([O.Z], () => O.Z.isViewingRoles(t.id)),
        f = null != s ? s : l,
        _ = (0, y.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o()(k.row, k.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(g.Z, {
                              guild: t,
                              className: k.rowIconV2
                          })
                        : (0, r.jsx)(m.Z, {
                              guild: t,
                              size: 20,
                              className: k.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: o()(k.guildNameText, { [k.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            _
                ? (0, r.jsx)(u.Text, {
                      className: k.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: x.intl.string(x.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(u.Text, {
                      className: k.viewAsRolesWarning,
                      color: 'text-default',
                      variant: 'text-xs/normal',
                      children: x.intl.string(x.t['5LwN8/'])
                  })
                : f
        ]
    });
}
function q(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: o, includeActivity: s = !0 } = e;
    return (0, r.jsx)(u.ua7, {
        hideOnClick: !0,
        spacing: 12,
        position: 'right',
        text: n
            ? null
            : (0, r.jsx)(z, {
                  guild: t,
                  includeActivity: s
              }),
        'aria-label': a,
        tooltipClassName: M.listItemTooltip,
        tooltipContentClassName: M.listItemTooltipContent,
        children: (e) => {
            var { onFocus: t, onBlur: n } = e,
                a = G(e, ['onFocus', 'onBlur']);
            return (0, r.jsx)('div', {
                onFocus: t,
                onBlur: n,
                children: i.cloneElement(i.Children.only(o), U({}, a))
            });
        }
    });
}
