n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(933557),
    s = n(454585),
    c = n(131704),
    u = n(496675),
    d = n(967128),
    p = n(981631),
    f = n(388032),
    h = n(734335),
    m = n(430864);
function g(e) {
    let { channel: t } = e,
        n = (0, o.ZP)(t, !0),
        g = (0, i.e7)([u.Z], () => u.Z.can(p.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, r.jsxs)(d.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(d.Kq, { channelType: t.type }),
            (0, r.jsx)(d.Ot, { children: f.intl.format(f.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(d.jz, {
                className: m.markup,
                children: f.intl.format(f.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => s.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, r.jsx)("div", {
                      className: h.buttonContainer,
                      children: (0, r.jsx)(l.Button, {
                          size: "sm",
                          variant: "secondary",
                          text: f.intl.string(f.t["3gUsJb"]),
                          onClick: () => {
                              a.ZP.open(t.id);
                          },
                          icon: l.vdY,
                      }),
                  })
                : null,
        ],
    });
}
