(t.r(i), t.d(i, { default: () => h }));
var e = t(477900),
    s = t(582128),
    a = t(991690),
    r = t(812901),
    c = t(317608),
    l = t(378859),
    d = t(723512),
    u = t(206600),
    p = t(375708),
    o = t(728846);
function g(n) {
    let { applicationId: i, channel: t } = n,
        d = s.useMemo(() => ({ type: a.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        { frame: g, state: h } = (0, u.A)({ applicationId: i, surface: d });
    switch (h) {
        case u.n.Launched:
            return (0, e.jsx)(c.A, { frameId: g.id, level: r.A.WithinAppContent, className: o.Z });
        case u.n.RenderingElsewhere:
            return (0, e.jsx)(l.A, { className: o.w, description: p.intl.string(p.t["2KIDX+"]) });
        case u.n.NoApplication:
            return (0, e.jsx)(l.A, { className: o.w, description: p.intl.string(p.t.izggZO) });
        case u.n.DoesNotSupportSurface:
            return (0, e.jsx)(l.A, { className: o.w, description: p.intl.string(p.t["iUWcU/"]) });
        case u.n.Error:
            return (0, e.jsx)(l.A, {
                className: o.w,
                heading: p.intl.string(p.t.VquUff),
                error: p.intl.string(p.t["Sd9D/R"]),
            });
        case u.n.AwaitingLaunch:
        case u.n.Loading:
            return (0, e.jsx)(l.j, { className: o.w });
    }
}
function h(n) {
    let { channel: i } = n,
        t = i.application_id;
    return ((0, d.A)(i), null == t)
        ? (0, e.jsx)(l.A, {
              className: o.w,
              heading: p.intl.string(p.t.tU5fiM),
              description: p.intl.string(p.t.E94mJf),
          })
        : (0, e.jsx)(g, { applicationId: t, channel: i });
}
