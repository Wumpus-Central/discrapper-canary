var i = n(477900),
    l = n(582128),
    a = n(991690),
    s = n(855986),
    r = n(765671),
    o = n(628983),
    d = n(144399),
    c = n(240666),
    u = n(343030),
    h = n(11411),
    p = n(378859),
    m = n(269094),
    A = n(111518),
    f = n(130745),
    g = n(267102),
    x = n(51082),
    C = n(46653),
    y = n(488947),
    j = n(806931),
    I = n(786739),
    N = n(792996),
    v = n(649914);
function E(e) {
    let { applicationId: t, channelId: n, guildId: s, overlay: r } = e,
        o = l.useMemo(() => ({ type: a.U.VOICE_CHANNEL, channelId: n, guildId: s }), [n, s]),
        x = (0, y.w)((0, g.Us)()),
        C = (0, A.A)({ applicationId: t, surface: o, hostWindowKey: x });
    switch (((0, c.A)(t, null == x ? o : null), (0, f.A)(n), C.state)) {
        case A.n.Launched:
            if (null != x && C.frame.data.proxyTicketRefreshing) return (0, i.jsx)(p.j, {});
            return null != x
                ? (0, i.jsxs)("div", {
                      className: v.oI,
                      children: [
                          (0, i.jsx)(m.A, { frame: C.frame, application: C.application, className: v.Z7 }),
                          r,
                          (0, i.jsx)(d.A, { frameId: C.frame.id }),
                      ],
                  })
                : (0, i.jsx)(h.A, {
                      frameId: C.frame.id,
                      level: u.A.WithinCallContent,
                      className: v.Z7,
                      overlay: (0, i.jsxs)(i.Fragment, { children: [r, (0, i.jsx)(d.A, { frameId: C.frame.id })] }),
                  });
        case A.n.RenderingElsewhere:
            return (0, i.jsx)(p.A, { description: N.intl.string(N.t["2KIDX+"]) });
        case A.n.NoApplication:
            return (0, i.jsx)(p.A, { description: N.intl.string(I.default.TQptZV) });
        case A.n.DoesNotSupportSurface:
            return (0, i.jsx)(p.A, { description: N.intl.string(I.default["13FYwI"]) });
        case A.n.Error:
            return (0, i.jsx)(p.A, { heading: N.intl.string(N.t.VquUff), error: N.intl.string(N.t["Sd9D/R"]) });
        case A.n.AwaitingLaunch:
        case A.n.Loading:
            return (0, i.jsx)(p.j, {});
        default:
            return null;
    }
}
n.d(
    t,
    {},
    {
        A: function (e) {
            var t, n;
            let l,
                a,
                { applicationId: d, channelId: c, guildId: u, renderPipOverlay: h } = e,
                p =
                    ((t = (0, s.bG)([o.A], () => o.A.getParticipants(c), [c])),
                    (n = C.default.getId()),
                    null !=
                    (a =
                        (l = t.filter((e) => e.type !== j.lp.ACTIVITY && e.user?.id !== n && (0, x.Ay)(e))).find(
                            (e) => e.type === j.lp.STREAM,
                        ) ?? l[0])
                        ? [a]
                        : []),
                { ref: m, width: A, height: f } = (0, r.Ay)(),
                g = p.length > 0 && null != A && null != f ? h?.(p, { width: A, height: f }) : null;
            return (0, i.jsx)("div", {
                className: v.MT,
                children: (0, i.jsx)("div", {
                    ref: m,
                    className: v.dw,
                    children: (0, i.jsx)(E, { applicationId: d, channelId: c, guildId: u, overlay: g }),
                }),
            });
        },
    },
);
