n.d(t, { default: () => eh });
var a = n(477900),
    i = n(582128),
    s = n(323889),
    r = n(984827),
    l = n(821609),
    o = n(284009),
    c = n.n(o);
(r.x.PORTRAIT, r.x.PORTRAIT);
let u = { preferred: r.x.LANDSCAPE, supported: [r.x.LANDSCAPE, r.x.PORTRAIT] },
    d = { [r.x.PORTRAIT]: 9 / 16, [r.x.LANDSCAPE]: 16 / 9 };
function m(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
var h = n(613373),
    x = n(738822);
function p(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var b = n(637691),
    C = n(738883),
    A = n(669912),
    v = n(657792),
    f = n(503698),
    R = n.n(f),
    N = n(291749),
    g = n(815714);
let j = { sm: 48, lg: 92 };
function T(e) {
    let { iconImageUri: t, size: n } = e,
        i = j[n],
        s = R()(g.Z2, { [g.Ke]: "sm" === n, [g.EX]: "lg" === n }),
        r = { "--custom-product-icon-size": `${i}px` };
    return null == t
        ? (0, a.jsx)("div", { "aria-hidden": !0, className: s, style: r })
        : (0, a.jsx)("img", {
              src: (0, N.lR)({ assetUrl: t, width: i, height: i }),
              alt: "",
              width: i,
              height: i,
              className: s,
              style: r,
          });
}
var S = n(17928),
    k = n(858899),
    I = n(43990),
    P = n(478996),
    O = n(37402),
    y = n(845890),
    D = n(265704),
    M = n(105292);
let E = new Set([260021]);
var L = n(491812),
    _ = n(755372),
    w = n(759182),
    F = n(236850),
    U = n(939249),
    V = n(834730),
    B = n(475815),
    Q = n(192308),
    Y = n(590202),
    q = n(971649),
    z = n(620954),
    H = n(617986);
function K(e) {
    let { bounty: t, onClose: n, sourceQuestContent: a } = e,
        r = (0, q.QK)();
    return i.useCallback(
        async (e) => {
            ((await (0, H.f7)(t.cta.url)) && (n(), (0, Q.closeAllModals)()),
                (0, z._Q)(
                    { adContentId: t.id, adCreativeType: s.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: Y.Cy.OPEN_GAME_LINK, impressionId: r(), sourceQuestContent: a },
                ));
        },
        [t.id, t.cta, n, a, r],
    );
}
var $ = n(652215);
let G = { offset: 4 };
function W(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: r, onClose: l } = e,
        o = p(t),
        c = K({ bounty: t, onClose: l, sourceQuestContent: n }),
        u = i.useCallback(() => {
            let e = (0, B.qf)(r.current?.parentNode, r.current);
            (null != e && (0, B.sP)(e), c(x.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [r, c]);
    return (0, a.jsx)(I.N, {
        theme: $.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, a.jsx)(v.R, {
                adContentId: t.id,
                adCreativeType: s.p.BOUNTY,
                questContent: x.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (n) =>
                    (0, a.jsx)(U.D, {
                        innerRef: n,
                        className: R()(e, g.hn),
                        focusProps: G,
                        onClick: u,
                        children: (0, a.jsxs)("div", {
                            className: g.jT,
                            children: [
                                (0, a.jsx)(T, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, a.jsxs)("div", {
                                    className: g.z9,
                                    children: [
                                        (0, a.jsx)(V.E, {
                                            tag: "div",
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: o.label ?? t.advertiserName,
                                        }),
                                        (0, a.jsx)(V.E, {
                                            tag: "div",
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: o.buttonLabel,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
    });
}
var X = n(661531),
    J = n(820081),
    Z = n(250328);
let ee = 2 * Math.PI * 14.4,
    et = (180 / Math.PI) * 0.11111111111111112,
    en = `rotate(${-90 + et} 16 16)`;
function ea(e) {
    let { animateIn: t } = e;
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: R()(Z.z6, { [Z.HY]: t }),
        children: [
            (0, a.jsx)("div", { className: Z.AW }),
            (0, a.jsx)(J.B, {
                size: "custom",
                width: 20,
                height: 20,
                color: X.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: Z.kQ,
            }),
        ],
    });
}
function ei(e) {
    var t;
    let { totalSeconds: n, remainingSeconds: s } = e,
        r = s <= 0,
        [l] = i.useState(r),
        o = Math.max(1, Math.ceil(s)),
        c = 0;
    return (
        r ? (c = 1) : n > 0 && (c = 1 - s / n),
        (0, a.jsxs)("div", {
            role: "timer",
            "aria-label": r ? M.intl.string(M.t["0F4Peo"]) : M.intl.formatToPlainString(M.t["45cddS"], { seconds: o }),
            className: Z.O1,
            children: [
                (0, a.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: Z.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, a.jsx)("circle", { className: Z.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, a.jsx)("circle", {
                            className: R()(Z.qB, { [Z.LQ]: c <= 0 }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${ee} ${ee}`,
                            strokeDashoffset: ee - ((t = c) >= 1 ? ee : Math.max(0.01, t * ee - 3.2)),
                            transform: en,
                        }),
                    ],
                }),
                r
                    ? (0, a.jsx)(ea, { animateIn: !l })
                    : (0, a.jsx)(V.E, {
                          "aria-hidden": !0,
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: Z.YA,
                          children: o,
                      }),
            ],
        })
    );
}
function es(e, t) {
    return null != t ? Math.min(e, t) : e;
}
var er = n(190107);
n(500522);
var el = n(879371),
    eo = n(337611);
function ec() {
    let e = i.useMemo(() => (0, N.lR)({ assetUrl: eo.A, width: 34, height: 34 }), []);
    return (0, a.jsx)("img", { src: e, alt: "", className: g.RN });
}
async function eu(e, t) {
    try {
        await (0, y.Hq)(e.id, t);
    } catch (e) {
        (0, k.P0)({
            text: e?.code != null && E.has(e.code) && e?.message != null ? e.message : M.intl.string(M.t.uLjCfn),
            variant: "critical",
        });
    }
}
function ed(e) {
    let { bounty: t, sourceQuestContent: n, src: s, orientation: r, parentTransitionState: l, onClose: o } = e,
        c = i.useRef(null),
        u = (0, S.bG)([D.A], () => D.A.isBountyCompleted(t.id)),
        d = i.useCallback(() => {
            eu(t, n);
        }, [t, n]),
        {
            rewardTargetSeconds: m,
            isRewardEarned: x,
            rewardRemainingSeconds: p,
            maxSeekableTimeSeconds: b,
            handleProgressUpdate: C,
            handleSeek: A,
            handleEnded: v,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: n,
                    videoRef: a,
                    isCompleted: s,
                    onRewardEarned: r,
                } = e,
                [l, o] = i.useState(0),
                [c, u] = i.useState(n),
                d = i.useRef(0),
                m = i.useRef(n),
                h = i.useRef(s),
                x = es(t, c),
                p = s || l >= x,
                b = i.useCallback((e) => {
                    ((m.current = e), u(e));
                }, []),
                C = i.useCallback(
                    (e) => {
                        let n = Math.max(d.current, e);
                        ((d.current = n), o(n), !h.current && n >= es(t, m.current) && ((h.current = !0), r()));
                    },
                    [t, r],
                ),
                A = i.useCallback(
                    (e, t) => {
                        (Number.isFinite(t) && t > 0 && b(t), C(e));
                    },
                    [b, C],
                );
            return {
                rewardTargetSeconds: x,
                isRewardEarned: p,
                rewardRemainingSeconds: p ? 0 : x - l,
                maxSeekableTimeSeconds: l,
                handleProgressUpdate: A,
                handleSeek: i.useCallback(
                    (e) => {
                        C(e);
                    },
                    [C],
                ),
                handleEnded: i.useCallback(() => {
                    let e = a.current?.duration;
                    null != e && Number.isFinite(e) && e > 0 && (b(e), C(e));
                }, [a, b, C]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: u,
            onRewardEarned: d,
        }),
        { volume: f, muted: N, setVolume: j, setMuted: T } = (0, F.A)(),
        { balance: k } = (0, P.W0)(),
        y = i.useMemo(() => (0, a.jsx)(ec, {}), []),
        E = i.useMemo(() => M.intl.formatToPlainString(M.t["nLXlh+"], { orbAmount: er.FA }), []),
        U = (0, w.A)({ targetSec: m, label: E, isCompleted: x, icon: y, clickable: b >= m }),
        V = i.useCallback(
            () =>
                (0, a.jsx)(I.N, {
                    theme: $.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, a.jsxs)("div", {
                            className: R()(e, g.gP),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: g.Cq,
                                    children: [
                                        (0, a.jsx)(ei, { totalSeconds: m, remainingSeconds: p }),
                                        (0, a.jsx)(O.Ay, {
                                            variant: "overlay-secondary",
                                            balance: k,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", { className: g.ne, children: (0, a.jsx)(L.A, { onClose: o }) }),
                            ],
                        }),
                }),
            [o, k, p, m],
        ),
        B = i.useCallback(
            () => (0, a.jsx)(W, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: o }),
            [t, n, o],
        );
    return (0, a.jsx)(h.Ft, {
        ref: c,
        parentTransitionState: l,
        autoplay: !0,
        autoFocus: !0,
        orientation: r,
        src: s,
        progressClassName: x ? el.s : el.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !x,
        getPlaybackBlockedMessage: _.b,
        maxSeekableTimeSec: b,
        initialVolume: f,
        initialMuted: N,
        onVolumeChange: j,
        onMutedChange: T,
        onProgressUpdate: C,
        onSeek: A,
        onEnded: v,
        renderPersistentOverlay: V,
        renderEndScreen: B,
        timelineIndicatorConfig: U,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function em(e) {
    let { transitionState: t, onClose: n, bounty: s, sourceQuestContent: o, impressionRef: h } = e,
        { url: v, orientation: f } = i.useMemo(() => {
            var e, t;
            let n =
                ((e = s),
                (t = u),
                null == e.videoRenditions
                    ? t.supported.includes(r.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: r.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: n, supported: a } = t;
                          c()(a.includes(n), "Preferred aspect ratio must be in supported renditions list");
                          let i = m(e, n);
                          if (null != i) return i;
                          let s = d[n],
                              r = null,
                              l = 1 / 0;
                          for (let t of a) {
                              if (t === n) continue;
                              let a = m(e, t);
                              if (null == a) continue;
                              let i = Math.abs(d[t] - s);
                              i < l && ((l = i), (r = a));
                          }
                          return r;
                      })(e.videoRenditions, t));
            return null == n
                ? { url: s.videoHls, orientation: "portrait" }
                : { url: n.url, orientation: n.aspectRatio === r.x.PORTRAIT ? "portrait" : "landscape" };
        }, [s]),
        R = p(s),
        N = R.label ?? s.advertiserName,
        g = K({ bounty: s, onClose: n, sourceQuestContent: o });
    return (0, a.jsx)(A.A, {
        transitionState: t,
        orientation: f,
        ariaLabel: N,
        impressionRef: (e) => {
            h.current = e;
        },
        video: (0, a.jsx)(ed, {
            bounty: s,
            sourceQuestContent: o,
            src: v,
            orientation: f,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, a.jsx)(C.A, {
            prefix: (0, a.jsx)(T, { iconImageUri: R.iconImageUri, size: "sm" }),
            advertiserDetails: (0, a.jsx)(b.A, {
                title: N,
                subtitle: M.intl.string(M.t.o6FLcF),
                onClick: () => g(x.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, a.jsx)(l.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => g(x.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eh(e) {
    return (0, a.jsx)(v.R, {
        adContentId: e.bounty.id,
        adCreativeType: s.p.BOUNTY,
        questContent: x.uF.VIDEO_MODAL,
        minViewTimeSeconds: h.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, a.jsx)(em, { ...e, impressionRef: t }),
    });
}
