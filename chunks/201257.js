s.r(t), s.d(t, { VideoQuestConfigContext: () => O.l, VideoQuestModalContext: () => O.a, default: () => I });
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
    g = s(341915),
    p = s(245853),
    A = s(890687),
    S = s(971649),
    f = s(792620),
    v = s(753386),
    j = s(73473),
    N = s(839727),
    O = s(795068),
    E = s(781121),
    _ = s(312356),
    M = s(404865),
    T = s(328494),
    y = s(778533),
    V = s(216409),
    D = s(654487),
    P = s(985018),
    k = s(597052),
    L = s(246878);
function b(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: d,
            impressionRef: h,
            parentModalOpenStartClockTime: C,
            sourceQuestContent: g,
        } = e,
        j = (0, f.Yh)(i),
        b = (0, A.LS)(i),
        I = (0, S.go)(),
        { progressSec: Q, trackProgress: R } = (0, _.y)({
            initialProgressSec: j.progressSeconds,
            targetSec: j.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [q, G] = l.useState(142),
        [U, H] = l.useState(!1),
        w = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != w, "VideoQuestModal: videoTask must not be null");
    let F = (0, v.eG)(w),
        W = "portrait" === F,
        K = (0, x.A)((e) => {
            G(e.target.offsetHeight);
        }),
        Y = (0, m.w)(K),
        z = i.config.features.includes(D.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: B } = p.jS.useConfig({ location: D.rE.VIDEO_MODAL }),
        J = B || z,
        X = (0, E.H)({ quest: i, onClose: s, sourceQuestContent: g, impressionId: I }),
        Z = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: g,
                videoSessionId: d,
                isPortrait: W,
                onClose: s,
                isFullscreenEnabled: U,
                useNewProgressBarStyling: J,
                setIsFullscreenEnabled: H,
                progressSec: Q,
                targetSec: j.targetSeconds,
            }),
            [i, g, d, W, s, U, J, H, Q, j.targetSeconds],
        );
    return (0, n.jsx)(O.a.Provider, {
        value: Z,
        children: (0, n.jsx)("div", {
            style: W ? { "--custom-portrait-footer-height": `${q}px` } : void 0,
            children: (0, n.jsxs)(c.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: c.rIJ.DYNAMIC,
                className: a()(L.CR, { [L.VX]: "landscape" === F, [L.Zy]: "portrait" === F }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !J &&
                        (0, n.jsx)("div", {
                            className: L.z6,
                            children: (0, n.jsx)(c.K0, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(c.PGe, {
                                        ...e,
                                        color: c.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                                    }),
                                "aria-label": P.intl.string(P.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            h.current = e;
                        },
                        className: L.NE,
                        children: (0, n.jsx)("div", {
                            className: L.S3,
                            style: { "--custom-footer-horizontal-padding": `${J ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: L.jE,
                                children: [
                                    (0, n.jsx)(N.A, {
                                        targetTimeSec: w.target,
                                        parentTransitionState: t,
                                        onOptimisticProgressUpdate: R,
                                        autoplay: o,
                                        performanceClockStartTime: C,
                                        orientation: F,
                                    }),
                                    W
                                        ? (0, n.jsxs)("div", {
                                              ref: Y,
                                              className: k.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: k.Df,
                                                      children: [b ? null : (0, n.jsx)(V.A, {}), (0, n.jsx)(y.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: k.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: k.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: k.ne,
                                                                  children: (0, n.jsx)(T.A, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(M.A, { handlePrimaryCtaClick: X }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: k.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: k.uu,
                                                      children: [b ? null : (0, n.jsx)(V.A, {}), (0, n.jsx)(y.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: k.NY,
                                                      children: [
                                                          (0, n.jsx)(T.A, {}),
                                                          (0, n.jsx)(M.A, { handlePrimaryCtaClick: X }),
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
function I(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: a, ...o } = e,
        r = (0, d.bG)([C.A], () => C.A.getQuest(t)),
        u = (0, d.bG)([C.A], () => C.A.getQuestConfig(t)),
        c = s ?? r,
        m = null != s ? s.config : u,
        x = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != c && null != m && null != x
        ? (0, n.jsx)(O.l.Provider, {
              value: x,
              children: (0, n.jsx)(j.R, {
                  questOrQuests: c,
                  questContent: g.uF.VIDEO_MODAL,
                  minViewTimeSeconds: h.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(b, {
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
