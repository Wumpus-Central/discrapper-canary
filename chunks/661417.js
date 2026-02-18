n.d(t, { A: () => E });
var r = n(627968),
    l = n(64700),
    i = n(435371),
    s = n(397927),
    a = n(341915),
    o = n(590202),
    u = n(971649),
    c = n(651892),
    d = n(814793),
    m = n(717415),
    p = n(985018);
function E(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: E } = l.useContext(m.VideoQuestModalContext),
        f = (0, u.go)(),
        v = (0, d.E0)(n.config),
        h = l.useCallback(() => {
            v &&
                ((0, c.Xm)(n.id, {
                    content: a.uF.VIDEO_MODAL,
                    ctaContent: o.Cy.COPY_QUEST_URL,
                    impressionId: f,
                    sourceQuestContent: E,
                }),
                (0, s.showToast)((0, s.createToast)(p.intl.string(p.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [f, v, n.id, E]);
    return v
        ? (0, r.jsx)("div", {
              style: { marginLeft: t ? "auto" : void 0 },
              children: (0, r.jsx)(i.m_, {
                  text: p.intl.string(p.t.WmfZHZ),
                  children: (0, r.jsx)(s.K0, {
                      variant: "overlay-secondary",
                      icon: s.qYV,
                      "aria-label": p.intl.string(p.t.RDE0Sc),
                      onClick: h,
                  }),
              }),
          })
        : null;
}
