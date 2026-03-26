n.d(t, { A: () => E });
var r = n(627968),
    l = n(64700),
    a = n(435371),
    i = n(397927),
    s = n(341915),
    o = n(590202),
    u = n(971649),
    c = n(651892),
    d = n(814793),
    m = n(795068),
    p = n(985018);
function E(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: E } = l.useContext(m.a),
        f = (0, u.go)(),
        h = (0, d.E0)(n.config),
        v = l.useCallback(() => {
            h &&
                ((0, c.Xm)(n.id, {
                    content: s.uF.VIDEO_MODAL,
                    ctaContent: o.Cy.COPY_QUEST_URL,
                    impressionId: f,
                    sourceQuestContent: E,
                }),
                (0, i.showToast)((0, i.createToast)(p.intl.string(p.t["+5kSoW"]), i.ToastType.SUCCESS)));
        }, [f, h, n.id, E]);
    return h
        ? (0, r.jsx)("div", {
              "data-testid": "video-quest-share-btn",
              "data-quest-id": n.id,
              style: { marginLeft: t ? "auto" : void 0 },
              children: (0, r.jsx)(a.m_, {
                  text: p.intl.string(p.t.WmfZHZ),
                  children: (0, r.jsx)(i.K0, {
                      variant: "overlay-secondary",
                      icon: i.qYV,
                      "aria-label": p.intl.string(p.t.RDE0Sc),
                      onClick: v,
                  }),
              }),
          })
        : null;
}
