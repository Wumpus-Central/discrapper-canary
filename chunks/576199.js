n.d(t, { A: () => f });
var r = n(627968),
    l = n(64700),
    i = n(435371),
    s = n(397927),
    a = n(341915),
    o = n(590202),
    u = n(971649),
    c = n(651892),
    d = n(814793),
    m = n(752231),
    p = n(985018);
function f(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: f } = l.useContext(m.VideoQuestModalContext),
        E = (0, u.go)(),
        h = (0, d.E0)(n.config),
        v = l.useCallback(() => {
            h &&
                ((0, c.Xm)(n.id, {
                    content: a.uF.VIDEO_MODAL,
                    ctaContent: o.Cy.COPY_QUEST_URL,
                    impressionId: E,
                    sourceQuestContent: f,
                }),
                (0, s.showToast)((0, s.createToast)(p.intl.string(p.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [E, h, n.id, f]);
    return h
        ? (0, r.jsx)("div", {
              "data-testid": "video-quest-share-btn",
              "data-quest-id": n.id,
              style: { marginLeft: t ? "auto" : void 0 },
              children: (0, r.jsx)(i.m_, {
                  text: p.intl.string(p.t.WmfZHZ),
                  children: (0, r.jsx)(s.K0, {
                      variant: "overlay-secondary",
                      icon: s.qYV,
                      "aria-label": p.intl.string(p.t.RDE0Sc),
                      onClick: v,
                  }),
              }),
          })
        : null;
}
