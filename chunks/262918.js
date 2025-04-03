r.d(t, { default: () => p }), r(47120), r(653041);
var n = r(200651),
    i = r(192379),
    s = r(512722),
    a = r.n(s),
    o = r(902704),
    l = r(481060),
    c = r(935369),
    d = r(367907),
    u = r(707515),
    f = r(528567),
    g = r(873128),
    h = r(647529),
    b = r(986398),
    m = r(981631),
    x = r(388032),
    _ = r(308102);
function p(e) {
    var t,
        r,
        { guildId: s, leaderboardId: p } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['guildId', 'leaderboardId']);
    let w = (0, g.Z)({
        guildId: s,
        leaderboardId: p
    });
    a()(null != w, 'Leaderboard must be loaded before opening the settings modal');
    let y = w.guild_settings,
        [v, O] = i.useState(y.sort_by_statistic_id),
        [N, C] = i.useState(y.sort_desc),
        [S, I] = i.useState(y.show_winner_crown),
        [Z, { loading: W }] = (0, c.Z)(u._);
    i.useEffect(() => {
        d.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let k = v !== y.sort_by_statistic_id || N !== y.sort_desc || S !== y.show_winner_crown,
        L = async () => {
            await Z({
                guildId: s,
                leaderboardId: p,
                sortByStatisticId: v,
                sortDesc: N,
                showWinnerCrown: S
            }),
                j.onClose();
        },
        P = i.useMemo(() => {
            let e = Object.values(w.settings.statistics).filter((e) => e.selectable_for_competition),
                t = [];
            for (let r of e)
                for (let e of [!0, !1])
                    t.push({
                        value: {
                            sortByStatisticId: r.id,
                            sortDesc: e
                        },
                        label: (0, f.s)({
                            statisticId: r.id,
                            sortDesc: e,
                            aggregationType: r.aggregation_type
                        })
                    });
            return t;
        }, [w]),
        B = P.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: v,
                sortDesc: N
            })
        );
    return (0, n.jsx)(
        h.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, j)),
        (r = r =
            {
                guildId: s,
                title: x.NW.string(x.t.rv9GUV),
                buttons: (0, n.jsx)(l.zxk, {
                    onClick: L,
                    submitting: W,
                    disabled: !k,
                    children: x.NW.string(x.t.R3BPHx)
                }),
                children: (0, n.jsxs)(l.hzk, {
                    className: _.content,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: x.NW.string(x.t.IQO9Fx)
                        }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.q4e, {
                            placeholder: x.NW.string(x.t['g/Rr2d']),
                            value: null == B ? void 0 : B.value,
                            options: P,
                            onChange: (e) => {
                                let { sortByStatisticId: t, sortDesc: r } = e;
                                O(t), C(r);
                            }
                        }),
                        (0, n.jsx)('div', { className: _.divider }),
                        (0, n.jsx)(l.vwX, { children: x.NW.string(x.t.HU4EKC) }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.j7V, {
                            hideBorder: !0,
                            onChange: () => I((e) => !e),
                            value: S,
                            className: _.showWinnerCrownSwitch,
                            children: (0, n.jsxs)('div', {
                                className: _.showWinnerCrownTextContainer,
                                children: [
                                    (0, n.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        children: x.NW.string(x.t.cH7QEx)
                                    }),
                                    (0, n.jsx)(b.Z, {
                                        className: _.winnerImage,
                                        leaderboard: w
                                    })
                                ]
                            })
                        })
                    ]
                })
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
        t)
    );
}
