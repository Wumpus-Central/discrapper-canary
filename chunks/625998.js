(n.d(t, { o: () => B }), n(323874), n(14289), n(35956));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(727522),
    i = n(134559),
    a = n(17928),
    c = n(765548),
    f = n(97157),
    d = n(132500),
    m = n(440454),
    p = n(484697),
    E = n(363195),
    h = n(625494);
let b = (0, n(945810).mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var j = n(851907),
    x = n(435558),
    v = n(192308),
    O = n(267102),
    S = n(186111),
    y = n(712687),
    w = n(652215),
    A = n(775602);
let R = (0, x.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    g = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var L = n(333007),
    M = n(866665),
    I = n(955418),
    N = n(533550);
function _(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(I.SV, I.NO);
    if ((u.useEffect(() => () => (0, I.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, p.fl)(t);
    return null == l ? null : L.createPortal((0, r.jsx)(T, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function T(e) {
    let { tooltip: t, iframe: n } = e,
        [, l] = u.useReducer((e) => e + 1, 0);
    u.useLayoutEffect(() => {
        l();
    }, []);
    let o = n.getBoundingClientRect(),
        s = o.left + Math.min(Math.max(t.x, 0), o.width),
        i = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(M.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${s},${i}`,
        children: (0, r.jsx)("span", { className: N.Y, style: { left: s, top: i } }),
    });
}
var P = n(673953),
    C = n(342296),
    U = n(777977),
    k = n(504115);
function H(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(U.$P, U.Eh);
    if ((u.useEffect(() => () => (0, U.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, p.fl)(t);
    return null == l ? null : L.createPortal((0, r.jsx)(F, { popout: n, iframe: l }), l.ownerDocument.body);
}
function F(e) {
    let { popout: t, iframe: n } = e,
        l = u.useRef(null),
        [, o] = u.useReducer((e) => e + 1, 0);
    (u.useLayoutEffect(() => {
        o();
    }, []),
        u.useEffect(() => {
            let e = n.ownerDocument.defaultView;
            if (null != e) return (e.addEventListener("blur", r), () => e.removeEventListener("blur", r));
            function r() {
                n.ownerDocument.activeElement === n && (0, U.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let s = n.getBoundingClientRect(),
        i = s.left + Math.min(Math.max(t.x, 0), s.width),
        a = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(C.A, {
        userId: t.userId,
        targetElementRef: l,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, P.cH)(n),
        positionKey: `${i},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, U.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: k.Y, style: { left: i, top: a } }),
    });
}
var $ = n(809685),
    D = n(429582),
    G = n(698398);
let W = "autoplay; encrypted-media";
function K(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: x,
            allowPopups: L = !1,
            referrerPolicy: M = "origin",
            onLoad: N,
            onIframeMount: T,
            onIframeUnmount: P,
            onGuestReload: C,
            contextSource: k,
            nativeView: F = !1,
        } = e,
        G = (0, j.xi)({}),
        K = (0, s.useMemoOne)(() => (0, d.A)(), [t]),
        B = u.useRef(null),
        [Q, V] = u.useState(!1),
        Y = F && !Q && (0, D.H9)(),
        X = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                l = (0, a.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, v.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, a.bG)([y.A], () => y.A.isOpen()),
                        n = (0, a.bG)([S.A], () => S.A.hasLayers()),
                        [r, l] = u.useState(!1),
                        o = (0, O.aL)();
                    return (
                        u.useEffect(() => {
                            function e() {
                                l(!0);
                            }
                            function t() {
                                l(!1);
                            }
                            return (
                                o.subscribe(w.jej.POPOUT_SHOW, e),
                                o.subscribe(w.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(w.jej.POPOUT_SHOW, e), o.unsubscribe(w.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, i] = u.useState(!1),
                c = (0, O.aL)();
            return (
                u.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (c.dispatch(w.jej.POPOUT_CLOSE), h._.dispatch(w.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, c]),
                u.useEffect(() => {
                    if (l || !s || !t) return;
                    let { current: r } = e,
                        u = o;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || u || R(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", i),
                        n.document.activeElement?.tagName === "IFRAME" || u || r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", i), (u = !0));
                        }
                    );
                }, [t, s, l, e, n, o]),
                i
            );
        })(B, o && !Y, null == G ? window : G, o),
        Z = b.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        q = (0, f.A)(t),
        J = "ready" === q.status ? (q.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        z = { ...x, frame_id: K, platform: i.v.DESKTOP, discord_shim: `${Z}` },
        ee = null != t ? `${t}?${new URLSearchParams(z)}` : null,
        et = (function (e) {
            let { allowPopups: t } = e,
                n = g;
            return (t && (n = [...g, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: L }),
        [en, er] = u.useState(!1),
        eu = (0, a.bG)([E.A], () => E.A.theme),
        el = { ...l };
    null == el.colorScheme && (el.colorScheme = eu === w.NJ8.LIGHT ? "light" : "dark");
    let eo = u.useRef(null);
    function es(e) {
        (eo.current === K && ((0, I.ny)(K), (0, $.ir)(K), (0, U.OR)(K), C?.(K)),
            (eo.current = K),
            null != e.contentWindow && e.contentWindow.postMessage([m.A.HELLO, z], t ?? ""),
            X(!0),
            N?.(e));
    }
    let ei = u.useRef(null),
        { colorScheme: ea } = el,
        ec = (0, c.A)(() =>
            null != ee ? { src: ee, sandbox: et, allow: W, referrerPolicy: M, colorScheme: ea, csp: J } : null,
        ),
        ef = (0, c.A)(es),
        ed = u.useCallback(
            (e) => {
                if (((B.current = e), null == e)) {
                    (ei.current?.destroy(), (ei.current = null), (0, p.$9)(K));
                    return;
                }
                let t = ec();
                (Y &&
                    null != t &&
                    ((ei.current = (0, D.xW)(
                        e,
                        K,
                        t,
                        () => ef(e),
                        () => V(!0),
                    )),
                    null == ei.current && V(!0)),
                    (0, p.M7)(K, e),
                    null != e.contentWindow && (0, p.Yt)(e.contentWindow, K));
            },
            [K, Y, ec, ef],
        );
    return (u.useEffect(() => () => (0, $.ir)(K), [K]),
    !(function (e, t) {
        let {
                onIframeMount: n,
                onIframeUnmount: r,
                isNewIframe: l = !0,
                isIframeRetiring: o = !0,
                contextSource: s,
            } = t,
            i = u.useRef(n),
            a = u.useRef(r),
            c = u.useRef(l),
            f = u.useRef(o),
            d = u.useRef(s);
        (u.useEffect(() => {
            ((i.current = n), (a.current = r), (c.current = l), (f.current = o), (d.current = s));
        }),
            u.useEffect(
                () => (
                    c.current &&
                        (h._.dispatch(w.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                        i.current?.(e)),
                    () => {
                        f.current && (h._.dispatch(w.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                    }
                ),
                [e],
            ));
    })(K, { onIframeMount: T, onIframeUnmount: P, contextSource: (0, s.useMemoOne)(() => k, [t]) }),
    u.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            er(t);
        }
        return (
            h._.subscribe(w.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                h._.unsubscribe(w.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    u.useEffect(() => {
        ei.current?.setInputSuspended(en);
    }, [en, ed]),
    u.useEffect(() => {
        null != ea && ei.current?.setColorScheme(ea);
    }, [ea, ed]),
    en && (el.pointerEvents = "none"),
    "loading" === q.status || "failed" === q.status)
        ? null
        : null != ee
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    Y
                        ? (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ed,
                                  style: { ...el, colorScheme: "normal", pointerEvents: "none" },
                                  sandbox: "",
                                  className: n,
                              },
                              "native-view",
                          )
                        : (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ed,
                                  csp: J,
                                  style: el,
                                  allow: W,
                                  referrerPolicy: M,
                                  onLoad: (e) => es(e.currentTarget),
                                  sandbox: et,
                                  className: n,
                                  src: ee,
                              },
                              "page",
                          ),
                    (0, r.jsx)(_, { iframeId: K }),
                    (0, r.jsx)(H, { iframeId: K }),
                ],
            })
          : null;
}
function B(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: l } = n,
        [s, i] = u.useState(!1),
        a = u.useCallback(
            (e) => {
                (i(!0), l?.(e));
            },
            [l],
        );
    return (0, r.jsxs)("div", {
        className: G.Qf,
        children: [
            !s && (0, r.jsx)("div", { className: o()(G.Qf, !0 !== t ? G.SL : void 0) }),
            (0, r.jsx)("div", {
                className: o()(G.Qf, s ? void 0 : G.Ar),
                children: (0, r.jsx)(K, { ...n, onLoad: a }),
            }),
        ],
    });
}
