s.d(t, { Z: () => C }), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
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
    N = s(789662),
    _ = s(981631),
    b = s(388032),
    v = s(907723);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = s[t]),
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
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
function C(e) {
    let { guildPlans: t, overrideGuild: s } = e,
        r = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        [a, l] = i.useMemo(
            () =>
                c()(t)
                    .values()
                    .sortBy((e) => {
                        let t = r.indexOf(e.guildId);
                        return -1 === t ? r.length : t;
                    })
                    .partition((e) => {
                        var t;
                        return (null != (t = e.overrideMode) ? t : e.mode) === N.AR.UseGreyDot;
                    })
                    .value(),
            [t, r]
        ),
        o = i.useCallback(
            (e) => {
                var n;
                return s(e, (null != (n = t[e].overrideMode) ? n : t[e].mode) === N.AR.UseGreyDot ? N.AR.KeepAsIs : N.AR.UseGreyDot);
            },
            [s, t]
        );
    return (0, n.jsxs)('div', {
        className: v.container,
        children: [
            (0, n.jsx)(W, {
                header: b.NW.string(b.t.tGGAdX),
                subheader: b.NW.string(b.t['e+d/vr']),
                guildPlans: l,
                onClick: o
            }),
            (0, n.jsx)(W, {
                header: b.NW.string(b.t.f6pf39),
                subheader: b.NW.string(b.t.izeB6e),
                guildPlans: a,
                onClick: o
            })
        ]
    });
}
function W(e) {
    let { header: t, subheader: s, guildPlans: i, onClick: r } = e;
    return (0, n.jsxs)('div', {
        className: v.column,
        children: [
            (0, n.jsxs)('div', {
                className: v.header,
                children: [
                    (0, n.jsxs)(o.Text, {
                        className: v.__invalid_sectionTitle,
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: [t, ' (', i.length, ')']
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: s
                    })
                ]
            }),
            (0, n.jsx)(o.Ttm, {
                className: v.scroller,
                children: (0, n.jsx)('div', {
                    className: v.guilds,
                    children: i.map((e) =>
                        (0, n.jsx)(
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
    let { plan: s, onClick: i } = e,
        r = (0, d.e7)([h.Z], () => h.Z.getGuild(s.guildId));
    if (null == r) return null;
    let l = (null != (t = s.overrideMode) ? t : s.mode) === N.AR.UseGreyDot;
    function c() {
        g.default.track(
            _.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED,
            p(f({}, (0, m.hH)(s.guildId)), {
                is_selected: !l,
                is_muted: j.ZP.isMuted(s.guildId),
                notification_setting: j.ZP.getMessageNotifications(s.guildId)
            })
        ),
            i(s.guildId);
    }
    return (0, n.jsx)(o.ua7, {
        text: (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: r.name
                }),
                (0, n.jsxs)('div', {
                    className: v.tooltipRow,
                    children: [
                        (0, n.jsx)(o.kBi, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.messagePain ? b.NW.string(b.t['3EQSoK']) : b.NW.string(b.t['CaR/Eh'])
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: v.tooltipRow,
                    children: [
                        (0, n.jsx)(o.iFz, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.visitsALot ? b.NW.string(b.t['6dgvsb']) : b.NW.string(b.t.fgedbG)
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: v.tooltipRow,
                    children: [
                        (0, n.jsx)(o.Dkj, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.muted ? b.NW.string(b.t.rdTrHx) : b.NW.string(b.t.sdFUj4)
                        })
                    ]
                })
            ]
        }),
        'aria-label': s.debugReason,
        tooltipClassName: v.tooltip,
        children: (e) =>
            (0, n.jsxs)(
                o.P3F,
                p(f({}, e), {
                    className: a()(v.guild, l ? v.selected : void 0),
                    onClick: c,
                    children: [
                        (0, n.jsx)(o.owK, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.checkmark,
                            secondaryColor: 'white'
                        }),
                        (0, n.jsx)(x.Z, {
                            'aria-hidden': !0,
                            className: v.guildIcon,
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
