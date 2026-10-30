n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128),
    a = n(991690),
    s = n(17928),
    r = n(765671),
    o = n(198052),
    c = n(228946),
    d = n(343030),
    u = n(317608),
    h = n(378859),
    p = n(269094),
    m = n(35367),
    A = n(130745),
    f = n(267102),
    x = n(51082),
    g = n(280450),
    C = n(488947),
    y = n(806931),
    j = n(885031),
    I = n(105292),
    N = n(649914);
function v(e) {
    var t, n;
    let l,
        a,
        { applicationId: c, channelId: d, guildId: u, renderPipOverlay: h } = e,
        p =
            ((t = (0, s.bG)([o.A], () => o.A.getParticipants(d), [d])),
            (n = g.default.getId()),
            null !=
            (a =
                (l = t.filter((e) => e.type !== y.lp.ACTIVITY && e.user?.id !== n && (0, x.Ay)(e))).find(
                    (e) => e.type === y.lp.STREAM,
                ) ?? l[0])
                ? [a]
                : []),
        { ref: m, width: A, height: f } = (0, r.Ay)(),
        C = p.length > 0 && null != A && null != f ? h?.(p, { width: A, height: f }) : null;
    return (0, i.jsx)("div", {
        className: N.MT,
        children: (0, i.jsx)("div", {
            ref: m,
            className: N.dw,
            children: (0, i.jsx)(E, { applicationId: c, channelId: d, guildId: u, overlay: C }),
        }),
    });
}
function E(e) {
    let { applicationId: t, channelId: n, guildId: s, overlay: r } = e,
        o = l.useMemo(() => ({ type: a.U.VOICE_CHANNEL, channelId: n, guildId: s }), [n, s]),
        x = (0, C.w)((0, f.Us)()),
        g = (0, m.A)({ applicationId: t, surface: o, hostWindowKey: x });
    switch (((0, c.A)(t, null == x ? o : null), (0, A.A)(n), g.state)) {
        case m.n.Launched:
            if (null != x && g.frame.data.proxyTicketRefreshing) return (0, i.jsx)(h.j, {});
            return null != x
                ? (0, i.jsxs)("div", {
                      className: N.oI,
                      children: [(0, i.jsx)(p.A, { frame: g.frame, application: g.application, className: N.Z7 }), r],
                  })
                : (0, i.jsx)(u.A, { frameId: g.frame.id, level: d.A.WithinCallContent, className: N.Z7, overlay: r });
        case m.n.RenderingElsewhere:
            return (0, i.jsx)(h.A, { description: I.intl.string(I.t["2KIDX+"]) });
        case m.n.NoApplication:
            return (0, i.jsx)(h.A, { description: I.intl.string(j.default.TQptZV) });
        case m.n.DoesNotSupportSurface:
            return (0, i.jsx)(h.A, { description: I.intl.string(j.default["13FYwI"]) });
        case m.n.Error:
            return (0, i.jsx)(h.A, { heading: I.intl.string(I.t.VquUff), error: I.intl.string(I.t["Sd9D/R"]) });
        case m.n.AwaitingLaunch:
        case m.n.Loading:
            return (0, i.jsx)(h.j, {});
        default:
            return null;
    }
}
