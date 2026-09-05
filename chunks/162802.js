n.d(t, { o: () => $ }), n(323874), n(14289), n(35956);
var r = n(477900),
    l = n(582128),
    i = n(503698),
    u = n.n(i),
    a = n(727522),
    s = n(132500),
    o = n(440454),
    c = n(484697),
    d = n(363195),
    f = n(625494),
    m = n(851907),
    h = n(435558),
    E = n(17928),
    p = n(192308),
    A = n(267102),
    x = n(186111),
    j = n(712687),
    O = n(652215),
    I = n(775602);
let N = (0, h.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    M = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var _ = n(333007),
    v = n(866665),
    R = n(955418),
    b = n(311169);
function L(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(R.SV, R.NO);
    if ((l.useEffect(() => () => (0, R.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let i = (0, c.fl)(t);
    return null == i ? null : _.createPortal((0, r.jsx)(T, { tooltip: n, iframe: i }), i.ownerDocument.body);
}
function T(e) {
    let { tooltip: t, iframe: n } = e,
        [, i] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        i();
    }, []);
    let u = n.getBoundingClientRect(),
        a = u.left + Math.min(Math.max(t.x, 0), u.width),
        s = u.top + Math.min(Math.max(t.y, 0), u.height);
    return (0, r.jsx)(v.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${a},${s}`,
        children: (0, r.jsx)("span", { className: b.Y, style: { left: a, top: s } }),
    });
}
var w = n(673953),
    g = n(342296),
    S = n(777977),
    y = n(504115);
function P(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(S.$P, S.Eh);
    if ((l.useEffect(() => () => (0, S.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let i = (0, c.fl)(t);
    return null == i ? null : _.createPortal((0, r.jsx)(C, { popout: n, iframe: i }), i.ownerDocument.body);
}
function C(e) {
    let { popout: t, iframe: n } = e,
        i = l.useRef(null),
        [, u] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        u();
    }, []),
        l.useEffect(() => {
            let e = n.ownerDocument.defaultView;
            if (null != e) return e.addEventListener("blur", r), () => e.removeEventListener("blur", r);
            function r() {
                n.ownerDocument.activeElement === n && (0, S.OR)(t.iframeId);
            }
        }, [n, t.iframeId]);
    let a = n.getBoundingClientRect(),
        s = a.left + Math.min(Math.max(t.x, 0), a.width),
        o = a.top + Math.min(Math.max(t.y, 0), a.height);
    return (0, r.jsx)(g.A, {
        userId: t.userId,
        targetElementRef: i,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, w.cH)(n),
        positionKey: `${s},${o}`,
        clickTrap: !0,
        onRequestClose: () => (0, S.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: i, className: y.Y, style: { left: s, top: o } }),
    });
}
var D = n(809685),
    H = n(360469),
    U = n(698398);
function k(e) {
    let {
            url: t,
            className: n,
            style: i,
            shouldRefocus: u,
            queryParams: h,
            allowPopups: _ = !1,
            referrerPolicy: v = "origin",
            onLoad: b,
            onIframeMount: T,
            onIframeUnmount: w,
            onGuestReload: g,
        } = e,
        y = (0, m.xi)({}),
        C = (0, a.useMemoOne)(() => (0, s.A)(), [t]),
        U = l.useRef(null),
        k = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = (0, E.bG)([I.Ay], () => I.Ay.keyboardModeEnabled),
                i = (function () {
                    let e = (0, p.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, E.bG)([j.A], () => j.A.isOpen()),
                        n = (0, E.bG)([x.A], () => x.A.hasLayers()),
                        [r, i] = l.useState(!1),
                        u = (0, A.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                i(!0);
                            }
                            function t() {
                                i(!1);
                            }
                            return (
                                u.subscribe(O.jej.POPOUT_SHOW, e),
                                u.subscribe(O.jej.POPOUT_HIDE, t),
                                () => {
                                    u.unsubscribe(O.jej.POPOUT_SHOW, e), u.unsubscribe(O.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [u]),
                        e || t || r || n
                    );
                })(),
                [u, a] = l.useState(!1),
                s = (0, A.aL)();
            return (
                l.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        i && (s.dispatch(O.jej.POPOUT_CLOSE), f._.dispatch(O.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, i, t, s]),
                l.useEffect(() => {
                    if (r || !u || !t) return;
                    let { current: l } = e,
                        a = i;
                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || a || N(e);
                        }, 100);
                    }
                    return (
                        l?.addEventListener("focusout", s),
                        n.document.activeElement?.tagName === "IFRAME" || a || l?.focus(),
                        () => {
                            l?.removeEventListener("focusout", s), (a = !0);
                        }
                    );
                }, [t, u, r, e, n, i]),
                a
            );
        })(U, u, null == y ? window : y),
        $ = { ...h, frame_id: C, platform: H.vu.DESKTOP },
        [F, W] = l.useState(!1),
        G = d.A.theme,
        B = { ...i };
    G === O.NJ8.LIGHT ? (B.colorScheme = "light") : (B.colorScheme = "dark");
    let z = l.useCallback(
            (e) => {
                ((U.current = e), null == e)
                    ? (0, c.$9)(C)
                    : ((0, c.M7)(C, e), null != e.contentWindow && (0, c.Yt)(e.contentWindow, C));
            },
            [C],
        ),
        K = l.useRef(null);
    return (
        l.useEffect(() => () => (0, D.ir)(C), [C]),
        !(function (e) {
            let {
                    onIframeMount: t,
                    onIframeUnmount: n,
                    isNewIframe: r = !0,
                    isIframeRetiring: i = !0,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = l.useRef(t),
                a = l.useRef(n),
                s = l.useRef(r),
                o = l.useRef(i);
            l.useEffect(() => {
                (u.current = t), (a.current = n), (s.current = r), (o.current = i);
            }),
                l.useEffect(
                    () => (
                        s.current && (f._.dispatch(O.jej.IFRAME_MOUNT, { id: e }), u.current?.(e)),
                        () => {
                            o.current && (f._.dispatch(O.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                        }
                    ),
                    [e],
                );
        })(C, { onIframeMount: T, onIframeUnmount: w }),
        l.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                W(t);
            }
            return (
                f._.subscribe(O.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    f._.unsubscribe(O.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        F && (B.pointerEvents = "none"),
        null != t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("iframe", {
                          ref: z,
                          style: B,
                          allow: "autoplay; encrypted-media",
                          referrerPolicy: v,
                          onLoad: function (e) {
                              let n = e.target;
                              K.current === C && ((0, R.ny)(C), (0, D.ir)(C), (0, S.OR)(C), g?.(C)),
                                  (K.current = C),
                                  null != n.contentWindow && n.contentWindow.postMessage([o.A.HELLO, $], t ?? ""),
                                  k(!0),
                                  b?.(n);
                          },
                          sandbox: (function (e) {
                              let { allowPopups: t } = e,
                                  n = M;
                              return t && (n = [...M, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                          })({ allowPopups: _ }),
                          className: n,
                          src: `${t}?${new URLSearchParams($)}`,
                      }),
                      (0, r.jsx)(L, { iframeId: C }),
                      (0, r.jsx)(P, { iframeId: C }),
                  ],
              })
            : null
    );
}
function $(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: i } = n,
        [a, s] = l.useState(!1),
        o = l.useCallback(
            (e) => {
                s(!0), i?.(e);
            },
            [i],
        );
    return (0, r.jsxs)("div", {
        className: U.Qf,
        children: [
            !a && (0, r.jsx)("div", { className: u()(U.Qf, !0 !== t ? U.SL : void 0) }),
            (0, r.jsx)("div", {
                className: u()(U.Qf, a ? void 0 : U.Ar),
                children: (0, r.jsx)(k, { ...n, onLoad: o }),
            }),
        ],
    });
}
