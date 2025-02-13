n.d(t, { Z: () => f }), n(47120);
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
    g = n(388032),
    p = n(698050),
    b = n(893916),
    _ = n(408942);
function f(e) {
    let t,
        { guild: n, channel: f, customWebhooks: v, editedWebhook: C, selectableWebhookChannels: j, refToScroller: N, errors: I, canNavigate: Z } = e,
        T = (0, c.ZP)(),
        [E, S] = l.useState(null),
        [y, A] = l.useState(null);
    if (null != f) t = f;
    else {
        let e = Object.values(j);
        t = e.length > 0 ? e[0] : null;
    }
    let k = l.useCallback(async () => {
        if (Z() && null !== t) {
            let e = await o.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === x.evJ.TOO_MANY_WEBHOOKS
                        ? s.Z.show({
                              title: g.intl.string(g.t.cCqscX),
                              body: g.intl.string(g.t['w+QZoa'])
                          })
                        : 429 === n
                          ? s.Z.show({
                                title: g.intl.string(g.t.cCqscX),
                                body: g.intl.string(g.t['YBM+UV'])
                            })
                          : s.Z.show({
                                title: g.intl.string(g.t.cCqscX),
                                body: g.intl.string(g.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (A(e.id), S(e));
        }
    }, [Z, t, n]);
    (0, d.ZP)(() => {
        0 === v.length && k();
    });
    let R = null !== t;
    return (0, i.jsxs)(r.hjN, {
        children: [
            (0, i.jsx)(r.R94, {
                type: r.geA.DESCRIPTION,
                children: g.intl.format(g.t.WL0d0d, {
                    helpdeskArticle: m.Z.getArticleURL(x.BhN.WEBHOOKS),
                    developersArticle: x.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, i.jsx)(r.$i$, { className: p.headerDivider }),
            v.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(r.zxk, {
                              className: p.createButton,
                              size: r.zxk.Sizes.SMALL,
                              disabled: !R,
                              onClick: k,
                              children: g.intl.string(g.t['nrO/HB'])
                          }),
                          (0, i.jsx)(h.Z, {
                              webhooks: v,
                              editedWebhook: C,
                              selectableWebhookChannels: j,
                              lastCreatedWebhookId: null == E ? void 0 : E.id,
                              errors: I,
                              canNavigate: Z
                          })
                      ]
                  })
                : (function (e, t, n) {
                      let l = (0, a.wj)(e) ? b : _;
                      return (0, i.jsxs)(u.Z, {
                          direction: u.Z.Direction.VERTICAL,
                          align: u.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: l,
                                  className: p.emptyStateImage
                              }),
                              (0, i.jsx)(r.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: g.intl.string(g.t.LzmsWl)
                              }),
                              (0, i.jsx)(r.zxk, {
                                  className: p.emptyStateButton,
                                  disabled: !t,
                                  onClick: n,
                                  children: g.intl.string(g.t.lOQqJC)
                              })
                          ]
                      });
                  })(T, R, k)
        ]
    });
}
