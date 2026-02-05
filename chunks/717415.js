n.r(t), n.d(t, { VideoQuestConfigContext: () => R, VideoQuestModalContext: () => L, default: () => j });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(284009),
    o = n.n(a),
    u = n(412703),
    c = n(311907),
    d = n(397927),
    m = n(770178),
    E = n(765548),
    f = n(859703),
    p = n(341915),
    v = n(890687),
    h = n(971649),
    _ = n(792620),
    C = n(753386),
    g = n(73473),
    S = n(922623),
    A = n(60040),
    x = n(885947),
    T = n(440891),
    b = n(471535),
    D = n(154395),
    N = n(583235),
    y = n(985018),
    I = n(438655);
let L = s.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    R = s.createContext({ questConfig: null });
function M(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: i,
            autoplay: a,
            videoSessionId: c,
            impressionRef: f,
            parentModalOpenStartClockTime: p,
            sourceQuestContent: g,
        } = e,
        D = (0, _.Yh)(i),
        R = (0, v.LS)(i),
        M = (0, h.go)(),
        [j, O] = s.useState(D.progressSeconds),
        [k, w] = s.useState(142),
        V = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    o()(null != V, "VideoQuestModal: videoTask must not be null");
    let P = (0, C.eG)(V),
        Q = "portrait" === P,
        U = (0, E.A)((e) => {
            w(e.target.offsetHeight);
        }),
        F = (0, m.w)(U),
        B = (0, N.H)({ quest: i, onClose: n, sourceQuestContent: g, impressionId: M }),
        G = s.useMemo(
            () => ({ quest: i, sourceQuestContent: g, videoSessionId: c, isPortrait: Q, onClose: n }),
            [i, g, c, Q, n],
        );
    return (0, r.jsx)(L.Provider, {
        value: G,
        children: (0, r.jsxs)(d.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            size: d.rIJ.DYNAMIC,
            className: l()(I.CR, { [I.VX]: "landscape" === P, [I.Zy]: "portrait" === P }),
            parentComponent: "Modal",
            children: [
                (0, r.jsx)("div", {
                    className: I.z6,
                    children: (0, r.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: (e) =>
                            (0, r.jsx)(d.PGe, { ...e, color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                        "aria-label": y.intl.string(y.t.cpT0Cq),
                        onClick: n,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        f.current = e;
                    },
                    className: l()(I.NE, { [I.en]: Q }),
                    style: Q ? { "--custom-portrait-footer-height": `${k}px` } : void 0,
                    children: (0, r.jsx)("div", {
                        className: I.S3,
                        children: (0, r.jsxs)("div", {
                            className: I.jE,
                            children: [
                                (0, r.jsx)(b.A, {
                                    videoTask: V,
                                    parentTransitionState: t,
                                    onOptimisticProgressUpdate: O,
                                    autoplay: a,
                                    performanceClockStartTime: p,
                                    orientation: P,
                                }),
                                Q
                                    ? (0, r.jsxs)("div", {
                                          ref: F,
                                          className: I.uh,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: I.Df,
                                                  children: [
                                                      R ? null : (0, r.jsx)(T.A, { tooltipPosition: "top" }),
                                                      (0, r.jsx)(x.A, {}),
                                                  ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: I.eX,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: I.uP,
                                                          children: (0, r.jsx)("div", {
                                                              className: I.ne,
                                                              children: (0, r.jsx)(A.A, {}),
                                                          }),
                                                      }),
                                                      (0, r.jsx)(S.A, { handlePrimaryCtaClick: B }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: I.nR,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: I.uu,
                                                  children: [
                                                      R ? null : (0, r.jsx)(T.A, { tooltipPosition: "top" }),
                                                      (0, r.jsx)(x.A, {}),
                                                  ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: I.NY,
                                                  children: [
                                                      (0, r.jsx)(A.A, {}),
                                                      (0, r.jsx)(S.A, { handlePrimaryCtaClick: B }),
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
    });
}
function j(e) {
    let { questId: t, overrideQuest: n, autoplay: i, openStartClockTime: l, ...a } = e,
        o = (0, c.bG)([f.A], () => f.A.getQuest(t)),
        u = (0, c.bG)([f.A], () => f.A.getQuestConfig(t)),
        d = n ?? o,
        m = null != n ? n.config : u,
        E = s.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != E
        ? (0, r.jsx)(R.Provider, {
              value: E,
              children: (0, r.jsx)(g.R, {
                  questOrQuests: d,
                  questContent: p.uF.VIDEO_MODAL,
                  minViewTimeSeconds: D.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: a.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(M, {
                          ...a,
                          parentModalOpenStartClockTime: l,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
