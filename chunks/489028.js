(n.d(t, { Z: () => w }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(782568),
    o = n(223892),
    c = n(203498),
    d = n(641806),
    u = n(690221),
    m = n(30624),
    g = n(577275),
    p = n(601964),
    f = n(594174),
    h = n(451478),
    x = n(626135),
    b = n(584825),
    j = n(723047),
    _ = n(416867),
    v = n(903773),
    O = n(215124),
    C = n(326578),
    y = n(981631),
    N = n(674563),
    I = n(829857),
    E = n(388032),
    S = n(738309);
function T(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)('div', {
        className: S.selectTeamContainer,
        children: (0, r.jsx)(s.zxk, {
            disabled: !n,
            onClick: t,
            className: S.enableTicketingButton,
            fullWidth: !0,
            children: E.intl.string(E.t['5k6FfX'])
        })
    });
}
function P(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [a, o] = i.useState(),
        { enableGuildMonetizationForTeam: d, submitting: u, error: m } = (0, c.Z)(),
        { fetchSubscriptionsSettings: g } = (0, b.JH)(),
        p = (0, j.mY)(),
        f = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [n]
        ),
        h = async () => {
            (await d(t, a, N.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (g(t.id),
                (0, _.B)({
                    Icon: C.Z,
                    title: E.intl.string(E.t['AP/2qa']),
                    body: E.intl.string(E.t.kHMgaG)
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: S.selectTeamContainer,
                children: [
                    (0, r.jsx)(s.q4e, {
                        className: S.teamSelect,
                        options: f,
                        placeholder: E.intl.string(E.t.QXf93N),
                        value: a,
                        isDisabled: 0 === f.length || p || !l,
                        onChange: (e) => o(e),
                        'aria-label': E.intl.string(E.t.QXf93N)
                    }),
                    (0, r.jsx)(s.zxk, {
                        onClick: h,
                        className: S.enableTicketingButton,
                        submitting: u,
                        disabled: null == a || p || !l,
                        children: E.intl.string(E.t['9HU3ZW'])
                    })
                ]
            }),
            null != m &&
                (0, r.jsx)(s.Text, {
                    className: S.error,
                    variant: 'text-sm/normal',
                    children: m.getAnyErrorMessage()
                })
        ]
    });
}
let w = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        c = (0, p.eM)(t, n),
        b = (0, o.Ob)(t),
        j = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        { teams: _, loading: C } = (0, g.Z)({ refreshOnDepChange: j }),
        N = i.useMemo(
            () =>
                _.filter((e) => {
                    var t;
                    return e.payout_account_status !== I.C.BLOCKED && (0, m.Z)(null != (t = null == n ? void 0 : n.id) ? t : y.lds, e);
                }),
            [_, n]
        ),
        w = N.length > 0,
        R = i.useCallback(async () => {
            x.default.track(y.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: b,
                has_eligible_team: w,
                guild_id: t.id,
                is_owner: c
            });
            let e = await (0, d.$)(y.E07.DEVELOPER_PORTAL_TEAMS);
            (0, a.Z)(e);
        }, [t, c, b, w]),
        Z = i.useCallback(
            (e) =>
                c
                    ? (0, r.jsx)(u.Z, {
                          onClick: R,
                          children: e
                      })
                    : e,
            [R, c]
        );
    return C
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !c &&
                      (0, r.jsx)(v.Z, {
                          className: S.nonOwnerNotice,
                          children: E.intl.string(E.t.t56qWF)
                      }),
                  (0, r.jsxs)(s.hjN, {
                      title: E.intl.string(E.t.sYLCY2),
                      disabled: !c,
                      children: [
                          (0, r.jsx)(s.R94, {
                              type: s.R94.Types.DESCRIPTION,
                              className: S.description,
                              disabled: !c,
                              children: E.intl.format(E.t['5mfqpa'], { onCreateTeamHook: Z })
                          }),
                          w
                              ? (0, r.jsx)(P, {
                                    guild: t,
                                    eligibleTeams: N,
                                    isGuildOwner: c
                                })
                              : (0, r.jsx)(T, {
                                    onCreateTeamClick: R,
                                    isGuildOwner: c
                                })
                      ]
                  }),
                  (0, r.jsx)(s.hjN, {
                      title: E.intl.string(E.t['0n7R2d']),
                      className: S.selfDemonetization,
                      children: (0, r.jsx)(O.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
