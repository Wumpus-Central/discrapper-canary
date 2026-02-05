"use strict";
n.d(t, { o: () => A }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(337126),
    l = n(835245),
    u = n(440454),
    c = n(544028),
    d = n(203982),
    _ = n(851907),
    f = n(948607),
    p = n(928588),
    h = n(360469),
    m = n(652215),
    g = n(272412);
function E(e) {
    let {
            url: t,
            className: n,
            style: a,
            onLoad: s,
            shouldRefocus: g,
            queryParams: E,
            allowPopups: A = !1,
            referrerPolicy: I = "origin",
        } = e,
        T = (0, _.xi)({}),
        y = (0, o.useMemoOne)(() => (0, l.A)(), [t]),
        S = i.useRef(null),
        v = (0, f.A)(S, g, null == T ? window : T),
        C = { ...E, frame_id: y, platform: h.vu.DESKTOP },
        [b, N] = i.useState(!1),
        R = c.A.theme,
        O = { ...a };
    function D(e) {
        s?.(e.target), (S.current = e.target), v(!0), e.target.contentWindow?.postMessage([u.A.HELLO, C], t ?? "");
    }
    return (
        R === m.NJ8.LIGHT ? (O.colorScheme = "light") : (O.colorScheme = "dark"),
        i.useEffect(
            () => (
                d._.dispatch(m.jej.IFRAME_MOUNT, { id: y }),
                () => {
                    d._.dispatch(m.jej.IFRAME_UNMOUNT, { id: y });
                }
            ),
            [y],
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                N(t);
            };
            return (
                d._.subscribe(m.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d._.unsubscribe(m.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        b && (O.pointerEvents = "none"),
        null != t
            ? (0, r.jsx)("iframe", {
                  style: O,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: I,
                  onLoad: D,
                  sandbox: (0, p.A)({ allowPopups: A }),
                  className: n,
                  src: `${t}?${new URLSearchParams(C)}`,
              })
            : null
    );
}
function A(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                a(!0), t?.(e);
            },
            [t],
        );
    return (0, r.jsxs)("div", {
        className: g.Qf,
        children: [
            !n && (0, r.jsx)("div", { className: s()(g.Qf, g.SL) }),
            (0, r.jsx)("div", {
                className: s()(g.Qf, n ? void 0 : g.Ar),
                children: (0, r.jsx)(E, { ...e, onLoad: o }),
            }),
        ],
    });
}
