"use strict";
n.d(t, { o: () => O }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(337126),
    o = n(132500),
    d = n(440454),
    c = n(363195),
    u = n(625494),
    _ = n(851907),
    E = n(435558),
    A = n(17928),
    h = n(192308),
    I = n(267102),
    f = n(186111),
    p = n(712687),
    T = n(652215),
    m = n(775602);
let g = (0, E.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    S = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var N = n(360469),
    C = n(457771);
function R(e) {
    let {
            url: t,
            className: n,
            style: a,
            onLoad: s,
            shouldRefocus: E,
            queryParams: C,
            allowPopups: R = !1,
            referrerPolicy: O = "origin",
        } = e,
        L = (0, _.xi)({}),
        y = (0, l.useMemoOne)(() => (0, o.A)(), [t]),
        D = r.useRef(null),
        v = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                i = (0, A.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
                a = (function () {
                    let e = (0, h.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, A.bG)([p.A], () => p.A.isOpen()),
                        n = (0, A.bG)([f.A], () => f.A.hasLayers()),
                        [i, a] = r.useState(!1),
                        s = (0, I.aL)();
                    return (
                        r.useEffect(() => {
                            function e() {
                                a(!0);
                            }
                            function t() {
                                a(!1);
                            }
                            return (
                                s.subscribe(T.jej.POPOUT_SHOW, e),
                                s.subscribe(T.jej.POPOUT_HIDE, t),
                                () => {
                                    s.unsubscribe(T.jej.POPOUT_SHOW, e), s.unsubscribe(T.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [s]),
                        e || t || i || n
                    );
                })(),
                [s, l] = r.useState(!1),
                o = (0, I.aL)();
            return (
                r.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        a && (o.dispatch(T.jej.POPOUT_CLOSE), u._.dispatch(T.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, a, t, o]),
                r.useEffect(() => {
                    if (i || !s || !t) return;
                    let { current: r } = e,
                        l = a;
                    function o(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || g(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", o),
                        n.document.activeElement?.tagName === "IFRAME" || l || r?.focus(),
                        () => {
                            r?.removeEventListener("focusout", o), (l = !0);
                        }
                    );
                }, [t, s, i, e, n, a]),
                l
            );
        })(D, E, null == L ? window : L),
        b = { ...C, frame_id: y, platform: N.vu.DESKTOP },
        [M, P] = r.useState(!1),
        U = c.A.theme,
        w = { ...a };
    return (
        U === T.NJ8.LIGHT ? (w.colorScheme = "light") : (w.colorScheme = "dark"),
        r.useEffect(
            () => (
                u._.dispatch(T.jej.IFRAME_MOUNT, { id: y }),
                () => {
                    u._.dispatch(T.jej.IFRAME_UNMOUNT, { id: y });
                }
            ),
            [y],
        ),
        r.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                P(t);
            }
            return (
                u._.subscribe(T.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    u._.unsubscribe(T.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        M && (w.pointerEvents = "none"),
        null != t
            ? (0, i.jsx)("iframe", {
                  style: w,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: O,
                  onLoad: function (e) {
                      s?.(e.target),
                          (D.current = e.target),
                          v(!0),
                          e.target.contentWindow?.postMessage([d.A.HELLO, b], t ?? "");
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          n = S;
                      return t && (n = [...S, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                  })({ allowPopups: R }),
                  className: n,
                  src: `${t}?${new URLSearchParams(b)}`,
              })
            : null
    );
}
function O(e) {
    let { onLoad: t } = e,
        [n, a] = r.useState(!1),
        l = r.useCallback(
            (e) => {
                a(!0), t?.(e);
            },
            [t],
        );
    return (0, i.jsxs)("div", {
        className: C.Qf,
        children: [
            !n && (0, i.jsx)("div", { className: s()(C.Qf, C.SL) }),
            (0, i.jsx)("div", {
                className: s()(C.Qf, n ? void 0 : C.Ar),
                children: (0, i.jsx)(R, { ...e, onLoad: l }),
            }),
        ],
    });
}
