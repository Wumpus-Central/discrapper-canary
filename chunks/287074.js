n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(945830),
    o = n(323073),
    c = n(267102),
    u = n(222823),
    d = n(203982),
    f = n(58736),
    p = n(652215),
    h = n(985018);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = function (e) {
    let { channel: t } = e,
        n = (0, o.vL)(t),
        [m, A] = l.useState(!1),
        y = (0, i.bG)([u.Ay], () => u.Ay.hasUnreadPins(t.id), [t]),
        O = (0, c.aL)(),
        j = l.useRef(null),
        v = l.useCallback(() => {
            n || A((e) => !e);
        }, [n]);

    function x(e) {
        (null == e ? void 0 : e.shiftKey) || O.dispatch(p.jej.POPOUT_CLOSE);
    }
    return (
        l.useEffect(
            () => (
                d._.subscribe(p.jej.TOGGLE_CHANNEL_PINS, v),
                () => {
                    d._.unsubscribe(p.jej.TOGGLE_CHANNEL_PINS, v);
                }
            ),
            [v],
        ),
        (0, r.jsx)(a.YNO, {
            targetElementRef: j,
            shouldShow: m,
            animation: a.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => A(!1),
            renderPopout: function (e) {
                return (0, r.jsx)(
                    s.A,
                    g(b({}, e), {
                        onJump: x,
                        channel: t,
                    }),
                );
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, r.jsx)(
                    f.In,
                    g(b({}, e), {
                        ref: j,
                        onClick: v,
                        tooltip: l ? null : h.intl.string(h.t["mp1N/2"]),
                        icon: a.tsw,
                        iconSize: 20,
                        "aria-label": h.intl.string(h.t["mp1N/2"]),
                        disabled: n,
                        showBadge: y,
                        selected: l,
                    }),
                );
            },
        })
    );
};
