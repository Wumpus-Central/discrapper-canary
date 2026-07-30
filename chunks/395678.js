n.d(t, { o: () => v }), n(323874), n(14289), n(35956);
var s = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    l = n(727522),
    o = n(132500),
    c = n(440454),
    u = n(484697),
    d = n(363195),
    A = n(625494),
    m = n(851907),
    f = n(435558),
    E = n(17928),
    N = n(192308),
    j = n(267102),
    _ = n(186111),
    h = n(712687),
    p = n(652215),
    O = n(775602);
let I = (0, f.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    M = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var x = n(360469),
    b = n(2771);
function L(e) {
    let {
            url: t,
            className: n,
            style: r,
            onLoad: i,
            shouldRefocus: f,
            queryParams: b,
            allowPopups: L = !1,
            referrerPolicy: v = "origin",
        } = e,
        T = (0, m.xi)({}),
        R = (0, l.useMemoOne)(() => (0, o.A)(), [t]),
        g = a.useRef(null),
        w = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                s = (0, E.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
                r = (function () {
                    let e = (0, N.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, E.bG)([h.A], () => h.A.isOpen()),
                        n = (0, E.bG)([_.A], () => _.A.hasLayers()),
                        [s, r] = a.useState(!1),
                        i = (0, j.aL)();
                    return (
                        a.useEffect(() => {
                            function e() {
                                r(!0);
                            }
                            function t() {
                                r(!1);
                            }
                            return (
                                i.subscribe(p.jej.POPOUT_SHOW, e),
                                i.subscribe(p.jej.POPOUT_HIDE, t),
                                () => {
                                    i.unsubscribe(p.jej.POPOUT_SHOW, e), i.unsubscribe(p.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [i]),
                        e || t || s || n
                    );
                })(),
                [i, l] = a.useState(!1),
                o = (0, j.aL)();
            return (
                a.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        r && (o.dispatch(p.jej.POPOUT_CLOSE), A._.dispatch(p.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, r, t, o]),
                a.useEffect(() => {
                    if (s || !i || !t) return;
                    let { current: a } = e,
                        l = r;
                    function o(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || I(e);
                        }, 100);
                    }
                    return (
                        a?.addEventListener("focusout", o),
                        n.document.activeElement?.tagName === "IFRAME" || l || a?.focus(),
                        () => {
                            a?.removeEventListener("focusout", o), (l = !0);
                        }
                    );
                }, [t, i, s, e, n, r]),
                l
            );
        })(g, f, null == T ? window : T),
        S = { ...b, frame_id: R, platform: x.vu.DESKTOP },
        [D, C] = a.useState(!1),
        H = d.A.theme,
        P = { ...r };
    return (
        H === p.NJ8.LIGHT ? (P.colorScheme = "light") : (P.colorScheme = "dark"),
        a.useEffect(
            () => (
                A._.dispatch(p.jej.IFRAME_MOUNT, { id: R }),
                () => {
                    A._.dispatch(p.jej.IFRAME_UNMOUNT, { id: R });
                }
            ),
            [R],
        ),
        a.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                C(t);
            }
            return (
                A._.subscribe(p.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    A._.unsubscribe(p.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        D && (P.pointerEvents = "none"),
        null != t
            ? (0, s.jsx)("iframe", {
                  style: P,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: v,
                  onLoad: function (e) {
                      let n = e.target;
                      (g.current = n),
                          null != n.contentWindow &&
                              ((0, u.Y)(n.contentWindow, R), n.contentWindow.postMessage([c.A.HELLO, S], t ?? "")),
                          w(!0),
                          i?.(n);
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          n = M;
                      return t && (n = [...M, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                  })({ allowPopups: L }),
                  className: n,
                  src: `${t}?${new URLSearchParams(S)}`,
              })
            : null
    );
}
function v(e) {
    let { onLoad: t } = e,
        [n, r] = a.useState(!1),
        l = a.useCallback(
            (e) => {
                r(!0), t?.(e);
            },
            [t],
        );
    return (0, s.jsxs)("div", {
        className: b.Qf,
        children: [
            !n && (0, s.jsx)("div", { className: i()(b.Qf, b.SL) }),
            (0, s.jsx)("div", {
                className: i()(b.Qf, n ? void 0 : b.Ar),
                children: (0, s.jsx)(L, { ...e, onLoad: l }),
            }),
        ],
    });
}
