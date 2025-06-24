n.d(t, { Z: () => y }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    c = n.n(l),
    o = n(442837),
    d = n(481060),
    m = n(367907),
    u = n(565138),
    x = n(430824),
    h = n(771845),
    j = n(9156),
    g = n(626135),
    b = n(789662),
    f = n(981631),
    v = n(388032),
    _ = n(907723);
function p(e) {
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
function N(e, t) {
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
function y(e) {
    let { guildPlans: t, overrideGuild: n } = e,
        s = (0, o.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        [a, l] = r.useMemo(
            () =>
                c()(t)
                    .values()
                    .sortBy((e) => {
                        let t = s.indexOf(e.guildId);
                        return -1 === t ? s.length : t;
                    })
                    .partition((e) => {
                        var t;
                        return (null != (t = e.overrideMode) ? t : e.mode) === b.AR.UseGreyDot;
                    })
                    .value(),
            [t, s]
        ),
        d = r.useCallback(
            (e) => {
                var i;
                return n(e, (null != (i = t[e].overrideMode) ? i : t[e].mode) === b.AR.UseGreyDot ? b.AR.KeepAsIs : b.AR.UseGreyDot);
            },
            [n, t]
        );
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)(O, {
                header: v.intl.string(v.t.tGGAdX),
                subheader: v.intl.string(v.t['e+d/vr']),
                guildPlans: l,
                onClick: d
            }),
            (0, i.jsx)(O, {
                header: v.intl.string(v.t.f6pf39),
                subheader: v.intl.string(v.t.izeB6e),
                guildPlans: a,
                onClick: d
            })
        ]
    });
}
function O(e) {
    let { header: t, subheader: n, guildPlans: r, onClick: s } = e;
    return (0, i.jsxs)('div', {
        className: _.column,
        children: [
            (0, i.jsxs)('div', {
                className: _.header,
                children: [
                    (0, i.jsxs)(d.Text, {
                        className: _.__invalid_sectionTitle,
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: [t, ' (', r.length, ')']
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(d.Ttm, {
                className: _.scroller,
                children: (0, i.jsx)('div', {
                    className: _.guilds,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            C,
                            {
                                plan: e,
                                onClick: s
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
    let { plan: n, onClick: r } = e,
        s = (0, o.e7)([x.Z], () => x.Z.getGuild(n.guildId));
    if (null == s) return null;
    let l = (null != (t = n.overrideMode) ? t : n.mode) === b.AR.UseGreyDot;
    function c() {
        g.default.track(
            f.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED,
            N(p({}, (0, m.hH)(n.guildId)), {
                is_selected: !l,
                is_muted: j.ZP.isMuted(n.guildId),
                notification_setting: j.ZP.getMessageNotifications(n.guildId)
            })
        ),
            r(n.guildId);
    }
    return (0, i.jsx)(d.ua7, {
        text: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: s.name
                }),
                (0, i.jsxs)('div', {
                    className: _.tooltipRow,
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
                    className: _.tooltipRow,
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
                    className: _.tooltipRow,
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
        tooltipClassName: _.tooltip,
        children: (e) =>
            (0, i.jsxs)(
                d.P3F,
                N(p({}, e), {
                    className: a()(_.guild, l ? _.selected : void 0),
                    onClick: c,
                    children: [
                        (0, i.jsx)(d.owK, {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.checkmark,
                            secondaryColor: 'white'
                        }),
                        (0, i.jsx)(u.Z, {
                            'aria-hidden': !0,
                            className: _.guildIcon,
                            guild: s,
                            size: u.Z.Sizes.MEDIUM,
                            active: !0,
                            tabIndex: -1
                        })
                    ]
                })
            )
    });
}
