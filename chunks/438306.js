n.d(t, { Z: () => g });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(933557),
    s = n(454585),
    c = n(131704),
    u = n(496675),
    d = n(967128),
    p = n(981631),
    h = n(388032),
    f = n(737893),
    m = n(602009);
function g(e) {
    let { channel: t } = e,
        n = (0, o.ZP)(t, !0),
        g = (0, r.e7)([u.Z], () => u.Z.can(p.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
    return (0, i.jsxs)(d.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(d.Kq, { channelType: t.type }),
            (0, i.jsx)(d.Ot, { children: h.intl.format(h.t.I3R7Vn, { channelName: n }) }),
            (0, i.jsx)(d.jz, {
                className: m.markup,
                children: h.intl.format(h.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => s.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, i.jsx)("div", {
                      className: f.buttonContainer,
                      children: (0, i.jsx)(l.Button, {
                          size: "sm",
                          variant: "secondary",
                          text: h.intl.string(h.t["3gUsJb"]),
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
