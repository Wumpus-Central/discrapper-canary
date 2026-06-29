n.d(t, { A: () => I });
var r = n(627968),
    l = n(64700),
    i = n(554830),
    a = n(613373),
    s = n(475815),
    u = n(24001),
    o = n(192444),
    c = n(46948),
    d = n(590202),
    E = n(971649),
    f = n(651892),
    _ = n(73473),
    m = n(795068),
    p = n(503698),
    S = n.n(p),
    C = n(834926);
function v(e) {
    let { className: t, color: n } = e;
    return (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "2",
        height: "40",
        viewBox: "0 0 2 40",
        fill: "none",
        className: S()(C.SU, t),
        children: (0, r.jsx)("path", { d: "M1 0V40", stroke: n, strokeOpacity: "0.3", strokeWidth: "2" }),
    });
}
var A = n(781121),
    g = n(190107),
    h = n(375708);
function I(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: p } = e,
        { onClose: S, sourceQuestContent: I, quest: T, isFullscreenEnabled: D } = l.useContext(m.a),
        R = (0, E.go)(),
        x = (0, A.H)({ quest: T, onClose: S, sourceQuestContent: I, impressionId: R }),
        O = l.useCallback(
            (e) => {
                if (D) {
                    let e = (0, s.qf)(t.current?.parentNode, t.current);
                    null != e && (0, s.sP)(e);
                }
                n(e, d.Cy.LEARN_MORE), x(e, d.Cy.OPEN_GAME_LINK);
            },
            [D, t, x, n],
        ),
        { title: L, subtitle: P } = {
            title: (0, f.wr)(T),
            subtitle: T.config.ctaConfig.subtitle ?? h.intl.string(h.t.mxaHfx),
        },
        { enabled: N } = o.uK.useConfig({ location: g.rE.VIDEO_MODAL }),
        k = l.useMemo(() => (0, c.tW)(T, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [T]);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.nY, { url: k }),
                  (0, r.jsx)(a.KP, {}),
                  (0, r.jsxs)(a.zj, {
                      orientation: p,
                      children: [
                          null != k &&
                              (0, r.jsx)(_.R, {
                                  questOrQuests: T,
                                  questContent: u.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: I,
                                  children: (e) =>
                                      (0, r.jsx)(a.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: k,
                                          orientation: p,
                                      }),
                              }),
                          (0, r.jsx)(a.lx, {
                              title: L,
                              subtitle: P,
                              ctaBtnLabel: T.config.ctaConfig.buttonLabel,
                              ctaIcon: i.K,
                              onCTAClick: () => O(u.uF.VIDEO_MODAL),
                              orientation: p,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  null != k &&
                      (0, r.jsx)(_.R, {
                          questOrQuests: T,
                          questContent: u.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: I,
                          children: (e) =>
                              (0, r.jsx)(a.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: k,
                              }),
                      }),
                  (0, r.jsx)("div", { className: C.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(a.OH, {
                      title: L,
                      subtitle: P,
                      icon: i.K,
                      className: C.mT,
                      onClick: () => O(u.uF.VIDEO_MODAL),
                      divider: (0, r.jsx)(v, { color: "#747783" }),
                  }),
              ],
          });
}
