n.d(t, { A: () => v });
var r = n(627968),
    s = n(64700),
    a = n(990078),
    l = n(691540),
    i = n(857250),
    u = n(97483),
    o = n(408278),
    c = n(173936),
    d = n(341915),
    E = n(590202),
    m = n(971649),
    f = n(651892),
    _ = n(814793),
    S = n(795068),
    p = n(985018);
function v(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: v } = s.useContext(S.a),
        g = (0, m.go)(),
        h = (0, _.E0)(n.config),
        A = s.useCallback(() => {
            h &&
                ((0, f.Xm)(n.id, {
                    content: d.uF.VIDEO_MODAL,
                    ctaContent: E.Cy.COPY_QUEST_URL,
                    impressionId: g,
                    sourceQuestContent: v,
                }),
                (0, l.P0)((0, i.o)(p.intl.string(p.t["+5kSoW"]), u.Ck.SUCCESS)));
        }, [g, h, n.id, v]);
    return h
        ? (0, r.jsx)("div", {
              "data-testid": "video-quest-share-btn",
              "data-quest-id": n.id,
              style: { marginLeft: t ? "auto" : void 0, pointerEvents: "auto" },
              children: (0, r.jsx)(a.m, {
                  text: p.intl.string(p.t.WmfZHZ),
                  children: (0, r.jsx)(o.K, {
                      variant: "overlay-secondary",
                      icon: c.q,
                      "aria-label": p.intl.string(p.t.RDE0Sc),
                      onClick: A,
                  }),
              }),
          })
        : null;
}
