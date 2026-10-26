a.d(t, { default: () => et });
var n = a(477900),
    i = a(582128),
    r = a(984827),
    s = a(821609),
    l = a(284009),
    o = a.n(l);
(r.x.PORTRAIT, r.x.PORTRAIT);
let c = { preferred: r.x.LANDSCAPE, supported: [r.x.LANDSCAPE, r.x.PORTRAIT] },
    u = { [r.x.PORTRAIT]: 9 / 16, [r.x.LANDSCAPE]: 16 / 9 };
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
    g = a(858899),
    C = a(43990),
    T = a(613373),
    v = a(845890),
    S = a(265704),
    N = a(105292);
let P = new Set([260021]);
var j = a(491812),
    k = a(755372),
    I = a(759182),
    M = a(236850),
    O = a(661531),
    y = a(820081),
    L = a(834730),
    w = a(250328);
let D = 2 * Math.PI * 14.4,
    E = (180 / Math.PI) * 0.11111111111111112,
    _ = `rotate(${-90 + E} 16 16)`;
function F(e) {
    let { animateIn: t } = e;
    return (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: A()(w.z6, { [w.HY]: t }),
        children: [
            (0, n.jsx)("div", { className: w.AW }),
            (0, n.jsx)(y.B, {
                size: "custom",
                width: 20,
                height: 20,
                color: O.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: w.kQ,
            }),
        ],
    });
}
function B(e) {
    var t;
    let { totalSeconds: a, remainingSeconds: r } = e,
        s = r <= 0,
        [l] = i.useState(s),
        o = Math.max(1, Math.ceil(r)),
        c = 0;
    return (
        s ? (c = 1) : a > 0 && (c = 1 - r / a),
        (0, n.jsxs)("div", {
            role: "timer",
            "aria-label": s ? N.intl.string(N.t["0F4Peo"]) : N.intl.formatToPlainString(N.t["45cddS"], { seconds: o }),
            className: w.O1,
            children: [
                (0, n.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: w.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, n.jsx)("circle", { className: w.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, n.jsx)("circle", {
                            className: A()(w.qB, { [w.LQ]: c <= 0 }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${D} ${D}`,
                            strokeDashoffset: D - ((t = c) >= 1 ? D : Math.max(0.01, t * D - 3.2)),
                            transform: _,
                        }),
                    ],
                }),
                s
                    ? (0, n.jsx)(F, { animateIn: !l })
                    : (0, n.jsx)(L.E, {
                          "aria-hidden": !0,
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: w.YA,
                          children: o,
                      }),
            ],
        })
    );
}
function U(e, t) {
    return null != t ? Math.min(e, t) : e;
}
var V = a(190107);
a(500522);
var Y = a(652215),
    H = a(879371),
    Q = a(815714);
function $() {
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
    return (0, n.jsx)("img", { src: e, alt: "", className: Q.RN });
}
async function K(e, t) {
    try {
        await (0, v.Hq)(e.id, t);
    } catch (e) {
        (0, g.P0)({
            text: e?.code != null && P.has(e.code) && e?.message != null ? e.message : N.intl.string(N.t.uLjCfn),
            variant: "critical",
        });
    }
}
function q(e) {
    let { bounty: t, sourceQuestContent: a, src: r, orientation: s, parentTransitionState: l, onClose: o } = e,
        c = i.useRef(null),
        u = (0, R.bG)([S.A], () => S.A.isBountyCompleted(t.id)),
        d = i.useCallback(() => {
            K(t, a);
        }, [t, a]),
        {
            rewardTargetSeconds: m,
            isRewardEarned: h,
            rewardRemainingSeconds: x,
            maxSeekableTimeSeconds: b,
            handleProgressUpdate: p,
            handleSeek: f,
            handleEnded: g,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: a,
                    videoRef: n,
                    isCompleted: r,
                    onRewardEarned: s,
                } = e,
                [l, o] = i.useState(0),
                [c, u] = i.useState(a),
                d = i.useRef(0),
                m = i.useRef(a),
                h = i.useRef(r),
                x = U(t, c),
                b = r || l >= x,
                p = i.useCallback((e) => {
                    ((m.current = e), u(e));
                }, []),
                f = i.useCallback(
                    (e) => {
                        let a = Math.max(d.current, e);
                        ((d.current = a), o(a), !h.current && a >= U(t, m.current) && ((h.current = !0), s()));
                    },
                    [t, s],
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
        { volume: v, muted: P, setVolume: O, setMuted: y } = (0, M.A)(),
        L = i.useMemo(() => (0, n.jsx)($, {}), []),
        w = i.useMemo(() => N.intl.formatToPlainString(N.t["nLXlh+"], { orbAmount: V.FA }), []),
        D = (0, I.A)({ targetSec: m, label: w, isCompleted: h, icon: L, clickable: b >= m }),
        E = i.useCallback(
            () =>
                (0, n.jsx)(C.N, {
                    theme: Y.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, n.jsxs)("div", {
                            className: A()(e, Q.gP),
                            children: [
                                (0, n.jsx)(B, { totalSeconds: m, remainingSeconds: x }),
                                (0, n.jsx)("div", { className: Q.ne, children: (0, n.jsx)(j.A, { onClose: o }) }),
                            ],
                        }),
                }),
            [o, x, m],
        );
    return (0, n.jsx)(T.Ft, {
        ref: c,
        parentTransitionState: l,
        autoplay: !0,
        autoFocus: !0,
        orientation: s,
        src: r,
        progressClassName: h ? H.s : H.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !h,
        getPlaybackBlockedMessage: k.b,
        maxSeekableTimeSec: b,
        initialVolume: v,
        initialMuted: P,
        onVolumeChange: O,
        onMutedChange: y,
        onProgressUpdate: p,
        onSeek: f,
        onEnded: g,
        renderPersistentOverlay: E,
        timelineIndicatorConfig: D,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
var z = a(323889),
    G = a(192308),
    W = a(590202),
    X = a(971649),
    Z = a(620954),
    J = a(617986);
function ee(e) {
    let { iconImageUri: t } = e;
    return null == t
        ? (0, n.jsx)("div", { "aria-hidden": !0, className: Q.Z2 })
        : (0, n.jsx)("img", {
              src: (0, h.lR)({ assetUrl: t, width: 48, height: 48 }),
              alt: "",
              width: 48,
              height: 48,
              className: Q.Z2,
          });
}
function et(e) {
    let { transitionState: t, onClose: a, bounty: l, sourceQuestContent: h } = e,
        { url: f, orientation: A } = i.useMemo(() => {
            var e, t;
            let a =
                ((e = l),
                (t = c),
                null == e.videoRenditions
                    ? t.supported.includes(r.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: r.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: a, supported: n } = t;
                          o()(n.includes(a), "Preferred aspect ratio must be in supported renditions list");
                          let i = d(e, a);
                          if (null != i) return i;
                          let r = u[a],
                              s = null,
                              l = 1 / 0;
                          for (let t of n) {
                              if (t === a) continue;
                              let n = d(e, t);
                              if (null == n) continue;
                              let i = Math.abs(u[t] - r);
                              i < l && ((l = i), (s = n));
                          }
                          return s;
                      })(e.videoRenditions, t));
            return null == a
                ? { url: l.videoHls, orientation: "portrait" }
                : { url: a.url, orientation: a.aspectRatio === r.x.PORTRAIT ? "portrait" : "landscape" };
        }, [l]),
        R = { label: l.productName, buttonLabel: l.cta.buttonLabel, iconImageUri: l.productIcon },
        g = R.label ?? l.advertiserName,
        C = (function (e) {
            let { bounty: t, onClose: a, sourceQuestContent: n } = e,
                r = (0, X.QK)();
            return i.useCallback(
                async (e) => {
                    ((await (0, J.f7)(t.cta.url)) && (a(), (0, G.closeAllModals)()),
                        (0, Z._Q)(
                            { adContentId: t.id, adCreativeType: z.p.BOUNTY, cta: t.cta },
                            { content: e, ctaContent: W.Cy.OPEN_GAME_LINK, impressionId: r(), sourceQuestContent: n },
                        ));
                },
                [t.id, t.cta, a, n, r],
            );
        })({ bounty: l, onClose: a, sourceQuestContent: h });
    return (0, n.jsx)(p.A, {
        transitionState: t,
        orientation: A,
        ariaLabel: g,
        video: (0, n.jsx)(q, {
            bounty: l,
            sourceQuestContent: h,
            src: f,
            orientation: A,
            parentTransitionState: t,
            onClose: a,
        }),
        footer: (0, n.jsx)(b.A, {
            prefix: (0, n.jsx)(ee, { iconImageUri: R.iconImageUri }),
            advertiserDetails: (0, n.jsx)(x.A, {
                title: g,
                subtitle: N.intl.string(N.t.o6FLcF),
                onClick: () => C(m.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, n.jsx)(s.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => C(m.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
