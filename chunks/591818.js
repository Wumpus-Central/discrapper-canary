(n.d(t, { VZ: () => P, Ay: () => O, FX: () => V }), n(938796));
var i = n(477900),
    r = n(582128),
    l = n(665260),
    a = n(682176),
    o = n(731068),
    s = n(619517),
    u = n(248643),
    d = n(803316),
    c = n(85935),
    h = n(644447),
    m = n(587481),
    g = n(998218),
    p = n(454290),
    f = n(447991),
    x = n(777501),
    y = n(375708);
function A(e) {
    let {
            media: t,
            src: n,
            posterUrl: r,
            autoPlay: l,
            maxWidth: a,
            maxHeight: o,
            onContextMenu: s,
            renderLegacy: u,
        } = e,
        { useDiscordVideoPlayer: d } = (0, x.r)({ location: "MediaViewerMedia" });
    if (!d) return (0, i.jsx)(i.Fragment, { children: u() });
    let { autoMute: c } = t,
        h = "function" == typeof c ? c() : (c ?? (0, m.uj)()),
        g = null != t.width && null != t.height && t.height > t.width ? "portrait" : "landscape";
    return (0, i.jsx)("div", {
        style: { width: a, height: o, display: "flex" },
        onClick: (e) => e.stopPropagation(),
        onContextMenu: s,
        children: (0, i.jsx)(f.A, {
            crossOrigin: null,
            alt: null != t.alt && "" !== t.alt ? t.alt : y.intl.string(y.t.FlNoSV),
            src: n,
            poster: r,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholderVersion,
            autoplay: l,
            initialActive: l,
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
var E = n(202091),
    j = n(765671),
    v = n(267102),
    C = n(700331);
function I(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: r, offset: l, delta: a } = e,
        o = (i - t) / 2 + l.x,
        s = (r - n) / 2 + l.y,
        u = (i + t) / 2 + l.x,
        d = (r + n) / 2 + l.y,
        { x: c, y: h } = l;
    return (
        t > i && ((c += a.x), o + a.x > 0 && (c = (t - i) / 2), u + a.x < i && (c = (i - t) / 2)),
        n > r && ((h += a.y), s + a.y > 0 && (h = (n - r) / 2), d + a.y < r && (h = (r - n) / 2)),
        { x: c, y: h }
    );
}
let M = r.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: l, y: a, setOffset: o, zoomed: s, setZoomed: u } = (0, p.Q)(),
        { ref: d, width: c, height: h } = (0, j.Ay)(),
        [m, g] = [c ?? 0, h ?? 0],
        f = (0, v._o)(),
        x = r.useRef(!1),
        [y, A] = r.useState({ x: 0, y: 0 });
    function M(e, t) {
        let i = I({
            width: m * n.goal,
            height: g * n.goal,
            viewportWidth: f.innerWidth,
            viewportHeight: f.innerHeight,
            offset: { x: l.goal, y: a.goal },
            delta: { x: e, y: t },
        });
        o(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(E.animated.div, {
        ref: d,
        onMouseDown: function (e) {
            s && 0 === e.button && (e.preventDefault(), (x.current = !0), A({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: function (e) {
            if (!s) {
                if (0 === e.button) {
                    (C.l.markActionPerformed(C.N.ZOOM_IN_IMAGE_PRESSED), u(!0));
                    let t = e.clientX - f.innerWidth / 2,
                        i = e.clientY - f.innerHeight / 2,
                        r = I({
                            width: m * n.goal,
                            height: g * n.goal,
                            viewportWidth: f.innerWidth,
                            viewportHeight: f.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    o(r.x, r.y);
                }
                return;
            }
            ((e.clientX - y.x) ** 2 + (e.clientY - y.y) ** 2 < 400 &&
                (C.l.markActionPerformed(C.N.ZOOM_OUT_IMAGE_PRESSED), u(!1)),
                (x.current = !1));
        },
        onMouseMove: (e) => x.current && M(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && M(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (x.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: l, y: a, cursor: s ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var S = n(652215),
    N = n(516653),
    w = n(952306);
function V(e, t) {
    return {
        ...e,
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, l.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function P(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let O = r.memo(function (e) {
    var t, n, r, o, f;
    let x,
        { media: y, obscured: E = !1, maxWidth: j, maxHeight: v, onContextMenu: C } = e,
        { width: I, height: V, url: O, proxyUrl: b, alt: T, type: _, maxWidth: D, maxHeight: R, clip: U, ...L } = y,
        { zoomed: k } = (0, p.Q)(),
        F = (function (e) {
            let { clip: t, sourceMetadata: n } = e;
            if (null != t) return t;
            if (n?.identifier?.type !== "attachment" || null == n.message) return null;
            let i = n.identifier.attachmentId,
                r = n.message.attachments.find((e) => e.id === i);
            return null != r && (0, l.Lt)(r.flags ?? 0, S.sbO.IS_CLIP) ? r : null;
        })(y),
        H =
            ((t = k),
            (n = O),
            (r = b),
            (o = y.contentType),
            (f = y.originalContentType),
            t && g.A.isDiscordAssetUrl(n, o, f) ? (0, d.XW)(n, o, f) : (0, h.E)({ proxyURL: r, url: n })),
        W = null != I && 0 !== I && null != V && 0 !== V;
    if ("VIDEO" === _ && W && null != b) {
        let e = y.poster ?? P(b);
        if (null == e) return null;
        if (null != F)
            return (0, i.jsx)(a.A, {
                attachment: F,
                src: H,
                posterUrl: e,
                channelId: y.sourceMetadata?.message?.channel_id,
                maxWidth: j,
                maxHeight: v,
                messageId: y.sourceMetadata?.message?.id,
                initialTimeSec: y.initialTimeSec,
                autoPlay: y.autoPlay ?? !E,
                autoMute: "function" == typeof y.autoMute ? y.autoMute() : (y.autoMute ?? (0, m.uj)()),
                volume: (0, m.GD)(),
                onContextMenu: C,
                onPlay: y.onPlay ?? void 0,
                onEnded: y.onEnded ?? void 0,
                onVolumeChange: m.oc,
                onMutedChange: m.y5,
            });
        let t = y.renderLinkComponent ?? c.bU,
            n = y.autoPlay ?? !E;
        function G() {
            return (0, i.jsx)(u.A, {
                ...L,
                src: H,
                width: I,
                height: V,
                maxWidth: j,
                maxHeight: v,
                poster: e,
                naturalWidth: I,
                naturalHeight: V,
                volume: m.v1,
                autoMute: y.autoMute ?? m.uj,
                onVolumeChange: m.ls,
                onMute: m.y5,
                renderLinkComponent: t,
                autoPlay: n,
                alt: T,
                onContextMenu: C,
                disableArrowKeySeek: !0,
            });
        }
        return y.sourceMetadata?.identifier?.type === "attachment" && (0, N.T)(I, V)
            ? (0, i.jsx)(A, {
                  media: y,
                  src: H,
                  posterUrl: e,
                  autoPlay: n,
                  maxWidth: j,
                  maxHeight: v,
                  onContextMenu: C,
                  renderLegacy: G,
              })
            : G();
    }
    return (
        "IMAGE" === _ &&
            (x = W
                ? (0, i.jsx)(s.Ay, {
                      ...L,
                      src: H,
                      width: I,
                      height: V,
                      maxWidth: j,
                      maxHeight: v,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: w.$_,
                      animated: !E && y.animated,
                      autoPlay: !E,
                      alt: T,
                      onContextMenu: C,
                  })
                : (0, i.jsx)("img", {
                      src: H,
                      alt: T,
                      onContextMenu: C,
                      className: w.xx,
                      style: { maxWidth: j, maxHeight: v },
                  })),
        null != x ? (0, i.jsx)(M, { children: x }) : null
    );
});
