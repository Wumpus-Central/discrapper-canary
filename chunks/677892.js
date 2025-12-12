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
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(734893),
    u = n(926958),
    d = n(8426),
    g = n(969632),
    m = n(641938),
    p = n(974513),
    f = n(290511),
    h = n(388032),
    x = n(54028);
function b(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: a, status: o, onEdit: c, extra: u } = e;
    switch (o) {
        case "good":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.dz2, {
                        size: "xs",
                        color: "currentColor",
                        className: x.checkmark,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: x.statusText,
                        children: h.intl.string(h.t.rPnzRf),
                    }),
                ],
            });
            break;
        case "warning":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Mgn, {
                        size: "xs",
                        color: "currentColor",
                        className: x.warning,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: x.statusText,
                        children: h.intl.string(h.t["yTa+di"]),
                    }),
                ],
            });
            break;
        case "required":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Mgn, {
                        size: "xs",
                        color: "currentColor",
                        className: x.danger,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "status-danger",
                        className: x.statusText,
                        children: h.intl.string(h.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, r.jsxs)("div", {
        className: x.onboardingStepContainer,
        children: [
            (0, r.jsxs)("div", {
                className: x.leftContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: x.iconContainer,
                        children: l,
                    }),
                    (0, r.jsxs)("div", {
                        className: x.onboardingStepText,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: a && "required" === o ? "status-danger" : "text-default",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: x.rightContainer,
                children: [
                    t,
                    u,
                    (0, r.jsx)("div", {
                        className: x.cta,
                        children: a
                            ? (0, r.jsx)(s.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: c,
                                  text: h.intl.string(h.t.bt75uw),
                              })
                            : (0, r.jsx)(s.Button, {
                                  icon: s.ZSh,
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
    let t = (0, l.e7)([a.Z], () => a.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, s] = (0, o.VF)(e, n);
    return s.length >= f.md && r.length >= f.X;
}
function _(e) {
    let t = j(e),
        n = (0, p.O4)(e);
    return t || n;
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        u = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        d = (0, l.e7)([a.Z], () => (0, o.kl)(t, a.Z.getDefaultChannelIds(t), a.Z.getOnboardingPrompts(t)).length),
        g = i.useMemo(() => new Set(u), [u]),
        [, m] = (0, o.VF)(t, g),
        _ = m.length,
        v = j(t),
        O = (0, p.O4)(t),
        C = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        y = C
            ? h.intl.formatToPlainString(h.t.nHwnLK, {
                  numDefaultChannels: _,
                  numFromQuestions: d - _,
              })
            : v
              ? h.intl.formatToPlainString(h.t.HxEwSv, { numDefaultChannels: _ })
              : h.intl.formatToPlainString(h.t.ey3uVZ, {
                    numDefaultChannels: f.md,
                    numChattableChannels: f.X,
                });
    return (0, r.jsx)(b, {
        title: C ? h.intl.string(h.t.YZookV) : h.intl.string(h.t["4GSygh"]),
        description: y,
        icon: (0, r.jsx)(s.VL1, {
            size: "md",
            color: "currentColor",
            className: x.channelIcon,
        }),
        hasStarted: _ > 0 || C,
        status: v || O ? (c ? "none" : "good") : "required",
        onEdit: n,
    });
}
function O(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        u = (0, l.Wu)([a.Z], () => a.Z.getOnboardingPrompts(t)),
        d = u.length,
        [g, m] = (0, o.dF)(t, u, c),
        p = g.length,
        f = g.length + m.length,
        j = (p / f) * 100,
        _ = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        v = d > 0,
        O = "none";
    return (
        v && (j >= 85 && !i ? (O = "good") : j < 85 && (O = "warning")),
        (0, r.jsx)(b, {
            title: _ ? h.intl.string(h.t.AGjtFv) : h.intl.string(h.t.dqCzoT),
            description: h.intl.format(h.t.iuNisr, {
                numChannels: p,
                numTotalChannels: f,
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
            icon: (0, r.jsx)(s.iFz, {
                size: "md",
                color: "currentColor",
                className: x.channelIcon,
            }),
            hasStarted: v,
            status: O,
            onEdit: n,
        })
    );
}
function C(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        u = (0, l.e7)([g.Z], () => g.Z.getSettings()),
        m = (0, l.e7)([a.Z], () => a.Z.getEnabled(t)),
        p = (0, c.uo)(u),
        f = u.enabled,
        j = i.useCallback(() => {
            (0, d.To)(t, !f);
        }, [t, f]),
        _ = !(0, c.av)(u),
        v = "none";
    _ && (p && !o ? (v = "good") : p || (v = "required"));
    let O = h.intl.string(h.t.GMOwOD);
    p ? _ || (O = h.intl.string(h.t.wHOoyE)) : (O = h.intl.string(h.t.wXFbgZ));
    let C = null;
    return (
        _ &&
            m &&
            (C = (0, r.jsx)("div", {
                className: x.inlineSwitch,
                children: (0, r.jsx)(s.rsf, {
                    checked: f,
                    onChange: j,
                    disabled: !p,
                }),
            })),
        (0, r.jsx)(b, {
            title: h.intl.string(h.t.mRHqsj),
            description: O,
            icon: (0, r.jsx)(s.Vy8, {
                size: "md",
                color: "currentColor",
                className: x.channelIcon,
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
        { enabled: a } = m.Z.useExperiment(
            {
                guildId: t,
                location: "guild_settings",
            },
            { autoTrackExposure: !0 },
        ),
        o = (0, l.Wu)([u.Z], () => u.Z.getEditedConnections());
    if (!a) return null;
    let c = o.length > 0,
        d = "none";
    c && !i && (d = "good");
    let g = c ? h.intl.format(h.t["9swnQZ"], { count: o.length }) : h.intl.string(h.t["3d3Cd5"]);
    return (0, r.jsx)(b, {
        title: h.intl.string(h.t.oL60eW),
        description: g,
        icon: (0, r.jsx)(s.xPt, {
            size: "md",
            color: "currentColor",
            className: x.channelIcon,
        }),
        hasStarted: c,
        status: d,
        onEdit: n,
    });
}
