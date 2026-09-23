n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    a = n(991690),
    s = n(17928),
    r = n(765671),
    o = n(198052),
    c = n(812901),
    d = n(317608),
    u = n(378859),
    h = n(269094),
    p = n(206600),
    m = n(267102),
    A = n(51082),
    f = n(280450),
    x = n(488947),
    g = n(806931),
    C = n(389036),
    y = n(375708),
    j = n(649914);
function I(e) {
    var t, n;
    let l,
        a,
        { applicationId: c, channelId: d, guildId: u, renderPipOverlay: h } = e,
        p =
            ((t = (0, s.bG)([o.A], () => o.A.getParticipants(d), [d])),
            (n = f.default.getId()),
            null !=
            (a =
                (l = t.filter((e) => e.type !== g.lp.ACTIVITY && e.user?.id !== n && (0, A.Ay)(e))).find(
                    (e) => e.type === g.lp.STREAM,
                ) ?? l[0])
                ? [a]
                : []),
        { ref: m, width: x, height: C } = (0, r.Ay)(),
        y = p.length > 0 && null != x && null != C ? h?.(p, { width: x, height: C }) : null;
    return (0, i.jsx)("div", {
        className: j.MT,
        children: (0, i.jsx)("div", {
            ref: m,
            className: j.dw,
            children: (0, i.jsx)(N, { applicationId: c, channelId: d, guildId: u, overlay: y }),
        }),
    });
}
function N(e) {
    let { applicationId: t, channelId: n, guildId: s, overlay: r } = e,
        o = l.useMemo(() => ({ type: a.U.VOICE_CHANNEL, channelId: n, guildId: s }), [n, s]),
        A = (0, x.w)((0, m.Us)()),
        f = (0, p.A)({ applicationId: t, surface: o, hostWindowKey: A });
    switch (f.state) {
        case p.n.Launched:
            if (null != A && f.frame.data.proxyTicketRefreshing) return (0, i.jsx)(u.j, {});
            return null != A
                ? (0, i.jsxs)("div", {
                      className: j.oI,
                      children: [(0, i.jsx)(h.A, { frame: f.frame, application: f.application, className: j.Z7 }), r],
                  })
                : (0, i.jsx)(d.A, { frameId: f.frame.id, level: c.A.WithinCallContent, className: j.Z7, overlay: r });
        case p.n.RenderingElsewhere:
            return (0, i.jsx)(u.A, { description: y.intl.string(y.t["2KIDX+"]) });
        case p.n.NoApplication:
            return (0, i.jsx)(u.A, { description: y.intl.string(C.default.TQptZV) });
        case p.n.DoesNotSupportSurface:
            return (0, i.jsx)(u.A, { description: y.intl.string(C.default["13FYwI"]) });
        case p.n.Error:
            return (0, i.jsx)(u.A, { heading: y.intl.string(y.t.VquUff), error: y.intl.string(y.t["Sd9D/R"]) });
        case p.n.AwaitingLaunch:
        case p.n.Loading:
            return (0, i.jsx)(u.j, {});
        default:
            return null;
    }
}
