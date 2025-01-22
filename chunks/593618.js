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
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    p = r(481060),
    h = r(317381),
    _ = r(884338),
    m = r(470883),
    g = r(750881),
    E = r(540059),
    v = r(666188),
    y = r(372769),
    b = r(523751),
    I = r(246364),
    T = r(746916),
    S = r(965638),
    A = r(160404),
    C = r(777861),
    N = r(565799),
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
        a = s.useMemo(() => i.map((e) => e.id), [i]),
        o = (0, f.e7)([k.ZP], () => k.ZP.getVoiceStates(n), [n]),
        l = (0, f.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
        { enabled: u } = (0, g.bA)('guild-tooltip'),
        c = d().flatMap(r, (n) => {
            var r;
            if (n === e.afkChannelId) return [];
            let i = (null !== (r = o[n]) && void 0 !== r ? r : []).map((e) => {
                let { user: n } = e;
                return n;
            });
            return u ? (0, m.dq)(i, l) : i;
        }),
        p = (0, f.Wu)([N.Z], () =>
            d().flatMap(a, (n) => {
                if (n === e.afkChannelId) return [];
                let r = N.Z.getMutableParticipants(n, R.pV.SPEAKER)
                    .filter((e) => e.type === R.Ui.VOICE)
                    .map((e) => {
                        let { user: n } = e;
                        return n;
                    });
                return u ? (0, m.dq)(r, l) : r;
            })
        ),
        _ = (0, f.e7)([N.Z], () => {
            let e = 0;
            for (let n of a) e += N.Z.getParticipantCount(n, R.pV.AUDIENCE);
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
        y = (0, f.Wu)(
            [M.default],
            () => {
                let e = v.map((e) => M.default.getUser(e));
                return u ? (0, m.dq)(e) : e;
            },
            [u, v]
        ),
        b = (0, f.Wu)([M.default], () => E.map((e) => M.default.getUser(e)), [E]),
        I = c.filter((e) => !E.includes(e.id) && !v.includes(e.id)),
        T = u ? (0, m.dq)(I) : I,
        S = b.filter((e) => null != e && !v.includes(e.id)),
        A = p.length > 0 || I.length > 0 || S.length > 0 || y.length > 0;
    return {
        voiceUsersToShow: T,
        stageSpeakers: p,
        numStageListeners: _,
        streamUsersToShow: S,
        embeddedActivitiesUsers: y,
        hasActivity: A
    };
}
function V(e, n, r) {
    return 0 === n.length
        ? null
        : (0, o.jsxs)('div', {
              className: G.row,
              children: [
                  (0, o.jsx)(e, {
                      className: G.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, o.jsx)(_.Z, {
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
        : (0, o.jsxs)('div', {
              className: G.row,
              children: [
                  (0, o.jsx)(p.StageIcon, {
                      size: 'lg',
                      color: 'currentColor',
                      className: G.activityIcon
                  }),
                  (0, o.jsx)(_.Z, {
                      guildId: e,
                      users: n,
                      max: 3
                  }),
                  (0, o.jsxs)('div', {
                      className: G.stageListenerPill,
                      children: [
                          (0, o.jsx)(p.HeadphonesIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, o.jsx)(p.Text, {
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
        ? (0, o.jsx)(p.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: r,
              children: B.intl.string(B.t.fpKdS0)
          })
        : (0, o.jsx)(C.Z, {
              muteConfig: n,
              className: r
          });
}
function Y(e) {
    let { guild: n } = e,
        r = n.id,
        { voiceUsersToShow: i, stageSpeakers: a, numStageListeners: s, streamUsersToShow: l, embeddedActivitiesUsers: c } = F(n),
        d = V(p.VoiceNormalIcon, i, r),
        h = j(r, a, s),
        _ = V(p.ScreenArrowIcon, l, r),
        m = V(p.ActivitiesIcon, c, r),
        { isMuted: g, muteConfig: E } = (0, f.cj)(
            [P.ZP],
            () => ({
                isMuted: P.ZP.isMuted(r),
                muteConfig: P.ZP.getMuteConfig(r)
            }),
            [r]
        ),
        v = null != d || null != _;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            h,
            d,
            _,
            m,
            g
                ? (0, o.jsx)(H, {
                      muteConfig: E,
                      className: u()(G.muteText, { [G.muteTextWithActivity]: v })
                  })
                : null
        ]
    });
}
function W(e) {
    switch (e) {
        case I.wB.SUBMITTED:
            return B.intl.string(B.t['9KFC9/']);
        case I.wB.REJECTED:
            return B.intl.string(B.t['TQY/RU']);
        case I.wB.APPROVED:
            return B.intl.string(B.t.WXHcq6);
        default:
            return B.intl.string(B.t.fjHFCw);
    }
}
function K(e) {
    let { guildJoinRequestStatus: n } = e;
    return (0, o.jsx)(p.Text, {
        className: G.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: W(n)
    });
}
function z(e) {
    let { guild: n, includeActivity: r = !0 } = e,
        i = (0, v.Z)(n),
        a = (0, T.E)(n),
        s = null != a ? (0, o.jsx)(K, { guildJoinRequestStatus: a }) : null,
        l = r ? (0, o.jsx)(Y, { guild: n }) : null,
        c = (0, f.e7)([A.Z], () => A.Z.isViewingRoles(n.id)),
        d = null != s ? s : l,
        h = (0, S.I)(n);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: u()(G.row, G.rowGuildName),
                children: [
                    i
                        ? (0, o.jsx)(b.Z, {
                              guild: n,
                              className: G.rowIconV2
                          })
                        : (0, o.jsx)(y.Z, {
                              guild: n,
                              size: 20,
                              className: G.rowIcon
                          }),
                    (0, o.jsx)('span', {
                        className: u()(G.guildNameText, { [G.guildNameTextLimitedSize]: null != l }),
                        children: n.toString()
                    })
                ]
            }),
            h
                ? (0, o.jsx)(p.Text, {
                      className: G.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: B.intl.string(B.t['2n0/Fh'])
                  })
                : null,
            c
                ? (0, o.jsx)(p.Text, {
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
    return (0, o.jsx)(p.Tooltip, {
        hideOnClick: !0,
        spacing: u ? 12 : 20,
        position: 'right',
        text: r
            ? null
            : (0, o.jsx)(z, {
                  guild: n,
                  includeActivity: l
              }),
        'aria-label': i,
        tooltipClassName: Z.listItemTooltip,
        children: (e) => {
            let { onFocus: n, onBlur: r, ...i } = e;
            return (0, o.jsx)('div', {
                onFocus: n,
                onBlur: r,
                children: s.cloneElement(s.Children.only(a), { ...i })
            });
        }
    });
}
