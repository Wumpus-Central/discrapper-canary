(n.d(t, { Z: () => R }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    s = n(481060),
    o = n(782568),
    c = n(223892),
    d = n(203498),
    u = n(641806),
    m = n(690221),
    g = n(30624),
    p = n(577275),
    h = n(601964),
    f = n(594174),
    x = n(451478),
    b = n(626135),
    j = n(584825),
    v = n(723047),
    _ = n(416867),
    O = n(903773),
    y = n(215124),
    C = n(326578),
    N = n(981631),
    I = n(674563),
    E = n(829857),
    S = n(388032),
    T = n(738309);
function P(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)('div', {
        className: T.selectTeamContainer,
        children: (0, r.jsx)(a.zx, {
            disabled: !n,
            onClick: t,
            className: T.enableTicketingButton,
            fullWidth: !0,
            children: S.intl.string(S.t['5k6FfX'])
        })
    });
}
function w(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [o, c] = i.useState(),
        { enableGuildMonetizationForTeam: u, submitting: m, error: g } = (0, d.Z)(),
        { fetchSubscriptionsSettings: p } = (0, j.JH)(),
        h = (0, v.mY)(),
        f = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [n]
        ),
        x = async () => {
            (await u(t, o, I.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (p(t.id),
                (0, _.B)({
                    Icon: C.Z,
                    title: S.intl.string(S.t['AP/2qa']),
                    body: S.intl.string(S.t.kHMgaG)
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: T.selectTeamContainer,
                children: [
                    (0, r.jsx)(s.q4e, {
                        className: T.teamSelect,
                        options: f,
                        placeholder: S.intl.string(S.t.QXf93N),
                        value: o,
                        isDisabled: 0 === f.length || h || !l,
                        onChange: (e) => c(e),
                        'aria-label': S.intl.string(S.t.QXf93N)
                    }),
                    (0, r.jsx)(a.zx, {
                        onClick: x,
                        className: T.enableTicketingButton,
                        submitting: m,
                        disabled: null == o || h || !l,
                        children: S.intl.string(S.t['9HU3ZW'])
                    })
                ]
            }),
            null != g &&
                (0, r.jsx)(s.Text, {
                    className: T.error,
                    variant: 'text-sm/normal',
                    children: g.getAnyErrorMessage()
                })
        ]
    });
}
let R = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        a = (0, h.eM)(t, n),
        d = (0, c.Ob)(t),
        j = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: v, loading: _ } = (0, p.Z)({ refreshOnDepChange: j }),
        C = i.useMemo(
            () =>
                v.filter((e) => {
                    var t;
                    return e.payout_account_status !== E.C.BLOCKED && (0, g.Z)(null != (t = null == n ? void 0 : n.id) ? t : N.lds, e);
                }),
            [v, n]
        ),
        I = C.length > 0,
        R = i.useCallback(async () => {
            b.default.track(N.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: d,
                has_eligible_team: I,
                guild_id: t.id,
                is_owner: a
            });
            let e = await (0, u.$)(N.E07.DEVELOPER_PORTAL_TEAMS);
            (0, o.Z)(e);
        }, [t, a, d, I]),
        Z = i.useCallback(
            (e) =>
                a
                    ? (0, r.jsx)(m.Z, {
                          onClick: R,
                          children: e
                      })
                    : e,
            [R, a]
        );
    return _
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !a &&
                      (0, r.jsx)(O.Z, {
                          className: T.nonOwnerNotice,
                          children: S.intl.string(S.t.t56qWF)
                      }),
                  (0, r.jsxs)(s.hjN, {
                      title: S.intl.string(S.t.sYLCY2),
                      disabled: !a,
                      children: [
                          (0, r.jsx)(s.R94, {
                              type: s.R94.Types.DESCRIPTION,
                              className: T.description,
                              disabled: !a,
                              children: S.intl.format(S.t['5mfqpa'], { onCreateTeamHook: Z })
                          }),
                          I
                              ? (0, r.jsx)(w, {
                                    guild: t,
                                    eligibleTeams: C,
                                    isGuildOwner: a
                                })
                              : (0, r.jsx)(P, {
                                    onCreateTeamClick: R,
                                    isGuildOwner: a
                                })
                      ]
                  }),
                  (0, r.jsx)(s.hjN, {
                      title: S.intl.string(S.t['0n7R2d']),
                      className: T.selfDemonetization,
                      children: (0, r.jsx)(y.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
