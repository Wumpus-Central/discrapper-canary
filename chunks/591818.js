(n.d(t, { VZ: () => j, Ay: () => _, FX: () => I }), n(938796));
var i = n(477900),
    a = n(582128),
    o = n(665260),
    l = n(682176),
    r = n(731068),
    u = n(619517),
    s = n(248643),
    d = n(803316),
    c = n(44788),
    h = n(644447),
    m = n(587481),
    g = n(998218),
    y = n(454290),
    p = n(447991),
    x = n(777501),
    f = n(105292);
function M(e) {
    let {
            media: t,
            src: n,
            posterUrl: a,
            autoPlay: o,
            maxWidth: l,
            maxHeight: r,
            onContextMenu: u,
            renderLegacy: s,
        } = e,
        { useDiscordVideoPlayer: d } = (0, x.r)({ location: "MediaViewerMedia" });
    if (!d) return (0, i.jsx)(i.Fragment, { children: s() });
    let { autoMute: c } = t,
        h = "function" == typeof c ? c() : (c ?? (0, m.uj)()),
        g = null != t.width && null != t.height && t.height > t.width ? "portrait" : "landscape";
    return (0, i.jsx)("div", {
        style: { width: l, height: r, display: "flex" },
        onClick: (e) => e.stopPropagation(),
        onContextMenu: u,
        children: (0, i.jsx)(p.A, {
            crossOrigin: null,
            alt: null != t.alt && "" !== t.alt ? t.alt : f.intl.string(f.t.FlNoSV),
            src: n,
            poster: a,
            autoplay: o,
            initialActive: o,
            initialTimeSec: t.initialTimeSec,
            initialVolume: (0, m.v1)(),
            initialMuted: h,
            getInitialVolume: m.v1,
            orientation: g,
            minWidth: 0,
            minHeight: 0,
            parentTransitionState: null,
            onPlay: t.onPlay ?? void 0,
            onEnded: t.onEnded ?? void 0,
            onVolumeChange: m.ls,
            onMutedChange: m.y5,
            hideSkipButtons: !0,
        }),
    });
}
var v = n(399513),
    w = n(765671),
    C = n(267102),
    S = n(700331);
function A(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: a, offset: o, delta: l } = e,
        r = (i - t) / 2 + o.x,
        u = (a - n) / 2 + o.y,
        s = (i + t) / 2 + o.x,
        d = (a + n) / 2 + o.y,
        { x: c, y: h } = o;
    return (
        t > i && ((c += l.x), r + l.x > 0 && (c = (t - i) / 2), s + l.x < i && (c = (i - t) / 2)),
        n > a && ((h += l.y), u + l.y > 0 && (h = (n - a) / 2), d + l.y < a && (h = (a - n) / 2)),
        { x: c, y: h }
    );
}
let P = a.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: o, y: l, setOffset: r, zoomed: u, setZoomed: s } = (0, y.Q)(),
        { ref: d, width: c, height: h } = (0, w.Ay)(),
        [m, g] = [c ?? 0, h ?? 0],
        p = (0, C._o)(),
        x = a.useRef(!1),
        [f, M] = a.useState({ x: 0, y: 0 });
    function P(e, t) {
        let i = A({
            width: m * n.goal,
            height: g * n.goal,
            viewportWidth: p.innerWidth,
            viewportHeight: p.innerHeight,
            offset: { x: o.goal, y: l.goal },
            delta: { x: e, y: t },
        });
        r(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(v.animated.div, {
        ref: d,
        onMouseDown: function (e) {
            u && 0 === e.button && (e.preventDefault(), (x.current = !0), M({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: function (e) {
            if (!u) {
                if (0 === e.button) {
                    (S.l.markActionPerformed(S.N.ZOOM_IN_IMAGE_PRESSED), s(!0));
                    let t = e.clientX - p.innerWidth / 2,
                        i = e.clientY - p.innerHeight / 2,
                        a = A({
                            width: m * n.goal,
                            height: g * n.goal,
                            viewportWidth: p.innerWidth,
                            viewportHeight: p.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    r(a.x, a.y);
                }
                return;
            }
            ((e.clientX - f.x) ** 2 + (e.clientY - f.y) ** 2 < 400 &&
                (S.l.markActionPerformed(S.N.ZOOM_OUT_IMAGE_PRESSED), s(!1)),
                (x.current = !1));
        },
        onMouseMove: (e) => x.current && P(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && P(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (x.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: o, y: l, cursor: u ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var E = n(652215),
    W = n(516653),
    k = n(952306);
function I(e, t) {
    return {
        ...e,
        type: (0, r.FE)(e),
        original: e.url,
        srcIsAnimated: (0, o.Lt)(e.flags, r.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function j(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let _ = a.memo(function (e) {
    var t, n, a, r, p;
    let x,
        { media: f, obscured: v = !1, maxWidth: w, maxHeight: C, onContextMenu: S } = e,
        { width: A, height: I, url: _, proxyUrl: H, alt: V, type: L, maxWidth: T, maxHeight: b, clip: O, ...D } = f,
        { zoomed: U } = (0, y.Q)(),
        N = (function (e) {
            let { clip: t, sourceMetadata: n } = e;
            if (null != t) return t;
            if (n?.identifier?.type !== "attachment" || null == n.message) return null;
            let i = n.identifier.attachmentId,
                a = n.message.attachments.find((e) => e.id === i);
            return null != a && (0, o.Lt)(a.flags ?? 0, E.sbO.IS_CLIP) ? a : null;
        })(f),
        X =
            ((t = U),
            (n = _),
            (a = H),
            (r = f.contentType),
            (p = f.originalContentType),
            t && g.A.isDiscordAssetUrl(n, r, p) ? (0, d.XW)(n, r, p) : (0, h.E)({ proxyURL: a, url: n })),
        F = null != A && 0 !== A && null != I && 0 !== I;
    if ("VIDEO" === L && F && null != H) {
        let e = f.poster ?? j(H);
        if (null == e) return null;
        if (null != N)
            return (0, i.jsx)(l.A, {
                attachment: N,
                src: X,
                posterUrl: e,
                channelId: f.sourceMetadata?.message?.channel_id,
                maxWidth: w,
                maxHeight: C,
                messageId: f.sourceMetadata?.message?.id,
                initialTimeSec: f.initialTimeSec,
                autoPlay: f.autoPlay ?? !v,
                autoMute: "function" == typeof f.autoMute ? f.autoMute() : (f.autoMute ?? (0, m.uj)()),
                volume: (0, m.GD)(),
                onContextMenu: S,
                onPlay: f.onPlay ?? void 0,
                onEnded: f.onEnded ?? void 0,
                onVolumeChange: m.oc,
                onMutedChange: m.y5,
            });
        let t = f.renderLinkComponent ?? c.bU,
            n = f.autoPlay ?? !v;
        function R() {
            return (0, i.jsx)(s.A, {
                ...D,
                src: X,
                width: A,
                height: I,
                maxWidth: w,
                maxHeight: C,
                poster: e,
                naturalWidth: A,
                naturalHeight: I,
                volume: m.v1,
                autoMute: f.autoMute ?? m.uj,
                onVolumeChange: m.ls,
                onMute: m.y5,
                renderLinkComponent: t,
                autoPlay: n,
                alt: V,
                onContextMenu: S,
                disableArrowKeySeek: !0,
                showPlaybackSpeedControl: f.sourceMetadata?.message != null,
            });
        }
        return f.sourceMetadata?.identifier?.type === "attachment" && (0, W.T)(A, I)
            ? (0, i.jsx)(M, {
                  media: f,
                  src: X,
                  posterUrl: e,
                  autoPlay: n,
                  maxWidth: w,
                  maxHeight: C,
                  onContextMenu: S,
                  renderLegacy: R,
              })
            : R();
    }
    return (
        "IMAGE" === L &&
            (x = F
                ? (0, i.jsx)(u.Ay, {
                      ...D,
                      src: X,
                      width: A,
                      height: I,
                      maxWidth: w,
                      maxHeight: C,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: k.$_,
                      animated: !v && f.animated,
                      autoPlay: !v,
                      alt: V,
                      onContextMenu: S,
                  })
                : (0, i.jsx)("img", {
                      src: X,
                      alt: V,
                      onContextMenu: S,
                      className: k.xx,
                      style: { maxWidth: w, maxHeight: C },
                  })),
        null != x ? (0, i.jsx)(P, { children: x }) : null
    );
});
