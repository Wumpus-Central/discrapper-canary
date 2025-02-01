n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(782568),
    o = n(223892),
    c = n(203498),
    d = n(641806),
    u = n(690221),
    m = n(30624),
    h = n(577275),
    g = n(594174),
    x = n(451478),
    p = n(626135),
    _ = n(584825),
    C = n(723047),
    f = n(416867),
    v = n(903773),
    N = n(215124),
    j = n(326578),
    I = n(981631),
    E = n(674563),
    b = n(829857),
    T = n(388032),
    S = n(143614);
function R(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, i.jsx)('div', {
        className: S.selectTeamContainer,
        children: (0, i.jsx)(s.zxk, {
            disabled: !n,
            onClick: t,
            className: S.enableTicketingButton,
            fullWidth: !0,
            children: T.intl.string(T.t['5k6FfX'])
        })
    });
}
function Z(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [a, o] = r.useState(),
        { enableGuildMonetizationForTeam: d, submitting: u, error: m } = (0, c.Z)(),
        { fetchSubscriptionsSettings: h } = (0, _.JH)(),
        g = (0, C.mY)(),
        x = r.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [n]
        ),
        p = async () => {
            (await d(t, a, E.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (h(t.id),
                (0, f.B)({
                    Icon: j.Z,
                    title: T.intl.string(T.t['AP/2qa']),
                    body: T.intl.string(T.t.kHMgaG)
                }));
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: S.selectTeamContainer,
                children: [
                    (0, i.jsx)(s.q4e, {
                        className: S.teamSelect,
                        options: x,
                        placeholder: T.intl.string(T.t.QXf93N),
                        value: a,
                        isDisabled: 0 === x.length || g || !l,
                        onChange: (e) => o(e),
                        'aria-label': T.intl.string(T.t.QXf93N)
                    }),
                    (0, i.jsx)(s.zxk, {
                        onClick: p,
                        className: S.enableTicketingButton,
                        submitting: u,
                        disabled: null == a || g || !l,
                        children: T.intl.string(T.t['9HU3ZW'])
                    })
                ]
            }),
            null != m &&
                (0, i.jsx)(s.Text, {
                    className: S.error,
                    variant: 'text-sm/normal',
                    children: m.getAnyErrorMessage()
                })
        ]
    });
}
let y = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        c = t.isOwner(n),
        _ = (0, o.Ob)(t),
        C = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: f, loading: j } = (0, h.Z)({ refreshOnDepChange: C }),
        E = r.useMemo(
            () =>
                f.filter((e) => {
                    var t;
                    return e.payout_account_status !== b.C.BLOCKED && (0, m.Z)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : I.lds, e);
                }),
            [f, n]
        ),
        y = E.length > 0,
        A = r.useCallback(async () => {
            p.default.track(I.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: _,
                has_eligible_team: y,
                guild_id: t.id,
                is_owner: c
            });
            let e = await (0, d.$)(I.E07.DEVELOPER_PORTAL_TEAMS);
            (0, a.Z)(e);
        }, [t, c, _, y]),
        L = r.useCallback(
            (e) =>
                c
                    ? (0, i.jsx)(u.Z, {
                          onClick: A,
                          children: e
                      })
                    : e,
            [A, c]
        );
    return j
        ? (0, i.jsx)(s.$jN, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !c &&
                      (0, i.jsx)(v.Z, {
                          className: S.nonOwnerNotice,
                          children: T.intl.string(T.t.t56qWF)
                      }),
                  (0, i.jsxs)(s.hjN, {
                      title: T.intl.string(T.t.sYLCY2),
                      disabled: !c,
                      children: [
                          (0, i.jsx)(s.R94, {
                              type: s.R94.Types.DESCRIPTION,
                              className: S.description,
                              disabled: !c,
                              children: T.intl.format(T.t['5mfqpa'], { onCreateTeamHook: L })
                          }),
                          y
                              ? (0, i.jsx)(Z, {
                                    guild: t,
                                    eligibleTeams: E,
                                    isGuildOwner: c
                                })
                              : (0, i.jsx)(R, {
                                    onCreateTeamClick: A,
                                    isGuildOwner: c
                                })
                      ]
                  }),
                  (0, i.jsx)(s.hjN, {
                      title: T.intl.string(T.t['0n7R2d']),
                      className: S.selfDemonetization,
                      children: (0, i.jsx)(N.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
