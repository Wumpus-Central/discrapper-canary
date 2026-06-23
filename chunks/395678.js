"use strict";
n.d(t, { o: () => v }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(337126),
    l = n(835245),
    u = n(440454),
    c = n(363195),
    d = n(625494),
    _ = n(851907),
    h = n(735438),
    f = n(17928),
    p = n(192308),
    E = n(267102),
    m = n(186111),
    g = n(712687),
    A = n(652215),
    I = n(775602);
let T = (0, h.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    S = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var y = n(360469),
    C = n(457771);
function N(e) {
    let {
            url: t,
            className: n,
            style: s,
            onLoad: a,
            shouldRefocus: h,
            queryParams: C,
            allowPopups: N = !1,
            referrerPolicy: v = "origin",
        } = e,
        R = (0, _.xi)({}),
        O = (0, o.useMemoOne)(() => (0, l.A)(), [t]),
        b = r.useRef(null),
        D = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                i = (0, f.bG)([I.Ay], () => I.Ay.keyboardModeEnabled),
                s = (function () {
                    let e = (0, p.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, f.bG)([g.A], () => g.A.isOpen()),
                        n = (0, f.bG)([m.A], () => m.A.hasLayers()),
                        [i, s] = r.useState(!1),
                        a = (0, E.aL)();
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
                l = (0, E.aL)();
            return (
                r.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        s && (l.dispatch(A.jej.POPOUT_CLOSE), d._.dispatch(A.jej.CONTEXT_MENU_CLOSE));
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
        })(b, h, null == R ? window : R),
        L = { ...C, frame_id: O, platform: y.vu.DESKTOP },
        [w, M] = r.useState(!1),
        P = c.A.theme,
        x = { ...s };
    return (
        P === A.NJ8.LIGHT ? (x.colorScheme = "light") : (x.colorScheme = "dark"),
        r.useEffect(
            () => (
                d._.dispatch(A.jej.IFRAME_MOUNT, { id: O }),
                () => {
                    d._.dispatch(A.jej.IFRAME_UNMOUNT, { id: O });
                }
            ),
            [O],
        ),
        r.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                M(t);
            }
            return (
                d._.subscribe(A.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d._.unsubscribe(A.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        w && (x.pointerEvents = "none"),
        null != t
            ? (0, i.jsx)("iframe", {
                  style: x,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: v,
                  onLoad: function (e) {
                      a?.(e.target),
                          (b.current = e.target),
                          D(!0),
                          e.target.contentWindow?.postMessage([u.A.HELLO, L], t ?? "");
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          n = S;
                      return t && (n = [...S, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                  })({ allowPopups: N }),
                  className: n,
                  src: `${t}?${new URLSearchParams(L)}`,
              })
            : null
    );
}
function v(e) {
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
                children: (0, i.jsx)(N, { ...e, onLoad: o }),
            }),
        ],
    });
}
