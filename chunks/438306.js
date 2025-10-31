n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(933557),
    s = n(454585),
    c = n(131704),
    u = n(496675),
    d = n(396769),
    p = n(967128),
    f = n(981631),
    h = n(388032),
    m = n(734335),
    g = n(430864);
function b(e) {
    let { channel: t } = e,
        n = (0, o.ZP)(t, !0),
        b = (0, i.e7)([u.Z], () => u.Z.can(f.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, r.jsxs)(p.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(p.Kq, { channelType: t.type }),
            (0, r.jsx)(p.Ot, { children: h.intl.format(h.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(p.jz, {
                className: g.markup,
                children: h.intl.format(h.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => s.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            b
                ? (0, r.jsx)("div", {
                      className: m.buttonContainer,
                      children: (0, r.jsx)(d.Z, {
                          label: h.intl.string(h.t["3gUsJb"]),
                          onClick: () => {
                              a.ZP.open(t.id);
                          },
                          icon: (0, r.jsx)(l.vdY, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  })
                : null,
        ],
    });
}
