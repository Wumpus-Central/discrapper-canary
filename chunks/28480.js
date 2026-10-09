n.d(t, { A: () => ep });
var r = n(264686),
    l = n(625180),
    i = n(91242),
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
(n(323874), n(14289), n(35956));
var f = n(141931),
    h = n(941426),
    w = n(475735),
    m = n(192820);
n(321073);
var p = n(508382),
    g = n(365912),
    v = n(192308),
    b = n(186111);
function y(e, t) {
    let n = e.getBoundingClientRect();
    return (
        2 >= Math.abs(n.left - t.left) &&
        2 >= Math.abs(n.top - t.top) &&
        4 >= Math.abs(n.width - t.width) &&
        4 >= Math.abs(n.height - t.height)
    );
}
function M(e, t) {
    if (
        (0, v.hasAnyModalOpen)() ||
        b.A.hasLayers() ||
        (function (e, t) {
            let n = [...document.getElementsByClassName(g.Pb), ...document.querySelectorAll(`[${p.IP}]`)],
                r = [],
                l = 0;
            for (let o of n)
                for (let n of o.querySelectorAll("*")) {
                    if (++l > 500) return !0;
                    if (!(n.contains(e) || r.some((e) => e.contains(n)))) {
                        var i;
                        if (y(n, t)) {
                            r.push(n);
                            continue;
                        }
                        if (
                            ((i = n.getBoundingClientRect()),
                            i.width > 0 &&
                                i.height > 0 &&
                                i.left < t.right &&
                                i.right > t.left &&
                                i.top < t.bottom &&
                                i.bottom > t.top)
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
    for (let l = 0; l < 7; l++)
        for (let i = 0; i < 7; i++) {
            let o = t.left + n + ((t.width - 2 * n) * l) / 6,
                a = t.top + r + ((t.height - 2 * r) * i) / 6,
                u = document.elementsFromPoint(o, a),
                s = u.indexOf(e);
            if (-1 === s || !u.slice(0, s).every((e) => y(e, t))) return !0;
        }
    return !1;
}
var E = n(731854);
let I = new h.Vy("VibegrationsNativeCapture");
function T(e, t) {
    return (I.verbose(`native capture not used: ${e}`, t ?? {}), null);
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
async function A(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return T("no media source id for our own window");
    let r = n.split(":")[1];
    if (null == r || "" === r) return T("unrecognized media source id", { sourceId: n });
    let l = Math.min(
            window.devicePixelRatio,
            1,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        i = Math.ceil(window.outerWidth * l),
        o = Math.ceil(window.outerHeight * l),
        a = m.Ay.getMediaEngine();
    if (a.supports(E.O5.WINDOW_PREVIEWS))
        try {
            let e = w.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await a.getSingleWindowPreview(r, i, o, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [f.fS.WINDOW],
            thumbnailSize: { width: i, height: o },
        }),
        s = u?.find((e) => e.id.split(":")[1] === r);
    return null == s || "" === s.url ? T("own window missing from capture sources") : s.url;
}
async function P() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function O(e, t, n, r) {
    let l = new Image();
    if (((l.decoding = "async"), (l.src = e), await l.decode(), 0 === l.naturalWidth || 0 === l.naturalHeight))
        return T("window still decoded empty");
    let i = l.naturalWidth / window.outerWidth,
        o = l.naturalHeight / window.outerHeight;
    if (i <= 0 || o <= 0 || Math.abs(i - o) > 0.03 * i)
        return T("window still does not match the window geometry", {
            image: { width: l.naturalWidth, height: l.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let a = (function (e, t, n, r) {
        let l = t.x > 2 ? [0, t.x] : [0],
            i = t.y > 2 ? [0, t.y] : [0];
        if (1 === l.length && 1 === i.length) return { x: 0, y: 0 };
        for (let t of l)
            for (let l of i)
                if (
                    (function (e, t, n) {
                        let r = document.createElement("canvas");
                        ((r.width = 1), (r.height = 1));
                        let l = r.getContext("2d");
                        if (null == l) return !1;
                        l.drawImage(e, t, n, 1, 1, 0, 0, 1, 1);
                        let [i, o, a] = l.getImageData(0, 0, 1, 1).data;
                        return i > 150 && a > 150 && o < Math.min(i, a) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((l + 43) * r))
                )
                    return { x: t, y: l };
        return null;
    })(l, n, i, o);
    if (null == a) return T("document not found inside the window still", { inset: n });
    let u = Math.max(0, Math.floor((a.x + t.left) * i)),
        s = Math.max(0, Math.floor((a.y + t.top) * o)),
        d = Math.min(l.naturalWidth - u, Math.round(t.width * i)),
        c = Math.min(l.naturalHeight - s, Math.round(t.height * o));
    if (d < 1 || c < 1) return T("crop resolved empty");
    let f = Math.min(1, 1568 / Math.max(d, c), Math.sqrt(115e4 / (d * c))),
        h = Math.max(1, Math.round(d * f)),
        w = Math.max(1, Math.round(c * f)),
        m = document.createElement("canvas");
    ((m.width = h), (m.height = w));
    let p = m.getContext("2d");
    if (null == p) return T("no 2d context");
    p.drawImage(l, u, s, d, c, 0, 0, h, w);
    let g = `image/${r?.format ?? "webp"}`,
        v = r?.quality == null ? 0.92 : Math.min(1, Math.max(0, r.quality / 100)),
        b = await new Promise((e) => m.toBlob(e, g, v));
    return null == b || b.type !== g
        ? T("encode failed", { type: g })
        : b.size > 5242880
          ? T("encoded capture too large", { bytes: b.size })
          : { blob: b, scale: (h / t.width + w / t.height) / 2 };
}
async function _(e, t) {
    try {
        var n, r, l;
        let i;
        if (null == window.DiscordNative) return T("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (r = n.target) &&
                        ((null != r.ref && "" !== r.ref) || (null != r.selector && "" !== r.selector))
                            ? "element"
                            : null != (l = n.rect) && l.width > 0 && l.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return T("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return T("window not visible");
        let o = S(e);
        if (null == o) return T("frame not fully on screen");
        if (M(e, o)) return T("frame is covered by Discord UI");
        let a = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            u = a.x > 2 || a.y > 2 ? await P() : null;
        try {
            i = await A(o);
        } finally {
            u?.();
        }
        if (null == i) return null;
        let s = S(e);
        if (
            null == s ||
            Math.abs(s.left - o.left) > 1 ||
            Math.abs(s.top - o.top) > 1 ||
            Math.abs(s.width - o.width) > 1 ||
            Math.abs(s.height - o.height) > 1
        )
            return T("frame moved or resized during capture");
        if (M(e, s)) return T("Discord UI covered the frame during capture");
        let d = await O(i, o, a, t.spec);
        if (null == d) return null;
        let c = (function (e) {
            try {
                let t = new URL(e.src, window.location.href);
                return (
                    (t.search = ""),
                    (t.hash = ""),
                    (t.pathname = t.pathname.replace(/[^/]*$/, "")),
                    new URL("discord-cgi/screenshot", t).toString()
                );
            } catch {
                return null;
            }
        })(e);
        if (null == c) return T("frame has no resolvable upload url");
        let f = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(o.width), height: Math.round(o.height) },
                viewport: { width: Math.round(o.width), height: Math.round(o.height) },
                scale: Math.round(1e3 * d.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: o.width <= 768 ? "narrow" : "wide",
                ...(null == t.build ? {} : { build: t.build }),
                source: "native",
            },
            h = {
                "content-type": d.blob.type,
                "x-vibegrations-capture-id": t.captureId,
                "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(f)),
            };
        (null != t.build && (h["x-vibegrations-build"] = t.build),
            null != t.uploadToken && (h["x-vibegrations-capture-token"] = t.uploadToken));
        let w = await fetch(c, { method: "POST", headers: h, body: d.blob });
        if (!w.ok) return T("upload refused", { status: w.status });
        return (
            I.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return T("threw", { err: e });
    }
}
var x = n(251363),
    k = n(192888),
    N = n(621466);
let L = !1;
(document.addEventListener("compositionstart", () => (L = !0), !0),
    document.addEventListener("compositionend", () => (L = !1), !0));
let R = null;
function W(e) {
    if ((0, N.vq)(e, HTMLInputElement) || (0, N.vq)(e, HTMLTextAreaElement)) {
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
function C(e) {
    (e.stop(),
        R === e && (R = null),
        e.personActed ||
            (function e(t) {
                let n = document.activeElement;
                if (t.element.isConnected && n !== t.element && (n === t.iframe || n === document.body)) {
                    if (L)
                        return void document.addEventListener("compositionend", () => e(t), { capture: !0, once: !0 });
                    (t.element.focus({ preventScroll: !0 }), t.restoreSelection?.());
                }
            })(e));
}
async function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
    null != R && R.iframe !== e && $();
    let r =
        R?.iframe === e
            ? R
            : (function (e) {
                  let t = document.activeElement;
                  if (!(0, N.vq)(t, HTMLElement) || t === e || t === document.body) return null;
                  let n = {
                      iframe: e,
                      element: t,
                      restoreSelection: W(t),
                      active: 0,
                      personActed: !1,
                      released: !1,
                      holdRequested: !1,
                      stop: () => {
                          (document.removeEventListener("blur", r, !0),
                              document.removeEventListener("pointerdown", l, !0));
                      },
                  };
                  function r(e) {
                      (0, N.vq)(e.target, Node) &&
                          n.element.contains(e.target) &&
                          (n.restoreSelection = W(n.element) ?? n.restoreSelection);
                  }
                  function l() {
                      ((n.personActed = !0), 0 === n.active && C(n));
                  }
                  return (document.addEventListener("blur", r, !0), document.addEventListener("pointerdown", l, !0), n);
              })(e);
    if (null == r) return await t();
    ((R = r), (r.active += 1));
    try {
        return await t();
    } finally {
        ((r.active -= 1), (r.holdRequested = n() ?? r.holdRequested));
        let t = !r.personActed && !r.released && r.holdRequested && document.activeElement === e;
        0 !== r.active || t || C(r);
    }
}
function $() {
    null != R && ((R.released = !0), 0 === R.active && C(R));
}
var q = n(853555),
    U = n(873715);
let H = null,
    F = null,
    j = new Map(),
    G = null,
    J = 0;
function B() {
    return window.DiscordNative?.frameDebugger ?? null;
}
async function z(e) {
    let t = await Promise.race([
        (0, U.J)(e, `native-cdp-${Date.now()}-${++J}`, {
            steps: [{ action: "cdp", calls: [{ method: "Runtime.releaseObjectGroup", params: {} }] }],
            passive: !0,
        }),
        new Promise((e) => setTimeout(() => e(null), 1500)),
    ]);
    if (t?.status !== "completed") return [];
    let n = t.response.results[0]?.value?.events;
    return Array.isArray(n) ? n.slice(-200) : [];
}
async function V(e, t) {
    let n = B(),
        r = (function (e) {
            try {
                return new URL(e.src, window.location.href).origin;
            } catch {
                return null;
            }
        })(t);
    if (null == n || null == r) return null;
    if (H?.projectId === e && H.origin === r) return H;
    if (null != F) {
        let t = F,
            n = await t.result;
        return t.projectId === e && t.origin === r ? n : null;
    }
    let l = { projectId: e, origin: r, cancelled: !1, result: Promise.resolve(null) };
    function i() {
        return l.cancelled;
    }
    ((l.result = (async () => {
        let l;
        try {
            l = await n.attach(r);
        } catch {
            return null;
        }
        if (
            (G !== n &&
                ((G = n),
                n.onDetached((e) => {
                    H?.id === e && (H = null);
                })),
            i())
        )
            return (n.detach().catch(() => {}), "cancelled");
        let o = { id: l, projectId: e, origin: r, earlierEvents: [] };
        return ((H = o), (o.earlierEvents = await z(t).catch(() => [])), i() ? "cancelled" : o);
    })()),
        (F = l));
    try {
        return await l.result;
    } finally {
        F === l && (F = null);
    }
}
function X(e, t) {
    return { status: "completed", response: { ok: e.ok, results: [e], ...("" === t ? {} : { build: t }) } };
}
async function Y(e, t, n) {
    let r,
        l = B(),
        i = (function (e) {
            if (!0 === e.passive || !0 === e.snapshot || 1 !== e.steps.length) return null;
            let t = e.steps[0],
                n = t.calls;
            return "cdp" !== t.action || !Array.isArray(n) || 0 === n.length || n.length > 200 ? null : n;
        })(n);
    if (null == l || null == i) return null;
    let o = await V(e, t);
    if (null == o) return null;
    if ("cancelled" === o)
        return X({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: 0 }, "");
    let a = Date.now(),
        u = new Promise((e) => {
            r = setTimeout(() => e("timeout"), 1e4);
        });
    try {
        let t = await Promise.race([l.runBatch(i), u]),
            n = Date.now() - a;
        if ("timeout" === t)
            return (
                K(e), X({ action: "cdp", ok: !1, code: "timeout", message: "the batch ran out of time", ms: n }, "")
            );
        if (t.stopped)
            return X({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: n }, t.build);
        let r = [...o.earlierEvents.splice(0), ...t.events],
            s = { replies: t.replies, url: t.url, title: t.title, doc: t.doc, ...(r.length > 0 ? { events: r } : {}) };
        return X({ action: "cdp", ok: !0, value: s, ms: n }, t.build);
    } catch (t) {
        return (K(e), { status: "failed", message: t instanceof Error ? t.message : "the preview debugger failed" });
    } finally {
        clearTimeout(r);
    }
}
function K(e) {
    let t = B(),
        n = j.get(e);
    (null != n && ((n.cancelled = !0), j.delete(e)),
        F?.projectId === e && (F.cancelled = !0),
        null != t && H?.projectId === e && ((H = null), t.detach().catch(() => {})));
}
var Q = n(809685),
    Z = n(777977),
    ee = n(484697);
n(667532);
var et = n(112420),
    en = n(652215);
function er(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let el = {
    [en.e$_.OPEN_CONTEXT_MENU]: (e) =>
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
                          let t = er(r.id);
                          (null != t && n.push(t), e(r.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [en.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: er(e.args.title),
    }),
    [en.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: er(e.args.url),
    }),
    [en.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: er(e.args.preview_title) ?? er(e.args.content),
    }),
    [en.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [en.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [en.e$_.OPEN_GAME_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [en.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [en.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [en.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [en.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [en.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [en.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(el);
let ei = { drain: () => [], end: () => {}, iframeId: null },
    eo = [];
function ea(e) {
    let t = eo.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = el[e.cmd];
    if (null == n) return null;
    let { result: r, answered: l, options: i, subject: o } = n(e);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: l,
                ...(null != i && i.length > 0 ? { options: i } : {}),
                ...(null != o ? { subject: o } : {}),
            }),
        { result: r }
    );
}
function eu(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, ee.lw)(t) ?? null);
}
function es(e, t) {
    var n = eu(e);
    if (null == n) return ei;
    let r = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? eo.push(r) : eo.unshift(r),
        1 === eo.length && (0, et.C)(ea),
        {
            iframeId: n,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = eo.indexOf(r);
                -1 !== e && (eo.splice(e, 1), 0 === eo.length && (0, et.C)(null));
            },
        }
    );
}
var ed = n(226178),
    ec = n(165610);
async function ef(e) {
    let { onClose: t, ...r } = e,
        { openOAuth2Modal: l } = await Promise.resolve().then(n.bind(n, 887909));
    l((0, ed.i)(r), t);
}
async function eh(e, t, r) {
    let { probe: l, spec: i, build: o, onAccepted: a, resolveUploadUrl: u } = r;
    if (!0 === l) return { status: (0, q.rQ)(e) ? "accepted" : "unavailable" };
    if (i?.mode === "widget") {
        let { captureConjureProfileWidget: r } = await Promise.all([
            n.e("253781"),
            n.e("977306"),
            n.e("638781"),
            n.e("847980"),
            n.e("686889"),
            n.e("560570"),
            n.e("471043"),
            n.e("352456"),
            n.e("584996"),
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
            n.e("664430"),
            n.e("375234"),
            n.e("845928"),
            n.e("192847"),
            n.e("81766"),
            n.e("815341"),
            n.e("916519"),
            n.e("794624"),
        ]).then(n.bind(n, 399503));
        return await r(e, { captureId: t, build: o, onAccepted: a, resolveUploadUrl: u });
    }
    let s = await (0, q.o$)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let d = null == a ? { uploadToken: void 0 } : await a();
    if (null == d) return { status: "unavailable" };
    let c = _(s, { captureId: t, spec: i, build: o, uploadToken: d.uploadToken });
    function f(e) {
        return Promise.race([c, new Promise((t) => setTimeout(() => t(null), e))]);
    }
    let h = await f(3e3);
    if (null != h) return h;
    let w = await (0, x.i)(s, t, i, d.uploadToken);
    return "accepted" === w.status ? w : ((await f(3e3)) ?? w);
}
async function ew(e, t, n, r) {
    if (!(0, q.rQ)(e)) return { status: "unavailable" };
    let l = (0, d.Wg)(e);
    try {
        let l = await (0, q.o$)(e, 6e3);
        if (null == l) return { status: "unavailable" };
        let i = await r?.();
        if (!1 === i) return { status: "unavailable" };
        let o = es(l);
        try {
            let r = !1,
                i = await D(
                    l,
                    async () => {
                        let i = await Y(e, l, n);
                        return null != i ? i : ((r = !0), await (0, U.J)(l, t, n));
                    },
                    () =>
                        r
                            ? !n.steps.some((e) => /"Input\.(dispatchKeyEvent|insertText)"/.test(JSON.stringify(e)))
                            : null,
                );
            if ("completed" !== i.status) return i;
            let a = [...em.drain(e), ...o.drain()];
            if (0 === a.length) return i;
            return { ...i, response: { ...i.response, native: a } };
        } finally {
            o.end();
        }
    } finally {
        l();
    }
}
let em = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), c("closing the operation session", () => n.end())), (0, d.YN)(e));
    }
    return {
        begin: function (r) {
            (0, d.oJ)(r);
            let l = e(r);
            if (null == l) return;
            let i = t.get(r);
            if (null != i) {
                if (null != i.iframeId && i.iframeId === l.identity) return;
                (t.delete(r), c("replacing a stale operation session", () => i.end()));
            }
            (c("dismissing what was left standing", () => l.dismiss()),
                c("opening the operation session", () => {
                    let e = l.open(),
                        i = (0, d.W3)(() => {
                            (0, d.wK)(r) || n(r);
                        });
                    t.set(r, {
                        iframeId: e.iframeId,
                        drain: () => e.drain(),
                        end: () => {
                            (i(), e.end());
                        },
                    });
                }));
        },
        end: n,
        drain: (e) => t.get(e)?.drain() ?? [],
    };
})((e) => {
    let t = (0, q.UJ)(e);
    return null == t
        ? null
        : {
              identity: eu(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, ee.lw)(t);
                      null != n && ((0, Q.ir)(n), (0, Z.OR)(n));
                  })(t),
              open: () => es(t, { beneathBatches: !0 }),
          };
});
(0, d.h2)((e) => {
    (K(e), $());
    let t = (0, q.UJ)(e);
    null != t &&
        (0, k.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let ep = {
    openConjureAppInstallModal: ef,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return a.A.getDesktopType() === en.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: l, route: i, sound: a, volume: u } = e;
        r.default.showNotification(
            n(608598),
            t,
            l,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                sound: a,
                volume: u,
                fallbackDeepLink: null == i ? void 0 : (0, s.Id)(i),
                onClick: null == i ? void 0 : () => (0, o.pX)(i),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: eh,
    relayPreviewControl: ew,
    abortPreviewControl: function (e) {
        (K(e), $());
        let t = (0, q.UJ)(e);
        null != t &&
            (0, k.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        (em.begin(e),
            (function (e) {
                if (null == B() || j.has(e)) return;
                let t = { cancelled: !1 };
                (j.set(e, t),
                    (0, q.o$)(e, 6e3)
                        .then((n) => (null == n || t.cancelled ? null : V(e, n)))
                        .catch(() => {})
                        .finally(() => {
                            j.get(e) === t && j.delete(e);
                        }));
            })(e));
    },
    endPreviewOperation: function (e) {
        (em.end(e), K(e), $());
    },
    releasePreviewControl: function (e) {
        (0, d.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of i.A.getAllFrames())
                (0, ec.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && l.A.refreshProxyTicket(t.id);
    },
};
