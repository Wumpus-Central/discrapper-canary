n.d(t, { default: () => p }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    o = n(902704),
    l = n(481060),
    c = n(935369),
    d = n(367907),
    u = n(707515),
    f = n(528567),
    g = n(873128),
    h = n(647529),
    b = n(986398),
    m = n(981631),
    x = n(388032),
    _ = n(308102);
function p(e) {
    var t,
        n,
        { guildId: s, leaderboardId: p } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
        [C, S] = i.useState(y.sort_desc),
        [I, N] = i.useState(y.show_winner_crown),
        [Z, { loading: k }] = (0, c.Z)(u._);
    i.useEffect(() => {
        d.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let L = v !== y.sort_by_statistic_id || C !== y.sort_desc || I !== y.show_winner_crown,
        P = async () => {
            await Z({
                guildId: s,
                leaderboardId: p,
                sortByStatisticId: v,
                sortDesc: C,
                showWinnerCrown: I
            }),
                j.onClose();
        },
        B = i.useMemo(() => {
            let e = Object.values(w.settings.statistics).filter((e) => e.selectable_for_competition),
                t = [];
            for (let n of e)
                for (let e of [!0, !1])
                    t.push({
                        value: {
                            sortByStatisticId: n.id,
                            sortDesc: e
                        },
                        label: (0, f.s)({
                            statisticId: n.id,
                            sortDesc: e,
                            aggregationType: n.aggregation_type
                        })
                    });
            return t;
        }, [w]),
        E = B.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: v,
                sortDesc: C
            })
        );
    return (0, r.jsx)(
        h.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, j)),
        (n = n =
            {
                guildId: s,
                title: x.intl.string(x.t.rv9GUV),
                buttons: (0, r.jsx)(l.zxk, {
                    onClick: P,
                    submitting: k,
                    disabled: !L,
                    children: x.intl.string(x.t.R3BPHx)
                }),
                children: (0, r.jsxs)(l.hzk, {
                    className: _.content,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: x.intl.string(x.t.IQO9Fx)
                        }),
                        (0, r.jsx)(l.LZC, { size: 8 }),
                        (0, r.jsx)(l.q4e, {
                            placeholder: x.intl.string(x.t['g/Rr2d']),
                            value: null == E ? void 0 : E.value,
                            options: B,
                            onChange: (e) => {
                                let { sortByStatisticId: t, sortDesc: n } = e;
                                O(t), S(n);
                            }
                        }),
                        (0, r.jsx)('div', { className: _.divider }),
                        (0, r.jsx)(l.vwX, { children: x.intl.string(x.t.HU4EKC) }),
                        (0, r.jsx)(l.LZC, { size: 8 }),
                        (0, r.jsx)(l.j7V, {
                            hideBorder: !0,
                            onChange: () => N((e) => !e),
                            value: I,
                            className: _.showWinnerCrownSwitch,
                            children: (0, r.jsxs)('div', {
                                className: _.showWinnerCrownTextContainer,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        children: x.intl.string(x.t.cH7QEx)
                                    }),
                                    (0, r.jsx)(b.Z, {
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
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
