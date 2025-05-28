n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(23536),
    s = n(40851),
    c = n(540059),
    u = n(731290),
    d = n(306680),
    p = n(594174),
    h = n(585483),
    f = n(665149),
    m = n(981631),
    g = n(388032);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
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
        n = (0, c.Q3)('ChannelPinsButton'),
        x = (0, l.e7)(
            [u.Z, p.default],
            () => {
                let e = p.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !u.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [y, C] = i.useState(!1),
        v = (0, l.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]),
        j = (0, s.Aq)(),
        O = i.useRef(null),
        E = i.useCallback(() => {
            x || C((e) => !e);
        }, [x]);
    function I(e) {
        (null == e ? void 0 : e.shiftKey) || j.dispatch(m.CkL.POPOUT_CLOSE);
    }
    return (
        i.useEffect(
            () => (
                h.S.subscribe(m.CkL.TOGGLE_CHANNEL_PINS, E),
                () => {
                    h.S.unsubscribe(m.CkL.TOGGLE_CHANNEL_PINS, E);
                }
            ),
            [E]
        ),
        (0, r.jsx)(a.yRy, {
            targetElementRef: O,
            shouldShow: y,
            animation: a.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => C(!1),
            renderPopout: function (e) {
                return (0, r.jsx)(
                    o.Z,
                    _(b({}, e), {
                        onJump: I,
                        channel: t
                    })
                );
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, r.jsx)(
                    f.JO,
                    _(b({}, e), {
                        ref: O,
                        onClick: E,
                        tooltip: i ? null : g.intl.string(g.t['mp1N//']),
                        icon: a.qQX,
                        iconSize: n ? 20 : void 0,
                        'aria-label': g.intl.string(g.t['mp1N//']),
                        disabled: x,
                        showBadge: v,
                        selected: i
                    })
                );
            }
        })
    );
};
