n.d(e, { Z: () => _ });
var i = n(54381),
    l = n(473749),
    s = n(512722),
    r = n.n(s),
    u = n(442837),
    a = n(481060),
    o = n(660216),
    c = n(825209),
    d = n(509613),
    E = n(556296),
    S = n(313789),
    I = n(981631),
    T = n(388032),
    g = n(360919);
let _ = (0, d.ON)(S.n.CLIPS_KEYBIND, {
    useSearchTerms: () => [T.intl.string(T.t.pf54EU), T.intl.string(T.t["QyB/jK"])],
    render: () => {
        let t = (0, u.e7)([E.ZP], () => E.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0));
        r()(null != t, "Save clip keybind unset");
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
            label: T.intl.string(T.t.pf54EU),
            description: T.intl.string(T.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: g.keyRecorder,
                children: (0, i.jsx)(c.Z, {
                    defaultValue: t.shortcut,
                    onChange: e,
                }),
            }),
        });
    },
});
