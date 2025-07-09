(n.d(t, {
    S: () => b,
    Z: () => y
}),
    n(35282),
    n(388685));
var i,
    l = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    c = n.n(o),
    d = n(481060),
    u = n(624138),
    h = n(813197),
    m = n(981631),
    g = n(388032),
    p = n(348563);
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
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
function b(e) {
    let { className: t, icon: n = null } = e;
    return (0, l.jsx)(d.f6W, {
        theme: m.BRd.LIGHT,
        children: (e) =>
            (0, l.jsx)('div', {
                className: a()(p.imageUploaderIcon, t, e),
                children: n
            })
    });
}
class v extends (i = r.PureComponent) {
    handleExternalFileChange(e) {
        (c()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e));
    }
    render() {
        var e;
        let t,
            n,
            i,
            r,
            { image: s, hint: o, name: c, makeURL: f, disabled: v, onChange: y, showIcon: C, showIconDisabled: N, className: S, imageClassName: O, iconClassName: E, iconWrapperClassName: T, icon: w, hideSize: Z, imageStyle: R, showRemoveButton: I, maxFileSizeBytes: _, onFileSizeError: P, onOpenImageSelectModal: A, 'aria-label': L } = this.props;
        if (
            (null != (t = null != s && /^data:/.test(s) ? s : f(s))
                ? (n = 'url("'.concat(t, '")'))
                : null != c &&
                  (i = (0, l.jsx)(d.X6q, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: p.imageUploaderAcronym,
                      children: (0, u.Zg)(c)
                  })),
            v)
        )
            return (0, l.jsx)('div', {
                className: a()(p.imageUploader, p.disabled, S),
                children: (0, l.jsxs)('div', {
                    className: a()(p.imageUploaderInner, O),
                    style: j(x({}, R), { backgroundImage: n }),
                    children: [
                        i,
                        N &&
                            (0, l.jsx)('div', {
                                className: a()(p.imageUploaderIcon, p.imageUploaderIconDisabled, E),
                                children: w
                            })
                    ]
                })
            });
        null != s
            ? (r = (0, l.jsx)(d.eee, {
                  className: p.removeButton,
                  onClick: this.handleRemove,
                  children: g.intl.string(g.t.N86XcH)
              }))
            : Z ||
              (r = (0, l.jsx)('small', {
                  className: p.sizeInfo,
                  children: g.intl.format(g.t.AH4c7e, { size: m.IXf })
              }));
        let D = null != (e = null != L ? L : o) ? e : g.intl.string(g.t['Ge+94+']);
        return (0, l.jsxs)('div', {
            className: a()(p.imageUploader, S),
            children: [
                (0, l.jsx)(d.tEY, {
                    within: !0,
                    children: (0, l.jsxs)('div', {
                        className: C ? a()(p.imageUploaderIconWrapper, T) : void 0,
                        children: [
                            (0, l.jsxs)('div', {
                                className: a()(p.imageUploaderInner, O),
                                style: j(x({}, R), { backgroundImage: n }),
                                children: [
                                    (0, l.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: i
                                    }),
                                    null != A
                                        ? (0, l.jsx)(d.P3F, {
                                              className: p.imageUploaderFileInput,
                                              'aria-label': D,
                                              onClick: A
                                          })
                                        : (0, l.jsx)(h.ZP, {
                                              ref: this.inputRef,
                                              onChange: y,
                                              className: p.imageUploaderFileInput,
                                              'aria-label': D,
                                              tabIndex: 0,
                                              maxFileSizeBytes: _,
                                              onFileSizeError: P
                                          })
                                ]
                            }),
                            null != o &&
                                (0, l.jsx)('div', {
                                    className: p.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: o
                                }),
                            C &&
                                (0, l.jsx)(b, {
                                    className: E,
                                    icon: w
                                })
                        ]
                    })
                }),
                I ? r : null
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            f(this, 'inputRef', r.createRef()),
            f(this, 'handleRemove', () => {
                this.props.onChange(null);
            }));
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
let y = v;
