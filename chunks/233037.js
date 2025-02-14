l.d(n, { Z: () => Z });
var t = l(200651);
l(192379);
var i = l(442837),
    s = l(481060),
    a = l(984933),
    r = l(430824),
    o = l(496675),
    u = l(594174),
    c = l(938475),
    d = l(102172),
    m = l(499596),
    x = l(148381),
    g = l(388032),
    h = l(26918);
function Z(e) {
    let { selectedChannelId: n, guildId: l, onChangeSelectedChannelId: Z } = e,
        v = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        S = (0, i.e7)([r.Z, a.ZP, o.Z], () => (0, d.h_)(a.ZP.getChannels(l), r.Z, o.Z)),
        j = (0, i.e7)([c.ZP], () => c.ZP.getVoiceStates(l)),
        C = S.map((e) => {
            var l;
            return {
                name: (0, t.jsx)(m.Z, {
                    channel: e,
                    users:
                        null === (l = j[e.id]) || void 0 === l
                            ? void 0
                            : l
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
    return (0, t.jsx)(x.Z, {
        title: g.intl.string(g.t['eg7R/v']),
        scrollerInnerClassName: h.channelSelectScrollerInner,
        children: (0, t.jsx)(s.FXm, {
            options: C,
            value: n,
            itemInfoClassName: h.channelInfoWrapper,
            itemTitleClassName: h.channelTitleWrapper,
            onChange: (e) => {
                let { value: n } = e;
                return Z(n);
            }
        })
    });
}
