n.d(t, {
    A: () => j,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(582754),
    a = n(397927),
    s = n(157559),
    o = n(824953),
    c = n(964486),
    d = n(736653),
    u = n(235986),
    b = n(975571),
    f = n(267001),
    p = n(652215),
    m = n(985018),
    g = n(851121),
    h = n(734087),
    x = n(609621);

function j(e) {
    let t,
        n,
        {
            guild: j,
            channel: O,
            customWebhooks: y,
            editedWebhook: A,
            selectableWebhookChannels: v,
            refToScroller: N,
            errors: E,
            canNavigate: T,
        } = e,
        w = (0, d.Ay)(),
        [C, S] = r.useState(null),
        [_, I] = r.useState(null);
    if (null != O) n = O;
    else {
        let e = Object.values(v);
        n = e.length > 0 ? e[0] : null;
    }
    let P = r.useCallback(async () => {
        if (T() && null !== n) {
            let e = await o.A.create(j.id, n.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === p.t02.TOO_MANY_WEBHOOKS
                        ? s.A.show({
                              title: m.intl.string(m.t.cCqsca),
                              body: m.intl.string(m.t["w+QZoX"]),
                          })
                        : 429 === n
                          ? s.A.show({
                                title: m.intl.string(m.t.cCqsca),
                                body: m.intl.string(m.t["YBM+UW"]),
                            })
                          : s.A.show({
                                title: m.intl.string(m.t.cCqsca),
                                body: m.intl.string(m.t["/4TwKf"]),
                            }),
                    null
                );
            });
            null != e && (I(e.id), S(e));
        }
    }, [T, n, j]);
    (0, c.Ay)(() => {
        0 === y.length && P();
    });
    let k = null !== n;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: m.intl.format(m.t.WL0d0e, {
                    helpdeskArticle: b.A.getArticleURL(p.MVz.WEBHOOKS),
                    developersArticle: p.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, i.jsx)(a.cGx, {
                className: g.zN,
            }),
            y.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: g.Tf,
                              children: (0, i.jsx)(a.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: m.intl.string(m.t["nrO/HH"]),
                                  disabled: !k,
                                  onClick: P,
                              }),
                          }),
                          (0, i.jsx)(f.A, {
                              webhooks: y,
                              editedWebhook: A,
                              selectableWebhookChannels: v,
                              lastCreatedWebhookId: null == C ? void 0 : C.id,
                              errors: E,
                              canNavigate: T,
                          }),
                      ],
                  })
                : ((t = (0, l.Mw)(w) ? h : x),
                  (0, i.jsxs)(u.A, {
                      direction: u.A.Direction.VERTICAL,
                      align: u.A.Align.CENTER,
                      children: [
                          (0, i.jsx)("img", {
                              alt: "",
                              src: t,
                              className: g.QT,
                          }),
                          (0, i.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              children: m.intl.string(m.t.LzmsWl),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: g.nM,
                              children: (0, i.jsx)(a.Button, {
                                  variant: "primary",
                                  text: m.intl.string(m.t.lOQqJK),
                                  disabled: !k,
                                  onClick: P,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
