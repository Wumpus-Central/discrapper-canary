n.d(t, { VZ: () => j, Ay: () => E, FX: () => C }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(665260),
    a = n(163281),
    s = n(731068),
    o = n(619517),
    d = n(248643),
    u = n(803316),
    c = n(34337),
    h = n(644447),
    m = n(587481),
    p = n(998218),
    g = n(454290),
    x = n(785651),
    f = n(765671),
    A = n(700331);
function y(e) {
    let { width: t, height: n, offset: i, delta: l } = e,
        r = t > window.innerWidth,
        a = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + i.x,
        o = (window.innerHeight - n) / 2 + i.y,
        d = (window.innerWidth + t) / 2 + i.x,
        u = (window.innerHeight + n) / 2 + i.y,
        { x: c, y: h } = i;
    return (
        r &&
            ((c += l.x),
            s + l.x > 0 && (c = (t - window.innerWidth) / 2),
            d + l.x < window.innerWidth && (c = (window.innerWidth - t) / 2)),
        a &&
            ((h += l.y),
            o + l.y > 0 && (h = (n - window.innerHeight) / 2),
            u + l.y < window.innerHeight && (h = (window.innerHeight - n) / 2)),
        { x: c, y: h }
    );
}
let w = l.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: r, y: a, setOffset: s, zoomed: o, setZoomed: d } = (0, g.Q)(),
        { ref: u, width: c, height: h } = (0, f.Ay)(),
        [m, p] = [c ?? 0, h ?? 0],
        w = l.useRef(!1),
        [I, v] = l.useState({ x: 0, y: 0 }),
        C = (e, t) => {
            let i = y({
                width: m * n.goal,
                height: p * n.goal,
                offset: { x: r.goal, y: a.goal },
                delta: { x: e, y: t },
            });
            s(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(x.animated.div, {
        ref: u,
        onMouseDown: (e) => {
            o && 0 === e.button && (e.preventDefault(), (w.current = !0), v({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!o) {
                if (0 === e.button) {
                    A.l.markActionPerformed(A.N.ZOOM_IN_IMAGE_PRESSED), d(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        l = y({
                            width: m * n.goal,
                            height: p * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    s(l.x, l.y);
                }
                return;
            }
            (e.clientX - I.x) ** 2 + (e.clientY - I.y) ** 2 < 400 &&
                (A.l.markActionPerformed(A.N.ZOOM_OUT_IMAGE_PRESSED), d(!1)),
                (w.current = !1);
        },
        onMouseMove: (e) => w.current && C(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && C(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (w.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: r, y: a, cursor: o ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var I = n(652215),
    v = n(610995);
function C(e, t) {
    return {
        ...e,
        type: (0, s.FE)(e),
        original: e.url,
        srcIsAnimated: (0, r.Lt)(e.flags, s.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function j(e) {
    let t = p.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let E = l.memo(function (e) {
    var t, n, l, s, x;
    let f,
        { media: A, obscured: y = !1, maxWidth: C, maxHeight: E, onContextMenu: M } = e,
        { width: _, height: S, url: N, proxyUrl: b, alt: O, type: T, maxWidth: V, maxHeight: P, ...D } = A,
        { zoomed: k } = (0, g.Q)(),
        U = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, r.Lt)(n.flags ?? 0, I.sbO.IS_CLIP) ? n : null;
        })(A.sourceMetadata),
        L =
            ((t = k),
            (n = N),
            (l = b),
            (s = A.contentType),
            (x = A.originalContentType),
            t && p.A.isDiscordAssetUrl(n, s, x) ? (0, u.XW)(n, s, x) : (0, h.E)({ proxyURL: l, url: n })),
        R = null != _ && 0 !== _ && null != S && 0 !== S;
    if ("VIDEO" === T && R && null != b) {
        let e = A.poster ?? j(b);
        if (null == e) return null;
        if (null != U)
            return (0, i.jsx)(a.A, {
                attachment: U,
                src: L,
                posterUrl: e,
                channelId: A.sourceMetadata?.message?.channel_id,
                maxWidth: C,
                maxHeight: E,
                active: !0,
                messageId: A.sourceMetadata?.message?.id,
                autoPlay: A.autoPlay ?? !y,
                autoMute: "function" == typeof A.autoMute ? A.autoMute() : (A.autoMute ?? (0, m.uj)()),
                volume: (0, m.v1)(),
                onContextMenu: M,
                onVolumeChange: m.ls,
                onMutedChange: m.y5,
            });
        let t = A.renderLinkComponent ?? c.bU;
        return (0, i.jsx)(d.A, {
            ...D,
            src: L,
            width: _,
            height: S,
            maxWidth: C,
            maxHeight: E,
            poster: e,
            naturalWidth: _,
            naturalHeight: S,
            volume: m.v1,
            autoMute: A.autoMute ?? m.uj,
            onVolumeChange: m.ls,
            onMute: m.y5,
            renderLinkComponent: t,
            autoPlay: A.autoPlay ?? !y,
            alt: O,
            onContextMenu: M,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === T &&
            (f = R
                ? (0, i.jsx)(o.Ay, {
                      ...D,
                      src: L,
                      width: _,
                      height: S,
                      maxWidth: C,
                      maxHeight: E,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: v.$_,
                      animated: !y && A.animated,
                      autoPlay: !y,
                      alt: O,
                      onContextMenu: M,
                  })
                : (0, i.jsx)("img", {
                      src: L,
                      alt: O,
                      onContextMenu: M,
                      className: v.xx,
                      style: { maxWidth: C, maxHeight: E },
                  })),
        null != f ? (0, i.jsx)(w, { children: f }) : null
    );
});
