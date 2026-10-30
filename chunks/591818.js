(n.d(t, { VZ: () => H, Ay: () => T, FX: () => V }), n(938796));
var i = n(477900),
    a = n(582128),
    l = n(665260),
    o = n(682176),
    r = n(731068),
    u = n(619517),
    s = n(248643),
    d = n(803316),
    c = n(44788),
    h = n(644447),
    m = n(587481),
    g = n(998218),
    y = n(454290),
    f = n(447991),
    p = n(925056),
    x = n(678917),
    M = n(534531),
    v = n(777501),
    S = n(105292);
function w(e) {
    let {
            media: t,
            src: n,
            posterUrl: a,
            autoPlay: l,
            maxWidth: o,
            maxHeight: r,
            onContextMenu: u,
            renderLegacy: s,
        } = e,
        { useDiscordVideoPlayer: d } = (0, v.r)({ location: "MediaViewerMedia" });
    if (!d) return (0, i.jsx)(i.Fragment, { children: s() });
    let { autoMute: c } = t,
        h = "function" == typeof c ? c() : (c ?? (0, m.uj)()),
        g = null != t.width && null != t.height && t.height > t.width ? "portrait" : "landscape";
    return (0, i.jsx)("div", {
        style: { width: o, height: r, display: "flex" },
        onClick: (e) => e.stopPropagation(),
        onContextMenu: u,
        children: (0, i.jsx)(f.A, {
            crossOrigin: null,
            alt: null != t.alt && "" !== t.alt ? t.alt : S.intl.string(S.t.FlNoSV),
            src: n,
            poster: a,
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
var C = n(941143),
    A = n(765671),
    P = n(267102),
    E = n(700331);
function I(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: a, offset: l, delta: o } = e,
        r = (i - t) / 2 + l.x,
        u = (a - n) / 2 + l.y,
        s = (i + t) / 2 + l.x,
        d = (a + n) / 2 + l.y,
        { x: c, y: h } = l;
    return (
        t > i && ((c += o.x), r + o.x > 0 && (c = (t - i) / 2), s + o.x < i && (c = (i - t) / 2)),
        n > a && ((h += o.y), u + o.y > 0 && (h = (n - a) / 2), d + o.y < a && (h = (a - n) / 2)),
        { x: c, y: h }
    );
}
let W = a.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: l, y: o, setOffset: r, zoomed: u, setZoomed: s } = (0, y.Q)(),
        { ref: d, width: c, height: h } = (0, A.Ay)(),
        [m, g] = [c ?? 0, h ?? 0],
        f = (0, P._o)(),
        p = a.useRef(!1),
        [x, M] = a.useState({ x: 0, y: 0 });
    function v(e, t) {
        let i = I({
            width: m * n.goal,
            height: g * n.goal,
            viewportWidth: f.innerWidth,
            viewportHeight: f.innerHeight,
            offset: { x: l.goal, y: o.goal },
            delta: { x: e, y: t },
        });
        r(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(C.animated.div, {
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
                        a = I({
                            width: m * n.goal,
                            height: g * n.goal,
                            viewportWidth: f.innerWidth,
                            viewportHeight: f.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    r(a.x, a.y);
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
        style: { scale: n, x: l, y: o, cursor: u ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var k = n(652215),
    _ = n(516653),
    j = n(952306);
function V(e, t) {
    return {
        ...e,
        type: (0, r.FE)(e),
        original: e.url,
        srcIsAnimated: (0, l.Lt)(e.flags, r.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function H(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let T = a.memo(function (e) {
    var t, n, a, r, f;
    let p,
        { media: x, obscured: M = !1, maxWidth: v, maxHeight: S, onContextMenu: C } = e,
        { width: A, height: P, url: E, proxyUrl: I, alt: V, type: T, maxWidth: L, maxHeight: O, clip: b, ...D } = x,
        { zoomed: U } = (0, y.Q)(),
        N = (function (e) {
            let { clip: t, sourceMetadata: n } = e;
            if (null != t) return t;
            if (n?.identifier?.type !== "attachment" || null == n.message) return null;
            let i = n.identifier.attachmentId,
                a = n.message.attachments.find((e) => e.id === i);
            return null != a && (0, l.Lt)(a.flags ?? 0, k.sbO.IS_CLIP) ? a : null;
        })(x),
        R =
            ((t = U),
            (n = E),
            (a = I),
            (r = x.contentType),
            (f = x.originalContentType),
            t && g.A.isDiscordAssetUrl(n, r, f) ? (0, d.XW)(n, r, f) : (0, h.E)({ proxyURL: a, url: n })),
        X = null != A && 0 !== A && null != P && 0 !== P;
    if ("VIDEO" === T && X && null != I) {
        let e = x.poster ?? H(I);
        if (null == e) return null;
        if (null != N)
            return (0, i.jsx)(o.A, {
                attachment: N,
                src: R,
                posterUrl: e,
                channelId: x.sourceMetadata?.message?.channel_id,
                maxWidth: v,
                maxHeight: S,
                messageId: x.sourceMetadata?.message?.id,
                initialTimeSec: x.initialTimeSec,
                autoPlay: x.autoPlay ?? !M,
                autoMute: "function" == typeof x.autoMute ? x.autoMute() : (x.autoMute ?? (0, m.uj)()),
                volume: (0, m.GD)(),
                onContextMenu: C,
                onPlay: x.onPlay ?? void 0,
                onEnded: x.onEnded ?? void 0,
                onVolumeChange: m.oc,
                onMutedChange: m.y5,
            });
        let t = x.renderLinkComponent ?? c.bU,
            n = x.autoPlay ?? !M;
        function F() {
            return (0, i.jsx)(s.A, {
                ...D,
                src: R,
                width: A,
                height: P,
                maxWidth: v,
                maxHeight: S,
                poster: e,
                naturalWidth: A,
                naturalHeight: P,
                volume: m.v1,
                autoMute: x.autoMute ?? m.uj,
                onVolumeChange: m.ls,
                onMute: m.y5,
                renderLinkComponent: t,
                autoPlay: n,
                alt: V,
                onContextMenu: C,
                disableArrowKeySeek: !0,
                showPlaybackSpeedControl: x.sourceMetadata?.message != null,
            });
        }
        return x.sourceMetadata?.identifier?.type === "attachment" && (0, _.T)(A, P)
            ? (0, i.jsx)(w, {
                  media: x,
                  src: R,
                  posterUrl: e,
                  autoPlay: n,
                  maxWidth: v,
                  maxHeight: S,
                  onContextMenu: C,
                  renderLegacy: F,
              })
            : F();
    }
    return (
        "IMAGE" === T &&
            (p = X
                ? (0, i.jsx)(u.Ay, {
                      ...D,
                      src: R,
                      width: A,
                      height: P,
                      maxWidth: v,
                      maxHeight: S,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: j.$_,
                      animated: !M && x.animated,
                      autoPlay: !M,
                      alt: V,
                      onContextMenu: C,
                  })
                : (0, i.jsx)("img", {
                      src: R,
                      alt: V,
                      onContextMenu: C,
                      className: j.xx,
                      style: { maxWidth: v, maxHeight: S },
                  })),
        null != p ? (0, i.jsx)(W, { children: p }) : null
    );
});
