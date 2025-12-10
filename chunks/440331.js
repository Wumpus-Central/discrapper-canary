n.d(e, { k: () => _ });
var i = n(54381),
    l = n(473749),
    s = n(512722),
    u = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(660216),
    c = n(825209),
    d = n(509613),
    S = n(556296),
    T = n(313789),
    E = n(981631),
    g = n(388032),
    I = n(360919);
let _ = (0, d.ON)(T.n.CLIPS_KEYBIND, {
    useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
    Component: () => {
        let t = (0, r.e7)([S.ZP], () => S.ZP.getKeybindForAction(E.kg4.SAVE_CLIP, !0));
        u()(null != t, "Save clip keybind unset");
        let e = l.useCallback(
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
            label: g.intl.string(g.t.pf54EU),
            description: g.intl.string(g.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: I.keyRecorder,
                children: (0, i.jsx)(c.Z, {
                    defaultValue: t.shortcut,
                    onChange: e,
                }),
            }),
        });
    },
});
