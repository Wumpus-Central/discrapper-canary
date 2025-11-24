n.d(e, { Z: () => _ });
var i = n(54381),
    r = n(473749),
    l = n(512722),
    u = n.n(l),
    s = n(442837),
    a = n(481060),
    o = n(660216),
    c = n(825209),
    E = n(924557),
    d = n(509613),
    S = n(556296),
    T = n(313789),
    I = n(981631),
    O = n(388032),
    g = n(360919);
let _ = (0, d.ON)(T.n.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [O.intl.string(O.t["0U/hj7"]), O.intl.string(O.t["5zxkdo"])],
    usePredicate: E.PP,
    render: () => {
        let t = (0, s.e7)([S.ZP], () => S.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0)),
            e = (0, s.e7)([S.ZP], () => S.ZP.getKeybindForAction(I.kg4.SAVE_SCREENSHOT, !0));
        u()(null != t, "Save clip keybind unset"), u()(null != e, "Save screenshot keybind unset");
        let n = r.useCallback(
            (t) => {
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
                    })({}, e)),
                    (i = i = { shortcut: t }),
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
            [e],
        );
        return (0, i.jsx)(a.gNt, {
            label: O.intl.string(O.t["0U/hj7"]),
            description: O.intl.string(O.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: g.keyRecorder,
                children: (0, i.jsx)(c.Z, {
                    defaultValue: e.shortcut,
                    onChange: n,
                }),
            }),
        });
    },
});
