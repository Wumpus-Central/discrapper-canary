n.d(t, { A: () => f });
var r = n(627968),
    s = n(64700),
    i = n(435371),
    l = n(397927),
    a = n(341915),
    o = n(590202),
    u = n(971649),
    c = n(651892),
    d = n(814793),
    m = n(717415),
    E = n(985018);
function f(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: f } = s.useContext(m.VideoQuestModalContext),
        p = (0, u.go)(),
        v = (0, d.E0)(n.config),
        h = s.useCallback(() => {
            v &&
                ((0, c.Xm)(n.id, {
                    content: a.uF.VIDEO_MODAL,
                    ctaContent: o.Cy.COPY_QUEST_URL,
                    impressionId: p,
                    sourceQuestContent: f,
                }),
                (0, l.showToast)((0, l.createToast)(E.intl.string(E.t["+5kSoW"]), l.ToastType.SUCCESS)));
        }, [p, v, n.id, f]);
    return v
        ? (0, r.jsx)("div", {
              style: { marginLeft: t ? "auto" : void 0 },
              children: (0, r.jsx)(i.m_, {
                  text: E.intl.string(E.t.WmfZHZ),
                  children: (0, r.jsx)(l.K0, {
                      variant: "overlay-secondary",
                      icon: l.qYV,
                      "aria-label": E.intl.string(E.t.RDE0Sc),
                      onClick: h,
                  }),
              }),
          })
        : null;
}
