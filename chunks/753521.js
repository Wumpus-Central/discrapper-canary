n.d(t, { default: () => g }), n(388685);
var i = n(255367),
    s = n(73800),
    a = n(481060),
    r = n(626135),
    l = n(115345),
    c = n(57927),
    o = n(273236),
    d = n(931839),
    m = n(905987),
    x = n(789662),
    h = n(981631),
    u = n(388032),
    j = n(920178);
function g(e) {
    let { onClose: t, transitionState: n, dismissable: c, guildPain: g, myUsage: b } = e,
        [v, f] = s.useState(d.O.Intro),
        { submitted: p, submitting: N, saveSettings: C } = (0, l.vo)(t),
        { guildPlans: y, overrideGuild: w, getDebug: T } = (0, l.F6)(g, b),
        O = s.useRef(null);
    return (
        s.useEffect(() => {
            r.default.track(h.rMx.OPEN_MODAL, { type: "notification_migration_modal" });
        }, []),
        (0, i.jsxs)(a.Y0X, {
            className: j.__invalid_modal,
            transitionState: n,
            "aria-label": u.intl.string(u.t.HcoRu7),
            size: a.CgR.DYNAMIC,
            parentComponent: "NotificationMigrationModal",
            children: [
                (0, i.jsx)(d.Z, {
                    selectedTab: v,
                    onClick: f,
                    submitted: p,
                }),
                v === d.O.Intro
                    ? (0, i.jsx)(o.Z, { ref: O })
                    : v === d.O.Customize
                      ? (0, i.jsx)(_, {
                            guildPlans: y,
                            overrideGuild: w,
                            getDebug: T,
                        })
                      : (0, i.jsx)(m.Z, {
                            count: Object.values(y).filter((e) => {
                                var t;
                                return (null != (t = e.overrideMode) ? t : e.mode) === x.AR.UseGreyDot;
                            }).length,
                        }),
                (0, i.jsxs)(a.mzw, {
                    className: j.buttons,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.__invalid_left,
                            children: [
                                c || (v !== d.O.Tips && v !== d.O.Customize)
                                    ? null
                                    : (0, i.jsx)(a.eee, {
                                          className: j.dismiss,
                                          href: "https://dis.gd/better-muting",
                                          children: (0, i.jsx)(a.Text, {
                                              variant: "text-sm/semibold",
                                              color: "interactive-normal",
                                              children: u.intl.string(u.t.hvVgAQ),
                                          }),
                                      }),
                                c && v === d.O.Intro
                                    ? (0, i.jsx)(a.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: "text-sm/semibold",
                                              color: "interactive-normal",
                                              children: u.intl.string(u.t.WAI6xs),
                                          }),
                                      })
                                    : null,
                                c && v === d.O.Customize
                                    ? (0, i.jsx)(a.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: "text-sm/semibold",
                                              color: "interactive-normal",
                                              children: u.intl.string(u.t["ETE/oK"]),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: j.right,
                            children: [
                                v === d.O.Customize
                                    ? (0, i.jsx)(a.Text, {
                                          className: j.warning,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: u.intl.string(u.t.nlpqxM),
                                      })
                                    : null,
                                v !== d.O.Customize || p
                                    ? null
                                    : (0, i.jsx)(a.zxk, {
                                          icon: a.whL,
                                          onClick: () => f(d.O.Intro),
                                          variant: "secondary",
                                          text: u.intl.string(u.t["13/7kZ"]),
                                      }),
                                v === d.O.Intro
                                    ? (0, i.jsx)(a.zxk, {
                                          icon: a.ZSh,
                                          iconPosition: "end",
                                          onClick: () => {
                                              var e;
                                              (null == (e = O.current) ? void 0 : e.maybeChangeToAfterTab()) &&
                                                  f(d.O.Customize);
                                          },
                                          text: u.intl.string(u.t.uw9zIy),
                                      })
                                    : v === d.O.Customize
                                      ? (0, i.jsx)(a.zxk, {
                                            icon: a.dz2,
                                            iconPosition: "end",
                                            onClick: () => {
                                                f(d.O.Tips), C(y);
                                            },
                                            text: u.intl.string(u.t["1Qm829"]),
                                        })
                                      : (0, i.jsx)(a.zxk, {
                                            variant: "primary",
                                            text: u.intl.string(u.t.cpT0Cg),
                                            loading: N,
                                            onClick: t,
                                        }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function _(e) {
    let { guildPlans: t, overrideGuild: n } = e;
    return (0, i.jsxs)(a.Ttm, {
        className: j.content,
        children: [
            (0, i.jsxs)("div", {
                className: j.header,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: u.intl.string(u.t["zBC2+f"]),
                    }),
                    (0, i.jsx)(a.Text, {
                        className: j.__invalid_subtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: u.intl.string(u.t["zE9e//"]),
                    }),
                ],
            }),
            (0, i.jsx)(c.Z, {
                guildPlans: t,
                overrideGuild: n,
            }),
        ],
    });
}
