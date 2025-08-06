(n.d(t, { Z: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(23536),
    o = n(40851),
    c = n(622822),
    u = n(731290),
    d = n(306680),
    h = n(594174),
    p = n(585483),
    f = n(665149),
    g = n(981631),
    m = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function y(e, t) {
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
let x = function (e) {
    let { channel: t } = e,
        n = (0, l.e7)(
            [u.Z, h.default],
            () => {
                let e = h.default.getCurrentUser();
                return null == e || ((0, c.aC)(t) && (!e.nsfwAllowed || !u.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [x, j] = i.useState(!1),
        _ = (0, l.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]),
        O = (0, o.Aq)(),
        v = i.useRef(null),
        C = i.useCallback(() => {
            n || j((e) => !e);
        }, [n]);
    function E(e) {
        (null == e ? void 0 : e.shiftKey) || O.dispatch(g.CkL.POPOUT_CLOSE);
    }
    return (
        i.useEffect(
            () => (
                p.S.subscribe(g.CkL.TOGGLE_CHANNEL_PINS, C),
                () => {
                    p.S.unsubscribe(g.CkL.TOGGLE_CHANNEL_PINS, C);
                }
            ),
            [C]
        ),
        (0, r.jsx)(a.yRy, {
            targetElementRef: v,
            shouldShow: x,
            animation: a.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => j(!1),
            renderPopout: function (e) {
                return (0, r.jsx)(
                    s.Z,
                    y(b({}, e), {
                        onJump: E,
                        channel: t
                    })
                );
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, r.jsx)(
                    f.JO,
                    y(b({}, e), {
                        ref: v,
                        onClick: C,
                        tooltip: i ? null : m.intl.string(m.t['mp1N//']),
                        icon: a.qQX,
                        iconSize: 20,
                        'aria-label': m.intl.string(m.t['mp1N//']),
                        disabled: n,
                        showBadge: _,
                        selected: i
                    })
                );
            }
        })
    );
};
