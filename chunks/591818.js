(n.d(t, { VZ: () => j, Ay: () => k, FX: () => V }), n(938796));
var i = n(477900),
    o = n(582128),
    a = n(665260),
    l = n(682176),
    r = n(731068),
    u = n(619517),
    s = n(248643),
    d = n(803316),
    c = n(684519),
    h = n(644447),
    m = n(587481),
    g = n(998218),
    p = n(454290),
    y = n(447991),
    x = n(777501),
    f = n(375708);
function M(e) {
    let {
            media: t,
            src: n,
            posterUrl: o,
            autoPlay: a,
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
        children: (0, i.jsx)(y.A, {
            crossOrigin: null,
            alt: null != t.alt && "" !== t.alt ? t.alt : f.intl.string(f.t.FlNoSV),
            src: n,
            poster: o,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholderVersion,
            autoplay: a,
            initialActive: a,
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
var v = n(202091),
    w = n(765671),
    C = n(267102),
    S = n(700331);
function P(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: o, offset: a, delta: l } = e,
        r = (i - t) / 2 + a.x,
        u = (o - n) / 2 + a.y,
        s = (i + t) / 2 + a.x,
        d = (o + n) / 2 + a.y,
        { x: c, y: h } = a;
    return (
        t > i && ((c += l.x), r + l.x > 0 && (c = (t - i) / 2), s + l.x < i && (c = (i - t) / 2)),
        n > o && ((h += l.y), u + l.y > 0 && (h = (n - o) / 2), d + l.y < o && (h = (o - n) / 2)),
        { x: c, y: h }
    );
}
let A = o.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: a, y: l, setOffset: r, zoomed: u, setZoomed: s } = (0, p.Q)(),
        { ref: d, width: c, height: h } = (0, w.Ay)(),
        [m, g] = [c ?? 0, h ?? 0],
        y = (0, C._o)(),
        x = o.useRef(!1),
        [f, M] = o.useState({ x: 0, y: 0 });
    function A(e, t) {
        let i = P({
            width: m * n.goal,
            height: g * n.goal,
            viewportWidth: y.innerWidth,
            viewportHeight: y.innerHeight,
            offset: { x: a.goal, y: l.goal },
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
                    let t = e.clientX - y.innerWidth / 2,
                        i = e.clientY - y.innerHeight / 2,
                        o = P({
                            width: m * n.goal,
                            height: g * n.goal,
                            viewportWidth: y.innerWidth,
                            viewportHeight: y.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    r(o.x, o.y);
                }
                return;
            }
            ((e.clientX - f.x) ** 2 + (e.clientY - f.y) ** 2 < 400 &&
                (S.l.markActionPerformed(S.N.ZOOM_OUT_IMAGE_PRESSED), s(!1)),
                (x.current = !1));
        },
        onMouseMove: (e) => x.current && A(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && A(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (x.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: a, y: l, cursor: u ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var E = n(652215),
    W = n(516653),
    I = n(952306);
function V(e, t) {
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
let k = o.memo(function (e) {
    var t, n, o, r, y;
    let x,
        { media: f, obscured: v = !1, maxWidth: w, maxHeight: C, onContextMenu: S } = e,
        { width: P, height: V, url: k, proxyUrl: _, alt: H, type: L, maxWidth: T, maxHeight: O, clip: b, ...D } = f,
        { zoomed: U } = (0, p.Q)(),
        N = (function (e) {
            let { clip: t, sourceMetadata: n } = e;
            if (null != t) return t;
            if (n?.identifier?.type !== "attachment" || null == n.message) return null;
            let i = n.identifier.attachmentId,
                o = n.message.attachments.find((e) => e.id === i);
            return null != o && (0, a.Lt)(o.flags ?? 0, E.sbO.IS_CLIP) ? o : null;
        })(f),
        X =
            ((t = U),
            (n = k),
            (o = _),
            (r = f.contentType),
            (y = f.originalContentType),
            t && g.A.isDiscordAssetUrl(n, r, y) ? (0, d.XW)(n, r, y) : (0, h.E)({ proxyURL: o, url: n })),
        F = null != P && 0 !== P && null != V && 0 !== V;
    if ("VIDEO" === L && F && null != _) {
        let e = f.poster ?? j(_);
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
                width: P,
                height: V,
                maxWidth: w,
                maxHeight: C,
                poster: e,
                naturalWidth: P,
                naturalHeight: V,
                volume: m.v1,
                autoMute: f.autoMute ?? m.uj,
                onVolumeChange: m.ls,
                onMute: m.y5,
                renderLinkComponent: t,
                autoPlay: n,
                alt: H,
                onContextMenu: S,
                disableArrowKeySeek: !0,
            });
        }
        return f.sourceMetadata?.identifier?.type === "attachment" && (0, W.T)(P, V)
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
                      width: P,
                      height: V,
                      maxWidth: w,
                      maxHeight: C,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: I.$_,
                      animated: !v && f.animated,
                      autoPlay: !v,
                      alt: H,
                      onContextMenu: S,
                  })
                : (0, i.jsx)("img", {
                      src: X,
                      alt: H,
                      onContextMenu: S,
                      className: I.xx,
                      style: { maxWidth: w, maxHeight: C },
                  })),
        null != x ? (0, i.jsx)(A, { children: x }) : null
    );
});
