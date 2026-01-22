n.d(t, {
    A: () => y,
    L: () => j,
}),
    n(747238),
    n(896048);
var i,
    r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    c = n.n(o),
    d = n(397927),
    u = n(240248),
    b = n(946274),
    f = n(652215),
    p = n(985018),
    m = n(315628);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function j(e) {
    let { className: t, icon: n = null } = e;
    return (0, r.jsx)(d.NPJ, {
        theme: f.NJ8.LIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: s()(m.XD, t, e),
                children: n,
            }),
    });
}
class O extends (i = l.PureComponent) {
    handleExternalFileChange(e) {
        c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"),
            this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let t,
            n,
            i,
            l,
            {
                image: a,
                hint: o,
                name: c,
                makeURL: g,
                disabled: O,
                onChange: y,
                showIcon: A,
                showIconDisabled: v,
                className: N,
                imageClassName: E,
                iconClassName: T,
                iconWrapperClassName: w,
                icon: C,
                hideSize: S,
                imageStyle: _,
                showRemoveButton: I,
                maxFileSizeBytes: P,
                onFileSizeError: k,
                onOpenImageSelectModal: R,
                "aria-label": L,
            } = this.props;
        if (
            (null != (t = null != a && /^data:/.test(a) ? a : g(a))
                ? (n = 'url("'.concat(t, '")'))
                : null != c &&
                  (i = (0, r.jsx)(d.Heading, {
                      variant: "heading-xxl/normal",
                      color: "always-white",
                      className: m.nX,
                      children: (0, u.oN)(c),
                  })),
            O)
        )
            return (0, r.jsx)("div", {
                className: s()(m.WY, m.r9, N),
                children: (0, r.jsxs)("div", {
                    className: s()(m.Yp, E),
                    style: x(h({}, _), {
                        backgroundImage: n,
                    }),
                    children: [
                        i,
                        v &&
                            (0, r.jsx)("div", {
                                className: s()(m.XD, m.$N, T),
                                children: C,
                            }),
                    ],
                }),
            });
        null != a
            ? (l = (0, r.jsx)(d.MzZ, {
                  className: m.DT,
                  onClick: this.handleRemove,
                  children: p.intl.string(p.t.N86XcP),
              }))
            : S ||
              (l = (0, r.jsx)("small", {
                  className: m.UZ,
                  children: p.intl.format(p.t.AH4c7Y, {
                      size: f.eQT,
                  }),
              }));
        let M = null != (e = null != L ? L : o) ? e : p.intl.string(p.t["Ge+941"]);
        return (0, r.jsxs)("div", {
            className: s()(m.WY, N),
            children: [
                (0, r.jsx)(d.vN3, {
                    within: !0,
                    children: (0, r.jsxs)("div", {
                        className: A ? s()(m.U1, w) : void 0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s()(m.Yp, E),
                                style: x(h({}, _), {
                                    backgroundImage: n,
                                }),
                                children: [
                                    (0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i,
                                    }),
                                    null != R
                                        ? (0, r.jsx)(d.DUT, {
                                              className: m.c4,
                                              "aria-label": M,
                                              onClick: R,
                                          })
                                        : (0, r.jsx)(b.Ay, {
                                              ref: this.inputRef,
                                              onChange: y,
                                              className: m.c4,
                                              "aria-label": M,
                                              tabIndex: 0,
                                              maxFileSizeBytes: P,
                                              onFileSizeError: k,
                                          }),
                                ],
                            }),
                            null != o &&
                                (0, r.jsx)("div", {
                                    className: m.$J,
                                    "aria-hidden": "true",
                                    children: o,
                                }),
                            A &&
                                (0, r.jsx)(j, {
                                    className: T,
                                    icon: C,
                                }),
                        ],
                    }),
                }),
                I ? l : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "inputRef", l.createRef()),
            g(this, "handleRemove", () => {
                this.props.onChange(null);
            });
    }
}
g(O, "defaultProps", {
    name: "",
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null,
});
let y = O;
