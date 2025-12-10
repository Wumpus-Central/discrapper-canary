n.d(e, { $: () => O });
var i = n(54381),
    l = n(473749),
    s = n(512722),
    u = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(660216),
    c = n(825209),
    d = n(924557),
    S = n(509613),
    T = n(556296),
    E = n(313789),
    g = n(981631),
    I = n(388032),
    _ = n(360919);
let O = (0, S.ON)(E.n.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [I.intl.string(I.t["0U/hj7"]), I.intl.string(I.t["5zxkdo"])],
    usePredicate: d.PP,
    Component: () => {
        let t = (0, r.e7)([T.ZP], () => T.ZP.getKeybindForAction(g.kg4.SAVE_CLIP, !0)),
            e = (0, r.e7)([T.ZP], () => T.ZP.getKeybindForAction(g.kg4.SAVE_SCREENSHOT, !0));
        u()(null != t, "Save clip keybind unset"), u()(null != e, "Save screenshot keybind unset");
        let n = l.useCallback(
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
            label: I.intl.string(I.t["0U/hj7"]),
            description: I.intl.string(I.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: _.keyRecorder,
                children: (0, i.jsx)(c.Z, {
                    defaultValue: e.shortcut,
                    onChange: n,
                }),
            }),
        });
    },
});
