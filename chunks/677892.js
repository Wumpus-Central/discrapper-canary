n.d(t, {
    $$: () => _,
    P_: () => C,
    ap: () => O,
    ih: () => y,
    ku: () => v,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(734893),
    d = n(926958),
    u = n(8426),
    g = n(969632),
    m = n(641938),
    p = n(974513),
    f = n(290511),
    h = n(388032),
    b = n(54028);
function x(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: s, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case "good":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.dz2, {
                        size: "xs",
                        color: "currentColor",
                        className: b.checkmark,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: b.statusText,
                        children: h.intl.string(h.t.rPnzRf),
                    }),
                ],
            });
            break;
        case "warning":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Mgn, {
                        size: "xs",
                        color: "currentColor",
                        className: b.warning,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: b.statusText,
                        children: h.intl.string(h.t["yTa+di"]),
                    }),
                ],
            });
            break;
        case "required":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Mgn, {
                        size: "xs",
                        color: "currentColor",
                        className: b.danger,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-danger",
                        className: b.statusText,
                        children: h.intl.string(h.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, r.jsxs)("div", {
        className: b.onboardingStepContainer,
        children: [
            (0, r.jsxs)("div", {
                className: b.leftContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: b.iconContainer,
                        children: l,
                    }),
                    (0, r.jsxs)("div", {
                        className: b.onboardingStepText,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: s && "required" === o ? "status-danger" : "text-default",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: b.rightContainer,
                children: [
                    t,
                    d,
                    (0, r.jsx)("div", {
                        className: b.cta,
                        children: s
                            ? (0, r.jsx)(a.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: c,
                                  text: h.intl.string(h.t.bt75uw),
                              })
                            : (0, r.jsx)(a.Button, {
                                  icon: a.ZSh,
                                  iconPosition: "end",
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: c,
                                  text: h.intl.string(h.t["0GWElc"]),
                              }),
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, a] = (0, o.VF)(e, n);
    return a.length >= f.md && r.length >= f.X;
}
function _(e) {
    let t = j(e),
        n = (0, p.O4)(e);
    return t || n;
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length),
        g = i.useMemo(() => new Set(d), [d]),
        [, m] = (0, o.VF)(t, g),
        _ = m.length,
        v = j(t),
        O = (0, p.O4)(t),
        C = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        y = C
            ? h.intl.formatToPlainString(h.t.nHwnLK, {
                  numDefaultChannels: _,
                  numFromQuestions: u - _,
              })
            : v
              ? h.intl.formatToPlainString(h.t.HxEwSv, { numDefaultChannels: _ })
              : h.intl.formatToPlainString(h.t.ey3uVZ, {
                    numDefaultChannels: f.md,
                    numChattableChannels: f.X,
                });
    return (0, r.jsx)(x, {
        title: C ? h.intl.string(h.t.YZookV) : h.intl.string(h.t["4GSygh"]),
        description: y,
        icon: (0, r.jsx)(a.VL1, {
            size: "md",
            color: "currentColor",
            className: b.channelIcon,
        }),
        hasStarted: _ > 0 || C,
        status: v || O ? (c ? "none" : "good") : "required",
        onEdit: n,
    });
}
function O(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)),
        u = d.length,
        [g, m] = (0, o.dF)(t, d, c),
        p = g.length,
        f = g.length + m.length,
        j = (p / f) * 100,
        _ = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        v = u > 0,
        O = "none";
    return (
        v && (j >= 85 && !i ? (O = "good") : j < 85 && (O = "warning")),
        (0, r.jsx)(x, {
            title: _ ? h.intl.string(h.t.AGjtFv) : h.intl.string(h.t.dqCzoT),
            description: h.intl.format(h.t.iuNisr, {
                numChannels: p,
                numTotalChannels: f,
                channelsHook: (e, t) =>
                    (0, r.jsx)(
                        "span",
                        {
                            style: { color: j > 85 ? "var(--header-primary)" : "var(--status-warning)" },
                            children: e,
                        },
                        t,
                    ),
            }),
            icon: (0, r.jsx)(a.iFz, {
                size: "md",
                color: "currentColor",
                className: b.channelIcon,
            }),
            hasStarted: v,
            status: O,
            onEdit: n,
        })
    );
}
function C(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        d = (0, l.e7)([g.Z], () => g.Z.getSettings()),
        m = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)),
        p = (0, c.uo)(d),
        f = d.enabled,
        j = i.useCallback(() => {
            (0, u.To)(t, !f);
        }, [t, f]),
        _ = !(0, c.av)(d),
        v = "none";
    _ && (p && !o ? (v = "good") : p || (v = "required"));
    let O = h.intl.string(h.t.GMOwOD);
    p ? _ || (O = h.intl.string(h.t.wHOoyE)) : (O = h.intl.string(h.t.wXFbgZ));
    let C = null;
    return (
        _ &&
            m &&
            (C = (0, r.jsx)("div", {
                className: b.inlineSwitch,
                children: (0, r.jsx)(a.rsf, {
                    checked: f,
                    onChange: j,
                    disabled: !p,
                }),
            })),
        (0, r.jsx)(x, {
            title: h.intl.string(h.t.mRHqsj),
            description: O,
            icon: (0, r.jsx)(a.Vy8, {
                size: "md",
                color: "currentColor",
                className: b.channelIcon,
            }),
            hasStarted: _,
            status: v,
            onEdit: n,
            extra: C,
        })
    );
}
function y(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        { enabled: s } = m.Z.useExperiment(
            {
                guildId: t,
                location: "guild_settings",
            },
            { autoTrackExposure: !0 },
        ),
        o = (0, l.Wu)([d.Z], () => d.Z.getEditedConnections());
    if (!s) return null;
    let c = o.length > 0,
        u = "none";
    c && !i && (u = "good");
    let g = c ? h.intl.format(h.t["9swnQZ"], { count: o.length }) : h.intl.string(h.t["3d3Cd5"]);
    return (0, r.jsx)(x, {
        title: h.intl.string(h.t.oL60eW),
        description: g,
        icon: (0, r.jsx)(a.xPt, {
            size: "md",
            color: "currentColor",
            className: b.channelIcon,
        }),
        hasStarted: c,
        status: u,
        onEdit: n,
    });
}
