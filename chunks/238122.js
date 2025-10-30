n.d(t, { Z: () => m }), n(388685), n(413496), n(433524), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    c = n(132875),
    d = n(10198);
let u = (e) => {
        var t, n;
        let {
                data: { title: u, subtitle: m, placeholder: p, rows: g, character_limit: _, pattern: h },
                onChange: b,
                initialText: x,
                isRequired: f,
            } = e,
            v = i.useRef(
                a.Z.reactParserFor(
                    ((t = (function (e) {
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
                    })({}, a.Z.defaultRules)),
                    (n = n = { link: s.s }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
            ),
            [j, y] = i.useState(""),
            [O, Z] = i.useState(null);
        i.useEffect(() => {
            var e;
            y(null != (e = null == x ? void 0 : x.value) ? e : "");
        }, [x]);
        let I = i.useCallback(
            (e) => {
                let t = null != h ? new RegExp(h) : null;
                null == t || t.test(e)
                    ? null != e &&
                      (Z(null),
                      y(e),
                      b({
                          value: e,
                          isValid: !0,
                      }))
                    : (Z(o.intl.string(o.t["24xrGb"])),
                      b({
                          value: e,
                          isValid: !1,
                      }));
            },
            [b, h],
        );
        return (0, r.jsxs)("div", {
            className: d.marginBottom8,
            children: [
                null != u &&
                    (0, r.jsx)("div", {
                        className: d.marginBottom8,
                        children: (0, r.jsxs)(l.Text, {
                            variant: "text-sm/bold",
                            children: [
                                u,
                                f &&
                                    (0, r.jsx)("span", {
                                        className: c.required,
                                        children: "*",
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)(l.Kx8, {
                    maxLength: _,
                    onChange: I,
                    value: j,
                    error: O,
                    rows: g,
                    placeholder: p,
                    autoFocus: !0,
                }),
                null != m &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: v.current(m),
                        }),
                    }),
            ],
        });
    },
    m = (e) => {
        let { elements: t, onChange: n, state: i } = e,
            l = t.map((e) => {
                var t;
                let l = e.name;
                return (0, r.jsx)(
                    u,
                    {
                        data: e.data,
                        onChange: (e) => n(l, e.value, e.isValid),
                        initialText: null != (t = null == i ? void 0 : i[l]) ? t : void 0,
                        isRequired: e.should_submit_data,
                    },
                    l,
                );
            });
        return (0, r.jsx)("div", { children: l });
    };
