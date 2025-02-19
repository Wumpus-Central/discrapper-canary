n.d(t, {
    K: () => q,
    Z: () => Q
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
    d = n(317381),
    f = n(884338),
    p = n(470883),
    _ = n(750881),
    h = n(540059),
    m = n(666188),
    g = n(372769),
    E = n(523751),
    v = n(246364),
    b = n(746916),
    y = n(965638),
    O = n(160404),
    S = n(777861),
    I = n(565799),
    T = n(501655),
    N = n(517334),
    A = n(344185),
    C = n(199902),
    R = n(984933),
    P = n(699516),
    w = n(9156),
    D = n(594174),
    x = n(938475),
    L = n(981631),
    M = n(388032),
    k = n(430666),
    j = n(399491);
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
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
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
            [R.ZP, A.Z],
            () => [
                ...R.ZP.getChannels(t)
                    [R.Zb].filter((e) => {
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
        r = (0, N.ZP)(t),
        o = i.useMemo(() => r.map((e) => e.id), [r]),
        a = (0, c.e7)([x.ZP], () => x.ZP.getVoiceStates(t), [t]),
        s = (0, c.Wu)([P.Z], () => P.Z.getBlockedOrIgnoredIDs()),
        { enabled: u } = (0, _.bA)('guild-tooltip'),
        f = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null !== (n = a[t]) && void 0 !== n ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return u ? (0, p.dq)(r, s) : r;
        }),
        h = (0, c.Wu)([I.Z], () =>
            l().flatMap(o, (t) => {
                if (t === e.afkChannelId) return [];
                let n = I.Z.getMutableParticipants(t, T.pV.SPEAKER)
                    .filter((e) => e.type === T.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return u ? (0, p.dq)(n, s) : n;
            })
        ),
        m = (0, c.e7)([I.Z], () => {
            let e = 0;
            for (let t of o) e += I.Z.getParticipantCount(t, T.pV.AUDIENCE);
            return e;
        }),
        g = (0, c.Wu)(
            [C.Z],
            () => {
                let e = C.Z.getAllApplicationStreams()
                    .filter((e) => e.guildId === t)
                    .map((e) => e.ownerId);
                return u ? (0, p._j)(e, s) : e;
            },
            [u, s, t]
        ),
        E = (0, c.Wu)(
            [d.ZP],
            () => {
                let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                return u ? (0, p._j)(e, s) : e;
            },
            [t, u, s]
        ),
        v = (0, c.Wu)(
            [D.default],
            () => {
                let e = E.map((e) => D.default.getUser(e));
                return u ? (0, p.dq)(e) : e;
            },
            [u, E]
        ),
        b = (0, c.Wu)([D.default], () => g.map((e) => D.default.getUser(e)), [g]),
        y = f.filter((e) => !g.includes(e.id) && !E.includes(e.id)),
        O = u ? (0, p.dq)(y) : y,
        S = b.filter((e) => null != e && !E.includes(e.id)),
        w = h.length > 0 || y.length > 0 || S.length > 0 || v.length > 0;
    return {
        voiceUsersToShow: O,
        stageSpeakers: h,
        numStageListeners: m,
        streamUsersToShow: S,
        embeddedActivitiesUsers: v,
        hasActivity: w
    };
}
function V(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: k.row,
              children: [
                  (0, r.jsx)(e, {
                      className: k.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(f.Z, {
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
                  (0, r.jsx)(f.Z, {
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
function W(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(u.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: M.NW.string(M.t.fpKdS0)
          })
        : (0, r.jsx)(S.Z, {
              muteConfig: t,
              className: n
          });
}
function Y(e) {
    let { guild: t } = e,
        n = t.id,
        { voiceUsersToShow: i, stageSpeakers: o, numStageListeners: s, streamUsersToShow: l, embeddedActivitiesUsers: d } = F(t),
        f = V(u.gj8, i, n),
        p = H(n, o, s),
        _ = V(u.hGI, l, n),
        h = V(u.nG3, d, n),
        { isMuted: m, muteConfig: g } = (0, c.cj)(
            [w.ZP],
            () => ({
                isMuted: w.ZP.isMuted(n),
                muteConfig: w.ZP.getMuteConfig(n)
            }),
            [n]
        ),
        E = null != f || null != _;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            p,
            f,
            _,
            h,
            m
                ? (0, r.jsx)(W, {
                      muteConfig: g,
                      className: a()(k.muteText, { [k.muteTextWithActivity]: E })
                  })
                : null
        ]
    });
}
function K(e) {
    switch (e) {
        case v.wB.SUBMITTED:
            return M.NW.string(M.t['9KFC9/']);
        case v.wB.REJECTED:
            return M.NW.string(M.t['TQY/RU']);
        case v.wB.APPROVED:
            return M.NW.string(M.t.WXHcq6);
        default:
            return M.NW.string(M.t.fjHFCw);
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
        o = (0, b.E)(t),
        s = null != o ? (0, r.jsx)(z, { guildJoinRequestStatus: o }) : null,
        l = n ? (0, r.jsx)(Y, { guild: t }) : null,
        d = (0, c.e7)([O.Z], () => O.Z.isViewingRoles(t.id)),
        f = null != s ? s : l,
        p = (0, y.Ij)(t);
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
            p
                ? (0, r.jsx)(u.Text, {
                      className: k.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: M.NW.string(M.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(u.Text, {
                      className: k.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: M.NW.string(M.t['5LwN8/'])
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
