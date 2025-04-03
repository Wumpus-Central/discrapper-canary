n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
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
        { guild: n, channel: j, customWebhooks: N, editedWebhook: O, selectableWebhookChannels: v, refToScroller: y, errors: _, canNavigate: C } = e,
        I = (0, d.ZP)(),
        [S, E] = i.useState(null),
        [P, w] = i.useState(null);
    if (null != j) t = j;
    else {
        let e = Object.values(v);
        t = e.length > 0 ? e[0] : null;
    }
    let T = i.useCallback(async () => {
        if (C() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === b.evJ.TOO_MANY_WEBHOOKS
                        ? a.Z.show({
                              title: g.NW.string(g.t.cCqscX),
                              body: g.NW.string(g.t['w+QZoa'])
                          })
                        : 429 === n
                          ? a.Z.show({
                                title: g.NW.string(g.t.cCqscX),
                                body: g.NW.string(g.t['YBM+UV'])
                            })
                          : a.Z.show({
                                title: g.NW.string(g.t.cCqscX),
                                body: g.NW.string(g.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (w(e.id), E(e));
        }
    }, [C, t, n]);
    (0, c.ZP)(() => {
        0 === N.length && T();
    });
    let Z = null !== t;
    return (0, r.jsxs)(o.hjN, {
        children: [
            (0, r.jsx)(o.R94, {
                type: o.geA.DESCRIPTION,
                children: g.NW.format(g.t.WL0d0d, {
                    helpdeskArticle: p.Z.getArticleURL(b.BhN.WEBHOOKS),
                    developersArticle: b.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, r.jsx)(o.$i$, { className: f.headerDivider }),
            N.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.zxk, {
                              className: f.createButton,
                              size: o.zxk.Sizes.SMALL,
                              disabled: !Z,
                              onClick: T,
                              children: g.NW.string(g.t['nrO/HB'])
                          }),
                          (0, r.jsx)(m.Z, {
                              webhooks: N,
                              editedWebhook: O,
                              selectableWebhookChannels: v,
                              lastCreatedWebhookId: null == S ? void 0 : S.id,
                              errors: _,
                              canNavigate: C
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
                                  children: g.NW.string(g.t.LzmsWl)
                              }),
                              (0, r.jsx)(o.zxk, {
                                  className: f.emptyStateButton,
                                  disabled: !t,
                                  onClick: n,
                                  children: g.NW.string(g.t.lOQqJC)
                              })
                          ]
                      });
                  })(I, Z, T)
        ]
    });
}
