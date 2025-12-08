n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(23536),
    o = n(622822),
    c = n(728285),
    d = n(306680),
    u = n(585483),
    p = n(665149),
    h = n(981631),
    f = n(388032);
function g(e) {
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
function m(e, t) {
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
let b = function (e) {
    let { channel: t } = e,
        n = (0, o.$5)(t),
        [b, _] = i.useState(!1),
        y = (0, l.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]),
        O = (0, c.Aq)(),
        x = i.useRef(null),
        j = i.useCallback(() => {
            n || _((e) => !e);
        }, [n]);
    function v(e) {
        (null == e ? void 0 : e.shiftKey) || O.dispatch(h.CkL.POPOUT_CLOSE);
    }
    return (
        i.useEffect(
            () => (
                u.S.subscribe(h.CkL.TOGGLE_CHANNEL_PINS, j),
                () => {
                    u.S.unsubscribe(h.CkL.TOGGLE_CHANNEL_PINS, j);
                }
            ),
            [j],
        ),
        (0, r.jsx)(a.yRy, {
            targetElementRef: x,
            shouldShow: b,
            animation: a.yRy.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => _(!1),
            renderPopout: function (e) {
                return (0, r.jsx)(
                    s.Z,
                    m(g({}, e), {
                        onJump: v,
                        channel: t,
                    }),
                );
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, r.jsx)(
                    p.JO,
                    m(g({}, e), {
                        ref: x,
                        onClick: j,
                        tooltip: i ? null : f.intl.string(f.t["mp1N/2"]),
                        icon: a.qQX,
                        iconSize: 20,
                        "aria-label": f.intl.string(f.t["mp1N/2"]),
                        disabled: n,
                        showBadge: y,
                        selected: i,
                    }),
                );
            },
        })
    );
};
