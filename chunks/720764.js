n.d(t, { Z: () => j }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(780384),
    a = n(481060),
    o = n(668781),
    s = n(308063),
    c = n(493773),
    d = n(410030),
    u = n(600164),
    p = n(63063),
    m = n(725875),
    b = n(981631),
    g = n(388032),
    f = n(878375),
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
            refToScroller: _,
            errors: C,
            canNavigate: N,
        } = e,
        S = (0, d.ZP)(),
        [E, w] = r.useState(null),
        [I, P] = r.useState(null);
    if (null != j) t = j;
    else {
        let e = Object.values(y);
        t = e.length > 0 ? e[0] : null;
    }
    let T = r.useCallback(async () => {
        if (N() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === b.evJ.TOO_MANY_WEBHOOKS
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
            null != e && (P(e.id), w(e));
        }
    }, [N, t, n]);
    (0, c.ZP)(() => {
        0 === v.length && T();
    });
    let Z = null !== t;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: g.intl.format(g.t.WL0d0e, {
                    helpdeskArticle: p.Z.getArticleURL(b.BhN.WEBHOOKS),
                    developersArticle: b.EYA.API_DOCS_WEBHOOKS,
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
                                  disabled: !Z,
                                  onClick: T,
                              }),
                          }),
                          (0, i.jsx)(m.Z, {
                              webhooks: v,
                              editedWebhook: O,
                              selectableWebhookChannels: y,
                              lastCreatedWebhookId: null == E ? void 0 : E.id,
                              errors: C,
                              canNavigate: N,
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
                  })(S, Z, T),
        ],
    });
}
