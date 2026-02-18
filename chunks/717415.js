n.r(t), n.d(t, { VideoQuestConfigContext: () => R, VideoQuestModalContext: () => j, default: () => w });
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
    E = n(892358),
    f = n(859703),
    v = n(341915),
    h = n(890687),
    g = n(971649),
    S = n(792620),
    C = n(753386),
    A = n(73473),
    x = n(922623),
    _ = n(60040),
    b = n(885947),
    T = n(440891),
    y = n(471535),
    N = n(583235),
    D = n(985018),
    L = n(438655),
    I = n(681636);
let j = l.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    R = l.createContext({ questConfig: null });
function k(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: i,
            autoplay: a,
            videoSessionId: c,
            impressionRef: E,
            parentModalOpenStartClockTime: f,
            sourceQuestContent: v,
        } = e,
        A = (0, S.Yh)(i),
        R = (0, h.LS)(i),
        k = (0, g.go)(),
        [w, M] = l.useState(A.progressSeconds),
        [O, P] = l.useState(142),
        V = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    o()(null != V, "VideoQuestModal: videoTask must not be null");
    let Q = (0, C.eG)(V),
        U = "portrait" === Q,
        B = (0, p.A)((e) => {
            P(e.target.offsetHeight);
        }),
        F = (0, m.w)(B),
        G = (0, N.H)({ quest: i, onClose: n, sourceQuestContent: v, impressionId: k }),
        $ = l.useMemo(
            () => ({ quest: i, sourceQuestContent: v, videoSessionId: c, isPortrait: U, onClose: n }),
            [i, v, c, U, n],
        );
    return (0, r.jsx)(j.Provider, {
        value: $,
        children: (0, r.jsxs)(d.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            size: d.rIJ.DYNAMIC,
            className: s()(I.CR, { [I.VX]: "landscape" === Q, [I.Zy]: "portrait" === Q }),
            parentComponent: "Modal",
            children: [
                (0, r.jsx)("div", {
                    className: I.z6,
                    children: (0, r.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: (e) =>
                            (0, r.jsx)(d.PGe, { ...e, color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                        "aria-label": D.intl.string(D.t.cpT0Cq),
                        onClick: n,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        E.current = e;
                    },
                    className: s()(I.NE, { [I.en]: U }),
                    style: U ? { "--custom-portrait-footer-height": `${O}px` } : void 0,
                    children: (0, r.jsx)("div", {
                        className: I.S3,
                        children: (0, r.jsxs)("div", {
                            className: I.jE,
                            children: [
                                (0, r.jsx)(y.A, {
                                    targetTimeSec: V.target,
                                    parentTransitionState: t,
                                    onOptimisticProgressUpdate: M,
                                    autoplay: a,
                                    performanceClockStartTime: f,
                                    orientation: Q,
                                }),
                                U
                                    ? (0, r.jsxs)("div", {
                                          ref: F,
                                          className: L.uh,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: L.Df,
                                                  children: [R ? null : (0, r.jsx)(T.A, {}), (0, r.jsx)(b.A, {})],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: L.eX,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: L.uP,
                                                          children: (0, r.jsx)("div", {
                                                              className: L.ne,
                                                              children: (0, r.jsx)(_.A, {}),
                                                          }),
                                                      }),
                                                      (0, r.jsx)(x.A, { handlePrimaryCtaClick: G }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: L.nR,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: L.uu,
                                                  children: [R ? null : (0, r.jsx)(T.A, {}), (0, r.jsx)(b.A, {})],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: L.NY,
                                                  children: [
                                                      (0, r.jsx)(_.A, {}),
                                                      (0, r.jsx)(x.A, { handlePrimaryCtaClick: G }),
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
function w(e) {
    let { questId: t, overrideQuest: n, autoplay: i, openStartClockTime: s, ...a } = e,
        o = (0, c.bG)([f.A], () => f.A.getQuest(t)),
        u = (0, c.bG)([f.A], () => f.A.getQuestConfig(t)),
        d = n ?? o,
        m = null != n ? n.config : u,
        p = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != p
        ? (0, r.jsx)(R.Provider, {
              value: p,
              children: (0, r.jsx)(A.R, {
                  questOrQuests: d,
                  questContent: v.uF.VIDEO_MODAL,
                  minViewTimeSeconds: E.bq,
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
