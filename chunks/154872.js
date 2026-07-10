"use strict";
n.d(t, { VZ: () => C, Ay: () => R, FX: () => N }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(665260),
    s = n(348833),
    l = n(731068),
    o = n(619517),
    d = n(248643),
    c = n(803316),
    u = n(34337),
    _ = n(644447),
    E = n(587481),
    A = n(998218),
    h = n(454290),
    I = n(580929),
    f = n(765671),
    p = n(700331);
function T(e) {
    let { width: t, height: n, offset: i, delta: r } = e,
        a = t > window.innerWidth,
        s = n > window.innerHeight,
        l = (window.innerWidth - t) / 2 + i.x,
        o = (window.innerHeight - n) / 2 + i.y,
        d = (window.innerWidth + t) / 2 + i.x,
        c = (window.innerHeight + n) / 2 + i.y,
        { x: u, y: _ } = i;
    return (
        a &&
            ((u += r.x),
            l + r.x > 0 && (u = (t - window.innerWidth) / 2),
            d + r.x < window.innerWidth && (u = (window.innerWidth - t) / 2)),
        s &&
            ((_ += r.y),
            o + r.y > 0 && (_ = (n - window.innerHeight) / 2),
            c + r.y < window.innerHeight && (_ = (window.innerHeight - n) / 2)),
        { x: u, y: _ }
    );
}
let m = r.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: a, y: s, setOffset: l, zoomed: o, setZoomed: d } = (0, h.Q)(),
        { ref: c, width: u, height: _ } = (0, f.Ay)(),
        [E, A] = [u ?? 0, _ ?? 0],
        m = r.useRef(!1),
        [g, S] = r.useState({ x: 0, y: 0 });
    function N(e, t) {
        let i = T({ width: E * n.goal, height: A * n.goal, offset: { x: a.goal, y: s.goal }, delta: { x: e, y: t } });
        l(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(I.animated.div, {
        ref: c,
        onMouseDown: function (e) {
            o && 0 === e.button && (e.preventDefault(), (m.current = !0), S({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!o) {
                if (0 === e.button) {
                    p.l.markActionPerformed(p.N.ZOOM_IN_IMAGE_PRESSED), d(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        r = T({
                            width: E * n.goal,
                            height: A * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    l(r.x, r.y);
                }
                return;
            }
            (e.clientX - g.x) ** 2 + (e.clientY - g.y) ** 2 < 400 &&
                (p.l.markActionPerformed(p.N.ZOOM_OUT_IMAGE_PRESSED), d(!1)),
                (m.current = !1);
        },
        onMouseMove: (e) => m.current && N(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && N(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (m.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: a, y: s, cursor: o ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var g = n(652215),
    S = n(610995);
function N(e, t) {
    return {
        ...e,
        type: (0, l.FE)(e),
        original: e.url,
        srcIsAnimated: (0, a.Lt)(e.flags, l.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function C(e) {
    let t = A.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let R = r.memo(function (e) {
    var t, n, r, l, I;
    let f,
        { media: p, obscured: T = !1, maxWidth: N, maxHeight: R, onContextMenu: O } = e,
        { width: L, height: D, url: y, proxyUrl: v, alt: b, type: M, maxWidth: P, maxHeight: U, ...w } = p,
        { zoomed: G } = (0, h.Q)(),
        x = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, a.Lt)(n.flags ?? 0, g.sbO.IS_CLIP) ? n : null;
        })(p.sourceMetadata),
        k =
            ((t = G),
            (n = y),
            (r = v),
            (l = p.contentType),
            (I = p.originalContentType),
            t && A.A.isDiscordAssetUrl(n, l, I) ? (0, c.XW)(n, l, I) : (0, _.E)({ proxyURL: r, url: n })),
        F = null != L && 0 !== L && null != D && 0 !== D;
    if ("VIDEO" === M && F && null != v) {
        let e = p.poster ?? C(v);
        if (null == e) return null;
        if (null != x)
            return (0, i.jsx)(s.A, {
                attachment: x,
                src: k,
                posterUrl: e,
                channelId: p.sourceMetadata?.message?.channel_id,
                maxWidth: N,
                maxHeight: R,
                messageId: p.sourceMetadata?.message?.id,
                autoPlay: p.autoPlay ?? !T,
                autoMute: "function" == typeof p.autoMute ? p.autoMute() : (p.autoMute ?? (0, E.uj)()),
                volume: (0, E.GD)(),
                onContextMenu: O,
                onPlay: p.onPlay ?? void 0,
                onVolumeChange: E.oc,
                onMutedChange: E.y5,
            });
        let t = p.renderLinkComponent ?? u.bU;
        return (0, i.jsx)(d.A, {
            ...w,
            src: k,
            width: L,
            height: D,
            maxWidth: N,
            maxHeight: R,
            poster: e,
            naturalWidth: L,
            naturalHeight: D,
            volume: E.v1,
            autoMute: p.autoMute ?? E.uj,
            onVolumeChange: E.ls,
            onMute: E.y5,
            renderLinkComponent: t,
            autoPlay: p.autoPlay ?? !T,
            alt: b,
            onContextMenu: O,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === M &&
            (f = F
                ? (0, i.jsx)(o.Ay, {
                      ...w,
                      src: k,
                      width: L,
                      height: D,
                      maxWidth: N,
                      maxHeight: R,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: S.$_,
                      animated: !T && p.animated,
                      autoPlay: !T,
                      alt: b,
                      onContextMenu: O,
                  })
                : (0, i.jsx)("img", {
                      src: k,
                      alt: b,
                      onContextMenu: O,
                      className: S.xx,
                      style: { maxWidth: N, maxHeight: R },
                  })),
        null != f ? (0, i.jsx)(m, { children: f }) : null
    );
});
