n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(399606),
    s = n(481060),
    o = n(734893),
    c = n(984933),
    d = n(430824),
    u = n(700785),
    m = n(8426),
    g = n(969632),
    p = n(824990),
    h = n(981631),
    f = n(388032),
    x = n(773100);
let b = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
            j = (0, a.Wu)([g.Z], () => {
                var e, t;
                return null != (t = null == (e = g.Z.getSettings().resourceChannels) ? void 0 : e.map((e) => e.channelId)) ? t : b;
            }),
            v = (0, a.Wu)([g.Z], () => g.Z.getDismissedSuggestedChannelIds(t)),
            _ = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            O = i.useMemo(
                () =>
                    (0, l.chain)(_)
                        .filter((e) => e.channel.type === h.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !v.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(h.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(h.Plq.SEND_MESSAGES, e.channel))
                        .take(5)
                        .value(),
                [_, v, null == n ? void 0 : n.rulesChannelId, j]
            ),
            y = i.useCallback(() => {
                let e = O.map((e) => e.channel.id);
                (0, m.q6)(t, e);
            }, [t, O]);
        return O.length <= 0 || j.length >= o.x3
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: x.suggestedChannelsSection,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-md/semibold',
                                  children: f.intl.string(f.t.WThgAQ)
                              }),
                              (0, r.jsxs)('div', {
                                  className: x.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: f.intl.string(f.t.YtNI8P)
                                      }),
                                      (0, r.jsxs)(s.P3F, {
                                          className: x.suggestedChannelsDismiss,
                                          onClick: y,
                                          children: [
                                              (0, r.jsx)(s.dz2, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: x.suggestedChannelsDismissCheck
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/semibold',
                                                  color: 'text-brand',
                                                  children: f.intl.string(f.t.aLqZTk)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: x.suggestedChannels,
                                  children: O.map((e, t) =>
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              channel: e.channel,
                                              end: t < O.length - 1
                                          },
                                          e.channel.id
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, r.jsx)('div', { className: x.sectionSeparator })
                  ]
              });
    };
