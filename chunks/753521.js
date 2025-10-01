n.d(t, { default: () => _ }), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(793030),
    a = n(481060),
    l = n(626135),
    c = n(115345),
    d = n(57927),
    o = n(273236),
    m = n(931839),
    x = n(905987),
    h = n(789662),
    u = n(981631),
    j = n(388032),
    g = n(920178);
function _(e) {
    let { onClose: t, transitionState: n, dismissable: d, guildPain: _, myUsage: f } = e,
        [v, p] = s.useState(m.O.Intro),
        { submitted: N, submitting: C, saveSettings: y } = (0, c.vo)(t),
        { guildPlans: T, overrideGuild: w, getDebug: O } = (0, c.F6)(_, f),
        I = s.useRef(null);
    s.useEffect(() => {
        l.default.track(u.rMx.OPEN_MODAL, { type: "notification_migration_modal" });
    }, []);
    let k = (0, i.jsxs)(i.Fragment, {
            children: [
                d || (v !== m.O.Tips && v !== m.O.Customize)
                    ? null
                    : (0, i.jsx)(a.eee, {
                          className: g.dismiss,
                          href: "https://dis.gd/better-muting",
                          children: (0, i.jsx)(a.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: j.intl.string(j.t.hvVgAQ),
                          }),
                      }),
                d && v === m.O.Intro
                    ? (0, i.jsx)(a.P3F, {
                          className: g.dismiss,
                          onClick: t,
                          children: (0, i.jsx)(a.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: j.intl.string(j.t.WAI6xs),
                          }),
                      })
                    : null,
                d && v === m.O.Customize
                    ? (0, i.jsx)(a.P3F, {
                          className: g.dismiss,
                          onClick: t,
                          children: (0, i.jsx)(a.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: j.intl.string(j.t["ETE/oK"]),
                          }),
                      })
                    : null,
            ],
        }),
        M = (function (e) {
            let {
                tab: t,
                submitted: n,
                setTab: i,
                saveSettings: s,
                guildPlans: r,
                maybeChangeToAfterTabRef: l,
                onClose: c,
                submitting: d,
            } = e;
            return t === m.O.Intro
                ? [
                      {
                          icon: a.ZSh,
                          iconPosition: "end",
                          text: j.intl.string(j.t.uw9zIy),
                          onClick: () => {
                              var e;
                              (null == (e = l.current) ? void 0 : e.maybeChangeToAfterTab()) && i(m.O.Customize);
                          },
                      },
                  ]
                : t === m.O.Customize
                  ? [
                        ...(n
                            ? []
                            : [
                                  {
                                      icon: a.whL,
                                      variant: "secondary",
                                      text: j.intl.string(j.t["13/7kZ"]),
                                      onClick: () => i(m.O.Intro),
                                  },
                              ]),
                        {
                            icon: a.dz2,
                            iconPosition: "end",
                            text: j.intl.string(j.t["1Qm829"]),
                            onClick: () => {
                                i(m.O.Tips), s(r);
                            },
                        },
                    ]
                  : [
                        {
                            variant: "primary",
                            text: j.intl.string(j.t.cpT0Cg),
                            loading: d,
                            onClick: c,
                        },
                    ];
        })({
            tab: v,
            setTab: p,
            submitted: N,
            submitting: C,
            onClose: t,
            saveSettings: y,
            guildPlans: T,
            maybeChangeToAfterTabRef: I,
        });
    return (0, i.jsxs)(r.IX, {
        transitionState: n,
        onClose: t,
        size: "xl",
        children: [
            (0, i.jsxs)(r.fef, {
                children: [
                    (0, i.jsx)(m.Z, {
                        selectedTab: v,
                        onClick: p,
                        submitted: N,
                    }),
                    (0, i.jsxs)(a.Kqy, {
                        style: {
                            margin: "auto",
                            width: "fit-content",
                        },
                        children: [
                            v === m.O.Intro
                                ? (0, i.jsx)(o.Z, { ref: I })
                                : v === m.O.Customize
                                  ? (0, i.jsx)(b, {
                                        guildPlans: T,
                                        overrideGuild: w,
                                        getDebug: O,
                                    })
                                  : (0, i.jsx)(x.Z, {
                                        count: Object.values(T).filter((e) => {
                                            var t;
                                            return (null != (t = e.overrideMode) ? t : e.mode) === h.AR.UseGreyDot;
                                        }).length,
                                    }),
                            v === m.O.Customize
                                ? (0, i.jsx)(a.Text, {
                                      className: g.warning,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: j.intl.string(j.t.nlpqxM),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(r.Go$, {
                leading: k,
                actions: M,
            }),
        ],
    });
}
function b(e) {
    let { guildPlans: t, overrideGuild: n } = e;
    return (0, i.jsxs)(a.Ttm, {
        className: g.content,
        children: [
            (0, i.jsxs)("div", {
                className: g.header,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: j.intl.string(j.t["zBC2+f"]),
                    }),
                    (0, i.jsx)(a.Text, {
                        className: g.__invalid_subtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: j.intl.string(j.t["zE9e//"]),
                    }),
                ],
            }),
            (0, i.jsx)(d.Z, {
                guildPlans: t,
                overrideGuild: n,
            }),
        ],
    });
}
