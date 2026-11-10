var r = n(876230),
    l = n(319354);
let a = {
        barHeightPx: 64,
        footerHorizontalPaddingPx: 20,
        footerBottomPx: 4,
        scrimHeightPx: 121,
        controlsGapPx: 16,
        midGroupGapPx: 8,
        durationMarginPx: 3,
        trailingGroupWidthPx: 200,
        timelineVerticalPaddingPx: 20,
        timelineHeightPx: 4,
        hoverTimelineHeightPx: 4,
        playheadSizePx: 12,
        timelineHitboxOffsetPx: 0,
        iconSize: "md",
        buttonHeightPx: 24,
        timeTextVariant: "body-sm/normal",
        volumeSliderWidthPx: 100,
        volumeSliderMarginStartPx: 6,
        volumeSliderPaddingInlinePx: 0,
        volumeGroupMarginEndPx: 0,
        volumeFlexShrink: 1,
    },
    i = {
        [r.oA.SM]: {
            ...a,
            barHeightPx: 40,
            footerHorizontalPaddingPx: 12,
            scrimHeightPx: 72,
            controlsGapPx: 12,
            trailingGroupWidthPx: null,
            iconSize: "sm",
            volumeSliderWidthPx: 48,
        },
        [r.oA.MD]: { ...a },
        [r.oA.LG]: { ...a, barHeightPx: 72, iconSize: "lg", buttonHeightPx: 32 },
    },
    o = {
        size: r.oA.SM,
        overrides: {
            barHeightPx: 32,
            footerHorizontalPaddingPx: 4,
            footerBottomPx: 2,
            scrimHeightPx: 48,
            controlsGapPx: 4,
            midGroupGapPx: 4,
            durationMarginPx: 0,
            timelineVerticalPaddingPx: 4,
            timelineHeightPx: 2,
            hoverTimelineHeightPx: 4,
            playheadSizePx: 8,
            timelineHitboxOffsetPx: -12,
            timeTextVariant: "body-xs/normal",
            volumeSliderMarginStartPx: 4,
            volumeSliderPaddingInlinePx: 4,
            volumeGroupMarginEndPx: 6,
            volumeFlexShrink: 0,
        },
    };
function u(e, t) {
    return t && e > 1;
}
let s = { xxs: 10, xs: 12, sm: 14, md: 16, lg: 18 };
n.d(
    t,
    {},
    {
        Dq: function (e, t, n) {
            let r,
                a,
                i,
                o = Math.max(24, l.E[e.iconSize] ?? 0),
                u = e.controlsGapPx,
                c = o + (t.showSkipButtons ? 2 * (u + o) : 0),
                d = t.showInlineVolumeSlider
                    ? e.volumeSliderMarginStartPx +
                      2 * e.volumeSliderPaddingInlinePx +
                      e.volumeSliderWidthPx +
                      e.volumeGroupMarginEndPx
                    : 0,
                m = s[e.timeTextVariant.split("/")[0].replace("body-", "")] ?? 14,
                f =
                    u +
                    o +
                    d +
                    e.midGroupGapPx +
                    e.durationMarginPx +
                    ((a = Math.floor((r = Math.floor(Math.max(0, n))) / 3600)),
                    (i = Math.floor((r % 3600) / 60)),
                    (0.389 +
                        2 * (0.562 * (a > 0 ? String(a).length + 4 : String(i).length + 2) + (a > 0 ? 2 : 1) * 0.278) +
                        0.333) *
                        m +
                        8) +
                    8,
                p = t.trailingButtonCount + +!!t.showPlaybackSpeedBtn + +!!t.showFullScreenBtn;
            return Math.ceil(2 * e.footerHorizontalPaddingPx + c + f + (p > 0 ? p * o + (p - 1) * u : 0));
        },
        Kj: u,
        X4: i,
        Xq: o,
        ZH: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = n ? r.oA.LG : (t?.size ?? e);
            return { size: l, config: { ...i[l], ...(!n ? t?.overrides : void 0) } };
        },
        eD: function (e) {
            let { hideTranscriptBtn: t, hideCaptionBtn: n, hasDownloadBtn: r, extraButtonCount: l } = e,
                a = +!t + +!n + +!!r + l;
            return u(a, l > 0) ? 1 : a;
        },
    },
);
