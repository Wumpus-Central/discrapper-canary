n.d(t, {
    S: () => j,
    Z: () => O,
}),
    n(35282),
    n(388685);
var i,
    r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    c = n.n(s),
    d = n(481060),
    u = n(624138),
    p = n(813197),
    m = n(981631),
    b = n(388032),
    g = n(270956);
function f(e, t, n) {
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
                f(e, t, n[t]);
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
    return (0, r.jsx)(d.f6W, {
        theme: m.BRd.LIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(g.imageUploaderIcon, t, e),
                children: n,
            }),
    });
}
class v extends (i = l.PureComponent) {
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
                hint: s,
                name: c,
                makeURL: f,
                disabled: v,
                onChange: O,
                showIcon: y,
                showIconDisabled: _,
                className: C,
                imageClassName: N,
                iconClassName: S,
                iconWrapperClassName: I,
                icon: w,
                hideSize: E,
                imageStyle: P,
                showRemoveButton: T,
                maxFileSizeBytes: Z,
                onFileSizeError: k,
                onOpenImageSelectModal: A,
                "aria-label": D,
            } = this.props;
        if (
            (null != (t = null != a && /^data:/.test(a) ? a : f(a))
                ? (n = 'url("'.concat(t, '")'))
                : null != c &&
                  (i = (0, r.jsx)(d.Heading, {
                      variant: "heading-xxl/normal",
                      color: "always-white",
                      className: g.imageUploaderAcronym,
                      children: (0, u.Zg)(c),
                  })),
            v)
        )
            return (0, r.jsx)("div", {
                className: o()(g.imageUploader, g.disabled, C),
                children: (0, r.jsxs)("div", {
                    className: o()(g.imageUploaderInner, N),
                    style: x(h({}, P), { backgroundImage: n }),
                    children: [
                        i,
                        _ &&
                            (0, r.jsx)("div", {
                                className: o()(g.imageUploaderIcon, g.imageUploaderIconDisabled, S),
                                children: w,
                            }),
                    ],
                }),
            });
        null != a
            ? (l = (0, r.jsx)(d.Anchor, {
                  className: g.removeButton,
                  onClick: this.handleRemove,
                  children: b.intl.string(b.t.N86XcP),
              }))
            : E ||
              (l = (0, r.jsx)("small", {
                  className: g.sizeInfo,
                  children: b.intl.format(b.t.AH4c7Y, { size: m.IXf }),
              }));
        let R = null != (e = null != D ? D : s) ? e : b.intl.string(b.t["Ge+941"]);
        return (0, r.jsxs)("div", {
            className: o()(g.imageUploader, C),
            children: [
                (0, r.jsx)(d.tEY, {
                    within: !0,
                    children: (0, r.jsxs)("div", {
                        className: y ? o()(g.imageUploaderIconWrapper, I) : void 0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: o()(g.imageUploaderInner, N),
                                style: x(h({}, P), { backgroundImage: n }),
                                children: [
                                    (0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i,
                                    }),
                                    null != A
                                        ? (0, r.jsx)(d.P3F, {
                                              className: g.imageUploaderFileInput,
                                              "aria-label": R,
                                              onClick: A,
                                          })
                                        : (0, r.jsx)(p.ZP, {
                                              ref: this.inputRef,
                                              onChange: O,
                                              className: g.imageUploaderFileInput,
                                              "aria-label": R,
                                              tabIndex: 0,
                                              maxFileSizeBytes: Z,
                                              onFileSizeError: k,
                                          }),
                                ],
                            }),
                            null != s &&
                                (0, r.jsx)("div", {
                                    className: g.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: s,
                                }),
                            y &&
                                (0, r.jsx)(j, {
                                    className: S,
                                    icon: w,
                                }),
                        ],
                    }),
                }),
                T ? l : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "inputRef", l.createRef()),
            f(this, "handleRemove", () => {
                this.props.onChange(null);
            });
    }
}
f(v, "defaultProps", {
    name: "",
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null,
});
let O = v;
