n.d(t, {
    A: () => u,
}),
    n(896048),
    n(801460),
    n(508300),
    n(650828),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var a = n(627968),
    l = n(64700),
    i = n(18051),
    r = n(158954),
    s = n(827734),
    o = n(783878),
    c = n(732955),
    d = n(397927);

function u() {
    let e = Object.keys(i).map((e) =>
        (0, a.jsx)(
            h,
            {
                riveName: e,
            },
            e,
        ),
    );
    return (0, a.jsx)(r.ArX, {
        style: {
            maxHeight: "100%",
        },
        children: (0, a.jsxs)(r.BJc, {
            gap: 24,
            padding: 8,
            style: {
                boxSizing: "border-box",
            },
            children: [
                (0, a.jsx)(r.DZT, {
                    variant: "heading-lg/medium",
                    children: "Rive Inspector",
                }),
                (0, a.jsx)(r.EYj, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, a.jsx)(m, {}),
                (0, a.jsx)(r.DZT, {
                    variant: "heading-lg/medium",
                    children: "Rive Overrides",
                }),
                (0, a.jsx)(r.EYj, {
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
        [f, x] = l.useState(400),
        [b, g] = l.useState(400),
        v = l.useCallback(() => {
            setTimeout(() => {
                var e, t, n, a;
                o(null != (e = null == (n = m.current) ? void 0 : n.getProperties()) ? e : {}),
                    u(null != (t = null == (a = m.current) ? void 0 : a.getArtboards()) ? t : []),
                    i({});
            }, 1e3);
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
        y = l.useCallback((e) => {
            o(null), i(null), t(e);
        }, []);
    return (0, a.jsxs)(r.BJc, {
        gap: 16,
        children: [
            (0, a.jsx)(h, {
                riveName: "Rive inspector",
                onRiveLoad: y,
            }),
            null != e &&
                (0, a.jsx)("div", {
                    style: {
                        width: f,
                        height: b,
                    },
                    children: (0, a.jsx)(d._7m, {
                        src: e,
                        ref: m,
                        onLoad: v,
                        dynamicDataBinding: null != n ? n : {},
                    }),
                }),
            null != e && null == n ? (0, a.jsx)(r.y$y, {}) : null,
            null != n &&
                (0, a.jsxs)(r.BJc, {
                    children: [
                        (0, a.jsxs)(r.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(r.DZT, {
                                    variant: "heading-lg/medium",
                                    children: "Dimensions",
                                }),
                                (0, a.jsx)(d.ksK, {
                                    type: "number",
                                    label: "width",
                                    value: f.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                                (0, a.jsx)(d.ksK, {
                                    type: "number",
                                    label: "height",
                                    value: b.toString(),
                                    onChange: (e) => g(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(r.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(r.DZT, {
                                    variant: "heading-lg/medium",
                                    children: "Data Binding",
                                }),
                                Object.keys(null != s ? s : {}).map((e) => {
                                    var t, l, i, r;
                                    return (0, a.jsx)(
                                        p,
                                        {
                                            property: e,
                                            type: null == s || null == (l = s[e]) ? void 0 : l.type,
                                            value:
                                                null != (t = null == n || null == (i = n[e]) ? void 0 : i.value)
                                                    ? t
                                                    : null == s || null == (r = s[e])
                                                      ? void 0
                                                      : r.value,
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
        ? (0, a.jsx)(d.ksK, {
              label: t,
              value: l,
              onChange: (e) => i(e),
          })
        : "number" === n
          ? (0, a.jsx)(d.ksK, {
                type: "number",
                label: t,
                value: l,
                onChange: (e) => i(parseInt(e)),
            })
          : "boolean" === n
            ? (0, a.jsx)(r.dOG, {
                  label: t,
                  checked: l,
                  onChange: (e) => i(e),
              })
            : "trigger" === n
              ? (0, a.jsx)(r.$nd, {
                    text: "Trigger ".concat(t),
                    onClick: () => i(Number.isSafeInteger(l) ? l + 1 : 1),
                })
              : "image" === n
                ? (0, a.jsx)(d.ksK, {
                      label: t,
                      value: l,
                      onChange: (e) => i(e),
                  })
                : "color" === n
                  ? (0, a.jsx)(o.Z, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => i(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(s.A.colors).map((e) => {
                            let [t, n] = e;
                            return {
                                label: t,
                                value: n,
                                id: t,
                            };
                        }),
                    })
                  : "artboard" === n
                    ? (0, a.jsx)(o.Z, {
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
        p = (0, d.GyQ)(o);
    return (0, a.jsxs)(
        r.BJc,
        {
            gap: 8,
            children: [
                (0, a.jsx)("label", {
                    children: n,
                }),
                (0, a.jsxs)(r.BJc, {
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
                                    null != o && (0, d.DSP)(o, n),
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
                        (0, a.jsx)(c.K0, {
                            "aria-label": "Clear override for ".concat(n),
                            onClick: () => {
                                null != m.current && (m.current.value = ""),
                                    null != o && (0, d.DSP)(o, null),
                                    null == s || s(null);
                            },
                            icon: d.ucK,
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
