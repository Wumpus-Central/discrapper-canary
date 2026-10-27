(n.d(t, { oI: () => V, cT: () => B }), n(323874), n(14289), n(35956));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(727522),
    a = n(134559),
    i = n(17928),
    c = n(289873),
    f = n(765548),
    d = n(97157),
    m = n(132500),
    p = n(440454),
    h = n(484697),
    E = n(363195),
    b = n(625494);
let j = (0, n(945810).mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var x = n(851907),
    v = n(435558),
    S = n(192308),
    O = n(267102),
    y = n(186111),
    w = n(712687),
    A = n(652215),
    g = n(775602);
let R = (0, v.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    L = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var I = n(333007),
    M = n(866665),
    N = n(955418),
    _ = n(533550);
function T(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(N.SV, N.NO);
    if ((u.useEffect(() => () => (0, N.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, h.fl)(t);
    return null == l ? null : I.createPortal((0, r.jsx)(P, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function P(e) {
    let { tooltip: t, iframe: n } = e,
        [, l] = u.useReducer((e) => e + 1, 0);
    u.useLayoutEffect(() => {
        l();
    }, []);
    let o = n.getBoundingClientRect(),
        s = o.left + Math.min(Math.max(t.x, 0), o.width),
        a = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(M.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${s},${a}`,
        children: (0, r.jsx)("span", { className: _.Y, style: { left: s, top: a } }),
    });
}
var C = n(673953),
    k = n(342296),
    U = n(777977),
    H = n(504115);
function $(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(U.$P, U.Eh);
    if ((u.useEffect(() => () => (0, U.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, h.fl)(t);
    return null == l ? null : I.createPortal((0, r.jsx)(F, { popout: n, iframe: l }), l.ownerDocument.body);
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
        a = s.left + Math.min(Math.max(t.x, 0), s.width),
        i = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(k.A, {
        userId: t.userId,
        targetElementRef: l,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, C.cH)(n),
        positionKey: `${a},${i}`,
        clickTrap: !0,
        onRequestClose: () => (0, U.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: H.Y, style: { left: a, top: i } }),
    });
}
var D = n(809685),
    G = n(429582),
    W = n(698398);
let K = "autoplay; encrypted-media",
    B = { background: "transparent", colorScheme: "normal" };
function Q(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: c,
            allowPopups: v = !1,
            referrerPolicy: I = "origin",
            onLoad: M,
            onIframeMount: _,
            onIframeUnmount: P,
            onGuestReload: C,
            contextSource: k,
            nativeView: H = !1,
        } = e,
        F = (0, x.xi)({}),
        W = (0, s.useMemoOne)(() => (0, m.A)(), [t]),
        B = u.useRef(null),
        [Q, V] = u.useState(!1),
        Y = H && !Q && (0, G.H9)(),
        X = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                l = (0, i.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, S.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, i.bG)([w.A], () => w.A.isOpen()),
                        n = (0, i.bG)([y.A], () => y.A.hasLayers()),
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
                                o.subscribe(A.jej.POPOUT_SHOW, e),
                                o.subscribe(A.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(A.jej.POPOUT_SHOW, e), o.unsubscribe(A.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, a] = u.useState(!1),
                c = (0, O.aL)();
            return (
                u.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (c.dispatch(A.jej.POPOUT_CLOSE), b._.dispatch(A.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, c]),
                u.useEffect(() => {
                    if (l || !s || !t) return;
                    let { current: r } = e,
                        u = o;
                    function a(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || u || R(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", a),
                        n.document.activeElement?.tagName === "IFRAME" || u || r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", a), (u = !0));
                        }
                    );
                }, [t, s, l, e, n, o]),
                a
            );
        })(B, o && !Y, null == F ? window : F, o),
        Z = j.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        q = (0, d.A)(t),
        J = "ready" === q.status ? (q.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        z = { ...c, frame_id: W, platform: a.v.DESKTOP, discord_shim: `${Z}` },
        ee = null != t ? `${t}?${new URLSearchParams(z)}` : null,
        et = (function (e) {
            let { allowPopups: t } = e,
                n = L;
            return (t && (n = [...L, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: v }),
        [en, er] = u.useState(!1),
        eu = (0, i.bG)([E.A], () => E.A.theme),
        el = { ...l };
    null == el.colorScheme && (el.colorScheme = eu === A.NJ8.LIGHT ? "light" : "dark");
    let eo = u.useRef(null);
    function es(e) {
        (eo.current === W && ((0, N.ny)(W), (0, D.ir)(W), (0, U.OR)(W), C?.(W)),
            (eo.current = W),
            null != e.contentWindow && e.contentWindow.postMessage([p.A.HELLO, z], t ?? ""),
            X(!0),
            M?.(e));
    }
    let ea = u.useRef(null),
        { colorScheme: ei } = el,
        ec = (0, f.A)(() =>
            null != ee ? { src: ee, sandbox: et, allow: K, referrerPolicy: I, colorScheme: ei, csp: J } : null,
        ),
        ef = (0, f.A)(es),
        ed = u.useCallback(
            (e) => {
                if (((B.current = e), null == e)) {
                    (ea.current?.destroy(), (ea.current = null), (0, h.$9)(W));
                    return;
                }
                let t = ec();
                (Y &&
                    null != t &&
                    ((ea.current = (0, G.xW)(
                        e,
                        W,
                        t,
                        () => ef(e),
                        () => V(!0),
                    )),
                    null == ea.current && V(!0)),
                    (0, h.M7)(W, e),
                    null != e.contentWindow && (0, h.Yt)(e.contentWindow, W));
            },
            [W, Y, ec, ef],
        );
    return (u.useEffect(() => () => (0, D.ir)(W), [W]),
    !(function (e, t) {
        let {
                onIframeMount: n,
                onIframeUnmount: r,
                isNewIframe: l = !0,
                isIframeRetiring: o = !0,
                contextSource: s,
            } = t,
            a = u.useRef(n),
            i = u.useRef(r),
            c = u.useRef(l),
            f = u.useRef(o),
            d = u.useRef(s);
        (u.useEffect(() => {
            ((a.current = n), (i.current = r), (c.current = l), (f.current = o), (d.current = s));
        }),
            u.useEffect(
                () => (
                    c.current &&
                        (b._.dispatch(A.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                        a.current?.(e)),
                    () => {
                        f.current && (b._.dispatch(A.jej.IFRAME_UNMOUNT, { id: e }), i.current?.(e));
                    }
                ),
                [e],
            ));
    })(W, { onIframeMount: _, onIframeUnmount: P, contextSource: (0, s.useMemoOne)(() => k, [t]) }),
    u.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            er(t);
        }
        return (
            b._.subscribe(A.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                b._.unsubscribe(A.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    u.useEffect(() => {
        ea.current?.setInputSuspended(en);
    }, [en, ed]),
    u.useEffect(() => {
        null != ei && ea.current?.setColorScheme(ei);
    }, [ei, ed]),
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
                                  allow: K,
                                  referrerPolicy: I,
                                  onLoad: (e) => es(e.currentTarget),
                                  sandbox: et,
                                  className: n,
                                  src: ee,
                              },
                              "page",
                          ),
                    (0, r.jsx)(T, { iframeId: W }),
                    (0, r.jsx)($, { iframeId: W }),
                ],
            })
          : null;
}
function V(e) {
    let { transparentWhileLoading: t = !1, spinnerWhileLoading: n = !1, ...l } = e,
        { onLoad: s } = l,
        [a, i] = u.useState(!1),
        f = u.useCallback(
            (e) => {
                (i(!0), s?.(e));
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: W.Qf,
        children: [
            !a &&
                (0, r.jsx)("div", {
                    className: o()(W.Qf, !0 !== t ? W.SL : void 0, n ? W.k$ : void 0),
                    children: n ? (0, r.jsx)(c.y, {}) : null,
                }),
            (0, r.jsx)("div", {
                className: o()(W.Qf, a ? void 0 : W.Ar),
                children: (0, r.jsx)(Q, { ...l, onLoad: f }),
            }),
        ],
    });
}
