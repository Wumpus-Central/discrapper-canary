n.d(t, { A: () => C });
var r = n(477900),
    l = n(582128),
    i = n(691540),
    u = n(857250),
    s = n(97483),
    a = n(866665),
    o = n(408278),
    c = n(173936),
    d = n(24001),
    E = n(590202),
    f = n(971649),
    _ = n(651892),
    m = n(814793),
    p = n(795068),
    S = n(375708);
function C(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: C } = l.useContext(p.a),
        v = (0, f.go)(),
        A = (0, m.E0)(n.config),
        h = l.useCallback(() => {
            A &&
                ((0, _.Xm)(n.id, {
                    content: d.uF.VIDEO_MODAL,
                    ctaContent: E.Cy.COPY_QUEST_URL,
                    impressionId: v,
                    sourceQuestContent: C,
                }),
                (0, i.P0)((0, u.o)(S.intl.string(S.t["+5kSoW"]), s.Ck.SUCCESS)));
        }, [v, A, n.id, C]);
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
