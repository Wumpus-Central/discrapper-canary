t.d(n, { Z: () => v });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    s = t(984933),
    a = t(430824),
    o = t(496675),
    c = t(594174),
    u = t(938475),
    d = t(102172),
    m = t(499596),
    g = t(148381),
    h = t(388032),
    x = t(454778);
function v(e) {
    let { selectedChannelId: n, guildId: t, onChangeSelectedChannelId: v } = e,
        f = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        j = (0, i.e7)([a.Z, s.ZP, o.Z], () => (0, d.h_)(s.ZP.getChannels(t), a.Z, o.Z)),
        Z = (0, i.e7)([u.ZP], () => u.ZP.getVoiceStates(t)),
        N = j.map((e) => {
            var t;
            return {
                name: (0, l.jsx)(m.Z, {
                    channel: e,
                    users:
                        null === (t = Z[e.id]) || void 0 === t
                            ? void 0
                            : t
                                  .filter((e) => {
                                      let { user: n } = e;
                                      return n.id !== (null == f ? void 0 : f.id);
                                  })
                                  .map((e) => {
                                      let { user: n } = e;
                                      return n;
                                  }),
                    selected: e.id === n
                }),
                value: e.id
            };
        });
    return (0, l.jsx)(g.Z, {
        title: h.NW.string(h.t['eg7R/v']),
        scrollerInnerClassName: x.channelSelectScrollerInner,
        children: (0, l.jsx)(r.FXm, {
            options: N,
            value: n,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
                let { value: n } = e;
                return v(n);
            }
        })
    });
}
