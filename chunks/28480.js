n.d(t, { A: () => eE });
var r = n(264686),
    i = n(625180),
    l = n(91242),
    o = n(976860),
    a = n(803224),
    u = n(531685),
    s = n(479975);
n(884868);
var d = n(573083);
function c(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
var f = n(141931),
    h = n(941426),
    p = n(475735),
    w = n(192820),
    m = n(192888),
    g = n(809685),
    v = n(777977),
    y = n(484697);
(n(321073), n(667532));
var b = n(112420),
    M = n(652215);
function I(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let E = {
    [M.e$_.OPEN_CONTEXT_MENU]: (e) =>
        "custom" !== e.args.type
            ? { result: { opened: !0 }, answered: "opened, no selection to make" }
            : {
                  result: { opened: !0, selected_id: null },
                  answered: "dismissed",
                  options: (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let r of t) {
                          if (n.length >= 40) break;
                          if (null == r || "object" != typeof r) continue;
                          let t = I(r.id);
                          (null != t && n.push(t), e(r.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [M.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: I(e.args.title),
    }),
    [M.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: I(e.args.url),
    }),
    [M.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: I(e.args.preview_title) ?? I(e.args.content),
    }),
    [M.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [M.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [M.e$_.OPEN_GAME_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [M.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [M.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [M.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [M.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [M.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [M.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(E);
let T = { drain: () => [], end: () => {}, iframeId: null },
    S = [];
function P(e) {
    let t = S.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = E[e.cmd];
    if (null == n) return null;
    let { result: r, answered: i, options: l, subject: o } = n(e);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: i,
                ...(null != l && l.length > 0 ? { options: l } : {}),
                ...(null != o ? { subject: o } : {}),
            }),
        { result: r }
    );
}
function O(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, y.lw)(t) ?? null);
}
function A(e, t) {
    var n = O(e);
    if (null == n) return T;
    let r = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? S.push(r) : S.unshift(r),
        1 === S.length && (0, b.C)(P),
        {
            iframeId: n,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = S.indexOf(r);
                -1 !== e && (S.splice(e, 1), 0 === S.length && (0, b.C)(null));
            },
        }
    );
}
var x = n(508382),
    N = n(365912),
    _ = n(192308),
    k = n(186111),
    W = n(539197);
function C(e, t) {
    let n = e.getBoundingClientRect();
    return (
        2 >= Math.abs(n.left - t.left) &&
        2 >= Math.abs(n.top - t.top) &&
        4 >= Math.abs(n.width - t.width) &&
        4 >= Math.abs(n.height - t.height)
    );
}
function L(e, t) {
    if (
        (0, _.hasAnyModalOpen)() ||
        k.A.hasLayers() ||
        (function (e, t) {
            let n = [...document.getElementsByClassName(N.Pb), ...document.querySelectorAll(`[${x.IP}]`)],
                r = [],
                i = 0;
            for (let o of n)
                for (let n of o.querySelectorAll("*")) {
                    if (++i > 500) return !0;
                    if (!(n.contains(e) || null != n.closest(`[${W.t$}]`) || r.some((e) => e.contains(n)))) {
                        var l;
                        if (C(n, t)) {
                            r.push(n);
                            continue;
                        }
                        if (
                            ((l = n.getBoundingClientRect()),
                            l.width > 0 &&
                                l.height > 0 &&
                                l.left < t.right &&
                                l.right > t.left &&
                                l.top < t.bottom &&
                                l.bottom > t.top)
                        )
                            return !0;
                    }
                }
            return !1;
        })(e, t)
    )
        return !0;
    let n = Math.min(4, t.width / 4),
        r = Math.min(4, t.height / 4);
    for (let i = 0; i < 7; i++)
        for (let l = 0; l < 7; l++) {
            let o = t.left + n + ((t.width - 2 * n) * i) / 6,
                a = t.top + r + ((t.height - 2 * r) * l) / 6,
                u = document.elementsFromPoint(o, a),
                s = u.indexOf(e);
            if (-1 === s || !u.slice(0, s).every((e) => C(e, t))) return !0;
        }
    return !1;
}
var R = n(731854);
let $ = new h.Vy("VibegrationsNativeCapture");
function D(e, t) {
    return ($.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function q() {
    return window.DiscordNative?.activityCapture ?? null;
}
function j(e) {
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
async function U(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return D("no media source id for our own window");
    let r = n.split(":")[1];
    if (null == r || "" === r) return D("unrecognized media source id", { sourceId: n });
    let i = Math.min(
            window.devicePixelRatio,
            1,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * i),
        o = Math.ceil(window.outerHeight * i),
        a = w.Ay.getMediaEngine();
    if (a.supports(R.O5.WINDOW_PREVIEWS))
        try {
            let e = p.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await a.getSingleWindowPreview(r, l, o, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [f.fS.WINDOW],
            thumbnailSize: { width: l, height: o },
        }),
        s = u?.find((e) => e.id.split(":")[1] === r);
    return null == s || "" === s.url ? D("own window missing from capture sources") : s.url;
}
async function H() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function F(e, t, n, r) {
    let i = new Image();
    if (((i.decoding = "async"), (i.src = e), await i.decode(), 0 === i.naturalWidth || 0 === i.naturalHeight))
        return D("window still decoded empty");
    let l = i.naturalWidth / window.outerWidth,
        o = i.naturalHeight / window.outerHeight;
    if (l <= 0 || o <= 0 || Math.abs(l - o) > 0.03 * l)
        return D("window still does not match the window geometry", {
            image: { width: i.naturalWidth, height: i.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let a = (function (e, t, n, r) {
        let i = t.x > 2 ? [0, t.x] : [0],
            l = t.y > 2 ? [0, t.y] : [0];
        if (1 === i.length && 1 === l.length) return { x: 0, y: 0 };
        for (let t of i)
            for (let i of l)
                if (
                    (function (e, t, n) {
                        let r = document.createElement("canvas");
                        ((r.width = 1), (r.height = 1));
                        let i = r.getContext("2d");
                        if (null == i) return !1;
                        i.drawImage(e, t, n, 1, 1, 0, 0, 1, 1);
                        let [l, o, a] = i.getImageData(0, 0, 1, 1).data;
                        return l > 150 && a > 150 && o < Math.min(l, a) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((i + 43) * r))
                )
                    return { x: t, y: i };
        return null;
    })(i, n, l, o);
    if (null == a) return D("document not found inside the window still", { inset: n });
    let u = Math.max(0, Math.floor((a.x + t.left) * l)),
        s = Math.max(0, Math.floor((a.y + t.top) * o)),
        d = Math.min(i.naturalWidth - u, Math.round(t.width * l)),
        c = Math.min(i.naturalHeight - s, Math.round(t.height * o));
    if (d < 1 || c < 1) return D("crop resolved empty");
    let f = Math.min(1, 1568 / Math.max(d, c), Math.sqrt(115e4 / (d * c))),
        h = Math.max(1, Math.round(d * f)),
        p = Math.max(1, Math.round(c * f)),
        w = document.createElement("canvas");
    ((w.width = h), (w.height = p));
    let m = w.getContext("2d");
    if (null == m) return D("no 2d context");
    m.drawImage(i, u, s, d, c, 0, 0, h, p);
    let g = `image/${r?.format ?? "webp"}`,
        v = Math.min(1, Math.max(0, (r?.quality ?? 92) / 100)),
        y = await new Promise((e) => w.toBlob(e, g, v));
    return null == y || y.type !== g
        ? D("encode failed", { type: g })
        : y.size > 5242880
          ? D("encoded capture too large", { bytes: y.size })
          : { blob: y, scale: (h / t.width + p / t.height) / 2 };
}
function B(e) {
    return e.resolveUploadUrl().catch(() => null);
}
function J(e, t, n, r) {
    let i = { "content-type": n.type, "x-vibegrations-capture-id": t.captureId, "x-vibegrations-capture-meta": r };
    return (
        null != t.build && (i["x-vibegrations-build"] = t.build),
        null != t.uploadToken && (i["x-vibegrations-capture-token"] = t.uploadToken),
        fetch(e, { method: "POST", headers: i, body: n })
    );
}
function G(e, t) {
    (0, m.W)(e, "capture-release", { prepareId: t }, { timeoutMs: 1e3 }).catch(() => {});
}
async function z(e, t) {
    let n = performance.now(),
        r = n,
        i = {};
    function l(e) {
        let t = performance.now();
        ((i[`${e}Ms`] = Math.round(t - r)), (r = t));
    }
    function o(e, t) {
        return D(e, { ...t, ...i, totalMs: Math.round(performance.now() - n) });
    }
    try {
        let u,
            s,
            d = e.getBoundingClientRect();
        if (d.width < 40 || d.height < 40) return o("frame too small");
        let c = O(e);
        if (null == c) return o("frame identity unknown");
        let f = B(t);
        r = performance.now();
        let h = `capture-prepare-${t.captureId}`;
        try {
            var a;
            u = await ((a = t.spec),
            (0, m.W)(e, "capture-prepare", null == a ? {} : { spec: a }, { id: h, timeoutMs: 1e3 }));
        } catch (t) {
            return (l("prepare"), G(e, h), o("frame did not prepare", { err: t }));
        }
        if ((l("prepare"), "ready" !== u.phase)) return o("frame refused", { code: u.code, error: u.error });
        let p = u;
        try {
            s = await (function (e, t, n) {
                let r = q();
                if (null == r) return Promise.reject(Error("activityCapture unavailable"));
                let { bounds: i, viewport: l, scale: o } = t;
                return r.captureImage({
                    frameId: e,
                    rect: i,
                    viewportSize: l,
                    outputSize: {
                        width: Math.max(1, Math.round(i.width * o)),
                        height: Math.max(1, Math.round(i.height * o)),
                    },
                    format: n?.format ?? "webp",
                    quality: n?.quality ?? 92,
                    timeoutMs: 1500,
                });
            })(c, p, t.spec);
        } catch (e) {
            return (l("image"), o("host capture failed", { err: e }));
        } finally {
            G(e, h);
        }
        if ((l("image"), s.data.byteLength > 5242880))
            return o("encoded capture too large", { bytes: s.data.byteLength });
        let w = await f;
        if (null == w) return o("no upload url");
        let g = new Blob([s.data], { type: s.mimeType }),
            v = await J(
                w,
                t,
                g,
                (function (e) {
                    try {
                        let t = JSON.parse(decodeURIComponent(e));
                        if (null == t || "object" != typeof t) return e;
                        return encodeURIComponent(JSON.stringify({ ...t, source: "native" }));
                    } catch {
                        return e;
                    }
                })(p.meta),
            );
        if ((l("upload"), !v.ok)) return o("upload refused", { status: v.status });
        let y = Math.round(performance.now() - n);
        return (
            $.verbose(`native capture uploaded in ${y}ms`, {
                id: t.captureId,
                bytes: g.size,
                width: s.width,
                height: s.height,
                ...i,
                totalMs: y,
            }),
            { status: "accepted" }
        );
    } catch (e) {
        return o("threw", { err: e });
    }
}
async function X(e, t) {
    try {
        var n, r, i;
        let l;
        if (null == window.DiscordNative) return D("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (r = n.target) &&
                        ((null != r.ref && "" !== r.ref) || (null != r.selector && "" !== r.selector))
                            ? "element"
                            : null != (i = n.rect) && i.width > 0 && i.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return D("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return D("window not visible");
        let o = j(e);
        if (null == o) return D("frame not fully on screen");
        if (L(e, o)) return D("frame is covered by Discord UI");
        let a = B(t),
            u = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            s = u.x > 2 || u.y > 2 ? await H() : null;
        try {
            l = await U(o);
        } finally {
            s?.();
        }
        if (null == l) return null;
        let d = j(e);
        if (
            null == d ||
            Math.abs(d.left - o.left) > 1 ||
            Math.abs(d.top - o.top) > 1 ||
            Math.abs(d.width - o.width) > 1 ||
            Math.abs(d.height - o.height) > 1
        )
            return D("frame moved or resized during capture");
        if (L(e, d)) return D("Discord UI covered the frame during capture");
        let c = await F(l, o, u, t.spec);
        if (null == c) return null;
        let f = await a;
        if (null == f) return D("no upload url");
        let h = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(o.width), height: Math.round(o.height) },
                viewport: { width: Math.round(o.width), height: Math.round(o.height) },
                scale: Math.round(1e3 * c.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: o.width <= 768 ? "narrow" : "wide",
                ...(null == t.build ? {} : { build: t.build }),
                source: "native",
            },
            p = await J(f, t, c.blob, encodeURIComponent(JSON.stringify(h)));
        if (!p.ok) return D("upload refused", { status: p.status });
        return (
            $.verbose("native capture uploaded", { id: t.captureId, bytes: c.blob.size, scale: h.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return D("threw", { err: e });
    }
}
async function V(e, t) {
    return (null != q() ? await z(e, t) : null) ?? X(e, t);
}
var Y = n(251363),
    K = n(621466);
let Q = !1;
(document.addEventListener("compositionstart", () => (Q = !0), !0),
    document.addEventListener("compositionend", () => (Q = !1), !0));
let Z = null;
function ee(e) {
    if ((0, K.vq)(e, HTMLInputElement) || (0, K.vq)(e, HTMLTextAreaElement)) {
        let { selectionStart: t, selectionEnd: n, selectionDirection: r } = e;
        return null == t || null == n ? null : () => e.setSelectionRange(t, n, r ?? void 0);
    }
    let t = document.getSelection(),
        n = null != t && t.rangeCount > 0 ? t.getRangeAt(0).cloneRange() : null;
    return null != n && e.contains(n.commonAncestorContainer)
        ? () => {
              (t?.removeAllRanges(), t?.addRange(n));
          }
        : null;
}
function et(e) {
    (e.stop(),
        Z === e && (Z = null),
        e.personActed ||
            (function e(t) {
                let n = document.activeElement;
                if (t.element.isConnected && n !== t.element && (n === t.iframe || n === document.body)) {
                    if (Q)
                        return void document.addEventListener("compositionend", () => e(t), { capture: !0, once: !0 });
                    (t.element.focus({ preventScroll: !0 }), t.restoreSelection?.());
                }
            })(e));
}
async function en(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
    null != Z && Z.iframe !== e && er();
    let r =
        Z?.iframe === e
            ? Z
            : (function (e) {
                  let t = document.activeElement;
                  if (!(0, K.vq)(t, HTMLElement) || t === e || t === document.body) return null;
                  let n = {
                      iframe: e,
                      element: t,
                      restoreSelection: ee(t),
                      active: 0,
                      personActed: !1,
                      released: !1,
                      holdRequested: !1,
                      stop: () => {
                          (document.removeEventListener("blur", r, !0),
                              document.removeEventListener("pointerdown", i, !0));
                      },
                  };
                  function r(e) {
                      (0, K.vq)(e.target, Node) &&
                          n.element.contains(e.target) &&
                          (n.restoreSelection = ee(n.element) ?? n.restoreSelection);
                  }
                  function i() {
                      ((n.personActed = !0), 0 === n.active && et(n));
                  }
                  return (document.addEventListener("blur", r, !0), document.addEventListener("pointerdown", i, !0), n);
              })(e);
    if (null == r) return await t();
    ((Z = r), (r.active += 1));
    try {
        return await t();
    } finally {
        ((r.active -= 1), (r.holdRequested = n() ?? r.holdRequested));
        let t = !r.personActed && !r.released && r.holdRequested && document.activeElement === e;
        0 !== r.active || t || et(r);
    }
}
function er() {
    null != Z && ((Z.released = !0), 0 === Z.active && et(Z));
}
var ei = n(853555);
(n(323874), n(14289), n(35956));
var el = n(873715);
let eo = null,
    ea = null,
    eu = new Map(),
    es = null,
    ed = 0;
function ec() {
    return window.DiscordNative?.frameDebugger ?? null;
}
async function ef(e) {
    let t = await Promise.race([
        (0, el.J)(e, `native-cdp-${Date.now()}-${++ed}`, {
            steps: [{ action: "cdp", calls: [{ method: "Runtime.releaseObjectGroup", params: {} }] }],
            passive: !0,
        }),
        new Promise((e) => setTimeout(() => e(null), 1500)),
    ]);
    if (t?.status !== "completed") return [];
    let n = t.response.results[0]?.value?.events;
    return Array.isArray(n) ? n.slice(-200) : [];
}
async function eh(e, t) {
    let n = ec(),
        r = (function (e) {
            try {
                return new URL(e.src, window.location.href).origin;
            } catch {
                return null;
            }
        })(t);
    if (null == n || null == r) return null;
    if (eo?.projectId === e && eo.origin === r) return eo;
    if (null != ea) {
        let t = ea,
            n = await t.result;
        return t.projectId === e && t.origin === r ? n : null;
    }
    let i = { projectId: e, origin: r, cancelled: !1, result: Promise.resolve(null) };
    function l() {
        return i.cancelled;
    }
    ((i.result = (async () => {
        let i;
        try {
            i = await n.attach(r);
        } catch {
            return null;
        }
        if (
            (es !== n &&
                ((es = n),
                n.onDetached((e) => {
                    eo?.id === e && ((0, W.nI)(eo.projectId), (eo = null));
                }),
                n.onInput?.((e, t) => {
                    eo?.id === e && (0, W.NL)(eo.projectId, t);
                })),
            l())
        )
            return (n.detach().catch(() => {}), "cancelled");
        let o = { id: i, projectId: e, origin: r, earlierEvents: [] };
        return ((eo = o), (o.earlierEvents = await ef(t).catch(() => [])), l() ? "cancelled" : o);
    })()),
        (ea = i));
    try {
        return await i.result;
    } finally {
        ea === i && (ea = null);
    }
}
function ep(e, t) {
    return { status: "completed", response: { ok: e.ok, results: [e], ...("" === t ? {} : { build: t }) } };
}
async function ew(e, t, n) {
    let r,
        i = ec(),
        l = (function (e) {
            if (!0 === e.passive || !0 === e.snapshot || 1 !== e.steps.length) return null;
            let t = e.steps[0],
                n = t.calls;
            return "cdp" !== t.action || !Array.isArray(n) || 0 === n.length || n.length > 200 ? null : n;
        })(n);
    if (null == i || null == l) return null;
    let o = await eh(e, t);
    if (null == o) return null;
    if ("cancelled" === o)
        return ep({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: 0 }, "");
    let a = Date.now(),
        u = null != i.onInput;
    u && (0, W.W8)(e, t);
    let s = new Promise((e) => {
        r = setTimeout(() => e("timeout"), 1e4);
    });
    try {
        let t = await Promise.race([i.runBatch(l), s]),
            n = Date.now() - a;
        if ("timeout" === t)
            return (
                em(e), ep({ action: "cdp", ok: !1, code: "timeout", message: "the batch ran out of time", ms: n }, "")
            );
        if (t.stopped)
            return ep({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: n }, t.build);
        let r = [...o.earlierEvents.splice(0), ...t.events],
            u = { replies: t.replies, url: t.url, title: t.title, doc: t.doc, ...(r.length > 0 ? { events: r } : {}) };
        return ep({ action: "cdp", ok: !0, value: u, ms: n }, t.build);
    } catch (t) {
        return (em(e), { status: "failed", message: t instanceof Error ? t.message : "the preview debugger failed" });
    } finally {
        (clearTimeout(r), u && (0, W.bq)(e));
    }
}
function em(e) {
    let t = ec(),
        n = eu.get(e);
    (null != n && ((n.cancelled = !0), eu.delete(e)),
        ea?.projectId === e && (ea.cancelled = !0),
        (0, W.nI)(e),
        null != t && eo?.projectId === e && ((eo = null), t.detach().catch(() => {})));
}
var eg = n(226178),
    ev = n(165610);
async function ey(e) {
    let { onClose: t, ...r } = e,
        { openOAuth2Modal: i } = await Promise.resolve().then(n.bind(n, 887909));
    i((0, eg.i)(r), t);
}
async function eb(e, t, r) {
    let { probe: i, spec: l, build: o, onAccepted: a, resolveUploadUrl: u } = r;
    if (!0 === i) return { status: (0, ei.rQ)(e) ? "accepted" : "unavailable" };
    if (l?.mode === "widget") {
        let { captureConjureProfileWidget: r } = await Promise.all([
            n.e("253781"),
            n.e("977306"),
            n.e("638781"),
            n.e("847980"),
            n.e("686889"),
            n.e("560570"),
            n.e("471043"),
            n.e("352456"),
            n.e("318702"),
            n.e("258759"),
            n.e("912597"),
            n.e("424199"),
            n.e("777489"),
            n.e("968201"),
            n.e("87183"),
            n.e("70594"),
            n.e("993103"),
            n.e("188941"),
            n.e("425544"),
            n.e("936320"),
            n.e("466322"),
            n.e("121435"),
            n.e("53374"),
            n.e("463095"),
            n.e("682337"),
            n.e("133179"),
            n.e("454625"),
            n.e("693832"),
            n.e("193158"),
            n.e("455924"),
            n.e("201050"),
            n.e("265696"),
            n.e("250478"),
            n.e("35485"),
            n.e("286774"),
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
            n.e("245691"),
            n.e("76367"),
            n.e("664430"),
            n.e("375234"),
            n.e("845928"),
            n.e("916519"),
            n.e("192847"),
            n.e("815341"),
            n.e("539166"),
            n.e("794624"),
        ]).then(n.bind(n, 399503));
        return await r(e, { captureId: t, build: o, onAccepted: a, resolveUploadUrl: u });
    }
    let s = await (0, ei.o$)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let d = null == a ? { uploadToken: void 0 } : await a();
    if (null == d) return { status: "unavailable" };
    let c = V(s, { captureId: t, spec: l, build: o, uploadToken: d.uploadToken, resolveUploadUrl: u });
    function f(e) {
        return Promise.race([c, new Promise((t) => setTimeout(() => t(null), e))]);
    }
    let h = await f(3e3);
    if (null != h) return h;
    let p = await (0, Y.i)(s, t, l, d.uploadToken);
    return "accepted" === p.status ? p : ((await f(3e3)) ?? p);
}
async function eM(e, t, n, r) {
    if (!(0, ei.rQ)(e)) return { status: "unavailable" };
    let i = (0, d.Wg)(e);
    try {
        let i = await (0, ei.o$)(e, 6e3);
        if (null == i) return { status: "unavailable" };
        let l = await r?.();
        if (!1 === l) return { status: "unavailable" };
        let o = A(i);
        try {
            let r = !1,
                l = await en(
                    i,
                    async () => {
                        let l = await ew(e, i, n);
                        return null != l ? l : ((r = !0), await (0, el.J)(i, t, n));
                    },
                    () =>
                        r
                            ? !n.steps.some((e) => /"Input\.(dispatchKeyEvent|insertText)"/.test(JSON.stringify(e)))
                            : null,
                );
            if ("completed" !== l.status) return l;
            let a = [...eI.drain(e), ...o.drain()];
            if (0 === a.length) return l;
            return { ...l, response: { ...l.response, native: a } };
        } finally {
            o.end();
        }
    } finally {
        i();
    }
}
let eI = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), c("closing the operation session", () => n.end())), (0, d.YN)(e));
    }
    return {
        begin: function (r) {
            (0, d.oJ)(r);
            let i = e(r);
            if (null == i) return;
            let l = t.get(r);
            if (null != l) {
                if (null != l.iframeId && l.iframeId === i.identity) return;
                (t.delete(r), c("replacing a stale operation session", () => l.end()));
            }
            (c("dismissing what was left standing", () => i.dismiss()),
                c("opening the operation session", () => {
                    let e = i.open(),
                        l = (0, d.W3)(() => {
                            (0, d.wK)(r) || n(r);
                        });
                    t.set(r, {
                        iframeId: e.iframeId,
                        drain: () => e.drain(),
                        end: () => {
                            (l(), e.end());
                        },
                    });
                }));
        },
        end: n,
        drain: (e) => t.get(e)?.drain() ?? [],
    };
})((e) => {
    let t = (0, ei.UJ)(e);
    return null == t
        ? null
        : {
              identity: O(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, y.lw)(t);
                      null != n && ((0, g.ir)(n), (0, v.OR)(n));
                  })(t),
              open: () => A(t, { beneathBatches: !0 }),
          };
});
(0, d.h2)((e) => {
    (em(e), er());
    let t = (0, ei.UJ)(e);
    null != t &&
        (0, m.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let eE = {
    openConjureAppInstallModal: ey,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return a.A.getDesktopType() === M.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: i, route: l, sound: a, volume: u } = e;
        r.default.showNotification(
            n(608598),
            t,
            i,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                sound: a,
                volume: u,
                fallbackDeepLink: null == l ? void 0 : (0, s.Id)(l),
                onClick: null == l ? void 0 : () => (0, o.pX)(l),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: eb,
    relayPreviewControl: eM,
    abortPreviewControl: function (e) {
        (em(e), er());
        let t = (0, ei.UJ)(e);
        null != t &&
            (0, m.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        (eI.begin(e),
            (function (e) {
                if (null == ec() || eu.has(e)) return;
                let t = { cancelled: !1 };
                (eu.set(e, t),
                    (0, ei.o$)(e, 6e3)
                        .then((n) => (null == n || t.cancelled ? null : eh(e, n)))
                        .catch(() => {})
                        .finally(() => {
                            eu.get(e) === t && eu.delete(e);
                        }));
            })(e));
    },
    endPreviewOperation: function (e) {
        (eI.end(e), em(e), er());
    },
    releasePreviewControl: function (e) {
        (0, d.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of l.A.getAllFrames())
                (0, ev.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && i.A.refreshProxyTicket(t.id);
    },
};
