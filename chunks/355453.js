n.d(t, { default: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    s = n(660216),
    l = n(825209),
    u = n(714338),
    b = n(556296),
    d = n(13140),
    p = n(710111),
    O = n(981631),
    f = n(388032),
    y = n(687213);
function g(e) {
    var t;
    let { transitionState: n, onClose: g } = e,
        m = (0, o.e7)([b.ZP], () => b.ZP.getKeybindForAction(O.kg4.SOUNDBOARD_HOLD)),
        [h, j] = i.useState(null != (t = null == m ? void 0 : m.shortcut) ? t : []),
        v = i.useCallback(() => {
            if (0 === h.length) return null != m && s.Z.deleteKeybind(m.id), g();
            if (null == m)
                s.Z.addKeybind({
                    action: O.kg4.SOUNDBOARD_HOLD,
                    shortcut: h,
                    enabled: !0,
                    params: {},
                });
            else {
                var e, t;
                s.Z.setKeybind(
                    ((e = (function (e) {
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
                    })({}, m)),
                    (t = t = { shortcut: h }),
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
                    e),
                );
            }
            g();
        }, [m, g, h]);
    i.useEffect(
        () => (
            u.Z.disable(),
            () => {
                u.Z.enable();
            }
        ),
        [],
    );
    let w = i.useMemo(
        () => [
            {
                text: f.intl.string(f.t["ETE/oK"]),
                onClick: g,
                variant: "secondary",
            },
            {
                text: f.intl.string(f.t.R3BPHx),
                onClick: v,
                variant: "primary",
            },
        ],
        [g, v],
    );
    return (0, r.jsxs)(a.Modal, {
        transitionState: n,
        title: f.intl.string(f.t["0Osu39"]),
        actions: w,
        onClose: g,
        children: [
            (0, r.jsx)(c.Wn, {
                className: y.warning,
                messageType: c.QYI.WARNING,
                children: f.intl.string(f.t["O2v/eH"]),
            }),
            (0, r.jsx)(c.X6q, {
                className: y.formHeader,
                variant: "eyebrow",
                color: "header-secondary",
                children: f.intl.string(f.t.UUpADw),
            }),
            (0, r.jsx)(c.Text, {
                className: y.action,
                variant: "text-md/normal",
                children: f.intl.string(f.t["1xFbPz"]),
            }),
            (0, r.jsx)(c.Text, {
                className: y.actionDescription,
                variant: "text-sm/normal",
                children: f.intl.string(f.t.laNlTk),
            }),
            (0, r.jsx)(c.X6q, {
                className: y.formHeader,
                variant: "eyebrow",
                color: "header-secondary",
                children: f.intl.string(f.t["1La4tL"]),
            }),
            (0, r.jsx)(l.Z, {
                defaultValue: h,
                onChange: j,
            }),
            (0, r.jsx)(c.eee, {
                className: y.resetButton,
                onClick: () => j((0, d.Kd)(p.D_)),
                children: f.intl.string(f.t["s7+2ra"]),
            }),
        ],
    });
}
