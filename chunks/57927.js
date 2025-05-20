n.d(t, { Z: () => C }), n(388685);
var i = n(255367),
    s = n(73800),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    c = n.n(l),
    o = n(442837),
    d = n(481060),
    m = n(367907),
    x = n(565138),
    h = n(430824),
    u = n(771845),
    j = n(9156),
    g = n(626135),
    _ = n(789662),
    b = n(981631),
    v = n(388032),
    f = n(907723);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { guildPlans: t, overrideGuild: n } = e,
        r = (0, o.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        [a, l] = s.useMemo(
            () =>
                c()(t)
                    .values()
                    .sortBy((e) => {
                        let t = r.indexOf(e.guildId);
                        return -1 === t ? r.length : t;
                    })
                    .partition((e) => {
                        var t;
                        return (null != (t = e.overrideMode) ? t : e.mode) === _.AR.UseGreyDot;
                    })
                    .value(),
            [t, r]
        ),
        d = s.useCallback(
            (e) => {
                var i;
                return n(e, (null != (i = t[e].overrideMode) ? i : t[e].mode) === _.AR.UseGreyDot ? _.AR.KeepAsIs : _.AR.UseGreyDot);
            },
            [n, t]
        );
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(y, {
                header: v.intl.string(v.t.tGGAdX),
                subheader: v.intl.string(v.t['e+d/vr']),
                guildPlans: l,
                onClick: d
            }),
            (0, i.jsx)(y, {
                header: v.intl.string(v.t.f6pf39),
                subheader: v.intl.string(v.t.izeB6e),
                guildPlans: a,
                onClick: d
            })
        ]
    });
}
function y(e) {
    let { header: t, subheader: n, guildPlans: s, onClick: r } = e;
    return (0, i.jsxs)('div', {
        className: f.column,
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    (0, i.jsxs)(d.Text, {
                        className: f.__invalid_sectionTitle,
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: [t, ' (', s.length, ')']
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(d.Ttm, {
                className: f.scroller,
                children: (0, i.jsx)('div', {
                    className: f.guilds,
                    children: s.map((e) =>
                        (0, i.jsx)(
                            T,
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
function T(e) {
    var t;
    let { plan: n, onClick: s } = e,
        r = (0, o.e7)([h.Z], () => h.Z.getGuild(n.guildId));
    if (null == r) return null;
    let l = (null != (t = n.overrideMode) ? t : n.mode) === _.AR.UseGreyDot;
    function c() {
        g.default.track(
            b.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED,
            p(N({}, (0, m.hH)(n.guildId)), {
                is_selected: !l,
                is_muted: j.ZP.isMuted(n.guildId),
                notification_setting: j.ZP.getMessageNotifications(n.guildId)
            })
        ),
            s(n.guildId);
    }
    return (0, i.jsx)(d.ua7, {
        text: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: r.name
                }),
                (0, i.jsxs)('div', {
                    className: f.tooltipRow,
                    children: [
                        (0, i.jsx)(d.kBi, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.messagePain ? v.intl.string(v.t['3EQSoK']) : v.intl.string(v.t['CaR/Eh'])
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.tooltipRow,
                    children: [
                        (0, i.jsx)(d.iFz, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.visitsALot ? v.intl.string(v.t['6dgvsb']) : v.intl.string(v.t.fgedbG)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.tooltipRow,
                    children: [
                        (0, i.jsx)(d.Dkj, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.muted ? v.intl.string(v.t.rdTrHx) : v.intl.string(v.t.sdFUj4)
                        })
                    ]
                })
            ]
        }),
        'aria-label': n.debugReason,
        tooltipClassName: f.tooltip,
        children: (e) =>
            (0, i.jsxs)(
                d.P3F,
                p(N({}, e), {
                    className: a()(f.guild, l ? f.selected : void 0),
                    onClick: c,
                    children: [
                        (0, i.jsx)(d.owK, {
                            size: 'xs',
                            color: 'currentColor',
                            className: f.checkmark,
                            secondaryColor: 'white'
                        }),
                        (0, i.jsx)(x.Z, {
                            'aria-hidden': !0,
                            className: f.guildIcon,
                            guild: r,
                            size: x.Z.Sizes.MEDIUM,
                            active: !0,
                            tabIndex: -1
                        })
                    ]
                })
            )
    });
}
