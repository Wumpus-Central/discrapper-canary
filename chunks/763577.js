n.d(t, { Z: () => u }),
    n(388685),
    n(853839),
    n(570086),
    n(479048),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var a = n(54381),
    l = n(473749),
    i = n(164617),
    r = n(793030),
    s = n(692547),
    o = n(333200),
    c = n(159691),
    d = n(481060);
function u() {
    let e = Object.keys(i).map((e) => (0, a.jsx)(h, { riveName: e }, e));
    return (0, a.jsx)(r.w0Z, {
        style: { maxHeight: "100%" },
        children: (0, a.jsxs)(r.Kqy, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, a.jsx)(r.X6q, {
                    variant: "heading-lg/medium",
                    children: "Rive Inspector",
                }),
                (0, a.jsx)(r.xvT, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, a.jsx)(m, {}),
                (0, a.jsx)(r.X6q, {
                    variant: "heading-lg/medium",
                    children: "Rive Overrides",
                }),
                (0, a.jsx)(r.xvT, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function m() {
    let [e, t] = l.useState(null),
        [n, i] = l.useState(null),
        [s, o] = l.useState(null),
        [c, u] = l.useState([]),
        m = l.useRef(null),
        [x, g] = l.useState(400),
        [f, b] = l.useState(400),
        v = l.useCallback(() => {
            setTimeout(() => {
                var e, t, n, a;
                o(null != (n = null == (e = m.current) ? void 0 : e.getProperties()) ? n : {}),
                    u(null != (a = null == (t = m.current) ? void 0 : t.getArtboards()) ? a : []),
                    i({});
            }, 1000);
        }, []),
        j = l.useCallback(
            (e, t) => {
                null != n &&
                    i((n) => {
                        var a, l, i;
                        return (
                            (l = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        a.forEach(function (t) {
                                            var a;
                                            (a = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = a);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (i = i =
                                {
                                    [e]: {
                                        type: null == s || null == (a = s[e]) ? void 0 : a.type,
                                        value: t,
                                    },
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var a = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, a);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            l
                        );
                    });
            },
            [s, n],
        ),
        _ = l.useCallback((e) => {
            o(null), i(null), t(e);
        }, []);
    return (0, a.jsxs)(r.Kqy, {
        gap: 16,
        children: [
            (0, a.jsx)(h, {
                riveName: "Rive inspector",
                onRiveLoad: _,
            }),
            null != e &&
                (0, a.jsx)("div", {
                    style: {
                        width: x,
                        height: f,
                    },
                    children: (0, a.jsx)(d.BmE, {
                        src: e,
                        ref: m,
                        onLoad: v,
                        dynamicDataBinding: null != n ? n : {},
                    }),
                }),
            null != e && null == n ? (0, a.jsx)(r.$jN, {}) : null,
            null != n &&
                (0, a.jsxs)(r.Kqy, {
                    children: [
                        (0, a.jsxs)(r.Kqy, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(r.X6q, {
                                    variant: "heading-lg/medium",
                                    children: "Dimensions",
                                }),
                                (0, a.jsx)(d.oil, {
                                    type: "number",
                                    label: "width",
                                    value: x.toString(),
                                    onChange: (e) => g(parseInt(e)),
                                }),
                                (0, a.jsx)(d.oil, {
                                    type: "number",
                                    label: "height",
                                    value: f.toString(),
                                    onChange: (e) => b(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(r.Kqy, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(r.X6q, {
                                    variant: "heading-lg/medium",
                                    children: "Data Binding",
                                }),
                                Object.keys(null != s ? s : {}).map((e) => {
                                    var t, l, i, r;
                                    return (0, a.jsx)(
                                        p,
                                        {
                                            property: e,
                                            type: null == s || null == (t = s[e]) ? void 0 : t.type,
                                            value:
                                                null != (r = null == n || null == (l = n[e]) ? void 0 : l.value)
                                                    ? r
                                                    : null == s || null == (i = s[e])
                                                      ? void 0
                                                      : i.value,
                                            onChange: (t) => j(e, t),
                                            artboards: c,
                                        },
                                        e,
                                    );
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function p(e) {
    let { property: t, type: n, value: l, onChange: i, artboards: c } = e;
    return "string" === n
        ? (0, a.jsx)(d.oil, {
              label: t,
              value: l,
              onChange: (e) => i(e),
          })
        : "number" === n
          ? (0, a.jsx)(d.oil, {
                type: "number",
                label: t,
                value: l,
                onChange: (e) => i(parseInt(e)),
            })
          : "boolean" === n
            ? (0, a.jsx)(r.rsf, {
                  label: t,
                  checked: l,
                  onChange: (e) => i(e),
              })
            : "trigger" === n
              ? (0, a.jsx)(r.zxk, {
                    text: "Trigger ".concat(t),
                    onClick: () => i(Number.isSafeInteger(l) ? l + 1 : 1),
                })
              : "image" === n
                ? (0, a.jsx)(d.oil, {
                      label: t,
                      value: l,
                      onChange: (e) => i(e),
                  })
                : "color" === n
                  ? (0, a.jsx)(o.V, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => i(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(s.Z.colors).map((e) => {
                            let [t, n] = e;
                            return {
                                label: t,
                                value: n,
                                id: t,
                            };
                        }),
                    })
                  : "artboard" === n
                    ? (0, a.jsx)(o.V, {
                          selectionMode: "single",
                          label: t,
                          value: l,
                          onSelectionChange: (e) => i(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: c.map((e) => ({
                              label: e,
                              value: e,
                              id: e,
                          })),
                      })
                    : null;
}
function h(e) {
    var t;
    let { riveName: n, onRiveLoad: s } = e,
        o = null == (t = i[n]) ? void 0 : t.riveSrc,
        u = null == o,
        m = l.useRef(null),
        p = (0, d.o8M)(o);
    return (0, a.jsxs)(
        r.Kqy,
        {
            gap: 8,
            children: [
                (0, a.jsx)("label", { children: n }),
                (0, a.jsxs)(r.Kqy, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, a.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: (e) => {
                                var t;
                                let n = null == (t = e.target.files) ? void 0 : t[0];
                                if (null == n) return;
                                let a = new FileReader();
                                (a.onload = (e) => {
                                    var t;
                                    let n = null == (t = e.target) ? void 0 : t.result;
                                    null != o && (0, d.JGI)(o, n),
                                        null == s ||
                                            s(
                                                "data:application/octet-stream;base64,".concat(
                                                    btoa(
                                                        new Uint8Array(n).reduce(
                                                            (e, t) => e + String.fromCharCode(t),
                                                            "",
                                                        ),
                                                    ),
                                                ),
                                            );
                                }),
                                    a.readAsArrayBuffer(n);
                            },
                            ref: m,
                        }),
                        (0, a.jsx)(c.hU, {
                            "aria-label": "Clear override for ".concat(n),
                            onClick: () => {
                                null != m.current && (m.current.value = ""),
                                    null != o && (0, d.JGI)(o, null),
                                    null == s || s(null);
                            },
                            icon: d.XHJ,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == p && !u,
                        }),
                    ],
                }),
            ],
        },
        n,
    );
}
