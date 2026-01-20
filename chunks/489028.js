n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(159691),
    s = n(481060),
    o = n(782568),
    c = n(223892),
    d = n(203498),
    u = n(154837),
    g = n(690221),
    f = n(30624),
    m = n(577275),
    b = n(601964),
    p = n(594174),
    h = n(451478),
    x = n(626135),
    j = n(584825),
    v = n(723047),
    O = n(416867),
    y = n(215124),
    C = n(981631),
    N = n(674563),
    E = n(829857),
    I = n(388032),
    S = n(291852);
function _(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)("div", {
        className: S.selectTeamContainer,
        children: (0, r.jsx)(a.zxk, {
            text: I.intl.string(I.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0,
        }),
    });
}
function T(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [o, c] = i.useState(),
        { enableGuildMonetizationForTeam: u, submitting: g, error: f } = (0, d.Z)(),
        { fetchSubscriptionsSettings: m } = (0, j.JH)(),
        b = (0, v.mY)(),
        p = i.useMemo(
            () =>
                n.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                })),
            [n],
        ),
        h = async () => {
            (await u(t, o, N.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (m(t.id),
                (0, O.B)({
                    title: I.intl.string(I.t["AP/2qe"]),
                    body: I.intl.string(I.t.kHMgaK),
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.selectTeamContainer,
                children: [
                    (0, r.jsx)(s.PhF, {
                        selectionMode: "single",
                        options: p,
                        placeholder: I.intl.string(I.t.QXf93A),
                        value: o,
                        disabled: 0 === p.length || b || !l,
                        onSelectionChange: c,
                        label: I.intl.string(I.t.QXf93A),
                        hideLabel: !0,
                    }),
                    (0, r.jsx)(a.zxk, {
                        text: I.intl.string(I.t["9HU3ZV"]),
                        onClick: h,
                        loading: g,
                        disabled: null == o || b || !l,
                    }),
                ],
            }),
            null != f &&
                (0, r.jsx)(s.Text, {
                    className: S.error,
                    variant: "text-sm/normal",
                    children: f.getAnyErrorMessage(),
                }),
        ],
    });
}
let P = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        a = (0, b.eM)(t, n),
        d = (0, c.Ob)(t),
        j = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        { teams: v, loading: O } = (0, m.Z)({ refreshOnDepChange: j }),
        N = i.useMemo(
            () =>
                v.filter((e) => {
                    var t;
                    return (
                        e.payout_account_status !== E.C.BLOCKED &&
                        (0, f.Z)(null != (t = null == n ? void 0 : n.id) ? t : C.lds, e)
                    );
                }),
            [v, n],
        ),
        P = N.length > 0,
        w = i.useCallback(async () => {
            x.default.track(C.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: d,
                has_eligible_team: P,
                guild_id: t.id,
                is_owner: a,
            });
            let e = await (0, u.$)(C.E07.DEVELOPER_PORTAL_TEAMS);
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
    return O
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(s.Kqy, {
              gap: 32,
              children: [
                  !a &&
                      (0, r.jsx)("div", {
                          className: S.nonOwnerNotice,
                          children: (0, r.jsx)(s.M14, {
                              type: "warning",
                              children: I.intl.string(I.t.t56qWO),
                          }),
                      }),
                  (0, r.jsx)(s.gNt, {
                      label: I.intl.string(I.t["sYLCY/"]),
                      disabled: !a,
                      description: I.intl.format(I.t["5mfqpW"], { onCreateTeamHook: Z }),
                      children: P
                          ? (0, r.jsx)(T, {
                                guild: t,
                                eligibleTeams: N,
                                isGuildOwner: a,
                            })
                          : (0, r.jsx)(_, {
                                onCreateTeamClick: w,
                                isGuildOwner: a,
                            }),
                  }),
                  (0, r.jsx)(s.gNt, {
                      label: I.intl.string(I.t["0n7R2X"]),
                      children: (0, r.jsx)(y.Z, {
                          guildId: t.id,
                          allPeriods: [],
                      }),
                  }),
              ],
          });
};
