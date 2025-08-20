n.d(t, { Z: () => C }), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    c = n.n(l),
    d = n(442837),
    o = n(481060),
    m = n(367907),
    x = n(565138),
    h = n(430824),
    u = n(771845),
    j = n(9156),
    g = n(626135),
    _ = n(789662),
    b = n(981631),
    f = n(388032),
    v = n(865311);
function p(e) {
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
function C(e) {
    let { guildPlans: t, overrideGuild: n } = e,
        r = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
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
            [t, r],
        ),
        o = s.useCallback(
            (e) => {
                var i;
                return n(
                    e,
                    (null != (i = t[e].overrideMode) ? i : t[e].mode) === _.AR.UseGreyDot
                        ? _.AR.KeepAsIs
                        : _.AR.UseGreyDot,
                );
            },
            [n, t],
        );
    return (0, i.jsxs)("div", {
        className: v.container,
        children: [
            (0, i.jsx)(y, {
                header: f.intl.string(f.t.tGGAdX),
                subheader: f.intl.string(f.t["e+d/vr"]),
                guildPlans: l,
                onClick: o,
            }),
            (0, i.jsx)(y, {
                header: f.intl.string(f.t.f6pf39),
                subheader: f.intl.string(f.t.izeB6e),
                guildPlans: a,
                onClick: o,
            }),
        ],
    });
}
function y(e) {
    let { header: t, subheader: n, guildPlans: s, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: v.column,
        children: [
            (0, i.jsxs)("div", {
                className: v.header,
                children: [
                    (0, i.jsxs)(o.Text, {
                        className: v.__invalid_sectionTitle,
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: [t, " (", s.length, ")"],
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)(o.Ttm, {
                className: v.scroller,
                children: (0, i.jsx)("div", {
                    className: v.guilds,
                    children: s.map((e) =>
                        (0, i.jsx)(
                            T,
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
function T(e) {
    var t;
    let { plan: n, onClick: s } = e,
        r = (0, d.e7)([h.Z], () => h.Z.getGuild(n.guildId));
    if (null == r) return null;
    let l = (null != (t = n.overrideMode) ? t : n.mode) === _.AR.UseGreyDot;
    function c() {
        g.default.track(
            b.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED,
            N(p({}, (0, m.hH)(n.guildId)), {
                is_selected: !l,
                is_muted: j.ZP.isMuted(n.guildId),
                notification_setting: j.ZP.getMessageNotifications(n.guildId),
            }),
        ),
            s(n.guildId);
    }
    return (0, i.jsx)(o.ua7, {
        text: (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: r.name,
                }),
                (0, i.jsxs)("div", {
                    className: v.tooltipRow,
                    children: [
                        (0, i.jsx)(o.kBi, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: n.messagePain ? f.intl.string(f.t["3EQSoK"]) : f.intl.string(f.t["CaR/Eh"]),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: v.tooltipRow,
                    children: [
                        (0, i.jsx)(o.iFz, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: n.visitsALot ? f.intl.string(f.t["6dgvsb"]) : f.intl.string(f.t.fgedbG),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: v.tooltipRow,
                    children: [
                        (0, i.jsx)(o.Dkj, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: n.muted ? f.intl.string(f.t.rdTrHx) : f.intl.string(f.t.sdFUj4),
                        }),
                    ],
                }),
            ],
        }),
        "aria-label": n.debugReason,
        tooltipClassName: v.tooltip,
        children: (e) =>
            (0, i.jsxs)(
                o.P3F,
                N(p({}, e), {
                    className: a()(v.guild, l ? v.selected : void 0),
                    onClick: c,
                    children: [
                        (0, i.jsx)(o.owK, {
                            size: "xs",
                            color: "currentColor",
                            className: v.checkmark,
                            secondaryColor: "white",
                        }),
                        (0, i.jsx)(x.Z, {
                            "aria-hidden": !0,
                            className: v.guildIcon,
                            guild: r,
                            size: x.Z.Sizes.MEDIUM,
                            active: !0,
                            tabIndex: -1,
                        }),
                    ],
                }),
            ),
    });
}
