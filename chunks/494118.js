n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var l = n(780384),
    r = n(481060),
    a = n(410030),
    o = n(600164),
    s = n(63063),
    d = n(725875),
    c = n(981631),
    u = n(388032),
    m = n(471199),
    h = n(893916),
    p = n(408942);
function g(e) {
    let { followedChannelWebhooks: t, editedWebhook: n, selectableWebhookChannels: g, errors: x, canNavigate: f } = e,
        b = (0, a.ZP)();
    return (0, i.jsxs)(r.FormSection, {
        children: [
            (0, i.jsx)(r.FormText, {
                type: r.FormTextTypes.DESCRIPTION,
                children: u.intl.format(u.t['5u+aV1'], { helpdeskArticle: s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING) })
            }),
            (0, i.jsx)(r.FormDivider, { className: m.headerDivider }),
            t.length > 0
                ? (0, i.jsx)(d.Z, {
                      webhooks: t,
                      editedWebhook: n,
                      selectableWebhookChannels: g,
                      errors: x,
                      canNavigate: f
                  })
                : (function (e, t) {
                      let n = (0, l.wj)(e) ? h : p;
                      return (0, i.jsxs)(o.Z, {
                          direction: o.Z.Direction.VERTICAL,
                          align: o.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n,
                                  className: m.emptyStateImage
                              }),
                              (0, i.jsx)(r.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: u.intl.string(u.t.gzuVHx)
                              }),
                              (0, i.jsx)(r.Button, {
                                  className: m.emptyStateButton,
                                  onClick: t,
                                  children: u.intl.string(u.t['ZwSt+f'])
                              })
                          ]
                      });
                  })(b, () => open(s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING)))
        ]
    });
}
