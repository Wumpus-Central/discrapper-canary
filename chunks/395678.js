s.d(t, { o: () => L }), s(323874), s(14289), s(35956);
var a = s(627968),
    n = s(64700),
    r = s(503698),
    i = s.n(r),
    l = s(337126),
    o = s(132500),
    c = s(440454),
    u = s(363195),
    d = s(625494),
    A = s(851907),
    m = s(435558),
    E = s(17928),
    f = s(192308),
    N = s(267102),
    j = s(186111),
    _ = s(712687),
    h = s(652215),
    O = s(775602);
let p = (0, m.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    I = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var M = s(360469),
    x = s(457771);
function b(e) {
    let {
            url: t,
            className: s,
            style: r,
            onLoad: i,
            shouldRefocus: m,
            queryParams: x,
            allowPopups: b = !1,
            referrerPolicy: L = "origin",
        } = e,
        v = (0, A.xi)({}),
        T = (0, l.useMemoOne)(() => (0, o.A)(), [t]),
        g = n.useRef(null),
        R = (function (e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                a = (0, E.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
                r = (function () {
                    let e = (0, f.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, s] = e;
                                    return 0 === s.length;
                                }),
                        ),
                        t = (0, E.bG)([_.A], () => _.A.isOpen()),
                        s = (0, E.bG)([j.A], () => j.A.hasLayers()),
                        [a, r] = n.useState(!1),
                        i = (0, N.aL)();
                    return (
                        n.useEffect(() => {
                            function e() {
                                r(!0);
                            }
                            function t() {
                                r(!1);
                            }
                            return (
                                i.subscribe(h.jej.POPOUT_SHOW, e),
                                i.subscribe(h.jej.POPOUT_HIDE, t),
                                () => {
                                    i.unsubscribe(h.jej.POPOUT_SHOW, e), i.unsubscribe(h.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [i]),
                        e || t || a || s
                    );
                })(),
                [i, l] = n.useState(!1),
                o = (0, N.aL)();
            return (
                n.useEffect(() => {
                    if (t) return s.addEventListener("blur", e), () => s.removeEventListener("blur", e);
                    function e() {
                        r && (o.dispatch(h.jej.POPOUT_CLOSE), d._.dispatch(h.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [s, r, t, o]),
                n.useEffect(() => {
                    if (a || !i || !t) return;
                    let { current: n } = e,
                        l = r;
                    function o(t) {
                        let s = t.relatedTarget;
                        setTimeout(() => {
                            (null != s && ("BUTTON" !== s.tagName || s.hasAttribute("aria-expanded"))) || l || p(e);
                        }, 100);
                    }
                    return (
                        n?.addEventListener("focusout", o),
                        s.document.activeElement?.tagName === "IFRAME" || l || n?.focus(),
                        () => {
                            n?.removeEventListener("focusout", o), (l = !0);
                        }
                    );
                }, [t, i, a, e, s, r]),
                l
            );
        })(g, m, null == v ? window : v),
        S = { ...x, frame_id: T, platform: M.vu.DESKTOP },
        [w, D] = n.useState(!1),
        C = u.A.theme,
        H = { ...r };
    return (
        C === h.NJ8.LIGHT ? (H.colorScheme = "light") : (H.colorScheme = "dark"),
        n.useEffect(
            () => (
                d._.dispatch(h.jej.IFRAME_MOUNT, { id: T }),
                () => {
                    d._.dispatch(h.jej.IFRAME_UNMOUNT, { id: T });
                }
            ),
            [T],
        ),
        n.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                D(t);
            }
            return (
                d._.subscribe(h.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d._.unsubscribe(h.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        w && (H.pointerEvents = "none"),
        null != t
            ? (0, a.jsx)("iframe", {
                  style: H,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: L,
                  onLoad: function (e) {
                      i?.(e.target),
                          (g.current = e.target),
                          R(!0),
                          e.target.contentWindow?.postMessage([c.A.HELLO, S], t ?? "");
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          s = I;
                      return t && (s = [...I, "allow-popups", "allow-popups-to-escape-sandbox"]), s.join(" ");
                  })({ allowPopups: b }),
                  className: s,
                  src: `${t}?${new URLSearchParams(S)}`,
              })
            : null
    );
}
function L(e) {
    let { onLoad: t } = e,
        [s, r] = n.useState(!1),
        l = n.useCallback(
            (e) => {
                r(!0), t?.(e);
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: x.Qf,
        children: [
            !s && (0, a.jsx)("div", { className: i()(x.Qf, x.SL) }),
            (0, a.jsx)("div", {
                className: i()(x.Qf, s ? void 0 : x.Ar),
                children: (0, a.jsx)(b, { ...e, onLoad: l }),
            }),
        ],
    });
}
