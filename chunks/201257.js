s.r(t), s.d(t, { VideoQuestConfigContext: () => T.l, VideoQuestModalContext: () => T.a, default: () => G });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(284009),
    r = s.n(o),
    u = s(412703),
    d = s(311907),
    c = s(935462),
    m = s(408278),
    x = s(789645),
    A = s(827734),
    h = s(770178),
    g = s(765548),
    p = s(697397),
    C = s(859703),
    S = s(341915),
    v = s(245853),
    f = s(890687),
    j = s(971649),
    N = s(792620),
    O = s(753386),
    E = s(73473),
    M = s(931135),
    _ = s(839727),
    T = s(795068),
    y = s(781121),
    D = s(312356),
    V = s(404865),
    P = s(328494),
    b = s(778533),
    k = s(216409),
    I = s(654487),
    L = s(985018),
    Q = s(503820),
    R = s(834926);
function q(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: d,
            impressionRef: p,
            parentModalOpenStartClockTime: C,
            sourceQuestContent: S,
        } = e,
        E = (0, N.Yh)(i),
        q = (0, f.LS)(i),
        G = (0, j.go)(),
        { progressSec: w, trackProgress: F } = (0, D.y)({
            initialProgressSec: E.progressSeconds,
            targetSec: E.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [H, U] = l.useState(142),
        [W, K] = l.useState(!1),
        Y = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != Y, "VideoQuestModal: videoTask must not be null");
    let z = (0, O.eG)(Y),
        B = "portrait" === z,
        $ = (0, g.A)((e) => {
            U(e.target.offsetHeight);
        }),
        X = (0, h.w)($),
        J = i.config.features.includes(I.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: Z } = v.jS.useConfig({ location: I.rE.VIDEO_MODAL }),
        { enabled: ee } = v.n6.useConfig({ location: I.rE.VIDEO_MODAL }),
        et = Z || J,
        es = (0, y.H)({ quest: i, onClose: s, sourceQuestContent: S, impressionId: G }),
        en = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: S,
                videoSessionId: d,
                isPortrait: B,
                onClose: s,
                isFullscreenEnabled: W,
                useNewProgressBarStyling: et,
                setIsFullscreenEnabled: K,
                progressSec: w,
                targetSec: E.targetSeconds,
            }),
            [i, S, d, B, s, W, et, K, w, E.targetSeconds],
        );
    return (0, n.jsx)(T.a.Provider, {
        value: en,
        children: (0, n.jsx)("div", {
            style: B ? { "--custom-portrait-footer-height": `${H}px` } : void 0,
            children: (0, n.jsxs)(c.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: c.rI.DYNAMIC,
                className: a()(R.CR, { [R.VX]: "landscape" === z, [R.Zy]: "portrait" === z }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !et &&
                        (0, n.jsx)("div", {
                            className: R.z6,
                            children: (0, n.jsx)(m.K, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(x.P, { ...e, color: A.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                                "aria-label": L.intl.string(L.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            p.current = e;
                        },
                        className: R.NE,
                        children: (0, n.jsx)("div", {
                            className: R.S3,
                            style: { "--custom-footer-horizontal-padding": `${et ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: R.jE,
                                children: [
                                    ee
                                        ? (0, n.jsx)(M.A, {
                                              targetTimeSec: Y.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: F,
                                              autoplay: o,
                                              openedAtMs: C,
                                              orientation: z,
                                          })
                                        : (0, n.jsx)(_.A, {
                                              targetTimeSec: Y.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: F,
                                              autoplay: o,
                                              openedAtMs: C,
                                              orientation: z,
                                          }),
                                    B
                                        ? (0, n.jsxs)("div", {
                                              ref: X,
                                              className: Q.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: Q.Df,
                                                      children: [q ? null : (0, n.jsx)(k.A, {}), (0, n.jsx)(b.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: Q.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: Q.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: Q.ne,
                                                                  children: (0, n.jsx)(P.A, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(V.A, { handlePrimaryCtaClick: es }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: Q.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: Q.uu,
                                                      children: [q ? null : (0, n.jsx)(k.A, {}), (0, n.jsx)(b.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: Q.NY,
                                                      children: [
                                                          (0, n.jsx)(P.A, {}),
                                                          (0, n.jsx)(V.A, { handlePrimaryCtaClick: es }),
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
function G(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: a, ...o } = e,
        r = (0, d.bG)([C.A], () => C.A.getQuest(t)),
        u = (0, d.bG)([C.A], () => C.A.getQuestConfig(t)),
        c = s ?? r,
        m = null != s ? s.config : u,
        x = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != c && null != m && null != x
        ? (0, n.jsx)(T.l.Provider, {
              value: x,
              children: (0, n.jsx)(E.R, {
                  questOrQuests: c,
                  questContent: S.uF.VIDEO_MODAL,
                  minViewTimeSeconds: p.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(q, {
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
