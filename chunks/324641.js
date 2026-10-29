(n.d(t, { wn: () => w, qM: () => x, WI: () => B, fs: () => k }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
var i = n(141931),
    r = n(941426),
    a = n(429582),
    s = n(475735),
    l = n(999926),
    o = n(420928),
    d = n(192888),
    c = n(99549);
n(321073);
var u = n(508382),
    _ = n(365912),
    E = n(192308),
    A = n(186111),
    h = n(539197);
function f(e, t) {
    let n = e.getBoundingClientRect();
    return (
        2 >= Math.abs(n.left - t.left) &&
        2 >= Math.abs(n.top - t.top) &&
        4 >= Math.abs(n.width - t.width) &&
        4 >= Math.abs(n.height - t.height)
    );
}
function I(e, t) {
    if (
        (0, E.hasAnyModalOpen)() ||
        A.A.hasLayers() ||
        (function (e, t) {
            let n = [...document.getElementsByClassName(_.Pb), ...document.querySelectorAll(`[${u.IP}]`)],
                i = [],
                r = 0;
            for (let s of n)
                for (let n of s.querySelectorAll("*")) {
                    if (++r > 500) return !0;
                    if (!(n.contains(e) || null != n.closest(`[${h.t$}]`) || i.some((e) => e.contains(n)))) {
                        var a;
                        if (f(n, t)) {
                            i.push(n);
                            continue;
                        }
                        if (
                            ((a = n.getBoundingClientRect()),
                            a.width > 0 &&
                                a.height > 0 &&
                                a.left < t.right &&
                                a.right > t.left &&
                                a.top < t.bottom &&
                                a.bottom > t.top)
                        )
                            return !0;
                    }
                }
            return !1;
        })(e, t)
    )
        return !0;
    let n = Math.min(4, t.width / 4),
        i = Math.min(4, t.height / 4);
    for (let r = 0; r < 7; r++)
        for (let a = 0; a < 7; a++) {
            let s = t.left + n + ((t.width - 2 * n) * r) / 6,
                l = t.top + i + ((t.height - 2 * i) * a) / 6,
                o = document.elementsFromPoint(s, l),
                d = o.findIndex((t) => t.contains(e));
            if (-1 === d || !o.slice(0, d).every((e) => f(e, t))) return !0;
        }
    return !1;
}
var p = n(731854);
let T = new r.Vy("ConjureNativeCapture");
function m(e, t) {
    return (T.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function g() {
    return window.DiscordNative?.activityCapture ?? null;
}
function S(e) {
    let t = e.getBoundingClientRect();
    return t.width < 40 ||
        t.height < 40 ||
        t.left < -1 ||
        t.top < -1 ||
        t.right > window.innerWidth + 1 ||
        t.bottom > window.innerHeight + 1
        ? null
        : t;
}
async function N(e, t) {
    let n = window.DiscordNative,
        r = await n?.window?.getMediaSourceId?.();
    if (null == r) return m("no media source id for our own window");
    let a = r.split(":")[1];
    if (null == a || "" === a) return m("unrecognized media source id", { sourceId: r });
    let o = Math.min(
            window.devicePixelRatio,
            1,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        d = Math.ceil(window.outerWidth * o),
        c = Math.ceil(window.outerHeight * o),
        u = l.Ay.getMediaEngine();
    if (!t && u.supports(p.O5.WINDOW_PREVIEWS))
        try {
            let e = s.O.getConfig({ location: "conjureNativeCapture" }).enabled,
                t = await u.getSingleWindowPreview(a, d, c, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let _ = await n?.desktopCapture?.getDesktopCaptureSources({
            types: [i.fS.WINDOW],
            thumbnailSize: { width: d, height: c },
        }),
        E = _?.find((e) => e.id.split(":")[1] === a);
    return null == E || "" === E.url ? m("own window missing from capture sources") : E.url;
}
async function C() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function O(e, t, n, i) {
    let r = new Image();
    if (((r.decoding = "async"), (r.src = e), await r.decode(), 0 === r.naturalWidth || 0 === r.naturalHeight))
        return m("window still decoded empty");
    let a = r.naturalWidth / window.outerWidth,
        s = r.naturalHeight / window.outerHeight;
    if (a <= 0 || s <= 0 || Math.abs(a - s) > 0.03 * a)
        return m("window still does not match the window geometry", {
            image: { width: r.naturalWidth, height: r.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let l = (function (e, t, n, i) {
        let r = t.x > 2 ? [0, t.x] : [0],
            a = t.y > 2 ? [0, t.y] : [0];
        if (1 === r.length && 1 === a.length) return { x: 0, y: 0 };
        for (let t of r)
            for (let r of a)
                if (
                    (function (e, t, n) {
                        let i = document.createElement("canvas");
                        ((i.width = 1), (i.height = 1));
                        let r = i.getContext("2d");
                        if (null == r) return !1;
                        r.drawImage(e, t, n, 1, 1, 0, 0, 1, 1);
                        let [a, s, l] = r.getImageData(0, 0, 1, 1).data;
                        return a > 150 && l > 150 && s < Math.min(a, l) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((r + 43) * i))
                )
                    return { x: t, y: r };
        return null;
    })(r, n, a, s);
    if (null == l) return m("document not found inside the window still", { inset: n });
    let o = Math.max(0, Math.floor((l.x + t.left) * a)),
        d = Math.max(0, Math.floor((l.y + t.top) * s)),
        c = Math.min(r.naturalWidth - o, Math.round(t.width * a)),
        u = Math.min(r.naturalHeight - d, Math.round(t.height * s));
    if (c < 1 || u < 1) return m("crop resolved empty");
    let _ = Math.min(1, 1568 / Math.max(c, u), Math.sqrt(115e4 / (c * u))),
        E = Math.max(1, Math.round(c * _)),
        A = Math.max(1, Math.round(u * _)),
        h = document.createElement("canvas");
    ((h.width = E), (h.height = A));
    let f = h.getContext("2d");
    if (null == f) return m("no 2d context");
    f.drawImage(r, o, d, c, u, 0, 0, E, A);
    let I = `image/${i?.format ?? "webp"}`,
        p = Math.min(1, Math.max(0, (i?.quality ?? 92) / 100)),
        T = await new Promise((e) => h.toBlob(e, I, p));
    return null == T || T.type !== I
        ? m("encode failed", { type: I })
        : T.size > 5242880
          ? m("encoded capture too large", { bytes: T.size })
          : { blob: T, scale: (E / t.width + A / t.height) / 2 };
}
function R(e) {
    return e.resolveUploadUrl().catch(() => null);
}
function L(e, t, n, i) {
    return (0, o.e)(e, n, { captureId: t.captureId, meta: i, build: t.build, uploadToken: t.uploadToken });
}
function y(e, t, n) {
    return (0, d.W)(e, "capture-prepare", null == n ? {} : { spec: n }, { id: t, timeoutMs: 1e3 });
}
function D(e, t) {
    (0, d.W)(e, "capture-release", { prepareId: t }, { timeoutMs: 1e3 }).catch(() => {});
}
function v(e) {
    let { bounds: t, scale: n } = e;
    return { width: Math.max(1, Math.round(t.width * n)), height: Math.max(1, Math.round(t.height * n)) };
}
function b(e, t, n) {
    let i = g();
    return null == i
        ? Promise.reject(Error("activityCapture unavailable"))
        : i.captureImage({
              frameId: e,
              rect: t.bounds,
              viewportSize: t.viewport,
              outputSize: v(t),
              format: n?.format ?? "webp",
              quality: n?.quality ?? 92,
              timeoutMs: 1500,
          });
}
async function M(e, t, n) {
    let i = n?.format ?? "webp",
        r = n?.quality ?? 92,
        s = (0, a.oe)(e, { rect: t.bounds, outputSize: v(t), format: "jpeg" === i ? "jpeg" : "png", quality: r });
    if (null == s) throw Error("frame is not hosted in a view");
    let l = await new Promise((e, t) => {
        let n = setTimeout(() => t(Error("timed out after 1500ms")), 1500);
        s.then(e, t).finally(() => clearTimeout(n));
    });
    if ("webp" !== i) return l;
    let o = await createImageBitmap(new Blob([l.data], { type: l.mimeType }));
    try {
        let e = document.createElement("canvas");
        ((e.width = o.width), (e.height = o.height));
        let t = e.getContext("2d");
        if (null == t) throw Error("no 2d context");
        t.drawImage(o, 0, 0);
        let n = await new Promise((t) => e.toBlob(t, "image/webp", r / 100));
        if (null == n || "image/webp" !== n.type) throw Error("webp encode failed");
        return { data: new Uint8Array(await n.arrayBuffer()), mimeType: n.type, width: o.width, height: o.height };
    } finally {
        o.close();
    }
}
async function P(e, t, n) {
    let i = performance.now(),
        r = i,
        a = {};
    function s(e) {
        let t = performance.now();
        ((a[`${e}Ms`] = Math.round(t - r)), (r = t));
    }
    function l(e, t) {
        return m(e, { ...t, ...a, totalMs: Math.round(performance.now() - i) });
    }
    try {
        let o,
            d,
            c = e.getBoundingClientRect();
        if (c.width < 40 || c.height < 40) return l("frame too small");
        let u = R(t);
        r = performance.now();
        let _ = `capture-prepare-${t.captureId}`;
        try {
            o = await y(e, _, t.spec);
        } catch (t) {
            return (s("prepare"), D(e, _), l("frame did not prepare", { err: t }));
        }
        if ((s("prepare"), "ready" !== o.phase)) return l("frame refused", { code: o.code, error: o.error });
        let E = o;
        try {
            d = await n(E);
        } catch (e) {
            return (s("image"), l("host capture failed", { err: e }));
        } finally {
            D(e, _);
        }
        if ((s("image"), d.data.byteLength > 5242880))
            return l("encoded capture too large", { bytes: d.data.byteLength });
        let A = await u;
        if (null == A) return l("no upload url");
        let h = new Blob([d.data], { type: d.mimeType }),
            f = await L(
                A,
                t,
                h,
                (function (e) {
                    try {
                        let t = JSON.parse(decodeURIComponent(e));
                        if (null == t || "object" != typeof t) return e;
                        return encodeURIComponent(JSON.stringify({ ...t, source: "native" }));
                    } catch {
                        return e;
                    }
                })(E.meta),
            );
        if ((s("upload"), !f.ok)) return l("upload refused", { status: f.status });
        let I = Math.round(performance.now() - i);
        return (
            T.verbose(`native capture uploaded in ${I}ms`, {
                id: t.captureId,
                bytes: h.size,
                width: d.width,
                height: d.height,
                ...a,
                totalMs: I,
            }),
            { status: "accepted" }
        );
    } catch (e) {
        return l("threw", { err: e });
    }
}
let U = 0;
async function w(e) {
    if (null == g()) return m("frame surface capture unavailable");
    let t = (0, c.B0)(e);
    if (null == t) return m("frame identity unknown");
    let n = `capture-prepare-sketch-${++U}`;
    try {
        let i = await y(e, n, void 0);
        if ("ready" !== i.phase) return m("frame refused", { code: i.code, error: i.error });
        let r = await b(t, i, void 0);
        return new Blob([r.data], { type: r.mimeType });
    } catch (e) {
        return m("frame surface capture failed", { err: e });
    } finally {
        D(e, n);
    }
}
async function G(e, t) {
    let n,
        { skipWindowPreview: i = !1, onStill: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null == window.DiscordNative) return m("not the desktop app");
    if ("visible" !== document.visibilityState) return m("window not visible");
    let a = S(e);
    if (null == a) return m("frame not fully on screen");
    if (I(e, a)) return m("frame is covered by Discord UI");
    let s = {
            x: Math.max(0, window.outerWidth - window.innerWidth),
            y: Math.max(0, window.outerHeight - window.innerHeight),
        },
        l = s.x > 2 || s.y > 2 ? await C() : null;
    try {
        n = await N(a, i);
    } finally {
        (l?.(), r?.());
    }
    if (null == n) return null;
    let o = S(e);
    if (
        null == o ||
        Math.abs(o.left - a.left) > 1 ||
        Math.abs(o.top - a.top) > 1 ||
        Math.abs(o.width - a.width) > 1 ||
        Math.abs(o.height - a.height) > 1
    )
        return m("frame moved or resized during capture");
    if (I(e, o)) return m("Discord UI covered the frame during capture");
    let d = await O(n, a, s, t);
    return null == d ? null : { ...d, rect: a };
}
function x() {
    let e = window.DiscordNative;
    return (
        null != e &&
        "function" == typeof e.window?.getMediaSourceId &&
        ("function" == typeof e.desktopCapture?.getDesktopCaptureSources ||
            l.Ay.getMediaEngine().supports(p.O5.WINDOW_PREVIEWS))
    );
}
async function k(e, t) {
    try {
        let n = await G(e, void 0, { skipWindowPreview: !0, onStill: t });
        return n?.blob ?? null;
    } catch (e) {
        return m("threw", { err: e });
    }
}
async function F(e, t) {
    try {
        var n, i, r;
        if (null == window.DiscordNative) return m("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (i = n.target) &&
                        ((null != i.ref && "" !== i.ref) || (null != i.selector && "" !== i.selector))
                            ? "element"
                            : null != (r = n.rect) && r.width > 0 && r.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return m("targeted capture needs the frame DOM", { spec: t.spec });
        let a = R(t),
            s = await G(e, t.spec);
        if (null == s) return null;
        let { rect: l } = s,
            o = await a;
        if (null == o) return m("no upload url");
        let d = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(l.width), height: Math.round(l.height) },
                viewport: { width: Math.round(l.width), height: Math.round(l.height) },
                scale: Math.round(1e3 * s.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: l.width <= 768 ? "narrow" : "wide",
                ...(null == t.build ? {} : { build: t.build }),
                source: "native",
            },
            c = await L(o, t, s.blob, encodeURIComponent(JSON.stringify(d)));
        if (!c.ok) return m("upload refused", { status: c.status });
        return (
            T.verbose("native capture uploaded", { id: t.captureId, bytes: s.blob.size, scale: d.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return m("threw", { err: e });
    }
}
async function B(e, t) {
    let n = (0, c.B0)(e);
    if ((null == n && m("frame identity unknown"), null != g() && null != n)) {
        let i = await P(e, t, (e) => b(n, e, t.spec));
        if (null != i) return i;
    }
    if ((0, a.t8)(e)) {
        let n = await P(e, t, (n) => M(e, n, t.spec));
        if (null != n) return n;
    }
    return e.ownerDocument !== document ? m("frame in another window") : F(e, t);
}
