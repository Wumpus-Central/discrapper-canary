n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(780384),
    a = n(481060),
    o = n(668781),
    s = n(308063),
    c = n(493773),
    d = n(410030),
    u = n(600164),
    m = n(63063),
    h = n(725875),
    p = n(981631),
    g = n(388032),
    x = n(112151),
    f = n(893916),
    b = n(408942);
function v(e) {
    let t,
        { guild: n, channel: v, customWebhooks: C, editedWebhook: N, selectableWebhookChannels: I, refToScroller: j, errors: _, canNavigate: T } = e,
        S = (0, d.ZP)(),
        [Z, E] = l.useState(null),
        [y, A] = l.useState(null);
    if (null != v) t = v;
    else {
        let e = Object.values(I);
        t = e.length > 0 ? e[0] : null;
    }
    let R = l.useCallback(async () => {
        if (T() && null !== t) {
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
            null != e && (A(e.id), E(e));
        }
    }, [T, t, n]);
    (0, c.Z)(() => {
        0 === C.length && R();
    });
    let k = null !== t;
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
                              disabled: !k,
                              onClick: R,
                              children: g.intl.string(g.t['nrO/HB'])
                          }),
                          (0, i.jsx)(h.Z, {
                              webhooks: C,
                              editedWebhook: N,
                              selectableWebhookChannels: I,
                              lastCreatedWebhookId: null == Z ? void 0 : Z.id,
                              errors: _,
                              canNavigate: T
                          })
                      ]
                  })
                : (function (e, t, n) {
                      let l = (0, r.wj)(e) ? f : b;
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
                  })(S, k, R)
        ]
    });
}
