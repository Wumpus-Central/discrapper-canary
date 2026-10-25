n.d(t, { A: () => X });
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
        console.error(`[conjure] preview native surfaces: ${e} failed`, t);
    }
}
var _ = n(324641),
    E = n(251363),
    A = n(192888),
    h = n(621466);
let f = !1;
(document.addEventListener("compositionstart", () => (f = !0), !0),
    document.addEventListener("compositionend", () => (f = !1), !0));
let I = null;
function p(e) {
    if ((0, h.vq)(e, HTMLInputElement) || (0, h.vq)(e, HTMLTextAreaElement)) {
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
function T(e) {
    (e.stop(),
        I === e && (I = null),
        e.personActed ||
            (function e(t) {
                let n = document.activeElement;
                if (t.element.isConnected && n !== t.element && (n === t.iframe || n === document.body)) {
                    if (f)
                        return void document.addEventListener("compositionend", () => e(t), { capture: !0, once: !0 });
                    (t.element.focus({ preventScroll: !0 }), t.restoreSelection?.());
                }
            })(e));
}
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
    null != I && I.iframe !== e && g();
    let i =
        I?.iframe === e
            ? I
            : (function (e) {
                  let t = document.activeElement;
                  if (!(0, h.vq)(t, HTMLElement) || t === e || t === document.body) return null;
                  let n = {
                      iframe: e,
                      element: t,
                      restoreSelection: p(t),
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
                      (0, h.vq)(e.target, Node) &&
                          n.element.contains(e.target) &&
                          (n.restoreSelection = p(n.element) ?? n.restoreSelection);
                  }
                  function r() {
                      ((n.personActed = !0), 0 === n.active && T(n));
                  }
                  return (document.addEventListener("blur", i, !0), document.addEventListener("pointerdown", r, !0), n);
              })(e);
    if (null == i) return await t();
    ((I = i), (i.active += 1));
    try {
        return await t();
    } finally {
        ((i.active -= 1), (i.holdRequested = n() ?? i.holdRequested));
        let t = !i.personActed && !i.released && i.holdRequested && document.activeElement === e;
        0 !== i.active || t || T(i);
    }
}
function g() {
    null != I && ((I.released = !0), 0 === I.active && T(I));
}
var S = n(853555);
(n(323874), n(14289), n(35956));
var N = n(539197),
    C = n(873715);
let O = null,
    R = null,
    L = new Map(),
    y = null,
    D = 0;
function v() {
    return window.DiscordNative?.frameDebugger ?? null;
}
async function b(e) {
    let t = await Promise.race([
        (0, C.J)(e, `native-cdp-${Date.now()}-${++D}`, {
            steps: [{ action: "cdp", calls: [{ method: "Runtime.releaseObjectGroup", params: {} }] }],
            passive: !0,
        }),
        new Promise((e) => setTimeout(() => e(null), 1500)),
    ]);
    if (t?.status !== "completed") return [];
    let n = t.response.results[0]?.value?.events;
    return Array.isArray(n) ? n.slice(-200) : [];
}
async function M(e, t) {
    let n = v(),
        i = (function (e) {
            try {
                return new URL(e.src, window.location.href).origin;
            } catch {
                return null;
            }
        })(t);
    if (null == n || null == i || t.ownerDocument !== document) return null;
    if (O?.projectId === e && O.origin === i) return O;
    if (null != R) {
        let t = R,
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
            (y !== n &&
                ((y = n),
                n.onDetached((e) => {
                    O?.id === e && ((0, N.nI)(O.projectId), (O = null));
                }),
                n.onInput?.((e, t) => {
                    O?.id === e && (0, N.NL)(O.projectId, t);
                })),
            a())
        )
            return (n.detach().catch(() => {}), "cancelled");
        let s = { id: r, projectId: e, origin: i, earlierEvents: [] };
        return ((O = s), (s.earlierEvents = await b(t).catch(() => [])), a() ? "cancelled" : s);
    })()),
        (R = r));
    try {
        return await r.result;
    } finally {
        R === r && (R = null);
    }
}
function P(e, t) {
    return { status: "completed", response: { ok: e.ok, results: [e], ...("" === t ? {} : { build: t }) } };
}
async function U(e, t, n) {
    let i,
        r = v(),
        a = (function (e) {
            if (!0 === e.passive || !0 === e.snapshot || 1 !== e.steps.length) return null;
            let t = e.steps[0],
                n = t.calls;
            return "cdp" !== t.action || !Array.isArray(n) || 0 === n.length || n.length > 200 ? null : n;
        })(n);
    if (null == r || null == a) return null;
    let s = await M(e, t);
    if (null == s) return null;
    if ("cancelled" === s)
        return P({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: 0 }, "");
    let l = Date.now(),
        o = null != r.onInput;
    o && (0, N.W8)(e, t);
    let d = new Promise((e) => {
        i = setTimeout(() => e("timeout"), 1e4);
    });
    try {
        let t = await Promise.race([r.runBatch(a), d]),
            n = Date.now() - l;
        if ("timeout" === t)
            return (
                w(e), P({ action: "cdp", ok: !1, code: "timeout", message: "the batch ran out of time", ms: n }, "")
            );
        if (t.stopped)
            return P({ action: "cdp", ok: !1, code: "blocked", message: "stopped by the user", ms: n }, t.build);
        let i = [...s.earlierEvents.splice(0), ...t.events],
            o = { replies: t.replies, url: t.url, title: t.title, doc: t.doc, ...(i.length > 0 ? { events: i } : {}) };
        return P({ action: "cdp", ok: !0, value: o, ms: n }, t.build);
    } catch (t) {
        return (w(e), { status: "failed", message: t instanceof Error ? t.message : "the preview debugger failed" });
    } finally {
        (clearTimeout(i), o && (0, N.bq)(e));
    }
}
function w(e) {
    let t = v(),
        n = L.get(e);
    (null != n && ((n.cancelled = !0), L.delete(e)),
        R?.projectId === e && (R.cancelled = !0),
        (0, N.nI)(e),
        null != t && O?.projectId === e && ((O = null), t.detach().catch(() => {})));
}
var G = n(99549),
    x = n(226178);
let k = new WeakMap();
function F(e) {
    return new Promise((t) => setTimeout(t, e));
}
function B(e, t) {
    return e.width === t.width && e.height === t.height;
}
function V(e, t, n) {
    let i = t.width - e.width,
        r = t.height - e.height;
    return i >= -2 && r >= -2 && i <= n && r <= n;
}
async function H(e, t) {
    let n = t,
        i = k.get(n),
        r = null;
    for (let t = Date.now() + 1500; Date.now() < t; await F(50)) {
        var a, s;
        let t =
            (a = n = (0, S.UJ)(e) ?? n).isConnected && a.getClientRects().length > 0 && a.clientWidth > 0
                ? { width: a.clientWidth, height: a.clientHeight }
                : null;
        if (null == t) continue;
        let l = await ((s = n),
        (0, A.W)(s, "viewport", {}, { timeoutMs: 300 }).then(
            (e) => {
                let { width: t, height: n } = e;
                return { width: t, height: n };
            },
            () => null,
        ));
        if (null == l) {
            await F(150);
            break;
        }
        let o = l.width > 0 && l.height > 0,
            d = null != i && B(i.viewport, l),
            c = d && null != i && B(i.box, t),
            u = !d && null != r && B(r, l) && V(l, t, 32);
        if (c || (o && (V(l, t, 2) || u))) {
            k.set(n, { box: t, viewport: l });
            break;
        }
        r = l;
    }
    return n;
}
var j = n(652215),
    W = n(165610);
async function Y(e) {
    let { onClose: t, ...i } = e,
        { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 887909));
    r((0, x.i)(i), t);
}
async function K(e, t, i) {
    let { probe: r, spec: a, build: s, onAccepted: l, resolveUploadUrl: o } = i;
    if (!0 === r) return { status: (0, S.rQ)(e) ? "accepted" : "unavailable" };
    if (a?.mode === "widget") {
        let { captureConjureProfileWidget: i } = await Promise.all([
            n.e("644013"),
            n.e("896691"),
            n.e("971156"),
            n.e("260009"),
            n.e("779367"),
            n.e("552653"),
            n.e("85427"),
            n.e("698584"),
            n.e("967850"),
            n.e("915170"),
            n.e("64769"),
            n.e("329172"),
            n.e("992956"),
            n.e("880150"),
            n.e("490743"),
            n.e("457428"),
            n.e("7452"),
            n.e("205035"),
            n.e("529787"),
            n.e("60002"),
            n.e("189423"),
            n.e("415695"),
            n.e("621820"),
            n.e("253781"),
            n.e("977306"),
            n.e("864875"),
            n.e("847980"),
            n.e("686889"),
            n.e("560570"),
            n.e("471043"),
            n.e("352456"),
            n.e("422037"),
            n.e("903320"),
            n.e("70690"),
            n.e("424199"),
            n.e("587618"),
            n.e("828598"),
            n.e("645499"),
            n.e("726391"),
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
            n.e("205596"),
            n.e("611523"),
            n.e("199999"),
            n.e("828111"),
            n.e("809915"),
            n.e("672727"),
            n.e("812310"),
            n.e("445124"),
            n.e("832823"),
            n.e("511527"),
            n.e("763070"),
            n.e("536200"),
            n.e("776195"),
            n.e("955184"),
            n.e("425544"),
            n.e("628439"),
            n.e("756148"),
            n.e("539620"),
            n.e("225990"),
            n.e("183534"),
            n.e("165595"),
            n.e("498215"),
            n.e("593176"),
            n.e("621624"),
            n.e("133902"),
            n.e("76705"),
            n.e("936320"),
            n.e("53374"),
            n.e("858514"),
            n.e("121435"),
            n.e("716092"),
            n.e("784041"),
            n.e("466322"),
            n.e("133179"),
            n.e("463095"),
            n.e("238412"),
            n.e("454625"),
            n.e("693832"),
            n.e("193158"),
            n.e("661008"),
            n.e("455924"),
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
            n.e("664430"),
            n.e("375234"),
            n.e("916519"),
            n.e("192847"),
            n.e("815341"),
            n.e("407327"),
        ]).then(n.bind(n, 399503));
        return await i(e, { captureId: t, build: s, onAccepted: l, resolveUploadUrl: o });
    }
    let d = (0, c.Wg)(e);
    try {
        let n = await (0, S.o$)(e, 6e3);
        if (null == n) return { status: "unavailable" };
        let i = null == l ? { uploadToken: void 0 } : await l();
        if (null == i) return { status: "unavailable" };
        let r = await H(e, n),
            d = (0, _.WI)(r, { captureId: t, spec: a, build: s, uploadToken: i.uploadToken, resolveUploadUrl: o });
        function u(e) {
            return Promise.race([d, new Promise((t) => setTimeout(() => t(null), e))]);
        }
        let c = await u(3e3);
        if (null != c) return c;
        let A = await (0, E.iU)(r, t, a, i.uploadToken);
        if ("accepted" === A.status) return A;
        return (await u(3e3)) ?? A;
    } finally {
        d();
    }
}
async function $(e, t, n, i) {
    if (!(0, S.rQ)(e)) return { status: "unavailable" };
    let r = (0, c.Wg)(e);
    try {
        let r = await (0, S.o$)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let a = await i?.();
        if (!1 === a) return { status: "unavailable" };
        let s = await H(e, r),
            l = (0, G._q)(s);
        try {
            let i = !1,
                r = await m(
                    s,
                    async () => {
                        let r = await U(e, s, n);
                        return null != r ? r : ((i = !0), await (0, C.J)(s, t, n));
                    },
                    () =>
                        i
                            ? !n.steps.some((e) => /"Input\.(dispatchKeyEvent|insertText)"/.test(JSON.stringify(e)))
                            : null,
                );
            if ("completed" !== r.status) return r;
            let a = [...z.drain(e), ...l.drain()];
            if (0 === a.length) return r;
            return { ...r, response: { ...r.response, native: a } };
        } finally {
            l.end();
        }
    } finally {
        r();
    }
}
let z = (function (e) {
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
    let t = (0, S.UJ)(e);
    return null == t
        ? null
        : { identity: (0, G.B0)(t), dismiss: () => (0, G.op)(t), open: () => (0, G._q)(t, { beneathBatches: !0 }) };
});
(0, c.h2)((e) => {
    (w(e), g());
    let t = (0, S.UJ)(e);
    null != t &&
        (0, A.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let X = {
    openConjureAppInstallModal: Y,
    isWindowFocused: function () {
        return o.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return l.A.getDesktopType() === j.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: r, route: a, sound: l, volume: o } = e;
        i.default.showNotification(
            n(608598),
            t,
            r,
            { notif_type: "CONJURE_ASSISTANT_FINISHED" },
            {
                sound: l,
                volume: o,
                fallbackDeepLink: null == a ? void 0 : (0, d.Id)(a),
                onClick: null == a ? void 0 : () => (0, s.pX)(a),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: K,
    relayPreviewControl: $,
    abortPreviewControl: function (e) {
        (w(e), g());
        let t = (0, S.UJ)(e);
        null != t &&
            (0, A.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        (z.begin(e),
            (function (e) {
                if (null == v() || L.has(e)) return;
                let t = { cancelled: !1 };
                (L.set(e, t),
                    (0, S.o$)(e, 6e3)
                        .then((n) => (null == n || t.cancelled ? null : M(e, n)))
                        .catch(() => {})
                        .finally(() => {
                            L.get(e) === t && L.delete(e);
                        }));
            })(e));
    },
    endPreviewOperation: function (e) {
        (z.end(e), w(e), g());
    },
    releasePreviewControl: function (e) {
        (0, c.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of a.A.getAllFrames())
                (0, W.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && r.A.refreshProxyTicket(t.id);
    },
};
