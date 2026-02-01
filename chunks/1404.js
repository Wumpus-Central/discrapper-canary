n.d(t, {
    D: () => d,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(193663),
    u = n(576420),
    c = n(783346);

function d(e) {
    var t, n;
    let {
            listItemId: l,
            isVisuallyOffline: d = !1,
            recentlyAddedTimestampMs: h = null,
            outerRef: p,
            leftIndicator: f,
            avatar: g,
            primaryText: m,
            secondaryText: y,
            rightActions: A,
            onClick: v,
            onContextMenu: b,
            onMouseEnter: E,
            onMouseLeave: O,
            className: x,
            rowInnerClassName: _,
        } = e,
        S = (0, s.rm)(l),
        [I, j] = r.useState(!1),
        T = r.useRef(null),
        [C, N] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (null == h || T.current === h) return;
            T.current = h;
            let e = Date.now();
            h > e || e - h > u.WS || N(!0);
        }, [h]),
        (0, i.jsxs)("div", {
            ref: p,
            className: a()(c.nM, x, {
                [c.SS]: d,
            }),
            onAnimationEnd: (e) => {
                "friendsWidgetRowRecentlyAdded" === e.animationName && N(!1);
            },
            children: [
                null != f
                    ? (0, i.jsx)("div", {
                          className: c.oT,
                          children: f,
                      })
                    : null,
                (0, i.jsx)(
                    o.A,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            innerClassName: a()(c.bL, _),
                            className: C ? c.fc : void 0,
                            onClick: v,
                            onContextMenu: b,
                            onMouseEnter: (e) => {
                                j(!0), null == E || E(e);
                            },
                            onMouseLeave: (e) => {
                                j(!1), null == O || O(e);
                            },
                            avatar: g,
                            name: m,
                            subText: y,
                            hovered: I,
                        },
                        S,
                    )),
                    (n = n =
                        {
                            children:
                                null != A
                                    ? (0, i.jsx)("div", {
                                          className: c.cm,
                                          children: A(I),
                                      })
                                    : null,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
            ],
        })
    );
}
