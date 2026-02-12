"use strict";
n.r(t), n.d(t, { VideoQuestConfigContext: () => w, VideoQuestModalContext: () => L, default: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(412703),
    c = n(311907),
    d = n(397927),
    _ = n(770178),
    f = n(765548),
    h = n(859703),
    p = n(341915),
    g = n(890687),
    E = n(971649),
    A = n(792620),
    I = n(753386),
    T = n(73473),
    y = n(922623),
    S = n(60040),
    v = n(885947),
    C = n(440891),
    b = n(471535),
    N = n(154395),
    R = n(583235),
    O = n(985018),
    D = n(438655);
let L = i.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    w = i.createContext({ questConfig: null });
function x(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: a,
            autoplay: o,
            videoSessionId: c,
            impressionRef: h,
            parentModalOpenStartClockTime: p,
            sourceQuestContent: T,
        } = e,
        N = (0, A.Yh)(a),
        w = (0, g.LS)(a),
        x = (0, E.go)(),
        [P, M] = i.useState(N.progressSeconds),
        [k, U] = i.useState(142),
        G = a.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    l()(null != G, "VideoQuestModal: videoTask must not be null");
    let F = (0, I.eG)(G),
        V = "portrait" === F,
        B = (0, f.A)((e) => {
            U(e.target.offsetHeight);
        }),
        j = (0, _.w)(B),
        H = (0, R.H)({ quest: a, onClose: n, sourceQuestContent: T, impressionId: x }),
        Y = i.useMemo(
            () => ({ quest: a, sourceQuestContent: T, videoSessionId: c, isPortrait: V, onClose: n }),
            [a, T, c, V, n],
        );
    return (0, r.jsx)(L.Provider, {
        value: Y,
        children: (0, r.jsxs)(d.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            size: d.rIJ.DYNAMIC,
            className: s()(D.CR, { [D.VX]: "landscape" === F, [D.Zy]: "portrait" === F }),
            parentComponent: "Modal",
            children: [
                (0, r.jsx)("div", {
                    className: D.z6,
                    children: (0, r.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: (e) =>
                            (0, r.jsx)(d.PGe, { ...e, color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                        "aria-label": O.intl.string(O.t.cpT0Cq),
                        onClick: n,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        h.current = e;
                    },
                    className: s()(D.NE, { [D.en]: V }),
                    style: V ? { "--custom-portrait-footer-height": `${k}px` } : void 0,
                    children: (0, r.jsx)("div", {
                        className: D.S3,
                        children: (0, r.jsxs)("div", {
                            className: D.jE,
                            children: [
                                (0, r.jsx)(b.A, {
                                    videoTask: G,
                                    parentTransitionState: t,
                                    onOptimisticProgressUpdate: M,
                                    autoplay: o,
                                    performanceClockStartTime: p,
                                    orientation: F,
                                }),
                                V
                                    ? (0, r.jsxs)("div", {
                                          ref: j,
                                          className: D.uh,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: D.Df,
                                                  children: [w ? null : (0, r.jsx)(C.A, {}), (0, r.jsx)(v.A, {})],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: D.eX,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: D.uP,
                                                          children: (0, r.jsx)("div", {
                                                              className: D.ne,
                                                              children: (0, r.jsx)(S.A, {}),
                                                          }),
                                                      }),
                                                      (0, r.jsx)(y.A, { handlePrimaryCtaClick: H }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: D.nR,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: D.uu,
                                                  children: [w ? null : (0, r.jsx)(C.A, {}), (0, r.jsx)(v.A, {})],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: D.NY,
                                                  children: [
                                                      (0, r.jsx)(S.A, {}),
                                                      (0, r.jsx)(y.A, { handlePrimaryCtaClick: H }),
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
function P(e) {
    let { questId: t, overrideQuest: n, autoplay: a, openStartClockTime: s, ...o } = e,
        l = (0, c.bG)([h.A], () => h.A.getQuest(t)),
        u = (0, c.bG)([h.A], () => h.A.getQuestConfig(t)),
        d = n ?? l,
        _ = null != n ? n.config : u,
        f = i.useMemo(() => (null != _ ? { questConfig: _ } : null), [_]);
    return null != d && null != _ && null != f
        ? (0, r.jsx)(w.Provider, {
              value: f,
              children: (0, r.jsx)(T.R, {
                  questOrQuests: d,
                  questContent: p.uF.VIDEO_MODAL,
                  minViewTimeSeconds: N.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(x, {
                          ...o,
                          parentModalOpenStartClockTime: s,
                          impressionRef: e,
                          quest: d,
                          autoplay: a,
                      }),
              }),
          })
        : null;
}
