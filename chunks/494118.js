n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(780384),
    l = n(481060),
    o = n(410030),
    a = n(600164),
    s = n(63063),
    c = n(725875),
    d = n(981631),
    u = n(388032),
    p = n(431349),
    m = n(893916),
    b = n(408942);
function g(e) {
    let { followedChannelWebhooks: t, editedWebhook: n, selectableWebhookChannels: g, errors: f, canNavigate: h } = e,
        x = (0, o.ZP)();
    return (0, i.jsxs)(l.hjN, {
        children: [
            (0, i.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                children: u.intl.format(u.t['5u+aV1'], { helpdeskArticle: s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING) })
            }),
            (0, i.jsx)(l.$i$, { className: p.headerDivider }),
            t.length > 0
                ? (0, i.jsx)(c.Z, {
                      webhooks: t,
                      editedWebhook: n,
                      selectableWebhookChannels: g,
                      errors: f,
                      canNavigate: h
                  })
                : (function (e, t) {
                      let n = (0, r.wj)(e) ? m : b;
                      return (0, i.jsxs)(a.Z, {
                          direction: a.Z.Direction.VERTICAL,
                          align: a.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n,
                                  className: p.emptyStateImage
                              }),
                              (0, i.jsx)(l.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: u.intl.string(u.t.gzuVHx)
                              }),
                              (0, i.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: p.emptyStateButton,
                                  children: (0, i.jsx)(l.zxk, {
                                      variant: 'primary',
                                      text: u.intl.string(u.t['ZwSt+f']),
                                      onClick: t
                                  })
                              })
                          ]
                      });
                  })(x, () => open(s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)))
        ]
    });
}
