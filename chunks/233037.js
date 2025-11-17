t.d(n, { Z: () => j });
var l = t(54381);
t(473749);
var r = t(442837),
    i = t(755721),
    s = t(984933),
    a = t(430824),
    c = t(496675),
    o = t(594174),
    u = t(938475),
    d = t(102172),
    m = t(499596),
    x = t(148381),
    g = t(388032),
    h = t(376681);
function j(e) {
    let { selectedChannelId: n, guildId: t, onChangeSelectedChannelId: j } = e,
        v = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        p = (0, r.e7)([a.Z, s.ZP, c.Z], () => (0, d.h_)(s.ZP.getChannels(t), a.Z, c.Z)),
        f = (0, r.e7)([u.ZP], () => u.ZP.getVoiceStates(t)),
        Z = p.map((e) => {
            var t;
            return {
                name: (0, l.jsx)(m.Z, {
                    channel: e,
                    users:
                        null == (t = f[e.id])
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
                    selected: e.id === n,
                }),
                value: e.id,
            };
        });
    return (0, l.jsx)(x.Z, {
        title: g.intl.string(g.t["eg7R/k"]),
        scrollerInnerClassName: h.channelSelectScrollerInner,
        children: (0, l.jsx)(i.Gu, {
            options: Z,
            value: n,
            itemInfoClassName: h.channelInfoWrapper,
            itemTitleClassName: h.channelTitleWrapper,
            onChange: (e) => {
                let { value: n } = e;
                return j(n);
            },
        }),
    });
}
