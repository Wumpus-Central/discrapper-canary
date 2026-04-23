n.d(t, { A: () => b });
var i = n(627968),
    l = n(462887),
    s = n(534514),
    a = n(821609),
    r = n(834730),
    o = n(404778),
    d = n(736653),
    c = n(235986),
    u = n(975571),
    m = n(267001),
    g = n(652215),
    h = n(985018),
    x = n(936256),
    p = n(734087),
    A = n(609621);
function b(e) {
    var t;
    let n,
        { followedChannelWebhooks: b, editedWebhook: f, selectableWebhookChannels: _, errors: j, canNavigate: N } = e,
        v = (0, d.Ay)();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t["5u+aV1"], { helpdeskArticle: u.A.getArticleURL(g.MVz.CHANNEL_FOLLOWING) }),
            }),
            (0, i.jsx)(o.c, { className: x.zN }),
            b.length > 0
                ? (0, i.jsx)(m.A, {
                      webhooks: b,
                      editedWebhook: f,
                      selectableWebhookChannels: _,
                      errors: j,
                      canNavigate: N,
                  })
                : ((t = () => open(u.A.getArticleURL(g.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, l.M)(v) ? p : A),
                  (0, i.jsxs)(c.A, {
                      direction: c.A.Direction.VERTICAL,
                      align: c.A.Align.CENTER,
                      children: [
                          (0, i.jsx)("img", { alt: "", src: n, className: x.QT }),
                          (0, i.jsx)(s.D, { variant: "heading-md/semibold", children: h.intl.string(h.t.gzuVH0) }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: x.nM,
                              children: (0, i.jsx)(a.$, {
                                  variant: "primary",
                                  text: h.intl.string(h.t["ZwSt+T"]),
                                  onClick: t,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
