n.d(t, { Z: () => P }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(782568),
    o = n(223892),
    c = n(203498),
    d = n(641806),
    u = n(690221),
    m = n(30624),
    g = n(577275),
    p = n(594174),
    h = n(451478),
    f = n(626135),
    b = n(584825),
    x = n(723047),
    j = n(416867),
    N = n(903773),
    _ = n(215124),
    v = n(326578),
    y = n(981631),
    C = n(674563),
    O = n(829857),
    I = n(388032),
    E = n(738309);
function S(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)('div', {
        className: E.selectTeamContainer,
        children: (0, r.jsx)(a.zxk, {
            disabled: !n,
            onClick: t,
            className: E.enableTicketingButton,
            fullWidth: !0,
            children: I.NW.string(I.t['5k6FfX'])
        })
    });
}
function T(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: s } = e,
        [l, o] = i.useState(),
        { enableGuildMonetizationForTeam: d, submitting: u, error: m } = (0, c.Z)(),
        { fetchSubscriptionsSettings: g } = (0, b.JH)(),
        p = (0, x.mY)(),
        h = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [n]
        ),
        f = async () => {
            (await d(t, l, C.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (g(t.id),
                (0, j.B)({
                    Icon: v.Z,
                    title: I.NW.string(I.t['AP/2qa']),
                    body: I.NW.string(I.t.kHMgaG)
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: E.selectTeamContainer,
                children: [
                    (0, r.jsx)(a.q4e, {
                        className: E.teamSelect,
                        options: h,
                        placeholder: I.NW.string(I.t.QXf93N),
                        value: l,
                        isDisabled: 0 === h.length || p || !s,
                        onChange: (e) => o(e),
                        'aria-label': I.NW.string(I.t.QXf93N)
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: f,
                        className: E.enableTicketingButton,
                        submitting: u,
                        disabled: null == l || p || !s,
                        children: I.NW.string(I.t['9HU3ZW'])
                    })
                ]
            }),
            null != m &&
                (0, r.jsx)(a.Text, {
                    className: E.error,
                    variant: 'text-sm/normal',
                    children: m.getAnyErrorMessage()
                })
        ]
    });
}
let P = (e) => {
    let { guild: t } = e,
        n = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        c = t.isOwner(n),
        b = (0, o.Ob)(t),
        x = (0, s.e7)([h.Z], () => h.Z.isFocused()),
        { teams: j, loading: v } = (0, g.Z)({ refreshOnDepChange: x }),
        C = i.useMemo(
            () =>
                j.filter((e) => {
                    var t;
                    return e.payout_account_status !== O.C.BLOCKED && (0, m.Z)(null != (t = null == n ? void 0 : n.id) ? t : y.lds, e);
                }),
            [j, n]
        ),
        P = C.length > 0,
        w = i.useCallback(async () => {
            f.default.track(y.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: b,
                has_eligible_team: P,
                guild_id: t.id,
                is_owner: c
            });
            let e = await (0, d.$)(y.E07.DEVELOPER_PORTAL_TEAMS);
            (0, l.Z)(e);
        }, [t, c, b, P]),
        R = i.useCallback(
            (e) =>
                c
                    ? (0, r.jsx)(u.Z, {
                          onClick: w,
                          children: e
                      })
                    : e,
            [w, c]
        );
    return v
        ? (0, r.jsx)(a.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !c &&
                      (0, r.jsx)(N.Z, {
                          className: E.nonOwnerNotice,
                          children: I.NW.string(I.t.t56qWF)
                      }),
                  (0, r.jsxs)(a.hjN, {
                      title: I.NW.string(I.t.sYLCY2),
                      disabled: !c,
                      children: [
                          (0, r.jsx)(a.R94, {
                              type: a.R94.Types.DESCRIPTION,
                              className: E.description,
                              disabled: !c,
                              children: I.NW.format(I.t['5mfqpa'], { onCreateTeamHook: R })
                          }),
                          P
                              ? (0, r.jsx)(T, {
                                    guild: t,
                                    eligibleTeams: C,
                                    isGuildOwner: c
                                })
                              : (0, r.jsx)(S, {
                                    onCreateTeamClick: w,
                                    isGuildOwner: c
                                })
                      ]
                  }),
                  (0, r.jsx)(a.hjN, {
                      title: I.NW.string(I.t['0n7R2d']),
                      className: E.selfDemonetization,
                      children: (0, r.jsx)(_.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
