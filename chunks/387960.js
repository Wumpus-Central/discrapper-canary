n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n(399606),
    l = n(481060),
    o = n(734893),
    c = n(984933),
    d = n(430824),
    u = n(700785),
    m = n(8426),
    g = n(969632),
    p = n(824990),
    f = n(981631),
    h = n(388032),
    b = n(773100);
let x = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
            j = (0, a.Wu)([g.Z], () => {
                var e, t;
                return null != (t = null == (e = g.Z.getSettings().resourceChannels) ? void 0 : e.map((e) => e.channelId)) ? t : x;
            }),
            N = (0, a.Wu)([g.Z], () => g.Z.getDismissedSuggestedChannelIds(t)),
            v = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            _ = i.useMemo(
                () =>
                    (0, s.chain)(v)
                        .filter((e) => e.channel.type === f.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !N.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(f.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(f.Plq.SEND_MESSAGES, e.channel))
                        .take(5)
                        .value(),
                [v, N, null == n ? void 0 : n.rulesChannelId, j]
            ),
            y = i.useCallback(() => {
                let e = _.map((e) => e.channel.id);
                (0, m.q6)(t, e);
            }, [t, _]);
        return _.length <= 0 || j.length >= o.x3
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: b.suggestedChannelsSection,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/semibold',
                                  children: h.NW.string(h.t.WThgAQ)
                              }),
                              (0, r.jsxs)('div', {
                                  className: b.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: h.NW.string(h.t.YtNI8P)
                                      }),
                                      (0, r.jsxs)(l.P3F, {
                                          className: b.suggestedChannelsDismiss,
                                          onClick: y,
                                          children: [
                                              (0, r.jsx)(l.dz2, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: b.suggestedChannelsDismissCheck
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: 'text-xs/semibold',
                                                  color: 'text-brand',
                                                  children: h.NW.string(h.t.aLqZTk)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: b.suggestedChannels,
                                  children: _.map((e, t) =>
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              channel: e.channel,
                                              end: t < _.length - 1
                                          },
                                          e.channel.id
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, r.jsx)('div', { className: b.sectionSeparator })
                  ]
              });
    };
