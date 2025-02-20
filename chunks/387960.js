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
    p = n(969632),
    g = n(824990),
    h = n(981631),
    f = n(388032),
    b = n(339945);
let x = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
            j = (0, a.Wu)([p.Z], () => {
                var e, t;
                return null !== (t = null === (e = p.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map((e) => e.channelId)) && void 0 !== t ? t : x;
            }),
            N = (0, a.Wu)([p.Z], () => p.Z.getDismissedSuggestedChannelIds(t)),
            v = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            _ = i.useMemo(
                () =>
                    (0, s.chain)(v)
                        .filter((e) => e.channel.type === h.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !N.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(h.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(h.Plq.SEND_MESSAGES, e.channel))
                        .take(5)
                        .value(),
                [v, N, null == n ? void 0 : n.rulesChannelId, j]
            ),
            O = i.useCallback(() => {
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
                                  children: f.NW.string(f.t.WThgAQ)
                              }),
                              (0, r.jsxs)('div', {
                                  className: b.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: f.NW.string(f.t.YtNI8P)
                                      }),
                                      (0, r.jsxs)(l.P3F, {
                                          className: b.suggestedChannelsDismiss,
                                          onClick: O,
                                          children: [
                                              (0, r.jsx)(l.dz2, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: b.suggestedChannelsDismissCheck
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: 'text-xs/semibold',
                                                  color: 'text-brand',
                                                  children: f.NW.string(f.t.aLqZTk)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: b.suggestedChannels,
                                  children: _.map((e, t) =>
                                      (0, r.jsx)(
                                          g.Z,
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
