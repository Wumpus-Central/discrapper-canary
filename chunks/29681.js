n.d(t, { default: () => g }), n(896048);
var r = n(627968),
    a = n(64700),
    i = n(158954),
    l = n(311907),
    s = n(397927),
    c = n(97260),
    o = n(117178),
    u = n(775121),
    d = n(532624),
    b = n(350535),
    p = n(980504),
    O = n(652215),
    f = n(985018),
    y = n(316173);
function g(e) {
    var t;
    let { transitionState: n, onClose: g } = e,
        h = (0, l.bG)([d.Ay], () => d.Ay.getKeybindForAction(O.hCu.SOUNDBOARD_HOLD)),
        [j, m] = a.useState(null != (t = null == h ? void 0 : h.shortcut) ? t : []),
        x = a.useCallback(() => {
            if (0 === j.length) return null != h && c.A.deleteKeybind(h.id), g();
            if (null == h)
                c.A.addKeybind({
                    action: O.hCu.SOUNDBOARD_HOLD,
                    shortcut: j,
                    enabled: !0,
                    params: {},
                });
            else {
                var e, t;
                c.A.setKeybind(
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
                    })({}, h)),
                    (t = t = { shortcut: j }),
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
        }, [h, g, j]);
    a.useEffect(
        () => (
            u.A.disable(),
            () => {
                u.A.enable();
            }
        ),
        [],
    );
    let v = a.useMemo(
        () => [
            {
                text: f.intl.string(f.t["ETE/oC"]),
                onClick: g,
                variant: "secondary",
            },
            {
                text: f.intl.string(f.t["R3BPH+"]),
                onClick: x,
                variant: "primary",
            },
        ],
        [g, x],
    );
    return (0, r.jsxs)(i.Modal, {
        transitionState: n,
        title: f.intl.string(f.t["0Osu3x"]),
        actions: v,
        onClose: g,
        children: [
            (0, r.jsx)(s.po8, {
                className: y.$e,
                messageType: s.YCn.WARNING,
                children: f.intl.string(f.t["O2v/eP"]),
            }),
            (0, r.jsx)(s.Heading, {
                className: y._5,
                variant: "eyebrow",
                color: "text-default",
                children: f.intl.string(f.t.UUpAD6),
            }),
            (0, r.jsx)(s.Text, {
                className: y.XI,
                variant: "text-md/normal",
                children: f.intl.string(f.t["1xFbP/"]),
            }),
            (0, r.jsx)(s.Text, {
                className: y.lf,
                variant: "text-sm/normal",
                children: f.intl.string(f.t.laNlTl),
            }),
            (0, r.jsx)(s.Heading, {
                className: y._5,
                variant: "eyebrow",
                color: "text-default",
                children: f.intl.string(f.t["1La4tC"]),
            }),
            (0, r.jsx)(o.A, {
                defaultValue: j,
                onChange: m,
            }),
            (0, r.jsx)(s.MzZ, {
                className: y.WA,
                onClick: () => m((0, b.OH)(p.XF)),
                children: f.intl.string(f.t["s7+2rQ"]),
            }),
        ],
    });
}
