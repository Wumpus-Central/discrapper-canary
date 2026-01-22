n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    l = n(858229),
    s = n(702942),
    a = n(99787),
    c = n(255354),
    o = n(957300),
    d = n(378427),
    u = n(411335),
    f = n(985018),
    g = n(578551);
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
function m(e, t) {
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
function p(e) {
    var t, n, p;
    let { rule: x, onChangeRule: h } = e,
        j = i.useCallback(
            (e) => {
                h(m(b({}, x), { triggerMetadata: m(b({}, x.triggerMetadata), { allowList: e }) }));
            },
            [h, x],
        );
    return (0, r.jsxs)("div", {
        className: g.sp,
        children: [
            (0, r.jsxs)(o.A, {
                step: 1,
                header: f.intl.string(f.t.CX5Yfc),
                children: [
                    (0, r.jsx)(s.A, {
                        rule: x,
                        onChangeRule: h,
                    }),
                    (0, r.jsx)(l.A, {
                        onChange: j,
                        initialValue: null == (t = x.triggerMetadata) ? void 0 : t.allowList,
                        maxWordCount: u.hG,
                        collapsed:
                            (null == (n = x.triggerMetadata) ? void 0 : n.allowList) == null ||
                            (null == (p = x.triggerMetadata) ? void 0 : p.allowList.length) === 0,
                    }),
                ],
            }),
            (0, r.jsx)(d.A, { type: d.A.Type.ARROW_DOWN }),
            (0, r.jsx)(o.A, {
                step: 2,
                header: f.intl.string(f.t["18TOiQ"]),
                children: (0, r.jsx)(a.A, {
                    rule: x,
                    onChangeRule: h,
                }),
            }),
            (0, r.jsx)(d.A, { type: d.A.Type.CROSS }),
            (0, r.jsx)(o.A, {
                step: 3,
                header: f.intl.string(f.t.eq3gjh),
                children: (0, r.jsx)(c.A, {
                    rule: x,
                    onChangeRule: h,
                }),
            }),
        ],
    });
}
