n.r(t),
    n.d(t, {
        VideoQuestConfigContext: () => F,
        VideoQuestModalContext: () => Z,
        default: () => H,
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
    p = n(210887),
    v = n(617136),
    E = n(915750),
    g = n(509212),
    O = n(113434),
    h = n(569984),
    b = n(497505),
    C = n(937797),
    S = n(475595),
    y = n(602667),
    _ = n(667109),
    x = n(589313),
    j = n(877242),
    D = n(165317),
    P = n(449788),
    T = n(874010),
    R = n(656357),
    I = n(267322),
    N = n(684245),
    A = n(46140),
    w = n(231338),
    k = n(388032),
    M = n(273339);
function L(e) {
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
    }),
    F = o.createContext({ questConfig: null });
function B(e) {
    var t, n;
    let {
            transitionState: l,
            onClose: a,
            quest: h,
            autoplay: y,
            videoSessionId: I,
            impressionRef: F,
            parentModalOpenStartClockTime: B,
            sourceQuestContent: H,
        } = e,
        U = (0, g.il)(h),
        q = (0, O.tP)(h),
        Q = (0, E.aM)(),
        [Y, G] = o.useState(U.progressSeconds),
        [W, z] = o.useState(142),
        { variant: K, enabled: X } = C.EO.useConfig({ location: A.dr.VIDEO_MODAL }),
        J = null == (n = h.config.taskConfigV2) || null == (t = n.tasks) ? void 0 : t[c.X.WATCH_VIDEO];
    s()(null != J, "VideoQuestModal: videoTask must not be null");
    let $ = (0, g.ZS)(J),
        ee = "portrait" === $,
        et = (0, f.Z)((e) => {
            z(e.target.offsetHeight);
        }),
        en = (0, m.y)(et),
        er = K === C.m_.OVERLAY_SHARE_ON_VIDEO,
        eo = (0, N.e)({
            quest: h,
            onClose: a,
            sourceQuestContent: H,
            impressionId: Q,
        }),
        el = (0, u.e7)([p.Z], () => p.Z.getState().theme),
        ei = (0, d.wjy)(el) ? w.BR.DARK : w.BR.LIGHT,
        ea = o.useMemo(
            () => ({
                quest: h,
                sourceQuestContent: H,
                videoSessionId: I,
                isPortrait: ee,
                onClose: a,
            }),
            [h, H, I, ee, a],
        );
    return (0, r.jsx)(Z.Provider, {
        value: ea,
        children: (0, r.jsxs)(d.Y0X, {
            "data-migration-pending": !0,
            transitionState: l,
            size: d.CgR.DYNAMIC,
            className: i()(M.modalRoot, {
                [M.modalRootLandscape]: "landscape" === $,
                [M.modalRootPortrait]: "portrait" === $,
                [M.modalRootV2]: X,
                [M.modalRootPortraitV2]: X && "portrait" === $,
            }),
            parentComponent: "Modal",
            children: [
                X &&
                    (0, r.jsx)("div", {
                        className: M.closeModalBtnWrapper,
                        children: (0, r.jsx)(d.hU, {
                            variant: "icon-only",
                            icon: (e) =>
                                (0, r.jsx)(
                                    d.Dio,
                                    V(L({}, e), { color: d.TVs.colors.CONTROL_TEXT_OVERLAY_SECONDARY_DEFAULT }),
                                ),
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            onClick: a,
                        }),
                    }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        F.current = e;
                    },
                    className: i()(M.modalBg, {
                        [M.modalBgV2]: X,
                        [M.modalBgV2Portrait]: X && ee,
                    }),
                    style: ee && X ? { "--custom-portrait-footer-height": "".concat(W, "px") } : void 0,
                    children: (0, r.jsx)("div", {
                        className: i()(M.modalBody, { [M.modalBodyWithBorder]: X }),
                        children: (0, r.jsxs)("div", {
                            className: M.modalContent,
                            style: { backgroundColor: X ? d.TVs.colors.BACKGROUND_BASE_LOWER.css : void 0 },
                            children: [
                                X
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: M.contentHeader,
                                          children: [
                                              (0, r.jsxs)(d.P3F, {
                                                  className: M.contentHeaderGameInfo,
                                                  onClick: () => eo(b.jn.VIDEO_MODAL, v.jZ.OPEN_GAME_LINK),
                                                  children: [
                                                      (0, r.jsx)("img", {
                                                          alt: h.config.messages.gameTitle,
                                                          className: i()(M.contentHeaderLogotype, M.accentOnHover),
                                                          src: (0, S.fh)(h, S.eC.LOGO_TYPE, ei).url,
                                                      }),
                                                      (0, r.jsx)(T.Z, {}),
                                                      (0, r.jsxs)("div", {
                                                          className: M.questHeading,
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
                                              !q && (0, r.jsx)(D.Z, { tooltipPosition: "left" }),
                                          ],
                                      }),
                                (0, r.jsx)(R.Z, {
                                    videoTask: J,
                                    parentTransitionState: l,
                                    onOptimisticProgressUpdate: G,
                                    autoplay: y,
                                    performanceClockStartTime: B,
                                    orientation: $,
                                }),
                                ee
                                    ? (0, r.jsxs)("div", {
                                          ref: en,
                                          className: X ? M.contentFooterPortraitV2 : M.contentFooterPortraitV1,
                                          children: [
                                              X
                                                  ? (0, r.jsxs)("div", {
                                                        className: M.portraitContentRow,
                                                        children: [
                                                            q ? null : (0, r.jsx)(D.Z, { tooltipPosition: "top" }),
                                                            (0, r.jsx)(j.Z, {}),
                                                            !er && (0, r.jsx)(P.Z, { floatRight: !0 }),
                                                        ],
                                                    })
                                                  : null,
                                              (0, r.jsxs)("div", {
                                                  className: M.portraitButtonsContainer,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: M.portraitButtonRow,
                                                          children: [
                                                              X ? null : (0, r.jsx)(_.Z, { handlePrimaryCtaClick: eo }),
                                                              (0, r.jsx)("div", {
                                                                  className: M.portraitCtaBtnWrapper,
                                                                  children: (0, r.jsx)(x.Z, {}),
                                                              }),
                                                          ],
                                                      }),
                                                      X
                                                          ? (0, r.jsx)(_.Z, { handlePrimaryCtaClick: eo })
                                                          : (0, r.jsx)(P.Z, {}),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: i()(M.contentFooter, X ? M.contentFooterV2 : M.contentFooterV1),
                                          children: [
                                              X
                                                  ? (0, r.jsxs)("div", {
                                                        className: M.contentFooterAdInfo,
                                                        children: [
                                                            q ? null : (0, r.jsx)(D.Z, { tooltipPosition: "top" }),
                                                            (0, r.jsx)(j.Z, {}),
                                                        ],
                                                    })
                                                  : (0, r.jsx)(d.Button, {
                                                        variant: "secondary",
                                                        text: k.intl.string(k.t.cpT0Cq),
                                                        onClick: a,
                                                    }),
                                              (0, r.jsxs)("div", {
                                                  className: i()(M.contentFooterButtonCont, {
                                                      [M.contentFooterButtonContV2]: X,
                                                  }),
                                                  children: [
                                                      !er && (0, r.jsx)(P.Z, {}),
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
function H(e) {
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
    let s = (0, u.e7)([h.Z], () => h.Z.getQuest(t)),
        c = (0, u.e7)([h.Z], () => h.Z.getQuestConfig(t)),
        d = null != n ? n : s,
        m = null != n ? n.config : c,
        f = o.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != f
        ? (0, r.jsx)(F.Provider, {
              value: f,
              children: (0, r.jsx)(y.A, {
                  questOrQuests: d,
                  questContent: b.jn.VIDEO_MODAL,
                  minViewTimeSeconds: I.zw,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: a.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(
                          B,
                          V(L({}, a), {
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
