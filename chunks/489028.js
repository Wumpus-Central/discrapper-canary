n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(199849),
    s = n(159691),
    o = n(481060),
    c = n(782568),
    d = n(223892),
    u = n(203498),
    g = n(154837),
    m = n(690221),
    p = n(30624),
    f = n(577275),
    h = n(601964),
    b = n(594174),
    x = n(451478),
    j = n(626135),
    _ = n(584825),
    v = n(723047),
    O = n(416867),
    C = n(215124),
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
            text: I.intl.string(I.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0,
        }),
    });
}
function P(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [c, d] = i.useState(),
        { enableGuildMonetizationForTeam: g, submitting: m, error: p } = (0, u.Z)(),
        { fetchSubscriptionsSettings: f } = (0, _.JH)(),
        h = (0, v.mY)(),
        b = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id,
                })),
            [n],
        ),
        x = async () => {
            (await g(t, c, N.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (f(t.id),
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
                    (0, r.jsx)(a.y6, {
                        className: S.teamSelect,
                        options: b,
                        placeholder: I.intl.string(I.t.QXf93A),
                        value: c,
                        isDisabled: 0 === b.length || h || !l,
                        onChange: (e) => d(e),
                        "aria-label": I.intl.string(I.t.QXf93A),
                    }),
                    (0, r.jsx)(s.zxk, {
                        text: I.intl.string(I.t["9HU3ZV"]),
                        onClick: x,
                        loading: m,
                        disabled: null == c || h || !l,
                    }),
                ],
            }),
            null != p &&
                (0, r.jsx)(o.Text, {
                    className: S.error,
                    variant: "text-sm/normal",
                    children: p.getAnyErrorMessage(),
                }),
        ],
    });
}
let w = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        a = (0, h.eM)(t, n),
        s = (0, d.Ob)(t),
        u = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: _, loading: v } = (0, f.Z)({ refreshOnDepChange: u }),
        O = i.useMemo(
            () =>
                _.filter((e) => {
                    var t;
                    return (
                        e.payout_account_status !== E.C.BLOCKED &&
                        (0, p.Z)(null != (t = null == n ? void 0 : n.id) ? t : y.lds, e)
                    );
                }),
            [_, n],
        ),
        N = O.length > 0,
        w = i.useCallback(async () => {
            j.default.track(y.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: s,
                has_eligible_team: N,
                guild_id: t.id,
                is_owner: a,
            });
            let e = await (0, g.$)(y.E07.DEVELOPER_PORTAL_TEAMS);
            (0, c.Z)(e);
        }, [t, a, s, N]),
        Z = i.useCallback(
            (e) =>
                a
                    ? (0, r.jsx)(m.Z, {
                          onClick: w,
                          children: e,
                      })
                    : e,
            [w, a],
        );
    return v
        ? (0, r.jsx)(o.$jN, {})
        : (0, r.jsxs)(o.Kqy, {
              gap: 32,
              children: [
                  !a &&
                      (0, r.jsx)("div", {
                          className: S.nonOwnerNotice,
                          children: (0, r.jsx)(o.M14, {
                              type: "warning",
                              children: I.intl.string(I.t.t56qWO),
                          }),
                      }),
                  (0, r.jsx)(o.gNt, {
                      label: I.intl.string(I.t["sYLCY/"]),
                      disabled: !a,
                      description: I.intl.format(I.t["5mfqpW"], { onCreateTeamHook: Z }),
                      children: N
                          ? (0, r.jsx)(P, {
                                guild: t,
                                eligibleTeams: O,
                                isGuildOwner: a,
                            })
                          : (0, r.jsx)(T, {
                                onCreateTeamClick: w,
                                isGuildOwner: a,
                            }),
                  }),
                  (0, r.jsx)(o.gNt, {
                      label: I.intl.string(I.t["0n7R2X"]),
                      children: (0, r.jsx)(C.Z, {
                          guildId: t.id,
                          allPeriods: [],
                      }),
                  }),
              ],
          });
};
