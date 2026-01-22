n.d(t, { A: () => m });
var i = n(627968),
    r = n(582754),
    l = n(397927),
    a = n(736653),
    s = n(235986),
    o = n(975571),
    c = n(267001),
    d = n(652215),
    u = n(985018),
    b = n(436057),
    f = n(734087),
    p = n(609621);
function m(e) {
    var t;
    let n,
        { followedChannelWebhooks: m, editedWebhook: g, selectableWebhookChannels: h, errors: x, canNavigate: j } = e,
        O = (0, a.Ay)();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: u.intl.format(u.t["5u+aV1"], { helpdeskArticle: o.A.getArticleURL(d.MVz.CHANNEL_FOLLOWING) }),
            }),
            (0, i.jsx)(l.cGx, { className: b.zN }),
            m.length > 0
                ? (0, i.jsx)(c.A, {
                      webhooks: m,
                      editedWebhook: g,
                      selectableWebhookChannels: h,
                      errors: x,
                      canNavigate: j,
                  })
                : ((t = () => open(o.A.getArticleURL(d.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, r.Mw)(O) ? f : p),
                  (0, i.jsxs)(s.A, {
                      direction: s.A.Direction.VERTICAL,
                      align: s.A.Align.CENTER,
                      children: [
                          (0, i.jsx)("img", {
                              alt: "",
                              src: n,
                              className: b.QT,
                          }),
                          (0, i.jsx)(l.Heading, {
                              variant: "heading-md/semibold",
                              children: u.intl.string(u.t.gzuVH0),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: b.nM,
                              children: (0, i.jsx)(l.Button, {
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
