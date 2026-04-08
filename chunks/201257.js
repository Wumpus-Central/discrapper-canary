s.r(t), s.d(t, { VideoQuestConfigContext: () => O.l, VideoQuestModalContext: () => O.a, default: () => b });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(284009),
    r = s.n(o),
    u = s(412703),
    d = s(311907),
    c = s(397927),
    m = s(770178),
    x = s(765548),
    h = s(697397),
    C = s(859703),
    A = s(341915),
    p = s(245853),
    g = s(890687),
    v = s(971649),
    j = s(792620),
    f = s(753386),
    S = s(73473),
    N = s(839727),
    O = s(795068),
    E = s(781121),
    _ = s(404865),
    M = s(328494),
    T = s(778533),
    V = s(216409),
    y = s(654487),
    D = s(985018),
    L = s(57831),
    k = s(256181);
function P(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: d,
            impressionRef: h,
            parentModalOpenStartClockTime: C,
            sourceQuestContent: A,
        } = e,
        S = (0, j.Yh)(i),
        P = (0, g.LS)(i),
        b = (0, v.go)(),
        [I, Q] = l.useState(S.progressSeconds),
        [R, q] = l.useState(142),
        [U, G] = l.useState(!1),
        H = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != H, "VideoQuestModal: videoTask must not be null");
    let w = (0, f.eG)(H),
        F = "portrait" === w,
        W = (0, x.A)((e) => {
            q(e.target.offsetHeight);
        }),
        K = (0, m.w)(W),
        Y = i.config.features.includes(y.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: z } = p.jS.useConfig({ location: y.rE.VIDEO_MODAL }),
        B = z || Y,
        J = (0, E.H)({ quest: i, onClose: s, sourceQuestContent: A, impressionId: b }),
        X = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: A,
                videoSessionId: d,
                isPortrait: F,
                onClose: s,
                isFullscreenEnabled: U,
                useNewProgressBarStyling: B,
                setIsFullscreenEnabled: G,
            }),
            [i, A, d, F, s, U, B, G],
        );
    return (0, n.jsx)(O.a.Provider, {
        value: X,
        children: (0, n.jsx)("div", {
            style: F ? { "--custom-portrait-footer-height": `${R}px` } : void 0,
            children: (0, n.jsxs)(c.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: c.rIJ.DYNAMIC,
                className: a()(k.CR, { [k.VX]: "landscape" === w, [k.Zy]: "portrait" === w }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !B &&
                        (0, n.jsx)("div", {
                            className: k.z6,
                            children: (0, n.jsx)(c.K0, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(c.PGe, {
                                        ...e,
                                        color: c.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                                    }),
                                "aria-label": D.intl.string(D.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            h.current = e;
                        },
                        className: k.NE,
                        children: (0, n.jsx)("div", {
                            className: k.S3,
                            style: { "--custom-footer-horizontal-padding": `${B ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: k.jE,
                                children: [
                                    (0, n.jsx)(N.A, {
                                        targetTimeSec: H.target,
                                        parentTransitionState: t,
                                        onOptimisticProgressUpdate: Q,
                                        autoplay: o,
                                        performanceClockStartTime: C,
                                        orientation: w,
                                    }),
                                    F
                                        ? (0, n.jsxs)("div", {
                                              ref: K,
                                              className: L.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: L.Df,
                                                      children: [P ? null : (0, n.jsx)(V.A, {}), (0, n.jsx)(T.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: L.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: L.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: L.ne,
                                                                  children: (0, n.jsx)(M.A, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(_.A, { handlePrimaryCtaClick: J }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: L.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: L.uu,
                                                      children: [P ? null : (0, n.jsx)(V.A, {}), (0, n.jsx)(T.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: L.NY,
                                                      children: [
                                                          (0, n.jsx)(M.A, {}),
                                                          (0, n.jsx)(_.A, { handlePrimaryCtaClick: J }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function b(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: a, ...o } = e,
        r = (0, d.bG)([C.A], () => C.A.getQuest(t)),
        u = (0, d.bG)([C.A], () => C.A.getQuestConfig(t)),
        c = s ?? r,
        m = null != s ? s.config : u,
        x = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != c && null != m && null != x
        ? (0, n.jsx)(O.l.Provider, {
              value: x,
              children: (0, n.jsx)(S.R, {
                  questOrQuests: c,
                  questContent: A.uF.VIDEO_MODAL,
                  minViewTimeSeconds: h.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(P, {
                          ...o,
                          parentModalOpenStartClockTime: a,
                          impressionRef: e,
                          quest: c,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
