n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(23536),
    s = n(40851),
    c = n(622822),
    u = n(306680),
    d = n(585483),
    p = n(665149),
    h = n(981631),
    f = n(388032);
function m(e) {
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
let b = function (e) {
    let { channel: t } = e,
        n = (0, c.$5)(t),
        [b, y] = i.useState(!1),
        _ = (0, l.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id), [t]),
        C = (0, s.Aq)(),
        x = i.useRef(null),
        v = i.useCallback(() => {
            n || y((e) => !e);
        }, [n]);
    function O(e) {
        (null == e ? void 0 : e.shiftKey) || C.dispatch(h.CkL.POPOUT_CLOSE);
    }
    return (
        i.useEffect(
            () => (
                d.S.subscribe(h.CkL.TOGGLE_CHANNEL_PINS, v),
                () => {
                    d.S.unsubscribe(h.CkL.TOGGLE_CHANNEL_PINS, v);
                }
            ),
            [v],
        ),
        (0, r.jsx)(a.yRy, {
            targetElementRef: x,
            shouldShow: b,
            animation: a.yRy.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => y(!1),
            renderPopout: function (e) {
                return (0, r.jsx)(
                    o.Z,
                    g(m({}, e), {
                        onJump: O,
                        channel: t,
                    }),
                );
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, r.jsx)(
                    p.JO,
                    g(m({}, e), {
                        ref: x,
                        onClick: v,
                        tooltip: i ? null : f.intl.string(f.t["mp1N//"]),
                        icon: a.qQX,
                        iconSize: 20,
                        "aria-label": f.intl.string(f.t["mp1N//"]),
                        disabled: n,
                        showBadge: _,
                        selected: i,
                    }),
                );
            },
        })
    );
};
