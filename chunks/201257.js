s.r(t), s.d(t, { VideoQuestConfigContext: () => E.l, VideoQuestModalContext: () => E.a, default: () => Q });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(284009),
    r = s.n(o),
    u = s(412703),
    c = s(311907),
    d = s(397927),
    m = s(770178),
    x = s(765548),
    g = s(697397),
    h = s(859703),
    A = s(341915),
    C = s(245853),
    p = s(890687),
    S = s(971649),
    f = s(792620),
    v = s(753386),
    j = s(73473),
    N = s(931135),
    O = s(839727),
    E = s(795068),
    _ = s(781121),
    M = s(312356),
    T = s(404865),
    y = s(328494),
    D = s(778533),
    V = s(216409),
    P = s(654487),
    k = s(985018),
    L = s(503820),
    b = s(834926);
function I(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: c,
            impressionRef: g,
            parentModalOpenStartClockTime: h,
            sourceQuestContent: A,
        } = e,
        j = (0, f.Yh)(i),
        I = (0, p.LS)(i),
        Q = (0, S.go)(),
        { progressSec: R, trackProgress: q } = (0, M.y)({
            initialProgressSec: j.progressSeconds,
            targetSec: j.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [U, G] = l.useState(142),
        [H, w] = l.useState(!1),
        F = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != F, "VideoQuestModal: videoTask must not be null");
    let W = (0, v.eG)(F),
        K = "portrait" === W,
        Y = (0, x.A)((e) => {
            G(e.target.offsetHeight);
        }),
        z = (0, m.w)(Y),
        B = i.config.features.includes(P.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: J } = C.jS.useConfig({ location: P.rE.VIDEO_MODAL }),
        { enabled: X } = C.n6.useConfig({ location: P.rE.VIDEO_MODAL }),
        Z = J || B,
        $ = (0, _.H)({ quest: i, onClose: s, sourceQuestContent: A, impressionId: Q }),
        ee = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: A,
                videoSessionId: c,
                isPortrait: K,
                onClose: s,
                isFullscreenEnabled: H,
                useNewProgressBarStyling: Z,
                setIsFullscreenEnabled: w,
                progressSec: R,
                targetSec: j.targetSeconds,
            }),
            [i, A, c, K, s, H, Z, w, R, j.targetSeconds],
        );
    return (0, n.jsx)(E.a.Provider, {
        value: ee,
        children: (0, n.jsx)("div", {
            style: K ? { "--custom-portrait-footer-height": `${U}px` } : void 0,
            children: (0, n.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rIJ.DYNAMIC,
                className: a()(b.CR, { [b.VX]: "landscape" === W, [b.Zy]: "portrait" === W }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !Z &&
                        (0, n.jsx)("div", {
                            className: b.z6,
                            children: (0, n.jsx)(d.K0, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(d.PGe, {
                                        ...e,
                                        color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                                    }),
                                "aria-label": k.intl.string(k.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            g.current = e;
                        },
                        className: b.NE,
                        children: (0, n.jsx)("div", {
                            className: b.S3,
                            style: { "--custom-footer-horizontal-padding": `${Z ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: b.jE,
                                children: [
                                    X
                                        ? (0, n.jsx)(N.A, {
                                              targetTimeSec: F.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: q,
                                              autoplay: o,
                                              performanceClockStartTime: h,
                                              orientation: W,
                                          })
                                        : (0, n.jsx)(O.A, {
                                              targetTimeSec: F.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: q,
                                              autoplay: o,
                                              performanceClockStartTime: h,
                                              orientation: W,
                                          }),
                                    K
                                        ? (0, n.jsxs)("div", {
                                              ref: z,
                                              className: L.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: L.Df,
                                                      children: [I ? null : (0, n.jsx)(V.A, {}), (0, n.jsx)(D.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: L.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: L.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: L.ne,
                                                                  children: (0, n.jsx)(y.A, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(T.A, { handlePrimaryCtaClick: $ }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: L.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: L.uu,
                                                      children: [I ? null : (0, n.jsx)(V.A, {}), (0, n.jsx)(D.A, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: L.NY,
                                                      children: [
                                                          (0, n.jsx)(y.A, {}),
                                                          (0, n.jsx)(T.A, { handlePrimaryCtaClick: $ }),
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
function Q(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: a, ...o } = e,
        r = (0, c.bG)([h.A], () => h.A.getQuest(t)),
        u = (0, c.bG)([h.A], () => h.A.getQuestConfig(t)),
        d = s ?? r,
        m = null != s ? s.config : u,
        x = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != x
        ? (0, n.jsx)(E.l.Provider, {
              value: x,
              children: (0, n.jsx)(j.R, {
                  questOrQuests: d,
                  questContent: A.uF.VIDEO_MODAL,
                  minViewTimeSeconds: g.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(I, {
                          ...o,
                          parentModalOpenStartClockTime: a,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
