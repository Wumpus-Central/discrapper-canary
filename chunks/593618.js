n.d(t, {
    K: () => Q,
    Z: () => X
}),
    n(13667),
    n(390547),
    n(47120);
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
    h = n(750881),
    m = n(540059),
    g = n(666188),
    E = n(372769),
    b = n(523751),
    y = n(246364),
    v = n(746916),
    O = n(965638),
    I = n(160404),
    S = n(777861),
    T = n(565799),
    N = n(501655),
    A = n(517334),
    C = n(344185),
    R = n(199902),
    P = n(984933),
    w = n(699516),
    D = n(9156),
    L = n(594174),
    x = n(938475),
    M = n(981631),
    k = n(388032),
    j = n(714509),
    U = n(375613);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function Z(e) {
    let t = e.id,
        n = (0, c.Wu)(
            [P.ZP, C.Z],
            () => [
                ...P.ZP.getChannels(t)
                    [P.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === M.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(C.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))
            ],
            [t]
        ),
        r = (0, A.ZP)(t),
        o = i.useMemo(() => r.map((e) => e.id), [r]),
        a = (0, c.e7)([x.ZP], () => x.ZP.getVoiceStates(t), [t]),
        s = (0, c.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
        { enabled: u } = (0, h.bA)('guild-tooltip'),
        d = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null != (n = a[t]) ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return u ? (0, p.dq)(r, s) : r;
        }),
        _ = (0, c.Wu)([T.Z], () =>
            l().flatMap(o, (t) => {
                if (t === e.afkChannelId) return [];
                let n = T.Z.getMutableParticipants(t, N.pV.SPEAKER)
                    .filter((e) => e.type === N.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return u ? (0, p.dq)(n, s) : n;
            })
        ),
        m = (0, c.e7)([T.Z], () => {
            let e = 0;
            for (let t of o) e += T.Z.getParticipantCount(t, N.pV.AUDIENCE);
            return e;
        }),
        g = (0, c.Wu)(
            [R.Z],
            () => {
                let e = R.Z.getAllApplicationStreams()
                    .filter((e) => e.guildId === t)
                    .map((e) => e.ownerId);
                return u ? (0, p._j)(e, s) : e;
            },
            [u, s, t]
        ),
        E = (0, c.Wu)(
            [f.ZP],
            () => {
                let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                return u ? (0, p._j)(e, s) : e;
            },
            [t, u, s]
        ),
        b = (0, c.Wu)(
            [L.default],
            () => {
                let e = E.map((e) => L.default.getUser(e));
                return u ? (0, p.dq)(e) : e;
            },
            [u, E]
        ),
        y = (0, c.Wu)([L.default], () => g.map((e) => L.default.getUser(e)), [g]),
        v = d.filter((e) => !g.includes(e.id) && !E.includes(e.id)),
        O = u ? (0, p.dq)(v) : v,
        I = y.filter((e) => null != e && !E.includes(e.id)),
        S = _.length > 0 || v.length > 0 || I.length > 0 || b.length > 0;
    return {
        voiceUsersToShow: O,
        stageSpeakers: _,
        numStageListeners: m,
        streamUsersToShow: I,
        embeddedActivitiesUsers: b,
        hasActivity: S
    };
}
function H(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: j.row,
              children: [
                  (0, r.jsx)(e, {
                      className: j.activityIcon,
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
function W(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: j.row,
              children: [
                  (0, r.jsx)(u.ewx, {
                      size: 'lg',
                      color: 'currentColor',
                      className: j.activityIcon
                  }),
                  (0, r.jsx)(_.Z, {
                      guildId: e,
                      users: t,
                      max: 3
                  }),
                  (0, r.jsxs)('div', {
                      className: j.stageListenerPill,
                      children: [
                          (0, r.jsx)(u.VWR, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(u.Text, {
                              className: j.stageListenerCount,
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
              children: k.NW.string(k.t.fpKdS0)
          })
        : (0, r.jsx)(S.Z, {
              muteConfig: t,
              className: n
          });
}
function K(e) {
    let { guild: t } = e,
        n = t.id,
        { enabled: i } = d.c.useExperiment({ location: 'GuildTooltip' }, { autoTrackExposure: !0 }),
        { voiceUsersToShow: o, stageSpeakers: s, numStageListeners: l, streamUsersToShow: f, embeddedActivitiesUsers: _ } = Z(t),
        p = H(u.gj8, o, n),
        h = W(n, s, l),
        m = H(u.hGI, f, n),
        g = H(i ? u.iWm : u.nG3, _, n),
        { isMuted: E, muteConfig: b } = (0, c.cj)(
            [D.ZP],
            () => ({
                isMuted: D.ZP.isMuted(n),
                muteConfig: D.ZP.getMuteConfig(n)
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
                      className: a()(j.muteText, { [j.muteTextWithActivity]: y })
                  })
                : null
        ]
    });
}
function z(e) {
    switch (e) {
        case y.wB.SUBMITTED:
            return k.NW.string(k.t['9KFC9/']);
        case y.wB.REJECTED:
            return k.NW.string(k.t['TQY/RU']);
        case y.wB.APPROVED:
            return k.NW.string(k.t.WXHcq6);
        default:
            return k.NW.string(k.t.fjHFCw);
    }
}
function q(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: j.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: z(t)
    });
}
function Q(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, g.Z)(t),
        o = (0, v.E)(t),
        s = null != o ? (0, r.jsx)(q, { guildJoinRequestStatus: o }) : null,
        l = n ? (0, r.jsx)(K, { guild: t }) : null,
        d = (0, c.e7)([I.Z], () => I.Z.isViewingRoles(t.id)),
        f = null != s ? s : l,
        _ = (0, O.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(j.row, j.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(b.Z, {
                              guild: t,
                              className: j.rowIconV2
                          })
                        : (0, r.jsx)(E.Z, {
                              guild: t,
                              size: 20,
                              className: j.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: a()(j.guildNameText, { [j.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            _
                ? (0, r.jsx)(u.Text, {
                      className: j.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: k.NW.string(k.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(u.Text, {
                      className: j.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: k.NW.string(k.t['5LwN8/'])
                  })
                : f
        ]
    });
}
function X(e) {
    let { guild: t, disabled: n = !1, 'aria-label': o = !1, children: a, includeActivity: s = !0 } = e,
        l = (0, m.Q3)('GuildTooltip');
    return (0, r.jsx)(u.ua7, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: n
            ? null
            : (0, r.jsx)(Q, {
                  guild: t,
                  includeActivity: s
              }),
        'aria-label': o,
        tooltipClassName: U.listItemTooltip,
        tooltipContentClassName: U.listItemTooltipContent,
        children: (e) => {
            var { onFocus: t, onBlur: n } = e,
                o = F(e, ['onFocus', 'onBlur']);
            return (0, r.jsx)('div', {
                onFocus: t,
                onBlur: n,
                children: i.cloneElement(i.Children.only(a), B({}, o))
            });
        }
    });
}
