"use strict";
n.d(t, { o: () => O }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(337126),
    l = n(132500),
    d = n(440454),
    _ = n(363195),
    u = n(625494),
    c = n(851907),
    E = n(735438),
    h = n(17928),
    m = n(192308),
    f = n(267102),
    g = n(186111),
    p = n(712687),
    A = n(652215),
    I = n(775602);
let T = (0, E.debounce)((e) => {
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
            style: s,
            onLoad: a,
            shouldRefocus: E,
            queryParams: C,
            allowPopups: R = !1,
            referrerPolicy: O = "origin",
        } = e,
        y = (0, c.xi)({}),
        v = (0, o.useMemoOne)(() => (0, l.A)(), [t]),
        D = r.useRef(null),
        L = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                i = (0, h.bG)([I.A], () => I.A.keyboardModeEnabled),
                s = (function () {
                    let e = (0, m.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, h.bG)([p.A], () => p.A.isOpen()),
                        n = (0, h.bG)([g.A], () => g.A.hasLayers()),
                        [i, s] = r.useState(!1),
                        a = (0, f.aL)();
                    return (
                        r.useEffect(() => {
                            function e() {
                                s(!0);
                            }
                            function t() {
                                s(!1);
                            }
                            return (
                                a.subscribe(A.jej.POPOUT_SHOW, e),
                                a.subscribe(A.jej.POPOUT_HIDE, t),
                                () => {
                                    a.unsubscribe(A.jej.POPOUT_SHOW, e), a.unsubscribe(A.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [a]),
                        e || t || i || n
                    );
                })(),
                [a, o] = r.useState(!1),
                l = (0, f.aL)();
            return (
                r.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        s && (l.dispatch(A.jej.POPOUT_CLOSE), u._.dispatch(A.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, s, t, l]),
                r.useEffect(() => {
                    if (i || !a || !t) return;
                    let { current: r } = e,
                        o = s;
                    function l(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || o || T(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", l),
                        n.document.activeElement?.tagName === "IFRAME" || o || r?.focus(),
                        () => {
                            r?.removeEventListener("focusout", l), (o = !0);
                        }
                    );
                }, [t, a, i, e, n, s]),
                o
            );
        })(D, E, null == y ? window : y),
        b = { ...C, frame_id: v, platform: N.vu.DESKTOP },
        [w, P] = r.useState(!1),
        k = _.A.theme,
        M = { ...s };
    return (
        k === A.NJ8.LIGHT ? (M.colorScheme = "light") : (M.colorScheme = "dark"),
        r.useEffect(
            () => (
                u._.dispatch(A.jej.IFRAME_MOUNT, { id: v }),
                () => {
                    u._.dispatch(A.jej.IFRAME_UNMOUNT, { id: v });
                }
            ),
            [v],
        ),
        r.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                P(t);
            };
            return (
                u._.subscribe(A.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    u._.unsubscribe(A.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        w && (M.pointerEvents = "none"),
        null != t
            ? (0, i.jsx)("iframe", {
                  style: M,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: O,
                  onLoad: function (e) {
                      a?.(e.target),
                          (D.current = e.target),
                          L(!0),
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
        [n, s] = r.useState(!1),
        o = r.useCallback(
            (e) => {
                s(!0), t?.(e);
            },
            [t],
        );
    return (0, i.jsxs)("div", {
        className: C.Qf,
        children: [
            !n && (0, i.jsx)("div", { className: a()(C.Qf, C.SL) }),
            (0, i.jsx)("div", {
                className: a()(C.Qf, n ? void 0 : C.Ar),
                children: (0, i.jsx)(R, { ...e, onLoad: o }),
            }),
        ],
    });
}
