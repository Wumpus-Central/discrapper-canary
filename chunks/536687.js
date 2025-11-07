n.r(t),
    n.d(t, {
        VideoQuestModalContext: () => Z,
        default: () => B,
    }),
    n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(754700),
    u = n(442837),
    d = n(481060),
    m = n(393903),
    p = n(448986),
    f = n(210887),
    v = n(617136),
    E = n(915750),
    g = n(509212),
    O = n(113434),
    h = n(569984),
    b = n(497505),
    S = n(937797),
    y = n(475595),
    C = n(602667),
    _ = n(990993),
    x = n(114649),
    j = n(895966),
    T = n(768003),
    D = n(985559),
    P = n(747717),
    R = n(963123),
    I = n(281055),
    N = n(431130),
    w = n(46140),
    A = n(231338),
    k = n(388032),
    L = n(430799);
function M(e) {
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
function V(e, t) {
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
let Z = o.createContext({
    quest: null,
    sourceQuestContent: null,
    videoSessionId: "",
    isPortrait: !1,
    onClose: () => {},
});
function F(e) {
    var t, n;
    let {
            transitionState: l,
            onClose: a,
            quest: h,
            autoplay: C,
            videoSessionId: I,
            impressionRef: F,
            parentModalOpenStartClockTime: B,
            sourceQuestContent: U,
        } = e,
        H = (0, g.il)(h),
        q = (0, O.tP)(h),
        Y = (0, E.aM)(),
        [Q, G] = o.useState(H.progressSeconds),
        [W, K] = o.useState(142),
        { variant: z, enabled: X } = S.EO.useConfig({ location: w.dr.VIDEO_MODAL }),
        J = null == (n = h.config.taskConfigV2) || null == (t = n.tasks) ? void 0 : t[c.X.WATCH_VIDEO];
    s()(null != J, "VideoQuestModal: videoTask must not be null");
    let $ = (0, g.ZS)(J),
        ee = "portrait" === $,
        et = (0, p.Z)((e) => {
            K(e.target.offsetHeight);
        }),
        en = (0, m.y)(et),
        er = z === S.m_.OVERLAY_SHARE_ON_VIDEO,
        eo = (0, N.p)({
            quest: h,
            onClose: a,
            sourceQuestContent: U,
            impressionId: Y,
        }),
        el = (0, u.e7)([f.Z], () => f.Z.getState().theme),
        ei = (0, d.wjy)(el) ? A.BR.DARK : A.BR.LIGHT,
        ea = o.useMemo(
            () => ({
                quest: h,
                sourceQuestContent: U,
                videoSessionId: I,
                isPortrait: ee,
                onClose: a,
            }),
            [h, U, I, ee, a],
        );
    return (0, r.jsx)(Z.Provider, {
        value: ea,
        children: (0, r.jsxs)(d.Y0X, {
            "data-migration-pending": !0,
            transitionState: l,
            size: d.CgR.DYNAMIC,
            className: i()(L.modalRoot, {
                [L.modalRootLandscape]: "landscape" === $,
                [L.modalRootPortrait]: "portrait" === $,
                [L.modalRootV2]: X,
                [L.modalRootPortraitV2]: X && "portrait" === $,
            }),
            parentComponent: "Modal",
            children: [
                X &&
                    (0, r.jsx)("div", {
                        className: L.closeModalBtnWrapper,
                        children: (0, r.jsx)(d.hU, {
                            variant: "icon-only",
                            icon: (e) =>
                                (0, r.jsx)(
                                    d.Dio,
                                    V(M({}, e), { color: d.TVs.colors.CONTROL_TEXT_OVERLAY_SECONDARY_DEFAULT }),
                                ),
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            onClick: a,
                        }),
                    }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        F.current = e;
                    },
                    className: i()(L.modalBg, {
                        [L.modalBgV2]: X,
                        [L.modalBgV2Portrait]: X && ee,
                    }),
                    style: ee && X ? { "--custom-portrait-footer-height": "".concat(W, "px") } : void 0,
                    children: (0, r.jsx)("div", {
                        className: i()(L.modalBody, { [L.modalBodyWithBorder]: X }),
                        children: (0, r.jsxs)("div", {
                            className: L.modalContent,
                            style: { backgroundColor: X ? d.TVs.colors.BACKGROUND_BASE_LOWER.css : void 0 },
                            children: [
                                X
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: L.contentHeader,
                                          children: [
                                              (0, r.jsxs)(d.P3F, {
                                                  className: L.contentHeaderGameInfo,
                                                  onClick: () => eo(b.jn.VIDEO_MODAL, v.jZ.OPEN_GAME_LINK),
                                                  children: [
                                                      (0, r.jsx)("img", {
                                                          alt: h.config.messages.gameTitle,
                                                          className: i()(L.contentHeaderLogotype, L.accentOnHover),
                                                          src: (0, y.fh)(h, y.eC.LOGO_TYPE, ei).url,
                                                      }),
                                                      (0, r.jsx)(P.Z, {}),
                                                      (0, r.jsxs)("div", {
                                                          className: L.questHeading,
                                                          children: [
                                                              (0, r.jsx)(d.Heading, {
                                                                  variant: "heading-md/semibold",
                                                                  color: "header-primary",
                                                                  children: k.intl.format(k.t.EQa7os, {
                                                                      questName: h.config.messages.questName,
                                                                  }),
                                                              }),
                                                              (0, r.jsx)(d.Text, {
                                                                  variant: "text-sm/medium",
                                                                  color: "header-secondary",
                                                                  children: h.config.messages.gameTitle,
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              !q && (0, r.jsx)(T.Z, { tooltipPosition: "left" }),
                                          ],
                                      }),
                                (0, r.jsx)(R.Z, {
                                    videoTask: J,
                                    parentTransitionState: l,
                                    onOptimisticProgressUpdate: G,
                                    autoplay: C,
                                    performanceClockStartTime: B,
                                    orientation: $,
                                }),
                                ee
                                    ? (0, r.jsxs)("div", {
                                          ref: en,
                                          className: X ? L.contentFooterPortraitV2 : L.contentFooterPortraitV1,
                                          children: [
                                              X
                                                  ? (0, r.jsxs)("div", {
                                                        className: L.portraitContentRow,
                                                        children: [
                                                            q ? null : (0, r.jsx)(T.Z, { tooltipPosition: "top" }),
                                                            (0, r.jsx)(j.Z, {}),
                                                            !er && (0, r.jsx)(D.Z, { floatRight: !0 }),
                                                        ],
                                                    })
                                                  : null,
                                              (0, r.jsxs)("div", {
                                                  className: L.portraitButtonsContainer,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: L.portraitButtonRow,
                                                          children: [
                                                              X ? null : (0, r.jsx)(_.Z, { handlePrimaryCtaClick: eo }),
                                                              (0, r.jsx)("div", {
                                                                  className: L.portraitCtaBtnWrapper,
                                                                  children: (0, r.jsx)(x.Z, {}),
                                                              }),
                                                          ],
                                                      }),
                                                      X
                                                          ? (0, r.jsx)(_.Z, { handlePrimaryCtaClick: eo })
                                                          : (0, r.jsx)(D.Z, {}),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: i()(L.contentFooter, X ? L.contentFooterV2 : L.contentFooterV1),
                                          children: [
                                              X
                                                  ? (0, r.jsxs)("div", {
                                                        className: L.contentFooterAdInfo,
                                                        children: [
                                                            q ? null : (0, r.jsx)(T.Z, { tooltipPosition: "top" }),
                                                            (0, r.jsx)(j.Z, {}),
                                                        ],
                                                    })
                                                  : (0, r.jsx)(d.Button, {
                                                        variant: "secondary",
                                                        text: k.intl.string(k.t.cpT0Cq),
                                                        onClick: a,
                                                    }),
                                              (0, r.jsxs)("div", {
                                                  className: i()(L.contentFooterButtonCont, {
                                                      [L.contentFooterButtonContV2]: X,
                                                  }),
                                                  children: [
                                                      !er && (0, r.jsx)(D.Z, {}),
                                                      (0, r.jsx)(x.Z, {}),
                                                      X ? (0, r.jsx)(_.Z, { handlePrimaryCtaClick: eo }) : null,
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
function B(e) {
    var { questId: t, overrideQuest: n, autoplay: o, openStartClockTime: l } = e,
        i = (function (e, t) {
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
    let a = (0, u.e7)([h.Z], () => h.Z.getQuest(t)),
        s = null != n ? n : a;
    return null != s
        ? (0, r.jsx)(C.A, {
              questOrQuests: s,
              questContent: b.jn.VIDEO_MODAL,
              minViewTimeSeconds: I.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: i.sourceQuestContent,
              children: (e) =>
                  (0, r.jsx)(
                      F,
                      V(M({}, i), {
                          parentModalOpenStartClockTime: l,
                          impressionRef: e,
                          quest: s,
                          autoplay: o,
                      }),
                  ),
          })
        : null;
}
