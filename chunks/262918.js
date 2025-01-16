n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    a = n(192379),
    r = n(512722),
    s = n.n(r),
    o = n(902704),
    l = n(481060),
    d = n(935369),
    c = n(367907),
    u = n(707515),
    h = n(528567),
    g = n(873128),
    x = n(647529),
    m = n(986398),
    f = n(981631),
    _ = n(388032),
    b = n(131447);
function w(e) {
    let { guildId: t, leaderboardId: n, ...r } = e,
        w = (0, g.Z)({
            guildId: t,
            leaderboardId: n
        });
    s()(null != w, 'Leaderboard must be loaded before opening the settings modal');
    let j = w.guild_settings,
        [p, v] = a.useState(j.sort_by_statistic_id),
        [S, C] = a.useState(j.sort_desc),
        [I, N] = a.useState(j.show_winner_crown),
        [y, { loading: Z }] = (0, d.Z)(u._);
    a.useEffect(() => {
        c.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, { type: f.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let B = p !== j.sort_by_statistic_id || S !== j.sort_desc || I !== j.show_winner_crown,
        M = async () => {
            await y({
                guildId: t,
                leaderboardId: n,
                sortByStatisticId: p,
                sortDesc: S,
                showWinnerCrown: I
            }),
                r.onClose();
        },
        L = a.useMemo(() => {
            let e = Object.values(w.settings.statistics).filter((e) => e.selectable_for_competition),
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
        }, [w]),
        T = L.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: p,
                sortDesc: S
            })
        );
    return (0, i.jsx)(x.Z, {
        ...r,
        guildId: t,
        title: _.intl.string(_.t.rv9GUV),
        buttons: (0, i.jsx)(l.Button, {
            onClick: M,
            submitting: Z,
            disabled: !B,
            children: _.intl.string(_.t.R3BPHx)
        }),
        children: (0, i.jsxs)(l.ModalContent, {
            className: b.content,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: _.intl.string(_.t.IQO9Fx)
                }),
                (0, i.jsx)(l.Spacer, { size: 8 }),
                (0, i.jsx)(l.SingleSelect, {
                    placeholder: _.intl.string(_.t['g/Rr2d']),
                    value: null == T ? void 0 : T.value,
                    options: L,
                    onChange: (e) => {
                        let { sortByStatisticId: t, sortDesc: n } = e;
                        v(t), C(n);
                    }
                }),
                (0, i.jsx)('div', { className: b.divider }),
                (0, i.jsx)(l.FormTitle, { children: _.intl.string(_.t.HU4EKC) }),
                (0, i.jsx)(l.Spacer, { size: 8 }),
                (0, i.jsx)(l.FormSwitch, {
                    hideBorder: !0,
                    onChange: () => N((e) => !e),
                    value: I,
                    className: b.showWinnerCrownSwitch,
                    children: (0, i.jsxs)('div', {
                        className: b.showWinnerCrownTextContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: _.intl.string(_.t.cH7QEx)
                            }),
                            (0, i.jsx)(m.Z, {
                                className: b.winnerImage,
                                leaderboard: w
                            })
                        ]
                    })
                })
            ]
        })
    });
}
