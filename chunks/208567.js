n.d(t, {
    S: () => f,
    Z: () => v
}),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(512722),
    d = n.n(o),
    c = n(481060),
    u = n(624138),
    m = n(813197),
    h = n(981631),
    x = n(388032),
    g = n(85413);
function p(e, t, n) {
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
function f(e) {
    let { className: t, icon: n = null } = e;
    return (0, l.jsx)(c.f6W, {
        theme: h.BRd.LIGHT,
        children: (e) =>
            (0, l.jsx)('div', {
                className: s()(g.imageUploaderIcon, t, e),
                children: n
            })
    });
}
class b extends (i = a.PureComponent) {
    handleExternalFileChange(e) {
        d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let t, n, i, a;
        let { image: r, hint: o, name: d, makeURL: p, disabled: b, onChange: v, showIcon: _, showIconDisabled: N, className: j, imageClassName: C, iconClassName: I, iconWrapperClassName: Z, icon: T, hideSize: E, imageStyle: S, showRemoveButton: y, maxFileSizeBytes: A, onFileSizeError: k, onOpenImageSelectModal: R, 'aria-label': L } = this.props;
        if (
            (null != (t = null != r && /^data:/.test(r) ? r : p(r))
                ? (n = 'url("'.concat(t, '")'))
                : null != d &&
                  (i = (0, l.jsx)(c.X6q, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: g.imageUploaderAcronym,
                      children: (0, u.Zg)(d)
                  })),
            b)
        )
            return (0, l.jsx)('div', {
                className: s()(g.imageUploader, g.disabled, j),
                children: (0, l.jsxs)('div', {
                    className: s()(g.imageUploaderInner, C),
                    style: {
                        ...S,
                        backgroundImage: n
                    },
                    children: [
                        i,
                        N &&
                            (0, l.jsx)('div', {
                                className: s()(g.imageUploaderIcon, g.imageUploaderIconDisabled, I),
                                children: T
                            })
                    ]
                })
            });
        null != r
            ? (a = (0, l.jsx)(c.eee, {
                  className: g.removeButton,
                  onClick: this.handleRemove,
                  children: x.intl.string(x.t.N86XcH)
              }))
            : E ||
              (a = (0, l.jsx)('small', {
                  className: g.sizeInfo,
                  children: x.intl.format(x.t.AH4c7e, { size: h.IXf })
              }));
        let O = null !== (e = null != L ? L : o) && void 0 !== e ? e : x.intl.string(x.t['Ge+94+']);
        return (0, l.jsxs)('div', {
            className: s()(g.imageUploader, j),
            children: [
                (0, l.jsx)(c.tEY, {
                    within: !0,
                    children: (0, l.jsxs)('div', {
                        className: _ ? s()(g.imageUploaderIconWrapper, Z) : void 0,
                        children: [
                            (0, l.jsxs)('div', {
                                className: s()(g.imageUploaderInner, C),
                                style: {
                                    ...S,
                                    backgroundImage: n
                                },
                                children: [
                                    (0, l.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: i
                                    }),
                                    null != R
                                        ? (0, l.jsx)(c.P3F, {
                                              className: g.imageUploaderFileInput,
                                              'aria-label': O,
                                              onClick: R
                                          })
                                        : (0, l.jsx)(m.ZP, {
                                              ref: this.inputRef,
                                              onChange: v,
                                              className: g.imageUploaderFileInput,
                                              'aria-label': O,
                                              tabIndex: 0,
                                              maxFileSizeBytes: A,
                                              onFileSizeError: k
                                          })
                                ]
                            }),
                            null != o &&
                                (0, l.jsx)('div', {
                                    className: g.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: o
                                }),
                            _ &&
                                (0, l.jsx)(f, {
                                    className: I,
                                    icon: T
                                })
                        ]
                    })
                }),
                y ? a : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'inputRef', a.createRef()),
            p(this, 'handleRemove', () => {
                this.props.onChange(null);
            });
    }
}
p(b, 'defaultProps', {
    name: '',
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
});
let v = b;
