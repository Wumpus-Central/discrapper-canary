(n.d(t, { o: () => B }), n(323874), n(14289), n(35956));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    o = n.n(l),
    i = n(727522),
    s = n(134559),
    a = n(17928),
    c = n(765548),
    f = n(132500),
    d = n(440454),
    m = n(484697),
    p = n(363195),
    E = n(625494);
let h = (0, n(945810).mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b = n(851907),
    j = n(435558),
    O = n(192308),
    w = n(267102),
    x = n(186111),
    S = n(712687),
    v = n(652215),
    R = n(775602);
let A = (0, j.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    y = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var L = n(333007),
    g = n(866665),
    M = n(955418),
    T = n(533550);
function I(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(M.SV, M.NO);
    if ((u.useEffect(() => () => (0, M.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, m.fl)(t);
    return null == l ? null : L.createPortal((0, r.jsx)(N, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function N(e) {
    let { tooltip: t, iframe: n } = e,
        [, l] = u.useReducer((e) => e + 1, 0);
    u.useLayoutEffect(() => {
        l();
    }, []);
    let o = n.getBoundingClientRect(),
        i = o.left + Math.min(Math.max(t.x, 0), o.width),
        s = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(g.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${i},${s}`,
        children: (0, r.jsx)("span", { className: T.Y, style: { left: i, top: s } }),
    });
}
var P = n(673953),
    _ = n(342296),
    C = n(777977),
    U = n(504115);
function H(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(C.$P, C.Eh);
    if ((u.useEffect(() => () => (0, C.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, m.fl)(t);
    return null == l ? null : L.createPortal((0, r.jsx)(k, { popout: n, iframe: l }), l.ownerDocument.body);
}
function k(e) {
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
                n.ownerDocument.activeElement === n && (0, C.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let i = n.getBoundingClientRect(),
        s = i.left + Math.min(Math.max(t.x, 0), i.width),
        a = i.top + Math.min(Math.max(t.y, 0), i.height);
    return (0, r.jsx)(_.A, {
        userId: t.userId,
        targetElementRef: l,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, P.cH)(n),
        positionKey: `${s},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, C.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: U.Y, style: { left: s, top: a } }),
    });
}
var D = n(809685),
    $ = n(429582),
    F = n(698398);
let G = "autoplay; encrypted-media";
function W(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: j,
            allowPopups: L = !1,
            referrerPolicy: g = "origin",
            onLoad: T,
            onIframeMount: N,
            onIframeUnmount: P,
            onGuestReload: _,
            contextSource: U,
            nativeView: k = !1,
        } = e,
        F = (0, b.xi)({}),
        W = (0, i.useMemoOne)(() => (0, f.A)(), [t]),
        B = u.useRef(null),
        [K, V] = u.useState(!1),
        Y = k && !K && (0, $.H9)(),
        Q = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                l = (0, a.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, O.useModalsStore)(
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
                                o.subscribe(v.jej.POPOUT_SHOW, e),
                                o.subscribe(v.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(v.jej.POPOUT_SHOW, e), o.unsubscribe(v.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [i, s] = u.useState(!1),
                c = (0, w.aL)();
            return (
                u.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (c.dispatch(v.jej.POPOUT_CLOSE), E._.dispatch(v.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, c]),
                u.useEffect(() => {
                    if (l || !i || !t) return;
                    let { current: r } = e,
                        u = o;
                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || u || A(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", s),
                        n.document.activeElement?.tagName === "IFRAME" || u || r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", s), (u = !0));
                        }
                    );
                }, [t, i, l, e, n, o]),
                s
            );
        })(B, o && !Y, null == F ? window : F, o),
        X = h.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        J = { ...j, frame_id: W, platform: s.v.DESKTOP, discord_shim: `${X}` },
        Z = null != t ? `${t}?${new URLSearchParams(J)}` : null,
        q = (function (e) {
            let { allowPopups: t } = e,
                n = y;
            return (t && (n = [...y, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: L }),
        [z, ee] = u.useState(!1),
        et = (0, a.bG)([p.A], () => p.A.theme),
        en = { ...l };
    null == en.colorScheme && (en.colorScheme = et === v.NJ8.LIGHT ? "light" : "dark");
    let er = u.useRef(null);
    function eu(e) {
        (er.current === W && ((0, M.ny)(W), (0, D.ir)(W), (0, C.OR)(W), _?.(W)),
            (er.current = W),
            null != e.contentWindow && e.contentWindow.postMessage([d.A.HELLO, J], t ?? ""),
            Q(!0),
            T?.(e));
    }
    let el = u.useRef(null),
        { colorScheme: eo } = en,
        ei = (0, c.A)(() => (null != Z ? { src: Z, sandbox: q, allow: G, referrerPolicy: g, colorScheme: eo } : null)),
        es = (0, c.A)(eu),
        ea = u.useCallback(
            (e) => {
                if (((B.current = e), null == e)) {
                    (el.current?.destroy(), (el.current = null), (0, m.$9)(W));
                    return;
                }
                let t = ei();
                (Y &&
                    null != t &&
                    ((el.current = (0, $.xW)(
                        e,
                        W,
                        t,
                        () => es(e),
                        () => V(!0),
                    )),
                    null == el.current && V(!0)),
                    (0, m.M7)(W, e),
                    null != e.contentWindow && (0, m.Yt)(e.contentWindow, W));
            },
            [W, Y, ei, es],
        );
    return (
        u.useEffect(() => () => (0, D.ir)(W), [W]),
        !(function (e, t) {
            let {
                    onIframeMount: n,
                    onIframeUnmount: r,
                    isNewIframe: l = !0,
                    isIframeRetiring: o = !0,
                    contextSource: i,
                } = t,
                s = u.useRef(n),
                a = u.useRef(r),
                c = u.useRef(l),
                f = u.useRef(o),
                d = u.useRef(i);
            (u.useEffect(() => {
                ((s.current = n), (a.current = r), (c.current = l), (f.current = o), (d.current = i));
            }),
                u.useEffect(
                    () => (
                        c.current &&
                            (E._.dispatch(v.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                            s.current?.(e)),
                        () => {
                            f.current && (E._.dispatch(v.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                        }
                    ),
                    [e],
                ));
        })(W, { onIframeMount: N, onIframeUnmount: P, contextSource: (0, i.useMemoOne)(() => U, [t]) }),
        u.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                ee(t);
            }
            return (
                E._.subscribe(v.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    E._.unsubscribe(v.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        u.useEffect(() => {
            el.current?.setInputSuspended(z);
        }, [z, ea]),
        u.useEffect(() => {
            null != eo && el.current?.setColorScheme(eo);
        }, [eo, ea]),
        z && (en.pointerEvents = "none"),
        null != Z
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      Y
                          ? (0, r.jsx)(
                                "iframe",
                                {
                                    ref: ea,
                                    style: { ...en, colorScheme: "normal", pointerEvents: "none" },
                                    sandbox: "",
                                    className: n,
                                },
                                "native-view",
                            )
                          : (0, r.jsx)(
                                "iframe",
                                {
                                    ref: ea,
                                    style: en,
                                    allow: G,
                                    referrerPolicy: g,
                                    onLoad: (e) => eu(e.currentTarget),
                                    sandbox: q,
                                    className: n,
                                    src: Z,
                                },
                                "page",
                            ),
                      (0, r.jsx)(I, { iframeId: W }),
                      (0, r.jsx)(H, { iframeId: W }),
                  ],
              })
            : null
    );
}
function B(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: l } = n,
        [i, s] = u.useState(!1),
        a = u.useCallback(
            (e) => {
                (s(!0), l?.(e));
            },
            [l],
        );
    return (0, r.jsxs)("div", {
        className: F.Qf,
        children: [
            !i && (0, r.jsx)("div", { className: o()(F.Qf, !0 !== t ? F.SL : void 0) }),
            (0, r.jsx)("div", {
                className: o()(F.Qf, i ? void 0 : F.Ar),
                children: (0, r.jsx)(W, { ...n, onLoad: a }),
            }),
        ],
    });
}
