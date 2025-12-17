n.d(t, { J: () => S }), n(388685), n(65234), n(111804), n(490233), n(97749);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(348533),
    l = n(772848),
    c = n(631467),
    u = n(210887),
    d = n(585483),
    f = n(531826),
    p = n(53289),
    _ = n(953101),
    m = n(701488),
    h = n(981631),
    g = n(687130);
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
function v(e) {
    let {
            url: t,
            className: n,
            style: a,
            onLoad: o,
            shouldRefocus: g,
            queryParams: E,
            allowPopups: y = !1,
            referrerPolicy: v = "origin",
        } = e,
        S = (0, f.sU)({}),
        I = (0, s.useMemoOne)(() => (0, l.Z)(), [t]),
        T = i.useRef(null),
        C = (0, p.Z)(T, g, null == S ? window : S),
        A = O(b({}, E), {
            frame_id: I,
            platform: m.S4.DESKTOP,
        }),
        [N, P] = i.useState(!1),
        R = u.Z.theme,
        w = b({}, a);
    function D(e) {
        var n;
        null == o || o(e.target),
            (T.current = e.target),
            C(!0),
            null == (n = e.target.contentWindow) || n.postMessage([c.Z.HELLO, A], null != t ? t : "");
    }
    return (
        R === h.BRd.LIGHT ? (w.colorScheme = "light") : (w.colorScheme = "dark"),
        i.useEffect(
            () => (
                d.S.dispatch(h.CkL.IFRAME_MOUNT, { id: I }),
                () => {
                    d.S.dispatch(h.CkL.IFRAME_UNMOUNT, { id: I });
                }
            ),
            [I],
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                P(t);
            };
            return (
                d.S.subscribe(h.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d.S.unsubscribe(h.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        N && (w.pointerEvents = "none"),
        null != t
            ? (0, r.jsx)("iframe", {
                  style: w,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: v,
                  onLoad: D,
                  sandbox: (0, _.Z)({ allowPopups: y }),
                  className: n,
                  src: "".concat(t, "?").concat(new URLSearchParams(A)),
              })
            : null
    );
}
function S(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        s = i.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t],
        );
    return (0, r.jsxs)("div", {
        className: g.fillParent,
        children: [
            !n && (0, r.jsx)("div", { className: o()(g.fillParent, g.iframePlaceholder) }),
            (0, r.jsx)("div", {
                className: o()(g.fillParent, n ? void 0 : g.hiddenIframeContainer),
                children: (0, r.jsx)(v, O(b({}, e), { onLoad: s })),
            }),
        ],
    });
}
