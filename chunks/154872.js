"use strict";
n.d(t, { VZ: () => O, Ay: () => R, FX: () => C }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(665260),
    s = n(682176),
    l = n(731068),
    o = n(619517),
    d = n(248643),
    c = n(803316),
    u = n(34337),
    _ = n(644447),
    E = n(587481),
    A = n(998218),
    h = n(454290),
    I = n(4798),
    f = n(765671),
    p = n(267102),
    T = n(700331);
function m(e) {
    let { width: t, height: n, viewportWidth: i, viewportHeight: r, offset: a, delta: s } = e,
        l = (i - t) / 2 + a.x,
        o = (r - n) / 2 + a.y,
        d = (i + t) / 2 + a.x,
        c = (r + n) / 2 + a.y,
        { x: u, y: _ } = a;
    return (
        t > i && ((u += s.x), l + s.x > 0 && (u = (t - i) / 2), d + s.x < i && (u = (i - t) / 2)),
        n > r && ((_ += s.y), o + s.y > 0 && (_ = (n - r) / 2), c + s.y < r && (_ = (r - n) / 2)),
        { x: u, y: _ }
    );
}
let g = r.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: a, y: s, setOffset: l, zoomed: o, setZoomed: d } = (0, h.Q)(),
        { ref: c, width: u, height: _ } = (0, f.Ay)(),
        [E, A] = [u ?? 0, _ ?? 0],
        g = (0, p._o)(),
        S = r.useRef(!1),
        [N, C] = r.useState({ x: 0, y: 0 });
    function O(e, t) {
        let i = m({
            width: E * n.goal,
            height: A * n.goal,
            viewportWidth: g.innerWidth,
            viewportHeight: g.innerHeight,
            offset: { x: a.goal, y: s.goal },
            delta: { x: e, y: t },
        });
        l(i.x, i.y, { immediate: !0 });
    }
    return (0, i.jsx)(I.animated.div, {
        ref: c,
        onMouseDown: function (e) {
            o && 0 === e.button && (e.preventDefault(), (S.current = !0), C({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: function (e) {
            if (!o) {
                if (0 === e.button) {
                    T.l.markActionPerformed(T.N.ZOOM_IN_IMAGE_PRESSED), d(!0);
                    let t = e.clientX - g.innerWidth / 2,
                        i = e.clientY - g.innerHeight / 2,
                        r = m({
                            width: E * n.goal,
                            height: A * n.goal,
                            viewportWidth: g.innerWidth,
                            viewportHeight: g.innerHeight,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    l(r.x, r.y);
                }
                return;
            }
            (e.clientX - N.x) ** 2 + (e.clientY - N.y) ** 2 < 400 &&
                (T.l.markActionPerformed(T.N.ZOOM_OUT_IMAGE_PRESSED), d(!1)),
                (S.current = !1);
        },
        onMouseMove: (e) => S.current && O(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && O(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (S.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: a, y: s, cursor: o ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var S = n(652215),
    N = n(865451);
function C(e, t) {
    return {
        ...e,
        type: (0, l.FE)(e),
        original: e.url,
        srcIsAnimated: (0, a.Lt)(e.flags, l.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function O(e) {
    let t = A.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let R = r.memo(function (e) {
    var t, n, r, l, I;
    let f,
        { media: p, obscured: T = !1, maxWidth: m, maxHeight: C, onContextMenu: R } = e,
        { width: L, height: y, url: D, proxyUrl: v, alt: b, type: M, maxWidth: P, maxHeight: U, ...w } = p,
        { zoomed: G } = (0, h.Q)(),
        x = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, a.Lt)(n.flags ?? 0, S.sbO.IS_CLIP) ? n : null;
        })(p.sourceMetadata),
        k =
            ((t = G),
            (n = D),
            (r = v),
            (l = p.contentType),
            (I = p.originalContentType),
            t && A.A.isDiscordAssetUrl(n, l, I) ? (0, c.XW)(n, l, I) : (0, _.E)({ proxyURL: r, url: n })),
        F = null != L && 0 !== L && null != y && 0 !== y;
    if ("VIDEO" === M && F && null != v) {
        let e = p.poster ?? O(v);
        if (null == e) return null;
        if (null != x)
            return (0, i.jsx)(s.A, {
                attachment: x,
                src: k,
                posterUrl: e,
                channelId: p.sourceMetadata?.message?.channel_id,
                maxWidth: m,
                maxHeight: C,
                messageId: p.sourceMetadata?.message?.id,
                autoPlay: p.autoPlay ?? !T,
                autoMute: "function" == typeof p.autoMute ? p.autoMute() : (p.autoMute ?? (0, E.uj)()),
                volume: (0, E.GD)(),
                onContextMenu: R,
                onPlay: p.onPlay ?? void 0,
                onVolumeChange: E.oc,
                onMutedChange: E.y5,
            });
        let t = p.renderLinkComponent ?? u.bU;
        return (0, i.jsx)(d.A, {
            ...w,
            src: k,
            width: L,
            height: y,
            maxWidth: m,
            maxHeight: C,
            poster: e,
            naturalWidth: L,
            naturalHeight: y,
            volume: E.v1,
            autoMute: p.autoMute ?? E.uj,
            onVolumeChange: E.ls,
            onMute: E.y5,
            renderLinkComponent: t,
            autoPlay: p.autoPlay ?? !T,
            alt: b,
            onContextMenu: R,
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
                      height: y,
                      maxWidth: m,
                      maxHeight: C,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: N.$_,
                      animated: !T && p.animated,
                      autoPlay: !T,
                      alt: b,
                      onContextMenu: R,
                  })
                : (0, i.jsx)("img", {
                      src: k,
                      alt: b,
                      onContextMenu: R,
                      className: N.xx,
                      style: { maxWidth: m, maxHeight: C },
                  })),
        null != f ? (0, i.jsx)(g, { children: f }) : null
    );
});
