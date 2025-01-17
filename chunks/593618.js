r.d(n, {
    K: function () {
        return z;
    },
    Z: function () {
        return q;
    }
});
var i = r(390547);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    _ = r(481060),
    h = r(317381),
    p = r(884338),
    m = r(470883),
    g = r(750881),
    E = r(540059),
    v = r(666188),
    I = r(372769),
    T = r(523751),
    b = r(246364),
    y = r(746916),
    S = r(965638),
    A = r(160404),
    N = r(777861),
    C = r(565799),
    R = r(501655),
    O = r(517334),
    D = r(344185),
    L = r(199902),
    x = r(984933),
    w = r(699516),
    P = r(9156),
    M = r(594174),
    k = r(938475),
    U = r(981631),
    B = r(388032),
    G = r(782451),
    Z = r(572488);
function F(e) {
    let n = e.id,
        r = (0, f.Wu)(
            [x.ZP, D.Z],
            () => {
                let e = x.ZP.getChannels(n)
                    [x.Zb].filter((e) => {
                        let { channel: n } = e;
                        return n.type === U.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: n } = e;
                        return n.id;
                    });
                return [...e, ...Object.values(D.Z.getThreadsForGuild(n)).flatMap((e) => Object.keys(e))];
            },
            [n]
        ),
        i = (0, O.ZP)(n),
        a = o.useMemo(() => i.map((e) => e.id), [i]),
        s = (0, f.e7)([k.ZP], () => k.ZP.getVoiceStates(n), [n]),
        l = (0, f.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
        { enabled: u } = (0, g.bA)('guild-tooltip'),
        c = d().flatMap(r, (n) => {
            var r;
            if (n === e.afkChannelId) return [];
            let i = (null !== (r = s[n]) && void 0 !== r ? r : []).map((e) => {
                let { user: n } = e;
                return n;
            });
            return u ? (0, m.dq)(i, l) : i;
        }),
        _ = (0, f.Wu)([C.Z], () =>
            d().flatMap(a, (n) => {
                if (n === e.afkChannelId) return [];
                let r = C.Z.getMutableParticipants(n, R.pV.SPEAKER)
                    .filter((e) => e.type === R.Ui.VOICE)
                    .map((e) => {
                        let { user: n } = e;
                        return n;
                    });
                return u ? (0, m.dq)(r, l) : r;
            })
        ),
        p = (0, f.e7)([C.Z], () => {
            let e = 0;
            for (let n of a) e += C.Z.getParticipantCount(n, R.pV.AUDIENCE);
            return e;
        }),
        E = (0, f.Wu)(
            [L.Z],
            () => {
                let e = L.Z.getAllApplicationStreams()
                    .filter((e) => e.guildId === n)
                    .map((e) => e.ownerId);
                return u ? (0, m._j)(e, l) : e;
            },
            [u, l, n]
        ),
        v = (0, f.Wu)(
            [h.ZP],
            () => {
                let e = h.ZP.getEmbeddedActivitiesForGuild(n).flatMap((e) => Array.from(e.userIds));
                return u ? (0, m._j)(e, l) : e;
            },
            [n, u, l]
        ),
        I = (0, f.Wu)(
            [M.default],
            () => {
                let e = v.map((e) => M.default.getUser(e));
                return u ? (0, m.dq)(e) : e;
            },
            [u, v]
        ),
        T = (0, f.Wu)([M.default], () => E.map((e) => M.default.getUser(e)), [E]),
        b = c.filter((e) => !E.includes(e.id) && !v.includes(e.id)),
        y = u ? (0, m.dq)(b) : b,
        S = T.filter((e) => null != e && !v.includes(e.id)),
        A = _.length > 0 || b.length > 0 || S.length > 0 || I.length > 0;
    return {
        voiceUsersToShow: y,
        stageSpeakers: _,
        numStageListeners: p,
        streamUsersToShow: S,
        embeddedActivitiesUsers: I,
        hasActivity: A
    };
}
function V(e, n, r) {
    return 0 === n.length
        ? null
        : (0, s.jsxs)('div', {
              className: G.row,
              children: [
                  (0, s.jsx)(e, {
                      className: G.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, s.jsx)(p.Z, {
                      guildId: r,
                      users: n,
                      max: 6
                  })
              ]
          });
}
function j(e, n, r) {
    return 0 === n.length
        ? null
        : (0, s.jsxs)('div', {
              className: G.row,
              children: [
                  (0, s.jsx)(_.StageIcon, {
                      size: 'lg',
                      color: 'currentColor',
                      className: G.activityIcon
                  }),
                  (0, s.jsx)(p.Z, {
                      guildId: e,
                      users: n,
                      max: 3
                  }),
                  (0, s.jsxs)('div', {
                      className: G.stageListenerPill,
                      children: [
                          (0, s.jsx)(_.HeadphonesIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, s.jsx)(_.Text, {
                              className: G.stageListenerCount,
                              color: 'text-normal',
                              variant: 'text-xs/normal',
                              children: r
                          })
                      ]
                  })
              ]
          });
}
function H(e) {
    let { muteConfig: n, className: r } = e;
    return (null == n ? void 0 : n.end_time) == null
        ? (0, s.jsx)(_.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: r,
              children: B.intl.string(B.t.fpKdS0)
          })
        : (0, s.jsx)(N.Z, {
              muteConfig: n,
              className: r
          });
}
function Y(e) {
    let { guild: n } = e,
        r = n.id,
        { voiceUsersToShow: i, stageSpeakers: a, numStageListeners: o, streamUsersToShow: l, embeddedActivitiesUsers: c } = F(n),
        d = V(_.VoiceNormalIcon, i, r),
        h = j(r, a, o),
        p = V(_.ScreenArrowIcon, l, r),
        m = V(_.ActivitiesIcon, c, r),
        { isMuted: g, muteConfig: E } = (0, f.cj)(
            [P.ZP],
            () => ({
                isMuted: P.ZP.isMuted(r),
                muteConfig: P.ZP.getMuteConfig(r)
            }),
            [r]
        ),
        v = null != d || null != p;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            h,
            d,
            p,
            m,
            g
                ? (0, s.jsx)(H, {
                      muteConfig: E,
                      className: u()(G.muteText, { [G.muteTextWithActivity]: v })
                  })
                : null
        ]
    });
}
function W(e) {
    switch (e) {
        case b.wB.SUBMITTED:
            return B.intl.string(B.t['9KFC9/']);
        case b.wB.REJECTED:
            return B.intl.string(B.t['TQY/RU']);
        case b.wB.APPROVED:
            return B.intl.string(B.t.WXHcq6);
        default:
            return B.intl.string(B.t.fjHFCw);
    }
}
function K(e) {
    let { guildJoinRequestStatus: n } = e;
    return (0, s.jsx)(_.Text, {
        className: G.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: W(n)
    });
}
function z(e) {
    let { guild: n, includeActivity: r = !0 } = e,
        i = (0, v.Z)(n),
        a = (0, y.E)(n),
        o = null != a ? (0, s.jsx)(K, { guildJoinRequestStatus: a }) : null,
        l = r ? (0, s.jsx)(Y, { guild: n }) : null,
        c = (0, f.e7)([A.Z], () => A.Z.isViewingRoles(n.id)),
        d = null != o ? o : l,
        h = (0, S.I)(n);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: u()(G.row, G.rowGuildName),
                children: [
                    i
                        ? (0, s.jsx)(T.Z, {
                              guild: n,
                              className: G.rowIconV2
                          })
                        : (0, s.jsx)(I.Z, {
                              guild: n,
                              size: 20,
                              className: G.rowIcon
                          }),
                    (0, s.jsx)('span', {
                        className: u()(G.guildNameText, { [G.guildNameTextLimitedSize]: null != l }),
                        children: n.toString()
                    })
                ]
            }),
            h
                ? (0, s.jsx)(_.Text, {
                      className: G.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: B.intl.string(B.t['2n0/Fh'])
                  })
                : null,
            c
                ? (0, s.jsx)(_.Text, {
                      className: G.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: B.intl.string(B.t['5LwN8/'])
                  })
                : d
        ]
    });
}
function q(e) {
    let { guild: n, disabled: r = !1, 'aria-label': i = !1, children: a, includeActivity: l = !0 } = e,
        u = (0, E.Q3)('GuildTooltip');
    return (0, s.jsx)(_.Tooltip, {
        hideOnClick: !0,
        spacing: u ? 12 : 20,
        position: 'right',
        text: r
            ? null
            : (0, s.jsx)(z, {
                  guild: n,
                  includeActivity: l
              }),
        'aria-label': i,
        tooltipClassName: Z.listItemTooltip,
        children: (e) => {
            let { onFocus: n, onBlur: r, ...i } = e;
            return (0, s.jsx)('div', {
                onFocus: n,
                onBlur: r,
                children: o.cloneElement(o.Children.only(a), { ...i })
            });
        }
    });
}
