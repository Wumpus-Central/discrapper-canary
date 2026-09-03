t.r(i), t.d(i, { default: () => m });
var e = t(477900),
    r = t(582128),
    s = t(289873),
    l = t(323384),
    a = t(297264),
    c = t(834730),
    d = t(812901),
    u = t(317608),
    o = t(35367),
    p = t(165610),
    h = t(375708),
    g = t(728846);
function x(n) {
    let { applicationId: i, channel: t } = n,
        l = r.useMemo(() => ({ type: p.U4.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        { frame: a, state: c } = (0, o.A)({ applicationId: i, surface: l });
    switch (c) {
        case o.n.Launched:
            return (0, e.jsx)(u.A, { frameId: a.id, level: d.A.WithinAppContent, className: g.Z7 });
        case o.n.RenderingElsewhere:
            return (0, e.jsx)(j, { description: h.intl.string(h.t["2KIDX+"]) });
        case o.n.NoApplication:
            return (0, e.jsx)(j, { description: h.intl.string(h.t.izggZO) });
        case o.n.DoesNotSupportSurface:
            return (0, e.jsx)(j, { description: h.intl.string(h.t["iUWcU/"]) });
        case o.n.Error:
            return (0, e.jsx)(j, { heading: h.intl.string(h.t.VquUff), error: h.intl.string(h.t["Sd9D/R"]) });
        case o.n.AwaitingLaunch:
        case o.n.Loading:
            return (0, e.jsx)("div", { className: g.vV, children: (0, e.jsx)(s.y, {}) });
    }
}
function m(n) {
    let { channel: i } = n,
        t = i.application_id;
    return null == t
        ? (0, e.jsx)(j, { heading: h.intl.string(h.t.tU5fiM), description: h.intl.string(h.t.E94mJf) })
        : (0, e.jsx)(x, { applicationId: t, channel: i });
}
function j(n) {
    let { heading: i, description: t, error: r } = n;
    return (0, e.jsxs)("div", {
        className: g.vV,
        children: [
            (0, e.jsx)(l.k, { size: "lg", color: "var(--icon-muted)" }),
            null != i ? (0, e.jsx)(a.D, { variant: "heading-md/semibold", color: "text-default", children: i }) : null,
            null != t
                ? (0, e.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: g.r9, children: t })
                : null,
            null != r
                ? (0, e.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      className: g.r9,
                      children: r,
                  })
                : null,
        ],
    });
}
