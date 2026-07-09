n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(554830),
    s = n(613373),
    u = n(475815),
    a = n(24001),
    o = n(192444),
    c = n(46948),
    d = n(590202),
    E = n(651892),
    f = n(73473),
    _ = n(795068),
    m = n(503698),
    p = n.n(m),
    S = n(332206);
function C(e) {
    let { className: t, color: n } = e;
    return (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "2",
        height: "40",
        viewBox: "0 0 2 40",
        fill: "none",
        className: p()(S.SU, t),
        children: (0, r.jsx)("path", { d: "M1 0V40", stroke: n, strokeOpacity: "0.3", strokeWidth: "2" }),
    });
}
var v = n(781121),
    A = n(190107),
    g = n(375708);
function h(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: m } = e,
        { onClose: p, sourceQuestContent: h, quest: I, isFullscreenEnabled: T } = l.useContext(_.a),
        D = (0, v.H)({ quest: I, onClose: p, sourceQuestContent: h }),
        R = l.useCallback(
            (e) => {
                if (T) {
                    let e = (0, u.qf)(t.current?.parentNode, t.current);
                    null != e && (0, u.sP)(e);
                }
                n(e, d.Cy.LEARN_MORE), D(e, d.Cy.OPEN_GAME_LINK);
            },
            [T, t, D, n],
        ),
        { title: x, subtitle: L } = {
            title: (0, E.wr)(I),
            subtitle: I.config.ctaConfig.subtitle ?? g.intl.string(g.t.mxaHfx),
        },
        { enabled: O } = o.uK.useConfig({ location: A.rE.VIDEO_MODAL }),
        P = l.useMemo(() => (0, c.tW)(I, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [I]);
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.nY, { url: P }),
                  (0, r.jsx)(s.KP, {}),
                  (0, r.jsxs)(s.zj, {
                      orientation: m,
                      children: [
                          null != P &&
                              (0, r.jsx)(f.R, {
                                  questOrQuests: I,
                                  questContent: a.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: h,
                                  children: (e) =>
                                      (0, r.jsx)(s.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: P,
                                          orientation: m,
                                      }),
                              }),
                          (0, r.jsx)(s.lx, {
                              title: x,
                              subtitle: L,
                              ctaBtnLabel: I.config.ctaConfig.buttonLabel,
                              ctaIcon: i.K,
                              onCTAClick: () => R(a.uF.VIDEO_MODAL),
                              orientation: m,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  null != P &&
                      (0, r.jsx)(f.R, {
                          questOrQuests: I,
                          questContent: a.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: h,
                          children: (e) =>
                              (0, r.jsx)(s.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: P,
                              }),
                      }),
                  (0, r.jsx)("div", { className: S.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(s.OH, {
                      title: x,
                      subtitle: L,
                      icon: i.K,
                      className: S.mT,
                      onClick: () => R(a.uF.VIDEO_MODAL),
                      divider: (0, r.jsx)(C, { color: "#747783" }),
                  }),
              ],
          });
}
