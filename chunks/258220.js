n.d(t, {
    default: () => g,
    r: () => f
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(153867),
    o = n(835473),
    s = n(600164),
    c = n(626135),
    u = n(998502),
    d = n(981631),
    p = n(388032),
    h = n(607919);
let f = 'Activity Encourages Hardware Acceleration';
function g(e) {
    var t,
        n,
        g,
        { applicationId: m } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['applicationId']);
    let [_, E] = i.useState(!1),
        [O] = (0, o.Z)([m]),
        N = null != (g = null == O ? void 0 : O.name) ? g : 'This Activity';
    i.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, { type: f });
    }, []);
    let y = () => {
        let e = 'temporary';
        _ && ((e = 'permanent'), a.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
            c.default.track(d.rMx.MODAL_DISMISSED, {
                type: f,
                dismiss_type: e
            }),
            b.onClose();
    };
    return (0, r.jsxs)(
        l.Y0X,
        ((t = (function (e) {
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
        })(
            {
                className: h.root,
                'aria-label': p.NW.string(p.t.NQkK4u)
            },
            b
        )),
        (n = n =
            {
                children: [
                    (0, r.jsxs)(l.xBx, {
                        separator: !1,
                        children: [
                            (0, r.jsx)(l.Text, {
                                className: h.__invalid_header,
                                variant: 'text-lg/normal',
                                children: p.NW.string(p.t.NQkK4u)
                            }),
                            (0, r.jsx)(l.olH, {
                                onClick: y,
                                className: h.closeButton
                            })
                        ]
                    }),
                    (0, r.jsx)(l.hzk, {
                        className: h.content,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: h.__invalid_ratingBody,
                            children: p.NW.format(p.t.B9eiaG, { applicationName: N })
                        })
                    }),
                    (0, r.jsxs)(l.mzw, {
                        className: h.footer,
                        direction: s.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(l.XZJ, {
                                type: l.XZJ.Types.INVERTED,
                                size: 18,
                                value: _,
                                onChange: () => E(!_),
                                children: (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: p.NW.string(p.t['5E9SBw'])
                                })
                            }),
                            (0, r.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: y,
                                children: p.NW.string(p.t['Ibf5/v'])
                            }),
                            (0, r.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                onClick: () => {
                                    c.default.track(d.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: m }), u.ZP.setEnableHardwareAcceleration(!0);
                                },
                                children: p.NW.string(p.t['/wlDqq'])
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
