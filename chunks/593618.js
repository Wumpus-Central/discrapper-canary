n.d(t, {
    K: () => Y,
    Z: () => W
}),
    n(390547),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(317381),
    f = n(884338),
    _ = n(470883),
    p = n(750881),
    h = n(540059),
    m = n(666188),
    g = n(372769),
    E = n(523751),
    v = n(246364),
    y = n(746916),
    I = n(965638),
    b = n(160404),
    T = n(777861),
    S = n(565799),
    A = n(501655),
    N = n(517334),
    C = n(344185),
    R = n(199902),
    O = n(984933),
    D = n(699516),
    x = n(9156),
    L = n(594174),
    P = n(938475),
    w = n(981631),
    M = n(388032),
    k = n(782451),
    U = n(572488);
function G(e) {
    let t = e.id,
        n = (0, u.Wu)(
            [O.ZP, C.Z],
            () => [
                ...O.ZP.getChannels(t)
                    [O.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === w.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(C.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))
            ],
            [t]
        ),
        i = (0, N.ZP)(t),
        a = r.useMemo(() => i.map((e) => e.id), [i]),
        s = (0, u.e7)([P.ZP], () => P.ZP.getVoiceStates(t), [t]),
        o = (0, u.Wu)([D.Z], () => D.Z.getBlockedOrIgnoredIDs()),
        { enabled: c } = (0, p.bA)('guild-tooltip'),
        f = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let i = (null !== (n = s[t]) && void 0 !== n ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return c ? (0, _.dq)(i, o) : i;
        }),
        h = (0, u.Wu)([S.Z], () =>
            l().flatMap(a, (t) => {
                if (t === e.afkChannelId) return [];
                let n = S.Z.getMutableParticipants(t, A.pV.SPEAKER)
                    .filter((e) => e.type === A.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return c ? (0, _.dq)(n, o) : n;
            })
        ),
        m = (0, u.e7)([S.Z], () => {
            let e = 0;
            for (let t of a) e += S.Z.getParticipantCount(t, A.pV.AUDIENCE);
            return e;
        }),
        g = (0, u.Wu)(
            [R.Z],
            () => {
                let e = R.Z.getAllApplicationStreams()
                    .filter((e) => e.guildId === t)
                    .map((e) => e.ownerId);
                return c ? (0, _._j)(e, o) : e;
            },
            [c, o, t]
        ),
        E = (0, u.Wu)(
            [d.ZP],
            () => {
                let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                return c ? (0, _._j)(e, o) : e;
            },
            [t, c, o]
        ),
        v = (0, u.Wu)(
            [L.default],
            () => {
                let e = E.map((e) => L.default.getUser(e));
                return c ? (0, _.dq)(e) : e;
            },
            [c, E]
        ),
        y = (0, u.Wu)([L.default], () => g.map((e) => L.default.getUser(e)), [g]),
        I = f.filter((e) => !g.includes(e.id) && !E.includes(e.id)),
        b = c ? (0, _.dq)(I) : I,
        T = y.filter((e) => null != e && !E.includes(e.id)),
        x = h.length > 0 || I.length > 0 || T.length > 0 || v.length > 0;
    return {
        voiceUsersToShow: b,
        stageSpeakers: h,
        numStageListeners: m,
        streamUsersToShow: T,
        embeddedActivitiesUsers: v,
        hasActivity: x
    };
}
function B(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: k.row,
              children: [
                  (0, i.jsx)(e, {
                      className: k.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, i.jsx)(f.Z, {
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
        : (0, i.jsxs)('div', {
              className: k.row,
              children: [
                  (0, i.jsx)(c.ewx, {
                      size: 'lg',
                      color: 'currentColor',
                      className: k.activityIcon
                  }),
                  (0, i.jsx)(f.Z, {
                      guildId: e,
                      users: t,
                      max: 3
                  }),
                  (0, i.jsxs)('div', {
                      className: k.stageListenerPill,
                      children: [
                          (0, i.jsx)(c.VWR, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(c.Text, {
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
function F(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, i.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: M.intl.string(M.t.fpKdS0)
          })
        : (0, i.jsx)(T.Z, {
              muteConfig: t,
              className: n
          });
}
function V(e) {
    let { guild: t } = e,
        n = t.id,
        { voiceUsersToShow: r, stageSpeakers: a, numStageListeners: o, streamUsersToShow: l, embeddedActivitiesUsers: d } = G(t),
        f = B(c.gj8, r, n),
        _ = Z(n, a, o),
        p = B(c.hGI, l, n),
        h = B(c.nG3, d, n),
        { isMuted: m, muteConfig: g } = (0, u.cj)(
            [x.ZP],
            () => ({
                isMuted: x.ZP.isMuted(n),
                muteConfig: x.ZP.getMuteConfig(n)
            }),
            [n]
        ),
        E = null != f || null != p;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _,
            f,
            p,
            h,
            m
                ? (0, i.jsx)(F, {
                      muteConfig: g,
                      className: s()(k.muteText, { [k.muteTextWithActivity]: E })
                  })
                : null
        ]
    });
}
function j(e) {
    switch (e) {
        case v.wB.SUBMITTED:
            return M.intl.string(M.t['9KFC9/']);
        case v.wB.REJECTED:
            return M.intl.string(M.t['TQY/RU']);
        case v.wB.APPROVED:
            return M.intl.string(M.t.WXHcq6);
        default:
            return M.intl.string(M.t.fjHFCw);
    }
}
function H(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(c.Text, {
        className: k.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: j(t)
    });
}
function Y(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        r = (0, m.Z)(t),
        a = (0, y.E)(t),
        o = null != a ? (0, i.jsx)(H, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, i.jsx)(V, { guild: t }) : null,
        d = (0, u.e7)([b.Z], () => b.Z.isViewingRoles(t.id)),
        f = null != o ? o : l,
        _ = (0, I.I)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: s()(k.row, k.rowGuildName),
                children: [
                    r
                        ? (0, i.jsx)(E.Z, {
                              guild: t,
                              className: k.rowIconV2
                          })
                        : (0, i.jsx)(g.Z, {
                              guild: t,
                              size: 20,
                              className: k.rowIcon
                          }),
                    (0, i.jsx)('span', {
                        className: s()(k.guildNameText, { [k.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            _
                ? (0, i.jsx)(c.Text, {
                      className: k.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: M.intl.string(M.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, i.jsx)(c.Text, {
                      className: k.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: M.intl.string(M.t['5LwN8/'])
                  })
                : f
        ]
    });
}
function W(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: s, includeActivity: o = !0 } = e,
        l = (0, h.Q3)('GuildTooltip');
    return (0, i.jsx)(c.ua7, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: n
            ? null
            : (0, i.jsx)(Y, {
                  guild: t,
                  includeActivity: o
              }),
        'aria-label': a,
        tooltipClassName: U.listItemTooltip,
        tooltipContentClassName: U.listItemTooltipContent,
        children: (e) => {
            let { onFocus: t, onBlur: n, ...a } = e;
            return (0, i.jsx)('div', {
                onFocus: t,
                onBlur: n,
                children: r.cloneElement(r.Children.only(s), { ...a })
            });
        }
    });
}
