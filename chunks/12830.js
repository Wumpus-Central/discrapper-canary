n.d(t, { A: () => N });
var i = n(477900),
    l = n(582128),
    a = n(991690),
    s = n(17928),
    r = n(765671),
    o = n(198052),
    c = n(343030),
    d = n(317608),
    u = n(378859),
    h = n(269094),
    p = n(338941),
    m = n(130745),
    A = n(267102),
    f = n(51082),
    x = n(280450),
    g = n(488947),
    C = n(806931),
    j = n(4998),
    y = n(105292),
    I = n(649914);
function N(e) {
    var t, n;
    let l,
        a,
        { applicationId: c, channelId: d, guildId: u, renderPipOverlay: h } = e,
        p =
            ((t = (0, s.bG)([o.A], () => o.A.getParticipants(d), [d])),
            (n = x.default.getId()),
            null !=
            (a =
                (l = t.filter((e) => e.type !== C.lp.ACTIVITY && e.user?.id !== n && (0, f.Ay)(e))).find(
                    (e) => e.type === C.lp.STREAM,
                ) ?? l[0])
                ? [a]
                : []),
        { ref: m, width: A, height: g } = (0, r.Ay)(),
        j = p.length > 0 && null != A && null != g ? h?.(p, { width: A, height: g }) : null;
    return (0, i.jsx)("div", {
        className: I.MT,
        children: (0, i.jsx)("div", {
            ref: m,
            className: I.dw,
            children: (0, i.jsx)(E, { applicationId: c, channelId: d, guildId: u, overlay: j }),
        }),
    });
}
function E(e) {
    let { applicationId: t, channelId: n, guildId: s, overlay: r } = e,
        o = l.useMemo(() => ({ type: a.U.VOICE_CHANNEL, channelId: n, guildId: s }), [n, s]),
        f = (0, g.w)((0, A.Us)()),
        x = (0, p.A)({ applicationId: t, surface: o, hostWindowKey: f });
    switch (((0, m.A)(n), x.state)) {
        case p.n.Launched:
            if (null != f && x.frame.data.proxyTicketRefreshing) return (0, i.jsx)(u.j, {});
            return null != f
                ? (0, i.jsxs)("div", {
                      className: I.oI,
                      children: [(0, i.jsx)(h.A, { frame: x.frame, application: x.application, className: I.Z7 }), r],
                  })
                : (0, i.jsx)(d.A, { frameId: x.frame.id, level: c.A.WithinCallContent, className: I.Z7, overlay: r });
        case p.n.RenderingElsewhere:
            return (0, i.jsx)(u.A, { description: y.intl.string(y.t["2KIDX+"]) });
        case p.n.NoApplication:
            return (0, i.jsx)(u.A, { description: y.intl.string(j.default.TQptZV) });
        case p.n.DoesNotSupportSurface:
            return (0, i.jsx)(u.A, { description: y.intl.string(j.default["13FYwI"]) });
        case p.n.Error:
            return (0, i.jsx)(u.A, { heading: y.intl.string(y.t.VquUff), error: y.intl.string(y.t["Sd9D/R"]) });
        case p.n.AwaitingLaunch:
        case p.n.Loading:
            return (0, i.jsx)(u.j, {});
        default:
            return null;
    }
}
