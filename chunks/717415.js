n.r(t),
    n.d(t, {
        VideoQuestConfigContext: () => I,
        VideoQuestModalContext: () => P,
        default: () => R,
    }),
    n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(284009),
    a = n.n(s),
    c = n(412703),
    u = n(311907),
    d = n(397927),
    f = n(770178),
    m = n(765548),
    p = n(906822),
    v = n(859703),
    E = n(341915),
    g = n(890687),
    h = n(792620),
    b = n(753386),
    y = n(73473),
    O = n(922623),
    S = n(60040),
    _ = n(885947),
    C = n(440891),
    x = n(471535),
    A = n(154395),
    j = n(583235),
    T = n(985018),
    D = n(438655);

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = l.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    I = l.createContext({
        questConfig: null,
    });

function L(e) {
    var t, n;
    let {
            transitionState: o,
            onClose: s,
            quest: u,
            autoplay: v,
            videoSessionId: E,
            impressionRef: y,
            parentModalOpenStartClockTime: A,
            sourceQuestContent: I,
        } = e,
        L = (0, h.Yh)(u),
        R = (0, g.LS)(u),
        k = (0, p.go)(),
        [M, V] = l.useState(L.progressSeconds),
        [Q, U] = l.useState(142),
        F = null == (n = u.config.taskConfigV2) || null == (t = n.tasks) ? void 0 : t[c.n.WATCH_VIDEO];
    a()(null != F, "VideoQuestModal: videoTask must not be null");
    let B = (0, b.eG)(F),
        K = "portrait" === B,
        G = (0, m.A)((e) => {
            U(e.target.offsetHeight);
        }),
        H = (0, f.w)(G),
        Y = (0, j.H)({
            quest: u,
            onClose: s,
            sourceQuestContent: I,
            impressionId: k,
        }),
        W = l.useMemo(
            () => ({
                quest: u,
                sourceQuestContent: I,
                videoSessionId: E,
                isPortrait: K,
                onClose: s,
            }),
            [u, I, E, K, s],
        );
    return (0, r.jsx)(P.Provider, {
        value: W,
        children: (0, r.jsxs)(d.EOs, {
            "data-migration-pending": !0,
            transitionState: o,
            size: d.rIJ.DYNAMIC,
            className: i()(D.CR, {
                [D.VX]: "landscape" === B,
                [D.Zy]: "portrait" === B,
            }),
            parentComponent: "Modal",
            children: [
                (0, r.jsx)("div", {
                    className: D.z6,
                    children: (0, r.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: (e) =>
                            (0, r.jsx)(
                                d.PGe,
                                N(w({}, e), {
                                    color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                                }),
                            ),
                        "aria-label": T.intl.string(T.t.cpT0Cq),
                        onClick: s,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        y.current = e;
                    },
                    className: i()(D.NE, {
                        [D.en]: K,
                    }),
                    style: K
                        ? {
                              "--custom-portrait-footer-height": "".concat(Q, "px"),
                          }
                        : void 0,
                    children: (0, r.jsx)("div", {
                        className: D.S3,
                        children: (0, r.jsxs)("div", {
                            className: D.jE,
                            children: [
                                (0, r.jsx)(x.A, {
                                    videoTask: F,
                                    parentTransitionState: o,
                                    onOptimisticProgressUpdate: V,
                                    autoplay: v,
                                    performanceClockStartTime: A,
                                    orientation: B,
                                }),
                                K
                                    ? (0, r.jsxs)("div", {
                                          ref: H,
                                          className: D.uh,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: D.Df,
                                                  children: [
                                                      R
                                                          ? null
                                                          : (0, r.jsx)(C.A, {
                                                                tooltipPosition: "top",
                                                            }),
                                                      (0, r.jsx)(_.A, {}),
                                                  ],
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
                                                      (0, r.jsx)(O.A, {
                                                          handlePrimaryCtaClick: Y,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: D.nR,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: D.uu,
                                                  children: [
                                                      R
                                                          ? null
                                                          : (0, r.jsx)(C.A, {
                                                                tooltipPosition: "top",
                                                            }),
                                                      (0, r.jsx)(_.A, {}),
                                                  ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: D.NY,
                                                  children: [
                                                      (0, r.jsx)(S.A, {}),
                                                      (0, r.jsx)(O.A, {
                                                          handlePrimaryCtaClick: Y,
                                                      }),
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

function R(e) {
    let { questId: t, overrideQuest: n, autoplay: o, openStartClockTime: i } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o;
            }
            if (
                ((o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.getOwnPropertyNames(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            return o;
        })(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]),
        a = (0, u.bG)([v.A], () => v.A.getQuest(t)),
        c = (0, u.bG)([v.A], () => v.A.getQuestConfig(t)),
        d = null != n ? n : a,
        f = null != n ? n.config : c,
        m = l.useMemo(
            () =>
                null != f
                    ? {
                          questConfig: f,
                      }
                    : null,
            [f],
        );
    return null != d && null != f && null != m
        ? (0, r.jsx)(I.Provider, {
              value: m,
              children: (0, r.jsx)(y.R, {
                  questOrQuests: d,
                  questContent: E.uF.VIDEO_MODAL,
                  minViewTimeSeconds: A.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: s.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(
                          L,
                          N(w({}, s), {
                              parentModalOpenStartClockTime: i,
                              impressionRef: e,
                              quest: d,
                              autoplay: o,
                          }),
                      ),
              }),
          })
        : null;
}
