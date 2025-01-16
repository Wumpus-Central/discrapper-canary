t.d(n, {
    Z: function () {
        return S;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    s = t(481060),
    r = t(984933),
    a = t(430824),
    o = t(496675),
    u = t(594174),
    c = t(938475),
    d = t(102172),
    m = t(499596),
    g = t(148381),
    h = t(388032),
    x = t(838332);
function S(e) {
    let { selectedChannelId: n, guildId: t, onChangeSelectedChannelId: S } = e,
        v = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        Z = (0, i.e7)([a.Z, r.ZP, o.Z], () => (0, d.h_)(r.ZP.getChannels(t), a.Z, o.Z)),
        C = (0, i.e7)([c.ZP], () => c.ZP.getVoiceStates(t)),
        f = Z.map((e) => {
            var t;
            return {
                name: (0, l.jsx)(m.Z, {
                    channel: e,
                    users:
                        null === (t = C[e.id]) || void 0 === t
                            ? void 0
                            : t
                                  .filter((e) => {
                                      let { user: n } = e;
                                      return n.id !== (null == v ? void 0 : v.id);
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
        title: h.intl.string(h.t['eg7R/v']),
        scrollerInnerClassName: x.channelSelectScrollerInner,
        children: (0, l.jsx)(s.RadioGroup, {
            options: f,
            value: n,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
                let { value: n } = e;
                return S(n);
            }
        })
    });
}
