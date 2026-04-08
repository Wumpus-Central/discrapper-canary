n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(435183),
    r = n(47167),
    o = n(46054),
    c = n(95701),
    d = n(576705),
    u = n(314307),
    h = n(652215),
    m = n(985018),
    A = n(52759),
    p = n(830684);
function g(e) {
    let { channel: t } = e,
        n = (0, r.Ay)(t, !0),
        g = (0, l.bG)([d.A], () => d.A.can(h.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
    return (0, i.jsxs)(u.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)(u.WK, { channelType: t.type }),
            (0, i.jsx)(u.cr, { children: m.intl.format(m.t.I3R7Vn, { channelName: n }) }),
            (0, i.jsx)(u.j1, {
                className: p.PT,
                children: m.intl.format(m.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => o.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, i.jsx)("div", {
                      className: A.U,
                      children: (0, i.jsx)(s.Button, {
                          size: "sm",
                          variant: "secondary",
                          text: m.intl.string(m.t["3gUsJb"]),
                          onClick: () => {
                              a.Ay.open(t.id);
                          },
                          icon: s.R2l,
                      }),
                  })
                : null,
        ],
    });
}
