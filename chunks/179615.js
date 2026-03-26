n.d(t, { A: () => A });
var r = n(627968),
    l = n(64700),
    a = n(158954),
    i = n(892358),
    s = n(475815),
    o = n(341915),
    u = n(245853),
    c = n(579473),
    d = n(590202),
    m = n(971649),
    p = n(651892),
    E = n(73473),
    f = n(795068),
    h = n(54291),
    v = n(781121),
    x = n(654487),
    g = n(985018),
    S = n(681636);
function A(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: A } = e,
        { onClose: b, sourceQuestContent: _, quest: C, isFullscreenEnabled: y } = l.useContext(f.a),
        T = (0, m.go)(),
        N = (0, v.H)({ quest: C, onClose: b, sourceQuestContent: _, impressionId: T }),
        D = l.useCallback(
            (e) => {
                if (y) {
                    let e = (0, s.qf)(t.current?.parentNode, t.current);
                    null != e && (0, s.sP)(e);
                }
                n(e, d.Cy.LEARN_MORE), N(e, d.Cy.OPEN_GAME_LINK);
            },
            [y, t, N, n],
        ),
        { title: I, subtitle: R } = {
            title: (0, p.wr)(C),
            subtitle: C.config.ctaConfig.subtitle ?? g.intl.string(g.t.mxaHfx),
        },
        { enabled: L } = u.uK.useConfig({ location: x.rE.VIDEO_MODAL }),
        w = l.useMemo(() => (0, c.tW)(C, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [C]);
    return L
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.nY, { url: w }),
                  (0, r.jsx)(i.KP, {}),
                  (0, r.jsxs)(i.zj, {
                      orientation: A,
                      children: [
                          null != w &&
                              (0, r.jsx)(E.R, {
                                  questOrQuests: C,
                                  questContent: o.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: _,
                                  children: (e) =>
                                      (0, r.jsx)(i.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: w,
                                          orientation: A,
                                      }),
                              }),
                          (0, r.jsx)(i.lx, {
                              title: I,
                              subtitle: R,
                              ctaBtnLabel: C.config.ctaConfig.buttonLabel,
                              ctaIcon: a.KS6,
                              onCTAClick: () => D(o.uF.VIDEO_MODAL),
                              orientation: A,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  null != w &&
                      (0, r.jsx)(E.R, {
                          questOrQuests: C,
                          questContent: o.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: _,
                          children: (e) =>
                              (0, r.jsx)(i.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: w,
                              }),
                      }),
                  (0, r.jsx)("div", { className: S.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(i.OH, {
                      title: I,
                      subtitle: R,
                      icon: a.KS6,
                      className: S.mT,
                      onClick: () => D(o.uF.VIDEO_MODAL),
                      divider: (0, r.jsx)(h.A, { color: "#747783" }),
                  }),
              ],
          });
}
