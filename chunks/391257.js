n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(821609),
    s = n(22231),
    r = n(435183),
    o = n(47167),
    c = n(46054),
    d = n(95701),
    u = n(576705),
    h = n(314307),
    m = n(652215),
    A = n(985018),
    g = n(329856),
    _ = n(992595);
function p(e) {
    let { channel: t } = e,
        n = (0, o.Ay)(t, !0),
        p = (0, l.bG)([u.A], () => u.A.can(m.xBc.MANAGE_CHANNELS, t) && d.bk.has(t.type));
    return (0, i.jsxs)(h.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)(h.WK, { channelType: t.type }),
            (0, i.jsx)(h.cr, { children: A.intl.format(A.t.I3R7Vn, { channelName: n }) }),
            (0, i.jsx)(h.j1, {
                className: _.PT,
                children: A.intl.format(A.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => c.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, i.jsx)("div", {
                      className: g.U,
                      children: (0, i.jsx)(a.$, {
                          size: "sm",
                          variant: "secondary",
                          text: A.intl.string(A.t["3gUsJb"]),
                          onClick: () => {
                              r.Ay.open(t.id);
                          },
                          icon: s.R,
                      }),
                  })
                : null,
        ],
    });
}
