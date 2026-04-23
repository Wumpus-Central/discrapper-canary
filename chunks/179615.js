n.d(t, { A: () => A });
var r = n(627968),
    s = n(64700),
    a = n(554830),
    l = n(697397),
    i = n(475815),
    u = n(341915),
    o = n(245853),
    c = n(579473),
    d = n(590202),
    E = n(971649),
    m = n(651892),
    f = n(73473),
    _ = n(795068),
    S = n(54291),
    p = n(781121),
    v = n(654487),
    g = n(985018),
    h = n(834926);
function A(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: A } = e,
        { onClose: C, sourceQuestContent: x, quest: D, isFullscreenEnabled: I } = s.useContext(_.a),
        T = (0, E.go)(),
        b = (0, p.H)({ quest: D, onClose: C, sourceQuestContent: x, impressionId: T }),
        O = s.useCallback(
            (e) => {
                if (I) {
                    let e = (0, i.qf)(t.current?.parentNode, t.current);
                    null != e && (0, i.sP)(e);
                }
                n(e, d.Cy.LEARN_MORE), b(e, d.Cy.OPEN_GAME_LINK);
            },
            [I, t, b, n],
        ),
        { title: y, subtitle: L } = {
            title: (0, m.wr)(D),
            subtitle: D.config.ctaConfig.subtitle ?? g.intl.string(g.t.mxaHfx),
        },
        { enabled: R } = o.uK.useConfig({ location: v.rE.VIDEO_MODAL }),
        k = s.useMemo(() => (0, c.tW)(D, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [D]);
    return R
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.nY, { url: k }),
                  (0, r.jsx)(l.KP, {}),
                  (0, r.jsxs)(l.zj, {
                      orientation: A,
                      children: [
                          null != k &&
                              (0, r.jsx)(f.R, {
                                  questOrQuests: D,
                                  questContent: u.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: x,
                                  children: (e) =>
                                      (0, r.jsx)(l.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: k,
                                          orientation: A,
                                      }),
                              }),
                          (0, r.jsx)(l.lx, {
                              title: y,
                              subtitle: L,
                              ctaBtnLabel: D.config.ctaConfig.buttonLabel,
                              ctaIcon: a.K,
                              onCTAClick: () => O(u.uF.VIDEO_MODAL),
                              orientation: A,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  null != k &&
                      (0, r.jsx)(f.R, {
                          questOrQuests: D,
                          questContent: u.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: x,
                          children: (e) =>
                              (0, r.jsx)(l.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: k,
                              }),
                      }),
                  (0, r.jsx)("div", { className: h.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(l.OH, {
                      title: y,
                      subtitle: L,
                      icon: a.K,
                      className: h.mT,
                      onClick: () => O(u.uF.VIDEO_MODAL),
                      divider: (0, r.jsx)(S.A, { color: "#747783" }),
                  }),
              ],
          });
}
