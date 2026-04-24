n.d(t, { VZ: () => S, Ay: () => I, FX: () => b }), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(665260),
    l = n(672477),
    s = n(958742),
    o = n(731068),
    d = n(619517),
    u = n(248643),
    h = n(803316),
    c = n(34337),
    m = n(644447),
    g = n(587481),
    p = n(998218),
    f = n(454290),
    A = n(419354),
    x = n(765671),
    y = n(700331);
function w(e) {
    let { width: t, height: n, offset: i, delta: a } = e,
        r = t > window.innerWidth,
        l = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + i.x,
        o = (window.innerHeight - n) / 2 + i.y,
        d = (window.innerWidth + t) / 2 + i.x,
        u = (window.innerHeight + n) / 2 + i.y,
        { x: h, y: c } = i;
    return (
        r &&
            ((h += a.x),
            s + a.x > 0 && (h = (t - window.innerWidth) / 2),
            d + a.x < window.innerWidth && (h = (window.innerWidth - t) / 2)),
        l &&
            ((c += a.y),
            o + a.y > 0 && (c = (n - window.innerHeight) / 2),
            u + a.y < window.innerHeight && (c = (window.innerHeight - n) / 2)),
        { x: h, y: c }
    );
}
let _ = a.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: r, y: l, setOffset: s, zoomed: o, setZoomed: d } = (0, f.Q)(),
        { ref: u, width: h, height: c } = (0, x.Ay)(),
        [m, g] = [h ?? 0, c ?? 0],
        p = a.useRef(!1),
        [_, E] = a.useState({ x: 0, y: 0 }),
        C = (e, t) => {
            let i = w({
                width: m * n.goal,
                height: g * n.goal,
                offset: { x: r.goal, y: l.goal },
                delta: { x: e, y: t },
            });
            s(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(A.animated.div, {
        ref: u,
        onMouseDown: (e) => {
            o && 0 === e.button && (e.preventDefault(), (p.current = !0), E({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!o) {
                if (0 === e.button) {
                    y.l.markActionPerformed(y.N.ZOOM_IN_IMAGE_PRESSED), d(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        a = w({
                            width: m * n.goal,
                            height: g * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    s(a.x, a.y);
                }
                return;
            }
            (e.clientX - _.x) ** 2 + (e.clientY - _.y) ** 2 < 400 &&
                (y.l.markActionPerformed(y.N.ZOOM_OUT_IMAGE_PRESSED), d(!1)),
                (p.current = !1);
        },
        onMouseMove: (e) => p.current && C(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && C(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (p.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: r, y: l, cursor: o ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var E = n(652215),
    C = n(610995);
function b(e, t) {
    return {
        ...e,
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function S(e) {
    let t = p.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let I = a.memo(function (e) {
    var t, n, a, o, A;
    let x,
        { media: y, obscured: w = !1, maxWidth: b, maxHeight: I, onContextMenu: v } = e,
        { width: M, height: j, url: T, proxyUrl: N, alt: O, type: P, maxWidth: D, maxHeight: R, ...L } = y,
        { zoomed: U } = (0, f.Q)(),
        { newEmbedUi: V } = l.Q.useConfig({ location: "MediaViewerMedia" }),
        k = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, r.Lt)(n.flags ?? 0, E.sbO.IS_CLIP) ? n : null;
        })(y.sourceMetadata),
        H =
            ((t = U),
            (n = T),
            (a = N),
            (o = y.contentType),
            (A = y.originalContentType),
            t && p.A.isDiscordAssetUrl(n, o, A) ? (0, h.XW)(n, o, A) : (0, m.E)({ proxyURL: a, url: n })),
        F = null != M && 0 !== M && null != j && 0 !== j;
    if ("VIDEO" === P && F && null != N) {
        let e = y.poster ?? S(N);
        if (null == e) return null;
        if (null != k && V)
            return (0, i.jsx)(s.A, {
                attachment: k,
                src: H,
                posterUrl: e,
                channelId: y.sourceMetadata?.message?.channel_id,
                maxWidth: b,
                maxHeight: I,
                active: !0,
                messageId: y.sourceMetadata?.message?.id,
                autoPlay: y.autoPlay ?? !w,
                autoMute: "function" == typeof y.autoMute ? y.autoMute() : (y.autoMute ?? (0, g.uj)()),
                volume: (0, g.v1)(),
                onContextMenu: v,
                onVolumeChange: g.ls,
                onMutedChange: g.y5,
            });
        let t = y.renderLinkComponent ?? c.bU;
        return (0, i.jsx)(u.A, {
            ...L,
            src: H,
            width: M,
            height: j,
            maxWidth: b,
            maxHeight: I,
            poster: e,
            naturalWidth: M,
            naturalHeight: j,
            volume: g.v1,
            autoMute: y.autoMute ?? g.uj,
            onVolumeChange: g.ls,
            onMute: g.y5,
            renderLinkComponent: t,
            autoPlay: y.autoPlay ?? !w,
            alt: O,
            onContextMenu: v,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === P &&
            (x = F
                ? (0, i.jsx)(d.Ay, {
                      ...L,
                      src: H,
                      width: M,
                      height: j,
                      maxWidth: b,
                      maxHeight: I,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: C.$_,
                      animated: !w && y.animated,
                      autoPlay: !w,
                      alt: O,
                      onContextMenu: v,
                  })
                : (0, i.jsx)("img", {
                      src: H,
                      alt: O,
                      onContextMenu: v,
                      className: C.xx,
                      style: { maxWidth: b, maxHeight: I },
                  })),
        null != x ? (0, i.jsx)(_, { children: x }) : null
    );
});
