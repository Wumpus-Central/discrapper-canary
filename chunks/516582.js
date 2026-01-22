n.d(t, {
    A: () => x,
});
var r = n(627968),
    i = n(64700),
    l = n(858229),
    s = n(99787),
    a = n(491032),
    c = n(391958),
    o = n(255354),
    d = n(957300),
    u = n(378427),
    f = n(411335),
    g = n(985018),
    b = n(578551);

function m(e) {
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

function x(e) {
    var t, n, x, h, j, O;
    let { rule: y, onChangeRule: v } = e,
        A = i.useCallback(
            (e) => {
                v(
                    p(m({}, y), {
                        triggerMetadata: p(m({}, y.triggerMetadata), {
                            keywordFilter: e,
                        }),
                    }),
                );
            },
            [v, y],
        ),
        E = i.useCallback(
            (e) => {
                v(
                    p(m({}, y), {
                        triggerMetadata: p(m({}, y.triggerMetadata), {
                            allowList: e,
                        }),
                    }),
                );
            },
            [v, y],
        );
    return (0, r.jsxs)("div", {
        className: b.sp,
        children: [
            (0, r.jsxs)(d.A, {
                step: 1,
                header: g.intl.string(g.t["ue+tnb"]),
                children: [
                    (0, r.jsx)(c.A, {
                        onChangeText: A,
                        maxWordCount: f.bV,
                        initialValue: null == (t = y.triggerMetadata) ? void 0 : t.keywordFilter,
                    }),
                    (0, r.jsx)(a.A, {
                        rule: y,
                        onChangeRule: v,
                        collapsed:
                            (null == y || null == (n = y.triggerMetadata) ? void 0 : n.regexPatterns) == null ||
                            (null == y || null == (x = y.triggerMetadata) ? void 0 : x.regexPatterns.length) === 0,
                    }),
                    (0, r.jsx)(l.A, {
                        onChange: E,
                        initialValue: null == (h = y.triggerMetadata) ? void 0 : h.allowList,
                        maxWordCount: f.UW,
                        collapsed:
                            (null == (j = y.triggerMetadata) ? void 0 : j.allowList) == null ||
                            (null == (O = y.triggerMetadata) ? void 0 : O.allowList.length) === 0,
                    }),
                ],
            }),
            (0, r.jsx)(u.A, {
                type: u.A.Type.ARROW_DOWN,
            }),
            (0, r.jsx)(d.A, {
                step: 2,
                header: g.intl.string(g.t["18TOiQ"]),
                children: (0, r.jsx)(s.A, {
                    rule: y,
                    onChangeRule: v,
                }),
            }),
            (0, r.jsx)(u.A, {
                type: u.A.Type.CROSS,
            }),
            (0, r.jsx)(d.A, {
                step: 3,
                header: g.intl.string(g.t.u5xPPW),
                children: (0, r.jsx)(o.A, {
                    rule: y,
                    onChangeRule: v,
                    onlyRoles: !0,
                }),
            }),
        ],
    });
}
