n.d(t, {
    $$: () => x,
    P_: () => _,
    ap: () => v,
    ku: () => j,
}),
    n(953529),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(734893),
    d = n(8426),
    u = n(969632),
    g = n(974513),
    m = n(290511),
    p = n(388032),
    f = n(54028);
function h(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: s, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case "good":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.dz2, {
                        size: "xs",
                        color: "currentColor",
                        className: f.checkmark,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: f.statusText,
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
                        className: f.warning,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: f.statusText,
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
                        className: f.danger,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "status-danger",
                        className: f.statusText,
                        children: p.intl.string(p.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, r.jsxs)("div", {
        className: f.onboardingStepContainer,
        children: [
            (0, r.jsxs)("div", {
                className: f.leftContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: f.iconContainer,
                        children: l,
                    }),
                    (0, r.jsxs)("div", {
                        className: f.onboardingStepText,
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
                className: f.rightContainer,
                children: [
                    t,
                    d,
                    (0, r.jsx)("div", {
                        className: f.cta,
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
function b(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, a] = (0, o.VF)(e, n);
    return a.length >= m.md && r.length >= m.X;
}
function x(e) {
    let t = b(e),
        n = (0, g.O4)(e);
    return t || n;
}
function j(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length),
        x = i.useMemo(() => new Set(d), [d]),
        [, j] = (0, o.VF)(t, x),
        v = j.length,
        _ = b(t),
        C = (0, g.O4)(t),
        O = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        y = O
            ? p.intl.formatToPlainString(p.t.nHwnLK, {
                  numDefaultChannels: v,
                  numFromQuestions: u - v,
              })
            : _
              ? p.intl.formatToPlainString(p.t.HxEwSv, { numDefaultChannels: v })
              : p.intl.formatToPlainString(p.t.ey3uVZ, {
                    numDefaultChannels: m.md,
                    numChattableChannels: m.X,
                });
    return (0, r.jsx)(h, {
        title: O ? p.intl.string(p.t.YZookV) : p.intl.string(p.t["4GSygh"]),
        description: y,
        icon: (0, r.jsx)(a.VL1, {
            size: "md",
            color: "currentColor",
            className: f.channelIcon,
        }),
        hasStarted: v > 0 || O,
        status: _ || C ? (c ? "none" : "good") : "required",
        onEdit: n,
    });
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)),
        u = d.length,
        [g, m] = (0, o.dF)(t, d, c),
        b = g.length,
        x = g.length + m.length,
        j = (b / x) * 100,
        v = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        _ = u > 0,
        C = "none";
    return (
        _ && (j >= 85 && !i ? (C = "good") : j < 85 && (C = "warning")),
        (0, r.jsx)(h, {
            title: v ? p.intl.string(p.t.AGjtFv) : p.intl.string(p.t.dqCzoT),
            description: p.intl.format(p.t.iuNisr, {
                numChannels: b,
                numTotalChannels: x,
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
                className: f.channelIcon,
            }),
            hasStarted: _,
            status: C,
            onEdit: n,
        })
    );
}
function _(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        g = (0, l.e7)([u.Z], () => u.Z.getSettings()),
        m = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)),
        b = (0, c.uo)(g),
        x = g.enabled,
        j = i.useCallback(() => {
            (0, d.To)(t, !x);
        }, [t, x]),
        v = !(0, c.av)(g),
        _ = "none";
    v && (b && !o ? (_ = "good") : b || (_ = "required"));
    let C = p.intl.string(p.t.GMOwOD);
    b ? v || (C = p.intl.string(p.t.wHOoyE)) : (C = p.intl.string(p.t.wXFbgZ));
    let O = null;
    return (
        v &&
            m &&
            (O = (0, r.jsx)("div", {
                className: f.inlineSwitch,
                children: (0, r.jsx)(a.rsf, {
                    checked: x,
                    onChange: j,
                    disabled: !b,
                }),
            })),
        (0, r.jsx)(h, {
            title: p.intl.string(p.t.mRHqsj),
            description: C,
            icon: (0, r.jsx)(a.Vy8, {
                size: "md",
                color: "currentColor",
                className: f.channelIcon,
            }),
            hasStarted: v,
            status: _,
            onEdit: n,
            extra: O,
        })
    );
}
