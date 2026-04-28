n.d(t, { VZ: () => C, Ay: () => v, FX: () => j }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(665260),
    a = n(958742),
    s = n(731068),
    o = n(619517),
    u = n(248643),
    d = n(803316),
    h = n(34337),
    c = n(644447),
    m = n(587481),
    g = n(998218),
    p = n(454290),
    x = n(123924),
    f = n(765671),
    A = n(700331);
function y(e) {
    let { width: t, height: n, offset: i, delta: r } = e,
        l = t > window.innerWidth,
        a = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + i.x,
        o = (window.innerHeight - n) / 2 + i.y,
        u = (window.innerWidth + t) / 2 + i.x,
        d = (window.innerHeight + n) / 2 + i.y,
        { x: h, y: c } = i;
    return (
        l &&
            ((h += r.x),
            s + r.x > 0 && (h = (t - window.innerWidth) / 2),
            u + r.x < window.innerWidth && (h = (window.innerWidth - t) / 2)),
        a &&
            ((c += r.y),
            o + r.y > 0 && (c = (n - window.innerHeight) / 2),
            d + r.y < window.innerHeight && (c = (window.innerHeight - n) / 2)),
        { x: h, y: c }
    );
}
let w = r.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: l, y: a, setOffset: s, zoomed: o, setZoomed: u } = (0, p.Q)(),
        { ref: d, width: h, height: c } = (0, f.Ay)(),
        [m, g] = [h ?? 0, c ?? 0],
        w = r.useRef(!1),
        [E, I] = r.useState({ x: 0, y: 0 }),
        j = (e, t) => {
            let i = y({
                width: m * n.goal,
                height: g * n.goal,
                offset: { x: l.goal, y: a.goal },
                delta: { x: e, y: t },
            });
            s(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(x.animated.div, {
        ref: d,
        onMouseDown: (e) => {
            o && 0 === e.button && (e.preventDefault(), (w.current = !0), I({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!o) {
                if (0 === e.button) {
                    A.l.markActionPerformed(A.N.ZOOM_IN_IMAGE_PRESSED), u(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        r = y({
                            width: m * n.goal,
                            height: g * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    s(r.x, r.y);
                }
                return;
            }
            (e.clientX - E.x) ** 2 + (e.clientY - E.y) ** 2 < 400 &&
                (A.l.markActionPerformed(A.N.ZOOM_OUT_IMAGE_PRESSED), u(!1)),
                (w.current = !1);
        },
        onMouseMove: (e) => w.current && j(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && j(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (w.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: l, y: a, cursor: o ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var E = n(652215),
    I = n(610995);
function j(e, t) {
    return {
        ...e,
        type: (0, s.FE)(e),
        original: e.url,
        srcIsAnimated: (0, l.Lt)(e.flags, s.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function C(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let v = r.memo(function (e) {
    var t, n, r, s, x;
    let f,
        { media: A, obscured: y = !1, maxWidth: j, maxHeight: v, onContextMenu: M } = e,
        { width: N, height: O, url: S, proxyUrl: V, alt: _, type: b, maxWidth: D, maxHeight: T, ...L } = A,
        { zoomed: U } = (0, p.Q)(),
        P = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, l.Lt)(n.flags ?? 0, E.sbO.IS_CLIP) ? n : null;
        })(A.sourceMetadata),
        R =
            ((t = U),
            (n = S),
            (r = V),
            (s = A.contentType),
            (x = A.originalContentType),
            t && g.A.isDiscordAssetUrl(n, s, x) ? (0, d.XW)(n, s, x) : (0, c.E)({ proxyURL: r, url: n })),
        k = null != N && 0 !== N && null != O && 0 !== O;
    if ("VIDEO" === b && k && null != V) {
        let e = A.poster ?? C(V);
        if (null == e) return null;
        if (null != P)
            return (0, i.jsx)(a.A, {
                attachment: P,
                src: R,
                posterUrl: e,
                channelId: A.sourceMetadata?.message?.channel_id,
                maxWidth: j,
                maxHeight: v,
                active: !0,
                messageId: A.sourceMetadata?.message?.id,
                autoPlay: A.autoPlay ?? !y,
                autoMute: "function" == typeof A.autoMute ? A.autoMute() : (A.autoMute ?? (0, m.uj)()),
                volume: (0, m.v1)(),
                onContextMenu: M,
                onVolumeChange: m.ls,
                onMutedChange: m.y5,
            });
        let t = A.renderLinkComponent ?? h.bU;
        return (0, i.jsx)(u.A, {
            ...L,
            src: R,
            width: N,
            height: O,
            maxWidth: j,
            maxHeight: v,
            poster: e,
            naturalWidth: N,
            naturalHeight: O,
            volume: m.v1,
            autoMute: A.autoMute ?? m.uj,
            onVolumeChange: m.ls,
            onMute: m.y5,
            renderLinkComponent: t,
            autoPlay: A.autoPlay ?? !y,
            alt: _,
            onContextMenu: M,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === b &&
            (f = k
                ? (0, i.jsx)(o.Ay, {
                      ...L,
                      src: R,
                      width: N,
                      height: O,
                      maxWidth: j,
                      maxHeight: v,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: I.$_,
                      animated: !y && A.animated,
                      autoPlay: !y,
                      alt: _,
                      onContextMenu: M,
                  })
                : (0, i.jsx)("img", {
                      src: R,
                      alt: _,
                      onContextMenu: M,
                      className: I.xx,
                      style: { maxWidth: j, maxHeight: v },
                  })),
        null != f ? (0, i.jsx)(w, { children: f }) : null
    );
});
