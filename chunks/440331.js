n.d(e, { Z: () => g });
var i = n(54381),
    r = n(473749),
    l = n(512722),
    u = n.n(l),
    s = n(442837),
    a = n(481060),
    o = n(660216),
    c = n(825209),
    E = n(509613),
    d = n(556296),
    S = n(313789),
    T = n(981631),
    I = n(388032),
    O = n(360919);
let g = (0, E.ON)(S.n.CLIPS_KEYBIND, {
    useSearchTerms: () => [I.intl.string(I.t.pf54EU), I.intl.string(I.t["QyB/jK"])],
    render: () => {
        let t = (0, s.e7)([d.ZP], () => d.ZP.getKeybindForAction(T.kg4.SAVE_CLIP, !0));
        u()(null != t, "Save clip keybind unset");
        let e = r.useCallback(
            (e) => {
                var n, i;
                o.Z.setKeybind(
                    ((n = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                i.forEach(function (e) {
                                    var i;
                                    (i = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = i);
                                });
                        }
                        return t;
                    })({}, t)),
                    (i = i = { shortcut: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (t, e) {
                              var n = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(t);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(i)).forEach(function (t) {
                              Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
                          }),
                    n),
                );
            },
            [t],
        );
        return (0, i.jsx)(a.gNt, {
            label: I.intl.string(I.t.pf54EU),
            description: I.intl.string(I.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: O.keyRecorder,
                children: (0, i.jsx)(c.Z, {
                    defaultValue: t.shortcut,
                    onChange: e,
                }),
            }),
        });
    },
});
