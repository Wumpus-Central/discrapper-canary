n.d(e, { $: () => N });
var i = n(54381),
    l = n(473749),
    s = n(512722),
    u = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(660216),
    S = n(825209),
    T = n(924557),
    c = n(509613),
    E = n(556296),
    d = n(313789),
    g = n(981631),
    _ = n(388032),
    I = n(216476);
let N = (0, c.ON)(d.n.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [_.intl.string(_.t["0U/hj7"]), _.intl.string(_.t["5zxkdo"])],
    usePredicate: T.PP,
    Component: () => {
        let t = (0, r.e7)([E.ZP], () => E.ZP.getKeybindForAction(g.kg4.SAVE_CLIP, !0)),
            e = (0, r.e7)([E.ZP], () => E.ZP.getKeybindForAction(g.kg4.SAVE_SCREENSHOT, !0));
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
            label: _.intl.string(_.t["0U/hj7"]),
            description: _.intl.string(_.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: I.keyRecorder,
                children: (0, i.jsx)(S.Z, {
                    defaultValue: e.shortcut,
                    onChange: n,
                }),
            }),
        });
    },
});
