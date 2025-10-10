n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(755721),
    s = n(984933),
    o = n(430824),
    a = n(496675),
    c = n(594174),
    d = n(938475),
    u = n(102172),
    f = n(499596),
    m = n(148381),
    h = n(388032),
    p = n(376681);
function g(e) {
    let { selectedChannelId: t, guildId: n, onChangeSelectedChannelId: g } = e,
        x = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        _ = (0, i.e7)([o.Z, s.ZP, a.Z], () => (0, u.h_)(s.ZP.getChannels(n), o.Z, a.Z)),
        v = (0, i.e7)([d.ZP], () => d.ZP.getVoiceStates(n)),
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
                                      return t.id !== (null == x ? void 0 : x.id);
                                  })
                                  .map((e) => {
                                      let { user: t } = e;
                                      return t;
                                  }),
                    selected: e.id === t,
                }),
                value: e.id,
            };
        });
    return (0, r.jsx)(m.Z, {
        title: h.intl.string(h.t["eg7R/v"]),
        scrollerInnerClassName: p.channelSelectScrollerInner,
        children: (0, r.jsx)(l.Gu, {
            options: j,
            value: t,
            itemInfoClassName: p.channelInfoWrapper,
            itemTitleClassName: p.channelTitleWrapper,
            onChange: (e) => {
                let { value: t } = e;
                return g(t);
            },
        }),
    });
}
