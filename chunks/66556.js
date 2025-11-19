n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(622822),
    s = n(665149),
    o = n(91159),
    c = n(593130),
    d = n(388032),
    u = n(170909);
function p(e) {
    let { channel: t } = e,
        [n, p] = i.useState(!1),
        h = i.useRef(null),
        f = (0, a.$5)(t),
        g = i.useCallback(() => {
            p(!1);
        }, []),
        m = i.useCallback(() => {
            n || (0, o.U4)("Popout"), p(!n);
        }, [n]);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: h,
        animation: l.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: g,
        renderPopout: function () {
            return (0, r.jsx)(l.VqE, {
                children: (0, r.jsx)(c.Z, {
                    className: u.browser,
                    channel: t,
                    onClose: g,
                }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            var n, i;
            let { isShown: a } = t;
            return (0, r.jsx)(
                s.JO,
                ((n = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        ref: h,
                        className: u.icon,
                        onClick: m,
                        icon: l.or_,
                        "aria-label": d.intl.string(d.t.B2panI),
                        tooltip: a ? null : d.intl.string(d.t.B2panI),
                        disabled: f,
                        selected: a,
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
                n),
            );
        },
    });
}
