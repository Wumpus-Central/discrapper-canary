n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n(417597),
    a = n(397927),
    c = n(374084),
    o = n(808728),
    d = n(71393),
    u = n(488926),
    f = n(199940),
    g = n(132514),
    b = n(139497),
    m = n(652215),
    p = n(985018),
    x = n(659233);
let h = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, s.bG)([d.A], () => d.A.getGuild(t)),
            j = (0, s.yK)([g.A], () => {
                var e, t;
                return null !=
                    (e = null == (t = g.A.getSettings().resourceChannels) ? void 0 : t.map((e) => e.channelId))
                    ? e
                    : h;
            }),
            O = (0, s.yK)([g.A], () => g.A.getDismissedSuggestedChannelIds(t)),
            y = (0, s.bG)([o.Ay], () => o.Ay.getSelectableChannels(t)),
            v = i.useMemo(
                () =>
                    (0, l.chain)(y)
                        .filter(
                            (e) =>
                                e.channel.type === m.rbe.GUILD_TEXT &&
                                e.channel.id !== (null == n ? void 0 : n.rulesChannelId) &&
                                !O.includes(e.channel.id) &&
                                !j.includes(e.channel.id) &&
                                u.MJ(m.xBc.VIEW_CHANNEL, e.channel) &&
                                !u.MJ(m.xBc.SEND_MESSAGES, e.channel),
                        )
                        .take(5)
                        .value(),
                [y, O, null == n ? void 0 : n.rulesChannelId, j],
            ),
            A = i.useCallback(() => {
                let e = v.map((e) => e.channel.id);
                (0, f.kO)(t, e);
            }, [t, v]);
        return v.length <= 0 || j.length >= c.CW
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: x.rS,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  children: p.intl.string(p.t.WThgAR),
                              }),
                              (0, r.jsxs)("div", {
                                  className: x.vn,
                                  children: [
                                      (0, r.jsx)(a.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: p.intl.string(p.t.YtNI8C),
                                      }),
                                      (0, r.jsxs)(a.DUT, {
                                          className: x.iC,
                                          onClick: A,
                                          children: [
                                              (0, r.jsx)(a.A9s, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: x.An,
                                              }),
                                              (0, r.jsx)(a.Text, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-brand",
                                                  children: p.intl.string(p.t.aLqZTl),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: x.cF,
                                  children: v.map((e, t) =>
                                      (0, r.jsx)(
                                          b.A,
                                          {
                                              channel: e.channel,
                                              end: t < v.length - 1,
                                          },
                                          e.channel.id,
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: x.DY,
                      }),
                  ],
              });
    };
