n.d(t, {
    K: () => q,
    Z: () => Q
}),
    n(361932),
    n(187205),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(456100),
    f = n(317381),
    _ = n(884338),
    p = n(470883),
    h = n(540059),
    m = n(666188),
    g = n(372769),
    E = n(523751),
    b = n(246364),
    y = n(746916),
    O = n(965638),
    v = n(160404),
    I = n(777861),
    S = n(565799),
    T = n(501655),
    A = n(517334),
    N = n(344185),
    C = n(199902),
    R = n(984933),
    P = n(699516),
    w = n(9156),
    D = n(594174),
    L = n(938475),
    x = n(981631),
    M = n(388032),
    k = n(714509),
    j = n(375613);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function F(e) {
    let t = e.id,
        n = (0, c.Wu)(
            [R.ZP, N.Z],
            () => [
                ...R.ZP.getChannels(t)
                    [R.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === x.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(N.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))
            ],
            [t]
        ),
        r = (0, A.ZP)(t),
        o = i.useMemo(() => r.map((e) => e.id), [r]),
        a = (0, c.e7)([L.ZP], () => L.ZP.getVoiceStates(t), [t]),
        s = (0, c.Wu)([P.Z], () => P.Z.getBlockedOrIgnoredIDs()),
        u = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null != (n = a[t]) ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, p.dq)(r, s);
        }),
        d = (0, c.Wu)([S.Z], () =>
            l().flatMap(o, (t) => {
                if (t === e.afkChannelId) return [];
                let n = S.Z.getMutableParticipants(t, T.pV.SPEAKER)
                    .filter((e) => e.type === T.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, p.dq)(n, s);
            })
        ),
        _ = (0, c.e7)([S.Z], () => {
            let e = 0;
            for (let t of o) e += S.Z.getParticipantCount(t, T.pV.AUDIENCE);
            return e;
        }),
        h = (0, c.Wu)(
            [C.Z],
            () => {
                let e = C.Z.getAllApplicationStreams()
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
            [D.default],
            () => {
                let e = m.map((e) => D.default.getUser(e));
                return (0, p.dq)(e);
            },
            [m]
        ),
        E = (0, c.Wu)([D.default], () => h.map((e) => D.default.getUser(e)), [h]),
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
function Z(e, t, n) {
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
function H(e, t, n) {
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
                              color: 'text-normal',
                              variant: 'text-xs/normal',
                              children: n
                          })
                      ]
                  })
              ]
          });
}
function Y(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(u.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: M.intl.string(M.t.fpKdS0)
          })
        : (0, r.jsx)(I.Z, {
              muteConfig: t,
              className: n
          });
}
function W(e) {
    let { guild: t } = e,
        n = t.id,
        { enabled: i } = d.c.useExperiment({ location: 'GuildTooltip' }, { autoTrackExposure: !0 }),
        { voiceUsersToShow: o, stageSpeakers: s, numStageListeners: l, streamUsersToShow: f, embeddedActivitiesUsers: _ } = F(t),
        p = Z(u.gj8, o, n),
        h = H(n, s, l),
        m = Z(u.hGI, f, n),
        g = Z(i ? u.iWm : u.nG3, _, n),
        { isMuted: E, muteConfig: b } = (0, c.cj)(
            [w.ZP],
            () => ({
                isMuted: w.ZP.isMuted(n),
                muteConfig: w.ZP.getMuteConfig(n)
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
                ? (0, r.jsx)(Y, {
                      muteConfig: b,
                      className: a()(k.muteText, { [k.muteTextWithActivity]: y })
                  })
                : null
        ]
    });
}
function K(e) {
    switch (e) {
        case b.wB.SUBMITTED:
            return M.intl.string(M.t['9KFC9/']);
        case b.wB.REJECTED:
            return M.intl.string(M.t['TQY/RU']);
        case b.wB.APPROVED:
            return M.intl.string(M.t.WXHcq6);
        default:
            return M.intl.string(M.t.fjHFCw);
    }
}
function z(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: k.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: K(t)
    });
}
function q(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, m.Z)(t),
        o = (0, y.E)(t),
        s = null != o ? (0, r.jsx)(z, { guildJoinRequestStatus: o }) : null,
        l = n ? (0, r.jsx)(W, { guild: t }) : null,
        d = (0, c.e7)([v.Z], () => v.Z.isViewingRoles(t.id)),
        f = null != s ? s : l,
        _ = (0, O.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(k.row, k.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(E.Z, {
                              guild: t,
                              className: k.rowIconV2
                          })
                        : (0, r.jsx)(g.Z, {
                              guild: t,
                              size: 20,
                              className: k.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: a()(k.guildNameText, { [k.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            _
                ? (0, r.jsx)(u.Text, {
                      className: k.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: M.intl.string(M.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(u.Text, {
                      className: k.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: M.intl.string(M.t['5LwN8/'])
                  })
                : f
        ]
    });
}
function Q(e) {
    let { guild: t, disabled: n = !1, 'aria-label': o = !1, children: a, includeActivity: s = !0 } = e,
        l = (0, h.Q3)('GuildTooltip');
    return (0, r.jsx)(u.ua7, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: n
            ? null
            : (0, r.jsx)(q, {
                  guild: t,
                  includeActivity: s
              }),
        'aria-label': o,
        tooltipClassName: j.listItemTooltip,
        tooltipContentClassName: j.listItemTooltipContent,
        children: (e) => {
            var { onFocus: t, onBlur: n } = e,
                o = B(e, ['onFocus', 'onBlur']);
            return (0, r.jsx)('div', {
                onFocus: t,
                onBlur: n,
                children: i.cloneElement(i.Children.only(a), G({}, o))
            });
        }
    });
}
