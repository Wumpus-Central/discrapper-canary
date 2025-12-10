n.r(t),
    n.d(t, {
        VideoQuestConfigContext: () => B,
        VideoQuestModalContext: () => F,
        default: () => q,
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
    g = n(616022),
    O = n(49436),
    h = n(937797),
    b = n(968843),
    C = n(475595),
    S = n(254579),
    _ = n(542347),
    y = n(602667),
    x = n(667109),
    j = n(589313),
    P = n(877242),
    D = n(165317),
    T = n(449788),
    R = n(874010),
    I = n(656357),
    N = n(267322),
    A = n(684245),
    w = n(324805),
    L = n(231338),
    k = n(388032),
    M = n(273339);
function V(e) {
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
function Z(e, t) {
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
let F = o.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        onClose: () => {},
    }),
    B = o.createContext({ questConfig: null });
function U(e) {
    var t, n;
    let {
            transitionState: l,
            onClose: a,
            quest: g,
            autoplay: y,
            videoSessionId: N,
            impressionRef: B,
            parentModalOpenStartClockTime: U,
            sourceQuestContent: q,
        } = e,
        Y = (0, S.il)(g),
        H = (0, b.tP)(g),
        Q = (0, E.aM)(),
        [G, K] = o.useState(Y.progressSeconds),
        [W, z] = o.useState(142),
        { variant: X, enabled: $ } = h.EO.useConfig({ location: w.dr.VIDEO_MODAL }),
        J = null == (n = g.config.taskConfigV2) || null == (t = n.tasks) ? void 0 : t[c.X.WATCH_VIDEO];
    s()(null != J, "VideoQuestModal: videoTask must not be null");
    let ee = (0, _.ZS)(J),
        et = "portrait" === ee,
        en = (0, f.Z)((e) => {
            z(e.target.offsetHeight);
        }),
        er = (0, m.y)(en),
        eo = X === h.m_.OVERLAY_SHARE_ON_VIDEO,
        el = (0, A.e)({
            quest: g,
            onClose: a,
            sourceQuestContent: q,
            impressionId: Q,
        }),
        ei = (0, u.e7)([p.Z], () => p.Z.getState().theme),
        ea = (0, d.wjy)(ei) ? L.BR.DARK : L.BR.LIGHT,
        es = o.useMemo(
            () => ({
                quest: g,
                sourceQuestContent: q,
                videoSessionId: N,
                isPortrait: et,
                onClose: a,
            }),
            [g, q, N, et, a],
        );
    return (0, r.jsx)(F.Provider, {
        value: es,
        children: (0, r.jsxs)(d.Y0X, {
            "data-migration-pending": !0,
            transitionState: l,
            size: d.CgR.DYNAMIC,
            className: i()(M.modalRoot, {
                [M.modalRootLandscape]: "landscape" === ee,
                [M.modalRootPortrait]: "portrait" === ee,
                [M.modalRootV2]: $,
                [M.modalRootPortraitV2]: $ && "portrait" === ee,
            }),
            parentComponent: "Modal",
            children: [
                $ &&
                    (0, r.jsx)("div", {
                        className: M.closeModalBtnWrapper,
                        children: (0, r.jsx)(d.hU, {
                            variant: "icon-only",
                            icon: (e) =>
                                (0, r.jsx)(
                                    d.Dio,
                                    Z(V({}, e), { color: d.TVs.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                                ),
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            onClick: a,
                        }),
                    }),
                (0, r.jsx)("div", {
                    ref: (e) => {
                        B.current = e;
                    },
                    className: i()(M.modalBg, {
                        [M.modalBgV2]: $,
                        [M.modalBgV2Portrait]: $ && et,
                    }),
                    style: et && $ ? { "--custom-portrait-footer-height": "".concat(W, "px") } : void 0,
                    children: (0, r.jsx)("div", {
                        className: i()(M.modalBody, { [M.modalBodyWithBorder]: $ }),
                        children: (0, r.jsxs)("div", {
                            className: M.modalContent,
                            style: { backgroundColor: $ ? d.TVs.colors.BACKGROUND_BASE_LOWER.css : void 0 },
                            children: [
                                $
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: M.contentHeader,
                                          children: [
                                              (0, r.jsxs)(d.P3F, {
                                                  className: M.contentHeaderGameInfo,
                                                  onClick: () => el(O.jn.VIDEO_MODAL, v.jZ.OPEN_GAME_LINK),
                                                  children: [
                                                      (0, r.jsx)("img", {
                                                          alt: g.config.messages.gameTitle,
                                                          className: i()(M.contentHeaderLogotype, M.accentOnHover),
                                                          src: (0, C.fh)(g, C.eC.LOGO_TYPE, ea).url,
                                                      }),
                                                      (0, r.jsx)(R.Z, {}),
                                                      (0, r.jsxs)("div", {
                                                          className: M.questHeading,
                                                          children: [
                                                              (0, r.jsx)(d.Heading, {
                                                                  variant: "heading-md/semibold",
                                                                  color: "header-primary",
                                                                  children: k.intl.format(k.t.EQa7os, {
                                                                      questName: g.config.messages.questName,
                                                                  }),
                                                              }),
                                                              (0, r.jsx)(d.Text, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  children: g.config.messages.gameTitle,
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              !H && (0, r.jsx)(D.Z, { tooltipPosition: "left" }),
                                          ],
                                      }),
                                (0, r.jsx)(I.Z, {
                                    videoTask: J,
                                    parentTransitionState: l,
                                    onOptimisticProgressUpdate: K,
                                    autoplay: y,
                                    performanceClockStartTime: U,
                                    orientation: ee,
                                }),
                                et
                                    ? (0, r.jsxs)("div", {
                                          ref: er,
                                          className: $ ? M.contentFooterPortraitV2 : M.contentFooterPortraitV1,
                                          children: [
                                              $
                                                  ? (0, r.jsxs)("div", {
                                                        className: M.portraitContentRow,
                                                        children: [
                                                            H ? null : (0, r.jsx)(D.Z, { tooltipPosition: "top" }),
                                                            (0, r.jsx)(P.Z, {}),
                                                            !eo && (0, r.jsx)(T.Z, { floatRight: !0 }),
                                                        ],
                                                    })
                                                  : null,
                                              (0, r.jsxs)("div", {
                                                  className: M.portraitButtonsContainer,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: M.portraitButtonRow,
                                                          children: [
                                                              $ ? null : (0, r.jsx)(x.Z, { handlePrimaryCtaClick: el }),
                                                              (0, r.jsx)("div", {
                                                                  className: M.portraitCtaBtnWrapper,
                                                                  children: (0, r.jsx)(j.Z, {}),
                                                              }),
                                                          ],
                                                      }),
                                                      $
                                                          ? (0, r.jsx)(x.Z, { handlePrimaryCtaClick: el })
                                                          : (0, r.jsx)(T.Z, {}),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: i()(M.contentFooter, $ ? M.contentFooterV2 : M.contentFooterV1),
                                          children: [
                                              $
                                                  ? (0, r.jsxs)("div", {
                                                        className: M.contentFooterAdInfo,
                                                        children: [
                                                            H ? null : (0, r.jsx)(D.Z, { tooltipPosition: "top" }),
                                                            (0, r.jsx)(P.Z, {}),
                                                        ],
                                                    })
                                                  : (0, r.jsx)(d.Button, {
                                                        variant: "secondary",
                                                        text: k.intl.string(k.t.cpT0Cq),
                                                        onClick: a,
                                                    }),
                                              (0, r.jsxs)("div", {
                                                  className: i()(M.contentFooterButtonCont, {
                                                      [M.contentFooterButtonContV2]: $,
                                                  }),
                                                  children: [
                                                      !eo && (0, r.jsx)(T.Z, {}),
                                                      (0, r.jsx)(j.Z, {}),
                                                      $ ? (0, r.jsx)(x.Z, { handlePrimaryCtaClick: el }) : null,
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
function q(e) {
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
    let s = (0, u.e7)([g.Z], () => g.Z.getQuest(t)),
        c = (0, u.e7)([g.Z], () => g.Z.getQuestConfig(t)),
        d = null != n ? n : s,
        m = null != n ? n.config : c,
        f = o.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != f
        ? (0, r.jsx)(B.Provider, {
              value: f,
              children: (0, r.jsx)(y.A, {
                  questOrQuests: d,
                  questContent: O.jn.VIDEO_MODAL,
                  minViewTimeSeconds: N.zw,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: a.sourceQuestContent,
                  children: (e) =>
                      (0, r.jsx)(
                          U,
                          Z(V({}, a), {
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
