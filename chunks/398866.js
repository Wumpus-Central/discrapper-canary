n.d(t, {
    o: () => v,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(337126),
    l = n(835245),
    c = n(440454),
    u = n(544028),
    d = n(203982),
    f = n(851907),
    p = n(948607),
    _ = n(928588),
    h = n(360469),
    m = n(652215),
    g = n(272412);

function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function A(e) {
    let {
            url: t,
            className: n,
            style: a,
            onLoad: s,
            shouldRefocus: g,
            queryParams: E,
            allowPopups: y = !1,
            referrerPolicy: A = "origin",
        } = e,
        v = (0, f.xi)({}),
        S = (0, o.useMemoOne)(() => (0, l.A)(), [t]),
        I = i.useRef(null),
        T = (0, p.A)(I, g, null == v ? window : v),
        C = O(b({}, E), {
            frame_id: S,
            platform: h.vu.DESKTOP,
        }),
        [N, R] = i.useState(!1),
        w = u.A.theme,
        P = b({}, a);

    function D(e) {
        var n;
        null == s || s(e.target),
            (I.current = e.target),
            T(!0),
            null == (n = e.target.contentWindow) || n.postMessage([c.A.HELLO, C], null != t ? t : "");
    }
    return (
        w === m.NJ8.LIGHT ? (P.colorScheme = "light") : (P.colorScheme = "dark"),
        i.useEffect(
            () => (
                d._.dispatch(m.jej.IFRAME_MOUNT, {
                    id: S,
                }),
                () => {
                    d._.dispatch(m.jej.IFRAME_UNMOUNT, {
                        id: S,
                    });
                }
            ),
            [S],
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                R(t);
            };
            return (
                d._.subscribe(m.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d._.unsubscribe(m.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        N && (P.pointerEvents = "none"),
        null != t
            ? (0, r.jsx)("iframe", {
                  style: P,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: A,
                  onLoad: D,
                  sandbox: (0, _.A)({
                      allowPopups: y,
                  }),
                  className: n,
                  src: "".concat(t, "?").concat(new URLSearchParams(C)),
              })
            : null
    );
}

function v(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t],
        );
    return (0, r.jsxs)("div", {
        className: g.Qf,
        children: [
            !n &&
                (0, r.jsx)("div", {
                    className: s()(g.Qf, g.SL),
                }),
            (0, r.jsx)("div", {
                className: s()(g.Qf, n ? void 0 : g.Ar),
                children: (0, r.jsx)(
                    A,
                    O(b({}, e), {
                        onLoad: o,
                    }),
                ),
            }),
        ],
    });
}
