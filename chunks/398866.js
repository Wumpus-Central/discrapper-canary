"use strict";
n.d(t, { o: () => A }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(337126),
    l = n(835245),
    u = n(440454),
    d = n(544028),
    c = n(203982),
    _ = n(851907),
    f = n(948607),
    E = n(928588),
    h = n(360469),
    p = n(652215),
    m = n(457771);
function g(e) {
    let {
            url: t,
            className: n,
            style: s,
            onLoad: a,
            shouldRefocus: m,
            queryParams: g,
            allowPopups: A = !1,
            referrerPolicy: I = "origin",
        } = e,
        T = (0, _.xi)({}),
        S = (0, o.useMemoOne)(() => (0, l.A)(), [t]),
        y = i.useRef(null),
        N = (0, f.A)(y, m, null == T ? window : T),
        O = { ...g, frame_id: S, platform: h.vu.DESKTOP },
        [R, v] = i.useState(!1),
        C = d.A.theme,
        b = { ...s };
    return (
        C === p.NJ8.LIGHT ? (b.colorScheme = "light") : (b.colorScheme = "dark"),
        i.useEffect(
            () => (
                c._.dispatch(p.jej.IFRAME_MOUNT, { id: S }),
                () => {
                    c._.dispatch(p.jej.IFRAME_UNMOUNT, { id: S });
                }
            ),
            [S],
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                v(t);
            };
            return (
                c._.subscribe(p.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    c._.unsubscribe(p.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        R && (b.pointerEvents = "none"),
        null != t
            ? (0, r.jsx)("iframe", {
                  style: b,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: I,
                  onLoad: function (e) {
                      a?.(e.target),
                          (y.current = e.target),
                          N(!0),
                          e.target.contentWindow?.postMessage([u.A.HELLO, O], t ?? "");
                  },
                  sandbox: (0, E.A)({ allowPopups: A }),
                  className: n,
                  src: `${t}?${new URLSearchParams(O)}`,
              })
            : null
    );
}
function A(e) {
    let { onLoad: t } = e,
        [n, s] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                s(!0), t?.(e);
            },
            [t],
        );
    return (0, r.jsxs)("div", {
        className: m.Qf,
        children: [
            !n && (0, r.jsx)("div", { className: a()(m.Qf, m.SL) }),
            (0, r.jsx)("div", {
                className: a()(m.Qf, n ? void 0 : m.Ar),
                children: (0, r.jsx)(g, { ...e, onLoad: o }),
            }),
        ],
    });
}
