(n.d(t, { o: () => $ }), n(323874), n(14289), n(35956));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    o = n.n(l),
    i = n(727522),
    s = n(134559),
    c = n(132500),
    a = n(440454),
    f = n(484697),
    d = n(363195),
    m = n(625494),
    E = n(851907),
    p = n(435558),
    h = n(17928),
    j = n(192308),
    O = n(267102),
    b = n(186111),
    w = n(712687),
    x = n(652215),
    R = n(775602);
let S = (0, p.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    L = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var v = n(333007),
    A = n(866665),
    y = n(955418),
    M = n(533550);
function T(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(y.SV, y.NO);
    if ((u.useEffect(() => () => (0, y.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, f.fl)(t);
    return null == l ? null : v.createPortal((0, r.jsx)(g, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function g(e) {
    let { tooltip: t, iframe: n } = e,
        [, l] = u.useReducer((e) => e + 1, 0);
    u.useLayoutEffect(() => {
        l();
    }, []);
    let o = n.getBoundingClientRect(),
        i = o.left + Math.min(Math.max(t.x, 0), o.width),
        s = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(A.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${i},${s}`,
        children: (0, r.jsx)("span", { className: M.Y, style: { left: i, top: s } }),
    });
}
var I = n(673953),
    N = n(342296),
    P = n(777977),
    _ = n(504115);
function U(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(P.$P, P.Eh);
    if ((u.useEffect(() => () => (0, P.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, f.fl)(t);
    return null == l ? null : v.createPortal((0, r.jsx)(C, { popout: n, iframe: l }), l.ownerDocument.body);
}
function C(e) {
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
                n.ownerDocument.activeElement === n && (0, P.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let i = n.getBoundingClientRect(),
        s = i.left + Math.min(Math.max(t.x, 0), i.width),
        c = i.top + Math.min(Math.max(t.y, 0), i.height);
    return (0, r.jsx)(N.A, {
        userId: t.userId,
        targetElementRef: l,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, I.cH)(n),
        positionKey: `${s},${c}`,
        clickTrap: !0,
        onRequestClose: () => (0, P.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: _.Y, style: { left: s, top: c } }),
    });
}
var H = n(809685),
    k = n(698398);
function D(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: p,
            allowPopups: v = !1,
            referrerPolicy: A = "origin",
            onLoad: M,
            onIframeMount: g,
            onIframeUnmount: I,
            onGuestReload: N,
            contextSource: _,
        } = e,
        C = (0, E.xi)({}),
        k = (0, i.useMemoOne)(() => (0, c.A)(), [t]),
        D = u.useRef(null),
        $ = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = (0, h.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
                l = (function () {
                    let e = (0, j.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, h.bG)([w.A], () => w.A.isOpen()),
                        n = (0, h.bG)([b.A], () => b.A.hasLayers()),
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
                                o.subscribe(x.jej.POPOUT_SHOW, e),
                                o.subscribe(x.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(x.jej.POPOUT_SHOW, e), o.unsubscribe(x.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [o, i] = u.useState(!1),
                s = (0, O.aL)();
            return (
                u.useEffect(() => {
                    if (t) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        l && (s.dispatch(x.jej.POPOUT_CLOSE), m._.dispatch(x.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, l, t, s]),
                u.useEffect(() => {
                    if (r || !o || !t) return;
                    let { current: u } = e,
                        i = l;
                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || i || S(e);
                        }, 100);
                    }
                    return (
                        u?.addEventListener("focusout", s),
                        n.document.activeElement?.tagName === "IFRAME" || i || u?.focus(),
                        () => {
                            (u?.removeEventListener("focusout", s), (i = !0));
                        }
                    );
                }, [t, o, r, e, n, l]),
                i
            );
        })(D, o, null == C ? window : C),
        F = { ...p, frame_id: k, platform: s.v.DESKTOP },
        [B, G] = u.useState(!1),
        W = d.A.theme,
        K = { ...l };
    null == K.colorScheme && (K.colorScheme = W === x.NJ8.LIGHT ? "light" : "dark");
    let V = u.useCallback(
            (e) => {
                ((D.current = e), null == e)
                    ? (0, f.$9)(k)
                    : ((0, f.M7)(k, e), null != e.contentWindow && (0, f.Yt)(e.contentWindow, k));
            },
            [k],
        ),
        Y = u.useRef(null);
    return (
        u.useEffect(() => () => (0, H.ir)(k), [k]),
        !(function (e, t) {
            let {
                    onIframeMount: n,
                    onIframeUnmount: r,
                    isNewIframe: l = !0,
                    isIframeRetiring: o = !0,
                    contextSource: i,
                } = t,
                s = u.useRef(n),
                c = u.useRef(r),
                a = u.useRef(l),
                f = u.useRef(o),
                d = u.useRef(i);
            (u.useEffect(() => {
                ((s.current = n), (c.current = r), (a.current = l), (f.current = o), (d.current = i));
            }),
                u.useEffect(
                    () => (
                        a.current &&
                            (m._.dispatch(x.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                            s.current?.(e)),
                        () => {
                            f.current && (m._.dispatch(x.jej.IFRAME_UNMOUNT, { id: e }), c.current?.(e));
                        }
                    ),
                    [e],
                ));
        })(k, { onIframeMount: g, onIframeUnmount: I, contextSource: (0, i.useMemoOne)(() => _, [t]) }),
        u.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                G(t);
            }
            return (
                m._.subscribe(x.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    m._.unsubscribe(x.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        B && (K.pointerEvents = "none"),
        null != t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("iframe", {
                          ref: V,
                          style: K,
                          allow: "autoplay; encrypted-media",
                          referrerPolicy: A,
                          onLoad: function (e) {
                              let n = e.target;
                              (Y.current === k && ((0, y.ny)(k), (0, H.ir)(k), (0, P.OR)(k), N?.(k)),
                                  (Y.current = k),
                                  null != n.contentWindow && n.contentWindow.postMessage([a.A.HELLO, F], t ?? ""),
                                  $(!0),
                                  M?.(n));
                          },
                          sandbox: (function (e) {
                              let { allowPopups: t } = e,
                                  n = L;
                              return (t && (n = [...L, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
                          })({ allowPopups: v }),
                          className: n,
                          src: `${t}?${new URLSearchParams(F)}`,
                      }),
                      (0, r.jsx)(T, { iframeId: k }),
                      (0, r.jsx)(U, { iframeId: k }),
                  ],
              })
            : null
    );
}
function $(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: l } = n,
        [i, s] = u.useState(!1),
        c = u.useCallback(
            (e) => {
                (s(!0), l?.(e));
            },
            [l],
        );
    return (0, r.jsxs)("div", {
        className: k.Qf,
        children: [
            !i && (0, r.jsx)("div", { className: o()(k.Qf, !0 !== t ? k.SL : void 0) }),
            (0, r.jsx)("div", {
                className: o()(k.Qf, i ? void 0 : k.Ar),
                children: (0, r.jsx)(D, { ...n, onLoad: c }),
            }),
        ],
    });
}
