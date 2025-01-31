n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    l = n(392711),
    s = n(399606),
    a = n(481060),
    o = n(734893),
    c = n(984933),
    d = n(430824),
    u = n(700785),
    m = n(8426),
    h = n(969632),
    g = n(824990),
    x = n(981631),
    p = n(388032),
    _ = n(934842);
let C = [],
    f = function (e) {
        let { guildId: t } = e,
            n = (0, s.e7)([d.Z], () => d.Z.getGuild(t)),
            f = (0, s.Wu)([h.Z], () => {
                var e, t;
                return null !== (t = null === (e = h.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map((e) => e.channelId)) && void 0 !== t ? t : C;
            }),
            v = (0, s.Wu)([h.Z], () => h.Z.getDismissedSuggestedChannelIds(t)),
            N = (0, s.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            j = r.useMemo(
                () =>
                    (0, l.chain)(N)
                        .filter((e) => e.channel.type === x.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !v.includes(e.channel.id) && !f.includes(e.channel.id) && u.Uu(x.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(x.Plq.SEND_MESSAGES, e.channel))
                        .take(5)
                        .value(),
                [N, v, null == n ? void 0 : n.rulesChannelId, f]
            ),
            I = r.useCallback(() => {
                let e = j.map((e) => e.channel.id);
                (0, m.q6)(t, e);
            }, [t, j]);
        return j.length <= 0 || f.length >= o.x3
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: _.suggestedChannelsSection,
                          children: [
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  children: p.intl.string(p.t.WThgAQ)
                              }),
                              (0, i.jsxs)('div', {
                                  className: _.suggestedChannelsHeader,
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: p.intl.string(p.t.YtNI8P)
                                      }),
                                      (0, i.jsxs)(a.P3F, {
                                          className: _.suggestedChannelsDismiss,
                                          onClick: I,
                                          children: [
                                              (0, i.jsx)(a.dz2, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.suggestedChannelsDismissCheck
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: 'text-xs/semibold',
                                                  color: 'text-brand',
                                                  children: p.intl.string(p.t.aLqZTk)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: _.suggestedChannels,
                                  children: j.map((e, t) =>
                                      (0, i.jsx)(
                                          g.Z,
                                          {
                                              channel: e.channel,
                                              end: t < j.length - 1
                                          },
                                          e.channel.id
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, i.jsx)('div', { className: _.sectionSeparator })
                  ]
              });
    };
