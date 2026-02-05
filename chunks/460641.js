n.d(t, { A: () => h });
var i = n(627968),
    l = n(582754),
    s = n(397927),
    a = n(736653),
    r = n(235986),
    o = n(975571),
    d = n(267001),
    c = n(652215),
    u = n(985018),
    m = n(436057),
    g = n(734087),
    x = n(609621);
function h(e) {
    var t;
    let n,
        { followedChannelWebhooks: h, editedWebhook: p, selectableWebhookChannels: A, errors: b, canNavigate: _ } = e,
        f = (0, a.Ay)();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: u.intl.format(u.t["5u+aV1"], { helpdeskArticle: o.A.getArticleURL(c.MVz.CHANNEL_FOLLOWING) }),
            }),
            (0, i.jsx)(s.cGx, { className: m.zN }),
            h.length > 0
                ? (0, i.jsx)(d.A, {
                      webhooks: h,
                      editedWebhook: p,
                      selectableWebhookChannels: A,
                      errors: b,
                      canNavigate: _,
                  })
                : ((t = () => open(o.A.getArticleURL(c.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, l.Mw)(f) ? g : x),
                  (0, i.jsxs)(r.A, {
                      direction: r.A.Direction.VERTICAL,
                      align: r.A.Align.CENTER,
                      children: [
                          (0, i.jsx)("img", { alt: "", src: n, className: m.QT }),
                          (0, i.jsx)(s.Heading, {
                              variant: "heading-md/semibold",
                              children: u.intl.string(u.t.gzuVH0),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: m.nM,
                              children: (0, i.jsx)(s.Button, {
                                  variant: "primary",
                                  text: u.intl.string(u.t["ZwSt+T"]),
                                  onClick: t,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
