n.d(t, {
    S: () => j,
    Z: () => N
}),
    n(301563),
    n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    c = n.n(s),
    d = n(481060),
    u = n(624138),
    p = n(813197),
    m = n(981631),
    b = n(388032),
    g = n(38901);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
function j(e) {
    let { className: t, icon: n = null } = e;
    return (0, i.jsx)(d.f6W, {
        theme: m.BRd.LIGHT,
        children: (e) =>
            (0, i.jsx)('div', {
                className: a()(g.imageUploaderIcon, t, e),
                children: n
            })
    });
}
class v extends (r = l.PureComponent) {
    handleExternalFileChange(e) {
        c()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let t, n, r, l;
        let { image: o, hint: s, name: c, makeURL: f, disabled: v, onChange: N, showIcon: O, showIconDisabled: y, className: _, imageClassName: C, iconClassName: I, iconWrapperClassName: E, icon: S, hideSize: P, imageStyle: w, showRemoveButton: Z, maxFileSizeBytes: T, onFileSizeError: W, onOpenImageSelectModal: k, 'aria-label': A } = this.props;
        if (
            (null != (t = null != o && /^data:/.test(o) ? o : f(o))
                ? (n = 'url("'.concat(t, '")'))
                : null != c &&
                  (r = (0, i.jsx)(d.X6q, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: g.imageUploaderAcronym,
                      children: (0, u.Zg)(c)
                  })),
            v)
        )
            return (0, i.jsx)('div', {
                className: a()(g.imageUploader, g.disabled, _),
                children: (0, i.jsxs)('div', {
                    className: a()(g.imageUploaderInner, C),
                    style: x(h({}, w), { backgroundImage: n }),
                    children: [
                        r,
                        y &&
                            (0, i.jsx)('div', {
                                className: a()(g.imageUploaderIcon, g.imageUploaderIconDisabled, I),
                                children: S
                            })
                    ]
                })
            });
        null != o
            ? (l = (0, i.jsx)(d.eee, {
                  className: g.removeButton,
                  onClick: this.handleRemove,
                  children: b.NW.string(b.t.N86XcH)
              }))
            : P ||
              (l = (0, i.jsx)('small', {
                  className: g.sizeInfo,
                  children: b.NW.format(b.t.AH4c7e, { size: m.IXf })
              }));
        let D = null !== (e = null != A ? A : s) && void 0 !== e ? e : b.NW.string(b.t['Ge+94+']);
        return (0, i.jsxs)('div', {
            className: a()(g.imageUploader, _),
            children: [
                (0, i.jsx)(d.tEY, {
                    within: !0,
                    children: (0, i.jsxs)('div', {
                        className: O ? a()(g.imageUploaderIconWrapper, E) : void 0,
                        children: [
                            (0, i.jsxs)('div', {
                                className: a()(g.imageUploaderInner, C),
                                style: x(h({}, w), { backgroundImage: n }),
                                children: [
                                    (0, i.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: r
                                    }),
                                    null != k
                                        ? (0, i.jsx)(d.P3F, {
                                              className: g.imageUploaderFileInput,
                                              'aria-label': D,
                                              onClick: k
                                          })
                                        : (0, i.jsx)(p.ZP, {
                                              ref: this.inputRef,
                                              onChange: N,
                                              className: g.imageUploaderFileInput,
                                              'aria-label': D,
                                              tabIndex: 0,
                                              maxFileSizeBytes: T,
                                              onFileSizeError: W
                                          })
                                ]
                            }),
                            null != s &&
                                (0, i.jsx)('div', {
                                    className: g.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: s
                                }),
                            O &&
                                (0, i.jsx)(j, {
                                    className: I,
                                    icon: S
                                })
                        ]
                    })
                }),
                Z ? l : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'inputRef', l.createRef()),
            f(this, 'handleRemove', () => {
                this.props.onChange(null);
            });
    }
}
f(v, 'defaultProps', {
    name: '',
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
});
let N = v;
