n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    s = n(536982),
    a = n(456677),
    l = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    m = n(273504),
    p = n(388032),
    g = n(955432);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
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
function b(e) {
    var t, n, b, x, j, N;
    let { rule: v, onChangeRule: _ } = e,
        O = i.useCallback(
            (e) => {
                _(f(h({}, v), { triggerMetadata: f(h({}, v.triggerMetadata), { keywordFilter: e }) }));
            },
            [_, v]
        ),
        y = i.useCallback(
            (e) => {
                _(f(h({}, v), { triggerMetadata: f(h({}, v.triggerMetadata), { allowList: e }) }));
            },
            [_, v]
        );
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: g.cardContentsContainer,
            children: [
                (0, r.jsxs)(d.Z, {
                    step: 1,
                    header: p.NW.string(p.t['ue+tnZ']),
                    children: [
                        (0, r.jsx)(o.Z, {
                            onChangeText: O,
                            maxWordCount: m.RH,
                            initialValue: null === (t = v.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                        }),
                        (0, r.jsx)(l.Z, {
                            rule: v,
                            onChangeRule: _,
                            collapsed: (null == v ? void 0 : null === (n = v.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == v ? void 0 : null === (b = v.triggerMetadata) || void 0 === b ? void 0 : b.regexPatterns.length) === 0
                        }),
                        (0, r.jsx)(s.Z, {
                            onChange: y,
                            initialValue: null === (x = v.triggerMetadata) || void 0 === x ? void 0 : x.allowList,
                            maxWordCount: m.n4,
                            collapsed: (null === (j = v.triggerMetadata) || void 0 === j ? void 0 : j.allowList) == null || (null === (N = v.triggerMetadata) || void 0 === N ? void 0 : N.allowList.length) === 0
                        })
                    ]
                }),
                (0, r.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
                (0, r.jsx)(d.Z, {
                    step: 2,
                    header: p.NW.string(p.t['18TOiY']),
                    children: (0, r.jsx)(a.Z, {
                        rule: v,
                        onChangeRule: _
                    })
                }),
                (0, r.jsx)(u.Z, { type: u.Z.Type.CROSS }),
                (0, r.jsx)(d.Z, {
                    step: 3,
                    header: p.NW.string(p.t.eq3gjo),
                    children: (0, r.jsx)(c.Z, {
                        rule: v,
                        onChangeRule: _
                    })
                })
            ]
        })
    });
}
