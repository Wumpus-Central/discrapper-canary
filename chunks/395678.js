"use strict";
n.d(t, { o: () => L }), n(323874), n(14289), n(35956);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(727522),
    o = n(132500),
    d = n(440454),
    c = n(484697),
    u = n(363195),
    _ = n(625494),
    E = n(851907),
    A = n(435558),
    h = n(17928),
    I = n(192308),
    f = n(267102),
    p = n(186111),
    T = n(712687),
    m = n(652215),
    g = n(775602);
let S = (0, A.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    N = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var C = n(360469),
    O = n(2771);
function R(e) {
    let {
            url: t,
            className: n,
            style: a,
            onLoad: s,
            shouldRefocus: A,
            queryParams: O,
            allowPopups: R = !1,
            referrerPolicy: L = "origin",
        } = e,
        D = (0, E.xi)({}),
        y = (0, l.useMemoOne)(() => (0, o.A)(), [t]),
        v = r.useRef(null),
        b = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                i = (0, h.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
                a = (function () {
                    let e = (0, I.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, h.bG)([T.A], () => T.A.isOpen()),
                        n = (0, h.bG)([p.A], () => p.A.hasLayers()),
                        [i, a] = r.useState(!1),
                        s = (0, f.aL)();
                    return (
                        r.useEffect(() => {
                            function e() {
                                a(!0);
                            }
                            function t() {
                                a(!1);
                            }
                            return (
                                s.subscribe(m.jej.POPOUT_SHOW, e),
                                s.subscribe(m.jej.POPOUT_HIDE, t),
                                () => {
                                    s.unsubscribe(m.jej.POPOUT_SHOW, e), s.unsubscribe(m.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [s]),
                        e || t || i || n
                    );
                })(),
                [s, l] = r.useState(!1),
                o = (0, f.aL)();
            return (
                r.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        a && (o.dispatch(m.jej.POPOUT_CLOSE), _._.dispatch(m.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, a, t, o]),
                r.useEffect(() => {
                    if (i || !s || !t) return;
                    let { current: r } = e,
                        l = a;
                    function o(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || S(e);
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
        })(v, A, null == D ? window : D),
        M = { ...O, frame_id: y, platform: C.vu.DESKTOP },
        [P, U] = r.useState(!1),
        w = u.A.theme,
        G = { ...a };
    return (
        w === m.NJ8.LIGHT ? (G.colorScheme = "light") : (G.colorScheme = "dark"),
        r.useEffect(
            () => (
                _._.dispatch(m.jej.IFRAME_MOUNT, { id: y }),
                () => {
                    _._.dispatch(m.jej.IFRAME_UNMOUNT, { id: y });
                }
            ),
            [y],
        ),
        r.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                U(t);
            }
            return (
                _._.subscribe(m.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    _._.unsubscribe(m.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        P && (G.pointerEvents = "none"),
        null != t
            ? (0, i.jsx)("iframe", {
                  style: G,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: L,
                  onLoad: function (e) {
                      let n = e.target;
                      (v.current = n),
                          null != n.contentWindow &&
                              ((0, c.Y)(n.contentWindow, y), n.contentWindow.postMessage([d.A.HELLO, M], t ?? "")),
                          b(!0),
                          s?.(n);
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          n = N;
                      return t && (n = [...N, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                  })({ allowPopups: R }),
                  className: n,
                  src: `${t}?${new URLSearchParams(M)}`,
              })
            : null
    );
}
function L(e) {
    let { onLoad: t } = e,
        [n, a] = r.useState(!1),
        l = r.useCallback(
            (e) => {
                a(!0), t?.(e);
            },
            [t],
        );
    return (0, i.jsxs)("div", {
        className: O.Qf,
        children: [
            !n && (0, i.jsx)("div", { className: s()(O.Qf, O.SL) }),
            (0, i.jsx)("div", {
                className: s()(O.Qf, n ? void 0 : O.Ar),
                children: (0, i.jsx)(R, { ...e, onLoad: l }),
            }),
        ],
    });
}
