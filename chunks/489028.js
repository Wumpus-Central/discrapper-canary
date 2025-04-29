n.d(t, { Z: () => P }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(782568),
    o = n(223892),
    c = n(203498),
    u = n(641806),
    d = n(690221),
    m = n(30624),
    g = n(577275),
    p = n(594174),
    h = n(451478),
    f = n(626135),
    x = n(584825),
    b = n(723047),
    j = n(416867),
    _ = n(903773),
    v = n(215124),
    O = n(326578),
    C = n(981631),
    y = n(674563),
    N = n(829857),
    I = n(388032),
    E = n(738309);
function S(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)('div', {
        className: E.selectTeamContainer,
        children: (0, r.jsx)(s.zxk, {
            disabled: !n,
            onClick: t,
            className: E.enableTicketingButton,
            fullWidth: !0,
            children: I.intl.string(I.t['5k6FfX'])
        })
    });
}
function T(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [a, o] = i.useState(),
        { enableGuildMonetizationForTeam: u, submitting: d, error: m } = (0, c.Z)(),
        { fetchSubscriptionsSettings: g } = (0, x.JH)(),
        p = (0, b.mY)(),
        h = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [n]
        ),
        f = async () => {
            (await u(t, a, y.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (g(t.id),
                (0, j.B)({
                    Icon: O.Z,
                    title: I.intl.string(I.t['AP/2qa']),
                    body: I.intl.string(I.t.kHMgaG)
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: E.selectTeamContainer,
                children: [
                    (0, r.jsx)(s.q4e, {
                        className: E.teamSelect,
                        options: h,
                        placeholder: I.intl.string(I.t.QXf93N),
                        value: a,
                        isDisabled: 0 === h.length || p || !l,
                        onChange: (e) => o(e),
                        'aria-label': I.intl.string(I.t.QXf93N)
                    }),
                    (0, r.jsx)(s.zxk, {
                        onClick: f,
                        className: E.enableTicketingButton,
                        submitting: d,
                        disabled: null == a || p || !l,
                        children: I.intl.string(I.t['9HU3ZW'])
                    })
                ]
            }),
            null != m &&
                (0, r.jsx)(s.Text, {
                    className: E.error,
                    variant: 'text-sm/normal',
                    children: m.getAnyErrorMessage()
                })
        ]
    });
}
let P = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        c = t.isOwner(n),
        x = (0, o.Ob)(t),
        b = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        { teams: j, loading: O } = (0, g.Z)({ refreshOnDepChange: b }),
        y = i.useMemo(
            () =>
                j.filter((e) => {
                    var t;
                    return e.payout_account_status !== N.C.BLOCKED && (0, m.Z)(null != (t = null == n ? void 0 : n.id) ? t : C.lds, e);
                }),
            [j, n]
        ),
        P = y.length > 0,
        w = i.useCallback(async () => {
            f.default.track(C.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: x,
                has_eligible_team: P,
                guild_id: t.id,
                is_owner: c
            });
            let e = await (0, u.$)(C.E07.DEVELOPER_PORTAL_TEAMS);
            (0, a.Z)(e);
        }, [t, c, x, P]),
        R = i.useCallback(
            (e) =>
                c
                    ? (0, r.jsx)(d.Z, {
                          onClick: w,
                          children: e
                      })
                    : e,
            [w, c]
        );
    return O
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !c &&
                      (0, r.jsx)(_.Z, {
                          className: E.nonOwnerNotice,
                          children: I.intl.string(I.t.t56qWF)
                      }),
                  (0, r.jsxs)(s.hjN, {
                      title: I.intl.string(I.t.sYLCY2),
                      disabled: !c,
                      children: [
                          (0, r.jsx)(s.R94, {
                              type: s.R94.Types.DESCRIPTION,
                              className: E.description,
                              disabled: !c,
                              children: I.intl.format(I.t['5mfqpa'], { onCreateTeamHook: R })
                          }),
                          P
                              ? (0, r.jsx)(T, {
                                    guild: t,
                                    eligibleTeams: y,
                                    isGuildOwner: c
                                })
                              : (0, r.jsx)(S, {
                                    onCreateTeamClick: w,
                                    isGuildOwner: c
                                })
                      ]
                  }),
                  (0, r.jsx)(s.hjN, {
                      title: I.intl.string(I.t['0n7R2d']),
                      className: E.selfDemonetization,
                      children: (0, r.jsx)(v.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
