n.r(t), n.d(t, { VideoQuestConfigContext: () => w, VideoQuestModalContext: () => I, default: () => O });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    u = n(412703),
    c = n(311907),
    d = n(397927),
    m = n(770178),
    p = n(765548),
    f = n(892358),
    E = n(859703),
    h = n(341915),
    v = n(245853),
    x = n(890687),
    g = n(971649),
    S = n(792620),
    A = n(753386),
    C = n(73473),
    _ = n(781121),
    b = n(357823),
    y = n(900296),
    T = n(552699),
    N = n(262395),
    D = n(839727),
    R = n(654487),
    L = n(985018),
    M = n(517087),
    j = n(681636);
let I = l.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        isFullscreenEnabled: !1,
        useNewProgressBarStyling: !1,
        onClose: () => {},
        setIsFullscreenEnabled: () => {},
    }),
    w = l.createContext({ questConfig: null });
function k(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: i,
            autoplay: a,
            videoSessionId: c,
            impressionRef: f,
            parentModalOpenStartClockTime: E,
            sourceQuestContent: h,
        } = e,
        C = (0, S.Yh)(i),
        w = (0, x.LS)(i),
        k = (0, g.go)(),
        [O, P] = l.useState(C.progressSeconds),
        [Q, U] = l.useState(142),
        [V, B] = l.useState(!1),
        F = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    o()(null != F, "VideoQuestModal: videoTask must not be null");
    let G = (0, A.eG)(F),
        K = "portrait" === G,
        $ = (0, p.A)((e) => {
            U(e.target.offsetHeight);
        }),
        Y = (0, m.w)($),
        H = i.config.features.includes(R.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: z } = v.jS.useConfig({ location: R.rE.VIDEO_MODAL }),
        W = z || H,
        q = (0, _.H)({ quest: i, onClose: n, sourceQuestContent: h, impressionId: k }),
        X = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: h,
                videoSessionId: c,
                isPortrait: K,
                onClose: n,
                isFullscreenEnabled: V,
                useNewProgressBarStyling: W,
                setIsFullscreenEnabled: B,
            }),
            [i, h, c, K, n, V, W, B],
        );
    return (0, r.jsx)(I.Provider, {
        value: X,
        children: (0, r.jsx)("div", {
            style: K ? { "--custom-portrait-footer-height": `${Q}px` } : void 0,
            children: (0, r.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rIJ.DYNAMIC,
                className: s()(j.CR, { [j.VX]: "landscape" === G, [j.Zy]: "portrait" === G }),
                parentComponent: "Modal",
                children: [
                    !W &&
                        (0, r.jsx)("div", {
                            className: j.z6,
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
                            f.current = e;
                        },
                        className: j.NE,
                        children: (0, r.jsx)("div", {
                            className: j.S3,
                            style: { "--custom-footer-horizontal-padding": `${W ? 20 : 16}px` },
                            children: (0, r.jsxs)("div", {
                                className: j.jE,
                                children: [
                                    (0, r.jsx)(D.A, {
                                        targetTimeSec: F.target,
                                        parentTransitionState: t,
                                        onOptimisticProgressUpdate: P,
                                        autoplay: a,
                                        performanceClockStartTime: E,
                                        orientation: G,
                                    }),
                                    K
                                        ? (0, r.jsxs)("div", {
                                              ref: Y,
                                              className: M.uh,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: M.Df,
                                                      children: [w ? null : (0, r.jsx)(N.A, {}), (0, r.jsx)(T.A, {})],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: M.eX,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: M.uP,
                                                              children: (0, r.jsx)("div", {
                                                                  className: M.ne,
                                                                  children: (0, r.jsx)(y.A, {}),
                                                              }),
                                                          }),
                                                          (0, r.jsx)(b.A, { handlePrimaryCtaClick: q }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: M.nR,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: M.uu,
                                                      children: [w ? null : (0, r.jsx)(N.A, {}), (0, r.jsx)(T.A, {})],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: M.NY,
                                                      children: [
                                                          (0, r.jsx)(y.A, {}),
                                                          (0, r.jsx)(b.A, { handlePrimaryCtaClick: q }),
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
function O(e) {
    let { questId: t, overrideQuest: n, autoplay: i, openStartClockTime: s, ...a } = e,
        o = (0, c.bG)([E.A], () => E.A.getQuest(t)),
        u = (0, c.bG)([E.A], () => E.A.getQuestConfig(t)),
        d = n ?? o,
        m = null != n ? n.config : u,
        p = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != p
        ? (0, r.jsx)(w.Provider, {
              value: p,
              children: (0, r.jsx)(C.R, {
                  questOrQuests: d,
                  questContent: h.uF.VIDEO_MODAL,
                  minViewTimeSeconds: f.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: a.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(k, {
                          ...a,
                          parentModalOpenStartClockTime: s,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
