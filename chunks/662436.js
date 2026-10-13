(s.r(t), s.d(t, { default: () => eu }));
var n = s(477900),
    a = s(582128),
    i = s(284009),
    l = s.n(i),
    r = s(412703),
    o = s(17928),
    u = s(613373),
    c = s(859703),
    d = s(738822),
    m = s(192444),
    x = s(77870),
    h = s(792620),
    p = s(753386);
let f = a.createContext({ isPortrait: !1, portraitFooterRef: void 0 });
var C = s(268593);
function v(e) {
    let { prefix: t, advertiserDetails: s, secondaryAction: i, primaryAction: l } = e,
        { isPortrait: r, portraitFooterRef: o } = a.useContext(f);
    return r && null != i
        ? (0, n.jsxs)("div", {
              ref: o,
              className: C.bx,
              children: [
                  (0, n.jsxs)("div", { className: C.O_, children: [t, s] }),
                  (0, n.jsxs)("div", {
                      className: C.pq,
                      children: [
                          (0, n.jsx)("div", {
                              className: C.ad,
                              children: (0, n.jsx)("div", { className: C.Ik, children: i }),
                          }),
                          l,
                      ],
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              ref: r ? o : void 0,
              className: C.qr,
              children: [
                  (0, n.jsxs)("div", { className: C.zH, children: [t, s] }),
                  (0, n.jsxs)("div", { className: C.o1, children: [i, l] }),
              ],
          });
}
var g = s(503698),
    j = s.n(g),
    A = s(935462),
    S = s(770178),
    N = s(765548),
    O = s(925192),
    M = s(862649);
function E(e) {
    let { transitionState: t, orientation: s, impressionRef: i, video: l, footer: r } = e,
        o = "portrait" === s,
        [u, c] = a.useState(142),
        d = (0, N.A)((e) => {
            c(e.target.offsetHeight);
        }),
        m = (0, S.w)(d),
        x = a.useMemo(() => ({ isPortrait: o, portraitFooterRef: m }), [o, m]);
    return (0, n.jsx)(f.Provider, {
        value: x,
        children: (0, n.jsx)("div", {
            style: o ? { "--custom-portrait-footer-height": `${u}px` } : void 0,
            children: (0, n.jsx)(A.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: A.rI.DYNAMIC,
                className: j()(M.CR, { [M.VX]: "landscape" === s, [M.Zy]: o }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: (0, n.jsx)("div", {
                    ref: i,
                    className: M.NE,
                    children: (0, n.jsx)("div", {
                        className: j()(M.S3, O.S),
                        children: (0, n.jsxs)("div", { className: M.jE, children: [l, r] }),
                    }),
                }),
            }),
        }),
    });
}
var D = s(657792),
    b = s(441512),
    T = s(55759),
    _ = s(795068),
    y = s(781121),
    P = s(821609),
    I = s(590202),
    k = s(651892);
function q(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = a.useContext(_.a);
    return (0, n.jsx)(P.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(d.uF.VIDEO_MODAL_PRIMARY_CTA, I.Cy.OPEN_GAME_LINK),
        text: (0, k.wr)(s),
    });
}
var F = s(262254);
function R() {
    let { quest: e, sourceQuestContent: t, onClose: s } = a.useContext(_.a);
    return (0, n.jsx)(F.A, { quest: e, questContent: d.uF.QUEST_HOME_DESKTOP, sourceQuestContent: t, onClose: s });
}
var V = s(628284),
    H = s(866665),
    Q = s(939249),
    G = s(297264),
    L = s(661531),
    w = s(713517),
    z = s(240248),
    U = s(660183),
    W = s(228433);
function K(e) {
    let { title: t, subtitle: s, subtitleCta: i, subtitlePrefixIcon: l, isFlush: r = !1, onClick: o } = e,
        { isPortrait: u } = a.useContext(f),
        c = a.useRef(null),
        { isHoveringOrFocusing: d } = (0, w.A)(c);
    return (0, n.jsx)(H.m, {
        text: U.intl.string(U.t.EuHF34),
        children: (0, n.jsx)(Q.D, {
            onClick: o,
            className: W.vk,
            children: (0, n.jsxs)("div", {
                className: j()(M.hA, W.zH, { [W.zT]: r }),
                ref: c,
                children: [
                    (0, n.jsx)("div", {
                        className: W.nM,
                        children: (0, n.jsx)(G.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: j()(W.Fv, { [W.am]: u }),
                            lineClamp: u ? void 0 : 1,
                            children: t,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: j()(W.nM, { [W.wT]: u }),
                        children: [
                            null != l
                                ? (0, n.jsx)("div", {
                                      className: j()(W.CF, { [W.BW]: u }),
                                      children: (0, n.jsx)(l, {
                                          size: "xs",
                                          color: d ? L.A.colors.ICON_STRONG.css : L.A.colors.ICON_MUTED.css,
                                      }),
                                  })
                                : null,
                            (0, n.jsx)(G.D, {
                                variant: "heading-sm/medium",
                                className: j()(W.CF, { [W.BW]: u }),
                                color: d ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: s,
                            }),
                            (0, z.uJ)(i)
                                ? null
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: j()(W.SC, { [W.b2]: u }),
                                          }),
                                          (0, n.jsx)(G.D, {
                                              className: j()(W.Fv, { [W.am]: u }),
                                              variant: "heading-sm/medium",
                                              lineClamp: u ? void 0 : 1,
                                              color: d ? "text-strong" : "text-subtle",
                                              children: i,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function Y() {
    let { quest: e, sourceQuestContent: t, onClose: s } = a.useContext(_.a),
        i = (0, x.LS)(e),
        l = (0, y.H)({ quest: e, onClose: s, sourceQuestContent: t });
    return (0, n.jsx)(K, {
        title: U.intl.format(U.t.EQa7os, { questName: e.config.messages.questName }),
        subtitle: e.config.messages.gamePublisher,
        subtitleCta: e.config.ctaConfig.subtitle,
        subtitlePrefixIcon: V.y,
        isFlush: i,
        onClick: () => l(d.uF.VIDEO_MODAL, I.Cy.OPEN_GAME_LINK),
    });
}
var B = s(118751),
    $ = s(604121),
    J = s(775602),
    X = s(773669),
    Z = s(287809),
    ee = s(801365),
    et = s(453384),
    es = s(62405),
    en = s(630037),
    ea = s(190107),
    ei = s(150387);
async function el() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function er() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: i, targetSec: l } = a.useContext(_.a),
        [r, u] = a.useState(!1),
        c = (0, o.bG)([J.Ay], () => J.Ay.useReducedMotion),
        m = (0, o.bG)([X.default], () => X.default.locale),
        x = (0, o.bG)([Z.default], () => Z.default.getCurrentUser()),
        h = a.useRef(e.userStatus?.completedAt),
        [p, f] = a.useState(!1),
        C = (0, ee.mq)(e.config, x),
        v = e.userStatus?.completedAt != null,
        g = l > 0 ? Math.min(i / l, 0.99) : 0,
        j = v ? 1 : g,
        A = (0, B.l9)(m, j, { roundingMode: "floor" }),
        S = e.userStatus?.claimedAt != null,
        N = U.intl.formatToPlainString(v && !S ? U.t.NRp4K4 : U.t["12IWP2"], { rewardName: C });
    a.useEffect(() => {
        (null == h.current && e.userStatus?.completedAt != null && f(!0), (h.current = e.userStatus?.completedAt));
    }, [e.userStatus?.completedAt]);
    let O = (0, en.D)({
        quest: e,
        questContent: d.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: s,
    });
    return (0, n.jsxs)("div", {
        className: ei.Tr,
        children: [
            v && (0, n.jsx)($.a, { importData: el, className: ei.t_, loop: !1, autoplay: !1, shouldAnimate: p && !c }),
            (0, n.jsx)(H.m, {
                position: "top",
                text: N,
                onTooltipShow: function () {
                    u(!0);
                },
                onTooltipHide: function () {
                    u(!1);
                },
                children: (0, n.jsx)(Q.D, {
                    className: ei.md,
                    style: v ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        v && O();
                    },
                    children: (0, n.jsx)(et.A, {
                        size: 48,
                        percentComplete: j,
                        overlayText: r ? A : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(es.A, {
                            fullWidth: !0,
                            quest: e,
                            location: ea.rE.VIDEO_MODAL,
                            questContent: d.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: t,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function eo(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: u,
            impressionRef: c,
            parentModalOpenStartClockTime: d,
            sourceQuestContent: f,
        } = e,
        C = (0, h.Yh)(i),
        g = (0, x.LS)(i),
        { maxProgressSec: j, trackProgress: A } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [i, l] = (0, a.useState)(t);
            return {
                maxProgressSec: null != n ? s : i,
                trackProgress: (0, a.useCallback)((e) => {
                    l((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: C.progressSeconds,
            targetSec: C.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [S, N] = a.useState(!1),
        O = i.config.taskConfigV2?.tasks?.[r.n.WATCH_VIDEO];
    l()(null != O, "VideoQuestModal: videoTask must not be null");
    let M = (0, p.eG)(O),
        { enabled: D } = m.n6.useConfig({ location: ea.rE.VIDEO_MODAL }),
        P = (0, y.H)({ quest: i, onClose: s, sourceQuestContent: f }),
        I = a.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: f,
                videoSessionId: u,
                onClose: s,
                isFullscreenEnabled: S,
                setIsFullscreenEnabled: N,
                maxProgressSec: j,
                targetSec: C.targetSeconds,
            }),
            [i, f, u, s, S, N, j, C.targetSeconds],
        );
    return (0, n.jsx)(_.a.Provider, {
        value: I,
        children: (0, n.jsx)(E, {
            transitionState: t,
            orientation: M,
            impressionRef: (e) => {
                c.current = e;
            },
            video: D
                ? (0, n.jsx)(b.A, {
                      targetTimeSec: O.target,
                      parentTransitionState: t,
                      onOptimisticProgressUpdate: A,
                      autoplay: o,
                      openedAtMs: d,
                      orientation: M,
                  })
                : (0, n.jsx)(T.A, {
                      targetTimeSec: O.target,
                      parentTransitionState: t,
                      onOptimisticProgressUpdate: A,
                      autoplay: o,
                      openedAtMs: d,
                      orientation: M,
                  }),
            footer: (0, n.jsx)(v, {
                prefix: g ? null : (0, n.jsx)(er, {}),
                advertiserDetails: (0, n.jsx)(Y, {}),
                secondaryAction: (0, n.jsx)(R, {}),
                primaryAction: (0, n.jsx)(q, { handlePrimaryCtaClick: P }),
            }),
        }),
    });
}
function eu(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: l, ...r } = e,
        m = (0, o.bG)([c.A], () => c.A.getQuest(t)),
        x = (0, o.bG)([c.A], () => c.A.getQuestConfig(t)),
        h = s ?? m,
        p = null != s ? s.config : x,
        f = a.useMemo(() => (null != p ? { questConfig: p } : null), [p]);
    return null != h && null != p && null != f
        ? (0, n.jsx)(_.l.Provider, {
              value: f,
              children: (0, n.jsx)(D.R, {
                  questOrQuests: h,
                  questContent: d.uF.VIDEO_MODAL,
                  minViewTimeSeconds: u.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: r.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(eo, {
                          ...r,
                          parentModalOpenStartClockTime: l,
                          impressionRef: e,
                          quest: h,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
