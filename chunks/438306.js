n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(787014),
    s = n(933557),
    l = n(454585),
    c = n(131704),
    u = n(496675),
    d = n(396769),
    f = n(967128),
    _ = n(981631),
    p = n(388032),
    h = n(734335),
    m = n(430864);
function g(e) {
    let { channel: t } = e,
        n = (0, s.ZP)(t, !0),
        g = (0, i.e7)([u.Z], () => u.Z.can(_.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, r.jsxs)(f.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(f.Kq, { channelType: t.type }),
            (0, r.jsx)(f.Ot, { children: p.intl.format(p.t.I3R7Vl, { channelName: n }) }),
            (0, r.jsx)(f.jz, {
                className: m.markup,
                children: p.intl.format(p.t.pYMVRU, {
                    channelName: n,
                    topicHook: () => l.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, r.jsx)("div", {
                      className: h.buttonContainer,
                      children: (0, r.jsx)(d.Z, {
                          label: p.intl.string(p.t["3gUsJS"]),
                          onClick: () => {
                              a.ZP.open(t.id);
                          },
                          icon: (0, r.jsx)(o.vdY, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  })
                : null,
        ],
    });
}
