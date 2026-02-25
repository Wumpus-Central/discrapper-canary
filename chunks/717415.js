n.r(t), n.d(t, { VideoQuestConfigContext: () => k, VideoQuestModalContext: () => w, default: () => P });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(412703),
    c = n(311907),
    d = n(397927),
    m = n(770178),
    p = n(765548),
    E = n(892358),
    f = n(859703),
    h = n(341915),
    v = n(245853),
    x = n(890687),
    g = n(971649),
    S = n(792620),
    A = n(753386),
    C = n(73473),
    _ = n(922623),
    b = n(60040),
    T = n(885947),
    y = n(440891),
    N = n(471535),
    D = n(583235),
    I = n(654487),
    L = n(985018),
    j = n(407481),
    M = n(221190);
let w = l.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        isFullscreenEnabled: !1,
        useNewProgressBarStyling: !1,
        onClose: () => {},
        setIsFullscreenEnabled: () => {},
    }),
    k = l.createContext({ questConfig: null });
function R(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: i,
            autoplay: s,
            videoSessionId: c,
            impressionRef: E,
            parentModalOpenStartClockTime: f,
            sourceQuestContent: h,
        } = e,
        C = (0, S.Yh)(i),
        k = (0, x.LS)(i),
        R = (0, g.go)(),
        [P, O] = l.useState(C.progressSeconds),
        [Q, V] = l.useState(142),
        [U, B] = l.useState(!1),
        F = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    o()(null != F, "VideoQuestModal: videoTask must not be null");
    let G = (0, A.eG)(F),
        $ = "portrait" === G,
        Y = (0, p.A)((e) => {
            V(e.target.offsetHeight);
        }),
        K = (0, m.w)(Y),
        H = i.config.features.includes(I.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: W } = v.jS.useConfig({ location: I.rE.VIDEO_MODAL }),
        q = W || H,
        z = (0, D.H)({ quest: i, onClose: n, sourceQuestContent: h, impressionId: R }),
        X = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: h,
                videoSessionId: c,
                isPortrait: $,
                onClose: n,
                isFullscreenEnabled: U,
                useNewProgressBarStyling: q,
                setIsFullscreenEnabled: B,
            }),
            [i, h, c, $, n, U, q, B],
        );
    return (0, r.jsx)(w.Provider, {
        value: X,
        children: (0, r.jsx)("div", {
            style: $ ? { "--custom-portrait-footer-height": `${Q}px` } : void 0,
            children: (0, r.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rIJ.DYNAMIC,
                className: a()(M.CR, { [M.VX]: "landscape" === G, [M.Zy]: "portrait" === G }),
                parentComponent: "Modal",
                children: [
                    !q &&
                        (0, r.jsx)("div", {
                            className: M.z6,
                            children: (0, r.jsx)(d.K0, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, r.jsx)(d.PGe, {
                                        ...e,
                                        color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                                    }),
                                "aria-label": L.intl.string(L.t.cpT0Cq),
                                onClick: n,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        ref: (e) => {
                            E.current = e;
                        },
                        className: M.NE,
                        children: (0, r.jsx)("div", {
                            className: M.S3,
                            style: { "--custom-footer-horizontal-padding": `${q ? 20 : 16}px` },
                            children: (0, r.jsxs)("div", {
                                className: M.jE,
                                children: [
                                    (0, r.jsx)(N.A, {
                                        targetTimeSec: F.target,
                                        parentTransitionState: t,
                                        onOptimisticProgressUpdate: O,
                                        autoplay: s,
                                        performanceClockStartTime: f,
                                        orientation: G,
                                    }),
                                    $
                                        ? (0, r.jsxs)("div", {
                                              ref: K,
                                              className: j.uh,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: j.Df,
                                                      children: [k ? null : (0, r.jsx)(y.A, {}), (0, r.jsx)(T.A, {})],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: j.eX,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: j.uP,
                                                              children: (0, r.jsx)("div", {
                                                                  className: j.ne,
                                                                  children: (0, r.jsx)(b.A, {}),
                                                              }),
                                                          }),
                                                          (0, r.jsx)(_.A, { handlePrimaryCtaClick: z }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: j.nR,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: j.uu,
                                                      children: [k ? null : (0, r.jsx)(y.A, {}), (0, r.jsx)(T.A, {})],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: j.NY,
                                                      children: [
                                                          (0, r.jsx)(b.A, {}),
                                                          (0, r.jsx)(_.A, { handlePrimaryCtaClick: z }),
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
function P(e) {
    let { questId: t, overrideQuest: n, autoplay: i, openStartClockTime: a, ...s } = e,
        o = (0, c.bG)([f.A], () => f.A.getQuest(t)),
        u = (0, c.bG)([f.A], () => f.A.getQuestConfig(t)),
        d = n ?? o,
        m = null != n ? n.config : u,
        p = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != p
        ? (0, r.jsx)(k.Provider, {
              value: p,
              children: (0, r.jsx)(C.R, {
                  questOrQuests: d,
                  questContent: h.uF.VIDEO_MODAL,
                  minViewTimeSeconds: E.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: s.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(R, {
                          ...s,
                          parentModalOpenStartClockTime: a,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
