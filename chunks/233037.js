n.d(t, { Z: () => x });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    s = n(984933),
    o = n(430824),
    a = n(496675),
    c = n(594174),
    d = n(938475),
    u = n(102172),
    f = n(499596),
    m = n(148381),
    h = n(388032),
    p = n(962670);
function x(e) {
    let { selectedChannelId: t, guildId: n, onChangeSelectedChannelId: x } = e,
        g = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        _ = (0, l.e7)([o.Z, s.ZP, a.Z], () => (0, u.h_)(s.ZP.getChannels(n), o.Z, a.Z)),
        v = (0, l.e7)([d.ZP], () => d.ZP.getVoiceStates(n)),
        j = _.map((e) => {
            var n;
            return {
                name: (0, r.jsx)(f.Z, {
                    channel: e,
                    users:
                        null == (n = v[e.id])
                            ? void 0
                            : n
                                  .filter((e) => {
                                      let { user: t } = e;
                                      return t.id !== (null == g ? void 0 : g.id);
                                  })
                                  .map((e) => {
                                      let { user: t } = e;
                                      return t;
                                  }),
                    selected: e.id === t
                }),
                value: e.id
            };
        });
    return (0, r.jsx)(m.Z, {
        title: h.intl.string(h.t['eg7R/v']),
        scrollerInnerClassName: p.channelSelectScrollerInner,
        children: (0, r.jsx)(i.FXm, {
            options: j,
            value: t,
            itemInfoClassName: p.channelInfoWrapper,
            itemTitleClassName: p.channelTitleWrapper,
            onChange: (e) => {
                let { value: t } = e;
                return x(t);
            }
        })
    });
}
