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
    f = n(690221),
    m = n(30624),
    b = n(577275),
    p = n(601964),
    h = n(594174),
    x = n(451478),
    j = n(626135),
    v = n(584825),
    O = n(723047),
    C = n(416867),
    y = n(215124),
    N = n(981631),
    E = n(674563),
    I = n(829857),
    S = n(388032),
    _ = n(291852);
function T(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)("div", {
        className: _.selectTeamContainer,
        children: (0, r.jsx)(s.zxk, {
            text: S.intl.string(S.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0,
        }),
    });
}
function P(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [c, d] = i.useState(),
        { enableGuildMonetizationForTeam: g, submitting: f, error: m } = (0, u.Z)(),
        { fetchSubscriptionsSettings: b } = (0, v.JH)(),
        p = (0, O.mY)(),
        h = i.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id,
                })),
            [n],
        ),
        x = async () => {
            (await g(t, c, E.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (b(t.id),
                (0, C.B)({
                    title: S.intl.string(S.t["AP/2qe"]),
                    body: S.intl.string(S.t.kHMgaK),
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: _.selectTeamContainer,
                children: [
                    (0, r.jsx)(a.y6, {
                        className: _.teamSelect,
                        options: h,
                        placeholder: S.intl.string(S.t.QXf93A),
                        value: c,
                        isDisabled: 0 === h.length || p || !l,
                        onChange: (e) => d(e),
                        "aria-label": S.intl.string(S.t.QXf93A),
                    }),
                    (0, r.jsx)(s.zxk, {
                        text: S.intl.string(S.t["9HU3ZV"]),
                        onClick: x,
                        loading: f,
                        disabled: null == c || p || !l,
                    }),
                ],
            }),
            null != m &&
                (0, r.jsx)(o.Text, {
                    className: _.error,
                    variant: "text-sm/normal",
                    children: m.getAnyErrorMessage(),
                }),
        ],
    });
}
let w = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        a = (0, p.eM)(t, n),
        s = (0, d.Ob)(t),
        u = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: v, loading: O } = (0, b.Z)({ refreshOnDepChange: u }),
        C = i.useMemo(
            () =>
                v.filter((e) => {
                    var t;
                    return (
                        e.payout_account_status !== I.C.BLOCKED &&
                        (0, m.Z)(null != (t = null == n ? void 0 : n.id) ? t : N.lds, e)
                    );
                }),
            [v, n],
        ),
        E = C.length > 0,
        w = i.useCallback(async () => {
            j.default.track(N.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: s,
                has_eligible_team: E,
                guild_id: t.id,
                is_owner: a,
            });
            let e = await (0, g.$)(N.E07.DEVELOPER_PORTAL_TEAMS);
            (0, c.Z)(e);
        }, [t, a, s, E]),
        Z = i.useCallback(
            (e) =>
                a
                    ? (0, r.jsx)(f.Z, {
                          onClick: w,
                          children: e,
                      })
                    : e,
            [w, a],
        );
    return O
        ? (0, r.jsx)(o.$jN, {})
        : (0, r.jsxs)(o.Kqy, {
              gap: 32,
              children: [
                  !a &&
                      (0, r.jsx)("div", {
                          className: _.nonOwnerNotice,
                          children: (0, r.jsx)(o.M14, {
                              type: "warning",
                              children: S.intl.string(S.t.t56qWO),
                          }),
                      }),
                  (0, r.jsx)(o.gNt, {
                      label: S.intl.string(S.t["sYLCY/"]),
                      disabled: !a,
                      description: S.intl.format(S.t["5mfqpW"], { onCreateTeamHook: Z }),
                      children: E
                          ? (0, r.jsx)(P, {
                                guild: t,
                                eligibleTeams: C,
                                isGuildOwner: a,
                            })
                          : (0, r.jsx)(T, {
                                onCreateTeamClick: w,
                                isGuildOwner: a,
                            }),
                  }),
                  (0, r.jsx)(o.gNt, {
                      label: S.intl.string(S.t["0n7R2X"]),
                      children: (0, r.jsx)(y.Z, {
                          guildId: t.id,
                          allPeriods: [],
                      }),
                  }),
              ],
          });
};
