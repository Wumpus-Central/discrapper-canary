a.d(t, { default: () => D });
var i = a(477900),
    n = a(582128),
    l = a(984827),
    r = a(821609),
    s = a(284009),
    o = a.n(s);
(l.x.PORTRAIT, l.x.PORTRAIT);
let u = { preferred: l.x.LANDSCAPE, supported: [l.x.LANDSCAPE, l.x.PORTRAIT] },
    c = { [l.x.PORTRAIT]: 9 / 16, [l.x.LANDSCAPE]: 16 / 9 };
function d(e, t) {
    let a = e[t];
    return null == a || "" === a ? null : { url: a, aspectRatio: t };
}
var p = a(738822),
    b = a(291749),
    m = a(637691),
    x = a(738883),
    A = a(669912),
    f = a(613373),
    h = a(491812),
    R = a(755372),
    C = a(759182),
    T = a(236850),
    S = a(190107);
a(500522);
var k = a(105292),
    P = a(879371),
    g = a(815714);
function v() {
    let e = n.useMemo(
        () =>
            (0, b.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/8db8015bf879338028eb3094d2ca5567c70f6ea9a6bb60068b0f00ca712e5bf6.webp",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, i.jsx)("img", { src: e, alt: "", className: g.RN });
}
function I(e) {
    let { bounty: t, src: a, orientation: l, parentTransitionState: r, onClose: s } = e,
        o = n.useRef(null),
        {
            rewardTargetSec: u,
            isRewardEarned: c,
            maxSeekableTimeSec: d,
            handleProgressUpdate: p,
            handleSeek: b,
            handleEnded: m,
        } = (function (e) {
            let { rewardTimerSeconds: t, initialDurationSec: a, videoRef: i } = e,
                [l, r] = n.useState(0),
                [s, o] = n.useState(a),
                u = null != s ? Math.min(t, s) : t,
                c = n.useCallback((e) => {
                    r((t) => Math.max(t, e));
                }, []),
                d = n.useCallback(
                    (e, t) => {
                        (c(e), Number.isFinite(t) && t > 0 && o(t));
                    },
                    [c],
                );
            return {
                rewardTargetSec: u,
                isRewardEarned: l >= u,
                maxSeekableTimeSec: l,
                handleProgressUpdate: d,
                handleSeek: n.useCallback(
                    (e) => {
                        c(e);
                    },
                    [c],
                ),
                handleEnded: n.useCallback(() => {
                    let e = i.current?.duration;
                    null != e && Number.isFinite(e) && c(e);
                }, [i, c]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSec: t.videoDurationSeconds ?? null,
            videoRef: o,
        }),
        { volume: x, muted: A, setVolume: I, setMuted: N } = (0, T.A)(),
        M = n.useMemo(() => (0, i.jsx)(v, {}), []),
        O = n.useMemo(() => k.intl.formatToPlainString(k.t["nLXlh+"], { orbAmount: S.FA }), []),
        j = (0, C.A)({ targetSec: u, label: O, isCompleted: c, icon: M, clickable: c }),
        L = n.useCallback(() => (0, i.jsx)("div", { className: g.ne, children: (0, i.jsx)(h.A, { onClose: s }) }), [s]);
    return (0, i.jsx)(f.Ft, {
        ref: o,
        parentTransitionState: r,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: a,
        progressClassName: c ? P.s : P.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !c,
        getPlaybackBlockedMessage: R.b,
        maxSeekableTimeSec: d,
        initialVolume: x,
        initialMuted: A,
        onVolumeChange: I,
        onMutedChange: N,
        onProgressUpdate: p,
        onSeek: b,
        onEnded: m,
        renderPersistentOverlay: L,
        timelineIndicatorConfig: j,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
var N = a(323889),
    M = a(192308),
    O = a(590202),
    j = a(971649),
    L = a(620954),
    y = a(617986);
function w(e) {
    let { iconImageUri: t } = e;
    return null == t
        ? (0, i.jsx)("div", { "aria-hidden": !0, className: g.Z2 })
        : (0, i.jsx)("img", {
              src: (0, b.lR)({ assetUrl: t, width: 48, height: 48 }),
              alt: "",
              width: 48,
              height: 48,
              className: g.Z2,
          });
}
function D(e) {
    let { transitionState: t, onClose: a, bounty: s, sourceQuestContent: b } = e,
        { url: f, orientation: h } = n.useMemo(() => {
            var e, t;
            let a =
                ((e = s),
                (t = u),
                null == e.videoRenditions
                    ? t.supported.includes(l.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: l.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: a, supported: i } = t;
                          o()(i.includes(a), "Preferred aspect ratio must be in supported renditions list");
                          let n = d(e, a);
                          if (null != n) return n;
                          let l = c[a],
                              r = null,
                              s = 1 / 0;
                          for (let t of i) {
                              if (t === a) continue;
                              let i = d(e, t);
                              if (null == i) continue;
                              let n = Math.abs(c[t] - l);
                              n < s && ((s = n), (r = i));
                          }
                          return r;
                      })(e.videoRenditions, t));
            return null == a
                ? { url: s.videoHls, orientation: "portrait" }
                : { url: a.url, orientation: a.aspectRatio === l.x.PORTRAIT ? "portrait" : "landscape" };
        }, [s]),
        R = { label: s.productName, buttonLabel: s.cta.buttonLabel, iconImageUri: s.productIcon },
        C = R.label ?? s.advertiserName,
        T = (function (e) {
            let { bounty: t, onClose: a, sourceQuestContent: i } = e,
                l = (0, j.QK)();
            return n.useCallback(
                async (e) => {
                    ((await (0, y.f7)(t.cta.url)) && (a(), (0, M.closeAllModals)()),
                        (0, L._Q)(
                            { adContentId: t.id, adCreativeType: N.p.BOUNTY, cta: t.cta },
                            { content: e, ctaContent: O.Cy.OPEN_GAME_LINK, impressionId: l(), sourceQuestContent: i },
                        ));
                },
                [t.id, t.cta, a, i, l],
            );
        })({ bounty: s, onClose: a, sourceQuestContent: b });
    return (0, i.jsx)(A.A, {
        transitionState: t,
        orientation: h,
        ariaLabel: C,
        video: (0, i.jsx)(I, { bounty: s, src: f, orientation: h, parentTransitionState: t, onClose: a }),
        footer: (0, i.jsx)(x.A, {
            prefix: (0, i.jsx)(w, { iconImageUri: R.iconImageUri }),
            advertiserDetails: (0, i.jsx)(m.A, {
                title: C,
                subtitle: k.intl.string(k.t.o6FLcF),
                onClick: () => T(p.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, i.jsx)(r.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => T(p.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
