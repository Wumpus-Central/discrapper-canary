n.d(t, { A: () => g });
var r = n(477900),
    l = n(582128),
    u = n(554830),
    i = n(613373),
    s = n(475815),
    a = n(738822),
    o = n(192444),
    c = n(291749),
    d = n(590202),
    E = n(651892),
    _ = n(657792),
    f = n(795068),
    p = n(503698),
    m = n.n(p),
    S = n(862649);
function v(e) {
    let { className: t, color: n } = e;
    return (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "2",
        height: "40",
        viewBox: "0 0 2 40",
        fill: "none",
        className: m()(S.SU, t),
        children: (0, r.jsx)("path", { d: "M1 0V40", stroke: n, strokeOpacity: "0.3", strokeWidth: "2" }),
    });
}
var C = n(781121),
    A = n(190107),
    h = n(105292);
function g(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: p } = e,
        { onClose: m, sourceQuestContent: g, quest: I, isFullscreenEnabled: D } = l.useContext(f.a),
        T = (0, C.H)({ quest: I, onClose: m, sourceQuestContent: g }),
        R = l.useCallback(() => {
            if (D) {
                let e = (0, s.qf)(t.current?.parentNode, t.current);
                null != e && (0, s.sP)(e);
            }
            (n(a.uF.VIDEO_MODAL_END_CARD, d.Cy.LEARN_MORE), T(a.uF.VIDEO_MODAL_END_CARD, d.Cy.OPEN_GAME_LINK));
        }, [D, t, T, n]),
        { title: O, subtitle: L } = {
            title: (0, E.wr)(I),
            subtitle: I.config.ctaConfig.subtitle ?? h.intl.string(h.t.mxaHfx),
        },
        { enabled: N } = o.uK.useConfig({ location: A.rE.VIDEO_MODAL }),
        k = l.useMemo(() => (0, c.tW)(I, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [I]);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.nY, { url: k }),
                  (0, r.jsx)(i.KP, {}),
                  (0, r.jsxs)(i.zj, {
                      orientation: p,
                      children: [
                          null != k &&
                              (0, r.jsx)(_.R, {
                                  questOrQuests: I,
                                  questContent: a.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: g,
                                  children: (e) =>
                                      (0, r.jsx)(i.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: k,
                                          orientation: p,
                                      }),
                              }),
                          (0, r.jsx)(i.lx, {
                              title: O,
                              subtitle: L,
                              ctaBtnLabel: I.config.ctaConfig.buttonLabel,
                              ctaIcon: u.K,
                              onCTAClick: R,
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
                          questOrQuests: I,
                          questContent: a.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: g,
                          children: (e) =>
                              (0, r.jsx)(i.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: k,
                              }),
                      }),
                  (0, r.jsx)("div", { className: S.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(i.OH, {
                      title: O,
                      subtitle: L,
                      icon: u.K,
                      className: S.mT,
                      onClick: R,
                      divider: (0, r.jsx)(v, { color: "#747783" }),
                  }),
              ],
          });
}
