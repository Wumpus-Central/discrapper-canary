(n.d(t, { default: () => m }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    o = n(82659),
    a = n(481060),
    l = n(660216),
    c = n(825209),
    d = n(714338),
    u = n(556296),
    h = n(13140),
    p = n(710111),
    b = n(981631),
    f = n(388032),
    g = n(267205);
function m(e) {
    var t;
    let { transitionState: n, onClose: m } = e,
        _ = (0, s.e7)([u.ZP], () => u.ZP.getKeybindForAction(b.kg4.SOUNDBOARD_HOLD)),
        [y, E] = r.useState(null != (t = null == _ ? void 0 : _.shortcut) ? t : []),
        D = r.useCallback(() => {
            if (0 === y.length) return (null != _ && l.Z.deleteKeybind(_.id), m());
            if (null == _)
                l.Z.addKeybind({
                    action: b.kg4.SOUNDBOARD_HOLD,
                    shortcut: y,
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
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, _)),
                    (t = t = { shortcut: y }),
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
            m();
        }, [_, m, y]);
    r.useEffect(
        () => (
            d.Z.disable(),
            () => {
                d.Z.enable();
            }
        ),
        []
    );
    let v = r.useMemo(
        () => [
            {
                text: f.intl.string(f.t['ETE/oK']),
                onClick: m,
                variant: 'secondary'
            },
            {
                text: f.intl.string(f.t.R3BPHx),
                onClick: D,
                variant: 'primary'
            }
        ],
        [m, D]
    );
    return (0, i.jsxs)(o.u, {
        transitionState: n,
        title: f.intl.string(f.t['0Osu39']),
        actions: v,
        onClose: m,
        children: [
            (0, i.jsx)(a.Wn, {
                className: g.warning,
                messageType: a.QYI.WARNING,
                children: f.intl.string(f.t['O2v/eH'])
            }),
            (0, i.jsx)(a.X6q, {
                className: g.formHeader,
                variant: 'eyebrow',
                color: 'header-secondary',
                children: f.intl.string(f.t.UUpADw)
            }),
            (0, i.jsx)(a.Text, {
                className: g.action,
                variant: 'text-md/normal',
                children: f.intl.string(f.t['1xFbPz'])
            }),
            (0, i.jsx)(a.Text, {
                className: g.actionDescription,
                variant: 'text-sm/normal',
                children: f.intl.string(f.t.laNlTk)
            }),
            (0, i.jsx)(a.X6q, {
                className: g.formHeader,
                variant: 'eyebrow',
                color: 'header-secondary',
                children: f.intl.string(f.t['1La4tL'])
            }),
            (0, i.jsx)(c.Z, {
                defaultValue: y,
                onChange: E
            }),
            (0, i.jsx)(a.eee, {
                className: g.resetButton,
                onClick: () => E((0, h.Kd)(p.D_)),
                children: f.intl.string(f.t['s7+2ra'])
            })
        ]
    });
}
