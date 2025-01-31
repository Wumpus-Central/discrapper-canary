n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(780384),
    r = n(481060),
    s = n(668781),
    o = n(308063),
    d = n(493773),
    c = n(410030),
    u = n(600164),
    m = n(63063),
    h = n(725875),
    x = n(981631),
    p = n(388032),
    g = n(112151),
    f = n(893916),
    b = n(408942);
function v(e) {
    let t,
        { guild: n, channel: v, customWebhooks: _, editedWebhook: j, selectableWebhookChannels: N, refToScroller: C, errors: I, canNavigate: Z } = e,
        T = (0, c.ZP)(),
        [E, S] = l.useState(null),
        [y, A] = l.useState(null);
    if (null != v) t = v;
    else {
        let e = Object.values(N);
        t = e.length > 0 ? e[0] : null;
    }
    let k = l.useCallback(async () => {
        if (Z() && null !== t) {
            let e = await o.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === x.evJ.TOO_MANY_WEBHOOKS
                        ? s.Z.show({
                              title: p.intl.string(p.t.cCqscX),
                              body: p.intl.string(p.t['w+QZoa'])
                          })
                        : 429 === n
                          ? s.Z.show({
                                title: p.intl.string(p.t.cCqscX),
                                body: p.intl.string(p.t['YBM+UV'])
                            })
                          : s.Z.show({
                                title: p.intl.string(p.t.cCqscX),
                                body: p.intl.string(p.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (A(e.id), S(e));
        }
    }, [Z, t, n]);
    (0, d.Z)(() => {
        0 === _.length && k();
    });
    let R = null !== t;
    return (0, i.jsxs)(r.hjN, {
        children: [
            (0, i.jsx)(r.R94, {
                type: r.geA.DESCRIPTION,
                children: p.intl.format(p.t.WL0d0d, {
                    helpdeskArticle: m.Z.getArticleURL(x.BhN.WEBHOOKS),
                    developersArticle: x.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, i.jsx)(r.$i$, { className: g.headerDivider }),
            _.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(r.zxk, {
                              className: g.createButton,
                              size: r.zxk.Sizes.SMALL,
                              disabled: !R,
                              onClick: k,
                              children: p.intl.string(p.t['nrO/HB'])
                          }),
                          (0, i.jsx)(h.Z, {
                              webhooks: _,
                              editedWebhook: j,
                              selectableWebhookChannels: N,
                              lastCreatedWebhookId: null == E ? void 0 : E.id,
                              errors: I,
                              canNavigate: Z
                          })
                      ]
                  })
                : (function (e, t, n) {
                      let l = (0, a.wj)(e) ? f : b;
                      return (0, i.jsxs)(u.Z, {
                          direction: u.Z.Direction.VERTICAL,
                          align: u.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: l,
                                  className: g.emptyStateImage
                              }),
                              (0, i.jsx)(r.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: p.intl.string(p.t.LzmsWl)
                              }),
                              (0, i.jsx)(r.zxk, {
                                  className: g.emptyStateButton,
                                  disabled: !t,
                                  onClick: n,
                                  children: p.intl.string(p.t.lOQqJC)
                              })
                          ]
                      });
                  })(T, R, k)
        ]
    });
}
