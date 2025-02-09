n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(787014),
    s = n(933557),
    o = n(454585),
    c = n(131704),
    d = n(496675),
    u = n(396769),
    h = n(967128),
    p = n(981631),
    m = n(388032),
    f = n(914498);
function g(e) {
    let { channel: t } = e,
        n = (0, s.ZP)(t, !0),
        g = (0, l.e7)([d.Z], () => d.Z.can(p.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, i.jsxs)(h.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(h.Kq, { channelType: t.type }),
            (0, i.jsx)(h.Ot, { children: m.intl.format(m.t.I3R7Vl, { channelName: n }) }),
            (0, i.jsx)(h.jz, {
                children: m.intl.format(m.t.pYMVRU, {
                    channelName: n,
                    topicHook: () => o.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            g
                ? (0, i.jsx)('div', {
                      className: f.buttonContainer,
                      children: (0, i.jsx)(u.Z, {
                          label: m.intl.string(m.t['3gUsJS']),
                          onClick: () => {
                              r.ZP.open(t.id);
                          },
                          icon: (0, i.jsx)(a.vdY, {
                              size: 'xs',
                              color: 'currentColor'
                          })
                      })
                  })
                : null
        ]
    });
}
