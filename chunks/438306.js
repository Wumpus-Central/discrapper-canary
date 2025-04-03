n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(787014),
    a = n(933557),
    s = n(454585),
    c = n(131704),
    u = n(496675),
    d = n(396769),
    p = n(967128),
    h = n(981631),
    f = n(388032),
    m = n(991992);
function g(e) {
    let { channel: t } = e,
        n = (0, a.ZP)(t, !0),
        g = (0, i.e7)([u.Z], () => u.Z.can(h.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, r.jsxs)(p.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(p.Kq, { channelType: t.type }),
            (0, r.jsx)(p.Ot, { children: f.NW.format(f.t.I3R7Vl, { channelName: n }) }),
            (0, r.jsx)(p.jz, {
                children: f.NW.format(f.t.pYMVRU, {
                    channelName: n,
                    topicHook: () => s.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            g
                ? (0, r.jsx)('div', {
                      className: m.buttonContainer,
                      children: (0, r.jsx)(d.Z, {
                          label: f.NW.string(f.t['3gUsJS']),
                          onClick: () => {
                              o.ZP.open(t.id);
                          },
                          icon: (0, r.jsx)(l.vdY, {
                              size: 'xs',
                              color: 'currentColor'
                          })
                      })
                  })
                : null
        ]
    });
}
