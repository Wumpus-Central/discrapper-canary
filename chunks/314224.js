n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(536982),
    a = n(456677),
    s = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    g = n(273504),
    f = n(388032),
    m = n(365604);
function b(e) {
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
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
function h(e) {
    var t, n, h, x, j, v;
    let { rule: O, onChangeRule: C } = e,
        y = i.useCallback(
            (e) => {
                C(p(b({}, O), { triggerMetadata: p(b({}, O.triggerMetadata), { keywordFilter: e }) }));
            },
            [C, O],
        ),
        N = i.useCallback(
            (e) => {
                C(p(b({}, O), { triggerMetadata: p(b({}, O.triggerMetadata), { allowList: e }) }));
            },
            [C, O],
        );
    return (0, r.jsxs)("div", {
        className: m.cardContentsContainer,
        children: [
            (0, r.jsxs)(d.Z, {
                step: 1,
                header: f.intl.string(f.t["ue+tnb"]),
                children: [
                    (0, r.jsx)(o.Z, {
                        onChangeText: y,
                        maxWordCount: g.RH,
                        initialValue: null == (t = O.triggerMetadata) ? void 0 : t.keywordFilter,
                    }),
                    (0, r.jsx)(s.Z, {
                        rule: O,
                        onChangeRule: C,
                        collapsed:
                            (null == O || null == (n = O.triggerMetadata) ? void 0 : n.regexPatterns) == null ||
                            (null == O || null == (h = O.triggerMetadata) ? void 0 : h.regexPatterns.length) === 0,
                    }),
                    (0, r.jsx)(l.Z, {
                        onChange: N,
                        initialValue: null == (x = O.triggerMetadata) ? void 0 : x.allowList,
                        maxWordCount: g.n4,
                        collapsed:
                            (null == (j = O.triggerMetadata) ? void 0 : j.allowList) == null ||
                            (null == (v = O.triggerMetadata) ? void 0 : v.allowList.length) === 0,
                    }),
                ],
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(d.Z, {
                step: 2,
                header: f.intl.string(f.t["18TOiQ"]),
                children: (0, r.jsx)(a.Z, {
                    rule: O,
                    onChangeRule: C,
                }),
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.CROSS }),
            (0, r.jsx)(d.Z, {
                step: 3,
                header: f.intl.string(f.t.eq3gjh),
                children: (0, r.jsx)(c.Z, {
                    rule: O,
                    onChangeRule: C,
                }),
            }),
        ],
    });
}
