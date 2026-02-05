n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(582754),
    a = n(397927),
    r = n(157559),
    o = n(824953),
    d = n(964486),
    c = n(736653),
    u = n(235986),
    m = n(975571),
    g = n(267001),
    x = n(652215),
    h = n(985018),
    p = n(851121),
    A = n(734087),
    b = n(609621);
function _(e) {
    let t,
        n,
        {
            guild: _,
            channel: f,
            customWebhooks: N,
            editedWebhook: j,
            selectableWebhookChannels: T,
            refToScroller: C,
            errors: v,
            canNavigate: E,
        } = e,
        I = (0, c.Ay)(),
        [S, y] = l.useState(null),
        [O, w] = l.useState(null);
    if (null != f) n = f;
    else {
        let e = Object.values(T);
        n = e.length > 0 ? e[0] : null;
    }
    let R = l.useCallback(async () => {
        if (E() && null !== n) {
            let e = await o.A.create(_.id, n.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === x.t02.TOO_MANY_WEBHOOKS
                        ? r.A.show({ title: h.intl.string(h.t.cCqsca), body: h.intl.string(h.t["w+QZoX"]) })
                        : 429 === n
                          ? r.A.show({ title: h.intl.string(h.t.cCqsca), body: h.intl.string(h.t["YBM+UW"]) })
                          : r.A.show({ title: h.intl.string(h.t.cCqsca), body: h.intl.string(h.t["/4TwKf"]) }),
                    null
                );
            });
            null != e && (w(e.id), y(e));
        }
    }, [E, n, _]);
    (0, d.Ay)(() => {
        0 === N.length && R();
    });
    let k = null !== n;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.WL0d0e, {
                    helpdeskArticle: m.A.getArticleURL(x.MVz.WEBHOOKS),
                    developersArticle: x.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, i.jsx)(a.cGx, { className: p.zN }),
            N.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: p.Tf,
                              children: (0, i.jsx)(a.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: h.intl.string(h.t["nrO/HH"]),
                                  disabled: !k,
                                  onClick: R,
                              }),
                          }),
                          (0, i.jsx)(g.A, {
                              webhooks: N,
                              editedWebhook: j,
                              selectableWebhookChannels: T,
                              lastCreatedWebhookId: S?.id,
                              errors: v,
                              canNavigate: E,
                          }),
                      ],
                  })
                : ((t = (0, s.Mw)(I) ? A : b),
                  (0, i.jsxs)(u.A, {
                      direction: u.A.Direction.VERTICAL,
                      align: u.A.Align.CENTER,
                      children: [
                          (0, i.jsx)("img", { alt: "", src: t, className: p.QT }),
                          (0, i.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              children: h.intl.string(h.t.LzmsWl),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: p.nM,
                              children: (0, i.jsx)(a.Button, {
                                  variant: "primary",
                                  text: h.intl.string(h.t.lOQqJK),
                                  disabled: !k,
                                  onClick: R,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
