n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(159691),
    s = n(481060),
    o = n(782568),
    c = n(223892),
    d = n(203498),
    u = n(154837),
    g = n(690221),
    m = n(30624),
    p = n(577275),
    f = n(601964),
    h = n(594174),
    b = n(451478),
    x = n(626135),
    j = n(584825),
    v = n(723047),
    _ = n(416867),
    C = n(215124),
    O = n(981631),
    y = n(674563),
    E = n(829857),
    N = n(388032),
    I = n(489838);
function S(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)("div", {
        className: I.selectTeamContainer,
        children: (0, r.jsx)(a.zxk, {
            text: N.intl.string(N.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0,
        }),
    });
}
function T(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [o, c] = i.useState(),
        { enableGuildMonetizationForTeam: u, submitting: g, error: m } = (0, d.Z)(),
        { fetchSubscriptionsSettings: p } = (0, j.JH)(),
        f = (0, v.mY)(),
        h = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id,
                })),
            [n],
        ),
        b = async () => {
            (await u(t, o, y.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (p(t.id),
                (0, _.B)({
                    title: N.intl.string(N.t["AP/2qe"]),
                    body: N.intl.string(N.t.kHMgaK),
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: I.selectTeamContainer,
                children: [
                    (0, r.jsx)(s.q4e, {
                        className: I.teamSelect,
                        options: h,
                        placeholder: N.intl.string(N.t.QXf93A),
                        value: o,
                        isDisabled: 0 === h.length || f || !l,
                        onChange: (e) => c(e),
                        "aria-label": N.intl.string(N.t.QXf93A),
                    }),
                    (0, r.jsx)(a.zxk, {
                        text: N.intl.string(N.t["9HU3ZV"]),
                        onClick: b,
                        loading: g,
                        disabled: null == o || f || !l,
                    }),
                ],
            }),
            null != m &&
                (0, r.jsx)(s.Text, {
                    className: I.error,
                    variant: "text-sm/normal",
                    children: m.getAnyErrorMessage(),
                }),
        ],
    });
}
let P = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        a = (0, f.eM)(t, n),
        d = (0, c.Ob)(t),
        j = (0, l.e7)([b.Z], () => b.Z.isFocused()),
        { teams: v, loading: _ } = (0, p.Z)({ refreshOnDepChange: j }),
        y = i.useMemo(
            () =>
                v.filter((e) => {
                    var t;
                    return (
                        e.payout_account_status !== E.C.BLOCKED &&
                        (0, m.Z)(null != (t = null == n ? void 0 : n.id) ? t : O.lds, e)
                    );
                }),
            [v, n],
        ),
        P = y.length > 0,
        w = i.useCallback(async () => {
            x.default.track(O.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: d,
                has_eligible_team: P,
                guild_id: t.id,
                is_owner: a,
            });
            let e = await (0, u.$)(O.E07.DEVELOPER_PORTAL_TEAMS);
            (0, o.Z)(e);
        }, [t, a, d, P]),
        Z = i.useCallback(
            (e) =>
                a
                    ? (0, r.jsx)(g.Z, {
                          onClick: w,
                          children: e,
                      })
                    : e,
            [w, a],
        );
    return _
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(s.Kqy, {
              gap: 32,
              children: [
                  !a &&
                      (0, r.jsx)("div", {
                          className: I.nonOwnerNotice,
                          children: (0, r.jsx)(s.M14, {
                              type: "warning",
                              children: N.intl.string(N.t.t56qWO),
                          }),
                      }),
                  (0, r.jsx)(s.gNt, {
                      label: N.intl.string(N.t["sYLCY/"]),
                      disabled: !a,
                      description: N.intl.format(N.t["5mfqpW"], { onCreateTeamHook: Z }),
                      children: P
                          ? (0, r.jsx)(T, {
                                guild: t,
                                eligibleTeams: y,
                                isGuildOwner: a,
                            })
                          : (0, r.jsx)(S, {
                                onCreateTeamClick: w,
                                isGuildOwner: a,
                            }),
                  }),
                  (0, r.jsx)(s.gNt, {
                      label: N.intl.string(N.t["0n7R2X"]),
                      children: (0, r.jsx)(C.Z, {
                          guildId: t.id,
                          allPeriods: [],
                      }),
                  }),
              ],
          });
};
