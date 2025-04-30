n.d(t, { Z: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(23536),
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
let y = function (e) {
    let { channel: t } = e,
        n = (0, c.Q3)('ChannelPinsButton'),
        y = (0, l.e7)(
            [u.Z, p.default],
            () => {
                let e = p.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !u.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [C, x] = i.useState(!1),
        v = (0, l.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]),
        j = (0, s.Aq)(),
        O = i.useCallback(() => {
            y || x((e) => !e);
        }, [y]);
    function E(e) {
        (null == e ? void 0 : e.shiftKey) || j.dispatch(m.CkL.POPOUT_CLOSE);
    }
    return (
        i.useEffect(
            () => (
                h.S.subscribe(m.CkL.TOGGLE_CHANNEL_PINS, O),
                () => {
                    h.S.unsubscribe(m.CkL.TOGGLE_CHANNEL_PINS, O);
                }
            ),
            [O]
        ),
        (0, r.jsx)(o.yRy, {
            shouldShow: C,
            animation: o.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => x(!1),
            renderPopout: function (e) {
                return (0, r.jsx)(
                    a.Z,
                    _(b({}, e), {
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
                    _(b({}, e), {
                        onClick: O,
                        tooltip: i ? null : g.intl.string(g.t['mp1N//']),
                        icon: o.qQX,
                        iconSize: n ? 20 : void 0,
                        'aria-label': g.intl.string(g.t['mp1N//']),
                        disabled: y,
                        showBadge: v,
                        selected: i
                    })
                );
            }
        })
    );
};
