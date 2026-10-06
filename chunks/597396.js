(n.d(t, { o: () => $ }), n(323874), n(14289), n(35956));
var r = n(477900),
    l = n(582128),
    u = n(503698),
    i = n.n(u),
    a = n(727522),
    s = n(134559),
    o = n(132500),
    c = n(440454),
    d = n(484697),
    f = n(363195),
    m = n(625494),
    h = n(851907),
    E = n(435558),
    p = n(17928),
    A = n(192308),
    x = n(267102),
    O = n(186111),
    I = n(712687),
    j = n(652215),
    N = n(775602);
let M = (0, E.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    R = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var _ = n(333007),
    v = n(866665),
    T = n(955418),
    b = n(533550);
function L(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(T.SV, T.NO);
    if ((l.useEffect(() => () => (0, T.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, d.fl)(t);
    return null == u ? null : _.createPortal((0, r.jsx)(w, { tooltip: n, iframe: u }), u.ownerDocument.body);
}
function w(e) {
    let { tooltip: t, iframe: n } = e,
        [, u] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        u();
    }, []);
    let i = n.getBoundingClientRect(),
        a = i.left + Math.min(Math.max(t.x, 0), i.width),
        s = i.top + Math.min(Math.max(t.y, 0), i.height);
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
var S = n(673953),
    g = n(342296),
    y = n(777977),
    P = n(504115);
function C(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(y.$P, y.Eh);
    if ((l.useEffect(() => () => (0, y.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, d.fl)(t);
    return null == u ? null : _.createPortal((0, r.jsx)(D, { popout: n, iframe: u }), u.ownerDocument.body);
}
function D(e) {
    let { popout: t, iframe: n } = e,
        u = l.useRef(null),
        [, i] = l.useReducer((e) => e + 1, 0);
    (l.useLayoutEffect(() => {
        i();
    }, []),
        l.useEffect(() => {
            let e = n.ownerDocument.defaultView;
            if (null != e) return (e.addEventListener("blur", r), () => e.removeEventListener("blur", r));
            function r() {
                n.ownerDocument.activeElement === n && (0, y.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let a = n.getBoundingClientRect(),
        s = a.left + Math.min(Math.max(t.x, 0), a.width),
        o = a.top + Math.min(Math.max(t.y, 0), a.height);
    return (0, r.jsx)(g.A, {
        userId: t.userId,
        targetElementRef: u,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, S.cH)(n),
        positionKey: `${s},${o}`,
        clickTrap: !0,
        onRequestClose: () => (0, y.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: u, className: P.Y, style: { left: s, top: o } }),
    });
}
var H = n(809685),
    U = n(698398);
function k(e) {
    let {
            url: t,
            className: n,
            style: u,
            shouldRefocus: i,
            queryParams: E,
            allowPopups: _ = !1,
            referrerPolicy: v = "origin",
            onLoad: b,
            onIframeMount: w,
            onIframeUnmount: S,
            onGuestReload: g,
            contextSource: P,
        } = e,
        D = (0, h.xi)({}),
        U = (0, a.useMemoOne)(() => (0, o.A)(), [t]),
        k = l.useRef(null),
        $ = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = (0, p.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
                u = (function () {
                    let e = (0, A.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, p.bG)([I.A], () => I.A.isOpen()),
                        n = (0, p.bG)([O.A], () => O.A.hasLayers()),
                        [r, u] = l.useState(!1),
                        i = (0, x.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                u(!0);
                            }
                            function t() {
                                u(!1);
                            }
                            return (
                                i.subscribe(j.jej.POPOUT_SHOW, e),
                                i.subscribe(j.jej.POPOUT_HIDE, t),
                                () => {
                                    (i.unsubscribe(j.jej.POPOUT_SHOW, e), i.unsubscribe(j.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [i]),
                        e || t || r || n
                    );
                })(),
                [i, a] = l.useState(!1),
                s = (0, x.aL)();
            return (
                l.useEffect(() => {
                    if (t) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        u && (s.dispatch(j.jej.POPOUT_CLOSE), m._.dispatch(j.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, u, t, s]),
                l.useEffect(() => {
                    if (r || !i || !t) return;
                    let { current: l } = e,
                        a = u;
                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || a || M(e);
                        }, 100);
                    }
                    return (
                        l?.addEventListener("focusout", s),
                        n.document.activeElement?.tagName === "IFRAME" || a || l?.focus(),
                        () => {
                            (l?.removeEventListener("focusout", s), (a = !0));
                        }
                    );
                }, [t, i, r, e, n, u]),
                a
            );
        })(k, i, null == D ? window : D),
        F = { ...E, frame_id: U, platform: s.v.DESKTOP },
        [W, G] = l.useState(!1),
        B = f.A.theme,
        z = { ...u };
    B === j.NJ8.LIGHT ? (z.colorScheme = "light") : (z.colorScheme = "dark");
    let K = l.useCallback(
            (e) => {
                ((k.current = e), null == e)
                    ? (0, d.$9)(U)
                    : ((0, d.M7)(U, e), null != e.contentWindow && (0, d.Yt)(e.contentWindow, U));
            },
            [U],
        ),
        V = l.useRef(null);
    return (
        l.useEffect(() => () => (0, H.ir)(U), [U]),
        !(function (e, t) {
            let {
                    onIframeMount: n,
                    onIframeUnmount: r,
                    isNewIframe: u = !0,
                    isIframeRetiring: i = !0,
                    contextSource: a,
                } = t,
                s = l.useRef(n),
                o = l.useRef(r),
                c = l.useRef(u),
                d = l.useRef(i),
                f = l.useRef(a);
            (l.useEffect(() => {
                ((s.current = n), (o.current = r), (c.current = u), (d.current = i), (f.current = a));
            }),
                l.useEffect(
                    () => (
                        c.current &&
                            (m._.dispatch(j.jej.IFRAME_MOUNT, { id: e, data: { contextSource: f.current } }),
                            s.current?.(e)),
                        () => {
                            d.current && (m._.dispatch(j.jej.IFRAME_UNMOUNT, { id: e }), o.current?.(e));
                        }
                    ),
                    [e],
                ));
        })(U, { onIframeMount: w, onIframeUnmount: S, contextSource: (0, a.useMemoOne)(() => P, [t]) }),
        l.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                G(t);
            }
            return (
                m._.subscribe(j.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    m._.unsubscribe(j.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        W && (z.pointerEvents = "none"),
        null != t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("iframe", {
                          ref: K,
                          style: z,
                          allow: "autoplay; encrypted-media",
                          referrerPolicy: v,
                          onLoad: function (e) {
                              let n = e.target;
                              (V.current === U && ((0, T.ny)(U), (0, H.ir)(U), (0, y.OR)(U), g?.(U)),
                                  (V.current = U),
                                  null != n.contentWindow && n.contentWindow.postMessage([c.A.HELLO, F], t ?? ""),
                                  $(!0),
                                  b?.(n));
                          },
                          sandbox: (function (e) {
                              let { allowPopups: t } = e,
                                  n = R;
                              return (t && (n = [...R, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
                          })({ allowPopups: _ }),
                          className: n,
                          src: `${t}?${new URLSearchParams(F)}`,
                      }),
                      (0, r.jsx)(L, { iframeId: U }),
                      (0, r.jsx)(C, { iframeId: U }),
                  ],
              })
            : null
    );
}
function $(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: u } = n,
        [a, s] = l.useState(!1),
        o = l.useCallback(
            (e) => {
                (s(!0), u?.(e));
            },
            [u],
        );
    return (0, r.jsxs)("div", {
        className: U.Qf,
        children: [
            !a && (0, r.jsx)("div", { className: i()(U.Qf, !0 !== t ? U.SL : void 0) }),
            (0, r.jsx)("div", {
                className: i()(U.Qf, a ? void 0 : U.Ar),
                children: (0, r.jsx)(k, { ...n, onLoad: o }),
            }),
        ],
    });
}
