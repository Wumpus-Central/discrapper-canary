n.d(t, { A: () => eg });
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
(n(323874), n(14289), n(35956));
var f = n(141931),
    h = n(941426),
    p = n(475735),
    w = n(192820);
n(321073);
var m = n(508382),
    g = n(365912),
    v = n(192308),
    b = n(186111),
    y = n(539197);
function M(e, t) {
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
        (0, v.hasAnyModalOpen)() ||
        b.A.hasLayers() ||
        (function (e, t) {
            let n = [...document.getElementsByClassName(g.Pb), ...document.querySelectorAll(`[${m.IP}]`)],
                r = [],
                i = 0;
            for (let o of n)
                for (let n of o.querySelectorAll("*")) {
                    if (++i > 500) return !0;
                    if (!(n.contains(e) || null != n.closest(`[${y.t$}]`) || r.some((e) => e.contains(n)))) {
                        var l;
                        if (M(n, t)) {
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
            if (-1 === s || !u.slice(0, s).every((e) => M(e, t))) return !0;
        }
    return !1;
}
var E = n(731854);
let T = new h.Vy("VibegrationsNativeCapture");
function S(e, t) {
    return (T.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function P(e) {
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
    if (null == n) return S("no media source id for our own window");
    let r = n.split(":")[1];
    if (null == r || "" === r) return S("unrecognized media source id", { sourceId: n });
    let i = Math.min(
            window.devicePixelRatio,
            1,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * i),
        o = Math.ceil(window.outerHeight * i),
        a = w.Ay.getMediaEngine();
    if (a.supports(E.O5.WINDOW_PREVIEWS))
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
    return null == s || "" === s.url ? S("own window missing from capture sources") : s.url;
}
async function O() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function _(e, t, n, r) {
    let i = new Image();
    if (((i.decoding = "async"), (i.src = e), await i.decode(), 0 === i.naturalWidth || 0 === i.naturalHeight))
        return S("window still decoded empty");
    let l = i.naturalWidth / window.outerWidth,
        o = i.naturalHeight / window.outerHeight;
    if (l <= 0 || o <= 0 || Math.abs(l - o) > 0.03 * l)
        return S("window still does not match the window geometry", {
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
    if (null == a) return S("document not found inside the window still", { inset: n });
    let u = Math.max(0, Math.floor((a.x + t.left) * l)),
        s = Math.max(0, Math.floor((a.y + t.top) * o)),
        d = Math.min(i.naturalWidth - u, Math.round(t.width * l)),
        c = Math.min(i.naturalHeight - s, Math.round(t.height * o));
    if (d < 1 || c < 1) return S("crop resolved empty");
    let f = Math.min(1, 1568 / Math.max(d, c), Math.sqrt(115e4 / (d * c))),
        h = Math.max(1, Math.round(d * f)),
        p = Math.max(1, Math.round(c * f)),
        w = document.createElement("canvas");
    ((w.width = h), (w.height = p));
    let m = w.getContext("2d");
    if (null == m) return S("no 2d context");
    m.drawImage(i, u, s, d, c, 0, 0, h, p);
    let g = `image/${r?.format ?? "webp"}`,
        v = r?.quality == null ? 0.92 : Math.min(1, Math.max(0, r.quality / 100)),
        b = await new Promise((e) => w.toBlob(e, g, v));
    return null == b || b.type !== g
        ? S("encode failed", { type: g })
        : b.size > 5242880
          ? S("encoded capture too large", { bytes: b.size })
          : { blob: b, scale: (h / t.width + p / t.height) / 2 };
}
async function x(e, t) {
    try {
        var n, r, i;
        let l;
        if (null == window.DiscordNative) return S("not the desktop app");
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
            return S("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return S("window not visible");
        let o = P(e);
        if (null == o) return S("frame not fully on screen");
        if (I(e, o)) return S("frame is covered by Discord UI");
        let a = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            u = a.x > 2 || a.y > 2 ? await O() : null;
        try {
            l = await A(o);
        } finally {
            u?.();
        }
        if (null == l) return null;
        let s = P(e);
        if (
            null == s ||
            Math.abs(s.left - o.left) > 1 ||
            Math.abs(s.top - o.top) > 1 ||
            Math.abs(s.width - o.width) > 1 ||
            Math.abs(s.height - o.height) > 1
        )
            return S("frame moved or resized during capture");
        if (I(e, s)) return S("Discord UI covered the frame during capture");
        let d = await _(l, o, a, t.spec);
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
        if (null == c) return S("frame has no resolvable upload url");
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
        let p = await fetch(c, { method: "POST", headers: h, body: d.blob });
        if (!p.ok) return S("upload refused", { status: p.status });
        return (
            T.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return S("threw", { err: e });
    }
}
var k = n(251363),
    N = n(192888),
    W = n(621466);
let L = !1;
(document.addEventListener("compositionstart", () => (L = !0), !0),
    document.addEventListener("compositionend", () => (L = !1), !0));
let R = null;
function C(e) {
    if ((0, W.vq)(e, HTMLInputElement) || (0, W.vq)(e, HTMLTextAreaElement)) {
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
function $(e) {
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
    null != R && R.iframe !== e && q();
    let r =
        R?.iframe === e
            ? R
            : (function (e) {
                  let t = document.activeElement;
                  if (!(0, W.vq)(t, HTMLElement) || t === e || t === document.body) return null;
                  let n = {
                      iframe: e,
                      element: t,
                      restoreSelection: C(t),
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
                      (0, W.vq)(e.target, Node) &&
                          n.element.contains(e.target) &&
                          (n.restoreSelection = C(n.element) ?? n.restoreSelection);
                  }
                  function i() {
                      ((n.personActed = !0), 0 === n.active && $(n));
                  }
                  return (document.addEventListener("blur", r, !0), document.addEventListener("pointerdown", i, !0), n);
              })(e);
    if (null == r) return await t();
    ((R = r), (r.active += 1));
    try {
        return await t();
    } finally {
        ((r.active -= 1), (r.holdRequested = n() ?? r.holdRequested));
        let t = !r.personActed && !r.released && r.holdRequested && document.activeElement === e;
        0 !== r.active || t || $(r);
    }
}
function q() {
    null != R && ((R.released = !0), 0 === R.active && $(R));
}
var j = n(853555),
    H = n(873715);
let U = null,
    F = null,
    B = new Map(),
    G = null,
    J = 0;
function X() {
    return window.DiscordNative?.frameDebugger ?? null;
}
async function z(e) {
    let t = await Promise.race([
        (0, H.J)(e, `native-cdp-${Date.now()}-${++J}`, {
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
    let n = X(),
        r = (function (e) {
            try {
                return new URL(e.src, window.location.href).origin;
            } catch {
                return null;
            }
        })(t);
    if (null == n || null == r) return null;
    if (U?.projectId === e && U.origin === r) return U;
    if (null != F) {
        let t = F,
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
            (G !== n &&
                ((G = n),
                n.onDetached((e) => {
                    U?.id === e && ((0, y.nI)(U.projectId), (U = null));
                }),
                n.onInput?.((e, t) => {
                    U?.id === e && (0, y.NL)(U.projectId, t);
                })),
            l())
        )
            return (n.detach().catch(() => {}), "cancelled");
        let o = { id: i, projectId: e, origin: r, earlierEvents: [] };
        return ((U = o), (o.earlierEvents = await z(t).catch(() => [])), l() ? "cancelled" : o);
    })()),
        (F = i));
    try {
        return await i.result;
    } finally {
        F === i && (F = null);
    }
}
function Y(e, t) {
    return { status: "completed", response: { ok: e.ok, results: [e], ...("" === t ? {} : { build: t }) } };
}
async function K(e, t, n) {
    let r,
        i = X(),
        l = (function (e) {
            if (!0 === e.passive || !0 === e.snapshot || 1 !== e.steps.length) return null;
            let t = e.steps[0],
                n = t.calls;
            return "cdp" !== t.action || !Array.isArray(n) || 0 === n.length || n.length > 200 ? null : n;
        })(n);
    if (null == i || null == l) return null;
    let o = await V(e, t);
    if (null == o) return null;
    if ("cancelled" === o)
        return Y({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: 0 }, "");
    let a = Date.now(),
        u = null != i.onInput;
    u && (0, y.W8)(e, t);
    let s = new Promise((e) => {
        r = setTimeout(() => e("timeout"), 1e4);
    });
    try {
        let t = await Promise.race([i.runBatch(l), s]),
            n = Date.now() - a;
        if ("timeout" === t)
            return (
                Q(e), Y({ action: "cdp", ok: !1, code: "timeout", message: "the batch ran out of time", ms: n }, "")
            );
        if (t.stopped)
            return Y({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: n }, t.build);
        let r = [...o.earlierEvents.splice(0), ...t.events],
            u = { replies: t.replies, url: t.url, title: t.title, doc: t.doc, ...(r.length > 0 ? { events: r } : {}) };
        return Y({ action: "cdp", ok: !0, value: u, ms: n }, t.build);
    } catch (t) {
        return (Q(e), { status: "failed", message: t instanceof Error ? t.message : "the preview debugger failed" });
    } finally {
        (clearTimeout(r), u && (0, y.bq)(e));
    }
}
function Q(e) {
    let t = X(),
        n = B.get(e);
    (null != n && ((n.cancelled = !0), B.delete(e)),
        F?.projectId === e && (F.cancelled = !0),
        (0, y.nI)(e),
        null != t && U?.projectId === e && ((U = null), t.detach().catch(() => {})));
}
var Z = n(809685),
    ee = n(777977),
    et = n(484697);
n(667532);
var en = n(112420),
    er = n(652215);
function ei(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let el = {
    [er.e$_.OPEN_CONTEXT_MENU]: (e) =>
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
                          let t = ei(r.id);
                          (null != t && n.push(t), e(r.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [er.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: ei(e.args.title),
    }),
    [er.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: ei(e.args.url),
    }),
    [er.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: ei(e.args.preview_title) ?? ei(e.args.content),
    }),
    [er.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [er.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [er.e$_.OPEN_GAME_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [er.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [er.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [er.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [er.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [er.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [er.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(el);
let eo = { drain: () => [], end: () => {}, iframeId: null },
    ea = [];
function eu(e) {
    let t = ea.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = el[e.cmd];
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
function es(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, et.lw)(t) ?? null);
}
function ed(e, t) {
    var n = es(e);
    if (null == n) return eo;
    let r = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? ea.push(r) : ea.unshift(r),
        1 === ea.length && (0, en.C)(eu),
        {
            iframeId: n,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = ea.indexOf(r);
                -1 !== e && (ea.splice(e, 1), 0 === ea.length && (0, en.C)(null));
            },
        }
    );
}
var ec = n(226178),
    ef = n(165610);
async function eh(e) {
    let { onClose: t, ...r } = e,
        { openOAuth2Modal: i } = await Promise.resolve().then(n.bind(n, 887909));
    i((0, ec.i)(r), t);
}
async function ep(e, t, r) {
    let { probe: i, spec: l, build: o, onAccepted: a, resolveUploadUrl: u } = r;
    if (!0 === i) return { status: (0, j.rQ)(e) ? "accepted" : "unavailable" };
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
    let s = await (0, j.o$)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let d = null == a ? { uploadToken: void 0 } : await a();
    if (null == d) return { status: "unavailable" };
    let c = x(s, { captureId: t, spec: l, build: o, uploadToken: d.uploadToken });
    function f(e) {
        return Promise.race([c, new Promise((t) => setTimeout(() => t(null), e))]);
    }
    let h = await f(3e3);
    if (null != h) return h;
    let p = await (0, k.i)(s, t, l, d.uploadToken);
    return "accepted" === p.status ? p : ((await f(3e3)) ?? p);
}
async function ew(e, t, n, r) {
    if (!(0, j.rQ)(e)) return { status: "unavailable" };
    let i = (0, d.Wg)(e);
    try {
        let i = await (0, j.o$)(e, 6e3);
        if (null == i) return { status: "unavailable" };
        let l = await r?.();
        if (!1 === l) return { status: "unavailable" };
        let o = ed(i);
        try {
            let r = !1,
                l = await D(
                    i,
                    async () => {
                        let l = await K(e, i, n);
                        return null != l ? l : ((r = !0), await (0, H.J)(i, t, n));
                    },
                    () =>
                        r
                            ? !n.steps.some((e) => /"Input\.(dispatchKeyEvent|insertText)"/.test(JSON.stringify(e)))
                            : null,
                );
            if ("completed" !== l.status) return l;
            let a = [...em.drain(e), ...o.drain()];
            if (0 === a.length) return l;
            return { ...l, response: { ...l.response, native: a } };
        } finally {
            o.end();
        }
    } finally {
        i();
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
    let t = (0, j.UJ)(e);
    return null == t
        ? null
        : {
              identity: es(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, et.lw)(t);
                      null != n && ((0, Z.ir)(n), (0, ee.OR)(n));
                  })(t),
              open: () => ed(t, { beneathBatches: !0 }),
          };
});
(0, d.h2)((e) => {
    (Q(e), q());
    let t = (0, j.UJ)(e);
    null != t &&
        (0, N.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let eg = {
    openConjureAppInstallModal: eh,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return a.A.getDesktopType() === er.nRU.NEVER;
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
    relayPreviewCapture: ep,
    relayPreviewControl: ew,
    abortPreviewControl: function (e) {
        (Q(e), q());
        let t = (0, j.UJ)(e);
        null != t &&
            (0, N.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        (em.begin(e),
            (function (e) {
                if (null == X() || B.has(e)) return;
                let t = { cancelled: !1 };
                (B.set(e, t),
                    (0, j.o$)(e, 6e3)
                        .then((n) => (null == n || t.cancelled ? null : V(e, n)))
                        .catch(() => {})
                        .finally(() => {
                            B.get(e) === t && B.delete(e);
                        }));
            })(e));
    },
    endPreviewOperation: function (e) {
        (em.end(e), Q(e), q());
    },
    releasePreviewControl: function (e) {
        (0, d.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of l.A.getAllFrames())
                (0, ef.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && i.A.refreshProxyTicket(t.id);
    },
};
