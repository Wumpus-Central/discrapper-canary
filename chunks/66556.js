n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(665149),
    s = n(731290),
    c = n(594174),
    u = n(91159),
    d = n(593130),
    p = n(388032),
    h = n(522634);
function f(e) {
    let { channel: t } = e,
        [n, f] = i.useState(!1),
        m = (0, l.e7)(
            [s.Z, c.default],
            () => {
                let e = c.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !s.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        g = i.useCallback(() => {
            f(!1);
        }, []),
        b = i.useCallback(() => {
            n || (0, u.U4)('Popout'), f(!n);
        }, [n]);
    return (0, r.jsx)(o.yRy, {
        animation: o.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: g,
        renderPopout: function () {
            return (0, r.jsx)(o.VqE, {
                children: (0, r.jsx)(d.Z, {
                    className: h.browser,
                    channel: t,
                    onClose: g
                })
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            var n, i;
            let { isShown: l } = t;
            return (0, r.jsx)(
                a.JO,
                ((n = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        className: h.icon,
                        onClick: b,
                        icon: o.or_,
                        'aria-label': p.NW.string(p.t.B2panJ),
                        tooltip: l ? null : p.NW.string(p.t.B2panJ),
                        disabled: m,
                        selected: l
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n)
            );
        }
    });
}
