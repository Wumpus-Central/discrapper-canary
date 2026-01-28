n.d(t, {
    A: () => d,
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
    r = n(18051),
    i = n(158954),
    s = n(827734),
    o = n(732955),
    c = n(397927);

function d() {
    let e = Object.keys(r).map((e) =>
        (0, a.jsx)(
            p,
            {
                riveName: e,
            },
            e,
        ),
    );
    return (0, a.jsx)(i.ArX, {
        style: {
            maxHeight: "100%",
        },
        children: (0, a.jsxs)(i.BJc, {
            gap: 24,
            padding: 8,
            style: {
                boxSizing: "border-box",
            },
            children: [
                (0, a.jsx)(i.DZT, {
                    variant: "heading-lg/medium",
                    children: "Rive Inspector",
                }),
                (0, a.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, a.jsx)(u, {}),
                (0, a.jsx)(i.DZT, {
                    variant: "heading-lg/medium",
                    children: "Rive Overrides",
                }),
                (0, a.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}

function u() {
    let [e, t] = l.useState(null),
        [n, r] = l.useState(null),
        [s, o] = l.useState(null),
        [d, u] = l.useState([]),
        h = l.useRef(null),
        [x, g] = l.useState(400),
        [f, b] = l.useState(400),
        v = l.useCallback(() => {
            setTimeout(() => {
                var e, t, n, a;
                o(null != (e = null == (n = h.current) ? void 0 : n.getProperties()) ? e : {}),
                    u(null != (t = null == (a = h.current) ? void 0 : a.getArtboards()) ? t : []),
                    r({});
            }, 1e3);
        }, []),
        j = l.useCallback(
            (e, t) => {
                null != n &&
                    r((n) => {
                        var a, l, r;
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
                            (r = r =
                                {
                                    [e]: {
                                        type: null == s || null == (a = s[e]) ? void 0 : a.type,
                                        value: t,
                                    },
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var a = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, a);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            l
                        );
                    });
            },
            [s, n],
        ),
        _ = l.useCallback((e) => {
            o(null), r(null), t(e);
        }, []);
    return (0, a.jsxs)(i.BJc, {
        gap: 16,
        children: [
            (0, a.jsx)(p, {
                riveName: "Rive inspector",
                onRiveLoad: _,
            }),
            null != e &&
                (0, a.jsx)("div", {
                    style: {
                        width: x,
                        height: f,
                    },
                    children: (0, a.jsx)(c._7m, {
                        src: e,
                        ref: h,
                        onLoad: v,
                        dynamicDataBinding: null != n ? n : {},
                    }),
                }),
            null != e && null == n ? (0, a.jsx)(i.y$y, {}) : null,
            null != n &&
                (0, a.jsxs)(i.BJc, {
                    children: [
                        (0, a.jsxs)(i.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(i.DZT, {
                                    variant: "heading-lg/medium",
                                    children: "Dimensions",
                                }),
                                (0, a.jsx)(c.ksK, {
                                    type: "number",
                                    label: "width",
                                    value: x.toString(),
                                    onChange: (e) => g(parseInt(e)),
                                }),
                                (0, a.jsx)(c.ksK, {
                                    type: "number",
                                    label: "height",
                                    value: f.toString(),
                                    onChange: (e) => b(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(i.DZT, {
                                    variant: "heading-lg/medium",
                                    children: "Data Binding",
                                }),
                                Object.keys(null != s ? s : {}).map((e) => {
                                    var t, l, r, i;
                                    return (0, a.jsx)(
                                        m,
                                        {
                                            property: e,
                                            type: null == s || null == (l = s[e]) ? void 0 : l.type,
                                            value:
                                                null != (t = null == n || null == (r = n[e]) ? void 0 : r.value)
                                                    ? t
                                                    : null == s || null == (i = s[e])
                                                      ? void 0
                                                      : i.value,
                                            onChange: (t) => j(e, t),
                                            artboards: d,
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

function m(e) {
    let { property: t, type: n, value: l, onChange: r, artboards: o } = e;
    return "string" === n
        ? (0, a.jsx)(c.ksK, {
              label: t,
              value: l,
              onChange: (e) => r(e),
          })
        : "number" === n
          ? (0, a.jsx)(c.ksK, {
                type: "number",
                label: t,
                value: l,
                onChange: (e) => r(parseInt(e)),
            })
          : "boolean" === n
            ? (0, a.jsx)(i.dOG, {
                  label: t,
                  checked: l,
                  onChange: (e) => r(e),
              })
            : "trigger" === n
              ? (0, a.jsx)(i.$nd, {
                    text: "Trigger ".concat(t),
                    onClick: () => r(Number.isSafeInteger(l) ? l + 1 : 1),
                })
              : "image" === n
                ? (0, a.jsx)(c.ksK, {
                      label: t,
                      value: l,
                      onChange: (e) => r(e),
                  })
                : "color" === n
                  ? (0, a.jsx)(c.ZiE, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => r(e),
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
                    ? (0, a.jsx)(c.ZiE, {
                          selectionMode: "single",
                          label: t,
                          value: l,
                          onSelectionChange: (e) => r(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: o.map((e) => ({
                              label: e,
                              value: e,
                              id: e,
                          })),
                      })
                    : null;
}

function p(e) {
    var t;
    let { riveName: n, onRiveLoad: s } = e,
        d = null == (t = r[n]) ? void 0 : t.riveSrc,
        u = null == d,
        m = l.useRef(null),
        p = (0, c.GyQ)(d);
    return (0, a.jsxs)(
        i.BJc,
        {
            gap: 8,
            children: [
                (0, a.jsx)("label", {
                    children: n,
                }),
                (0, a.jsxs)(i.BJc, {
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
                                    null != d && (0, c.DSP)(d, n),
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
                        (0, a.jsx)(o.K0, {
                            "aria-label": "Clear override for ".concat(n),
                            onClick: () => {
                                null != m.current && (m.current.value = ""),
                                    null != d && (0, c.DSP)(d, null),
                                    null == s || s(null);
                            },
                            icon: c.ucK,
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
