n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(782568),
    o = n(223892),
    c = n(203498),
    d = n(641806),
    u = n(690221),
    m = n(30624),
    h = n(577275),
    g = n(594174),
    x = n(451478),
    p = n(626135),
    f = n(584825),
    C = n(723047),
    v = n(416867),
    _ = n(903773),
    I = n(215124),
    N = n(326578),
    T = n(981631),
    j = n(674563),
    b = n(829857),
    S = n(388032),
    E = n(143614);
function R(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, i.jsx)('div', {
        className: E.selectTeamContainer,
        children: (0, i.jsx)(a.Button, {
            disabled: !n,
            onClick: t,
            className: E.enableTicketingButton,
            fullWidth: !0,
            children: S.intl.string(S.t['5k6FfX'])
        })
    });
}
function y(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [s, o] = r.useState(),
        { enableGuildMonetizationForTeam: d, submitting: u, error: m } = (0, c.Z)(),
        { fetchSubscriptionsSettings: h } = (0, f.JH)(),
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
            (await d(t, s, j.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (h(t.id),
                (0, v.B)({
                    Icon: N.Z,
                    title: S.intl.string(S.t['AP/2qa']),
                    body: S.intl.string(S.t.kHMgaG)
                }));
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.selectTeamContainer,
                children: [
                    (0, i.jsx)(a.SingleSelect, {
                        className: E.teamSelect,
                        options: x,
                        placeholder: S.intl.string(S.t.QXf93N),
                        value: s,
                        isDisabled: 0 === x.length || g || !l,
                        onChange: (e) => o(e),
                        'aria-label': S.intl.string(S.t.QXf93N)
                    }),
                    (0, i.jsx)(a.Button, {
                        onClick: p,
                        className: E.enableTicketingButton,
                        submitting: u,
                        disabled: null == s || g || !l,
                        children: S.intl.string(S.t['9HU3ZW'])
                    })
                ]
            }),
            null != m &&
                (0, i.jsx)(a.Text, {
                    className: E.error,
                    variant: 'text-sm/normal',
                    children: m.getAnyErrorMessage()
                })
        ]
    });
}
t.Z = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        c = t.isOwner(n),
        f = (0, o.Ob)(t),
        C = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: v, loading: N } = (0, h.Z)({ refreshOnDepChange: C }),
        j = r.useMemo(
            () =>
                v.filter((e) => {
                    var t;
                    return e.payout_account_status !== b.C.BLOCKED && (0, m.Z)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : T.lds, e);
                }),
            [v, n]
        ),
        A = j.length > 0,
        Z = r.useCallback(async () => {
            p.default.track(T.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: f,
                has_eligible_team: A,
                guild_id: t.id,
                is_owner: c
            });
            let e = await (0, d.$)(T.E07.DEVELOPER_PORTAL_TEAMS);
            (0, s.Z)(e);
        }, [t, c, f, A]),
        L = r.useCallback(
            (e) =>
                c
                    ? (0, i.jsx)(u.Z, {
                          onClick: Z,
                          children: e
                      })
                    : e,
            [Z, c]
        );
    return N
        ? (0, i.jsx)(a.Spinner, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !c &&
                      (0, i.jsx)(_.Z, {
                          className: E.nonOwnerNotice,
                          children: S.intl.string(S.t.t56qWF)
                      }),
                  (0, i.jsxs)(a.FormSection, {
                      title: S.intl.string(S.t.sYLCY2),
                      disabled: !c,
                      children: [
                          (0, i.jsx)(a.FormText, {
                              type: a.FormText.Types.DESCRIPTION,
                              className: E.description,
                              disabled: !c,
                              children: S.intl.format(S.t['5mfqpa'], { onCreateTeamHook: L })
                          }),
                          A
                              ? (0, i.jsx)(y, {
                                    guild: t,
                                    eligibleTeams: j,
                                    isGuildOwner: c
                                })
                              : (0, i.jsx)(R, {
                                    onCreateTeamClick: Z,
                                    isGuildOwner: c
                                })
                      ]
                  }),
                  (0, i.jsx)(a.FormSection, {
                      title: S.intl.string(S.t['0n7R2d']),
                      className: E.selfDemonetization,
                      children: (0, i.jsx)(I.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
