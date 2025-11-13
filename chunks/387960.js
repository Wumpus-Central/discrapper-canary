n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(399606),
    s = n(481060),
    o = n(734893),
    c = n(984933),
    d = n(430824),
    u = n(700785),
    g = n(8426),
    m = n(969632),
    p = n(824990),
    f = n(981631),
    h = n(388032),
    b = n(197530);
let x = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
            j = (0, a.Wu)([m.Z], () => {
                var e, t;
                return null !=
                    (t = null == (e = m.Z.getSettings().resourceChannels) ? void 0 : e.map((e) => e.channelId))
                    ? t
                    : x;
            }),
            _ = (0, a.Wu)([m.Z], () => m.Z.getDismissedSuggestedChannelIds(t)),
            v = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            O = i.useMemo(
                () =>
                    (0, l.chain)(v)
                        .filter(
                            (e) =>
                                e.channel.type === f.d4z.GUILD_TEXT &&
                                e.channel.id !== (null == n ? void 0 : n.rulesChannelId) &&
                                !_.includes(e.channel.id) &&
                                !j.includes(e.channel.id) &&
                                u.Uu(f.Plq.VIEW_CHANNEL, e.channel) &&
                                !u.Uu(f.Plq.SEND_MESSAGES, e.channel),
                        )
                        .take(5)
                        .value(),
                [v, _, null == n ? void 0 : n.rulesChannelId, j],
            ),
            C = i.useCallback(() => {
                let e = O.map((e) => e.channel.id);
                (0, g.q6)(t, e);
            }, [t, O]);
        return O.length <= 0 || j.length >= o.x3
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: b.suggestedChannelsSection,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/semibold",
                                  children: h.intl.string(h.t.WThgAR),
                              }),
                              (0, r.jsxs)("div", {
                                  className: b.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: h.intl.string(h.t.YtNI8C),
                                      }),
                                      (0, r.jsxs)(s.P3F, {
                                          className: b.suggestedChannelsDismiss,
                                          onClick: C,
                                          children: [
                                              (0, r.jsx)(s.dz2, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: b.suggestedChannelsDismissCheck,
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-brand",
                                                  children: h.intl.string(h.t.aLqZTl),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: b.suggestedChannels,
                                  children: O.map((e, t) =>
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              channel: e.channel,
                                              end: t < O.length - 1,
                                          },
                                          e.channel.id,
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", { className: b.sectionSeparator }),
                  ],
              });
    };
