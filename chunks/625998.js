(n.d(t, { o: () => K }), n(323874), n(14289), n(35956));
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
    O = n(435558),
    v = n(192308),
    w = n(267102),
    x = n(186111),
    S = n(712687),
    R = n(652215),
    y = n(775602);
let A = (0, O.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    g = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var L = n(333007),
    M = n(866665),
    T = n(955418),
    I = n(533550);
function N(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(T.SV, T.NO);
    if ((u.useEffect(() => () => (0, T.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, p.fl)(t);
    return null == l ? null : L.createPortal((0, r.jsx)(P, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function P(e) {
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
        children: (0, r.jsx)("span", { className: I.Y, style: { left: s, top: i } }),
    });
}
var _ = n(673953),
    C = n(342296),
    U = n(777977),
    H = n(504115);
function k(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(U.$P, U.Eh);
    if ((u.useEffect(() => () => (0, U.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, p.fl)(t);
    return null == l ? null : L.createPortal((0, r.jsx)(D, { popout: n, iframe: l }), l.ownerDocument.body);
}
function D(e) {
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
        appContext: (0, _.cH)(n),
        positionKey: `${i},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, U.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: H.Y, style: { left: i, top: a } }),
    });
}
var F = n(809685),
    $ = n(429582),
    G = n(698398);
let W = "autoplay; encrypted-media";
function B(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: O,
            allowPopups: L = !1,
            referrerPolicy: M = "origin",
            onLoad: I,
            onIframeMount: P,
            onIframeUnmount: _,
            onGuestReload: C,
            contextSource: H,
            nativeView: D = !1,
        } = e,
        G = (0, j.xi)({}),
        B = (0, s.useMemoOne)(() => (0, d.A)(), [t]),
        K = u.useRef(null),
        [V, Y] = u.useState(!1),
        Q = D && !V && (0, $.H9)(),
        X = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                l = (0, a.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, v.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, a.bG)([S.A], () => S.A.isOpen()),
                        n = (0, a.bG)([x.A], () => x.A.hasLayers()),
                        [r, l] = u.useState(!1),
                        o = (0, w.aL)();
                    return (
                        u.useEffect(() => {
                            function e() {
                                l(!0);
                            }
                            function t() {
                                l(!1);
                            }
                            return (
                                o.subscribe(R.jej.POPOUT_SHOW, e),
                                o.subscribe(R.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(R.jej.POPOUT_SHOW, e), o.unsubscribe(R.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, i] = u.useState(!1),
                c = (0, w.aL)();
            return (
                u.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (c.dispatch(R.jej.POPOUT_CLOSE), h._.dispatch(R.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, c]),
                u.useEffect(() => {
                    if (l || !s || !t) return;
                    let { current: r } = e,
                        u = o;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || u || A(e);
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
        })(K, o && !Q, null == G ? window : G, o),
        J = b.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        Z = (0, f.A)(t),
        q = "ready" === Z.status ? (Z.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        z = { ...O, frame_id: B, platform: i.v.DESKTOP, discord_shim: `${J}` },
        ee = null != t ? `${t}?${new URLSearchParams(z)}` : null,
        et = (function (e) {
            let { allowPopups: t } = e,
                n = g;
            return (t && (n = [...g, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: L }),
        [en, er] = u.useState(!1),
        eu = (0, a.bG)([E.A], () => E.A.theme),
        el = { ...l };
    null == el.colorScheme && (el.colorScheme = eu === R.NJ8.LIGHT ? "light" : "dark");
    let eo = u.useRef(null);
    function es(e) {
        (eo.current === B && ((0, T.ny)(B), (0, F.ir)(B), (0, U.OR)(B), C?.(B)),
            (eo.current = B),
            null != e.contentWindow && e.contentWindow.postMessage([m.A.HELLO, z], t ?? ""),
            X(!0),
            I?.(e));
    }
    let ei = u.useRef(null),
        { colorScheme: ea } = el,
        ec = (0, c.A)(() =>
            null != ee ? { src: ee, sandbox: et, allow: W, referrerPolicy: M, colorScheme: ea, csp: q } : null,
        ),
        ef = (0, c.A)(es),
        ed = u.useCallback(
            (e) => {
                if (((K.current = e), null == e)) {
                    (ei.current?.destroy(), (ei.current = null), (0, p.$9)(B));
                    return;
                }
                let t = ec();
                (Q &&
                    null != t &&
                    ((ei.current = (0, $.xW)(
                        e,
                        B,
                        t,
                        () => ef(e),
                        () => Y(!0),
                    )),
                    null == ei.current && Y(!0)),
                    (0, p.M7)(B, e),
                    null != e.contentWindow && (0, p.Yt)(e.contentWindow, B));
            },
            [B, Q, ec, ef],
        );
    return (u.useEffect(() => () => (0, F.ir)(B), [B]),
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
                        (h._.dispatch(R.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                        i.current?.(e)),
                    () => {
                        f.current && (h._.dispatch(R.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                    }
                ),
                [e],
            ));
    })(B, { onIframeMount: P, onIframeUnmount: _, contextSource: (0, s.useMemoOne)(() => H, [t]) }),
    u.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            er(t);
        }
        return (
            h._.subscribe(R.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                h._.unsubscribe(R.jej.MANUAL_IFRAME_RESIZING, e);
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
    "loading" === Z.status || "failed" === Z.status)
        ? null
        : null != ee
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    Q
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
                                  csp: q,
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
                    (0, r.jsx)(N, { iframeId: B }),
                    (0, r.jsx)(k, { iframeId: B }),
                ],
            })
          : null;
}
function K(e) {
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
                children: (0, r.jsx)(B, { ...n, onLoad: a }),
            }),
        ],
    });
}
