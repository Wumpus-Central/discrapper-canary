n.d(t, { Z: () => j }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(780384),
    a = n(481060),
    o = n(668781),
    s = n(308063),
    c = n(493773),
    d = n(410030),
    u = n(600164),
    m = n(63063),
    b = n(725875),
    p = n(981631),
    g = n(388032),
    f = n(774696),
    h = n(893916),
    x = n(408942);
function j(e) {
    let t,
        {
            guild: n,
            channel: j,
            customWebhooks: v,
            editedWebhook: O,
            selectableWebhookChannels: y,
            refToScroller: C,
            errors: N,
            canNavigate: S,
        } = e,
        I = (0, d.ZP)(),
        [T, E] = r.useState(null),
        [Z, w] = r.useState(null);
    if (null != j) t = j;
    else {
        let e = Object.values(y);
        t = e.length > 0 ? e[0] : null;
    }
    let P = r.useCallback(async () => {
        if (S() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === p.evJ.TOO_MANY_WEBHOOKS
                        ? o.Z.show({
                              title: g.intl.string(g.t.cCqsca),
                              body: g.intl.string(g.t["w+QZoX"]),
                          })
                        : 429 === n
                          ? o.Z.show({
                                title: g.intl.string(g.t.cCqsca),
                                body: g.intl.string(g.t["YBM+UW"]),
                            })
                          : o.Z.show({
                                title: g.intl.string(g.t.cCqsca),
                                body: g.intl.string(g.t["/4TwKf"]),
                            }),
                    null
                );
            });
            null != e && (w(e.id), E(e));
        }
    }, [S, t, n]);
    (0, c.ZP)(() => {
        0 === v.length && P();
    });
    let _ = null !== t;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: g.intl.format(g.t.WL0d0e, {
                    helpdeskArticle: m.Z.getArticleURL(p.BhN.WEBHOOKS),
                    developersArticle: p.EYA.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, i.jsx)(a.izJ, { className: f.headerDivider }),
            v.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: f.createButton,
                              children: (0, i.jsx)(a.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: g.intl.string(g.t["nrO/HH"]),
                                  disabled: !_,
                                  onClick: P,
                              }),
                          }),
                          (0, i.jsx)(b.Z, {
                              webhooks: v,
                              editedWebhook: O,
                              selectableWebhookChannels: y,
                              lastCreatedWebhookId: null == T ? void 0 : T.id,
                              errors: N,
                              canNavigate: S,
                          }),
                      ],
                  })
                : (function (e, t, n) {
                      let r = (0, l.wj)(e) ? h : x;
                      return (0, i.jsxs)(u.Z, {
                          direction: u.Z.Direction.VERTICAL,
                          align: u.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: "",
                                  src: r,
                                  className: f.emptyStateImage,
                              }),
                              (0, i.jsx)(a.Heading, {
                                  variant: "heading-md/semibold",
                                  children: g.intl.string(g.t.LzmsWl),
                              }),
                              (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: f.emptyStateButton,
                                  children: (0, i.jsx)(a.Button, {
                                      variant: "primary",
                                      text: g.intl.string(g.t.lOQqJK),
                                      disabled: !t,
                                      onClick: n,
                                  }),
                              }),
                          ],
                      });
                  })(I, _, P),
        ],
    });
}
