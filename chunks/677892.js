n.d(t, {
    $$: () => v,
    P_: () => C,
    ap: () => y,
    ih: () => N,
    ku: () => O,
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
    f = n(641938),
    m = n(974513),
    b = n(290511),
    p = n(388032),
    h = n(155770);
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
                        className: h.checkmark,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: h.statusText,
                        children: p.intl.string(p.t.rPnzRf),
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
                        className: h.warning,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: h.statusText,
                        children: p.intl.string(p.t["yTa+di"]),
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
                        className: h.danger,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "text-feedback-critical",
                        className: h.statusText,
                        children: p.intl.string(p.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, r.jsxs)("div", {
        className: h.onboardingStepContainer,
        children: [
            (0, r.jsxs)("div", {
                className: h.leftContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: h.iconContainer,
                        children: l,
                    }),
                    (0, r.jsxs)("div", {
                        className: h.onboardingStepText,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: s && "required" === o ? "text-feedback-critical" : "text-default",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: h.rightContainer,
                children: [
                    t,
                    d,
                    (0, r.jsx)("div", {
                        className: h.cta,
                        children: s
                            ? (0, r.jsx)(a.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: c,
                                  text: p.intl.string(p.t.bt75uw),
                              })
                            : (0, r.jsx)(a.Button, {
                                  icon: a.ZSh,
                                  iconPosition: "end",
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: c,
                                  text: p.intl.string(p.t["0GWElc"]),
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
        [r] = (0, o.VF)(e, n);
    return r.length >= b.X;
}
function v(e) {
    let t = j(e),
        n = (0, m.O4)(e);
    return t || n;
}
function O(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length),
        g = i.useMemo(() => new Set(d), [d]),
        [, f] = (0, o.VF)(t, g),
        v = f.length,
        O = j(t),
        y = (0, m.O4)(t),
        C = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        N = C
            ? p.intl.formatToPlainString(p.t.nHwnLK, {
                  numDefaultChannels: v,
                  numFromQuestions: u - v,
              })
            : O
              ? p.intl.formatToPlainString(p.t.HxEwSv, { numDefaultChannels: v })
              : p.intl.formatToPlainString(p.t.vPwmA0, { numChattableChannels: b.X });
    return (0, r.jsx)(x, {
        title: C ? p.intl.string(p.t.YZookV) : p.intl.string(p.t["4GSygh"]),
        description: N,
        icon: (0, r.jsx)(a.VL1, {
            size: "md",
            color: "currentColor",
            className: h.channelIcon,
        }),
        hasStarted: v > 0 || C,
        status: O || y ? (c ? "none" : "good") : "required",
        onEdit: n,
    });
}
function y(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)),
        u = d.length,
        [g, f] = (0, o.dF)(t, d, c),
        m = g.length,
        b = g.length + f.length,
        j = (m / b) * 100,
        v = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        O = u > 0,
        y = "none";
    return (
        O && (j >= 85 && !i ? (y = "good") : j < 85 && (y = "warning")),
        (0, r.jsx)(x, {
            title: v ? p.intl.string(p.t.AGjtFv) : p.intl.string(p.t.dqCzoT),
            description: p.intl.format(p.t.iuNisr, {
                numChannels: m,
                numTotalChannels: b,
                channelsHook: (e, t) =>
                    (0, r.jsx)(
                        "span",
                        {
                            style: { color: j > 85 ? "var(--text-strong)" : "var(--status-warning)" },
                            children: e,
                        },
                        t,
                    ),
            }),
            icon: (0, r.jsx)(a.iFz, {
                size: "md",
                color: "currentColor",
                className: h.channelIcon,
            }),
            hasStarted: O,
            status: y,
            onEdit: n,
        })
    );
}
function C(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        d = (0, l.e7)([g.Z], () => g.Z.getSettings()),
        f = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)),
        m = (0, c.uo)(d),
        b = d.enabled,
        j = i.useCallback(() => {
            (0, u.To)(t, !b);
        }, [t, b]),
        v = !(0, c.av)(d),
        O = "none";
    v && (m && !o ? (O = "good") : m || (O = "required"));
    let y = p.intl.string(p.t.GMOwOD);
    m ? v || (y = p.intl.string(p.t.wHOoyE)) : (y = p.intl.string(p.t.wXFbgZ));
    let C = null;
    return (
        v &&
            f &&
            (C = (0, r.jsx)("div", {
                className: h.inlineSwitch,
                children: (0, r.jsx)(a.rsf, {
                    checked: b,
                    onChange: j,
                    disabled: !m,
                }),
            })),
        (0, r.jsx)(x, {
            title: p.intl.string(p.t.mRHqsj),
            description: y,
            icon: (0, r.jsx)(a.Vy8, {
                size: "md",
                color: "currentColor",
                className: h.channelIcon,
            }),
            hasStarted: v,
            status: O,
            onEdit: n,
            extra: C,
        })
    );
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        { enabled: s } = f.Z.useExperiment(
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
    let g = c ? p.intl.format(p.t["9swnQZ"], { count: o.length }) : p.intl.string(p.t["3d3Cd5"]);
    return (0, r.jsx)(x, {
        title: p.intl.string(p.t.oL60eW),
        description: g,
        icon: (0, r.jsx)(a.xPt, {
            size: "md",
            color: "currentColor",
            className: h.channelIcon,
        }),
        hasStarted: c,
        status: u,
        onEdit: n,
    });
}
