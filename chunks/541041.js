(n.d(t, { Ay: () => R, VZ: () => j, FX: () => _ }), n(938796));
var i = n(477900),
    l = n(582128),
    a = n(665260),
    o = n(682176),
    r = n(731068),
    u = n(619517),
    s = n(248643),
    d = n(803316),
    c = n(383055),
    h = n(644447),
    m = n(587481),
    g = n(998218),
    y = n(454290),
    f = n(447991),
    p = n(925056),
    x = n(889767),
    M = n(608628),
    v = n(530567),
    S = n(777501),
    P = n(792996);
function C(e) {
    let {
            media: t,
            src: n,
            posterUrl: l,
            autoPlay: a,
            maxWidth: o,
            maxHeight: r,
            onContextMenu: u,
            renderLegacy: s,
            playerRef: d,
        } = e,
        { useDiscordVideoPlayer: c } = (0, S.r)({ location: "MediaViewerMedia" });
    if (!c) return (0, i.jsx)(i.Fragment, { children: s() });
    let { autoMute: h } = t,
        g = "function" == typeof h ? h() : (h ?? (0, m.uj)()),
        y = null != t.width && null != t.height && t.height > t.width ? "portrait" : "landscape",
        C = o < 400;
    return (0, i.jsx)("div", {
        style: { width: o, height: r, display: "flex" },
        onClick: (e) => e.stopPropagation(),
        onContextMenu: u,
        children: (0, i.jsx)(f.A, {
            crossOrigin: null,
            playerRef: d,
            alt: null != t.alt && "" !== t.alt ? t.alt : P.intl.string(P.t.FlNoSV),
            src: n,
            poster: l,
            autoplay: a,
            initialActive: a,
            initialTimeSec: t.initialTimeSec,
            initialVolume: (0, m.v1)(),
            initialMuted: g,
            getInitialVolume: m.v1,
            orientation: y,
            minWidth: 0,
            minHeight: 0,
            parentTransitionState: null,
            onPlay: t.onPlay ?? void 0,
            onEnded: t.onEnded ?? void 0,
            onVolumeChange: m.ls,
            onMutedChange: m.y5,
            hideSkipButtons: !0,
            autoSizeControlBar: !0,
            autoCompactTimeDisplay: !0,
            autoHideVolumeSlider: C,
            floatingVolumeSlider: C,
            hidePlaybackSpeedBtn: !!C && "inline",
            controlBarConfig: C ? v.Xq : void 0,
            renderTopStartOverlay: (0, M.PR)(
                (function (e) {
                    let { sourceMetadata: t } = e;
                    if (t?.identifier?.type !== "attachment" || null == t.message) return null;
                    let { attachmentId: n } = t.identifier,
                        i = t.message.attachments.find((e) => e.id === n);
                    return null != i ? (0, x.o)(i, t.message) : null;
                })(t),
                p.u.MEDIA_VIEWER,
            ),
        }),
    });
}
var w = n(156150),
    A = n(765671),
    k = n(267102),
    E = n(700331);
function I(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: l, offset: a, delta: o } = e,
        r = (i - t) / 2 + a.x,
        u = (l - n) / 2 + a.y,
        s = (i + t) / 2 + a.x,
        d = (l + n) / 2 + a.y,
        { x: c, y: h } = a;
    return (
        t > i && ((c += o.x), r + o.x > 0 && (c = (t - i) / 2), s + o.x < i && (c = (i - t) / 2)),
        n > l && ((h += o.y), u + o.y > 0 && (h = (n - l) / 2), d + o.y < l && (h = (l - n) / 2)),
        { x: c, y: h }
    );
}
let V = l.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: a, y: o, setOffset: r, zoomed: u, setZoomed: s } = (0, y.Q)(),
        { ref: d, width: c, height: h } = (0, A.Ay)(),
        [m, g] = [c ?? 0, h ?? 0],
        f = (0, k._o)(),
        p = l.useRef(!1),
        [x, M] = l.useState({ x: 0, y: 0 });
    function v(e, t) {
        let i = I({
            width: m * n.goal,
            height: g * n.goal,
            viewportWidth: f.innerWidth,
            viewportHeight: f.innerHeight,
            offset: { x: a.goal, y: o.goal },
            delta: { x: e, y: t },
        });
        r(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(w.animated.div, {
        ref: d,
        onMouseDown: function (e) {
            u && 0 === e.button && (e.preventDefault(), (p.current = !0), M({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: function (e) {
            if (!u) {
                if (0 === e.button) {
                    (E.l.markActionPerformed(E.N.ZOOM_IN_IMAGE_PRESSED), s(!0));
                    let t = e.clientX - f.innerWidth / 2,
                        i = e.clientY - f.innerHeight / 2,
                        l = I({
                            width: m * n.goal,
                            height: g * n.goal,
                            viewportWidth: f.innerWidth,
                            viewportHeight: f.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    r(l.x, l.y);
                }
                return;
            }
            ((e.clientX - x.x) ** 2 + (e.clientY - x.y) ** 2 < 400 &&
                (E.l.markActionPerformed(E.N.ZOOM_OUT_IMAGE_PRESSED), s(!1)),
                (p.current = !1));
        },
        onMouseMove: (e) => p.current && v(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && v(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (p.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: a, y: o, cursor: u ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var W = n(652215),
    b = n(516653),
    H = n(952306);
function _(e, t) {
    return {
        ...e,
        type: (0, r.FE)(e),
        original: e.url,
        srcIsAnimated: (0, a.Lt)(e.flags, r.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function j(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let R = l.memo(function (e) {
    var t, n, r, f, p;
    let x,
        { media: M, playbackRef: v, obscured: S = !1, maxWidth: P, maxHeight: w, onContextMenu: A } = e,
        { width: k, height: E, url: I, proxyUrl: _, alt: R, type: T, maxWidth: D, maxHeight: O, clip: L, ...U } = M,
        { zoomed: X } = (0, y.Q)(),
        N = (function (e) {
            let { clip: t, sourceMetadata: n } = e;
            if (null != t) return t;
            if (n?.identifier?.type !== "attachment" || null == n.message) return null;
            let i = n.identifier.attachmentId,
                l = n.message.attachments.find((e) => e.id === i);
            return null != l && (0, a.Lt)(l.flags ?? 0, W.sbO.IS_CLIP) ? l : null;
        })(M),
        F =
            ((t = X),
            (n = I),
            (r = _),
            (f = M.contentType),
            (p = M.originalContentType),
            t && g.A.isDiscordAssetUrl(n, f, p) ? (0, d.XW)(n, f, p) : (0, h.E)({ proxyURL: r, url: n })),
        Y = null != k && 0 !== k && null != E && 0 !== E,
        z = "VIDEO" === T && null != k && null != E && Y && null != _ && !S && (null != N || (0, b.T)(k, E)),
        B = l.useRef(null),
        G = l.useRef(null);
    if (
        (l.useImperativeHandle(
            v,
            () => ({
                hasPlayback: () => z,
                togglePlayback() {
                    z && (null != B.current ? B.current.togglePlayback() : G.current?.togglePlayback());
                },
            }),
            [z],
        ),
        "VIDEO" === T && Y && null != _)
    ) {
        let e = M.poster ?? j(_);
        if (null == e) return null;
        if (null != N)
            return (0, i.jsx)(o.A, {
                attachment: N,
                src: F,
                posterUrl: e,
                channelId: M.sourceMetadata?.message?.channel_id,
                maxWidth: P,
                maxHeight: w,
                messageId: M.sourceMetadata?.message?.id,
                initialTimeSec: M.initialTimeSec,
                autoPlay: M.autoPlay ?? !S,
                autoMute: "function" == typeof M.autoMute ? M.autoMute() : (M.autoMute ?? (0, m.uj)()),
                volume: (0, m.GD)(),
                onContextMenu: A,
                onPlay: M.onPlay ?? void 0,
                onEnded: M.onEnded ?? void 0,
                onVolumeChange: m.oc,
                onMutedChange: m.y5,
                playerRef: G,
            });
        let t = M.renderLinkComponent ?? c.bU,
            n = M.autoPlay ?? !S;
        function Z() {
            return (0, i.jsx)(s.A, {
                ...U,
                src: F,
                width: k,
                height: E,
                maxWidth: P,
                maxHeight: w,
                poster: e,
                naturalWidth: k,
                naturalHeight: E,
                volume: m.v1,
                autoMute: M.autoMute ?? m.uj,
                onVolumeChange: m.ls,
                onMute: m.y5,
                renderLinkComponent: t,
                autoPlay: n,
                alt: R,
                onContextMenu: A,
                disableArrowKeySeek: !0,
                mediaPlayerRef: B,
                showPlaybackSpeedControl: M.sourceMetadata?.message != null,
            });
        }
        return M.sourceMetadata?.identifier?.type === "attachment" && (0, b.T)(k, E)
            ? (0, i.jsx)(C, {
                  media: M,
                  src: F,
                  posterUrl: e,
                  autoPlay: n,
                  maxWidth: P,
                  maxHeight: w,
                  onContextMenu: A,
                  renderLegacy: Z,
                  playerRef: G,
              })
            : Z();
    }
    return (
        "IMAGE" === T &&
            (x = Y
                ? (0, i.jsx)(u.Ay, {
                      ...U,
                      src: F,
                      width: k,
                      height: E,
                      maxWidth: P,
                      maxHeight: w,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: H.$_,
                      animated: !S && M.animated,
                      autoPlay: !S,
                      alt: R,
                      onContextMenu: A,
                  })
                : (0, i.jsx)("img", {
                      src: F,
                      alt: R,
                      onContextMenu: A,
                      className: H.xx,
                      style: { maxWidth: P, maxHeight: w },
                  })),
        null != x ? (0, i.jsx)(V, { children: x }) : null
    );
});
