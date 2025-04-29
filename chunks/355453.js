n.d(t, { default: () => f }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    o = n(481060),
    l = n(660216),
    a = n(825209),
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
        g = (0, s.e7)([d.ZP], () => d.ZP.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)),
        [_, E] = r.useState(null != (t = null == g ? void 0 : g.shortcut) ? t : []);
    return (
        r.useEffect(
            () => (
                c.Z.disable(),
                () => {
                    c.Z.enable();
                }
            ),
            []
        ),
        (0, i.jsxs)(o.Y0X, {
            transitionState: n,
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            className: m.header,
                            variant: 'heading-xl/semibold',
                            children: b.intl.string(b.t['0Osu39'])
                        }),
                        (0, i.jsx)(o.olH, {
                            className: m.closeButton,
                            onClick: f
                        })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: m.content,
                    children: [
                        (0, i.jsx)(o.Wn, {
                            className: m.warning,
                            messageType: o.QYI.WARNING,
                            children: b.intl.string(b.t['O2v/eH'])
                        }),
                        (0, i.jsx)(o.X6q, {
                            className: m.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.intl.string(b.t.UUpADw)
                        }),
                        (0, i.jsx)(o.Text, {
                            className: m.action,
                            variant: 'text-md/normal',
                            children: b.intl.string(b.t['1xFbPz'])
                        }),
                        (0, i.jsx)(o.Text, {
                            className: m.actionDescription,
                            variant: 'text-sm/normal',
                            children: b.intl.string(b.t.laNlTk)
                        }),
                        (0, i.jsx)(o.X6q, {
                            className: m.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.intl.string(b.t['1La4tL'])
                        }),
                        (0, i.jsx)(a.Z, {
                            defaultValue: _,
                            onChange: E
                        }),
                        (0, i.jsx)(o.eee, {
                            className: m.resetButton,
                            onClick: () => E((0, u.Kd)(h.D_)),
                            children: b.intl.string(b.t['s7+2ra'])
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            onClick: function () {
                                if (0 === _.length) return null != g && l.Z.deleteKeybind(g.id), f();
                                if (null == g)
                                    l.Z.addKeybind({
                                        action: p.kg4.SOUNDBOARD_HOLD,
                                        shortcut: _,
                                        enabled: !0,
                                        params: {}
                                    });
                                else {
                                    var e, t;
                                    l.Z.setKeybind(
                                        ((e = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
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
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
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
                            children: b.intl.string(b.t.R3BPHx)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: f,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: b.intl.string(b.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
