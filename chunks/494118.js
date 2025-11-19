n.d(t, { Z: () => g });
var i = n(54381),
    r = n(780384),
    l = n(481060),
    a = n(410030),
    o = n(600164),
    s = n(63063),
    c = n(725875),
    d = n(981631),
    u = n(388032),
    p = n(845525),
    m = n(893916),
    b = n(408942);
function g(e) {
    let { followedChannelWebhooks: t, editedWebhook: n, selectableWebhookChannels: g, errors: f, canNavigate: h } = e,
        x = (0, a.ZP)();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: u.intl.format(u.t["5u+aV1"], { helpdeskArticle: s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING) }),
            }),
            (0, i.jsx)(l.izJ, { className: p.headerDivider }),
            t.length > 0
                ? (0, i.jsx)(c.Z, {
                      webhooks: t,
                      editedWebhook: n,
                      selectableWebhookChannels: g,
                      errors: f,
                      canNavigate: h,
                  })
                : (function (e, t) {
                      let n = (0, r.wj)(e) ? m : b;
                      return (0, i.jsxs)(o.Z, {
                          direction: o.Z.Direction.VERTICAL,
                          align: o.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: "",
                                  src: n,
                                  className: p.emptyStateImage,
                              }),
                              (0, i.jsx)(l.Heading, {
                                  variant: "heading-md/semibold",
                                  children: u.intl.string(u.t.gzuVH0),
                              }),
                              (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: p.emptyStateButton,
                                  children: (0, i.jsx)(l.Button, {
                                      variant: "primary",
                                      text: u.intl.string(u.t["ZwSt+T"]),
                                      onClick: t,
                                  }),
                              }),
                          ],
                      });
                  })(x, () => open(s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING))),
        ],
    });
}
