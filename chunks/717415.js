"use strict";
n.r(t), n.d(t, { VideoQuestConfigContext: () => x, VideoQuestModalContext: () => w, default: () => M });
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
    h = n(892358),
    p = n(859703),
    g = n(341915),
    E = n(890687),
    A = n(971649),
    I = n(792620),
    T = n(753386),
    y = n(73473),
    S = n(922623),
    v = n(60040),
    C = n(885947),
    b = n(440891),
    N = n(471535),
    R = n(583235),
    O = n(985018),
    D = n(438655),
    L = n(681636);
let w = i.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    x = i.createContext({ questConfig: null });
function P(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: a,
            autoplay: o,
            videoSessionId: c,
            impressionRef: h,
            parentModalOpenStartClockTime: p,
            sourceQuestContent: g,
        } = e,
        y = (0, I.Yh)(a),
        x = (0, E.LS)(a),
        P = (0, A.go)(),
        [M, k] = i.useState(y.progressSeconds),
        [U, G] = i.useState(142),
        F = a.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    l()(null != F, "VideoQuestModal: videoTask must not be null");
    let V = (0, T.eG)(F),
        B = "portrait" === V,
        j = (0, f.A)((e) => {
            G(e.target.offsetHeight);
        }),
        H = (0, _.w)(j),
        Y = (0, R.H)({ quest: a, onClose: n, sourceQuestContent: g, impressionId: P }),
        W = i.useMemo(
            () => ({ quest: a, sourceQuestContent: g, videoSessionId: c, isPortrait: B, onClose: n }),
            [a, g, c, B, n],
        );
    return (0, r.jsx)(w.Provider, {
        value: W,
        children: (0, r.jsxs)(d.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            size: d.rIJ.DYNAMIC,
            className: s()(L.CR, { [L.VX]: "landscape" === V, [L.Zy]: "portrait" === V }),
            parentComponent: "Modal",
            children: [
                (0, r.jsx)("div", {
                    className: L.z6,
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
                    className: s()(L.NE, { [L.en]: B }),
                    style: B ? { "--custom-portrait-footer-height": `${U}px` } : void 0,
                    children: (0, r.jsx)("div", {
                        className: L.S3,
                        children: (0, r.jsxs)("div", {
                            className: L.jE,
                            children: [
                                (0, r.jsx)(N.A, {
                                    targetTimeSec: F.target,
                                    parentTransitionState: t,
                                    onOptimisticProgressUpdate: k,
                                    autoplay: o,
                                    performanceClockStartTime: p,
                                    orientation: V,
                                }),
                                B
                                    ? (0, r.jsxs)("div", {
                                          ref: H,
                                          className: D.uh,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: D.Df,
                                                  children: [x ? null : (0, r.jsx)(b.A, {}), (0, r.jsx)(C.A, {})],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: D.eX,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: D.uP,
                                                          children: (0, r.jsx)("div", {
                                                              className: D.ne,
                                                              children: (0, r.jsx)(v.A, {}),
                                                          }),
                                                      }),
                                                      (0, r.jsx)(S.A, { handlePrimaryCtaClick: Y }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: D.nR,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: D.uu,
                                                  children: [x ? null : (0, r.jsx)(b.A, {}), (0, r.jsx)(C.A, {})],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: D.NY,
                                                  children: [
                                                      (0, r.jsx)(v.A, {}),
                                                      (0, r.jsx)(S.A, { handlePrimaryCtaClick: Y }),
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
function M(e) {
    let { questId: t, overrideQuest: n, autoplay: a, openStartClockTime: s, ...o } = e,
        l = (0, c.bG)([p.A], () => p.A.getQuest(t)),
        u = (0, c.bG)([p.A], () => p.A.getQuestConfig(t)),
        d = n ?? l,
        _ = null != n ? n.config : u,
        f = i.useMemo(() => (null != _ ? { questConfig: _ } : null), [_]);
    return null != d && null != _ && null != f
        ? (0, r.jsx)(x.Provider, {
              value: f,
              children: (0, r.jsx)(y.R, {
                  questOrQuests: d,
                  questContent: g.uF.VIDEO_MODAL,
                  minViewTimeSeconds: h.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(P, {
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
