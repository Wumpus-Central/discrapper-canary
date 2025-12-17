n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(399606),
    s = n(481060),
    o = n(734893),
    c = n(984933),
    d = n(430824),
    u = n(700785),
    g = n(8426),
    f = n(969632),
    m = n(824990),
    b = n(981631),
    p = n(388032),
    h = n(551952);
let x = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
            j = (0, a.Wu)([f.Z], () => {
                var e, t;
                return null !=
                    (t = null == (e = f.Z.getSettings().resourceChannels) ? void 0 : e.map((e) => e.channelId))
                    ? t
                    : x;
            }),
            v = (0, a.Wu)([f.Z], () => f.Z.getDismissedSuggestedChannelIds(t)),
            O = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            C = i.useMemo(
                () =>
                    (0, l.chain)(O)
                        .filter(
                            (e) =>
                                e.channel.type === b.d4z.GUILD_TEXT &&
                                e.channel.id !== (null == n ? void 0 : n.rulesChannelId) &&
                                !v.includes(e.channel.id) &&
                                !j.includes(e.channel.id) &&
                                u.Uu(b.Plq.VIEW_CHANNEL, e.channel) &&
                                !u.Uu(b.Plq.SEND_MESSAGES, e.channel),
                        )
                        .take(5)
                        .value(),
                [O, v, null == n ? void 0 : n.rulesChannelId, j],
            ),
            y = i.useCallback(() => {
                let e = C.map((e) => e.channel.id);
                (0, g.q6)(t, e);
            }, [t, C]);
        return C.length <= 0 || j.length >= o.x3
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: h.suggestedChannelsSection,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/semibold",
                                  children: p.intl.string(p.t.WThgAR),
                              }),
                              (0, r.jsxs)("div", {
                                  className: h.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: p.intl.string(p.t.YtNI8C),
                                      }),
                                      (0, r.jsxs)(s.P3F, {
                                          className: h.suggestedChannelsDismiss,
                                          onClick: y,
                                          children: [
                                              (0, r.jsx)(s.dz2, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: h.suggestedChannelsDismissCheck,
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-brand",
                                                  children: p.intl.string(p.t.aLqZTl),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: h.suggestedChannels,
                                  children: C.map((e, t) =>
                                      (0, r.jsx)(
                                          m.Z,
                                          {
                                              channel: e.channel,
                                              end: t < C.length - 1,
                                          },
                                          e.channel.id,
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", { className: h.sectionSeparator }),
                  ],
              });
    };
