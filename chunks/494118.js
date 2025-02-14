n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(780384),
    a = n(481060),
    r = n(410030),
    s = n(600164),
    o = n(63063),
    d = n(725875),
    c = n(981631),
    u = n(388032),
    m = n(229228),
    h = n(893916),
    x = n(408942);
function g(e) {
    let { followedChannelWebhooks: t, editedWebhook: n, selectableWebhookChannels: g, errors: p, canNavigate: f } = e,
        b = (0, r.ZP)();
    return (0, i.jsxs)(a.hjN, {
        children: [
            (0, i.jsx)(a.R94, {
                type: a.geA.DESCRIPTION,
                children: u.intl.format(u.t['5u+aV1'], { helpdeskArticle: o.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING) })
            }),
            (0, i.jsx)(a.$i$, { className: m.headerDivider }),
            t.length > 0
                ? (0, i.jsx)(d.Z, {
                      webhooks: t,
                      editedWebhook: n,
                      selectableWebhookChannels: g,
                      errors: p,
                      canNavigate: f
                  })
                : (function (e, t) {
                      let n = (0, l.wj)(e) ? h : x;
                      return (0, i.jsxs)(s.Z, {
                          direction: s.Z.Direction.VERTICAL,
                          align: s.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n,
                                  className: m.emptyStateImage
                              }),
                              (0, i.jsx)(a.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: u.intl.string(u.t.gzuVHx)
                              }),
                              (0, i.jsx)(a.zxk, {
                                  className: m.emptyStateButton,
                                  onClick: t,
                                  children: u.intl.string(u.t['ZwSt+f'])
                              })
                          ]
                      });
                  })(b, () => open(o.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING)))
        ]
    });
}
