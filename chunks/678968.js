n.d(t, { A: () => x });
var r = n(627968),
    s = n(64700),
    a = n(554830),
    l = n(611051),
    i = n(475815),
    u = n(507107),
    o = n(245853),
    c = n(859387),
    d = n(590202),
    E = n(971649),
    m = n(651892),
    f = n(73473),
    _ = n(795068),
    S = n(503698),
    p = n.n(S),
    v = n(834926);
function g(e) {
    let { className: t, color: n } = e;
    return (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "2",
        height: "40",
        viewBox: "0 0 2 40",
        fill: "none",
        className: p()(v.SU, t),
        children: (0, r.jsx)("path", { d: "M1 0V40", stroke: n, strokeOpacity: "0.3", strokeWidth: "2" }),
    });
}
var h = n(781121),
    C = n(654487),
    A = n(985018);
function x(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: S } = e,
        { onClose: p, sourceQuestContent: x, quest: D, isFullscreenEnabled: I } = s.useContext(_.a),
        T = (0, E.go)(),
        b = (0, h.H)({ quest: D, onClose: p, sourceQuestContent: x, impressionId: T }),
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
        { title: L, subtitle: R } = {
            title: (0, m.wr)(D),
            subtitle: D.config.ctaConfig.subtitle ?? A.intl.string(A.t.mxaHfx),
        },
        { enabled: k } = o.uK.useConfig({ location: C.rE.VIDEO_MODAL }),
        N = s.useMemo(() => (0, c.tW)(D, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [D]);
    return k
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.nY, { url: N }),
                  (0, r.jsx)(l.KP, {}),
                  (0, r.jsxs)(l.zj, {
                      orientation: S,
                      children: [
                          null != N &&
                              (0, r.jsx)(f.R, {
                                  questOrQuests: D,
                                  questContent: u.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: x,
                                  children: (e) =>
                                      (0, r.jsx)(l.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: N,
                                          orientation: S,
                                      }),
                              }),
                          (0, r.jsx)(l.lx, {
                              title: L,
                              subtitle: R,
                              ctaBtnLabel: D.config.ctaConfig.buttonLabel,
                              ctaIcon: a.K,
                              onCTAClick: () => O(u.uF.VIDEO_MODAL),
                              orientation: S,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  null != N &&
                      (0, r.jsx)(f.R, {
                          questOrQuests: D,
                          questContent: u.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: x,
                          children: (e) =>
                              (0, r.jsx)(l.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: N,
                              }),
                      }),
                  (0, r.jsx)("div", { className: v.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(l.OH, {
                      title: L,
                      subtitle: R,
                      icon: a.K,
                      className: v.mT,
                      onClick: () => O(u.uF.VIDEO_MODAL),
                      divider: (0, r.jsx)(g, { color: "#747783" }),
                  }),
              ],
          });
}
