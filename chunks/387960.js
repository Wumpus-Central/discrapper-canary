n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(392711),
    s = n(399606),
    a = n(481060),
    o = n(734893),
    c = n(984933),
    u = n(430824),
    d = n(700785),
    m = n(8426),
    g = n(969632),
    p = n(824990),
    h = n(981631),
    f = n(388032),
    x = n(773100);
let b = [],
    j = function (e) {
        let { guildId: t } = e,
            n = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
            j = (0, s.Wu)([g.Z], () => {
                var e, t;
                return null != (t = null == (e = g.Z.getSettings().resourceChannels) ? void 0 : e.map((e) => e.channelId)) ? t : b;
            }),
            _ = (0, s.Wu)([g.Z], () => g.Z.getDismissedSuggestedChannelIds(t)),
            v = (0, s.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)),
            O = i.useMemo(
                () =>
                    (0, l.chain)(v)
                        .filter((e) => e.channel.type === h.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !_.includes(e.channel.id) && !j.includes(e.channel.id) && d.Uu(h.Plq.VIEW_CHANNEL, e.channel) && !d.Uu(h.Plq.SEND_MESSAGES, e.channel))
                        .take(5)
                        .value(),
                [v, _, null == n ? void 0 : n.rulesChannelId, j]
            ),
            C = i.useCallback(() => {
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
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  children: f.intl.string(f.t.WThgAQ)
                              }),
                              (0, r.jsxs)('div', {
                                  className: x.suggestedChannelsHeader,
                                  children: [
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: f.intl.string(f.t.YtNI8P)
                                      }),
                                      (0, r.jsxs)(a.P3F, {
                                          className: x.suggestedChannelsDismiss,
                                          onClick: C,
                                          children: [
                                              (0, r.jsx)(a.dz2, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: x.suggestedChannelsDismissCheck
                                              }),
                                              (0, r.jsx)(a.Text, {
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
