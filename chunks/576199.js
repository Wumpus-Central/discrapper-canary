n.d(t, { A: () => m });
var r = n(477900),
    u = n(582128),
    l = n(858899),
    s = n(866665),
    i = n(408278),
    a = n(173936),
    o = n(738822),
    c = n(590202),
    d = n(971649),
    E = n(651892),
    _ = n(814793),
    f = n(795068),
    p = n(105292);
function m(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: m } = u.useContext(f.a),
        S = (0, d.go)(),
        v = (0, _.E0)(n.config),
        C = u.useCallback(() => {
            v &&
                ((0, E.Xm)(n.id, {
                    content: o.uF.VIDEO_MODAL,
                    ctaContent: c.Cy.COPY_QUEST_URL,
                    impressionId: S,
                    sourceQuestContent: m,
                }),
                (0, l.P0)({ text: p.intl.string(p.t["+5kSoW"]), variant: "success" }));
        }, [S, v, n.id, m]);
    return v
        ? (0, r.jsx)("div", {
              "data-testid": "video-quest-share-btn",
              "data-quest-id": n.id,
              style: { marginLeft: t ? "auto" : void 0, pointerEvents: "auto" },
              children: (0, r.jsx)(s.m, {
                  text: p.intl.string(p.t.WmfZHZ),
                  children: (0, r.jsx)(i.K, {
                      variant: "overlay-secondary",
                      icon: a.LinkIcon,
                      "aria-label": p.intl.string(p.t.RDE0Sc),
                      onClick: C,
                  }),
              }),
          })
        : null;
}
