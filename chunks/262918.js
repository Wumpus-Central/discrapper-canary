n.d(t, { default: () => j }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    a = n(512722),
    r = n.n(a),
    l = n(902704),
    o = n(481060),
    d = n(935369),
    c = n(367907),
    u = n(707515),
    h = n(528567),
    x = n(873128),
    _ = n(647529),
    g = n(986398),
    m = n(981631),
    f = n(388032),
    w = n(55340);
function j(e) {
    let { guildId: t, leaderboardId: n, ...a } = e,
        j = (0, x.Z)({
            guildId: t,
            leaderboardId: n
        });
    r()(null != j, 'Leaderboard must be loaded before opening the settings modal');
    let b = j.guild_settings,
        [v, C] = s.useState(b.sort_by_statistic_id),
        [p, I] = s.useState(b.sort_desc),
        [N, Z] = s.useState(b.show_winner_crown),
        [y, { loading: S }] = (0, d.Z)(u._);
    s.useEffect(() => {
        c.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let L = v !== b.sort_by_statistic_id || p !== b.sort_desc || N !== b.show_winner_crown,
        k = async () => {
            await y({
                guildId: t,
                leaderboardId: n,
                sortByStatisticId: v,
                sortDesc: p,
                showWinnerCrown: N
            }),
                a.onClose();
        },
        B = s.useMemo(() => {
            let e = Object.values(j.settings.statistics).filter((e) => e.selectable_for_competition),
                t = [];
            for (let n of e)
                for (let e of [!0, !1])
                    t.push({
                        value: {
                            sortByStatisticId: n.id,
                            sortDesc: e
                        },
                        label: (0, h.s)({
                            statisticId: n.id,
                            sortDesc: e,
                            aggregationType: n.aggregation_type
                        })
                    });
            return t;
        }, [j]),
        z = B.find((e) =>
            (0, l.Z)(e.value, {
                sortByStatisticId: v,
                sortDesc: p
            })
        );
    return (0, i.jsx)(_.Z, {
        ...a,
        guildId: t,
        title: f.intl.string(f.t.rv9GUV),
        buttons: (0, i.jsx)(o.zxk, {
            onClick: k,
            submitting: S,
            disabled: !L,
            children: f.intl.string(f.t.R3BPHx)
        }),
        children: (0, i.jsxs)(o.hzk, {
            className: w.content,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: f.intl.string(f.t.IQO9Fx)
                }),
                (0, i.jsx)(o.LZC, { size: 8 }),
                (0, i.jsx)(o.q4e, {
                    placeholder: f.intl.string(f.t['g/Rr2d']),
                    value: null == z ? void 0 : z.value,
                    options: B,
                    onChange: (e) => {
                        let { sortByStatisticId: t, sortDesc: n } = e;
                        C(t), I(n);
                    }
                }),
                (0, i.jsx)('div', { className: w.divider }),
                (0, i.jsx)(o.vwX, { children: f.intl.string(f.t.HU4EKC) }),
                (0, i.jsx)(o.LZC, { size: 8 }),
                (0, i.jsx)(o.j7V, {
                    hideBorder: !0,
                    onChange: () => Z((e) => !e),
                    value: N,
                    className: w.showWinnerCrownSwitch,
                    children: (0, i.jsxs)('div', {
                        className: w.showWinnerCrownTextContainer,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: f.intl.string(f.t.cH7QEx)
                            }),
                            (0, i.jsx)(g.Z, {
                                className: w.winnerImage,
                                leaderboard: j
                            })
                        ]
                    })
                })
            ]
        })
    });
}
