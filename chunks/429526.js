n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(417597),
    a = n(834730),
    o = n(939249),
    d = n(933832),
    c = n(374084),
    u = n(808728),
    m = n(71393),
    g = n(488926),
    h = n(199940),
    x = n(132514),
    _ = n(139497),
    p = n(652215),
    A = n(985018),
    E = n(327084);
let f = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, r.bG)([m.A], () => m.A.getGuild(t)),
            j = (0, r.yK)([x.A], () => {
                let e = x.A.getSettings();
                return e.resourceChannels?.map((e) => e.channelId) ?? f;
            }),
            N = (0, r.yK)([x.A], () => x.A.getDismissedSuggestedChannelIds(t)),
            I = (0, r.bG)([u.Ay], () => u.Ay.getSelectableChannels(t)),
            C = l.useMemo(
                () =>
                    (0, s.chain)(I)
                        .filter(
                            (e) =>
                                e.channel.type === p.rbe.GUILD_TEXT &&
                                e.channel.id !== n?.rulesChannelId &&
                                !N.includes(e.channel.id) &&
                                !j.includes(e.channel.id) &&
                                g.MJ(p.xBc.VIEW_CHANNEL, e.channel) &&
                                !g.MJ(p.xBc.SEND_MESSAGES, e.channel),
                        )
                        .take(5)
                        .value(),
                [I, N, n?.rulesChannelId, j],
            ),
            b = l.useCallback(() => {
                let e = C.map((e) => e.channel.id);
                (0, h.kO)(t, e);
            }, [t, C]);
        return C.length <= 0 || j.length >= c.CW
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: E.rS,
                          children: [
                              (0, i.jsx)(a.E, { variant: "text-md/semibold", children: A.intl.string(A.t.WThgAR) }),
                              (0, i.jsxs)("div", {
                                  className: E.vn,
                                  children: [
                                      (0, i.jsx)(a.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: A.intl.string(A.t.YtNI8C),
                                      }),
                                      (0, i.jsxs)(o.D, {
                                          className: E.iC,
                                          onClick: b,
                                          children: [
                                              (0, i.jsx)(d.A, { size: "md", color: "currentColor", className: E.An }),
                                              (0, i.jsx)(a.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-brand",
                                                  children: A.intl.string(A.t.aLqZTl),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: E.cF,
                                  children: C.map((e, t) =>
                                      (0, i.jsx)(_.A, { channel: e.channel, end: t < C.length - 1 }, e.channel.id),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: E.DY }),
                  ],
              });
    };
