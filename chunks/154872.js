"use strict";
n.d(t, { VZ: () => y, Ay: () => C, FX: () => N }), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(665260),
    a = n(163281),
    o = n(731068),
    l = n(619517),
    u = n(248643),
    c = n(803316),
    d = n(34337),
    _ = n(644447),
    f = n(587481),
    h = n(998218),
    p = n(454290),
    E = n(785651),
    m = n(765671),
    g = n(700331);
function A(e) {
    let { width: t, height: n, offset: i, delta: r } = e,
        s = t > window.innerWidth,
        a = n > window.innerHeight,
        o = (window.innerWidth - t) / 2 + i.x,
        l = (window.innerHeight - n) / 2 + i.y,
        u = (window.innerWidth + t) / 2 + i.x,
        c = (window.innerHeight + n) / 2 + i.y,
        { x: d, y: _ } = i;
    return (
        s &&
            ((d += r.x),
            o + r.x > 0 && (d = (t - window.innerWidth) / 2),
            u + r.x < window.innerWidth && (d = (window.innerWidth - t) / 2)),
        a &&
            ((_ += r.y),
            l + r.y > 0 && (_ = (n - window.innerHeight) / 2),
            c + r.y < window.innerHeight && (_ = (window.innerHeight - n) / 2)),
        { x: d, y: _ }
    );
}
let I = r.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: s, y: a, setOffset: o, zoomed: l, setZoomed: u } = (0, p.Q)(),
        { ref: c, width: d, height: _ } = (0, m.Ay)(),
        [f, h] = [d ?? 0, _ ?? 0],
        I = r.useRef(!1),
        [T, S] = r.useState({ x: 0, y: 0 }),
        N = (e, t) => {
            let i = A({
                width: f * n.goal,
                height: h * n.goal,
                offset: { x: s.goal, y: a.goal },
                delta: { x: e, y: t },
            });
            o(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(E.animated.div, {
        ref: c,
        onMouseDown: (e) => {
            l && 0 === e.button && (e.preventDefault(), (I.current = !0), S({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!l) {
                if (0 === e.button) {
                    g.l.markActionPerformed(g.N.ZOOM_IN_IMAGE_PRESSED), u(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        r = A({
                            width: f * n.goal,
                            height: h * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    o(r.x, r.y);
                }
                return;
            }
            (e.clientX - T.x) ** 2 + (e.clientY - T.y) ** 2 < 400 &&
                (g.l.markActionPerformed(g.N.ZOOM_OUT_IMAGE_PRESSED), u(!1)),
                (I.current = !1);
        },
        onMouseMove: (e) => I.current && N(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && N(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (I.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: s, y: a, cursor: l ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
var T = n(652215),
    S = n(610995);
function N(e, t) {
    return {
        ...e,
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, s.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: { message: t },
    };
}
function y(e) {
    let t = h.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
let C = r.memo(function (e) {
    var t, n, r, o, E;
    let m,
        { media: g, obscured: A = !1, maxWidth: N, maxHeight: C, onContextMenu: v } = e,
        { width: O, height: R, url: b, proxyUrl: D, alt: L, type: w, maxWidth: M, maxHeight: P, ...x } = g,
        { zoomed: U } = (0, p.Q)(),
        k = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, s.Lt)(n.flags ?? 0, T.sbO.IS_CLIP) ? n : null;
        })(g.sourceMetadata),
        G =
            ((t = U),
            (n = b),
            (r = D),
            (o = g.contentType),
            (E = g.originalContentType),
            t && h.A.isDiscordAssetUrl(n, o, E) ? (0, c.XW)(n, o, E) : (0, _.E)({ proxyURL: r, url: n })),
        F = null != O && 0 !== O && null != R && 0 !== R;
    if ("VIDEO" === w && F && null != D) {
        let e = g.poster ?? y(D);
        if (null == e) return null;
        if (null != k)
            return (0, i.jsx)(a.A, {
                attachment: k,
                src: G,
                posterUrl: e,
                channelId: g.sourceMetadata?.message?.channel_id,
                maxWidth: N,
                maxHeight: C,
                active: !0,
                messageId: g.sourceMetadata?.message?.id,
                autoPlay: g.autoPlay ?? !A,
                autoMute: "function" == typeof g.autoMute ? g.autoMute() : (g.autoMute ?? (0, f.uj)()),
                volume: (0, f.v1)(),
                onContextMenu: v,
                onVolumeChange: f.ls,
                onMutedChange: f.y5,
            });
        let t = g.renderLinkComponent ?? d.bU;
        return (0, i.jsx)(u.A, {
            ...x,
            src: G,
            width: O,
            height: R,
            maxWidth: N,
            maxHeight: C,
            poster: e,
            naturalWidth: O,
            naturalHeight: R,
            volume: f.v1,
            autoMute: g.autoMute ?? f.uj,
            onVolumeChange: f.ls,
            onMute: f.y5,
            renderLinkComponent: t,
            autoPlay: g.autoPlay ?? !A,
            alt: L,
            onContextMenu: v,
            disableArrowKeySeek: !0,
        });
    }
    return (
        "IMAGE" === w &&
            (m = F
                ? (0, i.jsx)(l.Ay, {
                      ...x,
                      src: G,
                      width: O,
                      height: R,
                      maxWidth: N,
                      maxHeight: C,
                      useFullWidth: !0,
                      shouldLink: !1,
                      className: S.$_,
                      animated: !A && g.animated,
                      autoPlay: !A,
                      alt: L,
                      onContextMenu: v,
                  })
                : (0, i.jsx)("img", {
                      src: G,
                      alt: L,
                      onContextMenu: v,
                      className: S.xx,
                      style: { maxWidth: N, maxHeight: C },
                  })),
        null != m ? (0, i.jsx)(I, { children: m }) : null
    );
});
