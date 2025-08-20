r.d(t, { default: () => _ }), r(388685), r(539854);
var n = r(951288),
    i = r(647438),
    a = r(512722),
    o = r.n(a),
    s = r(902704),
    l = r(481060),
    d = r(935369),
    c = r(367907),
    u = r(707515),
    g = r(528567),
    f = r(873128),
    x = r(647529),
    h = r(986398),
    m = r(981631),
    b = r(388032),
    p = r(10075);
function _(e) {
    var t,
        r,
        { guildId: a, leaderboardId: _ } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["guildId", "leaderboardId"]);
    let w = (0, f.Z)({
        guildId: a,
        leaderboardId: _,
    });
    o()(null != w, "Leaderboard must be loaded before opening the settings modal");
    let y = w.guild_settings,
        [v, O] = i.useState(y.sort_by_statistic_id),
        [C, I] = i.useState(y.sort_desc),
        [S, N] = i.useState(y.show_winner_crown),
        [L, { loading: Z }] = (0, d.Z)(u._);
    i.useEffect(() => {
        c.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let P = v !== y.sort_by_statistic_id || C !== y.sort_desc || S !== y.show_winner_crown,
        k = async () => {
            await L({
                guildId: a,
                leaderboardId: _,
                sortByStatisticId: v,
                sortDesc: C,
                showWinnerCrown: S,
            }),
                j.onClose();
        },
        B = i.useMemo(() => {
            let e = Object.values(w.settings.statistics).filter((e) => e.selectable_for_competition),
                t = [];
            for (let r of e)
                for (let e of [!0, !1])
                    t.push({
                        value: {
                            sortByStatisticId: r.id,
                            sortDesc: e,
                        },
                        label: (0, g.s)({
                            statisticId: r.id,
                            sortDesc: e,
                            aggregationType: r.aggregation_type,
                        }),
                    });
            return t;
        }, [w]),
        E = B.find((e) =>
            (0, s.Z)(e.value, {
                sortByStatisticId: v,
                sortDesc: C,
            }),
        );
    return (0, n.jsx)(
        x.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, j)),
        (r = r =
            {
                guildId: a,
                title: b.intl.string(b.t.rv9GUV),
                buttons: (0, n.jsx)(l.zxk, {
                    variant: "primary",
                    text: b.intl.string(b.t.R3BPHx),
                    onClick: k,
                    loading: Z,
                    disabled: !P,
                }),
                children: (0, n.jsxs)(l.hzk, {
                    className: p.content,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: b.intl.string(b.t.IQO9Fx),
                        }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.q4e, {
                            placeholder: b.intl.string(b.t["g/Rr2d"]),
                            value: null == E ? void 0 : E.value,
                            options: B,
                            onChange: (e) => {
                                let { sortByStatisticId: t, sortDesc: r } = e;
                                O(t), I(r);
                            },
                        }),
                        (0, n.jsx)("div", { className: p.divider }),
                        (0, n.jsx)(l.vwX, { children: b.intl.string(b.t.HU4EKC) }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.j7V, {
                            hideBorder: !0,
                            onChange: () => N((e) => !e),
                            value: S,
                            className: p.showWinnerCrownSwitch,
                            children: (0, n.jsxs)("div", {
                                className: p.showWinnerCrownTextContainer,
                                children: [
                                    (0, n.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: b.intl.string(b.t.cH7QEx),
                                    }),
                                    (0, n.jsx)(h.Z, {
                                        className: p.winnerImage,
                                        leaderboard: w,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
