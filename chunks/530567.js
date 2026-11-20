var o = t(876230),
    n = t(319354);
let r = {
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
    l = {
        [o.oA.SM]: {
            ...r,
            barHeightPx: 40,
            footerHorizontalPaddingPx: 12,
            scrimHeightPx: 72,
            controlsGapPx: 12,
            trailingGroupWidthPx: null,
            iconSize: "sm",
            volumeSliderWidthPx: 48,
        },
        [o.oA.MD]: { ...r },
        [o.oA.LG]: { ...r, barHeightPx: 72, iconSize: "lg", buttonHeightPx: 32 },
    },
    a = {
        size: o.oA.SM,
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
function x(i, e) {
    return e && i > 1;
}
let d = { xxs: 10, xs: 12, sm: 14, md: 16, lg: 18 };
t.d(
    e,
    {},
    {
        Dq: function (i, e, t) {
            let o = Math.max(24, n.E[i.iconSize] ?? 0),
                r = i.controlsGapPx,
                l = o + (e.showSkipButtons ? 2 * (r + o) : 0),
                a = e.showInlineVolumeSlider
                    ? i.volumeSliderMarginStartPx +
                      2 * i.volumeSliderPaddingInlinePx +
                      i.volumeSliderWidthPx +
                      i.volumeGroupMarginEndPx
                    : 0,
                x = d[i.timeTextVariant.split("/")[0].replace("body-", "")] ?? 14,
                P =
                    r +
                    o +
                    a +
                    i.midGroupGapPx +
                    i.durationMarginPx +
                    (function (i, e) {
                        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = Math.floor(Math.max(0, i)),
                            n = Math.floor(o / 3600),
                            r = Math.floor((o % 3600) / 60),
                            l = 0.562 * (n > 0 ? String(n).length + 4 : String(r).length + 2) + (n > 0 ? 2 : 1) * 0.278;
                        return t ? (0.389 + l) * e : (0.389 + 2 * l + 0.333) * e + 8;
                    })(t, x, !0 === e.compactTime) +
                    8,
                u = e.trailingButtonCount + +!!e.showPlaybackSpeedBtn + +!!e.showFullScreenBtn;
            return Math.ceil(2 * i.footerHorizontalPaddingPx + l + P + (u > 0 ? u * o + (u - 1) * r : 0));
        },
        Kj: x,
        X4: l,
        Xq: a,
        ZH: function (i, e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = t ? o.oA.LG : (e?.size ?? i);
            return { size: n, config: { ...l[n], ...(!t ? e?.overrides : void 0) } };
        },
        eD: function (i) {
            let { hideTranscriptBtn: e, hideCaptionBtn: t, hasDownloadBtn: o, extraButtonCount: n } = i,
                r = +!e + +!t + +!!o + n;
            return x(r, n > 0) ? 1 : r;
        },
    },
);
