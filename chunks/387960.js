n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    s = n(392711),
    l = n(399606),
    a = n(481060),
    o = n(734893),
    c = n(984933),
    d = n(430824),
    u = n(700785),
    m = n(8426),
    g = n(969632),
    p = n(824990),
    h = n(981631),
    f = n(388032),
    x = n(583830);
let b = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, l.e7)([d.Z], () => d.Z.getGuild(t)),
            j = (0, l.Wu)([g.Z], () => {
                var e, t;
                return null != (t = null == (e = g.Z.getSettings().resourceChannels) ? void 0 : e.map((e) => e.channelId)) ? t : b;
            }),
            N = (0, l.Wu)([g.Z], () => g.Z.getDismissedSuggestedChannelIds(t)),
            _ = (0, l.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            v = i.useMemo(
                () =>
                    (0, s.chain)(_)
                        .filter((e) => e.channel.type === h.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !N.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(h.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(h.Plq.SEND_MESSAGES, e.channel))
                        .take(5)
                        .value(),
                [_, N, null == n ? void 0 : n.rulesChannelId, j]
            ),
            O = i.useCallback(() => {
                let e = v.map((e) => e.channel.id);
                (0, m.q6)(t, e);
            }, [t, v]);
        return v.length <= 0 || j.length >= o.x3
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: x.suggestedChannelsSection,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  children: f.NW.string(f.t.WThgAQ)
                              }),
                              (0, r.jsxs)('div', {
                                  className: x.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: f.NW.string(f.t.YtNI8P)
                                      }),
                                      (0, r.jsxs)(a.P3F, {
                                          className: x.suggestedChannelsDismiss,
                                          onClick: O,
                                          children: [
                                              (0, r.jsx)(a.dz2, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: x.suggestedChannelsDismissCheck
                                              }),
                                              (0, r.jsx)(a.Text, {
                                                  variant: 'text-xs/semibold',
                                                  color: 'text-brand',
                                                  children: f.NW.string(f.t.aLqZTk)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: x.suggestedChannels,
                                  children: v.map((e, t) =>
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              channel: e.channel,
                                              end: t < v.length - 1
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
