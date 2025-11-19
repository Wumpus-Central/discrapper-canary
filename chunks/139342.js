n.d(e, { Z: () => _ });
var i = n(54381),
    l = n(473749),
    u = n(512722),
    r = n.n(u),
    s = n(442837),
    a = n(481060),
    o = n(660216),
    c = n(825209),
    E = n(924557),
    S = n(509613),
    T = n(556296),
    d = n(313789),
    I = n(981631),
    O = n(388032),
    g = n(299242);
let _ = (0, S.ON)(d.n.CLIPS_KEYBIND, {
    useSearchTerms: () => [O.intl.string(O.t.pf54EU), O.intl.string(O.t["QyB/jK"])],
    usePredicate: E.w9,
    render: () => {
        let t = (0, s.e7)([T.ZP], () => T.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0));
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
            label: O.intl.string(O.t.pf54EU),
            description: O.intl.string(O.t["QyB/jK"]),
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
