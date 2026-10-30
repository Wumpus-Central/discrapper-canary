n.d(t, { A: () => g });
var r = n(477900),
    u = n(582128),
    l = n(554830),
    s = n(613373),
    i = n(475815),
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
    I = n(105292);
function g(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: p } = e,
        { onClose: m, sourceQuestContent: g, quest: h, isFullscreenEnabled: D } = u.useContext(f.a),
        T = (0, C.H)({ quest: h, onClose: m, sourceQuestContent: g }),
        R = u.useCallback(() => {
            if (D) {
                let e = (0, i.qf)(t.current?.parentNode, t.current);
                null != e && (0, i.sP)(e);
            }
            (n(a.uF.VIDEO_MODAL_END_CARD, d.Cy.LEARN_MORE), T(a.uF.VIDEO_MODAL_END_CARD, d.Cy.OPEN_GAME_LINK));
        }, [D, t, T, n]),
        { title: O, subtitle: L } = {
            title: (0, E.wr)(h),
            subtitle: h.config.ctaConfig.subtitle ?? I.intl.string(I.t.mxaHfx),
        },
        { enabled: N } = o.uK.useConfig({ location: A.rE.VIDEO_MODAL }),
        k = u.useMemo(() => (0, c.tW)(h, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [h]);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.nY, { url: k }),
                  (0, r.jsx)(s.KP, {}),
                  (0, r.jsxs)(s.zj, {
                      orientation: p,
                      children: [
                          null != k &&
                              (0, r.jsx)(_.R, {
                                  questOrQuests: h,
                                  questContent: a.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: g,
                                  children: (e) =>
                                      (0, r.jsx)(s.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: k,
                                          orientation: p,
                                      }),
                              }),
                          (0, r.jsx)(s.lx, {
                              title: O,
                              subtitle: L,
                              ctaBtnLabel: h.config.ctaConfig.buttonLabel,
                              ctaIcon: l.K,
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
                          questOrQuests: h,
                          questContent: a.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: g,
                          children: (e) =>
                              (0, r.jsx)(s.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: k,
                              }),
                      }),
                  (0, r.jsx)("div", { className: S.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(s.OH, {
                      title: O,
                      subtitle: L,
                      icon: l.K,
                      className: S.mT,
                      onClick: R,
                      divider: (0, r.jsx)(v, { color: "#747783" }),
                  }),
              ],
          });
}
