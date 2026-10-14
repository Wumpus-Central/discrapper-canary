n.d(t, { A: () => eb });
var i = n(264686),
    r = n(625180),
    a = n(91242),
    s = n(976860),
    l = n(803224),
    o = n(531685),
    d = n(479975);
n(884868);
var c = n(573083);
function u(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var _ = n(141931),
    E = n(941426),
    A = n(429582),
    h = n(475735),
    f = n(192820),
    I = n(192888),
    p = n(809685),
    T = n(777977),
    m = n(484697);
(n(321073), n(667532));
var g = n(112420),
    S = n(652215);
function N(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let C = {
    [S.e$_.OPEN_CONTEXT_MENU]: (e) =>
        "custom" !== e.args.type
            ? { result: { opened: !0 }, answered: "opened, no selection to make" }
            : {
                  result: { opened: !0, selected_id: null },
                  answered: "dismissed",
                  options: (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = N(i.id);
                          (null != t && n.push(t), e(i.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [S.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: N(e.args.title),
    }),
    [S.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: N(e.args.url),
    }),
    [S.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: N(e.args.preview_title) ?? N(e.args.content),
    }),
    [S.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.OPEN_GAME_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [S.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [S.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [S.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [S.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(C);
let O = { drain: () => [], end: () => {}, iframeId: null },
    R = [];
function L(e) {
    let t = R.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = C[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: a, subject: s } = n(e);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: r,
                ...(null != a && a.length > 0 ? { options: a } : {}),
                ...(null != s ? { subject: s } : {}),
            }),
        { result: i }
    );
}
function y(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, m.lw)(t) ?? null);
}
function D(e, t) {
    var n = y(e);
    if (null == n) return O;
    let i = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? R.push(i) : R.unshift(i),
        1 === R.length && (0, g.C)(L),
        {
            iframeId: n,
            drain: () => i.recorded.splice(0, i.recorded.length),
            end: () => {
                let e = R.indexOf(i);
                -1 !== e && (R.splice(e, 1), 0 === R.length && (0, g.C)(null));
            },
        }
    );
}
var v = n(508382),
    b = n(365912),
    M = n(192308),
    P = n(186111),
    U = n(539197);
function w(e, t) {
    let n = e.getBoundingClientRect();
    return (
        2 >= Math.abs(n.left - t.left) &&
        2 >= Math.abs(n.top - t.top) &&
        4 >= Math.abs(n.width - t.width) &&
        4 >= Math.abs(n.height - t.height)
    );
}
function G(e, t) {
    if (
        (0, M.hasAnyModalOpen)() ||
        P.A.hasLayers() ||
        (function (e, t) {
            let n = [...document.getElementsByClassName(b.Pb), ...document.querySelectorAll(`[${v.IP}]`)],
                i = [],
                r = 0;
            for (let s of n)
                for (let n of s.querySelectorAll("*")) {
                    if (++r > 500) return !0;
                    if (!(n.contains(e) || null != n.closest(`[${U.t$}]`) || i.some((e) => e.contains(n)))) {
                        var a;
                        if (w(n, t)) {
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
            if (-1 === d || !o.slice(0, d).every((e) => w(e, t))) return !0;
        }
    return !1;
}
var x = n(731854);
let k = new E.Vy("VibegrationsNativeCapture");
function F(e, t) {
    return (k.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function B() {
    return window.DiscordNative?.activityCapture ?? null;
}
function V(e) {
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
async function H(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return F("no media source id for our own window");
    let i = n.split(":")[1];
    if (null == i || "" === i) return F("unrecognized media source id", { sourceId: n });
    let r = Math.min(
            window.devicePixelRatio,
            1,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        a = Math.ceil(window.outerWidth * r),
        s = Math.ceil(window.outerHeight * r),
        l = f.Ay.getMediaEngine();
    if (l.supports(x.O5.WINDOW_PREVIEWS))
        try {
            let e = h.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await l.getSingleWindowPreview(i, a, s, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let o = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [_.fS.WINDOW],
            thumbnailSize: { width: a, height: s },
        }),
        d = o?.find((e) => e.id.split(":")[1] === i);
    return null == d || "" === d.url ? F("own window missing from capture sources") : d.url;
}
async function j() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function W(e, t, n, i) {
    let r = new Image();
    if (((r.decoding = "async"), (r.src = e), await r.decode(), 0 === r.naturalWidth || 0 === r.naturalHeight))
        return F("window still decoded empty");
    let a = r.naturalWidth / window.outerWidth,
        s = r.naturalHeight / window.outerHeight;
    if (a <= 0 || s <= 0 || Math.abs(a - s) > 0.03 * a)
        return F("window still does not match the window geometry", {
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
    if (null == l) return F("document not found inside the window still", { inset: n });
    let o = Math.max(0, Math.floor((l.x + t.left) * a)),
        d = Math.max(0, Math.floor((l.y + t.top) * s)),
        c = Math.min(r.naturalWidth - o, Math.round(t.width * a)),
        u = Math.min(r.naturalHeight - d, Math.round(t.height * s));
    if (c < 1 || u < 1) return F("crop resolved empty");
    let _ = Math.min(1, 1568 / Math.max(c, u), Math.sqrt(115e4 / (c * u))),
        E = Math.max(1, Math.round(c * _)),
        A = Math.max(1, Math.round(u * _)),
        h = document.createElement("canvas");
    ((h.width = E), (h.height = A));
    let f = h.getContext("2d");
    if (null == f) return F("no 2d context");
    f.drawImage(r, o, d, c, u, 0, 0, E, A);
    let I = `image/${i?.format ?? "webp"}`,
        p = Math.min(1, Math.max(0, (i?.quality ?? 92) / 100)),
        T = await new Promise((e) => h.toBlob(e, I, p));
    return null == T || T.type !== I
        ? F("encode failed", { type: I })
        : T.size > 5242880
          ? F("encoded capture too large", { bytes: T.size })
          : { blob: T, scale: (E / t.width + A / t.height) / 2 };
}
function Y(e) {
    return e.resolveUploadUrl().catch(() => null);
}
function K(e, t, n, i) {
    let r = { "content-type": n.type, "x-vibegrations-capture-id": t.captureId, "x-vibegrations-capture-meta": i };
    return (
        null != t.build && (r["x-vibegrations-build"] = t.build),
        null != t.uploadToken && (r["x-vibegrations-capture-token"] = t.uploadToken),
        fetch(e, { method: "POST", headers: r, body: n })
    );
}
function $(e, t) {
    (0, I.W)(e, "capture-release", { prepareId: t }, { timeoutMs: 1e3 }).catch(() => {});
}
function z(e) {
    let { bounds: t, scale: n } = e;
    return { width: Math.max(1, Math.round(t.width * n)), height: Math.max(1, Math.round(t.height * n)) };
}
async function X(e, t, n) {
    let i = n?.format ?? "webp",
        r = n?.quality ?? 92,
        a = (0, A.oe)(e, { rect: t.bounds, outputSize: z(t), format: "jpeg" === i ? "jpeg" : "png", quality: r });
    if (null == a) throw Error("frame is not hosted in a view");
    let s = await new Promise((e, t) => {
        let n = setTimeout(() => t(Error("timed out after 1500ms")), 1500);
        a.then(e, t).finally(() => clearTimeout(n));
    });
    if ("webp" !== i) return s;
    let l = await createImageBitmap(new Blob([s.data], { type: s.mimeType }));
    try {
        let e = document.createElement("canvas");
        ((e.width = l.width), (e.height = l.height));
        let t = e.getContext("2d");
        if (null == t) throw Error("no 2d context");
        t.drawImage(l, 0, 0);
        let n = await new Promise((t) => e.toBlob(t, "image/webp", r / 100));
        if (null == n || "image/webp" !== n.type) throw Error("webp encode failed");
        return { data: new Uint8Array(await n.arrayBuffer()), mimeType: n.type, width: l.width, height: l.height };
    } finally {
        l.close();
    }
}
async function Z(e, t, n) {
    let i = performance.now(),
        r = i,
        a = {};
    function s(e) {
        let t = performance.now();
        ((a[`${e}Ms`] = Math.round(t - r)), (r = t));
    }
    function l(e, t) {
        return F(e, { ...t, ...a, totalMs: Math.round(performance.now() - i) });
    }
    try {
        let d,
            c,
            u = e.getBoundingClientRect();
        if (u.width < 40 || u.height < 40) return l("frame too small");
        let _ = Y(t);
        r = performance.now();
        let E = `capture-prepare-${t.captureId}`;
        try {
            var o;
            d = await ((o = t.spec),
            (0, I.W)(e, "capture-prepare", null == o ? {} : { spec: o }, { id: E, timeoutMs: 1e3 }));
        } catch (t) {
            return (s("prepare"), $(e, E), l("frame did not prepare", { err: t }));
        }
        if ((s("prepare"), "ready" !== d.phase)) return l("frame refused", { code: d.code, error: d.error });
        let A = d;
        try {
            c = await n(A);
        } catch (e) {
            return (s("image"), l("host capture failed", { err: e }));
        } finally {
            $(e, E);
        }
        if ((s("image"), c.data.byteLength > 5242880))
            return l("encoded capture too large", { bytes: c.data.byteLength });
        let h = await _;
        if (null == h) return l("no upload url");
        let f = new Blob([c.data], { type: c.mimeType }),
            p = await K(
                h,
                t,
                f,
                (function (e) {
                    try {
                        let t = JSON.parse(decodeURIComponent(e));
                        if (null == t || "object" != typeof t) return e;
                        return encodeURIComponent(JSON.stringify({ ...t, source: "native" }));
                    } catch {
                        return e;
                    }
                })(A.meta),
            );
        if ((s("upload"), !p.ok)) return l("upload refused", { status: p.status });
        let T = Math.round(performance.now() - i);
        return (
            k.verbose(`native capture uploaded in ${T}ms`, {
                id: t.captureId,
                bytes: f.size,
                width: c.width,
                height: c.height,
                ...a,
                totalMs: T,
            }),
            { status: "accepted" }
        );
    } catch (e) {
        return l("threw", { err: e });
    }
}
async function q(e, t) {
    try {
        var n, i, r;
        let a;
        if (null == window.DiscordNative) return F("not the desktop app");
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
            return F("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return F("window not visible");
        let s = V(e);
        if (null == s) return F("frame not fully on screen");
        if (G(e, s)) return F("frame is covered by Discord UI");
        let l = Y(t),
            o = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            d = o.x > 2 || o.y > 2 ? await j() : null;
        try {
            a = await H(s);
        } finally {
            d?.();
        }
        if (null == a) return null;
        let c = V(e);
        if (
            null == c ||
            Math.abs(c.left - s.left) > 1 ||
            Math.abs(c.top - s.top) > 1 ||
            Math.abs(c.width - s.width) > 1 ||
            Math.abs(c.height - s.height) > 1
        )
            return F("frame moved or resized during capture");
        if (G(e, c)) return F("Discord UI covered the frame during capture");
        let u = await W(a, s, o, t.spec);
        if (null == u) return null;
        let _ = await l;
        if (null == _) return F("no upload url");
        let E = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(s.width), height: Math.round(s.height) },
                viewport: { width: Math.round(s.width), height: Math.round(s.height) },
                scale: Math.round(1e3 * u.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: s.width <= 768 ? "narrow" : "wide",
                ...(null == t.build ? {} : { build: t.build }),
                source: "native",
            },
            A = await K(_, t, u.blob, encodeURIComponent(JSON.stringify(E)));
        if (!A.ok) return F("upload refused", { status: A.status });
        return (
            k.verbose("native capture uploaded", { id: t.captureId, bytes: u.blob.size, scale: E.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return F("threw", { err: e });
    }
}
async function Q(e, t) {
    if ("visible" !== document.visibilityState) return F("window not visible");
    let n = y(e);
    if ((null == n && F("frame identity unknown"), null != B() && null != n)) {
        let i = await Z(e, t, (e) => {
            var i;
            let r;
            return (
                (i = t.spec),
                null == (r = B())
                    ? Promise.reject(Error("activityCapture unavailable"))
                    : r.captureImage({
                          frameId: n,
                          rect: e.bounds,
                          viewportSize: e.viewport,
                          outputSize: z(e),
                          format: i?.format ?? "webp",
                          quality: i?.quality ?? 92,
                          timeoutMs: 1500,
                      })
            );
        });
        if (null != i) return i;
    }
    if ((0, A.t8)(e)) {
        let n = await Z(e, t, (n) => X(e, n, t.spec));
        if (null != n) return n;
    }
    return e.ownerDocument !== document ? F("frame in another window") : q(e, t);
}
var J = n(251363),
    ee = n(621466);
let et = !1;
(document.addEventListener("compositionstart", () => (et = !0), !0),
    document.addEventListener("compositionend", () => (et = !1), !0));
let en = null;
function ei(e) {
    if ((0, ee.vq)(e, HTMLInputElement) || (0, ee.vq)(e, HTMLTextAreaElement)) {
        let { selectionStart: t, selectionEnd: n, selectionDirection: i } = e;
        return null == t || null == n ? null : () => e.setSelectionRange(t, n, i ?? void 0);
    }
    let t = document.getSelection(),
        n = null != t && t.rangeCount > 0 ? t.getRangeAt(0).cloneRange() : null;
    return null != n && e.contains(n.commonAncestorContainer)
        ? () => {
              (t?.removeAllRanges(), t?.addRange(n));
          }
        : null;
}
function er(e) {
    (e.stop(),
        en === e && (en = null),
        e.personActed ||
            (function e(t) {
                let n = document.activeElement;
                if (t.element.isConnected && n !== t.element && (n === t.iframe || n === document.body)) {
                    if (et)
                        return void document.addEventListener("compositionend", () => e(t), { capture: !0, once: !0 });
                    (t.element.focus({ preventScroll: !0 }), t.restoreSelection?.());
                }
            })(e));
}
async function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
    null != en && en.iframe !== e && es();
    let i =
        en?.iframe === e
            ? en
            : (function (e) {
                  let t = document.activeElement;
                  if (!(0, ee.vq)(t, HTMLElement) || t === e || t === document.body) return null;
                  let n = {
                      iframe: e,
                      element: t,
                      restoreSelection: ei(t),
                      active: 0,
                      personActed: !1,
                      released: !1,
                      holdRequested: !1,
                      stop: () => {
                          (document.removeEventListener("blur", i, !0),
                              document.removeEventListener("pointerdown", r, !0));
                      },
                  };
                  function i(e) {
                      (0, ee.vq)(e.target, Node) &&
                          n.element.contains(e.target) &&
                          (n.restoreSelection = ei(n.element) ?? n.restoreSelection);
                  }
                  function r() {
                      ((n.personActed = !0), 0 === n.active && er(n));
                  }
                  return (document.addEventListener("blur", i, !0), document.addEventListener("pointerdown", r, !0), n);
              })(e);
    if (null == i) return await t();
    ((en = i), (i.active += 1));
    try {
        return await t();
    } finally {
        ((i.active -= 1), (i.holdRequested = n() ?? i.holdRequested));
        let t = !i.personActed && !i.released && i.holdRequested && document.activeElement === e;
        0 !== i.active || t || er(i);
    }
}
function es() {
    null != en && ((en.released = !0), 0 === en.active && er(en));
}
var el = n(853555);
(n(323874), n(14289), n(35956));
var eo = n(873715);
let ed = null,
    ec = null,
    eu = new Map(),
    e_ = null,
    eE = 0;
function eA() {
    return window.DiscordNative?.frameDebugger ?? null;
}
async function eh(e) {
    let t = await Promise.race([
        (0, eo.J)(e, `native-cdp-${Date.now()}-${++eE}`, {
            steps: [{ action: "cdp", calls: [{ method: "Runtime.releaseObjectGroup", params: {} }] }],
            passive: !0,
        }),
        new Promise((e) => setTimeout(() => e(null), 1500)),
    ]);
    if (t?.status !== "completed") return [];
    let n = t.response.results[0]?.value?.events;
    return Array.isArray(n) ? n.slice(-200) : [];
}
async function ef(e, t) {
    let n = eA(),
        i = (function (e) {
            try {
                return new URL(e.src, window.location.href).origin;
            } catch {
                return null;
            }
        })(t);
    if (null == n || null == i || t.ownerDocument !== document) return null;
    if (ed?.projectId === e && ed.origin === i) return ed;
    if (null != ec) {
        let t = ec,
            n = await t.result;
        return t.projectId === e && t.origin === i ? n : null;
    }
    let r = { projectId: e, origin: i, cancelled: !1, result: Promise.resolve(null) };
    function a() {
        return r.cancelled;
    }
    ((r.result = (async () => {
        let r;
        try {
            r = await n.attach(i);
        } catch {
            return null;
        }
        if (
            (e_ !== n &&
                ((e_ = n),
                n.onDetached((e) => {
                    ed?.id === e && ((0, U.nI)(ed.projectId), (ed = null));
                }),
                n.onInput?.((e, t) => {
                    ed?.id === e && (0, U.NL)(ed.projectId, t);
                })),
            a())
        )
            return (n.detach().catch(() => {}), "cancelled");
        let s = { id: r, projectId: e, origin: i, earlierEvents: [] };
        return ((ed = s), (s.earlierEvents = await eh(t).catch(() => [])), a() ? "cancelled" : s);
    })()),
        (ec = r));
    try {
        return await r.result;
    } finally {
        ec === r && (ec = null);
    }
}
function eI(e, t) {
    return { status: "completed", response: { ok: e.ok, results: [e], ...("" === t ? {} : { build: t }) } };
}
async function ep(e, t, n) {
    let i,
        r = eA(),
        a = (function (e) {
            if (!0 === e.passive || !0 === e.snapshot || 1 !== e.steps.length) return null;
            let t = e.steps[0],
                n = t.calls;
            return "cdp" !== t.action || !Array.isArray(n) || 0 === n.length || n.length > 200 ? null : n;
        })(n);
    if (null == r || null == a) return null;
    let s = await ef(e, t);
    if (null == s) return null;
    if ("cancelled" === s)
        return eI({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: 0 }, "");
    let l = Date.now(),
        o = null != r.onInput;
    o && (0, U.W8)(e, t);
    let d = new Promise((e) => {
        i = setTimeout(() => e("timeout"), 1e4);
    });
    try {
        let t = await Promise.race([r.runBatch(a), d]),
            n = Date.now() - l;
        if ("timeout" === t)
            return (
                eT(e), eI({ action: "cdp", ok: !1, code: "timeout", message: "the batch ran out of time", ms: n }, "")
            );
        if (t.stopped)
            return eI({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: n }, t.build);
        let i = [...s.earlierEvents.splice(0), ...t.events],
            o = { replies: t.replies, url: t.url, title: t.title, doc: t.doc, ...(i.length > 0 ? { events: i } : {}) };
        return eI({ action: "cdp", ok: !0, value: o, ms: n }, t.build);
    } catch (t) {
        return (eT(e), { status: "failed", message: t instanceof Error ? t.message : "the preview debugger failed" });
    } finally {
        (clearTimeout(i), o && (0, U.bq)(e));
    }
}
function eT(e) {
    let t = eA(),
        n = eu.get(e);
    (null != n && ((n.cancelled = !0), eu.delete(e)),
        ec?.projectId === e && (ec.cancelled = !0),
        (0, U.nI)(e),
        null != t && ed?.projectId === e && ((ed = null), t.detach().catch(() => {})));
}
var em = n(226178);
let eg = new WeakMap();
function eS(e) {
    return new Promise((t) => setTimeout(t, e));
}
function eN(e, t) {
    return e.width === t.width && e.height === t.height;
}
function eC(e, t, n) {
    let i = t.width - e.width,
        r = t.height - e.height;
    return i >= -2 && r >= -2 && i <= n && r <= n;
}
async function eO(e, t) {
    let n = t,
        i = eg.get(n),
        r = null;
    for (let t = Date.now() + 1500; Date.now() < t; await eS(50)) {
        var a, s;
        let t =
            (a = n = (0, el.UJ)(e) ?? n).isConnected && a.getClientRects().length > 0 && a.clientWidth > 0
                ? { width: a.clientWidth, height: a.clientHeight }
                : null;
        if (null == t) continue;
        let l = await ((s = n),
        (0, I.W)(s, "viewport", {}, { timeoutMs: 300 }).then(
            (e) => {
                let { width: t, height: n } = e;
                return { width: t, height: n };
            },
            () => null,
        ));
        if (null == l) {
            await eS(150);
            break;
        }
        let o = l.width > 0 && l.height > 0,
            d = null != i && eN(i.viewport, l),
            c = d && null != i && eN(i.box, t),
            u = !d && null != r && eN(r, l) && eC(l, t, 32);
        if (c || (o && (eC(l, t, 2) || u))) {
            eg.set(n, { box: t, viewport: l });
            break;
        }
        r = l;
    }
    return n;
}
var eR = n(165610);
async function eL(e) {
    let { onClose: t, ...i } = e,
        { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 887909));
    r((0, em.i)(i), t);
}
async function ey(e, t, i) {
    let { probe: r, spec: a, build: s, onAccepted: l, resolveUploadUrl: o } = i;
    if (!0 === r) return { status: (0, el.rQ)(e) ? "accepted" : "unavailable" };
    if (a?.mode === "widget") {
        let { captureConjureProfileWidget: i } = await Promise.all([
            n.e("644013"),
            n.e("896691"),
            n.e("971156"),
            n.e("260009"),
            n.e("779367"),
            n.e("552653"),
            n.e("85427"),
            n.e("247917"),
            n.e("89530"),
            n.e("64769"),
            n.e("329172"),
            n.e("992956"),
            n.e("880150"),
            n.e("490743"),
            n.e("457428"),
            n.e("7452"),
            n.e("529787"),
            n.e("60002"),
            n.e("189423"),
            n.e("415695"),
            n.e("629972"),
            n.e("253781"),
            n.e("977306"),
            n.e("638781"),
            n.e("847980"),
            n.e("686889"),
            n.e("560570"),
            n.e("471043"),
            n.e("352456"),
            n.e("422037"),
            n.e("258759"),
            n.e("912597"),
            n.e("424199"),
            n.e("496818"),
            n.e("587618"),
            n.e("828598"),
            n.e("645499"),
            n.e("615643"),
            n.e("777489"),
            n.e("968201"),
            n.e("273350"),
            n.e("993103"),
            n.e("188941"),
            n.e("543039"),
            n.e("244560"),
            n.e("253729"),
            n.e("827708"),
            n.e("266900"),
            n.e("948804"),
            n.e("695445"),
            n.e("611523"),
            n.e("199999"),
            n.e("828111"),
            n.e("536200"),
            n.e("183776"),
            n.e("425544"),
            n.e("776195"),
            n.e("672727"),
            n.e("809915"),
            n.e("812310"),
            n.e("428296"),
            n.e("165595"),
            n.e("445124"),
            n.e("832823"),
            n.e("511527"),
            n.e("763070"),
            n.e("381933"),
            n.e("936320"),
            n.e("628439"),
            n.e("756148"),
            n.e("225990"),
            n.e("539620"),
            n.e("133902"),
            n.e("183534"),
            n.e("498215"),
            n.e("466322"),
            n.e("593176"),
            n.e("621624"),
            n.e("121435"),
            n.e("53374"),
            n.e("858514"),
            n.e("463095"),
            n.e("784041"),
            n.e("869546"),
            n.e("682337"),
            n.e("133179"),
            n.e("238412"),
            n.e("454625"),
            n.e("693832"),
            n.e("193158"),
            n.e("455924"),
            n.e("661008"),
            n.e("265696"),
            n.e("718556"),
            n.e("250478"),
            n.e("35485"),
            n.e("252229"),
            n.e("28561"),
            n.e("324622"),
            n.e("795093"),
            n.e("963584"),
            n.e("446800"),
            n.e("306306"),
            n.e("617823"),
            n.e("509856"),
            n.e("165211"),
            n.e("908081"),
            n.e("80077"),
            n.e("829260"),
            n.e("254973"),
            n.e("327198"),
            n.e("504098"),
            n.e("920593"),
            n.e("399624"),
            n.e("664430"),
            n.e("375234"),
            n.e("916519"),
            n.e("192847"),
            n.e("815341"),
            n.e("539166"),
            n.e("407327"),
        ]).then(n.bind(n, 399503));
        return await i(e, { captureId: t, build: s, onAccepted: l, resolveUploadUrl: o });
    }
    let d = (0, c.Wg)(e);
    try {
        let n = await (0, el.o$)(e, 6e3);
        if (null == n) return { status: "unavailable" };
        let i = null == l ? { uploadToken: void 0 } : await l();
        if (null == i) return { status: "unavailable" };
        let r = await eO(e, n),
            d = Q(r, { captureId: t, spec: a, build: s, uploadToken: i.uploadToken, resolveUploadUrl: o });
        function u(e) {
            return Promise.race([d, new Promise((t) => setTimeout(() => t(null), e))]);
        }
        let c = await u(3e3);
        if (null != c) return c;
        let _ = await (0, J.iU)(r, t, a, i.uploadToken);
        if ("accepted" === _.status) return _;
        return (await u(3e3)) ?? _;
    } finally {
        d();
    }
}
async function eD(e, t, n, i) {
    if (!(0, el.rQ)(e)) return { status: "unavailable" };
    let r = (0, c.Wg)(e);
    try {
        let r = await (0, el.o$)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let a = await i?.();
        if (!1 === a) return { status: "unavailable" };
        let s = await eO(e, r),
            l = D(s);
        try {
            let i = !1,
                r = await ea(
                    s,
                    async () => {
                        let r = await ep(e, s, n);
                        return null != r ? r : ((i = !0), await (0, eo.J)(s, t, n));
                    },
                    () =>
                        i
                            ? !n.steps.some((e) => /"Input\.(dispatchKeyEvent|insertText)"/.test(JSON.stringify(e)))
                            : null,
                );
            if ("completed" !== r.status) return r;
            let a = [...ev.drain(e), ...l.drain()];
            if (0 === a.length) return r;
            return { ...r, response: { ...r.response, native: a } };
        } finally {
            l.end();
        }
    } finally {
        r();
    }
}
let ev = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), u("closing the operation session", () => n.end())), (0, c.YN)(e));
    }
    return {
        begin: function (i) {
            (0, c.oJ)(i);
            let r = e(i);
            if (null == r) return;
            let a = t.get(i);
            if (null != a) {
                if (null != a.iframeId && a.iframeId === r.identity) return;
                (t.delete(i), u("replacing a stale operation session", () => a.end()));
            }
            (u("dismissing what was left standing", () => r.dismiss()),
                u("opening the operation session", () => {
                    let e = r.open(),
                        a = (0, c.W3)(() => {
                            (0, c.wK)(i) || n(i);
                        });
                    t.set(i, {
                        iframeId: e.iframeId,
                        drain: () => e.drain(),
                        end: () => {
                            (a(), e.end());
                        },
                    });
                }));
        },
        end: n,
        drain: (e) => t.get(e)?.drain() ?? [],
    };
})((e) => {
    let t = (0, el.UJ)(e);
    return null == t
        ? null
        : {
              identity: y(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, m.lw)(t);
                      null != n && ((0, p.ir)(n), (0, T.OR)(n));
                  })(t),
              open: () => D(t, { beneathBatches: !0 }),
          };
});
(0, c.h2)((e) => {
    (eT(e), es());
    let t = (0, el.UJ)(e);
    null != t &&
        (0, I.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let eb = {
    openConjureAppInstallModal: eL,
    isWindowFocused: function () {
        return o.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return l.A.getDesktopType() === S.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: r, route: a, sound: l, volume: o } = e;
        i.default.showNotification(
            n(608598),
            t,
            r,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                sound: l,
                volume: o,
                fallbackDeepLink: null == a ? void 0 : (0, d.Id)(a),
                onClick: null == a ? void 0 : () => (0, s.pX)(a),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: ey,
    relayPreviewControl: eD,
    abortPreviewControl: function (e) {
        (eT(e), es());
        let t = (0, el.UJ)(e);
        null != t &&
            (0, I.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        (ev.begin(e),
            (function (e) {
                if (null == eA() || eu.has(e)) return;
                let t = { cancelled: !1 };
                (eu.set(e, t),
                    (0, el.o$)(e, 6e3)
                        .then((n) => (null == n || t.cancelled ? null : ef(e, n)))
                        .catch(() => {})
                        .finally(() => {
                            eu.get(e) === t && eu.delete(e);
                        }));
            })(e));
    },
    endPreviewOperation: function (e) {
        (ev.end(e), eT(e), es());
    },
    releasePreviewControl: function (e) {
        (0, c.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of a.A.getAllFrames())
                (0, eR.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && r.A.refreshProxyTicket(t.id);
    },
};
