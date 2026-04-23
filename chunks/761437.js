n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(462887),
    a = n(534514),
    r = n(821609),
    o = n(834730),
    d = n(404778),
    c = n(157559),
    u = n(824953),
    m = n(964486),
    g = n(736653),
    h = n(235986),
    x = n(975571),
    p = n(267001),
    A = n(652215),
    b = n(985018),
    f = n(174900),
    _ = n(734087),
    j = n(609621);
function N(e) {
    let t,
        n,
        {
            guild: N,
            channel: v,
            customWebhooks: E,
            editedWebhook: C,
            selectableWebhookChannels: I,
            refToScroller: T,
            errors: S,
            canNavigate: y,
        } = e,
        w = (0, g.Ay)(),
        [O, k] = l.useState(null),
        [L, R] = l.useState(null);
    if (null != v) n = v;
    else {
        let e = Object.values(I);
        n = e.length > 0 ? e[0] : null;
    }
    let M = l.useCallback(async () => {
        if (y() && null !== n) {
            let e = await u.A.create(N.id, n.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === A.t02.TOO_MANY_WEBHOOKS
                        ? c.A.show({ title: b.intl.string(b.t.cCqsca), body: b.intl.string(b.t["w+QZoX"]) })
                        : 429 === n
                          ? c.A.show({ title: b.intl.string(b.t.cCqsca), body: b.intl.string(b.t["YBM+UW"]) })
                          : c.A.show({ title: b.intl.string(b.t.cCqsca), body: b.intl.string(b.t["/4TwKf"]) }),
                    null
                );
            });
            null != e && (R(e.id), k(e));
        }
    }, [y, n, N]);
    (0, m.Ay)(() => {
        0 === E.length && M();
    });
    let D = null !== n;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.E, {
                variant: "text-sm/normal",
                children: b.intl.format(b.t.WL0d0e, {
                    helpdeskArticle: x.A.getArticleURL(A.MVz.WEBHOOKS),
                    developersArticle: A.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, i.jsx)(d.c, { className: f.zN }),
            E.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: f.Tf,
                              children: (0, i.jsx)(r.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: b.intl.string(b.t["nrO/HH"]),
                                  disabled: !D,
                                  onClick: M,
                              }),
                          }),
                          (0, i.jsx)(p.A, {
                              webhooks: E,
                              editedWebhook: C,
                              selectableWebhookChannels: I,
                              lastCreatedWebhookId: O?.id,
                              errors: S,
                              canNavigate: y,
                          }),
                      ],
                  })
                : ((t = (0, s.M)(w) ? _ : j),
                  (0, i.jsxs)(h.A, {
                      direction: h.A.Direction.VERTICAL,
                      align: h.A.Align.CENTER,
                      children: [
                          (0, i.jsx)("img", { alt: "", src: t, className: f.QT }),
                          (0, i.jsx)(a.D, { variant: "heading-md/semibold", children: b.intl.string(b.t.LzmsWl) }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: f.nM,
                              children: (0, i.jsx)(r.$, {
                                  variant: "primary",
                                  text: b.intl.string(b.t.lOQqJK),
                                  disabled: !D,
                                  onClick: M,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
