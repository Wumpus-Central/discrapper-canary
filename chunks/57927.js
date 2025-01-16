n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    c = n.n(a),
    d = n(442837),
    o = n(481060),
    m = n(367907),
    x = n(565138),
    h = n(430824),
    u = n(771845),
    j = n(9156),
    g = n(626135),
    b = n(789662),
    v = n(981631),
    f = n(388032),
    N = n(802376);
function _(e) {
    let { guildPlans: t, overrideGuild: n } = e,
        r = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        [l, a] = s.useMemo(
            () =>
                c()(t)
                    .values()
                    .sortBy((e) => {
                        let t = r.indexOf(e.guildId);
                        return -1 === t ? r.length : t;
                    })
                    .partition((e) => {
                        var t;
                        return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === b.AR.UseGreyDot;
                    })
                    .value(),
            [t, r]
        ),
        o = s.useCallback(
            (e) => {
                var i;
                return n(e, (null !== (i = t[e].overrideMode) && void 0 !== i ? i : t[e].mode) === b.AR.UseGreyDot ? b.AR.KeepAsIs : b.AR.UseGreyDot);
            },
            [n, t]
        );
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsx)(p, {
                header: f.intl.string(f.t.tGGAdX),
                subheader: f.intl.string(f.t['e+d/vr']),
                guildPlans: a,
                onClick: o
            }),
            (0, i.jsx)(p, {
                header: f.intl.string(f.t.f6pf39),
                subheader: f.intl.string(f.t.izeB6e),
                guildPlans: l,
                onClick: o
            })
        ]
    });
}
function p(e) {
    let { header: t, subheader: n, guildPlans: s, onClick: r } = e;
    return (0, i.jsxs)('div', {
        className: N.column,
        children: [
            (0, i.jsxs)('div', {
                className: N.header,
                children: [
                    (0, i.jsxs)(o.Text, {
                        className: N.__invalid_sectionTitle,
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: [t, ' (', s.length, ')']
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(o.Scroller, {
                className: N.scroller,
                children: (0, i.jsx)('div', {
                    className: N.guilds,
                    children: s.map((e) =>
                        (0, i.jsx)(
                            C,
                            {
                                plan: e,
                                onClick: r
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
    let { plan: n, onClick: s } = e,
        r = (0, d.e7)([h.Z], () => h.Z.getGuild(n.guildId));
    if (null == r) return null;
    let a = (null !== (t = n.overrideMode) && void 0 !== t ? t : n.mode) === b.AR.UseGreyDot;
    function c() {
        g.default.track(v.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
            ...(0, m.hH)(n.guildId),
            is_selected: !a,
            is_muted: j.ZP.isMuted(n.guildId),
            notification_setting: j.ZP.getMessageNotifications(n.guildId)
        }),
            s(n.guildId);
    }
    return (0, i.jsx)(o.Tooltip, {
        text: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: r.name
                }),
                (0, i.jsxs)('div', {
                    className: N.tooltipRow,
                    children: [
                        (0, i.jsx)(o.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.messagePain ? f.intl.string(f.t['3EQSoK']) : f.intl.string(f.t['CaR/Eh'])
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: N.tooltipRow,
                    children: [
                        (0, i.jsx)(o.FriendsIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.visitsALot ? f.intl.string(f.t['6dgvsb']) : f.intl.string(f.t.fgedbG)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: N.tooltipRow,
                    children: [
                        (0, i.jsx)(o.BellIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.muted ? f.intl.string(f.t.rdTrHx) : f.intl.string(f.t.sdFUj4)
                        })
                    ]
                })
            ]
        }),
        'aria-label': n.debugReason,
        tooltipClassName: N.tooltip,
        children: (e) =>
            (0, i.jsxs)(o.Clickable, {
                ...e,
                className: l()(N.guild, a ? N.selected : void 0),
                onClick: c,
                children: [
                    (0, i.jsx)(o.CircleCheckIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: N.checkmark,
                        secondaryColor: 'white'
                    }),
                    (0, i.jsx)(x.Z, {
                        'aria-hidden': !0,
                        className: N.guildIcon,
                        guild: r,
                        size: x.Z.Sizes.MEDIUM,
                        active: !0,
                        tabIndex: -1
                    })
                ]
            })
    });
}
