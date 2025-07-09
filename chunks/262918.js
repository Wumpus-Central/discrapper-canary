(r.d(t, { default: () => _ }), r(388685), r(539854));
var n = r(255367),
    i = r(73800),
    a = r(512722),
    s = r.n(a),
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
    p = r(308102);
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
                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
        })(e, ['guildId', 'leaderboardId']);
    let y = (0, g.Z)({
        guildId: a,
        leaderboardId: _
    });
    s()(null != y, 'Leaderboard must be loaded before opening the settings modal');
    let w = y.guild_settings,
        [v, O] = i.useState(w.sort_by_statistic_id),
        [C, S] = i.useState(w.sort_desc),
        [I, N] = i.useState(w.show_winner_crown),
        [Z, { loading: L }] = (0, c.Z)(u._);
    i.useEffect(() => {
        d.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let k = v !== w.sort_by_statistic_id || C !== w.sort_desc || I !== w.show_winner_crown,
        P = async () => {
            (await Z({
                guildId: a,
                leaderboardId: _,
                sortByStatisticId: v,
                sortDesc: C,
                showWinnerCrown: I
            }),
                j.onClose());
        },
        B = i.useMemo(() => {
            let e = Object.values(y.settings.statistics).filter((e) => e.selectable_for_competition),
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
        }, [y]),
        E = B.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: v,
                sortDesc: C
            })
        );
    return (0, n.jsx)(
        h.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({}, j)),
        (r = r =
            {
                guildId: a,
                title: x.intl.string(x.t.rv9GUV),
                buttons: (0, n.jsx)(l.zxk, {
                    variant: 'primary',
                    text: x.intl.string(x.t.R3BPHx),
                    onClick: P,
                    loading: L,
                    disabled: !k
                }),
                children: (0, n.jsxs)(l.hzk, {
                    className: p.content,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: x.intl.string(x.t.IQO9Fx)
                        }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.q4e, {
                            placeholder: x.intl.string(x.t['g/Rr2d']),
                            value: null == E ? void 0 : E.value,
                            options: B,
                            onChange: (e) => {
                                let { sortByStatisticId: t, sortDesc: r } = e;
                                (O(t), S(r));
                            }
                        }),
                        (0, n.jsx)('div', { className: p.divider }),
                        (0, n.jsx)(l.vwX, { children: x.intl.string(x.t.HU4EKC) }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.j7V, {
                            hideBorder: !0,
                            onChange: () => N((e) => !e),
                            value: I,
                            className: p.showWinnerCrownSwitch,
                            children: (0, n.jsxs)('div', {
                                className: p.showWinnerCrownTextContainer,
                                children: [
                                    (0, n.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        children: x.intl.string(x.t.cH7QEx)
                                    }),
                                    (0, n.jsx)(b.Z, {
                                        className: p.winnerImage,
                                        leaderboard: y
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
