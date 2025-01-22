n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(780384),
    a = n(481060),
    o = n(668781),
    s = n(308063),
    d = n(493773),
    c = n(410030),
    u = n(600164),
    m = n(63063),
    h = n(725875),
    p = n(981631),
    g = n(388032),
    x = n(112151),
    f = n(893916),
    v = n(408942);
function b(e) {
    let t,
        { guild: n, channel: b, customWebhooks: C, editedWebhook: I, selectableWebhookChannels: N, refToScroller: j, errors: T, canNavigate: _ } = e,
        Z = (0, c.ZP)(),
        [E, S] = l.useState(null),
        [y, A] = l.useState(null);
    if (null != b) t = b;
    else {
        let e = Object.values(N);
        t = e.length > 0 ? e[0] : null;
    }
    let L = l.useCallback(async () => {
        if (_() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === p.evJ.TOO_MANY_WEBHOOKS
                        ? o.Z.show({
                              title: g.intl.string(g.t.cCqscX),
                              body: g.intl.string(g.t['w+QZoa'])
                          })
                        : 429 === n
                          ? o.Z.show({
                                title: g.intl.string(g.t.cCqscX),
                                body: g.intl.string(g.t['YBM+UV'])
                            })
                          : o.Z.show({
                                title: g.intl.string(g.t.cCqscX),
                                body: g.intl.string(g.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (A(e.id), S(e));
        }
    }, [_, t, n]);
    (0, d.Z)(() => {
        0 === C.length && L();
    });
    let R = null !== t;
    return (0, i.jsxs)(a.FormSection, {
        children: [
            (0, i.jsx)(a.FormText, {
                type: a.FormTextTypes.DESCRIPTION,
                children: g.intl.format(g.t.WL0d0d, {
                    helpdeskArticle: m.Z.getArticleURL(p.BhN.WEBHOOKS),
                    developersArticle: p.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, i.jsx)(a.FormDivider, { className: x.headerDivider }),
            C.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a.Button, {
                              className: x.createButton,
                              size: a.Button.Sizes.SMALL,
                              disabled: !R,
                              onClick: L,
                              children: g.intl.string(g.t['nrO/HB'])
                          }),
                          (0, i.jsx)(h.Z, {
                              webhooks: C,
                              editedWebhook: I,
                              selectableWebhookChannels: N,
                              lastCreatedWebhookId: null == E ? void 0 : E.id,
                              errors: T,
                              canNavigate: _
                          })
                      ]
                  })
                : (function (e, t, n) {
                      let l = (0, r.wj)(e) ? f : v;
                      return (0, i.jsxs)(u.Z, {
                          direction: u.Z.Direction.VERTICAL,
                          align: u.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: l,
                                  className: x.emptyStateImage
                              }),
                              (0, i.jsx)(a.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: g.intl.string(g.t.LzmsWl)
                              }),
                              (0, i.jsx)(a.Button, {
                                  className: x.emptyStateButton,
                                  disabled: !t,
                                  onClick: n,
                                  children: g.intl.string(g.t.lOQqJC)
                              })
                          ]
                      });
                  })(Z, R, L)
        ]
    });
}
