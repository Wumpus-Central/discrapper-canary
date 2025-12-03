n.d(e, { default: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    s = n(660216),
    l = n(825209),
    u = n(714338),
    b = n(556296),
    d = n(13140),
    p = n(710111),
    f = n(981631),
    g = n(388032),
    O = n(687213);
function y(t) {
    var e;
    let { transitionState: n, onClose: y } = t,
        m = (0, o.e7)([b.ZP], () => b.ZP.getKeybindForAction(f.kg4.SOUNDBOARD_HOLD)),
        [h, j] = i.useState(null != (e = null == m ? void 0 : m.shortcut) ? e : []),
        x = i.useCallback(() => {
            if (0 === h.length) return null != m && s.Z.deleteKeybind(m.id), y();
            if (null == m)
                s.Z.addKeybind({
                    action: f.kg4.SOUNDBOARD_HOLD,
                    shortcut: h,
                    enabled: !0,
                    params: {},
                });
            else {
                var t, e;
                s.Z.setKeybind(
                    ((t = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                r.forEach(function (e) {
                                    var r;
                                    (r = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = r);
                                });
                        }
                        return t;
                    })({}, m)),
                    (e = e = { shortcut: h }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                        : (function (t, e) {
                              var n = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(t);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(e)).forEach(function (n) {
                              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                          }),
                    t),
                );
            }
            y();
        }, [m, y, h]);
    i.useEffect(
        () => (
            u.Z.disable(),
            () => {
                u.Z.enable();
            }
        ),
        [],
    );
    let v = i.useMemo(
        () => [
            {
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: y,
                variant: "secondary",
            },
            {
                text: g.intl.string(g.t["R3BPH+"]),
                onClick: x,
                variant: "primary",
            },
        ],
        [y, x],
    );
    return (0, r.jsxs)(a.Modal, {
        transitionState: n,
        title: g.intl.string(g.t["0Osu3x"]),
        actions: v,
        onClose: y,
        children: [
            (0, r.jsx)(c.Wn, {
                className: O.warning,
                messageType: c.QYI.WARNING,
                children: g.intl.string(g.t["O2v/eP"]),
            }),
            (0, r.jsx)(c.Heading, {
                className: O.formHeader,
                variant: "eyebrow",
                color: "text-default",
                children: g.intl.string(g.t.UUpAD6),
            }),
            (0, r.jsx)(c.Text, {
                className: O.action,
                variant: "text-md/normal",
                children: g.intl.string(g.t["1xFbP/"]),
            }),
            (0, r.jsx)(c.Text, {
                className: O.actionDescription,
                variant: "text-sm/normal",
                children: g.intl.string(g.t.laNlTl),
            }),
            (0, r.jsx)(c.Heading, {
                className: O.formHeader,
                variant: "eyebrow",
                color: "text-default",
                children: g.intl.string(g.t["1La4tC"]),
            }),
            (0, r.jsx)(l.Z, {
                defaultValue: h,
                onChange: j,
            }),
            (0, r.jsx)(c.Anchor, {
                className: O.resetButton,
                onClick: () => j((0, d.Kd)(p.D_)),
                children: g.intl.string(g.t["s7+2rQ"]),
            }),
        ],
    });
}
