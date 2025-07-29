(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(780384),
    o = n(481060),
    a = n(668781),
    s = n(308063),
    c = n(493773),
    d = n(410030),
    u = n(600164),
    p = n(63063),
    m = n(725875),
    b = n(981631),
    g = n(388032),
    f = n(14119),
    h = n(893916),
    x = n(408942);
function j(e) {
    let t,
        { guild: n, channel: j, customWebhooks: v, editedWebhook: O, selectableWebhookChannels: y, refToScroller: _, errors: C, canNavigate: N } = e,
        S = (0, d.ZP)(),
        [E, I] = i.useState(null),
        [T, w] = i.useState(null);
    if (null != j) t = j;
    else {
        let e = Object.values(y);
        t = e.length > 0 ? e[0] : null;
    }
    let Z = i.useCallback(async () => {
        if (N() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === b.evJ.TOO_MANY_WEBHOOKS
                        ? a.Z.show({
                              title: g.intl.string(g.t.cCqscX),
                              body: g.intl.string(g.t['w+QZoa'])
                          })
                        : 429 === n
                          ? a.Z.show({
                                title: g.intl.string(g.t.cCqscX),
                                body: g.intl.string(g.t['YBM+UV'])
                            })
                          : a.Z.show({
                                title: g.intl.string(g.t.cCqscX),
                                body: g.intl.string(g.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (w(e.id), I(e));
        }
    }, [N, t, n]);
    (0, c.ZP)(() => {
        0 === v.length && Z();
    });
    let P = null !== t;
    return (0, r.jsxs)(o.hjN, {
        children: [
            (0, r.jsx)(o.R94, {
                type: o.geA.DESCRIPTION,
                children: g.intl.format(g.t.WL0d0d, {
                    helpdeskArticle: p.Z.getArticleURL(b.BhN.WEBHOOKS),
                    developersArticle: b.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, r.jsx)(o.$i$, { className: f.headerDivider }),
            v.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: f.createButton,
                              children: (0, r.jsx)(o.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: g.intl.string(g.t['nrO/HB']),
                                  disabled: !P,
                                  onClick: Z
                              })
                          }),
                          (0, r.jsx)(m.Z, {
                              webhooks: v,
                              editedWebhook: O,
                              selectableWebhookChannels: y,
                              lastCreatedWebhookId: null == E ? void 0 : E.id,
                              errors: C,
                              canNavigate: N
                          })
                      ]
                  })
                : (function (e, t, n) {
                      let i = (0, l.wj)(e) ? h : x;
                      return (0, r.jsxs)(u.Z, {
                          direction: u.Z.Direction.VERTICAL,
                          align: u.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: i,
                                  className: f.emptyStateImage
                              }),
                              (0, r.jsx)(o.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: g.intl.string(g.t.LzmsWl)
                              }),
                              (0, r.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: f.emptyStateButton,
                                  children: (0, r.jsx)(o.zxk, {
                                      variant: 'primary',
                                      text: g.intl.string(g.t.lOQqJC),
                                      disabled: !t,
                                      onClick: n
                                  })
                              })
                          ]
                      });
                  })(S, P, Z)
        ]
    });
}
