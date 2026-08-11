n.d(t, { VZ: () => M, Ay: () => N, FX: () => C }), n(938796);
var i = n(477900),
    r = n(582128),
    l = n(665260),
    a = n(682176),
    s = n(731068),
    o = n(619517),
    u = n(248643),
    d = n(803316),
    h = n(966245),
    c = n(644447),
    m = n(587481),
    g = n(998218),
    p = n(454290),
    x = n(682577),
    f = n(765671),
    y = n(267102),
    A = n(700331);
function E(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: r, offset: l, delta: a } = e,
        s = (i - t) / 2 + l.x,
        o = (r - n) / 2 + l.y,
        u = (i + t) / 2 + l.x,
        d = (r + n) / 2 + l.y,
        { x: h, y: c } = l;
    return (
        t > i && ((h += a.x), s + a.x > 0 && (h = (t - i) / 2), u + a.x < i && (h = (i - t) / 2)),
        n > r && ((c += a.y), o + a.y > 0 && (c = (n - r) / 2), d + a.y < r && (c = (r - n) / 2)),
        { x: h, y: c }
    );
}
let I = r.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: l, y: a, setOffset: s, zoomed: o, setZoomed: u } = (0, p.Q)(),
        { ref: d, width: h, height: c } = (0, f.Ay)(),
        [m, g] = [h ?? 0, c ?? 0],
        I = (0, y._o)(),
        j = r.useRef(!1),
        [v, C] = r.useState({ x: 0, y: 0 });
    function M(e, t) {
        let i = E({
            width: m * n.goal,
            height: g * n.goal,
            viewportWidth: I.innerWidth,
            viewportHeight: I.innerHeight,
            offset: { x: l.goal, y: a.goal },
            delta: { x: e, y: t },
        });
        s(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(x.animated.div, {
        ref: d,
        onMouseDown: function (e) {
            o && 0 === e.button && (e.preventDefault(), (j.current = !0), C({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: function (e) {
            if (!o) {
                if (0 === e.button) {
                    A.l.markActionPerformed(A.N.ZOOM_IN_IMAGE_PRESSED), u(!0);
                    let t = e.clientX - I.innerWidth / 2,
                        i = e.clientY - I.innerHeight / 2,
                        r = E({
                            width: m * n.goal,
                            height: g * n.goal,
                            viewportWidth: I.innerWidth,
                            viewportHeight: I.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    s(r.x, r.y);
                }
                return;
            }
            (e.clientX - v.x) ** 2 + (e.clientY - v.y) ** 2 < 400 &&
                (A.l.markActionPerformed(A.N.ZOOM_OUT_IMAGE_PRESSED), u(!1)),
                (j.current = !1);
        },
        onMouseMove: (e) => j.current && M(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && M(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (j.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: l, y: a, cursor: o ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var j = n(652215),
    v = n(865451);
function C(e, t) {
    return {
        ...e,
        type: (0, s.FE)(e),
        original: e.url,
        srcIsAnimated: (0, l.Lt)(e.flags, s.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function M(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let N = r.memo(function (e) {
    var t, n, r, s, x;
    let f,
        { media: y, obscured: A = !1, maxWidth: E, maxHeight: C, onContextMenu: N } = e,
        { width: w, height: O, url: S, proxyUrl: _, alt: V, type: D, maxWidth: b, maxHeight: T, ...L } = y,
        { zoomed: P } = (0, p.Q)(),
        U = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, l.Lt)(n.flags ?? 0, j.sbO.IS_CLIP) ? n : null;
        })(y.sourceMetadata),
        R =
            ((t = P),
            (n = S),
            (r = _),
            (s = y.contentType),
            (x = y.originalContentType),
            t && g.A.isDiscordAssetUrl(n, s, x) ? (0, d.XW)(n, s, x) : (0, c.E)({ proxyURL: r, url: n })),
        k = null != w && 0 !== w && null != O && 0 !== O;
    if ("VIDEO" === D && k && null != _) {
        let e = y.poster ?? M(_);
        if (null == e) return null;
        if (null != U)
            return (0, i.jsx)(a.A, {
                attachment: U,
                src: R,
                posterUrl: e,
                channelId: y.sourceMetadata?.message?.channel_id,
                maxWidth: E,
                maxHeight: C,
                messageId: y.sourceMetadata?.message?.id,
                autoPlay: y.autoPlay ?? !A,
                autoMute: "function" == typeof y.autoMute ? y.autoMute() : (y.autoMute ?? (0, m.uj)()),
                volume: (0, m.GD)(),
                onContextMenu: N,
                onPlay: y.onPlay ?? void 0,
                onVolumeChange: m.oc,
                onMutedChange: m.y5,
            });
        let t = y.renderLinkComponent ?? h.bU;
        return (0, i.jsx)(u.A, {
            ...L,
            src: R,
            width: w,
            height: O,
            maxWidth: E,
            maxHeight: C,
            poster: e,
            naturalWidth: w,
            naturalHeight: O,
            volume: m.v1,
            autoMute: y.autoMute ?? m.uj,
            onVolumeChange: m.ls,
            onMute: m.y5,
            renderLinkComponent: t,
            autoPlay: y.autoPlay ?? !A,
            alt: V,
            onContextMenu: N,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === D &&
            (f = k
                ? (0, i.jsx)(o.Ay, {
                      ...L,
                      src: R,
                      width: w,
                      height: O,
                      maxWidth: E,
                      maxHeight: C,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: v.$_,
                      animated: !A && y.animated,
                      autoPlay: !A,
                      alt: V,
                      onContextMenu: N,
                  })
                : (0, i.jsx)("img", {
                      src: R,
                      alt: V,
                      onContextMenu: N,
                      className: v.xx,
                      style: { maxWidth: E, maxHeight: C },
                  })),
        null != f ? (0, i.jsx)(I, { children: f }) : null
    );
});
