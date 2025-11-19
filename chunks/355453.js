n.d(t, { default: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    s = n(660216),
    l = n(825209),
    d = n(714338),
    u = n(556296),
    b = n(13140),
    p = n(710111),
    g = n(981631),
    O = n(388032),
    f = n(687213);
function y(e) {
    var t;
    let { transitionState: n, onClose: y } = e,
        h = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(g.kg4.SOUNDBOARD_HOLD)),
        [m, j] = i.useState(null != (t = null == h ? void 0 : h.shortcut) ? t : []),
        v = i.useCallback(() => {
            if (0 === m.length) return null != h && s.Z.deleteKeybind(h.id), y();
            if (null == h)
                s.Z.addKeybind({
                    action: g.kg4.SOUNDBOARD_HOLD,
                    shortcut: m,
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
                    })({}, h)),
                    (t = t = { shortcut: m }),
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
            y();
        }, [h, y, m]);
    i.useEffect(
        () => (
            d.Z.disable(),
            () => {
                d.Z.enable();
            }
        ),
        [],
    );
    let x = i.useMemo(
        () => [
            {
                text: O.intl.string(O.t["ETE/oC"]),
                onClick: y,
                variant: "secondary",
            },
            {
                text: O.intl.string(O.t["R3BPH+"]),
                onClick: v,
                variant: "primary",
            },
        ],
        [y, v],
    );
    return (0, r.jsxs)(a.Modal, {
        transitionState: n,
        title: O.intl.string(O.t["0Osu3x"]),
        actions: x,
        onClose: y,
        children: [
            (0, r.jsx)(c.Wn, {
                className: f.warning,
                messageType: c.QYI.WARNING,
                children: O.intl.string(O.t["O2v/eP"]),
            }),
            (0, r.jsx)(c.Heading, {
                className: f.formHeader,
                variant: "eyebrow",
                color: "header-secondary",
                children: O.intl.string(O.t.UUpAD6),
            }),
            (0, r.jsx)(c.Text, {
                className: f.action,
                variant: "text-md/normal",
                children: O.intl.string(O.t["1xFbP/"]),
            }),
            (0, r.jsx)(c.Text, {
                className: f.actionDescription,
                variant: "text-sm/normal",
                children: O.intl.string(O.t.laNlTl),
            }),
            (0, r.jsx)(c.Heading, {
                className: f.formHeader,
                variant: "eyebrow",
                color: "header-secondary",
                children: O.intl.string(O.t["1La4tC"]),
            }),
            (0, r.jsx)(l.Z, {
                defaultValue: m,
                onChange: j,
            }),
            (0, r.jsx)(c.Anchor, {
                className: f.resetButton,
                onClick: () => j((0, b.Kd)(p.D_)),
                children: O.intl.string(O.t["s7+2rQ"]),
            }),
        ],
    });
}
