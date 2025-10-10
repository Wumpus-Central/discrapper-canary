n.d(t, { Z: () => w }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(159691),
    a = n(481060),
    o = n(782568),
    c = n(223892),
    d = n(203498),
    u = n(154837),
    g = n(690221),
    m = n(30624),
    p = n(577275),
    f = n(601964),
    h = n(594174),
    x = n(451478),
    b = n(626135),
    j = n(584825),
    _ = n(723047),
    v = n(416867),
    C = n(903773),
    O = n(215124),
    y = n(981631),
    N = n(674563),
    E = n(829857),
    I = n(388032),
    S = n(489838);
function T(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)("div", {
        className: S.selectTeamContainer,
        children: (0, r.jsx)(s.zxk, {
            text: I.intl.string(I.t["5k6FfX"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0,
        }),
    });
}
function P(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [o, c] = i.useState(),
        { enableGuildMonetizationForTeam: u, submitting: g, error: m } = (0, d.Z)(),
        { fetchSubscriptionsSettings: p } = (0, j.JH)(),
        f = (0, _.mY)(),
        h = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id,
                })),
            [n],
        ),
        x = async () => {
            (await u(t, o, N.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (p(t.id),
                (0, v.B)({
                    title: I.intl.string(I.t["AP/2qa"]),
                    body: I.intl.string(I.t.kHMgaG),
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.selectTeamContainer,
                children: [
                    (0, r.jsx)(a.q4e, {
                        className: S.teamSelect,
                        options: h,
                        placeholder: I.intl.string(I.t.QXf93N),
                        value: o,
                        isDisabled: 0 === h.length || f || !l,
                        onChange: (e) => c(e),
                        "aria-label": I.intl.string(I.t.QXf93N),
                    }),
                    (0, r.jsx)(s.zxk, {
                        text: I.intl.string(I.t["9HU3ZW"]),
                        onClick: x,
                        loading: g,
                        disabled: null == o || f || !l,
                    }),
                ],
            }),
            null != m &&
                (0, r.jsx)(a.Text, {
                    className: S.error,
                    variant: "text-sm/normal",
                    children: m.getAnyErrorMessage(),
                }),
        ],
    });
}
let w = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        s = (0, f.eM)(t, n),
        d = (0, c.Ob)(t),
        j = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: _, loading: v } = (0, p.Z)({ refreshOnDepChange: j }),
        N = i.useMemo(
            () =>
                _.filter((e) => {
                    var t;
                    return (
                        e.payout_account_status !== E.C.BLOCKED &&
                        (0, m.Z)(null != (t = null == n ? void 0 : n.id) ? t : y.lds, e)
                    );
                }),
            [_, n],
        ),
        w = N.length > 0,
        Z = i.useCallback(async () => {
            b.default.track(y.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: d,
                has_eligible_team: w,
                guild_id: t.id,
                is_owner: s,
            });
            let e = await (0, u.$)(y.E07.DEVELOPER_PORTAL_TEAMS);
            (0, o.Z)(e);
        }, [t, s, d, w]),
        R = i.useCallback(
            (e) =>
                s
                    ? (0, r.jsx)(g.Z, {
                          onClick: Z,
                          children: e,
                      })
                    : e,
            [Z, s],
        );
    return v
        ? (0, r.jsx)(a.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !s &&
                      (0, r.jsx)(C.Z, {
                          className: S.nonOwnerNotice,
                          children: I.intl.string(I.t.t56qWF),
                      }),
                  (0, r.jsxs)(a.hjN, {
                      title: I.intl.string(I.t.sYLCY2),
                      disabled: !s,
                      children: [
                          (0, r.jsx)(a.R94, {
                              type: a.R94.Types.DESCRIPTION,
                              className: S.description,
                              disabled: !s,
                              children: I.intl.format(I.t["5mfqpa"], { onCreateTeamHook: R }),
                          }),
                          w
                              ? (0, r.jsx)(P, {
                                    guild: t,
                                    eligibleTeams: N,
                                    isGuildOwner: s,
                                })
                              : (0, r.jsx)(T, {
                                    onCreateTeamClick: Z,
                                    isGuildOwner: s,
                                }),
                      ],
                  }),
                  (0, r.jsx)(a.hjN, {
                      title: I.intl.string(I.t["0n7R2d"]),
                      className: S.selfDemonetization,
                      children: (0, r.jsx)(O.Z, {
                          guildId: t.id,
                          allPeriods: [],
                      }),
                  }),
              ],
          });
};
