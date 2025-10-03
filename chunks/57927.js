n.d(t, { Z: () => N }), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    c = n.n(l),
    d = n(442837),
    o = n(28664),
    m = n(481060),
    x = n(367907),
    h = n(565138),
    u = n(430824),
    j = n(771845),
    g = n(9156),
    _ = n(626135),
    b = n(789662),
    f = n(981631),
    v = n(388032),
    p = n(865311);
function N(e) {
    let { guildPlans: t, overrideGuild: n } = e,
        r = (0, d.e7)([j.ZP], () => j.ZP.getFlattenedGuildIds()),
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
                        return (null != (t = e.overrideMode) ? t : e.mode) === b.AR.UseGreyDot;
                    })
                    .value(),
            [t, r],
        ),
        o = s.useCallback(
            (e) => {
                var i;
                return n(
                    e,
                    (null != (i = t[e].overrideMode) ? i : t[e].mode) === b.AR.UseGreyDot
                        ? b.AR.KeepAsIs
                        : b.AR.UseGreyDot,
                );
            },
            [n, t],
        );
    return (0, i.jsxs)("div", {
        className: p.container,
        children: [
            (0, i.jsx)(C, {
                header: v.intl.string(v.t.tGGAdX),
                subheader: v.intl.string(v.t["e+d/vr"]),
                guildPlans: l,
                onClick: o,
            }),
            (0, i.jsx)(C, {
                header: v.intl.string(v.t.f6pf39),
                subheader: v.intl.string(v.t.izeB6e),
                guildPlans: a,
                onClick: o,
            }),
        ],
    });
}
function C(e) {
    let { header: t, subheader: n, guildPlans: s, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: p.column,
        children: [
            (0, i.jsxs)("div", {
                className: p.header,
                children: [
                    (0, i.jsxs)(m.Text, {
                        className: p.__invalid_sectionTitle,
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: [t, " (", s.length, ")"],
                    }),
                    (0, i.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)(m.Ttm, {
                className: p.scroller,
                children: (0, i.jsx)("div", {
                    className: p.guilds,
                    children: s.map((e) =>
                        (0, i.jsx)(
                            y,
                            {
                                plan: e,
                                onClick: r,
                            },
                            e.guildId,
                        ),
                    ),
                }),
            }),
        ],
    });
}
function y(e) {
    var t;
    let { plan: n, onClick: s } = e,
        r = (0, d.e7)([u.Z], () => u.Z.getGuild(n.guildId));
    if (null == r) return null;
    let l = (null != (t = n.overrideMode) ? t : n.mode) === b.AR.UseGreyDot;
    return (0, i.jsx)(o.u, {
        asContainer: !0,
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: r.name,
                }),
                (0, i.jsxs)("div", {
                    className: p.tooltipRow,
                    children: [
                        (0, i.jsx)(m.kBi, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: n.messagePain ? v.intl.string(v.t["3EQSoK"]) : v.intl.string(v.t["CaR/Eh"]),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p.tooltipRow,
                    children: [
                        (0, i.jsx)(m.iFz, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: n.visitsALot ? v.intl.string(v.t["6dgvsb"]) : v.intl.string(v.t.fgedbG),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p.tooltipRow,
                    children: [
                        (0, i.jsx)(m.Dkj, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: n.muted ? v.intl.string(v.t.rdTrHx) : v.intl.string(v.t.sdFUj4),
                        }),
                    ],
                }),
            ],
        }),
        "aria-label": n.debugReason,
        children: (0, i.jsxs)(m.P3F, {
            className: a()(p.guild, l ? p.selected : void 0),
            onClick: function () {
                var e, t;
                _.default.track(
                    f.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED,
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, (0, x.hH)(n.guildId))),
                    (t = t =
                        {
                            is_selected: !l,
                            is_muted: g.ZP.isMuted(n.guildId),
                            notification_setting: g.ZP.getMessageNotifications(n.guildId),
                        }),
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
                    e),
                ),
                    s(n.guildId);
            },
            children: [
                (0, i.jsx)(m.owK, {
                    size: "xs",
                    color: "currentColor",
                    className: p.checkmark,
                    secondaryColor: "white",
                }),
                (0, i.jsx)(h.Z, {
                    "aria-hidden": !0,
                    className: p.guildIcon,
                    guild: r,
                    size: h.Z.Sizes.MEDIUM,
                    active: !0,
                    tabIndex: -1,
                }),
            ],
        }),
    });
}
