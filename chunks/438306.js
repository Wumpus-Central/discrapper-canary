n.d(t, { Z: () => b });
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(933557),
    s = n(454585),
    c = n(131704),
    u = n(496675),
    d = n(396769),
    p = n(967128),
    h = n(981631),
    f = n(388032),
    m = n(734335),
    g = n(430864);
function b(e) {
    let { channel: t } = e,
        n = (0, o.ZP)(t, !0),
        b = (0, r.e7)([u.Z], () => u.Z.can(h.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, i.jsxs)(p.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(p.Kq, { channelType: t.type }),
            (0, i.jsx)(p.Ot, { children: f.intl.format(f.t.I3R7Vn, { channelName: n }) }),
            (0, i.jsx)(p.jz, {
                className: g.markup,
                children: f.intl.format(f.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => s.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            b
                ? (0, i.jsx)("div", {
                      className: m.buttonContainer,
                      children: (0, i.jsx)(d.Z, {
                          label: f.intl.string(f.t["3gUsJb"]),
                          onClick: () => {
                              a.ZP.open(t.id);
                          },
                          icon: (0, i.jsx)(l.vdY, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  })
                : null,
        ],
    });
}
