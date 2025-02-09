s.d(t, { Z: () => N }), s(47120);
var i = s(200651),
    n = s(192379),
    a = s(120356),
    r = s.n(a),
    l = s(392711),
    c = s.n(l),
    d = s(442837),
    o = s(481060),
    m = s(367907),
    x = s(565138),
    h = s(430824),
    u = s(771845),
    j = s(9156),
    g = s(626135),
    _ = s(789662),
    v = s(981631),
    b = s(388032),
    f = s(475196);
function N(e) {
    let { guildPlans: t, overrideGuild: s } = e,
        a = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        [r, l] = n.useMemo(
            () =>
                c()(t)
                    .values()
                    .sortBy((e) => {
                        let t = a.indexOf(e.guildId);
                        return -1 === t ? a.length : t;
                    })
                    .partition((e) => {
                        var t;
                        return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === _.AR.UseGreyDot;
                    })
                    .value(),
            [t, a]
        ),
        o = n.useCallback(
            (e) => {
                var i;
                return s(e, (null !== (i = t[e].overrideMode) && void 0 !== i ? i : t[e].mode) === _.AR.UseGreyDot ? _.AR.KeepAsIs : _.AR.UseGreyDot);
            },
            [s, t]
        );
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(p, {
                header: b.intl.string(b.t.tGGAdX),
                subheader: b.intl.string(b.t['e+d/vr']),
                guildPlans: l,
                onClick: o
            }),
            (0, i.jsx)(p, {
                header: b.intl.string(b.t.f6pf39),
                subheader: b.intl.string(b.t.izeB6e),
                guildPlans: r,
                onClick: o
            })
        ]
    });
}
function p(e) {
    let { header: t, subheader: s, guildPlans: n, onClick: a } = e;
    return (0, i.jsxs)('div', {
        className: f.column,
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    (0, i.jsxs)(o.Text, {
                        className: f.__invalid_sectionTitle,
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: [t, ' (', n.length, ')']
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: s
                    })
                ]
            }),
            (0, i.jsx)(o.Ttm, {
                className: f.scroller,
                children: (0, i.jsx)('div', {
                    className: f.guilds,
                    children: n.map((e) =>
                        (0, i.jsx)(
                            C,
                            {
                                plan: e,
                                onClick: a
                            },
                            e.guildId
                        )
                    )
                })
            })
        ]
    });
}
function C(e) {
    var t;
    let { plan: s, onClick: n } = e,
        a = (0, d.e7)([h.Z], () => h.Z.getGuild(s.guildId));
    if (null == a) return null;
    let l = (null !== (t = s.overrideMode) && void 0 !== t ? t : s.mode) === _.AR.UseGreyDot;
    function c() {
        g.default.track(v.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
            ...(0, m.hH)(s.guildId),
            is_selected: !l,
            is_muted: j.ZP.isMuted(s.guildId),
            notification_setting: j.ZP.getMessageNotifications(s.guildId)
        }),
            n(s.guildId);
    }
    return (0, i.jsx)(o.ua7, {
        text: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: a.name
                }),
                (0, i.jsxs)('div', {
                    className: f.tooltipRow,
                    children: [
                        (0, i.jsx)(o.kBi, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.messagePain ? b.intl.string(b.t['3EQSoK']) : b.intl.string(b.t['CaR/Eh'])
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.tooltipRow,
                    children: [
                        (0, i.jsx)(o.iFz, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.visitsALot ? b.intl.string(b.t['6dgvsb']) : b.intl.string(b.t.fgedbG)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.tooltipRow,
                    children: [
                        (0, i.jsx)(o.Dkj, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.muted ? b.intl.string(b.t.rdTrHx) : b.intl.string(b.t.sdFUj4)
                        })
                    ]
                })
            ]
        }),
        'aria-label': s.debugReason,
        tooltipClassName: f.tooltip,
        children: (e) =>
            (0, i.jsxs)(o.P3F, {
                ...e,
                className: r()(f.guild, l ? f.selected : void 0),
                onClick: c,
                children: [
                    (0, i.jsx)(o.owK, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.checkmark,
                        secondaryColor: 'white'
                    }),
                    (0, i.jsx)(x.Z, {
                        'aria-hidden': !0,
                        className: f.guildIcon,
                        guild: a,
                        size: x.Z.Sizes.MEDIUM,
                        active: !0,
                        tabIndex: -1
                    })
                ]
            })
    });
}
