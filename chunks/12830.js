n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(765671),
    r = n(198052),
    o = n(812901),
    c = n(317608),
    d = n(378859),
    u = n(269094),
    h = n(206600),
    p = n(267102),
    m = n(51082),
    A = n(280450),
    f = n(488947),
    x = n(806931),
    g = n(165610),
    C = n(389036),
    y = n(375708),
    j = n(649914);
function I(e) {
    var t, n;
    let l,
        o,
        { applicationId: c, channelId: d, guildId: u, renderPipOverlay: h } = e,
        p =
            ((t = (0, a.bG)([r.A], () => r.A.getParticipants(d), [d])),
            (n = A.default.getId()),
            null !=
            (o =
                (l = t.filter((e) => e.type !== x.lp.ACTIVITY && e.user?.id !== n && (0, m.Ay)(e))).find(
                    (e) => e.type === x.lp.STREAM,
                ) ?? l[0])
                ? [o]
                : []),
        { ref: f, width: g, height: C } = (0, s.Ay)(),
        y = p.length > 0 && null != g && null != C ? h?.(p, { width: g, height: C }) : null;
    return (0, i.jsx)("div", {
        className: j.MT,
        children: (0, i.jsx)("div", {
            ref: f,
            className: j.dw,
            children: (0, i.jsx)(N, { applicationId: c, channelId: d, guildId: u, overlay: y }),
        }),
    });
}
function N(e) {
    let { applicationId: t, channelId: n, guildId: a, overlay: s } = e,
        r = l.useMemo(() => ({ type: g.U4.VOICE_CHANNEL, channelId: n, guildId: a }), [n, a]),
        m = (0, f.w)((0, p.Us)()),
        A = (0, h.A)({ applicationId: t, surface: r, hostWindowKey: m });
    switch (A.state) {
        case h.n.Launched:
            if (null != m && A.frame.data.proxyTicketRefreshing) return (0, i.jsx)(d.j, {});
            return null != m
                ? (0, i.jsxs)("div", {
                      className: j.oI,
                      children: [(0, i.jsx)(u.A, { frame: A.frame, application: A.application, className: j.Z7 }), s],
                  })
                : (0, i.jsx)(c.A, { frameId: A.frame.id, level: o.A.WithinCallContent, className: j.Z7, overlay: s });
        case h.n.RenderingElsewhere:
            return (0, i.jsx)(d.A, { description: y.intl.string(y.t["2KIDX+"]) });
        case h.n.NoApplication:
            return (0, i.jsx)(d.A, { description: y.intl.string(C.default.TQptZV) });
        case h.n.DoesNotSupportSurface:
            return (0, i.jsx)(d.A, { description: y.intl.string(C.default["13FYwI"]) });
        case h.n.Error:
            return (0, i.jsx)(d.A, { heading: y.intl.string(y.t.VquUff), error: y.intl.string(y.t["Sd9D/R"]) });
        case h.n.AwaitingLaunch:
        case h.n.Loading:
            return (0, i.jsx)(d.j, {});
        default:
            return null;
    }
}
