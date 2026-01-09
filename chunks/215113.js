n.r(t),
    n.d(t, {
        VideoQuestConfigContext: () => A,
        VideoQuestModalContext: () => I,
        default: () => k,
    }),
    n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(754700),
    u = n(442837),
    d = n(481060),
    m = n(393903),
    f = n(448986),
    p = n(915750),
    v = n(616022),
    E = n(49436),
    g = n(968843),
    h = n(254579),
    C = n(542347),
    S = n(602667),
    b = n(667109),
    O = n(589313),
    _ = n(877242),
    x = n(165317),
    y = n(656357),
    j = n(267322),
    P = n(684245),
    D = n(388032),
    T = n(209668);
function R(e) {
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
let I = o.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    A = o.createContext({ questConfig: null });
function w(e) {
    var t, n;
    let {
            transitionState: l,
            onClose: a,
            quest: u,
            autoplay: v,
            videoSessionId: E,
            impressionRef: S,
            parentModalOpenStartClockTime: j,
            sourceQuestContent: A,
        } = e,
        w = (0, h.il)(u),
        k = (0, g.tP)(u),
        L = (0, p.aM)(),
        [M, V] = o.useState(w.progressSeconds),
        [Z, F] = o.useState(142),
        B = null == (n = u.config.taskConfigV2) || null == (t = n.tasks) ? void 0 : t[c.X.WATCH_VIDEO];
    s()(null != B, "VideoQuestModal: videoTask must not be null");
    let U = (0, C.ZS)(B),
        q = "portrait" === U,
        Y = (0, f.Z)((e) => {
            F(e.target.offsetHeight);
        }),
        H = (0, m.y)(Y),
        Q = (0, P.e)({
            quest: u,
            onClose: a,
            sourceQuestContent: A,
            impressionId: L,
        }),
        G = o.useMemo(
            () => ({
                quest: u,
                sourceQuestContent: A,
                videoSessionId: E,
                isPortrait: q,
                onClose: a,
            }),
            [u, A, E, q, a],
        );
    return (0, r.jsx)(I.Provider, {
        value: G,
        children: (0, r.jsxs)(d.Y0X, {
            "data-migration-pending": !0,
            transitionState: l,
            size: d.CgR.DYNAMIC,
            className: i()(T.modalRoot, {
                [T.modalRootLandscape]: "landscape" === U,
                [T.modalRootPortrait]: "portrait" === U,
            }),
            parentComponent: "Modal",
            children: [
                (0, r.jsx)("div", {
                    className: T.closeModalBtnWrapper,
                    children: (0, r.jsx)(d.hU, {
                        variant: "icon-only",
                        icon: (e) =>
                            (0, r.jsx)(
                                d.Dio,
                                N(R({}, e), { color: d.TVs.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                            ),
                        "aria-label": D.intl.string(D.t.cpT0Cq),
                        onClick: a,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        S.current = e;
                    },
                    className: i()(T.modalBg, { [T.modalBgPortrait]: q }),
                    style: q ? { "--custom-portrait-footer-height": "".concat(Z, "px") } : void 0,
                    children: (0, r.jsx)("div", {
                        className: T.modalBody,
                        children: (0, r.jsxs)("div", {
                            className: T.modalContent,
                            children: [
                                (0, r.jsx)(y.Z, {
                                    videoTask: B,
                                    parentTransitionState: l,
                                    onOptimisticProgressUpdate: V,
                                    autoplay: v,
                                    performanceClockStartTime: j,
                                    orientation: U,
                                }),
                                q
                                    ? (0, r.jsxs)("div", {
                                          ref: H,
                                          className: T.contentFooterPortrait,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: T.portraitContentRow,
                                                  children: [
                                                      k ? null : (0, r.jsx)(x.Z, { tooltipPosition: "top" }),
                                                      (0, r.jsx)(_.Z, {}),
                                                  ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: T.portraitButtonsContainer,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: T.portraitButtonRow,
                                                          children: (0, r.jsx)("div", {
                                                              className: T.portraitCtaBtnWrapper,
                                                              children: (0, r.jsx)(O.Z, {}),
                                                          }),
                                                      }),
                                                      (0, r.jsx)(b.Z, { handlePrimaryCtaClick: Q }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: T.contentFooter,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: T.contentFooterAdInfo,
                                                  children: [
                                                      k ? null : (0, r.jsx)(x.Z, { tooltipPosition: "top" }),
                                                      (0, r.jsx)(_.Z, {}),
                                                  ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: T.contentFooterButtonCont,
                                                  children: [
                                                      (0, r.jsx)(O.Z, {}),
                                                      (0, r.jsx)(b.Z, { handlePrimaryCtaClick: Q }),
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
function k(e) {
    var { questId: t, overrideQuest: n, autoplay: l, openStartClockTime: i } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
    let s = (0, u.e7)([v.Z], () => v.Z.getQuest(t)),
        c = (0, u.e7)([v.Z], () => v.Z.getQuestConfig(t)),
        d = null != n ? n : s,
        m = null != n ? n.config : c,
        f = o.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != f
        ? (0, r.jsx)(A.Provider, {
              value: f,
              children: (0, r.jsx)(S.A, {
                  questOrQuests: d,
                  questContent: E.jn.VIDEO_MODAL,
                  minViewTimeSeconds: j.zw,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: a.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(
                          w,
                          N(R({}, a), {
                              parentModalOpenStartClockTime: i,
                              impressionRef: e,
                              quest: d,
                              autoplay: l,
                          }),
                      ),
              }),
          })
        : null;
}
