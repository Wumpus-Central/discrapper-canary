a.d(t, { default: () => W });
var i = a(477900),
    n = a(582128),
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
var m = a(738822),
    h = a(291749),
    x = a(637691),
    p = a(738883),
    b = a(669912),
    A = a(503698),
    f = a.n(A),
    R = a(43990),
    T = a(613373),
    N = a(491812),
    v = a(755372),
    S = a(759182),
    g = a(236850),
    C = a(661531),
    P = a(820081),
    j = a(834730),
    k = a(105292),
    I = a(250328);
let M = 2 * Math.PI * 14.4,
    O = (180 / Math.PI) * 0.11111111111111112,
    L = `rotate(${-90 + O} 16 16)`;
function y(e) {
    let { animateIn: t } = e;
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: f()(I.z6, { [I.HY]: t }),
        children: [
            (0, i.jsx)("div", { className: I.AW }),
            (0, i.jsx)(P.B, {
                size: "custom",
                width: 20,
                height: 20,
                color: C.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: I.kQ,
            }),
        ],
    });
}
function D(e) {
    var t;
    let { totalSeconds: a, remainingSeconds: s } = e,
        r = s <= 0,
        [l] = n.useState(r),
        o = Math.max(1, Math.ceil(s)),
        c = 0;
    return (
        r ? (c = 1) : a > 0 && (c = 1 - s / a),
        (0, i.jsxs)("div", {
            role: "timer",
            "aria-label": r ? k.intl.string(k.t["0F4Peo"]) : k.intl.formatToPlainString(k.t["45cddS"], { seconds: o }),
            className: I.O1,
            children: [
                (0, i.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: I.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, i.jsx)("circle", { className: I.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, i.jsx)("circle", {
                            className: f()(I.qB, { [I.LQ]: c <= 0 }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${M} ${M}`,
                            strokeDashoffset: M - ((t = c) >= 1 ? M : Math.max(0.01, t * M - 3.2)),
                            transform: L,
                        }),
                    ],
                }),
                r
                    ? (0, i.jsx)(y, { animateIn: !l })
                    : (0, i.jsx)(j.E, {
                          "aria-hidden": !0,
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: I.YA,
                          children: o,
                      }),
            ],
        })
    );
}
var E = a(190107);
a(500522);
var w = a(652215),
    _ = a(879371),
    F = a(815714);
function U() {
    let e = n.useMemo(
        () =>
            (0, h.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/8db8015bf879338028eb3094d2ca5567c70f6ea9a6bb60068b0f00ca712e5bf6.webp",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, i.jsx)("img", { src: e, alt: "", className: F.RN });
}
function V(e) {
    let { bounty: t, src: a, orientation: s, parentTransitionState: r, onClose: l } = e,
        o = n.useRef(null),
        {
            rewardTargetSeconds: c,
            isRewardEarned: d,
            rewardRemainingSeconds: u,
            maxSeekableTimeSeconds: m,
            handleProgressUpdate: h,
            handleSeek: x,
            handleEnded: p,
        } = (function (e) {
            let { rewardTimerSeconds: t, initialDurationSeconds: a, videoRef: i } = e,
                [s, r] = n.useState(0),
                [l, o] = n.useState(a),
                c = null != l ? Math.min(t, l) : t,
                d = Math.max(0, c - s),
                u = n.useCallback((e) => {
                    r((t) => Math.max(t, e));
                }, []),
                m = n.useCallback(
                    (e, t) => {
                        (u(e), Number.isFinite(t) && t > 0 && o(t));
                    },
                    [u],
                );
            return {
                rewardTargetSeconds: c,
                isRewardEarned: s >= c,
                rewardRemainingSeconds: d,
                maxSeekableTimeSeconds: s,
                handleProgressUpdate: m,
                handleSeek: n.useCallback(
                    (e) => {
                        u(e);
                    },
                    [u],
                ),
                handleEnded: n.useCallback(() => {
                    let e = i.current?.duration;
                    null != e && Number.isFinite(e) && u(e);
                }, [i, u]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: o,
        }),
        { volume: b, muted: A, setVolume: C, setMuted: P } = (0, g.A)(),
        j = n.useMemo(() => (0, i.jsx)(U, {}), []),
        I = n.useMemo(() => k.intl.formatToPlainString(k.t["nLXlh+"], { orbAmount: E.FA }), []),
        M = (0, S.A)({ targetSec: c, label: I, isCompleted: d, icon: j, clickable: d }),
        O = n.useCallback(
            () =>
                (0, i.jsx)(R.N, {
                    theme: w.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, i.jsxs)("div", {
                            className: f()(e, F.gP),
                            children: [
                                (0, i.jsx)(D, { totalSeconds: c, remainingSeconds: u }),
                                (0, i.jsx)("div", { className: F.ne, children: (0, i.jsx)(N.A, { onClose: l }) }),
                            ],
                        }),
                }),
            [l, u, c],
        );
    return (0, i.jsx)(T.Ft, {
        ref: o,
        parentTransitionState: r,
        autoplay: !0,
        autoFocus: !0,
        orientation: s,
        src: a,
        progressClassName: d ? _.s : _.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !d,
        getPlaybackBlockedMessage: v.b,
        maxSeekableTimeSec: m,
        initialVolume: b,
        initialMuted: A,
        onVolumeChange: C,
        onMutedChange: P,
        onProgressUpdate: h,
        onSeek: x,
        onEnded: p,
        renderPersistentOverlay: O,
        timelineIndicatorConfig: M,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
var B = a(323889),
    Y = a(192308),
    H = a(590202),
    Q = a(971649),
    $ = a(684693),
    K = a(617986);
function z(e) {
    let { iconImageUri: t } = e;
    return null == t
        ? (0, i.jsx)("div", { "aria-hidden": !0, className: F.Z2 })
        : (0, i.jsx)("img", {
              src: (0, h.lR)({ assetUrl: t, width: 48, height: 48 }),
              alt: "",
              width: 48,
              height: 48,
              className: F.Z2,
          });
}
function W(e) {
    let { transitionState: t, onClose: a, bounty: l, sourceQuestContent: h } = e,
        { url: A, orientation: f } = n.useMemo(() => {
            var e, t;
            let a =
                ((e = l),
                (t = c),
                null == e.videoRenditions
                    ? t.supported.includes(s.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: s.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: a, supported: i } = t;
                          o()(i.includes(a), "Preferred aspect ratio must be in supported renditions list");
                          let n = u(e, a);
                          if (null != n) return n;
                          let s = d[a],
                              r = null,
                              l = 1 / 0;
                          for (let t of i) {
                              if (t === a) continue;
                              let i = u(e, t);
                              if (null == i) continue;
                              let n = Math.abs(d[t] - s);
                              n < l && ((l = n), (r = i));
                          }
                          return r;
                      })(e.videoRenditions, t));
            return null == a
                ? { url: l.videoHls, orientation: "portrait" }
                : { url: a.url, orientation: a.aspectRatio === s.x.PORTRAIT ? "portrait" : "landscape" };
        }, [l]),
        R = { label: l.productName, buttonLabel: l.cta.buttonLabel, iconImageUri: l.productIcon },
        T = R.label ?? l.advertiserName,
        N = (function (e) {
            let { bounty: t, onClose: a, sourceQuestContent: i } = e,
                s = (0, Q.QK)();
            return n.useCallback(
                async (e) => {
                    ((await (0, K.f7)(t.cta.url)) && (a(), (0, Y.closeAllModals)()),
                        (0, $._Q)(
                            { adContentId: t.id, adCreativeType: B.p.BOUNTY, cta: t.cta },
                            { content: e, ctaContent: H.Cy.OPEN_GAME_LINK, impressionId: s(), sourceQuestContent: i },
                        ));
                },
                [t.id, t.cta, a, i, s],
            );
        })({ bounty: l, onClose: a, sourceQuestContent: h });
    return (0, i.jsx)(b.A, {
        transitionState: t,
        orientation: f,
        ariaLabel: T,
        video: (0, i.jsx)(V, { bounty: l, src: A, orientation: f, parentTransitionState: t, onClose: a }),
        footer: (0, i.jsx)(p.A, {
            prefix: (0, i.jsx)(z, { iconImageUri: R.iconImageUri }),
            advertiserDetails: (0, i.jsx)(x.A, {
                title: T,
                subtitle: k.intl.string(k.t.o6FLcF),
                onClick: () => N(m.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, i.jsx)(r.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => N(m.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
