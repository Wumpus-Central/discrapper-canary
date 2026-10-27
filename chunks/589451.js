a.d(t, { default: () => ed });
var n = a(477900),
    i = a(582128),
    s = a(984827),
    r = a(821609),
    l = a(284009),
    o = a.n(l);
(s.x.PORTRAIT, s.x.PORTRAIT);
let c = { preferred: s.x.LANDSCAPE, supported: [s.x.LANDSCAPE, s.x.PORTRAIT] },
    d = { [s.x.PORTRAIT]: 9 / 16, [s.x.LANDSCAPE]: 16 / 9 };
function u(e, t) {
    let a = e[t];
    return null == a || "" === a ? null : { url: a, aspectRatio: t };
}
var m = a(738822);
function h(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var x = a(637691),
    b = a(738883),
    p = a(669912),
    f = a(503698),
    v = a.n(f),
    A = a(291749),
    g = a(815714);
let C = { sm: 48, lg: 92 };
function N(e) {
    let { iconImageUri: t, size: a } = e,
        i = C[a],
        s = v()(g.Z2, { [g.Ke]: "sm" === a, [g.EX]: "lg" === a }),
        r = { "--custom-product-icon-size": `${i}px` };
    return null == t
        ? (0, n.jsx)("div", { "aria-hidden": !0, className: s, style: r })
        : (0, n.jsx)("img", {
              src: (0, A.lR)({ assetUrl: t, width: i, height: i }),
              alt: "",
              width: i,
              height: i,
              className: s,
              style: r,
          });
}
var R = a(17928),
    j = a(858899),
    T = a(43990),
    S = a(613373),
    k = a(478996),
    P = a(37402),
    I = a(845890),
    y = a(265704),
    M = a(105292);
let O = new Set([260021]);
var D = a(491812),
    E = a(755372),
    L = a(759182),
    _ = a(236850),
    w = a(939249),
    F = a(834730),
    U = a(475815),
    V = a(323889),
    B = a(192308),
    z = a(590202),
    Q = a(971649),
    Y = a(620954),
    H = a(617986);
function K(e) {
    let { bounty: t, onClose: a, sourceQuestContent: n } = e,
        s = (0, Q.QK)();
    return i.useCallback(
        async (e) => {
            ((await (0, H.f7)(t.cta.url)) && (a(), (0, B.closeAllModals)()),
                (0, Y._Q)(
                    { adContentId: t.id, adCreativeType: V.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: z.Cy.OPEN_GAME_LINK, impressionId: s(), sourceQuestContent: n },
                ));
        },
        [t.id, t.cta, a, n, s],
    );
}
var $ = a(652215);
let q = { offset: 4 };
function W(e) {
    let { bounty: t, sourceQuestContent: a, videoRef: s, onClose: r } = e,
        l = h(t),
        o = K({ bounty: t, onClose: r, sourceQuestContent: a }),
        c = i.useCallback(() => {
            let e = (0, U.qf)(s.current?.parentNode, s.current);
            (null != e && (0, U.sP)(e), o(m.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [s, o]);
    return (0, n.jsx)(T.N, {
        theme: $.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)(w.D, {
                className: v()(e, g.hn),
                focusProps: q,
                onClick: c,
                children: (0, n.jsxs)("div", {
                    className: g.jT,
                    children: [
                        (0, n.jsx)(N, { iconImageUri: l.iconImageUri, size: "lg" }),
                        (0, n.jsxs)("div", {
                            className: g.z9,
                            children: [
                                (0, n.jsx)(F.E, {
                                    tag: "div",
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: l.label ?? t.advertiserName,
                                }),
                                (0, n.jsx)(F.E, {
                                    tag: "div",
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    lineClamp: 1,
                                    children: l.buttonLabel,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
var X = a(661531),
    G = a(820081),
    J = a(250328);
let Z = 2 * Math.PI * 14.4,
    ee = (180 / Math.PI) * 0.11111111111111112,
    et = `rotate(${-90 + ee} 16 16)`;
function ea(e) {
    let { animateIn: t } = e;
    return (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: v()(J.z6, { [J.HY]: t }),
        children: [
            (0, n.jsx)("div", { className: J.AW }),
            (0, n.jsx)(G.B, {
                size: "custom",
                width: 20,
                height: 20,
                color: X.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: J.kQ,
            }),
        ],
    });
}
function en(e) {
    var t;
    let { totalSeconds: a, remainingSeconds: s } = e,
        r = s <= 0,
        [l] = i.useState(r),
        o = Math.max(1, Math.ceil(s)),
        c = 0;
    return (
        r ? (c = 1) : a > 0 && (c = 1 - s / a),
        (0, n.jsxs)("div", {
            role: "timer",
            "aria-label": r ? M.intl.string(M.t["0F4Peo"]) : M.intl.formatToPlainString(M.t["45cddS"], { seconds: o }),
            className: J.O1,
            children: [
                (0, n.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: J.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, n.jsx)("circle", { className: J.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, n.jsx)("circle", {
                            className: v()(J.qB, { [J.LQ]: c <= 0 }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${Z} ${Z}`,
                            strokeDashoffset: Z - ((t = c) >= 1 ? Z : Math.max(0.01, t * Z - 3.2)),
                            transform: et,
                        }),
                    ],
                }),
                r
                    ? (0, n.jsx)(ea, { animateIn: !l })
                    : (0, n.jsx)(F.E, {
                          "aria-hidden": !0,
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: J.YA,
                          children: o,
                      }),
            ],
        })
    );
}
function ei(e, t) {
    return null != t ? Math.min(e, t) : e;
}
var es = a(190107);
a(500522);
var er = a(879371);
function el() {
    let e = i.useMemo(
        () =>
            (0, A.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/8db8015bf879338028eb3094d2ca5567c70f6ea9a6bb60068b0f00ca712e5bf6.webp",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, n.jsx)("img", { src: e, alt: "", className: g.RN });
}
async function eo(e, t) {
    try {
        await (0, I.Hq)(e.id, t);
    } catch (e) {
        (0, j.P0)({
            text: e?.code != null && O.has(e.code) && e?.message != null ? e.message : M.intl.string(M.t.uLjCfn),
            variant: "critical",
        });
    }
}
function ec(e) {
    let { bounty: t, sourceQuestContent: a, src: s, orientation: r, parentTransitionState: l, onClose: o } = e,
        c = i.useRef(null),
        d = (0, R.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        u = i.useCallback(() => {
            eo(t, a);
        }, [t, a]),
        {
            rewardTargetSeconds: m,
            isRewardEarned: h,
            rewardRemainingSeconds: x,
            maxSeekableTimeSeconds: b,
            handleProgressUpdate: p,
            handleSeek: f,
            handleEnded: A,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: a,
                    videoRef: n,
                    isCompleted: s,
                    onRewardEarned: r,
                } = e,
                [l, o] = i.useState(0),
                [c, d] = i.useState(a),
                u = i.useRef(0),
                m = i.useRef(a),
                h = i.useRef(s),
                x = ei(t, c),
                b = s || l >= x,
                p = i.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []),
                f = i.useCallback(
                    (e) => {
                        let a = Math.max(u.current, e);
                        ((u.current = a), o(a), !h.current && a >= ei(t, m.current) && ((h.current = !0), r()));
                    },
                    [t, r],
                ),
                v = i.useCallback(
                    (e, t) => {
                        (Number.isFinite(t) && t > 0 && p(t), f(e));
                    },
                    [p, f],
                );
            return {
                rewardTargetSeconds: x,
                isRewardEarned: b,
                rewardRemainingSeconds: b ? 0 : x - l,
                maxSeekableTimeSeconds: l,
                handleProgressUpdate: v,
                handleSeek: i.useCallback(
                    (e) => {
                        f(e);
                    },
                    [f],
                ),
                handleEnded: i.useCallback(() => {
                    let e = n.current?.duration;
                    null != e && Number.isFinite(e) && e > 0 && (p(e), f(e));
                }, [n, p, f]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: d,
            onRewardEarned: u,
        }),
        { volume: C, muted: N, setVolume: j, setMuted: I } = (0, _.A)(),
        { balance: O } = (0, k.W0)(),
        w = i.useMemo(() => (0, n.jsx)(el, {}), []),
        F = i.useMemo(() => M.intl.formatToPlainString(M.t["nLXlh+"], { orbAmount: es.FA }), []),
        U = (0, L.A)({ targetSec: m, label: F, isCompleted: h, icon: w, clickable: b >= m }),
        V = i.useCallback(
            () =>
                (0, n.jsx)(T.N, {
                    theme: $.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, n.jsxs)("div", {
                            className: v()(e, g.gP),
                            children: [
                                (0, n.jsxs)("div", {
                                    className: g.Cq,
                                    children: [
                                        (0, n.jsx)(en, { totalSeconds: m, remainingSeconds: x }),
                                        (0, n.jsx)(P.Ay, { variant: "overlay-secondary", balance: O }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: g.ne, children: (0, n.jsx)(D.A, { onClose: o }) }),
                            ],
                        }),
                }),
            [o, O, x, m],
        ),
        B = i.useCallback(
            () => (0, n.jsx)(W, { bounty: t, sourceQuestContent: a, videoRef: c, onClose: o }),
            [t, a, o],
        );
    return (0, n.jsx)(S.Ft, {
        ref: c,
        parentTransitionState: l,
        autoplay: !0,
        autoFocus: !0,
        orientation: r,
        src: s,
        progressClassName: h ? er.s : er.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !h,
        getPlaybackBlockedMessage: E.b,
        maxSeekableTimeSec: b,
        initialVolume: C,
        initialMuted: N,
        onVolumeChange: j,
        onMutedChange: I,
        onProgressUpdate: p,
        onSeek: f,
        onEnded: A,
        renderPersistentOverlay: V,
        renderEndScreen: B,
        timelineIndicatorConfig: U,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function ed(e) {
    let { transitionState: t, onClose: a, bounty: l, sourceQuestContent: f } = e,
        { url: v, orientation: A } = i.useMemo(() => {
            var e, t;
            let a =
                ((e = l),
                (t = c),
                null == e.videoRenditions
                    ? t.supported.includes(s.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: s.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: a, supported: n } = t;
                          o()(n.includes(a), "Preferred aspect ratio must be in supported renditions list");
                          let i = u(e, a);
                          if (null != i) return i;
                          let s = d[a],
                              r = null,
                              l = 1 / 0;
                          for (let t of n) {
                              if (t === a) continue;
                              let n = u(e, t);
                              if (null == n) continue;
                              let i = Math.abs(d[t] - s);
                              i < l && ((l = i), (r = n));
                          }
                          return r;
                      })(e.videoRenditions, t));
            return null == a
                ? { url: l.videoHls, orientation: "portrait" }
                : { url: a.url, orientation: a.aspectRatio === s.x.PORTRAIT ? "portrait" : "landscape" };
        }, [l]),
        g = h(l),
        C = g.label ?? l.advertiserName,
        R = K({ bounty: l, onClose: a, sourceQuestContent: f });
    return (0, n.jsx)(p.A, {
        transitionState: t,
        orientation: A,
        ariaLabel: C,
        video: (0, n.jsx)(ec, {
            bounty: l,
            sourceQuestContent: f,
            src: v,
            orientation: A,
            parentTransitionState: t,
            onClose: a,
        }),
        footer: (0, n.jsx)(b.A, {
            prefix: (0, n.jsx)(N, { iconImageUri: g.iconImageUri, size: "sm" }),
            advertiserDetails: (0, n.jsx)(x.A, {
                title: C,
                subtitle: M.intl.string(M.t.o6FLcF),
                onClick: () => R(m.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, n.jsx)(r.$, {
                variant: "primary",
                text: g.buttonLabel,
                onClick: () => R(m.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
