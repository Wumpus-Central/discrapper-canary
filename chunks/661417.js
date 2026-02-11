"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(435371),
    s = n(397927),
    o = n(341915),
    l = n(590202),
    u = n(971649),
    c = n(651892),
    d = n(814793),
    _ = n(717415),
    f = n(985018);
function h(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: h } = i.useContext(_.VideoQuestModalContext),
        p = (0, u.go)(),
        g = (0, d.E0)(n.config),
        E = i.useCallback(() => {
            g &&
                ((0, c.Xm)(n.id, {
                    content: o.uF.VIDEO_MODAL,
                    ctaContent: l.Cy.COPY_QUEST_URL,
                    impressionId: p,
                    sourceQuestContent: h,
                }),
                (0, s.showToast)((0, s.createToast)(f.intl.string(f.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [p, g, n.id, h]);
    return g
        ? (0, r.jsx)("div", {
              style: { marginLeft: t ? "auto" : void 0 },
              children: (0, r.jsx)(a.m_, {
                  text: f.intl.string(f.t.WmfZHZ),
                  children: (0, r.jsx)(s.K0, {
                      variant: "overlay-secondary",
                      icon: s.qYV,
                      "aria-label": f.intl.string(f.t.RDE0Sc),
                      onClick: E,
                  }),
              }),
          })
        : null;
}
