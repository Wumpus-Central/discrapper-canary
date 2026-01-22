n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(435183),
    s = n(47167),
    o = n(46054),
    c = n(95701),
    u = n(576705),
    d = n(314307),
    f = n(652215),
    p = n(985018),
    h = n(516261),
    b = n(206314);

function g(e) {
    let { channel: t } = e,
        n = (0, s.Ay)(t, !0),
        g = (0, l.bG)([u.A], () => u.A.can(f.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
    return (0, r.jsxs)(d.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(d.WK, {
                channelType: t.type,
            }),
            (0, r.jsx)(d.cr, {
                children: p.intl.format(p.t.I3R7Vn, {
                    channelName: n,
                }),
            }),
            (0, r.jsx)(d.j1, {
                className: b.PT,
                children: p.intl.format(p.t.pYMVRT, {
                    channelName: n,
                    topicHook: () =>
                        o.A.parseTopic(t.topic, !0, {
                            channelId: t.id,
                        }),
                }),
            }),
            g
                ? (0, r.jsx)("div", {
                      className: h.U,
                      children: (0, r.jsx)(i.Button, {
                          size: "sm",
                          variant: "secondary",
                          text: p.intl.string(p.t["3gUsJb"]),
                          onClick: () => {
                              a.Ay.open(t.id);
                          },
                          icon: i.R2l,
                      }),
                  })
                : null,
        ],
    });
}
