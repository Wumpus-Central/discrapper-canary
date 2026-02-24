n.r(t), n.d(t, { VideoQuestConfigContext: () => R, VideoQuestModalContext: () => k, default: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
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
    h = n(245853),
    x = n(890687),
    g = n(971649),
    S = n(792620),
    C = n(753386),
    A = n(73473),
    _ = n(922623),
    b = n(60040),
    T = n(885947),
    y = n(440891),
    N = n(471535),
    D = n(583235),
    L = n(654487),
    j = n(985018),
    I = n(438655),
    M = n(681636);
let k = i.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        isFullscreenEnabled: !1,
        onClose: () => {},
        setIsFullscreenEnabled: () => {},
    }),
    R = i.createContext({ questConfig: null });
function w(e) {
    let {
            transitionState: t,
            onClose: n,
            quest: s,
            autoplay: a,
            videoSessionId: c,
            impressionRef: E,
            parentModalOpenStartClockTime: f,
            sourceQuestContent: v,
        } = e,
        A = (0, S.Yh)(s),
        R = (0, x.LS)(s),
        w = (0, g.go)(),
        [O, P] = i.useState(A.progressSeconds),
        [V, Q] = i.useState(142),
        [U, B] = i.useState(!1),
        F = s.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    o()(null != F, "VideoQuestModal: videoTask must not be null");
    let G = (0, C.eG)(F),
        $ = "portrait" === G,
        K = (0, p.A)((e) => {
            Q(e.target.offsetHeight);
        }),
        Y = (0, m.w)(K),
        { enabled: H } = h.jS.useConfig({ location: L.rE.VIDEO_MODAL }),
        z = (0, D.H)({ quest: s, onClose: n, sourceQuestContent: v, impressionId: w }),
        W = i.useMemo(
            () => ({
                quest: s,
                sourceQuestContent: v,
                videoSessionId: c,
                isPortrait: $,
                onClose: n,
                isFullscreenEnabled: U,
                setIsFullscreenEnabled: B,
            }),
            [s, v, c, $, n, U, B],
        );
    return (0, r.jsx)(k.Provider, {
        value: W,
        children: (0, r.jsx)("div", {
            style: $ ? { "--custom-portrait-footer-height": `${V}px` } : void 0,
            children: (0, r.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rIJ.DYNAMIC,
                className: l()(M.CR, { [M.VX]: "landscape" === G, [M.Zy]: "portrait" === G }),
                parentComponent: "Modal",
                children: [
                    !H &&
                        (0, r.jsx)("div", {
                            className: M.z6,
                            children: (0, r.jsx)(d.K0, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, r.jsx)(d.PGe, {
                                        ...e,
                                        color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                                    }),
                                "aria-label": j.intl.string(j.t.cpT0Cq),
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
                            style: { "--custom-footer-horizontal-padding": `${H ? 20 : 16}px` },
                            children: (0, r.jsxs)("div", {
                                className: M.jE,
                                children: [
                                    (0, r.jsx)(N.A, {
                                        targetTimeSec: F.target,
                                        parentTransitionState: t,
                                        onOptimisticProgressUpdate: P,
                                        autoplay: a,
                                        performanceClockStartTime: f,
                                        orientation: G,
                                    }),
                                    $
                                        ? (0, r.jsxs)("div", {
                                              ref: Y,
                                              className: I.uh,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: I.Df,
                                                      children: [R ? null : (0, r.jsx)(y.A, {}), (0, r.jsx)(T.A, {})],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: I.eX,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: I.uP,
                                                              children: (0, r.jsx)("div", {
                                                                  className: I.ne,
                                                                  children: (0, r.jsx)(b.A, {}),
                                                              }),
                                                          }),
                                                          (0, r.jsx)(_.A, { handlePrimaryCtaClick: z }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: I.nR,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: I.uu,
                                                      children: [R ? null : (0, r.jsx)(y.A, {}), (0, r.jsx)(T.A, {})],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: I.NY,
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
function O(e) {
    let { questId: t, overrideQuest: n, autoplay: s, openStartClockTime: l, ...a } = e,
        o = (0, c.bG)([f.A], () => f.A.getQuest(t)),
        u = (0, c.bG)([f.A], () => f.A.getQuestConfig(t)),
        d = n ?? o,
        m = null != n ? n.config : u,
        p = i.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
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
                      (0, r.jsx)(w, {
                          ...a,
                          parentModalOpenStartClockTime: l,
                          impressionRef: e,
                          quest: d,
                          autoplay: s,
                      }),
              }),
          })
        : null;
}
