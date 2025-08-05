(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(622822),
    o = n(665149),
    c = n(731290),
    d = n(594174),
    u = n(91159),
    h = n(593130),
    p = n(388032),
    f = n(522634);
function g(e) {
    let { channel: t } = e,
        [n, g] = i.useState(!1),
        m = i.useRef(null),
        b = (0, l.e7)(
            [c.Z, d.default],
            () => {
                let e = d.default.getCurrentUser();
                return null == e || ((0, s.aC)(t) && (!e.nsfwAllowed || !c.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        _ = i.useCallback(() => {
            g(!1);
        }, []),
        y = i.useCallback(() => {
            (n || (0, u.U4)('Popout'), g(!n));
        }, [n]);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: m,
        animation: a.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: _,
        renderPopout: function () {
            return (0, r.jsx)(a.VqE, {
                children: (0, r.jsx)(h.Z, {
                    className: f.browser,
                    channel: t,
                    onClose: _
                })
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            var n, i;
            let { isShown: l } = t;
            return (0, r.jsx)(
                o.JO,
                ((n = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        ref: m,
                        className: f.icon,
                        onClick: y,
                        icon: a.or_,
                        'aria-label': p.intl.string(p.t.B2panJ),
                        tooltip: l ? null : p.intl.string(p.t.B2panJ),
                        disabled: b,
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
