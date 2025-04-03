n.d(t, { default: () => f }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(660216),
    l = n(825209),
    c = n(714338),
    d = n(556296),
    u = n(13140),
    h = n(710111),
    p = n(981631),
    b = n(388032),
    m = n(267205);
function f(e) {
    var t;
    let { transitionState: n, onClose: f } = e,
        g = (0, i.e7)([d.ZP], () => d.ZP.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)),
        [_, N] = s.useState(null != (t = null == g ? void 0 : g.shortcut) ? t : []);
    return (
        s.useEffect(
            () => (
                c.Z.disable(),
                () => {
                    c.Z.enable();
                }
            ),
            []
        ),
        (0, r.jsxs)(o.Y0X, {
            transitionState: n,
            children: [
                (0, r.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            className: m.header,
                            variant: 'heading-xl/semibold',
                            children: b.NW.string(b.t['0Osu39'])
                        }),
                        (0, r.jsx)(o.olH, {
                            className: m.closeButton,
                            onClick: f
                        })
                    ]
                }),
                (0, r.jsxs)(o.hzk, {
                    className: m.content,
                    children: [
                        (0, r.jsx)(o.Wn, {
                            className: m.warning,
                            messageType: o.QYI.WARNING,
                            children: b.NW.string(b.t['O2v/eH'])
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: m.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.NW.string(b.t.UUpADw)
                        }),
                        (0, r.jsx)(o.Text, {
                            className: m.action,
                            variant: 'text-md/normal',
                            children: b.NW.string(b.t['1xFbPz'])
                        }),
                        (0, r.jsx)(o.Text, {
                            className: m.actionDescription,
                            variant: 'text-sm/normal',
                            children: b.NW.string(b.t.laNlTk)
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: m.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.NW.string(b.t['1La4tL'])
                        }),
                        (0, r.jsx)(l.Z, {
                            defaultValue: _,
                            onChange: N
                        }),
                        (0, r.jsx)(o.eee, {
                            className: m.resetButton,
                            onClick: () => N((0, u.Kd)(h.D_)),
                            children: b.NW.string(b.t['s7+2ra'])
                        })
                    ]
                }),
                (0, r.jsxs)(o.mzw, {
                    children: [
                        (0, r.jsx)(o.zxk, {
                            onClick: function () {
                                if (0 === _.length) return null != g && a.Z.deleteKeybind(g.id), f();
                                if (null == g)
                                    a.Z.addKeybind({
                                        action: p.kg4.SOUNDBOARD_HOLD,
                                        shortcut: _,
                                        enabled: !0,
                                        params: {}
                                    });
                                else {
                                    var e, t;
                                    a.Z.setKeybind(
                                        ((e = (function (e) {
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
                                        })({}, g)),
                                        (t = t = { shortcut: _ }),
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
                                        e)
                                    );
                                }
                                f();
                            },
                            children: b.NW.string(b.t.R3BPHx)
                        }),
                        (0, r.jsx)(o.zxk, {
                            onClick: f,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: b.NW.string(b.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
