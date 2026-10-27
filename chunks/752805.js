a.d(t, { default: () => en });
var n = a(477900),
    i = a(582128),
    s = a(984827),
    r = a(821609),
    l = a(284009),
    o = a.n(l);
(s.x.PORTRAIT, s.x.PORTRAIT);
let c = { preferred: s.x.LANDSCAPE, supported: [s.x.LANDSCAPE, s.x.PORTRAIT] },
    u = { [s.x.PORTRAIT]: 9 / 16, [s.x.LANDSCAPE]: 16 / 9 };
function d(e, t) {
    let a = e[t];
    return null == a || "" === a ? null : { url: a, aspectRatio: t };
}
var m = a(738822),
    h = a(291749),
    x = a(637691),
    b = a(738883),
    p = a(669912),
    f = a(503698),
    A = a.n(f),
    R = a(17928),
    v = a(858899),
    C = a(43990),
    g = a(613373),
    T = a(478996),
    N = a(37402),
    S = a(845890),
    j = a(265704),
    P = a(105292);
let k = new Set([260021]);
var I = a(491812),
    y = a(755372),
    M = a(759182),
    O = a(236850),
    L = a(661531),
    w = a(820081),
    D = a(834730),
    E = a(250328);
let _ = 2 * Math.PI * 14.4,
    F = (180 / Math.PI) * 0.11111111111111112,
    B = `rotate(${-90 + F} 16 16)`;
function U(e) {
    let { animateIn: t } = e;
    return (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: A()(E.z6, { [E.HY]: t }),
        children: [
            (0, n.jsx)("div", { className: E.AW }),
            (0, n.jsx)(w.B, {
                size: "custom",
                width: 20,
                height: 20,
                color: L.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: E.kQ,
            }),
        ],
    });
}
function V(e) {
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
            "aria-label": r ? P.intl.string(P.t["0F4Peo"]) : P.intl.formatToPlainString(P.t["45cddS"], { seconds: o }),
            className: E.O1,
            children: [
                (0, n.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: E.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, n.jsx)("circle", { className: E.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, n.jsx)("circle", {
                            className: A()(E.qB, { [E.LQ]: c <= 0 }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${_} ${_}`,
                            strokeDashoffset: _ - ((t = c) >= 1 ? _ : Math.max(0.01, t * _ - 3.2)),
                            transform: B,
                        }),
                    ],
                }),
                r
                    ? (0, n.jsx)(U, { animateIn: !l })
                    : (0, n.jsx)(D.E, {
                          "aria-hidden": !0,
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: E.YA,
                          children: o,
                      }),
            ],
        })
    );
}
function Y(e, t) {
    return null != t ? Math.min(e, t) : e;
}
var H = a(190107);
a(500522);
var Q = a(652215),
    $ = a(879371),
    q = a(815714);
function K() {
    let e = i.useMemo(
        () =>
            (0, h.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/8db8015bf879338028eb3094d2ca5567c70f6ea9a6bb60068b0f00ca712e5bf6.webp",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, n.jsx)("img", { src: e, alt: "", className: q.RN });
}
async function W(e, t) {
    try {
        await (0, S.Hq)(e.id, t);
    } catch (e) {
        (0, v.P0)({
            text: e?.code != null && k.has(e.code) && e?.message != null ? e.message : P.intl.string(P.t.uLjCfn),
            variant: "critical",
        });
    }
}
function z(e) {
    let { bounty: t, sourceQuestContent: a, src: s, orientation: r, parentTransitionState: l, onClose: o } = e,
        c = i.useRef(null),
        u = (0, R.bG)([j.A], () => j.A.isBountyCompleted(t.id)),
        d = i.useCallback(() => {
            W(t, a);
        }, [t, a]),
        {
            rewardTargetSeconds: m,
            isRewardEarned: h,
            rewardRemainingSeconds: x,
            maxSeekableTimeSeconds: b,
            handleProgressUpdate: p,
            handleSeek: f,
            handleEnded: v,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: a,
                    videoRef: n,
                    isCompleted: s,
                    onRewardEarned: r,
                } = e,
                [l, o] = i.useState(0),
                [c, u] = i.useState(a),
                d = i.useRef(0),
                m = i.useRef(a),
                h = i.useRef(s),
                x = Y(t, c),
                b = s || l >= x,
                p = i.useCallback((e) => {
                    ((m.current = e), u(e));
                }, []),
                f = i.useCallback(
                    (e) => {
                        let a = Math.max(d.current, e);
                        ((d.current = a), o(a), !h.current && a >= Y(t, m.current) && ((h.current = !0), r()));
                    },
                    [t, r],
                ),
                A = i.useCallback(
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
                handleProgressUpdate: A,
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
            isCompleted: u,
            onRewardEarned: d,
        }),
        { volume: S, muted: k, setVolume: L, setMuted: w } = (0, O.A)(),
        { balance: D } = (0, T.W0)(),
        E = i.useMemo(() => (0, n.jsx)(K, {}), []),
        _ = i.useMemo(() => P.intl.formatToPlainString(P.t["nLXlh+"], { orbAmount: H.FA }), []),
        F = (0, M.A)({ targetSec: m, label: _, isCompleted: h, icon: E, clickable: b >= m }),
        B = i.useCallback(
            () =>
                (0, n.jsx)(C.N, {
                    theme: Q.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, n.jsxs)("div", {
                            className: A()(e, q.gP),
                            children: [
                                (0, n.jsxs)("div", {
                                    className: q.Cq,
                                    children: [
                                        (0, n.jsx)(V, { totalSeconds: m, remainingSeconds: x }),
                                        (0, n.jsx)(N.Ay, { variant: "overlay-secondary", balance: D }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: q.ne, children: (0, n.jsx)(I.A, { onClose: o }) }),
                            ],
                        }),
                }),
            [o, D, x, m],
        );
    return (0, n.jsx)(g.Ft, {
        ref: c,
        parentTransitionState: l,
        autoplay: !0,
        autoFocus: !0,
        orientation: r,
        src: s,
        progressClassName: h ? $.s : $.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !h,
        getPlaybackBlockedMessage: y.b,
        maxSeekableTimeSec: b,
        initialVolume: S,
        initialMuted: k,
        onVolumeChange: L,
        onMutedChange: w,
        onProgressUpdate: p,
        onSeek: f,
        onEnded: v,
        renderPersistentOverlay: B,
        timelineIndicatorConfig: F,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
var G = a(323889),
    X = a(192308),
    Z = a(590202),
    J = a(971649),
    ee = a(620954),
    et = a(617986);
function ea(e) {
    let { iconImageUri: t } = e;
    return null == t
        ? (0, n.jsx)("div", { "aria-hidden": !0, className: q.Z2 })
        : (0, n.jsx)("img", {
              src: (0, h.lR)({ assetUrl: t, width: 48, height: 48 }),
              alt: "",
              width: 48,
              height: 48,
              className: q.Z2,
          });
}
function en(e) {
    let { transitionState: t, onClose: a, bounty: l, sourceQuestContent: h } = e,
        { url: f, orientation: A } = i.useMemo(() => {
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
                          let i = d(e, a);
                          if (null != i) return i;
                          let s = u[a],
                              r = null,
                              l = 1 / 0;
                          for (let t of n) {
                              if (t === a) continue;
                              let n = d(e, t);
                              if (null == n) continue;
                              let i = Math.abs(u[t] - s);
                              i < l && ((l = i), (r = n));
                          }
                          return r;
                      })(e.videoRenditions, t));
            return null == a
                ? { url: l.videoHls, orientation: "portrait" }
                : { url: a.url, orientation: a.aspectRatio === s.x.PORTRAIT ? "portrait" : "landscape" };
        }, [l]),
        R = { label: l.productName, buttonLabel: l.cta.buttonLabel, iconImageUri: l.productIcon },
        v = R.label ?? l.advertiserName,
        C = (function (e) {
            let { bounty: t, onClose: a, sourceQuestContent: n } = e,
                s = (0, J.QK)();
            return i.useCallback(
                async (e) => {
                    ((await (0, et.f7)(t.cta.url)) && (a(), (0, X.closeAllModals)()),
                        (0, ee._Q)(
                            { adContentId: t.id, adCreativeType: G.p.BOUNTY, cta: t.cta },
                            { content: e, ctaContent: Z.Cy.OPEN_GAME_LINK, impressionId: s(), sourceQuestContent: n },
                        ));
                },
                [t.id, t.cta, a, n, s],
            );
        })({ bounty: l, onClose: a, sourceQuestContent: h });
    return (0, n.jsx)(p.A, {
        transitionState: t,
        orientation: A,
        ariaLabel: v,
        video: (0, n.jsx)(z, {
            bounty: l,
            sourceQuestContent: h,
            src: f,
            orientation: A,
            parentTransitionState: t,
            onClose: a,
        }),
        footer: (0, n.jsx)(b.A, {
            prefix: (0, n.jsx)(ea, { iconImageUri: R.iconImageUri }),
            advertiserDetails: (0, n.jsx)(x.A, {
                title: v,
                subtitle: P.intl.string(P.t.o6FLcF),
                onClick: () => C(m.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, n.jsx)(r.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => C(m.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
