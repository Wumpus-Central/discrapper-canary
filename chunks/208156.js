n.d(t, { J: () => I }), n(47120), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(812028),
    l = n(772848),
    c = n(631467),
    u = n(210887),
    d = n(585483),
    f = n(531826),
    _ = n(53289),
    p = n(953101),
    h = n(701488),
    m = n(981631),
    g = n(962140);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function v(e, t) {
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
function O(e) {
    let { url: t, className: n, style: o, onLoad: a, shouldRefocus: g, queryParams: E, allowPopups: y = !1, referrerPolicy: O = 'origin' } = e,
        I = (0, f.sU)({}),
        S = (0, s.useMemoOne)(() => (0, l.Z)(), [t]),
        T = i.useRef(null),
        N = (0, _.Z)(T, g, null == I ? window : I),
        A = v(b({}, E), {
            frame_id: S,
            platform: h.S4.DESKTOP
        }),
        [C, R] = i.useState(!1),
        P = u.Z.theme,
        w = b({}, o);
    function D(e) {
        var n;
        null == a || a(e.target), (T.current = e.target), N(!0), null == (n = e.target.contentWindow) || n.postMessage([c.Z.HELLO, A], null != t ? t : '');
    }
    return (
        P === m.BRd.LIGHT ? (w.colorScheme = 'light') : (w.colorScheme = 'dark'),
        i.useEffect(
            () => (
                d.S.dispatch(m.CkL.IFRAME_MOUNT, { id: S }),
                () => {
                    d.S.dispatch(m.CkL.IFRAME_UNMOUNT, { id: S });
                }
            ),
            [S]
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                R(t);
            };
            return (
                d.S.subscribe(m.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d.S.unsubscribe(m.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        C && (w.pointerEvents = 'none'),
        null != t
            ? (0, r.jsx)('iframe', {
                  style: w,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: O,
                  onLoad: D,
                  sandbox: (0, p.Z)({ allowPopups: y }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(A))
              })
            : null
    );
}
function I(e) {
    let { onLoad: t } = e,
        [n, o] = i.useState(!1),
        s = i.useCallback(
            (e) => {
                o(!0), null == t || t(e);
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: g.fillParent,
        children: [
            !n && (0, r.jsx)('div', { className: a()(g.fillParent, g.iframePlaceholder) }),
            (0, r.jsx)('div', {
                className: a()(g.fillParent, n ? void 0 : g.hiddenIframeContainer),
                children: (0, r.jsx)(O, v(b({}, e), { onLoad: s }))
            })
        ]
    });
}
