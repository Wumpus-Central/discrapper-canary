t.d(n, { Z: () => v });
var l = t(200651);
t(192379);
var i = t(442837),
    s = t(481060),
    a = t(984933),
    r = t(430824),
    o = t(496675),
    u = t(594174),
    c = t(938475),
    d = t(102172),
    m = t(499596),
    x = t(148381),
    g = t(388032),
    h = t(838332);
function v(e) {
    let { selectedChannelId: n, guildId: t, onChangeSelectedChannelId: v } = e,
        Z = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        S = (0, i.e7)([r.Z, a.ZP, o.Z], () => (0, d.h_)(a.ZP.getChannels(t), r.Z, o.Z)),
        j = (0, i.e7)([c.ZP], () => c.ZP.getVoiceStates(t)),
        C = S.map((e) => {
            var t;
            return {
                name: (0, l.jsx)(m.Z, {
                    channel: e,
                    users:
                        null === (t = j[e.id]) || void 0 === t
                            ? void 0
                            : t
                                  .filter((e) => {
                                      let { user: n } = e;
                                      return n.id !== (null == Z ? void 0 : Z.id);
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
    return (0, l.jsx)(x.Z, {
        title: g.intl.string(g.t['eg7R/v']),
        scrollerInnerClassName: h.channelSelectScrollerInner,
        children: (0, l.jsx)(s.FXm, {
            options: C,
            value: n,
            itemInfoClassName: h.channelInfoWrapper,
            itemTitleClassName: h.channelTitleWrapper,
            onChange: (e) => {
                let { value: n } = e;
                return v(n);
            }
        })
    });
}
