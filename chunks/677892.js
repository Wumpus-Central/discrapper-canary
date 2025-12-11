n.d(t, {
    $$: () => v,
    P_: () => y,
    ap: () => C,
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
    m = n(641938),
    f = n(974513),
    p = n(290511),
    b = n(388032),
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
                        children: b.intl.string(b.t.rPnzRf),
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
                        children: b.intl.string(b.t["yTa+di"]),
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
                        color: "status-danger",
                        className: h.statusText,
                        children: b.intl.string(b.t.EkokLy),
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
                                color: s && "required" === o ? "status-danger" : "text-default",
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
                                  text: b.intl.string(b.t.bt75uw),
                              })
                            : (0, r.jsx)(a.Button, {
                                  icon: a.ZSh,
                                  iconPosition: "end",
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: c,
                                  text: b.intl.string(b.t["0GWElc"]),
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
    return a.length >= p.md && r.length >= p.X;
}
function v(e) {
    let t = j(e),
        n = (0, f.O4)(e);
    return t || n;
}
function O(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length),
        g = i.useMemo(() => new Set(d), [d]),
        [, m] = (0, o.VF)(t, g),
        v = m.length,
        O = j(t),
        C = (0, f.O4)(t),
        y = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        N = y
            ? b.intl.formatToPlainString(b.t.nHwnLK, {
                  numDefaultChannels: v,
                  numFromQuestions: u - v,
              })
            : O
              ? b.intl.formatToPlainString(b.t.HxEwSv, { numDefaultChannels: v })
              : b.intl.formatToPlainString(b.t.ey3uVZ, {
                    numDefaultChannels: p.md,
                    numChattableChannels: p.X,
                });
    return (0, r.jsx)(x, {
        title: y ? b.intl.string(b.t.YZookV) : b.intl.string(b.t["4GSygh"]),
        description: N,
        icon: (0, r.jsx)(a.VL1, {
            size: "md",
            color: "currentColor",
            className: h.channelIcon,
        }),
        hasStarted: v > 0 || y,
        status: O || C ? (c ? "none" : "good") : "required",
        onEdit: n,
    });
}
function C(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)),
        u = d.length,
        [g, m] = (0, o.dF)(t, d, c),
        f = g.length,
        p = g.length + m.length,
        j = (f / p) * 100,
        v = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        O = u > 0,
        C = "none";
    return (
        O && (j >= 85 && !i ? (C = "good") : j < 85 && (C = "warning")),
        (0, r.jsx)(x, {
            title: v ? b.intl.string(b.t.AGjtFv) : b.intl.string(b.t.dqCzoT),
            description: b.intl.format(b.t.iuNisr, {
                numChannels: f,
                numTotalChannels: p,
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
                className: h.channelIcon,
            }),
            hasStarted: O,
            status: C,
            onEdit: n,
        })
    );
}
function y(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        d = (0, l.e7)([g.Z], () => g.Z.getSettings()),
        m = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)),
        f = (0, c.uo)(d),
        p = d.enabled,
        j = i.useCallback(() => {
            (0, u.To)(t, !p);
        }, [t, p]),
        v = !(0, c.av)(d),
        O = "none";
    v && (f && !o ? (O = "good") : f || (O = "required"));
    let C = b.intl.string(b.t.GMOwOD);
    f ? v || (C = b.intl.string(b.t.wHOoyE)) : (C = b.intl.string(b.t.wXFbgZ));
    let y = null;
    return (
        v &&
            m &&
            (y = (0, r.jsx)("div", {
                className: h.inlineSwitch,
                children: (0, r.jsx)(a.rsf, {
                    checked: p,
                    onChange: j,
                    disabled: !f,
                }),
            })),
        (0, r.jsx)(x, {
            title: b.intl.string(b.t.mRHqsj),
            description: C,
            icon: (0, r.jsx)(a.Vy8, {
                size: "md",
                color: "currentColor",
                className: h.channelIcon,
            }),
            hasStarted: v,
            status: O,
            onEdit: n,
            extra: y,
        })
    );
}
function N(e) {
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
    let g = c ? b.intl.format(b.t["9swnQZ"], { count: o.length }) : b.intl.string(b.t["3d3Cd5"]);
    return (0, r.jsx)(x, {
        title: b.intl.string(b.t.oL60eW),
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
