n.d(t, { A: () => v });
var r = n(477900),
    l = n(582128),
    i = n(691540),
    s = n(857250),
    u = n(97483),
    a = n(866665),
    o = n(408278),
    c = n(173936),
    d = n(738822),
    E = n(590202),
    _ = n(971649),
    f = n(651892),
    p = n(814793),
    m = n(795068),
    S = n(375708);
function v(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: v } = l.useContext(m.a),
        C = (0, _.go)(),
        A = (0, p.E0)(n.config),
        h = l.useCallback(() => {
            A &&
                ((0, f.Xm)(n.id, {
                    content: d.uF.VIDEO_MODAL,
                    ctaContent: E.Cy.COPY_QUEST_URL,
                    impressionId: C,
                    sourceQuestContent: v,
                }),
                (0, i.P0)((0, s.o)(S.intl.string(S.t["+5kSoW"]), u.Ck.SUCCESS)));
        }, [C, A, n.id, v]);
    return A
        ? (0, r.jsx)("div", {
              "data-testid": "video-quest-share-btn",
              "data-quest-id": n.id,
              style: { marginLeft: t ? "auto" : void 0, pointerEvents: "auto" },
              children: (0, r.jsx)(a.m, {
                  text: S.intl.string(S.t.WmfZHZ),
                  children: (0, r.jsx)(o.K, {
                      variant: "overlay-secondary",
                      icon: c.LinkIcon,
                      "aria-label": S.intl.string(S.t.RDE0Sc),
                      onClick: h,
                  }),
              }),
          })
        : null;
}
