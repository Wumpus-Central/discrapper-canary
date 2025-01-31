l.d(n, {
    S: () => j,
    Z: () => f
}),
    l(47120);
var t,
    i = l(200651),
    a = l(192379),
    r = l(120356),
    s = l.n(r),
    o = l(512722),
    d = l.n(o),
    c = l(481060),
    u = l(624138),
    x = l(813197),
    m = l(981631),
    h = l(388032),
    v = l(640041);
function g(e, n, l) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = l),
        e
    );
}
function j(e) {
    let { className: n, icon: l = null } = e;
    return (0, i.jsx)(c.f6W, {
        theme: m.BRd.LIGHT,
        children: (e) =>
            (0, i.jsx)('div', {
                className: s()(v.imageUploaderIcon, n, e),
                children: l
            })
    });
}
class N extends (t = a.PureComponent) {
    handleExternalFileChange(e) {
        d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let n, l, t, a;
        let { image: r, hint: o, name: d, makeURL: g, disabled: N, onChange: f, showIcon: p, showIconDisabled: E, className: C, imageClassName: I, iconClassName: T, iconWrapperClassName: Z, icon: S, hideSize: b, imageStyle: y, showRemoveButton: k, maxFileSizeBytes: _, onFileSizeError: z, onOpenImageSelectModal: R, 'aria-label': A } = this.props;
        if (
            (null != (n = null != r && /^data:/.test(r) ? r : g(r))
                ? (l = 'url("'.concat(n, '")'))
                : null != d &&
                  (t = (0, i.jsx)(c.X6q, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: v.imageUploaderAcronym,
                      children: (0, u.Zg)(d)
                  })),
            N)
        )
            return (0, i.jsx)('div', {
                className: s()(v.imageUploader, v.disabled, C),
                children: (0, i.jsxs)('div', {
                    className: s()(v.imageUploaderInner, I),
                    style: {
                        ...y,
                        backgroundImage: l
                    },
                    children: [
                        t,
                        E &&
                            (0, i.jsx)('div', {
                                className: s()(v.imageUploaderIcon, v.imageUploaderIconDisabled, T),
                                children: S
                            })
                    ]
                })
            });
        null != r
            ? (a = (0, i.jsx)(c.eee, {
                  className: v.removeButton,
                  onClick: this.handleRemove,
                  children: h.intl.string(h.t.N86XcH)
              }))
            : b ||
              (a = (0, i.jsx)('small', {
                  className: v.sizeInfo,
                  children: h.intl.format(h.t.AH4c7e, { size: m.IXf })
              }));
        let D = null !== (e = null != A ? A : o) && void 0 !== e ? e : h.intl.string(h.t['Ge+94+']);
        return (0, i.jsxs)('div', {
            className: s()(v.imageUploader, C),
            children: [
                (0, i.jsx)(c.tEY, {
                    within: !0,
                    children: (0, i.jsxs)('div', {
                        className: p ? s()(v.imageUploaderIconWrapper, Z) : void 0,
                        children: [
                            (0, i.jsxs)('div', {
                                className: s()(v.imageUploaderInner, I),
                                style: {
                                    ...y,
                                    backgroundImage: l
                                },
                                children: [
                                    (0, i.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: t
                                    }),
                                    null != R
                                        ? (0, i.jsx)(c.P3F, {
                                              className: v.imageUploaderFileInput,
                                              'aria-label': D,
                                              onClick: R
                                          })
                                        : (0, i.jsx)(x.ZP, {
                                              ref: this.inputRef,
                                              onChange: f,
                                              className: v.imageUploaderFileInput,
                                              'aria-label': D,
                                              tabIndex: 0,
                                              maxFileSizeBytes: _,
                                              onFileSizeError: z
                                          })
                                ]
                            }),
                            null != o &&
                                (0, i.jsx)('div', {
                                    className: v.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: o
                                }),
                            p &&
                                (0, i.jsx)(j, {
                                    className: T,
                                    icon: S
                                })
                        ]
                    })
                }),
                k ? a : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'inputRef', a.createRef()),
            g(this, 'handleRemove', () => {
                this.props.onChange(null);
            });
    }
}
g(N, 'defaultProps', {
    name: '',
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
});
let f = N;
