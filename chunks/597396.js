(n.d(t, { o: () => W }), n(323874), n(14289), n(35956));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(727522),
    i = n(134559),
    c = n(17928),
    a = n(765548),
    f = n(132500),
    d = n(440454),
    m = n(484697),
    p = n(363195),
    E = n(625494),
    h = n(851907),
    j = n(435558),
    O = n(192308),
    b = n(267102),
    w = n(186111),
    x = n(712687),
    S = n(652215),
    R = n(775602);
let v = (0, j.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    A = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var y = n(333007),
    L = n(866665),
    M = n(955418),
    T = n(533550);
function g(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(M.SV, M.NO);
    if ((u.useEffect(() => () => (0, M.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, m.fl)(t);
    return null == l ? null : y.createPortal((0, r.jsx)(I, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function I(e) {
    let { tooltip: t, iframe: n } = e,
        [, l] = u.useReducer((e) => e + 1, 0);
    u.useLayoutEffect(() => {
        l();
    }, []);
    let o = n.getBoundingClientRect(),
        s = o.left + Math.min(Math.max(t.x, 0), o.width),
        i = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(L.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${s},${i}`,
        children: (0, r.jsx)("span", { className: T.Y, style: { left: s, top: i } }),
    });
}
var N = n(673953),
    P = n(342296),
    _ = n(777977),
    U = n(504115);
function C(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(_.$P, _.Eh);
    if ((u.useEffect(() => () => (0, _.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, m.fl)(t);
    return null == l ? null : y.createPortal((0, r.jsx)(H, { popout: n, iframe: l }), l.ownerDocument.body);
}
function H(e) {
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
                n.ownerDocument.activeElement === n && (0, _.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let s = n.getBoundingClientRect(),
        i = s.left + Math.min(Math.max(t.x, 0), s.width),
        c = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(P.A, {
        userId: t.userId,
        targetElementRef: l,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, N.cH)(n),
        positionKey: `${i},${c}`,
        clickTrap: !0,
        onRequestClose: () => (0, _.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: U.Y, style: { left: i, top: c } }),
    });
}
var k = n(809685),
    D = n(429582),
    $ = n(698398);
let F = "autoplay; encrypted-media";
function G(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: j,
            allowPopups: y = !1,
            referrerPolicy: L = "origin",
            onLoad: T,
            onIframeMount: I,
            onIframeUnmount: N,
            onGuestReload: P,
            contextSource: U,
            nativeView: H = !1,
        } = e,
        $ = (0, h.xi)({}),
        G = (0, s.useMemoOne)(() => (0, f.A)(), [t]),
        W = u.useRef(null),
        [B, K] = u.useState(!1),
        V = H && !B && (0, D.H9)(),
        Y = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                l = (0, c.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, O.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, c.bG)([x.A], () => x.A.isOpen()),
                        n = (0, c.bG)([w.A], () => w.A.hasLayers()),
                        [r, l] = u.useState(!1),
                        o = (0, b.aL)();
                    return (
                        u.useEffect(() => {
                            function e() {
                                l(!0);
                            }
                            function t() {
                                l(!1);
                            }
                            return (
                                o.subscribe(S.jej.POPOUT_SHOW, e),
                                o.subscribe(S.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(S.jej.POPOUT_SHOW, e), o.unsubscribe(S.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, i] = u.useState(!1),
                a = (0, b.aL)();
            return (
                u.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (a.dispatch(S.jej.POPOUT_CLOSE), E._.dispatch(S.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, a]),
                u.useEffect(() => {
                    if (l || !s || !t) return;
                    let { current: r } = e,
                        u = o;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || u || v(e);
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
        })(W, o && !V, null == $ ? window : $, o),
        Q = { ...j, frame_id: G, platform: i.v.DESKTOP },
        X = null != t ? `${t}?${new URLSearchParams(Q)}` : null,
        J = (function (e) {
            let { allowPopups: t } = e,
                n = A;
            return (t && (n = [...A, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: y }),
        [Z, q] = u.useState(!1),
        z = (0, c.bG)([p.A], () => p.A.theme),
        ee = { ...l };
    null == ee.colorScheme && (ee.colorScheme = z === S.NJ8.LIGHT ? "light" : "dark");
    let et = u.useRef(null);
    function en(e) {
        (et.current === G && ((0, M.ny)(G), (0, k.ir)(G), (0, _.OR)(G), P?.(G)),
            (et.current = G),
            null != e.contentWindow && e.contentWindow.postMessage([d.A.HELLO, Q], t ?? ""),
            Y(!0),
            T?.(e));
    }
    let er = u.useRef(null),
        { colorScheme: eu } = ee,
        el = (0, a.A)(() => (null != X ? { src: X, sandbox: J, allow: F, referrerPolicy: L, colorScheme: eu } : null)),
        eo = (0, a.A)(en),
        es = u.useCallback(
            (e) => {
                if (((W.current = e), null == e)) {
                    (er.current?.destroy(), (er.current = null), (0, m.$9)(G));
                    return;
                }
                let t = el();
                (V &&
                    null != t &&
                    ((er.current = (0, D.xW)(
                        e,
                        G,
                        t,
                        () => eo(e),
                        () => K(!0),
                    )),
                    null == er.current && K(!0)),
                    (0, m.M7)(G, e),
                    null != e.contentWindow && (0, m.Yt)(e.contentWindow, G));
            },
            [G, V, el, eo],
        );
    return (
        u.useEffect(() => () => (0, k.ir)(G), [G]),
        !(function (e, t) {
            let {
                    onIframeMount: n,
                    onIframeUnmount: r,
                    isNewIframe: l = !0,
                    isIframeRetiring: o = !0,
                    contextSource: s,
                } = t,
                i = u.useRef(n),
                c = u.useRef(r),
                a = u.useRef(l),
                f = u.useRef(o),
                d = u.useRef(s);
            (u.useEffect(() => {
                ((i.current = n), (c.current = r), (a.current = l), (f.current = o), (d.current = s));
            }),
                u.useEffect(
                    () => (
                        a.current &&
                            (E._.dispatch(S.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                            i.current?.(e)),
                        () => {
                            f.current && (E._.dispatch(S.jej.IFRAME_UNMOUNT, { id: e }), c.current?.(e));
                        }
                    ),
                    [e],
                ));
        })(G, { onIframeMount: I, onIframeUnmount: N, contextSource: (0, s.useMemoOne)(() => U, [t]) }),
        u.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                q(t);
            }
            return (
                E._.subscribe(S.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    E._.unsubscribe(S.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        u.useEffect(() => {
            er.current?.setInputSuspended(Z);
        }, [Z, es]),
        u.useEffect(() => {
            null != eu && er.current?.setColorScheme(eu);
        }, [eu, es]),
        Z && (ee.pointerEvents = "none"),
        null != X
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      V
                          ? (0, r.jsx)(
                                "iframe",
                                {
                                    ref: es,
                                    style: { ...ee, colorScheme: "normal", pointerEvents: "none" },
                                    sandbox: "",
                                    className: n,
                                },
                                "native-view",
                            )
                          : (0, r.jsx)(
                                "iframe",
                                {
                                    ref: es,
                                    style: ee,
                                    allow: F,
                                    referrerPolicy: L,
                                    onLoad: (e) => en(e.currentTarget),
                                    sandbox: J,
                                    className: n,
                                    src: X,
                                },
                                "page",
                            ),
                      (0, r.jsx)(g, { iframeId: G }),
                      (0, r.jsx)(C, { iframeId: G }),
                  ],
              })
            : null
    );
}
function W(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: l } = n,
        [s, i] = u.useState(!1),
        c = u.useCallback(
            (e) => {
                (i(!0), l?.(e));
            },
            [l],
        );
    return (0, r.jsxs)("div", {
        className: $.Qf,
        children: [
            !s && (0, r.jsx)("div", { className: o()($.Qf, !0 !== t ? $.SL : void 0) }),
            (0, r.jsx)("div", {
                className: o()($.Qf, s ? void 0 : $.Ar),
                children: (0, r.jsx)(G, { ...n, onLoad: c }),
            }),
        ],
    });
}
