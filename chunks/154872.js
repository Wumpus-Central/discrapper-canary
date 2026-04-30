n.d(t, { VZ: () => j, Ay: () => E, FX: () => v }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(665260),
    a = n(958742),
    o = n(731068),
    s = n(619517),
    d = n(248643),
    u = n(803316),
    h = n(34337),
    c = n(644447),
    m = n(587481),
    p = n(998218),
    g = n(454290),
    x = n(785651),
    A = n(765671),
    f = n(700331);
function y(e) {
    let { width: t, height: n, offset: i, delta: l } = e,
        r = t > window.innerWidth,
        a = n > window.innerHeight,
        o = (window.innerWidth - t) / 2 + i.x,
        s = (window.innerHeight - n) / 2 + i.y,
        d = (window.innerWidth + t) / 2 + i.x,
        u = (window.innerHeight + n) / 2 + i.y,
        { x: h, y: c } = i;
    return (
        r &&
            ((h += l.x),
            o + l.x > 0 && (h = (t - window.innerWidth) / 2),
            d + l.x < window.innerWidth && (h = (window.innerWidth - t) / 2)),
        a &&
            ((c += l.y),
            s + l.y > 0 && (c = (n - window.innerHeight) / 2),
            u + l.y < window.innerHeight && (c = (window.innerHeight - n) / 2)),
        { x: h, y: c }
    );
}
let w = l.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: r, y: a, setOffset: o, zoomed: s, setZoomed: d } = (0, g.Q)(),
        { ref: u, width: h, height: c } = (0, A.Ay)(),
        [m, p] = [h ?? 0, c ?? 0],
        w = l.useRef(!1),
        [C, I] = l.useState({ x: 0, y: 0 }),
        v = (e, t) => {
            let i = y({
                width: m * n.goal,
                height: p * n.goal,
                offset: { x: r.goal, y: a.goal },
                delta: { x: e, y: t },
            });
            o(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(x.animated.div, {
        ref: u,
        onMouseDown: (e) => {
            s && 0 === e.button && (e.preventDefault(), (w.current = !0), I({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!s) {
                if (0 === e.button) {
                    f.l.markActionPerformed(f.N.ZOOM_IN_IMAGE_PRESSED), d(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        l = y({
                            width: m * n.goal,
                            height: p * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    o(l.x, l.y);
                }
                return;
            }
            (e.clientX - C.x) ** 2 + (e.clientY - C.y) ** 2 < 400 &&
                (f.l.markActionPerformed(f.N.ZOOM_OUT_IMAGE_PRESSED), d(!1)),
                (w.current = !1);
        },
        onMouseMove: (e) => w.current && v(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && v(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (w.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: r, y: a, cursor: s ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var C = n(652215),
    I = n(610995);
function v(e, t) {
    return {
        ...e,
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function j(e) {
    let t = p.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let E = l.memo(function (e) {
    var t, n, l, o, x;
    let A,
        { media: f, obscured: y = !1, maxWidth: v, maxHeight: E, onContextMenu: M } = e,
        { width: S, height: _, url: N, proxyUrl: O, alt: b, type: P, maxWidth: V, maxHeight: T, ...D } = f,
        { zoomed: L } = (0, g.Q)(),
        U = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, r.Lt)(n.flags ?? 0, C.sbO.IS_CLIP) ? n : null;
        })(f.sourceMetadata),
        R =
            ((t = L),
            (n = N),
            (l = O),
            (o = f.contentType),
            (x = f.originalContentType),
            t && p.A.isDiscordAssetUrl(n, o, x) ? (0, u.XW)(n, o, x) : (0, c.E)({ proxyURL: l, url: n })),
        k = null != S && 0 !== S && null != _ && 0 !== _;
    if ("VIDEO" === P && k && null != O) {
        let e = f.poster ?? j(O);
        if (null == e) return null;
        if (null != U)
            return (0, i.jsx)(a.A, {
                attachment: U,
                src: R,
                posterUrl: e,
                channelId: f.sourceMetadata?.message?.channel_id,
                maxWidth: v,
                maxHeight: E,
                active: !0,
                messageId: f.sourceMetadata?.message?.id,
                autoPlay: f.autoPlay ?? !y,
                autoMute: "function" == typeof f.autoMute ? f.autoMute() : (f.autoMute ?? (0, m.uj)()),
                volume: (0, m.v1)(),
                onContextMenu: M,
                onVolumeChange: m.ls,
                onMutedChange: m.y5,
            });
        let t = f.renderLinkComponent ?? h.bU;
        return (0, i.jsx)(d.A, {
            ...D,
            src: R,
            width: S,
            height: _,
            maxWidth: v,
            maxHeight: E,
            poster: e,
            naturalWidth: S,
            naturalHeight: _,
            volume: m.v1,
            autoMute: f.autoMute ?? m.uj,
            onVolumeChange: m.ls,
            onMute: m.y5,
            renderLinkComponent: t,
            autoPlay: f.autoPlay ?? !y,
            alt: b,
            onContextMenu: M,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === P &&
            (A = k
                ? (0, i.jsx)(s.Ay, {
                      ...D,
                      src: R,
                      width: S,
                      height: _,
                      maxWidth: v,
                      maxHeight: E,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: I.$_,
                      animated: !y && f.animated,
                      autoPlay: !y,
                      alt: b,
                      onContextMenu: M,
                  })
                : (0, i.jsx)("img", {
                      src: R,
                      alt: b,
                      onContextMenu: M,
                      className: I.xx,
                      style: { maxWidth: v, maxHeight: E },
                  })),
        null != A ? (0, i.jsx)(w, { children: A }) : null
    );
});
